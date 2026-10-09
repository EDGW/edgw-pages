---
icon: book
title: 数理逻辑
category: 
    - 数学

---

## 命题

::: info 概念提要

命题，真值；原子命题，逻辑运算符（联结词），复合命题

:::

**命题** 是一个陈述句，他有确定的 **真值**，其真值可以记作 $T, F$。
命题是一个复合结构，最简单的命题称 **原子命题（简单命题）**，命题可以通过 **逻辑运算符（联结词）** 来复合，变成 **复合命题**。

## 联结词

### 否定、合取、析取

$\neg,\land,\lor$ 分别表示**否定**，**合取**（逻辑与），**析取**（逻辑或），是三个基本联结词。

### 蕴含

$a\rightarrow b$ 称为 $a$ 蕴含 $b$，若 $a$ 为真，则 $a\rightarrow b$ 的真值与 $b$ 相同，若 $a$ 为假，则 $a\rightarrow b$ 为真。

即 

::: important

$$\boxed{a\rightarrow b \Leftrightarrow \neg a \lor b}$$

:::

若 $a \rightarrow b, b \rightarrow a$ ，称 $a,b$ **等价**，记作 $a\leftrightarrow b$。

即有

::: important

$$\boxed{a\leftrightarrow b \Leftrightarrow (\neg a \lor b) \land (\neg b \lor a)}$$

:::

### 完备性，与非和或非

见 [下文](#联结词完备性-与非和或非)。

## 命题公式

### 公式的构成

显然简单命题是命题，所以其真值是确定的，称为 **命题常元** ，现在，为了表示变量，可以引入一类具有不确定的值的项，称作 **命题变元** ，记作 $p,q,r$ 等字母，值得注意的是，**命题变元不是命题**。

把命题变元、命题常元用联结词复合起来，可以得到 **公式（合式公式、命题公式）**，而它们本身是 **原子命题公式**，**公式**不一定是命题。

命题公式的 **层数** 可以用命题符号树的深度来表示，单个的命题变项称作 **0层公式**。
$(p\lor q) \land p$ 就是 2 层公式。

### 公式的赋值

对命题公式 **赋值（解释）** 后，命题公式就有了确定的真值，变成命题。若赋值结果是真命题，称作 **成真赋值**，反之称作 **成假赋值**。将所有赋值情况和真值列成表，称作 **真值表**。

若 $A$ 在任意赋值下为假，称 **永假式（矛盾式）**，否则称 **可满足式**。 若 $A$ 在任意赋值下为真，称 **永真式（重言式）**，显然重言式是可满足式。

### 公式的等值

符号 $\Leftrightarrow$ 称作 **等值**， 他 **不是** 联结词。

当 $A\leftrightarrow B$ 重言的时候，称 $A \Leftrightarrow B$，即 $A,B$ 的真值表完全相同。

::: details 等值式模式

否定联结词具有 **双重否定律**(1)；
析取、合取符号具有**幂等律**(2)、**交换律**(3)、**结合律**(4)、**分配律**(5)、

**德摩根律**(6)

取反展开变号规则：

$$\boxed{
    \begin{matrix}
        \neg(A \lor B)\Leftrightarrow\neg A \land \neg B \\ 
        \neg(A \land B)\Leftrightarrow\neg A \lor \neg B
    \end{matrix}
}$$

**吸收律**(7)

$$\boxed{
    \begin{matrix}
        A \lor (A\land B) \Leftrightarrow A \\ 
        A \land (A\lor B) \Leftrightarrow A
    \end{matrix}
}$$

**零律**(8)
$$A\lor 1 \Leftrightarrow 1, A \land 0 \Leftrightarrow 0$$

**同一律**(9)
$$A\lor 0 \Leftrightarrow A, A \land 1 \Leftrightarrow A$$

**排中律、矛盾律**(10,11)
$$A\lor\neg A \Leftrightarrow 1, A \land \neg A \Leftrightarrow 0$$

**蕴含**(12)

$$\boxed{a\rightarrow b \Leftrightarrow \neg a \lor b}$$

**等价**(13)

$$\boxed{a\leftrightarrow b \Leftrightarrow (\neg a \lor b) \land (\neg b \lor a)}$$

**假言易位、等价否定**(14,15)

即逆否命题

$$\boxed{
    \begin{matrix}
    A \rightarrow B & \Leftrightarrow & \neg B \rightarrow \neg A &  \\
    A \leftrightarrow B & \Leftrightarrow & \neg B \leftrightarrow \neg A & \Leftrightarrow & \neg A \leftrightarrow \neg B
    \end{matrix}
}$$

**归谬论**(16)

$$\boxed{(A\rightarrow B)\land(A\rightarrow \neg B)\Leftrightarrow \neg A}$$

:::

以上16组称作 **等值式模式**。

应用这些模式得到的具体的等值式称为等值式模式的 **代入实例**。由已知的等值式推演出另外一些等值式的过程称作**等值演算**。

把等值式两边的式子替换为与之等值的式子，比如说$A\Leftrightarrow B$，$A\Leftrightarrow C$，用 $C$ 替换 $A$ 得到 $C \Leftrightarrow B$（由于等值是等价关系，这是显然的），这种操作称为 **置换**。

### 范式

显然等值方法可以让我们化简公式，某种公认的规范化简后公式可以称作范式，这里有 **合取范式** 和 **析取范式**。

一个命题变项 $p$ 或者其否定 $\neg p$ 称作 **literal(字面量、文字)**，由若干 literal 析取而成的式子叫做**简单析取式**，由若干 literal 合取而成的式子叫做**简单合取式**。

$p \lor \neg q \lor r$ 是**简单析取式**，$p \land \neg q \land \neg r$ 是**简单合取式**。

由简单合取式（简单析取式）析取（合取）而成的式子称作**析取范式**（**合取范式**）。

这里可能有点绕，也就是说我们想把公式尽可能展平，使他成为由某个基本单位进行若干次相同运算的结果，这里的基本单位就是简单式子（因为他已经足够*基本*），简单析取式合取运算后就是合取范式，简单合取式析取运算后就是简单析取式。

$(p \lor \neg q \lor r) \land (\neg p \lor \neg q \lor r)$ 就是合取范式，$(p \land \neg q \land r) \lor (\neg p \land \neg q \land r)$ 就是析取范式。

### 化简成范式

> 以 $\neg(\neg (a\rightarrow b) \rightarrow (a \land c))$ 为例

1. 注意到范式没有联结词，因此运用置换消去所有联结词。

> $\Leftrightarrow\neg(\neg\neg (\neg a\lor b) \lor (a \land c))$

2. 注意到范式只允许最内层括号内存在否定词，因此用德摩定理、双重否定律等替换内移所有否定词。同时进行一些简单化简。
> $\Leftrightarrow\neg((\neg a\lor b) \lor (a \land c))$
>
> $\Leftrightarrow\neg(\neg a\lor b) \land \neg (a \land c)$
>
> $\Leftrightarrow(a \land \neg b) \land (\neg a \lor \neg c)$
>
> $\Leftrightarrow a \land \neg b \land (\neg a \lor \neg c)$
>
> 注意到上式已经是一个合取范式了。
> 我们可以进一步化简：
> 
> $\Leftrightarrow a \land \neg b \land \neg c$
> 
> 这也是一个合取范式，注意到**一个式子可以有多个（无限多个，比如说添加冗余项）范式**。

3. 用分配律移除不想要的外层运算符。同时进行一些简单化简。
>
> $\Leftrightarrow\boxed{a \land \neg b} \land (\boxed{\neg a} \lor \boxed{\neg c})$
>
> $\Leftrightarrow(\boxed{a\land b \land \neg a}) \lor(\boxed{a \land \neg b \land \neg c})$
>
> $\Leftrightarrow({a\land b \land \neg a}) \lor({a \land \neg b \land \neg c})$
> 
> 注意到上式已经是一个析取范式了。
> 我们可以进一步化简：
>
> $\Leftrightarrow a \land \neg b \land \neg c$
> 
> 我们得到了一个析取范式，注意到他和上面的合取范式长得一样，也就是说 **简单合取式/简单析取式同时是合取范式和析取范式**。

从上我们可以得到以下结果

:::important

1. **范式存在定理** 任一命题公式都存在与之等值的析取范式和合取范式。

2. 析取范式和合取范式是不唯一的，并有无穷多个。

3. 简单合取式/简单析取式同时是合取范式和析取范式

:::

### 项序

我们发现一个含有 $n$ 个命题变项的确定的简单合取式/析取式可能会有多达 $\mathrm A _n^n$ 个不同的表示方法（考虑调换他们的顺序；如果说这 $n$ 个命题变项中有重复项，则可能没有这么多个），而现在我们想要唯一化这个式子。

**去重** 每个命题变项和他的否定词一共最多出现一次。
> 这样一来，$p\land p$ 和 $p\land \neg p$ 就被排除了，他们分别被化简成 $p$ 和 $0$。

**排序** 每个 literal 按照其命题变项的字典序排列。
> 这样一来，$p \land q$ 和 $q \land p$ 就被统一了，他们只能被表示为 $p \land q$。

经过这两步之后，若这个式是简单合取式，则称其为 **极小项**，若是简单析取式，则称其为 **极大项**。

现在每确定 $n$ 个互不相通的命题变项，再分别确定他们的 literal（肯定或是否定），就可以写出唯一的极小项/极大项了。

对于简单合取式，只有每个 literal 都为真时才为真，因此一个简单合取式只有一个成真赋值，剩下的都是成假赋值；对于简单析取式，则只有一个成假赋值，剩下的都是成真赋值。因此，**在确定了所有的命题变项后，可以用成真（成假）赋值来唯一确定这个简单合取式（析取式）及其所有 literal**。

某个极大（极小）项的成真（成假）赋值是一个二进制数，这个数字就称为这个项的**下标（项序）**。

> 比如说 $p,q,r$ 构成的极小项 $p\land q \land \neg r$ 的成真赋值为 $110$，则这个极小项的下标为 $6$。

下标为 $i$ 的最小项、最大项分别记作 $m_i, M_i$。

### 主范式

只含有*互不重复*[^first]的极小项（极大项）的析取范式（合取范式）称作**主析取范式**（**主合取范式**）。

[^first]: 高等教育出版社出版的《离散数学》第三版教材中没有这个限定词。

主析取范式可以简单地表达为 $m_1 \lor m_3 \lor m_5 \lor m_6$，主合取范式也类似。

显然一个公式的真值表是唯一的，然后每个真值和一个简单合取式（析取式）又是唯一对应的，因此，

::: important

**任何命题公式都存在与之等值的主析取范式和主合取范式,并且是唯一的**。

> 这里的唯一不包含主析取范式或者主合取范式的每个简单式的列出顺序，他们可以以任意顺序列出，习惯上一般按照下标从小到大。

:::

### 联结词完备性，与非和或非

接 [上文](#完备性-与非和或非)。

记 $\mathbb Z_2 = \{0,1\}$，定义 $F:\mathbb Z_2^n\rightarrow \mathbb Z_2$ 为 $n$ 元真值函数。对于 $n$ 个确定真值输入，它只会输出一个确定的真值。

那么很显然我们可以写出任意一个 $n$ 元真值函数的真值表，也就是说 **每个真值函数都与唯一的一个主析取范式(主合取范式)等值**，而每个主析取范式对应无穷多个等值的命题公式，所以**每个真值函数对应无穷多个等值的命题公式,每个命题公式又都对应唯一的等值的真值函数**。

现在我们可以用真值函数来研究命题公式的性质。

> 命题公式用联结词表示，那么到底有多少个联结词才能完整表述一个任一等值的命题公式呢？也就是说，究竟要有多少个联结词，才能表达出所有的真值函数？显然 $n$ 元真值函数只有 $2^{2^n}$ 个，是有限的，这个问题就变得简单的多。

把联结词集合记作 $S$，若如果任何 $n$ 元真值函数都可以由仅含 $S$ 中的联结词构成的公式表示,那么称 $S$ 是**联结词完备集**。

:::important

- $\{\neg, \lor, \land \}$ 显然是完备的。

- $\neg$ 与 $\{\rightarrow, \lor, \land\}$ 中的任意一个搭配都是完备的，因为后者可以通过 $\neg$ 互相转化。
- $\{\neg, \leftrightarrow\}$ 是不完备的。

- $\{\rightarrow, \lor, \land, \leftrightarrow\}$ 是不完备的（所以显然他们的子集也是不完备的）。
> 也就是说，在 $\neg, \lor,\land,\rightarrow,\leftrightarrow$ 构成的完备集中，一定会出现 $\neg$。

:::

记 $\neg (a\land b)$ 为 $a \uparrow b$，称作**与非**；记 $\neg (a\lor b)$ 为 $a \downarrow b$，称作**或非**。

则 $\neg p \Leftrightarrow p \uparrow p \Leftrightarrow p \downarrow p$。

于是 $p \land q \Leftrightarrow \neg[\neg (p\land q)] \Leftrightarrow \neg (p \uparrow q) \Leftrightarrow (p \uparrow q) \uparrow (p \uparrow q)$，同理也有 $p\lor q \Leftrightarrow (p \downarrow q)\downarrow (p \downarrow q)$。

还可以从另一个方向得到另外两条式子，一共有

$$\boxed{
    \begin{matrix} 
    \neg p & \Leftrightarrow & p \uparrow p & \Leftrightarrow & p \downarrow p \\
    p \land q & \Leftrightarrow & (p \uparrow q) \uparrow (p \uparrow q) & \Leftrightarrow & (p \downarrow p) \downarrow (q \downarrow q) \\ 
    p \lor q & \Leftrightarrow & (p \downarrow q) \downarrow (p \downarrow q) & \Leftrightarrow & (p \uparrow p) \uparrow (q \uparrow q)
    \end{matrix}
}$$

我们发现 $\neg,\land,\lor$ 都可以只用 $\uparrow, \downarrow$ 中的任意一个来表示，因此

::: important

 - $\{\uparrow\}, \{\downarrow\}$ 都是完备的。

:::