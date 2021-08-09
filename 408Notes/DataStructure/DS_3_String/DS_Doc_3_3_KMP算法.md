---
title: "KMP 算法"
---
  

简单模式匹配的缺点

![image-20200804224435660](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012916.jpg)

改进思想

![image-20200804224530991](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012921.jpg)

情况一

![image-20200804224626232](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012925.jpg)

![image-20200804224704994](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012936.jpg)

![image-20200804224731389](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012941.jpg)

情况二

![image-20200804224917143](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012945.jpg)

情况三：

![iShot2020-08-04下午10.51.24](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012950.jpg)

4这里有可能多比较一次：因为4和6已经不等，但是1和6相同，这里仍会期待1和6相同，再进行一次比较，所以这里它并不是最优的算法，但是相比于朴素模式匹配，它还是少对比了两次

![image-20200804225536657](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012954.jpg)

同理j指向3时少对比1次

总结：

![image-20200804230434402](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810012959.jpg)

## 具体代码实现

![image-20200804230554660](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810013008.jpg)

### 求next数组

![image-20200805131252851](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810013017.jpg)

![image-20200805131431528](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810013022.jpg)

![image-20200805131611443](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810013031.jpg)

### 代码实现求next数组

![image-20200805131821691](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810013038.jpg)

## 回顾总结

![image](https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810013045.jpg)
