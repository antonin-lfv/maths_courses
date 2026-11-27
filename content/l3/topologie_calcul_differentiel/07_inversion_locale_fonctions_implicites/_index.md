---
title: 'Inversion locale et fonctions implicites'
weight: 7
---

Difféomorphismes, théorème d’inversion locale, théorème des fonctions implicites et sous-variétés.

{{< sommaire >}}

{{% fiche %}}
**\(\mathcal{C}^1\)-difféomorphisme** - bijection \(\mathcal{C}^1\) entre ouverts, de réciproque \(\mathcal{C}^1\). Alors \(\mathrm{d}f(a)\) est inversible et \({\mathrm{d}(f^{-1})(f(a)) = \mathrm{d}f(a)^{-1}}\).

**Inversion locale** - \(f\) de classe \(\mathcal{C}^1\), \(\mathrm{d}f(a)\) inversible (jacobien \({\neq 0}\)) : \(f\) est un difféomorphisme d’un voisinage de \(a\) sur un voisinage de \(f(a)\).

**Inversion globale** - \(f\) \(\mathcal{C}^1\), **injective**, de différentielle inversible partout : difféomorphisme de \(U\) sur l’ouvert \(f(U)\).

**Fonctions implicites** - \({f(a, b) = 0}\) et \({\dfrac{\partial f}{\partial y}(a, b) \neq 0}\) : près de \((a, b)\), \({f(x, y) = 0 \iff y = \varphi(x)}\), avec \(\varphi\) de classe \(\mathcal{C}^1\) et

\[ \varphi'(x) = -\dfrac{\partial f/\partial x}{\partial f/\partial y}(x, \varphi(x)). \]

**Tangente à \({f(x, y) = 0}\)** - \({\dfrac{\partial f}{\partial x}(a, b)(x - a) + \dfrac{\partial f}{\partial y}(a, b)(y - b) = 0}\) : le gradient est normal à la courbe.

**Extremums liés** - extremum de \(f\) sur \({\{g = 0\}}\) avec \({\nabla g(a) \neq 0}\) : \({\nabla f(a) = \lambda\nabla g(a)}\) (multiplicateur de Lagrange).
{{% /fiche %}}
