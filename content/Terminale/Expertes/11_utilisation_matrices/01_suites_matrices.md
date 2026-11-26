---
title: 'Suites de matrices'
weight: 1
cascade:
  type: docs
---

## Suite de matrices colonnes

> [!TIP] **Définition**
>
> Soit \(n\) un entier naturel. On appelle **suite de matrices colonnes**, notée \((U_n)\), une suite de matrices colonnes dont les termes sont, ligne par ligne, les termes de suites numériques.

{{% details title="Exemple" closed="true" %}}
La suite \((U_n)\) définie par \(U_n = \begin{pmatrix} 2n + 1 \\ 3^n \end{pmatrix}\) est une suite de matrices colonnes dont les coefficients sont les suites \((a_n)\) et \((b_n)\) définies par \(a_n = 2n + 1\) et \(b_n = 3^n\). Ainsi \(U_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\) et \(U_2 = \begin{pmatrix} 5 \\ 9 \end{pmatrix}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On définit de façon analogue des suites de matrices lignes.

> [!TIP] **Définition**
>
> On dit qu’une suite de matrices colonnes \((U_n)\) **converge** si et seulement si toutes les suites numériques qui la composent convergent. La **limite** de \((U_n)\) est alors la matrice colonne \(U\) dont chaque coefficient est la limite du coefficient correspondant de \(U_n\).

> [!IMPORTANT] **Remarque**
>
> Dans le cas contraire, on dit que la suite de matrices **diverge**.

{{% details title="Exemples" closed="true" %}}
- \(U_n = \begin{pmatrix} \frac{1}{n + 1} \\ 3 - 2^{-n} \end{pmatrix}\) converge vers \(U = \begin{pmatrix} 0 \\ 3 \end{pmatrix}\), car \(\lim \frac{1}{n + 1} = 0\) et \(\lim 2^{-n} = 0\).
- \(V_n = \begin{pmatrix} n \\ (-1)^n \end{pmatrix}\) diverge : il suffit qu’une des suites qui la composent diverge, et ici \(\lim n = +\infty\) (la suite \(((-1)^n)\) diverge aussi).
{{% /details %}}

## Suites de matrices définies par une relation de récurrence

> [!TIP] **Propriété**
>
> Soient \(A\) une matrice carrée d’ordre \(p\) et \((U_n)\) une suite de matrices colonnes à \(p\) lignes telle que, pour tout entier naturel \(n\), \(U_{n+1} = AU_n\). Alors, pour tout entier naturel \(n\) :
> \[
U_n = A^nU_0.
\]

{{% details title="Démonstration" closed="true" %}}
- **Initialisation.** \(A^0U_0 = IU_0 = U_0\).
- **Hérédité.** Si \(U_n = A^nU_0\), alors \(U_{n+1} = AU_n = A(A^nU_0) = (AA^n)U_0 = A^{n+1}U_0\), par associativité du produit.
- **Conclusion.** Pour tout \(n \in \mathbb{N}\), \(U_n = A^nU_0\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
On considère les suites définies par \(a_0 = b_0 = 1\) et, pour tout \(n\), \(a_{n+1} = a_n + 2b_n\), \(b_{n+1} = a_n\). Avec \(U_n = \begin{pmatrix} a_n \\ b_n \end{pmatrix}\) et \(A = \begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix}\), on a \(U_{n+1} = AU_n\), donc \(U_n = A^nU_0\). Par exemple
\[
A^3 = \begin{pmatrix} 5 & 6 \\ 3 & 2 \end{pmatrix}, \qquad U_3 = A^3U_0 = \begin{pmatrix} 11 \\ 5 \end{pmatrix}.
\]
On vérifie terme à terme : \(U_1 = \begin{pmatrix} 3 \\ 1 \end{pmatrix}\), \(U_2 = \begin{pmatrix} 5 \\ 3 \end{pmatrix}\), \(U_3 = \begin{pmatrix} 11 \\ 5 \end{pmatrix}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soient \(A\) une matrice carrée d’ordre \(p\), \(B\) une matrice colonne à \(p\) lignes et \((U_n)\) une suite de matrices colonnes telle que, pour tout entier naturel \(n\), \(U_{n+1} = AU_n + B\). Si la suite \((U_n)\) converge vers une matrice \(U\), alors \(U\) vérifie
> \[
U = AU + B.
\]
> On dit que \(U\) est un **état stable** de la suite \((U_n)\).

> [!IMPORTANT] **Remarque**
>
> Si \(I - A\) est inversible, l’équation \(U = AU + B\), qui s’écrit \((I - A)U = B\), a une unique solution \(C = (I - A)^{-1}B\). La suite \((V_n)\) définie par \(V_n = U_n - C\) vérifie alors \(V_{n+1} = AV_n\), donc \(V_n = A^nV_0\) : c’est la méthode classique pour exprimer \(U_n\) en fonction de \(n\).

## Étudier une suite de matrices

> [!NOTE] **Exercice résolu 1 — Écriture matricielle d’une récurrence**
>
> On considère les suites \((x_n)\) et \((y_n)\) définies par \(x_0 = 2\), \(y_0 = -1\) et, pour tout \(n \in \mathbb{N}\) :
> \[
\begin{cases} x_{n+1} = 3x_n - y_n \\ y_{n+1} = x_n + y_n \end{cases}
\]
> 1. Écrire ces relations sous la forme \(U_{n+1} = AU_n\).
> 2. Calculer \(U_3\) à l’aide de \(A^3\).

{{% details title="Solution commentée" closed="true" %}}
1. Avec \(U_n = \begin{pmatrix} x_n \\ y_n \end{pmatrix}\) et \(A = \begin{pmatrix} 3 & -1 \\ 1 & 1 \end{pmatrix}\), on a bien \(AU_n = \begin{pmatrix} 3x_n - y_n \\ x_n + y_n \end{pmatrix} = U_{n+1}\).
2. \(A^2 = \begin{pmatrix} 9 - 1 & -3 - 1 \\ 3 + 1 & -1 + 1 \end{pmatrix} = \begin{pmatrix} 8 & -4 \\ 4 & 0 \end{pmatrix}\) et \(A^3 = A^2A = \begin{pmatrix} 24 - 4 & -8 - 4 \\ 12 & -4 \end{pmatrix} = \begin{pmatrix} 20 & -12 \\ 12 & -4 \end{pmatrix}\). Donc
\[
U_3 = A^3U_0 = \begin{pmatrix} 40 + 12 \\ 24 + 4 \end{pmatrix} = \begin{pmatrix} 52 \\ 28 \end{pmatrix}.
\]
Vérification pas à pas : \(U_1 = \begin{pmatrix} 7 \\ 1 \end{pmatrix}\), \(U_2 = \begin{pmatrix} 20 \\ 8 \end{pmatrix}\), \(U_3 = \begin{pmatrix} 52 \\ 28 \end{pmatrix}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Suite du type \(U_{n+1} = AU_n + B\)**
>
> Deux réservoirs échangent de l’eau. Les volumes (en litres) au bout de \(n\) heures sont modélisés par \(U_n = \begin{pmatrix} a_n \\ b_n \end{pmatrix}\), avec \(U_0 = \begin{pmatrix} 0 \\ 20 \end{pmatrix}\) et \(U_{n+1} = AU_n + B\), où
> \[
A = \begin{pmatrix} 0{,}6 & 0{,}2 \\ 0{,}2 & 0{,}6 \end{pmatrix} \quad \text{et} \quad B = \begin{pmatrix} 2 \\ 2 \end{pmatrix}.
\]
> 1. Déterminer la matrice colonne \(C\) telle que \(C = AC + B\).
> 2. On pose \(V_n = U_n - C\). Montrer que \(V_{n+1} = AV_n\).
> 3. On admet que \(A^n = \dfrac{1}{2}\begin{pmatrix} 0{,}8^n + 0{,}4^n & 0{,}8^n - 0{,}4^n \\ 0{,}8^n - 0{,}4^n & 0{,}8^n + 0{,}4^n \end{pmatrix}\). Exprimer \(U_n\) en fonction de \(n\), puis déterminer sa limite.

{{% details title="Solution commentée" closed="true" %}}
1. \(C = AC + B \iff (I - A)C = B\), avec \(I - A = \begin{pmatrix} 0{,}4 & -0{,}2 \\ -0{,}2 & 0{,}4 \end{pmatrix}\), de déterminant \(0{,}16 - 0{,}04 = 0{,}12 \neq 0\). Donc
\[
C = \frac{1}{0{,}12}\begin{pmatrix} 0{,}4 & 0{,}2 \\ 0{,}2 & 0{,}4 \end{pmatrix}\begin{pmatrix} 2 \\ 2 \end{pmatrix} = \frac{1}{0{,}12}\begin{pmatrix} 1{,}2 \\ 1{,}2 \end{pmatrix} = \begin{pmatrix} 10 \\ 10 \end{pmatrix}.
\]
2. \(V_{n+1} = U_{n+1} - C = AU_n + B - (AC + B) = A(U_n - C) = AV_n\).
3. Donc \(V_n = A^nV_0\) avec \(V_0 = U_0 - C = \begin{pmatrix} -10 \\ 10 \end{pmatrix}\) :
\[
V_n = \frac{1}{2}\begin{pmatrix} -10(0{,}8^n + 0{,}4^n) + 10(0{,}8^n - 0{,}4^n) \\ -10(0{,}8^n - 0{,}4^n) + 10(0{,}8^n + 0{,}4^n) \end{pmatrix} = \begin{pmatrix} -10 \times 0{,}4^n \\ 10 \times 0{,}4^n \end{pmatrix}.
\]
D’où \(U_n = V_n + C = \begin{pmatrix} 10 - 10 \times 0{,}4^n \\ 10 + 10 \times 0{,}4^n \end{pmatrix}\). Comme \(0 < 0{,}4 < 1\), \(\lim 0{,}4^n = 0\) : la suite \((U_n)\) converge vers \(C = \begin{pmatrix} 10 \\ 10 \end{pmatrix}\). À long terme, chaque réservoir contient 10 litres.

Vérification : \(U_1 = AU_0 + B = \begin{pmatrix} 4 + 2 \\ 12 + 2 \end{pmatrix} = \begin{pmatrix} 6 \\ 14 \end{pmatrix}\), et la formule donne \(10 \mp 4\).
{{% /details %}}
