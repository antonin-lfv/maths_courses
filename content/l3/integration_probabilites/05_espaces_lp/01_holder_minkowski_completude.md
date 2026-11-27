---
title: 'Inégalités de Hölder et de Minkowski, complétude'
weight: 1
cascade:
  type: docs
---

\((X, \mathcal{A}, \mu)\) est un espace mesuré.

## Définition

> [!TIP] **Définition**
>
> Pour \({1 \leq p < +\infty}\), on note \(\mathcal{L}^p(\mu)\) l’ensemble des fonctions mesurables \(f\) telles que \({\displaystyle\int |f|^p\,\mathrm{d}\mu < +\infty}\), et
>
> \[ \|f\|_p = \left(\int_X |f|^p\,\mathrm{d}\mu\right)^{1/p}. \]
>
> Pour \({p = +\infty}\), \(\mathcal{L}^\infty(\mu)\) est l’ensemble des fonctions mesurables **essentiellement bornées**, et \({\|f\|_\infty = \inf\{M \geq 0,\ |f| \leq M \text{ presque partout}\}}\) (borne supérieure essentielle).
>
> Comme \({\|f\|_p = 0}\) équivaut à \({f = 0}\) presque partout, \({\|\cdot\|_p}\) n’est pas une norme sur \(\mathcal{L}^p\). On note \(L^p(\mu)\) l’espace des **classes** de fonctions de \(\mathcal{L}^p\) pour la relation « égales presque partout ».

En pratique, on manipule les éléments de \(L^p\) comme des fonctions, en gardant à l’esprit qu’elles ne sont définies qu’à un ensemble négligeable près : la valeur d’un élément de \(L^p\) en un point n’a pas de sens.

> [!TIP] **Cas particuliers**
>
> - Mesure de Lebesgue sur un ouvert \(\Omega\) de \(\mathbb{R}^d\) : \(L^p(\Omega)\).
> - Mesure de comptage sur \(\mathbb{N}\) : \({\ell^p = \left\{(u_n),\ \sum |u_n|^p < +\infty\right\}}\).
> - Probabilité \(P\) : \(L^p(\Omega, P)\) est l’espace des variables aléatoires ayant un moment d’ordre \(p\) ; \({\|X\|_p = E(|X|^p)^{1/p}}\).

## Inégalités fondamentales

> [!TIP] **Définition**
>
> Deux réels \({p, q \in [1, +\infty]}\) sont des **exposants conjugués** si \({\dfrac{1}{p} + \dfrac{1}{q} = 1}\) (avec \({\dfrac{1}{\infty} = 0}\)). Le conjugué de \(2\) est \(2\) ; celui de \(1\) est \(+\infty\).

> [!TIP] **Inégalité de Young**
>
> Pour \({a, b \geq 0}\) et \(p\), \(q\) conjugués dans \({]1, +\infty[}\) : \({ab \leq \dfrac{a^p}{p} + \dfrac{b^q}{q}}\).

{{% details title="Démonstration" closed="true" %}}
Si \({a, b > 0}\), par concavité du logarithme : \({\ln\left(\dfrac{1}{p}a^p + \dfrac{1}{q}b^q\right) \geq \dfrac{1}{p}\ln(a^p) + \dfrac{1}{q}\ln(b^q) = \ln(ab)}\).
{{% /details %}}

> [!TIP] **Théorème - Inégalité de Hölder**
>
> Soient \(p\) et \(q\) conjugués, \({f \in L^p}\) et \({g \in L^q}\). Alors \({fg \in L^1}\) et
>
> \[ \int_X |fg|\,\mathrm{d}\mu \leq \|f\|_p\,\|g\|_q. \]
>
> Pour \({p = q = 2}\), c’est l’**inégalité de Cauchy-Schwarz**.

{{% details title="Démonstration" closed="true" %}}
Cas \({1 < p < +\infty}\), avec \({\|f\|_p}\) et \({\|g\|_q}\) non nuls (sinon \({fg = 0}\) presque partout). On applique l’inégalité de Young à \({a = \dfrac{|f(x)|}{\|f\|_p}}\) et \({b = \dfrac{|g(x)|}{\|g\|_q}}\), puis on intègre :

\[
\dfrac{1}{\|f\|_p\|g\|_q}\int |fg| \leq \dfrac{1}{p}\dfrac{\int |f|^p}{\|f\|_p^p} + \dfrac{1}{q}\dfrac{\int |g|^q}{\|g\|_q^q} = \dfrac{1}{p} + \dfrac{1}{q} = 1.
\]
{{% /details %}}

> [!TIP] **Théorème - Inégalité de Minkowski**
>
> Pour \({1 \leq p \leq +\infty}\) et \({f, g \in L^p}\) : \({\|f + g\|_p \leq \|f\|_p + \|g\|_p}\). Par conséquent, \({(L^p, \|\cdot\|_p)}\) est un espace vectoriel normé.

{{% details title="Démonstration" closed="true" %}}
Cas \({1 < p < +\infty}\). On écrit \({|f + g|^p \leq |f||f + g|^{p-1} + |g||f + g|^{p-1}}\) et on applique l’inégalité de Hölder à chaque terme, avec \({q = \dfrac{p}{p - 1}}\) :

\[
\int |f||f + g|^{p-1} \leq \|f\|_p\left(\int |f + g|^{(p-1)q}\right)^{1/q} = \|f\|_p\,\|f + g\|_p^{p-1}.
\]

Donc \({\|f + g\|_p^p \leq (\|f\|_p + \|g\|_p)\|f + g\|_p^{p-1}}\), et l’on simplifie.
{{% /details %}}

> [!TIP] **Inégalité de Jensen**
>
> Soit \(\mu\) une **probabilité**, \(f\) intégrable à valeurs dans un intervalle \(I\) et \({\varphi : I \to \mathbb{R}}\) convexe. Alors
>
> \[ \varphi\left(\int_X f\,\mathrm{d}\mu\right) \leq \int_X \varphi \circ f\,\mathrm{d}\mu. \]

## Complétude

> [!TIP] **Théorème de Riesz-Fischer**
>
> Pour tout \({p \in [1, +\infty]}\), \({(L^p(\mu), \|\cdot\|_p)}\) est un **espace de Banach**. De plus, toute suite qui converge dans \(L^p\) admet une suite extraite qui converge **presque partout** vers la même limite.

{{% details title="Démonstration" closed="true" %}}
Cas \({p < +\infty}\). Soit \((f_n)\) de Cauchy dans \(L^p\). On extrait une sous-suite \((f_{n_k})\) telle que \({\|f_{n_{k+1}} - f_{n_k}\|_p \leq 2^{-k}}\), et l’on pose \({g = \displaystyle\sum_{k} |f_{n_{k+1}} - f_{n_k}|}\). Par convergence monotone et inégalité de Minkowski, \({\|g\|_p \leq \sum 2^{-k} < +\infty}\) : \(g\) est finie presque partout. La série \({\sum (f_{n_{k+1}} - f_{n_k})}\) converge donc absolument presque partout, et \((f_{n_k})\) converge presque partout vers une fonction \(f\). Comme \({|f_{n_k} - f| \leq g}\) avec \({g^p}\) intégrable, la convergence dominée donne \({\|f_{n_k} - f\|_p \to 0}\). Une suite de Cauchy ayant une valeur d’adhérence converge.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La convergence dans \(L^p\) n’entraîne pas la convergence presque partout de la suite entière (seulement d’une sous-suite). Contre-exemple : la « bosse glissante » sur \([0, 1]\), indicatrices d’intervalles de longueur \(2^{-k}\) qui balaient \([0, 1]\) ; elle tend vers \(0\) dans \(L^p\) mais ne converge en aucun point. Réciproquement, la convergence presque partout n’entraîne pas la convergence dans \(L^p\), sauf avec une domination.

## Comparaison des espaces \(L^p\)

> [!TIP] **Propriétés**
>
> - **Mesure finie** (en particulier probabilité) : si \({1 \leq p \leq q \leq +\infty}\), alors \({L^q \subset L^p}\) et
>
> \[ \|f\|_p \leq \mu(X)^{\frac{1}{p} - \frac{1}{q}}\,\|f\|_q. \]
>
> - **Suites** : si \({1 \leq p \leq q \leq +\infty}\), alors \({\ell^p \subset \ell^q}\) et \({\|u\|_q \leq \|u\|_p}\) (inclusions dans l’autre sens).
> - **Sur \(\mathbb{R}\)** : aucune inclusion entre \(L^p(\mathbb{R})\) et \(L^q(\mathbb{R})\) pour \({p \neq q}\).
> - **Interpolation** : si \({f \in L^p \cap L^q}\), alors \({f \in L^r}\) pour tout \(r\) entre \(p\) et \(q\).

{{% details title="Démonstration" closed="true" %}}
Mesure finie, \({q < +\infty}\) : on applique Hölder à \({|f|^p \times 1}\) avec les exposants conjugués \(\dfrac{q}{p}\) et \(\dfrac{q}{q - p}\) :

\[
\int |f|^p \leq \left(\int |f|^q\right)^{p/q}\mu(X)^{1 - p/q}.
\]

On élève à la puissance \(\dfrac{1}{p}\).
{{% /details %}}

## Densité

> [!TIP] **Théorème**
>
> Pour \({1 \leq p < +\infty}\) :
> - les fonctions étagées intégrables sont denses dans \(L^p(\mu)\) ;
> - les fonctions **continues à support compact** sont denses dans \(L^p(\mathbb{R}^d)\), ainsi que les fonctions \(\mathcal{C}^\infty\) à support compact.
>
> C’est faux pour \({p = +\infty}\) : une limite uniforme de fonctions continues est continue.

> [!NOTE] **Méthode - Raisonner par densité**
>
> Pour établir une propriété pour tout \({f \in L^p}\) : (1) la démontrer pour une classe dense de fonctions régulières ; (2) montrer que la propriété passe à la limite dans \(L^p\), en général grâce à une inégalité de continuité.

{{% details title="Exemple" closed="true" %}}
**Continuité des translations.** Pour \({f \in L^p(\mathbb{R})}\), \({p < +\infty}\), on a \({\|f(\cdot + h) - f\|_p \to 0}\) quand \({h \to 0}\). C’est vrai pour \(g\) continue à support compact (uniforme continuité et convergence dominée) ; pour \(f\) quelconque, on choisit \(g\) telle que \({\|f - g\|_p \leq \varepsilon}\), et par invariance par translation \({\|f(\cdot + h) - f\|_p \leq 2\varepsilon + \|g(\cdot + h) - g\|_p}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Appartenance à \(L^p\) et inégalité de Hölder**
>
> 1. Pour quelles valeurs de \({p \in [1, +\infty[}\) la fonction \({f(x) = \dfrac{1}{\sqrt{x}}}\) appartient-elle à \({L^p(]0, 1[)}\) ? Et \({g(x) = \dfrac{1}{\sqrt{x}(1 + x)}}\) à \({L^p(]0, +\infty[)}\) ?
> 2. Soit \({h \in L^2(]0, 1[)}\). Montrer que \({\displaystyle\int_0^1 \dfrac{|h(x)|}{x^{1/4}}\,\mathrm{d}x \leq \sqrt{2}\,\|h\|_2}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({|f|^p = x^{-p/2}}\). D’après le critère de Riemann en \(0\), elle est intégrable sur \({]0, 1[}\) si et seulement si \({\dfrac{p}{2} < 1}\). Donc \({f \in L^p(]0, 1[)}\) si et seulement si \({p < 2}\). En particulier \(f\) est dans \(L^1\) mais pas dans \(L^2\).

Pour \(g\) : en \(0\), \({|g|^p \sim x^{-p/2}}\), intégrable si et seulement si \({p < 2}\) ; en \(+\infty\), \({|g|^p \sim x^{-3p/2}}\), intégrable si et seulement si \({\dfrac{3p}{2} > 1}\), soit \({p > \dfrac{2}{3}}\), toujours vrai pour \({p \geq 1}\). Donc \({g \in L^p(]0, +\infty[)}\) si et seulement si \({1 \leq p < 2}\).

**2.** On applique l’inégalité de Cauchy-Schwarz (Hölder avec \({p = q = 2}\)) aux fonctions \(|h|\) et \({x \mapsto x^{-1/4}}\) :

\[
\int_0^1 \dfrac{|h(x)|}{x^{1/4}}\,\mathrm{d}x \leq \|h\|_2\left(\int_0^1 \dfrac{\mathrm{d}x}{x^{1/2}}\right)^{1/2} = \|h\|_2\left(\big[2\sqrt{x}\big]_0^1\right)^{1/2} = \sqrt{2}\,\|h\|_2.
\]

La fonction \({x \mapsto x^{-1/4}}\) est bien dans \({L^2(]0, 1[)}\) puisque son carré \(x^{-1/2}\) est intégrable en \(0\).
{{% /details %}}
