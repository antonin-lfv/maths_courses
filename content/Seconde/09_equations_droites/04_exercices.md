---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

1. Déterminer une équation cartésienne de la droite \(d\) passant par \({A(2\,;\,-3)}\) et de vecteur directeur \({\vec{u}\begin{pmatrix} -1 \\ 4 \end{pmatrix}}\).
2. Le point \(B(0\,;\,5)\) appartient-il à \(d\) ?

{{% details title="Solution" closed="true" %}}
1. \(M(x\,;\,y) \in d \iff \det\left(\overrightarrow{AM}, \vec{u}\right) = 0 \iff (x - 2) \times 4 - (-1)(y + 3) = 0 \iff 4x + y - 5 = 0\).
2. \({4 \times 0 + 5 - 5 = 0}\) : oui, \({B \in d}\).
{{% /details %}}

### Exercice 2

On donne \({A(-2\,;\,1)}\) et \(B(4\,;\,4)\).
1. Déterminer l’équation réduite de \((AB)\).
2. En déduire un vecteur directeur de \((AB)\) à coordonnées entières, puis une équation cartésienne.

{{% details title="Solution" closed="true" %}}
1. \({m = \dfrac{4 - 1}{4 - (-2)} = \dfrac{3}{6} = 0{,}5}\) ; \({1 = 0{,}5 \times (-2) + p}\), donc \({p = 2}\) : \({y = 0{,}5x + 2}\).
2. \(\begin{pmatrix} 1 \\ 0{,}5 \end{pmatrix}\) est un vecteur directeur, donc aussi \(\begin{pmatrix} 2 \\ 1 \end{pmatrix}\). Équation cartésienne : \(y = 0{,}5x + 2 \iff 0{,}5x - y + 2 = 0 \iff x - 2y + 4 = 0\).
{{% /details %}}

### Exercice 3

On considère les droites \({d_1 : 2x + y - 3 = 0}\), \({d_2 : y = -2x + 5}\) et \({d_3 : x - y = 0}\).
1. Donner l’équation réduite de \(d_1\). Que peut-on dire de \(d_1\) et \(d_2\) ?
2. Déterminer les coordonnées du point d’intersection de \(d_1\) et \(d_3\).

{{% details title="Solution" closed="true" %}}
1. \({d_1 : y = -2x + 3}\). \(d_1\) et \(d_2\) ont le même coefficient directeur \({-2}\) et des ordonnées à l’origine différentes : elles sont parallèles et distinctes.
2. On résout \({\begin{cases} 2x + y = 3 \\ x - y = 0 \end{cases}}\). La seconde équation donne \({y = x}\), puis \({3x = 3}\) : \({x = 1}\), \({y = 1}\). Le point d’intersection est \((1\,;\,1)\).
{{% /details %}}

### Exercice 4

Résoudre le système \({\begin{cases} 4x - y = 9 \\ 3x + 2y = 4 \end{cases}}\).

{{% details title="Solution" closed="true" %}}
Par substitution : \({y = 4x - 9}\), puis \(3x + 2(4x - 9) = 4 \iff 11x = 22 \iff x = 2\), et \({y = 8 - 9 = -1}\). Vérification : \({6 - 2 = 4}\). \({\mathcal{S} = \{(2\,;\,-1)\}}\).
{{% /details %}}

### Exercice 5

Un rectangle a un périmètre de \(46\) cm, et sa longueur dépasse sa largeur de \(7\) cm. Déterminer ses dimensions.

{{% details title="Solution" closed="true" %}}
Avec \(L\) la longueur et \(\ell\) la largeur : \({\begin{cases} 2L + 2\ell = 46 \\ L - \ell = 7 \end{cases} \iff \begin{cases} L + \ell = 23 \\ L - \ell = 7 \end{cases}}\). En additionnant : \({2L = 30}\), \({L = 15}\), puis \({\ell = 8}\). Le rectangle mesure \(15\) cm sur \(8\) cm.
{{% /details %}}

### Exercice 6

Pour tout réel \(m\), on note \(d_m\) la droite d’équation \({(m - 1)x + 2y + 3 = 0}\). Déterminer \(m\) pour que \(d_m\) soit parallèle à la droite \({\Delta : y = 3x - 1}\).

{{% details title="Solution" closed="true" %}}
Une équation cartésienne de \(\Delta\) est \({3x - y - 1 = 0}\). Les droites sont parallèles si et seulement si \((m - 1)(-1) - 3 \times 2 = 0 \iff -m + 1 - 6 = 0 \iff m = -5\). Contrôle : \({d_{-5} : -6x + 2y + 3 = 0}\), soit \({y = 3x - 1{,}5}\), de coefficient directeur \(3\).
{{% /details %}}
