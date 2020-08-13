//
// Created by Kim Yang on 2020/8/14.
// Copyright (c) Kim Yang All rights reserved.
//

//链式存储
#include <stdio.h>
#include <stdlib.h>
#define MaxSize 100
struct ElemType{
    int value;
};

typedef struct BiTNode{
    ElemType data;//数据域
    struct BiTNode *lchild,*rchild;//左右孩子指针
}BiTNode, *BiTree;

//初始化
void InitTree(BiTree root){
    root=(BiTree)malloc(sizeof(BiTNode));
    root->data={1};
    root->lchild=NULL;
    root->rchild=NULL;
}

//插入新结点
bool InsertNode(BiTree T, ElemType val){
    BiTNode *p=(BiTNode *)malloc(sizeof(BiTNode));
    p->data=val;
    p->lchild=NULL;
    p->rchild=NULL;
    T->lchild=p;//作为左孩子
}
