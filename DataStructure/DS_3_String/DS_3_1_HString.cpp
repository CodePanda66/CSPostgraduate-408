//
// Created by kim yang on 2020/8/7.
//

//顺序存储——动态数组实现方式（堆分配存储）
#include <stdio.h>
#define MAXLEN 255 //预定义最大串长为255

typedef struct {
    char *ch;//按串长分配存储区，ch指向串的基地址
    int length; //串的实际长度
}HString;

