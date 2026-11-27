---
title: 'Matrice inverse'
weight: 3
cascade:
  type: docs
---

## Inversibilité d’une matrice

> [!TIP] **Définition**
>
> Une matrice carrée \(A\) d’ordre \(n\) est **inversible** s’il existe une matrice carrée \(B\) d’ordre \(n\) telle que \({AB = I}\) et \({BA = I}\).

> [!TIP] **Propriété (admise)**
>
> Pour deux matrices carrées \(A\) et \(B\) de même ordre : \({AB = I \iff BA = I}\). Il suffit donc de vérifier l’une des deux égalités.

> [!TIP] **Propriété et définition**
>
> Si \(A\) est inversible, la matrice \(B\) telle que \({AB = I}\) est **unique**. On la note \({A^{-1}}\) et on l’appelle **matrice inverse** de \(A\).

{{% details title="Démonstration (unicité)" closed="true" %}}
Supposons \({AB = BA = I}\) et \({AC = CA = I}\). Alors, par associativité, \(B = BI = B(AC) = (BA)C = IC = C\).
{{% /details %}}

> [!TIP] **Propriété (matrices d’ordre 2)**
>
> Soit \({A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}}\). La matrice \(A\) est inversible si et seulement si \({ad - bc \neq 0}\), et dans ce cas
> \[
A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.
\]
> Le nombre \({ad - bc}\) s’appelle le **déterminant** de \(A\).

{{% details title="Démonstration" closed="true" %}}
On pose \({N = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}}\). Un calcul direct donne
\[
\begin{gathered}
AN = \begin{pmatrix} ad - bc & -ab + ba \\ cd - dc & -cb + da \end{pmatrix} = (ad - bc)I \qquad \text{et de même} \\[0.3em]
NA = (ad - bc)I.
\end{gathered}
\]
- Si \({ad - bc \neq 0}\) : \({A \times \dfrac{1}{ad - bc}N = I}\), donc \(A\) est inversible d’inverse \({\dfrac{1}{ad - bc}N}\).
- Si \({ad - bc = 0}\) : \({AN = O}\). Supposons \(A\) inversible ; alors \({N = (A^{-1}A)N = A^{-1}(AN) = O}\), donc \({a = b = c = d = 0}\) et \({A = O}\), qui n’est pas inversible (\({OB = O \neq I}\)) : contradiction. Donc \(A\) n’est pas inversible.
{{% /details %}}

## Écriture matricielle d’un système linéaire

> [!TIP] **Définition**
>
> Soient \(x_1, \dots, x_n\) des inconnues, \(a_{ij}\) et \(b_1, \dots, b_n\) des réels fixés. Le système
> \[
(S) : \begin{cases} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\ \quad\vdots \\ a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n \end{cases}
\]
> est un **système linéaire** de \(n\) équations à \(n\) inconnues.

> [!TIP] **Propriété**
>
> On note \({A = (a_{ij})}\) la matrice des coefficients du système, \({X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}}\) et \({B = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}}\). Alors
> \[
(S) \iff AX = B.
\]
> Si la matrice \(A\) est inversible, le système a une unique solution :
> \[
AX = B \iff X = A^{-1}B.
\]

{{% details title="Démonstration" closed="true" %}}
La première équivalence vient de la définition du produit d’une matrice carrée par une matrice colonne. Si \(A\) est inversible : si \({AX = B}\), alors \({A^{-1}(AX) = A^{-1}B}\), soit \({X = A^{-1}B}\) ; réciproquement, si \({X = A^{-1}B}\), alors \({AX = (AA^{-1})B = B}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Le système \({\begin{cases} 3x - y = 5 \\ x + 2y = 4 \end{cases}}\) s’écrit \({\begin{pmatrix} 3 & -1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}}\). Le déterminant vaut \({6 + 1 = 7 \neq 0}\), donc
\[
\begin{pmatrix} x \\ y \end{pmatrix} = \dfrac{1}{7}\begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 5 \\ 4 \end{pmatrix} = \dfrac{1}{7}\begin{pmatrix} 14 \\ 7 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}.
\]
{{% /details %}}

## Inverser une matrice, résoudre un système

> [!NOTE] **Exercice résolu 1 - Vérifier qu’une matrice est l’inverse d’une autre**
>
> On considère \({A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}}\) et \({B = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}}\). Montrer que \(B\) est l’inverse de \(A\).

{{% details title="Solution commentée" closed="true" %}}
\(AB = \begin{pmatrix} 6 - 5 & -2 + 2 \\ 15 - 15 & -5 + 6 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I\). D’après la propriété admise, \({BA = I}\) aussi : \(A\) est inversible et \({A^{-1} = B}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Déterminer l’inverse à l’aide d’un système**
>
> Soit \({A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}}\).
> 1. Résoudre, pour \(a\) et \(b\) réels quelconques, le système \({\begin{cases} x + 2y = a \\ 3x + 4y = b \end{cases}}\).
> 2. En déduire que \(A\) est inversible et donner \({A^{-1}}\).

{{% details title="Solution commentée" closed="true" %}}
1. En soustrayant 3 fois la première équation à la seconde : \({-2y = b - 3a}\), soit \({y = \dfrac{3}{2}a - \dfrac{1}{2}b}\). Puis \({x = a - 2y = -2a + b}\).
2. Le système s’écrit \({A\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} a \\ b \end{pmatrix}}\) et il a une unique solution pour tout second membre :
\[
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix}.
\]
On pose \({B = \begin{pmatrix} -2 & 1 \\ \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}}\) et on vérifie : \({AB = \begin{pmatrix} -2 + 3 & 1 - 1 \\ -6 + 6 & 3 - 2 \end{pmatrix} = I}\). Donc \({A^{-1} = B}\). (On retrouve la formule avec le déterminant \({4 - 6 = -2}\).)
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Résoudre un système à l’aide de matrices**
>
> On considère le système \({(S) : \begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}}\).
> 1. Écrire \((S)\) sous la forme \({AX = B}\).
> 2. On admet que \(A\) est inversible et que \({A^{-1} = \dfrac{1}{7}\begin{pmatrix} -1 & 3 & 2 \\ 3 & -2 & 1 \\ 5 & -1 & -3 \end{pmatrix}}\) (obtenue à la calculatrice). Résoudre \((S)\).

{{% details title="Solution commentée" closed="true" %}}
1. \({A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{pmatrix}}\), \({X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}}\), \({B = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}}\).
2. \(X = A^{-1}B = \dfrac{1}{7}\begin{pmatrix} -6 + 9 + 4 \\ 18 - 6 + 2 \\ 30 - 3 - 6 \end{pmatrix} = \dfrac{1}{7}\begin{pmatrix} 7 \\ 14 \\ 21 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\).

L’unique solution est \((1\,;\,2\,;\,3)\). Vérification : \({1 + 2 + 3 = 6}\), \({2 - 2 + 3 = 3}\), \({1 + 4 - 3 = 2}\).
{{% /details %}}
