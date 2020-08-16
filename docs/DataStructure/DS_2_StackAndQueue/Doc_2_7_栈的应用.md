# 栈的应用

## 括号匹配问题

![image-20200624163218954](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011113.jpg)

### 实际过程

![image-20200624163415891](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011118.jpg)

####正好匹配

![image-20200624163523560](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011122.jpg)

####左右不匹配

![image-20200624163548297](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011127.jpg)

#### 右括号单身

![image-20200624163638571](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011130.jpg)

#### 左括号单身

![image-20200624163721992](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011135.jpg)

#### 整个流程

![image-20200624163928215](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011139.jpg)

### 算法实现

![image-20200624164327998](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011144.jpg)

### 总结

![image-20200624164420239](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011149.jpg)

## 表达式求值

![image-20200624164751528](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011154.jpg)

### 算数表达式是什么？

由三个部分组成（操作数，运算符，界限符）

![image-20200624165021200](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011203.jpg)

### 前/后缀表达式的诞生

![image-20200624165107095](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011211.jpg)

### 中/后/前缀表达式的区别

![image-20200624165500339](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011216.jpg)

#### 中转后的过程：

![image-20200624165755963](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011221.jpg)

**上图中，后缀表达式的算术符的先后次序对应中缀表达式的生效的先后次序**，但是这是一定的吗？

![image-20200624170300224](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011225.jpg)

左优先原则，可保证运算顺序唯一性，以确定机算算法输出结果的唯一性！!

![image-20200624190745666](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011717.jpg)

#### 机算算法实现

![image-20200624191112704](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011725.jpg) 

![image-20200624191355054](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011729.jpg)

### 中转前的过程

![image-20200624191538706](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011737.jpg)

中转后和中转前的区别：

![image-20200624191614443](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011742.jpg)

#### 中转前的机算过程：

![image-20200624191810971](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011746.jpg)

### 总结

![image-20200624191919379](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011751.jpg)

"左优先"/“右优先”原则和左/右操作数不是专业说法，仅供理解！

## 表达式求值——具体代码实现

![image-20200624192258712](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011755.jpg)

### 中转后机算

手算过程：

![image-20200624192506786](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011759.jpg)

机算过程：

![image-20200624193355396](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011804.jpg)

### 中缀表达式的计算

![image-20200624193844266](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011809.jpg)

![image-20200624194515343](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011813.jpg)

CPU只能执行单个的加减乘除运算，上边这么搞的意义就是为了将高级程序语言编译成简单的机器码，让CPU去执行！

### 总结

![image-20200624194707110](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011820.jpg)

## 栈在递归中的应用

递归的过程就是函数调用的过程

![image-20200624195132597](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011839.jpg)

![image-20200624195412187](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011847.jpg)

### 适合用“递归”算法解决的问题

![image-20200624195452395](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011853.jpg)

求阶乘：

![image-20200624195709306](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011857.jpg)

**使用递归时，需要注意调用栈溢出！**

![image-20200624200031925](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011902.jpg)

**可以自定义栈将递归算法改造成非递归算法！**

求斐波那契数列

![image-20200624200155981](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810011906.jpg)

### 总结

![image-20200624200214150](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mrhq6wnj30mq0adtbj.jpg)

