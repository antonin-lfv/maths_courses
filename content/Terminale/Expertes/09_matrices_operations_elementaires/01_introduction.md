---
title: 'Introduction'
weight: 1
cascade:
  type: docs
---

## Des matrices de différents types

> [!TIP] **Définitions**
>
> - Une **matrice** est un tableau de nombres, disposés en lignes et en colonnes.
> - Une matrice ayant \(m\) lignes et \(n\) colonnes est dite de **format** (ou de dimension) \({m \times n}\).
> - Le nombre situé à l’intersection de la \(i\)-ième ligne et de la \(j\)-ième colonne est appelé **terme** (ou coefficient) d’indice \(ij\) ; on le note \(a_{ij}\). On écrit \({A = (a_{ij})}\).

> [!TIP] **Définitions**
>
> - Une matrice ayant le même nombre \(n\) de lignes et de colonnes est une **matrice carrée d’ordre \(n\)**.
> - Une matrice n’ayant qu’une colonne est une **matrice colonne** ; une matrice n’ayant qu’une ligne est une **matrice ligne**.
> - La matrice dont tous les termes sont nuls est la **matrice nulle**, notée \(O\).

{{% details title="Exemples" closed="true" %}}
\({\begin{pmatrix} 3 & -1 \\ 0 & 2{,}5 \end{pmatrix}}\) est une matrice carrée d’ordre 2 ; \({\begin{pmatrix} 4 \\ -2 \\ 7 \end{pmatrix}}\) est une matrice colonne de format \({3 \times 1}\) ; \({\begin{pmatrix} 1 & 0 & -5 \end{pmatrix}}\) est une matrice ligne de format \({1 \times 3}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Deux matrices sont égales si et seulement si elles ont le même format et les mêmes termes aux mêmes places.

## Addition de deux matrices

> [!TIP] **Définition**
>
> L’**addition** de deux matrices **de même format** se fait en additionnant les termes situés au même endroit dans chaque matrice : si \({A = (a_{ij})}\) et \({B = (b_{ij})}\), alors \({A + B = (a_{ij} + b_{ij})}\).

{{% details title="Exemple" closed="true" %}}
\[
\begin{pmatrix} 1 & 4 & -2 \\ 0 & 3 & 5 \end{pmatrix} + \begin{pmatrix} 6 & -4 & 1 \\ 2 & 0 & -5 \end{pmatrix} = \begin{pmatrix} 7 & 0 & -1 \\ 2 & 3 & 0 \end{pmatrix}.
\]
Pour toute matrice \(A\), \({A + O = O + A = A}\) (où \(O\) est la matrice nulle de même format).
{{% /details %}}

## Produit d’une matrice par un réel

> [!TIP] **Définition**
>
> Soient \({A = (a_{ij})}\) une matrice et \(k\) un réel. La matrice \(kA\) s’obtient en multipliant tous les termes de \(A\) par \(k\) : \({kA = (ka_{ij})}\). Par convention, on écrit le réel à gauche de la matrice.

> [!IMPORTANT] **Remarques**
>
> - \({0A = O}\) et \({kO = O}\).
> - La matrice \({(-1)A}\) se note \({-A}\) : c’est la **matrice opposée** de \(A\), et \({A + (-A) = O}\).
> - Si \(A\) et \(B\) ont le même format, \({A - B = A + (-1)B}\).

## Calculer avec des matrices

> [!NOTE] **Exercice résolu 1 - Reconnaître le format et les termes d’une matrice**
>
> On considère \({A = \begin{pmatrix} 1 & -2 & 0 \\ 3 & 5 & 1 \end{pmatrix}}\), \({B = \begin{pmatrix} 4 \\ -1 \end{pmatrix}}\) et \({C = \begin{pmatrix} 2 & 0 & -3 & 7 \end{pmatrix}}\). Donner le format de chaque matrice, puis les termes \(a_{12}\), \(a_{23}\) et \(c_{14}\).

{{% details title="Solution commentée" closed="true" %}}
- \(A\) a 2 lignes et 3 colonnes : format \({2 \times 3}\). \({a_{12} = -2}\) (ligne 1, colonne 2) et \({a_{23} = 1}\) (ligne 2, colonne 3).
- \(B\) est une matrice colonne de format \({2 \times 1}\).
- \(C\) est une matrice ligne de format \({1 \times 4}\), et \({c_{14} = 7}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Additionner, soustraire, multiplier par un réel**
>
> On considère \({A = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}}\) et \({B = \begin{pmatrix} -4 & 5 \\ 1 & 2 \end{pmatrix}}\). Calculer \({A + B}\), \({A - B}\), \(\dfrac{1}{2}B\) et \({2A - 3B}\).

{{% details title="Solution commentée" closed="true" %}}
Les deux matrices ont le même format \({2 \times 2}\) : on opère terme à terme.
\[
A + B = \begin{pmatrix} -2 & 4 \\ 1 & 5 \end{pmatrix}, \qquad A - B = \begin{pmatrix} 6 & -6 \\ -1 & 1 \end{pmatrix}, \qquad \dfrac{1}{2}B = \begin{pmatrix} -2 & \dfrac{5}{2} \\ \dfrac{1}{2} & 1 \end{pmatrix},
\]
\[
2A - 3B = \begin{pmatrix} 4 & -2 \\ 0 & 6 \end{pmatrix} - \begin{pmatrix} -12 & 15 \\ 3 & 6 \end{pmatrix} = \begin{pmatrix} 16 & -17 \\ -3 & 0 \end{pmatrix}.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Modéliser par une matrice**
>
> Un magasin vend trois modèles de vélos (\(V_1\), \(V_2\), \(V_3\)) dans deux boutiques. En janvier, la boutique 1 a vendu 12, 5 et 8 vélos de chaque modèle, la boutique 2 en a vendu 7, 9 et 4. En février, les ventes ont été respectivement de 10, 6, 9 et de 8, 11, 3.
> 1. Représenter les ventes de chaque mois par une matrice \({2 \times 3}\).
> 2. Calculer la matrice des ventes cumulées sur les deux mois.
> 3. On prévoit une hausse de 20 % des ventes de février en mars. Calculer la matrice des ventes prévues en mars.

{{% details title="Solution commentée" closed="true" %}}
1. Lignes : boutiques ; colonnes : modèles.
\[
J = \begin{pmatrix} 12 & 5 & 8 \\ 7 & 9 & 4 \end{pmatrix}, \qquad F = \begin{pmatrix} 10 & 6 & 9 \\ 8 & 11 & 3 \end{pmatrix}.
\]
2. \({J + F = \begin{pmatrix} 22 & 11 & 17 \\ 15 & 20 & 7 \end{pmatrix}}\).
3. \({1{,}2\,F = \begin{pmatrix} 12 & 7{,}2 & 10{,}8 \\ 9{,}6 & 13{,}2 & 3{,}6 \end{pmatrix}}\) (soit, en arrondissant, environ 12, 7, 11 et 10, 13, 4 vélos).
{{% /details %}}
