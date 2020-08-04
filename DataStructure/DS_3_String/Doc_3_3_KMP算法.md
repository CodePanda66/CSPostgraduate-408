# KMP 算法

简单模式匹配的缺点

![image-20200804224435660](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf5v3sopwj31bt0u0npd.jpg)

改进思想

![image-20200804224530991](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf5w0scbaj31cp0u0npd.jpg)

情况一

![image-20200804224626232](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf5wz9rtaj31cw0u0e81.jpg)

![image-20200804224704994](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf5xnpakdj31cq0u0hdt.jpg)

![image-20200804224731389](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf5y402wxj31dn0u0e81.jpg)

情况二

![image-20200804224917143](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf5zy33wdj31f40u0qv5.jpg)

情况三：

![iShot2020-08-04下午10.51.24](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf62g8h6bj31ds0u0npd.jpg)

4这里有可能多比较一次：因为4和6已经不等，但是1和6相同，这里仍会期待1和6相同，再进行一次比较，所以这里它并不是最优的算法，但是相比于朴素模式匹配，它还是少对比了两次

![image-20200804225536657](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf66j87aij31fu0u0hdt.jpg)

同理j指向3时少对比1次

总结：

![image-20200804230434402](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf6fuux8oj31gn0u0u0x.jpg)

## 具体代码实现

![image-20200804230554660](https://tva1.sinaimg.cn/large/007S8ZIlly1ghf6h8xgswj31s90u0e81.jpg)

