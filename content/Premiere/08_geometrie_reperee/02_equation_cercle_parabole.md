---
title: 'Équation cartésienne d’un cercle et d’une parabole'
weight: 2
cascade:
  type: docs
---

## Équation cartésienne d’un cercle

> [!TIP] **Propriété et définition**  
> Soient \(A(x_A; y_A)\) un point du plan et \(R\) un réel strictement positif.  
> Le **cercle \(\mathscr{C}\)** de centre \(A\) et de rayon \(R\) est l’ensemble des points \(M(x; y)\) du plan tels que :
>
> \[
(x - x_A)^2 + (y - y_A)^2 = R^2
\]
>
> Cette égalité est appelée **équation cartésienne** du cercle \(\mathscr{C}\).
> ![](/images/image205.png)

> [!IMPORTANT] **Remarque**  
> Cette équation traduit simplement \(AM^2 = R^2\), c’est-à-dire \(AM = R\), en utilisant la formule de la distance dans un repère orthonormé.

{{% details title="Exemple" closed="true" %}}
On considère l’équation :
\[
(x + 2)^2 + (y - 4)^2 = 9
\]

On la réécrit sous la forme :
\[
(x - (-2))^2 + (y - 4)^2 = 3^2
\]

C’est l’équation du cercle de centre \(A(-2; 4)\) et de rayon \(R = \sqrt{9} = 3\) unités de longueur.
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Lorsqu’un cercle \(\mathscr{C}\) est donné par l’un de ses diamètres \([AB]\), on obtient une équation cartésienne de \(\mathscr{C}\) :
> - soit avec l’équivalence \(M \in \mathscr{C} \Leftrightarrow \overrightarrow{MA} \cdot \overrightarrow{MB} = 0\) ;  
> - soit en calculant les coordonnées du centre \(I\) (milieu de \([AB]\)) et le rayon \(AI\).

## Équation cartésienne d’une parabole

> [!TIP] **Définition et propriété**  
> Soient \(a\), \(b\) et \(c\) trois réels avec \(a \neq 0\).  
> La courbe représentative de la fonction polynôme du second degré \(f : x \mapsto ax^2 + bx + c\) est une **parabole**, d’équation :
>
> \[
y = ax^2 + bx + c
\]
>
> Cette parabole admet :  
> - pour axe de symétrie la droite d’équation \(x = -\dfrac{b}{2a}\) ;  
> - pour sommet le point \(S\left(-\dfrac{b}{2a}; f\left(-\dfrac{b}{2a}\right)\right)\).
> ![](/images/image149.png)

{{% details title="Exemple" closed="true" %}}
On considère la parabole d’équation :
\[
y = 2x^2 + 8x + 3
\]

![](/images/image207.png)

Par identification, \(a = 2\), \(b = 8\), \(c = 3\).

Son axe de symétrie a pour équation :
\[
x = -\frac{b}{2a} = -\frac{8}{2 \times 2} = -2
\]

Son sommet \(S\) a pour coordonnées :
\[
x_S = -2, \quad y_S = 2 \times (-2)^2 + 8 \times (-2) + 3 = 8 - 16 + 3 = -5
\]
soit \(S(-2; -5)\).
{{% /details %}}

## Exercice résolu — Déterminer une équation de cercle

> [!NOTE] **Énoncé**  
> On considère les points \(A(-1;2)\) et \(B(3;4)\).  
> 1. Déterminer une équation du cercle \(\mathscr{C}\) de diamètre \([AB]\).  
> 2. En déduire les coordonnées de son centre et son rayon.
> ![](/images/image208.png)

{{% details title="Solution commentée" closed="true" %}}

**Première méthode : avec le produit scalaire**  
Soit \(M(x;y)\) un point du plan.  
\[
M \in \mathscr{C} \Leftrightarrow \overrightarrow{MA} \cdot \overrightarrow{MB} = 0
\]
avec
\[
\overrightarrow{MA} \begin{pmatrix} -1 - x \\ 2 - y \end{pmatrix}, \quad
\overrightarrow{MB} \begin{pmatrix} 3 - x \\ 4 - y \end{pmatrix}.
\]
D’où :
\[
(-1 - x)(3 - x) + (2 - y)(4 - y) = 0
\]
\[
x^2 - 2x - 3 + y^2 - 6y + 8 = 0
\]
\[
x^2 - 2x + y^2 - 6y = -5
\]
On fait apparaître des carrés (forme canonique) : \(x^2 - 2x = (x-1)^2 - 1\) et \(y^2 - 6y = (y-3)^2 - 9\).
\[
(x - 1)^2 - 1 + (y - 3)^2 - 9 = -5
\]
\[
(x - 1)^2 + (y - 3)^2 = 5
\]
Le cercle a donc pour centre \(I(1; 3)\) et pour rayon \(R = \sqrt{5}\).

**Deuxième méthode : avec le centre et le rayon**  
Le centre est le milieu de \([AB]\) : \(I\left(\dfrac{-1 + 3}{2}; \dfrac{2 + 4}{2}\right)\), soit \(I(1; 3)\).  
Le carré du rayon vaut :
\[
AI^2 = (1 - (-1))^2 + (3 - 2)^2 = 4 + 1 = 5
\]
D’où l’équation :
\[
(x - 1)^2 + (y - 3)^2 = 5
\]
{{% /details %}}

## Exercice résolu — Déterminer l’équation d’une parabole

> [!NOTE] **Énoncé**  
> Une parabole a pour sommet \(S(-1;2)\) et passe par le point \(A(1;10)\).  
> Déterminer une équation de cette parabole.
> ![](/images/image209.png)

{{% details title="Solution commentée" closed="true" %}}
On cherche une équation de la forme :
\[
y = ax^2 + bx + c, \quad a \neq 0.
\]

L’abscisse du sommet donne une première relation :
\[
x_S = -\frac{b}{2a} = -1 \Rightarrow b = 2a
\]

Le sommet \(S(-1;2)\) appartient à la parabole :
\[
2 = a \times (-1)^2 + b \times (-1) + c = a - b + c
\]
et le point \(A(1;10)\) aussi :
\[
10 = a + b + c
\]

On remplace \(b\) par \(2a\) :
\[
\begin{cases}
2 = a - 2a + c = -a + c \\
10 = a + 2a + c = 3a + c
\end{cases}
\]
En soustrayant la première équation à la seconde : \(8 = 4a\), d’où \(a = 2\).  
Puis \(c = 2 + a = 4\) et \(b = 2a = 4\).

Une équation de la parabole est donc :
\[
y = 2x^2 + 4x + 4
\]

*Autre méthode* : avec la forme canonique, \(y = a(x + 1)^2 + 2\) ; le point \(A\) donne \(10 = 4a + 2\), donc \(a = 2\), et \(y = 2(x+1)^2 + 2 = 2x^2 + 4x + 4\).
{{% /details %}}
