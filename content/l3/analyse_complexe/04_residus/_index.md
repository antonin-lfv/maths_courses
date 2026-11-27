---
title: 'Singularités et théorème des résidus'
weight: 4
---

Séries de Laurent, classification des singularités, résidus et calcul d’intégrales réelles.

{{< sommaire >}}

{{% fiche %}}
**Série de Laurent** - sur une couronne : \({f(z) = \displaystyle\sum_{n \in \mathbb{Z}} a_n(z - a)^n}\) ; partie principale : termes d’indice \({n < 0}\).

**Singularité isolée** - **effaçable** : \(f\) bornée près de \(a\) (pas de partie principale) ; **pôle d’ordre \(m\)** : \({|f(z)| \to +\infty}\), \({(z - a)^mf(z)}\) a une limite finie non nulle ; **essentielle** : ni l’un ni l’autre.

**Résidu** - \({\operatorname{Res}(f, a) = a_{-1}}\).

**Pôle simple** - \({\operatorname{Res}(f, a) = \lim_{z \to a} (z - a)f(z)}\) ; si \({f = \dfrac{g}{h}}\), \({h(a) = 0}\), \({h'(a) \neq 0}\) : \({\operatorname{Res} = \dfrac{g(a)}{h'(a)}}\).

**Pôle d’ordre \(m\)** - \({\operatorname{Res}(f, a) = \dfrac{1}{(m-1)!}\lim_{z \to a} \dfrac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}}\big[(z - a)^mf(z)\big]}\).

**Théorème des résidus** - \({\displaystyle\int_\gamma f(z)\,\mathrm{d}z = 2i\pi\sum_{a \text{ intérieur}} \operatorname{Res}(f, a)}\) (lacet simple, sens direct).

**Intégrales réelles** - \({\displaystyle\int_{-\infty}^{+\infty} R(x)\,\mathrm{d}x}\) : demi-cercle supérieur, \({2i\pi\sum_{\mathrm{Im}\,a > 0} \operatorname{Res}}\) (si \({\deg Q \geq \deg P + 2}\)) ; \({\displaystyle\int_0^{2\pi} R(\cos\theta, \sin\theta)\,\mathrm{d}\theta}\) : poser \({z = e^{i\theta}}\) ; \({\displaystyle\int R(x)e^{ix}\,\mathrm{d}x}\) : lemme de Jordan.

**Principe de l’argument** - \({\dfrac{1}{2i\pi}\displaystyle\int_\gamma \dfrac{f'}{f} = \text{zéros} - \text{pôles}}\) (avec multiplicités).
{{% /fiche %}}
