//
// Created by kim yang on 2020/8/2.
// Copyright (c) Kim Yang All rights reserved.
//

//链式队列（带头节点版本）

#include <stdio.h>
#include <stdlib.h>

/**定义模块**/
typedef struct LinkNode {
    int data;
    struct LinkNode *next;
} LinkNode;

typedef struct {
    LinkNode *front, *rear;
} LinkQueue;

//函数声明
void InitQueue(LinkQueue &Q);//初始化
bool EnQueue(LinkQueue &Q, int x);//入队操作
bool DeQueue(LinkQueue &Q, int &x);//出队
bool GetHead(LinkQueue Q, int &x);//获取头元素
bool QueueEmpty(LinkQueue Q);//判空
/**定义模块**/

/**实现模块**/
void InitQueue(LinkQueue &Q) {
    Q.front = Q.rear = (LinkNode *) malloc(sizeof(LinkNode));
    //初始化时，front 、rear 都指向头节点
    Q.front->next = NULL;
}

bool EnQueue(LinkQueue &Q, int x) {
    //判满？链式存储一般不需要判满，除非内存不足
    LinkNode *s = (LinkNode *) malloc(sizeof(LinkNode));
    if (s == NULL)return false;
    s->data = x;
    s->next = NULL;
    Q.rear->next = s;//新节点插入到rear之后
    Q.rear = s;//修改表尾指针
    return true;
}

bool DeQueue(LinkQueue &Q, int &x) {
    if (Q.front == Q.rear)return false;//队空
    LinkNode *p = Q.front->next;//用指针p记录队头元素
    x = p->data;//用x变量返回队头元素
    Q.front->next = p->next;//修改头节点的next指针
    if (Q.rear == p)//此次是最后一个节点出队
        Q.rear = Q.front;//修改rear指针，思考一下为什么？
    free(p); //释放节点空间
    return true;
}

bool GetHead(LinkQueue Q, int &x) {
    if (Q.front == Q.rear)return false;//队空
    x = Q.front->next->data;//用x变量返回队头元素
    return true;
}

bool QueueEmpty(LinkQueue Q) {
    return Q.front == Q.rear ? true : false;
}
/**实现模块**/

/**测试模块**/
void PrintQueue(LinkQueue Q) {
    printf("开始打印队列\n");
    int i = 0;
    while (Q.front != Q.rear) {
        Q.front = Q.front->next;
        printf("Q[%d]=%d\n", i++, Q.front->data);
    }
    printf("打印完毕！\n");
}

//测试函数
void TestLinkQueue() {
    printf("开始测试！\n");
    LinkQueue Q;
    InitQueue(Q);
    if (EnQueue(Q, 1)) {
        printf("入队成功啦！\n");
    } else {
        printf("入队失败了\n");
    }
    if (EnQueue(Q, 2)) {
        printf("入队又成功啦！\n");
    } else {
        printf("入队又失败了\n");
    }
    PrintQueue(Q);
    int x;
    if (DeQueue(Q, x)) {
        printf("出队成功，弹出的元素为:%d\n", x);
    } else {
        printf("出队失败了，再检出一下吧！\n");
    }
    if (GetHead(Q, x)) {
        printf("获取队头成功！,队头元素为：%d\n", x);
    } else {
        printf("获取队头元素失败！\n");
    }
    if (DeQueue(Q, x)) {
        printf("出队成功，弹出的元素为:%d\n", x);
    } else {
        printf("出队失败了，再检出一下吧！\n");
    }
    if (QueueEmpty(Q)) {
        printf("队空啦\n");
    } else {
        printf("队非空\n");
    }

    printf("测试结束!\n");
}
/**测试模块**/

int main() {
    TestLinkQueue();
    return 0;
}