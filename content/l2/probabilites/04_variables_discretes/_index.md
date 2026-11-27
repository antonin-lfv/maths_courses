---
title: 'Variables aléatoires discrètes'
weight: 4
---

Loi, espérance, variance, lois usuelles, couples de variables et indépendance.

{{< sommaire >}}

{{% fiche %}}
**Espérance** - \({E(X) = \sum x\,P(X = x)}\) (si convergence absolue) ; linéaire. **Transfert** - \({E(g(X)) = \sum g(x)P(X = x)}\).

**Variance** - \({V(X) = E\big((X - E(X))^2\big) = E(X^2) - E(X)^2}\) ; \({V(aX + b) = a^2V(X)}\).

| Loi | \(P(X = k)\) | \(E(X)\) | \(V(X)\) |
|---|---|---|---|
| Bernoulli \(\mathcal{B}(p)\) | \(p\), \({1 - p}\) | \(p\) | \({p(1-p)}\) |
| Binomiale \(\mathcal{B}(n, p)\) | \({\dbinom{n}{k}p^k(1-p)^{n-k}}\) | \(np\) | \({np(1-p)}\) |
| Uniforme sur \({\{1, \dots, n\}}\) | \(\dfrac{1}{n}\) | \(\dfrac{n+1}{2}\) | \(\dfrac{n^2-1}{12}\) |
| Géométrique \(\mathcal{G}(p)\) | \({(1-p)^{k-1}p}\), \({k \geq 1}\) | \(\dfrac{1}{p}\) | \(\dfrac{1-p}{p^2}\) |
| Poisson \(\mathcal{P}(\lambda)\) | \({e^{-\lambda}\dfrac{\lambda^k}{k!}}\), \({k \geq 0}\) | \(\lambda\) | \(\lambda\) |

**Indépendance** - \({P(X = x, Y = y) = P(X = x)P(Y = y)}\) ; alors \({E(XY) = E(X)E(Y)}\) et \({V(X + Y) = V(X) + V(Y)}\).

**Covariance** - \({\operatorname{Cov}(X, Y) = E(XY) - E(X)E(Y)}\) ; \({V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y)}\).

**Fonction génératrice** - \({G_X(t) = E(t^X) = \sum P(X = k)t^k}\) ; \({E(X) = G_X'(1)}\) ; \({G_{X+Y} = G_XG_Y}\) si indépendantes.
{{% /fiche %}}
