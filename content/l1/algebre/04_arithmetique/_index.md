---
title: 'Arithmétique dans ℤ'
weight: 4
---

Division euclidienne, PGCD, théorèmes de Bézout et de Gauss, nombres premiers et congruences.

{{< sommaire >}}

{{% fiche %}}
**Division euclidienne** - pour \({a \in \mathbb{Z}}\), \({b \in \mathbb{N}^*}\), il existe un unique couple \((q, r)\) tel que \({a = bq + r}\) et \({0 \leq r < b}\).

**Algorithme d’Euclide** - \({\operatorname{pgcd}(a, b) = \operatorname{pgcd}(b, r)}\) ; le PGCD est le dernier reste non nul.

**Bézout** - \({\operatorname{pgcd}(a, b) = 1 \iff \exists (u, v) \in \mathbb{Z}^2,\ au + bv = 1}\). En général, \({au + bv = d}\) a des solutions si et seulement si \(\operatorname{pgcd}(a, b)\) divise \(d\).

**Gauss** - si \({a \mid bc}\) et \({\operatorname{pgcd}(a, b) = 1}\), alors \({a \mid c}\).

**PPCM** - \({\operatorname{pgcd}(a, b) \times \operatorname{ppcm}(a, b) = |ab|}\).

**Nombres premiers** - il y en a une infinité ; tout entier \({n \geq 2}\) s’écrit de façon unique \({n = p_1^{\alpha_1} \cdots p_k^{\alpha_k}}\).

**Congruences** - compatibles avec \(+\) et \(\times\) ; \(a\) est inversible modulo \(n\) si et seulement si \({\operatorname{pgcd}(a, n) = 1}\).

**Petit théorème de Fermat** - \(p\) premier : \({a^p \equiv a \ [p]}\) ; si \(p\) ne divise pas \(a\), \({a^{p-1} \equiv 1 \ [p]}\).
{{% /fiche %}}
