//
// Created by kim yang on 2020/8/3.
// Copyright (c) Kim Yang All rights reserved.
//

//栈的应用——扩号匹配问题

#include <stdio.h>

/**定义模块**/
# define  MaxSize 10
typedef struct {
    char data[MaxSize];
    int top;
} SqStack;

//函数声明
//以下都是基础操作定义以及实现的方式和前面一样
void InitStack(SqStack &S);//初始化
bool Push(SqStack &S, char t);//入栈
bool Pop(SqStack &S, char &x);//出栈,并打印出栈顶元素
bool StackEmpty (SqStack S);//判栈空
//以上都是基础操作定义以及实现的方式和前面一样
//括号匹配问题
bool bracketCheck(char str[],int length);
/**定义模块**/

/**实现模块**/
void InitStack(SqStack &S) {
    S.top = -1;//这种初始化的方式，栈顶指针始终指向栈顶元素
}

bool Push(SqStack &S, char t) {
    if (S.top == MaxSize - 1)return false;//栈满
    S.data[++S.top] = t;
//    等价下面两个语句
//    S.top+=1;//先将栈顶指针指向下一个位置
//    S.data[S.top]=t;//再填充元素
    return true;
}

bool Pop(SqStack &S, char &x) {
    //判断
    if (S.top == -1)return false;//栈空报错
    x = S.data[S.top--];
//    等价于下面
//    x=S.data[S.top];//先取元素
//    S.top -=1;//再改指针
    return true;
}

bool StackEmpty(SqStack S) {
    return S.top==-1;
}

bool bracketCheck(char *str, int length) {
    SqStack S;
    InitStack(S);
    for (int i = 0; i <length ; i++) {
        if (str[i]=='('||str[i]=='['||str[i]=='{'){
            Push(S,str[i]);
        } else{
            //这里是建立在整个字符串都是由扩号组成的基础上进行的，也就是如下逻辑不能过滤字符串中的非括号字符
            if (StackEmpty(S))return false;//扫描到右括号且当前栈空，匹配失败
            char topElem;
            Pop(S,topElem);
            if (str[i]==')' && topElem!='(')
                return false;
            if(str[i]==']'&&topElem!='[')
                return false;
            if(str[i]=='}'&&topElem!='{')
                return false;
        }
    }
    return StackEmpty(S);//最后检查栈，若空匹配成功，非空匹配失败
}

/**实现模块**/

/**测试模块**/
//打印整个栈
void PrintStack(SqStack S) {
    printf("从栈顶元素开始，栈如下：\n");
    while (S.top >= 0) {//注意判空的条件
        printf("S[%d]=%d\n", S.top, S.data[S.top--]);
    }
    printf("栈打印完毕\n");
}

void TestQueueApplication(){
    printf("开始测试\n");

    /**基础操作测试**/

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
    char x;
    if (Pop(S, x)) {
        printf("出栈成功，弹出的元素为:%d\n", x);
    } else {
        printf("出栈失败了，再检出一下吧！\n");
    }

    /**测试括号问题部分源码**/
    if(bracketCheck("[({})]",6))
        printf("字符串括号匹配成功\n");
    else
        printf("字符串括号匹配失败\n");
    if(bracketCheck("[({})",5))
        printf("字符串括号匹配成功\n");
    else
        printf("字符串括号匹配失败\n");

    printf("测试完毕了！\n");
}
/**测试模块**/

int main(){
    TestQueueApplication();
    return 0;
}
