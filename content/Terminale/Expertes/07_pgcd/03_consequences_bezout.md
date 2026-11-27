---
title: 'Conséquences du théorème de Bezout'
weight: 3
cascade:
  type: docs
---

## Résolution d’équations diophantiennes

> [!TIP] **Propriété**
>
> Soient \(a\), \(b\), \(c\) trois entiers relatifs avec \(a\) et \(b\) non nuls. L’équation \({ax + by = c}\), où les inconnues \(x\) et \(y\) sont des entiers relatifs, admet des solutions si et seulement si \(c\) est un multiple de \(\mathrm{PGCD}(a\,;\,b)\).

{{% details title="Démonstration" closed="true" %}}
On note \({d = \mathrm{PGCD}(a\,;\,b)}\).
- Si \((x_0\,;\,y_0)\) est une solution, \(d\) divise \(a\) et \(b\), donc la combinaison linéaire \({ax_0 + by_0 = c}\).
- Réciproquement, si \({c = kd}\), il existe \(u\) et \(v\) tels que \({au + bv = d}\) (Bézout généralisé). Alors \({a(ku) + b(kv) = kd = c}\) : \((ku\,;\,kv)\) est une solution.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({\mathrm{PGCD}(4\,;\,10) = 2}\) : l’équation \({4x + 10y = 6}\) a des solutions (par exemple \({(-1\,;\,1)}\)), mais \({4x + 10y = 7}\) n’en a pas, car 7 est impair.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Une équation dont les inconnues sont des entiers s’appelle une **équation diophantienne**.
> - Si \({c = \mathrm{PGCD}(a\,;\,b)}\), le théorème de Bézout généralisé assure l’existence d’une solution de \({ax + by = c}\).

## Homogénéité du PGCD

> [!TIP] **Propriété**
>
> Soient \(a\) et \(b\) deux entiers relatifs non nuls. Pour tout entier naturel non nul \(k\) :
> \[
\mathrm{PGCD}(ka\,;\,kb) = k\,\mathrm{PGCD}(a\,;\,b).
\]

{{% details title="Démonstration" closed="true" %}}
Soit \({d = \mathrm{PGCD}(a\,;\,b)}\) et \(u\), \(v\) tels que \({au + bv = d}\). Alors \(kd\) divise \(ka\) et \(kb\), et \({(ka)u + (kb)v = kd}\) : d’après le théorème de Bézout généralisé, \({\mathrm{PGCD}(ka\,;\,kb) = kd}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(\mathrm{PGCD}(70\,;\,105) = \mathrm{PGCD}(35 \times 2\,;\,35 \times 3) = 35 \times \mathrm{PGCD}(2\,;\,3) = 35\).
{{% /details %}}

## Théorème de Gauss

> [!TIP] **Théorème de Gauss**
>
> Soient \(a\), \(b\), \(c\) trois entiers relatifs non nuls. Si \(a\) divise \(bc\) et si \(a\) et \(b\) sont premiers entre eux, alors \(a\) divise \(c\).

{{% details title="Démonstration" closed="true" %}}
\(a\) et \(b\) sont premiers entre eux : d’après le théorème de Bézout, il existe \(u\), \(v\) tels que \({au + bv = 1}\). En multipliant par \(c\) : \({acu + bcv = c}\). Or \(a\) divise \(acu\) et \(a\) divise \(bc\), donc \(a\) divise la combinaison linéaire \({acu + bcv = c}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’hypothèse « \(a\) et \(b\) premiers entre eux » est nécessaire : \(6\) divise \({4 \times 9 = 36}\), mais \(6\) ne divise ni \(4\) ni \(9\).

> [!TIP] **Corollaire**
>
> Soient \(a\), \(b\), \(c\) trois entiers relatifs non nuls. Si \(a\) divise \(c\), si \(b\) divise \(c\), et si \(a\) et \(b\) sont premiers entre eux, alors \(ab\) divise \(c\).

{{% details title="Démonstration" closed="true" %}}
\(a\) divise \(c\) : \({c = ka}\). Comme \(b\) divise \({c = ka}\) et que \(b\) est premier avec \(a\), le théorème de Gauss donne \(b \mid k\) : \({k = k'b}\). Donc \({c = k'ab}\) et \(ab\) divise \(c\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Là encore, l’hypothèse est indispensable : \(4\) et \(6\) divisent \(12\), mais \({4 \times 6 = 24}\) ne divise pas \(12\).

## Résoudre et démontrer

> [!NOTE] **Exercice résolu 1 - Existence de solutions**
>
> Les équations suivantes, d’inconnues entières \(x\) et \(y\), ont-elles des solutions ?
> 1. \({12x + 18y = 7}\)
> 2. \({12x + 18y = 30}\)

{{% details title="Solution commentée" closed="true" %}}
\({\mathrm{PGCD}(12\,;\,18) = 6}\).
1. 7 n’est pas un multiple de 6 : l’équation n’a pas de solution.
2. \({30 = 6 \times 5}\) est un multiple de 6 : l’équation a des solutions, par exemple \((1\,;\,1)\) car \({12 + 18 = 30}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Résoudre une équation diophantienne**
>
> On considère l’équation \({(E) : 11x - 7y = 3}\), d’inconnues entières \(x\) et \(y\).
> 1. Vérifier que \((2\,;\,3)\) est solution de \({11x - 7y = 1}\), puis en déduire une solution particulière \((x_0\,;\,y_0)\) de \((E)\).
> 2. Résoudre \((E)\).
> 3. Déterminer les solutions de \((E)\) telles que \({0 \leq x \leq 30}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({11 \times 2 - 7 \times 3 = 22 - 21 = 1}\). En multipliant par 3 : \({11 \times 6 - 7 \times 9 = 3}\), donc \({(x_0\,;\,y_0) = (6\,;\,9)}\) est solution de \((E)\).
2. Si \((x\,;\,y)\) est solution, en soustrayant \({11 \times 6 - 7 \times 9 = 3}\), on obtient \({11(x - 6) = 7(y - 9)}\).
   - 7 divise \({11(x - 6)}\) et 7 est premier avec 11 : d’après le théorème de Gauss, 7 divise \({x - 6}\). Donc \({x = 6 + 7k}\), \({k \in \mathbb{Z}}\).
   - En reportant : \({11 \times 7k = 7(y - 9)}\), soit \({y = 9 + 11k}\).

   Réciproquement, pour tout \({k \in \mathbb{Z}}\) : \(11(6 + 7k) - 7(9 + 11k) = 66 + 77k - 63 - 77k = 3\).

   Les solutions de \((E)\) sont les couples \({(6 + 7k\,;\,9 + 11k)}\), \({k \in \mathbb{Z}}\).
3. \({0 \leq 6 + 7k \leq 30 \iff -\dfrac{6}{7} \leq k \leq \dfrac{24}{7}}\), soit \({k \in \{0, 1, 2, 3\}}\) : les couples \((6\,;\,9)\), \((13\,;\,20)\), \((20\,;\,31)\), \((27\,;\,42)\).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Démontrer une divisibilité**
>
> Montrer que, pour tout entier naturel \(n\), \({A = n^5 - n}\) est divisible par 10.

{{% details title="Solution commentée" closed="true" %}}
Comme \({10 = 2 \times 5}\) avec 2 et 5 premiers entre eux, il suffit (corollaire du théorème de Gauss) de montrer que 2 et 5 divisent \(A\).
- **Par 2.** \(n\) et \(n^5\) ont la même parité, donc \({n^5 - n}\) est pair.
- **Par 5.** On étudie les restes modulo 5 :

| \({n \equiv \dots \ [5]}\) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| \({n^5 \equiv \dots \ [5]}\) | 0 | 1 | 32 ≡ 2 | 243 ≡ 3 | 1024 ≡ 4 |

Dans tous les cas \({n^5 \equiv n \ [5]}\), donc 5 divise \(A\).

Ainsi \({2 \times 5 = 10}\) divise \(A\).
{{% /details %}}
