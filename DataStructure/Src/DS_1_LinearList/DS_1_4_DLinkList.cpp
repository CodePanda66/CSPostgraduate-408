//
// Created by kim on 2020/6/20.
// Copyright (c) Kim Yang All rights reserved.
//

//带有头节点版本——双链表

#include <stdio.h>
#include <stdlib.h>

/**定义模块**/

typedef struct DNode {
    int data;//数据域
    struct DNode *prior, *next;//前指针和后指针
} DNode, *DLinkList;

//函数声明
bool InitDLinkList(DLinkList &L);//初始化
bool Empty(DLinkList L);//判空
bool InsertNextElem(DNode *p, DNode *s);//指定节点的后插操作
bool DeleteNextNode(DNode *p);//删除P节点的后继节点
bool DestroyList(DLinkList &L);//销毁整个表
bool PrintNextElems(DNode *p);//从P点向后遍历
bool PrintPriorElems(DNode *p);//从P点向前遍历
bool PrintPriorElemsOverHead(DNode *p);//从P点向前遍历（跳过头节点）
/**定义模块**/


/**实现模块**/

//初始化
bool InitDLinkList(DLinkList &L) {
    L = (DNode *) malloc(sizeof(DNode));//分配一个头节点
    if (L == NULL)
        return false;
    L->prior == NULL;//头节点前后指针都指向空
    L->next == NULL;
    return true;
}

//判空
bool Empty(DLinkList L) {
    return (L->next == NULL);
}

//指定节点的后插操作
bool InsertNextElem(DNode *p, DNode *s) {
    //注意顺序不可交换
    s->next = p->next;
    p->next->prior = s;
    s->prior = p;
    p->next = s;
}

//删除P节点的后继节点
bool DeleteNextNode(DNode *p) {
    if (p == NULL)return false;//p节点为空
    DNode *q = p->next;
    if (q == NULL)return false;//P节点没有后继
    p->next = q->next;
    if (q->next != NULL)//q不是最后一个节点
        q->next->prior = p;
    free(q);//手动释放内存空间
    return true;
}

//销毁整个表
bool DestroyList(DLinkList &L) {
    //循环删除并释放每个节点
    while (L->next != NULL)
        DeleteNextNode(L);
    free(L);//释放头节点
    L = NULL;//头指针指向NULL

}

//从P点向后遍历
bool PrintNextElems(DNode *p) {
    if (p == NULL)return false;//
    while (p != NULL) {
        printf("当前节点的值是:%d", p->data);
        p = p->next;
    }
    return true;
}

//从P点向前遍历
bool PrintPriorElems(DNode *p) {
    if (p == NULL)return false;//
    while (p != NULL) {
        printf("当前节点的值是:%d", p->data);
        p = p->prior;
    }
    return true;
}

//从P点向前遍历（跳过头节点）
bool PrintPriorElemsOverHead(DNode *p) {
    if (p == NULL)return false;//
    while (p->prior != NULL) {
        printf("当前节点的值是:%d", p->data);
        p = p->prior;
    }
    return true;
}

/**实现模块**/


/**测试模块**/

//测试函数
void TestPrint(bool test, char message[]) {
    if (test)
        printf("%s成功啦！\n", message);
    else
        printf("%s失败啦！\n", message);
}

void TestModule() {
    DLinkList L;
    TestPrint(InitDLinkList(L), "初始化");
}

/**测试模块**/

int main() {
    TestModule();
    return 0;
}
