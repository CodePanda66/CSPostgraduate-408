# 顺序表
##顺序表的基本概念

![image-20200617172240151](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvetax0y7j30v20a6jwv.jpg)

### 顺序表的定义

![image-20200617172428297](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvev6pex4j30w80gydvc.jpg)

### 顺序表的初始化

#### 静态分配

![image-20200617172843813](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvezlw2d3j30ww0hjqda.jpg)

具体实现：

![image-20200617173539443](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvf6tyv9gj30zh0j67n2.jpg)

```c
//初始化(静态分配)
void InitList(SqList &L){
    for (int i = 0; i < MaxSize; i++) {
        L.data[i]=0;//将所有元素的初始值默认设置为0
        //这一步其实可以省略，但是省略之后，有可能受到内存中"脏数据"的影响
    }
    L.length=0;
}
```

##### 问题反思

1. 如果“数组”存满留怎么办？

可以放弃治疗，顺序表长刚开始确定后就无法更改（存储空间是静态的）

2. 如果一开始就声明一个很大的内存空间呢？会存在什么问题？

浪费，会造成大量的浪费。

#### 动态分配

![image-20200617190108177](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvhnrmmsaj30uw0gnwp4.jpg)

具体实现方式

![image-20200617190651552](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvhtq2yz3j31020jddxd.jpg)

```c
//初始化（动态方式）
bool InitList(SeqList &L){
    //用 malloc 函数申请一片连续的存储空间
    L.data=(int *)malloc(InitSize*sizeof(int));
    if (L.data==NULL)
        //要细心呀，这里不小心写成了赋值语句，但是没有报错，找了半天错误！
        return false;
    //(int *) 是指针的强制类型转换
    L.length=0;
    L.MaxSize=InitSize;
    return true;
}
```

#### 总结

![image-20200617190838244](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvhvlp3blj30vw0gm48a.jpg)

![image-20200617191008606](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvhx506r8j30w20ga47f.jpg)

### 顺序表的基本操作

#### 插入

ListInsert(&L,i,e):插入操作。在表L中的第i个位置上插入指定元素e。

![image-20200617211304785](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvlh1yhi4j30yt0i6tma.jpg)

详细实现方式：

![image-20200617212225782](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvlqt37s4j30x10howwh.jpg)

优化之后：

![image-20200617212144846](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvlq3dqifj30xg0gjwsn.jpg)

```c
bool ListInsert(SqList &L,int i,int e){
    //判断插入的位置是否合法，
    if (i<1||i>L.length+1)
        return false;
    //判断表是否存满了
    if (L.length>=MaxSize)
        return false;

    //后面的元素后移
    for (int j = L.length; j >=i ; j--) {
        L.data[j]=L.data[j-1];
    }
    L.data[i-1]=e;
    L.length++;
    return true;
}
```

#####插入操作的时间复杂度分析

![image-20200617213723625](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvm6cjrx0j30x80gugxr.jpg)

#### 删除

![image-20200617220850929](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvn335whij30y90i8dww.jpg)

```c
//删除
bool ListDelete(SqList &L,int i,int &e){
    //判断i的位置是否合法
    if(i<0||i>L.length){
        return false;
    }
    //取出将要被删除的数
    e=L.data[i-1];
    //将其后的数据前移
    for (int j = i; j <=L.length ; j++) {
        L.data[j-1]=L.data[j];
    }
    //线性表长度减一
    L.length--;
    return true;
}
```



##### 删除操作的时间复杂度分析

![image-20200617221030044](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvn4sq428j30w20j4qfi.jpg)

#### 总结反思

![image-20200617221250309](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvn78glgxj30x50ffgwe.jpg)

#### 查找
#####按位查找

GetElem(L,i):按位查找操作，获取表L中第i个位置的元素的值

###### 静态分配状态下的实现方式

![image-20200617222107279](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvnfu8xd7j30st0cf7bq.jpg)

###### 动态分配状态下的实现方式

![image-20200617222212660](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvngzflxoj30wx0hhang.jpg)

用指针加数组下标的方式取数据的时候，数组类型决定着取数据时取几个字节！！

```c
//按位查找
int GetElem(SeqList L,int i){
    //判断是否越界
    if (i<0||i>L.length)
        return -1;
    return L.data[i-1];
}
```

###### 按位查找的时间复杂度分析

![image-20200617222451314](https://tva1.sinaimg.cn/large/007S8ZIlly1gfvnjqz0ayj30vk0dvdm6.jpg)

##### 按值查找

![image-20200618215105169](https://tva1.sinaimg.cn/large/007S8ZIlly1gfws6wtavaj30yc0kcaow.jpg)

```c
//按值查找
int LocateElem(SeqList L,int e){
    //循环出查找
    for (int i = 0; i <L.length ; i++) {
        if (L.data[i]==e)
            return i+1; //返回位序
    }
    return -1;
}
```

###### 结构类型的比较

![image-20200618215217216](https://tva1.sinaimg.cn/large/007S8ZIlly1gfws85u0bfj30vx0h87h6.jpg)

注意：考研初试中华，手写代码可以直接用“==”，无论是ElemType是基本数据类型还是结构类型，手写代码主要考察学生是否理解算法思想，不会严格要求代码完全可运行

有的学校复试考《C语言程序设计》，那么。。。也许就要语法严格一些！

######  按值查找的时间复杂度

![image-20200618215714251](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwsdclu05j30vr0fun79.jpg)

##### 总结反思

![image-20200618215837154](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwseqqu3jj30xm0c7450.jpg)

