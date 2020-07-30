# 栈的应用

## 括号匹配问题

![image-20200624163218954](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gp2nlldj30rl0epwl9.jpg)

### 实际过程

![image-20200624163415891](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gr3qzzpj30vp08s41n.jpg)

####正好匹配

![image-20200624163523560](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gs9w2tjj30lg0g640j.jpg)

####左右不匹配

![image-20200624163548297](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gsp5eixj30ox0fftbx.jpg)

#### 右括号单身

![image-20200624163638571](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gtkif5hj30uc0g1gp6.jpg)

#### 左括号单身

![image-20200624163721992](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gubowzlj30v90f2whs.jpg)

#### 整个流程

![image-20200624163928215](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3gwicyinj30vc0k3aij.jpg)

### 算法实现

![image-20200624164327998](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3h0o6j1pj31010hudsw.jpg)

### 总结

![image-20200624164420239](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3h1knszrj30v00as42w.jpg)

## 表达式求值

![image-20200624164751528](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3h58yijoj30vj0dg0xs.jpg)

### 算数表达式是什么？

由三个部分组成（操作数，运算符，界限符）

![image-20200624165021200](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3h7ua9jbj30wk0g0dm6.jpg)

### 前/后缀表达式的诞生

![image-20200624165107095](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3h8muhumj30mp0gegrp.jpg)

### 中/后/前缀表达式的区别

![image-20200624165500339](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3hcoc0paj30tm0f2jy3.jpg)

#### 中转后的过程：

![image-20200624165755963](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3hfpzb8mj30vv0edjxe.jpg)

**上图中，后缀表达式的算术符的先后次序对应中缀表达式的生效的先后次序**，但是这是一定的吗？

![image-20200624170300224](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3hl04ewvj30yl0gtqfl.jpg)

左优先原则，可保证运算顺序唯一性，以确定机算算法输出结果的唯一性！!

![image-20200624190745666](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3l6tdpuuj30v50gnjxj.jpg)

#### 机算算法实现

![image-20200624191112704](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3laei7pbj30wf0gy10c.jpg) 

![image-20200624191355054](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3ld7kfcfj30pk0f4tcy.jpg)

### 中转前的过程

![image-20200624191538706](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3lf0me2pj30nt0egjv1.jpg)

中转后和中转前的区别：

![image-20200624191614443](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3lfmqs26j30ov0en0v6.jpg)

#### 中转前的机算过程：

![image-20200624191810971](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3lhnpy97j30xl0gejzu.jpg)

### 总结

![image-20200624191919379](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3liufbq4j30rg0fy0yf.jpg)

"左优先"/“右优先”原则和左/右操作数不是专业说法，仅供理解！

## 表达式求值——具体代码实现

![image-20200624192258712](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3lmn5bcuj30y407077j.jpg)

### 中转后机算

手算过程：

![image-20200624192506786](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3lov1ve7j30xi0h5n4t.jpg)

机算过程：

![image-20200624193355396](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3ly15bjcj30x20imakj.jpg)

### 中缀表达式的计算

![image-20200624193844266](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3m31iy57j30oh08cjuk.jpg)

![image-20200624194515343](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3m9tycovj30oi0eqjvv.jpg)

CPU只能执行单个的加减乘除运算，上边这么搞的意义就是为了将高级程序语言编译成简单的机器码，让CPU去执行！

### 总结

![image-20200624194707110](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mbr9sqtj30p80dwjyq.jpg)

## 栈在递归中的应用

递归的过程就是函数调用的过程

![image-20200624195132597](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mgdjqtjj30xg0g77e5.jpg)

![image-20200624195412187](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mj4njfsj30q50d4whs.jpg)

### 适合用“递归”算法解决的问题

![image-20200624195452395](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mjtwxqnj30ny0ao40z.jpg)

求阶乘：

![image-20200624195709306](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mm7rbj5j30r50dw79a.jpg)

**使用递归时，需要注意调用栈溢出！**

![image-20200624200031925](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mppmy5uj30py0cxn0f.jpg)

**可以自定义栈将递归算法改造成非递归算法！**

求斐波那契数列

![image-20200624200155981](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mr6it0gj30pd0cwtbu.jpg)

### 总结

![image-20200624200214150](https://tva1.sinaimg.cn/large/007S8ZIlly1gg3mrhq6wnj30mq0adtbj.jpg)

