---
title: 'Espaces complets et point fixe de Banach-Picard'
weight: 1
cascade:
  type: docs
---

## Suites de Cauchy

> [!TIP] **Définition**
>
> Une suite \((x_n)\) d’un espace métrique \((E, d)\) est **de Cauchy** si
>
> \[ \forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall p, q \geq N,\quad d(x_p, x_q) \leq \varepsilon. \]

Les termes d’une suite de Cauchy se resserrent ; la définition ne fait pas intervenir de limite.

> [!TIP] **Propriétés**
>
> - Toute suite convergente est de Cauchy.
> - Toute suite de Cauchy est bornée.
> - Une suite de Cauchy qui a une valeur d’adhérence converge vers elle.
> - L’image d’une suite de Cauchy par une application **uniformément continue** est de Cauchy (ce qui est faux pour une application seulement continue).

{{% details title="Démonstration" closed="true" %}}
Si \({x_n \to \ell}\), alors \({d(x_p, x_q) \leq d(x_p, \ell) + d(\ell, x_q)}\), petit pour \(p\), \(q\) grands.

Soit \((x_n)\) de Cauchy et \({x_{\varphi(n)} \to \ell}\). Pour \({\varepsilon > 0}\), soit \(N\) tel que \({d(x_p, x_q) \leq \varepsilon}\) pour \({p, q \geq N}\). Pour \({n \geq N}\), comme \({\varphi(k) \geq k}\), \({d(x_n, x_{\varphi(k)}) \leq \varepsilon}\) pour \({k \geq N}\) ; en faisant tendre \(k\) vers l’infini, \({d(x_n, \ell) \leq \varepsilon}\).
{{% /details %}}

## Espaces complets

> [!TIP] **Définition**
>
> Un espace métrique est **complet** si toute suite de Cauchy y converge. Un espace vectoriel normé complet est un **espace de Banach**.

> [!TIP] **Théorème**
>
> - \(\mathbb{R}\) et \(\mathbb{C}\) sont complets ; tout espace vectoriel normé de **dimension finie** est complet.
> - Tout espace métrique **compact** est complet.
> - Une partie **fermée** d’un espace complet est complète ; une partie complète d’un espace métrique est fermée.
> - Un produit fini d’espaces complets est complet.

{{% details title="Démonstration" closed="true" %}}
**\(\mathbb{R}\).** Une suite de Cauchy est bornée, donc a une valeur d’adhérence (Bolzano-Weierstrass), donc converge.

**Fermé dans un complet.** Une suite de Cauchy de \(F\) converge dans \(E\), et sa limite est dans \(F\) car \(F\) est fermé.

**Complet \(\Rightarrow\) fermé.** Une suite de \(A\) convergeant dans \(E\) est de Cauchy, donc converge dans \(A\) ; par unicité de la limite, celle-ci est dans \(A\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> \(\mathbb{Q}\) n’est pas complet : la suite des approximations décimales de \(\sqrt{2}\) est de Cauchy dans \(\mathbb{Q}\) et n’y converge pas. \({]0, 1[}\) non plus : \(\left(\dfrac{1}{n}\right)\) est de Cauchy sans y converger. La complétude n’est pas une propriété topologique : \({]0, 1[}\) et \(\mathbb{R}\) sont homéomorphes, mais un seul est complet.

> [!TIP] **Théorème - Espaces de fonctions**
>
> - Si \(F\) est un espace de Banach, l’espace \(\mathcal{B}(X, F)\) des fonctions bornées de \(X\) dans \(F\), muni de \({\|f\|_\infty = \sup_{x \in X} \|f(x)\|}\), est un espace de Banach.
> - Si \(K\) est un espace métrique compact, \({(\mathcal{C}(K, \mathbb{R}), \|\cdot\|_\infty)}\) est un espace de Banach.

{{% details title="Démonstration" closed="true" %}}
Soit \((f_n)\) de Cauchy dans \(\mathcal{B}(X, F)\). Pour chaque \(x\), \({\|f_p(x) - f_q(x)\| \leq \|f_p - f_q\|_\infty}\) : la suite \((f_n(x))\) est de Cauchy dans \(F\) complet, donc converge vers un élément noté \(f(x)\). Pour \({\varepsilon > 0}\), soit \(N\) tel que \({\|f_p - f_q\|_\infty \leq \varepsilon}\) pour \({p, q \geq N}\). En fixant \(x\) et \({p \geq N}\) et en faisant tendre \(q\) vers l’infini : \({\|f_p(x) - f(x)\| \leq \varepsilon}\), pour tout \(x\). Donc \(f\) est bornée et \({\|f_p - f\|_\infty \leq \varepsilon}\).

Pour \(\mathcal{C}(K)\) : c’est un sous-espace fermé de \(\mathcal{B}(K)\), car une limite uniforme de fonctions continues est continue.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La complétude dépend de la norme. \(\mathcal{C}([0, 1], \mathbb{R})\) est complet pour \({\|\cdot\|_\infty}\), mais pas pour \({\|f\|_1 = \displaystyle\int_0^1 |f|}\) : une suite de fonctions continues affines par morceaux peut converger en norme \({\|\cdot\|_1}\) vers une fonction en escalier discontinue.

> [!TIP] **Théorème - Séries dans un espace de Banach**
>
> Un espace vectoriel normé \(E\) est complet si et seulement si toute série **absolument convergente** (\({\sum \|u_n\|}\) converge) est convergente dans \(E\).

## Théorème du point fixe

> [!TIP] **Définition**
>
> Une application \({f : E \to E}\) est **contractante** s’il existe \({k \in [0, 1[}\) tel que
>
> \[ \forall (x, y) \in E^2, \quad d(f(x), f(y)) \leq k\,d(x, y). \]

> [!TIP] **Théorème du point fixe de Banach-Picard**
>
> Soit \((E, d)\) un espace métrique **complet** non vide et \({f : E \to E}\) une application \(k\)-contractante. Alors :
> - \(f\) admet un **unique** point fixe \(a\) ;
> - pour tout \({x_0 \in E}\), la suite définie par \({x_{n+1} = f(x_n)}\) converge vers \(a\) ;
> - on a les estimations
>
> \[ d(x_n, a) \leq k^n d(x_0, a) \qquad \text{et} \qquad d(x_n, a) \leq \dfrac{k^n}{1 - k}\,d(x_0, x_1). \]

{{% details title="Démonstration" closed="true" %}}
**Unicité.** Si \(a\) et \(b\) sont fixes, \({d(a, b) = d(f(a), f(b)) \leq k\,d(a, b)}\), donc \({(1 - k)d(a, b) \leq 0}\) et \({a = b}\).

**Existence.** Par récurrence, \({d(x_n, x_{n+1}) \leq k^n d(x_0, x_1)}\). Pour \({q > p}\), par inégalité triangulaire :

\[
d(x_p, x_q) \leq \sum_{n=p}^{q-1} k^n d(x_0, x_1) \leq \dfrac{k^p}{1 - k}\,d(x_0, x_1).
\]

Comme \({k^p \to 0}\), la suite est de Cauchy. \(E\) étant complet, elle converge vers un point \(a\). \(f\) est continue (lipschitzienne), donc en passant à la limite dans \({x_{n+1} = f(x_n)}\) : \({a = f(a)}\). En faisant tendre \(q\) vers l’infini dans l’inégalité, on obtient la seconde estimation.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Chaque hypothèse compte : il faut \({k < 1}\) (la condition \({d(f(x), f(y)) < d(x, y)}\) ne suffit pas hors du cas compact), la complétude, et \({f(E) \subset E}\).
> - **Variante** : si une itérée \({f^p = f \circ \dots \circ f}\) est contractante, alors \(f\) a un unique point fixe.

> [!NOTE] **Méthode - Appliquer le théorème du point fixe**
>
> 1. Écrire le problème sous la forme \({x = f(x)}\).
> 2. Choisir un espace complet \(E\) (souvent un fermé d’un espace de Banach) **stable** par \(f\).
> 3. Montrer que \(f\) est contractante, par exemple avec l’inégalité des accroissements finis : \({\|f'\| \leq k < 1}\) sur un convexe.

## Deux autres outils

> [!TIP] **Théorème - Prolongement des applications uniformément continues**
>
> Soit \(A\) une partie **dense** de \(E\), \(F\) un espace **complet** et \({f : A \to F}\) **uniformément continue**. Alors \(f\) se prolonge de manière unique en une application continue de \(E\) dans \(F\), et ce prolongement est uniformément continu.

> [!TIP] **Théorème de Baire**
>
> Dans un espace métrique complet, toute intersection **dénombrable** d’ouverts denses est dense. De façon équivalente, une réunion dénombrable de fermés d’intérieur vide est d’intérieur vide.

> [!NOTE] **Exercice résolu - Une équation fonctionnelle**
>
> Montrer qu’il existe une unique fonction continue \({f : [0, 1] \to \mathbb{R}}\) telle que, pour tout \({x \in [0, 1]}\) :
>
> \[ f(x) = \cos x + \dfrac{1}{2}\int_0^x f(t)\sin(t)\,\mathrm{d}t. \]

{{% details title="Solution commentée" closed="true" %}}
**Cadre.** \({E = \mathcal{C}([0, 1], \mathbb{R})}\), muni de \({\|\cdot\|_\infty}\), est un espace de Banach. Pour \({f \in E}\), on définit \(T(f)\) par

\[
T(f)(x) = \cos x + \dfrac{1}{2}\int_0^x f(t)\sin(t)\,\mathrm{d}t.
\]

\(T(f)\) est continue (somme d’une fonction continue et d’une primitive de fonction continue) : \(T\) envoie \(E\) dans \(E\). Les solutions du problème sont les points fixes de \(T\).

**Contraction.** Pour \({f, g \in E}\) et \({x \in [0, 1]}\) :

\[
|T(f)(x) - T(g)(x)| = \dfrac{1}{2}\left|\int_0^x \big(f(t) - g(t)\big)\sin(t)\,\mathrm{d}t\right| \leq \dfrac{1}{2}\int_0^x |f(t) - g(t)|\,\mathrm{d}t \leq \dfrac{1}{2}\|f - g\|_\infty,
\]

car \({|\sin t| \leq 1}\) et \({x \leq 1}\). Donc \({\|T(f) - T(g)\|_\infty \leq \dfrac{1}{2}\|f - g\|_\infty}\) : \(T\) est \(\dfrac{1}{2}\)-contractante.

**Conclusion.** D’après le théorème du point fixe de Banach-Picard, \(T\) admet un unique point fixe dans \(E\) : il existe une unique fonction continue solution. De plus, la suite \({f_0 = 0}\), \({f_{n+1} = T(f_n)}\) converge uniformément vers cette solution, avec \({\|f_n - f\|_\infty \leq \dfrac{(1/2)^n}{1 - 1/2}\|f_1 - f_0\|_\infty \leq 2^{1-n}}\), puisque \({f_1 = \cos}\).
{{% /details %}}
