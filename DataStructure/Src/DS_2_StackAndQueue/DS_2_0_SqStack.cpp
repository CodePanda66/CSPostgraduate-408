//
// Created by kim on 2020/6/21.
// Copyright (c) Kim Yang All rights reserved.
//

//顺序栈的实现
#include <stdio.h>

/**定义模块**/

# define  MaxSize 10
typedef struct {
    int data[MaxSize];
    int top;
} SqStack;

//函数声明
void InitStack(SqStack &S);//初始化
bool Push(SqStack &S, int t);//入栈
bool Pop(SqStack &S, int &x);//出栈,并打印出栈顶元素
bool GetTop(SqStack S, int &x);//读取栈顶元素
int GetTopOther(SqStack S);//读取栈顶元素的第二种实现方式

void InitStack1(SqStack &S);//初始化1
bool Push1(SqStack &S, int t);//入栈，初始化1
bool Pop1(SqStack &S, int &x);//出栈,并打印出栈顶元素，初始化1
bool GetTop1(SqStack S, int &x);//读取栈顶元素，初始化1
int GetTopOther1(SqStack S);//读取栈顶元素的第二种实现方式
/**定义模块**/

/**实现模块**/

//初始化
void InitStack(SqStack &S) {
    S.top = -1;//这种初始化的方式，栈顶指针始终指向栈顶元素
}

//初始化1
void InitStack1(SqStack &S) {
    S.top = 0;//这种初始化方式，栈顶指针始终会指向栈顶元素的下一空元素
}

//入栈
bool Push(SqStack &S, int t) {
    if (S.top == MaxSize - 1)return false;//栈满
    S.data[++S.top] = t;
//    等价下面两个语句
//    S.top+=1;//先将栈顶指针指向下一个位置
//    S.data[S.top]=t;//再填充元素
    return true;
}

//入栈，初始化1
bool Push1(SqStack &S, int t) {
    if (S.top == MaxSize)return false;//栈满，注意初始化条件不一样判空的条件也不一样了
    S.data[S.top++] = t;
//    等价下面两个语句
//    S.data[S.top]=t;
//    S.top+=1;
//注意初始化方式不同，上边的顺序也不一样了，先填充元素，再移动指针
    return true;
}

//出栈,并打印出栈顶元素
bool Pop(SqStack &S, int &x) {
    //判断
    if (S.top == -1)return false;//栈空报错
    x = S.data[S.top--];
//    等价于下面
//    x=S.data[S.top];//先取元素
//    S.top -=1;//再改指针
    return true;
}

//出栈,并打印出栈顶元素，初始化1
bool Pop1(SqStack &S, int &x) {
    //判断
    if (S.top == 0)return false;//栈空报错，注意判空条件
    x = S.data[--S.top];
//    等价于下面
//    S.top -=1;
//    x=S.data[S.top];
//注意初始化方式不同，上边的顺序也不一样了，先将指针指向当前栈顶元素，再将其取出
    return true;
}

//读取栈顶元素
bool GetTop(SqStack S, int &x) {
    if (S.top == -1)return false;
    x = S.data[S.top];
    return true;
}

//读取栈顶元素，初始化1
bool GetTop1(SqStack S, int &x) {
    if (S.top == 0)return false;
    x = S.data[S.top - 1];//注意按初始化1的方式，这里指针减1才是栈顶元素的位置，
    // 同时注意不能使用--S.top,因为这里是读取，不可修改原栈，所以不可和出栈一样
    //但即时这里你错误使用了--S.top，也不会有问题，因为此处的S是值传递，非引用传递，所以你修改的也只是复制之后的S，不会影响原栈S，即时这样也不建议使用--S.top，如果老师较真的话，可以扣分哒
    return true;
}

//读取栈顶元素的第二种实现方式
//利用返回值返回栈顶元素，若成功就返回栈顶元素，失败就返回-1；
//缺点：如果栈顶元素就是-1，容易造成误判，正因它的缺点，如果考试考到了它，写这种方式应该是会被扣部分分数的
int GetTopOther(SqStack S) {
    if (S.top == -1)return -1;
    return S.data[S.top];
}

int GetTopOther1(SqStack S) {
    if (S.top == 0)return -1;
    return S.data[S.top - 1];
}
/**实现模块**/

/**测试模块**/

//打印整个栈
void PrintStack(SqStack S) {
    printf("从栈顶元素开始，栈如下：\n");
    while (S.top >= 0) {//注意判空的条件
        printf("S[%d]=%d\n", S.top, S.data[S.top]);
        S.top--;
    }
    printf("栈打印完毕\n");
}

//打印整个栈，初始化方式1
void PrintStack1(SqStack S) {
    printf("从栈顶元素开始，栈如下：\n");
    while (S.top > 0) {//注意判空的条件
        S.top--;
        printf("S1[%d]=%d\n", S.top, S.data[S.top]);//初始化方式1得先移动指针再获取元素
    }
    printf("栈打印完毕\n");
}


void testStack() {
    printf("开始测试\n");
    SqStack S;
    printf("测试第一种初始化方式\n");
    InitStack(S);
    if (Push(S, 1)) {
        printf("入栈成功啦！\n");
    } else {
        printf("入栈失败了\n");
    }
    if (Push(S, 2)) {
        printf("入栈又成功啦！\n");
    } else {
        printf("入栈又失败了\n");
    }
    PrintStack(S);
    int x;
    if (Pop(S, x)) {
        printf("出栈成功，弹出的元素为:%d\n", x);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }
    PrintStack(S);
    int x1;
    if (GetTop(S, x1)) {
        printf("读取栈顶元素成功了，栈顶元素为：%d\n", x1);
    } else {
        printf("读取栈顶元素失败，再检查一下吧！\n");
    }
    int x4 = GetTopOther(S);
    if (x4 != -1) {
        printf("第二种读取栈顶元素的方式成功了，栈顶元素为：%d\n", x4);
    } else {
        printf("第二种读取栈顶元素的方式失败了\n");
    }


    printf("测试第二种初始化方式\n");
    SqStack S1;
    InitStack1(S1);
    if (Push1(S1, 1)) {
        printf("入栈成功啦！\n");
    } else {
        printf("入栈失败了\n");
    }
    if (Push1(S1, 2)) {
        printf("入栈又成功啦！\n");
    } else {
        printf("入栈又失败了\n");
    }
    PrintStack1(S1);
    int x2;
    if (Pop1(S1, x2)) {
        printf("出栈成功，弹出的元素为[%d]\n", x2);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }
    PrintStack1(S1);
    int x3;
    if (GetTop1(S1, x3)) {
        printf("读取栈顶元素成功了，栈顶元素为：%d\n", x3);
    } else {
        printf("读取栈顶元素失败，再检查一下吧！\n");
    }
    int x5 = GetTopOther1(S1);
    if (x5 != -1) {
        printf("第二种读取栈顶元素的方式成功了，栈顶元素为：%d\n", x5);
    } else {
        printf("第二种读取栈顶元素的方式失败了\n");
    }

    printf("测试完毕了！\n");
}
/**测试模块**/

int main() {
    printf("Hello, SqStack!");
    testStack();
    return 0;
}
