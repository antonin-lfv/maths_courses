---
title: 'Espaces de Hilbert'
weight: 6
---

Projection sur un convexe fermé, théorème de représentation de Riesz, bases hilbertiennes.

{{< sommaire >}}

{{% fiche %}}
**Hilbert** - espace préhilbertien **complet** pour la norme \({\|x\| = \sqrt{\langle x, x\rangle}}\). Exemples : \(\mathbb{R}^n\), \(\ell^2\), \(L^2(\mu)\).

**Parallélogramme** - \({\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2}\).

**Projection sur un convexe fermé \(C\)** - unique \({p \in C}\) réalisant \({d(x, C)}\) ; caractérisé par \({\langle x - p, y - p\rangle \leq 0}\) pour tout \({y \in C}\) ; \(1\)-lipschitzienne.

**Sous-espace fermé \(F\)** - \({x - p_F(x) \perp F}\) ; \({H = F \oplus F^\perp}\) ; \({(F^\perp)^\perp = F}\) ; en général \({(F^\perp)^\perp = \overline{F}}\).

**Densité** - \(F\) dense \(\iff\) \({F^\perp = \{0\}}\).

**Riesz** - toute forme linéaire continue s’écrit \({\varphi = \langle a, \cdot\rangle}\), avec \(a\) unique et \({\|\varphi\| = \|a\|}\).

**Base hilbertienne \((e_n)\)** - orthonormée et totale : \({x = \sum \langle e_n, x\rangle e_n}\) et **Parseval** \({\|x\|^2 = \sum |\langle e_n, x\rangle|^2}\). **Bessel** (famille orthonormée) : \({\sum |\langle e_n, x\rangle|^2 \leq \|x\|^2}\).

**Fourier** - \({(e^{inx})_{n \in \mathbb{Z}}}\) est une base hilbertienne de \(L^2\) du cercle.
{{% /fiche %}}
