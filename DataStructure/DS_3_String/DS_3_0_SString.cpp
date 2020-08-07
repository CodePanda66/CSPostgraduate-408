//
// Created by kim yang on 2020/8/3.
//

//顺序存储——静态数组实现方式（定长顺序存储），注意下面实现在数组中存放字符串时，都会舍弃，Str[0]，第一个结点的空间，以保证字符下标和数组下标保证一致
#include <stdio.h>

#define MAXLEN 255 //预定义最大串长为255

typedef struct {
    char ch[MAXLEN];//每个分量存储一个字符
    int length; //串的实际长度
}SString;

bool InitStr(){

}

//求子串
bool SubString(SString &Sub,SString S,int pos,int len){
    if (pos+len-1>S.length)return false;
    for (int i = pos; i < pos+len; ++i)
        Sub.ch[i-pos+1]=S.ch[i];
    Sub.length=len;
    return true;
}

//比较操作，若S>T,则返回值>0;若S=T,则返回值=0；若S<T，则返回值<0;
int StrCompare(SString S,SString T){
    for (int i = 1; i <=S.length&i<=T.length; i++) {
        if (S.ch[i]!=T.ch[i])
            return S.ch[i]-T.ch[i];
    }
    //扫描过的所有字符都相同，则长度长的串更大
    return S.length-T.length;
}

//获取字符串长度
int StrLength(SString S){
    return S.length;
}

//定位操作,若主串S中存在与串T值相同的子串，则返回它在主串S中第一次出现的位置，否则函数值为0；
int Index(SString S,SString T){
    int i=1,n=StrLength(S),m=StrLength(T);
    SString sub;
    while(i<=n-m+1){
        SubString(sub,S,i,m);
        if (StrCompare(sub,T)!=0)++i;
        else return i;//返回子串在主串中的位置
    }
    return 0;//S中不存在与T相等的子串
}
void TestStr(){
    printf("开始测试！\n");

    printf("测试结束!\n");
}

int main(){
    TestStr();
    return  0;
}

