---
title: 'Loi des grands nombres et théorème central limite'
weight: 6
---

Inégalités de Markov et de Bienaymé-Tchebychev, loi des grands nombres, théorème central limite et intervalles de confiance.

{{< sommaire >}}

{{% fiche %}}
**Markov** - \({X \geq 0}\), \({a > 0}\) : \({P(X \geq a) \leq \dfrac{E(X)}{a}}\).

**Bienaymé-Tchebychev** - \({P(|X - E(X)| \geq \varepsilon) \leq \dfrac{V(X)}{\varepsilon^2}}\).

**Moyenne empirique** - \({\overline{X}_n = \dfrac{X_1 + \dots + X_n}{n}}\) ; \({E(\overline{X}_n) = m}\), \({V(\overline{X}_n) = \dfrac{\sigma^2}{n}}\).

**Loi faible des grands nombres** - \({P(|\overline{X}_n - m| \geq \varepsilon) \leq \dfrac{\sigma^2}{n\varepsilon^2} \to 0}\).

**Théorème central limite** - \({\dfrac{\sqrt{n}(\overline{X}_n - m)}{\sigma}}\) converge en loi vers \(\mathcal{N}(0, 1)\) : \({P\left(a \leq \dfrac{S_n - nm}{\sigma\sqrt{n}} \leq b\right) \to \Phi(b) - \Phi(a)}\).

**Moivre-Laplace** - \({S_n \sim \mathcal{B}(n, p)}\) : \({S_n \approx \mathcal{N}(np, np(1-p))}\) pour \(n\) grand.

**Intervalle de confiance à 95 % pour une proportion** - \({\left[F_n - \dfrac{1}{\sqrt{n}},\ F_n + \dfrac{1}{\sqrt{n}}\right]}\) (ou \({F_n \pm 1{,}96\sqrt{\dfrac{F_n(1 - F_n)}{n}}}\)).
{{% /fiche %}}
