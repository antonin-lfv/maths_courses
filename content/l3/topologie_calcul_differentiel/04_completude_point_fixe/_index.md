---
title: 'Complétude et théorème du point fixe'
weight: 4
---

Suites de Cauchy, espaces complets, théorème du point fixe de Banach-Picard et théorème de Baire.

{{< sommaire >}}

{{% fiche %}}
**Suite de Cauchy** - \({\forall \varepsilon > 0,\ \exists N,\ \forall p, q \geq N,\ d(x_p, x_q) \leq \varepsilon}\). Convergente \(\Rightarrow\) de Cauchy \(\Rightarrow\) bornée. De Cauchy avec une valeur d’adhérence \(\Rightarrow\) convergente.

**Complet** - toute suite de Cauchy converge. \(\mathbb{R}\), \(\mathbb{C}\), \(\mathbb{R}^n\), tout evn de dimension finie, tout compact.

**Sous-espaces** - fermé dans un complet \(\Rightarrow\) complet ; complet \(\Rightarrow\) fermé.

**Espaces de fonctions** - \((\mathcal{B}(X, F), \|\cdot\|_\infty)\) complet si \(F\) l’est ; \((\mathcal{C}([a, b]), \|\cdot\|_\infty)\) complet ; \((\mathcal{C}([a, b]), \|\cdot\|_1)\) non complet.

**Banach** - evn complet. **Critère** - evn complet \(\iff\) toute série absolument convergente converge.

**Point fixe de Banach-Picard** - \(E\) complet, \(f\) \(k\)-contractante (\({k < 1}\)) : unique point fixe \(a\), \({x_{n+1} = f(x_n) \to a}\), \({d(x_n, a) \leq \dfrac{k^n}{1 - k}d(x_0, x_1)}\).

**Prolongement** - uniformément continue sur une partie dense, à valeurs dans un complet : prolongement continu unique.

**Baire** - dans un complet, une intersection dénombrable d’ouverts denses est dense.
{{% /fiche %}}
