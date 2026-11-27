---
title: 'Deux théorèmes fondamentaux'
weight: 2
cascade:
  type: docs
---

## Décomposition d’un entier en produit de facteurs premiers

> [!TIP] **Propriété (lemme d’Euclide)**
>
> Soit \(p\) un nombre premier et \(a\), \(b\) deux entiers. Si \(p\) divise \(ab\), alors \(p\) divise \(a\) ou \(p\) divise \(b\).

{{% details title="Démonstration" closed="true" %}}
Si \(p\) ne divise pas \(a\), alors \(\mathrm{PGCD}(p\,;\,a)\), qui est un diviseur positif de \(p\), vaut 1 (il ne peut valoir \(p\)). Donc \(p\) et \(a\) sont premiers entre eux et, \(p\) divisant \(ab\), le théorème de Gauss donne \(p \mid b\).
{{% /details %}}

> [!TIP] **Théorème**
>
> Tout entier naturel \({n \geq 2}\) se décompose de manière **unique** sous la forme
> \[
n = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \dots \times p_k^{\alpha_k},
\]
> où \({p_1 < p_2 < \dots < p_k}\) sont des nombres premiers et \(\alpha_1, \alpha_2, \dots, \alpha_k\) des entiers naturels non nuls. Cette écriture est la **décomposition de \(n\) en produit de facteurs premiers** ; elle est unique à l’ordre des facteurs près.

{{% details title="Démonstration" closed="true" %}}
**Existence.** Si \(n\) est premier, c’est terminé. Sinon, \(n\) admet un plus petit diviseur premier \(q_1\) : \({n = q_1n_1}\) avec \({2 \leq n_1 < n}\). On recommence avec \(n_1\) : s’il n’est pas premier, \({n_1 = q_2n_2}\) avec \({n_2 < n_1}\), etc. La suite \({n > n_1 > n_2 > \dots}\) est une suite strictement décroissante d’entiers supérieurs ou égaux à 2 : elle s’arrête, sur un dernier terme premier. On obtient \({n = q_1q_2\cdots q_m}\) avec des \(q_i\) premiers ; on regroupe les facteurs égaux et on les range dans l’ordre croissant.

**Unicité.** Supposons \({n = p_1p_2\cdots p_r = q_1q_2\cdots q_s}\) (facteurs premiers, éventuellement répétés). Le nombre premier \(p_1\) divise le produit \(q_1\cdots q_s\) ; d’après le lemme d’Euclide (appliqué plusieurs fois), il divise l’un des \(q_j\), et comme \(q_j\) est premier, \({p_1 = q_j}\). On simplifie par \(p_1\) des deux côtés et on recommence : les deux listes de facteurs sont les mêmes, à l’ordre près.
{{% /details %}}

{{% details title="Exemples" closed="true" %}}
- \({360 = 2^3 \times 3^2 \times 5}\).
- \({1\,001 = 7 \times 11 \times 13}\).
- \(53\) est premier : sa décomposition est \(53\) lui-même.
{{% /details %}}

> [!TIP] **Propriété (diviseurs d’un entier)**
>
> Si \({n = p_1^{\alpha_1} \times \dots \times p_k^{\alpha_k}}\), les diviseurs positifs de \(n\) sont les entiers \({p_1^{\beta_1} \times \dots \times p_k^{\beta_k}}\) avec \({0 \leq \beta_i \leq \alpha_i}\) pour tout \(i\). Le nombre de diviseurs positifs de \(n\) est donc \({(\alpha_1 + 1)(\alpha_2 + 1)\cdots(\alpha_k + 1)}\).

{{% details title="Exemple" closed="true" %}}
\({72 = 2^3 \times 3^2}\) a \({(3 + 1)(2 + 1) = 12}\) diviseurs positifs, de la forme \({2^\beta \times 3^\gamma}\) avec \({0 \leq \beta \leq 3}\) et \({0 \leq \gamma \leq 2}\) :

| | \(3^0\) | \(3^1\) | \(3^2\) |
|---|---|---|---|
| \(2^0\) | 1 | 3 | 9 |
| \(2^1\) | 2 | 6 | 18 |
| \(2^2\) | 4 | 12 | 36 |
| \(2^3\) | 8 | 24 | 72 |
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La décomposition permet aussi de calculer un PGCD : on prend les facteurs premiers communs, chacun avec le plus petit exposant. Par exemple \(\mathrm{PGCD}(2^3 \times 3^2\,;\,2 \times 3^3 \times 5) = 2 \times 3^2 = 18\).

## Petit théorème de Fermat

> [!TIP] **Théorème (petit théorème de Fermat, admis)**
>
> Soit \(p\) un nombre premier et \(a\) un entier **non divisible par \(p\)**. Alors
> \[
a^{p-1} \equiv 1 \ [p].
\]

> [!TIP] **Conséquence**
>
> Si \(p\) est un nombre premier, alors pour tout entier \(a\) : \({a^p \equiv a \ [p]}\).

{{% details title="Démonstration" closed="true" %}}
- Si \(p\) divise \(a\) : \({a \equiv 0 \ [p]}\), donc \({a^p \equiv 0 \equiv a \ [p]}\).
- Sinon, d’après le petit théorème de Fermat, \({a^{p-1} \equiv 1 \ [p]}\) ; en multipliant par \(a\), \({a^p \equiv a \ [p]}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le petit théorème de Fermat donne une condition **nécessaire** pour qu’un entier soit premier. Par contraposée : si l’on trouve un entier \(a\), avec \({1 < a < n}\) et \(a\) premier avec \(n\), tel que \({a^{n-1} \not\equiv 1 \ [n]}\), alors \(n\) n’est pas premier. Exemple : \({2^{8} = 256 = 9 \times 28 + 4}\), donc \({2^{9-1} \equiv 4 \not\equiv 1 \ [9]}\) et 9 n’est pas premier. En revanche, la réciproque est fausse : certains entiers non premiers vérifient \({a^{n-1} \equiv 1 \ [n]}\) pour certains \(a\).

## Décomposer et utiliser Fermat

> [!NOTE] **Exercice résolu 1 - Décomposer en facteurs premiers**
>
> Décomposer en produit de facteurs premiers \({a = 252}\), \({b = 1\,617}\) et \({c = 2\,048}\).

{{% details title="Solution commentée" closed="true" %}}
On divise successivement par les plus petits nombres premiers possibles.
- \({252 = 2 \times 126 = 2^2 \times 63 = 2^2 \times 3^2 \times 7}\).
- \(1\,617\) est impair ; \({1 + 6 + 1 + 7 = 15}\), divisible par 3 : \(1\,617 = 3 \times 539 = 3 \times 7 \times 77 = 3 \times 7^2 \times 11\).
- \({2\,048 = 2^{11}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Déterminer les diviseurs d’un entier**
>
> Déterminer le nombre de diviseurs positifs de \(200\), puis les énumérer.

{{% details title="Solution commentée" closed="true" %}}
\({200 = 2^3 \times 5^2}\) : il y a \({(3 + 1)(2 + 1) = 12}\) diviseurs positifs, de la forme \({2^\beta \times 5^\gamma}\) avec \({0 \leq \beta \leq 3}\), \({0 \leq \gamma \leq 2}\) :

| | \(5^0\) | \(5^1\) | \(5^2\) |
|---|---|---|---|
| \(2^0\) | 1 | 5 | 25 |
| \(2^1\) | 2 | 10 | 50 |
| \(2^2\) | 4 | 20 | 100 |
| \(2^3\) | 8 | 40 | 200 |
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Utiliser le petit théorème de Fermat**
>
> 1. Déterminer le reste de la division euclidienne de \(2^{2027}\) par 13.
> 2. Montrer que, pour tout entier \(n\), \({n^{11} - n}\) est divisible par 11.

{{% details title="Solution commentée" closed="true" %}}
1. 13 est premier et ne divise pas 2 : d’après le petit théorème de Fermat, \({2^{12} \equiv 1 \ [13]}\). Or \({2027 = 12 \times 168 + 11}\), donc \({2^{2027} \equiv 2^{11} \ [13]}\). Avec \({2^4 = 16 \equiv 3}\), \({2^8 \equiv 9}\) et \({2^3 = 8}\) : \({2^{11} = 2^8 \times 2^3 \equiv 9 \times 8 = 72 \equiv 7 \ [13]}\). Le reste est 7.
2. 11 est premier : d’après la conséquence du petit théorème de Fermat, \({n^{11} \equiv n \ [11]}\) pour tout entier \(n\), c’est-à-dire que 11 divise \({n^{11} - n}\).
{{% /details %}}
