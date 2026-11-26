---
title: 'Parallélisme et alignement'
weight: 2
cascade:
  type: docs
---

## Traduire parallélisme et alignement avec des vecteurs

> [!TIP] **Propriétés**
>
> Soit \(A\), \(B\), \(C\), \(D\) des points du plan, avec \(A \neq B\) et \(C \neq D\).
> - Les droites \((AB)\) et \((CD)\) sont **parallèles** si et seulement si les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{CD}\) sont colinéaires.
> - Les points \(A\), \(B\), \(C\) sont **alignés** si et seulement si les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont colinéaires.

{{% details title="Justification" closed="true" %}}
Deux vecteurs non nuls sont colinéaires si et seulement s’ils ont la même direction, c’est-à-dire si les droites qui les portent sont parallèles. Pour l’alignement, \((AB)\) et \((AC)\) sont parallèles et ont le point \(A\) en commun : elles sont confondues, donc \(C \in (AB)\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Soit \(A(-2\,;\,-1)\), \(B(1\,;\,1)\), \(C(7\,;\,5)\), \(D(0\,;\,4)\) et \(E(3\,;\,6)\).
- \(\overrightarrow{AB}\begin{pmatrix} 3 \\ 2 \end{pmatrix}\) et \(\overrightarrow{AC}\begin{pmatrix} 9 \\ 6 \end{pmatrix}\) : \(\det = 3 \times 6 - 9 \times 2 = 0\), donc \(A\), \(B\), \(C\) sont alignés.
- \(\overrightarrow{DE}\begin{pmatrix} 3 \\ 2 \end{pmatrix} = \overrightarrow{AB}\), donc \((DE) \parallel (AB)\) (et même \(ABED\) est un parallélogramme).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Deux méthodes sont possibles :
> - **avec des coordonnées** : on calcule un déterminant ;
> - **sans repère** : on exprime les deux vecteurs en fonction de deux vecteurs de référence (une base) à l’aide de la relation de Chasles, et on cherche un réel \(k\) tel que l’un soit \(k\) fois l’autre.

## Démontrer un parallélisme ou un alignement

> [!NOTE] **Méthode 1 — Avec des coordonnées**
>
> On donne \(A(1\,;\,-2)\), \(B(4\,;\,0)\), \(C(-1\,;\,3)\) et \(D(5\,;\,7)\).
> 1. Les droites \((AB)\) et \((CD)\) sont-elles parallèles ?
> 2. Le point \(E(-5\,;\,-6)\) appartient-il à la droite \((AB)\) ?

{{% details title="Solution commentée" closed="true" %}}
1. \(\overrightarrow{AB}\begin{pmatrix} 3 \\ 2 \end{pmatrix}\) et \(\overrightarrow{CD}\begin{pmatrix} 6 \\ 4 \end{pmatrix}\) : \(\det = 3 \times 4 - 6 \times 2 = 0\). Les vecteurs sont colinéaires (\(\overrightarrow{CD} = 2\overrightarrow{AB}\)) : les droites sont parallèles.
2. \(\overrightarrow{AE}\begin{pmatrix} -6 \\ -4 \end{pmatrix}\) : \(\det(\overrightarrow{AB}, \overrightarrow{AE}) = 3 \times (-4) - (-6) \times 2 = 0\). \(A\), \(B\), \(E\) sont alignés : \(E \in (AB)\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Sans repère, avec la relation de Chasles**
>
> Soit \(ABC\) un triangle. On définit les points \(M\) et \(N\) par \(\overrightarrow{AM} = \frac{1}{3}\overrightarrow{AB}\) et \(\overrightarrow{AN} = \frac{1}{3}\overrightarrow{AC}\). Démontrer que \((MN) \parallel (BC)\).

{{% details title="Solution commentée" closed="true" %}}
On exprime \(\overrightarrow{MN}\) en passant par \(A\) :
\[
\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AN} = -\frac{1}{3}\overrightarrow{AB} + \frac{1}{3}\overrightarrow{AC} = \frac{1}{3}\left(\overrightarrow{BA} + \overrightarrow{AC}\right) = \frac{1}{3}\overrightarrow{BC}.
\]
Les vecteurs \(\overrightarrow{MN}\) et \(\overrightarrow{BC}\) sont colinéaires, donc \((MN) \parallel (BC)\). On obtient de plus \(MN = \frac{1}{3}BC\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Démontrer un alignement dans une base**
>
> \(ABCD\) est un parallélogramme, \(I\) est le milieu de \([AB]\) et \(E\) est le point tel que \(\overrightarrow{AE} = \frac{1}{3}\overrightarrow{AC}\). Démontrer que \(D\), \(E\) et \(I\) sont alignés.

{{% details title="Solution commentée" closed="true" %}}
On travaille dans la base \(\left(\overrightarrow{AB}, \overrightarrow{AD}\right)\) (ces vecteurs ne sont pas colinéaires). D’après la règle du parallélogramme, \(\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}\).
\[
\overrightarrow{DE} = \overrightarrow{DA} + \overrightarrow{AE} = -\overrightarrow{AD} + \frac{1}{3}\left(\overrightarrow{AB} + \overrightarrow{AD}\right) = \frac{1}{3}\overrightarrow{AB} - \frac{2}{3}\overrightarrow{AD},
\]
\[
\overrightarrow{DI} = \overrightarrow{DA} + \overrightarrow{AI} = -\overrightarrow{AD} + \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}\overrightarrow{AB} - \overrightarrow{AD}.
\]
On remarque que \(\frac{2}{3} \times \frac{1}{2} = \frac{1}{3}\) et \(\frac{2}{3} \times (-1) = -\frac{2}{3}\) : \(\overrightarrow{DE} = \frac{2}{3}\overrightarrow{DI}\). Les vecteurs sont colinéaires, donc \(D\), \(E\), \(I\) sont alignés.

*Variante avec des coordonnées* : dans le repère \((A\,;\,\overrightarrow{AB}, \overrightarrow{AD})\), \(D(0\,;\,1)\), \(I\left(\frac{1}{2}\,;\,0\right)\), \(E\left(\frac{1}{3}\,;\,\frac{1}{3}\right)\), et \(\det\left(\overrightarrow{DE}, \overrightarrow{DI}\right) = \frac{1}{3} \times (-1) - \frac{1}{2} \times \left(-\frac{2}{3}\right) = 0\).
{{% /details %}}
