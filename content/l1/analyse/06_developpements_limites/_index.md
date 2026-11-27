---
title: 'Développements limités'
weight: 6
---

Comparaison locale des fonctions, formules de Taylor, développements limités usuels et applications.

{{< sommaire >}}

{{% fiche %}}
**Taylor-Young** - si \(f\) est \(n\) fois dérivable en \(a\) : \({f(a + h) = \displaystyle\sum_{k=0}^{n} \dfrac{f^{(k)}(a)}{k!}h^k + o(h^n)}\).

**DL usuels en 0**
- \({e^x = 1 + x + \dfrac{x^2}{2!} + \dots + \dfrac{x^n}{n!} + o(x^n)}\)
- \({\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} + o(x^5)}\) ; \({\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} + o(x^6)}\)
- \({\operatorname{ch} x = 1 + \dfrac{x^2}{2} + \dfrac{x^4}{24} + o(x^5)}\) ; \({\operatorname{sh} x = x + \dfrac{x^3}{6} + o(x^4)}\)
- \({\dfrac{1}{1 - x} = 1 + x + x^2 + \dots + x^n + o(x^n)}\)
- \({\ln(1 + x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dots + (-1)^{n-1}\dfrac{x^n}{n} + o(x^n)}\)
- \({(1 + x)^\alpha = 1 + \alpha x + \dfrac{\alpha(\alpha - 1)}{2}x^2 + o(x^2)}\) ; \({\sqrt{1 + x} = 1 + \dfrac{x}{2} - \dfrac{x^2}{8} + o(x^2)}\)
- \({\tan x = x + \dfrac{x^3}{3} + o(x^4)}\) ; \({\arctan x = x - \dfrac{x^3}{3} + o(x^4)}\)

**Opérations** - somme, produit (tronquer), composition (si \({u(0) = 0}\)), primitive terme à terme. Ne jamais dériver un DL sans justification.

**Applications** - limites, équivalents, position par rapport à la tangente, asymptotes (poser \({h = \dfrac{1}{x}}\)).
{{% /fiche %}}
