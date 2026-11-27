---
title: 'Fonctions dérivables et convexité'
weight: 2
cascade:
  type: docs
---

## Dérivée seconde

> [!TIP] **Définition**
>
> Soit \(f\) une fonction dérivable sur un intervalle \(I\) et \(f'\) sa fonction dérivée. La fonction \(f\) est **deux fois dérivable** sur \(I\) si \(f'\) est elle-même dérivable sur \(I\). On note \(f''\) la dérivée de \(f'\) : c’est la **dérivée seconde** de \(f\).

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = 2x^3 - x^2 + e^{x}}\) sur \(\mathbb{R}\). \({f'(x) = 6x^2 - 2x + e^{x}}\), puis \({f''(x) = 12x - 2 + e^{x}}\).
{{% /details %}}

## Convexité et tangente

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction définie et dérivable sur un intervalle \(I\), et \(\mathcal{C}_f\) sa courbe représentative dans un repère.
> - Sur \(I\), \(f\) est convexe si et seulement si \(\mathcal{C}_f\) est **au-dessus** de toutes ses tangentes.
> - Sur \(I\), \(f\) est concave si et seulement si \(\mathcal{C}_f\) est **en dessous** de toutes ses tangentes.

{{% details title="Exemple" closed="true" %}}
La fonction exponentielle est convexe sur \(\mathbb{R}\) : sa courbe est au-dessus de sa tangente en 0, d’équation \({y = x + 1}\). Ainsi, pour tout réel \(x\), \({e^x \geq x + 1}\). De même, \(\ln\) étant concave, sa courbe est sous sa tangente en 1 : pour tout \({x > 0}\), \({\ln(x) \leq x - 1}\).
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction définie et deux fois dérivable sur un intervalle \(I\), \(f'\) sa dérivée et \(f''\) sa dérivée seconde.
> - Sur l’intervalle \(I\) : \(f\) est convexe \({\iff}\) \(f''\) est positive sur \(I\) \({\iff}\) \(f'\) est croissante sur \(I\).
> - Sur l’intervalle \(I\) : \(f\) est concave \({\iff}\) \(f''\) est négative sur \(I\) \({\iff}\) \(f'\) est décroissante sur \(I\).

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = x^4 + 3x^2 - 7}\) sur \(\mathbb{R}\). \({f'(x) = 4x^3 + 6x}\) et \({f''(x) = 12x^2 + 6 > 0}\) : \(f\) est convexe sur \(\mathbb{R}\).
{{% /details %}}

## Point d’inflexion

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction définie et deux fois dérivable sur un intervalle \(I\), et \(a\) un réel de \(I\).
> - Si \(f''\) **change de signe** en \(a\) (c’est-à-dire si \(f'\) change de sens de variation en \(a\)), alors la courbe de \(f\) admet un point d’inflexion au point d’abscisse \(a\).
> - En particulier, si \(f''\) s’annule en changeant de signe en \(a\), la courbe de \(f\) admet un point d’inflexion d’abscisse \(a\).

> [!IMPORTANT] **Remarque**
>
> Il ne suffit pas que \({f''(a) = 0}\) : pour \({f(x) = x^4}\), \({f''(x) = 12x^2}\) s’annule en 0 sans changer de signe, et la courbe n’a pas de point d’inflexion (la fonction est convexe sur \(\mathbb{R}\)).

## Étudier la convexité avec les dérivées

> [!NOTE] **Méthode 1 - Utiliser le signe de la dérivée seconde**
>
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = \dfrac{1}{3}x^3 - 2x^2 + 3x + 1}\).
> 1. Calculer \(f''(x)\).
> 2. Étudier la convexité de \(f\).
> 3. Déterminer les éventuels points d’inflexion de sa courbe.

{{% details title="Solution commentée" closed="true" %}}
1. \({f'(x) = x^2 - 4x + 3}\) et \({f''(x) = 2x - 4}\).
2. \({f''(x) \leq 0 \iff x \leq 2}\) : \(f\) est concave sur \({]-\infty\,;\,2]}\) et convexe sur \({[2\,;\,+\infty[}\).
3. \(f''\) s’annule en changeant de signe en 2 : la courbe admet un point d’inflexion d’abscisse 2, de coordonnées \(\left(2\,;\,f(2)\right) = \left(2\,;\,\dfrac{8}{3} - 8 + 6 + 1\right) = \left(2\,;\,\dfrac{5}{3}\right)\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Utiliser le sens de variation de la dérivée**
>
> Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \({g(x) = xe^{x}}\).
> 1. Calculer \(g'(x)\) et \(g''(x)\).
> 2. Étudier la convexité de \(g\) et déterminer le point d’inflexion de sa courbe.

{{% details title="Solution commentée" closed="true" %}}
1. \({g'(x) = e^x + xe^x = (x + 1)e^x}\) et \({g''(x) = e^x + (x + 1)e^x = (x + 2)e^x}\).
2. \({e^x > 0}\), donc \(g''(x)\) est du signe de \({x + 2}\) : \(g'\) est décroissante puis croissante, et \(g\) est concave sur \({]-\infty\,;\,-2]}\), convexe sur \({[-2\,;\,+\infty[}\). \(g''\) s’annule en changeant de signe en \({-2}\) : le point \({\left(-2\,;\,-2e^{-2}\right)}\) est un point d’inflexion.
{{% /details %}}
