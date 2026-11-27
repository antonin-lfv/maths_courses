---
title: 'Aire d’un triangle'
weight: 3
cascade:
  type: docs
---

## Hauteurs

> [!TIP] **Définition**
>
> Une **hauteur** d’un triangle est une droite passant par un sommet du triangle et perpendiculaire au côté opposé à ce sommet (ou à la droite qui le porte).

> [!IMPORTANT] **Remarques**
>
> - Le mot « hauteur » peut désigner soit la droite, soit la longueur du segment qui joint le sommet au pied de cette droite.
> - Une hauteur n’est pas toujours à l’intérieur du triangle (c’est le cas lorsque le triangle a un angle obtus).

> [!TIP] **Propriété et définition**
>
> - Les trois hauteurs d’un triangle sont concourantes (elles passent par un même point).
> - Le point d’intersection des trois hauteurs est appelé l’**orthocentre** du triangle.

![](/images/image423.png)

## Aire

> [!TIP] **Propriété**
>
> L’aire d’un triangle est égale au produit de la longueur d’un côté, appelé **base**, et de la hauteur issue du sommet opposé, divisé par \(2\) :
> \[
\mathcal{A} = \frac{\text{base} \times \text{hauteur}}{2}.
\]

{{% details title="Pourquoi ?" closed="true" %}}
La hauteur partage le triangle en deux triangles rectangles. Chacun d’eux est la moitié d’un rectangle ; les deux rectangles accolés forment un rectangle de longueur la base et de largeur la hauteur. Le triangle a donc pour aire la moitié de \(\text{base} \times \text{hauteur}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Un triangle a une base de \(7\) cm et une hauteur associée de \(4\) cm : \(\mathcal{A} = \dfrac{7 \times 4}{2} = 14\) cm².
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> N’importe quel côté peut servir de base, à condition d’utiliser la hauteur qui lui est associée.

> [!TIP] **Propriété**
>
> Deux triangles qui ont des bases de même longueur et des hauteurs de même longueur ont la même aire.

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Un triangle \(ABC\) est rectangle en \(A\), avec \(AB = 6\) cm, \(AC = 8\) cm et \(BC = 10\) cm. Calculer son aire, puis la hauteur \(AH\) issue de \(A\).

{{% details title="Solution commentée" closed="true" %}}
Dans un triangle rectangle, chaque côté de l’angle droit est la hauteur associée à l’autre : \(\mathcal{A} = \dfrac{6 \times 8}{2} = 24\) cm².

En prenant \([BC]\) comme base : \(\dfrac{10 \times AH}{2} = 24\), donc \(10 \times AH = 48\) et \(AH = 4{,}8\) cm.
{{% /details %}}
