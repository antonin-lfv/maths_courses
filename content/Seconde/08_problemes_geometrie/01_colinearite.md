---
title: 'Colinéarité'
weight: 1
cascade:
  type: docs
---

## Vecteurs colinéaires

> [!TIP] **Définition**
>
> Deux vecteurs non nuls \(\vec{u}\) et \(\vec{v}\) sont **colinéaires** s’ils ont la même direction, c’est-à-dire s’il existe un réel \(k\) tel que \({\vec{v} = k\vec{u}}\).
>
> Par convention, le vecteur nul est colinéaire à tout vecteur.

{{% details title="Exemple" closed="true" %}}
- \({\vec{u}\begin{pmatrix} 2 \\ -3 \end{pmatrix}}\) et \({\vec{v}\begin{pmatrix} -5 \\ 7{,}5 \end{pmatrix}}\) sont colinéaires : \({\vec{v} = -2{,}5\,\vec{u}}\).
- \({\vec{u}\begin{pmatrix} 2 \\ -3 \end{pmatrix}}\) et \({\vec{w}\begin{pmatrix} 4 \\ -5 \end{pmatrix}}\) ne le sont pas : il faudrait \({k = 2}\) pour l’abscisse et \({k = \dfrac{5}{3}}\) pour l’ordonnée.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Dire que deux vecteurs non nuls sont colinéaires revient à dire que leurs coordonnées sont **proportionnelles**.

## Déterminant de deux vecteurs

> [!TIP] **Définition**
>
> Dans une base \((\vec{i}, \vec{j})\), le **déterminant** des vecteurs \(\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}\) est le nombre
> \[
\det(\vec{u}, \vec{v}) = \begin{vmatrix} x & x' \\ y & y' \end{vmatrix} = xy' - x'y.
\]

> [!TIP] **Propriété**
>
> Deux vecteurs \(\vec{u}\) et \(\vec{v}\) sont colinéaires si et seulement si \({\det(\vec{u}, \vec{v}) = 0}\).

{{% details title="Démonstration" closed="true" %}}
Si l’un des vecteurs est nul, ils sont colinéaires et le déterminant est nul. On suppose désormais \({\vec{u} \neq \vec{0}}\).
- Si \({\vec{v} = k\vec{u}}\), alors \({x' = kx}\) et \({y' = ky}\), donc \({xy' - x'y = x(ky) - (kx)y = 0}\).
- Réciproquement, supposons \({xy' - x'y = 0}\).
  - Si \({x \neq 0}\), on pose \({k = \dfrac{x'}{x}}\) : alors \({x' = kx}\) et \({y' = \dfrac{x'y}{x} = ky}\), donc \({\vec{v} = k\vec{u}}\).
  - Si \({x = 0}\), alors \({y \neq 0}\) (car \({\vec{u} \neq \vec{0}}\)) et l’égalité devient \({-x'y = 0}\), donc \({x' = 0}\). Avec \({k = \dfrac{y'}{y}}\), on a \({x' = 0 = kx}\) et \({y' = ky}\) : \({\vec{v} = k\vec{u}}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(\det\left(\begin{pmatrix} 2 \\ -3 \end{pmatrix}, \begin{pmatrix} 4 \\ -5 \end{pmatrix}\right) = 2 \times (-5) - 4 \times (-3) = -10 + 12 = 2 \neq 0\) : ces vecteurs ne sont pas colinéaires.
{{% /details %}}

> [!TIP] **Définition**
>
> Deux vecteurs **non colinéaires** \(\vec{u}\) et \(\vec{v}\) forment une **base** des vecteurs du plan : tout vecteur \(\vec{w}\) s’écrit de façon unique \({\vec{w} = a\vec{u} + b\vec{v}}\), avec \(a\) et \(b\) réels. La base est **orthogonale** si les directions de \(\vec{u}\) et \(\vec{v}\) sont perpendiculaires, **orthonormée** si de plus \({\|\vec{u}\| = \|\vec{v}\| = 1}\).

## Homothétie (approfondissement)

> [!TIP] **Définition**
>
> Soit \(H\) un point et \(k\) un réel non nul. L’**homothétie** de centre \(H\) et de rapport \(k\) transforme tout point \(M\) en le point \(M'\) tel que
> \[
\overrightarrow{HM'} = k\,\overrightarrow{HM}.
\]

Les vecteurs \(\overrightarrow{HM}\) et \(\overrightarrow{HM'}\) sont colinéaires : \(H\), \(M\) et \(M'\) sont alignés. Si \({k > 0}\), \(M'\) est du même côté que \(M\) par rapport à \(H\) ; si \({k < 0}\), de l’autre côté. Une homothétie agrandit les figures si \({|k| > 1}\) et les réduit si \({|k| < 1}\).

{{% details title="Exemple" closed="true" %}}
L’image de \(M(3\,;\,1)\) par l’homothétie de centre \(H(1\,;\,2)\) et de rapport \({-2}\) est le point \(M'\) tel que \({\overrightarrow{HM'} = -2\overrightarrow{HM}}\). Comme \({\overrightarrow{HM}\begin{pmatrix} 2 \\ -1 \end{pmatrix}}\), \({\overrightarrow{HM'}\begin{pmatrix} -4 \\ 2 \end{pmatrix}}\), donc \({M'(1 - 4\,;\,2 + 2) = M'(-3\,;\,4)}\).
{{% /details %}}

## Tester la colinéarité

> [!NOTE] **Méthode 1 - Étudier la colinéarité avec le déterminant**
>
> Les vecteurs suivants sont-ils colinéaires ?
> \[
\text{a)}\ \vec{u}\begin{pmatrix} 6 \\ -4 \end{pmatrix},\ \vec{v}\begin{pmatrix} -9 \\ 6 \end{pmatrix} \qquad \text{b)}\ \vec{u}\begin{pmatrix} \sqrt{2} \\ 1 \end{pmatrix},\ \vec{v}\begin{pmatrix} 2 \\ \sqrt{2} - 1 \end{pmatrix}
\]

{{% details title="Solution commentée" closed="true" %}}
a) \(\det(\vec{u}, \vec{v}) = 6 \times 6 - (-9) \times (-4) = 36 - 36 = 0\) : ils sont colinéaires (en effet \({\vec{v} = -1{,}5\,\vec{u}}\)).

b) \(\det(\vec{u}, \vec{v}) = \sqrt{2}\left(\sqrt{2} - 1\right) - 2 \times 1 = 2 - \sqrt{2} - 2 = -\sqrt{2} \neq 0\) : ils ne sont pas colinéaires.
{{% /details %}}

> [!NOTE] **Méthode 2 - Déterminer un paramètre pour obtenir la colinéarité**
>
> Déterminer le réel \(m\) pour que les vecteurs \(\vec{u}\begin{pmatrix} m \\ 3 \end{pmatrix}\) et \({\vec{v}\begin{pmatrix} 4 \\ m + 4 \end{pmatrix}}\) soient colinéaires.

{{% details title="Solution commentée" closed="true" %}}
\(\det(\vec{u}, \vec{v}) = m(m + 4) - 4 \times 3 = m^2 + 4m - 12\). On factorise : \({m^2 + 4m - 12 = (m + 6)(m - 2)}\) (on vérifie en développant). Les vecteurs sont colinéaires si et seulement si \({m = -6}\) ou \({m = 2}\).

Contrôle : pour \({m = 2}\), \(\vec{u}\begin{pmatrix} 2 \\ 3 \end{pmatrix}\) et \({\vec{v}\begin{pmatrix} 4 \\ 6 \end{pmatrix} = 2\vec{u}}\) ; pour \({m = -6}\), \({\vec{u}\begin{pmatrix} -6 \\ 3 \end{pmatrix}}\) et \({\vec{v}\begin{pmatrix} 4 \\ -2 \end{pmatrix} = -\dfrac{2}{3}\vec{u}}\).
{{% /details %}}
