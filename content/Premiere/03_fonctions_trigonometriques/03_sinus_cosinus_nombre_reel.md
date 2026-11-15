---
title: 'Sinus et cosinus d’un nombre réel'
weight: 3
cascade:
  type: docs
---

## Définitions

> [!TIP] **Définition**  
> Soit \( \alpha \) un réel et \( M \) son point-image sur le **cercle trigonométrique**. Dans le repère \((O; I, J)\) :
> - le **cosinus** de \( \alpha \), noté \( \cos(\alpha) \), est l’abscisse de \( M \) ;
> - le **sinus** de \( \alpha \), noté \( \sin(\alpha) \), est l’ordonnée de \( M \).
>
> Ainsi, \( M \) a pour coordonnées \( M(\cos(\alpha); \sin(\alpha)) \).

![](/images/image164.png)

{{% details title="Exemple" closed="true" %}}
Le point-image du réel \( \pi \) est \( I'(-1;0) \).  
Par conséquent :  
\[
\cos(\pi) = -1 \quad \text{et} \quad \sin(\pi) = 0.
\]
{{% /details %}}

> [!TIP] **Propriétés**  
> Pour tout réel \( \alpha \) :
> \[
-1 \leq \cos(\alpha) \leq 1 \quad \text{et} \quad -1 \leq \sin(\alpha) \leq 1
\]
> \[
\cos^2(\alpha) + \sin^2(\alpha) = 1
\]

> [!IMPORTANT] **Remarque**  
> Les inégalités viennent de ce que \(M\) est sur un cercle de rayon 1 centré en \(O\). L’égalité \(\cos^2(\alpha) + \sin^2(\alpha) = 1\) traduit \(OM^2 = 1\) (théorème de Pythagore). La notation \(\cos^2(\alpha)\) signifie \((\cos(\alpha))^2\).

## Valeurs remarquables du sinus et du cosinus

Les valeurs suivantes, obtenues à partir des points remarquables du cercle, sont à connaître par cœur.

| \( \alpha \)         | \( 0 \) | \( \frac{\pi}{6} \)     | \( \frac{\pi}{4} \)     | \( \frac{\pi}{3} \)     | \( \frac{\pi}{2} \) | \( \pi \) |
|----------------------|---------|-------------------------|-------------------------|-------------------------|---------------------|-----------|
| \( \cos(\alpha) \)   | \( 1 \) | \( \frac{\sqrt{3}}{2} \) | \( \frac{\sqrt{2}}{2} \) | \( \frac{1}{2} \)       | \( 0 \)             | \( -1 \)  |
| \( \sin(\alpha) \)   | \( 0 \) | \( \frac{1}{2} \)       | \( \frac{\sqrt{2}}{2} \) | \( \frac{\sqrt{3}}{2} \) | \( 1 \)             | \( 0 \)   |

![](/images/image165.png)

## Lien avec le sinus et le cosinus dans un triangle rectangle

> [!TIP] **Interprétation géométrique**  
> Soit \( \alpha \in \left]0; \frac{\pi}{2}\right[ \), \( M \) son point-image sur le cercle et \( H \) le projeté orthogonal de \( M \) sur l’axe des abscisses. Le triangle \(OHM\) est rectangle en \(H\), d’hypoténuse \(OM = 1\), et :
> \[
\cos(\alpha) = \frac{OH}{OM} = \frac{\text{côté adjacent}}{\text{hypoténuse}} = \text{abscisse de } M
\]
> \[
\sin(\alpha) = \frac{HM}{OM} = \frac{\text{côté opposé}}{\text{hypoténuse}} = \text{ordonnée de } M
\]

On retrouve donc, pour les angles aigus, les définitions du cosinus et du sinus vues au collège.

![](/images/image166.png)

## Exercice résolu 1 — Utiliser le cercle trigonométrique

> [!NOTE] **Énoncé**  
> Déterminer, sans calculatrice, le signe des nombres :  
> \( a = \cos\left(\frac{\pi}{9}\right) + 1 \)  
> \( b = \sin\left(\frac{2\pi}{7}\right) - 1 \)

{{% details title="Solution commentée" closed="true" %}}
1. Pour tout réel, le cosinus est compris entre \(-1\) et 1 : \(-1 \leq \cos(\frac{\pi}{9}) \leq 1\).  
   En ajoutant 1 : \( 0 \leq \cos(\frac{\pi}{9}) + 1 \leq 2 \). Le nombre \( a \) est donc **positif**.

2. De même, \(-1 \leq \sin(\frac{2\pi}{7}) \leq 1\).  
   En retranchant 1 : \( -2 \leq \sin(\frac{2\pi}{7}) - 1 \leq 0 \). Le nombre \( b \) est donc **négatif**.
{{% /details %}}

## Exercice résolu 2 — Déterminer des valeurs du sinus et du cosinus

> [!NOTE] **Énoncé**  
> Déterminer les valeurs exactes de \( \cos\left(\frac{5\pi}{6}\right) \) et \( \sin\left(\frac{5\pi}{6}\right) \).

{{% details title="Solution commentée" closed="true" %}}
On a \(\frac{5\pi}{6} = \pi - \frac{\pi}{6}\). Le point \( N \), image de \(\frac{5\pi}{6}\), est donc le symétrique du point \( M \), image de \(\frac{\pi}{6}\), par rapport à l’axe des ordonnées : même ordonnée, abscisse opposée.

\[
M\left(\frac{\sqrt{3}}{2}; \frac{1}{2}\right) \Rightarrow N\left(-\frac{\sqrt{3}}{2}; \frac{1}{2}\right)
\]
Ainsi :  
\[
\cos\left(\frac{5\pi}{6}\right) = -\frac{\sqrt{3}}{2}, \quad \sin\left(\frac{5\pi}{6}\right) = \frac{1}{2}.
\]

![](/images/image167.png)
{{% /details %}}

## Exercice résolu 3 — Utiliser les valeurs remarquables du sinus et du cosinus

> [!NOTE] **Énoncé**  
> Calculer les valeurs exactes de :
> \[
A = \sin\left(\frac{\pi}{6}\right) + \cos\left(\frac{\pi}{6}\right), \quad B = \cos\left(\frac{2\pi}{3}\right) - \sin\left(\frac{\pi}{4}\right)
\]

{{% details title="Solution commentée" closed="true" %}}
D’après les valeurs remarquables :
\[
\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}, \quad \cos\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}
\]
\[
A = \frac{1}{2} + \frac{\sqrt{3}}{2} = \frac{1 + \sqrt{3}}{2}
\]

Le point-image de \(\frac{2\pi}{3}\) est le symétrique de celui de \(\frac{\pi}{3}\) par rapport à l’axe des ordonnées, donc \(\cos\left(\frac{2\pi}{3}\right) = -\cos\left(\frac{\pi}{3}\right) = -\frac{1}{2}\). Par ailleurs \(\sin\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}\).
\[
B = -\frac{1}{2} - \frac{\sqrt{2}}{2} = -\frac{1 + \sqrt{2}}{2}
\]

![](/images/image168.png)
{{% /details %}}
