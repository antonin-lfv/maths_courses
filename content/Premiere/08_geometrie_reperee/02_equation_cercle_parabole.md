---
title: 'Équation cartésienne d’un cercle et d’une parabole'
weight: 2
cascade:
  type: docs
---

## Équation cartésienne d’un cercle

> [!TIP] **Propriété et définition**  
> Soient \(A(x_A; y_A)\) un point du plan et \(R\) un réel strictement positif.  
> L’ensemble des points \(M(x; y)\) du plan vérifiant l’égalité :
>
> \[
(x - x_A)^2 + (y - y_A)^2 = R^2
\]
>
> est le **cercle \(\mathscr{C}\)** de centre \(A\) et de rayon \(R\).  
> Cette égalité est une **équation cartésienne** du cercle \(\mathscr{C}\).
> ![](/images/image121.png)

{{% details title="Exemple" closed="true" %}}
On considère l’équation :
\[
(x - 3)^2 + (y + 1)^2 = 4
\]

Cette équation est équivalente à :
\[
(x - 3)^2 + (y - (-1))^2 = 4
\]

C’est celle du cercle de centre \(A(3; -1)\) et de rayon \(R = \sqrt{4} = 2\) unités de longueur.
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Dans le cas où un cercle \(\mathscr{C}\) est défini par un diamètre \([AB]\), on peut trouver une équation cartésienne de \(\mathscr{C}\) :
> - en utilisant l’équivalence \(M \in \mathscr{C} \Leftrightarrow \overrightarrow{MA} \cdot \overrightarrow{MB} = 0\) ;  
> - ou en déterminant les coordonnées du centre \(I\) et le rayon égal à la longueur \(AI\).


## Équation cartésienne d’une parabole

> [!TIP] **Définition et propriété**  
> Soient \(a\), \(b\) et \(c\) trois réels tels que \(a \neq 0\).  
> La fonction polynomiale de degré 2 :
>
> \[
f(x) = ax^2 + bx + c
\]
>
> a pour courbe représentative une **parabole** d’équation :
>
> \[
y = ax^2 + bx + c
\]
>
> Cette parabole admet :  
> - pour axe de symétrie la droite \(x = -\dfrac{b}{2a}\) ;  
> - pour sommet le point \(S\left(-\dfrac{b}{2a}; f\left(-\dfrac{b}{2a}\right)\right)\).
> ![](/images/image122.png)

{{% details title="Exemple" closed="true" %}}
On considère l’équation :
\[
y = -x^2 + 2x - 5
\]
C’est celle d’une parabole.

![](/images/image123.png)

Par identification, on a \(a = -1\), \(b = 2\), \(c = -5\).

L’axe de symétrie a pour équation :
\[
x = -\frac{b}{2a} = -\frac{2}{2 \times (-1)} = 1
\]

Le sommet \(S\) a pour coordonnées :
\[
x_S = 1, \quad y_S = -1^2 + 2 \times 1 - 5 = -4
\]
Donc \(S(1; -4)\).
{{% /details %}}


## Exercice résolu — Déterminer une équation de cercle

> [!NOTE] **Énoncé**  
> Soient \(A(1;1)\) et \(B(5;-2)\).  
> 1. Déterminer une équation du cercle \(\mathscr{C}\) de diamètre \([AB]\).  
> 2. Déterminer les coordonnées de son centre et la valeur de son rayon.
> ![](/images/image124.png)

{{% details title="Solution commentée" closed="true" %}}

### 1ere méthode
Soit \(M(x;y)\) un point du cercle.  
\[
M \in \mathscr{C} \Leftrightarrow \overrightarrow{MA} \cdot \overrightarrow{MB} = 0
\]
\[
\overrightarrow{MA} \begin{pmatrix} 1 - x \\ 1 - y \end{pmatrix}, \quad
\overrightarrow{MB} \begin{pmatrix} 5 - x \\ -2 - y \end{pmatrix}
\]
\[
(1 - x)(5 - x) + (1 - y)(-2 - y) = 0
\]
\[
x^2 - 6x + y^2 + y = -3
\]
\[
(x - 3)^2 - 9 + (y + \tfrac{1}{2})^2 - \tfrac{1}{4} = -3
\]
\[
(x - 3)^2 + (y + \tfrac{1}{2})^2 = \tfrac{25}{4}
\]
Le cercle a donc pour centre \(I(3; -\tfrac{1}{2})\) et pour rayon \(R = \tfrac{5}{2}\).

### 2eme méthode
Le centre est \(I\left(\dfrac{1 + 5}{2}; \dfrac{1 + (-2)}{2}\right) = (3; -\tfrac{1}{2})\).  
Le carré du rayon est :
\[
AI^2 = (3 - 1)^2 + (-\tfrac{1}{2} - 1)^2 = \tfrac{25}{4}
\]
Donc l’équation est :
\[
(x - 3)^2 + (y + \tfrac{1}{2})^2 = \tfrac{25}{4}
\]
{{% /details %}}


## Exercice résolu — Déterminer l’équation d’une parabole

> [!NOTE] **Énoncé**  
> On considère une parabole dont le sommet \(S\) a pour coordonnées \(S(3;5)\) et qui passe par \(A(0;10)\).  
> Déterminer une équation de cette parabole.
> ![](/images/image125.png)

{{% details title="Solution commentée" closed="true" %}}
On cherche l’équation sous la forme :
\[
y = ax^2 + bx + c
\]
avec \(a \neq 0\).

Le sommet \(S\) vérifie :
\[
x_S = -\frac{b}{2a} = 3 \Rightarrow b = -6a
\]

En utilisant les coordonnées de \(S(3;5)\) :
\[
5 = a \times 3^2 + b \times 3 + c = 9a + 3b + c
\]
et les coordonnées de \(A(0;10)\) :
\[
10 = c
\]

On a donc le système :
\[
\begin{cases}
c = 10 \\
b = -6a \\
9a + 3b + c = 5
\end{cases}
\Rightarrow
\begin{cases}
9a + 3(-6a) + 10 = 5 \\
-9a = -5
\end{cases}
\Rightarrow a = \frac{5}{9}
\]
\[
b = -6a = -\frac{10}{3}, \quad c = 10
\]

Donc l’équation de la parabole est :
\[
y = \frac{5}{9}x^2 - \frac{10}{3}x + 10
\]
{{% /details %}}