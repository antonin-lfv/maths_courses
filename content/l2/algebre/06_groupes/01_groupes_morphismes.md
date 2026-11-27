---
title: 'Groupes, sous-groupes, morphismes'
weight: 1
cascade:
  type: docs
---

## Structure de groupe

> [!TIP] **Définition**
>
> Un **groupe** est un ensemble \(G\) muni d’une loi de composition interne \({(x, y) \mapsto x \ast y}\) telle que :
> - la loi est **associative** : \({(x \ast y) \ast z = x \ast (y \ast z)}\) ;
> - il existe un **élément neutre** \(e\) : \({x \ast e = e \ast x = x}\) pour tout \(x\) ;
> - tout élément \(x\) admet un **symétrique** \(x'\) : \({x \ast x' = x' \ast x = e}\).
>
> Le groupe est **abélien** (ou commutatif) si de plus \({x \ast y = y \ast x}\) pour tous \(x\), \(y\). L’**ordre** d’un groupe fini est son cardinal, noté \(|G|\).

Le neutre est unique, ainsi que le symétrique de chaque élément. En notation multiplicative, on écrit \(xy\), le neutre \(e\) ou \(1\), le symétrique \(x^{-1}\) (inverse) ; en notation additive, réservée aux groupes abéliens, \({x + y}\), \(0\) et \(-x\) (opposé).

> [!TIP] **Exemples de référence**
>
> - \((\mathbb{Z}, +)\), \((\mathbb{Q}, +)\), \((\mathbb{R}, +)\), \((\mathbb{C}, +)\), et tout espace vectoriel pour l’addition.
> - \((\mathbb{Q}^*, \times)\), \((\mathbb{R}^*, \times)\), \((\mathbb{C}^*, \times)\), \((\mathbb{U}, \times)\), \((\mathbb{U}_n, \times)\).
> - \((\mathbb{Z}/n\mathbb{Z}, +)\), groupe abélien d’ordre \(n\).
> - \((\mathrm{GL}_n(\mathbb{K}), \times)\), non abélien dès que \({n \geq 2}\).
> - \((\mathfrak{S}(X), \circ)\), le groupe des bijections d’un ensemble \(X\) sur lui-même.
>
> En revanche, \((\mathbb{N}, +)\) et \((\mathbb{Z}^*, \times)\) ne sont pas des groupes.

> [!TIP] **Règles de calcul**
>
> - \({(xy)^{-1} = y^{-1}x^{-1}}\).
> - Tout élément est **simplifiable** : \({xy = xz \Rightarrow y = z}\).
> - Pour \({n \in \mathbb{Z}}\), on définit \(x^n\) ; \({x^{m+n} = x^mx^n}\) et \({(x^m)^n = x^{mn}}\). Attention : \({(xy)^n = x^ny^n}\) seulement si \(x\) et \(y\) commutent.

## Sous-groupes

> [!TIP] **Définition et caractérisation**
>
> Une partie \(H\) d’un groupe \(G\) est un **sous-groupe** de \(G\) si :
> - \({e \in H}\) ;
> - pour tous \({x, y \in H}\), \({xy \in H}\) et \({x^{-1} \in H}\).
>
> Cela équivaut à : \(H\) est non vide et, pour tous \({x, y \in H}\), \({xy^{-1} \in H}\). Un sous-groupe est lui-même un groupe.

> [!TIP] **Théorème - Sous-groupes de \(\mathbb{Z}\)**
>
> Les sous-groupes de \((\mathbb{Z}, +)\) sont exactement les \({n\mathbb{Z}}\), avec \({n \in \mathbb{N}}\).

{{% details title="Démonstration" closed="true" %}}
Les \(n\mathbb{Z}\) sont des sous-groupes. Réciproquement, soit \(H\) un sous-groupe non réduit à \(\{0\}\). Il contient un entier strictement positif (si \({x \in H}\), alors \({-x \in H}\)). Soit \(n\) le plus petit. Alors \({n\mathbb{Z} \subset H}\). Si \({x \in H}\), la division euclidienne \({x = nq + r}\) avec \({0 \leq r < n}\) donne \({r = x - nq \in H}\), donc \({r = 0}\) par minimalité de \(n\). Ainsi \({H = n\mathbb{Z}}\).
{{% /details %}}

> [!TIP] **Définition - Sous-groupe engendré**
>
> Une intersection de sous-groupes est un sous-groupe. Le **sous-groupe engendré** par une partie \(A\) est le plus petit sous-groupe contenant \(A\). Pour un élément \(x\), c’est
>
> \[ \langle x\rangle = \{x^k,\ k \in \mathbb{Z}\}. \]
>
> Un groupe est **monogène** s’il est engendré par un élément, **cyclique** s’il est monogène et fini.

## Morphismes

> [!TIP] **Définition**
>
> Soient \((G, \ast)\) et \((G', \star)\) deux groupes. Une application \({f : G \to G'}\) est un **morphisme de groupes** si
>
> \[ \forall (x, y) \in G^2, \quad f(x \ast y) = f(x) \star f(y). \]
>
> Un **isomorphisme** est un morphisme bijectif ; sa réciproque est alors un morphisme. Un **automorphisme** est un isomorphisme de \(G\) sur lui-même.

> [!TIP] **Propriétés**
>
> Soit \({f : G \to G'}\) un morphisme.
> - \({f(e) = e'}\), \({f(x^{-1}) = f(x)^{-1}}\) et \({f(x^n) = f(x)^n}\) pour \({n \in \mathbb{Z}}\).
> - L’image d’un sous-groupe de \(G\) est un sous-groupe de \(G'\) ; l’image réciproque d’un sous-groupe de \(G'\) est un sous-groupe de \(G\).
> - Le **noyau** \({\ker f = \{x \in G,\ f(x) = e'\}}\) est un sous-groupe de \(G\) ; l’**image** \({\operatorname{Im} f = f(G)}\) est un sous-groupe de \(G'\).
> - \(f\) est injectif si et seulement si \({\ker f = \{e\}}\).

{{% details title="Exemple" closed="true" %}}
- \({\exp : (\mathbb{R}, +) \to (\mathbb{R}_+^*, \times)}\) est un isomorphisme, de réciproque \(\ln\).
- \({\theta \mapsto e^{i\theta}}\) est un morphisme surjectif de \((\mathbb{R}, +)\) sur \((\mathbb{U}, \times)\), de noyau \(2\pi\mathbb{Z}\).
- \({\det : \mathrm{GL}_n(\mathbb{K}) \to \mathbb{K}^*}\) est un morphisme surjectif, de noyau \(\mathrm{SL}_n(\mathbb{K})\), le groupe des matrices de déterminant \(1\).
- \({z \mapsto |z|}\) est un morphisme de \((\mathbb{C}^*, \times)\) dans \((\mathbb{R}_+^*, \times)\), de noyau \(\mathbb{U}\).
{{% /details %}}

## Ordre d’un élément

> [!TIP] **Définition**
>
> Un élément \(x\) d’un groupe \(G\) est d’**ordre fini** s’il existe \({k \geq 1}\) tel que \({x^k = e}\). Son **ordre** est alors le plus petit entier \({n \geq 1}\) tel que \({x^n = e}\).

> [!TIP] **Propriétés**
>
> Si \(x\) est d’ordre \(n\) :
> - pour \({k \in \mathbb{Z}}\), \({x^k = e \iff n \mid k}\) ;
> - \({\langle x\rangle = \{e, x, x^2, \dots, x^{n-1}\}}\) a exactement \(n\) éléments : l’ordre de \(x\) est l’ordre du sous-groupe qu’il engendre ;
> - \({\langle x\rangle}\) est isomorphe à \(\mathbb{Z}/n\mathbb{Z}\).
>
> Si \(x\) n’est pas d’ordre fini, \({k \mapsto x^k}\) est un isomorphisme de \(\mathbb{Z}\) sur \(\langle x\rangle\).

> [!TIP] **Théorème de Lagrange**
>
> Soit \(G\) un groupe **fini**.
> - L’ordre de tout sous-groupe de \(G\) divise l’ordre de \(G\).
> - L’ordre de tout élément de \(G\) divise l’ordre de \(G\) ; en particulier, \({x^{|G|} = e}\) pour tout \({x \in G}\).

{{% details title="Démonstration" closed="true" %}}
Soit \(H\) un sous-groupe. La relation \({x \sim y \iff x^{-1}y \in H}\) est une relation d’équivalence sur \(G\) : réflexive car \({e \in H}\), symétrique car \({(x^{-1}y)^{-1} = y^{-1}x}\), transitive car \({x^{-1}z = (x^{-1}y)(y^{-1}z)}\). La classe de \(x\) est \({xH = \{xh,\ h \in H\}}\), et \({h \mapsto xh}\) est une bijection de \(H\) sur \(xH\). Les classes forment une partition de \(G\) en parties de cardinal \(|H|\) : \({|G| = k|H|}\), où \(k\) est le nombre de classes.

Pour un élément \(x\), on applique ce résultat à \({H = \langle x\rangle}\).
{{% /details %}}

> [!TIP] **Conséquences**
>
> - Tout groupe d’ordre **premier** \(p\) est cyclique, engendré par n’importe lequel de ses éléments autres que le neutre.
> - Dans \((\mathbb{Z}/n\mathbb{Z}, +)\), les générateurs sont les classes des entiers \(k\) premiers avec \(n\).
> - Le groupe \({((\mathbb{Z}/p\mathbb{Z})^*, \times)}\) est d’ordre \({p - 1}\) pour \(p\) premier : on retrouve le petit théorème de Fermat, \({a^{p-1} \equiv 1 \ [p]}\).

## Le groupe symétrique

> [!TIP] **Définition**
>
> Le **groupe symétrique** \(\mathfrak{S}_n\) est le groupe des permutations de \({\{1, \dots, n\}}\), pour la composition. Il est d’ordre \(n!\), non abélien dès que \({n \geq 3}\).
> - Un **cycle** de longueur \(p\) (ou \(p\)-cycle) \({(a_1\ a_2\ \dots\ a_p)}\) envoie \(a_1\) sur \(a_2\), …, \(a_p\) sur \(a_1\), et fixe les autres éléments. Il est d’ordre \(p\).
> - Une **transposition** est un \(2\)-cycle \({(a\ b)}\).

> [!TIP] **Théorème**
>
> - Toute permutation s’écrit comme produit de cycles à **supports disjoints**, de manière unique à l’ordre près. Ces cycles commutent, et l’ordre de la permutation est le PPCM de leurs longueurs.
> - Toute permutation est un produit de transpositions : \({(a_1\ a_2\ \dots\ a_p) = (a_1\ a_2)(a_2\ a_3) \cdots (a_{p-1}\ a_p)}\).

> [!TIP] **Théorème et définition - Signature**
>
> Il existe un unique morphisme de groupes \({\varepsilon : \mathfrak{S}_n \to \{-1, 1\}}\) qui vaut \(-1\) sur toute transposition : c’est la **signature**. Un \(p\)-cycle a pour signature \({(-1)^{p-1}}\). Une permutation de signature \(1\) est **paire**, de signature \(-1\) **impaire**.
>
> Le noyau de \(\varepsilon\) est le **groupe alterné** \(\mathfrak{A}_n\), d’ordre \(\dfrac{n!}{2}\) pour \({n \geq 2}\).

> [!NOTE] **Exercice résolu - Décomposer une permutation**
>
> Dans \(\mathfrak{S}_8\), soit \({\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 3 & 7 & 5 & 4 & 1 & 8 & 2 & 6 \end{pmatrix}}\). Décomposer \(\sigma\) en cycles à supports disjoints, déterminer son ordre, sa signature et calculer \(\sigma^{2026}\).

{{% details title="Solution commentée" closed="true" %}}
**Cycles.** On suit les images : \({1 \to 3 \to 5 \to 1}\) ; \({2 \to 7 \to 2}\) ; \(4\) est fixe ; \({6 \to 8 \to 6}\). Donc

\[
\sigma = (1\ 3\ 5)(2\ 7)(6\ 8).
\]

**Ordre.** C’est le PPCM des longueurs : \({\operatorname{ppcm}(3, 2, 2) = 6}\).

**Signature.** \({\varepsilon(\sigma) = (-1)^{3-1} \times (-1) \times (-1) = 1}\) : \(\sigma\) est paire.

**Puissance.** \({2026 = 6 \times 337 + 4}\), donc \({\sigma^{2026} = \sigma^4}\). Les cycles commutent :

\[
\sigma^4 = (1\ 3\ 5)^4(2\ 7)^4(6\ 8)^4 = (1\ 3\ 5)^4 = (1\ 3\ 5),
\]

car \({(2\ 7)^2 = (6\ 8)^2 = \mathrm{id}}\) et \({(1\ 3\ 5)^3 = \mathrm{id}}\). Donc \({\sigma^{2026} = (1\ 3\ 5)}\).
{{% /details %}}
