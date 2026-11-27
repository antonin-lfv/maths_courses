---
title: 'Systèmes linéaires et pivot de Gauss'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\).

## Vocabulaire

> [!TIP] **Définition**
>
> Un **système linéaire** de \(n\) équations à \(p\) inconnues \({x_1, \dots, x_p}\) est un système de la forme
>
> \[ (S) \quad \begin{cases} a_{11}x_1 + a_{12}x_2 + \dots + a_{1p}x_p = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2p}x_p = b_2 \\ \qquad \vdots \\ a_{n1}x_1 + a_{n2}x_2 + \dots + a_{np}x_p = b_n \end{cases} \]
>
> où les **coefficients** \(a_{ij}\) et les **seconds membres** \(b_i\) sont dans \(\mathbb{K}\). Une **solution** est un \(p\)-uplet \({(x_1, \dots, x_p) \in \mathbb{K}^p}\) qui vérifie toutes les équations.
>
> Le système est **homogène** si tous les \(b_i\) sont nuls ; il admet alors au moins la solution nulle. Le système est **compatible** s’il a au moins une solution. Deux systèmes sont **équivalents** s’ils ont le même ensemble de solutions.

## Opérations élémentaires

> [!TIP] **Définition et théorème**
>
> Les **opérations élémentaires** sur les lignes d’un système sont :
> - l’échange de deux lignes, \({L_i \leftrightarrow L_j}\) ;
> - la multiplication d’une ligne par un scalaire **non nul**, \({L_i \leftarrow \lambda L_i}\) ;
> - l’ajout à une ligne d’un multiple d’une autre, \({L_i \leftarrow L_i + \lambda L_j}\) avec \({i \neq j}\).
>
> Chacune transforme un système en un système équivalent.

{{% details title="Démonstration" closed="true" %}}
Chaque opération est réversible par une opération du même type : \({L_i \leftrightarrow L_j}\) par elle-même, \({L_i \leftarrow \lambda L_i}\) par \({L_i \leftarrow \dfrac{1}{\lambda}L_i}\), et \({L_i \leftarrow L_i + \lambda L_j}\) par \({L_i \leftarrow L_i - \lambda L_j}\). Une solution du premier système est solution du second, et inversement.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les opérations se font l’une après l’autre. Effectuer en même temps \({L_1 \leftarrow L_1 - L_2}\) et \({L_2 \leftarrow L_2 - L_1}\) fait perdre de l’information : les deux nouvelles lignes sont opposées. De même, \({L_i \leftarrow \lambda L_i + \mu L_j}\) n’est permise que si \({\lambda \neq 0}\).

## Systèmes échelonnés

> [!TIP] **Définition**
>
> Un système est **échelonné** si le nombre de coefficients nuls en début de ligne augmente strictement d’une ligne à la suivante, jusqu’à d’éventuelles lignes dont le membre de gauche est nul. Le premier coefficient non nul d’une ligne est son **pivot**. Les inconnues qui portent un pivot sont les **inconnues principales**, les autres sont les **inconnues secondaires** (ou paramètres).
>
> Le nombre de pivots est le **rang** du système.

> [!TIP] **Théorème - Algorithme du pivot de Gauss**
>
> Tout système linéaire est équivalent à un système échelonné, que l’on obtient par une suite d’opérations élémentaires.

> [!NOTE] **Méthode - Pivot de Gauss**
>
> 1. Choisir une ligne dont le coefficient de \(x_1\) est non nul (de préférence \(1\) ou \(-1\)) et la placer en première ligne : ce coefficient est le pivot.
> 2. Éliminer \(x_1\) des lignes suivantes par des opérations \({L_i \leftarrow L_i - \dfrac{a_{i1}}{a_{11}}L_1}\).
> 3. Recommencer avec le sous-système formé des lignes \(2\) à \(n\) et l’inconnue suivante.
> 4. Résoudre le système échelonné en remontant, de la dernière équation à la première.

> [!TIP] **Théorème - Ensemble des solutions**
>
> Soit \((S)\) un système échelonné de rang \(r\) à \(p\) inconnues.
> - S’il contient une équation \({0 = b}\) avec \({b \neq 0}\), il n’a **aucune solution**.
> - Sinon, il est compatible :
>   - si \({r = p}\), il a une **unique solution** ;
>   - si \({r < p}\), il a une **infinité de solutions**, que l’on exprime en fonction des \({p - r}\) inconnues secondaires.
>
> Un système de \(n\) équations à \(n\) inconnues qui a une unique solution est un **système de Cramer** : c’est le cas si et seulement si \({r = n}\).

> [!TIP] **Propriété - Structure des solutions**
>
> Si \(X_0\) est une solution particulière de \((S)\), les solutions de \((S)\) sont les \({X_0 + Y}\), où \(Y\) parcourt les solutions du système homogène associé (mêmes coefficients, seconds membres nuls).

{{% details title="Exemple" closed="true" %}}
\[
\begin{cases} x + 2y - z = 3 \\ 2x + 5y + z = 4 \\ x + 3y + 2z = 1 \end{cases}
\]

\({L_2 \leftarrow L_2 - 2L_1}\) et \({L_3 \leftarrow L_3 - L_1}\) :

\[
\begin{cases} x + 2y - z = 3 \\ y + 3z = -2 \\ y + 3z = -2 \end{cases}
\qquad \text{puis } L_3 \leftarrow L_3 - L_2 : \qquad
\begin{cases} x + 2y - z = 3 \\ y + 3z = -2 \\ 0 = 0 \end{cases}
\]

Le système est de rang \(2\) avec \(3\) inconnues : il a une infinité de solutions, avec \(z\) comme paramètre. On remonte : \({y = -2 - 3z}\), puis \({x = 3 - 2y + z = 7 + 7z}\).

L’ensemble des solutions est \({\{(7 + 7z,\ -2 - 3z,\ z),\ z \in \mathbb{R}\}}\). On y lit la structure annoncée : la solution particulière \({(7, -2, 0)}\), plus les solutions \({z(7, -3, 1)}\) du système homogène.
{{% /details %}}

> [!NOTE] **Exercice résolu - Système à paramètre**
>
> Résoudre, selon la valeur du réel \(m\), le système
>
> \[ \begin{cases} x + y + z = 1 \\ x + 2y + mz = 2 \\ x + my + 2z = 1 \end{cases} \]

{{% details title="Solution commentée" closed="true" %}}
\({L_2 \leftarrow L_2 - L_1}\) et \({L_3 \leftarrow L_3 - L_1}\) :

\[
\begin{cases} x + y + z = 1 \\ y + (m-1)z = 1 \\ (m-1)y + z = 0 \end{cases}
\]

\({L_3 \leftarrow L_3 - (m-1)L_2}\) : le coefficient de \(z\) devient \({1 - (m-1)^2 = (2 - m)m}\) et le second membre \({-(m-1) = 1 - m}\).

\[
\begin{cases} x + y + z = 1 \\ y + (m-1)z = 1 \\ m(2 - m)z = 1 - m \end{cases}
\]

**Cas \({m \neq 0}\) et \({m \neq 2}\).** Le système est de rang \(3\) : solution unique.

\[
z = \dfrac{1 - m}{m(2 - m)}, \qquad y = 1 - (m-1)z = 1 + \dfrac{(m-1)^2}{m(2-m)} = \dfrac{1}{m(2 - m)},
\]

car \({m(2 - m) + (m-1)^2 = 1}\). Enfin \({x = 1 - y - z = 1 - \dfrac{2 - m}{m(2 - m)} = \dfrac{m - 1}{m}}\).

**Cas \({m = 0}\).** La dernière équation est \({0 = 1}\) : aucune solution.

**Cas \({m = 2}\).** La dernière équation est \({0 = -1}\) : aucune solution.

**Vérification** pour \({m = 1}\) : la formule donne \({(x, y, z) = (0, 1, 0)}\), et le système de départ devient \({x + y + z = 1}\), \({x + 2y + z = 2}\), \({x + y + 2z = 1}\), bien vérifié par \({(0, 1, 0)}\).
{{% /details %}}
