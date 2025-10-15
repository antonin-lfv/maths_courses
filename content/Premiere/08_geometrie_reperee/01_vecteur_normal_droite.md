---
title: 'Vecteur normal à une droite'
weight: 1
cascade:
  type: docs
---

Ici, le plan est muni d’un repère orthonormé.

## Définition

> [!TIP] **Définition**  
> Soit \(\mathscr{D}\) une droite de vecteur directeur \(\vec{u}\).  
> Soit \(\vec{n}\) un vecteur non nul du plan.  
> \(\vec{n}\) est un **vecteur normal** à \(\mathscr{D}\) lorsque :  
>
> \[
\vec{n} \cdot \vec{u} = 0
\]

{{% details title="Exemple" closed="true" %}}
Le vecteur  
\[
\vec{n} \begin{pmatrix} -2 \\ 1 \end{pmatrix}
\]
est orthogonal au vecteur  
\[
\vec{u} \begin{pmatrix} 1 \\ 2 \end{pmatrix}.
\]

![](/images/image117.png)

En effet :
\[
\vec{n} \cdot \vec{u} = (-2) \times 1 + 1 \times 2 = 0.
\]
\(\vec{u}\) est un vecteur directeur de \(\mathscr{D}\), donc \(\vec{n}\) est un vecteur normal à \(\mathscr{D}\).
{{% /details %}}

> [!TIP] **Propriétés**  
> Soient \(\mathscr{D}\) une droite et \(\vec{n}\) un vecteur non nul.  
> - Si \(\vec{n}\) est un vecteur normal à \(\mathscr{D}\), alors tout vecteur non nul colinéaire à \(\vec{n}\) est un vecteur normal à \(\mathscr{D}\).  
> - Tout vecteur normal à \(\mathscr{D}\) est orthogonal à tout vecteur directeur de \(\mathscr{D}\).
> ![](/images/image118.png)

{{% details title="Exemple" closed="true" %}}
Soit \(\mathscr{D}\) une droite de vecteur normal \(\vec{n}\).  
Les vecteurs \(\vec{n}\) et \(-2\vec{n}\) sont colinéaires, donc le vecteur \(-2\vec{n}\) est aussi un vecteur normal à \(\mathscr{D}\).
{{% /details %}}


## Équation cartésienne d’une droite

> [!TIP] **Propriété**  
> Soient \(a\), \(b\), \(c\) trois réels tels que \(a\) et \(b\) ne soient pas nuls simultanément.  
> Une droite \(\mathscr{D}\) a pour équation cartésienne :
>
> \[
ax + by + c = 0
\]
>
> si et seulement si le vecteur  
> \[
\vec{n} \begin{pmatrix} a \\ b \end{pmatrix}
\]
> est un vecteur normal à \(\mathscr{D}\).

{{% details title="Exemple" closed="true" %}}
Soit \(\mathscr{D}\) la droite d’équation \(3x - 2y + 5 = 0\).  
On identifie les coefficients :
\[
a = 3, \quad b = -2, \quad c = 5.
\]
Le vecteur
\[
\vec{n} \begin{pmatrix} 3 \\ -2 \end{pmatrix}
\]
est donc un vecteur normal à \(\mathscr{D}\).

![](/images/image119.png)
{{% /details %}}


## Exercice résolu — Identifier des vecteurs normaux à une droite

> [!NOTE] **Énoncé**  
> On considère la droite \(\mathscr{D}\) dont le vecteur \(\vec{u}\) est un vecteur directeur.  
> Quels sont, parmi les vecteurs \(\vec{n}\), \(\vec{w}\), \(\vec{v}\) et \(\vec{z}\), les deux vecteurs normaux à \(\mathscr{D}\) ?
> ![](/images/image120.png)

{{% details title="Solution commentée" closed="true" %}}
D’après la figure, on conjecture que les deux vecteurs normaux à \(\mathscr{D}\) sont \(\vec{n}\) et \(\vec{w}\).

Le vecteur  
\[
\vec{u} \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad \vec{n} \begin{pmatrix} 2 \\ -1 \end{pmatrix}.
\]
On calcule :
\[
\vec{n} \cdot \vec{u} = 2 \times 1 + (-1) \times 2 = 2 - 2 = 0.
\]
Les vecteurs \(\vec{n}\) et \(\vec{u}\) sont donc orthogonaux.  
On en déduit que \(\vec{n}\) est un vecteur normal à \(\mathscr{D}\).

Le vecteur  
\[
\vec{w} \begin{pmatrix} -2 \\ 1 \end{pmatrix} = -\vec{n}.
\]
\(\vec{n}\) et \(\vec{w}\) sont donc colinéaires, donc \(\vec{w}\) est aussi un vecteur normal à \(\mathscr{D}\).
{{% /details %}}


## Exercice résolu — Déterminer les coordonnées d’un vecteur normal à une droite donnée

> [!NOTE] **Énoncé**
> Soit \(\mathscr{D}_1\) la droite passant par \(A(2;5)\) et de vecteur directeur 
> \[\vec{u} \begin{pmatrix} -1 \\ 3 \end{pmatrix}.\]  
> 1. Déterminer les coordonnées d’un vecteur normal à \(\mathscr{D}_1\).  
> 2. Soit \(\mathscr{D}_2\) la droite d’équation \(-x - 4y + 1 = 0\).  
> Déterminer les coordonnées d’un vecteur normal à \(\mathscr{D}_2\).

{{% details title="Solution commentée" closed="true" %}}

1. Soit \(\mathscr{D}_1\) la droite passant par \(A(2;5)\) et de vecteur directeur  
\[
\vec{u} \begin{pmatrix} -1 \\ 3 \end{pmatrix}.
\]  
\(\mathscr{D}_1\) admet une équation cartésienne de la forme \(3x + y + c = 0\).  
On en déduit que le vecteur  
\[
\vec{n} \begin{pmatrix} 3 \\ 1 \end{pmatrix}
\]
est un vecteur normal à \(\mathscr{D}_1\).

Vérification :  
\[
\vec{n} \cdot \vec{u} = 3 \times (-1) + 1 \times 3 = 0.
\]

2. Soit \(\mathscr{D}_2\) la droite d’équation \(-x - 4y + 1 = 0\).  
On a \(a = -1, b = -4\).  
Un vecteur normal à \(\mathscr{D}_2\) a donc pour coordonnées  
\[
\vec{n} \begin{pmatrix} -1 \\ -4 \end{pmatrix}.
\]
{{% /details %}}


## Exercice résolu — Déterminer une équation cartésienne de droite

> [!NOTE] **Énoncé**  
> Soit \(\Delta\) une droite passant par \(A(2;1)\) et de vecteur normal  
> \[
\vec{n} \begin{pmatrix} -1 \\ 2 \end{pmatrix}.
\]  
> Déterminer une équation cartésienne de \(\Delta\).

{{% details title="Solution commentée" closed="true" %}}
Un point \(M(x;y)\) appartient à \(\Delta\) si et seulement si :
\[
\overrightarrow{AM} \cdot \vec{n} = 0
\]

\[
\Leftrightarrow (-1)(x-2) + 2(y-1) = 0
\]
\[
\Leftrightarrow -x + 2 + 2y - 2 = 0
\]
\[
\Leftrightarrow -x + 2y = 0
\]

Une équation cartésienne de \(\Delta\) est donc :
\[
-x + 2y = 0
\]
{{% /details %}}