---
title: 'Équation cartésienne d’une droite'
weight: 1
cascade:
  type: docs
---

Dans tout ce chapitre, le plan est muni d’un repère \((O\,;\,\vec{i}, \vec{j})\), orthonormé lorsqu’on parle de longueurs ou de perpendicularité.

## Vecteur directeur

> [!TIP] **Définition**
>
> Un **vecteur directeur** d’une droite \(d\) est un vecteur non nul \(\vec{u}\) qui a la même direction que \(d\) : si \(A\) et \(B\) sont deux points distincts de \(d\), le vecteur \(\overrightarrow{AB}\) est un vecteur directeur de \(d\).

> [!TIP] **Propriété**
>
> Si \(\vec{u}\) est un vecteur directeur de \(d\), alors les vecteurs directeurs de \(d\) sont exactement les vecteurs non nuls colinéaires à \(\vec{u}\). Une droite est entièrement déterminée par un point et un vecteur directeur.

> [!TIP] **Conséquence**
>
> Le point \(M\) appartient à la droite \(d\) passant par \(A\) et de vecteur directeur \(\vec{u}\) si et seulement si les vecteurs \(\overrightarrow{AM}\) et \(\vec{u}\) sont colinéaires.

## Équation cartésienne

> [!TIP] **Théorème**
>
> - Toute droite \(d\) admet une équation de la forme
> \[
ax + by + c = 0,
\]
> avec \(a\), \(b\), \(c\) réels et \({(a\,;\,b) \neq (0\,;\,0)}\). Le vecteur \({\vec{u}\begin{pmatrix} -b \\ a \end{pmatrix}}\) est alors un vecteur directeur de \(d\).
> - Réciproquement, si \({(a\,;\,b) \neq (0\,;\,0)}\), l’ensemble des points \(M(x\,;\,y)\) tels que \({ax + by + c = 0}\) est une droite de vecteur directeur \({\vec{u}\begin{pmatrix} -b \\ a \end{pmatrix}}\).
>
> Une telle équation est appelée **équation cartésienne** de la droite. Un point \(M(x_0\,;\,y_0)\) appartient à \(d\) si et seulement si \({ax_0 + by_0 + c = 0}\).

{{% details title="Démonstration" closed="true" %}}
**Sens direct.** Soit \(d\) passant par \(A(x_A\,;\,y_A)\), de vecteur directeur \({\vec{u}\begin{pmatrix} \alpha \\ \beta \end{pmatrix} \neq \vec{0}}\). Pour tout point \(M(x\,;\,y)\) :
\[
\begin{aligned}
M \in d &\iff \det\left(\overrightarrow{AM}, \vec{u}\right) = 0 \iff (x - x_A)\beta - \alpha(y - y_A) = 0 \\[0.3em]
&\iff \beta x - \alpha y + (\alpha y_A - \beta x_A) = 0.
\end{aligned}
\]
En posant \({a = \beta}\), \({b = -\alpha}\) et \({c = \alpha y_A - \beta x_A}\), on obtient une équation \({ax + by + c = 0}\) avec \({(a\,;\,b) \neq (0\,;\,0)}\), et \({\vec{u}\begin{pmatrix} -b \\ a \end{pmatrix}}\).

**Réciproque.** Supposons par exemple \({b \neq 0}\) (le cas \({a \neq 0}\) est analogue). Le point \({A\left(0\,;\,-\dfrac{c}{b}\right)}\) vérifie l’équation. Pour tout point \(M(x\,;\,y)\), on calcule
\[
\det\left(\overrightarrow{AM}, \vec{u}\right) = x \times a - (-b)\left(y + \dfrac{c}{b}\right) = ax + by + c.
\]
Donc \({ax + by + c = 0 \iff \overrightarrow{AM}}\) et \(\vec{u}\) colinéaires \({\iff M}\) appartient à la droite passant par \(A\) de vecteur directeur \(\vec{u}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Une droite admet une infinité d’équations cartésiennes : on les obtient en multipliant une équation par un réel non nul. Par exemple \({2x - y + 3 = 0}\) et \({-4x + 2y - 6 = 0}\) représentent la même droite.

{{% details title="Exemple" closed="true" %}}
La droite \(d\) d’équation \({2x - 5y + 1 = 0}\) a pour vecteur directeur \(\vec{u}\begin{pmatrix} 5 \\ 2 \end{pmatrix}\). Le point \(A(2\,;\,1)\) lui appartient car \({4 - 5 + 1 = 0}\) ; le point \(B(1\,;\,1)\) non, car \({2 - 5 + 1 = -2 \neq 0}\).
{{% /details %}}

## Droites parallèles

> [!TIP] **Propriété**
>
> Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires. Ainsi, les droites d’équations \({ax + by + c = 0}\) et \({a'x + b'y + c' = 0}\) sont parallèles si et seulement si
> \[
\det\left(\begin{pmatrix} -b \\ a \end{pmatrix}, \begin{pmatrix} -b' \\ a' \end{pmatrix}\right) = -ba' + ab' = 0, \qquad \text{soit} \qquad ab' - a'b = 0.
\]
> Elles sont **confondues** si de plus les triplets \((a\,;\,b\,;\,c)\) et \((a'\,;\,b'\,;\,c')\) sont proportionnels.

{{% details title="Exemple" closed="true" %}}
\({d_1 : 3x - 2y + 1 = 0}\) et \({d_2 : -6x + 4y + 5 = 0}\) : \({3 \times 4 - (-6) \times (-2) = 12 - 12 = 0}\), elles sont parallèles. Elles ne sont pas confondues : \({(-6\,;\,4\,;\,5)}\) n’est pas proportionnel à \({(3\,;\,-2\,;\,1)}\) (il faudrait le coefficient \({-2}\), ce qui donnerait \({c' = -2}\)).
{{% /details %}}

## Déterminer et tracer une droite

> [!NOTE] **Méthode 1 - Déterminer une équation cartésienne**
>
> 1. Déterminer une équation cartésienne de la droite \(d\) passant par \(A(1\,;\,2)\) et de vecteur directeur \({\vec{u}\begin{pmatrix} 3 \\ -1 \end{pmatrix}}\).
> 2. Déterminer une équation cartésienne de la droite \((BC)\), avec \({B(-1\,;\,4)}\) et \({C(3\,;\,-2)}\).

{{% details title="Solution commentée" closed="true" %}}
1. **Avec le déterminant.** \({M(x\,;\,y) \in d \iff \det\left(\overrightarrow{AM}, \vec{u}\right) = 0}\), avec \({\overrightarrow{AM}\begin{pmatrix} x - 1 \\ y - 2 \end{pmatrix}}\) :
\[
\begin{aligned}
(x - 1) \times (-1) - 3(y - 2) = 0 &\iff -x + 1 - 3y + 6 = 0 \\[0.3em]
&\iff -x - 3y + 7 = 0.
\end{aligned}
\]
   Une équation de \(d\) est \({x + 3y - 7 = 0}\). *(Contrôle : \({1 + 6 - 7 = 0}\).)*

   **Autre méthode.** Un vecteur directeur \({\begin{pmatrix} -b \\ a \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}}\) donne \({a = -1}\), \({b = -3}\) : l’équation est \({-x - 3y + c = 0}\), et \({A \in d}\) donne \({-1 - 6 + c = 0}\), soit \({c = 7}\).
2. \({\overrightarrow{BC}\begin{pmatrix} 4 \\ -6 \end{pmatrix}}\) est un vecteur directeur. \(M(x\,;\,y) \in (BC) \iff \det\left(\overrightarrow{BM}, \overrightarrow{BC}\right) = 0\) :
\[
\begin{aligned}
(x + 1)(-6) - 4(y - 4) = 0 &\iff -6x - 4y + 10 = 0 \\[0.3em]
&\iff 3x + 2y - 5 = 0.
\end{aligned}
\]
   *(Contrôle avec \(C\) : \({9 - 4 - 5 = 0}\).)*
{{% /details %}}

> [!NOTE] **Méthode 2 - Tracer une droite donnée par une équation cartésienne**
>
> Tracer la droite \(d\) d’équation \({2x + 3y - 6 = 0}\).

{{% details title="Solution commentée" closed="true" %}}
Il suffit de connaître deux points, ou un point et un vecteur directeur.
- Pour \({x = 0}\) : \({3y = 6}\), donc \({y = 2}\) : \({A(0\,;\,2) \in d}\).
- Pour \({y = 0}\) : \({2x = 6}\), donc \({x = 3}\) : \({B(3\,;\,0) \in d}\).

On trace la droite \((AB)\). Contrôle : \({\vec{u}\begin{pmatrix} -3 \\ 2 \end{pmatrix}}\) est un vecteur directeur, et \({\overrightarrow{AB}\begin{pmatrix} 3 \\ -2 \end{pmatrix} = -\vec{u}}\) lui est bien colinéaire.

![](/images/image393.png)
{{% /details %}}
