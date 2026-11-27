---
title: 'Dans Z'
weight: 1
cascade:
  type: docs
---

\(\mathbb{N}\) est l’ensemble des entiers naturels \(\{0\,;\,1\,;\,2\,;\,\dots\}\) et \(\mathbb{Z}\) celui des entiers relatifs \({\{\dots\,;\,-2\,;\,-1\,;\,0\,;\,1\,;\,2\,;\,\dots\}}\).

## Diviseurs et multiples

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux entiers relatifs, avec \({b \neq 0}\). On dit que \(b\) **divise** \(a\), ou que \(b\) est un **diviseur** de \(a\), s’il existe un entier relatif \(k\) tel que \({a = kb}\). On dit aussi que \(a\) est un **multiple** de \(b\), et on note \(b \mid a\).

> [!IMPORTANT] **Remarques**
>
> - \(0\) est un multiple de tout entier relatif non nul (\({0 = 0 \times b}\)). En revanche, \(0\) n’est le diviseur d’aucun entier.
> - On note \(b\mathbb{Z}\) l’ensemble des multiples de \(b\) et \(\mathcal{D}(b)\) l’ensemble de ses diviseurs.

{{% details title="Exemple" closed="true" %}}
\({-6}\) divise \(42\), car \({42 = (-7) \times (-6)}\) ; \(42\) est donc un multiple de \({-6}\). En revanche \(5\) ne divise pas \(42\), car \({\dfrac{42}{5} = 8{,}4}\) n’est pas entier.
{{% /details %}}

> [!TIP] **Propriété**
>
> Soient \(a\) et \(b\) deux entiers relatifs non nuls. Si \(b\) divise \(a\), alors :
> - tout multiple de \(a\) est un multiple de \(b\) : \({a\mathbb{Z} \subset b\mathbb{Z}}\) ;
> - tout diviseur de \(b\) est un diviseur de \(a\) : \({\mathcal{D}(b) \subset \mathcal{D}(a)}\).

{{% details title="Exemple" closed="true" %}}
\(6\) divise \(18\) : les multiples de 18 (\({0, \pm 18, \pm 36, \dots}\)) sont des multiples de 6, et les diviseurs de 6, \({\{\pm 1, \pm 2, \pm 3, \pm 6\}}\), sont des diviseurs de 18, dont l’ensemble est \({\mathcal{D}(18) = \{\pm 1, \pm 2, \pm 3, \pm 6, \pm 9, \pm 18\}}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soient \(a\) et \(b\) deux entiers relatifs avec \({b \neq 0}\) :
> \[
b \mid a \iff -b \mid a \iff b \mid -a.
\]

> [!IMPORTANT] **Conséquence**
>
> \(a\) et \({-a}\) ont les mêmes diviseurs, et les diviseurs négatifs de \(a\) sont les opposés de ses diviseurs positifs : on peut se restreindre à l’étude de la divisibilité dans \(\mathbb{N}\).

> [!TIP] **Propriété**
>
> Tout entier relatif \(n\) non nul possède un nombre fini de diviseurs, tous compris entre \({-|n|}\) et \(|n|\).

{{% details title="Démonstration" closed="true" %}}
Si \(d \mid n\), il existe \({k \in \mathbb{Z}}\) tel que \({n = kd}\). Comme \({n \neq 0}\), \({k \neq 0}\), donc \({|k| \geq 1}\) et \({|n| = |k||d| \geq |d|}\). Ainsi \({-|n| \leq d \leq |n|}\) : il n’y a qu’un nombre fini de possibilités.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le nombre de diviseurs (dans \(\mathbb{Z}\)) d’un entier non nul est pair, puisque les diviseurs vont par paires \(d\) et \({-d}\).

## Transitivité et combinaisons linéaires

> [!TIP] **Propriétés**
>
> 1. Soient \(a\), \(b\), \(c\) trois entiers relatifs avec \({a \neq 0}\) et \({b \neq 0}\). Si \(a\) divise \(b\) et \(b\) divise \(c\), alors \(a\) divise \(c\).
> 2. Soient \(a\), \(b\), \(c\) trois entiers relatifs avec \({a \neq 0}\). Si \(a\) divise \(b\) et \(c\), alors \(a\) divise \({bu + cv}\) pour tous entiers relatifs \(u\) et \(v\). L’entier \({bu + cv}\) est appelé une **combinaison linéaire** de \(b\) et \(c\).

{{% details title="Démonstration" closed="true" %}}
1. \({b = ka}\) et \({c = k'b}\) avec \({k, k' \in \mathbb{Z}}\), donc \({c = (k'k)a}\) avec \({k'k \in \mathbb{Z}}\).
2. \({b = ka}\) et \({c = k'a}\), donc \({bu + cv = (ku + k'v)a}\) avec \({ku + k'v \in \mathbb{Z}}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Si un entier \({d \neq 0}\) divise deux entiers consécutifs \(n\) et \({n + 1}\), alors il divise la combinaison linéaire \({(n + 1) - n = 1}\). Donc \({d = 1}\) ou \({d = -1}\).
{{% /details %}}

## Utiliser la divisibilité

> [!NOTE] **Exercice résolu 1 - Utiliser une combinaison linéaire**
>
> Déterminer les entiers relatifs \(n\) tels que \({n + 2}\) divise \({3n + 11}\).

{{% details title="Solution commentée" closed="true" %}}
On cherche une combinaison linéaire qui élimine \(n\) : \({3n + 11 = 3(n + 2) + 5}\).

- Si \({n + 2}\) divise \({3n + 11}\), comme il divise aussi \({n + 2}\), il divise \({(3n + 11) - 3(n + 2) = 5}\). Donc \({n + 2 \in \{-5, -1, 1, 5\}}\), soit \({n \in \{-7, -3, -1, 3\}}\).
- Réciproquement, on vérifie : pour \({n = -7}\), \({\dfrac{-10}{-5} = 2}\) ; pour \({n = -3}\), \({\dfrac{2}{-1} = -2}\) ; pour \({n = -1}\), \({\dfrac{8}{1} = 8}\) ; pour \({n = 3}\), \({\dfrac{20}{5} = 4}\).

Les entiers cherchés sont \({-7}\), \({-3}\), \({-1}\) et \(3\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Raisonner par l’absurde**
>
> Montrer qu’il n’existe pas d’entiers relatifs \(x\) et \(y\) tels que \({6x + 9y = 10}\).

{{% details title="Solution commentée" closed="true" %}}
Supposons qu’il existe de tels entiers. \(3\) divise \(6\) et \(9\), donc il divise la combinaison linéaire \({6x + 9y}\), c’est-à-dire \(10\). Or \({10 = 3 \times 3 + 1}\) n’est pas un multiple de 3 : c’est une contradiction. Il n’existe donc pas de tels entiers.
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Utiliser la liste des diviseurs**
>
> Déterminer les couples d’entiers naturels \((x, y)\) tels que \({x^2 - y^2 = 15}\).

{{% details title="Solution commentée" closed="true" %}}
\({x^2 - y^2 = (x - y)(x + y) = 15}\). Comme \({x + y \geq 0}\) et le produit est positif, \({x - y > 0}\) ; de plus \({x - y \leq x + y}\). Les diviseurs positifs de 15 sont \(1, 3, 5, 15\), d’où deux possibilités :
- \({x - y = 1}\) et \({x + y = 15}\) : \({x = 8}\), \({y = 7}\) ;
- \({x - y = 3}\) et \({x + y = 5}\) : \({x = 4}\), \({y = 1}\).

Vérification : \({64 - 49 = 15}\) et \({16 - 1 = 15}\). Les solutions sont \((8, 7)\) et \((4, 1)\).
{{% /details %}}
