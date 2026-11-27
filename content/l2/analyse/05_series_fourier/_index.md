---
title: 'Séries de Fourier'
weight: 5
---

Coefficients de Fourier d’une fonction périodique, théorèmes de Dirichlet et de Parseval.

{{< sommaire >}}

{{% fiche %}}
**Coefficients (période \(2\pi\))** - \({a_0 = \dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} f}\) ; \({a_n = \dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi} f(t)\cos(nt)\,\mathrm{d}t}\) ; \({b_n = \dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi} f(t)\sin(nt)\,\mathrm{d}t}\) ; \({c_n = \dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} f(t)e^{-int}\,\mathrm{d}t}\).

**Liens** - \({c_0 = a_0}\), \({c_n = \dfrac{a_n - ib_n}{2}}\), \({c_{-n} = \dfrac{a_n + ib_n}{2}}\).

**Parité** - \(f\) paire : \({b_n = 0}\), \({a_n = \dfrac{2}{\pi}\displaystyle\int_0^\pi f(t)\cos(nt)\,\mathrm{d}t}\). \(f\) impaire : \({a_n = 0}\), \({b_n = \dfrac{2}{\pi}\displaystyle\int_0^\pi f(t)\sin(nt)\,\mathrm{d}t}\).

**Dirichlet** - \(f\) de classe \(\mathcal{C}^1\) par morceaux : la série converge en tout \(x\) vers \({\dfrac{f(x^+) + f(x^-)}{2}}\).

**Convergence normale** - \(f\) continue et \(\mathcal{C}^1\) par morceaux : la série converge normalement vers \(f\).

**Parseval** - \({\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} |f|^2 = |a_0|^2 + \dfrac{1}{2}\sum_{n \geq 1} (|a_n|^2 + |b_n|^2) = \sum_{n \in \mathbb{Z}} |c_n|^2}\).

**Dérivée** - \(f\) continue, \(\mathcal{C}^1\) par morceaux : \({c_n(f') = in\,c_n(f)}\).

**Période \(T\)** - \({\omega = \dfrac{2\pi}{T}}\), remplacer \(nt\) par \(n\omega t\) et \(\dfrac{1}{\pi}\) par \(\dfrac{2}{T}\).
{{% /fiche %}}
