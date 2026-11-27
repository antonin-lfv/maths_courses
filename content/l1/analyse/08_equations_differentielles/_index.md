---
title: 'Équations différentielles linéaires'
weight: 8
---

Équations linéaires du premier ordre, et du second ordre à coefficients constants.

{{< sommaire >}}

{{% fiche %}}
**Structure** - solution générale = solution particulière + solution générale de l’équation homogène.

**Ordre 1 homogène** - \({y' + a(x)y = 0}\) : \({y = \lambda e^{-A(x)}}\), \(A\) primitive de \(a\).

**Variation de la constante** - chercher \({y_p = \lambda(x)e^{-A(x)}}\) : \({\lambda'(x) = b(x)e^{A(x)}}\).

**Cauchy (ordre 1)** - une unique solution vérifie \({y(x_0) = y_0}\).

**Ordre 2 homogène** - \({ay'' + by' + cy = 0}\), équation caractéristique \({ar^2 + br + c = 0}\) :
- \({\Delta > 0}\) : \({y = \lambda e^{r_1 x} + \mu e^{r_2 x}}\) ;
- \({\Delta = 0}\) : \({y = (\lambda x + \mu)e^{r x}}\) ;
- \({\Delta < 0}\), racines \({\alpha \pm i\beta}\) : \({y = e^{\alpha x}(\lambda\cos\beta x + \mu\sin\beta x)}\).

**Second membre \({P(x)e^{mx}}\)** - chercher \({y_p = x^k Q(x)e^{mx}}\), \({\deg Q = \deg P}\), \(k\) = multiplicité de \(m\) comme racine de l’équation caractéristique (0, 1 ou 2).

**Second membre en cos ou sin** - passer en complexes : \({\cos(\omega x) = \mathrm{Re}(e^{i\omega x})}\).

**Superposition** - second membre \({f_1 + f_2}\) : ajouter une solution particulière pour \(f_1\) et une pour \(f_2\).
{{% /fiche %}}
