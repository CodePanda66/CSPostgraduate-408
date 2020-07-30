# 单链表

![image-20200618221439465](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwsvfgvpqj30xa0g110c.jpg)

![image-20200618221516210](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwsw28jg4j30m608n76v.jpg)

## 什么是单链表？

![image-20200618221658525](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwsxuuqfcj30w70gk120.jpg)

## 单链表的定义

![image-20200618221959788](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwt0zoggtj30xp0jch19.jpg)

### 别名

![image-20200618222203154](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwt36clauj30vy0gv498.jpg)

![image-20200618222313544](https://tva1.sinaimg.cn/large/007S8ZIlly1gfwt4c4elwj30uz0hf48n.jpg)

注释：或者可以理解为指向头节点的指针既可以表示整个单链表也可以表示头节点，为了便于区分才建议使用 typedef 进行重命名，以方便区别其不同的含义

### 头插法建立单链表

![image-20200619095117732](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxd09ulpaj30w90h3don.jpg)

## 单链表的基本操作

### 单链表的初始化

#### 不带头节点的单链表的初始化

![image-20200619095400757](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxd33bz57j30xd0iydr5.jpg)

#### 带头节点的单链表的初始化

![image-20200619095545238](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxd4wvb40j30we0h0ali.jpg)

#### 两者区别是什么？

![image-20200619095738329](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxd6vl5fjj30w10gewmr.jpg)

### 总结

![image-20200619095821536](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxd7m8hwsj30wy0gkgwc.jpg)

### 插入和删除

![image-20200619104612536](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxelei5ypj30vn0bydkr.jpg)

#### 插入

##### 按位序插入（带头节点的单链表）

![image-20200619105030154](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxepvm0rtj30pf0bm0x5.jpg)

具体实现

分析在表头插入

![image-20200619105401211](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxetj6536j30yq0go49z.jpg)

分析为什么不能颠倒

![image-20200619105451377](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxeuen5f3j30y90glanl.jpg)

分析在表中插入

![image-20200619105800111](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxexom8upj30xu0grn8b.jpg)

分析在表尾插入

![image-20200619110039686](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxf0gbc40j30ya0gmn7y.jpg)

分析插入位置超出表长

![image-20200619110159253](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxf1ut4dbj30yh0gln85.jpg)

总结

![image-20200619110309541](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxf31fw4pj30ug0gok3z.jpg)

##### 按位插入（不带头节点）

![image-20200619110418752](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxf49091ej30pv0cmtd8.jpg)

具体实现

![image-20200619110547637](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxf5s71ezj30xj0hzalf.jpg)

结论：不带头节点的单链表，写代码更不方便，除非特别声明，默认推荐使用带头节点的实现方式，还有要注意在考试中带头、不带头都有可能考察，注意审题。

##### 指定节点的后插操作

![image-20200619111032277](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxfaq6p4vj30up0fhgvd.jpg)

指定节点的前插操作

通过传入头指针实现前插

![image-20200619111607840](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxfgjkvwcj30xz0ge483.jpg)

先进行后插，然后交换前后数据，以此实现前插

![image-20200619111716141](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxfhq2cfqj30sg0gx130.jpg)

![image-20200619111814873](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxfire7naj30rb0g546o.jpg)

#### 删除

##### 带有头节点版本

![image-20200619111915877](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxfjt249oj30ql0arn1l.jpg)

具体实现

![image-20200619135048885](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxjxj0fkej30yk0gdqer.jpg)

###### 删除指定结点

![image-20200619135226089](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxjz7e23hj30tu0futhr.jpg)

如果P是最后一个节点，咋办？

只能从表头表头依次寻找前驱，时间复杂度O(n)

![image-20200619135401028](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxk0tlqn0j30ue0fgqcj.jpg)

单链表的局限性：无法逆向检索！！

#### 总结

![image-20200619135623242](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxk3ajg2pj30wi0frgsp.jpg)

#### 查找

##### 按位查找(带头节点)

![image-20200619152704151](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxmpn8i9wj30yq0ia7cw.jpg)

#####按值查找(带头节点)

![image-20200619153147639](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxmuk9506j30sf0f679p.jpg)

##### 求表的长度(带头节点)

![image-20200619153411974](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxmx2amnnj30rg0e6wj9.jpg)

#### 总结

![image-20200619153525681](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxmych5jgj30rs0b50xf.jpg)

## 单链表的建立方法

![image-20200619153742876](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxn0qz3vgj30sa0ca42l.jpg)

PS：找不到对象就娶一个数据元素吧！哈哈

### 尾插法

第一种方法：

![image-20200619154012867](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxn3c9groj30y00ha15o.jpg)

问题：时间复杂度太高！！可以用一个指针记录最后一个数据元素的位置来优化时间。

优化之后:

![image-20200619172815577](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxq7qma30j30y40hiqeo.jpg)

### 头插法

![image-20200619172945304](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxq9avytdj30to0h1dlw.jpg)

具体实现：

![image-20200619173800669](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxqhvy3nvj30za0js1b5.jpg)

### 总结

![image-20200619173925151](https://tva1.sinaimg.cn/large/007S8ZIlly1gfxqjcvhagj30my0e8gry.jpg)

