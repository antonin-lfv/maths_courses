---
title: 'Espaces préhilbertiens et euclidiens'
weight: 4
---

Produit scalaire, norme, orthogonalité, procédé de Gram-Schmidt et projection orthogonale.

{{< sommaire >}}

{{% fiche %}}
**Produit scalaire** - forme bilinéaire symétrique définie positive ; \({\|x\| = \sqrt{\langle x, x\rangle}}\).

**Cauchy-Schwarz** - \({|\langle x, y\rangle| \leq \|x\|\|y\|}\), égalité \(\iff\) \(x\), \(y\) colinéaires.

**Identités** - \({\|x + y\|^2 = \|x\|^2 + 2\langle x, y\rangle + \|y\|^2}\) ; parallélogramme : \({\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2}\) ; Pythagore : \({x \perp y \iff \|x + y\|^2 = \|x\|^2 + \|y\|^2}\).

**Base orthonormée** - \({x = \displaystyle\sum \langle x, e_i\rangle e_i}\), \({\langle x, y\rangle = \sum x_iy_i}\), \({\|x\|^2 = \sum x_i^2}\).

**Gram-Schmidt** - \({u_k = v_k - \displaystyle\sum_{i < k} \langle v_k, e_i\rangle e_i}\), puis \({e_k = \dfrac{u_k}{\|u_k\|}}\).

**Orthogonal** - en dimension finie : \({E = F \oplus F^\perp}\), \({\dim F^\perp = n - \dim F}\), \({(F^\perp)^\perp = F}\).

**Projection orthogonale** - \({p_F(x) = \displaystyle\sum \langle x, e_i\rangle e_i}\) (\((e_i)\) base orthonormée de \(F\)) ; \({d(x, F) = \|x - p_F(x)\|}\).

**Hyperplan de normale \(a\)** - \({p(x) = x - \dfrac{\langle x, a\rangle}{\|a\|^2}a}\), \({d(x, H) = \dfrac{|\langle x, a\rangle|}{\|a\|}}\).
{{% /fiche %}}
