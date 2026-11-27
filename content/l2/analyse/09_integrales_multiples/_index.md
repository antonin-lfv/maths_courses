---
title: 'Intégrales multiples'
weight: 9
---

Intégrales doubles et triples : théorème de Fubini, changement de variables, coordonnées polaires, cylindriques et sphériques.

{{< sommaire >}}

{{% fiche %}}
**Fubini sur un rectangle** - \({\displaystyle\iint_{[a,b] \times [c,d]} f = \int_a^b\left(\int_c^d f(x, y)\,\mathrm{d}y\right)\mathrm{d}x = \int_c^d\left(\int_a^b f(x, y)\,\mathrm{d}x\right)\mathrm{d}y}\).

**Variables séparées** - \({\displaystyle\iint g(x)h(y)\,\mathrm{d}x\,\mathrm{d}y = \int_a^b g \times \int_c^d h}\).

**Domaine \({\{a \leq x \leq b,\ \varphi(x) \leq y \leq \psi(x)\}}\)** - \({\displaystyle\iint_D f = \int_a^b\left(\int_{\varphi(x)}^{\psi(x)} f(x, y)\,\mathrm{d}y\right)\mathrm{d}x}\).

**Changement de variables** - \({\displaystyle\iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \iint_\Delta f(\Phi(u, v))\,|\det J_\Phi(u, v)|\,\mathrm{d}u\,\mathrm{d}v}\).

**Polaires** - \({\mathrm{d}x\,\mathrm{d}y = r\,\mathrm{d}r\,\mathrm{d}\theta}\). **Cylindriques** - \({r\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}z}\). **Sphériques** - \({r^2\sin\varphi\,\mathrm{d}r\,\mathrm{d}\varphi\,\mathrm{d}\theta}\) (\(\varphi\) colatitude).

**Aire, volume** - \({\operatorname{Aire}(D) = \displaystyle\iint_D 1}\) ; \({\operatorname{Vol}(V) = \iiint_V 1}\).

**Gauss** - \({\displaystyle\int_{-\infty}^{+\infty} e^{-x^2}\,\mathrm{d}x = \sqrt{\pi}}\).
{{% /fiche %}}
