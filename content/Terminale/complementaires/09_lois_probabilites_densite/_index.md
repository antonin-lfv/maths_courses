---
title: 'Lois de probabilités à densité'
weight: 9
---
Cours du chapitre 9 : Lois de probabilités à densité.

{{< sommaire >}}

{{% fiche %}}
**Densité** - \(f\) continue, positive sur le support \(I\), nulle ailleurs, d’aire totale 1 ; \({P(a \leq X \leq b) = \int_a^b f(x)\,\mathrm{d}x}\) ; \({P(X = a) = 0}\) (inégalités larges ou strictes équivalentes).

**Fonction de répartition** - \({F(t) = P(X \leq t)}\) ; \({P(a \leq X \leq b) = F(b) - F(a)}\) ; \({F' = f}\) là où \(f\) est continue.

**Indicateurs** - \({E(X) = \int_a^b xf(x)\,\mathrm{d}x}\), \({V(X) = \int_a^b (x - E(X))^2f(x)\,\mathrm{d}x}\), \({\sigma = \sqrt{V}}\) (limites si le support est non borné).

**Loi uniforme** \(\mathcal{U}([a\,;\,b])\) - \({f(x) = \dfrac{1}{b - a}}\) ; \({P(c \leq X \leq d) = \dfrac{d - c}{b - a}}\) ; \({E = \dfrac{a + b}{2}}\), \({V = \dfrac{(b - a)^2}{12}}\).

**Loi exponentielle** \(\mathcal{E}(\lambda)\) - \({f(x) = \lambda e^{-\lambda x}}\) sur \({[0\,;\,+\infty[}\) ; \({F(t) = 1 - e^{-\lambda t}}\), \({P(X > t) = e^{-\lambda t}}\) ; sans mémoire ; \({E = \sigma = \dfrac{1}{\lambda}}\), \({V = \dfrac{1}{\lambda^2}}\).
{{% /fiche %}}
