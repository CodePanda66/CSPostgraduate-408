//
// Created by kim on 2020/6/19.
// Copyright (c) Kim Yang All rights reserved.
//

//带头节点的单链表

#include <stdio.h>
#include <stdlib.h>

/**定义模块**/

typedef struct LNode {
    int data;
    LNode *next;
} LNode, *LinkList;

//函数定义
bool InitList(LinkList &L);     //初始化
bool Empty(LinkList L);         //盘空
bool ListInsert(LinkList &L, int i, int e);//按位插入
bool InsertNextNode(LNode *p, int e);//指定节点的后插操作
bool InsertPriorNode(LNode *p, int e);//指定节点的前插操作————先完成后插，再交换数据以实现前插
bool ListDelete(LinkList &L, int i, int &e);//按指定位序删除节点并返回其值
bool DeleteNode(LNode *p);//删除指定节点
/**定义模块**/


/**实现模块**/

//初试化(带有头节点)
bool InitList(LinkList &L) {
    L = (LNode *) malloc(sizeof(LNode));//分配一个头节点
    if (L == NULL)
        return false;//头节点分配失败，可能是内存不足
    L->next = NULL;//头节点之后暂时没有节点，头节点也不存放数据
    return true;
}

//判空
bool Empty(LinkList L) {
//    if(L->next==NULL)
//        return true;
//    else
//        return false;
    return (L->next == NULL);
}

//按位插入
bool ListInsert(LinkList &L, int i, int e) {
    if (i < 1)return false;//判断位序i是否合法
    LNode *p;//指针指向当前扫面到的节点
    int j = 0;//记录p指向的节点的位序
    p = L;//L指向头节点，从头开始
    while (p != NULL && j < i - 1) {
        //循环扫描
        p = p->next;
        j++;
    }
    if (p == NULL) //i值超过来表长，不合法
        return false;
    LNode *s = (LNode *) malloc(sizeof(LNode));
    s->data = e;
    //下面的顺序不可交换
    s->next = p->next;
    p->next = s;
    return true;
}

//指定节点的后插操作
bool InsertNextNode(LNode *p, int e) {
    if (p == NULL)
        return false;//判断指定节点是否存在
    LNode *s = (LNode *) malloc(sizeof(LNode));
    if (s == NULL)return false;//分配内存失败
    s->data = e;
    s->next = p->next;
    p->next = s;
    return true;
}

//指定节点的前插操作
//先完成后插，再交换数据以实现前插
bool InsertPriorNode(LNode *p, int e) {
    if (p == NULL)return false;
    LNode *s = (LNode *) malloc(sizeof(LNode));
    if (s == NULL)return false;
    s->next = p->next;
    p->next = s;
    s->data = p->data;
    p->data = e;
    return true;
}

//按指定位序删除节点并返回其值
bool ListDelete(LinkList &L, int i, int &e) {
    if (i < 1)return false;
    LNode *p;
    int j = 0;
    p = L;
    while (p != NULL && j < i - 1) {
        p = p->next;
        j++;
    }
    LNode *q = p->next;
    e = q->data;
    p->next = q->next;
    free(q);
    return true;
}

//删除指定节点
bool DeleteNode(LNode *p) {

}

/**实现模块**/

/**测试模块**/
//Test
void TestPrint(bool test, char about[]) {
    if (test)
        printf("%s成功\n", about);
    else
        printf("%s失败\n", about);
}

void PrintList(LinkList L) {
    //循环打印整个链表
    LNode *p = L->next;//扫描指针
    int j = 0;
    if (p == NULL)printf("这是一个空表\n");
    while (p != NULL) {
        printf("LinkList[%d]=%d\n", j, p->data);
        p = p->next;
        j++;
    }

}

void TestModule() {
    LinkList L;
    TestPrint(InitList(L), "初始化");
    PrintList(L);
    TestPrint(ListInsert(L, 1, 3), "按位插入");
    PrintList(L);
    int e;
    TestPrint(ListDelete(L, 1, e), "删除");
    PrintList(L);
    printf("被删除的数据是：%d\n", e);
}

/**测试模块**/

int main() {
    TestModule();
    return 0;
}