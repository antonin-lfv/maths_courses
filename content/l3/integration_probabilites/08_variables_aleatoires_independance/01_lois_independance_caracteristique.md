---
title: 'Lois, indépendance, fonction caractéristique'
weight: 1
cascade:
  type: docs
---

La théorie de la mesure donne un cadre unique aux variables discrètes et à densité. Un espace probabilisé \((\Omega, \mathcal{A}, P)\) est un espace mesuré de masse totale \(1\).

## Variables aléatoires et lois

> [!TIP] **Définition**
>
> Une **variable aléatoire** réelle est une application mesurable \({X : (\Omega, \mathcal{A}) \to (\mathbb{R}, \mathcal{B}(\mathbb{R}))}\). Sa **loi** est la mesure image de \(P\) par \(X\) : la probabilité \(P_X\) sur \(\mathbb{R}\) définie par
>
> \[ P_X(B) = P(X \in B) = P\big(X^{-1}(B)\big), \qquad B \in \mathcal{B}(\mathbb{R}). \]
>
> La loi est caractérisée par la **fonction de répartition** \({F_X(t) = P(X \leq t)}\), croissante, continue à droite, de limites \(0\) en \(-\infty\) et \(1\) en \(+\infty\).

| Probabilités | Théorie de la mesure |
|---|---|
| événement | partie mesurable |
| variable aléatoire | fonction mesurable |
| espérance \(E(X)\) | intégrale \({\displaystyle\int_\Omega X\,\mathrm{d}P}\) |
| presque sûrement | presque partout |
| loi de \(X\) | mesure image \(P_X\) |
| \(X\) a un moment d’ordre \(p\) | \({X \in L^p(P)}\) |

> [!TIP] **Définition**
>
> - \(X\) est **discrète** si \(P_X\) est une somme de masses de Dirac : \({P_X = \displaystyle\sum_n p_n\delta_{x_n}}\).
> - \(X\) est **à densité** \(f\) si \(P_X\) a la densité \(f\) par rapport à la mesure de Lebesgue : \({P_X(B) = \displaystyle\int_B f(x)\,\mathrm{d}x}\).
>
> Il existe des lois qui ne sont ni l’un ni l’autre (mélanges, lois singulières).

## Espérance

> [!TIP] **Définition et théorème de transfert**
>
> L’**espérance** de \(X\) intégrable (ou positive) est \({E(X) = \displaystyle\int_\Omega X\,\mathrm{d}P}\). Pour toute fonction borélienne \(g\) positive, ou telle que \(g(X)\) soit intégrable :
>
> \[ E(g(X)) = \int_{\mathbb{R}} g(x)\,\mathrm{d}P_X(x). \]
>
> Cette intégrale vaut \({\displaystyle\sum_n g(x_n)p_n}\) dans le cas discret et \({\displaystyle\int g(x)f(x)\,\mathrm{d}x}\) dans le cas à densité.

{{% details title="Démonstration" closed="true" %}}
Pour \({g = \mathbb{1}_B}\), les deux membres valent \(P(X \in B)\). Par linéarité, l’égalité vaut pour les fonctions étagées positives ; par convergence monotone, pour les fonctions mesurables positives ; puis pour les fonctions intégrables en séparant parties positive et négative. C’est le schéma de preuve standard en théorie de la mesure.
{{% /details %}}

> [!NOTE] **Méthode - Identifier une loi par la « fonction muette »**
>
> Pour trouver la loi de \({Y = h(X)}\), on calcule \(E(g(Y))\) pour une fonction \(g\) borélienne positive (ou continue bornée) quelconque, et l’on cherche à écrire le résultat sous la forme \({\displaystyle\int g(y)\,\rho(y)\,\mathrm{d}y}\), en général par un changement de variable. Alors \(\rho\) est une densité de \(Y\).

Tous les théorèmes d’intégration s’appliquent : convergence monotone et dominée pour \({E(\lim X_n)}\), inégalités de Markov, Hölder (\({E|XY| \leq \|X\|_p\|Y\|_q}\)), Jensen (\({\varphi(E(X)) \leq E(\varphi(X))}\) pour \(\varphi\) convexe). Comme \(P\) est finie, \({L^q(P) \subset L^p(P)}\) pour \({p \leq q}\) : une variable qui a une variance a une espérance.

## Indépendance

> [!TIP] **Définition**
>
> Des variables aléatoires \({X_1, \dots, X_n}\) sont **indépendantes** si, pour tous boréliens \({B_1, \dots, B_n}\) :
>
> \[ P(X_1 \in B_1, \dots, X_n \in B_n) = P(X_1 \in B_1) \cdots P(X_n \in B_n). \]
>
> Une famille infinie est indépendante si toutes ses sous-familles finies le sont.

> [!TIP] **Théorème - Caractérisations**
>
> Les propriétés suivantes sont équivalentes :
> - \({X_1, \dots, X_n}\) sont indépendantes ;
> - la loi du vecteur \({(X_1, \dots, X_n)}\) est la **mesure produit** \({P_{X_1} \otimes \dots \otimes P_{X_n}}\) ;
> - pour toutes fonctions boréliennes positives (ou bornées) \({g_1, \dots, g_n}\) : \({E\big(g_1(X_1) \cdots g_n(X_n)\big) = E(g_1(X_1)) \cdots E(g_n(X_n))}\) ;
> - si le vecteur a une densité : celle-ci est le produit des densités marginales, \({f(x_1, \dots, x_n) = f_1(x_1) \cdots f_n(x_n)}\).

> [!TIP] **Propriétés**
>
> Si \(X\) et \(Y\) sont indépendantes :
> - \(g(X)\) et \(h(Y)\) sont indépendantes (plus généralement, lemme des coalitions) ;
> - si \(X\), \(Y\) sont intégrables, \(XY\) l’est et \({E(XY) = E(X)E(Y)}\) (par le théorème de Fubini) ;
> - \({\operatorname{Cov}(X, Y) = 0}\) et \({V(X + Y) = V(X) + V(Y)}\) ;
> - la loi de \({X + Y}\) est la **convolution** \({P_X * P_Y}\) ; si \(X\) et \(Y\) ont des densités \(f_X\), \(f_Y\), alors \({X + Y}\) a la densité
>
> \[ (f_X * f_Y)(s) = \int_{\mathbb{R}} f_X(s - y)\,f_Y(y)\,\mathrm{d}y. \]

## Fonction caractéristique

> [!TIP] **Définition**
>
> La **fonction caractéristique** d’une variable aléatoire réelle \(X\) est
>
> \[ \varphi_X(t) = E\left(e^{itX}\right) = \int_{\mathbb{R}} e^{itx}\,\mathrm{d}P_X(x), \qquad t \in \mathbb{R}. \]
>
> C’est la transformée de Fourier de la loi de \(X\). Elle est définie pour toute variable aléatoire, puisque \({|e^{itX}| = 1}\).

> [!TIP] **Théorème**
>
> - \({\varphi_X(0) = 1}\), \({|\varphi_X(t)| \leq 1}\), et \(\varphi_X\) est uniformément continue.
> - **Injectivité** : \(\varphi_X\) **caractérise la loi** de \(X\). Deux variables ayant la même fonction caractéristique ont la même loi.
> - \({\varphi_{aX + b}(t) = e^{itb}\varphi_X(at)}\).
> - Si \(X\) et \(Y\) sont **indépendantes** : \({\varphi_{X + Y} = \varphi_X\,\varphi_Y}\).
> - **Moments** : si \({E(|X|^k) < +\infty}\), alors \(\varphi_X\) est de classe \(\mathcal{C}^k\) et \({\varphi_X^{(k)}(0) = i^kE(X^k)}\). En particulier, si \(X\) a une variance :
>
> \[ \varphi_X(t) = 1 + itE(X) - \dfrac{t^2}{2}E(X^2) + o(t^2). \]

> [!TIP] **Fonctions caractéristiques usuelles**
>
> | Loi | \(\varphi_X(t)\) |
> |---|---|
> | Bernoulli \(\mathcal{B}(p)\) | \({1 - p + pe^{it}}\) |
> | Binomiale \(\mathcal{B}(n, p)\) | \({(1 - p + pe^{it})^n}\) |
> | Poisson \(\mathcal{P}(\lambda)\) | \({\exp\big(\lambda(e^{it} - 1)\big)}\) |
> | Exponentielle \(\mathcal{E}(\lambda)\) | \(\dfrac{\lambda}{\lambda - it}\) |
> | Normale \(\mathcal{N}(m, \sigma^2)\) | \({\exp\left(itm - \dfrac{\sigma^2t^2}{2}\right)}\) |

## Lemme de Borel-Cantelli

> [!TIP] **Théorème**
>
> Soit \((A_n)\) une suite d’événements et \({\limsup A_n = \displaystyle\bigcap_n\bigcup_{k \geq n} A_k}\) l’événement « une infinité de \(A_n\) se réalisent ».
> - Si \({\displaystyle\sum_n P(A_n) < +\infty}\), alors \({P(\limsup A_n) = 0}\).
> - Si les \(A_n\) sont **indépendants** et si \({\displaystyle\sum_n P(A_n) = +\infty}\), alors \({P(\limsup A_n) = 1}\).

{{% details title="Démonstration" closed="true" %}}
Second point. Par indépendance et \({1 - u \leq e^{-u}}\) :

\[
P\left(\bigcap_{k=n}^{N} \overline{A_k}\right) = \prod_{k=n}^{N} (1 - P(A_k)) \leq \exp\left(-\sum_{k=n}^{N} P(A_k)\right) \xrightarrow[N \to +\infty]{} 0.
\]

Donc \({P\left(\displaystyle\bigcap_{k \geq n} \overline{A_k}\right) = 0}\) pour tout \(n\), et le complémentaire de \(\limsup A_n\), réunion dénombrable de ces événements, est négligeable.
{{% /details %}}

> [!NOTE] **Exercice résolu - Stabilité des lois normales et loi d’un carré**
>
> 1. Soient \({X \sim \mathcal{N}(m_1, \sigma_1^2)}\) et \({Y \sim \mathcal{N}(m_2, \sigma_2^2)}\) indépendantes. Déterminer la loi de \({X + Y}\).
> 2. Soit \({Z \sim \mathcal{N}(0, 1)}\). Déterminer la loi de \({Z^2}\) par la méthode de la fonction muette.

{{% details title="Solution commentée" closed="true" %}}
**1.** Par indépendance, la fonction caractéristique de la somme est le produit :

\[
\varphi_{X + Y}(t) = \exp\left(itm_1 - \dfrac{\sigma_1^2t^2}{2}\right)\exp\left(itm_2 - \dfrac{\sigma_2^2t^2}{2}\right) = \exp\left(it(m_1 + m_2) - \dfrac{(\sigma_1^2 + \sigma_2^2)t^2}{2}\right).
\]

On reconnaît la fonction caractéristique de la loi \({\mathcal{N}(m_1 + m_2, \sigma_1^2 + \sigma_2^2)}\). Comme la fonction caractéristique caractérise la loi :

\[
X + Y \sim \mathcal{N}(m_1 + m_2,\ \sigma_1^2 + \sigma_2^2).
\]

Ce sont les variances qui s’ajoutent, pas les écarts types.

**2.** Soit \(g\) borélienne positive. Par le théorème de transfert et la parité de l’intégrande :

\[
E(g(Z^2)) = \int_{\mathbb{R}} g(x^2)\,\dfrac{e^{-x^2/2}}{\sqrt{2\pi}}\,\mathrm{d}x = 2\int_0^{+\infty} g(x^2)\,\dfrac{e^{-x^2/2}}{\sqrt{2\pi}}\,\mathrm{d}x.
\]

On pose \({y = x^2}\), difféomorphisme de \({]0, +\infty[}\) sur lui-même, \({\mathrm{d}x = \dfrac{\mathrm{d}y}{2\sqrt{y}}}\) :

\[
E(g(Z^2)) = \int_0^{+\infty} g(y)\,\dfrac{e^{-y/2}}{\sqrt{2\pi y}}\,\mathrm{d}y.
\]

Ceci étant vrai pour toute \(g\), \(Z^2\) a pour densité \({y \mapsto \dfrac{e^{-y/2}}{\sqrt{2\pi y}}\,\mathbb{1}_{]0, +\infty[}(y)}\) : c’est la loi du **khi-deux à un degré de liberté**. Vérification : \({E(Z^2) = V(Z) = 1}\).
{{% /details %}}
