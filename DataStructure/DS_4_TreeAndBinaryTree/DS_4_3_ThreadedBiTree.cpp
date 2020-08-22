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

/**实现模块**/
//坐等填坑

/**实现模块**/


/**测试模块**/

void testModule() {

}

/**测试模块**/
int main() {

    return 0;
}