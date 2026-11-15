---
title: 'Vecteur normal à une droite'
weight: 1
cascade:
  type: docs
---

Dans toute cette partie, le plan est muni d’un repère orthonormé.

## Définition

> [!TIP] **Définition**  
> Soit \(\mathscr{D}\) une droite de vecteur directeur \(\vec{u}\), et \(\vec{n}\) un vecteur non nul.  
> On dit que \(\vec{n}\) est un **vecteur normal** à \(\mathscr{D}\) lorsque \(\vec{n}\) est orthogonal à \(\vec{u}\), c’est-à-dire :  
>
> \[
\vec{n} \cdot \vec{u} = 0
\]

{{% details title="Exemple" closed="true" %}}
On considère la droite \(\mathscr{D}\) de vecteur directeur \(\vec{u} \begin{pmatrix} 1 \\ -3 \end{pmatrix}\), et le vecteur \(\vec{n} \begin{pmatrix} 3 \\ 1 \end{pmatrix}\).

![](/images/image201.png)

On calcule :
\[
\vec{n} \cdot \vec{u} = 3 \times 1 + 1 \times (-3) = 0.
\]
\(\vec{n}\) est orthogonal au vecteur directeur \(\vec{u}\) : c’est un vecteur normal à \(\mathscr{D}\).
{{% /details %}}

> [!TIP] **Propriétés**  
> Soient \(\mathscr{D}\) une droite et \(\vec{n}\) un vecteur normal à \(\mathscr{D}\).  
> - Tout vecteur non nul colinéaire à \(\vec{n}\) est aussi un vecteur normal à \(\mathscr{D}\).  
> - \(\vec{n}\) est orthogonal à **tout** vecteur directeur de \(\mathscr{D}\).
> ![](/images/image202.png)

{{% details title="Exemple" closed="true" %}}
Si \(\vec{n}\) est un vecteur normal à une droite \(\mathscr{D}\), alors \(5\vec{n}\), \(-\vec{n}\) ou \(\frac{1}{2}\vec{n}\), qui sont non nuls et colinéaires à \(\vec{n}\), sont eux aussi des vecteurs normaux à \(\mathscr{D}\).
{{% /details %}}

## Équation cartésienne d’une droite

> [!TIP] **Propriété**  
> Soient \(a\), \(b\), \(c\) trois réels, avec \(a\) et \(b\) non nuls simultanément (\((a ; b) \neq (0 ; 0)\)).  
> Une droite \(\mathscr{D}\) admet une équation cartésienne de la forme
>
> \[
ax + by + c = 0
\]
>
> si et seulement si le vecteur \(\vec{n} \begin{pmatrix} a \\ b \end{pmatrix}\) est un vecteur normal à \(\mathscr{D}\).

> [!IMPORTANT] **Remarque**  
> Rappel de Seconde : la droite d’équation \(ax + by + c = 0\) a pour vecteur directeur \(\vec{u} \begin{pmatrix} -b \\ a \end{pmatrix}\). On vérifie bien que \(\vec{n} \cdot \vec{u} = a \times (-b) + b \times a = 0\).

{{% details title="Exemple" closed="true" %}}
On considère la droite \(\mathscr{D}\) d’équation \(2x + 5y - 4 = 0\).  
Ses coefficients sont \(a = 2\), \(b = 5\) et \(c = -4\).  
Le vecteur \(\vec{n} \begin{pmatrix} 2 \\ 5 \end{pmatrix}\) est donc un vecteur normal à \(\mathscr{D}\).

![](/images/image203.png)
{{% /details %}}

## Exercice résolu — Identifier des vecteurs normaux à une droite

> [!NOTE] **Énoncé**  
> La droite \(\mathscr{D}\) a pour vecteur directeur le vecteur \(\vec{u}\) représenté ci-dessous (l’unité est le côté d’un carreau).  
> Parmi les vecteurs \(\vec{n}\), \(\vec{w}\), \(\vec{v}\) et \(\vec{z}\), lesquels sont normaux à \(\mathscr{D}\) ?
> ![](/images/image204.png)

{{% details title="Solution commentée" closed="true" %}}
On lit les coordonnées sur le quadrillage :
\[
\vec{u} \begin{pmatrix} 2 \\ 1 \end{pmatrix}, \quad \vec{n} \begin{pmatrix} -1 \\ 2 \end{pmatrix}, \quad \vec{w} \begin{pmatrix} 1 \\ -2 \end{pmatrix}, \quad \vec{v} \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad \vec{z} \begin{pmatrix} 2 \\ -1 \end{pmatrix}.
\]
On calcule le produit scalaire de chacun avec \(\vec{u}\) :
- \(\vec{n} \cdot \vec{u} = (-1) \times 2 + 2 \times 1 = 0\) : \(\vec{n}\) est normal à \(\mathscr{D}\) ;
- \(\vec{w} = -\vec{n}\) est colinéaire à \(\vec{n}\) (vérification : \(1 \times 2 + (-2) \times 1 = 0\)) : \(\vec{w}\) est normal à \(\mathscr{D}\) ;
- \(\vec{v} \cdot \vec{u} = 1 \times 2 + 2 \times 1 = 4 \neq 0\) : \(\vec{v}\) n’est pas normal à \(\mathscr{D}\) ;
- \(\vec{z} \cdot \vec{u} = 2 \times 2 + (-1) \times 1 = 3 \neq 0\) : \(\vec{z}\) n’est pas normal à \(\mathscr{D}\).

Les deux vecteurs normaux à \(\mathscr{D}\) sont \(\vec{n}\) et \(\vec{w}\).
{{% /details %}}

## Exercice résolu — Déterminer les coordonnées d’un vecteur normal à une droite donnée

> [!NOTE] **Énoncé**
> 1. Soit \(\mathscr{D}_1\) la droite passant par \(A(-1;4)\) et de vecteur directeur \(\vec{u} \begin{pmatrix} 2 \\ 5 \end{pmatrix}\).  
> Déterminer les coordonnées d’un vecteur normal à \(\mathscr{D}_1\).  
> 2. Soit \(\mathscr{D}_2\) la droite d’équation \(3x + 7y - 2 = 0\).  
> Déterminer les coordonnées d’un vecteur normal à \(\mathscr{D}_2\).

{{% details title="Solution commentée" closed="true" %}}

1. Un vecteur directeur \(\begin{pmatrix} -b \\ a \end{pmatrix}\) correspond à une équation \(ax + by + c = 0\). Ici \(-b = 2\) et \(a = 5\) : \(\mathscr{D}_1\) admet une équation cartésienne de la forme \(5x - 2y + c = 0\).  
Le vecteur \(\vec{n} \begin{pmatrix} 5 \\ -2 \end{pmatrix}\) est donc un vecteur normal à \(\mathscr{D}_1\).

Vérification :  
\[
\vec{n} \cdot \vec{u} = 5 \times 2 + (-2) \times 5 = 0.
\]

2. L’équation de \(\mathscr{D}_2\) est de la forme \(ax + by + c = 0\) avec \(a = 3\) et \(b = 7\).  
Un vecteur normal à \(\mathscr{D}_2\) est donc \(\vec{n} \begin{pmatrix} 3 \\ 7 \end{pmatrix}\).
{{% /details %}}

## Exercice résolu — Déterminer une équation cartésienne de droite

> [!NOTE] **Énoncé**  
> La droite \(\Delta\) passe par \(A(-1;3)\) et admet pour vecteur normal \(\vec{n} \begin{pmatrix} 2 \\ -3 \end{pmatrix}\).  
> Déterminer une équation cartésienne de \(\Delta\).

{{% details title="Solution commentée" closed="true" %}}
Un point \(M(x;y)\) appartient à \(\Delta\) si et seulement si \(\overrightarrow{AM}\) est orthogonal à \(\vec{n}\), avec \(\overrightarrow{AM} \begin{pmatrix} x + 1 \\ y - 3 \end{pmatrix}\) :
\[
M \in \Delta \iff \overrightarrow{AM} \cdot \vec{n} = 0
\]
\[
\iff 2(x + 1) + (-3)(y - 3) = 0
\]
\[
\iff 2x + 2 - 3y + 9 = 0
\]
\[
\iff 2x - 3y + 11 = 0
\]

Une équation cartésienne de \(\Delta\) est donc \(2x - 3y + 11 = 0\).

*Autre méthode* : \(\vec{n}\) étant normal, \(\Delta\) a une équation de la forme \(2x - 3y + c = 0\) ; comme \(A \in \Delta\), \(2 \times (-1) - 3 \times 3 + c = 0\), d’où \(c = 11\).
{{% /details %}}
