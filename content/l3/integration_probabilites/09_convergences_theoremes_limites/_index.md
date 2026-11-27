---
title: 'Convergences et théorèmes limites'
weight: 9
---

Modes de convergence des variables aléatoires, loi forte des grands nombres, théorème central limite.

{{< sommaire >}}

{{% fiche %}}
**Presque sûre** - \({P(X_n \to X) = 1}\). **En probabilité** - \({P(|X_n - X| > \varepsilon) \to 0}\). **Dans \(L^p\)** - \({E(|X_n - X|^p) \to 0}\). **En loi** - \({E(g(X_n)) \to E(g(X))}\) pour toute \(g\) continue bornée.

**Implications** - p.s. \(\Rightarrow\) en probabilité ; \(L^p\) \(\Rightarrow\) en probabilité ; en probabilité \(\Rightarrow\) en loi ; en probabilité \(\Rightarrow\) p.s. pour une **sous-suite**.

**Vers une constante** - convergence en loi \(\iff\) en probabilité.

**Convergence en loi** - \(\iff\) \({F_{X_n}(t) \to F_X(t)}\) aux points de continuité de \(F_X\) \(\iff\) \({\varphi_{X_n}(t) \to \varphi_X(t)}\) pour tout \(t\) (Lévy).

**Loi forte des grands nombres** - \((X_n)\) i.i.d. intégrables : \({\overline{X}_n \to E(X_1)}\) presque sûrement.

**Théorème central limite** - \((X_n)\) i.i.d., variance \({\sigma^2 > 0}\) : \({\dfrac{S_n - nm}{\sigma\sqrt{n}}}\) converge en loi vers \(\mathcal{N}(0, 1)\).

**Slutsky** - \({X_n \to X}\) en loi et \({Y_n \to c}\) en probabilité : \({X_n + Y_n \to X + c}\), \({X_nY_n \to cX}\) en loi.

**Méthode delta** - \({\sqrt{n}(T_n - \theta) \to \mathcal{N}(0, \sigma^2)}\) : \({\sqrt{n}(g(T_n) - g(\theta)) \to \mathcal{N}(0, g'(\theta)^2\sigma^2)}\).
{{% /fiche %}}
