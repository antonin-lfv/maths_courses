---
title: "Produit scalaire dans l'espace"
weight: 1
cascade:
  type: docs
---

## Produit scalaire dans l’espace

> [!TIP] **Définition**
>
> Soient \(\vec{u}\) et \(\vec{v}\) deux vecteurs de l’espace, et \(A\), \(B\), \(C\) trois points tels que \({\vec{u} = \overrightarrow{AB}}\) et \({\vec{v} = \overrightarrow{AC}}\). Le **produit scalaire** \({\vec{u} \cdot \vec{v}}\) est le produit scalaire \({\overrightarrow{AB} \cdot \overrightarrow{AC}}\) calculé dans un plan contenant les points \(A\), \(B\) et \(C\).

> [!IMPORTANT] **Conséquence**
>
> Toutes les propriétés du produit scalaire vues dans le plan restent valables dans l’espace (dans le plan \((ABC)\)) : expression avec le cosinus, \({\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos(\widehat{BAC})}\) ; projection orthogonale sur la droite \((AB)\) ; etc. (rappels : chapitre « Produit scalaire » de Première).

> [!TIP] **Propriétés**
>
> Pour tous vecteurs \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) de l’espace et tout réel \(k\) :
> - \({\vec{u}^{\,2} = \vec{u} \cdot \vec{u} = \|\vec{u}\|^2}\) ;
> - \({\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}}\) (symétrie) ;
> - \({\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}}\) et \({\vec{u} \cdot (k\vec{v}) = k(\vec{u} \cdot \vec{v})}\) (bilinéarité).

> [!TIP] **Propriétés (formules de polarisation)**
>
> Pour tous vecteurs \(\vec{u}\) et \(\vec{v}\) de l’espace :
> \[
\vec{u} \cdot \vec{v} = \dfrac{1}{2}\left(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2\right) = \dfrac{1}{2}\left(\|\vec{u}\|^2 + \|\vec{v}\|^2 - \|\vec{u} - \vec{v}\|^2\right).
\]

{{% details title="Exemple" closed="true" %}}
\(ABCDEFGH\) est un cube d’arête 3.
- Le projeté orthogonal de \(G\) sur la droite \((AB)\) est \(B\) (car \((BG)\) est orthogonale à \((AB)\)), donc \({\overrightarrow{AB} \cdot \overrightarrow{AG} = \overrightarrow{AB} \cdot \overrightarrow{AB} = AB^2 = 9}\).
- Le triangle \(AFH\) est équilatéral (ses côtés sont des diagonales de faces, de longueur \(3\sqrt{2}\)), donc \(\overrightarrow{AF} \cdot \overrightarrow{AH} = (3\sqrt{2})^2 \times \cos(60°) = 18 \times \dfrac{1}{2} = 9\).
{{% /details %}}

## Vecteurs orthogonaux

> [!TIP] **Définition**
>
> Deux vecteurs \(\vec{u}\) et \(\vec{v}\) de l’espace sont **orthogonaux** si \({\vec{u} \cdot \vec{v} = 0}\). On note \({\vec{u} \perp \vec{v}}\).

> [!IMPORTANT] **Remarque**
>
> Le vecteur nul est orthogonal à tout vecteur.

> [!TIP] **Définitions**
>
> - Une base \((\vec{\imath}, \vec{\jmath}, \vec{k})\) est **orthonormée** si \({\vec{\imath} \cdot \vec{\jmath} = \vec{\imath} \cdot \vec{k} = \vec{\jmath} \cdot \vec{k} = 0}\) (vecteurs deux à deux orthogonaux) et \({\|\vec{\imath}\| = \|\vec{\jmath}\| = \|\vec{k}\| = 1}\).
> - Un repère \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\) est **orthonormé** si sa base \((\vec{\imath}, \vec{\jmath}, \vec{k})\) est orthonormée.

{{% details title="Exemple" closed="true" %}}
Si \(ABCDEFGH\) est un cube d’arête 1, le repère \((A\,;\,\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})\) est orthonormé.
{{% /details %}}

## Produit scalaire et norme avec les coordonnées

> [!TIP] **Propriétés**
>
> Dans une base **orthonormée**, pour tous vecteurs \(\vec{u}\begin{pmatrix} x \\ y \\ z \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix}\) :
> - \({\vec{u} \cdot \vec{v} = xx' + yy' + zz'}\) ;
> - \({\|\vec{u}\| = \sqrt{\vec{u} \cdot \vec{u}} = \sqrt{x^2 + y^2 + z^2}}\).

> [!IMPORTANT] **Remarque**
>
> Ces formules sont fausses si la base n’est pas orthonormée.

{{% details title="Exemple" closed="true" %}}
Dans une base orthonormée, on considère \({\vec{u}\begin{pmatrix} 1 \\ -2 \\ 2 \end{pmatrix}}\) et \({\vec{v}\begin{pmatrix} 4 \\ 1 \\ -1 \end{pmatrix}}\).
- \({\vec{u} \cdot \vec{v} = 4 - 2 - 2 = 0}\) : les vecteurs sont orthogonaux.
- \({\|\vec{u}\| = \sqrt{1 + 4 + 4} = 3}\) et \({\|\vec{v}\| = \sqrt{16 + 1 + 1} = 3\sqrt{2}}\).
{{% /details %}}

## Calculer un produit scalaire de deux vecteurs de l’espace

> [!NOTE] **Méthode 1 - Calculer un produit scalaire dans l’espace**
>
> 1. \(ABCDEFGH\) est un cube d’arête 2. Calculer \({\overrightarrow{AB} \cdot \overrightarrow{AC}}\), puis \({\overrightarrow{AG} \cdot \overrightarrow{BH}}\) à l’aide d’un repère orthonormé.
> 2. \(ABCD\) est un tétraèdre régulier (toutes ses arêtes mesurent \(a\)). Calculer \({\overrightarrow{AB} \cdot \overrightarrow{AC}}\), puis montrer que \({\overrightarrow{AB} \cdot \overrightarrow{CD} = 0}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\), donc \({\overrightarrow{AB} \cdot \overrightarrow{AC} = AB^2 = 4}\).  
On se place dans le repère orthonormé \(\left(A\,;\,\dfrac{1}{2}\overrightarrow{AB}, \dfrac{1}{2}\overrightarrow{AD}, \dfrac{1}{2}\overrightarrow{AE}\right)\) : \(A(0\,;\,0\,;\,0)\), \(B(2\,;\,0\,;\,0)\), \(G(2\,;\,2\,;\,2)\), \(H(0\,;\,2\,;\,2)\).  
\(\overrightarrow{AG}\begin{pmatrix} 2 \\ 2 \\ 2 \end{pmatrix}\) et \({\overrightarrow{BH}\begin{pmatrix} -2 \\ 2 \\ 2 \end{pmatrix}}\), d’où \({\overrightarrow{AG} \cdot \overrightarrow{BH} = -4 + 4 + 4 = 4}\).

**2.** Le triangle \(ABC\) est équilatéral, donc \({\overrightarrow{AB} \cdot \overrightarrow{AC} = a \times a \times \cos(60°) = \dfrac{a^2}{2}}\) ; de même \({\overrightarrow{AB} \cdot \overrightarrow{AD} = \dfrac{a^2}{2}}\).  
Par Chasles et bilinéarité : \(\overrightarrow{AB} \cdot \overrightarrow{CD} = \overrightarrow{AB} \cdot \big(\overrightarrow{AD} - \overrightarrow{AC}\big) = \dfrac{a^2}{2} - \dfrac{a^2}{2} = 0\).  
Deux arêtes opposées d’un tétraèdre régulier sont donc orthogonales.
{{% /details %}}
