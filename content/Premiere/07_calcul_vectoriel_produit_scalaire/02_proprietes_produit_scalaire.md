---
title: 'Propriétés du produit scalaire'
weight: 2
cascade:
  type: docs
---

## Symétrie et bilinéarité du produit scalaire

> [!TIP] **Propriétés**  
> Soient \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) des vecteurs et \(k\) un réel.  
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
> - Le produit scalaire est **symétrique**, donc \((\vec{v} + \vec{w}) \cdot \vec{u} = \vec{v} \cdot \vec{u} + \vec{w} \cdot \vec{u}\).  
> - Il est **bilinéaire** : linéaire à gauche et à droite.

{{% details title="Exemples" closed="true" %}}
\[
\vec{u} \cdot (\vec{v} - \vec{w}) = \vec{u} \cdot \vec{v} - \vec{u} \cdot \vec{w}
\]
\[
\vec{v} \cdot (-\vec{v}) = -\|\vec{v}\|^2
\]
\[
\vec{u} \cdot (2\vec{u} + 5\vec{v}) = 2\|\vec{u}\|^2 + 5(\vec{u} \cdot \vec{v})
\]
{{% /details %}}


## Produit scalaire dans une base orthonormée

> [!TIP] **Propriété**  
> Dans une base orthonormée, pour deux vecteurs  
> \[
\vec{u} = \begin{pmatrix} x \\ y \end{pmatrix}, \quad \vec{v} = \begin{pmatrix} x' \\ y' \end{pmatrix},
\]  
> on a :  
> \[
\vec{u} \cdot \vec{v} = xx' + yy', \quad \text{et} \quad \|\vec{u}\|^2 = x^2 + y^2.
\]

{{% details title="Exemple" closed="true" %}}
Soient \(\vec{u} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}\) et \(\vec{v} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}\).  
Alors :  
\[
\vec{u} \cdot \vec{v} = 2 \times 1 + (-1) \times 3 = -1
\]  
\[
\|\vec{u}\|^2 = 2^2 + (-1)^2 = 5 \quad \Rightarrow \quad \|\vec{u}\| = \sqrt{5}.
\]
{{% /details %}}


## Norme et produit scalaire

> [!TIP] **Propriétés**  
> Pour deux vecteurs \(\vec{u}\) et \(\vec{v}\) :  
> \[
\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2 + 2(\vec{u} \cdot \vec{v})
\]
> \[
\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2 - 2(\vec{u} \cdot \vec{v})
\]
> \[
(\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = \|\vec{u}\|^2 - \|\vec{v}\|^2
\]

> [!IMPORTANT] **Autres expressions utiles**  
> \[
\vec{u} \cdot \vec{v} = \frac{1}{2}(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2)
\]
> \[
\vec{u} \cdot \vec{v} = \frac{1}{2}(\|\vec{u}\|^2 + \|\vec{v}\|^2 - \|\vec{u} - \vec{v}\|^2)
\]
> ![Image](/images/image111.png)


## Exercice résolu : Calculer un produit scalaire en décomposant des vecteurs

> [!NOTE] **Enoncé**  
> \(ABCD\) est un carré de côté \(a\).  
> \(I\) est le milieu de \([AD]\) et \(J\) le milieu de \([CD]\).  
> 1. En remarquant que \(\overrightarrow{AJ} = \overrightarrow{AD} + \overrightarrow{DJ}\) et \(\overrightarrow{BI} = \overrightarrow{BA} + \overrightarrow{AI}\), calculer \(\overrightarrow{AJ} \cdot \overrightarrow{BI}\).  
> 2. Que peut-on en conclure ?
> ![](/images/image112.png)

{{% details title="Solution commentée" closed="true" %}}
\[
\overrightarrow{AJ} \cdot \overrightarrow{BI} = (\overrightarrow{AD} + \overrightarrow{DJ}) \cdot (\overrightarrow{BA} + \overrightarrow{AI})
\]
\[
= \overrightarrow{AD} \cdot \overrightarrow{BA} + \overrightarrow{AD} \cdot \overrightarrow{AI} + \overrightarrow{DJ} \cdot \overrightarrow{BA} + \overrightarrow{DJ} \cdot \overrightarrow{AI}
\]
Or, \((AD) \perp (BA)\) et \((DJ) \perp (AI)\), donc ces deux termes valent 0.  
\[
= \overrightarrow{AD} \cdot \overrightarrow{AI} - \overrightarrow{DJ} \cdot \overrightarrow{BA}
\]
Comme \(\overrightarrow{AD}\) et \(\overrightarrow{AI}\) sont colinéaires de même sens et \(\overrightarrow{DJ}\), \(\overrightarrow{BA}\) colinéaires de sens contraire :  
\[
\overrightarrow{AD} \cdot \overrightarrow{AI} = a \times \frac{a}{2}, \quad \overrightarrow{DJ} \cdot \overrightarrow{BA} = -\frac{a}{2} \times a
\]
\[
\Rightarrow \overrightarrow{AJ} \cdot \overrightarrow{BI} = a \times \frac{a}{2} - \frac{a}{2} \times a = 0
\]
Ainsi, \(\overrightarrow{AJ}\) et \(\overrightarrow{BI}\) sont **orthogonaux**, donc les droites \((AJ)\) et \((BI)\) sont perpendiculaires.

{{% /details %}}


## Exercice résolu : Calculer un produit scalaire avec des coordonnées

> [!NOTE] **Enoncé**  
> Dans un repère orthonormé, on considère :  
> \[
\vec{u} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}, \quad \vec{v} = \begin{pmatrix} -3 \\ 5 \end{pmatrix}
\]
> et les points \(A(2;3)\), \(B(-5;4)\), \(C(-1;-3)\), \(D(-1;1)\).  
> Calculer les produits scalaires \(\vec{u} \cdot \vec{v}\) et \(\overrightarrow{AB} \cdot \overrightarrow{CD}\).

{{% details title="Solution commentée" closed="true" %}}
\[
\vec{u} \cdot \vec{v} = 2 \times (-3) + (-1) \times 5 = -6 - 5 = -11.
\]
On calcule ensuite les coordonnées des vecteurs :
\[
\overrightarrow{AB} = B - A = \begin{pmatrix} -5 - 2 \\ 4 - 3 \end{pmatrix} = \begin{pmatrix} -7 \\ 1 \end{pmatrix}, \quad
\overrightarrow{CD} = D - C = \begin{pmatrix} -1 - (-1) \\ 1 - (-3) \end{pmatrix} = \begin{pmatrix} 0 \\ 4 \end{pmatrix}.
\]
Ainsi :
\[
\overrightarrow{AB} \cdot \overrightarrow{CD} = (-7) \times 0 + 1 \times 4 = 4.
\]
{{% /details %}}


## Exercice résolu : Calculer un produit scalaire dans un triangle

> [!NOTE] **Enoncé**  
> Soit un triangle \(ABC\) tel que \(AB = 4\), \(AC = 6\) et \(BC = 7\).  
> Calculer \(\overrightarrow{AB} \cdot \overrightarrow{AC}\).

{{% details title="Solution commentée" closed="true" %}}
On utilise la relation :  
\[
\overrightarrow{AB} \cdot \overrightarrow{AC} = \frac{1}{2}(\|\overrightarrow{AB}\|^2 + \|\overrightarrow{AC}\|^2 - \|\overrightarrow{AB} - \overrightarrow{AC}\|^2)
\]
\[
= \frac{1}{2}(\|\overrightarrow{AB}\|^2 + \|\overrightarrow{AC}\|^2 - \|\overrightarrow{AB}+\overrightarrow{CA}\|^2)
\]
\[
  = \frac{1}{2}(\|\overrightarrow{AB}\|^2 + \|\overrightarrow{AC}\|^2 - \|\overrightarrow{CB}\|^2)
\]
\[
= \frac{1}{2}(AB^2 + AC^2 - CB^2)
\]
\[
= \frac{1}{2}(4^2 + 6^2 - 7^2) = \frac{1}{2}(16 + 36 - 49) = \frac{3}{2}.
\]

![](/images/image113.png)
{{% /details %}}