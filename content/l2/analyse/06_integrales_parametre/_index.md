---
title: 'Intégrales à paramètre'
weight: 6
---

Convergence dominée, continuité et dérivation d’une fonction définie par une intégrale.

{{< sommaire >}}

{{% fiche %}}
**Convergence dominée** - \({f_n \to f}\) simplement, \({|f_n| \leq \varphi}\) avec \(\varphi\) intégrable indépendante de \(n\) : \({\displaystyle\int_I f_n \to \int_I f}\).

**Intégration terme à terme** - si \({\sum \displaystyle\int_I |u_n|}\) converge : \({\displaystyle\int_I \sum u_n = \sum \int_I u_n}\).

**Continuité de \({F(x) = \displaystyle\int_I f(x, t)\,\mathrm{d}t}\)** - \(f\) continue en \(x\), continue par morceaux en \(t\), et **domination** \({|f(x, t)| \leq \varphi(t)}\) avec \(\varphi\) intégrable.

**Dérivation (Leibniz)** - \(\dfrac{\partial f}{\partial x}\) existe, continue en \(x\), et \({\left|\dfrac{\partial f}{\partial x}(x, t)\right| \leq \varphi(t)}\) intégrable : \({F'(x) = \displaystyle\int_I \dfrac{\partial f}{\partial x}(x, t)\,\mathrm{d}t}\).

**Domination locale** - il suffit de dominer pour \(x\) dans tout segment \({[a, b] \subset A}\).

**Réflexe** - la fonction dominante \(\varphi\) ne doit dépendre ni de \(x\) ni de \(n\).

**Exemple type** - \({\Gamma(x) = \displaystyle\int_0^{+\infty} t^{x-1}e^{-t}\,\mathrm{d}t}\) : \(\mathcal{C}^\infty\) sur \({]0, +\infty[}\), \({\Gamma(x + 1) = x\Gamma(x)}\).
{{% /fiche %}}
