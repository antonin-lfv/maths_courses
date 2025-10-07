---
title: 'Lecture sur le cercle trigonométrique'
weight: 1
cascade:
  type: docs
---

## Le cercle trigonométrique

> [!TIP] **Définition**  
> Dans un repère orthonormé \((O; I, J)\), le **cercle trigonométrique** est le cercle de centre \(O\) et de rayon 1, parcouru de \(I\) vers \(J\) dans le sens inverse des aiguilles d'une montre (appelé **sens trigonométrique** ou **sens direct**).

On note \( I(1;0) \) et \( J(0;1) \), ainsi que \( I' \) et \( J' \) leurs symétriques par rapport à \(O\).

![](/images/image68.png)


## Longueur d'un arc

> [!TIP] **Propriété (admise)**  
> Sur le cercle trigonométrique, la longueur de l'arc de cercle \( \widehat{IM} \) (exprimée dans l'unité du repère) est proportionnelle à la mesure de l'angle \( \widehat{IOM} \) exprimée en degré.

| Mesure de \( \widehat{IOM} \) en degré | 360 | 180 | 90 | 270 |
|----------------------------------------|------|------|-----|------|
| Longueur de l'arc \( \widehat{IM} \)  | \(2\pi\) | \(\pi\) | \(\frac{\pi}{2}\) | \(\frac{3\pi}{2}\) |

![](/images/image69.png)


## Radian

> [!TIP] **Définition**  
> Soit \( U \) le point du cercle trigonométrique tel que l'arc \( \widehat{IU} \) ait pour longueur 1 unité.  
> On définit **un radian** (noté 1 rad) comme la mesure de l'angle \( \widehat{IOU} \).

> [!TIP] **Propriété (admise)**  
> Les mesures d'un angle en **degré** et en **radian** sont proportionnelles.  
> On a la relation :  
> \[
360° = 2\pi \text{ rad} \quad \text{soit} \quad 1° = \frac{\pi}{180} \text{ rad}.
\]

| Mesure en degré | 30 | 45 | 60 | 90 | 180 | 1 | \(\frac{180}{\pi}\) |
|------------------|----|----|----|----|------|---|-------------------|
| Mesure en radian | \(\frac{\pi}{6}\) | \(\frac{\pi}{4}\) | \(\frac{\pi}{3}\) | \(\frac{\pi}{2}\) | \(\pi\) | \(\frac{\pi}{180}\) | 1 |

![](/images/image70.png)

{{% details title="Exemples" closed="true" %}}
- L'arc \( \widehat{IJ} \) a pour longueur \( \frac{\pi}{2} \).  
  La mesure en degré de l'angle \( \widehat{IOJ} \) est \( 90° \).  
  Sa mesure en radian est donc \( \frac{\pi}{2} \).
{{% /details %}}


## Exercice résolu 1 : Déterminer la longueur d'un arc

> [!NOTE] **Énoncé**  
> Déterminer la longueur des arcs \( \widehat{IA} \), \( \widehat{IB} \) et \( \widehat{IC} \) sur un cercle de centre \(O\) et de rayon 1.

{{% details title="Solution commentée" closed="true" %}}
La longueur totale du cercle est \( 2\pi \), correspondant à un angle de \( 360° \).  
Les longueurs d'arc et les angles au centre étant proportionnels, on obtient :

| Angle (en °) | 45 | 120 | 135 |
|---------------|----|-----|-----|
| Longueur de l'arc | \(\frac{\pi}{4}\) | \(\frac{2\pi}{3}\) | \(\frac{3\pi}{4}\) |

![](/images/image71.png)

{{% /details %}}


## Exercice résolu 2 : Convertir des angles en radian

> [!NOTE] **Énoncé**  
> Convertir en radians les angles suivants :  
> 1. \(30°\) 2. \(0°\) 3. \(150°\) 4. \(210°\) 5. \(225°\)

{{% details title="Solution commentée" closed="true" %}}
On utilise la proportion \(360° = 2\pi \text{ rad}\), soit \(1° = \frac{\pi}{180} \text{ rad}\).

| Angle (°) | 30 | 0 | 150 | 210 | 225 |
|------------|----|---|-----|-----|-----|
| Angle (rad) | \(\frac{\pi}{6}\) | 0 | \(\frac{5\pi}{6}\) | \(\frac{7\pi}{6}\) | \(\frac{5\pi}{4}\) |
{{% /details %}}


## Exercice résolu 3 : Convertir des angles en degré

> [!NOTE] **Énoncé**  
> Convertir en degrés les angles suivants :  
> 1. \( \frac{3\pi}{2} \) 2. \( \frac{2\pi}{5} \) 3. \( \frac{3\pi}{4} \) 4. \( \frac{7\pi}{3} \) 5. \( \frac{\pi}{8} \)

{{% details title="Solution commentée" closed="true" %}}
On utilise la proportion \( 2\pi \text{ rad} = 360° \), soit \( 1 \text{ rad} = \frac{180°}{\pi} \).

| Angle (rad) | \(\frac{3\pi}{2}\) | \(\frac{2\pi}{5}\) | \(\frac{3\pi}{4}\) | \(\frac{5\pi}{12}\) | \(\frac{\pi}{8}\) |
|--------------|------------------|------------------|------------------|------------------|----------------|
| Angle (°)    | 270 | 72 | 135 | 75 | 22,5 |
{{% /details %}}