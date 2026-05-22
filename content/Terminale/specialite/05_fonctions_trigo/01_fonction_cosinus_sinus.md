---
title: 'Fonctions cosinus et sinus'
weight: 1
cascade:
  type: docs
---

# Fonctions cosinus et sinus

## Définitions

Soit \( M \) le point-image d'un réel \( x \) sur le cercle trigonométrique dans un repère orthonormé direct \( (O\,;\,I,\,J) \). On a ainsi \( M(\cos(x)\,;\,\sin(x)) \).

> [!TIP] **Définition**
>
> - La fonction **cosinus**, notée cos, est définie sur \( \mathbb{R} \) par :
> $$\cos : x \mapsto \cos(x).$$
> - La fonction **sinus**, notée sin, est définie sur \( \mathbb{R} \) par :
> $$\sin : x \mapsto \sin(x).$$

![](/images/image138.png)

> [!IMPORTANT] **Remarque**
>
> Pour tout réel \( x \) :
> - \( -1 \leq \cos(x) \leq 1 \)
> - \( -1 \leq \sin(x) \leq 1 \)
> - \( \cos^2(x) + \sin^2(x) = 1 \)

## Dérivabilité

> [!TIP] **Propriétés (admises)**
>
> - La fonction cosinus est dérivable sur \( \mathbb{R} \) et sa dérivée est la fonction \( -\sin : x \mapsto -\sin(x) \).
> - La fonction sinus est dérivable sur \( \mathbb{R} \) et sa dérivée est la fonction \( \cos : x \mapsto \cos(x) \).

{{% details title="Exemple" closed="true" %}}

- La fonction \( f : x \mapsto x - 3\cos(x) \) est dérivable sur \( \mathbb{R} \) et sa dérivée est \( f' : x \mapsto 1 + 3\sin(x) \).
- La fonction \( g : x \mapsto \sin(x) + 4 \) est dérivable sur \( \mathbb{R} \) et sa dérivée est \( g' : x \mapsto g'(x) = \cos(x) \).

{{% /details %}}

> [!TIP] **Propriétés**
>
> Soient \( a \) et \( b \) deux nombres réels.
> - La fonction \( x \mapsto \cos(ax + b) \) est dérivable sur \( \mathbb{R} \) et sa dérivée est la fonction :
> $$x \mapsto -a\sin(ax + b)$$
> - La fonction \( x \mapsto \sin(ax + b) \) est dérivable sur \( \mathbb{R} \) et sa dérivée est la fonction :
> $$x \mapsto a\cos(ax + b)$$

> [!TIP] **Propriétés**
>
> Soit \( u \) une fonction dérivable sur un intervalle \( I \) de \( \mathbb{R} \).
> - La fonction \( \cos(u) \) est dérivable sur \( I \) et sa dérivée est la fonction \( -u' \times (\sin(u)) \).
> - La fonction \( \sin(u) \) est dérivable sur \( I \) et sa dérivée est la fonction \( u' \times (\cos(u)) \).

## Limites

> [!TIP] **Propriétés**
>
> - Les fonctions sinus et cosinus n'ont pas de limite en \( -\infty \) et en \( +\infty \).
>
> $$\lim_{x \to 0} \frac{\sin(x)}{x} = 1 \qquad \lim_{x \to 0} \frac{\cos(x) - 1}{x} = 0$$

> [!NOTE] **Méthode 1 — Calculer des dérivées de fonctions trigonométriques**
>
> Calculer l'expression des fonctions dérivées des fonctions suivantes.
>
> 1. \( f \), définie sur \( \mathbb{R} \) par \( f(x) = 3\cos(x) - \sin(x) + 3x \).
> 2. \( g \), définie sur \( \mathbb{R} \) par \( g(x) = x^2\cos(x) + 3 \).

{{% details title="Solution commentée" closed="true" %}}

1. En dérivant une somme de trois fonctions, on obtient : \( f'(x) = -3\sin(x) - \cos(x) + 3 \).

2. À l'aide de la formule de dérivation d'un produit, on obtient : \( g'(x) = 2x\cos(x) - x^2\sin(x) \).

{{% /details %}}

> [!NOTE] **Méthode 2 — Calculer des dérivées de fonctions composées**
>
> Soit \( h \) la fonction définie sur \( \mathbb{R} \) par \( h(x) = 3\cos\!\left(2x - \dfrac{2\pi}{5}\right) \). Calculer \( h'(x) \).

{{% details title="Solution commentée" closed="true" %}}

1. \( h(x) \) est de la forme \( 3\cos(ax + b) \), avec \( a = 2 \) et \( b = -\dfrac{2\pi}{5} \).

   Ainsi, \( h'(x) = 3 \times 2 \times \left(-\sin\!\left(2x - \dfrac{2\pi}{5}\right)\right) \).

   Donc \( h'(x) = -6\sin\!\left(2x - \dfrac{2\pi}{5}\right) \).

{{% /details %}}

> [!NOTE] **Méthode 3 — Déterminer des limites**
>
> Soit \( f \) la fonction définie sur \( ]0\,;+\infty[ \) par \( f(x) = \dfrac{\sin^2(x)}{x} \).
>
> 1. Démontrer que, pour tout réel \( x > 0 \), \( 0 \leq f(x) \leq \dfrac{1}{x} \). En déduire la limite de \( f \) en \( +\infty \).
> 2. Avec la calculatrice, réaliser un tableau de valeurs de \( f(x) \) sur \( [0{,}01\,;\,0{,}1] \) avec un pas de \( 0{,}01 \), puis sur \( [0{,}001\,;\,0{,}01] \) avec un pas de \( 0{,}001 \). Vers quelle valeur semble tendre \( f(x) \) quand \( x \) tend vers \( 0 \) ?
> 3. En utilisant \( \displaystyle\lim_{x \to 0} \frac{\sin(x)}{x} = 1 \), déterminer la limite de \( f \) en \( 0 \).

{{% details title="Solution commentée" closed="true" %}}

1. Pour tout \( x > 0 \), \( -1 \leq \sin(x) \leq 1 \), donc \( 0 \leq \sin^2(x) \leq 1 \). Ainsi, \( 0 \leq \dfrac{\sin^2(x)}{x} \leq \dfrac{1}{x} \), car on divise par \( x > 0 \).

   Or, \( \displaystyle\lim_{x \to +\infty} \frac{1}{x} = 0 \). Donc, d'après le théorème des gendarmes, \( \displaystyle\lim_{x \to +\infty} f(x) = 0 \).

2. On obtient les tableaux de valeurs suivants.

   Pas de 0,01 :

   | \( x \)  | \( f(x) \)      |
   |----------|-----------------|
   | 0,01     | 0,009999667     |
   | 0,02     | 0,019997933     |
   | 0,03     | 0,029991        |
   | 0,04     | 0,039970867     |
   | 0,05     | 0,049938963     |
   | 0,06     | 0,059882903     |
   | 0,07     | 0,069898574     |

   Pas de 0,001 :

   | \( x \)  | \( f(x) \)       |
   |----------|------------------|
   | 0,001    | 0,0009999997     |
   | 0,002    | 0,001999997      |
   | 0,003    | 0,002999991      |
   | 0,004    | 0,003999979      |
   | 0,005    | 0,004999958      |
   | 0,006    | 0,005999920      |
   | 0,007    | 0,006999886      |

   \( f(x) \) semble tendre vers \( 0 \) quand \( x \) tend vers \( 0 \).

3. \( f(x) = \dfrac{\sin^2(x)}{x} = \sin(x) \times \dfrac{\sin(x)}{x} \). Or, \( \displaystyle\lim_{x \to 0} \sin(x) = 0 \) et \( \displaystyle\lim_{x \to 0} \dfrac{\sin(x)}{x} = 1 \), donc, par produit, \( \displaystyle\lim_{x \to 0} f(x) = 0 \).

{{% /details %}}