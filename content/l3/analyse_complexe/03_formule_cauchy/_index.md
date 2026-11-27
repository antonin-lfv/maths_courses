---
title: 'Formule de Cauchy'
weight: 3
---

Intégrale le long d’un chemin, théorème de Cauchy, formule de Cauchy et ses conséquences.

{{< sommaire >}}

{{% fiche %}}
**Intégrale curviligne** - \({\displaystyle\int_\gamma f(z)\,\mathrm{d}z = \int_a^b f(\gamma(t))\gamma'(t)\,\mathrm{d}t}\) ; \({\left|\displaystyle\int_\gamma f\right| \leq \sup_\gamma |f| \times \text{longueur}(\gamma)}\).

**Primitive** - si \({F' = f}\) : \({\displaystyle\int_\gamma f = F(\gamma(b)) - F(\gamma(a))}\), nulle sur un lacet.

**Référence** - \({\displaystyle\int_{C(a, r)} (z - a)^n\,\mathrm{d}z = 2i\pi}\) si \({n = -1}\), \(0\) sinon.

**Théorème de Cauchy** - \(f\) holomorphe sur \(U\) simplement connexe (convexe, étoilé) : \({\displaystyle\int_\gamma f = 0}\) pour tout lacet, et \(f\) a une primitive.

**Formule de Cauchy** - \({f(z) = \dfrac{1}{2i\pi}\displaystyle\int_{C(a, r)} \dfrac{f(w)}{w - z}\,\mathrm{d}w}\) pour \({|z - a| < r}\) ; \({f^{(n)}(a) = \dfrac{n!}{2i\pi}\displaystyle\int_{C(a, r)} \dfrac{f(w)}{(w - a)^{n+1}}\,\mathrm{d}w}\).

**Inégalités de Cauchy** - \({|f^{(n)}(a)| \leq \dfrac{n!}{r^n}\sup_{C(a, r)} |f|}\).

**Liouville** - entière et bornée \(\Rightarrow\) constante. **D’Alembert-Gauss** en découle.

**Moyenne** - \({f(a) = \dfrac{1}{2\pi}\displaystyle\int_0^{2\pi} f(a + re^{i\theta})\,\mathrm{d}\theta}\). **Principe du maximum** - \(|f|\) n’a pas de maximum local sur un ouvert connexe, sauf si \(f\) est constante.

**Morera** - continue et d’intégrale nulle sur tout triangle \(\Rightarrow\) holomorphe.
{{% /fiche %}}
