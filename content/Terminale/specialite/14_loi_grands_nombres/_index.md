---
title: 'Loi des grands nombres'
weight: 14
---
Cours du chapitre 14 : Loi des grands nombres.

{{< sommaire >}}

{{% fiche %}}
**Sommes** - \(X\), \(Y\) indépendantes : \(P(X = k, Y = \ell) = P(X = k)P(Y = \ell)\). Somme d’un échantillon de Bernoulli\((p)\) de taille \(n\) : loi \(\mathcal{B}(n ; p)\).

**Indicateurs** - \({E(X + Y) = E(X) + E(Y)}\) ; \({E(aX + b) = aE(X) + b}\) ; \({V(aX + b) = a^2V(X)}\) ; si \(X\), \(Y\) indépendantes : \({V(X + Y) = V(X) + V(Y)}\).

**Moyenne d’échantillon** - \({M_n = \dfrac{1}{n}(X_1 + \dots + X_n)}\) : \({E(M_n) = E(X)}\), \({V(M_n) = \dfrac{V(X)}{n}}\), \({\sigma(M_n) = \dfrac{\sigma(X)}{\sqrt n}}\).

**Inégalités** - Markov (\({X \geq 0}\)) : \({P(X \geq \delta) \leq \dfrac{E(X)}{\delta}}\) ; Bienaymé-Tchebychev : \({P(|X - E(X)| \geq \delta) \leq \dfrac{V(X)}{\delta^2}}\) ; concentration : \({P(|M_n - E(X)| \geq \delta) \leq \dfrac{V(X)}{n\delta^2}}\).

**Loi des grands nombres** - \({\lim\limits_{n \to +\infty} P(|M_n - E(X)| \geq \delta) = 0}\) pour tout \({\delta > 0}\).
{{% /fiche %}}
