---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

On considère \({A = \begin{pmatrix} 3 & -1 \\ 2 & 0 \end{pmatrix}}\) et \({B = \begin{pmatrix} 1 & 2 \\ -1 & 1 \end{pmatrix}}\). Calculer \({A + 2B}\), \(AB\) et \(BA\).

{{% details title="Solution" closed="true" %}}
\[
\begin{gathered}
A + 2B = \begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}, \qquad AB = \begin{pmatrix} 3 + 1 & 6 - 1 \\ 2 + 0 & 4 + 0 \end{pmatrix} = \begin{pmatrix} 4 & 5 \\ 2 & 4 \end{pmatrix}, \\[0.3em]
BA = \begin{pmatrix} 3 + 4 & -1 + 0 \\ -3 + 2 & 1 + 0 \end{pmatrix} = \begin{pmatrix} 7 & -1 \\ -1 & 1 \end{pmatrix}.
\end{gathered}
\]
{{% /details %}}

### Exercice 2

Soit \({A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}}\).
1. Vérifier que \({A^2 - 3A + 2I = O}\).
2. En déduire que \(A\) est inversible et exprimer \({A^{-1}}\) en fonction de \(A\) et \(I\). Donner \({A^{-1}}\).

{{% details title="Solution" closed="true" %}}
1. \({A^2 = \begin{pmatrix} 1 & 3 \\ 0 & 4 \end{pmatrix}}\), donc \(A^2 - 3A + 2I = \begin{pmatrix} 1 - 3 + 2 & 3 - 3 + 0 \\ 0 & 4 - 6 + 2 \end{pmatrix} = O\).
2. L’égalité s’écrit \({2I = 3A - A^2 = A(3I - A)}\), soit \({A \times \dfrac{1}{2}(3I - A) = I}\). Donc \(A\) est inversible et
\[
A^{-1} = \dfrac{1}{2}(3I - A) = \dfrac{1}{2}\begin{pmatrix} 2 & -1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & -\dfrac{1}{2} \\ 0 & \dfrac{1}{2} \end{pmatrix}.
\]
{{% /details %}}

### Exercice 3

Soit \({D = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}}\). Démontrer par récurrence que, pour tout entier naturel \(n\), \({D^n = \begin{pmatrix} 3^n & 0 \\ 0 & (-2)^n \end{pmatrix}}\).

{{% details title="Solution" closed="true" %}}
- **Initialisation.** \({D^0 = I = \begin{pmatrix} 3^0 & 0 \\ 0 & (-2)^0 \end{pmatrix}}\).
- **Hérédité.** Si \({D^n = \begin{pmatrix} 3^n & 0 \\ 0 & (-2)^n \end{pmatrix}}\), alors \(D^{n+1} = D^nD = \begin{pmatrix} 3^n \times 3 & 0 \\ 0 & (-2)^n \times (-2) \end{pmatrix} = \begin{pmatrix} 3^{n+1} & 0 \\ 0 & (-2)^{n+1} \end{pmatrix}\).
- **Conclusion.** La formule est vraie pour tout \({n \in \mathbb{N}}\).
{{% /details %}}

### Exercice 4

1. Montrer que \({A = \begin{pmatrix} 4 & 3 \\ 3 & 2 \end{pmatrix}}\) est inversible et calculer \({A^{-1}}\).
2. En déduire la solution du système \({\begin{cases} 4x + 3y = 1 \\ 3x + 2y = 2 \end{cases}}\).
3. La matrice \({M = \begin{pmatrix} 2 & -4 \\ -1 & 2 \end{pmatrix}}\) est-elle inversible ?

{{% details title="Solution" closed="true" %}}
1. \({ad - bc = 8 - 9 = -1 \neq 0}\) : \(A\) est inversible et \({A^{-1} = \dfrac{1}{-1}\begin{pmatrix} 2 & -3 \\ -3 & 4 \end{pmatrix} = \begin{pmatrix} -2 & 3 \\ 3 & -4 \end{pmatrix}}\).
2. Le système s’écrit \({AX = B}\) avec \({B = \begin{pmatrix} 1 \\ 2 \end{pmatrix}}\), donc \({X = A^{-1}B = \begin{pmatrix} -2 + 6 \\ 3 - 8 \end{pmatrix} = \begin{pmatrix} 4 \\ -5 \end{pmatrix}}\). Vérification : \({16 - 15 = 1}\) et \({12 - 10 = 2}\).
3. \({2 \times 2 - (-4)(-1) = 4 - 4 = 0}\) : \(M\) n’est pas inversible.
{{% /details %}}

### Exercice 5

Trois boutiques d’une chaîne vendent des baguettes, des croissants et des pains au chocolat. Un samedi, les ventes (en unités) sont données par la matrice \(Q\), où chaque ligne correspond à une boutique et chaque colonne à un produit. Les prix unitaires (en €) sont donnés par la matrice colonne \(P\).
\[
Q = \begin{pmatrix} 20 & 15 & 10 \\ 30 & 10 & 5 \\ 25 & 20 & 15 \end{pmatrix}, \qquad P = \begin{pmatrix} 1{,}2 \\ 1{,}1 \\ 1{,}3 \end{pmatrix}.
\]
Calculer \(QP\) et interpréter le résultat.

{{% details title="Solution" closed="true" %}}
\[
\begin{aligned}
QP &= \begin{pmatrix} 20 \times 1{,}2 + 15 \times 1{,}1 + 10 \times 1{,}3 \\ 30 \times 1{,}2 + 10 \times 1{,}1 + 5 \times 1{,}3 \\ 25 \times 1{,}2 + 20 \times 1{,}1 + 15 \times 1{,}3 \end{pmatrix} = \begin{pmatrix} 24 + 16{,}5 + 13 \\ 36 + 11 + 6{,}5 \\ 30 + 22 + 19{,}5 \end{pmatrix} \\[0.3em]
&= \begin{pmatrix} 53{,}5 \\ 53{,}5 \\ 71{,}5 \end{pmatrix}.
\end{aligned}
\]
Chaque terme de \(QP\) est le chiffre d’affaires d’une boutique ce samedi : 53,50 € pour les deux premières et 71,50 € pour la troisième.
{{% /details %}}

### Exercice 6

Soit \({N = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 0 & 3 \\ 0 & 0 & 0 \end{pmatrix}}\).
1. Calculer \(N^2\) et \(N^3\).
2. On pose \({A = I + N}\). Vérifier que \({A(I - N + N^2) = I}\), et en déduire \({A^{-1}}\).

{{% details title="Solution" closed="true" %}}
1. \({N^2 = \begin{pmatrix} 0 & 0 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}}\) (seul le terme \((1, 3)\) est non nul : \({0 \times 2 + 1 \times 3 + 2 \times 0 = 3}\)) et \({N^3 = N^2N = O}\).
2. Par distributivité, \(A(I - N + N^2) = (I + N)(I - N + N^2) = I - N + N^2 + N - N^2 + N^3 = I + N^3 = I\). Donc \(A\) est inversible et
\[
A^{-1} = I - N + N^2 = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -3 \\ 0 & 0 & 1 \end{pmatrix}.
\]
Vérification de la première ligne de \({AA^{-1}}\), avec \({A = \begin{pmatrix} 1 & 1 & 2 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}}\) : \({(1, 1 - 1, 1 - 3 + 2) = (1, 0, 0)}\).
{{% /details %}}
