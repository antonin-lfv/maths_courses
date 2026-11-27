---
title: 'Coordonnées et opérations'
weight: 4
cascade:
  type: docs
---

Le plan est muni d’un repère \((O\,;\,\vec{i}, \vec{j})\).

## Égalité, somme, produit par un réel

> [!TIP] **Propriétés**
>
> Soit \(\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}\) deux vecteurs et \(k\) un réel.
> - \({\vec{u} = \vec{v}}\) si et seulement si \({x = x'}\) **et** \({y = y'}\).
> - \({\vec{u} + \vec{v}\begin{pmatrix} x + x' \\ y + y' \end{pmatrix}}\) et \({\vec{u} - \vec{v}\begin{pmatrix} x - x' \\ y - y' \end{pmatrix}}\).
> - \({-\vec{u}\begin{pmatrix} -x \\ -y \end{pmatrix}}\) et \(k\vec{u}\begin{pmatrix} kx \\ ky \end{pmatrix}\).

{{% details title="Justification" closed="true" %}}
Les coordonnées sont uniques. Pour la somme : \(\vec{u} + \vec{v} = (x\vec{i} + y\vec{j}) + (x'\vec{i} + y'\vec{j}) = (x + x')\vec{i} + (y + y')\vec{j}\), d’après les règles de calcul sur les vecteurs. De même, \({k\vec{u} = k(x\vec{i} + y\vec{j}) = (kx)\vec{i} + (ky)\vec{j}}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Si \({\vec{u}\begin{pmatrix} 3 \\ -1 \end{pmatrix}}\) et \({\vec{v}\begin{pmatrix} -2 \\ 4 \end{pmatrix}}\), alors
\[
2\vec{u} - \vec{v}\begin{pmatrix} 2 \times 3 - (-2) \\ 2 \times (-1) - 4 \end{pmatrix} = \begin{pmatrix} 8 \\ -6 \end{pmatrix}.
\]
Dans une base orthonormée, \({\|2\vec{u} - \vec{v}\| = \sqrt{64 + 36} = 10}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On retrouve les coordonnées du milieu \(K\) de \([AB]\) : \({\overrightarrow{OK} = \overrightarrow{OA} + \overrightarrow{AK} = \overrightarrow{OA} + \dfrac{1}{2}\overrightarrow{AB}}\), donc \({x_K = x_A + \dfrac{1}{2}(x_B - x_A) = \dfrac{x_A + x_B}{2}}\), et de même pour \(y_K\).

## Utiliser les coordonnées

> [!NOTE] **Méthode 1 - Construire un parallélogramme par le calcul**
>
> On donne \({A(-3\,;\,1)}\), \({B(2\,;\,-1)}\) et \(C(4\,;\,3)\). Déterminer les coordonnées du point \(D\) tel que \(ABCD\) soit un parallélogramme, puis celles de son centre.

{{% details title="Solution commentée" closed="true" %}}
\(ABCD\) est un parallélogramme si et seulement si \({\overrightarrow{AD} = \overrightarrow{BC}}\) (attention à l’ordre des sommets). On note \(D(x\,;\,y)\) :
\[
\overrightarrow{AD}\begin{pmatrix} x + 3 \\ y - 1 \end{pmatrix}, \qquad \overrightarrow{BC}\begin{pmatrix} 4 - 2 \\ 3 - (-1) \end{pmatrix} = \begin{pmatrix} 2 \\ 4 \end{pmatrix}.
\]
Deux vecteurs sont égaux si et seulement si leurs coordonnées sont égales : \({x + 3 = 2}\) et \({y - 1 = 4}\), soit \({D(-1\,;\,5)}\).

Le centre est le milieu de la diagonale \([AC]\) : \({\left(\dfrac{-3 + 4}{2}\,;\,\dfrac{1 + 3}{2}\right) = (0{,}5\,;\,2)}\). Contrôle : c’est aussi le milieu de \([BD]\), \({\left(\dfrac{2 - 1}{2}\,;\,\dfrac{-1 + 5}{2}\right) = (0{,}5\,;\,2)}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Placer un point défini par une égalité vectorielle**
>
> Avec les points \({A(-3\,;\,1)}\), \({B(2\,;\,-1)}\), \(C(4\,;\,3)\), déterminer les coordonnées du point \(E\) tel que \({\overrightarrow{AE} = 2\overrightarrow{AB} - \overrightarrow{AC}}\).

{{% details title="Solution commentée" closed="true" %}}
\({\overrightarrow{AB}\begin{pmatrix} 5 \\ -2 \end{pmatrix}}\) et \(\overrightarrow{AC}\begin{pmatrix} 7 \\ 2 \end{pmatrix}\), donc \({2\overrightarrow{AB} - \overrightarrow{AC}\begin{pmatrix} 10 - 7 \\ -4 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ -6 \end{pmatrix}}\).

Avec \(E(x\,;\,y)\) : \({\overrightarrow{AE}\begin{pmatrix} x + 3 \\ y - 1 \end{pmatrix}}\). On identifie : \({x + 3 = 3}\) et \({y - 1 = -6}\), donc \({E(0\,;\,-5)}\).
{{% /details %}}
