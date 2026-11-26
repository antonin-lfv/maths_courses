---
title: 'Nombres entiers'
weight: 1
cascade:
  type: docs
---

Dans toute cette page, les lettres \(a\), \(b\), \(c\), \(k\), \(n\) désignent des **entiers relatifs**, c’est-à-dire des éléments de \(\mathbb{Z} = \{\dots\,;\,-2\,;\,-1\,;\,0\,;\,1\,;\,2\,;\,\dots\}\).

## Multiples et diviseurs

> [!TIP] **Définition**
>
> Soit \(a\) et \(b\) deux entiers relatifs, avec \(b \neq 0\). On dit que \(b\) est un **diviseur** de \(a\) (ou que \(b\) **divise** \(a\)) s’il existe un entier relatif \(k\) tel que
> \[
a = k \times b.
\]
> On dit aussi que \(a\) est un **multiple** de \(b\).

{{% details title="Exemple" closed="true" %}}
- \(91 = 7 \times 13\) : \(7\) et \(13\) sont des diviseurs de \(91\), et \(91\) est un multiple de \(7\) et de \(13\).
- \(-56 = (-8) \times 7\) : \(-8\) et \(7\) divisent \(-56\). On a aussi \(-56 = 8 \times (-7)\), donc \(8\) et \(-7\) divisent également \(-56\).
- \(0 = 0 \times b\) pour tout \(b\) : \(0\) est un multiple de tout entier.
{{% /details %}}

> [!TIP] **Propriété**
>
> Soit \(b\) un entier relatif non nul. La somme de deux multiples de \(b\) est un multiple de \(b\).

{{% details title="Démonstration" closed="true" %}}
Soit \(a\) et \(a'\) deux multiples de \(b\) : il existe deux entiers relatifs \(k\) et \(k'\) tels que \(a = kb\) et \(a' = k'b\). Alors
\[
a + a' = kb + k'b = (k + k')\,b.
\]
Comme \(k + k'\) est un entier relatif, \(a + a'\) est un multiple de \(b\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Soit \(a\), \(b\) et \(c\) des entiers relatifs, avec \(b \neq 0\) et \(c \neq 0\).
> - Si \(b\) est un diviseur de \(a\), alors \(-b\) est aussi un diviseur de \(a\).
> - Si \(c\) est un diviseur de \(b\) et si \(b\) est un diviseur de \(a\), alors \(c\) est un diviseur de \(a\).

{{% details title="Démonstration" closed="true" %}}
- Si \(a = kb\), alors \(a = (-k)(-b)\) avec \(-k \in \mathbb{Z}\) : \(-b\) divise \(a\).
- Si \(b = k'c\) et \(a = kb\), alors \(a = k(k'c) = (kk')\,c\) avec \(kk' \in \mathbb{Z}\) : \(c\) divise \(a\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(6\) divise \(48\) et \(48\) divise \(240\) (car \(240 = 5 \times 48\)), donc \(6\) divise \(240\) : en effet \(240 = 40 \times 6\).
{{% /details %}}

## Nombres pairs et impairs

> [!TIP] **Définitions**
>
> - Un entier \(n\) est **pair** s’il est un multiple de \(2\) : il existe \(k \in \mathbb{Z}\) tel que \(n = 2k\).
> - Un entier \(n\) est **impair** s’il n’est pas pair. Le reste de sa division euclidienne par \(2\) vaut alors \(1\) : il existe \(k \in \mathbb{Z}\) tel que \(n = 2k + 1\).

{{% details title="Exemple" closed="true" %}}
\(-34 = 2 \times (-17)\) est pair ; \(57 = 2 \times 28 + 1\) est impair. Pour tout entier \(k\), \(6k + 4 = 2(3k + 2)\) est pair et \(6k + 7 = 2(3k + 3) + 1\) est impair.
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Le produit de deux entiers est pair si et seulement si au moins l’un des deux est pair.
> - Le produit de deux entiers impairs est impair.
> - Le carré d’un entier pair est pair ; le carré d’un entier impair est impair.

{{% details title="Démonstration : le carré d’un nombre impair est impair" closed="true" %}}
Soit \(n\) un entier impair : il existe \(k \in \mathbb{Z}\) tel que \(n = 2k + 1\). Alors
\[
n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1.
\]
Comme \(2k^2 + 2k\) est un entier, \(n^2\) est impair.

De même, si \(n = 2k\), alors \(n^2 = 4k^2 = 2(2k^2)\) est pair.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Par contraposée, si \(n^2\) est pair, alors \(n\) est pair (sinon \(n\) serait impair, et \(n^2\) aussi). Ce résultat sert à démontrer que \(\sqrt{2}\) est irrationnel (page suivante).

## Nombres premiers

> [!TIP] **Définition**
>
> Un entier naturel est **premier** s’il admet exactement deux diviseurs positifs distincts : \(1\) et lui-même.

{{% details title="Exemple" closed="true" %}}
- \(2\), \(3\), \(5\), \(7\), \(11\), \(13\), \(17\), \(19\), \(23\), \(29\) sont les dix premiers nombres premiers.
- \(51 = 3 \times 17\) n’est pas premier : il a quatre diviseurs positifs (\(1\), \(3\), \(17\), \(51\)).
- \(1\) n’est pas premier : il n’a qu’un seul diviseur positif.
{{% /details %}}

> [!TIP] **Propriété**
>
> \(2\) est le seul nombre premier pair.

En effet, tout entier pair supérieur à \(2\) admet au moins trois diviseurs positifs : \(1\), \(2\) et lui-même.

> [!NOTE] **Méthode — Le crible d’Ératosthène**
>
> Pour obtenir tous les nombres premiers inférieurs ou égaux à un entier \(N\) :
> 1. on écrit les entiers de \(2\) à \(N\) ;
> 2. on garde \(2\) et on barre tous ses autres multiples ;
> 3. le premier nombre non barré suivant (\(3\)) est premier : on le garde et on barre ses autres multiples ;
> 4. on recommence avec le premier nombre non barré suivant, tant que son carré est inférieur ou égal à \(N\).
>
> Les nombres non barrés à la fin sont les nombres premiers inférieurs ou égaux à \(N\).

{{% details title="Pourquoi s’arrêter quand le carré dépasse N ?" closed="true" %}}
Si un entier \(m \leq N\) n’est pas premier, il s’écrit \(m = p \times q\) avec \(2 \leq p \leq q\). Alors \(p^2 \leq pq = m \leq N\) : \(m\) a un diviseur \(p\) tel que \(p^2 \leq N\), donc il a déjà été barré. Par exemple, pour \(N = 60\), il suffit de barrer les multiples de \(2\), \(3\), \(5\) et \(7\) (car \(11^2 = 121 > 60\)).
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Tout entier naturel supérieur ou égal à \(2\) peut s’écrire comme un produit de nombres premiers. Cette **décomposition en produit de facteurs premiers** est unique, à l’ordre des facteurs près.

{{% details title="Exemple" closed="true" %}}
\(360 = 2 \times 180 = 2 \times 2 \times 90 = 2 \times 2 \times 2 \times 45 = 2^3 \times 3^2 \times 5\).
{{% /details %}}

## Utiliser les diviseurs et les nombres premiers

> [!NOTE] **Méthode 1 — Lister les diviseurs d’un entier**
>
> 1. Déterminer tous les diviseurs positifs de \(132\).
> 2. En déduire les diviseurs de \(132\) dans \(\mathbb{Z}\).

{{% details title="Solution commentée" closed="true" %}}
1. On cherche les écritures \(132 = d \times d'\) avec \(d \leq d'\), en testant \(d = 1, 2, 3, \dots\) tant que \(d^2 \leq 132\), c’est-à-dire jusqu’à \(d = 11\) (\(11^2 = 121\) et \(12^2 = 144 > 132\)) :
\[
132 = 1 \times 132 = 2 \times 66 = 3 \times 44 = 4 \times 33 = 6 \times 22 = 11 \times 12.
\]
\(5\), \(7\), \(8\), \(9\) et \(10\) ne divisent pas \(132\). Les diviseurs positifs de \(132\) sont donc
\[
1\,;\,2\,;\,3\,;\,4\,;\,6\,;\,11\,;\,12\,;\,22\,;\,33\,;\,44\,;\,66\,;\,132.
\]
2. Si \(d\) divise \(132\), alors \(-d\) aussi. Les diviseurs de \(132\) dans \(\mathbb{Z}\) sont les douze nombres précédents et leurs opposés : \(\pm 1\,;\,\pm 2\,;\,\pm 3\,;\,\pm 4\,;\,\pm 6\,;\,\pm 11\,;\,\pm 12\,;\,\pm 22\,;\,\pm 33\,;\,\pm 44\,;\,\pm 66\,;\,\pm 132\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Étudier la parité d’une expression**
>
> 1. Sans calculatrice, déterminer la parité de \(A = 2\,025^2 - 1\).
> 2. Montrer que, pour tout entier \(n\), le nombre \(B = n^2 + n\) est pair.

{{% details title="Solution commentée" closed="true" %}}
1. \(2\,025\) est impair, donc son carré est impair : \(2\,025^2 = 2k + 1\) avec \(k\) entier. Alors \(A = 2k\) est pair. (Une calculatrice affiche souvent un résultat arrondi pour de tels nombres : on raisonne plutôt sur la parité.)
2. On factorise : \(B = n(n + 1)\). Les entiers \(n\) et \(n + 1\) sont consécutifs, donc l’un des deux est pair. D’après la propriété sur les produits, \(B\) est pair.
{{% /details %}}

> [!NOTE] **Méthode 3 — Décomposer en produit de facteurs premiers**
>
> 1. Décomposer \(1\,350\) et \(2\,520\) en produits de facteurs premiers.
> 2. En déduire le plus grand diviseur commun à ces deux nombres.

{{% details title="Solution commentée" closed="true" %}}
1. On divise successivement par les nombres premiers \(2\), \(3\), \(5\), \(7\)… tant que c’est possible :
\[
1\,350 = 2 \times 675 = 2 \times 3 \times 225 = 2 \times 3 \times 3 \times 75 = 2 \times 3 \times 3 \times 3 \times 25 = 2 \times 3^3 \times 5^2.
\]
\[
2\,520 = 2 \times 1\,260 = 2^2 \times 630 = 2^3 \times 315 = 2^3 \times 3 \times 105 = 2^3 \times 3^2 \times 35 = 2^3 \times 3^2 \times 5 \times 7.
\]
2. Un diviseur commun ne contient que des facteurs premiers communs, avec un exposant au plus égal au plus petit des deux : \(2^1\), \(3^2\) et \(5^1\). Le plus grand diviseur commun est
\[
2 \times 3^2 \times 5 = 90.
\]
Vérification : \(1\,350 = 90 \times 15\) et \(2\,520 = 90 \times 28\).
{{% /details %}}

> [!NOTE] **Méthode 4 — Rendre une fraction irréductible**
>
> Une fraction est **irréductible** lorsque son numérateur et son dénominateur n’ont pas d’autre diviseur positif commun que \(1\). Écrire \(\dfrac{1\,350}{2\,520}\) sous forme irréductible.

{{% details title="Solution commentée" closed="true" %}}
**Avec les décompositions** (méthode 3) : on simplifie par les facteurs premiers communs.
\[
\frac{1\,350}{2\,520} = \frac{2 \times 3^3 \times 5^2}{2^3 \times 3^2 \times 5 \times 7} = \frac{3 \times 5}{2^2 \times 7} = \frac{15}{28}.
\]
**Avec le plus grand diviseur commun** : on divise numérateur et dénominateur par \(90\) : \(\dfrac{1\,350 \div 90}{2\,520 \div 90} = \dfrac{15}{28}\).

\(15 = 3 \times 5\) et \(28 = 2^2 \times 7\) n’ont aucun facteur premier commun : la fraction \(\dfrac{15}{28}\) est irréductible.
{{% /details %}}
