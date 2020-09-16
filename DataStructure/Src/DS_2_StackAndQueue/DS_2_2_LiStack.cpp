//
// Created by kim on 2020/7/28.
// Copyright (c) Kim Yang All rights reserved.
//

//链栈的实现
#include <stdio.h>
#include <stdlib.h>

/**定义模块**/
# define  MaxSize 10
typedef struct LinkNode {
    int data;
    struct LinkNode *next;
} *LinkStack;

//函数声明
bool InitStack(LinkStack &LS);//初始化
bool Push(LinkStack &LS, int t);//入栈 参考头插法建立单链表
bool Pop(LinkStack &LS, int &x);//出栈,并打印出栈顶元素
bool GetTop(LinkStack LS, int &x);//读取栈顶元素，栈

/**定义模块**/

/**实现模块**/

bool InitStack(LinkStack &LS) {
    LS = (LinkNode *) malloc(sizeof(LinkNode));//分配一个头节点
    if (LS == NULL) {
        return false;
    }
    LS->next = NULL;
    return true;
}

bool Push(LinkStack &LS, int t) {
    //入站不需要检查
    LinkNode *s = (LinkNode *) malloc(sizeof(LinkNode));
    if (s == NULL)return false;
    s->data = t;
    s->next = LS->next;
    LS->next = s;
    return true;
}

bool Pop(LinkStack &LS, int &x) {
    //判断
    if (LS->next == NULL)return false;//栈空,这里的条件
    LinkNode *q;
    q = LS->next;
    LS->next = q->next;
    x = q->data;
    free(q);
    return true;
}

bool GetTop(LinkStack LS, int &x) {
    if (LS == NULL)return false;
    x = LS->next->data;
    return true;
}

/**实现模块**/

/**测试模块**/
//打印整个栈,栈
void PrintStack(LinkStack LS) {
    printf("从栈顶元素开始，栈如下：\n");
    int i = 0;
    int x;
    LinkNode *p = LS->next;
    while (p != NULL) {//注意判空的条件
        printf("S[%d]=%d\n", i, p->data);
        p = p->next;
        i++;
    }
    printf("栈打印完毕\n");
}

void testLinkStack() {
    printf("开始测试\n");
    LinkStack S;
    InitStack(S);
    printf("测试第一个栈\n");
    if (Push(S, 1)) {
        printf("入栈成功啦！\n");
    } else {
        printf("入栈失败了\n");
    }
    if (Push(S, 2)) {
        printf("入栈又成功啦！\n");
    } else {
        printf("入栈又失败了\n");
    }
    PrintStack(S);
    int x;
    if (Pop(S, x)) {
        printf("出栈成功，弹出的元素为:%d\n", x);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }

    PrintStack(S);
    int x1;
    if (GetTop(S, x1)) {
        printf("读取栈顶元素成功了，栈顶元素为：%d\n", x1);
    } else {
        printf("读取栈顶元素失败，再检查一下吧！\n");
    }

    if (Pop(S, x)) {
        printf("出栈成功，弹出的元素为:%d\n", x);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }
    if (Pop(S, x)) {
        printf("出栈成功，弹出的元素为:%d\n", x);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }

    printf("测试完毕了！\n");
}
/**测试模块**/

int main() {
    printf("Hello, LinkNode!");
    testLinkStack();
    return 0;
}