//
// Created by kim on 2020/6/28.
//

//链栈的实现
#include <stdio.h>
#include <stdlib.h>

# define  MaxSize 10
typedef struct LinkNode{
    int data;
    struct LinkNode *next;
} *LinkStack;
//从结构体的定义就可以看出来，两个共享栈的根源就在于定义两个指针

//初始化
bool InitStack(LinkStack &LS) {
   LS=(LinkNode *)malloc(sizeof(LinkNode));//分配一个头节点
   if(LS==NULL){
       return false;
   }
   LS->next=NULL;
    return true;
}

//入栈 参考头插法建立单链表
bool Push(LinkStack &LS, int t) {
   //入站不需要检查
    LinkNode *s=(LinkNode *)malloc(sizeof(LinkNode));
    if (s==NULL)return false;
    s->data=t;
    s->next=LS->next;
    LS->next=s;
    return true;
}


//出栈,并打印出栈顶元素
bool Pop(LinkStack &LS, int &x) {
    //判断
    if (LS->next==NULL)return false;//栈空,这里的条件
    LinkNode *q ;
    q=LS->next;
    LS->next=q->next;
    x=q->data;
    free(q);
    return true;
}


//读取栈顶元素，栈
bool GetTop(LinkStack LS, int &x) {
   if (LS==NULL)return false;
   x=LS->next->data;
    return true;
}



//打印整个栈,栈
void PrintStack(LinkStack LS){
    printf("从栈顶元素开始，栈如下：\n");
    int i=0;int x;
    LinkNode *p=LS->next;
    while (p!=NULL){//注意判空的条件
        printf("S[%d]=%d\n",i,p->data);
        p=p->next;
        i++;
    }
    printf("栈打印完毕\n");
}

void testLinkStack() {
    printf("开始测试\n");
    LinkStack S;
    InitStack(S);
    printf("测试第一个栈\n");
    if (Push(S,1)){
        printf("入栈成功啦！\n");
    } else{
        printf("入栈失败了\n");
    }
    if (Push(S,2)){
        printf("入栈又成功啦！\n");
    } else{
        printf("入栈又失败了\n");
    }
    PrintStack(S);
    int x;
    if (Pop(S, x)){
        printf("出栈成功，弹出的元素为:%d\n",x);
    } else{
        printf("出栈失败了，再检出一下吧！\n");
    }

    PrintStack(S);
    int x1;
    if (GetTop(S,x1)){
        printf("读取栈顶元素成功了，栈顶元素为：%d\n",x1);
    }else{
        printf("读取栈顶元素失败，再检查一下吧！\n");
    }

    if (Pop(S, x)){
        printf("出栈成功，弹出的元素为:%d\n",x);
    } else{
        printf("出栈失败了，再检出一下吧！\n");
    }
    if (Pop(S, x)){
        printf("出栈成功，弹出的元素为:%d\n",x);
    } else{
        printf("出栈失败了，再检出一下吧！\n");
    }

    printf("测试完毕了！\n");
}


int main() {
    printf("Hello, LinkNode!");
    testLinkStack();
    return 0;
}