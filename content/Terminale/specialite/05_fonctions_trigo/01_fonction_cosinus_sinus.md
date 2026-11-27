---
title: 'Fonctions cosinus et sinus'
weight: 1
cascade:
  type: docs
---

## Définitions

Le plan est muni d’un repère orthonormé direct \( (O\,;\,I,\,J) \). Pour tout réel \( x \), on note \( M \) son point-image sur le cercle trigonométrique : \( M \) a pour coordonnées \( (\cos(x)\,;\,\sin(x)) \).

> [!TIP] **Définition**
>
> - La fonction **cosinus**, notée \(\cos\), est la fonction définie sur \( \mathbb{R} \) par :
> $$\cos : x \mapsto \cos(x).$$
> - La fonction **sinus**, notée \(\sin\), est la fonction définie sur \( \mathbb{R} \) par :
> $$\sin : x \mapsto \sin(x).$$

![](/images/image169.png)

![](/images/image170.png)

> [!IMPORTANT] **Remarque**
>
> Pour tout réel \( x \) :
> - \({-1 \leq \cos(x) \leq 1}\) ;
> - \({-1 \leq \sin(x) \leq 1}\) ;
> - \({\cos^2(x) + \sin^2(x) = 1}\).

## Dérivabilité

> [!TIP] **Propriétés (admises)**
>
> - La fonction cosinus est dérivable sur \( \mathbb{R} \), et sa dérivée est la fonction \({-\sin : x \mapsto -\sin(x)}\).
> - La fonction sinus est dérivable sur \( \mathbb{R} \), et sa dérivée est la fonction \({\cos : x \mapsto \cos(x)}\).

{{% details title="Exemple" closed="true" %}}

- La fonction \({f : x \mapsto 2x^2 + 5\cos(x)}\) est dérivable sur \( \mathbb{R} \), et \({f'(x) = 4x - 5\sin(x)}\).
- La fonction \({g : x \mapsto x^3 - \sin(x)}\) est dérivable sur \( \mathbb{R} \), et \({g'(x) = 3x^2 - \cos(x)}\).

{{% /details %}}

> [!TIP] **Propriétés**
>
> Soient \( a \) et \( b \) deux réels.
> - La fonction \({x \mapsto \cos(ax + b)}\) est dérivable sur \( \mathbb{R} \), de dérivée :
> $$x \mapsto -a\sin(ax + b).$$
> - La fonction \({x \mapsto \sin(ax + b)}\) est dérivable sur \( \mathbb{R} \), de dérivée :
> $$x \mapsto a\cos(ax + b).$$

> [!TIP] **Propriétés**
>
> Soit \( u \) une fonction dérivable sur un intervalle \( I \).
> - La fonction \({\cos(u) : x \mapsto \cos(u(x))}\) est dérivable sur \( I \), de dérivée \({-u' \times \sin(u)}\).
> - La fonction \({\sin(u) : x \mapsto \sin(u(x))}\) est dérivable sur \( I \), de dérivée \({u' \times \cos(u)}\).

Ces formules sont des cas particuliers de la dérivée d’une fonction composée \({(v \circ u)' = (v' \circ u) \times u'}\).

## Limites

> [!TIP] **Propriétés**
>
> - Les fonctions sinus et cosinus n’ont pas de limite en \({-\infty}\) ni en \({+\infty}\).
> - En 0 :
> $$\lim_{x \to 0} \dfrac{\sin(x)}{x} = 1 \qquad \lim_{x \to 0} \dfrac{\cos(x) - 1}{x} = 0.$$

> [!IMPORTANT] **Remarque**
>
> Ces deux limites traduisent les nombres dérivés en 0 : \({\dfrac{\sin(x) - \sin(0)}{x - 0}}\) tend vers \({\sin'(0) = \cos(0) = 1}\), et \({\dfrac{\cos(x) - \cos(0)}{x - 0}}\) tend vers \({\cos'(0) = -\sin(0) = 0}\).

> [!NOTE] **Méthode 1 - Calculer des dérivées de fonctions trigonométriques**
>
> Déterminer la dérivée de chacune des fonctions suivantes.
>
> 1. \( f \), définie sur \( \mathbb{R} \) par \({f(x) = -2\cos(x) + 4\sin(x) - x^2}\).
> 2. \( g \), définie sur \( \mathbb{R} \) par \({g(x) = e^x \sin(x)}\).

{{% details title="Solution commentée" closed="true" %}}

1. On dérive terme à terme : \( f'(x) = -2 \times (-\sin(x)) + 4\cos(x) - 2x = 2\sin(x) + 4\cos(x) - 2x \).

2. \({g = uv}\) avec \({u(x) = e^x}\) et \({v(x) = \sin(x)}\), donc \({u'(x) = e^x}\) et \({v'(x) = \cos(x)}\) :  
\( g'(x) = e^x\sin(x) + e^x\cos(x) = e^x\big(\sin(x) + \cos(x)\big) \).

{{% /details %}}

> [!NOTE] **Méthode 2 - Calculer des dérivées de fonctions composées**
>
> Calculer la dérivée des fonctions \(h\) et \(k\) définies sur \( \mathbb{R} \) par :
> 1. \({h(x) = -2\sin\!\left(3x + \dfrac{\pi}{4}\right)}\) ;
> 2. \({k(x) = \cos(x^2)}\).

{{% details title="Solution commentée" closed="true" %}}

1. \( h(x) \) est de la forme \({-2\sin(ax + b)}\), avec \({a = 3}\) et \({b = \dfrac{\pi}{4}}\).

   Donc \( h'(x) = -2 \times 3\cos\!\left(3x + \dfrac{\pi}{4}\right) = -6\cos\!\left(3x + \dfrac{\pi}{4}\right) \).

2. \({k = \cos(u)}\) avec \({u(x) = x^2}\) et \({u'(x) = 2x}\).

   Donc \( k'(x) = -u'(x)\sin(u(x)) = -2x\sin(x^2) \).

{{% /details %}}

> [!NOTE] **Méthode 3 - Déterminer des limites**
>
> On considère la fonction \( f \) définie sur \({]0\,;+\infty[}\) par \({f(x) = \dfrac{\sin(3x)}{x}}\).
>
> 1. Démontrer que, pour tout réel \({x > 0}\), \({-\dfrac{1}{x} \leq f(x) \leq \dfrac{1}{x}}\). En déduire la limite de \( f \) en \({+\infty}\).
> 2. À la calculatrice, dresser un tableau de valeurs de \( f(x) \) pour \( x \) allant de \( 0{,}01 \) à \( 0{,}05 \) avec un pas de \( 0{,}01 \), puis de \( 0{,}001 \) à \( 0{,}005 \) avec un pas de \( 0{,}001 \). Vers quelle valeur \( f(x) \) semble-t-elle tendre quand \( x \) tend vers 0 ?
> 3. À l’aide de \({\displaystyle\lim_{X \to 0} \dfrac{\sin(X)}{X} = 1}\), déterminer la limite de \( f \) en 0.

{{% details title="Solution commentée" closed="true" %}}

1. Pour tout réel \(x\), \({-1 \leq \sin(3x) \leq 1}\). En divisant par \({x > 0}\) (le sens est conservé) :  
\({-\dfrac{1}{x} \leq \dfrac{\sin(3x)}{x} \leq \dfrac{1}{x}}\).

   Comme \({\displaystyle\lim_{x \to +\infty} \dfrac{1}{x} = 0}\) (et donc aussi \({\displaystyle\lim_{x \to +\infty} -\dfrac{1}{x} = 0}\)), le théorème des gendarmes donne \({\displaystyle\lim_{x \to +\infty} f(x) = 0}\).

2. On obtient (valeurs arrondies) :

   | \( x \)    | 0,01     | 0,02     | 0,03     | 0,04     | 0,05     |
   |------------|----------|----------|----------|----------|----------|
   | \( f(x) \) | 2,999550 | 2,998200 | 2,995952 | 2,992805 | 2,988763 |

   | \( x \)    | 0,001      | 0,002      | 0,003      | 0,004      | 0,005      |
   |------------|------------|------------|------------|------------|------------|
   | \( f(x) \) | 2,99999550 | 2,99998200 | 2,99995950 | 2,99992800 | 2,99988750 |

   \( f(x) \) semble tendre vers 3 quand \( x \) tend vers 0.

3. Pour \({x > 0}\), on fait apparaître le quotient \(\dfrac{\sin(X)}{X}\) avec \({X = 3x}\) :
\[
f(x) = \dfrac{\sin(3x)}{x} = 3 \times \dfrac{\sin(3x)}{3x}.
\]
   Quand \({x \to 0}\), \({X = 3x \to 0}\), et \({\displaystyle\lim_{X \to 0} \dfrac{\sin(X)}{X} = 1}\). Par composition, \({\displaystyle\lim_{x \to 0} \dfrac{\sin(3x)}{3x} = 1}\), puis, par produit, \({\displaystyle\lim_{x \to 0} f(x) = 3}\).

{{% /details %}}
