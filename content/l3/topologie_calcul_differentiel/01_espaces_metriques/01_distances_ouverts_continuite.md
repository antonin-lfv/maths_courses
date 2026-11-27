---
title: 'Distances, ouverts, fermés, continuité'
weight: 1
cascade:
  type: docs
---

## Distances

> [!TIP] **Définition**
>
> Une **distance** sur un ensemble \(E\) est une application \({d : E \times E \to \mathbb{R}_+}\) telle que, pour tous \(x\), \(y\), \(z\) dans \(E\) :
> - **séparation** : \({d(x, y) = 0 \iff x = y}\) ;
> - **symétrie** : \({d(x, y) = d(y, x)}\) ;
> - **inégalité triangulaire** : \({d(x, z) \leq d(x, y) + d(y, z)}\).
>
> Le couple \((E, d)\) est un **espace métrique**. On a alors \({|d(x, z) - d(y, z)| \leq d(x, y)}\).

> [!TIP] **Exemples**
>
> - Sur un espace vectoriel normé : \({d(x, y) = \|x - y\|}\).
> - Sur une partie \(A\) d’un espace métrique : la **distance induite**, restriction de \(d\) à \({A \times A}\).
> - Sur un ensemble quelconque, la **distance discrète** : \({d(x, y) = 1}\) si \({x \neq y}\), \(0\) sinon.
> - Sur l’ensemble \(\mathcal{B}(X, \mathbb{R})\) des fonctions bornées : la **distance uniforme** \({d_\infty(f, g) = \sup_{x \in X} |f(x) - g(x)|}\).
> - Sur un produit \({E_1 \times E_2}\) : \({d\big((x_1, x_2), (y_1, y_2)\big) = \max\big(d_1(x_1, y_1), d_2(x_2, y_2)\big)}\).

> [!TIP] **Définition**
>
> Pour \({a \in E}\) et \({r > 0}\) : la **boule ouverte** \({B(a, r) = \{x,\ d(a, x) < r\}}\), la **boule fermée** \({\overline{B}(a, r) = \{x,\ d(a, x) \leq r\}}\). Une partie est **bornée** si elle est incluse dans une boule ; son **diamètre** est \({\operatorname{diam}(A) = \sup_{x, y \in A} d(x, y)}\).
>
> La **distance d’un point à une partie** non vide est \({d(x, A) = \inf_{a \in A} d(x, a)}\).

## Topologie d’un espace métrique

> [!TIP] **Définition**
>
> - Une partie \(V\) est un **voisinage** de \(a\) si elle contient une boule ouverte centrée en \(a\).
> - Une partie \(U\) est **ouverte** si elle est voisinage de chacun de ses points.
> - Une partie \(F\) est **fermée** si \({E \setminus F}\) est ouverte.

> [!TIP] **Propriétés**
>
> - \(\varnothing\) et \(E\) sont ouverts et fermés.
> - Toute réunion d’ouverts est ouverte ; toute intersection **finie** d’ouverts est ouverte.
> - Toute intersection de fermés est fermée ; toute réunion **finie** de fermés est fermée.
> - Les boules ouvertes sont ouvertes, les boules fermées sont fermées, les singletons sont fermés.
> - Un espace métrique est **séparé** : deux points distincts ont des voisinages disjoints.

{{% details title="Démonstration" closed="true" %}}
Boule ouverte : si \({x \in B(a, r)}\), on pose \({\rho = r - d(a, x) > 0}\). Pour \({y \in B(x, \rho)}\), \({d(a, y) \leq d(a, x) + d(x, y) < r}\), donc \({B(x, \rho) \subset B(a, r)}\).

Intersection finie : si \({x \in U_1 \cap \dots \cap U_n}\), il existe \({r_i > 0}\) avec \({B(x, r_i) \subset U_i}\) ; alors \({B(x, \min r_i)}\) est incluse dans l’intersection. Le minimum d’un nombre fini de réels strictement positifs est strictement positif, ce qui n’est plus vrai pour une famille infinie.
{{% /details %}}

> [!TIP] **Définition - Intérieur, adhérence, frontière**
>
> Soit \(A\) une partie de \(E\).
> - L’**intérieur** \(\mathring{A}\) est le plus grand ouvert inclus dans \(A\) : l’ensemble des points dont \(A\) est un voisinage.
> - L’**adhérence** \(\overline{A}\) est le plus petit fermé contenant \(A\) : l’ensemble des points dont tout voisinage rencontre \(A\).
> - La **frontière** est \({\partial A = \overline{A} \setminus \mathring{A}}\).
> - \(A\) est **dense** dans \(E\) si \({\overline{A} = E}\).

> [!TIP] **Propriétés**
>
> - \({\mathring{A} \subset A \subset \overline{A}}\) ; \(A\) est ouverte si et seulement si \({A = \mathring{A}}\), fermée si et seulement si \({A = \overline{A}}\).
> - \({E \setminus \overline{A} = (E \setminus A)^\circ}\) et \({E \setminus \mathring{A} = \overline{E \setminus A}}\).
> - \({x \in \overline{A} \iff d(x, A) = 0}\).
> - \({\overline{A \cup B} = \overline{A} \cup \overline{B}}\) et \({\overline{A \cap B} \subset \overline{A} \cap \overline{B}}\) (inclusion parfois stricte).

> [!IMPORTANT] **Remarque**
>
> Dans un espace métrique général, l’adhérence de la boule ouverte \(B(a, r)\) n’est pas toujours la boule fermée \(\overline{B}(a, r)\). Pour la distance discrète, \({B(a, 1) = \{a\}}\), déjà fermée, alors que \({\overline{B}(a, 1) = E}\). L’égalité est vraie dans un espace vectoriel normé.

> [!TIP] **Définition - Topologie induite**
>
> Soit \(A\) une partie de \(E\), munie de la distance induite. Les ouverts de \(A\) sont les \({U \cap A}\) avec \(U\) ouvert de \(E\) ; ses fermés sont les \({F \cap A}\) avec \(F\) fermé de \(E\).

Ainsi \({[0, 1[}\) est un ouvert de l’espace \({A = [0, 2]}\), sans être un ouvert de \(\mathbb{R}\) : « ouvert » est toujours relatif à un espace ambiant.

## Suites

> [!TIP] **Définition**
>
> Une suite \((x_n)\) de \(E\) **converge** vers \({\ell \in E}\) si \({d(x_n, \ell) \to 0}\). La limite est alors unique. Un point \(a\) est une **valeur d’adhérence** de \((x_n)\) s’il est limite d’une suite extraite.

> [!TIP] **Théorème - Caractérisations séquentielles**
>
> - \({x \in \overline{A}}\) si et seulement si \(x\) est limite d’une suite d’éléments de \(A\).
> - \(A\) est fermée si et seulement si toute suite d’éléments de \(A\) qui converge dans \(E\) a sa limite dans \(A\).
> - \(A\) est dense si et seulement si tout point de \(E\) est limite d’une suite d’éléments de \(A\).

## Continuité

> [!TIP] **Définition**
>
> Soient \((E, d)\) et \((F, \delta)\) deux espaces métriques. Une application \({f : E \to F}\) est **continue en \(a\)** si
>
> \[ \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in E,\quad d(x, a) < \eta \Rightarrow \delta(f(x), f(a)) < \varepsilon. \]

> [!TIP] **Théorème - Caractérisations de la continuité**
>
> Pour \({f : E \to F}\), les propriétés suivantes sont équivalentes :
> - \(f\) est continue en tout point de \(E\) ;
> - pour toute suite \((x_n)\) convergeant vers \(x\), \((f(x_n))\) converge vers \(f(x)\) ;
> - l’image réciproque par \(f\) de tout **ouvert** de \(F\) est un ouvert de \(E\) ;
> - l’image réciproque par \(f\) de tout **fermé** de \(F\) est un fermé de \(E\).

{{% details title="Démonstration" closed="true" %}}
Supposons \(f\) continue et soit \(V\) un ouvert de \(F\). Si \({a \in f^{-1}(V)}\), il existe \({\varepsilon > 0}\) tel que \({B(f(a), \varepsilon) \subset V}\), puis \({\eta > 0}\) tel que \({f(B(a, \eta)) \subset B(f(a), \varepsilon)}\). Donc \({B(a, \eta) \subset f^{-1}(V)}\), qui est ouvert.

Réciproquement, soit \({a \in E}\) et \({\varepsilon > 0}\). L’ensemble \({f^{-1}(B(f(a), \varepsilon))}\) est un ouvert contenant \(a\) : il contient une boule \(B(a, \eta)\), ce qui est la continuité en \(a\).

Le passage aux fermés se fait par complémentaire : \({f^{-1}(F \setminus V) = E \setminus f^{-1}(V)}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> C’est l’image **réciproque** qui se comporte bien. L’image directe d’un ouvert par une application continue n’est pas forcément ouverte : \({x \mapsto x^2}\) envoie \({]-1, 1[}\) sur \({[0, 1[}\).

> [!TIP] **Définition**
>
> - \(f\) est **uniformément continue** si \({\forall \varepsilon > 0,\ \exists \eta > 0,\ \forall (x, y) \in E^2,\ d(x, y) < \eta \Rightarrow \delta(f(x), f(y)) < \varepsilon}\).
> - \(f\) est **\(k\)-lipschitzienne** si \({\delta(f(x), f(y)) \leq k\,d(x, y)}\) pour tous \(x\), \(y\).
> - \(f\) est un **homéomorphisme** si elle est bijective, continue, et de réciproque continue. C’est une **isométrie** si \({\delta(f(x), f(y)) = d(x, y)}\).
>
> Lipschitzienne \(\Rightarrow\) uniformément continue \(\Rightarrow\) continue. Pour toute partie non vide \(A\), l’application \({x \mapsto d(x, A)}\) est \(1\)-lipschitzienne.

> [!IMPORTANT] **Remarque**
>
> Une bijection continue n’est pas toujours un homéomorphisme : \({t \mapsto e^{it}}\) est une bijection continue de \({[0, 2\pi[}\) sur le cercle \(\mathbb{U}\), mais sa réciproque n’est pas continue au point \(1\).

> [!TIP] **Définition - Distances équivalentes**
>
> Deux distances \(d\) et \(d'\) sur \(E\) sont **topologiquement équivalentes** si elles définissent les mêmes ouverts (donc les mêmes suites convergentes et les mêmes fonctions continues). Elles sont **fortement équivalentes** s’il existe \({\alpha, \beta > 0}\) avec \({\alpha d \leq d' \leq \beta d}\) ; cela entraîne l’équivalence topologique.

> [!NOTE] **Exercice résolu - Fermés, densité, prolongement des identités**
>
> 1. Soient \({f, g : E \to F}\) continues. Montrer que \({\{x \in E,\ f(x) = g(x)\}}\) est fermé. En déduire que si \(f\) et \(g\) coïncident sur une partie dense, elles sont égales.
> 2. Application : déterminer les fonctions continues \({f : \mathbb{R} \to \mathbb{R}}\) telles que \({f(x + y) = f(x) + f(y)}\) pour tous réels \(x\), \(y\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Notons \({C = \{x,\ f(x) = g(x)\}}\). Soit \((x_n)\) une suite de \(C\) qui converge vers \({x \in E}\). Par continuité, \({f(x_n) \to f(x)}\) et \({g(x_n) \to g(x)}\). Comme \({f(x_n) = g(x_n)}\) pour tout \(n\), l’unicité de la limite dans \(F\) donne \({f(x) = g(x)}\) : \({x \in C}\). Donc \(C\) est fermé.

Si \(f\) et \(g\) coïncident sur une partie dense \(D\), alors \({D \subset C}\), donc \({E = \overline{D} \subset \overline{C} = C}\) : \({f = g}\).

**2.** Soit \(f\) une telle fonction et \({a = f(1)}\).
- \({f(0) = f(0) + f(0)}\) donne \({f(0) = 0}\), puis \({f(-x) = -f(x)}\).
- Par récurrence, \({f(nx) = nf(x)}\) pour \({n \in \mathbb{N}}\), puis pour \({n \in \mathbb{Z}}\).
- Pour \({r = \dfrac{p}{q}}\) rationnel : \({qf(r) = f(qr) = f(p) = pa}\), donc \({f(r) = ar}\).

Les fonctions continues \(f\) et \({x \mapsto ax}\) coïncident sur \(\mathbb{Q}\), qui est dense dans \(\mathbb{R}\). D’après la question 1, \({f(x) = ax}\) pour tout réel \(x\). Réciproquement, les fonctions linéaires conviennent.
{{% /details %}}
