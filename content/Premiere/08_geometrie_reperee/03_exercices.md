---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

Dans tous les exercices, le plan est muni d’un repère orthonormé.

### Exercice 1

On considère la droite \(d\) d’équation \({3x - 2y + 5 = 0}\).
1. Donner un vecteur normal et un vecteur directeur de \(d\).
2. Le point \(A(1\,;\,4)\) appartient-il à \(d\) ?

{{% details title="Solution" closed="true" %}}
1. Une droite d’équation \({ax + by + c = 0}\) admet \(\vec{n}\begin{pmatrix} a \\ b \end{pmatrix}\) comme vecteur normal et \({\vec{u}\begin{pmatrix} -b \\ a \end{pmatrix}}\) comme vecteur directeur. Ici \({\vec{n}\begin{pmatrix} 3 \\ -2 \end{pmatrix}}\) et \(\vec{u}\begin{pmatrix} 2 \\ 3 \end{pmatrix}\) ; on vérifie que \({\vec{n} \cdot \vec{u} = 6 - 6 = 0}\).
2. \({3 \times 1 - 2 \times 4 + 5 = 0}\) : les coordonnées de \(A\) vérifient l’équation, donc \({A \in d}\).
{{% /details %}}

### Exercice 2

Déterminer une équation cartésienne de la droite passant par \({A(2\,;\,-1)}\) et de vecteur normal \(\vec{n}\begin{pmatrix} 4 \\ 3 \end{pmatrix}\).

{{% details title="Solution" closed="true" %}}
La droite a une équation de la forme \({4x + 3y + c = 0}\). Comme \(A\) lui appartient : \({4 \times 2 + 3 \times (-1) + c = 0}\), soit \({c = -5}\).

Une équation est \({4x + 3y - 5 = 0}\).
{{% /details %}}

### Exercice 3

On considère les points \({A(-1\,;\,3)}\) et \(B(5\,;\,1)\). Déterminer une équation cartésienne de la médiatrice du segment \([AB]\).

{{% details title="Solution" closed="true" %}}
La médiatrice de \([AB]\) est la droite qui passe par le milieu \(K\) de \([AB]\) et qui est perpendiculaire à \((AB)\) : elle admet \({\overrightarrow{AB}\begin{pmatrix} 6 \\ -2 \end{pmatrix}}\) comme vecteur normal.

\({K\left(\dfrac{-1 + 5}{2}\,;\,\dfrac{3 + 1}{2}\right) = (2\,;\,2)}\). Une équation est de la forme \({6x - 2y + c = 0}\), avec \({12 - 4 + c = 0}\), soit \({c = -8}\).

Une équation est \({6x - 2y - 8 = 0}\), ou encore \({3x - y - 4 = 0}\).
{{% /details %}}

### Exercice 4

On considère la droite \(d\) d’équation \({x + 2y - 4 = 0}\) et le point \(A(4\,;\,5)\).
1. Déterminer une équation de la droite \(\Delta\) passant par \(A\) et perpendiculaire à \(d\).
2. En déduire les coordonnées du projeté orthogonal \(H\) de \(A\) sur \(d\), puis la distance \(AH\).

{{% details title="Solution" closed="true" %}}
1. Le vecteur \({\vec{u}\begin{pmatrix} -2 \\ 1 \end{pmatrix}}\) dirige \(d\) ; il est donc normal à \(\Delta\). Une équation de \(\Delta\) est \({-2x + y + c = 0}\) avec \({-8 + 5 + c = 0}\), soit \({c = 3}\) : \({\Delta : -2x + y + 3 = 0}\), ou \({2x - y - 3 = 0}\).
2. \(H\) est le point d’intersection de \(d\) et \(\Delta\) :
\[
\begin{cases} x + 2y = 4 \\ 2x - y = 3 \end{cases} \iff \begin{cases} y = 2x - 3 \\ x + 4x - 6 = 4 \end{cases} \iff \begin{cases} x = 2 \\ y = 1 \end{cases}
\]
Donc \(H(2\,;\,1)\) et \(AH = \sqrt{(2 - 4)^2 + (1 - 5)^2} = \sqrt{20} = 2\sqrt{5}\).
{{% /details %}}

### Exercice 5

1. Déterminer une équation du cercle \(\mathcal{C}\) de centre \({\Omega(1\,;\,-2)}\) passant par \(A(4\,;\,2)\).
2. Montrer que l’équation \({x^2 + y^2 - 4x + 6y - 12 = 0}\) est celle d’un cercle dont on donnera le centre et le rayon.
3. L’équation \({x^2 + y^2 + 2x + 5 = 0}\) est-elle celle d’un cercle ?

{{% details title="Solution" closed="true" %}}
1. Le rayon vaut \({\Omega A = \sqrt{3^2 + 4^2} = 5}\). Une équation de \(\mathcal{C}\) est \({(x - 1)^2 + (y + 2)^2 = 25}\).
2. On fait apparaître des carrés : \({x^2 - 4x = (x - 2)^2 - 4}\) et \({y^2 + 6y = (y + 3)^2 - 9}\). L’équation équivaut à
\[
(x - 2)^2 + (y + 3)^2 - 4 - 9 - 12 = 0 \iff (x - 2)^2 + (y + 3)^2 = 25.
\]
C’est le cercle de centre \({(2\,;\,-3)}\) et de rayon 5.
3. \({x^2 + 2x = (x + 1)^2 - 1}\), donc l’équation équivaut à \({(x + 1)^2 + y^2 = -4}\). Un carré étant positif, le membre de gauche est positif : aucun point ne vérifie l’équation. Ce n’est pas un cercle (l’ensemble est vide).
{{% /details %}}

### Exercice 6

On considère la parabole \(\mathcal{P}\) d’équation \({y = 2x^2 - 8x + 5}\).
1. Déterminer les coordonnées de son sommet et son axe de symétrie.
2. Déterminer les points d’intersection de \(\mathcal{P}\) avec la droite \(D\) d’équation \({y = 2x - 3}\).

{{% details title="Solution" closed="true" %}}
1. Le sommet a pour abscisse \({-\dfrac{b}{2a} = \dfrac{8}{4} = 2}\) et pour ordonnée \({2 \times 4 - 16 + 5 = -3}\) : \({S(2\,;\,-3)}\). L’axe de symétrie est la droite d’équation \({x = 2}\).
2. On résout \(2x^2 - 8x + 5 = 2x - 3 \iff 2x^2 - 10x + 8 = 0 \iff x^2 - 5x + 4 = 0\), dont les racines sont 1 et 4 (\({\Delta = 25 - 16 = 9}\)).
   - Pour \({x = 1}\) : \({y = 2 - 3 = -1}\).
   - Pour \({x = 4}\) : \({y = 8 - 3 = 5}\).

Les points d’intersection sont \({(1\,;\,-1)}\) et \((4\,;\,5)\) (on vérifie qu’ils sont aussi sur \(\mathcal{P}\) : \({2 - 8 + 5 = -1}\) et \({32 - 32 + 5 = 5}\)).
{{% /details %}}
