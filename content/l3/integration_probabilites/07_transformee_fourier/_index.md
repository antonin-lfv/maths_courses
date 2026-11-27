---
title: 'Transformée de Fourier'
weight: 7
---

Transformée de Fourier dans \(L^1\), formule d’inversion, lien avec la dérivation et la convolution, théorème de Plancherel.

{{< sommaire >}}

{{% fiche %}}
**Définition** - \({\hat{f}(\xi) = \displaystyle\int_{\mathbb{R}} f(x)e^{-ix\xi}\,\mathrm{d}x}\) pour \({f \in L^1(\mathbb{R})}\).

**Régularité** - \(\hat{f}\) continue, bornée (\({\|\hat{f}\|_\infty \leq \|f\|_1}\)), de limite nulle à l’infini (Riemann-Lebesgue).

**Translation, dilatation** - \({\widehat{f(\cdot - a)}(\xi) = e^{-ia\xi}\hat{f}(\xi)}\) ; \({\widehat{e^{iax}f}(\xi) = \hat{f}(\xi - a)}\) ; \({\widehat{f(\lambda\,\cdot)}(\xi) = \dfrac{1}{|\lambda|}\hat{f}\left(\dfrac{\xi}{\lambda}\right)}\).

**Dérivation** - \({\widehat{f'}(\xi) = i\xi\hat{f}(\xi)}\) ; \({(\hat{f})'(\xi) = \widehat{-ixf}(\xi)}\). Régularité de \(f\) \(\leftrightarrow\) décroissance de \(\hat{f}\).

**Convolution** - \({\widehat{f * g} = \hat{f}\,\hat{g}}\).

**Inversion** - si \({\hat{f} \in L^1}\) : \({f(x) = \dfrac{1}{2\pi}\displaystyle\int \hat{f}(\xi)e^{ix\xi}\,\mathrm{d}\xi}\) p.p. ; injectivité sur \(L^1\).

**Plancherel** - \({\|\hat{f}\|_2^2 = 2\pi\|f\|_2^2}\) ; prolongement en un isomorphisme de \(L^2\).

**Références** - \({\widehat{e^{-x^2/2}} = \sqrt{2\pi}e^{-\xi^2/2}}\) ; \({\widehat{\mathbb{1}_{[-a, a]}} = \dfrac{2\sin(a\xi)}{\xi}}\) ; \({\widehat{e^{-a|x|}} = \dfrac{2a}{a^2 + \xi^2}}\).
{{% /fiche %}}
