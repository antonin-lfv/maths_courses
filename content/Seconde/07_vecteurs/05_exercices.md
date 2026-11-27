---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

\(ABCD\) est un parallélogramme de centre \(O\). Écrire plus simplement :
\[
\overrightarrow{OA} + \overrightarrow{OC}, \qquad \overrightarrow{AB} + \overrightarrow{AD}, \qquad \overrightarrow{AB} - \overrightarrow{AC}, \qquad \overrightarrow{DA} + \overrightarrow{DC}.
\]

{{% details title="Solution" closed="true" %}}
- \(O\) est le milieu de \([AC]\), donc \({\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}}\).
- Règle du parallélogramme : \({\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}}\).
- \(\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{CA} = \overrightarrow{CA} + \overrightarrow{AB} = \overrightarrow{CB}\).
- \(DCBA\) est le même parallélogramme, parcouru à partir de \(D\) : la règle du parallélogramme en \(D\) donne \({\overrightarrow{DA} + \overrightarrow{DC} = \overrightarrow{DB}}\).
{{% /details %}}

### Exercice 2

Soit \(A\), \(B\), \(C\), \(D\) quatre points quelconques. Démontrer que \({\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AD} + \overrightarrow{CB}}\).

{{% details title="Solution" closed="true" %}}
On introduit le point \(D\) dans \(\overrightarrow{AB}\) et le point \(B\) dans \(\overrightarrow{CD}\) :
\[
\begin{aligned}
\overrightarrow{AB} + \overrightarrow{CD} &= \left(\overrightarrow{AD} + \overrightarrow{DB}\right) + \left(\overrightarrow{CB} + \overrightarrow{BD}\right) = \overrightarrow{AD} + \overrightarrow{CB} + \left(\overrightarrow{DB} + \overrightarrow{BD}\right) \\[0.3em]
&= \overrightarrow{AD} + \overrightarrow{CB},
\end{aligned}
\]
car \({\overrightarrow{DB} + \overrightarrow{BD} = \overrightarrow{DD} = \vec{0}}\).
{{% /details %}}

### Exercice 3

Dans un repère orthonormé, on donne \(A(1\,;\,1)\), \(B(4\,;\,2)\), \(C(5\,;\,5)\) et \(D(2\,;\,4)\).
1. Montrer que \(ABCD\) est un parallélogramme.
2. Montrer que c’est un losange. Est-ce un carré ?

{{% details title="Solution" closed="true" %}}
1. \(\overrightarrow{AB}\begin{pmatrix} 3 \\ 1 \end{pmatrix}\) et \(\overrightarrow{DC}\begin{pmatrix} 3 \\ 1 \end{pmatrix}\) : \({\overrightarrow{AB} = \overrightarrow{DC}}\), donc \(ABCD\) est un parallélogramme.
2. \({AB = \sqrt{9 + 1} = \sqrt{10}}\) et \(\overrightarrow{AD}\begin{pmatrix} 1 \\ 3 \end{pmatrix}\), \({AD = \sqrt{10}}\). Un parallélogramme ayant deux côtés consécutifs de même longueur est un losange. Ses diagonales : \({AC = \sqrt{16 + 16} = \sqrt{32}}\) et \({BD = \sqrt{4 + 4} = \sqrt{8}}\). Elles n’ont pas la même longueur : ce n’est pas un rectangle, donc pas un carré.
{{% /details %}}

### Exercice 4

On donne \({\vec{u}\begin{pmatrix} 2 \\ -3 \end{pmatrix}}\) et \({\vec{v}\begin{pmatrix} -1 \\ 5 \end{pmatrix}}\).
1. Calculer les coordonnées de \({3\vec{u} + 2\vec{v}}\).
2. Déterminer les coordonnées du vecteur \(\vec{w}\) tel que \({\vec{u} + \vec{w} = 2\vec{v}}\).

{{% details title="Solution" closed="true" %}}
1. \({3\vec{u} + 2\vec{v}\begin{pmatrix} 6 - 2 \\ -9 + 10 \end{pmatrix} = \begin{pmatrix} 4 \\ 1 \end{pmatrix}}\).
2. \({\vec{w} = 2\vec{v} - \vec{u}\begin{pmatrix} -2 - 2 \\ 10 + 3 \end{pmatrix} = \begin{pmatrix} -4 \\ 13 \end{pmatrix}}\).
{{% /details %}}

### Exercice 5

On donne \(A(0\,;\,2)\) et \(B(4\,;\,0)\).
1. Déterminer les coordonnées du point \(M\) tel que \({\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}}\).
2. Déterminer les coordonnées du point \(N\) tel que \({\overrightarrow{AN} = 3\overrightarrow{AB}}\).
3. Déterminer l’image du point \({C(-1\,;\,4)}\) par la translation de vecteur \(\overrightarrow{AB}\).

{{% details title="Solution" closed="true" %}}
1. \(M\) est le milieu de \([AB]\) : \(M(2\,;\,1)\).
2. \({\overrightarrow{AB}\begin{pmatrix} 4 \\ -2 \end{pmatrix}}\), donc \({3\overrightarrow{AB}\begin{pmatrix} 12 \\ -6 \end{pmatrix}}\). Avec \(N(x\,;\,y)\) : \({x - 0 = 12}\) et \({y - 2 = -6}\), d’où \({N(12\,;\,-4)}\).
3. L’image \(C'\) vérifie \({\overrightarrow{CC'} = \overrightarrow{AB}}\) : \({x_{C'} = -1 + 4 = 3}\) et \({y_{C'} = 4 - 2 = 2}\). Donc \(C'(3\,;\,2)\).
{{% /details %}}
