---
title: 'Coordonnées d’un vecteur'
weight: 3
cascade:
  type: docs
---

## Repère et coordonnées d’un point

> [!TIP] **Définitions**
>
> Trois points non alignés \(O\), \(I\), \(J\) du plan forment un **repère**, noté \((O\,;\,I, J)\).
> - \(O\) est l’**origine** ; la droite \((OI)\), orientée de \(O\) vers \(I\), est l’**axe des abscisses** ; la droite \((OJ)\), orientée de \(O\) vers \(J\), est l’**axe des ordonnées**.
> - Le repère est **orthogonal** si \({(OI) \perp (OJ)}\) ; il est **orthonormé** si, de plus, \({OI = OJ = 1}\) (même unité sur les deux axes).
>
> Tout point \(M\) du plan est repéré par un unique couple de réels \((x_M\,;\,y_M)\), ses **coordonnées** : \(x_M\) est l’**abscisse** et \(y_M\) l’**ordonnée** de \(M\). On note \(M(x_M\,;\,y_M)\).

> [!TIP] **Propriété - Coordonnées du milieu**
>
> Dans un repère quelconque, le milieu \(K\) du segment \([AB]\) a pour coordonnées
> \[
x_K = \dfrac{x_A + x_B}{2} \qquad \text{et} \qquad y_K = \dfrac{y_A + y_B}{2}.
\]

> [!TIP] **Propriété - Distance entre deux points**
>
> Dans un repère **orthonormé**, la distance entre les points \(A(x_A\,;\,y_A)\) et \(B(x_B\,;\,y_B)\) est
> \[
AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}.
\]

{{% details title="Démonstration de la formule de la distance" closed="true" %}}
Si \(A\) et \(B\) ont la même abscisse ou la même ordonnée, la formule se vérifie directement (par exemple, si \({y_A = y_B}\), elle donne \({\sqrt{(x_B - x_A)^2} = |x_B - x_A|}\)).

Sinon, on considère le point \(H(x_B\,;\,y_A)\). Le repère étant orthonormé, le triangle \(AHB\) est rectangle en \(H\), avec \({AH = |x_B - x_A|}\) et \({HB = |y_B - y_A|}\) (voir la figure). D’après le théorème de Pythagore :
\[
AB^2 = AH^2 + HB^2 = (x_B - x_A)^2 + (y_B - y_A)^2,
\]
et comme \({AB \geq 0}\), on obtient la formule.

![](/images/image388.png)
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Dans un repère orthonormé, soit \({A(-1\,;\,2)}\) et \(B(3\,;\,5)\). Le milieu de \([AB]\) est \({K\left(\dfrac{-1 + 3}{2}\,;\,\dfrac{2 + 5}{2}\right) = K(1\,;\,3{,}5)}\), et
\[
AB = \sqrt{(3 - (-1))^2 + (5 - 2)^2} = \sqrt{16 + 9} = 5.
\]
{{% /details %}}

## Base et coordonnées d’un vecteur

On pose \({\vec{i} = \overrightarrow{OI}}\) et \({\vec{j} = \overrightarrow{OJ}}\). Le repère \((O\,;\,I, J)\) se note aussi \((O\,;\,\vec{i}, \vec{j})\), et le couple \((\vec{i}, \vec{j})\) est appelé une **base** des vecteurs du plan. La base est **orthonormée** si le repère l’est.

> [!TIP] **Définition et propriété**
>
> Pour tout vecteur \(\vec{u}\), il existe un unique point \(M\) tel que \({\overrightarrow{OM} = \vec{u}}\). Si \(M\) a pour coordonnées \((x\,;\,y)\), alors
> \[
\vec{u} = x\,\vec{i} + y\,\vec{j},
\]
> et ce couple \((x\,;\,y)\) est unique. On l’appelle les **coordonnées** du vecteur \(\vec{u}\) dans la base \((\vec{i}, \vec{j})\), et on note \(\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}\).

![](/images/image389.png)

> [!IMPORTANT] **Remarques**
>
> - Le vecteur nul a pour coordonnées \(\begin{pmatrix} 0 \\ 0 \end{pmatrix}\).
> - Les coordonnées du vecteur \(\overrightarrow{OM}\) sont celles du point \(M\).
> - Lire les coordonnées d’un vecteur sur un quadrillage, c’est compter le déplacement horizontal (\(x\)) puis vertical (\(y\)) pour aller de l’origine à l’extrémité d’un représentant.

> [!TIP] **Propriété**
>
> Soit \(A(x_A\,;\,y_A)\) et \(B(x_B\,;\,y_B)\). Le vecteur \(\overrightarrow{AB}\) a pour coordonnées
> \[
\overrightarrow{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}.
\]

{{% details title="Justification" closed="true" %}}
Par la relation de Chasles, \(\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB} = \overrightarrow{OB} - \overrightarrow{OA} = (x_B\vec{i} + y_B\vec{j}) - (x_A\vec{i} + y_A\vec{j}) = (x_B - x_A)\vec{i} + (y_B - y_A)\vec{j}\).
{{% /details %}}

> [!TIP] **Propriété - Norme d’un vecteur**
>
> Dans une base **orthonormée**, la norme du vecteur \(\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}\) est
> \[
\|\vec{u}\| = \sqrt{x^2 + y^2}.
\]

En effet, si \({\overrightarrow{OM} = \vec{u}}\), alors \({\|\vec{u}\| = OM = \sqrt{x^2 + y^2}}\) d’après la formule de la distance.

## Calculer des coordonnées

> [!NOTE] **Méthode - Calculer des coordonnées, une norme, une distance**
>
> Dans un repère orthonormé \((O\,;\,\vec{i}, \vec{j})\), on considère \({A(2\,;\,-1)}\), \({B(-2\,;\,1)}\) et \(C(4\,;\,3)\).
> 1. Calculer les coordonnées de \(\overrightarrow{AB}\), \(\overrightarrow{AC}\) et \(\overrightarrow{BC}\).
> 2. Calculer \(AB\), \(AC\) et \(BC\). Quelle est la nature du triangle \(ABC\) ?
> 3. Calculer les coordonnées du centre du cercle circonscrit à \(ABC\).

{{% details title="Solution commentée" closed="true" %}}
1. \({\overrightarrow{AB}\begin{pmatrix} -2 - 2 \\ 1 - (-1) \end{pmatrix} = \begin{pmatrix} -4 \\ 2 \end{pmatrix}}\), \(\overrightarrow{AC}\begin{pmatrix} 2 \\ 4 \end{pmatrix}\), \(\overrightarrow{BC}\begin{pmatrix} 6 \\ 2 \end{pmatrix}\).
2. \({AB = \sqrt{16 + 4} = \sqrt{20}}\), \({AC = \sqrt{4 + 16} = \sqrt{20}}\), \({BC = \sqrt{36 + 4} = \sqrt{40}}\). Donc \({AB = AC}\) : le triangle est isocèle en \(A\). De plus \({AB^2 + AC^2 = 20 + 20 = 40 = BC^2}\) : d’après la réciproque du théorème de Pythagore, il est rectangle en \(A\). \(ABC\) est rectangle isocèle en \(A\).
3. Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l’hypoténuse \([BC]\) : \({\left(\dfrac{-2 + 4}{2}\,;\,\dfrac{1 + 3}{2}\right) = (1\,;\,2)}\).
{{% /details %}}
