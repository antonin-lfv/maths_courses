---
title: 'Applications du produit scalaire'
weight: 3
cascade:
  type: docs
---

## Théorème de la médiane

> [!TIP] **Théorème**  
> Soient \(A\) et \(B\) deux points du plan, et \(I\) le milieu de \([AB]\).  
> Pour tout point \(M\) du plan :  
>
> \[
\overrightarrow{MA} \cdot \overrightarrow{MB} = MI^2 - \frac{AB^2}{4}
\]
> ![](/images/image198.png)

> [!IMPORTANT] **Remarque**  
> On l’obtient en écrivant \(\overrightarrow{MA} = \overrightarrow{MI} + \overrightarrow{IA}\) et \(\overrightarrow{MB} = \overrightarrow{MI} + \overrightarrow{IB} = \overrightarrow{MI} - \overrightarrow{IA}\), puis en utilisant \((\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = \|\vec{u}\|^2 - \|\vec{v}\|^2\) avec \(IA = \frac{AB}{2}\).

{{% details title="Exemple" closed="true" %}}
Dans un triangle \(MAB\), on sait que \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 5\) et \(AB = 6\). On note \(I\) le milieu de \([AB]\).  
Le théorème de la médiane donne la longueur de la médiane \([MI]\) :

\[
MI^2 = \overrightarrow{MA} \cdot \overrightarrow{MB} + \frac{AB^2}{4} = 5 + \frac{6^2}{4} = 5 + 9 = 14
\]

Donc \(MI = \sqrt{14}\).
{{% /details %}}

## Formule d’Al-Kashi

> [!TIP] **Propriété**  
> Dans un triangle \(ABC\), on note \(a = BC\), \(b = AC\), \(c = AB\) (chaque côté porte le nom, en minuscule, du sommet opposé). Alors :  
>
> \[
a^2 = b^2 + c^2 - 2bc \cos(\widehat{A})
\]
> ![](/images/image199.png)

> [!IMPORTANT] **Remarque**  
> De la même façon :  
> \[
b^2 = a^2 + c^2 - 2ac \cos(\widehat{B}), \quad c^2 = a^2 + b^2 - 2ab \cos(\widehat{C})
\]
> Si l’angle \(\widehat{A}\) est droit, \(\cos(\widehat{A}) = 0\) et l’on retrouve le théorème de Pythagore : Al-Kashi en est une généralisation.

{{% details title="Exemple" closed="true" %}}
On considère un triangle tel que \(a = 7\), \(b = 5\), \(c = 3\).  
D’après la formule \(a^2 = b^2 + c^2 - 2bc \cos(\widehat{A})\) :

\[
\cos(\widehat{A}) = \frac{b^2 + c^2 - a^2}{2bc} = \frac{25 + 9 - 49}{2 \times 5 \times 3} = \frac{-15}{30} = -\frac{1}{2}
\]

On en déduit \(\widehat{A} = 120°\). Dans un cas moins favorable, la touche \(\cos^{-1}\) (ou \(\arccos\)) de la calculatrice donne une valeur approchée de l’angle.
{{% /details %}}

## Caractérisation du cercle

> [!TIP] **Propriété**  
> Soient \(A\), \(B\) et \(M\) trois points du plan.  
> \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 0\) si et seulement si \(M\) appartient au cercle de diamètre \([AB]\).
> ![](/images/image200.png)

> [!IMPORTANT] **Remarque**  
> Autrement dit, l’ensemble des points \(M\) du plan tels que \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 0\) est le cercle de diamètre \([AB]\). (C’est cohérent avec le théorème de la médiane : \(MI^2 = \frac{AB^2}{4}\), soit \(MI = \frac{AB}{2}\).)

## Exercice résolu — Déterminer une ligne de niveau

> [!NOTE] **Énoncé**  
> \(A\) et \(B\) sont deux points tels que \(AB = 8\) cm.  
> Démontrer que l’ensemble des points \(M\) du plan tels que  
> \(\overrightarrow{MA} \cdot \overrightarrow{MB} = 9\)  
> est un cercle, dont on précisera le centre et le rayon.

{{% details title="Solution commentée" closed="true" %}}
On note \(I\) le milieu de \([AB]\).  
D’après le théorème de la médiane :

\[
\overrightarrow{MA} \cdot \overrightarrow{MB} = 9 \iff MI^2 - \frac{AB^2}{4} = 9 \iff MI^2 = 9 + \frac{8^2}{4} = 9 + 16 = 25
\]

Une longueur étant positive, cela équivaut à \(MI = 5\).

L’ensemble cherché est donc le **cercle de centre \(I\)** (milieu de \([AB]\)) et de **rayon 5 cm**.
{{% /details %}}

## Exercice résolu — Calculer des longueurs et des angles dans un triangle

> [!NOTE] **Énoncé**  
> \(ABC\) est un triangle tel que \(AB = 3\), \(AC = 8\) et \(\widehat{BAC} = 60°\).  
> 1. Calculer \(BC\), puis une mesure de l’angle \(\widehat{ABC}\) arrondie au dixième de degré.  
> 2. En déduire une mesure de l’angle \(\widehat{ACB}\). Le triangle \(ABC\) est-il rectangle ?

{{% details title="Solution commentée" closed="true" %}}
1. D’après la formule d’Al-Kashi :  
\[
BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})
\]
\[
BC^2 = 3^2 + 8^2 - 2 \times 3 \times 8 \times \cos(60°) = 9 + 64 - 24 = 49
\]
\[
\text{donc } BC = 7.
\]

On applique de nouveau Al-Kashi, cette fois pour l’angle en \(B\) (côté opposé : \([AC]\)) :  
\[
AC^2 = AB^2 + BC^2 - 2 \times AB \times BC \times \cos(\widehat{ABC})
\]
\[
\cos(\widehat{ABC}) = \frac{AB^2 + BC^2 - AC^2}{2 \times AB \times BC} = \frac{9 + 49 - 64}{2 \times 3 \times 7} = \frac{-6}{42} = -\frac{1}{7}
\]
\[
\text{donc } \widehat{ABC} \approx 98{,}2°.
\]

2. La somme des angles d’un triangle vaut 180° :  
\[
\widehat{ACB} \approx 180° - 60° - 98{,}2° = 21{,}8°.
\]

Aucun angle ne mesure 90° : le triangle **n’est pas rectangle** ; il est obtusangle en \(B\) (ce qu’annonçait déjà le cosinus négatif).
{{% /details %}}

## Exercice résolu — Utiliser la caractérisation d’un cercle

> [!NOTE] **Énoncé**  
> \(ABC\) est un triangle tel que \(AB = 5\), \(AC = 12\) et \(BC = 13\).  
> Démontrer que le point \(A\) appartient au cercle de diamètre \([BC]\).

{{% details title="Solution commentée" closed="true" %}}
\[
AB^2 + AC^2 = 5^2 + 12^2 = 25 + 144 = 169, \quad BC^2 = 13^2 = 169.
\]
On a \(AB^2 + AC^2 = BC^2\) : d’après la réciproque du théorème de Pythagore, le triangle \(ABC\) est **rectangle en \(A\)**.  
Les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont donc orthogonaux : \(\overrightarrow{AB} \cdot \overrightarrow{AC} = 0\).  
D’après la caractérisation du cercle, **le point \(A\) appartient au cercle de diamètre \([BC]\)**.
{{% /details %}}
