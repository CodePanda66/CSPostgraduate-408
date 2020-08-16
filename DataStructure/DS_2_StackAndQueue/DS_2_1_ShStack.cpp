//
// Created by kim on 2020/7/28.
// Copyright (c) Kim Yang All rights reserved.
//

//共享顺序栈的实现
//简单来说就是两个栈共享一片存储空间，提高顺序栈的对存储空间的使用率
#include <stdio.h>

/**定义模块**/
# define  MaxSize 10
typedef struct {
    int data[MaxSize];
    int top0;
    int top1;
} ShStack;
//从结构体的定义就可以看出来，两个共享栈的根源就在于定义两个指针

//函数声明
void InitStack(ShStack &S);//初始化
bool Push0(ShStack &S, int t);//入栈0
bool Push1(ShStack &S, int t);//入栈1
bool Pop0(ShStack &S, int &x);//出栈,并打印出栈顶元素
bool Pop1(ShStack &S, int &x);//出栈1
bool GetTop0(ShStack S, int &x);//读取栈顶元素，栈0
bool GetTop1(ShStack S, int &x);//栈1
/**定义模块**/

/**实现模块**/
//初始化
void InitStack(ShStack &S) {
    S.top0 = -1;//这种初始化的方式，栈顶指针始终指向栈顶元素
    S.top1 = MaxSize;//这里的MaxSize就是所谓的第二个栈的栈底
    //可以根据顺序栈的第二种初试化方式，思考一下这种共享顺序栈的第二种初始化方式
    //S.top0=0
    //S.top1=MaxSize-1
}


//入栈0
bool Push0(ShStack &S, int t) {
    if (S.top0 + 1 == S.top1)return false;//注意共享栈满的条件
    S.data[++S.top0] = t;//仔细品味一下这个++S.top
    return true;
}

//入栈1
bool Push1(ShStack &S, int t) {
    if (S.top0 + 1 == S.top1)return false;//注意共享栈满的条件
    S.data[--S.top1] = t;//仔细品味一下这个--S.top，想想为什么？
    return true;
}


//出栈,并打印出栈顶元素
bool Pop0(ShStack &S, int &x) {
    //判断
    if (S.top0 == -1)return false;//栈空报错
    x = S.data[S.top0--];
//    等价于下面
//    x=S.data[S.top];//先取元素
//    S.top -=1;//再改指针
    return true;
}

//出栈1
bool Pop1(ShStack &S, int &x) {
    //判断
    if (S.top1 == MaxSize)return false;//注意一下它的栈空报错条件
    x = S.data[S.top1++];//注意这个栈修改指针是++
//    等价于下面
//    x=S.data[S.top];//先取元素
//    S.top +=1;//再改指针
    return true;
}

//读取栈顶元素，栈0
bool GetTop0(ShStack S, int &x) {
    if (S.top0 == -1)return false;
    x = S.data[S.top0];
    return true;
}

//栈1
bool GetTop1(ShStack S, int &x) {
    if (S.top1 == MaxSize)return false;
    x = S.data[S.top1];
    return true;
}
/**实现模块**/

/**测试模块**/
//打印整个栈,栈0
void PrintStack0(ShStack S) {
    printf("从栈顶元素开始，栈如下：\n");
    while (S.top0 > -1) {//注意判空的条件
        printf("S[%d]=%d\n", S.top0, S.data[S.top0--]);
    }
    printf("栈打印完毕\n");
}

//打印整个栈
void PrintStack1(ShStack S) {
    printf("从栈顶元素开始，栈如下：\n");
    while (S.top1 < MaxSize) {//注意判空的条件
        printf("S[%d]=%d\n", S.top1, S.data[S.top1++]);
    }
    printf("栈打印完毕\n");
}

void testShStack() {
    printf("开始测试\n");
    ShStack S;
    InitStack(S);
    printf("测试第一个栈\n");
    if (Push0(S, 1)) {
        printf("入栈成功啦！\n");
    } else {
        printf("入栈失败了\n");
    }
    if (Push0(S, 2)) {
        printf("入栈又成功啦！\n");
    } else {
        printf("入栈又失败了\n");
    }
    PrintStack0(S);
    int x;
    if (Pop0(S, x)) {
        printf("出栈成功，弹出的元素为:%d\n", x);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }
    PrintStack0(S);
    int x1;
    if (GetTop0(S, x1)) {
        printf("读取栈顶元素成功了，栈顶元素为：%d\n", x1);
    } else {
        printf("读取栈顶元素失败，再检查一下吧！\n");
    }


    printf("测试第二个栈\n");
    if (Push1(S, 10)) {
        printf("入栈成功啦！\n");
    } else {
        printf("入栈失败了\n");
    }
    if (Push1(S, 9)) {
        printf("入栈又成功啦！\n");
    } else {
        printf("入栈又失败了\n");
    }
    PrintStack1(S);
    int x3;
    if (Pop1(S, x3)) {
        printf("出栈成功，弹出的元素为:%d\n", x3);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }
    PrintStack1(S);
    int x4;
    if (GetTop1(S, x4)) {
        printf("读取栈顶元素成功了，栈顶元素为：%d\n", x4);
    } else {
        printf("读取栈顶元素失败，再检查一下吧！\n");
    }


    printf("测试完毕了！\n");
}

/**测试模块**/

int main() {
    printf("Hello, ShStack!");
    testShStack();
    return 0;
}