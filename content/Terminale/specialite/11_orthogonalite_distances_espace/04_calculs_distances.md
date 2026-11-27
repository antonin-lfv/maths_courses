---
title: 'Calculs de distances et d’angles'
weight: 4
cascade:
  type: docs
---

Dans cette page, l’espace est muni d’un **repère orthonormé**.

## Distance entre deux points, mesure d’un angle

> [!TIP] **Propriété**
>
> La distance entre deux points \(A(x_A\,;\,y_A\,;\,z_A)\) et \(B(x_B\,;\,y_B\,;\,z_B)\) est
> \[
AB = \|\overrightarrow{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}.
\]

> [!TIP] **Propriété**
>
> Pour trois points \(A\), \(B\), \(C\) distincts deux à deux :
> \[
\cos(\widehat{BAC}) = \dfrac{\overrightarrow{AB} \cdot \overrightarrow{AC}}{AB \times AC}.
\]

> [!IMPORTANT] **Remarque**
>
> Cette formule, qui découle de \({\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos(\widehat{BAC})}\), permet de calculer la mesure (entre 0° et 180°) d’un angle à partir des coordonnées ; on conclut avec la touche \({\cos^{-1}}\) (ou \(\arccos\)) de la calculatrice.

{{% details title="Exemple" closed="true" %}}
On considère \(A(1\,;\,0\,;\,2)\), \(B(3\,;\,1\,;\,0)\) et \(C(0\,;\,2\,;\,3)\). Alors \({\overrightarrow{AB}\begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}}\) et \({\overrightarrow{AC}\begin{pmatrix} -1 \\ 2 \\ 1 \end{pmatrix}}\), donc
\[
\overrightarrow{AB} \cdot \overrightarrow{AC} = -2 + 2 - 2 = -2, \quad AB = \sqrt{9} = 3, \quad AC = \sqrt{6}.
\]
\({\cos(\widehat{BAC}) = \dfrac{-2}{3\sqrt{6}} \approx -0{,}272}\), d’où \({\widehat{BAC} \approx 105{,}8°}\).
{{% /details %}}

## Distance d’un point à un plan

> [!TIP] **Propriété**
>
> Soit \(\mathscr{P}\) un plan passant par un point \(A\), de vecteur normal \(\vec{n}\), et \(S\) un point de l’espace. La distance de \(S\) au plan \(\mathscr{P}\) est
> \[
SH = \dfrac{\left|\overrightarrow{AS} \cdot \vec{n}\right|}{\|\vec{n}\|},
\]
> où \(H\) est le projeté orthogonal de \(S\) sur \(\mathscr{P}\).

> [!IMPORTANT] **Remarque**
>
> Justification : \({\overrightarrow{AS} \cdot \vec{n} = \overrightarrow{AH} \cdot \vec{n} + \overrightarrow{HS} \cdot \vec{n} = \overrightarrow{HS} \cdot \vec{n}}\), car \(\overrightarrow{AH}\) est dans le plan, donc orthogonal à \(\vec{n}\). Comme \(\overrightarrow{HS}\) et \(\vec{n}\) sont colinéaires, \({\left|\overrightarrow{HS} \cdot \vec{n}\right| = HS \times \|\vec{n}\|}\).

## Calculer des grandeurs dans l’espace

> [!NOTE] **Méthode 4 - Calculer distances, aires et volumes**
>
> On considère les points \(A(1\,;\,0\,;\,0)\), \(B(0\,;\,2\,;\,0)\), \(C(0\,;\,0\,;\,2)\) et \(S(2\,;\,2\,;\,3)\).
> 1. Montrer que le vecteur \(\vec{n}\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}\) est normal au plan \((ABC)\).
> 2. Calculer la distance du point \(S\) au plan \((ABC)\).
> 3. a. Montrer que le triangle \(ABC\) est isocèle en \(A\), puis calculer son aire.
>    b. En déduire le volume de la pyramide \(SABC\) (on rappelle que \({V = \dfrac{1}{3} \times \text{aire de la base} \times \text{hauteur}}\)).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({\overrightarrow{AB}\begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix}}\) et \({\overrightarrow{AC}\begin{pmatrix} -1 \\ 0 \\ 2 \end{pmatrix}}\) ne sont pas colinéaires et dirigent le plan \((ABC)\).  
\({\vec{n} \cdot \overrightarrow{AB} = -2 + 2 + 0 = 0}\) et \({\vec{n} \cdot \overrightarrow{AC} = -2 + 0 + 2 = 0}\) : \(\vec{n}\), non nul, est normal au plan \((ABC)\).

**2.** \(\overrightarrow{AS}\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\), donc \({\overrightarrow{AS} \cdot \vec{n} = 2 + 2 + 3 = 7}\), et \({\|\vec{n}\| = \sqrt{6}}\). La distance de \(S\) au plan est
\[
SH = \dfrac{7}{\sqrt{6}} = \dfrac{7\sqrt{6}}{6} \approx 2{,}86.
\]

**3.** a. \({AB = \sqrt{1 + 4} = \sqrt{5}}\) et \({AC = \sqrt{1 + 4} = \sqrt{5}}\) : le triangle est isocèle en \(A\). Le milieu de \([BC]\) est \(M(0\,;\,1\,;\,1)\) ; dans un triangle isocèle, la médiane \([AM]\) est aussi une hauteur, avec \({AM = \sqrt{1 + 1 + 1} = \sqrt{3}}\) et \({BC = \sqrt{0 + 4 + 4} = 2\sqrt{2}}\).  
\(\mathcal{A}_{ABC} = \dfrac{BC \times AM}{2} = \dfrac{2\sqrt{2} \times \sqrt{3}}{2} = \sqrt{6}\).  
b. La hauteur de la pyramide issue de \(S\) est \(SH\) : \({V = \dfrac{1}{3} \times \sqrt{6} \times \dfrac{7}{\sqrt{6}} = \dfrac{7}{3}}\) unités de volume.
{{% /details %}}
