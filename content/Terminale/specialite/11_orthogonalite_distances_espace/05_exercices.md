---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

Dans tous les exercices utilisant des coordonnées, le repère est orthonormé.

### Exercice 1

On donne \(\vec{u}\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} 1 \\ 4 \\ m \end{pmatrix}\). Déterminer le réel \(m\) pour que \(\vec{u}\) et \(\vec{v}\) soient orthogonaux.

{{% details title="Solution" closed="true" %}}
\(\vec{u} \cdot \vec{v} = 2 - 4 + 3m = 3m - 2\). Les vecteurs sont orthogonaux si et seulement si \(3m - 2 = 0\), soit \(m = \dfrac{2}{3}\).
{{% /details %}}

### Exercice 2

On considère les points \(A(2\,;\,1\,;\,-1)\), \(B(4\,;\,2\,;\,1)\) et \(C(3\,;\,-1\,;\,-1)\).
1. Démontrer que le triangle \(ABC\) est rectangle en \(A\).
2. Calculer son aire.

{{% details title="Solution" closed="true" %}}
1. \(\overrightarrow{AB}\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}\) et \(\overrightarrow{AC}\begin{pmatrix} 1 \\ -2 \\ 0 \end{pmatrix}\) : \(\overrightarrow{AB} \cdot \overrightarrow{AC} = 2 - 2 + 0 = 0\). Les droites \((AB)\) et \((AC)\) sont perpendiculaires : le triangle est rectangle en \(A\).
2. \(AB = \sqrt{4 + 1 + 4} = 3\) et \(AC = \sqrt{1 + 4} = \sqrt{5}\), donc \(\mathcal{A} = \dfrac{AB \times AC}{2} = \dfrac{3\sqrt{5}}{2}\).
{{% /details %}}

### Exercice 3

\(ABCDEFGH\) est un cube. Démontrer que la droite \((FH)\) est orthogonale au plan \((ACG)\).

{{% details title="Solution" closed="true" %}}
Dans le repère orthonormé \((A\,;\,\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})\) : \(\overrightarrow{FH}\begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}\), \(\overrightarrow{AC}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}\) et \(\overrightarrow{AE}\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}\), ces deux derniers vecteurs (non colinéaires) dirigeant le plan \((ACG)\), qui est aussi le plan \((ACGE)\).  
\(\overrightarrow{FH} \cdot \overrightarrow{AC} = -1 + 1 + 0 = 0\) et \(\overrightarrow{FH} \cdot \overrightarrow{AE} = 0\) : \((FH)\) est orthogonale au plan \((ACG)\).
{{% /details %}}

### Exercice 4

Calculer la distance du point \(A(1\,;\,2\,;\,3)\) au plan passant par l’origine \(O\) et de vecteur normal \(\vec{n}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}\).

{{% details title="Solution" closed="true" %}}
\(d = \dfrac{\left|\overrightarrow{OA} \cdot \vec{n}\right|}{\|\vec{n}\|} = \dfrac{|1 + 2 + 3|}{\sqrt{3}} = \dfrac{6}{\sqrt{3}} = 2\sqrt{3}\).
{{% /details %}}

### Exercice 5

On considère \(A(0\,;\,0\,;\,0)\), \(B(1\,;\,1\,;\,0)\) et \(C(0\,;\,1\,;\,1)\). Déterminer la mesure de l’angle \(\widehat{BAC}\). Quelle est la nature du triangle \(ABC\) ?

{{% details title="Solution" closed="true" %}}
\(\overrightarrow{AB} \cdot \overrightarrow{AC} = 0 + 1 + 0 = 1\), \(AB = AC = \sqrt{2}\), donc \(\cos(\widehat{BAC}) = \dfrac{1}{2}\) et \(\widehat{BAC} = 60°\).  
De plus \(BC = \sqrt{1 + 0 + 1} = \sqrt{2}\) : les trois côtés sont égaux, le triangle \(ABC\) est **équilatéral**.
{{% /details %}}
