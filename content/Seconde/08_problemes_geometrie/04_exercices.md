---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Les vecteurs suivants sont-ils colinéaires ? a) \(\vec{u}\begin{pmatrix} -2 \\ 5 \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} 4 \\ -10 \end{pmatrix}\) ; b) \(\vec{u}\begin{pmatrix} 3 \\ 7 \end{pmatrix}\) et \(\vec{w}\begin{pmatrix} 5 \\ 12 \end{pmatrix}\).

{{% details title="Solution" closed="true" %}}
a) \(\det(\vec{u}, \vec{v}) = (-2)(-10) - 4 \times 5 = 20 - 20 = 0\) : colinéaires (\(\vec{v} = -2\vec{u}\)).

b) \(\det(\vec{u}, \vec{w}) = 3 \times 12 - 5 \times 7 = 36 - 35 = 1 \neq 0\) : non colinéaires.
{{% /details %}}

### Exercice 2

On donne \(A(-1\,;\,3)\), \(B(2\,;\,-3)\), \(C(5\,;\,-9)\) et \(D(0\,;\,4)\).
1. Les points \(A\), \(B\), \(C\) sont-ils alignés ? Et \(A\), \(B\), \(D\) ?
2. Déterminer l’abscisse \(x\) du point \(M(x\,;\,-11)\) pour qu’il soit aligné avec \(A\) et \(B\).

{{% details title="Solution" closed="true" %}}
1. \(\overrightarrow{AB}\begin{pmatrix} 3 \\ -6 \end{pmatrix}\), \(\overrightarrow{AC}\begin{pmatrix} 6 \\ -12 \end{pmatrix}\) : \(\det = 3 \times (-12) - 6 \times (-6) = 0\), donc \(A\), \(B\), \(C\) sont alignés. \(\overrightarrow{AD}\begin{pmatrix} 1 \\ 1 \end{pmatrix}\) : \(\det(\overrightarrow{AB}, \overrightarrow{AD}) = 3 \times 1 - 1 \times (-6) = 9 \neq 0\), donc \(A\), \(B\), \(D\) ne sont pas alignés.
2. \(\overrightarrow{AM}\begin{pmatrix} x + 1 \\ -14 \end{pmatrix}\) ; \(\det(\overrightarrow{AB}, \overrightarrow{AM}) = 3 \times (-14) - (x + 1)(-6) = -42 + 6x + 6 = 6x - 36\). Il est nul si et seulement si \(x = 6\) : \(M(6\,;\,-11)\).
{{% /details %}}

### Exercice 3

Soit \(ABC\) un triangle, \(I\) le milieu de \([BC]\) et \(P\) le point tel que \(\overrightarrow{AP} = \overrightarrow{AB} + \overrightarrow{AC}\). Démontrer que \(A\), \(I\) et \(P\) sont alignés. Quelle est la nature du quadrilatère \(ABPC\) ?

{{% details title="Solution" closed="true" %}}
\(\overrightarrow{AI} = \overrightarrow{AB} + \overrightarrow{BI} = \overrightarrow{AB} + \frac{1}{2}\overrightarrow{BC} = \overrightarrow{AB} + \frac{1}{2}\left(\overrightarrow{BA} + \overrightarrow{AC}\right) = \frac{1}{2}\overrightarrow{AB} + \frac{1}{2}\overrightarrow{AC}\). Donc \(\overrightarrow{AP} = 2\overrightarrow{AI}\) : les vecteurs sont colinéaires et \(A\), \(I\), \(P\) sont alignés.

D’après la règle du parallélogramme, \(\overrightarrow{AB} + \overrightarrow{AC} = \overrightarrow{AP}\) signifie que \(ABPC\) est un parallélogramme (de centre \(I\)).
{{% /details %}}

### Exercice 4

Soit \(\alpha\) la mesure d’un angle aigu telle que \(\cos \alpha = 0{,}28\). Calculer la valeur exacte de \(\sin \alpha\) et de \(\tan \alpha\).

{{% details title="Solution" closed="true" %}}
\(\sin^2 \alpha = 1 - 0{,}28^2 = 1 - 0{,}078\,4 = 0{,}921\,6\), et \(\sin \alpha > 0\), donc \(\sin \alpha = \sqrt{0{,}921\,6} = 0{,}96\). Puis \(\tan \alpha = \dfrac{0{,}96}{0{,}28} = \dfrac{24}{7}\).
{{% /details %}}

### Exercice 5

\(ABC\) est un triangle rectangle en \(A\) tel que \(AB = 6\) et \(AC = 8\). On note \(H\) le projeté orthogonal de \(A\) sur \((BC)\).
1. Calculer \(BC\).
2. En calculant de deux façons l’aire du triangle \(ABC\), déterminer la distance du point \(A\) à la droite \((BC)\).

{{% details title="Solution" closed="true" %}}
1. Pythagore : \(BC^2 = 36 + 64 = 100\), donc \(BC = 10\).
2. Avec les côtés de l’angle droit : \(\mathcal{A} = \frac{1}{2} \times 6 \times 8 = 24\). Avec la hauteur \([AH]\) : \(\mathcal{A} = \frac{1}{2} \times BC \times AH = 5\,AH\). Donc \(AH = \frac{24}{5} = 4{,}8\) : la distance de \(A\) à \((BC)\) est \(4{,}8\).
{{% /details %}}

### Exercice 6

Dans un repère orthonormé d’origine \(O\), on considère \(A(-3\,;\,0)\), \(B(3\,;\,0)\) et \(M\left(1\,;\,2\sqrt{2}\right)\).
1. Montrer que \(M\) appartient au cercle de diamètre \([AB]\).
2. En déduire la nature du triangle \(AMB\), puis le vérifier par un calcul de longueurs.

{{% details title="Solution" closed="true" %}}
1. Le cercle de diamètre \([AB]\) a pour centre \(O\), milieu de \([AB]\), et pour rayon \(3\). Or \(OM = \sqrt{1 + 8} = 3\) : \(M\) est sur ce cercle.
2. \(AMB\) est inscrit dans un cercle dont \([AB]\) est un diamètre : il est rectangle en \(M\). Vérification : \(AM^2 = 4^2 + 8 = 24\), \(BM^2 = (-2)^2 + 8 = 12\), et \(AM^2 + BM^2 = 36 = AB^2\).
{{% /details %}}
