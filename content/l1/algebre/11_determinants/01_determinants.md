---
title: 'Déterminant d’une matrice carrée'
weight: 1
cascade:
  type: docs
---

Le déterminant associe à chaque matrice carrée un scalaire qui dit, entre autres, si elle est inversible. En dimension 2 et 3, sa valeur absolue s’interprète comme une aire ou un volume.

## Déterminants d’ordre 2 et 3

> [!TIP] **Définition**
>
> \[ \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc. \]
>
> Pour deux vecteurs \({u = (a, c)}\) et \({v = (b, d)}\) de \(\mathbb{R}^2\), la valeur absolue de ce déterminant est l’aire du parallélogramme construit sur \(u\) et \(v\). Il est nul si et seulement si \(u\) et \(v\) sont colinéaires.

> [!TIP] **Définition - Ordre 3, règle de Sarrus**
>
> \[ \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} = \begin{aligned} & a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\ & - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}. \end{aligned} \]

> [!IMPORTANT] **Remarque**
>
> La règle de Sarrus ne vaut que pour l’ordre \(3\). Elle ne se généralise pas aux ordres supérieurs.

## Définition générale

> [!TIP] **Théorème et définition**
>
> Il existe une unique application \({\det : \mathcal{M}_n(\mathbb{K}) \to \mathbb{K}}\) telle que :
> - \(\det\) est **linéaire par rapport à chaque colonne** (les autres étant fixées) ;
> - \(\det\) est **alternée** : si deux colonnes sont égales, le déterminant est nul ;
> - \({\det(I_n) = 1}\).
>
> Le scalaire \(\det(A)\) est le **déterminant** de \(A\), noté aussi avec des barres verticales.

> [!TIP] **Propriétés - Effet des opérations élémentaires**
>
> Soit \({A \in \mathcal{M}_n(\mathbb{K})}\).
> - Échanger deux colonnes multiplie le déterminant par \(-1\).
> - Multiplier une colonne par \(\lambda\) multiplie le déterminant par \(\lambda\). Donc \({\det(\lambda A) = \lambda^n \det(A)}\).
> - Ajouter à une colonne une combinaison linéaire des autres ne change pas le déterminant.
> - Si une colonne est nulle, ou si les colonnes sont liées, le déterminant est nul.
>
> Comme \({\det(A^T) = \det(A)}\), ces règles valent aussi pour les lignes.

{{% details title="Démonstration" closed="true" %}}
Notons \({\det(C_1, C_2)}\) le déterminant vu comme fonction de deux colonnes, les autres étant fixées. Par linéarité et caractère alterné :

\[
0 = \det(C_1 + C_2,\ C_1 + C_2) = \det(C_1, C_1) + \det(C_1, C_2) + \det(C_2, C_1) + \det(C_2, C_2) = \det(C_1, C_2) + \det(C_2, C_1).
\]

De même, \({\det(C_1 + \lambda C_2,\ C_2) = \det(C_1, C_2) + \lambda\det(C_2, C_2) = \det(C_1, C_2)}\). Si les colonnes sont liées, l’une est combinaison linéaire des autres : en lui retranchant cette combinaison, on obtient une colonne nulle sans changer le déterminant, qui est donc nul par linéarité.
{{% /details %}}

> [!TIP] **Théorème**
>
> Pour toutes matrices \(A\) et \(B\) de \(\mathcal{M}_n(\mathbb{K})\) :
> - \({\det(AB) = \det(A)\det(B)}\) ;
> - \({\det(A^T) = \det(A)}\) ;
> - \(A\) est **inversible si et seulement si \({\det(A) \neq 0}\)**, et alors \({\det(A^{-1}) = \dfrac{1}{\det(A)}}\) ;
> - le déterminant d’une matrice **triangulaire** est le produit de ses coefficients diagonaux.

> [!IMPORTANT] **Remarque**
>
> Le déterminant n’est pas linéaire : en général \({\det(A + B) \neq \det(A) + \det(B)}\). Par exemple, \({\det(I_2 + I_2) = 4}\) alors que \({\det(I_2) + \det(I_2) = 2}\).

> [!TIP] **Conséquences**
>
> - Deux matrices semblables ont le même déterminant : \({\det(P^{-1}AP) = \det(A)}\). On définit donc le **déterminant d’un endomorphisme** comme celui de sa matrice dans une base quelconque.
> - Le **déterminant d’une famille** de \(n\) vecteurs dans une base \(\mathcal{B}\) d’un espace de dimension \(n\) est le déterminant de la matrice de leurs coordonnées. La famille est une base si et seulement si ce déterminant est non nul.

## Développement selon une ligne ou une colonne

> [!TIP] **Définition**
>
> Soit \({A \in \mathcal{M}_n(\mathbb{K})}\). On note \(\Delta_{ij}\) le déterminant de la matrice de taille \({n - 1}\) obtenue en supprimant la ligne \(i\) et la colonne \(j\) de \(A\) (**mineur**). Le scalaire \({(-1)^{i+j}\Delta_{ij}}\) est le **cofacteur** du coefficient \(a_{ij}\).

> [!TIP] **Théorème**
>
> - Développement selon la colonne \(j\) : \({\det(A) = \displaystyle\sum_{i=1}^{n} (-1)^{i+j} a_{ij}\Delta_{ij}}\).
> - Développement selon la ligne \(i\) : \({\det(A) = \displaystyle\sum_{j=1}^{n} (-1)^{i+j} a_{ij}\Delta_{ij}}\).

Les signes \({(-1)^{i+j}}\) alternent comme les cases d’un damier, en commençant par \(+\) en haut à gauche.

> [!NOTE] **Méthode - Calculer un déterminant**
>
> 1. Par des opérations \({C_i \leftarrow C_i + \lambda C_j}\) ou \({L_i \leftarrow L_i + \lambda L_j}\), qui ne changent pas le déterminant, faire apparaître des zéros dans une ligne ou une colonne.
> 2. Développer selon cette ligne ou cette colonne.
> 3. Recommencer avec les déterminants plus petits. On peut aussi aller jusqu’à une matrice triangulaire.
>
> Penser à mettre en facteur un terme commun à une ligne ou à une colonne, et à tenir le compte des échanges (chacun change le signe).

{{% details title="Exemple" closed="true" %}}
\[
D = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 5 & 4 \\ 3 & 7 & 10 \end{vmatrix}.
\]

On fait \({L_2 \leftarrow L_2 - 2L_1}\) et \({L_3 \leftarrow L_3 - 3L_1}\), puis on développe selon la première colonne :

\[
D = \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & -2 \\ 0 & 1 & 1 \end{vmatrix} = 1 \times \begin{vmatrix} 1 & -2 \\ 1 & 1 \end{vmatrix} = 1 + 2 = 3.
\]

Vérification par la règle de Sarrus : \({50 + 24 + 42 - 45 - 28 - 40 = 3}\).
{{% /details %}}

> [!TIP] **Propriété - Déterminant de Vandermonde**
>
> Pour des scalaires \({x_1, \dots, x_n}\) :
>
> \[ \begin{vmatrix} 1 & x_1 & x_1^2 & \cdots & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \cdots & x_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \cdots & x_n^{n-1} \end{vmatrix} = \prod_{1 \leq i < j \leq n} (x_j - x_i). \]
>
> Il est non nul si et seulement si les \(x_i\) sont deux à deux distincts.

> [!TIP] **Propriété - Formules de Cramer**
>
> Si \({A \in \mathcal{M}_n(\mathbb{K})}\) est inversible, l’unique solution du système \({AX = B}\) est donnée par
>
> \[ x_j = \dfrac{\det(A_j)}{\det(A)}, \]
>
> où \(A_j\) est la matrice obtenue en remplaçant la colonne \(j\) de \(A\) par \(B\). Ces formules sont surtout utiles pour \({n = 2}\) ; au-delà, le pivot de Gauss est plus rapide.

> [!NOTE] **Exercice résolu - Inversibilité selon un paramètre**
>
> Pour quelles valeurs du réel \(m\) la matrice \({A_m = \begin{pmatrix} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{pmatrix}}\) est-elle inversible ?

{{% details title="Solution commentée" closed="true" %}}
On calcule \(\det(A_m)\). La somme des coefficients de chaque ligne vaut \({m + 2}\) : on fait \({C_1 \leftarrow C_1 + C_2 + C_3}\), puis on met \({m + 2}\) en facteur dans la première colonne.

\[
\det(A_m) = \begin{vmatrix} m + 2 & 1 & 1 \\ m + 2 & m & 1 \\ m + 2 & 1 & m \end{vmatrix} = (m + 2)\begin{vmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix}.
\]

Puis \({L_2 \leftarrow L_2 - L_1}\) et \({L_3 \leftarrow L_3 - L_1}\) :

\[
\det(A_m) = (m + 2)\begin{vmatrix} 1 & 1 & 1 \\ 0 & m - 1 & 0 \\ 0 & 0 & m - 1 \end{vmatrix} = (m + 2)(m - 1)^2,
\]

car la matrice obtenue est triangulaire.

Donc \(A_m\) est inversible si et seulement si \({m \neq -2}\) et \({m \neq 1}\).

**Vérification.** Pour \({m = 1}\), les trois colonnes sont égales : la matrice est de rang \(1\). Pour \({m = -2}\), la somme des trois colonnes est nulle : elles sont liées. Pour \({m = 0}\), la formule donne \({\det(A_0) = 2}\), et la règle de Sarrus aussi : \({0 + 1 + 1 - 0 - 0 - 0 = 2}\).
{{% /details %}}
