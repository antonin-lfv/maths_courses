---
title: 'Calcul différentiel dans ℝⁿ'
weight: 8
---

Dérivées partielles, gradient, fonctions de classe \(\mathcal{C}^1\), règle de la chaîne et recherche d’extremums.

{{< sommaire >}}

{{% fiche %}}
**Dérivée partielle** - \({\dfrac{\partial f}{\partial x_i}(a)}\) : dériver par rapport à \(x_i\), les autres variables fixées. **Gradient** - \({\nabla f = \left(\dfrac{\partial f}{\partial x_1}, \dots, \dfrac{\partial f}{\partial x_n}\right)}\).

**Classe \(\mathcal{C}^1\)** - dérivées partielles continues ; alors \({f(a + h) = f(a) + \langle\nabla f(a), h\rangle + o(\|h\|)}\).

**Plan tangent** - \({z = f(a, b) + \dfrac{\partial f}{\partial x}(a, b)(x - a) + \dfrac{\partial f}{\partial y}(a, b)(y - b)}\).

**Règle de la chaîne** - \({\dfrac{\mathrm{d}}{\mathrm{d}t}f(x(t), y(t)) = \dfrac{\partial f}{\partial x}x'(t) + \dfrac{\partial f}{\partial y}y'(t)}\).

**Schwarz** - \(f\) de classe \(\mathcal{C}^2\) : \({\dfrac{\partial^2 f}{\partial x\partial y} = \dfrac{\partial^2 f}{\partial y\partial x}}\).

**Point critique** - \({\nabla f(a) = 0}\) : condition nécessaire d’extremum sur un **ouvert**.

**Nature (2 variables)** - \({r = \dfrac{\partial^2 f}{\partial x^2}}\), \({s = \dfrac{\partial^2 f}{\partial x\partial y}}\), \({t = \dfrac{\partial^2 f}{\partial y^2}}\) : \({rt - s^2 > 0}\) et \({r > 0}\) : minimum local ; \({rt - s^2 > 0}\) et \({r < 0}\) : maximum local ; \({rt - s^2 < 0}\) : point col ; \({rt - s^2 = 0}\) : on ne conclut pas.

**Sur un compact** - comparer les valeurs aux points critiques intérieurs et sur le bord.
{{% /fiche %}}
