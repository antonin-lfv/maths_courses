---
title: 'Séries entières'
weight: 4
---

Rayon de convergence, régularité de la somme et développements en série entière usuels.

{{< sommaire >}}

{{% fiche %}}
**Rayon** - \({R = \sup\{r \geq 0,\ (a_nr^n) \text{ bornée}\}}\) : convergence absolue si \({|z| < R}\), divergence grossière si \({|z| > R}\), tout est possible si \({|z| = R}\).

**Calcul** - d’Alembert : \({\left|\dfrac{a_{n+1}}{a_n}\right| \to \ell \Rightarrow R = \dfrac{1}{\ell}}\) ; comparaison : \({|a_n| \leq |b_n| \Rightarrow R_a \geq R_b}\), \({a_n \sim b_n \Rightarrow R_a = R_b}\) ; \(\sum a_nz^n\) et \(\sum na_nz^n\) ont le même rayon.

**Régularité** - convergence normale sur tout disque fermé de rayon \({r < R}\) ; somme \(\mathcal{C}^\infty\) sur \({]-R, R[}\), dérivable et intégrable terme à terme ; \({a_n = \dfrac{f^{(n)}(0)}{n!}}\).

**DSE usuels**
- \({e^x = \sum \dfrac{x^n}{n!}}\), \({\cos x = \sum \dfrac{(-1)^nx^{2n}}{(2n)!}}\), \({\sin x = \sum \dfrac{(-1)^nx^{2n+1}}{(2n+1)!}}\) : \({R = +\infty}\)
- \({\dfrac{1}{1 - x} = \sum x^n}\), \({\ln(1 + x) = \sum_{n \geq 1} \dfrac{(-1)^{n-1}x^n}{n}}\), \({\arctan x = \sum \dfrac{(-1)^nx^{2n+1}}{2n+1}}\) : \({R = 1}\)
- \({(1 + x)^\alpha = 1 + \sum_{n \geq 1} \dfrac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!}x^n}\) : \({R = 1}\) (si \({\alpha \notin \mathbb{N}}\))
{{% /fiche %}}
