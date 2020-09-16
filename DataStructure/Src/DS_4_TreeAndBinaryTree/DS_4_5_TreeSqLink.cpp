//
// Created by Kim Yang on 2020/8/29.
// Copyright (c) Kim Yang All rights reserved.
//
#include <stdio.h>
//树——孩子表示法（顺序+链式存储）
/**定义模块**/
#define MAX_TREE_SIZE 100
struct CTNode{
    int child;//孩子节点在数组中的位置
    struct CTNode *next;//下一个孩子
};
typedef struct {
    int data; //数据元素，数据元素类型不定
    struct CTNode *firstChild;//第一个孩子
}CTBox;
typedef struct {
    CTBox nodes[MAX_TREE_SIZE];//双亲表示
    int n,r;//结点数和根的位置
}CTree;

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