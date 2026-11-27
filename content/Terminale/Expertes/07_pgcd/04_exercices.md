---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

1. Déterminer \(\mathrm{PGCD}(2\,310\,;\,1\,452)\) à l’aide de l’algorithme d’Euclide.
2. En déduire la forme irréductible de la fraction \(\dfrac{1\,452}{2\,310}\).

{{% details title="Solution" closed="true" %}}
1. \({2\,310 = 1\,452 \times 1 + 858}\) ; \({1\,452 = 858 \times 1 + 594}\) ; \({858 = 594 \times 1 + 264}\) ; \({594 = 264 \times 2 + 66}\) ; \({264 = 66 \times 4 + 0}\). Le dernier reste non nul est 66 : \({\mathrm{PGCD}(2\,310\,;\,1\,452) = 66}\).
2. \({1\,452 = 66 \times 22}\) et \({2\,310 = 66 \times 35}\), avec 22 et 35 premiers entre eux : \({\dfrac{1\,452}{2\,310} = \dfrac{22}{35}}\).
{{% /details %}}

### Exercice 2

Déterminer deux entiers relatifs \(u\) et \(v\) tels que \({31u + 13v = 1}\).

{{% details title="Solution" closed="true" %}}
Algorithme d’Euclide : \({31 = 13 \times 2 + 5}\) ; \({13 = 5 \times 2 + 3}\) ; \({5 = 3 \times 1 + 2}\) ; \({3 = 2 \times 1 + 1}\). On remonte :
\[
\begin{aligned}
1 &= 3 - 2 = 3 - (5 - 3) = 2 \times 3 - 5 = 2(13 - 2 \times 5) - 5 = 2 \times 13 - 5 \times 5\\
&= 2 \times 13 - 5(31 - 2 \times 13) = 12 \times 13 - 5 \times 31.
\end{aligned}
\]
Donc \({u = -5}\) et \({v = 12}\) conviennent. Vérification : \({-155 + 156 = 1}\).
{{% /details %}}

### Exercice 3

Soit \(n\) un entier naturel.
1. Montrer que \({\mathrm{PGCD}(n + 3\,;\,2n + 1)}\) divise 5.
2. Déterminer les entiers \(n\) pour lesquels ce PGCD vaut 5.

{{% details title="Solution" closed="true" %}}
1. Tout diviseur commun à \({n + 3}\) et \({2n + 1}\) divise la combinaison linéaire \({2(n + 3) - (2n + 1) = 5}\). En particulier, le PGCD divise 5 : il vaut 1 ou 5.
2. Le PGCD vaut 5 si et seulement si 5 divise \({n + 3}\) et \({2n + 1}\). Or si \({5 \mid n + 3}\), alors \({2n + 1 = 2(n + 3) - 5}\) est aussi divisible par 5. La condition est donc \({n + 3 \equiv 0 \ [5]}\), soit \({n \equiv 2 \ [5]}\). Exemples : \({n = 2}\) donne \({\mathrm{PGCD}(5\,;\,5) = 5}\), \({n = 7}\) donne \({\mathrm{PGCD}(10\,;\,15) = 5}\).
{{% /details %}}

### Exercice 4

Une association achète des stylos à 8 € pièce et des carnets à 5 € pièce, pour un montant total de 100 €. On note \(x\) le nombre de stylos et \(y\) le nombre de carnets.
1. Justifier que \({8x + 5y = 100}\) admet des solutions entières.
2. Résoudre cette équation dans \(\mathbb{Z}^2\).
3. Quels sont les achats possibles ?

{{% details title="Solution" closed="true" %}}
1. \({\mathrm{PGCD}(8\,;\,5) = 1}\), qui divise 100 : l’équation a des solutions.
2. \((0\,;\,20)\) est une solution particulière. Si \((x\,;\,y)\) est solution, \({8x + 5y = 8 \times 0 + 5 \times 20}\), soit \({8x = 5(20 - y)}\). 5 divise \(8x\) et est premier avec 8 : d’après le théorème de Gauss, \(5 \mid x\), donc \({x = 5k}\), puis \({40k = 5(20 - y)}\), soit \({y = 20 - 8k}\). Réciproquement, \({8 \times 5k + 5(20 - 8k) = 100}\). Les solutions sont \({(5k\,;\,20 - 8k)}\), \({k \in \mathbb{Z}}\).
3. Il faut \({x \geq 0}\) et \({y \geq 0}\) : \({k \geq 0}\) et \({k \leq 2{,}5}\), soit \({k \in \{0, 1, 2\}}\). Achats possibles : 0 stylo et 20 carnets, 5 stylos et 12 carnets, ou 10 stylos et 4 carnets.
{{% /details %}}

### Exercice 5

Résoudre dans \(\mathbb{Z}^2\) l’équation \({15x = 21y}\).

{{% details title="Solution" closed="true" %}}
En divisant par \({\mathrm{PGCD}(15\,;\,21) = 3}\), l’équation équivaut à \({5x = 7y}\). Alors 7 divise \(5x\) et 7 est premier avec 5 : d’après le théorème de Gauss, \(7 \mid x\), soit \({x = 7k}\). Puis \({35k = 7y}\), soit \({y = 5k}\). Réciproquement, \({15 \times 7k = 105k = 21 \times 5k}\).

Les solutions sont les couples \((7k\,;\,5k)\), \({k \in \mathbb{Z}}\).
{{% /details %}}

### Exercice 6

Montrer que, pour tout entier relatif \(n\), \({n(n + 1)(2n + 1)}\) est divisible par 6.

{{% details title="Solution" closed="true" %}}
6 = 2 × 3 avec 2 et 3 premiers entre eux : d’après le corollaire du théorème de Gauss, il suffit de montrer que 2 et 3 divisent \({N = n(n + 1)(2n + 1)}\).
- Parmi \(n\) et \({n + 1}\), l’un est pair : \(2 \mid N\).
- Modulo 3 : si \({n \equiv 0}\), \(3 \mid n\) ; si \({n \equiv 1}\), \({2n + 1 \equiv 3 \equiv 0}\) ; si \({n \equiv 2}\), \({n + 1 \equiv 0 \ [3]}\). Dans tous les cas \(3 \mid N\).

Donc \(6 \mid N\). (On retrouve que \({1^2 + 2^2 + \dots + n^2 = \dfrac{n(n + 1)(2n + 1)}{6}}\) est bien un entier.)
{{% /details %}}
