---
title: 'Polynômes et fractions rationnelles'
weight: 5
---

Degré, division euclidienne, racines et multiplicité, factorisation dans \(\mathbb{C}[X]\) et \(\mathbb{R}[X]\), décomposition en éléments simples.

{{< sommaire >}}

{{% fiche %}}
**Degré** - \({\deg(PQ) = \deg P + \deg Q}\) ; \({\deg(P + Q) \leq \max(\deg P, \deg Q)}\) ; \({\deg 0 = -\infty}\).

**Division euclidienne** - \({A = BQ + R}\) avec \({\deg R < \deg B}\), unique. Le reste de la division de \(P\) par \({X - a}\) est \(P(a)\).

**Racine** - \(a\) racine de \(P\) \(\iff\) \({(X - a) \mid P}\). Un polynôme non nul de degré \(n\) a au plus \(n\) racines comptées avec multiplicité.

**Multiplicité** - \(a\) est racine d’ordre \(m\) \(\iff\) \({P(a) = P'(a) = \dots = P^{(m-1)}(a) = 0}\) et \({P^{(m)}(a) \neq 0}\).

**Taylor** - \({P(X) = \displaystyle\sum_{k=0}^{n} \dfrac{P^{(k)}(a)}{k!}(X - a)^k}\).

**Irréductibles** - dans \(\mathbb{C}[X]\) : degré 1. Dans \(\mathbb{R}[X]\) : degré 1, et degré 2 avec \({\Delta < 0}\).

**Coefficients et racines** - pour \({P = a_n\prod (X - x_i)}\) : \({\sum x_i = -\dfrac{a_{n-1}}{a_n}}\), \({\prod x_i = (-1)^n\dfrac{a_0}{a_n}}\).

**Éléments simples** - partie entière par division euclidienne ; pôle simple \(a\) de \(\dfrac{P}{Q}\) : coefficient \(\dfrac{P(a)}{Q'(a)}\).
{{% /fiche %}}
