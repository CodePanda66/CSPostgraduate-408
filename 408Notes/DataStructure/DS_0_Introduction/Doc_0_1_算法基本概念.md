# 算法基本概念

## 基本概念

![image-20200616214853491](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001358.jpg)

### 什么是算法？

程序=数据结构+算法

![image-20200616215006166](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001359.jpg)

###算法的特性

1. 有穷性：一个算法必须总在执行有穷步之后结束，且每一步都可在有穷时间内完成。

   注：算法必须是有穷的，二程序可以是无穷的。

   ![image-20200616215340371](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001400.jpg)

2. 确定性：算法每一条指令必须有确切的含义，对于相同的输入只能得出相同的输出

3. 可行性：算法描述的操作都可以通过已经实现的基本运算执行有限次来实现。

4. 输入：一个算法有0个或多个输入，这些输入取自某个特定对象的集合。

5. 输出：一个算法有一个或多个输出，这些输出是与输入有着某种特定关系的量。

   五个特性，缺一不可

####“好”算法的特质

1. 正确性：算法应能正确地解决求解问题。
2. 可读性：算法应具有良好的可读性，帮助人们理解。
3. 健壮性：输入非法数据时，算法能适当地做出反应或进行处理，而不会产生莫名其妙的输出结果。
4. 高效率与底存储量需求：执行速度快，时间复杂度低。不费内存，空间复杂度低。

###总结

![image-20200616220536590](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001401.jpg)

## 算法效率的度量

![image-20200616220923527](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001402.jpg)

### 如何评估算法时间开销？

**让算法先运行，事后统计运行时间？**

存在的问题？

* 和机器性能有关，比如：超级计算机VS单片机
* 和编程语言有关，越高级的语言执行效率越低，没错，就是越低
* 和编译程序产生的机器指令质量有关
* 有些算法是不能事后统计的，比如，导弹控制算法。

评价一个算法优劣时，需要排除与算法本身无关的外界因素，能否事先估计？

### 算法时间复杂度

事前预估算法时间开销T(n)与问题规模n的关系（T 表示 time）

如何计算T，例子：

![image-20200616234743261](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001403.jpg)

#### 问题1:是否可以忽略表达式某些部分？

![image-20200616235203889](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001404.jpg)

1.  加法规则：多项相加，只保留最高阶的项，且系数变为1

    ![image-20200616235558501](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001405.jpg)

2.  乘法规则：多项相乘，都保留

    ![image-20200616235856976](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001406.jpg)

##### 算法时间复杂度阶数顺序

![image-20200617000121744](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001407.jpg)

![image-20200617000310666](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001408.jpg)

#### 如果有好几千行代码，需要一行一行数？

1.  顺序执行的代码只会影响常数项，可以忽略
2.  只需要挑循环中的一个基本操作，分析它的执行次数和n的关系就好
3.  如果有多层嵌套循环，只需要关注最深层的循环循环了几次

#### 小练习

![image-20200617001603926](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001409.jpg)

![image-20200617001659516](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001410.jpg)

![image-20200617001353856](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001411.jpg)

#### 总结

![image-20200617001826231](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001412.jpg)

算法的性能问题只有在n很大时才会暴露出来。

### 算法空间复杂度

#### 原地工作算法

![image-20200617002424730](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001413.jpg)

分析空间复杂度时，只需关注与问题规模相关的变量就好（讲人话，就是，看程序中的变量就好）

![image-20200617002625466](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001414.jpg)

加法法则

![image-20200617002941853](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001415.jpg)

#### 函数递归调用带来的内存开销

![image-20200617003249255](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001416.jpg)

在这种情况下，空间复杂度等于递归调用的深度。

![image-20200617003702543](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001417.jpg)

递归调用的过程中，每一次开辟的内存空间也可以不一致，如上例。

#### 总结

![image-20200617003857723](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001418.jpg)

<!-- 评论模块，不可删除 -->
<Vssue  />