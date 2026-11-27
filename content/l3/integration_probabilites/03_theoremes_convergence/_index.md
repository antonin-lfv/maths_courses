---
title: 'Théorèmes de convergence'
weight: 3
---

Convergence monotone, lemme de Fatou, convergence dominée et intégrales à paramètre.

{{< sommaire >}}

{{% fiche %}}
**Convergence monotone (Beppo Levi)** - \({0 \leq f_n \uparrow f}\) : \({\displaystyle\int f_n\,\mathrm{d}\mu \uparrow \int f\,\mathrm{d}\mu}\).

**Séries positives** - \({f_n \geq 0}\) : \({\displaystyle\int \sum f_n = \sum \int f_n}\) (dans \([0, +\infty]\)).

**Fatou** - \({f_n \geq 0}\) : \({\displaystyle\int \liminf f_n \leq \liminf \int f_n}\).

**Convergence dominée (Lebesgue)** - \({f_n \to f}\) p.p. et \({|f_n| \leq g}\) p.p. avec \(g\) **intégrable** indépendante de \(n\) : \({\displaystyle\int |f_n - f| \to 0}\), donc \({\displaystyle\int f_n \to \int f}\).

**Séries quelconques** - si \({\sum \displaystyle\int |f_n| < +\infty}\) : \(\sum f_n\) converge p.p., est intégrable, et \({\displaystyle\int \sum f_n = \sum \int f_n}\).

**Continuité sous l’intégrale** - \({x \mapsto f(x, t)}\) continue pour presque tout \(t\), \({|f(x, t)| \leq g(t)}\) intégrable.

**Dérivation sous l’intégrale** - \({\left|\dfrac{\partial f}{\partial x}(x, t)\right| \leq g(t)}\) intégrable : \({F'(x) = \displaystyle\int \dfrac{\partial f}{\partial x}(x, t)\,\mathrm{d}\mu(t)}\).

**Contre-exemples à connaître** - bosse glissante \({\mathbb{1}_{[n, n+1]}}\), pic \({n\mathbb{1}_{]0, 1/n[}}\) : limite simple nulle, intégrales égales à \(1\).
{{% /fiche %}}
