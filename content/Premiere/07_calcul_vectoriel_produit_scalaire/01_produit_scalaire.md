---
title: 'Produit scalaire'
weight: 1
cascade:
  type: docs
---

## Définition du produit scalaire

> [!TIP] **Définition**  
> Soient \(\vec{u}\) et \(\vec{v}\) deux vecteurs, et \(A, B, C\) trois points tels que \(\vec{u} = \overrightarrow{AB}\) et \(\vec{v} = \overrightarrow{AC}\).  
> Le **produit scalaire** de \(\vec{u}\) et \(\vec{v}\), noté \(\vec{u} \cdot \vec{v}\), est le nombre réel défini par :  
> - si \(\vec{u} \neq \vec{0}\) et \(\vec{v} \neq \vec{0}\) : \(\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\widehat{BAC})\) ;  
> - si \(\vec{u} = \vec{0}\) ou \(\vec{v} = \vec{0}\) : \(\vec{u} \cdot \vec{v} = 0\).

> [!IMPORTANT] **Remarque**  
> Le produit scalaire de deux vecteurs est un **nombre** (et non un vecteur). Avec les points \(A, B, C\), la définition s’écrit \(\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos(\widehat{BAC})\).

{{% details title="Exemple" closed="true" %}}
On considère trois points \(A, B, C\) tels que \(AB = 4\), \(AC = 6\) et \(\widehat{BAC} = \dfrac{\pi}{4}\).  
\[
\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos(\widehat{BAC}) = 4 \times 6 \times \cos\left(\dfrac{\pi}{4}\right) = 24 \times \dfrac{\sqrt{2}}{2} = 12\sqrt{2}.
\]

![](/images/image189.png)
{{% /details %}}

## Vecteurs colinéaires et carré scalaire

> [!TIP] **Propriété**  
> Soient \(\vec{u}\) et \(\vec{v}\) deux vecteurs non nuls et colinéaires.  
> - S’ils sont **de même sens**, alors \(\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\|\) (l’angle est nul, de cosinus 1).  
> - S’ils sont **de sens contraires**, alors \(\vec{u} \cdot \vec{v} = -\|\vec{u}\| \times \|\vec{v}\|\) (l’angle vaut \(\pi\), de cosinus \(-1\)).  
> 
> En particulier, \(\vec{u} \cdot \vec{u} = \|\vec{u}\|^2\) ; ce nombre, noté \(\vec{u}^2\), est appelé **carré scalaire** de \(\vec{u}\).

## Projection orthogonale et vecteurs orthogonaux

> [!TIP] **Propriété**  
> Soient trois points \(A, B, C\) avec \(A \neq B\), et \(H\) le projeté orthogonal de \(C\) sur la droite \((AB)\). Alors :  
> \[
\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}.
\]

> [!IMPORTANT] **Remarque**  
> Comme \(\overrightarrow{AB}\) et \(\overrightarrow{AH}\) sont colinéaires, on obtient :  
> - si \(\widehat{BAC} < \dfrac{\pi}{2}\) (\(\overrightarrow{AB}\) et \(\overrightarrow{AH}\) de même sens) : \(\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AH\) ;  
> ![](/images/image190.png)
> - si \(\widehat{BAC} > \dfrac{\pi}{2}\) (\(\overrightarrow{AB}\) et \(\overrightarrow{AH}\) de sens contraires) : \(\overrightarrow{AB} \cdot \overrightarrow{AC} = -AB \times AH\).  
> ![](/images/image191.png)

> [!TIP] **Définition**  
> Deux vecteurs \(\vec{u}\) et \(\vec{v}\) sont **orthogonaux** lorsque \(\vec{u} \cdot \vec{v} = 0\).

> [!TIP] **Propriété**  
> Soient trois points \(A, B, C\) distincts.  
> Les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont orthogonaux si et seulement si les droites \((AB)\) et \((AC)\) sont **perpendiculaires**.

> [!IMPORTANT] **Remarque**  
> Le vecteur nul est orthogonal à tout vecteur, puisque son produit scalaire avec n’importe quel vecteur est nul.

## Exercice résolu : Calculer des produits scalaires

> [!NOTE] **Exercice résolu**  
> \(ABCD\) est un carré de côté 4, et \(I\) est le milieu du segment \([BC]\).  
> Calculer les produits scalaires suivants :  
> 1. \(\overrightarrow{AB} \cdot \overrightarrow{AC}\)  
> 2. \(\overrightarrow{AB} \cdot \overrightarrow{AI}\)  
> 3. \(\overrightarrow{AB} \cdot \overrightarrow{CD}\)
>
> ![](/images/image192.png)

{{% details title="Solution commentée" closed="true" %}}
1. **Avec la définition.** La diagonale du carré mesure \(AC = 4\sqrt{2}\), et elle fait avec le côté un angle \(\widehat{BAC} = \dfrac{\pi}{4}\) :  
   \[
   \overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\left(\dfrac{\pi}{4}\right) = 4 \times 4\sqrt{2} \times \dfrac{\sqrt{2}}{2} = 16.
   \]
   (On peut aussi projeter \(C\) sur \((AB)\) : son projeté est \(B\), d’où \(AB \times AB = 16\).)

2. **Avec la projection.** Le projeté orthogonal de \(I\) sur la droite \((AB)\) est \(B\), car \((BI) \perp (AB)\). Les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AB}\) sont de même sens :  
   \[
   \overrightarrow{AB} \cdot \overrightarrow{AI} = \overrightarrow{AB} \cdot \overrightarrow{AB} = AB^2 = 16.
   \]

3. **Avec des vecteurs colinéaires.** Dans le carré, \(\overrightarrow{CD} = -\overrightarrow{AB}\) : les vecteurs sont colinéaires de sens contraires, avec \(AB = CD = 4\) :  
   \[
   \overrightarrow{AB} \cdot \overrightarrow{CD} = -AB \times CD = -16.
   \]
{{% /details %}}

## Exercice résolu : Choisir une expression adaptée pour calculer un produit scalaire

> [!NOTE] **Exercice résolu**  
> Dans chacun des cas ci-dessous, calculer le produit scalaire \(\vec{u} \cdot \vec{v}\). L’unité de longueur est le côté d’un carreau.
> ![](/images/image193.png)

{{% details title="Solution commentée" closed="true" %}}
On note \(A\) l’origine commune des deux vecteurs, \(\vec{u} = \overrightarrow{AB}\) et \(\vec{v} = \overrightarrow{AC}\).

1. On projette \(C\) sur \((AB)\) : on obtient \(H\), avec \(AH = 2\), et \(\overrightarrow{AH}\) est de même sens que \(\overrightarrow{AB}\) (avec \(AB = 4\)) :  
   \[
   \vec{u} \cdot \vec{v} = AB \times AH = 4 \times 2 = 8.
   \]

2. \(\vec{u}\) et \(\vec{v}\) sont colinéaires et de sens contraires, avec \(\|\vec{u}\| = 4\) et \(\|\vec{v}\| = 2\) :  
   \[
   \vec{u} \cdot \vec{v} = -\|\vec{u}\| \times \|\vec{v}\| = -8.
   \]

3. On lit \(\vec{u}\) : 2 carreaux à droite, 1 vers le haut ; \(\vec{v}\) : 1 carreau à gauche, 2 vers le haut. Les deux vecteurs forment un angle droit (on passe de l’un à l’autre par un quart de tour) : ils sont orthogonaux, donc \(\vec{u} \cdot \vec{v} = 0.\)

4. On projette \(C\) sur \((AB)\) : \(AH = 2\), mais cette fois \(\overrightarrow{AH}\) est de sens contraire à \(\overrightarrow{AB}\) (angle obtus), avec \(AB = 3\) :  
   \[
   \vec{u} \cdot \vec{v} = -AB \times AH = -3 \times 2 = -6.
   \]

![](/images/image194.png)
{{% /details %}}
