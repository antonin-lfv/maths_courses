---
title: 'Anneaux, idéaux, quotients'
weight: 1
cascade:
  type: docs
---

## Anneaux

> [!TIP] **Définition**
>
> Un **anneau** est un ensemble \(A\) muni de deux lois \(+\) et \(\times\) telles que :
> - \((A, +)\) est un groupe abélien, de neutre \(0\) ;
> - \(\times\) est associative et possède un élément neutre \(1\) ;
> - \(\times\) est distributive par rapport à \(+\).
>
> L’anneau est **commutatif** si \(\times\) l’est. Un élément \(a\) est **inversible** s’il existe \(b\) tel que \({ab = ba = 1}\) ; les inversibles forment un groupe multiplicatif noté \(A^\times\).
>
> Un **sous-anneau** de \(A\) est une partie contenant \(1\), stable par différence et par produit.

> [!TIP] **Définition**
>
> Soit \(A\) un anneau commutatif avec \({1 \neq 0}\).
> - Un élément \({a \neq 0}\) est un **diviseur de zéro** s’il existe \({b \neq 0}\) tel que \({ab = 0}\).
> - \(A\) est **intègre** s’il n’a pas de diviseur de zéro : \({ab = 0 \Rightarrow a = 0 \text{ ou } b = 0}\).
> - \(A\) est un **corps** si tout élément non nul est inversible.
>
> Tout corps est intègre ; tout anneau intègre **fini** est un corps.

{{% details title="Démonstration" closed="true" %}}
Si \(A\) est intègre fini et \({a \neq 0}\), l’application \({x \mapsto ax}\) est injective (si \({ax = ay}\), alors \({a(x - y) = 0}\), donc \({x = y}\)), donc surjective puisque \(A\) est fini : il existe \(x\) tel que \({ax = 1}\).
{{% /details %}}

> [!TIP] **Exemples**
>
> - \(\mathbb{Z}\) est intègre, non un corps ; \(\mathbb{Q}\), \(\mathbb{R}\), \(\mathbb{C}\) sont des corps.
> - \(\mathbb{K}[X]\) est intègre ; ses inversibles sont les constantes non nulles.
> - \(\mathcal{M}_n(\mathbb{K})\) est un anneau non commutatif (pour \({n \geq 2}\)), avec des diviseurs de zéro.
> - \(\mathbb{Z}/n\mathbb{Z}\) est un anneau commutatif ; la classe de \(k\) est inversible si et seulement si \({\operatorname{pgcd}(k, n) = 1}\). C’est un corps si et seulement si \(n\) est premier.
> - L’anneau des **entiers de Gauss** \({\mathbb{Z}[i] = \{a + ib,\ a, b \in \mathbb{Z}\}}\) est un sous-anneau de \(\mathbb{C}\), d’inversibles \({\{1, -1, i, -i\}}\).

> [!TIP] **Définition - Morphisme d’anneaux**
>
> Une application \({f : A \to B}\) est un **morphisme d’anneaux** si \({f(x + y) = f(x) + f(y)}\), \({f(xy) = f(x)f(y)}\) et \({f(1_A) = 1_B}\). Son image est un sous-anneau de \(B\).

Dans la suite, **tous les anneaux sont commutatifs**.

## Idéaux

> [!TIP] **Définition**
>
> Un **idéal** de \(A\) est une partie \(I\) telle que :
> - \(I\) est un sous-groupe de \((A, +)\) ;
> - pour tous \({a \in A}\) et \({x \in I}\), \({ax \in I}\).
>
> L’**idéal engendré** par \({a_1, \dots, a_n}\) est \({(a_1, \dots, a_n) = a_1A + \dots + a_nA}\). Un idéal \({(a) = aA}\) engendré par un seul élément est dit **principal**.

> [!TIP] **Propriétés**
>
> - Le noyau d’un morphisme d’anneaux est un idéal.
> - Un idéal qui contient un inversible est égal à \(A\). Donc \(A\) est un corps si et seulement si ses seuls idéaux sont \(\{0\}\) et \(A\) ; et tout morphisme d’un corps vers un anneau non nul est injectif.
> - Si \(I\) et \(J\) sont des idéaux, \({I + J}\), \({I \cap J}\) et \(IJ\) (ensemble des sommes finies de produits \(xy\), \({x \in I}\), \({y \in J}\)) sont des idéaux, et \({IJ \subset I \cap J}\).
> - Dans un anneau intègre, \({(a) = (b)}\) si et seulement si \({a = ub}\) avec \(u\) inversible : \(a\) et \(b\) sont dits **associés**. Et \({(a) \subset (b)}\) si et seulement si \(b\) divise \(a\).

## Anneaux quotients

> [!TIP] **Théorème et définition**
>
> Soit \(I\) un idéal de \(A\). Sur le groupe quotient \(A/I\), la loi \({(a + I)(b + I) = ab + I}\) est bien définie et fait de \(A/I\) un anneau, l’**anneau quotient**. La surjection canonique \({\pi : A \to A/I}\) est un morphisme d’anneaux de noyau \(I\).
>
> **Théorème d’isomorphisme.** Pour tout morphisme d’anneaux \({f : A \to B}\) : \({A/\ker f \simeq \operatorname{Im} f}\).
>
> **Correspondance.** Les idéaux de \(A/I\) sont en bijection avec les idéaux de \(A\) contenant \(I\).

{{% details title="Démonstration" closed="true" %}}
Bonne définition du produit : si \({a' = a + x}\) et \({b' = b + y}\) avec \({x, y \in I}\), alors \({a'b' = ab + (ay + xb + xy)}\), et la parenthèse est dans \(I\) grâce à la propriété d’absorption. C’est exactement pour cela que l’on demande un idéal et non un simple sous-anneau.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
- L’évaluation \({P \mapsto P(i)}\) de \(\mathbb{R}[X]\) dans \(\mathbb{C}\) est un morphisme surjectif. Son noyau est l’ensemble des polynômes réels qui s’annulent en \(i\), donc aussi en \(-i\) : c’est l’idéal \({(X^2 + 1)}\). Donc

\[
\mathbb{R}[X]/(X^2 + 1) \simeq \mathbb{C}.
\]

- L’évaluation \({P \mapsto P(a)}\) de \(\mathbb{K}[X]\) dans \(\mathbb{K}\) donne \({\mathbb{K}[X]/(X - a) \simeq \mathbb{K}}\).
{{% /details %}}

## Idéaux premiers et maximaux

> [!TIP] **Définition**
>
> Soit \(I\) un idéal de \(A\), distinct de \(A\).
> - \(I\) est **premier** si \({ab \in I \Rightarrow a \in I \text{ ou } b \in I}\).
> - \(I\) est **maximal** si les seuls idéaux contenant \(I\) sont \(I\) et \(A\).

> [!TIP] **Théorème**
>
> - \(I\) est premier si et seulement si \(A/I\) est intègre.
> - \(I\) est maximal si et seulement si \(A/I\) est un corps.
> - Tout idéal maximal est premier.
> - Tout idéal distinct de \(A\) est contenu dans un idéal maximal (théorème de Krull, admis).

{{% details title="Démonstration" closed="true" %}}
\({ab \in I}\) s’écrit \({\bar{a}\bar{b} = \bar{0}}\) dans \(A/I\) : la définition d’idéal premier est donc la traduction de l’intégrité du quotient.

\(I\) est maximal si et seulement si les seuls idéaux de \(A/I\) sont \(\{\bar{0}\}\) et \(A/I\) (par la correspondance), c’est-à-dire si \(A/I\) est un corps. Un corps étant intègre, maximal entraîne premier.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Dans \(\mathbb{Z}\), les idéaux sont les \(n\mathbb{Z}\). L’idéal \(n\mathbb{Z}\) (\({n \geq 2}\)) est premier si et seulement si \(n\) est un nombre premier, et il est alors maximal. L’idéal \(\{0\}\) est premier (car \(\mathbb{Z}\) est intègre) mais non maximal.

Dans \(\mathbb{Z}[X]\), l’idéal \((X)\) est premier non maximal, car \({\mathbb{Z}[X]/(X) \simeq \mathbb{Z}}\) est intègre sans être un corps. L’idéal \({(2, X)}\) est maximal : le quotient est \(\mathbb{Z}/2\mathbb{Z}\).
{{% /details %}}

> [!TIP] **Théorème chinois**
>
> Soient \(I\) et \(J\) deux idéaux de \(A\) tels que \({I + J = A}\) (idéaux **étrangers**). Alors \({I \cap J = IJ}\) et
>
> \[ A/(I \cap J) \simeq A/I \times A/J. \]

## Caractéristique

> [!TIP] **Définition et propriété**
>
> L’unique morphisme d’anneaux \({\mathbb{Z} \to A}\), \({n \mapsto n \cdot 1_A}\), a pour noyau un idéal \(c\mathbb{Z}\) avec \({c \geq 0}\). L’entier \(c\) est la **caractéristique** de \(A\).
>
> La caractéristique d’un anneau intègre (en particulier d’un corps) est \(0\) ou un nombre premier \(p\). Dans un anneau de caractéristique \(p\) première, l’application \({x \mapsto x^p}\) est un morphisme d’anneaux (**morphisme de Frobenius**) : \({(x + y)^p = x^p + y^p}\).

> [!NOTE] **Exercice résolu - Un quotient de \(\mathbb{Z}[i]\)**
>
> 1. Montrer que l’anneau \({\mathbb{Z}[i]/(2 + i)}\) est isomorphe à \(\mathbb{Z}/5\mathbb{Z}\). L’idéal \({(2 + i)}\) est-il maximal ?
> 2. L’idéal \((2)\) de \(\mathbb{Z}[i]\) est-il premier ?

{{% details title="Solution commentée" closed="true" %}}
**1.** On considère le morphisme d’anneaux \({f : \mathbb{Z} \to \mathbb{Z}[i]/(2 + i)}\), \({n \mapsto \bar{n}}\).

*Surjectivité.* Dans le quotient, \({\bar{i} = -\bar{2}}\), donc \({\overline{a + ib} = \overline{a - 2b}}\) : toute classe est celle d’un entier.

*Noyau.* On a \({5 = (2 + i)(2 - i)}\), donc \({5 \in \ker f}\) et \({5\mathbb{Z} \subset \ker f}\). Réciproquement, si \({n \in \ker f}\), alors \({n = (2 + i)(c + id)}\) avec \(c\), \(d\) entiers. En prenant le carré du module : \({n^2 = 5(c^2 + d^2)}\), donc \(5\) divise \(n^2\), puis \(5\) divise \(n\) (lemme d’Euclide). Ainsi \({\ker f = 5\mathbb{Z}}\).

Par le théorème d’isomorphisme, \({\mathbb{Z}[i]/(2 + i) \simeq \mathbb{Z}/5\mathbb{Z}}\). Comme \(\mathbb{Z}/5\mathbb{Z}\) est un corps, l’idéal \({(2 + i)}\) est maximal.

**2.** Non : \({(1 + i)(1 - i) = 2 \in (2)}\), mais ni \({1 + i}\) ni \({1 - i}\) n’est dans \((2)\), car un élément de \((2)\) s’écrit \({2a + 2ib}\) et a ses deux coordonnées paires. L’idéal \((2)\) n’est pas premier, et l’anneau \({\mathbb{Z}[i]/(2)}\) a des diviseurs de zéro.
{{% /details %}}
