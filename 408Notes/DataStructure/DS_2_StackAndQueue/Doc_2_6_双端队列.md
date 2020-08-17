# 双端队列

![image-20200624161331529](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011030.jpg)

## 双端队列的定义

![image-20200624161416772](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011037.jpg)

## 考点：判断输出序列的合法性

### 对于栈的输出序列的合法性

![image-20200624161642449](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011052.jpg)

绿色为合法，红色为非法

### 对于输入受限的双端队列的输出序列的合法性

![image-20200624162025565](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011057.jpg)

绿色为合法，红色为非法，带下划线是在栈中不合法，但在输入受限的双端队列中合法的。

### 对于输出受限的双端队列

![image-20200624162509184](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011102.jpg)

绿色为合法，红色为非法，带下划线是在栈中不合法，但在输出受限的双端队列中合法

这种输出受限的双端队列，看序号较大的元素输出的位置，这意味着，在它输出之前，比它小的元素的相对位置是确定的，接下来就是考虑有什么插入的方法能实现这种相对位置关系！

## 总结

## ![image-20200624162951819](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gmivt6mj30xv09ddla.jpg)
<!-- 评论模块，不可删除 -->
<Vssue  />
