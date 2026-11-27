---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Soient \(\vec{u}\) et \(\vec{v}\) deux vecteurs tels que \({\|\vec{u}\| = 3}\), \({\|\vec{v}\| = 4}\) et \({(\vec{u}, \vec{v}) = \dfrac{\pi}{3}}\).
1. Calculer \({\vec{u} \cdot \vec{v}}\).
2. Calculer \({\|\vec{u} + \vec{v}\|}\).
3. Calculer \({(\vec{u} - 2\vec{v}) \cdot (\vec{u} + \vec{v})}\).

{{% details title="Solution" closed="true" %}}
1. \(\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos\left(\dfrac{\pi}{3}\right) = 3 \times 4 \times \dfrac{1}{2} = 6\).
2. \(\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2 = 9 + 12 + 16 = 37\), donc \({\|\vec{u} + \vec{v}\| = \sqrt{37}}\).
3. Par bilinéarité :
\[
(\vec{u} - 2\vec{v}) \cdot (\vec{u} + \vec{v}) = \vec{u} \cdot \vec{u} + \vec{u} \cdot \vec{v} - 2\,\vec{v} \cdot \vec{u} - 2\,\vec{v} \cdot \vec{v} = 9 + 6 - 12 - 32 = -29.
\]
{{% /details %}}

### Exercice 2

Dans une base orthonormée, on considère \({\vec{u}\begin{pmatrix} 2 \\ -3 \end{pmatrix}}\), \(\vec{v}\begin{pmatrix} 4 \\ 1 \end{pmatrix}\) et \(\vec{w}\begin{pmatrix} 3 \\ 2 \end{pmatrix}\).
1. Calculer \({\vec{u} \cdot \vec{v}}\) et \({\vec{u} \cdot \vec{w}}\). Que peut-on dire de \(\vec{u}\) et \(\vec{w}\) ?
2. Déterminer le réel \(m\) tel que les vecteurs \(\begin{pmatrix} m \\ 2 \end{pmatrix}\) et \({\begin{pmatrix} 3 \\ -6 \end{pmatrix}}\) soient orthogonaux.

{{% details title="Solution" closed="true" %}}
En base orthonormée, \({\begin{pmatrix} x \\ y \end{pmatrix} \cdot \begin{pmatrix} x' \\ y' \end{pmatrix} = xx' + yy'}\).

1. \({\vec{u} \cdot \vec{v} = 2 \times 4 + (-3) \times 1 = 5}\) et \({\vec{u} \cdot \vec{w} = 2 \times 3 + (-3) \times 2 = 0}\). Le produit scalaire est nul : \(\vec{u}\) et \(\vec{w}\) sont orthogonaux.
2. Les vecteurs sont orthogonaux si et seulement si \({3m + 2 \times (-6) = 0}\), soit \({m = 4}\).
{{% /details %}}

### Exercice 3

\(ABCD\) est un carré de côté 4 et \(I\) est le milieu du segment \([CD]\). Calculer :
\[
\overrightarrow{AB} \cdot \overrightarrow{AI}, \qquad \overrightarrow{AB} \cdot \overrightarrow{CD}, \qquad \overrightarrow{AC} \cdot \overrightarrow{BD}.
\]

{{% details title="Solution" closed="true" %}}
- Le projeté orthogonal de \(I\) sur la droite \((AB)\) est le milieu \(J\) de \([AB]\), et \(J\) est sur la demi-droite \([AB)\). Donc \(\overrightarrow{AB} \cdot \overrightarrow{AI} = \overrightarrow{AB} \cdot \overrightarrow{AJ} = AB \times AJ = 4 \times 2 = 8\).
- \({\overrightarrow{CD} = -\overrightarrow{AB}}\), donc \({\overrightarrow{AB} \cdot \overrightarrow{CD} = -AB^2 = -16}\).
- Les diagonales d’un carré sont perpendiculaires, donc \({\overrightarrow{AC} \cdot \overrightarrow{BD} = 0}\).

Vérification avec le repère orthonormé \(\left(A\,;\,\dfrac{1}{4}\overrightarrow{AB}, \dfrac{1}{4}\overrightarrow{AD}\right)\) : \(B(4\,;\,0)\), \(C(4\,;\,4)\), \(D(0\,;\,4)\), \(I(2\,;\,4)\), d’où \({\overrightarrow{AB} \cdot \overrightarrow{AI} = 4 \times 2 + 0 \times 4 = 8}\) et \({\overrightarrow{AC} \cdot \overrightarrow{BD} = 4 \times (-4) + 4 \times 4 = 0}\).
{{% /details %}}

### Exercice 4

1. Dans un triangle \(ABC\), \({AB = 5}\), \({AC = 7}\) et \({\widehat{BAC} = 60^\circ}\). Calculer \(BC\).
2. Un triangle a pour côtés 4, 5 et 6. Calculer, au dixième de degré près, la mesure de son plus grand angle.

{{% details title="Solution" closed="true" %}}
1. D’après la formule d’Al-Kashi :
\[
BC^2 = AB^2 + AC^2 - 2\,AB \times AC \times \cos\widehat{BAC} = 25 + 49 - 2 \times 5 \times 7 \times \dfrac{1}{2} = 39,
\]
donc \({BC = \sqrt{39} \approx 6{,}24}\).
2. Le plus grand angle, noté \(\alpha\), est opposé au plus grand côté (6). Par Al-Kashi :
\[
6^2 = 4^2 + 5^2 - 2 \times 4 \times 5 \cos\alpha \iff 36 = 41 - 40\cos\alpha \iff \cos\alpha = \dfrac{5}{40} = \dfrac{1}{8}.
\]
À la calculatrice, \({\alpha \approx 82{,}8^\circ}\).
{{% /details %}}

### Exercice 5

\(A\) et \(B\) sont deux points tels que \({AB = 6}\) et \(I\) est le milieu de \([AB]\). Déterminer l’ensemble des points \(M\) du plan tels que \({MA^2 + MB^2 = 50}\).

{{% details title="Solution" closed="true" %}}
D’après le théorème de la médiane, pour tout point \(M\) :
\[
MA^2 + MB^2 = 2MI^2 + \dfrac{AB^2}{2} = 2MI^2 + 18.
\]
Donc \(MA^2 + MB^2 = 50 \iff 2MI^2 = 32 \iff MI^2 = 16 \iff MI = 4\).

L’ensemble cherché est le cercle de centre \(I\) et de rayon 4.
{{% /details %}}

### Exercice 6

Dans un repère orthonormé, on considère \(A(1\,;\,2)\) et \({B(5\,;\,-2)}\). En utilisant le produit scalaire \({\overrightarrow{MA} \cdot \overrightarrow{MB}}\), déterminer une équation du cercle de diamètre \([AB]\), puis son centre et son rayon.

{{% details title="Solution" closed="true" %}}
Un point \(M(x\,;\,y)\) appartient au cercle de diamètre \([AB]\) si et seulement si \({\overrightarrow{MA} \cdot \overrightarrow{MB} = 0}\). Avec \({\overrightarrow{MA}\begin{pmatrix} 1 - x \\ 2 - y \end{pmatrix}}\) et \({\overrightarrow{MB}\begin{pmatrix} 5 - x \\ -2 - y \end{pmatrix}}\) :
\[
\begin{aligned}
&(1 - x)(5 - x) + (2 - y)(-2 - y) = 0 \\
&\iff x^2 - 6x + 5 + y^2 - 4 = 0 \iff x^2 - 6x + y^2 + 1 = 0.
\end{aligned}
\]
Comme \({x^2 - 6x = (x - 3)^2 - 9}\), l’équation s’écrit \({(x - 3)^2 + y^2 = 8}\).

Le cercle a pour centre \((3\,;\,0)\) - le milieu de \([AB]\) - et pour rayon \({\sqrt{8} = 2\sqrt{2}}\). Vérification : \({AB = \sqrt{4^2 + 4^2} = \sqrt{32} = 4\sqrt{2}}\), dont la moitié vaut bien \(2\sqrt{2}\).
{{% /details %}}
