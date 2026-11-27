---
title: 'Fonctions mesurables et intégrale de Lebesgue'
weight: 2
---

Fonctions mesurables, fonctions étagées, intégrale des fonctions positives, fonctions intégrables.

{{< sommaire >}}

{{% fiche %}}
**Mesurable** - \({f^{-1}(B) \in \mathcal{A}}\) pour tout borélien \(B\) ; il suffit de tester \({\{f > a\}}\). Continues, limites simples, sup, inf, sommes, produits de fonctions mesurables : mesurables.

**Étagée** - \({\varphi = \sum a_i\mathbb{1}_{A_i}}\) ; \({\displaystyle\int \varphi\,\mathrm{d}\mu = \sum a_i\mu(A_i)}\).

**Positive** - \({\displaystyle\int f\,\mathrm{d}\mu = \sup\left\{\int \varphi,\ \varphi \text{ étagée},\ 0 \leq \varphi \leq f\right\} \in [0, +\infty]}\). Toute fonction mesurable positive est limite croissante d’étagées.

**Intégrable** - \({\displaystyle\int |f|\,\mathrm{d}\mu < +\infty}\) ; alors \({\displaystyle\int f = \int f^+ - \int f^-}\) et \({\left|\displaystyle\int f\right| \leq \int |f|}\).

**Presque partout** - \({\displaystyle\int |f| = 0 \iff f = 0}\) p.p. ; \({f = g}\) p.p. \(\Rightarrow\) mêmes intégrales ; \(f\) intégrable \(\Rightarrow\) finie p.p.

**Markov** - \({\mu(\{|f| \geq a\}) \leq \dfrac{1}{a}\displaystyle\int |f|\,\mathrm{d}\mu}\).

**Lien avec Riemann** - Riemann-intégrable sur \([a, b]\) \(\Rightarrow\) Lebesgue-intégrable, mêmes valeurs. Intégrale généralisée **absolument** convergente \(\iff\) Lebesgue-intégrable.

**Comptage sur \(\mathbb{N}\)** - \({\displaystyle\int f\,\mathrm{d}\mu = \sum f(n)}\) : les séries absolument convergentes sont des intégrales.
{{% /fiche %}}
