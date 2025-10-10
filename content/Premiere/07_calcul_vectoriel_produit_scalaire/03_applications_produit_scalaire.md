---
title: 'Applications du produit scalaire'
weight: 3
cascade:
  type: docs
---

## Théorème de la médiane

> [!TIP] **Théorème**  
> Soient deux points \(A\) et \(B\) du plan et \(I\) le milieu de \([AB]\).  
> Quel que soit le point \(M\) du plan, on a :  
>
> \[
\overrightarrow{MA} \cdot \overrightarrow{MB} = MI^2 - \frac{AB^2}{4}
\]
> ![](/images/image114.png)

{{% details title="Exemple" closed="true" %}}
On considère un triangle \(MAB\) tel que \(\overrightarrow{MA} \cdot \overrightarrow{MB} = -1{,}5\) et \(AB = 4\).  
La longueur de la médiane \(MI\) est alors obtenue à l’aide du théorème de la médiane :

\[
MI^2 = \overrightarrow{MA} \cdot \overrightarrow{MB} + \frac{AB^2}{4} = -1{,}5 + \frac{4^2}{4} = \frac{5}{2}
\]

Et ainsi, \(MI = \sqrt{\frac{5}{2}} = \frac{\sqrt{10}}{2}\).
{{% /details %}}


## Formule d’Al-Kashi

> [!TIP] **Propriété**  
> Dans un triangle \(ABC\), avec les notations de la figure ci-contre, on a :  
>
> \[
a^2 = b^2 + c^2 - 2bc \cos(\widehat{A})
\]
> ![](/images/image115.png)

> [!IMPORTANT] **Remarque**  
> On a de même :  
> \[
b^2 = a^2 + c^2 - 2ac \cos(\widehat{B}), \quad c^2 = a^2 + b^2 - 2ab \cos(\widehat{C})
\]

{{% details title="Exemple" closed="true" %}}
On donne un triangle avec \(a = 9\), \(b = 7\), \(c = 4\).  
La relation \(a^2 = b^2 + c^2 - 2bc \cos(\widehat{A})\) donne :

\[
\cos(\widehat{A}) = \frac{b^2 + c^2 - a^2}{2bc} = \frac{-2}{7}
\]

La calculatrice permet alors d’obtenir, grâce à la touche \(\cos^{-1}\), une valeur approchée de l’angle :  
\(\widehat{A} \approx 107°\).
{{% /details %}}


## Caractérisation du cercle

> [!TIP] **Propriété**  
> Soient \(A\), \(B\) et \(M\) trois points du plan.  
> \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 0\) si et seulement si \(M\) appartient au cercle de diamètre \([AB]\).
> ![](/images/image116.png)

> [!IMPORTANT] **Remarque**  
> Cela revient à dire que l’ensemble des points \(M\) tels que  
> \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 0\)  
> est le cercle de diamètre \([AB]\).


## Exercice résolu — Déterminer une ligne de niveau

> [!NOTE] **Énoncé**  
> \(A\) et \(B\) sont deux points distincts tels que \(AB = 6 \text{ cm}\).  
> Montrer que l’ensemble des points \(M\) tels que  
> \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 40\)  
> est un cercle dont on précisera le centre et le rayon.

{{% details title="Solution commentée" closed="true" %}}
Soit \(I\) le milieu de \([AB]\).  
D’après le théorème de la médiane, on a :

\[
\overrightarrow{MA} \cdot \overrightarrow{MB} = 40 \iff MI^2 - \frac{AB^2}{4} = 40 \iff MI^2 = 40 + \frac{6^2}{4} = 49
\]

Ainsi, \(MI = 7\).

L’ensemble des points \(M\) tels que \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 40\) est donc le **cercle de centre \(I\)** et de **rayon 7**.
{{% /details %}}


## Exercice résolu — Calculer des longueurs et des angles dans un triangle

> [!NOTE] **Énoncé**  
> \(ABC\) est un triangle tel que \(AB = 6\), \(AC = 12\) et \(\widehat{BAC} = 60°\).  
> 1. Calculer \(BC\) et en déduire une mesure de l’angle \(\widehat{BCA}\).  
> 2. Que peut-on en déduire pour le triangle \(ABC\) ?

{{% details title="Solution commentée" closed="true" %}}
1. D’après la formule d’Al-Kashi,  
\[
BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})
\]
\[
BC^2 = 6^2 + 12^2 - 2 \times 6 \times 12 \times \cos(60°) = 108
\]
\[
\Rightarrow BC = \sqrt{108} = 6\sqrt{3}.
\]

On utilise à nouveau la formule d’Al-Kashi :  
\[
AB^2 = AC^2 + BC^2 - 2 \times AC \times BC \times \cos(\widehat{BCA})
\]
\[
6^2 = 12^2 + (6\sqrt{3})^2 - 2 \times 12 \times 6\sqrt{3} \times \cos(\widehat{BCA})
\]
\[
\Rightarrow \cos(\widehat{BCA}) = \frac{3}{\sqrt{3}} = \frac{\sqrt{3}}{2}
\]
\[
\Rightarrow \widehat{BCA} = 30°.
\]

2. La somme des angles d’un triangle étant égale à 180°,  
\[
\widehat{ABC} = 180° - 60° - 30° = 90°.
\]

Donc, **le triangle \(ABC\) est rectangle en \(B\)**.
{{% /details %}}


## Exercice résolu — Utiliser la caractérisation d’un cercle

> [!NOTE] **Énoncé**  
> Soit \(ABC\) un triangle tel que \(AB = 4\), \(AC = 3\) et \(BC = 5\).  
> Montrer que le point \(A\) appartient au cercle de diamètre \([BC]\).

{{% details title="Solution commentée" closed="true" %}}
\[
AB^2 + AC^2 = 4^2 + 3^2 = 25, \quad BC^2 = 5^2 = 25.
\]
Ainsi, \(AB^2 + AC^2 = BC^2\).

Donc le triangle \(ABC\) est **rectangle en \(A\)**.  
On a alors \(\overrightarrow{AB} \cdot \overrightarrow{AC} = 0\).  
Donc **le point \(A\) appartient au cercle de diamètre \([BC]\)**.
{{% /details %}}