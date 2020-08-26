//
// Created by Kim Yang on 2020/8/23.
// Copyright (c) Kim Yang All rights reserved.
//
#include <stdio.h>

//线索二叉树

/**定义模块**/

struct ElemType {
    int value;
};

typedef struct ThreadNode {
    ElemType data;//数据域
    struct ThreadNode *lchild, *rchild;//左右孩子指针
    int ltag, rtag;//左右线索标志
} ThreadNode, *ThreadTree;
/**定义模块**/

/**实现模块**/
ThreadNode *pre = NULL;//全局变量用于暂存当前访问结点的前驱

void visit(ThreadNode *q) {
    if (q->lchild == NULL) {//左子树为空，建立前驱线索
        q->lchild = pre;
        q->ltag = 1;
    }
    if (pre != NULL && pre->rchild == NULL) {//建立前驱结点的后继线索
        pre->rchild = q;
        pre->rtag = 1;
    }
    pre = q;
}

//中序遍历二叉树，一边遍历一边线索化
void InThread(ThreadTree T) {
    if (T != NULL) {
        InThread(T->lchild);
        visit(T);
        InThread(T->rchild);
    }
}

//创建中序线索化二叉树T
void CreatInThread(ThreadTree T) {
    pre = NULL;
    if (T != NULL) {//非空二叉树才能线索化
        InThread(T);//中序线索二叉树
        if (pre->rchild == NULL) {
            pre->rtag = 1;//处理遍历的最后最后一个结点
        }
    }
}

//中序线索化（王道教材版）
void InThread_CSKaoYan(ThreadTree p, ThreadTree &pre) {
    if (p != NULL) {
        InThread_CSKaoYan(p->lchild, pre);//递归，线索化左子树
        if (p->lchild == NULL) {//左子树为空，建立前驱线索
            p->lchild = pre;
            p->ltag = 1;
        }
        if (pre != NULL && pre->rchild == NULL) {
            pre->rchild == p;//建立前驱结点的后及线索
            pre->rtag = 1;
        }
        pre = p;
        InThread_CSKaoYan(p->rchild, pre);
    }
}

//中序线索化二叉树（王道教材版本）
void CreatInThread_CSKaoYan(ThreadTree T) {
    ThreadTree pre = NULL;
    if (T != NULL) {
        InThread_CSKaoYan(T, pre);
        pre->rchild = NULL;//思考：为什么处理最后一个结点时没有判断rchild 是否为NULL？
        pre->rtag = 1;//答：因为最后一个结点的右孩子必为空。
    }
}

//先序线索化，一边遍历一边线索化
void PreThread(ThreadTree T) {
    if (T != NULL) {
        visit(T);
        if (0 == T->ltag) {//lchild不是前驱线索
            PreThread(T->lchild);
        }
        PreThread(T->rchild);
    }
}

//创建先序线索化二叉树T
void CreatPreThread(ThreadTree T) {
    pre == NULL;
    if (T != NULL) {
        PreThread(T);
        if (pre->rchild == NULL) {
            pre->rtag = 1;//处理遍历的最后一个结点
        }
    }
}

//先序线索化（王道教程版本）
void PreThread_CSKaoYan(ThreadTree p, ThreadTree &pre) {
    if (p != NULL) {
        if (p->lchild == NULL) {
            p->lchild = pre;
            p->ltag = 1;
        }
        if (pre != NULL && pre->rchild == NULL) {
            pre->rchild == p;//建立前驱结点的后及线索
            pre->rtag = 1;
        }
        pre = p;
        if (0 == p->ltag) {
            PreThread_CSKaoYan(p->lchild, pre);
        }
        PreThread_CSKaoYan(p->rchild, pre);
    }
}

//先序线索化二叉树（王道教材版本）
void CreatPreThread_CSKaoYan(ThreadTree T) {
    ThreadTree pre = NULL;
    if (T != NULL) {
        PreThread_CSKaoYan(T, pre);
        if (pre->rchild = NULL)//处理遍历的最后一个结点
            pre->rtag = 1;
    }
}

//后序线索二叉树
void PostThread(ThreadTree T) {
    if (T != NULL) {
        PostThread(T->lchild);
        PostThread(T->rchild);
        visit(T);
    }
}

//创建后序线索二叉树T
void CreatPostThread(ThreadTree T) {
    pre == NULL;
    if (T != NULL) {
        PostThread(T);
        if (pre->rchild == NULL) {
            pre->rtag = 1;//处理遍历的最后一个结点
        }
    }
}

//后序线索化（王道教程版本）
void PostThread_CSKaoYan(ThreadTree p, ThreadTree &pre) {
    if (p != NULL) {
        PostThread_CSKaoYan(p->lchild, pre);
        PostThread_CSKaoYan(p->rchild, pre);
        if (p->lchild == NULL) {
            p->lchild = pre;
            p->ltag = 1;
        }
        if (pre != NULL && pre->rchild == NULL) {
            pre->rchild == p;//建立前驱结点的后及线索
            pre->rtag = 1;
        }
        pre = p;
    }
}
//后序线索化二叉树（王道教材版本）
void CreatPostThread_CSKaoYan(ThreadTree T) {
    ThreadTree pre = NULL;
    if (T != NULL) {
        PostThread_CSKaoYan(T, pre);
        if (pre->rchild = NULL)//处理遍历的最后一个结点
            pre->rtag = 1;
    }
}

//中序线索二叉树找中序后继
//找到以P为根的子树中，第一个被中序遍历的结点
ThreadNode *FirstNode(ThreadNode *p){
    //循环找到最左下结点（不一定是叶结点）
    while(0==p->ltag){
        p=p->lchild;
    }
    return p;
}

//在中序线索二叉树中找到结点p的后继结点
ThreadNode *NextNode(ThreadNode *p){
    //在右子树中最左下结点
    if(0==p->rtag)return FirstNode(p->rchild);
    else return p->rchild;
}

//对中序线索二叉树进行中序遍历（利用线索实现的非递归算法），空间复杂度为O(1)；
void InOrder(ThreadNode *T){
    for (ThreadNode *p = FirstNode(T);  p!=NULL ; p=NextNode(p)) {
        visit(p);
    }
}

//中序线索二叉树找中序前驱
//找到以p为根的子树中，最后一个被中序遍历的结点
ThreadNode *LastNode(ThreadNode *p){
    //循环找到最右下结点（不一定是叶结点）
    while(0==p->rtag)p=p->rchild;
    return p;
}

//在中序线索二叉树中找到结点p的前驱结点
ThreadNode *PreNode(ThreadNode *p){
    //左下子树中最右结点
    if(0==p->ltag)return LastNode(p->lchild);
    else return p->lchild;
}

//对中序线索二叉树进行逆向中序遍历
void RevInOrder(ThreadNode *T){
    for (ThreadNode *p = LastNode(T);  p!=NULL ; p=PreNode(p)) {
        visit(p);
    }
}


/**实现模块**/


/**测试模块**/

void testModule() {
    printf("开始测试！\n");

    printf("结束测试！\n");
}

/**测试模块**/
int main() {
    testModule();
    return 0;
}