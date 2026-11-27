---
title: 'Lecture sur le cercle trigonométrique'
weight: 1
cascade:
  type: docs
---

## Le cercle trigonométrique

> [!TIP] **Définition**  
> Le plan est muni d’un repère orthonormé \((O; I, J)\). Le **cercle trigonométrique** est le cercle de centre \(O\) et de rayon 1, orienté de \(I\) vers \(J\), c’est-à-dire dans le sens contraire des aiguilles d’une montre. Ce sens de parcours est appelé **sens direct** (ou sens trigonométrique).

On a \( I(1;0) \) et \( J(0;1) \) ; on note \( I' \) et \( J' \) les points symétriques de \( I \) et \( J \) par rapport à \(O\), soit \({I'(-1;0)}\) et \({J'(0;-1)}\).

![](/images/image156.png)

## Longueur d’un arc

> [!TIP] **Propriété (admise)**  
> Sur le cercle trigonométrique, la longueur de l’arc \( \overset{\frown}{IM} \) (dans l’unité du repère) est proportionnelle à la mesure en degrés de l’angle \( \widehat{IOM} \).

Le cercle entier, de rayon 1, mesure \(2\pi\). On en déduit :

| Mesure de \( \widehat{IOM} \) en degrés | 360 | 180 | 90 | 270 |
|----------------------------------------|------|------|-----|------|
| Longueur de l’arc \( \overset{\frown}{IM} \)  | \(2\pi\) | \(\pi\) | \(\dfrac{\pi}{2}\) | \(\dfrac{3\pi}{2}\) |

Sur la figure ci-dessus, les nombres en rouge indiquent la longueur de l’arc parcouru depuis \(I\), dans le sens direct, pour atteindre \(J\), \(I'\) et \(J'\).

## Radian

> [!TIP] **Définition**  
> Soit \( U \) le point du cercle trigonométrique tel que l’arc \( \overset{\frown}{IU} \), parcouru dans le sens direct, ait pour longueur 1.  
> Le **radian** (symbole rad) est la mesure de l’angle \( \widehat{IOU} \) : \({\widehat{IOU} = 1}\) rad.

![](/images/image157.png)

> [!TIP] **Propriété (admise)**  
> La mesure d’un angle en **degrés** et sa mesure en **radians** sont proportionnelles, avec :  
> \[
360° = 2\pi \text{ rad} \quad \text{soit} \quad 1° = \dfrac{\pi}{180} \text{ rad}.
\]

| Mesure en degrés | 30 | 45 | 60 | 90 | 180 | 1 | \(\dfrac{180}{\pi}\) |
|------------------|----|----|----|----|------|---|-------------------|
| Mesure en radians | \(\dfrac{\pi}{6}\) | \(\dfrac{\pi}{4}\) | \(\dfrac{\pi}{3}\) | \(\dfrac{\pi}{2}\) | \(\pi\) | \(\dfrac{\pi}{180}\) | 1 |

> [!IMPORTANT] **Remarque**  
> Sur le cercle trigonométrique (rayon 1), la mesure en radians de l’angle \( \widehat{IOM} \) est égale à la longueur de l’arc \( \overset{\frown}{IM} \).

{{% details title="Exemples" closed="true" %}}
- Le point \(I'\) est diamétralement opposé à \(I\) : l’arc \( \overset{\frown}{II'} \) est un demi-cercle, de longueur \( \pi \).  
  L’angle \( \widehat{IOI'} \) mesure \( 180° \), soit \( \pi \) rad.
- 1 rad vaut \({\dfrac{180}{\pi} \approx 57,3°}\).
{{% /details %}}

## Exercice résolu 1 : Déterminer la longueur d’un arc

> [!NOTE] **Énoncé**  
> Sur le cercle trigonométrique ci-dessous, les points \(A\), \(B\) et \(C\) sont tels que, en tournant dans le sens direct à partir de \(I\), les angles \(\widehat{IOA}\), \(\widehat{IOB}\) et \(\widehat{IOC}\) mesurent respectivement \(60°\), \(150°\) et \(300°\).  
> Déterminer la longueur des arcs \( \overset{\frown}{IA} \), \( \overset{\frown}{IB} \) et \( \overset{\frown}{IC} \) parcourus dans le sens direct.
>
> ![](/images/image158.png)

{{% details title="Solution commentée" closed="true" %}}
Le cercle entier mesure \( 2\pi \) et correspond à \( 360° \). Comme la longueur d’arc est proportionnelle à l’angle, la longueur associée à un angle de \(d\) degrés est \({\dfrac{d}{360} \times 2\pi = \dfrac{d\,\pi}{180}}\).

| Angle (en °) | 60 | 150 | 300 |
|---------------|----|-----|-----|
| Longueur de l’arc | \({\dfrac{60\pi}{180} = \dfrac{\pi}{3}}\) | \({\dfrac{150\pi}{180} = \dfrac{5\pi}{6}}\) | \({\dfrac{300\pi}{180} = \dfrac{5\pi}{3}}\) |

{{% /details %}}

## Exercice résolu 2 : Convertir des angles en radians

> [!NOTE] **Énoncé**  
> Convertir en radians les angles suivants :  
> 1. \(60°\) 2. \(18°\) 3. \(120°\) 4. \(240°\) 5. \(315°\)

{{% details title="Solution commentée" closed="true" %}}
On utilise la proportionnalité \({180° = \pi \text{ rad}}\) : un angle de \(d\) degrés mesure \({\dfrac{d \times \pi}{180}}\) radians, puis on simplifie la fraction.

| Angle (°) | 60 | 18 | 120 | 240 | 315 |
|------------|----|---|-----|-----|-----|
| Angle (rad) | \(\dfrac{\pi}{3}\) | \(\dfrac{\pi}{10}\) | \(\dfrac{2\pi}{3}\) | \(\dfrac{4\pi}{3}\) | \(\dfrac{7\pi}{4}\) |
{{% /details %}}

## Exercice résolu 3 : Convertir des angles en degrés

> [!NOTE] **Énoncé**  
> Convertir en degrés les angles suivants, donnés en radians :  
> 1. \( \dfrac{5\pi}{6} \) 2. \( \dfrac{3\pi}{5} \) 3. \( \dfrac{\pi}{12} \) 4. \( \dfrac{5\pi}{3} \) 5. \( \dfrac{3\pi}{8} \)

{{% details title="Solution commentée" closed="true" %}}
On utilise \({\pi \text{ rad} = 180°}\) : il suffit de remplacer \(\pi\) par 180 et de calculer.

| Angle (rad) | \(\dfrac{5\pi}{6}\) | \(\dfrac{3\pi}{5}\) | \(\dfrac{\pi}{12}\) | \(\dfrac{5\pi}{3}\) | \(\dfrac{3\pi}{8}\) |
|--------------|------------------|------------------|------------------|------------------|----------------|
| Angle (°)    | 150 | 108 | 15 | 300 | 67,5 |
{{% /details %}}
