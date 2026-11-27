---
title: 'Extremums et différentielle seconde'
weight: 8
---

Différentielle seconde, formule de Taylor, conditions d’extremum libre et lié, convexité.

{{< sommaire >}}

{{% fiche %}}
**Différentielle seconde** - \(\mathrm{d}^2f(a)\) forme bilinéaire **symétrique** (Schwarz) ; en dimension finie : matrice hessienne \(H_f(a)\).

**Taylor-Young** - \({f(a + h) = f(a) + \mathrm{d}f(a)(h) + \dfrac{1}{2}\mathrm{d}^2f(a)(h, h) + o(\|h\|^2)}\).

**Condition nécessaire d’ordre 1** - extremum local sur un **ouvert** : \({\mathrm{d}f(a) = 0}\).

**Condition nécessaire d’ordre 2** - minimum local : \(H_f(a)\) positive.

**Condition suffisante** - \({\mathrm{d}f(a) = 0}\) et \(H_f(a)\) **définie positive** : minimum local strict ; définie négative : maximum local strict ; valeurs propres de signes contraires : point selle.

**Convexité** - \(f\) de classe \(\mathcal{C}^2\) sur un ouvert convexe : convexe \(\iff\) \(H_f(x)\) positive pour tout \(x\). Pour \(f\) convexe, tout point critique est un minimum **global**.

**Extremums liés** - sur \({\{g_1 = \dots = g_p = 0\}}\), gradients des \(g_i\) libres en \(a\) : \({\nabla f(a) = \sum \lambda_i\nabla g_i(a)}\).

**Sur un compact** - existence par continuité ; candidats : points critiques intérieurs + bord (paramétrage ou Lagrange).
{{% /fiche %}}
