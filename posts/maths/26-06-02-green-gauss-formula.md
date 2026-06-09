---
icon: book
title: 线面积分和斯托克斯公式
category: 
    - 数学

---


个人博客第一篇文居然是数学笔记。。。

# 曲线和曲面积分

## 曲线积分

目前只讨论光滑曲线的情况。

按照积分变量不同可以把曲线积分分成第一类和第二类。

### 第一类曲线积分

第一类曲线积分将弧长作为积分变量，其形式为 $\displaystyle\int_L f(\bm P) \mathrm ds$。

它具有定积分的一般性质。如果$L$分段光滑，则积分可分段求得。

对于参数方程 $\bm x=\bm\varphi(t)$，该曲线的导（切向量）函数为 $\bm\tau=\bm\varphi'(t)$，于是 $\mathrm ds = |\mathrm d\bm x| = |\bm\varphi'(t)||\mathrm dt|$，得到

$$\boxed{\mathrm ds = |\bm\varphi'(t)||\mathrm dt| = \sqrt{\sum \varphi_k'^2(t)}|\mathrm dt|}$$

替换之后便可以根据 $t$ 的范围把曲线积分转换成有上下限的定积分，值得注意的是，**我们说 $L$ 是参数方程在 $t \in [\alpha, \beta]$ 范围内而得到的曲线，该条件隐含了 $\alpha \le \beta$**，因为 $\mathrm ds$ 总是正数，而 $\mathrm dt$则有可能是负数，仅当要求 $\alpha \le \beta$ 时，才有 $|\mathrm dt| = \mathrm dt$。

### 第二类曲线积分

第二类曲线积分将坐标作为积分变量，其对于第 $k$ 个分量的积分形式为 $\displaystyle \boxed{\int_L f(\bm P)\mathrm dx_k}$。

若有 $n$ 个定义在 $\mathbb{R}^n$ 上的函数 $f_1,\cdots,f_n$，把他们对于 $x_k$ 的积分相加，得到 $\displaystyle I=\int_L \sum_{k=1}^nf_k(\bm P)\mathrm dx_k$，再定义 $\mathbb R^n \rightarrow \mathbb R^n$ 的向量函数 $\bm f(\bm P) = (f_1(\bm P),\cdots,f_n(\bm P))$，$\mathrm d\bm r = (\mathrm d x_1,\cdots,\mathrm dx_n)$，则上述积分可以记为 
$$\displaystyle \boxed{\int_L\bm f(\bm P)\cdot\mathrm d\bm r}$$
此为第二类曲线积分的向量形式。


对于参数方程 $\bm x=\bm\varphi(t)$，该曲线的导（切向量）函数为 $\bm\varphi'(t)$，于是得到 
$$\boxed{\begin{cases}
\mathrm dx_k &= \varphi_k'(t)\mathrm dt \\
\mathrm d\bm r &= \bm\varphi'(t)\mathrm dt
\end{cases}
}$$

于是第二类曲线积分可以写成对切线的积分
$$\displaystyle \int_L\bm f(\bm P)\cdot\mathrm d\bm r=\int_L\bm f(\bm P)\cdot\bm\varphi' \mathrm dt$$
于是该积分被称作**环量积分**，切向量 $\mathrm d\bm r$ 被称作有向曲线元。

特别地，在 $\mathbb{R^2}$中，光滑曲线有唯一的外单位法向量 $\bm n$，因此可以做积分
$$\int_L\bm f(\bm P)\cdot\bm n |\mathrm d\bm r|=\int_L\bm f(\bm P)\cdot\bm n |\bm\varphi'|\mathrm dt$$
该积分被称作 **通量积分**。

::: note

把切向积分定义为环量积分，是因为我们把切向定义为曲线的方向。若把法向定义为曲线的方向，则环量积分和通量积分的定义要互换。

:::

值得注意的是，在换元后，第二类曲线积分并没有规定 $\mathrm dt$ 的符号，**此时 $L$ 是一条有向曲线，其方向由 $\alpha \rightarrow \beta$ 规定，此处 $\alpha, \beta$ 无需满足某种大小关系 ，$\displaystyle \boxed{\int_{L^+}\bm f(\bm P)\cdot\mathrm d\bm r=-\int_{L^-}\bm f(\bm P)\cdot\mathrm d\bm r}$**，$L^+$ 和 $L^-$ 是方向相反的同一条曲线。

### 两类曲线积分的转换

对于环量积分，显然 $\displaystyle \mathrm d\bm r = \bm \varphi' \mathrm dt = \bm \tau\mathrm ds$，$\bm \tau$ 是单位切向量。同理，对于通量积分，显然 $\displaystyle \bm n |\bm\varphi'| \mathrm dt = \bm n\mathrm ds$，$\bm n$ 是单位法向量。

于是**环量积分**可以写作
$$\boxed{\displaystyle\int_L\bm f(\bm P)\cdot\mathrm d\bm r =\displaystyle\int_L\bm f(\bm P)\cdot \bm \tau \mathrm ds} $$
**通量积分**可以写作
$$\boxed{\displaystyle\int_L\bm f(\bm P)\cdot \bm n \mathrm ds}$$

显然 $\bm f(\bm P)\cdot \bm \tau$ 和 $\bm f(\bm P)\cdot \bm n$ 都是 $\mathbb R^n$ 上的标量函数，于是这两个积分都变成了第一类曲线积分。

## 曲面积分

目前只讨论光滑曲面的情况，一个曲面是光滑的，当且仅当曲面上各点都有切平面，且切平面随切点连续运动而连续转动。

曲面积分也可以分为第一类（对面积的）曲面积分和第二类（对坐标的）曲面积分。

### 第一类曲面积分

第一类曲面积分将面积作为积分变量，其形式为 $\displaystyle\iint_\Sigma f(\bm P) \mathrm dS$。

它具有定积分的一般性质。如果$\varSigma$分片光滑，则积分可分片求得。

设 $\varSigma$ 由 $\mathbb R^2 \rightarrow \mathbb R^n$ 的函数 $\bm f(t,s)$ 给出，则面积元 $\displaystyle{\mathrm dS =\|\frac{\partial \bm f}{\partial t}\wedge\frac{\partial \bm f}{\partial s}\|}\mathrm dt\mathrm ds$ ，但是这种情况过于复杂了，现在只讨论三维空间中的情况，此时 $\displaystyle\boxed{\mathrm dS = |\frac{\partial \bm f}{\partial t}\times\frac{\partial \bm f}{\partial s}|\mathrm dt\mathrm ds}$ 。

在最简单的情况下，在 $\mathbb R^3$中，$\varSigma$ 由 $F(x,y,z)=0$ 确定的隐函数 $z=z(x,y)$ 等给出，此时$\bm f(x,y,z) = (x,y,z(x,y))$ 等，即
$$\begin{matrix}
\displaystyle\mathrm dS &= |\frac{\partial \bm f}{\partial y}\times\frac{\partial \bm f}{\partial z}|\mathrm dy\mathrm dz &= \sqrt{1+(\frac{\partial x}{\partial y})^2+(\frac{\partial x}{\partial z})^2}\mathrm dy \mathrm dz  &= \sqrt{(\frac{\partial F}{\partial x})^2+(\frac{\partial F}{\partial y})^2+(\frac{\partial F}{\partial z})^2} |(\frac{\partial F}{\partial x})^{-1}|\mathrm dy\mathrm dz \\
&= |\frac{\partial \bm f}{\partial x}\times\frac{\partial \bm f}{\partial z}|\mathrm dx\mathrm dz &= \sqrt{1+(\frac{\partial y}{\partial x})^2+(\frac{\partial y}{\partial z})^2}\mathrm dx \mathrm dz &= \sqrt{(\frac{\partial F}{\partial x})^2+(\frac{\partial F}{\partial y})^2+(\frac{\partial F}{\partial z})^2} |(\frac{\partial F}{\partial y})^{-1}|\mathrm dx\mathrm dz \\ 
&= |\frac{\partial \bm f}{\partial x}\times\frac{\partial \bm f}{\partial y}|\mathrm dx\mathrm dy &= \sqrt{1+(\frac{\partial z}{\partial x})^2+(\frac{\partial z}{\partial y})^2}\mathrm dx \mathrm dy &= \sqrt{(\frac{\partial F}{\partial x})^2+(\frac{\partial F}{\partial y})^2+(\frac{\partial F}{\partial z})^2} |(\frac{\partial F}{\partial z})^{-1}|\mathrm dx\mathrm dy \\
\end{matrix}
$$

整理得
$$\boxed{\begin{matrix}
\displaystyle\mathrm dS &= \sqrt{1+(\frac{\partial x}{\partial y})^2+(\frac{\partial x}{\partial z})^2}\mathrm dy \mathrm dz &= |(\frac{\partial F}{\partial x})^{-1}\nabla F|\mathrm dy\mathrm dz \\
&= \sqrt{1+(\frac{\partial y}{\partial x})^2+(\frac{\partial y}{\partial z})^2}\mathrm dx \mathrm dz &= |(\frac{\partial F}{\partial y})^{-1}\nabla F|\mathrm dx\mathrm dz \\
&= \sqrt{1+(\frac{\partial z}{\partial x})^2+(\frac{\partial z}{\partial y})^2}\mathrm dx \mathrm dy &= |(\frac{\partial F}{\partial z})^{-1}\nabla F|\mathrm dx\mathrm dy \\
\end{matrix}}$$

### 第二类曲面积分

第二类曲面积分针对于有向面，其方向由取定的法向量决定。

考虑 $\mathbb R^3$ 中的情况，曲面由 $F(x,y,z)=0$ 确定，此时对于某两个积分变量的积分 
$$\boxed{\displaystyle\iint_\varSigma f_3(\bm P)\mathrm dx\mathrm dy}$$ 
称为第二类曲面积分。

同理，将对不同变量的曲面积分合并，得到
$$\displaystyle\iint_\varSigma f_1(\bm P)\mathrm dy\mathrm dz+f_2(\bm P)\mathrm dx\mathrm dz+f_3(\bm P)\mathrm dx\mathrm dy$$ 

记 $\mathrm d\bm S = (\mathrm dy\mathrm dz,\mathrm dx\mathrm dz,\mathrm dx\mathrm dy)$，把上式记为向量形式，得到
$$\boxed{\displaystyle\iint_\varSigma \bm f(\bm P)\cdot\mathrm d\bm S}$$

现在解释一下 $\mathrm d\bm S$ 的来源：在 $\bm P$ 点的单位法向量为 $\bm n = \displaystyle\frac{\nabla F}{|\nabla F|}$，面积元为 $\displaystyle \mathrm dS =|(\frac{\partial F}{\partial x})^{-1}\nabla F|\mathrm dy\mathrm dz=|(\frac{\partial F}{\partial y})^{-1}\nabla F|\mathrm dx\mathrm dz = |(\frac{\partial F}{\partial z})^{-1}\nabla F|\mathrm dx\mathrm dy$，于是 $\mathrm d \bm S = \bm n \mathrm dS=(\mathrm dy\mathrm dz,\mathrm dx\mathrm dz,\mathrm dx\mathrm dy)$。

若把 $\mathrm dS$ 的某个表达式带入，得到 
$$\boxed{\begin{aligned}
\mathrm d\bm S 
    &= |(\frac{\partial F}{\partial x})^{-1}|\nabla F \mathrm dy \mathrm dz \\
    &= |(\frac{\partial F}{\partial y})^{-1}|\nabla F \mathrm dx \mathrm dz \\
    &= |(\frac{\partial F}{\partial z})^{-1}|\nabla F \mathrm dx \mathrm dy
\end{aligned}}$$

### 两类曲面积分的转换

上面已经轻松给出了
$$\iint_\varSigma \bm f(\bm P)\cdot\mathrm d\bm S=\iint_\varSigma \bm f(\bm P)\cdot\bm n\mathrm d S$$
其中 $\bm n$ 是法向量，因此第二类曲面积分也可以称作曲面的 **通量积分**。

## 格林-高斯-斯托克斯公式

广为熟知的 **牛顿-莱布尼茨** 公式形式如下：

$$F(b)-F(a)=\int_a^b F'(x)\mathrm{d}x$$

除了在几何上将原函数差值解释为导函数与坐标轴所围面积的符号和外，还可以这么解释：

$D = [a,b]$ 除了是一个区间以外，还可以被看作是一维空间 $\mathbb{R}$ 上的一个 **单连通区域**，这个单连通区域的边界 $\partial D = \{a, b\}$。于是 $F(b)-F(a)$ 就可以被看作是单连通区域边界 $\partial D$ 上的 **环路积分**，由于这个边界是 $0$ 维的，而“ $0$ 重积分” 并没有自己的符号，此处先借用一重积分的符号表达，即$\displaystyle\oint_{\partial D}F(x)\mathrm{d}x$，于是可以把牛顿-莱布尼茨公式改写为

$$\oint_{\partial D}F(x)\mathrm{d}x=\int_D F'(x)\mathrm dx$$

左侧可以视为 $F(x)$ 在区域 $D$ 上的“通量”，$F'(x)$ 可以视为 $F(x)$ 在 $D$ 内的“散度”。

### 格林公式

然后顺理成章地得到格林公式的第一式为

$$\boxed{\oint_{\partial D}\bm F\cdot \bm n \mathrm ds=\iint_D (\nabla\cdot\bm F)\mathrm d S}$$

其中 $D$ 是 $\mathbb{R^2}$ 上的有界闭区域，其边界至少是分段光滑的（可以有棱边），$\bm n=(\cos\beta,-\cos\alpha)$ 是向外的单位法向量，$\bm F$ 在 $D$ 内一阶偏导数连续、在 $D$ 上连续，表示**函数 $\bm F$ 在区域 $D$ 的边界 $\partial D$ 的通量等于其散度在 $D$ 内的积分**，这个公式的几何意义是显而易见的。

$\bm F = (P(x,y), Q(x,y))$，定义$\bm R =(Q(x,y), P(x,y))$，将上式展开得
$$\displaystyle\oint_{\partial D}(P,Q)\cdot (\cos \beta, -\cos\alpha) \mathrm ds=
\boxed{\oint_{\partial D}(P\mathrm dy-Q\mathrm dx) =
\iint_D (\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y})\mathrm d S}$$

（框起的部分即同济版高等数学教材中的格林公式）于是得到
$$\displaystyle\oint_{\partial D}(P,Q)\cdot (\cos \beta, \cos\alpha) \mathrm ds=
\iint_D (\frac{\partial P}{\partial x}- \frac{\partial Q}{\partial y})\mathrm d S$$

此时有
$$\boxed{\oint_{\partial D}\bm R\cdot \bm\tau\mathrm ds = \iint_D(\nabla\times\bm R)\mathrm dS}$$
此即格林公式第二式。其中 $D$ 是 $\mathbb{R^2}$ 上的有界闭区域，其边界至少是分段光滑的（可以有棱边），$\bm R$ 在 $D$ 内一阶偏导数连续、在 $D$ 上连续，表示**函数 $\bm R$ 在区域 $D$ 的边界 $\partial D$ 的环量等于其旋度在 $D$ 内的积分**，这个公式的几何意义是显而易见的。



### 高斯公式

将格林公式第一式继续向外推广，得到高斯公式

$$\boxed{\oiint_{\partial D}\bm F(\bm P)\cdot \bm n \mathrm dS=\iiint_D (\nabla\cdot\bm F)\mathrm d V}$$

其中 $D$ 是 $\mathbb{R^3}$ 上的有界闭区域，其边界至少是分片光滑的（可以有棱边），$\bm n$ 是向外的法向量，$\bm F$ 在 $D$ 内一阶偏导数连续、在 $D$ 上连续，同样表示**函数 $\bm F$ 在区域 $D$ 的边界 $\partial D$ 的通量等于其散度在 $D$ 内的积分**。可以把 $\bm n \mathrm dS$ 记作 $\mathrm d\bm S$。

::: note

记 $\bm F(\bm P) = (Q(\bm P), R(\bm P), S(\bm P))$ 把它展开，即得到 
$$\boxed{\oiint_{\partial D} Q \mathrm dy\mathrm dz + R\mathrm dx\mathrm dz + S\mathrm dx\mathrm dy 
= \iiint_D (\frac{\partial Q}{\partial x}+\frac{\partial R}{\partial y}+\frac{\partial S}{\partial z})\mathrm dV}$$

此同济版高等数学教材中的高斯公式。

:::

::: tip

在物理上，由高斯定律的微分形式得到 $\nabla \cdot \bm D = \rho$，于是

$$\oiint_{\partial D}\bm D\cdot \mathrm d\bm S = \iiint_D (\nabla\cdot\bm D)\mathrm d V = \iiint_D\rho\mathrm dV=Q$$

便得到了高斯定律的积分形式。

:::

### 斯托克斯公式

将格林公式第二式向三维非闭合曲面推广，得到斯托克斯公式

$$\iint_\varSigma \nabla \times \bm F \cdot \mathrm d\bm S = \oint_\Gamma \bm F \cdot \mathrm d \bm r$$

其中 $\varSigma$ 是 $\mathbb{R^3}$ 上的定向曲面，其边界至少是分片光滑的（可以有棱边），$\Gamma = \partial \varSigma$，$\bm n$ 是向外的法向量，$\bm F$ 在 $\varSigma$ 内一阶偏导数连续、在 $\varSigma$ 上连续，同样表示**函数 $\bm F$ 在区域 $\varSigma$ 的边界 $\partial \varSigma$ 的环量等于其旋度在 $\varSigma$ 内的积分**。

::: note

记 $\bm F(\bm P) = (Q(\bm P), R(\bm P), S(\bm P))$ 把它展开，即得到 


$$
\begin {aligned}

\iint_\varSigma 
    \begin{vmatrix}
        \bm e_x & \bm e_y & \bm e_z \\ \\
        \displaystyle{\frac{\partial}{\partial x}} & \displaystyle{\frac{\partial}{\partial y}} & \displaystyle{\frac{\partial}{\partial z}} \\ \\
        Q & R & S \\
    \end{vmatrix}
    \cdot \mathrm d\bm S 
& =
\iint_\varSigma 
    \begin{vmatrix}
        \mathrm dy\mathrm dz & \mathrm dx\mathrm dz & \mathrm dx\mathrm dy \\ \\
        \displaystyle{\frac{\partial}{\partial x}} & \displaystyle{\frac{\partial}{\partial y}} & \displaystyle{\frac{\partial}{\partial z}} \\ \\
        Q & R & S \\
    \end{vmatrix} \\
& =
\iint_\varSigma 
    (\frac{\partial S}{\partial y} - \frac{\partial R}{\partial z}) \mathrm dy\mathrm dz
+
    (\frac{\partial Q}{\partial z} - \frac{\partial S}{\partial x}) \mathrm dx\mathrm dz
+
    (\frac{\partial R}{\partial x} - \frac{\partial Q}{\partial y}) \mathrm dx\mathrm dy
\\
& =
\oint_\Gamma Q\mathrm dx+R\mathrm dy+S\mathrm dz
\end{aligned}
$$

最后两个式子：
$$\boxed{
\iint_\varSigma 
    (\frac{\partial S}{\partial y} - \frac{\partial R}{\partial z}) \mathrm dy\mathrm dz
+
    (\frac{\partial Q}{\partial z} - \frac{\partial S}{\partial x}) \mathrm dx\mathrm dz
+
    (\frac{\partial R}{\partial x} - \frac{\partial Q}{\partial y}) \mathrm dx\mathrm dy
=
\oint_\Gamma Q\mathrm dx+R\mathrm dy+S\mathrm dz
}$$

此同济版高等数学教材中的斯托克斯公式。

:::

### 总结

::: important

**牛顿-莱布尼茨公式**

$$\boxed{\int_a^b \nabla F\mathrm dx = F(b) - F(a)}$$
其中 $F$ 在 $(a,b)$ 可导，在 $(a,b)$ 连续，且 $F'$ 在 $[a,b]$ 黎曼可积。

**格林公式第一式**

$$\boxed{\iint_D (\nabla\cdot \bm F) \mathrm dS = \oint_{\partial D} \bm F \cdot \bm n \mathrm ds}$$
其中 $D$ 是某个 $\mathbb R^2$ 上的有界闭区域，其边界至少是分段光滑的（可以有棱边），$\bm F$ 在 $D$ 内一阶偏导数连续，在 $D$ 上连续。

**高斯公式**

$$\boxed{\iiint_D (\nabla\cdot \bm F) \mathrm dV = \oiint_{\partial D} \bm F \cdot \mathrm d\bm S}$$
其中 $D$ 是某个 $\mathbb R^3$ 上的有界闭区域，其边界至少是分片光滑的（可以有棱边），$\bm F$ 在 $D$ 内一阶偏导数连续，在 $D$ 上连续。

均表示**函数在某个闭区域边界的通量等于其散度之积分**，均要求在有界闭区域内部一阶偏导数连续，在闭区域上连续。

**格林公式第二式**

$$\boxed{\iint_D (\nabla\times \bm F) \mathrm dS = \oint_{\partial D} \bm F \cdot \bm \tau \mathrm ds}$$
其中 $D$ 是某个 $\mathbb R^2$ 上的有界闭区域，其边界至少是分段光滑的（可以有棱边），$\bm F$ 在 $D$ 内一阶偏导数连续，在 $D$ 上连续。

**斯托克斯公式**

$$\boxed{\iint_D (\nabla\times \bm F)\cdot \mathrm d\bm S = \oint_{\partial D} \bm F \cdot \bm \tau \mathrm ds}$$
其中 $D$ 是某个 $\mathbb R^3$ 上的定向曲面，其边界至少是分片光滑的（可以有棱边），$\bm F$ 在 $D$ 内一阶偏导数连续，在 $D$ 上连续。

均表示**函数在某个闭合面上边界的环量等于其旋度之积分**，均要求在有界闭区域内部一阶偏导数连续，在闭区域上连续。

:::

### 高斯公式和斯托克斯公式在电磁学中的应用

::: tip

### Maxwell 方程组

Maxwell方程组的微分形式为

$$\nabla\cdot \bm D=\rho_f \tag{1}$$
$$\nabla \cdot \bm B = 0 \tag{2}$$
$$\nabla \times \bm E = -\frac{\partial \bm B}{\partial t} \tag{3}$$
$$\nabla \times \bm H = \bm J_f + \frac{\partial \bm D}{\partial t} \tag{4}$$

把 $(1), (2)$ 代入高斯公式，得

$$\oiint_{\partial\varSigma} \bm D \cdot \mathrm d\bm S  = \iiint_\varSigma (\nabla\cdot \bm D)\mathrm dV =\iiint_\varSigma \rho_f\mathrm dV = Q_f$$
$$\oiint_{\partial\varSigma} \bm B \cdot \mathrm d\bm S  = \iiint_\varSigma (\nabla\cdot \bm B)\mathrm dV = 0$$

把 $(3), (4)$ 代入斯托克斯公式，得

$$\oint_\Gamma \bm E \cdot \mathrm d \bm r = \iint_\varSigma \nabla \times \bm E \cdot \mathrm d\bm S = \iint_\varSigma -\frac{\partial \bm B}{\partial t} \cdot \mathrm d\bm S = -\frac{\partial}{\partial t} \iint_\varSigma \bm B\cdot \mathrm d\bm S = - \frac{\partial \varPsi_B}{\partial t}$$

$$\oint_\Gamma \bm H \cdot \mathrm d \bm r = \iint_\varSigma \nabla \times \bm H \cdot \mathrm d\bm S = \iint_\varSigma (\bm J_f+\frac{\partial \bm D}{\partial t}) \cdot \mathrm d\bm S = I_f + \frac{\partial}{\partial t} \iint_\varSigma \bm D\cdot \mathrm d\bm S $$

总结得

$$\boxed{\begin{matrix}\begin{aligned}
\oiint_{\partial\varSigma} \bm D \cdot \mathrm d\bm S  &= Q_f \\
\oiint_{\partial\varSigma} \bm B \cdot \mathrm d\bm S  &= 0 \\
\end{aligned} \\
\begin{aligned}
\oint_\Gamma \bm E \cdot \mathrm d \bm r &= - \frac{\partial \varPsi_B}{\partial t} \\
\oint_\Gamma \bm H \cdot \mathrm d \bm r &= I_f + \frac{\partial \varPsi_D}{\partial t} 
\end{aligned}\end{matrix}}
$$

便得到Maxwell方程组的积分形式。

:::
