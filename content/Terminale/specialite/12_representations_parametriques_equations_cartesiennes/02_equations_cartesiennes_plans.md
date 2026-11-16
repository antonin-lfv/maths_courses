---
title: 'Équations cartésiennes de plans'
weight: 2
cascade:
  type: docs
---

Dans cette page, l’espace est muni d’un repère orthonormé \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\).

## Équation cartésienne d’un plan

> [!TIP] **Propriétés**
>
> - Si \(\mathscr{P}\) est un plan et \(\vec{n}\begin{pmatrix} a \\ b \\ c \end{pmatrix}\) un vecteur normal à \(\mathscr{P}\), alors \(\mathscr{P}\) admet une équation de la forme
> \[
ax + by + cz + k = 0,
\]
>   où \(k\) est un nombre réel. Cette équation est appelée **équation cartésienne** du plan \(\mathscr{P}\).
> - Un point \(M(x_M\,;\,y_M\,;\,z_M)\) appartient à \(\mathscr{P}\) si et seulement si \(ax_M + by_M + cz_M + k = 0\).

> [!IMPORTANT] **Remarque**
>
> Justification : si \(A(x_A\,;\,y_A\,;\,z_A) \in \mathscr{P}\), alors \(M \in \mathscr{P} \iff \overrightarrow{AM} \cdot \vec{n} = 0 \iff a(x - x_A) + b(y - y_A) + c(z - z_A) = 0\), qui est de la forme annoncée avec \(k = -(ax_A + by_A + cz_A)\).
> Un plan admet une infinité d’équations cartésiennes, toutes proportionnelles (on peut multiplier une équation par un réel non nul).

{{% details title="Exemple" closed="true" %}}
Le plan passant par \(A(2\,;\,1\,;\,-3)\) et de vecteur normal \(\vec{n}\begin{pmatrix} 1 \\ -4 \\ 2 \end{pmatrix}\) a une équation de la forme \(x - 4y + 2z + k = 0\). Comme \(A\) lui appartient : \(2 - 4 - 6 + k = 0\), d’où \(k = 8\).  
Une équation cartésienne du plan est \(x - 4y + 2z + 8 = 0\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soient \(a\), \(b\), \(c\) trois réels non tous nuls et \(k\) un réel. L’ensemble des points \(M(x\,;\,y\,;\,z)\) vérifiant \(ax + by + cz + k = 0\) est un plan, de vecteur normal \(\vec{n}\begin{pmatrix} a \\ b \\ c \end{pmatrix}\).

{{% details title="Exemples" closed="true" %}}
- L’équation \(2x + y - z + 5 = 0\) définit un plan de vecteur normal \(\vec{n}\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}\). Il passe par le point \((0\,;\,-5\,;\,0)\), car \(0 - 5 - 0 + 5 = 0\).
- L’équation \(z = 0\) est celle du plan \((O\,;\,\vec{\imath}, \vec{\jmath})\) ; l’équation \(x = 3\) est celle du plan passant par \((3\,;\,0\,;\,0)\) et parallèle au plan \((O\,;\,\vec{\jmath}, \vec{k})\).
{{% /details %}}

## Position relative de deux plans

> [!TIP] **Propriété**
>
> Deux plans \(\mathscr{P}_1\) et \(\mathscr{P}_2\), de vecteurs normaux respectifs \(\vec{n_1}\) et \(\vec{n_2}\), sont **parallèles** si et seulement si \(\vec{n_1}\) et \(\vec{n_2}\) sont colinéaires.

> [!TIP] **Définition**
>
> Deux plans \(\mathscr{P}_1\) et \(\mathscr{P}_2\), de vecteurs normaux respectifs \(\vec{n_1}\) et \(\vec{n_2}\), sont **perpendiculaires** si \(\vec{n_1} \cdot \vec{n_2} = 0\).

{{% details title="Exemples" closed="true" %}}
On considère les plans \(\mathscr{P}_1 : x - 2y + 3z - 1 = 0\), \(\mathscr{P}_2 : -2x + 4y - 6z + 5 = 0\) et \(\mathscr{P}_3 : 3x + 3y + z = 0\).
- \(\vec{n_2}\begin{pmatrix} -2 \\ 4 \\ -6 \end{pmatrix} = -2\vec{n_1}\) : \(\mathscr{P}_1\) et \(\mathscr{P}_2\) sont parallèles. En multipliant l’équation de \(\mathscr{P}_1\) par \(-2\), on obtient \(-2x + 4y - 6z + 2 = 0\), différente de celle de \(\mathscr{P}_2\) : ils sont strictement parallèles.
- \(\vec{n_1} \cdot \vec{n_3} = 3 - 6 + 3 = 0\) : \(\mathscr{P}_1\) et \(\mathscr{P}_3\) sont perpendiculaires.
{{% /details %}}

## Déterminer une équation cartésienne d’un plan

> [!NOTE] **Méthode 3 — Déterminer une équation cartésienne**
>
> 1. Déterminer une équation cartésienne du plan \(\mathscr{P}\) passant par \(A(1\,;\,3\,;\,-2)\) et de vecteur normal \(\vec{n}\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}\).
> 2. Déterminer une équation cartésienne du plan \(\mathscr{P}'\) parallèle à \(\mathscr{P}\) passant par \(B(0\,;\,1\,;\,1)\).
> 3. Déterminer une équation cartésienne du plan \((CDE)\), avec \(C(1\,;\,0\,;\,0)\), \(D(0\,;\,2\,;\,0)\) et \(E(0\,;\,0\,;\,2)\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\mathscr{P}\) a une équation de la forme \(2x - y + 4z + k = 0\). Avec \(A\) : \(2 - 3 - 8 + k = 0\), donc \(k = 9\) : \(\mathscr{P} : 2x - y + 4z + 9 = 0\).

**2.** \(\mathscr{P}'\) est parallèle à \(\mathscr{P}\), donc \(\vec{n}\) lui est aussi normal : \(2x - y + 4z + k' = 0\). Avec \(B\) : \(0 - 1 + 4 + k' = 0\), donc \(k' = -3\) : \(\mathscr{P}' : 2x - y + 4z - 3 = 0\).

**3.** On cherche un vecteur normal \(\vec{n}\begin{pmatrix} a \\ b \\ c \end{pmatrix}\) orthogonal à \(\overrightarrow{CD}\begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix}\) et à \(\overrightarrow{CE}\begin{pmatrix} -1 \\ 0 \\ 2 \end{pmatrix}\) (non colinéaires) : \(-a + 2b = 0\) et \(-a + 2c = 0\). En choisissant \(a = 2\), on obtient \(b = c = 1\) : \(\vec{n}\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}\).  
L’équation est de la forme \(2x + y + z + k = 0\) ; avec \(C\) : \(2 + k = 0\), donc \(k = -2\). Ainsi \((CDE) : 2x + y + z - 2 = 0\) (on vérifie avec \(D\) : \(2 - 2 = 0\), et avec \(E\) : \(2 - 2 = 0\)).
{{% /details %}}

## Reconnaître un plan défini par une équation cartésienne

> [!NOTE] **Méthode 4 — Exploiter une équation cartésienne**
>
> On considère le plan \(\mathscr{P} : x - 3y + 2z - 6 = 0\).
> 1. Donner un point de \(\mathscr{P}\) et un vecteur normal à \(\mathscr{P}\).
> 2. Étudier la position relative de \(\mathscr{P}\) et de chacun des plans \(\mathscr{P}_1 : 2x - 6y + 4z + 1 = 0\) et \(\mathscr{P}_2 : 3x + y - 7 = 0\).

{{% details title="Solution commentée" closed="true" %}}
**1.** En prenant \(x = y = 0\), on obtient \(2z - 6 = 0\), soit \(z = 3\) : le point \((0\,;\,0\,;\,3)\) appartient à \(\mathscr{P}\). Un vecteur normal est \(\vec{n}\begin{pmatrix} 1 \\ -3 \\ 2 \end{pmatrix}\).

**2.** \(\vec{n_1}\begin{pmatrix} 2 \\ -6 \\ 4 \end{pmatrix} = 2\vec{n}\) : \(\mathscr{P}\) et \(\mathscr{P}_1\) sont parallèles ; le point \((0\,;\,0\,;\,3)\) n’appartient pas à \(\mathscr{P}_1\) (\(12 + 1 \neq 0\)), donc ils sont strictement parallèles.  
\(\vec{n_2}\begin{pmatrix} 3 \\ 1 \\ 0 \end{pmatrix}\) : \(\vec{n} \cdot \vec{n_2} = 3 - 3 + 0 = 0\), donc \(\mathscr{P}\) et \(\mathscr{P}_2\) sont perpendiculaires.
{{% /details %}}
