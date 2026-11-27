---
title: 'Courbes paramétrées'
weight: 9
---

Étude et tracé d’une courbe plane définie par un paramétrage \({t \mapsto (x(t), y(t))}\).

{{< sommaire >}}

{{% fiche %}}
**Point régulier** - \({(x'(t_0), y'(t_0)) \neq (0, 0)}\) : ce vecteur dirige la tangente. Tangente horizontale si \({y'(t_0) = 0}\), verticale si \({x'(t_0) = 0}\).

**Point singulier** - \({x'(t_0) = y'(t_0) = 0}\) : la tangente est dirigée par le premier vecteur dérivé non nul ; pente \({\lim \dfrac{y(t) - y(t_0)}{x(t) - x(t_0)}}\).

**Nature d’un point** - \(p\) : premier ordre où le vecteur dérivé est non nul ; \(q\) : premier ordre suivant donnant un vecteur non colinéaire. \(p\) impair, \(q\) pair : point ordinaire ; \(p\) impair, \(q\) impair : inflexion ; \(p\) pair, \(q\) impair : rebroussement de première espèce ; \(p\) pair, \(q\) pair : rebroussement de seconde espèce.

**Symétries** - comparer \({M(-t)}\), \({M(1/t)}\), \({M(t + T)}\) à \(M(t)\) pour réduire l’intervalle d’étude.

**Branches infinies** - \({x \to \pm\infty}\), \({y \to b}\) : asymptote \({y = b}\) ; \({\dfrac{y}{x} \to a}\) puis \({y - ax \to b}\) : asymptote \({y = ax + b}\).

**Longueur** - \({L = \displaystyle\int_a^b \sqrt{x'(t)^2 + y'(t)^2}\,\mathrm{d}t}\).
{{% /fiche %}}
