//
// Created by kim on 2020/6/20.
//

//循环双链表
#include <stdio.h>
#include <stdlib.h>

typedef struct DNode{
    int data;
    struct DNode *prior,*next;
}DNode,*DLinkList;

//初始化
bool InitRDLinkList(DLinkList &L){
    L=(DNode *)malloc(sizeof(DNode));//分配头节点
    if (L==NULL)return false;
    L->prior=L;
    L->next=L;//循环抱住自己
    return true;
}

//判断节点p是不是循环双链表的表尾节点
bool iTail(DLinkList L,DNode *p){
    return (p->next==L);
}

//在p节点之后插入s节点
bool InsertNextDNode(DNode *p,DNode *s){
    s->next=p->next;
    p->next->prior=s;
    s->prior=p;
    p->next=s;
    return true;
}

//删除操作
bool DeleteNextDNode(DLinkList &L,DNode *p){
    DNode *q = p->next;
    p->next=q->next;
    q->next->prior=p;
    free(q);
    return true;
}

int main(){


    return 0;
}