---
title: 'Variables aléatoires à densité'
weight: 5
---

Densité, fonction de répartition, espérance, lois uniforme, exponentielle et normale.

{{< sommaire >}}

{{% fiche %}}
**Densité** - \({f \geq 0}\), \({\displaystyle\int_{-\infty}^{+\infty} f = 1}\) ; \({P(a \leq X \leq b) = \displaystyle\int_a^b f}\) ; \({P(X = a) = 0}\).

**Répartition** - \({F(x) = P(X \leq x) = \displaystyle\int_{-\infty}^{x} f}\), continue, \({F' = f}\) là où \(f\) est continue.

**Espérance** - \({E(X) = \displaystyle\int xf(x)\,\mathrm{d}x}\) ; transfert : \({E(g(X)) = \displaystyle\int g(x)f(x)\,\mathrm{d}x}\) ; \({V(X) = E(X^2) - E(X)^2}\).

| Loi | Densité | \(E(X)\) | \(V(X)\) |
|---|---|---|---|
| Uniforme \(\mathcal{U}([a, b])\) | \(\dfrac{1}{b-a}\) sur \([a, b]\) | \(\dfrac{a+b}{2}\) | \(\dfrac{(b-a)^2}{12}\) |
| Exponentielle \(\mathcal{E}(\lambda)\) | \({\lambda e^{-\lambda x}}\) sur \(\mathbb{R}_+\) | \(\dfrac{1}{\lambda}\) | \(\dfrac{1}{\lambda^2}\) |
| Normale \(\mathcal{N}(m, \sigma^2)\) | \({\dfrac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-m)^2}{2\sigma^2}}}\) | \(m\) | \(\sigma^2\) |

**Exponentielle** - \({P(X > t) = e^{-\lambda t}}\), sans mémoire.

**Normale** - \({X \sim \mathcal{N}(m, \sigma^2) \iff \dfrac{X - m}{\sigma} \sim \mathcal{N}(0, 1)}\) ; \({\Phi(-x) = 1 - \Phi(x)}\) ; \({P(|X - m| \leq 1{,}96\sigma) \approx 0{,}95}\).

**Loi de \({Y = g(X)}\)** - passer par la fonction de répartition de \(Y\), puis dériver.
{{% /fiche %}}
