---
title: 'Variations des fonctions trigonométriques'
weight: 2
cascade:
  type: docs
---

## Variations des fonctions trigonométriques

> [!TIP] **Propriété**
>
> Les tableaux de variation des fonctions cosinus et sinus sur \( [-\pi\,;\,\pi] \) sont les suivants.

![](/images/image139.png)

> [!IMPORTANT] **Remarque**
>
> Le signe des dérivées des fonctions trigonométriques s'obtient par lecture sur le cercle trigonométrique :

![](/images/image140.png)

## Courbes représentatives des fonctions trigonométriques

> [!TIP] **Propriétés**
>
> Pour tout réel \( x \) :
> - \( \cos(-x) = \cos(x) \). La fonction cosinus est paire. Sa représentation graphique admet l'axe des ordonnées comme axe de symétrie.
> - \( \cos(x + 2\pi) = \cos(x) \). La fonction cosinus est périodique de période \( 2\pi \). La courbe se répète sur des intervalles de longueur \( 2\pi \).
> - \( \sin(-x) = -\sin(x) \). La fonction sinus est impaire. Sa représentation graphique admet l'origine \( O \) du repère comme centre de symétrie.
> - \( \sin(x + 2\pi) = \sin(x) \). La fonction sinus est périodique de période \( 2\pi \). La courbe se répète sur des intervalles de longueur \( 2\pi \).

> [!IMPORTANT] **Remarque**
>
> La périodicité des fonctions cosinus et sinus permet d'étendre l'étude de leurs variations à \( \mathbb{R} \).
> Les courbes représentatives des fonctions sinus et cosinus sur \( \mathbb{R} \) sont les suivantes.

![](/images/image141.png)

> [!NOTE] **Méthode 1 — Étudier la parité et la périodicité d'une fonction trigonométrique**
>
> On considère la fonction \( f \), définie sur \( \mathbb{R} \) par \( f(x) = \cos(x) + \sin(x) \).
>
> 1. Donner la valeur exacte de \( f\!\left(-\dfrac{65\pi}{6}\right) \).
> 2. La fonction \( f \) est-elle paire ? impaire ?
> 3. La fonction \( f \) est-elle de période \( 2\pi \) ? Est-elle de période \( \pi \) ?

{{% details title="Solution commentée" closed="true" %}}

1. \( f\!\left(-\dfrac{65\pi}{6}\right) = f\!\left(-\dfrac{60\pi}{6} - \dfrac{5\pi}{6}\right) = f\!\left(-10\pi - \dfrac{5\pi}{6}\right) = f\!\left(-\dfrac{5\pi}{6} - 5 \times 2\pi\right) = f\!\left(-\dfrac{5\pi}{6}\right) \), car les fonctions cosinus et sinus sont périodiques de période \( 2\pi \).

   Or, \( f\!\left(-\dfrac{5\pi}{6}\right) = \cos\!\left(-\dfrac{5\pi}{6}\right) + \sin\!\left(-\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt{3}}{2} - \dfrac{1}{2} = \dfrac{-\sqrt{3}-1}{2} \). Donc \( f\!\left(-\dfrac{65\pi}{6}\right) = \dfrac{-\sqrt{3}-1}{2} \).

2. \( f\!\left(-\dfrac{\pi}{2}\right) = \cos\!\left(-\dfrac{\pi}{2}\right) + \sin\!\left(-\dfrac{\pi}{2}\right) = -1 \) et \( f\!\left(\dfrac{\pi}{2}\right) = \cos\!\left(\dfrac{\pi}{2}\right) + \sin\!\left(\dfrac{\pi}{2}\right) = 1 \).

   \( f\!\left(-\dfrac{\pi}{2}\right) \neq f\!\left(\dfrac{\pi}{2}\right) \), donc la fonction \( f \) n'est pas paire.

   \( f\!\left(-\dfrac{\pi}{2}\right) \neq -f\!\left(\dfrac{\pi}{2}\right) \), donc la fonction \( f \) n'est pas impaire.

3. - Pour tout réel \( x \), \( f(x + 2\pi) = \cos(x + 2\pi) + \sin(x + 2\pi) = \cos(x) + \sin(x) = f(x) \), car les fonctions cosinus et sinus sont périodiques de période \( 2\pi \). Donc \( f \) est périodique de période \( 2\pi \).
   - \( f(0) = \cos(0) + \sin(0) = 1 \) et \( f(0 + \pi) = \cos(\pi) + \sin(\pi) = -1 \) ; donc \( f(0) \neq f(0 + \pi) \).
   La fonction \( f \) n'est donc pas périodique de période \( \pi \).

{{% /details %}}

> [!NOTE] **Méthode 2 — Étudier les variations d'une fonction trigonométrique**
>
> Soit \( t \) la fonction définie sur \( \mathbb{R} \) par \( t(x) = 1 + \cos(2x) \).
>
> 1. Justifier que \( t \) est paire et de période \( \pi \).
> 2. Dresser le tableau de variation de \( t \) sur l'intervalle \( \left[0\,;\,\dfrac{\pi}{2}\right] \).
> 3. En déduire, à l'aide de la question 1, le tableau de variation de \( t \) sur l'intervalle \( [-\pi\,;\,\pi] \).

{{% details title="Solution commentée" closed="true" %}}

1. Pour tout réel \( x \), \( \cos(-2x) = \cos(2x) \), car la fonction cosinus est paire. Donc \( t \) est paire.

   Pour tout réel \( x \), \( \cos(2(x + \pi)) = \cos(2x + 2\pi) = \cos(2x) \), car la fonction cosinus est périodique de période \( 2\pi \). Donc \( f(x + \pi) = f(x) \). \( t \) est périodique de période \( \pi \).

2. \( t \) est dérivable sur \( \mathbb{R} \), de dérivée :
$$t'(x) = -2\sin(2x).$$
   Pour tout \( x \in \left[0\,;\,\dfrac{\pi}{2}\right] \), \( 2x \in [0\,;\,\pi] \),
   donc \( \sin(2x) \geq 0 \), donc \( -2\sin(2x) \leq 0 \).
   Comme \( t(0) = 2 \) et \( t\!\left(\dfrac{\pi}{2}\right) = 0 \), on obtient ainsi le tableau ci-dessous.

![](/images/image142.png)

3. Compte tenu de la parité et de la périodicité de \( t \), on peut compléter le tableau précédent par symétrie axiale (parité) puis par translation (périodicité).

   Le tableau de variation de \( t \) sur l'intervalle \( [-\pi\,;\,\pi] \) est le suivant.

![](/images/image143.png)

{{% /details %}}