---
title: 'Espaces métriques compacts'
weight: 1
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition et théorème**
>
> Un espace métrique \((K, d)\) est **compact** s’il vérifie l’une des deux propriétés équivalentes suivantes :
> - **Bolzano-Weierstrass** : toute suite d’éléments de \(K\) admet une suite extraite qui converge dans \(K\) (autrement dit, toute suite a au moins une valeur d’adhérence) ;
> - **Borel-Lebesgue** : de tout recouvrement de \(K\) par des ouverts, on peut extraire un sous-recouvrement **fini**.
>
> Une partie \(A\) d’un espace métrique est compacte si elle l’est pour la distance induite.

> [!TIP] **Propriétés**
>
> - Toute partie compacte est **fermée et bornée**.
> - Toute partie **fermée** d’un compact est compacte.
> - Un **produit fini** de compacts est compact.
> - Dans un compact, une suite converge si et seulement si elle a une **unique** valeur d’adhérence.
> - Propriété des fermés emboîtés : une suite décroissante de fermés non vides d’un compact a une intersection non vide.

{{% details title="Démonstration" closed="true" %}}
**Fermé.** Si \((x_n)\) est une suite de \(K\) qui converge vers \({\ell \in E}\), une suite extraite converge dans \(K\) ; par unicité de la limite, \({\ell \in K}\).

**Borné.** Sinon, en fixant \({a \in K}\), il existerait \({x_n \in K}\) avec \({d(a, x_n) \geq n}\). Une suite extraite convergente serait bornée : contradiction.

**Fermé d’un compact.** Une suite de \({F \subset K}\) a une suite extraite convergeant dans \(K\), et sa limite est dans \(F\) car \(F\) est fermé.

**Produit.** Pour une suite \(((x_n, y_n))\) de \({K_1 \times K_2}\), on extrait d’abord pour faire converger \((x_n)\), puis on extrait de nouveau pour faire converger \((y_n)\).

**Unique valeur d’adhérence.** Si \((x_n)\) ne converge pas vers son unique valeur d’adhérence \(\ell\), il existe \({\varepsilon > 0}\) et une suite extraite restant à distance au moins \(\varepsilon\) de \(\ell\) ; par compacité, elle a une valeur d’adhérence, différente de \(\ell\) : contradiction.
{{% /details %}}

> [!TIP] **Théorème - Compacts de \(\mathbb{R}^n\)**
>
> Dans \(\mathbb{R}^n\), et plus généralement dans tout espace vectoriel normé de **dimension finie**, les parties compactes sont exactement les parties **fermées et bornées**.

> [!IMPORTANT] **Remarque**
>
> C’est faux en dimension infinie. **Théorème de Riesz** : la boule unité fermée d’un espace vectoriel normé est compacte si et seulement si l’espace est de dimension finie. Par exemple, dans \(\ell^2\), la suite \((e_n)\) des vecteurs de la base canonique est dans la boule unité, mais \({\|e_n - e_m\| = \sqrt{2}}\) pour \({n \neq m}\) : aucune suite extraite ne converge.

## Fonctions continues sur un compact

> [!TIP] **Théorème**
>
> L’image d’un compact par une application **continue** est compacte.

{{% details title="Démonstration" closed="true" %}}
Soit \({f : K \to F}\) continue et \((y_n)\) une suite de \(f(K)\) : \({y_n = f(x_n)}\). Une suite extraite \({(x_{\varphi(n)})}\) converge vers \({x \in K}\), et par continuité \({y_{\varphi(n)} \to f(x) \in f(K)}\).
{{% /details %}}

> [!TIP] **Corollaires**
>
> - **Bornes atteintes** : toute fonction continue d’un compact non vide dans \(\mathbb{R}\) est bornée et atteint son minimum et son maximum.
> - **Homéomorphisme** : toute bijection continue d’un compact sur un espace métrique est un homéomorphisme.
> - **Distances atteintes** : si \(K\) est un compact non vide, pour tout \(x\) il existe \({a \in K}\) tel que \({d(x, K) = d(x, a)}\). Si \(K\) est compact, \(F\) fermé et \({K \cap F = \varnothing}\), alors \({d(K, F) = \inf_{x \in K,\, y \in F} d(x, y) > 0}\).

{{% details title="Démonstration" closed="true" %}}
**Homéomorphisme.** Soit \({f : K \to F}\) bijective continue. Pour montrer que \(f^{-1}\) est continue, il suffit de voir que l’image réciproque par \(f^{-1}\) d’un fermé \(C\) de \(K\), c’est-à-dire \(f(C)\), est fermée. Or \(C\) est un fermé du compact \(K\), donc compact, donc \(f(C)\) est compact, donc fermé.

**Distance entre un compact et un fermé.** \({x \mapsto d(x, F)}\) est continue sur \(K\), donc atteint son minimum en un point \({a \in K}\). Si ce minimum était nul, \(a\) serait adhérent à \(F\), donc dans \(F\) : impossible.
{{% /details %}}

> [!TIP] **Théorème de Heine**
>
> Toute application continue d’un espace métrique **compact** dans un espace métrique est **uniformément continue**.

{{% details title="Démonstration" closed="true" %}}
Par l’absurde : sinon, il existe \({\varepsilon > 0}\) et des suites \((x_n)\), \((y_n)\) avec \({d(x_n, y_n) \leq \dfrac{1}{n}}\) et \({\delta(f(x_n), f(y_n)) \geq \varepsilon}\). On extrait \({x_{\varphi(n)} \to x}\) ; alors \({y_{\varphi(n)} \to x}\) aussi, et par continuité \({\delta(f(x_{\varphi(n)}), f(y_{\varphi(n)})) \to 0}\) : contradiction.
{{% /details %}}

> [!TIP] **Théorème - Équivalence des normes en dimension finie**
>
> Sur un espace vectoriel de dimension finie, toutes les normes sont équivalentes.

{{% details title="Démonstration" closed="true" %}}
Sur \(\mathbb{R}^n\), comparons une norme \(N\) à \({\|\cdot\|_\infty}\). D’abord \({N(x) \leq \sum |x_i|N(e_i) \leq C\|x\|_\infty}\) : \(N\) est continue pour \({\|\cdot\|_\infty}\). La sphère unité \(S\) de \({\|\cdot\|_\infty}\) est fermée et bornée, donc compacte (par Bolzano-Weierstrass dans \(\mathbb{R}\), coordonnée par coordonnée). \(N\) y atteint son minimum \(m\), et \({m > 0}\) car \(N\) ne s’annule pas sur \(S\). Par homogénéité, \({m\|x\|_\infty \leq N(x) \leq C\|x\|_\infty}\).
{{% /details %}}

> [!NOTE] **Méthode - Montrer qu’un problème d’optimisation a une solution**
>
> Pour prouver qu’une fonction continue \(f\) atteint son minimum sur une partie \(A\) :
> - si \(A\) est compacte, c’est immédiat ;
> - si \(A\) est fermée non bornée dans \(\mathbb{R}^n\) et si \({f(x) \to +\infty}\) quand \({\|x\| \to +\infty}\) (fonction **coercive**), on se ramène au compact \({A \cap \overline{B}(0, R)}\) pour \(R\) assez grand.

> [!NOTE] **Exercice résolu - Point fixe sur un compact**
>
> Soit \((K, d)\) un espace métrique compact non vide et \({f : K \to K}\) telle que
>
> \[ \forall x \neq y, \quad d(f(x), f(y)) < d(x, y). \]
>
> Montrer que \(f\) admet un unique point fixe.

{{% details title="Solution commentée" closed="true" %}}
**Continuité.** L’hypothèse entraîne \({d(f(x), f(y)) \leq d(x, y)}\) pour tous \(x\), \(y\) : \(f\) est \(1\)-lipschitzienne, donc continue.

**Existence.** La fonction \({g : x \mapsto d(x, f(x))}\) est continue sur \(K\), comme composée d’applications continues (\(d\) est continue sur \({K \times K}\)). \(K\) étant compact, \(g\) atteint son minimum en un point \({a \in K}\).

Supposons \({f(a) \neq a}\). En appliquant l’hypothèse à \({x = a}\) et \({y = f(a)}\) :

\[
g(f(a)) = d\big(f(a), f(f(a))\big) < d(a, f(a)) = g(a),
\]

ce qui contredit la minimalité de \(g(a)\). Donc \({f(a) = a}\).

**Unicité.** Si \(a\) et \(b\) sont deux points fixes distincts, \({d(a, b) = d(f(a), f(b)) < d(a, b)}\) : impossible.

**Remarque.** La compacité est indispensable : sur \({[1, +\infty[}\), \({f(x) = x + \dfrac{1}{x}}\) vérifie l’hypothèse (\({0 \leq f'(x) < 1}\)) mais n’a pas de point fixe.
{{% /details %}}
