//
// Created by Kim Yang on 2020/8/3.
// Copyright (c) Kim Yang All rights reserved.
//

//顺序存储——静态数组实现方式（定长顺序存储），注意下面实现在数组中存放字符串时，都会舍弃，Str[0]，第一个结点的空间，以保证字符下标和数组下标保证一致
#include <stdio.h>
#include <cstring>

/**定义模块**/

#define MAXLEN 15 //预定义最大串长为15

typedef struct {
    char ch[MAXLEN];//每个分量存储一个字符
    int length; //串的实际长度
} SString;

//函数声明
void InitStr(SString &S);//初始化
bool StrAssign(SString &T, char *str, int strLength);//赋值操作
void StrCopy(SString &T, SString S);//复制操作
bool StrEmpty(SString S);//判空
void Concat(SString &T, SString S1, SString S2);//串链操作
bool SubString(SString &Sub, SString S, int pos, int len);//求子串
int StrCompare(SString S, SString T);//比较操作，若S>T,则返回值>0;若S=T,则返回值=0；若S<T，则返回值<0;
int StrLength(SString S);//获取字符串长度
int Index(SString S, SString T);//定位操作,若主串S中存在与串T值相同的子串，则返回它在主串S中第一次出现的位置，否则函数值为0；
int Index_Simple(SString S, SString T);//简单模式匹配
int Index_Simple_CSKaoYan(SString S, SString T);//简单模式匹配——王道教材写法
int Index_KMP(SString S, SString T, int next[]);//KMP算法
void getNext(SString T, int *next);//求模式串T的next数组
int Index_KMP1(SString S, SString T);//KMP2
void Get_BetterNext(SString T, int betterNext[]);//优化next数组
void ClearStr(SString &S);//清空操作

/**定义模块**/

/**实现模块**/

//初始化
void InitStr(SString &S) {
    S.ch[1] = '\0';//以字符串结束符号来作为初始状态
    S.length = 0;

}

//赋值操作
bool StrAssign(SString &T, char *str, int strLength) {

    if (str[0] == '\0')return false;//传入空数组就失败,条件依据初始化操作和清空操作而定

    for (int i = 0; i < strLength; ++i) {//想一想为什么这是i<strLength
        T.ch[i + 1] = str[i];//空置T的第一个元素位置
    }
    T.length = strLength;
    return true;
}

//复制操作
void StrCopy(SString &T, SString S) {

    for (int i = 1; i <= S.length; ++i) {//想一想为什么这是i<=S.length
        T.ch[i] = S.ch[i];
    }
    T.length = S.length;

}

//判空
bool StrEmpty(SString S) {
    return S.length == 0;
}


//串链操作
void Concat(SString &T, SString S1, SString S2) {
    for (int i = 1; i <= S1.length; i++) {
        T.ch[i] = S1.ch[i];
    }
    for (int j = S1.length + 1; j <= S1.length + S2.length; j++) {
        T.ch[j] = S2.ch[j - S1.length];//这里好好想一下循环的条件及数组下标
    }
    T.length = S1.length + S2.length;
}


//求子串
bool SubString(SString &Sub, SString S, int pos, int len) {
    if (pos + len - 1 > S.length)return false;
    for (int i = pos; i < pos + len; ++i)
        Sub.ch[i - pos + 1] = S.ch[i];
    Sub.length = len;
    return true;
}

//比较操作，若S>T,则返回值>0;若S=T,则返回值=0；若S<T，则返回值<0;
int StrCompare(SString S, SString T) {
    for (int i = 1; i <= S.length & i <= T.length; i++) {
        if (S.ch[i] != T.ch[i])
            return S.ch[i] - T.ch[i];
    }
    //扫描过的所有字符都相同，则长度长的串更大
    return S.length - T.length;
}

//获取字符串长度
int StrLength(SString S) {
    return S.length;
}

//定位操作,若主串S中存在与串T值相同的子串，则返回它在主串S中第一次出现的位置，否则函数值为0；
int Index(SString S, SString T) {
    int i = 1, n = StrLength(S), m = StrLength(T);
    SString sub;
    while (i <= n - m + 1) {
        SubString(sub, S, i, m);
        if (StrCompare(sub, T) != 0)++i;
        else return i;//返回子串在主串中的位置
    }
    return 0;//S中不存在与T相等的子串
}

//简单模式匹配
int Index_Simple(SString S, SString T) {
    int k = 1;//k记录当前主串指针
    int i = k, j = 1;//j记录模式串指针，i记录主串中与模式串进行对比的子串的起始地址
    while (i <= S.length && j <= T.length) {
        if (S.ch[i] == T.ch[j]) {
            ++i;
            ++j;//继续比较后续字符
        } else {
            k++;//检查下一个字串
            i = k;
            j = 1;//重制j的值
        }
    }
    if (j > T.length) {//匹配成功
        return k;
    } else {
        return 0;
    }
}

//简单模式匹配——王道教材写法
int Index_Simple_CSKaoYan(SString S, SString T) {
    int i = 1;//i记录当前主串指针
    int j = 1;//j记录模式串指针
    while (i <= S.length && j <= T.length) {
        if (S.ch[i] == T.ch[j]) {
            ++i;
            ++j;//继续比较后续字符
        } else {
            i = i - j + 2; //检查下一个字串
            j = 1;//重制j的值
        }
    }
    if (j > T.length) {//匹配成功
        return i - T.length;
    } else {
        return 0;
    }
}

//求模式串T的next数组
void getNext(SString T, int *next) {
    int i = 1, j = 0;
    next[1] = 0;
    while (i < T.length) {
        if (j == 0 || T.ch[i] == T.ch[j]) {
            ++i;
            ++j;
            //如果pi=pj，则next[j+1]=next[j]+1
            next[i] = j;
        } else {
            //否则令j=next[j],循环继续
            j = next[j];
        }
    }
}

//KMP1
int Index_KMP(SString S, SString T) {
    int i = 1, j = 1;
    int next[T.length + 1];
    getNext(T, next);
    while (i <= S.length && j <= T.length) {
        if (j == 0 || S.ch[i] == T.ch[j]) {
            ++i;
            ++j;//继续比较后继字符
        } else {
            j = next[j];//模式串向右移动
        }
    }
    if (j > T.length)//匹配成功
        return i - T.length;
    else
        return 0;
}

//优化next数组
void Get_BetterNext(SString T, int *betterNext) {
    int i = 1, j = 0;
    int next[T.length + 1];
    getNext(T, next);//先求出next数组
    betterNext[1] = 0;//令betterNext[1]=0
    for (int j = 2; j <= T.length; ++j) {
        if (T.ch[next[j]] == T.ch[j])
            betterNext[j] = betterNext[next[j]];//这里涉及三个数组的对比，仔细看看
        else
            betterNext[j] = next[j];
    }
}
//KMP1
int Index_KMP1(SString S, SString T,int next[]) {
    int i = 1, j = 1;
//    int next[T.length + 1];
//    getNext(T, next);
    while (i <= S.length && j <= T.length) {
        if (j == 0 || S.ch[i] == T.ch[j]) {
            ++i;
            ++j;//继续比较后继字符
        } else {
            j = next[j];//模式串向右移动
        }
    }
    if (j > T.length)//匹配成功
        return i - T.length;
    else
        return 0;
}

//清空操作
void ClearStr(SString &S) {
    S.length = 0;
    memset(S.ch, '\0', MAXLEN);//用到了一个cstring库中的memset函数
}

//销毁操作
//void DestoryString(SString &S) {
//
//}
//基于数组实现的字符串存储会自动销毁，无须单独销毁

/**实现模块**/

/**测试模块**/
void printDs(SString S, char *StrName) {
    printf("当前%s字符串内容为：", StrName);
    for (int i = 1; i <= S.length; ++i) {
        if (S.ch[i] != '\0')
            printf("%c", S.ch[i]);//注意输出单个字符用的是%c，而%s是输出一个字符串
    }
    printf("\n");
}

void testBoolOperate(bool result, char *message, char *success, char *fail) {
    if (result) {
        printf("%s%s\n", message, success);
    } else {
        printf("%s%s\n", message, fail);
    }
}

void testModule() {
    printf("开始测试！\n");

    SString S, T;
    InitStr(S);
    InitStr(T);
    char str1[] = "kim";//使用这种初始化列表进行初始化，最后会数组会多一个结束符'\0'
    // char str1[] = {'k','i','m'};
    // 而这种不会，所以在选择初始化方式的时候尽量做到统一，否则你很有可能因为'\0'而匹配不到子串

    char str2[] = "kimYang";
    testBoolOperate(StrAssign(S, str1, 3), "赋值操作", "成功啦！", "失败啦！");
    printDs(S, "S");
    testBoolOperate(StrAssign(T, str2, 7), "赋值操作", "又成功啦！", "失败啦！");
    printDs(T, "T");

    SString S1;
    InitStr(S1);
    StrCopy(S1, S);
    printDs(S1, "S1");

    SString S2;
    InitStr(S2);
    Concat(S2, S, T);
    printDs(S2, "串链结束后S2");

    SString S3;
    InitStr(S3);
    testBoolOperate(SubString(S3, T, 2, 4), "取子串操作", "成功啦", "失败啦");
    printDs(S3, "当前取出的S3");

    if (0 == StrCompare(S, S1)) {
        printf("两字符串一样\n");
    } else {
        printf("两个字符串不一样！\n");
    }

    int n = Index(T, S3);
    if (0 == n) {
        printf("主串T中不含子串S3\n");
    } else {
        printf("主串T中含有S3，其下标为：%d\n", n);
    }

    int n1 = Index_Simple(T, S3);
    if (0 == n1) {
        printf("主串T中不含子串S3\n");
    } else {
        printf("主串T中含有S3，其下标为：%d\n", n1);
    }

    int n2 = Index_Simple_CSKaoYan(T, S3);
    if (0 == n2) {
        printf("主串T中不含子串S3\n");
    } else {
        printf("主串T中含有S3，其下标为：%d\n", n2);
    }

    int n3 = Index_KMP(T, S3);
    if (0 == n3) {
        printf("主串T中不含子串S3\n");
    } else {
        printf("主串T中含有S3，其下标为：%d\n", n3);
    }

    int betterNext[S3.length+1];
    Get_BetterNext(S3,betterNext);
    int n4=Index_KMP1(T,S3,betterNext);
    if (0 == n4) {
        printf("主串T中不含子串S3\n");
    } else {
        printf("主串T中含有S3，其下标为：%d\n", n4);
    }



    printf("测试结束!\n");
}

/**测试模块**/

int main() {
    testModule();
    return 0;
}

