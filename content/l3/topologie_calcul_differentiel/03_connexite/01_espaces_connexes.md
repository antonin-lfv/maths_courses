---
title: 'Espaces connexes et connexes par arcs'
weight: 1
cascade:
  type: docs
---

Un espace connexe est un espace « d’un seul tenant ». C’est la notion qui se cache derrière le théorème des valeurs intermédiaires.

## Espaces connexes

> [!TIP] **Définition et théorème**
>
> Un espace métrique \(E\) est **connexe** s’il vérifie l’une des propriétés équivalentes suivantes :
> - les seules parties de \(E\) à la fois ouvertes et fermées sont \(\varnothing\) et \(E\) ;
> - il n’existe pas de partition de \(E\) en deux ouverts non vides ;
> - toute application continue de \(E\) dans \({\{0, 1\}}\) (muni de la distance discrète) est constante.
>
> Une partie \(A\) de \(E\) est connexe si elle l’est pour la topologie induite.

{{% details title="Démonstration" closed="true" %}}
Si \({E = U \cup V}\) avec \(U\), \(V\) ouverts disjoints, alors \({U = E \setminus V}\) est aussi fermé : les deux premières propriétés sont équivalentes. Une application \({f : E \to \{0, 1\}}\) est continue si et seulement si \({f^{-1}(\{0\})}\) et \({f^{-1}(\{1\})}\) sont ouverts ; ils forment une partition de \(E\), et \(f\) est non constante exactement quand ils sont tous deux non vides.
{{% /details %}}

> [!TIP] **Théorème - Connexes de \(\mathbb{R}\)**
>
> Les parties connexes de \(\mathbb{R}\) sont exactement les **intervalles**.

{{% details title="Démonstration" closed="true" %}}
Si \(A\) n’est pas un intervalle, il existe \({a < c < b}\) avec \({a, b \in A}\) et \({c \notin A}\) : \({A \cap\, ]-\infty, c[}\) et \({A \cap\, ]c, +\infty[}\) forment une partition de \(A\) en deux ouverts non vides.

Réciproquement, soit \(I\) un intervalle et \({f : I \to \{0, 1\}}\) continue. Si \(f\) prenait les valeurs \(0\) et \(1\), le théorème des valeurs intermédiaires (conséquence de la propriété de la borne supérieure) lui ferait prendre la valeur \(\dfrac{1}{2}\) : impossible. Donc \(f\) est constante.
{{% /details %}}

> [!TIP] **Théorème**
>
> - L’image d’un connexe par une application **continue** est connexe.
> - **Théorème des valeurs intermédiaires** : si \(E\) est connexe et \({f : E \to \mathbb{R}}\) continue, alors \(f(E)\) est un intervalle.
> - Une réunion de parties connexes ayant **un point commun** est connexe.
> - Si \(A\) est connexe et \({A \subset B \subset \overline{A}}\), alors \(B\) est connexe. En particulier, l’adhérence d’un connexe est connexe.
> - Un produit de deux espaces connexes est connexe.

{{% details title="Démonstration" closed="true" %}}
**Image.** Si \({g : f(E) \to \{0, 1\}}\) est continue, \({g \circ f}\) est continue sur \(E\) connexe, donc constante, donc \(g\) est constante.

**Réunion.** Soit \({f : \bigcup A_i \to \{0, 1\}}\) continue et \(a\) un point commun. Sur chaque \(A_i\) connexe, \(f\) est constante, égale à \(f(a)\). Donc \(f\) est constante.
{{% /details %}}

> [!NOTE] **Méthode - L’argument « ouvert, fermé, non vide »**
>
> Pour montrer qu’une propriété est vraie en tout point d’un espace connexe \(E\), on considère l’ensemble \(A\) des points où elle est vraie et on montre que \(A\) est **non vide**, **ouvert** et **fermé**. Alors \({A = E}\).

{{% details title="Exemple" closed="true" %}}
Soit \({f : U \to \mathbb{R}}\) différentiable sur un ouvert connexe \(U\) de \(\mathbb{R}^n\), de différentielle nulle. Alors \(f\) est constante.

Fixons \({a \in U}\) et posons \({A = \{x \in U,\ f(x) = f(a)\}}\). \(A\) est non vide, fermé dans \(U\) (image réciproque du fermé \(\{f(a)\}\) par \(f\) continue). Il est ouvert : si \({x \in A}\), il existe une boule \({B(x, r) \subset U}\), et sur cette boule convexe l’inégalité des accroissements finis donne \(f\) constante, donc \({B(x, r) \subset A}\). Par connexité, \({A = U}\).
{{% /details %}}

## Connexité par arcs

> [!TIP] **Définition**
>
> Un **chemin** de \(x\) à \(y\) dans \(E\) est une application continue \({\gamma : [0, 1] \to E}\) telle que \({\gamma(0) = x}\) et \({\gamma(1) = y}\). \(E\) est **connexe par arcs** si deux points quelconques de \(E\) peuvent être reliés par un chemin.

> [!TIP] **Théorème**
>
> - Tout espace connexe par arcs est connexe.
> - Dans un espace vectoriel normé, toute partie **convexe** est connexe par arcs, ainsi que toute partie **étoilée** (il existe \(a\) tel que \({[a, x] \subset A}\) pour tout \({x \in A}\)).
> - Un **ouvert** d’un espace vectoriel normé est connexe si et seulement s’il est connexe par arcs.
> - L’image d’un connexe par arcs par une application continue est connexe par arcs.

{{% details title="Démonstration" closed="true" %}}
**Par arcs \(\Rightarrow\) connexe.** Fixons \({a \in E}\). Pour chaque \(x\), l’image \({\gamma_x([0, 1])}\) d’un chemin de \(a\) à \(x\) est connexe (image continue d’un intervalle) et contient \(a\). \(E\) est la réunion de ces connexes ayant le point \(a\) en commun.

**Ouvert connexe d’un evn.** Fixons \({a \in U}\) et notons \(A\) l’ensemble des points de \(U\) que l’on peut relier à \(a\). \(A\) est non vide. Si \({x \in A}\) et \({B(x, r) \subset U}\), tout point de la boule se relie à \(x\) par un segment, donc à \(a\) : \(A\) est ouvert. De même, si \({x \in U \setminus A}\), aucun point de \(B(x, r)\) n’est dans \(A\) : \(A\) est fermé dans \(U\). Par connexité, \({A = U}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La réciproque est fausse en général. L’adhérence dans \(\mathbb{R}^2\) du graphe de \({x \mapsto \sin\left(\dfrac{1}{x}\right)}\) sur \({]0, 1]}\) est connexe (adhérence d’un connexe), mais pas connexe par arcs : on ne peut pas relier continûment un point du segment \({\{0\} \times [-1, 1]}\) à un point du graphe.

{{% details title="Exemple" closed="true" %}}
- \({\mathbb{R}^n \setminus \{0\}}\) est connexe par arcs pour \({n \geq 2}\) : on relie deux points par un segment, ou par deux segments en contournant l’origine si elle est sur le segment. Pour \({n = 1}\), \(\mathbb{R}^*\) n’est pas connexe.
- La sphère unité de \(\mathbb{R}^n\) (\({n \geq 2}\)) est connexe par arcs, comme image de \({\mathbb{R}^n \setminus \{0\}}\) par \({x \mapsto \dfrac{x}{\|x\|}}\).
- \(\mathrm{GL}_n(\mathbb{R})\) n’est pas connexe : son image par le déterminant, continu, est \(\mathbb{R}^*\). En revanche \(\mathrm{GL}_n(\mathbb{C})\) est connexe par arcs.
{{% /details %}}

## Composantes connexes

> [!TIP] **Définition et propriétés**
>
> La **composante connexe** d’un point \(x\) est la réunion de toutes les parties connexes contenant \(x\) : c’est la plus grande partie connexe contenant \(x\).
> - Les composantes connexes forment une partition de \(E\).
> - Chaque composante connexe est fermée.
> - Si \(E\) est un ouvert d’un espace vectoriel normé, ses composantes connexes sont ouvertes.
> - Le nombre de composantes connexes est conservé par homéomorphisme.

> [!NOTE] **Méthode - Montrer que deux espaces ne sont pas homéomorphes**
>
> Si \({f : E \to F}\) est un homéomorphisme, alors pour tout \({a \in E}\), \(f\) induit un homéomorphisme de \({E \setminus \{a\}}\) sur \({F \setminus \{f(a)\}}\). On compare donc le nombre de composantes connexes après avoir retiré un point (ou plusieurs).

> [!NOTE] **Exercice résolu - Espaces non homéomorphes**
>
> 1. Montrer que \(\mathbb{R}\) et \(\mathbb{R}^2\) ne sont pas homéomorphes.
> 2. Montrer que \([0, 1]\) et le cercle \(\mathbb{U}\) ne sont pas homéomorphes.
> 3. Soit \({f : \mathbb{U} \to \mathbb{R}}\) continue. Montrer qu’il existe \({z \in \mathbb{U}}\) tel que \({f(z) = f(-z)}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Supposons qu’il existe un homéomorphisme \({f : \mathbb{R} \to \mathbb{R}^2}\). Alors \(f\) induit un homéomorphisme de \({\mathbb{R} \setminus \{0\}}\) sur \({\mathbb{R}^2 \setminus \{f(0)\}}\). Or \(\mathbb{R}^*\) n’est pas connexe (ce n’est pas un intervalle), alors que le plan privé d’un point est connexe par arcs, donc connexe. L’image continue d’un connexe étant connexe, en appliquant \(f^{-1}\) on aurait \(\mathbb{R}^*\) connexe : contradiction.

**2.** Si \({f : [0, 1] \to \mathbb{U}}\) était un homéomorphisme, alors \({[0, 1] \setminus \left\{\dfrac{1}{2}\right\} = \left[0, \dfrac{1}{2}\right[ \cup \left]\dfrac{1}{2}, 1\right]}\), non connexe, serait homéomorphe à \(\mathbb{U}\) privé d’un point. Or le cercle privé d’un point \(e^{i\theta_0}\) est l’image de l’intervalle \({]\theta_0, \theta_0 + 2\pi[}\) par l’application continue \({t \mapsto e^{it}}\) : il est connexe. Contradiction.

**3.** On pose \({g(z) = f(z) - f(-z)}\), continue sur \(\mathbb{U}\). On a \({g(-z) = -g(z)}\). Le cercle \(\mathbb{U}\) est connexe (image de \(\mathbb{R}\) par \({t \mapsto e^{it}}\)), donc \(g(\mathbb{U})\) est un intervalle. Il contient \(g(1)\) et \({g(-1) = -g(1)}\), donc il contient \(0\) : il existe \(z\) tel que \({g(z) = 0}\), c’est-à-dire \({f(z) = f(-z)}\).

Interprétation : à tout instant, il existe sur l’équateur deux points diamétralement opposés où la température est la même.
{{% /details %}}
