---
title: 'Produit'
weight: 2
cascade:
  type: docs
---

## Produit d’une matrice carrée et d’une matrice colonne ou ligne

> [!TIP] **Définition**
>
> Soit \(A\) une matrice carrée d’ordre \(n\) et \(C\) une matrice colonne à \(n\) lignes. Le **produit** de \(A\) par \(C\), noté \({A \times C}\) ou \(AC\), est la matrice colonne à \(n\) lignes dont le terme de la ligne \(i\) est obtenu en multipliant terme à terme la ligne \(i\) de \(A\) par la colonne \(C\), puis en additionnant :
> \[
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}.
\]

> [!IMPORTANT] **Remarques**
>
> - Le produit \(AC\) n’est possible que si le nombre de colonnes de \(A\) est égal au nombre de lignes de \(C\).
> - Le produit \({C \times A}\) n’est en général pas défini (le nombre de colonnes de \(C\), égal à 1, est différent du nombre de lignes de \(A\) dès que \({n \geq 2}\)).

> [!TIP] **Définition**
>
> Soit \(L\) une matrice ligne à \(n\) colonnes et \(A\) une matrice carrée d’ordre \(n\). Le **produit** de \(L\) par \(A\), noté \(LA\), est la matrice ligne à \(n\) colonnes dont le terme de la colonne \(j\) s’obtient en multipliant terme à terme \(L\) par la colonne \(j\) de \(A\), puis en additionnant :
> \[
\begin{pmatrix} x & y \end{pmatrix}\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} xa + yc & xb + yd \end{pmatrix}.
\]

{{% details title="Exemple" closed="true" %}}
\[
\begin{gathered}
\begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 10 - 1 \\ 15 + 4 \end{pmatrix} = \begin{pmatrix} 9 \\ 19 \end{pmatrix}, \\[0.3em]
\begin{pmatrix} 5 & 1 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 13 & -1 \end{pmatrix}.
\end{gathered}
\]
{{% /details %}}

## Produit de deux matrices carrées de même ordre

> [!TIP] **Définition**
>
> Soient \(A\) et \(B\) deux matrices carrées d’ordre \(n\). Le **produit** de \(A\) par \(B\), noté \(AB\), est la matrice carrée d’ordre \(n\) dont le terme d’indice \(ij\) est obtenu en multipliant terme à terme la ligne \(i\) de \(A\) par la colonne \(j\) de \(B\), puis en additionnant :
> \[
(AB)_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{in}b_{nj}.
\]

> [!TIP] **Propriétés (admises)**
>
> Pour toutes matrices carrées \(A\), \(B\), \(C\) d’ordre \(n\) et tout réel \(k\) :
> - \({A \times (B \times C) = (A \times B) \times C}\) (associativité) ;
> - \({A(B + C) = AB + AC}\) et \({(A + B)C = AC + BC}\) (distributivité) ;
> - \({(kA)B = A(kB) = k(AB)}\).

> [!IMPORTANT] **Remarques**
>
> - En général, \({AB \neq BA}\) : le produit de matrices **n’est pas commutatif**. On ne peut donc pas utiliser les identités remarquables telles quelles : \({(A + B)^2 = A^2 + AB + BA + B^2}\).
> - \({AB = O}\) n’implique pas \({A = O}\) ou \({B = O}\). Par exemple \({\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}}\).

## Matrice carrée diagonale et matrice identité

> [!TIP] **Définitions**
>
> - Une matrice carrée est **diagonale** si tous ses termes situés en dehors de la diagonale principale (termes \(a_{ii}\)) sont nuls.
> - La **matrice identité** d’ordre \(n\), notée \(I_n\) (ou \(I\)), est la matrice diagonale dont tous les termes de la diagonale valent 1 : \({I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}}\).

> [!TIP] **Propriété (admise)**
>
> Pour toute matrice carrée \(A\) d’ordre \(n\) : \({A \times I_n = I_n \times A = A}\).

## Puissance d’une matrice carrée

> [!TIP] **Définition**
>
> Pour tout entier naturel non nul \(n\), la **puissance \(n\)-ième** d’une matrice carrée \(A\), notée \(A^n\), est le produit de \(n\) facteurs égaux à \(A\) : \({A^n = \underbrace{A \times A \times \dots \times A}_{n \text{ facteurs}}}\). Par convention, \({A^0 = I}\).

> [!IMPORTANT] **Remarque**
>
> Pour une matrice diagonale, les puissances se calculent terme à terme : \({\begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix}^n = \begin{pmatrix} a^n & 0 \\ 0 & b^n \end{pmatrix}}\).

## Calculer des produits et des puissances

> [!NOTE] **Exercice résolu 1 - Effectuer des produits**
>
> On considère \({A = \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix}}\), \({B = \begin{pmatrix} 0 & 1 \\ 2 & -1 \end{pmatrix}}\), \({C = \begin{pmatrix} 2 \\ 1 \end{pmatrix}}\) et \({L = \begin{pmatrix} 1 & -2 \end{pmatrix}}\). Calculer \(AC\), \(LA\), \(AB\) et \(BA\).

{{% details title="Solution commentée" closed="true" %}}
\[
\begin{gathered}
AC = \begin{pmatrix} 1 \times 2 + 2 \times 1 \\ -1 \times 2 + 3 \times 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 1 \end{pmatrix}, \\[0.3em]
LA = \begin{pmatrix} 1 \times 1 + (-2)(-1) & 1 \times 2 + (-2) \times 3 \end{pmatrix} = \begin{pmatrix} 3 & -4 \end{pmatrix}.
\end{gathered}
\]
\[
\begin{gathered}
AB = \begin{pmatrix} 0 + 4 & 1 - 2 \\ 0 + 6 & -1 - 3 \end{pmatrix} = \begin{pmatrix} 4 & -1 \\ 6 & -4 \end{pmatrix}, \\[0.3em]
BA = \begin{pmatrix} 0 - 1 & 0 + 3 \\ 2 + 1 & 4 - 3 \end{pmatrix} = \begin{pmatrix} -1 & 3 \\ 3 & 1 \end{pmatrix}.
\end{gathered}
\]
On constate que \({AB \neq BA}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Produit de matrices d’ordre 3**
>
> Calculer \(AB\) pour \({A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & -1 \\ 3 & 1 & 0 \end{pmatrix}}\) et \({B = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & -1 & 1 \end{pmatrix}}\), puis vérifier à la calculatrice.

{{% details title="Solution commentée" closed="true" %}}
Le terme d’indice \(ij\) est le « produit » de la ligne \(i\) de \(A\) par la colonne \(j\) de \(B\). Par exemple, \((AB)_{12} = 1 \times 1 + 0 \times 0 + 2 \times (-1) = -1\).
\[
AB = \begin{pmatrix} 2 & -1 & 2 \\ 1 & 1 & 0 \\ 7 & 3 & 1 \end{pmatrix}.
\]
À la calculatrice (ou avec `numpy` en Python : `A @ B`), on obtient le même résultat.
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Calculer la puissance \(n\)-ième d’une matrice**
>
> Soit \({A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}}\). Calculer \(A^2\) et \(A^3\), conjecturer l’expression de \(A^n\), puis la démontrer par récurrence.

{{% details title="Solution commentée" closed="true" %}}
\({A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}}\) et \({A^3 = A^2A = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}}\). On conjecture \({A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}}\) pour tout \({n \in \mathbb{N}}\).

- **Initialisation.** \({A^0 = I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}}\) : la formule est vraie pour \({n = 0}\).
- **Hérédité.** Supposons \({A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}}\). Alors \(A^{n+1} = A^nA = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 + n \\ 0 & 1 \end{pmatrix}\).
- **Conclusion.** Pour tout entier naturel \(n\), \({A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}}\).
{{% /details %}}
