---
title: 'Dérivabilité'
weight: 4
---

Nombre dérivé, théorème de Rolle, accroissements finis, dérivées successives et convexité.

{{< sommaire >}}

{{% fiche %}}
**Dérivabilité** - \({f'(a) = \lim_{h \to 0} \dfrac{f(a + h) - f(a)}{h}}\) \(\iff\) \({f(a + h) = f(a) + hf'(a) + o(h)}\). Dérivable \(\Rightarrow\) continue.

**Formules** - \({(fg)' = f'g + fg'}\) ; \({\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}}\) ; \({(g \circ f)' = f' \times g' \circ f}\) ; \({(f^{-1})' = \dfrac{1}{f' \circ f^{-1}}}\).

**Extremum local** - en un point intérieur où \(f\) est dérivable : \({f'(a) = 0}\) (condition nécessaire, non suffisante).

**Rolle** - \(f\) continue sur \([a, b]\), dérivable sur \({]a, b[}\), \({f(a) = f(b)}\) : il existe \(c\) tel que \({f'(c) = 0}\).

**Accroissements finis** - il existe \({c \in\, ]a, b[}\) tel que \({f(b) - f(a) = f'(c)(b - a)}\). Si \({|f'| \leq k}\) : \({|f(x) - f(y)| \leq k|x - y|}\).

**Variations** - sur un intervalle : \({f' \geq 0}\) \(\iff\) \(f\) croissante ; \({f' = 0}\) \(\iff\) \(f\) constante.

**Leibniz** - \({(fg)^{(n)} = \displaystyle\sum_{k=0}^{n} \dbinom{n}{k} f^{(k)} g^{(n-k)}}\).

**Convexité** - \(f\) deux fois dérivable : convexe \(\iff\) \({f'' \geq 0}\) ; courbe au-dessus des tangentes, sous les cordes.
{{% /fiche %}}
