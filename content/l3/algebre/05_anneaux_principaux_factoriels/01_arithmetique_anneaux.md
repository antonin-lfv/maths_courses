---
title: 'Arithmétique dans les anneaux intègres'
weight: 1
cascade:
  type: docs
---

\(A\) est un anneau commutatif **intègre**. On généralise l’arithmétique de \(\mathbb{Z}\) et de \(\mathbb{K}[X]\).

## Divisibilité

> [!TIP] **Définition**
>
> - \(a\) **divise** \(b\), noté \({a \mid b}\), s’il existe \(c\) tel que \({b = ac}\), c’est-à-dire \({(b) \subset (a)}\).
> - \(a\) et \(b\) sont **associés** si \({a \mid b}\) et \({b \mid a}\), c’est-à-dire \({a = ub}\) avec \(u\) inversible, ou encore \({(a) = (b)}\).
> - Un élément \(p\) non nul et non inversible est **irréductible** si \({p = ab}\) entraîne \(a\) ou \(b\) inversible.
> - Un élément \(p\) non nul et non inversible est **premier** si \({p \mid ab}\) entraîne \({p \mid a}\) ou \({p \mid b}\), c’est-à-dire si l’idéal \((p)\) est premier.

> [!TIP] **Propriété**
>
> Dans un anneau intègre, tout élément premier est irréductible. La réciproque est fausse en général.

{{% details title="Démonstration" closed="true" %}}
Si \(p\) est premier et \({p = ab}\), alors \(p\) divise \(a\) ou \(b\), disons \({a = pc}\). Alors \({p = pcb}\), et par intégrité \({cb = 1}\) : \(b\) est inversible.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Dans \({A = \mathbb{Z}[i\sqrt{5}] = \{a + ib\sqrt{5},\ a, b \in \mathbb{Z}\}}\), on a

\[
6 = 2 \times 3 = (1 + i\sqrt{5})(1 - i\sqrt{5}).
\]

Avec la norme \({N(a + ib\sqrt{5}) = a^2 + 5b^2}\), multiplicative, on montre que \(2\) est irréductible : si \({2 = xy}\), alors \({N(x)N(y) = 4}\), et \({N(x) = 2}\) est impossible (\({a^2 + 5b^2 = 2}\) n’a pas de solution entière), donc \({N(x) = 1}\) ou \({N(y) = 1}\), c’est-à-dire \(x\) ou \(y\) inversible. Mais \(2\) n’est pas premier : il divise le produit \({(1 + i\sqrt{5})(1 - i\sqrt{5})}\) sans diviser aucun des facteurs. Cet anneau n’est pas factoriel.
{{% /details %}}

## Anneaux euclidiens et principaux

> [!TIP] **Définition**
>
> - \(A\) est **euclidien** s’il existe une application \({\nu : A \setminus \{0\} \to \mathbb{N}}\) (un **stathme**) telle que, pour tous \(a\) et \({b \neq 0}\), il existe \(q\), \(r\) avec \({a = bq + r}\) et (\({r = 0}\) ou \({\nu(r) < \nu(b)}\)).
> - \(A\) est **principal** si tout idéal de \(A\) est principal.

> [!TIP] **Théorème**
>
> Tout anneau euclidien est principal.

{{% details title="Démonstration" closed="true" %}}
Soit \(I\) un idéal non nul et \({b \in I \setminus \{0\}}\) tel que \(\nu(b)\) soit minimal. Pour \({a \in I}\), on écrit \({a = bq + r}\). Alors \({r = a - bq \in I}\) ; si \({r \neq 0}\), \({\nu(r) < \nu(b)}\) contredit la minimalité. Donc \({r = 0}\) et \({a \in (b)}\) : \({I = (b)}\).
{{% /details %}}

> [!TIP] **Exemples**
>
> - \(\mathbb{Z}\) est euclidien pour \({\nu(n) = |n|}\).
> - \(\mathbb{K}[X]\) (\(\mathbb{K}\) un corps) est euclidien pour le degré.
> - \(\mathbb{Z}[i]\) est euclidien pour \({\nu(a + ib) = a^2 + b^2}\).
> - \(\mathbb{Z}[X]\) n’est pas principal : l’idéal \({(2, X)}\) n’est pas principal. De même \(\mathbb{K}[X, Y]\), avec l’idéal \({(X, Y)}\).

> [!TIP] **Théorème - Arithmétique dans un anneau principal**
>
> Soit \(A\) principal et \(a\), \(b\) dans \(A\).
> - Un **PGCD** de \(a\) et \(b\) est un générateur \(d\) de l’idéal \({(a) + (b)}\) ; un **PPCM** est un générateur de \({(a) \cap (b)}\). Ils sont définis à un inversible près.
> - **Bézout** : il existe \(u\), \(v\) tels que \({au + bv = d}\). En particulier, \(a\) et \(b\) sont premiers entre eux si et seulement s’il existe \(u\), \(v\) avec \({au + bv = 1}\).
> - **Gauss** : si \({a \mid bc}\) et si \(a\) est premier avec \(b\), alors \({a \mid c}\).
> - Tout irréductible est premier ; pour \({p \neq 0}\), l’idéal \((p)\) est **maximal** si et seulement si \(p\) est irréductible. Tout idéal premier non nul est donc maximal.

{{% details title="Démonstration" closed="true" %}}
Soit \(p\) irréductible et \(I\) un idéal avec \({(p) \subset I = (a)}\). Alors \({p = ac}\), donc \(a\) est inversible (\({I = A}\)) ou \(c\) est inversible (\({I = (p)}\)). Donc \((p)\) est maximal, donc premier. Réciproquement, si \((p)\) est maximal, il est premier, donc \(p\) est premier, donc irréductible.
{{% /details %}}

> [!TIP] **Conséquence**
>
> Pour \({P \in \mathbb{K}[X]}\) irréductible, le quotient \({\mathbb{K}[X]/(P)}\) est un **corps**. C’est ainsi que l’on construit \({\mathbb{C} = \mathbb{R}[X]/(X^2 + 1)}\) et les corps finis.

## Anneaux factoriels

> [!TIP] **Définition**
>
> \(A\) est **factoriel** si tout élément non nul et non inversible s’écrit comme produit d’irréductibles, de manière unique à l’ordre des facteurs et à association près.

> [!TIP] **Théorème**
>
> - Tout anneau principal est factoriel.
> - Dans un anneau factoriel, irréductible équivaut à premier, et deux éléments ont toujours un PGCD et un PPCM (mais la relation de Bézout peut être fausse).
> - **Théorème de Gauss** : si \(A\) est factoriel, alors \(A[X]\) est factoriel. En particulier \(\mathbb{Z}[X]\) et \({\mathbb{K}[X_1, \dots, X_n]}\) sont factoriels (sans être principaux).

On a donc les implications : **euclidien \(\Rightarrow\) principal \(\Rightarrow\) factoriel \(\Rightarrow\) intègre**.

## Irréductibilité des polynômes

> [!TIP] **Définition et lemme de Gauss**
>
> Le **contenu** \(c(P)\) d’un polynôme non nul de \(\mathbb{Z}[X]\) est le PGCD de ses coefficients. \(P\) est **primitif** si \({c(P) = 1}\).
> - \({c(PQ) = c(P)c(Q)}\) ; le produit de deux polynômes primitifs est primitif.
> - Un polynôme non constant et primitif de \(\mathbb{Z}[X]\) est irréductible dans \(\mathbb{Z}[X]\) si et seulement s’il est irréductible dans \(\mathbb{Q}[X]\).

> [!TIP] **Propriété - Racines rationnelles**
>
> Soit \({P = a_nX^n + \dots + a_0 \in \mathbb{Z}[X]}\) avec \({a_n \neq 0}\). Si \(\dfrac{p}{q}\) (fraction irréductible) est une racine de \(P\), alors \(p\) divise \(a_0\) et \(q\) divise \(a_n\). En particulier, les racines rationnelles d’un polynôme unitaire à coefficients entiers sont des entiers.

> [!TIP] **Théorème - Critère d’Eisenstein**
>
> Soit \({P = a_nX^n + \dots + a_1X + a_0 \in \mathbb{Z}[X]}\), \({n \geq 1}\). S’il existe un nombre premier \(p\) tel que
>
> \[ p \nmid a_n, \qquad p \mid a_i \text{ pour } 0 \leq i \leq n - 1, \qquad p^2 \nmid a_0, \]
>
> alors \(P\) est irréductible dans \(\mathbb{Q}[X]\).

> [!NOTE] **Méthode - Étudier l’irréductibilité dans \(\mathbb{Q}[X]\)**
>
> - **Degré 2 ou 3** : irréductible si et seulement s’il n’a pas de racine rationnelle (tester les candidats \(\dfrac{p}{q}\)). Attention : c’est faux à partir du degré \(4\), où un polynôme peut être produit de deux facteurs de degré \(2\) sans racine.
> - **Critère d’Eisenstein**, éventuellement après un changement de variable \({X \to X + a}\).
> - **Réduction modulo \(p\)** : si \(P\) est unitaire et si sa réduction dans \({(\mathbb{Z}/p\mathbb{Z})[X]}\) est irréductible, alors \(P\) est irréductible dans \(\mathbb{Q}[X]\).
> - **Degré 4 sans racine** : chercher une factorisation \({(X^2 + aX + b)(X^2 + cX + d)}\) à coefficients entiers et montrer qu’elle est impossible.

{{% details title="Exemple" closed="true" %}}
- \({X^n - 2}\) est irréductible dans \(\mathbb{Q}[X]\) pour tout \({n \geq 1}\) (Eisenstein avec \({p = 2}\)). Il existe donc des polynômes irréductibles de tout degré sur \(\mathbb{Q}\).
- \({X^4 + 4 = (X^2 - 2X + 2)(X^2 + 2X + 2)}\) est réductible dans \(\mathbb{Q}[X]\), bien qu’il n’ait aucune racine réelle.
- **Polynôme cyclotomique** : pour \(p\) premier, \({\Phi_p = X^{p-1} + \dots + X + 1 = \dfrac{X^p - 1}{X - 1}}\). On a \({\Phi_p(X + 1) = \dfrac{(X + 1)^p - 1}{X} = X^{p-1} + \dbinom{p}{1}X^{p-2} + \dots + \dbinom{p}{p-1}}\), dont tous les coefficients sauf le premier sont divisibles par \(p\), le terme constant \(p\) n’étant pas divisible par \(p^2\). Par Eisenstein, \(\Phi_p\) est irréductible.
{{% /details %}}

> [!NOTE] **Exercice résolu - Irréductibilité et arithmétique de \(\mathbb{Z}[i]\)**
>
> 1. Le polynôme \({P = X^3 - 3X + 1}\) est-il irréductible dans \(\mathbb{Q}[X]\) ?
> 2. Le polynôme \({Q = X^4 + X + 1}\) est-il irréductible dans \(\mathbb{Q}[X]\) ?
> 3. Décomposer \(5\) et \(3\) en produits d’irréductibles dans \(\mathbb{Z}[i]\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(P\) est de degré \(3\) : il est irréductible dans \(\mathbb{Q}[X]\) si et seulement s’il n’a pas de racine rationnelle. \(P\) est unitaire à coefficients entiers : une racine rationnelle serait un entier divisant \(1\), donc \(1\) ou \(-1\). Or \({P(1) = -1}\) et \({P(-1) = 3}\). Donc \(P\) est irréductible.

**2.** On réduit modulo \(2\) : \({\overline{Q} = X^4 + X + 1}\) dans \({(\mathbb{Z}/2\mathbb{Z})[X]}\).
- Pas de racine : \({\overline{Q}(0) = 1}\) et \({\overline{Q}(1) = 1}\).
- Pas de facteur de degré \(2\) : le seul polynôme irréductible de degré \(2\) sur \(\mathbb{Z}/2\mathbb{Z}\) est \({X^2 + X + 1}\) (les autres, \(X^2\), \({X^2 + 1}\), \({X^2 + X}\), ont une racine), et \({(X^2 + X + 1)^2 = X^4 + X^2 + 1 \neq \overline{Q}}\).

Donc \(\overline{Q}\) est irréductible sur \(\mathbb{Z}/2\mathbb{Z}\). Comme \(Q\) est unitaire, une factorisation de \(Q\) dans \(\mathbb{Z}[X]\) en deux facteurs unitaires non constants donnerait une factorisation de \(\overline{Q}\) : \(Q\) est irréductible dans \(\mathbb{Z}[X]\), donc dans \(\mathbb{Q}[X]\).

**3.** La norme \({N(a + ib) = a^2 + b^2}\) est multiplicative, et un élément est inversible si et seulement si sa norme vaut \(1\).

- \({5 = (2 + i)(2 - i)}\). Chaque facteur est de norme \(5\), nombre premier : si \({2 + i = xy}\), alors \({N(x)N(y) = 5}\), donc l’un des deux est de norme \(1\), inversible. Les deux facteurs sont irréductibles.
- \(3\) est irréductible : si \({3 = xy}\) avec \(x\), \(y\) non inversibles, alors \({N(x)N(y) = 9}\) impose \({N(x) = 3}\), soit \({a^2 + b^2 = 3}\), ce qui est impossible pour des entiers.

Plus généralement, un nombre premier \(p\) impair reste irréductible dans \(\mathbb{Z}[i]\) si \({p \equiv 3 \ [4]}\), et se décompose si \({p \equiv 1 \ [4]}\) : il est alors somme de deux carrés.
{{% /details %}}
