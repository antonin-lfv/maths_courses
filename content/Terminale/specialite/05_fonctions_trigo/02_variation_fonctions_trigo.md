---
title: 'Variations des fonctions trigonométriques'
weight: 2
cascade:
  type: docs
---

## Variations des fonctions trigonométriques

> [!TIP] **Propriété**
>
> Sur l’intervalle \({[-\pi\,;\,\pi]}\), les fonctions cosinus et sinus ont les tableaux de variation suivants.

![](/images/image267.png)

![](/images/image268.png)

> [!IMPORTANT] **Remarque**
>
> Ces tableaux s’obtiennent à partir du signe des dérivées \({\cos' = -\sin}\) et \({\sin' = \cos}\), que l’on lit sur le cercle trigonométrique : \(\sin x\) est positif lorsque le point-image est dans le demi-cercle supérieur, \(\cos x\) est positif lorsqu’il est dans le demi-cercle de droite.

![](/images/image269.png)

## Courbes représentatives des fonctions trigonométriques

> [!TIP] **Propriétés**
>
> Pour tout réel \( x \) :
> - \({\cos(-x) = \cos(x)}\) : la fonction cosinus est **paire** ; sa courbe est symétrique par rapport à l’axe des ordonnées.
> - \({\cos(x + 2\pi) = \cos(x)}\) : la fonction cosinus est **périodique de période \( 2\pi \)** ; sa courbe est formée d’un même motif répété sur des intervalles de longueur \( 2\pi \).
> - \({\sin(-x) = -\sin(x)}\) : la fonction sinus est **impaire** ; sa courbe est symétrique par rapport à l’origine \( O \) du repère.
> - \({\sin(x + 2\pi) = \sin(x)}\) : la fonction sinus est **périodique de période \( 2\pi \)** ; sa courbe est formée d’un même motif répété sur des intervalles de longueur \( 2\pi \).

> [!IMPORTANT] **Remarque**
>
> Grâce à la périodicité, l’étude des variations sur un intervalle de longueur \(2\pi\) (comme \({[-\pi ; \pi]}\)) suffit pour connaître les variations sur \( \mathbb{R} \) tout entier.
> Voici les courbes des fonctions sinus et cosinus sur une partie de \( \mathbb{R} \) :

![](/images/image270.png)

> [!NOTE] **Méthode 1 - Étudier la parité et la périodicité d’une fonction trigonométrique**
>
> On considère la fonction \( f \) définie sur \( \mathbb{R} \) par \({f(x) = 2\cos(x) - \sin(x)}\).
>
> 1. Calculer la valeur exacte de \( f\!\left(\dfrac{49\pi}{4}\right) \).
> 2. La fonction \( f \) est-elle paire ? impaire ?
> 3. La fonction \( f \) est-elle périodique de période \( 2\pi \) ? de période \( \pi \) ?

{{% details title="Solution commentée" closed="true" %}}

1. On écrit \({\dfrac{49\pi}{4} = \dfrac{48\pi}{4} + \dfrac{\pi}{4} = \dfrac{\pi}{4} + 6 \times 2\pi}\). Les fonctions cosinus et sinus étant \(2\pi\)-périodiques, \({f\!\left(\dfrac{49\pi}{4}\right) = f\!\left(\dfrac{\pi}{4}\right)}\).

   Or \({f\!\left(\dfrac{\pi}{4}\right) = 2 \times \dfrac{\sqrt{2}}{2} - \dfrac{\sqrt{2}}{2} = \dfrac{\sqrt{2}}{2}}\). Donc \({f\!\left(\dfrac{49\pi}{4}\right) = \dfrac{\sqrt{2}}{2}}\).

2. Pour montrer qu’une fonction n’est pas paire (ou pas impaire), un contre-exemple suffit.

   \({f\!\left(\dfrac{\pi}{2}\right) = 2 \times 0 - 1 = -1}\) et \({f\!\left(-\dfrac{\pi}{2}\right) = 2 \times 0 - (-1) = 1}\) : \({f\!\left(-\dfrac{\pi}{2}\right) \neq f\!\left(\dfrac{\pi}{2}\right)}\), donc \( f \) **n’est pas paire**.

   Par ailleurs, \({f(0) = 2\cos(0) - \sin(0) = 2}\). Si \(f\) était impaire, on aurait \({f(-0) = -f(0)}\), soit \({f(0) = 0}\). Ce n’est pas le cas : \( f \) **n’est pas impaire**.

3. - Pour tout réel \( x \), \( f(x + 2\pi) = 2\cos(x + 2\pi) - \sin(x + 2\pi) = 2\cos(x) - \sin(x) = f(x) \) : \( f \) est **périodique de période \( 2\pi \)**.
   - \({f(0) = 2}\) et \({f(0 + \pi) = 2\cos(\pi) - \sin(\pi) = -2}\) ; donc \({f(0 + \pi) \neq f(0)}\) : \( f \) **n’est pas** périodique de période \( \pi \).

{{% /details %}}

> [!NOTE] **Méthode 2 - Étudier les variations d’une fonction trigonométrique**
>
> On considère la fonction \( t \) définie sur \( \mathbb{R} \) par \({t(x) = 2 - \cos(2x)}\).
>
> 1. Démontrer que \( t \) est paire et périodique de période \( \pi \).
> 2. Dresser le tableau de variation de \( t \) sur \( \left[0\,;\,\dfrac{\pi}{2}\right] \).
> 3. En déduire, grâce à la question 1, le tableau de variation de \( t \) sur \({[-\pi\,;\,\pi]}\).

{{% details title="Solution commentée" closed="true" %}}

1. Pour tout réel \( x \), \( t(-x) = 2 - \cos(-2x) = 2 - \cos(2x) = t(x) \), car la fonction cosinus est paire. Donc \( t \) est **paire**.

   Pour tout réel \( x \), \( t(x + \pi) = 2 - \cos(2x + 2\pi) = 2 - \cos(2x) = t(x) \), car la fonction cosinus est \(2\pi\)-périodique. Donc \( t \) est **périodique de période \( \pi \)**.

2. \( t \) est dérivable sur \( \mathbb{R} \) et, d’après la dérivée de \({x \mapsto \cos(ax + b)}\) avec \({a = 2}\) :
$$t'(x) = -(-2\sin(2x)) = 2\sin(2x).$$
   Pour tout \({x \in \left[0\,;\,\dfrac{\pi}{2}\right]}\), on a \({2x \in [0\,;\,\pi]}\), donc \({\sin(2x) \geq 0}\) et \({t'(x) \geq 0}\) : \(t\) est croissante sur cet intervalle.
   Avec \({t(0) = 2 - 1 = 1}\) et \({t\!\left(\dfrac{\pi}{2}\right) = 2 - \cos(\pi) = 3}\), on obtient :

![](/images/image271.png)

3. Par parité, la courbe est symétrique par rapport à l’axe des ordonnées : \(t\) est décroissante sur \({\left[-\dfrac{\pi}{2} ; 0\right]}\). Par périodicité (translation de \(\pi\)), le comportement sur \({\left[-\dfrac{\pi}{2} ; \dfrac{\pi}{2}\right]}\) se reproduit sur \(\left[\dfrac{\pi}{2} ; \dfrac{3\pi}{2}\right]\), donc sur \(\left[\dfrac{\pi}{2} ; \pi\right]\) et, de même, sur \({\left[-\pi ; -\dfrac{\pi}{2}\right]}\).

   Le tableau de variation de \( t \) sur \({[-\pi\,;\,\pi]}\) est donc :

![](/images/image272.png)

{{% /details %}}
