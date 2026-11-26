---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

La suite de Fibonacci est définie par \(F_0 = 0\), \(F_1 = 1\) et \(F_{n+2} = F_{n+1} + F_n\) pour tout \(n \in \mathbb{N}\). On pose \(U_n = \begin{pmatrix} F_n \\ F_{n+1} \end{pmatrix}\).
1. Déterminer la matrice \(A\) telle que \(U_{n+1} = AU_n\) pour tout \(n\).
2. On donne, à la calculatrice, \(A^{10} = \begin{pmatrix} 34 & 55 \\ 55 & 89 \end{pmatrix}\). En déduire \(F_{10}\) et \(F_{11}\).

{{% details title="Solution" closed="true" %}}
1. \(U_{n+1} = \begin{pmatrix} F_{n+1} \\ F_{n+2} \end{pmatrix} = \begin{pmatrix} F_{n+1} \\ F_n + F_{n+1} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} F_n \\ F_{n+1} \end{pmatrix}\), donc \(A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}\).
2. \(U_{10} = A^{10}U_0 = \begin{pmatrix} 34 & 55 \\ 55 & 89 \end{pmatrix}\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 55 \\ 89 \end{pmatrix}\) : \(F_{10} = 55\) et \(F_{11} = 89\).
{{% /details %}}

### Exercice 2

Soit \((U_n)\) la suite de matrices colonnes définie par \(U_0 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}\) et \(U_{n+1} = AU_n + B\), avec \(A = \begin{pmatrix} 0{,}5 & 0 \\ 0 & 0{,}25 \end{pmatrix}\) et \(B = \begin{pmatrix} 1 \\ 3 \end{pmatrix}\).
1. Déterminer la matrice \(C\) telle que \(C = AC + B\).
2. Exprimer \(U_n\) en fonction de \(n\) et étudier la convergence de \((U_n)\).

{{% details title="Solution" closed="true" %}}
1. Avec \(C = \begin{pmatrix} x \\ y \end{pmatrix}\) : \(x = 0{,}5x + 1\) et \(y = 0{,}25y + 3\), soit \(x = 2\) et \(y = 4\). Donc \(C = \begin{pmatrix} 2 \\ 4 \end{pmatrix}\).
2. \(V_n = U_n - C\) vérifie \(V_{n+1} = AV_n\), donc \(V_n = A^nV_0\), avec \(A^n = \begin{pmatrix} 0{,}5^n & 0 \\ 0 & 0{,}25^n \end{pmatrix}\) (matrice diagonale) et \(V_0 = \begin{pmatrix} -2 \\ -4 \end{pmatrix}\). Ainsi
\[
U_n = C + A^nV_0 = \begin{pmatrix} 2 - 2 \times 0{,}5^n \\ 4 - 4 \times 0{,}25^n \end{pmatrix}.
\]
Comme \(\lim 0{,}5^n = \lim 0{,}25^n = 0\), la suite \((U_n)\) converge vers \(C = \begin{pmatrix} 2 \\ 4 \end{pmatrix}\).
{{% /details %}}

### Exercice 3

Deux opérateurs téléphoniques \(X\) et \(Y\) se partagent un marché. Chaque mois, 10 % des clients de \(X\) passent chez \(Y\) et 20 % des clients de \(Y\) passent chez \(X\) ; les autres restent fidèles. Au départ, chaque opérateur a la moitié des clients.
1. Donner la matrice de transition \(P\) de cette chaîne de Markov (états \(X\) puis \(Y\)).
2. Calculer \(\pi_1\) et \(\pi_2\).
3. Déterminer la distribution invariante. Que peut-on en conclure à long terme ?

{{% details title="Solution" closed="true" %}}
1. \(P = \begin{pmatrix} 0{,}9 & 0{,}1 \\ 0{,}2 & 0{,}8 \end{pmatrix}\).
2. \(\pi_0 = \begin{pmatrix} 0{,}5 & 0{,}5 \end{pmatrix}\), \(\pi_1 = \pi_0P = \begin{pmatrix} 0{,}45 + 0{,}1 & 0{,}05 + 0{,}4 \end{pmatrix} = \begin{pmatrix} 0{,}55 & 0{,}45 \end{pmatrix}\), puis \(\pi_2 = \pi_1P = \begin{pmatrix} 0{,}495 + 0{,}09 & 0{,}055 + 0{,}36 \end{pmatrix} = \begin{pmatrix} 0{,}585 & 0{,}415 \end{pmatrix}\).
3. \(P\) ne contient pas de 0, donc \((\pi_n)\) converge. Avec \(\pi = \begin{pmatrix} x & y \end{pmatrix}\), \(\pi = \pi P\) donne \(x = 0{,}9x + 0{,}2y\), soit \(x = 2y\), et \(x + y = 1\) : \(\pi = \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \end{pmatrix}\). À long terme, l’opérateur \(X\) aura environ deux tiers des clients.
{{% /details %}}

### Exercice 4

On considère une chaîne de Markov à deux états de matrice de transition \(P = \begin{pmatrix} 1 - a & a \\ b & 1 - b \end{pmatrix}\), avec \(0 < a < 1\) et \(0 < b < 1\).
1. Justifier que la suite \((\pi_n)\) converge.
2. Montrer que la distribution invariante est \(\pi = \begin{pmatrix} \dfrac{b}{a + b} & \dfrac{a}{a + b} \end{pmatrix}\).
3. Retrouver le résultat de l’exercice 3.

{{% details title="Solution" closed="true" %}}
1. Tous les termes de \(P\) sont strictement positifs : \(P\) ne contient pas de 0.
2. Avec \(\pi = \begin{pmatrix} x & y \end{pmatrix}\) et \(x + y = 1\), la première coordonnée de \(\pi = \pi P\) donne \(x = (1 - a)x + by\), soit \(ax = by\). Avec \(y = 1 - x\) : \(ax = b - bx\), donc \(x = \dfrac{b}{a + b}\) et \(y = \dfrac{a}{a + b}\). On vérifie la seconde coordonnée : \(ax + (1 - b)y = \dfrac{ab + a - ab}{a + b} = \dfrac{a}{a + b} = y\).
3. Pour l’exercice 3, \(a = 0{,}1\) et \(b = 0{,}2\) : \(\pi = \begin{pmatrix} \frac{0{,}2}{0{,}3} & \frac{0{,}1}{0{,}3} \end{pmatrix} = \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \end{pmatrix}\).
{{% /details %}}

### Exercice 5

On reprend le graphe probabiliste à trois états \(A\), \(B\), \(C\) du cours, de matrice de transition
\[
P = \begin{pmatrix} 0{,}5 & 0{,}3 & 0{,}2 \\ 0{,}1 & 0{,}6 & 0{,}3 \\ 0{,}4 & 0 & 0{,}6 \end{pmatrix}.
\]

![](/images/image333.png)

1. Calculer la troisième ligne de \(P^2\). En déduire que la suite \((\pi_n)\) converge.
2. Déterminer la distribution invariante \(\pi = \begin{pmatrix} a & b & c \end{pmatrix}\).

{{% details title="Solution" closed="true" %}}
1. La troisième ligne de \(P^2\) est \(0{,}4 \times (\text{ligne 1}) + 0 \times (\text{ligne 2}) + 0{,}6 \times (\text{ligne 3})\) :
\[
\begin{pmatrix} 0{,}2 + 0{,}24 & 0{,}12 + 0 & 0{,}08 + 0{,}36 \end{pmatrix} = \begin{pmatrix} 0{,}44 & 0{,}12 & 0{,}44 \end{pmatrix}.
\]
Les deux premières lignes de \(P^2\) sont des combinaisons, à coefficients strictement positifs, des lignes de \(P\) ; comme les lignes 1 et 2 de \(P\) n’ont aucun 0, elles n’en ont pas non plus. Ainsi \(P^2\) ne contient aucun 0 et \((\pi_n)\) converge.
2. \(\pi = \pi P\) s’écrit :
\[
\begin{cases} a = 0{,}5a + 0{,}1b + 0{,}4c \\ b = 0{,}3a + 0{,}6b \\ c = 0{,}2a + 0{,}3b + 0{,}6c \end{cases}
\]
La deuxième équation donne \(0{,}4b = 0{,}3a\), soit \(b = \frac{3}{4}a\). La première donne \(0{,}5a = 0{,}1b + 0{,}4c = 0{,}075a + 0{,}4c\), soit \(c = \frac{0{,}425}{0{,}4}a = \frac{17}{16}a\). Avec \(a + b + c = 1\) : \(a\left(1 + \frac{12}{16} + \frac{17}{16}\right) = \frac{45}{16}a = 1\), donc \(a = \frac{16}{45}\), \(b = \frac{12}{45} = \frac{4}{15}\), \(c = \frac{17}{45}\).

Vérification avec la troisième équation : \(0{,}2 \times \frac{16}{45} + 0{,}3 \times \frac{12}{45} + 0{,}6 \times \frac{17}{45} = \frac{3{,}2 + 3{,}6 + 10{,}2}{45} = \frac{17}{45}\).
{{% /details %}}
