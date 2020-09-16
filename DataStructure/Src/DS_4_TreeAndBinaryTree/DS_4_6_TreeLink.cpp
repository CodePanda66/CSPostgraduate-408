//
// Created by Kim Yang on 2020/8/29.
// Copyright (c) Kim Yang All rights reserved.
//
#include <stdio.h>
//树——孩子兄弟表示法（链式存储）
/**定义模块**/

typedef struct CSNode{
    int data; //数据域，数据类型不定,此处的int只是一个列子
    struct CSNode *firstChild,*nextsibiling;//第一个孩子和右兄弟指针
}CSNode,*CSTree;


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