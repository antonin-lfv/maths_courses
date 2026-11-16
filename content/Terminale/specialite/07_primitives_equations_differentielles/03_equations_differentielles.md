---
title: 'Équations différentielles'
weight: 3
cascade:
  type: docs
---

Dans cette page, \(a\) et \(b\) sont des réels, \(I\) un intervalle de \(\mathbb{R}\), et \(f\) une fonction définie sur \(I\).

## Équations \(y' = ay\)

> [!TIP] **Théorème**
>
> Les solutions sur \(\mathbb{R}\) de l’équation différentielle \(y' = ay\) sont les fonctions
> \[
x \mapsto Ce^{ax}, \quad C \in \mathbb{R}.
\]

> [!TIP] **Propriété**
>
> Pour tout couple de réels \((x_0\,;\,y_0)\), l’équation \(y' = ay\) admet une **unique** solution \(f\) sur \(\mathbb{R}\) vérifiant \(f(x_0) = y_0\) (on parle de **condition initiale**).

{{% details title="Exemple" closed="true" %}}
Les solutions de \(y' = 0{,}5y\) sont les fonctions \(x \mapsto Ce^{0{,}5x}\), \(C \in \mathbb{R}\).  
La solution vérifiant \(y(0) = 2\) satisfait \(Ce^0 = 2\), soit \(C = 2\) : c’est \(x \mapsto 2e^{0{,}5x}\).

![](/images/image295.png)
{{% /details %}}

## Équations \(y' = ay + b\)

> [!TIP] **Théorème**
>
> - Si \(a \neq 0\), les solutions sur \(\mathbb{R}\) de \(y' = ay + b\) sont les fonctions
> \[
x \mapsto Ce^{ax} - \frac{b}{a}, \quad C \in \mathbb{R}.
\]
>   La fonction constante \(x \mapsto -\dfrac{b}{a}\) est une **solution particulière** de l’équation.
> - Si \(a = 0\), l’équation s’écrit \(y' = b\), et ses solutions sont les fonctions \(x \mapsto bx + C\), \(C \in \mathbb{R}\).

> [!TIP] **Propriété**
>
> Pour tout couple de réels \((x_0\,;\,y_0)\), l’équation \(y' = ay + b\) admet une unique solution \(f\) sur \(\mathbb{R}\) telle que \(f(x_0) = y_0\).

> [!IMPORTANT] **Remarque**
>
> Pour retrouver la solution particulière constante, on cherche \(y\) constante, donc \(y' = 0\) : \(0 = ay + b\) donne \(y = -\frac{b}{a}\).

{{% details title="Exemple" closed="true" %}}
Les solutions de \(y' = -2y + 4\) sont les fonctions \(x \mapsto Ce^{-2x} - \dfrac{4}{-2} = Ce^{-2x} + 2\), \(C \in \mathbb{R}\).  
Celle qui vérifie \(y(0) = -1\) satisfait \(C + 2 = -1\), soit \(C = -3\) : c’est \(x \mapsto -3e^{-2x} + 2\).  
Toutes les solutions tendent vers 2 en \(+\infty\).

![](/images/image296.png)
{{% /details %}}

## Équations \(y' = ay + f\)

> [!TIP] **Théorème**
>
> Soit \(f\) une fonction définie sur \(I\), et \(y_0\) une solution particulière sur \(I\) de l’équation \(y' = ay + f\). Les solutions sur \(I\) de cette équation sont les fonctions
> \[
x \mapsto Ce^{ax} + y_0(x), \quad C \in \mathbb{R}.
\]

> [!IMPORTANT] **Remarque**
>
> Autrement dit, une solution générale s’obtient en ajoutant à une solution particulière les solutions de l’**équation homogène associée** \(y' = ay\). En effet, \(g\) est solution si et seulement si \((g - y_0)' = a(g - y_0)\).

{{% details title="Exemple" closed="true" %}}
On considère \((E)\) : \(y' + y = 2x + 3\), c’est-à-dire \(y' = -y + 2x + 3\).

- On cherche une solution particulière affine \(y_0(x) = mx + p\) : \(y_0' + y_0 = m + mx + p\), qui doit valoir \(2x + 3\) pour tout \(x\). Par identification, \(m = 2\) et \(m + p = 3\), soit \(p = 1\) : \(y_0(x) = 2x + 1\).
- L’équation homogène \(y' = -y\) a pour solutions \(x \mapsto Ce^{-x}\).
- Les solutions de \((E)\) sont donc les fonctions \(x \mapsto Ce^{-x} + 2x + 1\), \(C \in \mathbb{R}\).
{{% /details %}}

## Modéliser une situation avec une équation différentielle

> [!TIP] **Modélisation**
>
> Modéliser un phénomène par une équation différentielle, c’est traduire une relation entre une grandeur qui évolue (par exemple au cours du temps \(t\)) et sa vitesse de variation, c’est-à-dire sa dérivée.

> [!IMPORTANT] **Notations**
>
> En sciences, la dérivée d’une grandeur \(y\) par rapport au temps est souvent notée \(\dfrac{\mathrm{d}y}{\mathrm{d}t}\) (ou \(\dot{y}\)) au lieu de \(y'\). La lettre de la variable et de la fonction s’adaptent à la grandeur étudiée : \(N(t)\) pour une population, \(T(t)\) pour une température, etc.

{{% details title="Exemple" closed="true" %}}
Une tasse de thé à 90 °C est posée dans une pièce à 20 °C. D’après la loi de refroidissement de Newton, sa température \(T\) (en °C) en fonction du temps \(t\) (en min) vérifie \(T' = -0{,}1(T - 20)\), soit \(T' = -0{,}1T + 2\), avec \(T(0) = 90\).

- Les solutions sont \(t \mapsto Ce^{-0{,}1t} - \dfrac{2}{-0{,}1} = Ce^{-0{,}1t} + 20\).
- \(T(0) = C + 20 = 90\), donc \(C = 70\) : \(T(t) = 70e^{-0{,}1t} + 20\).
- Le thé atteint 40 °C lorsque \(70e^{-0{,}1t} = 20\), soit \(e^{-0{,}1t} = \dfrac{2}{7}\), c’est-à-dire \(t = 10\ln\left(\dfrac{7}{2}\right) \approx 12{,}5\) min.

![](/images/image297.png)
{{% /details %}}

## Résoudre une équation différentielle de la forme \(y' = ay + b\)

> [!NOTE] **Méthode 4 — Résoudre \(y' = ay + b\)**
>
> 1. Résoudre sur \(\mathbb{R}\) : a. \(y' = -4y\) ; b. \(3y' - y = 0\).
> 2. Déterminer la solution de \(y' = 2y - 6\) vérifiant \(y(0) = 5\).

{{% details title="Solution commentée" closed="true" %}}
**1.** a. Équation \(y' = ay\) avec \(a = -4\) : les solutions sont \(x \mapsto Ce^{-4x}\), \(C \in \mathbb{R}\).  
b. \(3y' - y = 0 \iff y' = \dfrac{1}{3}y\) : les solutions sont \(x \mapsto Ce^{x/3}\), \(C \in \mathbb{R}\).

**2.** Ici \(a = 2\) et \(b = -6\) : les solutions sont \(x \mapsto Ce^{2x} - \dfrac{-6}{2} = Ce^{2x} + 3\).  
\(y(0) = C + 3 = 5\), donc \(C = 2\) : la solution cherchée est \(x \mapsto 2e^{2x} + 3\).
{{% /details %}}

## Résoudre une équation différentielle de la forme \(y' = ay + f\)

> [!NOTE] **Méthode 5 — Résoudre \(y' = ay + f\) à l’aide d’une solution particulière**
>
> On considère l’équation \((E)\) : \(y' - 2y = -4x^2 + 2\).
> 1. Déterminer une fonction polynôme \(y_0\) de degré 2 solution de \((E)\).
> 2. Résoudre l’équation homogène associée.
> 3. En déduire toutes les solutions de \((E)\).

{{% details title="Solution commentée" closed="true" %}}
**1.** On pose \(y_0(x) = \alpha x^2 + \beta x + \gamma\). Alors \(y_0'(x) = 2\alpha x + \beta\) et
\[
y_0'(x) - 2y_0(x) = -2\alpha x^2 + (2\alpha - 2\beta)x + (\beta - 2\gamma).
\]
Par identification avec \(-4x^2 + 0x + 2\) : \(-2\alpha = -4\), \(2\alpha - 2\beta = 0\) et \(\beta - 2\gamma = 2\), d’où \(\alpha = 2\), \(\beta = 2\), \(\gamma = 0\).  
\(y_0(x) = 2x^2 + 2x\).

**2.** L’équation homogène \(y' - 2y = 0\), soit \(y' = 2y\), a pour solutions \(x \mapsto Ce^{2x}\), \(C \in \mathbb{R}\).

**3.** Les solutions de \((E)\) sont les fonctions \(x \mapsto Ce^{2x} + 2x^2 + 2x\), \(C \in \mathbb{R}\).
{{% /details %}}
