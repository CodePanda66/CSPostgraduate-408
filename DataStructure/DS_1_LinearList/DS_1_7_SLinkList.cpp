//
// Created by kim on 2020/6/20.
//

//静态链表
#include <stdlib.h>
#include <stdlib.h>
#define MaxSize 10

//第一种定义方法
struct Node0{
    int data;
    int next;
};

void testSLinkList(){
    //声明时
    struct Node0 a[MaxSize];
}

//第二种定义方法
typedef struct Node{
    int data;
    int next;
}SLinkList[MaxSize];

void TestSLinkList(){
    //第二种方法声明时
    SLinkList a;
}

//相比之下，第二种方法可读性更强！，推荐

int main(){
    //后续来填坑吧！！

    return 0;
}