---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

On lance deux dés équilibrés à 4 faces (numérotées de 1 à 4), indépendamment ; \(X\) et \(Y\) sont les résultats et \({S = X + Y}\).
1. Déterminer la loi de \(S\).
2. Calculer \(E(S)\) et \(V(S)\) en utilisant \({E(X) = 2{,}5}\) et \({V(X) = 1{,}25}\).

{{% details title="Solution" closed="true" %}}
1. Les 16 couples sont équiprobables ; en les comptant dans un tableau à double entrée :

| \(s\) | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|
| \({P(S = s)}\) | \(\dfrac{1}{16}\) | \(\dfrac{2}{16}\) | \(\dfrac{3}{16}\) | \(\dfrac{4}{16}\) | \(\dfrac{3}{16}\) | \(\dfrac{2}{16}\) | \(\dfrac{1}{16}\) |

2. \({E(S) = 2{,}5 + 2{,}5 = 5}\) ; \(X\) et \(Y\) étant indépendantes, \({V(S) = 1{,}25 + 1{,}25 = 2{,}5}\).
{{% /details %}}

### Exercice 2

Une variable aléatoire \(X\) vérifie \({E(X) = 10}\) et \({\sigma(X) = 2}\). Calculer l’espérance et l’écart type de \({Y = -3X + 5}\).

{{% details title="Solution" closed="true" %}}
\({E(Y) = -3 \times 10 + 5 = -25}\) et \({\sigma(Y) = |-3| \times 2 = 6}\).
{{% /details %}}

### Exercice 3

La durée \(T\) (en minutes) d’un appel à un service client est une variable aléatoire positive d’espérance 4 min. Majorer la probabilité qu’un appel dure au moins 20 minutes.

{{% details title="Solution" closed="true" %}}
D’après l’inégalité de Markov : \({P(T \geq 20) \leq \dfrac{4}{20} = 0{,}2}\).
{{% /details %}}

### Exercice 4

On lance 100 fois une pièce équilibrée ; \(X\) est le nombre de « pile ».
1. Calculer \(E(X)\) et \(V(X)\).
2. Minorer \({P(40 < X < 60)}\) à l’aide de l’inégalité de Bienaymé-Tchebychev.

{{% details title="Solution" closed="true" %}}
1. \({X \sim \mathcal{B}(100\,;\,0{,}5)}\) : \({E(X) = 50}\) et \({V(X) = 25}\).
2. \({40 < X < 60 \iff |X - 50| < 10}\) et \({P\big(|X - 50| \geq 10\big) \leq \dfrac{25}{100} = 0{,}25}\). Donc \({P(40 < X < 60) \geq 0{,}75}\) (la valeur exacte est environ 0,943).
{{% /details %}}

### Exercice 5

Un institut de sondage veut estimer la proportion \(p\) (inconnue) d’électeurs favorables à un projet. On note \(M_n\) la proportion observée sur \(n\) personnes interrogées (tirages indépendants).
1. Montrer que, pour tout \({p \in [0\,;\,1]}\), \({p(1 - p) \leq \dfrac{1}{4}}\).
2. En déduire une taille \(n\) garantissant \({P\big(|M_n - p| \geq 0{,}02\big) \leq 0{,}05}\), quel que soit \(p\).

{{% details title="Solution" closed="true" %}}
1. \(\dfrac{1}{4} - p(1 - p) = p^2 - p + \dfrac{1}{4} = \left(p - \dfrac{1}{2}\right)^2 \geq 0\).
2. \({V(M_n) = \dfrac{p(1 - p)}{n} \leq \dfrac{1}{4n}}\). D’après l’inégalité de concentration :
\[
P\big(|M_n - p| \geq 0{,}02\big) \leq \dfrac{p(1 - p)}{n \times 0{,}02^2} \leq \dfrac{1}{4n \times 0{,}0004} = \dfrac{625}{n}.
\]
Il suffit que \({\dfrac{625}{n} \leq 0{,}05}\), soit \({n \geq 12\,500}\).
{{% /details %}}
