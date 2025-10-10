---
title: 'Produit scalaire'
weight: 1
cascade:
  type: docs
---

## Définition du produit scalaire

> [!TIP] **Définition**  
> Soient deux vecteurs \(\vec{u}\) et \(\vec{v}\) et trois points \(A, B, C\) tels que \(\vec{u} = \overrightarrow{AB}\) et \(\vec{v} = \overrightarrow{AC}\).  
> Le **produit scalaire** des vecteurs \(\vec{u}\) et \(\vec{v}\), noté \(\vec{u} \cdot \vec{v}\), est le réel défini par :  
> - si \(\vec{u} \neq \vec{0}\) et \(\vec{v} \neq \vec{0}\), \(\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\widehat{BAC})\) ;  
> - si \(\vec{u} = \vec{0}\) ou \(\vec{v} = \vec{0}\), alors \(\vec{u} \cdot \vec{v} = 0\).

{{% details title="Exemple" closed="true" %}}
Soient \(A, B, C\) trois points distincts tels que \(AB = 5\), \(AC = 3\) et \(\widehat{BAC} = \dfrac{\pi}{3}\).  
\[
\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos(\widehat{BAC}) = 5 \times 3 \times \cos\left(\dfrac{\pi}{3}\right) = \dfrac{15}{2}.
\]

![](/images/image104.png)
{{% /details %}}


## Vecteurs colinéaires et carré scalaire

> [!TIP] **Propriété**  
> Soient deux vecteurs \(\vec{u}\) et \(\vec{v}\) non nuls et colinéaires.  
> - Si \(\vec{u}\) et \(\vec{v}\) ont **le même sens**, alors \(\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\|\).  
> 
> En particulier, \(\vec{u} \cdot \vec{u} = \|\vec{u}\|^2\), noté \(\vec{u}^2\), est appelé **carré scalaire** de \(\vec{u}\).
> - Si \(\vec{u}\) et \(\vec{v}\) sont **de sens contraire**, alors \(\vec{u} \cdot \vec{v} = -\|\vec{u}\| \times \|\vec{v}\|\).  


## Projection orthogonale et vecteurs orthogonaux

> [!TIP] **Propriété**  
> Soient trois points \(A, B, C\) (\(A \neq B\)). Si \(H\) est le projeté orthogonal de \(C\) sur la droite \((AB)\), alors :  
> \[
\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AH.
\]

> [!IMPORTANT] **Remarque**  
> Les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AH}\) sont colinéaires. Si \(\widehat{BAC} < \dfrac{\pi}{2}\), alors \(\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AH\).  
> ![](/images/image105.png)
> - Si \(\widehat{BAC} > \dfrac{\pi}{2}\), alors \(\overrightarrow{AB} \cdot \overrightarrow{AC} = -AB \times AH\).  
> ![](/images/image110.png)

> [!TIP] **Définition**  
> Deux vecteurs \(\vec{u}\) et \(\vec{v}\) sont dits **orthogonaux** lorsque \(\vec{u} \cdot \vec{v} = 0\).

> [!TIP] **Propriété**  
> Soient trois points \(A, B, C\) distincts.  
> Les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont orthogonaux si et seulement si les droites \((AB)\) et \((AC)\) sont **perpendiculaires**.


## Exercice résolu : Calculer des produits scalaires

> [!NOTE] **Exercice résolu**  
> \(ABC\) est un triangle équilatéral de côté 2.  
> \(I\) est le milieu du segment \([AB]\).  
> Calculer les produits scalaires suivants :  
> 1. \(\overrightarrow{BC} \cdot \overrightarrow{BA}\)  
> 2. \(\overrightarrow{AI} \cdot \overrightarrow{AC}\)  
> 3. \(\overrightarrow{BC} \cdot \overrightarrow{CA}\)

{{% details title="Solution commentée" closed="true" %}}
1. \(BC = BA = 2\), et comme \(ABC\) est équilatéral, \(\widehat{ABC} = \dfrac{\pi}{3}\),  
   \[
   \overrightarrow{BC} \cdot \overrightarrow{BA} = BC \times BA \times \cos\left(\dfrac{\pi}{3}\right) = 2 \times 2 \times \dfrac{1}{2} = 2.
   \]

![](/images/image106.png)

2. \(AC = 2\), \(AI = 1\), \(\widehat{IAC} = \dfrac{\pi}{3}\),  
   \[
   \overrightarrow{AI} \cdot \overrightarrow{AC} = AI \times AC \times \cos\left(\dfrac{\pi}{3}\right) = 1 \times 2 \times \dfrac{1}{2} = 1.
   \]

3. \(\overrightarrow{BC} \cdot \overrightarrow{CA} = -\overrightarrow{CB} \cdot \overrightarrow{CA}\)=\(-CB \times CA \times \cos(\widehat{BCA})\) = \(-2 \times 2 \times \dfrac{1}{2} = -2\),
   donc \(\overrightarrow{BC} \cdot \overrightarrow{CA} = -2.\)
{{% /details %}}


## Exercice résolu : Choisir une expression adaptée pour calculer un produit scalaire

> [!NOTE] **Exercice résolu**  
> Dans chacun des cas suivants, calculer le produit scalaire \(\vec{u} \cdot \vec{v}\), l’unité de longueur étant le côté d’un carreau.
> ![](/images/image107.png)

{{% details title="Solution commentée" closed="true" %}}
1. Soient \(A, B, C\) tels que \(\vec{u} = \overrightarrow{AB}\) et \(\vec{v} = \overrightarrow{AC}\).  
   \(H\) est le projeté orthogonal de \(C\) sur \((AB)\).  
   \[
   \vec{u} \cdot \vec{v} = AB \times AH = 3.
   \]

   ![](/images/image108.png)

2. \(\vec{u}\) et \(\vec{v}\) sont colinéaires de sens contraire :  
   \[
   \vec{u} \cdot \vec{v} = -\|\vec{u}\| \times \|\vec{v}\| = -12.
   \]

3. \(\vec{u}\) et \(\vec{v}\) sont orthogonaux, donc \(\vec{u} \cdot \vec{v} = 0.\)

4. Soient \(A, B, C\) tels que \(\vec{u} = \overrightarrow{AB}\) et \(\vec{v} = \overrightarrow{AC}\).  
   \(H\) est le projeté orthogonal de \(C\) sur \((AB)\).  
   \[
   \vec{u} \cdot \vec{v} = -AB \times AH = -2.
   \]

![](/images/image109.png)
{{% /details %}}