# 单链表

![image-20200618221439465](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002338.jpg)

![image-20200618221516210](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002339.jpg)

## 什么是单链表？

![image-20200618221658525](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002340.jpg)

## 单链表的定义

![image-20200618221959788](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002341.jpg)

### 别名

![image-20200618222203154](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002342.jpg)

![image-20200618222313544](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002344.jpg)

注释：或者可以理解为指向头节点的指针既可以表示整个单链表也可以表示头节点，为了便于区分才建议使用 typedef 进行重命名，以方便区别其不同的含义

### 头插法建立单链表

![image-20200619095117732](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002344.jpg)

## 单链表的基本操作

### 单链表的初始化

#### 不带头节点的单链表的初始化

![image-20200619095400757](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810002345.jpg)

#### 带头节点的单链表的初始化

![image-20200619095545238](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004036.jpg)

#### 两者区别是什么？

![image-20200619095738329](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004054.jpg)

### 总结

![image-20200619095821536](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004128.jpg)

### 插入和删除

![image-20200619104612536](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004120.jpg)

#### 插入

##### 按位序插入（带头节点的单链表）

![image-20200619105030154](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004107.jpg)

具体实现

分析在表头插入

![image-20200619105401211](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004202.jpg)

分析为什么不能颠倒

![image-20200619105451377](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004209.jpg)

分析在表中插入

![image-20200619105800111](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004220.jpg)

分析在表尾插入

![image-20200619110039686](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004242.jpg)

分析插入位置超出表长

![image-20200619110159253](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004250.jpg)

总结

![image-20200619110309541](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004258.jpg)

##### 按位插入（不带头节点）

![image-20200619110418752](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004518.jpg)

具体实现

![image-20200619110547637](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004527.jpg)

结论：不带头节点的单链表，写代码更不方便，除非特别声明，默认推荐使用带头节点的实现方式，还有要注意在考试中带头、不带头都有可能考察，注意审题。

##### 指定节点的后插操作

![image-20200619111032277](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004537.jpg)

指定节点的前插操作

通过传入头指针实现前插

![image-20200619111607840](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004545.jpg)

先进行后插，然后交换前后数据，以此实现前插

![image-20200619111716141](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004557.jpg)

![image-20200619111814873](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004608.jpg)

#### 删除

##### 带有头节点版本

![image-20200619111915877](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004616.jpg)

具体实现

![image-20200619135048885](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004623.jpg)

###### 删除指定结点

![image-20200619135226089](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004635.jpg)

如果P是最后一个节点，咋办？

只能从表头表头依次寻找前驱，时间复杂度O(n)

![image-20200619135401028](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004648.jpg)

单链表的局限性：无法逆向检索！！

#### 总结

![image-20200619135623242](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004703.jpg)

#### 查找

##### 按位查找(带头节点)

![image-20200619152704151](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004721.jpg)

#####按值查找(带头节点)

![image-20200619153147639](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004724.jpg)

##### 求表的长度(带头节点)

![image-20200619153411974](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004735.jpg)

#### 总结

![image-20200619153525681](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004742.jpg)

## 单链表的建立方法

![image-20200619153742876](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004802.jpg)

PS：找不到对象就娶一个数据元素吧！哈哈

### 尾插法

第一种方法：

![image-20200619154012867](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004755.jpg)

问题：时间复杂度太高！！可以用一个指针记录最后一个数据元素的位置来优化时间。

优化之后:

![image-20200619172815577](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004814.jpg)

### 头插法

![image-20200619172945304](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004822.jpg)

具体实现：

![image-20200619173800669](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004833.jpg)

### 总结

![image-20200619173925151](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810004843.jpg)

