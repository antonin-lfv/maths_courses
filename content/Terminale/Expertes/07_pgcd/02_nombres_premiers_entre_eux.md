---
title: 'Nombres premiers entre eux'
weight: 2
cascade:
  type: docs
---

## Couples d’entiers premiers entre eux

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux entiers relatifs non nuls. On dit que \(a\) et \(b\) sont **premiers entre eux** lorsque \({\mathrm{PGCD}(a\,;\,b) = 1}\).

> [!IMPORTANT] **Remarque**
>
> \(a\) et \(b\) sont premiers entre eux si et seulement si leurs seuls diviseurs communs sont \(1\) et \({-1}\).

> [!TIP] **Définition**
>
> Soient \(a\) un entier relatif et \(b\) un entier naturel non nul. La fraction \(\dfrac{a}{b}\) est **irréductible** si \(a\) et \(b\) sont premiers entre eux.

{{% details title="Exemple" closed="true" %}}
\(\dfrac{35}{12}\) est irréductible : \({\mathcal{D}(35) = \{\pm 1, \pm 5, \pm 7, \pm 35\}}\) et \({\mathcal{D}(12) = \{\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12\}}\) n’ont en commun que \({\pm 1}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soient \(a\) et \(b\) deux entiers relatifs non nuls et \({d = \mathrm{PGCD}(a\,;\,b)}\). Il existe deux entiers \(a'\) et \(b'\) **premiers entre eux** tels que \({a = da'}\) et \({b = db'}\).

{{% details title="Démonstration" closed="true" %}}
\(d\) divise \(a\) et \(b\) : on écrit \({a = da'}\) et \({b = db'}\). Si \({k \geq 1}\) est un diviseur commun de \(a'\) et \(b'\), alors \(dk\) divise \(a\) et \(b\), donc \({dk \leq d}\) et \({k = 1}\). Ainsi \({\mathrm{PGCD}(a'\,;\,b') = 1}\).
{{% /details %}}

## Théorème de Bézout

> [!TIP] **Théorème de Bézout**
>
> Soient \(a\) et \(b\) deux entiers relatifs non nuls. \(a\) et \(b\) sont premiers entre eux si et seulement si il existe deux entiers relatifs \(u\) et \(v\) tels que
> \[
au + bv = 1.
\]

{{% details title="Démonstration" closed="true" %}}
On démontre d’abord le résultat plus général suivant : **il existe des entiers \(u\) et \(v\) tels que \({au + bv = \mathrm{PGCD}(a\,;\,b)}\).**

L’ensemble \(E\) des entiers strictement positifs de la forme \({au + bv}\) (\({u, v \in \mathbb{Z}}\)) n’est pas vide (il contient \({a^2 + b^2}\)). Il admet un plus petit élément \({m = au_0 + bv_0}\).
- Écrivons la division euclidienne \({a = mq + r}\), \({0 \leq r < m}\). Alors \({r = a - mq = a(1 - qu_0) + b(-qv_0)}\) est de la forme \({au + bv}\). Si \({r > 0}\), on aurait \({r \in E}\) et \({r < m}\) : impossible. Donc \({r = 0}\) et \(m\) divise \(a\). De même, \(m\) divise \(b\). Ainsi \({m \leq \mathrm{PGCD}(a\,;\,b)}\).
- Inversement, \({d = \mathrm{PGCD}(a\,;\,b)}\) divise \(a\) et \(b\), donc la combinaison linéaire \(m\) ; comme \({m > 0}\), \({d \leq m}\).

Donc \({m = d}\). **Démonstration du théorème :**
- si \({\mathrm{PGCD}(a\,;\,b) = 1}\), le résultat précédent donne \(u\) et \(v\) tels que \({au + bv = 1}\) ;
- réciproquement, si \({au + bv = 1}\), tout diviseur commun de \(a\) et \(b\) divise \({au + bv = 1}\) : c’est \(1\) ou \({-1}\), donc \({\mathrm{PGCD}(a\,;\,b) = 1}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({8 \times 2 + 15 \times (-1) = 1}\) : d’après le théorème de Bézout, 8 et 15 sont premiers entre eux.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le théorème affirme l’existence de \(u\) et \(v\), sans dire comment les trouver. Pour les obtenir, on peut « remonter » l’algorithme d’Euclide (voir l’exercice résolu 1). Ces entiers ne sont pas uniques : \({8 \times (-13) + 15 \times 7 = 1}\) aussi.

## Caractérisation du PGCD

> [!TIP] **Théorème de Bézout généralisé**
>
> Soient \(a\) et \(b\) deux entiers relatifs non nuls et \(d\) un entier naturel non nul. \({\mathrm{PGCD}(a\,;\,b) = d}\) si et seulement si \(d\) divise \(a\), \(d\) divise \(b\), et il existe deux entiers relatifs \(u\) et \(v\) tels que \({au + bv = d}\).

{{% details title="Démonstration" closed="true" %}}
- Si \({d = \mathrm{PGCD}(a\,;\,b)}\), \(d\) divise \(a\) et \(b\), et l’existence de \(u\), \(v\) a été démontrée ci-dessus.
- Réciproquement, supposons \(d \mid a\), \(d \mid b\) et \({au + bv = d}\). Alors \({d \leq \mathrm{PGCD}(a\,;\,b)}\). Par ailleurs \(\mathrm{PGCD}(a\,;\,b)\) divise \(a\) et \(b\), donc \({au + bv = d}\), d’où \({\mathrm{PGCD}(a\,;\,b) \leq d}\). Ainsi \({\mathrm{PGCD}(a\,;\,b) = d}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La condition « \(d\) divise \(a\) et \(b\) » est indispensable : \({4 \times 1 + 6 \times 1 = 10}\), mais 10 n’est pas le PGCD de 4 et 6 (qui vaut 2). Ce que l’on peut affirmer, c’est que le PGCD **divise** toute combinaison \({au + bv}\).

## Utiliser le théorème de Bézout

> [!NOTE] **Exercice résolu 1 - Calculer des coefficients de Bézout**
>
> À l’aide de l’algorithme d’Euclide, déterminer deux entiers \(u\) et \(v\) tels que \({59u + 27v = 1}\).

{{% details title="Solution commentée" closed="true" %}}
On écrit l’algorithme d’Euclide, en exprimant chaque reste :
\[
\begin{aligned}
59 &= 27 \times 2 + 5 &\quad&\text{donc } 5 = 59 - 2 \times 27,\\
27 &= 5 \times 5 + 2 &&\text{donc } 2 = 27 - 5 \times 5,\\
5 &= 2 \times 2 + 1 &&\text{donc } 1 = 5 - 2 \times 2.
\end{aligned}
\]
Le PGCD vaut 1. On remonte les calculs en remplaçant successivement les restes :
\[
\begin{aligned}
1 &= 5 - 2(27 - 5 \times 5) = 11 \times 5 - 2 \times 27 = 11(59 - 2 \times 27) - 2 \times 27 \\[0.3em]
&= 11 \times 59 - 24 \times 27.
\end{aligned}
\]
Donc \({u = 11}\) et \({v = -24}\) conviennent. Vérification : \({649 - 648 = 1}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Montrer que deux entiers sont premiers entre eux**
>
> Montrer que, pour tout entier naturel \(n\), les entiers \({2n + 3}\) et \({3n + 4}\) sont premiers entre eux. Que peut-on dire de la fraction \({\dfrac{2n + 3}{3n + 4}}\) ?

{{% details title="Solution commentée" closed="true" %}}
On cherche une combinaison linéaire indépendante de \(n\) : \(3(2n + 3) - 2(3n + 4) = 6n + 9 - 6n - 8 = 1\).

Avec \({u = 3}\) et \({v = -2}\), on a \({(2n + 3)u + (3n + 4)v = 1}\) : d’après le théorème de Bézout, \({2n + 3}\) et \({3n + 4}\) sont premiers entre eux. La fraction \({\dfrac{2n + 3}{3n + 4}}\) est donc irréductible pour tout \({n \in \mathbb{N}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Utiliser un PGCD**
>
> Déterminer les couples d’entiers naturels \((a\,;\,b)\) tels que \({a \leq b}\), \({a + b = 96}\) et \({\mathrm{PGCD}(a\,;\,b) = 12}\).

{{% details title="Solution commentée" closed="true" %}}
Comme \({\mathrm{PGCD}(a\,;\,b) = 12}\), on écrit \({a = 12a'}\) et \({b = 12b'}\) avec \(a'\) et \(b'\) premiers entre eux et \({a' \leq b'}\). Alors \({12(a' + b') = 96}\), soit \({a' + b' = 8}\).

Les couples \((a'\,;\,b')\) avec \({a' \leq b'}\) et \({a' + b' = 8}\) sont \((1\,;\,7)\), \((2\,;\,6)\), \((3\,;\,5)\), \((4\,;\,4)\). Seuls \((1\,;\,7)\) et \((3\,;\,5)\) sont formés d’entiers premiers entre eux.

Les solutions sont \((12\,;\,84)\) et \((36\,;\,60)\).
{{% /details %}}
