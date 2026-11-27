---
title: 'Étude d’une courbe paramétrée'
weight: 1
cascade:
  type: docs
---

Le plan est muni d’un repère orthonormé \({(O ; \vec{i}, \vec{j})}\).

## Définitions

> [!TIP] **Définition**
>
> Une **courbe paramétrée** (ou arc paramétré) est une application
>
> \[ M : I \to \mathbb{R}^2, \qquad t \mapsto M(t) = (x(t), y(t)), \]
>
> où \(I\) est un intervalle et \(x\), \(y\) deux fonctions de \(I\) dans \(\mathbb{R}\), supposées de classe \(\mathcal{C}^k\) avec \(k\) assez grand. L’ensemble des points \(M(t)\) est le **support** de la courbe. On pense à \(t\) comme au temps et à \(M(t)\) comme à la position d’un point mobile.

> [!IMPORTANT] **Remarque**
>
> Le graphe d’une fonction \(f\) est un cas particulier : \({t \mapsto (t, f(t))}\). Mais une courbe paramétrée peut repasser par un même point (**point multiple**), revenir en arrière ou avoir une tangente verticale.

{{% details title="Exemple" closed="true" %}}
\({t \mapsto (a + R\cos t,\ b + R\sin t)}\), \({t \in [0, 2\pi]}\), a pour support le cercle de centre \((a, b)\) et de rayon \(R\).

\({t \mapsto (a\cos t,\ b\sin t)}\) a pour support l’ellipse d’équation \({\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1}\).
{{% /details %}}

## Réduction de l’intervalle d’étude

> [!NOTE] **Méthode**
>
> - **Périodicité** : si \(x\) et \(y\) sont \(T\)-périodiques, on étudie sur un intervalle de longueur \(T\) : on obtient toute la courbe.
> - **Symétries** : on compare \({M(-t)}\) (ou \({M(a - t)}\)) à \(M(t)\).
>
> | Si \((x(-t), y(-t))\) vaut | la courbe est symétrique par rapport à |
> |---|---|
> | \((x(t), -y(t))\) | l’axe des abscisses |
> | \((-x(t), y(t))\) | l’axe des ordonnées |
> | \((-x(t), -y(t))\) | l’origine |
> | \((y(t), x(t))\) | la droite \({y = x}\) |
> | \((x(t), y(t))\) | (même point : la courbe est parcourue deux fois) |
>
> On étudie alors sur \({I \cap [0, +\infty[}\) et on complète par symétrie.

## Tangente

> [!TIP] **Définition**
>
> Le **vecteur dérivé** en \(t_0\) est \({M'(t_0) = (x'(t_0), y'(t_0))}\) (c’est le vecteur vitesse). Le point \(M(t_0)\) est **régulier** si \({M'(t_0) \neq \vec{0}}\), **singulier** (ou stationnaire) sinon.

> [!TIP] **Théorème**
>
> - En un point régulier, la courbe admet une tangente, dirigée par \(M'(t_0)\). Elle est horizontale si \({y'(t_0) = 0}\), verticale si \({x'(t_0) = 0}\), et de pente \(\dfrac{y'(t_0)}{x'(t_0)}\) sinon.
> - En un point singulier, si \(p\) est le plus petit entier tel que \({M^{(p)}(t_0) \neq \vec{0}}\), la tangente est dirigée par \(M^{(p)}(t_0)\).

> [!TIP] **Théorème - Nature d’un point**
>
> Soit \(p\) le plus petit entier \({\geq 1}\) tel que \({M^{(p)}(t_0) \neq \vec{0}}\), et \({q > p}\) le plus petit entier tel que \(M^{(q)}(t_0)\) ne soit pas colinéaire à \(M^{(p)}(t_0)\). D’après la formule de Taylor-Young, dans le repère \({\left(M(t_0) ; M^{(p)}(t_0), M^{(q)}(t_0)\right)}\), les coordonnées de \(M(t)\) sont équivalentes à \({\dfrac{(t - t_0)^p}{p!}}\) et \({\dfrac{(t - t_0)^q}{q!}}\).
>
> | \(p\) | \(q\) | Nature du point |
> |:---:|:---:|---|
> | impair | pair | point ordinaire : la courbe reste d’un même côté de sa tangente |
> | impair | impair | point d’inflexion : la courbe traverse sa tangente |
> | pair | impair | rebroussement de première espèce : demi-tour, en traversant la tangente |
> | pair | pair | rebroussement de seconde espèce : demi-tour, du même côté de la tangente |
>
> Un point régulier correspond à \({p = 1}\) ; le cas général est \({(p, q) = (1, 2)}\).

## Branches infinies

> [!NOTE] **Méthode**
>
> On étudie le comportement quand \(t\) tend vers une borne \(t_0\) de \(I\) (finie ou infinie).
> - Si \({x(t) \to \pm\infty}\) et \({y(t) \to b}\) : asymptote horizontale \({y = b}\).
> - Si \({x(t) \to a}\) et \({y(t) \to \pm\infty}\) : asymptote verticale \({x = a}\).
> - Si \(x(t)\) et \(y(t)\) tendent vers l’infini, on étudie \({\dfrac{y(t)}{x(t)}}\) :
>   - limite infinie : branche parabolique de direction \((Oy)\) ;
>   - limite nulle : branche parabolique de direction \((Ox)\) ;
>   - limite \({a \neq 0}\) : on étudie \({y(t) - ax(t)}\). Si cette quantité tend vers \(b\) fini, la droite \({y = ax + b}\) est asymptote, et le signe de \({y(t) - ax(t) - b}\) donne la position ; si elle tend vers l’infini, branche parabolique de direction \({y = ax}\).

## Plan d’étude

> [!NOTE] **Méthode - Étudier et tracer une courbe paramétrée**
>
> 1. Domaine de définition, périodicité, symétries : réduire l’intervalle d’étude.
> 2. Calculer \(x'\) et \(y'\), étudier leurs signes, dresser un tableau de variations **conjoint** de \(x\) et \(y\).
> 3. Repérer les tangentes horizontales et verticales, et les points singuliers.
> 4. Étudier les branches infinies.
> 5. Placer les points remarquables avec leurs tangentes, puis tracer en suivant le tableau ; compléter par symétrie.

## Longueur d’une courbe

> [!TIP] **Définition**
>
> La **longueur** de la courbe \({t \mapsto M(t)}\), de classe \(\mathcal{C}^1\) sur \([a, b]\), est
>
> \[ L = \int_a^b \|M'(t)\|\,\mathrm{d}t = \int_a^b \sqrt{x'(t)^2 + y'(t)^2}\,\mathrm{d}t. \]
>
> C’est l’intégrale de la vitesse. Pour le graphe d’une fonction \(f\) : \({L = \displaystyle\int_a^b \sqrt{1 + f'(x)^2}\,\mathrm{d}x}\).

{{% details title="Exemple" closed="true" %}}
Pour le cercle \({t \mapsto (R\cos t, R\sin t)}\), \({t \in [0, 2\pi]}\) : \({\|M'(t)\| = \sqrt{R^2\sin^2 t + R^2\cos^2 t} = R}\), donc \({L = 2\pi R}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - L’astroïde**
>
> On considère la courbe \({M(t) = (\cos^3 t,\ \sin^3 t)}\), \({t \in \mathbb{R}}\).
>
> 1. Réduire l’intervalle d’étude à \({\left[0, \dfrac{\pi}{4}\right]}\).
> 2. Étudier les variations de \(x\) et \(y\) sur \({\left[0, \dfrac{\pi}{2}\right]}\) et la nature du point \(M(0)\).
> 3. Calculer la longueur totale de la courbe.

{{% details title="Solution commentée" closed="true" %}}
**1.** \(x\) et \(y\) sont \(2\pi\)-périodiques : on étudie sur \({[-\pi, \pi]}\).
- \({M(-t) = (x(t), -y(t))}\) : symétrie par rapport à l’axe des abscisses, on se ramène à \({[0, \pi]}\).
- \({M(\pi - t) = (-x(t), y(t))}\) : symétrie par rapport à l’axe des ordonnées, on se ramène à \({\left[0, \dfrac{\pi}{2}\right]}\).
- \({M\left(\dfrac{\pi}{2} - t\right) = (\sin^3 t, \cos^3 t) = (y(t), x(t))}\) : symétrie par rapport à la droite \({y = x}\), on se ramène à \({\left[0, \dfrac{\pi}{4}\right]}\).

**2.** \({x'(t) = -3\cos^2 t\sin t}\) et \({y'(t) = 3\sin^2 t\cos t}\). Sur \({\left]0, \dfrac{\pi}{2}\right[}\), \({x'(t) < 0}\) et \({y'(t) > 0}\) : \(x\) décroît de \(1\) à \(0\), \(y\) croît de \(0\) à \(1\).

En \({t = 0}\) : \({x'(0) = y'(0) = 0}\), le point \({M(0) = (1, 0)}\) est singulier. On utilise des développements limités en \(0\) :

\[
x(t) = \left(1 - \dfrac{t^2}{2} + o(t^2)\right)^3 = 1 - \dfrac{3}{2}t^2 + o(t^3), \qquad y(t) = \left(t + o(t^2)\right)^3 = t^3 + o(t^3).
\]

(le terme en \(t^3\) de \(x\) est nul car \(x\) est paire). Donc

\[
M(t) = (1, 0) + t^2\left(-\dfrac{3}{2}, 0\right) + t^3(0, 1) + o(t^3).
\]

On lit \({p = 2}\) et \({q = 3}\) : \(M(0)\) est un **point de rebroussement de première espèce**, de tangente horizontale (dirigée par \({(-3/2, 0)}\)). Par symétrie, il en va de même aux points \({(0, 1)}\), \({(-1, 0)}\) et \({(0, -1)}\), avec des tangentes portées par les axes.

**3.** \({\|M'(t)\|^2 = 9\cos^4 t\sin^2 t + 9\sin^4 t\cos^2 t = 9\cos^2 t\sin^2 t}\), donc sur \({\left[0, \dfrac{\pi}{2}\right]}\), \({\|M'(t)\| = 3\cos t\sin t}\). Par symétrie, la longueur totale est quatre fois celle du quart de courbe :

\[
L = 4\int_0^{\pi/2} 3\cos t\sin t\,\mathrm{d}t = 12\left[\dfrac{\sin^2 t}{2}\right]_0^{\pi/2} = 6.
\]
{{% /details %}}
