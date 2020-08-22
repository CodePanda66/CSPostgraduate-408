//
// Created by Kim Yang on 2020/8/14.
// Copyright (c) Kim Yang All rights reserved.
//

//链式存储————二叉树
#include <stdio.h>
#include <stdlib.h>

/***定义模块*/
struct ElemType {
    int value;
};

typedef struct BiTNode {
    ElemType data;//数据域
    struct BiTNode *lchild, *rchild;//左右孩子指针
} BiTNode, *BiTree;
/**定义模块**/

/**实现模块**/
//初始化
void InitTree(BiTree root) {
    root = (BiTree) malloc(sizeof(BiTNode));
    root->data = {1};
    root->lchild = NULL;
    root->rchild = NULL;
}

//插入新结点
bool InsertNode(BiTree T, ElemType val) {
    BiTNode *p = (BiTNode *) malloc(sizeof(BiTNode));
    p->data = val;
    p->lchild = NULL;
    p->rchild = NULL;
    T->lchild = p;//作为左孩子
}

//访问函数
void visit(BiTree T) {
    printf("%d", T->data.value);
}

//先序遍历
void PreOder(BiTree T) {
    if (T != NULL) {
        visit(T);//访问根节点
        PreOder(T->lchild);//遍历左子树
        PreOder(T->rchild);//遍历右子树
    }
}

//中序遍历
void InOrder(BiTree T) {
    if (T != NULL) {
        InOrder(T->lchild);//遍历左子树
        visit(T);//访问根节点
        InOrder(T->rchild);//遍历右子树
    }
}

//后序遍历
void PostOder(BiTree T) {
    if (T != NULL) {
        PostOder(T->lchild);
        PostOder(T->rchild);
        visit(T);
    }
}

//用于层序遍历的辅助队列
typedef struct LinkNode {
    BiTNode *data;//存的是指针而非结点
    struct LinkNode *next;
} LinkNode;

typedef struct {
    LinkNode *front, *rear;//队头队尾
} LinkQueue;

void InitQueue(LinkQueue &Q) {
    Q.front = Q.rear = (LinkNode *) malloc(sizeof(LinkNode));
    //初始化时，front 、rear 都指向头节点
    Q.front->next = NULL;
}

bool EnQueue(LinkQueue &Q, BiTNode *x) {
    //判满？链式存储一般不需要判满，除非内存不足
    LinkNode *s = (LinkNode *) malloc(sizeof(LinkNode));
    if (s == NULL)return false;
    s->data = x;
    s->next = NULL;
    Q.rear->next = s;//新节点插入到rear之后
    Q.rear = s;//修改表尾指针
    return true;
}

bool DeQueue(LinkQueue &Q, BiTNode *x) {
    if (Q.front == Q.rear)return false;//队空
    LinkNode *p = Q.front->next;//用指针p记录队头元素
    x = p->data;//用x变量返回队头元素
    Q.front->next = p->next;//修改头节点的next指针
    if (Q.rear == p)//此次是最后一个节点出队
        Q.rear = Q.front;//修改rear指针，思考一下为什么？
    free(p); //释放节点空间
    return true;
}

bool isEmpty(LinkQueue Q) {
    return Q.front == Q.rear ? true : false;
}

//层序遍历
void levelOrder(BiTree T) {
    LinkQueue Q;//辅助队列
    InitQueue(Q);//
    BiTree p;
    EnQueue(Q, T);
    while (!isEmpty(Q)) {
        DeQueue(Q, p);//队头结点出队
        visit(p);
        if (p->lchild != NULL)
            EnQueue(Q, p->lchild);
        if (p->rchild != NULL)
            EnQueue(Q, p->rchild);
    }
}

/**实现模块**/

/**测试模块**/


/**测试模块**/

int main() {

    return 0;
}