---
title: 'Propriétés du produit scalaire'
weight: 2
cascade:
  type: docs
---

## Symétrie et bilinéarité du produit scalaire

> [!TIP] **Propriétés**  
> Pour tous vecteurs \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) et tout réel \(k\) :  
> \[
\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}
\]  
> \[
\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}
\]  
> \[
\vec{u} \cdot (k\vec{v}) = k(\vec{u} \cdot \vec{v})
\]

> [!IMPORTANT] **Remarques**  
> - La première égalité traduit la **symétrie** du produit scalaire. Grâce à elle, les deux autres règles valent aussi « à gauche » : \({(\vec{v} + \vec{w}) \cdot \vec{u} = \vec{v} \cdot \vec{u} + \vec{w} \cdot \vec{u}}\) et \({(k\vec{v}) \cdot \vec{u} = k(\vec{v} \cdot \vec{u})}\).  
> - On dit que le produit scalaire est **bilinéaire** (linéaire par rapport à chacun des deux vecteurs) : on peut développer comme avec des nombres.

{{% details title="Exemples" closed="true" %}}
\[
\vec{u} \cdot (3\vec{v} - \vec{w}) = 3(\vec{u} \cdot \vec{v}) - \vec{u} \cdot \vec{w}
\]
\[
(-2\vec{u}) \cdot \vec{u} = -2\|\vec{u}\|^2
\]
\[
(\vec{u} + \vec{v}) \cdot (4\vec{v}) = 4(\vec{u} \cdot \vec{v}) + 4\|\vec{v}\|^2
\]
{{% /details %}}

## Produit scalaire dans une base orthonormée

> [!TIP] **Propriété**  
> Dans une base orthonormée, si  
> \[
\vec{u} = \begin{pmatrix} x \\ y \end{pmatrix} \quad \text{et} \quad \vec{v} = \begin{pmatrix} x' \\ y' \end{pmatrix},
\]  
> alors :  
> \[
\vec{u} \cdot \vec{v} = xx' + yy' \quad \text{et} \quad \|\vec{u}\|^2 = \vec{u} \cdot \vec{u} = x^2 + y^2.
\]

{{% details title="Exemple" closed="true" %}}
On considère \({\vec{u} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}}\) et \({\vec{v} = \begin{pmatrix} -1 \\ 4 \end{pmatrix}}\) dans une base orthonormée.  
\[
\vec{u} \cdot \vec{v} = 3 \times (-1) + 2 \times 4 = 5
\]  
\[
\|\vec{u}\|^2 = 3^2 + 2^2 = 13 \quad \text{donc} \quad \|\vec{u}\| = \sqrt{13}.
\]
{{% /details %}}

## Norme et produit scalaire

> [!TIP] **Propriétés**  
> Pour tous vecteurs \(\vec{u}\) et \(\vec{v}\) :  
> \[
\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2 + 2(\vec{u} \cdot \vec{v})
\]
> \[
\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2 - 2(\vec{u} \cdot \vec{v})
\]
> \[
(\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = \|\vec{u}\|^2 - \|\vec{v}\|^2
\]

Ces égalités s’obtiennent en développant grâce à la bilinéarité ; ce sont les analogues des identités remarquables.

> [!IMPORTANT] **Autres expressions utiles**  
> En isolant le produit scalaire dans les deux premières égalités :  
> \[
\vec{u} \cdot \vec{v} = \dfrac{1}{2}\left(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2\right)
\]
> \[
\vec{u} \cdot \vec{v} = \dfrac{1}{2}\left(\|\vec{u}\|^2 + \|\vec{v}\|^2 - \|\vec{u} - \vec{v}\|^2\right)
\]
> Ces formules permettent de calculer un produit scalaire à partir de **longueurs** uniquement.
> ![](/images/image195.png)

## Exercice résolu : Calculer un produit scalaire en décomposant des vecteurs

> [!NOTE] **Énoncé**  
> \(ABCD\) est un carré de côté \(a\). On note \(I\) le milieu de \([BC]\) et \(J\) le milieu de \([CD]\).  
> 1. En écrivant \({\overrightarrow{AI} = \overrightarrow{AB} + \overrightarrow{BI}}\) et \({\overrightarrow{BJ} = \overrightarrow{BC} + \overrightarrow{CJ}}\), calculer \({\overrightarrow{AI} \cdot \overrightarrow{BJ}}\).  
> 2. Que peut-on en déduire pour les droites \((AI)\) et \((BJ)\) ?
> ![](/images/image196.png)

{{% details title="Solution commentée" closed="true" %}}
1. On développe par bilinéarité :
\[
\overrightarrow{AI} \cdot \overrightarrow{BJ} = (\overrightarrow{AB} + \overrightarrow{BI}) \cdot (\overrightarrow{BC} + \overrightarrow{CJ})
\]
\[
= \overrightarrow{AB} \cdot \overrightarrow{BC} + \overrightarrow{AB} \cdot \overrightarrow{CJ} + \overrightarrow{BI} \cdot \overrightarrow{BC} + \overrightarrow{BI} \cdot \overrightarrow{CJ}.
\]
On calcule chaque terme :
- \({(AB) \perp (BC)}\), donc \({\overrightarrow{AB} \cdot \overrightarrow{BC} = 0}\) ;
- \({(BI) \perp (CJ)}\) (car \({(BC) \perp (CD)}\)), donc \({\overrightarrow{BI} \cdot \overrightarrow{CJ} = 0}\) ;
- \(\overrightarrow{CJ}\) est colinéaire à \(\overrightarrow{AB}\) et de sens contraire, avec \({CJ = \dfrac{a}{2}}\) : \({\overrightarrow{AB} \cdot \overrightarrow{CJ} = -a \times \dfrac{a}{2}}\) ;
- \(\overrightarrow{BI}\) et \(\overrightarrow{BC}\) sont colinéaires de même sens, avec \({BI = \dfrac{a}{2}}\) : \({\overrightarrow{BI} \cdot \overrightarrow{BC} = \dfrac{a}{2} \times a}\).

D’où :
\[
\overrightarrow{AI} \cdot \overrightarrow{BJ} = 0 - \dfrac{a^2}{2} + \dfrac{a^2}{2} + 0 = 0.
\]

2. Les vecteurs \(\overrightarrow{AI}\) et \(\overrightarrow{BJ}\) sont **orthogonaux** : les droites \((AI)\) et \((BJ)\) sont perpendiculaires.
{{% /details %}}

## Exercice résolu : Calculer un produit scalaire avec des coordonnées

> [!NOTE] **Énoncé**  
> Dans un repère orthonormé, on considère les vecteurs  
> \[
\vec{u} = \begin{pmatrix} -4 \\ 3 \end{pmatrix}, \quad \vec{v} = \begin{pmatrix} 2 \\ 5 \end{pmatrix}
\]
> et les points \({A(1;-2)}\), \(B(4;2)\), \(C(0;3)\), \({D(-2;-1)}\).  
> Calculer les produits scalaires \({\vec{u} \cdot \vec{v}}\) et \({\overrightarrow{AB} \cdot \overrightarrow{CD}}\).

{{% details title="Solution commentée" closed="true" %}}
\[
\vec{u} \cdot \vec{v} = (-4) \times 2 + 3 \times 5 = -8 + 15 = 7.
\]
On calcule les coordonnées des vecteurs (extrémité moins origine) :
\[
\overrightarrow{AB} = \begin{pmatrix} 4 - 1 \\ 2 - (-2) \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}, \quad
\overrightarrow{CD} = \begin{pmatrix} -2 - 0 \\ -1 - 3 \end{pmatrix} = \begin{pmatrix} -2 \\ -4 \end{pmatrix}.
\]
Ainsi :
\[
\overrightarrow{AB} \cdot \overrightarrow{CD} = 3 \times (-2) + 4 \times (-4) = -6 - 16 = -22.
\]
{{% /details %}}

## Exercice résolu : Calculer un produit scalaire dans un triangle

> [!NOTE] **Énoncé**  
> \(ABC\) est un triangle tel que \({AB = 5}\), \({AC = 3}\) et \({BC = 6}\).  
> Calculer \({\overrightarrow{AB} \cdot \overrightarrow{AC}}\).

{{% details title="Solution commentée" closed="true" %}}
On ne connaît que des longueurs : on utilise la formule  
\[
\overrightarrow{AB} \cdot \overrightarrow{AC} = \dfrac{1}{2}\left(\|\overrightarrow{AB}\|^2 + \|\overrightarrow{AC}\|^2 - \|\overrightarrow{AB} - \overrightarrow{AC}\|^2\right).
\]
Or \({\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{CA} = \overrightarrow{CB}}\) (relation de Chasles), donc :
\[
\begin{aligned}
\overrightarrow{AB} \cdot \overrightarrow{AC} &= \dfrac{1}{2}\left(AB^2 + AC^2 - CB^2\right) = \dfrac{1}{2}\left(5^2 + 3^2 - 6^2\right) \\[0.3em]
&= \dfrac{1}{2}(25 + 9 - 36) = -1.
\end{aligned}
\]
Le produit scalaire est négatif : l’angle \(\widehat{BAC}\) est obtus.

![](/images/image197.png)
{{% /details %}}
