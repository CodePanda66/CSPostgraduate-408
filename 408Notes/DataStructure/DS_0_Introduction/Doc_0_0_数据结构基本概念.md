# 绪论第一节

![image-20200616203728181](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001224.jpg)

## 基本概念

### 什么是数据？

数据是**信息的载体**，是客观描述事物属性的数、字符及**所有能输入到计算机中并被计算机程序识别和处理的符号**的集合。数据是计算机程序加工的原料。

### 数据元素、数据项

**数据元素**是数据的基本单位，通常作为一个整体进行考虑和处理。

一个数据元素可由若干**数据项**组成，数据项是构成数据元素的不可分割的最小单位。

### 数据结构、数据对象

结构——各个元素之间的关系

**数据结构**是互相之间存在一个或多种**特定关系**的数据元素的集合。

**数据对象**是具有**相同性质**的数据元素的集合，是一个数据的子集。

## 三要素

![image-20200616204952204](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001225.jpg)

### 逻辑结构

即，数据元素之间的逻辑关系是什么？

![image-20200616205141919](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001226.jpg)

#### 集合

![image-20200616205508144](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001227.jpg)

各个数据元素同属一个集合，别无其它关系

#### 线性结构

![image-20200616205527638](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001228.jpg)

数据元素之间是一对一的关系，除了第一个元素，所有元素都有唯一前驱，除了最后一个元素，所有元素都有唯一后继

#### 树形结构

![image-20200616205648476](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001229.jpg)

数据元素之间是一对多的关系

#### 图结构

![image-20200616205732165](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001230.jpg)

数据元素之间是多对多的关系

### 物理结构

即，物理结构，如何用计算机表示数据元素的逻辑关系？

#### 顺序存储

![image-20200616205941135](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001231.jpg)

**把逻辑上相邻的元素存储在物理地址上也相邻的存储单元中**，元素之间的关系由存储单元的领接关系来体现。

#### 链式存储

![image-20200616210302754](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001232.jpg)

#### 索引存储

![image-20200616210349944](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001233.jpg)

#### 散列存储

![image-20200616210434678](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001234.jpg)

#### 总结

![image-20200616210508542](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001235.jpg)

1. 若采用顺序存储，则各个数据元素在物理上必须是连续的；若采用非顺存储，则各个数据元素在物理上是可以离散的
2. 数据的存储结构会影响存储空间的分配的方便程度
3. 数据的存储机构会影响对数据运算的速度

### 数据的运算

施加在数据上的运算包括运算的定义和实现。运算的定义是针对逻辑结构的，正对运算的功能；运算的实现是针对存储结构的，指的是运算实现的具体操作步骤。

## 数据类型、抽象数据类型

### 数据类型

数据类型是一个值的集合和定义在此集合的一组操作的总称。

1. 原子类型，其值不可再分的数据类型
2. 结构类型，其值可以再分解为若干成分（分量）的数据类型

![image-20200616211417412](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001236.jpg)

### 抽象数据类型

Abstract Data Type （ADT）是抽象数据组织及与之相关的操作。

ADT 是用数学化的语言定义数据的逻辑结构、定义运算。与其具体的实现无关（类似于定义类吗？可能）

## 总结

![image-20200616212103345](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001237.jpg)

![image-20200616212152228](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001238.jpg)

在探讨一种数据结构时：

1. 定义逻辑结构（数据原元素之间的关系）
2. 定义数据的运算（针对现实需求，应该对这种逻辑结构进行什么样的运算）
3. 确定某种存储结构，实现数据结构，并实现一些对数据结构的基本运算

![image-20200616212530957](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001239.jpg)

