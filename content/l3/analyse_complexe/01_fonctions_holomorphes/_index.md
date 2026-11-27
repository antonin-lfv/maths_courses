---
title: 'Fonctions holomorphes'
weight: 1
---

Dérivabilité au sens complexe, équations de Cauchy-Riemann, exponentielle et logarithme complexes.

{{< sommaire >}}

{{% fiche %}}
**Holomorphe** - \({f'(z_0) = \lim_{h \to 0} \dfrac{f(z_0 + h) - f(z_0)}{h}}\) avec \({h \in \mathbb{C}}\). Mêmes règles de dérivation que dans \(\mathbb{R}\).

**Cauchy-Riemann** - \({f = P + iQ}\) holomorphe \(\iff\) \(f\) différentiable (au sens réel) et \({\dfrac{\partial P}{\partial x} = \dfrac{\partial Q}{\partial y}}\), \({\dfrac{\partial P}{\partial y} = -\dfrac{\partial Q}{\partial x}}\). Alors \({f' = \dfrac{\partial f}{\partial x} = -i\dfrac{\partial f}{\partial y}}\).

**Non holomorphes** - \(\overline{z}\), \(\mathrm{Re}(z)\), \(|z|\), \(|z|^2\) (dérivable seulement en \(0\)).

**Conséquences** - sur un ouvert connexe : \({f' = 0}\), ou \(f\) réelle, ou \(|f|\) constant \(\Rightarrow\) \(f\) constante. \(P\) et \(Q\) sont harmoniques.

**Exponentielle** - \({e^{x + iy} = e^x(\cos y + i\sin y)}\), entière, \({(e^z)' = e^z}\), \(2i\pi\)-périodique, jamais nulle.

**Logarithme principal** - \({\operatorname{Log} z = \ln|z| + i\operatorname{Arg} z}\), \({\operatorname{Arg} z \in\, ]-\pi, \pi[}\), holomorphe sur \({\mathbb{C} \setminus \mathbb{R}_-}\), de dérivée \(\dfrac{1}{z}\). Attention : \({\operatorname{Log}(zw) \neq \operatorname{Log} z + \operatorname{Log} w}\) en général.

**Puissances** - \({z^\alpha = e^{\alpha\operatorname{Log} z}}\).
{{% /fiche %}}
