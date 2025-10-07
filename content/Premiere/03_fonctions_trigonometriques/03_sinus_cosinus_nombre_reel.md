---
title: 'Sinus et cosinus d’un nombre réel'
weight: 3
cascade:
  type: docs
---

## Définitions

> [!TIP] **Définition**  
> Soit \( \alpha \) un nombre réel et \( M \) le point-image de \( \alpha \) sur le **cercle trigonométrique**.  
> Dans le repère \((O; I, J)\) :
> - L’abscisse de \( M \) est le **cosinus** de \( \alpha \), noté \( \cos(\alpha) \).
> - L’ordonnée de \( M \) est le **sinus** de \( \alpha \), noté \( \sin(\alpha) \).
> - Le point \( M \) a donc pour coordonnées \( M(\cos(\alpha); \sin(\alpha)) \).

![](/images/image77.png)

{{% details title="Exemple" closed="true" %}}
Le réel \( \frac{\pi}{2} \) a pour point-image \( J(0;1) \).  
Donc :  
\[
\cos\left(\frac{\pi}{2}\right) = 0 \quad \text{et} \quad \sin\left(\frac{\pi}{2}\right) = 1.
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


## Valeurs remarquables du sinus et du cosinus

Certaines valeurs de \( \cos(\alpha) \) et \( \sin(\alpha) \) sont à connaître pour des angles particuliers.

![](/images/image78.png)


## Lien avec le sinus et le cosinus dans un triangle rectangle

> [!TIP] **Interprétation géométrique**  
> Pour tout \( \alpha \in \left]0; \frac{\pi}{2}\right[ \), on considère le point \( M \) sur le cercle et \( H \) son projeté sur l’axe des abscisses.

Alors :
\[
\cos(\alpha) = \frac{OH}{OM} = \frac{\text{côté adjacent}}{\text{hypoténuse}}=\text{abscisse de } M
\]
\[
\sin(\alpha) = \frac{HM}{OM} = \frac{\text{côté opposé}}{\text{hypoténuse}}=\text{ordonnée de } M
\]

![](/images/image79.png)


## Exercice résolu 1 — Utiliser le cercle trigonométrique

> [!NOTE] **Énoncé**  
> Donner, sans calculatrice, le signe de :  
> \( a = 1 - \cos\left(\frac{\pi}{5}\right) \)  
> \( b = -\sin\left(\frac{\pi}{7}\right) - 1 \)

{{% details title="Solution commentée" closed="true" %}}
1. On sait que \(-1 \leq \cos(\frac{\pi}{5}) \leq 1\).  
   Donc \( 1 - \cos(\frac{\pi}{5}) \geq 0 \) → \( a \) est **positif**.

2. On sait que \(-1 \leq \sin(\frac{\pi}{7}) \leq 1\).  
   Donc \( -1 - \sin(\frac{\pi}{7}) \leq 0 \) → \( b \) est **négatif**.
{{% /details %}}


## Exercice résolu 2 — Déterminer des valeurs du sinus et du cosinus

> [!NOTE] **Énoncé**  
> Déterminer les valeurs exactes de \( \cos\left(-\frac{\pi}{4}\right) \) et \( \sin\left(-\frac{\pi}{4}\right) \).

{{% details title="Solution commentée" closed="true" %}}
Le point \( N \), image de \(-\frac{\pi}{4}\), est symétrique de \( M \) (image de \(\frac{\pi}{4}\)) par rapport à l’axe des abscisses.

\[
M\left(\frac{\sqrt{2}}{2}; \frac{\sqrt{2}}{2}\right) \Rightarrow N\left(\frac{\sqrt{2}}{2}; -\frac{\sqrt{2}}{2}\right)
\]
Ainsi :  
\[
\cos\left(-\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}, \quad \sin\left(-\frac{\pi}{4}\right) = -\frac{\sqrt{2}}{2}.
\]

![](/images/image80.png)
{{% /details %}}


## Exercice résolu 3 — Utiliser les valeurs remarquables du sinus et du cosinus

> [!NOTE] **Énoncé**  
> Calculer :
> \[
A = \cos\left(\frac{\pi}{3}\right) - \sin\left(\frac{\pi}{3}\right), \quad B = \cos\left(\frac{\pi}{4}\right) + \sin\left(\frac{3\pi}{4}\right)
\]

{{% details title="Solution commentée" closed="true" %}}
\[
\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}, \quad \sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}
\]
\[
A = \frac{1}{2} - \frac{\sqrt{3}}{2} = \frac{1 - \sqrt{3}}{2}
\]

\[
\cos\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}, \quad \sin\left(\frac{3\pi}{4}\right) = \frac{\sqrt{2}}{2}
\]
\[
B = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = \sqrt{2}
\]

![](/images/image81.png)
{{% /details %}}