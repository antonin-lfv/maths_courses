---
title: 'Projetés orthogonaux et intersections'
weight: 3
cascade:
  type: docs
---

Dans cette page, l’espace est muni d’un repère orthonormé \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\).

## Intersection d’une droite et d’un plan

> [!IMPORTANT] **Méthode**
>
> Pour étudier l’intersection d’une droite \((d)\) donnée par une représentation paramétrique et d’un plan \(\mathscr{P}\) donné par une équation cartésienne, on remplace \(x\), \(y\), \(z\) dans l’équation de \(\mathscr{P}\) par leurs expressions en fonction de \(t\). On obtient une équation d’inconnue \(t\) :
> - si elle a une unique solution \(t_0\), la droite et le plan sont **sécants** au point de paramètre \(t_0\) ;
> - si elle n’a aucune solution, la droite est **strictement parallèle** au plan ;
> - si tout réel \(t\) est solution, la droite est **contenue** dans le plan.

{{% details title="Exemple" closed="true" %}}
On considère \({(d) : \begin{cases} x = 1 + 2t \\ y = -t \\ z = 3 + t \end{cases}}\) et \({\mathscr{P} : x + y + z - 2 = 0}\).  
En remplaçant : \({(1 + 2t) + (-t) + (3 + t) - 2 = 0}\), soit \({2t + 2 = 0}\), \({t = -1}\). La droite et le plan sont sécants au point \({(-1\,;\,1\,;\,2)}\) (vérification : \({-1 + 1 + 2 - 2 = 0}\)).
{{% /details %}}

## Projeté orthogonal d’un point sur un plan

> [!TIP] **Propriété**
>
> Soit \(\mathscr{P}\) le plan d’équation cartésienne \({ax + by + cz + k = 0}\) et \(A(x_A\,;\,y_A\,;\,z_A)\) un point. Si \(H\) est le projeté orthogonal de \(A\) sur \(\mathscr{P}\), alors :
> - la droite \((AH)\), orthogonale à \(\mathscr{P}\), admet pour représentation paramétrique \({\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases}}\), \({t \in \mathbb{R}}\) ;
> - les coordonnées de \(H\) sont l’unique triplet \((x\,;\,y\,;\,z)\) qui vérifie à la fois l’équation de \(\mathscr{P}\) et cette représentation paramétrique.

{{% details title="Exemple" closed="true" %}}
On cherche le projeté orthogonal \(H\) de \({A(3\,;\,-1\,;\,2)}\) sur \({\mathscr{P} : x - y + 2z - 2 = 0}\).  
La droite passant par \(A\) et dirigée par \({\vec{n}\begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}}\) a pour représentation \({\begin{cases} x = 3 + t \\ y = -1 - t \\ z = 2 + 2t \end{cases}}\). En remplaçant dans l’équation de \(\mathscr{P}\) :
\[
(3 + t) - (-1 - t) + 2(2 + 2t) - 2 = 6t + 6 = 0 \iff t = -1.
\]
D’où \(H(2\,;\,0\,;\,0)\), et la distance de \(A\) à \(\mathscr{P}\) vaut \({AH = \sqrt{1 + 1 + 4} = \sqrt{6}}\).
{{% /details %}}

## Projeté orthogonal d’un point sur une droite

> [!TIP] **Propriété**
>
> Soit \((d)\) la droite de représentation paramétrique \({\begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases}}\), \({t \in \mathbb{R}}\), et \(A(x_A\,;\,y_A\,;\,z_A)\) un point. Si \(H\) est le projeté orthogonal de \(A\) sur \((d)\), alors :
> - le plan \(\mathscr{P}\) passant par \(A\) et orthogonal à \((d)\) admet une équation de la forme \({ax + by + cz + k = 0}\), où \(k\) est un réel (que l’on détermine avec \(A\)) ;
> - les coordonnées de \(H\) sont l’unique triplet \((x\,;\,y\,;\,z)\) vérifiant à la fois la représentation paramétrique de \((d)\) et l’équation de \(\mathscr{P}\).

{{% details title="Exemple" closed="true" %}}
On cherche le projeté orthogonal \(H\) de \(A(4\,;\,1\,;\,1)\) sur \({(d) : \begin{cases} x = 1 + t \\ y = 2 - t \\ z = 2t \end{cases}}\).  
Le plan passant par \(A\) et orthogonal à \((d)\) a une équation \({x - y + 2z + k = 0}\) ; avec \(A\) : \({4 - 1 + 2 + k = 0}\), donc \({k = -5}\).  
En remplaçant : \({(1 + t) - (2 - t) + 4t - 5 = 6t - 6 = 0}\), soit \({t = 1}\) : \(H(2\,;\,1\,;\,2)\).  
Vérification : \({\overrightarrow{AH}\begin{pmatrix} -2 \\ 0 \\ 1 \end{pmatrix}}\) et \({\overrightarrow{AH} \cdot \vec{u} = -2 + 0 + 2 = 0}\). La distance de \(A\) à \((d)\) vaut \({AH = \sqrt{5}}\).
{{% /details %}}

## Intersection de deux plans sécants

> [!NOTE] **Méthode 5 - Déterminer l’intersection de deux plans**
>
> On considère les plans \({\mathscr{P}_1 : x + y - z - 1 = 0}\) et \({\mathscr{P}_2 : x - y + z - 3 = 0}\).
> 1. Justifier que ces plans sont sécants.
> 2. Déterminer une représentation paramétrique de leur droite d’intersection.

{{% details title="Solution commentée" closed="true" %}}
**1.** \({\vec{n_1}\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}}\) et \({\vec{n_2}\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}}\) ne sont pas colinéaires : les plans ne sont pas parallèles, donc ils sont sécants selon une droite.

**2.** Un point \(M(x\,;\,y\,;\,z)\) est dans les deux plans si et seulement si \({\begin{cases} x + y - z = 1 \\ x - y + z = 3 \end{cases}}\). En additionnant : \({2x = 4}\), soit \({x = 2}\) ; puis \({y - z = -1}\). On prend \(z\) comme paramètre : \({z = t}\), \({y = -1 + t}\).
\[
\begin{cases} x = 2 \\ y = -1 + t \\ z = t \end{cases}, \quad t \in \mathbb{R}.
\]
C’est la droite passant par \({(2\,;\,-1\,;\,0)}\) et de vecteur directeur \(\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}\), qui est bien orthogonal à \(\vec{n_1}\) et à \(\vec{n_2}\).
{{% /details %}}
