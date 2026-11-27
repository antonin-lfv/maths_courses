---
title: 'Applications linéaires'
weight: 9
---

Noyau, image, théorème du rang, projecteurs et symétries.

{{< sommaire >}}

{{% fiche %}}
**Linéarité** - \({f(\lambda u + v) = \lambda f(u) + f(v)}\) ; alors \({f(0_E) = 0_F}\).

**Noyau, image** - \({\ker f = \{u \in E,\ f(u) = 0_F\}}\), \({\operatorname{Im} f = f(E)}\) : ce sont des sous-espaces. \(f\) injective \(\iff\) \({\ker f = \{0_E\}}\) ; \(f\) surjective \(\iff\) \({\operatorname{Im} f = F}\).

**Image d’une base** - \({\operatorname{Im} f = \operatorname{Vect}(f(e_1), \dots, f(e_n))}\). Une application linéaire est déterminée par les images des vecteurs d’une base.

**Théorème du rang** - \({\dim E = \dim \ker f + \operatorname{rg} f}\).

**Même dimension finie** - si \({\dim E = \dim F}\) : injective \(\iff\) surjective \(\iff\) bijective.

**Projecteur** - \({p \circ p = p}\) ; alors \({E = \ker p \oplus \operatorname{Im} p}\) et \({\operatorname{Im} p = \ker(p - \mathrm{id})}\).

**Symétrie** - \({s \circ s = \mathrm{id}}\) ; alors \({E = \ker(s - \mathrm{id}) \oplus \ker(s + \mathrm{id})}\) et \({s = 2p - \mathrm{id}}\).
{{% /fiche %}}
