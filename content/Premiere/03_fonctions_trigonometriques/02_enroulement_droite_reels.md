---
title: 'Enroulement de la droite des réels'
weight: 2
cascade:
  type: docs
---

## Point-image d’un réel

> [!TIP] **Définition**  
> Dans un repère orthonormé \((O; I, J)\), on considère le **cercle trigonométrique** et la tangente \(\mathcal{D}\) au cercle au point \(I\).  
> On définit sur cette droite un repère d’origine \(I\).  
> On imagine que la droite \(\mathcal{D}\) s’enroule autour du cercle.

![](/images/image72.png)

> [!TIP] **Propriété (admise)**  
> - Pour tout réel \( \alpha \), le point d’abscisse \( \alpha \) sur \(\mathcal{D}\) correspond à un **unique point \(M\)** sur le cercle trigonométrique.  
>   Ce point \(M\) est appelé **point-image** de \( \alpha \).  
> - Réciproquement, à tout point \(M\) du cercle correspond une infinité de réels dont les abscisses diffèrent de multiples de \(2\pi\).  
> - Si \( \alpha \) est une abscisse d’un point de \(\mathcal{D}\), alors toutes les autres sont :  
>   \[
\alpha + 2\pi, \ \alpha + 4\pi, ... \ \alpha - 2\pi, \ \alpha - 4\pi, \dots
\]

{{% details title="Exemples" closed="true" %}}
- Si \( \alpha = \pi \), le point-image est \( I' \), symétrique de \( I \) par rapport à \( O \).  
- Le point \( J \) correspond à une infinité de valeurs d’abscisses :  
  \[
  \frac{\pi}{2}, \ \frac{\pi}{2} + 2\pi, \ \frac{\pi}{2} - 2\pi, \dots
  \]
{{% /details %}}


## Points-images remarquables du cercle trigonométrique

> [!TIP] **Propriété (admise)**  
> Les points \( I, A, B, C, J \) du cercle sont appelés **points remarquables** et sont définis par :
> \[
\begin{align*}
\widehat{IOI} &= 2k\pi, \\
\widehat{IOA} &= \frac{\pi}{6} + 2k\pi, \\
\widehat{IOB} &= \frac{\pi}{4} + 2k\pi, \\
\widehat{IOC} &= \frac{\pi}{3} + 2k\pi, \\
\widehat{IOJ} &= \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}.
\end{align*}
\]

![](/images/image73.png)


## Exercice résolu 1 : Se repérer sur le cercle trigonométrique

> [!NOTE] **Énoncé**  
> Pour chacun des points \( A \) et \( B \) du cercle ci-dessous, donner deux réels dont il est le point-image.
> ![](/images/image74.png)

{{% details title="Solution commentée" closed="true" %}}
- Pour aller de \( I \) à \( A \) dans le sens trigonométrique, on parcourt un arc égal à \(\frac{\pi}{4}\).  
  Donc \( A \) est le point-image du réel \(\frac{\pi}{4}\).  
  En ajoutant ou retranchant \( 2\pi \), on obtient d’autres réels :  
  \[
  \frac{\pi}{4} - 2\pi = -\frac{7\pi}{4}.
  \]
  \( A \) est donc aussi le point-image de \(-\frac{7\pi}{4}\).

- \( B \) est le point-image de \(-\frac{\pi}{4}\).  
  En ajoutant \( 2\pi \), on obtient :  
  \[
  -\frac{\pi}{4} + 2\pi = \frac{7\pi}{4}.
  \]
  Donc \( B \) est aussi le point-image de \(\frac{7\pi}{4}\).
{{% /details %}}


## Exercice résolu 2 : Placer des points sur le cercle trigonométrique

> [!NOTE] **Énoncé**  
> Sur le cercle ci-dessous, on a placé les points \( A(\frac{\pi}{6}) \), \( B(\frac{\pi}{4}) \) et \( C(\frac{\pi}{3}) \).  
> Placer les points \( E(\frac{3\pi}{4}) \) et \( F(-\frac{4\pi}{3}) \).
> ![](/images/image75.png)

{{% details title="Solution commentée" closed="true" %}}
- \( B \) est le point-image de \(\frac{\pi}{4}\).  
  En reportant deux fois cet arc à partir de \( I \), on arrive sur \( J \), le point-image de \( \frac{2\pi}{4} \).  
  En reportant encore une fois l’arc, on obtient \( E \), le point-image de \(\frac{3\pi}{4}\).

- \( C \) est le point-image de \(\frac{\pi}{3}\).  
  En reportant quatre fois l’arc \( \widehat{OC} \) dans le sens contraire du sens trigonométrique, on obtient \( F \), point-image de \(-\frac{4\pi}{3}\).

![](/images/image76.png)
{{% /details %}}