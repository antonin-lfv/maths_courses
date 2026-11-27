---
title: 'Cycles, conjugaison, signature, groupe alterné'
weight: 1
cascade:
  type: docs
---

\(\mathfrak{S}_n\) est le groupe des permutations de \({\{1, \dots, n\}}\), d’ordre \(n!\).

## Cycles et décomposition

> [!TIP] **Définition**
>
> - Le **support** d’une permutation \(\sigma\) est l’ensemble des \(i\) tels que \({\sigma(i) \neq i}\).
> - Un **\(p\)-cycle** \({(a_1\ a_2\ \dots\ a_p)}\) envoie \(a_i\) sur \(a_{i+1}\), \(a_p\) sur \(a_1\), et fixe les autres points. Il est d’ordre \(p\). Une **transposition** est un \(2\)-cycle.
> - Deux permutations à supports disjoints commutent.

> [!TIP] **Théorème - Décomposition en cycles**
>
> Toute permutation s’écrit comme produit de cycles à supports disjoints, de manière unique à l’ordre des facteurs près. Ces cycles correspondent aux orbites non réduites à un point de l’action du groupe \(\langle\sigma\rangle\) sur \({\{1, \dots, n\}}\).
>
> Le **type** de \(\sigma\) est la liste des longueurs de ses cycles (points fixes comptés comme cycles de longueur \(1\)) : c’est une partition de l’entier \(n\). L’ordre de \(\sigma\) est le PPCM de ces longueurs.

## Conjugaison

> [!TIP] **Théorème**
>
> Pour toute permutation \(\sigma\) et tout cycle \({(a_1\ \dots\ a_p)}\) :
>
> \[ \sigma\,(a_1\ a_2\ \dots\ a_p)\,\sigma^{-1} = (\sigma(a_1)\ \sigma(a_2)\ \dots\ \sigma(a_p)). \]
>
> Par conséquent, deux permutations sont **conjuguées** dans \(\mathfrak{S}_n\) si et seulement si elles ont le **même type**. Le nombre de classes de conjugaison de \(\mathfrak{S}_n\) est le nombre de partitions de l’entier \(n\).

{{% details title="Démonstration" closed="true" %}}
Notons \({c = (a_1\ \dots\ a_p)}\). Pour \({i < p}\), \({\sigma c\sigma^{-1}(\sigma(a_i)) = \sigma(c(a_i)) = \sigma(a_{i+1})}\), et de même \({\sigma(a_p) \mapsto \sigma(a_1)}\). Si \(x\) n’est pas l’un des \(\sigma(a_i)\), alors \(\sigma^{-1}(x)\) est fixé par \(c\), donc \({\sigma c\sigma^{-1}(x) = x}\).

Conjuguer un produit de cycles disjoints conjugue chaque cycle : le type est conservé. Réciproquement, si \(\tau\) et \(\tau'\) ont le même type, on écrit leurs décompositions l’une sous l’autre, cycles de même longueur en regard, et l’on définit \(\sigma\) en envoyant chaque élément de la première ligne sur celui situé en dessous : alors \({\sigma\tau\sigma^{-1} = \tau'}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Les partitions de \(4\) sont \({4}\), \({3 + 1}\), \({2 + 2}\), \({2 + 1 + 1}\), \({1 + 1 + 1 + 1}\) : \(\mathfrak{S}_4\) a \(5\) classes de conjugaison.

| Type | Exemple | Nombre d’éléments | Ordre | Signature |
|---|---|:---:|:---:|:---:|
| \({1 + 1 + 1 + 1}\) | \(\mathrm{id}\) | \(1\) | \(1\) | \(+1\) |
| \({2 + 1 + 1}\) | \({(1\ 2)}\) | \(6\) | \(2\) | \(-1\) |
| \({2 + 2}\) | \({(1\ 2)(3\ 4)}\) | \(3\) | \(2\) | \(+1\) |
| \({3 + 1}\) | \({(1\ 2\ 3)}\) | \(8\) | \(3\) | \(+1\) |
| \(4\) | \({(1\ 2\ 3\ 4)}\) | \(6\) | \(4\) | \(-1\) |

Total : \({1 + 6 + 3 + 8 + 6 = 24 = 4!}\).
{{% /details %}}

> [!NOTE] **Méthode - Compter les permutations d’un type donné**
>
> Le nombre de \(p\)-cycles de \(\mathfrak{S}_n\) est \({\dfrac{n(n-1)\cdots(n-p+1)}{p}}\) : on choisit une liste de \(p\) éléments distincts, et chaque cycle est obtenu \(p\) fois (selon son point de départ). Pour plusieurs cycles de même longueur, on divise encore par le nombre de façons de les ordonner.

## Générateurs

> [!TIP] **Théorème**
>
> \(\mathfrak{S}_n\) est engendré par chacune des familles suivantes :
> - les transpositions ;
> - les transpositions \({(1\ i)}\), \({2 \leq i \leq n}\) ;
> - les transpositions \({(i\ \ i{+}1)}\), \({1 \leq i \leq n - 1}\) ;
> - la transposition \({(1\ 2)}\) et le cycle \({(1\ 2\ \dots\ n)}\).

{{% details title="Démonstration" closed="true" %}}
Un cycle est un produit de transpositions : \({(a_1\ a_2\ \dots\ a_p) = (a_1\ a_2)(a_2\ a_3) \cdots (a_{p-1}\ a_p)}\). Ensuite \({(i\ j) = (1\ i)(1\ j)(1\ i)}\) ; puis \({(1\ i{+}1) = (i\ \ i{+}1)(1\ i)(i\ \ i{+}1)}\) permet d’obtenir par récurrence les \({(1\ i)}\) à partir des transpositions de voisins. Enfin, avec \({c = (1\ 2\ \dots\ n)}\), \({c^k(1\ 2)c^{-k} = (k{+}1\ \ k{+}2)}\).
{{% /details %}}

## Signature et groupe alterné

> [!TIP] **Théorème et définition**
>
> La **signature** est définie par
>
> \[ \varepsilon(\sigma) = \prod_{1 \leq i < j \leq n} \dfrac{\sigma(j) - \sigma(i)}{j - i} = (-1)^{\text{nombre d’inversions de } \sigma}. \]
>
> C’est l’unique morphisme de groupes non trivial de \(\mathfrak{S}_n\) dans \({\{-1, 1\}}\) (pour \({n \geq 2}\)). Elle vaut \(-1\) sur les transpositions, \({(-1)^{p-1}}\) sur les \(p\)-cycles, et \({\varepsilon(\sigma) = (-1)^{n - r}}\), où \(r\) est le nombre d’orbites de \(\sigma\) (points fixes compris).

> [!TIP] **Définition et propriétés - Groupe alterné**
>
> Le **groupe alterné** \({\mathfrak{A}_n = \ker\varepsilon}\) est le sous-groupe des permutations paires. Pour \({n \geq 2}\) :
> - \({\mathfrak{A}_n \lhd \mathfrak{S}_n}\), d’indice \(2\), donc d’ordre \(\dfrac{n!}{2}\) ;
> - \(\mathfrak{A}_n\) est engendré par les \(3\)-cycles (pour \({n \geq 3}\)) ;
> - pour \({n \geq 5}\), les \(3\)-cycles sont tous conjugués **dans \(\mathfrak{A}_n\)**.

{{% details title="Démonstration" closed="true" %}}
Une permutation paire est produit d’un nombre pair de transpositions. Or un produit de deux transpositions est un produit de \(3\)-cycles : \({(a\ b)(a\ c) = (a\ c\ b)}\) et \({(a\ b)(c\ d) = (a\ b)(a\ c)(a\ c)(c\ d) = (a\ c\ b)(a\ c\ d)}\).

Si \({n \geq 5}\) et si \({\sigma c\sigma^{-1} = c'}\) avec \(c\), \(c'\) deux \(3\)-cycles et \(\sigma\) impaire, on choisit une transposition \(\tau\) à support disjoint de celui de \(c\) (possible car \({n \geq 5}\)) : \(\sigma\tau\) est paire et \({(\sigma\tau)c(\sigma\tau)^{-1} = \sigma c\sigma^{-1} = c'}\).
{{% /details %}}

> [!TIP] **Théorème**
>
> Pour \({n \geq 5}\), le groupe \(\mathfrak{A}_n\) est **simple**. Par conséquent, pour \({n \geq 5}\), les seuls sous-groupes distingués de \(\mathfrak{S}_n\) sont \(\{\mathrm{id}\}\), \(\mathfrak{A}_n\) et \(\mathfrak{S}_n\).

> [!IMPORTANT] **Remarque**
>
> \(\mathfrak{A}_4\) n’est pas simple : le **groupe de Klein** \({V_4 = \{\mathrm{id}, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}}\) est distingué dans \(\mathfrak{S}_4\) (c’est une réunion de classes de conjugaison). La simplicité de \(\mathfrak{A}_n\) pour \({n \geq 5}\) est la raison profonde pour laquelle il n’existe pas de formule générale par radicaux pour les équations de degré \({\geq 5}\).

> [!NOTE] **Exercice résolu - Éléments de \(\mathfrak{S}_5\) et de \(\mathfrak{A}_5\)**
>
> 1. Quels sont les ordres possibles des éléments de \(\mathfrak{S}_5\) ? Combien y a-t-il d’éléments d’ordre \(6\) ?
> 2. Dénombrer les éléments de \(\mathfrak{A}_5\) selon leur type.
> 3. Le groupe \(\mathfrak{A}_5\) contient-il un sous-groupe d’ordre \(30\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** Les types possibles sont les partitions de \(5\), et l’ordre est le PPCM des longueurs :

| Type | \(5\) | \({4+1}\) | \({3+2}\) | \({3+1+1}\) | \({2+2+1}\) | \({2+1+1+1}\) | \({1^5}\) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Ordre | \(5\) | \(4\) | \(6\) | \(3\) | \(2\) | \(2\) | \(1\) |
| Nombre | \(24\) | \(30\) | \(20\) | \(20\) | \(15\) | \(10\) | \(1\) |

Les ordres possibles sont \({1, 2, 3, 4, 5, 6}\). Les éléments d’ordre \(6\) sont ceux de type \({3 + 2}\) : on choisit le \(3\)-cycle (\({\dfrac{5 \times 4 \times 3}{3} = 20}\) choix), et la transposition sur les deux éléments restants est imposée. Il y en a \(20\).

Détail des autres : \(5\)-cycles \({\dfrac{5!}{5} = 24}\) ; \(4\)-cycles \({\dfrac{5 \times 4 \times 3 \times 2}{4} = 30}\) ; doubles transpositions \({\dfrac{1}{2}\dbinom{5}{2}\dbinom{3}{2} = 15}\) ; transpositions \({\dbinom{5}{2} = 10}\). Total : \({24 + 30 + 20 + 20 + 15 + 10 + 1 = 120}\).

**2.** Les permutations paires sont celles de type \(5\) (signature \({(-1)^4}\)), \({3 + 1 + 1}\), \({2 + 2 + 1}\) et l’identité : \({24 + 20 + 15 + 1 = 60 = \dfrac{5!}{2}}\).

**3.** Un sous-groupe d’ordre \(30\) serait d’indice \(2\) dans \(\mathfrak{A}_5\), donc distingué. Or \(\mathfrak{A}_5\) est simple : c’est impossible. Le théorème de Lagrange n’admet donc pas de réciproque : \(30\) divise \(60\), mais \(\mathfrak{A}_5\) n’a pas de sous-groupe d’ordre \(30\).
{{% /details %}}
