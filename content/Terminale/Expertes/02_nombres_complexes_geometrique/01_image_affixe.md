---
title: "Image d'un nombre complexe et affixe"
weight: 1
cascade:
  type: docs
---

## Affixe d’un point

> [!TIP] **Définitions**
>
> On munit le plan d’un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\) ; on l’appelle alors **plan complexe**.
> - À tout nombre complexe \(z = x + iy\) (\(x\), \(y\) réels), on associe le point \(M(x\,;\,y)\), appelé **image** de \(z\).
> - Réciproquement, à tout point \(M(x\,;\,y)\), on associe le nombre complexe \(z = x + iy\), appelé **affixe** de \(M\). On note \(M(z)\).

> [!IMPORTANT] **Remarques**
>
> - L’axe des abscisses contient les images des réels : c’est l’**axe des réels**. L’axe des ordonnées contient les images des imaginaires purs : c’est l’**axe des imaginaires purs**.
> - Chaque point du plan est l’image d’un unique nombre complexe et chaque nombre complexe a une unique image : on peut identifier le plan et \(\mathbb{C}\).

![](/images/image325.png)

> [!TIP] **Propriétés**
>
> Soient \(A\) et \(B\) deux points d’affixes \(z_A\) et \(z_B\).
> - \(A\) et \(B\) sont confondus si et seulement si \(z_A = z_B\).
> - Le milieu du segment \([AB]\) a pour affixe \(\dfrac{z_A + z_B}{2}\).

## Affixe d’un vecteur

> [!TIP] **Définitions**
>
> À tout nombre complexe \(z = x + iy\), on associe le vecteur \(\vec{w}\begin{pmatrix} x \\ y \end{pmatrix}\), appelé **vecteur image** de \(z\). On dit aussi que \(z\) est l’**affixe** de \(\vec{w}\), et on note \(\vec{w}(z)\).

> [!TIP] **Propriétés**
>
> Soient \(\vec{w}\) et \(\vec{w'}\) deux vecteurs d’affixes \(z\) et \(z'\), et \(k\) un réel.
> - \(\vec{w} = \vec{w'}\) si et seulement si \(z = z'\).
> - Le vecteur \(\vec{w} + \vec{w'}\) a pour affixe \(z + z'\).
> - Le vecteur \(k\vec{w}\) a pour affixe \(kz\).

## Lien entre affixe d’un point et affixe d’un vecteur

> [!TIP] **Propriétés**
>
> - Un point \(M\) a pour affixe \(z\) si et seulement si le vecteur \(\overrightarrow{OM}\) a pour affixe \(z\).
> - Si \(A\) et \(B\) ont pour affixes \(z_A\) et \(z_B\), le vecteur \(\overrightarrow{AB}\) a pour affixe \(z_B - z_A\).

{{% details title="Exemple" closed="true" %}}
Sur la figure ci-dessus, \(A(-2 + i)\) et \(B(3 + 3i)\) : le vecteur \(\overrightarrow{AB}\) a pour affixe \(z_B - z_A = 3 + 3i - (-2 + i) = 5 + 2i\), et le milieu de \([AB]\) a pour affixe \(\dfrac{1 + 4i}{2} = \dfrac{1}{2} + 2i\).
{{% /details %}}

## Utiliser les affixes

> [!NOTE] **Exercice résolu 1 — Reconnaître un parallélogramme**
>
> Dans le plan complexe, on considère les points \(A(1 - 2i)\), \(B(4 - i)\), \(C(3 + 2i)\) et \(D(i)\).
> 1. Montrer que \(ABCD\) est un parallélogramme.
> 2. Montrer que ses diagonales ont la même longueur. Que peut-on en conclure ?

{{% details title="Solution commentée" closed="true" %}}
1. \(ABCD\) est un parallélogramme si et seulement si \(\overrightarrow{AB} = \overrightarrow{DC}\), c’est-à-dire si ces deux vecteurs ont la même affixe.
   - \(\overrightarrow{AB}\) a pour affixe \(z_B - z_A = (4 - i) - (1 - 2i) = 3 + i\) ;
   - \(\overrightarrow{DC}\) a pour affixe \(z_C - z_D = (3 + 2i) - i = 3 + i\).

   Les affixes sont égales, donc \(\overrightarrow{AB} = \overrightarrow{DC}\) : \(ABCD\) est un parallélogramme.
2. \(\overrightarrow{AC}\) a pour affixe \(z_C - z_A = 2 + 4i\), donc \(AC = \sqrt{2^2 + 4^2} = \sqrt{20}\) ; \(\overrightarrow{BD}\) a pour affixe \(z_D - z_B = -4 + 2i\), donc \(BD = \sqrt{16 + 4} = \sqrt{20}\). Un parallélogramme dont les diagonales ont la même longueur est un **rectangle**.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Démontrer un alignement**
>
> On considère les points \(A(-1 + 2i)\), \(B(1 + i)\) et \(C(5 - i)\). Montrer que \(A\), \(B\) et \(C\) sont alignés.

{{% details title="Solution commentée" closed="true" %}}
Les points sont alignés si et seulement si les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont colinéaires, c’est-à-dire s’il existe un réel \(k\) tel que \(z_C - z_A = k(z_B - z_A)\).
- \(z_B - z_A = 2 - i\) ;
- \(z_C - z_A = 6 - 3i = 3(2 - i)\).

Donc \(\overrightarrow{AC} = 3\overrightarrow{AB}\) : les points \(A\), \(B\) et \(C\) sont alignés.
{{% /details %}}

> [!NOTE] **Exercice résolu 3 — Déterminer un ensemble de points**
>
> Déterminer l’ensemble \(E\) des points \(M\) d’affixe \(z\) tels que \(Z = z^2 - 4z\) soit un réel.

{{% details title="Solution commentée" closed="true" %}}
On pose \(z = x + iy\) (\(x\), \(y\) réels). Alors
\[
Z = x^2 - y^2 + 2ixy - 4x - 4iy = (x^2 - y^2 - 4x) + i(2xy - 4y).
\]
\(Z\) est réel si et seulement si \(\mathrm{Im}(Z) = 0\), soit \(2y(x - 2) = 0\), c’est-à-dire \(y = 0\) ou \(x = 2\).

L’ensemble \(E\) est la réunion de l’axe des réels (\(y = 0\)) et de la droite d’équation \(x = 2\).
{{% /details %}}
