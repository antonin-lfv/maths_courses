---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

\(ABCD\) est un tétraèdre et \(G\) le point tel que \({\overrightarrow{GB} + \overrightarrow{GC} + \overrightarrow{GD} = \vec{0}}\) (centre de gravité du triangle \(BCD\)).  
Démontrer que \({\overrightarrow{AG} = \dfrac{1}{3}\big(\overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD}\big)}\).

{{% details title="Solution" closed="true" %}}
Par Chasles, \({\overrightarrow{GB} = \overrightarrow{GA} + \overrightarrow{AB}}\), et de même pour \(C\) et \(D\). En remplaçant :
\[
3\overrightarrow{GA} + \overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD} = \vec{0}, \quad \text{donc} \quad 3\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD},
\]
d’où le résultat.
{{% /details %}}

### Exercice 2

Dans le cube \(ABCDEFGH\), préciser la position relative des droites suivantes.
1. \((EB)\) et \((HC)\)
2. \((AG)\) et \((BH)\)
3. \((AF)\) et \((CH)\)

{{% details title="Solution" closed="true" %}}
1. \(EBCH\) est un parallélogramme (\({\overrightarrow{EH} = \overrightarrow{BC}}\)), donc \({\overrightarrow{EB} = \overrightarrow{HC}}\) : les droites sont **parallèles** (strictement).
2. \((AG)\) et \((BH)\) sont les diagonales du rectangle \(ABGH\) : elles sont **sécantes**, au centre du cube.
3. \((AF)\) est contenue dans le plan \((ABF)\) et \((CH)\) dans le plan \((DCG)\), qui sont strictement parallèles : les droites n’ont aucun point commun. Leurs vecteurs directeurs \({\overrightarrow{AF} = \overrightarrow{AB} + \overrightarrow{AE}}\) et \({\overrightarrow{CH} = -\overrightarrow{AB} + \overrightarrow{AE}}\) ne sont pas colinéaires : les droites ne sont pas parallèles. Elles sont donc **non coplanaires**.
{{% /details %}}

### Exercice 3

Dans un repère de l’espace, on donne \({A(2\,;\,-1\,;\,0)}\), \({B(4\,;\,1\,;\,-2)}\) et \(C(1\,;\,3\,;\,5)\). Déterminer les coordonnées du point \(D\) tel que \(ABCD\) soit un parallélogramme.

{{% details title="Solution" closed="true" %}}
\(ABCD\) est un parallélogramme si et seulement si \({\overrightarrow{AB} = \overrightarrow{DC}}\). Or \({\overrightarrow{AB}\begin{pmatrix} 2 \\ 2 \\ -2 \end{pmatrix}}\) et \({\overrightarrow{DC}\begin{pmatrix} 1 - x_D \\ 3 - y_D \\ 5 - z_D \end{pmatrix}}\), d’où \({x_D = -1}\), \({y_D = 1}\), \({z_D = 7}\) : \({D(-1\,;\,1\,;\,7)}\).
{{% /details %}}

### Exercice 4

Les vecteurs \({\vec{u}\begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}}\), \({\vec{v}\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}}\) et \(\vec{w}\begin{pmatrix} 4 \\ 3 \\ 1 \end{pmatrix}\) sont-ils coplanaires ?

{{% details title="Solution" closed="true" %}}
\(\vec{u}\) et \(\vec{v}\) ne sont pas colinéaires (coordonnées non proportionnelles). On cherche \(a\), \(b\) tels que \({\vec{w} = a\vec{u} + b\vec{v}}\) :
\[
\begin{cases} a + 2b = 4 \\ 2a - b = 3 \\ -a + 3b = 1 \end{cases}
\]
Les deux premières donnent \({a = 4 - 2b}\), puis \({8 - 5b = 3}\), soit \({b = 1}\) et \({a = 2}\). La troisième est vérifiée : \({-2 + 3 = 1}\). Donc \({\vec{w} = 2\vec{u} + \vec{v}}\) : les trois vecteurs sont **coplanaires**.
{{% /details %}}
