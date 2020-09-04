//
// Created by Kim Yang on 2020/9/4.
// Copyright (c) Kim Yang All rights reserved.
//
#include <stdio.h>

//邻接标法（顺序+链式存储）
/**定义模块**/

#define MaxVertexNum 100

//"边"/"弧"
typedef struct ArcNode{
    int  adjvex;    //边/弧指向哪个结点
    struct ArcNode *next; //指向下一条弧的指针
    //InfoType info;  //边权值
}ArcNode;

//"顶点"
typedef struct VNode{
    int data; //顶点信息，数据类型不定，int只是一个例子
    ArcNode *first;//第一条边/弧
}VNode ,AdjList[MaxVertexNum];

//用邻接表存储的图
typedef struct {
    AdjList vertices;
    int vexnum,arcnum;
}ALGraph;

/**定义模块**/


/**实现模块**/
//坐等填坑

/**实现模块**/


/**测试模块**/

void testModule() {
    printf("开始测试!\n");

    //坐等填坑

    printf("结束测试!\n");
}

/**测试模块**/
int main() {
    testModule();
    return 0;
}