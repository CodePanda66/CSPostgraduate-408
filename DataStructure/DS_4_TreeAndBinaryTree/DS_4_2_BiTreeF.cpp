//
// Created by Kim Yang on 2020/8/23.
// Copyright (c) Kim Yang All rights reserved.
//
#include <stdio.h>

//三叉链表——方便找父节点
//带有一个指针指向父节点
/**定义模块**/
struct ElemType {
    int value;
};

typedef struct BiTNode {
    ElemType data;//数据域
    struct BiTNode *lchild, *rchild;//左右孩子指针
    struct BiTNode *parent;//指向父节点的指针
} BiTNode, *BiTree;
/**定义模块**/


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