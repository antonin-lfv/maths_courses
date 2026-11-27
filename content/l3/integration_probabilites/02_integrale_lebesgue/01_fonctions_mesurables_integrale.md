---
title: 'Construction de l’intégrale'
weight: 1
cascade:
  type: docs
---

\((X, \mathcal{A}, \mu)\) est un espace mesuré.

## Fonctions mesurables

> [!TIP] **Définition**
>
> Une application \({f : (X, \mathcal{A}) \to (Y, \mathcal{B})}\) est **mesurable** si \({f^{-1}(B) \in \mathcal{A}}\) pour tout \({B \in \mathcal{B}}\). Pour \({f : X \to \mathbb{R}}\) (muni de sa tribu borélienne), il suffit de vérifier que \({\{f > a\} = f^{-1}(]a, +\infty[)}\) est mesurable pour tout réel \(a\).
>
> Une fonction mesurable de \((\mathbb{R}^d, \mathcal{B}(\mathbb{R}^d))\) dans \(\mathbb{R}\) est dite **borélienne**.

> [!TIP] **Propriétés**
>
> - Toute fonction **continue** entre espaces métriques est borélienne.
> - La composée de deux fonctions mesurables est mesurable.
> - Si \(f\) et \(g\) sont mesurables à valeurs réelles : \({f + g}\), \(fg\), \(\max(f, g)\), \(\min(f, g)\), \(|f|\) sont mesurables, ainsi que \({f^+ = \max(f, 0)}\) et \({f^- = \max(-f, 0)}\).
> - Si \((f_n)\) est une suite de fonctions mesurables, \(\sup_n f_n\), \(\inf_n f_n\), \(\limsup f_n\), \(\liminf f_n\) sont mesurables. En particulier, **une limite simple de fonctions mesurables est mesurable**.
> - L’indicatrice \(\mathbb{1}_A\) est mesurable si et seulement si \({A \in \mathcal{A}}\).

{{% details title="Démonstration" closed="true" %}}
Pour le supremum : \({\{\sup_n f_n > a\} = \displaystyle\bigcup_n \{f_n > a\}}\), réunion dénombrable de parties mesurables. C’est ici que la stabilité par réunion **dénombrable** des tribus est indispensable.
{{% /details %}}

La mesurabilité est une hypothèse très peu contraignante : toutes les fonctions que l’on sait écrire sont mesurables.

## Fonctions étagées

> [!TIP] **Définition**
>
> Une fonction **étagée** est une fonction mesurable qui ne prend qu’un nombre fini de valeurs : \({\varphi = \displaystyle\sum_{i=1}^{n} a_i\mathbb{1}_{A_i}}\), avec \({A_i \in \mathcal{A}}\). Si \(\varphi\) est étagée **positive**, son intégrale est
>
> \[ \int_X \varphi\,\mathrm{d}\mu = \sum_{i=1}^{n} a_i\,\mu(A_i) \in [0, +\infty], \]
>
> avec la convention \({0 \times (+\infty) = 0}\). Cette valeur ne dépend pas de l’écriture choisie.

> [!TIP] **Théorème - Approximation**
>
> Toute fonction mesurable **positive** \({f : X \to [0, +\infty]}\) est limite simple d’une suite **croissante** de fonctions étagées positives. Par exemple :
>
> \[ \varphi_n = \sum_{k=0}^{n2^n - 1} \dfrac{k}{2^n}\,\mathbb{1}_{\left\{\frac{k}{2^n} \leq f < \frac{k+1}{2^n}\right\}} + n\,\mathbb{1}_{\{f \geq n\}}. \]

On découpe l’axe des **ordonnées** en tranches de hauteur \(2^{-n}\) : c’est la différence essentielle avec l’intégrale de Riemann, qui découpe l’axe des abscisses.

## Intégrale des fonctions positives

> [!TIP] **Définition**
>
> Pour \({f : X \to [0, +\infty]}\) mesurable :
>
> \[ \int_X f\,\mathrm{d}\mu = \sup\left\{\int_X \varphi\,\mathrm{d}\mu,\ \varphi \text{ étagée},\ 0 \leq \varphi \leq f\right\} \in [0, +\infty]. \]
>
> L’intégrale d’une fonction mesurable positive existe **toujours**, éventuellement infinie. Pour \({A \in \mathcal{A}}\), on pose \({\displaystyle\int_A f\,\mathrm{d}\mu = \int_X f\mathbb{1}_A\,\mathrm{d}\mu}\).

> [!TIP] **Propriétés**
>
> Pour \(f\), \(g\) mesurables positives et \({a \geq 0}\) :
> - **croissance** : \({f \leq g \Rightarrow \displaystyle\int f \leq \int g}\) ;
> - **linéarité positive** : \({\displaystyle\int (af + g) = a\int f + \int g}\) ;
> - **inégalité de Markov** : pour \({a > 0}\), \({\mu(\{f \geq a\}) \leq \dfrac{1}{a}\displaystyle\int f\,\mathrm{d}\mu}\) ;
> - \({\displaystyle\int f\,\mathrm{d}\mu = 0}\) si et seulement si \({f = 0}\) presque partout ;
> - si \({\displaystyle\int f\,\mathrm{d}\mu < +\infty}\), alors \({f < +\infty}\) presque partout.

{{% details title="Démonstration" closed="true" %}}
**Markov.** \({f \geq a\,\mathbb{1}_{\{f \geq a\}}}\), donc par croissance \({\displaystyle\int f \geq a\,\mu(\{f \geq a\})}\).

**Intégrale nulle.** Si \({\displaystyle\int f = 0}\), l’inégalité de Markov donne \({\mu\left(\left\{f \geq \dfrac{1}{n}\right\}\right) = 0}\) pour tout \(n\). Or \({\{f > 0\} = \displaystyle\bigcup_n \left\{f \geq \dfrac{1}{n}\right\}}\), réunion dénombrable d’ensembles de mesure nulle : \({\mu(\{f > 0\}) = 0}\).

**Finitude.** \({\mu(\{f = +\infty\}) \leq \mu(\{f \geq n\}) \leq \dfrac{1}{n}\displaystyle\int f \to 0}\).
{{% /details %}}

## Fonctions intégrables

> [!TIP] **Définition**
>
> Une fonction mesurable \({f : X \to \mathbb{R}}\) est **intégrable** si \({\displaystyle\int_X |f|\,\mathrm{d}\mu < +\infty}\). Son intégrale est alors
>
> \[ \int_X f\,\mathrm{d}\mu = \int_X f^+\,\mathrm{d}\mu - \int_X f^-\,\mathrm{d}\mu. \]
>
> Pour \(f\) à valeurs complexes, on intègre séparément les parties réelle et imaginaire. L’ensemble des fonctions intégrables est noté \(\mathcal{L}^1(X, \mathcal{A}, \mu)\).

> [!TIP] **Propriétés**
>
> - \(\mathcal{L}^1\) est un espace vectoriel et \({f \mapsto \displaystyle\int f\,\mathrm{d}\mu}\) y est une forme linéaire croissante.
> - **Inégalité triangulaire** : \({\left|\displaystyle\int f\,\mathrm{d}\mu\right| \leq \int |f|\,\mathrm{d}\mu}\).
> - **Domination** : si \(f\) est mesurable et \({|f| \leq g}\) avec \(g\) intégrable, alors \(f\) est intégrable.
> - Si \({f = g}\) presque partout, alors \(f\) est intégrable si et seulement si \(g\) l’est, et leurs intégrales sont égales.

L’intégrale ne « voit » pas les ensembles négligeables : on peut modifier une fonction sur un ensemble de mesure nulle sans changer son intégrale.

## Lien avec l’intégrale de Riemann et les séries

> [!TIP] **Théorème**
>
> Pour la mesure de Lebesgue \(\lambda\) sur \(\mathbb{R}\), on note \({\displaystyle\int f\,\mathrm{d}\lambda = \int f(x)\,\mathrm{d}x}\).
> - Toute fonction **Riemann-intégrable** sur un segment \([a, b]\) (en particulier continue par morceaux) est Lebesgue-intégrable, et les deux intégrales coïncident.
> - Si \(f\) est continue par morceaux sur un intervalle \(I\), alors \(f\) est Lebesgue-intégrable sur \(I\) si et seulement si son intégrale généralisée est **absolument convergente**, et les valeurs coïncident.
> - Pour la **mesure de comptage** sur \(\mathbb{N}\) : une suite \((u_n)\) est intégrable si et seulement si \(\sum u_n\) est absolument convergente, et \({\displaystyle\int u\,\mathrm{d}\mu = \sum_{n=0}^{+\infty} u_n}\).

> [!IMPORTANT] **Remarques**
>
> - Une intégrale **semi-convergente**, comme \({\displaystyle\int_0^{+\infty} \dfrac{\sin t}{t}\,\mathrm{d}t}\), n’est pas une intégrale de Lebesgue : \({\dfrac{\sin t}{t}}\) n’est pas intégrable sur \({]0, +\infty[}\).
> - À l’inverse, \(\mathbb{1}_\mathbb{Q}\) n’est pas Riemann-intégrable sur \([0, 1]\), mais elle est Lebesgue-intégrable, d’intégrale \({\lambda(\mathbb{Q} \cap [0, 1]) = 0}\).

> [!NOTE] **Exercice résolu - Intégrer par rapport à différentes mesures**
>
> Soit \({f(x) = x^2}\) sur \(\mathbb{R}\). Calculer \({\displaystyle\int_\mathbb{R} f\,\mathrm{d}\mu}\) dans chacun des cas suivants :
>
> 1. \({\mu = \delta_3}\) (mesure de Dirac en \(3\)) ;
> 2. \({\mu = \dfrac{1}{2}\delta_{-1} + \dfrac{1}{3}\delta_0 + \dfrac{1}{6}\delta_2}\) ;
> 3. \(\mu\) la mesure de densité \(\mathbb{1}_{[0, 1]}\) par rapport à la mesure de Lebesgue ;
> 4. \({\mu = \displaystyle\sum_{n \geq 1} 2^{-n}\delta_n}\).

{{% details title="Solution commentée" closed="true" %}}
Principe : pour une fonction étagée, \({\displaystyle\int \mathbb{1}_A\,\mathrm{d}\delta_a = \delta_a(A) = \mathbb{1}_A(a)}\). Par linéarité et passage à la limite croissante, \({\displaystyle\int f\,\mathrm{d}\delta_a = f(a)}\) pour toute fonction mesurable positive, et \({\displaystyle\int f\,\mathrm{d}\left(\sum p_n\delta_{a_n}\right) = \sum p_nf(a_n)}\).

**1.** \({\displaystyle\int f\,\mathrm{d}\delta_3 = f(3) = 9}\).

**2.** \({\dfrac{1}{2}f(-1) + \dfrac{1}{3}f(0) + \dfrac{1}{6}f(2) = \dfrac{1}{2} + 0 + \dfrac{4}{6} = \dfrac{7}{6}}\). C’est l’espérance de \(Y^2\) pour une variable aléatoire \(Y\) de loi \(\mu\).

**3.** \({\displaystyle\int f\,\mathrm{d}\mu = \int_\mathbb{R} x^2\mathbb{1}_{[0, 1]}(x)\,\mathrm{d}x = \int_0^1 x^2\,\mathrm{d}x = \dfrac{1}{3}}\).

**4.** \({\displaystyle\sum_{n=1}^{+\infty} \dfrac{n^2}{2^n}}\). Avec \({\displaystyle\sum_{n \geq 1} nx^n = \dfrac{x}{(1 - x)^2}}\), en dérivant puis en multipliant par \(x\) : \({\displaystyle\sum_{n \geq 1} n^2x^n = \dfrac{x(1 + x)}{(1 - x)^3}}\) pour \({|x| < 1}\). En \({x = \dfrac{1}{2}}\) :

\[
\sum_{n=1}^{+\infty} \dfrac{n^2}{2^n} = \dfrac{\dfrac{1}{2} \times \dfrac{3}{2}}{\dfrac{1}{8}} = 6.
\]

La fonction \(f\) est donc intégrable pour cette mesure, bien qu’elle ne soit pas bornée.
{{% /details %}}
