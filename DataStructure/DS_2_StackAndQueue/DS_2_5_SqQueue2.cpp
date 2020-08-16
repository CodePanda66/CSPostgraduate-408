//
// Created by kim yang on 2020/8/1.
// Copyright (c) Kim Yang All rights reserved.
//

//循环顺序队列的第二种实现方式

#include <stdio.h>

/**定义模块**/
#define MaxSize 10

typedef struct {
    int data[MaxSize];//
    int front,rear;//对头指针和队尾指针
    int tag;//利用tag变量记录最后一次操作是什么，0为删除，1为插入,并用作判满的条件！有了tag就不会浪费一个存储空间
}SqQueue;

//函数声明
void InitQueue(SqQueue &Q);//初始化
bool QueueEmpty(SqQueue Q);//判空
bool EnQueue(SqQueue &Q,int t);//入队操作
bool DeQueue(SqQueue &Q,int &x);//出队操作
bool GetHead(SqQueue Q,int &x);//获取队头元素,用x返回
/**定义模块**/

/**实现模块**/


void InitQueue(SqQueue &Q) {
    Q.rear=Q.front=0;//初始化时，队头队尾都指向0
    Q.tag=0;//初始化最后一次的操作状态
}

bool QueueEmpty(SqQueue Q) {
    if(Q.front==Q.rear&&Q.tag==0)//有了tag，条件不一样了
        return true;
    else
        return true;
}

bool EnQueue(SqQueue &Q, int t) {
    if(Q.front==Q.rear&&Q.tag==1)return false;//队满，注意这里的判满条件
    Q.data[Q.rear]=t;
    Q.rear=(Q.rear+1)%MaxSize;//通过取余操作让整个队列循环起来
    Q.tag=1;
    return true;
}

bool DeQueue(SqQueue &Q, int &x) {
    if(Q.rear==Q.front&&Q.tag==0)return false;//队空
    x=Q.data[Q.front];
    Q.front=(Q.front+1)%MaxSize;
    Q.tag==0;
    return true;
}

bool GetHead(SqQueue Q, int &x) {
    if (Q.rear==Q.front&&Q.tag==0)return false;
    x=Q.data[Q.front];
    return true;
}
/**实现模块**/

/**测试模块**/
//打印整个队列
void PrintQueue(SqQueue Q){
    printf("开始打印队列\n");
    while(Q.front!=Q.rear){
        printf("Q[%d]=%d\n",Q.front,Q.data[Q.front]);
        Q.front=(Q.front+1)%MaxSize;
    }
    printf("打印完毕！\n");
}

//测试
void TestQueue(){
    printf("开始测试！\n");
    SqQueue Q;
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

    printf("结束测试！\n");
}
/**测试模块**/

int main(){
    TestQueue();
    return 0;
}