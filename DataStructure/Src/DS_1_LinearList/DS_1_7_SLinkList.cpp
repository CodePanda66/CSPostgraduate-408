//
// Created by kim on 2020/6/20.
// Copyright (c) Kim Yang All rights reserved.
//

//静态链表
#include <stdlib.h>
#include <stdlib.h>
#define MaxSize 10

/**定义模块**/

//第一种定义方法
struct Node0{
    int data;
    int next;
};

//第二种定义方法
typedef struct Node{
    int data;
    int next;
}SLinkList[MaxSize];
//相比之下，第二种方法可读性更强！，推荐

//函数声明

/**定义模块**/

/**实现模块**/

void testSLinkList(){
    //声明时
    struct Node0 a[MaxSize];
}

void TestSLinkList(){
    //第二种方法声明时
    SLinkList a;
}
/**实现模块**/

/**测试模块**/
void TestModule(){

}


/**测试模块**/

int main(){
    //后续来填坑吧！！
    TestModule();
    return 0;
}