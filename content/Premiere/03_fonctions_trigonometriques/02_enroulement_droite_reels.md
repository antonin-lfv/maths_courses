---
title: 'Enroulement de la droite des réels'
weight: 2
cascade:
  type: docs
---

## Point-image d’un réel

> [!TIP] **Définition**  
> Le plan est muni d’un repère orthonormé \((O; I, J)\) et du **cercle trigonométrique**. On note \(\mathcal{D}\) la tangente au cercle au point \(I\), munie d’un repère d’origine \(I\) (et de même unité que le repère du plan).  
> On imagine que l’on **enroule** la droite \(\mathcal{D}\) autour du cercle : la partie positive dans le sens direct, la partie négative dans le sens indirect.

![](/images/image159.png)

> [!TIP] **Propriété (admise)**  
> - Pour tout réel \( \alpha \), le point d’abscisse \( \alpha \) de \(\mathcal{D}\) vient se placer sur un **unique point \(M\)** du cercle trigonométrique, appelé **point-image** de \( \alpha \).  
> - Réciproquement, chaque point \(M\) du cercle est le point-image d’une infinité de réels, qui diffèrent deux à deux d’un multiple de \(2\pi\).  
> - Si \( \alpha \) est l’un de ces réels, tous les autres sont de la forme \({\alpha + 2k\pi}\) avec \({k \in \mathbb{Z}}\) :  
>   \[
\dots, \ \alpha - 4\pi, \ \alpha - 2\pi, \ \alpha + 2\pi, \ \alpha + 4\pi, \ \dots
\]

{{% details title="Exemples" closed="true" %}}
- Le point-image de \({\alpha = -\dfrac{\pi}{2}}\) est \({J'(0;-1)}\) : on parcourt un quart de cercle dans le sens indirect.  
- Le point \( I' \) est le point-image d’une infinité de réels :  
  \[
  \pi, \ \pi + 2\pi = 3\pi, \ \pi - 2\pi = -\pi, \ 5\pi, \dots
  \]
{{% /details %}}

## Points-images remarquables du cercle trigonométrique

> [!TIP] **Propriété (admise)**  
> Dans le premier quart de cercle, les points \( I, A, B, C, J \) sont appelés **points remarquables**. Ce sont les points-images des réels suivants, pour tout \({k \in \mathbb{Z}}\) :
> \[
\begin{align*}
I &: \ 0 + 2k\pi, \\
A &: \ \dfrac{\pi}{6} + 2k\pi, \\
B &: \ \dfrac{\pi}{4} + 2k\pi, \\
C &: \ \dfrac{\pi}{3} + 2k\pi, \\
J &: \ \dfrac{\pi}{2} + 2k\pi.
\end{align*}
\]

![](/images/image160.png)

## Exercice résolu 1 : Se repérer sur le cercle trigonométrique

> [!NOTE] **Énoncé**  
> Sur le cercle trigonométrique ci-dessous, \(A\) est le point d’abscisse \({-\dfrac12}\) situé au-dessus de l’axe des abscisses, et \(B\) le point d’abscisse \(\dfrac12\) situé au-dessous.  
> Pour chacun des points \( A \) et \( B \), donner deux réels dont il est le point-image.
> ![](/images/image161.png)

{{% details title="Solution commentée" closed="true" %}}
- \(A\) est le symétrique du point remarquable \(C\) (image de \(\dfrac{\pi}{3}\)) par rapport à l’axe des ordonnées. Pour aller de \( I \) à \( A \) dans le sens direct, on parcourt donc \({\pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}}\).  
  \( A \) est le point-image de \(\dfrac{2\pi}{3}\).  
  En retranchant \( 2\pi \), on en obtient un autre :  
  \[
  \dfrac{2\pi}{3} - 2\pi = -\dfrac{4\pi}{3}.
  \]
  \( A \) est donc aussi le point-image de \({-\dfrac{4\pi}{3}}\).

- \(B\) est le symétrique de \(C\) par rapport à l’axe des abscisses : on l’atteint en parcourant \(\dfrac{\pi}{3}\) dans le sens indirect. \( B \) est le point-image de \({-\dfrac{\pi}{3}}\).  
  En ajoutant \( 2\pi \) :  
  \[
  -\dfrac{\pi}{3} + 2\pi = \dfrac{5\pi}{3}.
  \]
  \( B \) est donc aussi le point-image de \(\dfrac{5\pi}{3}\).
{{% /details %}}

## Exercice résolu 2 : Placer des points sur le cercle trigonométrique

> [!NOTE] **Énoncé**  
> Sur le cercle ci-dessous, on a placé les points \( A\left(\dfrac{\pi}{6}\right) \), \( B\left(\dfrac{\pi}{4}\right) \) et \( C\left(\dfrac{\pi}{3}\right) \).  
> Placer les points \( E\left(\dfrac{5\pi}{6}\right) \) et \({F\left(-\dfrac{3\pi}{4}\right)}\).
> ![](/images/image162.png)

{{% details title="Solution commentée" closed="true" %}}
- \( A \) est le point-image de \(\dfrac{\pi}{6}\). Comme \({\dfrac{5\pi}{6} = 5 \times \dfrac{\pi}{6}}\), on reporte cinq fois l’arc \( \overset{\frown}{IA} \) à partir de \( I \), dans le sens direct : on passe par \(C\left(\dfrac{2\pi}{6}\right)\), \(J\left(\dfrac{3\pi}{6}\right)\), puis on arrive en \( E \).

- \( B \) est le point-image de \(\dfrac{\pi}{4}\). Comme \({-\dfrac{3\pi}{4} = -3 \times \dfrac{\pi}{4}}\), on reporte trois fois l’arc \( \overset{\frown}{IB} \) à partir de \( I \), dans le sens indirect (sens des aiguilles d’une montre) : on passe par \({J'\left(-\dfrac{2\pi}{4}\right)}\) puis on arrive en \( F \).

![](/images/image163.png)
{{% /details %}}
