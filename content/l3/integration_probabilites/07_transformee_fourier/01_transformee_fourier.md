---
title: 'Transformée de Fourier dans L¹ et L²'
weight: 1
cascade:
  type: docs
---

La transformée de Fourier décompose une fonction de \(\mathbb{R}\) en « fréquences », comme les séries de Fourier le font pour les fonctions périodiques. Elle transforme la dérivation en multiplication, ce qui en fait l’outil de base pour les équations aux dérivées partielles.

## Définition

> [!TIP] **Définition**
>
> Pour \({f \in L^1(\mathbb{R})}\), la **transformée de Fourier** de \(f\) est la fonction
>
> \[ \hat{f}(\xi) = \mathcal{F}f(\xi) = \int_{\mathbb{R}} f(x)\,e^{-ix\xi}\,\mathrm{d}x, \qquad \xi \in \mathbb{R}. \]

> [!IMPORTANT] **Remarque**
>
> Plusieurs conventions existent (\({e^{-2i\pi x\xi}}\), ou un facteur \(\dfrac{1}{\sqrt{2\pi}}\) devant l’intégrale). Les constantes \(2\pi\) des formules d’inversion et de Plancherel en dépendent : toujours vérifier la convention utilisée.

> [!TIP] **Théorème**
>
> Pour \({f \in L^1(\mathbb{R})}\) :
> - \(\hat{f}\) est **continue** et **bornée** sur \(\mathbb{R}\), avec \({\|\hat{f}\|_\infty \leq \|f\|_1}\) ;
> - **lemme de Riemann-Lebesgue** : \({\hat{f}(\xi) \to 0}\) quand \({|\xi| \to +\infty}\).
>
> L’application \({\mathcal{F} : L^1(\mathbb{R}) \to \mathcal{C}_0(\mathbb{R})}\) est linéaire continue (\(\mathcal{C}_0\) : fonctions continues tendant vers \(0\) à l’infini).

{{% details title="Démonstration" closed="true" %}}
\({|f(x)e^{-ix\xi}| = |f(x)|}\), intégrable et indépendant de \(\xi\) : c’est la domination qui donne la continuité (théorème de continuité sous l’intégrale) et la borne \({|\hat{f}(\xi)| \leq \|f\|_1}\).

Riemann-Lebesgue : pour \({f = \mathbb{1}_{[a, b]}}\), \({\hat{f}(\xi) = \dfrac{e^{-ia\xi} - e^{-ib\xi}}{i\xi} \to 0}\). Par linéarité, c’est vrai pour les fonctions en escalier, qui sont denses dans \(L^1\) ; on conclut par densité avec \({\|\hat{f} - \hat{g}\|_\infty \leq \|f - g\|_1}\).
{{% /details %}}

## Propriétés de calcul

> [!TIP] **Propriétés**
>
> Pour \({f, g \in L^1(\mathbb{R})}\), \({a \in \mathbb{R}}\), \({\lambda \neq 0}\) :
> - **translation** : \({\widehat{f(\cdot - a)}(\xi) = e^{-ia\xi}\hat{f}(\xi)}\) ;
> - **modulation** : \({\widehat{e^{iax}f}(\xi) = \hat{f}(\xi - a)}\) ;
> - **dilatation** : \({\widehat{f(\lambda\,\cdot)}(\xi) = \dfrac{1}{|\lambda|}\hat{f}\left(\dfrac{\xi}{\lambda}\right)}\) ;
> - **convolution** : \({\widehat{f * g} = \hat{f}\,\hat{g}}\) ;
> - **échange** : \({\displaystyle\int \hat{f}g = \int f\hat{g}}\).

> [!TIP] **Théorème - Fourier et dérivation**
>
> - Si \(f\) est de classe \(\mathcal{C}^1\) avec \(f\) et \(f'\) intégrables, alors \({\widehat{f'}(\xi) = i\xi\,\hat{f}(\xi)}\).
> - Si \(f\) et \({x \mapsto xf(x)}\) sont intégrables, alors \(\hat{f}\) est de classe \(\mathcal{C}^1\) et \({(\hat{f})'(\xi) = \widehat{(-ixf)}(\xi)}\).

{{% details title="Démonstration" closed="true" %}}
Première formule : \(f\) a des limites en \(\pm\infty\) (car \({f(x) = f(0) + \displaystyle\int_0^x f'}\) et \(f'\) est intégrable), nécessairement nulles puisque \(f\) est intégrable. Une intégration par parties donne \({\displaystyle\int f'(x)e^{-ix\xi}\,\mathrm{d}x = \big[f(x)e^{-ix\xi}\big]_{-\infty}^{+\infty} + i\xi\int f(x)e^{-ix\xi}\,\mathrm{d}x}\), et le crochet est nul.

Seconde formule : dérivation sous l’intégrale, avec la domination \({|{-ix}f(x)e^{-ix\xi}| = |xf(x)|}\).
{{% /details %}}

La transformée de Fourier échange **régularité** et **décroissance à l’infini** : plus \(f\) est dérivable (avec des dérivées intégrables), plus \(\hat{f}\) décroît vite ; plus \(f\) décroît vite, plus \(\hat{f}\) est régulière.

> [!TIP] **Transformées de référence**
>
> - **Gaussienne** : pour \({f(x) = e^{-x^2/2}}\), \({\hat{f}(\xi) = \sqrt{2\pi}\,e^{-\xi^2/2}}\). La gaussienne est, à une constante près, sa propre transformée.
> - **Indicatrice** : pour \({a > 0}\), \({\widehat{\mathbb{1}_{[-a, a]}}(\xi) = \dfrac{2\sin(a\xi)}{\xi}}\) (prolongée par \(2a\) en \(0\)).
> - **Exponentielle** : pour \({a > 0}\), \({\widehat{e^{-a|x|}}(\xi) = \dfrac{2a}{a^2 + \xi^2}}\).

{{% details title="Démonstration" closed="true" %}}
Gaussienne. \(f\) et \(xf\) sont intégrables, donc \(\hat{f}\) est \(\mathcal{C}^1\) et, comme \({f'(x) = -xf(x)}\) :

\[
(\hat{f})'(\xi) = \widehat{(-ixf)}(\xi) = i\,\widehat{f'}(\xi) = i \times i\xi\hat{f}(\xi) = -\xi\hat{f}(\xi).
\]

Donc \({\hat{f}(\xi) = \hat{f}(0)e^{-\xi^2/2}}\), avec \({\hat{f}(0) = \displaystyle\int e^{-x^2/2}\,\mathrm{d}x = \sqrt{2\pi}}\).
{{% /details %}}

## Inversion

> [!TIP] **Théorème d’inversion**
>
> Si \({f \in L^1(\mathbb{R})}\) et \({\hat{f} \in L^1(\mathbb{R})}\), alors pour presque tout \(x\) :
>
> \[ f(x) = \dfrac{1}{2\pi}\int_{\mathbb{R}} \hat{f}(\xi)\,e^{ix\xi}\,\mathrm{d}\xi. \]
>
> L’égalité vaut en tout point si \(f\) est continue. En particulier, \(\mathcal{F}\) est **injective** sur \(L^1\) : si \({\hat{f} = 0}\), alors \({f = 0}\) presque partout.

Appliquer deux fois la transformée de Fourier donne donc \({\hat{\hat{f}}(x) = 2\pi f(-x)}\).

## Transformée de Fourier dans \(L^2\)

> [!TIP] **Théorème de Plancherel**
>
> Pour \({f \in L^1(\mathbb{R}) \cap L^2(\mathbb{R})}\), on a \({\hat{f} \in L^2(\mathbb{R})}\) et
>
> \[ \int_{\mathbb{R}} |\hat{f}(\xi)|^2\,\mathrm{d}\xi = 2\pi\int_{\mathbb{R}} |f(x)|^2\,\mathrm{d}x. \]
>
> Par densité de \({L^1 \cap L^2}\) dans \(L^2\), la transformée de Fourier se prolonge de manière unique en un isomorphisme \({\mathcal{F} : L^2(\mathbb{R}) \to L^2(\mathbb{R})}\), tel que \({\dfrac{1}{\sqrt{2\pi}}\mathcal{F}}\) soit une isométrie. On a aussi \({\displaystyle\int \overline{\hat{f}}\hat{g} = 2\pi\int \overline{f}g}\).

> [!IMPORTANT] **Remarque**
>
> Pour \({f \in L^2}\) non intégrable, l’intégrale \({\displaystyle\int f(x)e^{-ix\xi}\,\mathrm{d}x}\) n’a pas de sens : \(\hat{f}\) est définie comme limite dans \(L^2\) des \({\displaystyle\int_{-A}^{A} f(x)e^{-ix\xi}\,\mathrm{d}x}\) quand \({A \to +\infty}\).

> [!NOTE] **Méthode - Calculer des intégrales avec Fourier**
>
> - **Par inversion** : si l’on reconnaît \(\hat{f}\) pour une fonction \(f\) continue connue, alors \({\displaystyle\int \hat{f}(\xi)e^{ix\xi}\,\mathrm{d}\xi = 2\pi f(x)}\).
> - **Par Plancherel** : \({\displaystyle\int |\hat{f}|^2 = 2\pi\int |f|^2}\) ramène une intégrale difficile à une intégrale simple.
> - **Équations différentielles** : appliquer \(\mathcal{F}\) transforme une équation différentielle linéaire à coefficients constants en équation algébrique en \(\hat{f}\).

> [!NOTE] **Exercice résolu - Deux intégrales classiques**
>
> 1. Calculer la transformée de Fourier de \({f(x) = e^{-|x|}}\), puis en déduire \({\displaystyle\int_{\mathbb{R}} \dfrac{\cos(x\xi)}{1 + \xi^2}\,\mathrm{d}\xi}\) pour tout réel \(x\).
> 2. Avec le théorème de Plancherel, calculer \({\displaystyle\int_{\mathbb{R}} \dfrac{\sin^2 t}{t^2}\,\mathrm{d}t}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(f\) est intégrable. On coupe l’intégrale en \(0\) :

\[
\hat{f}(\xi) = \int_{-\infty}^{0} e^{x(1 - i\xi)}\,\mathrm{d}x + \int_0^{+\infty} e^{-x(1 + i\xi)}\,\mathrm{d}x = \dfrac{1}{1 - i\xi} + \dfrac{1}{1 + i\xi} = \dfrac{2}{1 + \xi^2}.
\]

\(\hat{f}\) est intégrable et \(f\) est continue : la formule d’inversion vaut en tout point,

\[
e^{-|x|} = \dfrac{1}{2\pi}\int_{\mathbb{R}} \dfrac{2}{1 + \xi^2}\,e^{ix\xi}\,\mathrm{d}\xi = \dfrac{1}{\pi}\int_{\mathbb{R}} \dfrac{\cos(x\xi)}{1 + \xi^2}\,\mathrm{d}\xi,
\]

la partie en \(\sin(x\xi)\) étant nulle par imparité. Donc

\[
\int_{\mathbb{R}} \dfrac{\cos(x\xi)}{1 + \xi^2}\,\mathrm{d}\xi = \pi e^{-|x|}.
\]

Pour \({x = 0}\), on retrouve \({\displaystyle\int \dfrac{\mathrm{d}\xi}{1 + \xi^2} = \pi}\).

**2.** Soit \({g = \mathbb{1}_{[-1, 1]}}\), dans \({L^1 \cap L^2}\), avec \({\hat{g}(\xi) = \dfrac{2\sin\xi}{\xi}}\) et \({\|g\|_2^2 = 2}\). Par le théorème de Plancherel :

\[
\int_{\mathbb{R}} \dfrac{4\sin^2\xi}{\xi^2}\,\mathrm{d}\xi = 2\pi \times 2, \qquad \text{d’où} \qquad \int_{\mathbb{R}} \dfrac{\sin^2 t}{t^2}\,\mathrm{d}t = \pi.
\]
{{% /details %}}
