---
title: 'Intégrale sur un segment'
weight: 7
---

Construction de l’intégrale, théorème fondamental de l’analyse, intégration par parties, changement de variable et sommes de Riemann.

{{< sommaire >}}

{{% fiche %}}
**Propriétés** - linéarité, relation de Chasles, positivité, croissance ; \({\left|\displaystyle\int_a^b f\right| \leq \displaystyle\int_a^b |f|}\) pour \({a \leq b}\).

**Nullité** - \(f\) continue, positive sur \([a, b]\) et \({\displaystyle\int_a^b f = 0}\) : \(f\) est nulle.

**Théorème fondamental** - \(f\) continue sur \(I\) : \({x \mapsto \displaystyle\int_a^x f(t)\,\mathrm{d}t}\) est l’unique primitive de \(f\) nulle en \(a\) ; \({\displaystyle\int_a^b f = F(b) - F(a)}\).

**Par parties** - \({\displaystyle\int_a^b u'v = [uv]_a^b - \int_a^b uv'}\) (\(u\), \(v\) de classe \(\mathcal{C}^1\)).

**Changement de variable** - \({\displaystyle\int_a^b f(\varphi(t))\varphi'(t)\,\mathrm{d}t = \int_{\varphi(a)}^{\varphi(b)} f(x)\,\mathrm{d}x}\) (\(\varphi\) de classe \(\mathcal{C}^1\)).

**Sommes de Riemann** - \({\dfrac{b - a}{n}\displaystyle\sum_{k=0}^{n-1} f\left(a + k\dfrac{b - a}{n}\right) \to \int_a^b f}\) ; sur \([0, 1]\) : \({\dfrac{1}{n}\displaystyle\sum_{k=1}^{n} f\left(\dfrac{k}{n}\right) \to \int_0^1 f}\).

**Valeur moyenne** - \({\dfrac{1}{b - a}\displaystyle\int_a^b f}\) ; **Cauchy-Schwarz** - \({\left(\displaystyle\int_a^b fg\right)^2 \leq \int_a^b f^2 \int_a^b g^2}\).

**Fractions rationnelles** - décomposer en éléments simples ; \({\dfrac{1}{x - a} \to \ln|x - a|}\), \({\dfrac{1}{x^2 + a^2} \to \dfrac{1}{a}\arctan\dfrac{x}{a}}\).
{{% /fiche %}}
