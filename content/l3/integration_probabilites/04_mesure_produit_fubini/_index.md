---
title: 'Mesure produit et théorème de Fubini'
weight: 4
---

Tribu produit, mesure produit, théorèmes de Fubini-Tonelli et de Fubini, changement de variables, convolution.

{{< sommaire >}}

{{% fiche %}}
**Mesure produit** - \(\mu\), \(\nu\) \(\sigma\)-finies : unique mesure \({\mu \otimes \nu}\) telle que \({(\mu \otimes \nu)(A \times B) = \mu(A)\nu(B)}\). \({\lambda_{p+q} = \lambda_p \otimes \lambda_q}\).

**Fubini-Tonelli** - \(f\) mesurable **positive** : on intègre dans l’ordre que l’on veut, résultat dans \([0, +\infty]\).

**Fubini** - \(f\) **intégrable** pour \({\mu \otimes \nu}\) : les intégrales itérées existent et sont égales.

**En pratique** - (1) Tonelli sur \(|f|\) pour vérifier l’intégrabilité ; (2) Fubini pour calculer dans l’ordre le plus commode.

**Piège** - sans intégrabilité, les deux intégrales itérées peuvent exister et différer.

**Changement de variables** - \(\varphi\) \(\mathcal{C}^1\)-difféomorphisme de \(U\) sur \(V\) : \({\displaystyle\int_V f(y)\,\mathrm{d}y = \int_U f(\varphi(x))\,|\det J_\varphi(x)|\,\mathrm{d}x}\).

**Convolution** - \({(f * g)(x) = \displaystyle\int f(x - y)g(y)\,\mathrm{d}y}\) ; \({\|f * g\|_1 \leq \|f\|_1\|g\|_1}\) ; commutative, associative.

**Aire sous un graphe** - \({\displaystyle\int f\,\mathrm{d}\mu = \int_0^{+\infty} \mu(\{f > t\})\,\mathrm{d}t}\) pour \({f \geq 0}\).
{{% /fiche %}}
