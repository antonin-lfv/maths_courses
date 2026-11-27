---
title: 'Équations différentielles : théorème de Cauchy-Lipschitz'
weight: 9
---

Problème de Cauchy, existence et unicité, solutions maximales, lemme de Gronwall et systèmes linéaires.

{{< sommaire >}}

{{% fiche %}}
**Problème de Cauchy** - \({y' = f(t, y)}\), \({y(t_0) = y_0}\) \(\iff\) \({y(t) = y_0 + \displaystyle\int_{t_0}^{t} f(s, y(s))\,\mathrm{d}s}\).

**Ordre \(n\)** - se ramène à l’ordre \(1\) avec \({Y = (y, y', \dots, y^{(n-1)})}\).

**Cauchy-Lipschitz** - \(f\) continue et localement lipschitzienne en \(y\) (par exemple \(\mathcal{C}^1\)) : existence et unicité locales ; une unique solution **maximale**.

**Conséquence** - deux courbes intégrales distinctes ne se coupent jamais.

**Explosion** - solution maximale sur \({]\alpha, \beta[}\) avec \({\beta < +\infty}\) : \({\|y(t)\| \to +\infty}\) quand \({t \to \beta}\) (sortie de tout compact).

**Globale** - \(f\) globalement lipschitzienne en \(y\), ou \({\|f(t, y)\| \leq a(t)\|y\| + b(t)}\) : solutions définies sur tout l’intervalle. Cas **linéaire** : toujours globales.

**Gronwall** - \({u(t) \leq C + \displaystyle\int_{t_0}^{t} a(s)u(s)\,\mathrm{d}s}\) avec \({a \geq 0}\) \(\Rightarrow\) \({u(t) \leq C\exp\left(\displaystyle\int_{t_0}^{t} a\right)}\).

**Linéaire \({Y' = A(t)Y + B(t)}\)** - espace affine de dimension \(n\) ; \(A\) constante : \({Y(t) = e^{(t - t_0)A}Y_0}\) ; wronskien : \({W' = \operatorname{tr}(A(t))W}\).
{{% /fiche %}}
