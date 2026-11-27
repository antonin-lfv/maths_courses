---
title: 'Différentielle'
weight: 6
---

Différentiabilité dans les espaces vectoriels normés, règle de la chaîne, inégalité des accroissements finis.

{{< sommaire >}}

{{% fiche %}}
**Différentiable en \(a\)** - \({f(a + h) = f(a) + L(h) + o(\|h\|)}\) avec \(L\) linéaire **continue** ; \({L = \mathrm{d}f(a)}\).

**Dérivée directionnelle** - \({\mathrm{d}f(a)(h) = \lim_{t \to 0} \dfrac{f(a + th) - f(a)}{t}}\). L’existence de toutes les dérivées directionnelles n’entraîne pas la différentiabilité.

**Exemples** - constante : \(0\) ; linéaire continue \(u\) : \({\mathrm{d}u(a) = u}\) ; bilinéaire continue \(B\) : \({\mathrm{d}B(a, b)(h, k) = B(h, b) + B(a, k)}\).

**Chaîne** - \({\mathrm{d}(g \circ f)(a) = \mathrm{d}g(f(a)) \circ \mathrm{d}f(a)}\) ; jacobiennes : \({J_{g \circ f}(a) = J_g(f(a))J_f(a)}\).

**Classe \(\mathcal{C}^1\)** - \({a \mapsto \mathrm{d}f(a)}\) continue ; en dimension finie : dérivées partielles continues.

**Accroissements finis** - \({\|\mathrm{d}f\| \leq M}\) sur un convexe : \({\|f(b) - f(a)\| \leq M\|b - a\|}\). Pas d’égalité des accroissements finis à valeurs vectorielles.

**Conséquence** - différentielle nulle sur un ouvert connexe : \(f\) constante.

**Matrices** - \({\mathrm{d}(\det)(I_n)(H) = \operatorname{tr}(H)}\) ; \({\mathrm{d}(M \mapsto M^{-1})(A)(H) = -A^{-1}HA^{-1}}\) ; \({\mathrm{d}(M \mapsto M^2)(A)(H) = AH + HA}\).
{{% /fiche %}}
