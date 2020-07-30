//
// Created by kim on 2020/6/20.
//

//循环单链表
#include <stdio.h>
#include <stdlib.h>

typedef struct LNode{
    int data;
    struct LNode *next;
}LNode,*LinkList;

//初始化一个循环单链表
bool InitRLinkList(LinkList &L){
    L=(LNode *)malloc(sizeof(LNode));//分配一个头节点
    if (L=NULL)
        return false;//内存不足，分配失败；
    L->next=L;//头节点nex指向头节点，以此形成循环链表
    return true;
}

//判断P是不是表尾指针
bool IsTail(LinkList L,LNode *p){
    return (p->next==L);
}

int  main(){

    return 0;
}
