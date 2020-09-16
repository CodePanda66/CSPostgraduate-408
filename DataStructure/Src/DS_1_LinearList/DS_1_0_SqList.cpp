//
// Created by kim on 2020/6/17.
// Copyright (c) Kim Yang All rights reserved.
//

//顺序表——静态分配的实现方式

/**定义模块**/

#include <stdio.h>

#define MaxSize 10

typedef struct {
    int data[MaxSize];
    int length;
} SqList;

//函数声明
void InitList(SqList &L);                           //初始化
bool Empty(SqList L);                               //判空
bool ListInsert(SqList &L, int i, int e);           //插入
bool ListDelete(SqList &L, int i, int &e);          //删除
int GetElem(SqList L, int i);                       //按位查找
int LocateElem(SqList L, int e);                    //按值查找
bool LocateChangeElem(SqList &L, int e, int em);    //按值修改
bool getChangeElem(SqList &L, int i, int em);       //按位修改

void PrintSqList(SqList L);                         //打印函数
void testModule();                                  //测试模块

/**定义模块**/

/**实现模块**/

//初始化
void InitList(SqList &L) {
    for (int i = 0; i < MaxSize; i++) {
        L.data[i] = 0;//将所有元素的初始值默认设置为0
        //这一步其实可以省略，但是省略之后，有可能受到内存中"脏数据"的影响
    }
    L.length = 0;

}

//判空
bool Empty(SqList L) {
    return (L.length == 0);
}

//插入
bool ListInsert(SqList &L, int i, int e) {
    //判断插入的位置是否合法，
    if (i < 1 || i > L.length + 1)
        return false;
    //判断表是否存满了
    if (L.length >= MaxSize)
        return false;

    //后面的元素后移
    for (int j = L.length; j >= i; j--) {
        L.data[j] = L.data[j - 1];
    }
    L.data[i - 1] = e;
    L.length++;
    return true;
}

//删除
bool ListDelete(SqList &L, int i, int &e) {
    //判断i的位置是否合法
    if (i < 0 || i > L.length) {
        return false;
    }
    //取出将要被删除的数
    e = L.data[i - 1];
    //将其后的数据前移
    for (int j = i; j <= L.length; j++) {
        L.data[j - 1] = L.data[j];
    }
    //线性表长度减一
    L.length--;
    return true;
}

//查找
//按位查找
int GetElem(SqList L, int i) {
    //判断是否越界
    if (i < 0 || i > L.length)
        return -1;
    return L.data[i - 1];
}

//按值查找
int LocateElem(SqList L, int e) {
    //循环出查找
    for (int i = 0; i < L.length; i++) {
        if (L.data[i] == e)
            return i + 1; //返回位序
    }
    return -1;
}

//改
//先查找后改值
//由此分为两种方式，先按位查找后改值；或先按值查找后改值
//先按值查找后改值
bool LocateChangeElem(SqList &L, int e, int em) {
    //按值查找得到位序
    int bitOrder = LocateElem(L, e);
    //改值
    if (bitOrder != -1) {
        L.data[bitOrder] = em;
        return true;
    } else {
        return false;
    }
}

//先按位序查找后改值
bool getChangeElem(SqList &L, int i, int em) {
    //注意由于是改值涉及修改原数据，所以需要用引用传递的方式
    //给的位序,首先判断i是否合法
    if (i < 0 || i >= L.length)return false;

    //由于是用数组实现的方式，可以直接利用i查找
    L.data[i] = em;
    return true;

}


//销毁
//由于静态分配方式是通过声明数组的方式实现的，故不需要手动销毁SqList表，在使用完成之后，系统会自动删除数据并回收数据空间

/**实现模块**/

/**测试模块**/

//测试
//打印整个顺序表
void PrintSqList(SqList L) {
    //循环打印
    printf("开始打印顺序表\n");
    for (int i = 0; i < L.length; i++) {
        printf("Data[%d]==%d\n", i, L.data[i]);
    }
    printf("打印结束！\n");
}

//测试函数
void testModule() {
    SqList L;
    InitList(L);

//    初试化一些值
    L.data[0] = 1;
    L.data[1] = 2;
    L.data[2] = 3;
    L.length = 3;

    //插入操作
    if (ListInsert(L, 2, 3)) {
        printf("插入成功了\n");
    } else {
        printf("插入失败了，i的位置不合法，请检查\n");
    }

    //删除操作
    int e = -1;
    if (ListDelete(L, 2, e)) {
        printf("删除成功！删除的值是：%d\n", e);
    } else {
        printf("删除失败，请检查位序是否正确\n");
    }

    //数组当前长度
    printf("数组当前长度是多少？%d\n", L.length);

    //查找第一个元素是什么？
    printf("第一个元素是什么？\n %d\n", GetElem(L, 1));

    //查找值为3的元素在什么位置
    printf("第一个值为3的元素在什么位置？\n %d \n", LocateElem(L, 3));

    //打印输出
    PrintSqList(L);

    //测试改模块功能是否正常
    int e1 = 2;
    int em1 = 6;
    int i = 1;
    int em2 = 7;
    printf("开始测试【改】\n"
           "第一种方式先按值查找后改值\n");
    if (LocateChangeElem(L, e1, em1)) {
        printf("第一种先按值查找后改值成功啦，改变后的值如下：\n");
        PrintSqList(L);
    } else {
        printf("第一种先按值查找后改值失败了，再检查一下吧！\n");
    }
    printf("第二种先按位序查找后改值\n");
    if (getChangeElem(L, i, em2)) {
        printf("第二种先按位序查找后改值的方式成功啦，改变后的值如下：\n");
        PrintSqList(L);
    } else {
        printf("第二种先按位序查找后改值的方式失败了，再检查一下吧！\n");
    }
    if (Empty(L)) {
        printf("顺序表为空！\n");
    } else {
        printf("顺序表非空！\n");
    }

    //打印输出
    PrintSqList(L);
}
/**测试模块**/
//主函数
int main() {
    testModule();
    return 0;
}