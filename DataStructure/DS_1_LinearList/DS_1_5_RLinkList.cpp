//
// Created by kim on 2020/6/20.
// Copyright (c) Kim Yang All rights reserved.
//

//循环单链表
#include <stdio.h>
#include <stdlib.h>

/**定义模块**/

typedef struct LNode{
    int data;
    struct LNode *next;
}LNode,*LinkList;

//函数声明
bool InitRLinkList(LinkList &L);//初始化
bool IsTail(LinkList L,LNode *p);//判断P是不是表尾指针

/**定义模块**/

/**实现模块**/

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

/**实现模块**/

/**测试模块**/
void TestModule(){

}

/**测试模块**/

int  main(){
    TestModule();
    return 0;
}
