//
// Created by kim yang on 2020/8/8.
//

//链式存储
#include <stdio.h>

typedef struct StringNode{
    char ch;//每个结点存1个字符,存储密度低，每个字符1B，每个指针4B
    struct StringNode *next;
}StringNode,*String;

