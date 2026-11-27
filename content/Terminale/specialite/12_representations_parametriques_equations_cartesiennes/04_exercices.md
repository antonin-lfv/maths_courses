---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

L’espace est muni d’un repère orthonormé.

### Exercice 1

Déterminer une représentation paramétrique de la droite passant par \({A(0\,;\,2\,;\,-1)}\) et parallèle à la droite \((BC)\), où \(B(1\,;\,1\,;\,1)\) et \(C(3\,;\,0\,;\,4)\).

{{% details title="Solution" closed="true" %}}
\({\overrightarrow{BC}\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}}\) est un vecteur directeur de la droite cherchée :
\[
\begin{cases} x = 2t \\ y = 2 - t \\ z = -1 + 3t \end{cases}, \quad t \in \mathbb{R}.
\]
{{% /details %}}

### Exercice 2

Déterminer une équation cartésienne du plan passant par \(A(1\,;\,1\,;\,1)\) et orthogonal à la droite \({(d) : \begin{cases} x = t \\ y = 1 + 2t \\ z = -t \end{cases}}\), \({t \in \mathbb{R}}\).

{{% details title="Solution" closed="true" %}}
Un vecteur directeur de \((d)\), \({\vec{u}\begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}}\), est normal au plan : \({x + 2y - z + k = 0}\). Avec \(A\) : \({1 + 2 - 1 + k = 0}\), donc \({k = -2}\). Équation : \({x + 2y - z - 2 = 0}\).
{{% /details %}}

### Exercice 3

Étudier la position relative de la droite \({(d) : \begin{cases} x = 2 + t \\ y = 1 - t \\ z = 3t \end{cases}}\), \({t \in \mathbb{R}}\), et du plan \({\mathscr{P} : x + y - 4 = 0}\).

{{% details title="Solution" closed="true" %}}
En remplaçant : \({(2 + t) + (1 - t) - 4 = -1}\), et \({-1 \neq 0}\) quel que soit \(t\). L’équation n’a pas de solution : \((d)\) est **strictement parallèle** à \(\mathscr{P}\).  
(Cohérence : \({\vec{u}\begin{pmatrix} 1 \\ -1 \\ 3 \end{pmatrix}}\) et \(\vec{n}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}\) vérifient \({\vec{u} \cdot \vec{n} = 0}\).)
{{% /details %}}

### Exercice 4

Déterminer les coordonnées du projeté orthogonal \(H\) de l’origine \(O\) sur le plan \({\mathscr{P} : 2x - y + 2z - 9 = 0}\), puis la distance de \(O\) à \(\mathscr{P}\).

{{% details title="Solution" closed="true" %}}
La droite passant par \(O\) et orthogonale à \(\mathscr{P}\) a pour représentation \({\begin{cases} x = 2t \\ y = -t \\ z = 2t \end{cases}}\). En remplaçant : \({4t + t + 4t - 9 = 0}\), soit \({t = 1}\).  
\({H(2\,;\,-1\,;\,2)}\) et \({OH = \sqrt{4 + 1 + 4} = 3}\).
{{% /details %}}

### Exercice 5

Démontrer que les droites \({d_1 : \begin{cases} x = 1 + t \\ y = 1 - t \\ z = 2t \end{cases}, t \in \mathbb{R}}\) et \({d_2 : \begin{cases} x = 3 + s \\ y = 1 + s \\ z = 1 - s \end{cases}, s \in \mathbb{R}}\) sont sécantes, et déterminer leur point d’intersection.

{{% details title="Solution" closed="true" %}}
On résout \({\begin{cases} 1 + t = 3 + s \\ 1 - t = 1 + s \\ 2t = 1 - s \end{cases}}\). La deuxième équation donne \({s = -t}\) ; la première devient \({1 + t = 3 - t}\), soit \({t = 1}\) et \({s = -1}\). La troisième est vérifiée : \({2 = 1 + 1}\).  
Les droites sont sécantes, au point de paramètre \({t = 1}\) : \((2\,;\,0\,;\,2)\).
{{% /details %}}
