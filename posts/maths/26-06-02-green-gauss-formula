---
icon: book
title: 多重积分和斯托克斯公式
---


个人博客第一篇文居然是数学笔记。。。

## 引入

广为熟知的 **牛顿-莱布尼茨** 公式形式如下：

$$F(b)-F(a)=\int_a^b F'(x)\mathrm{d}x$$

除了在几何上将原函数差值解释为导函数与坐标轴所围面积的符号和外，还可以这么解释：

$D = [a,b]$ 除了是一个区间以外，还可以被看作是一维空间 $\mathbb{R}$ 上的一个 **单连通区域**，这个单连通区域的边界 $\partial D = \{a, b\}$。于是 $F(b)-F(a)$ 就可以被看作是单连通区域边界 $\partial D$ 上的 **环路积分**，由于这个边界是 $0$ 维的，而“ $0$ 重积分” 并没有自己的符号，此处先借用一重积分的符号表达，即$\displaystyle\oint_{\partial D}F(x)\mathrm{d}x$，于是可以把牛顿-莱布尼茨公式改写为

$$\oint_{\partial D}F(x)\mathrm{d}x=\int_D F'(x)\mathrm dx$$

左侧可以视为 $F(x)$ 在区域 $D$ 上的“通量”，$F'(x)$ 可以视为 $F(x)$ 在 $D$ 内的“散度”。

## 格林公式

然后顺理成章地得到格林公式的第一式为


$$\boxed{\oint_{\partial D}\bm F\cdot \bm n \mathrm ds=\iint_D (\nabla\cdot\bm F)\mathrm d S}$$

此处 $D$ 是 $\mathbb{R^2}$ 内某个单连通区域，$\bm n=(\cos\beta,-\cos\alpha)$ 是向外的单位法向量，表示函数 $\bm F$ 在区域 $D$ 的边界 $\partial D$ 的通量等于其散度在 $D$ 内的积分。

$\bm F = (P(x), Q(y))$，定义$\bm R =(Q(x), P(y))$，将上式展开得

$\displaystyle\oint_{\partial D}(P,Q)\cdot (\cos \beta, -\cos\alpha) \mathrm ds=
\oint_{\partial D}(P\cos\beta-Q\cos\alpha) \mathrm ds=
\oint_{\partial D}(P\mathrm dy-Q\mathrm dx) =
\iint_D (\frac{\partial F}{\partial x}+\frac{\partial F}{\partial y})\mathrm d S$

然后继续向外推广，得到高斯公式

$$\oiint_{\partial D}\bm F(\bm P)\cdot \bm n \mathrm dS=\iiint_D (\nabla\cdot\bm F)\mathrm d V$$

此处 $D$ 是 $\mathbb{R^3}$ 内某个单连通区域，$n$ 是向外的法向量，同样表示函数 $\bm F$ 在区域 $D$ 的边界 $\partial D$ 的通量等于其散度在 $D$ 内的积分。

在物理上，由高斯定律的微分形式得到 $\nabla \cdot \bm D = \rho$，于是

$$\oiint_{\partial D}\bm D\cdot \mathrm d\bm S = \iiint_D (\nabla\cdot\bm D)\mathrm d V = \iiint_D\rho\mathrm dV=Q$$

便得到了高斯定律的积分形式。

是
