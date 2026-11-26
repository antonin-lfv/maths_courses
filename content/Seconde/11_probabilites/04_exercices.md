---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Une urne contient \(4\) boules rouges, \(6\) boules vertes et \(10\) boules blanches, indiscernables au toucher. On tire une boule au hasard.
1. Déterminer la loi de probabilité de la couleur obtenue.
2. Calculer la probabilité de ne pas tirer une boule blanche.

{{% details title="Solution" closed="true" %}}
1. \(20\) boules au total : \(P(R) = \frac{4}{20} = 0{,}2\), \(P(V) = \frac{6}{20} = 0{,}3\), \(P(B) = \frac{10}{20} = 0{,}5\).
2. \(P(\overline{B}) = 1 - 0{,}5 = 0{,}5\).
{{% /details %}}

### Exercice 2

Un dé à six faces est truqué : les faces \(1\) à \(5\) ont la même probabilité \(p\), et la face \(6\) a la probabilité \(0{,}25\).
1. Déterminer \(p\).
2. Calculer la probabilité d’obtenir un nombre pair.

{{% details title="Solution" closed="true" %}}
1. \(5p + 0{,}25 = 1\), donc \(p = 0{,}15\).
2. \(P(\{2\,;\,4\,;\,6\}) = 0{,}15 + 0{,}15 + 0{,}25 = 0{,}55\).
{{% /details %}}

### Exercice 3

\(A\) et \(B\) sont deux événements tels que \(P(A) = 0{,}5\), \(P(B) = 0{,}4\) et \(P(A \cap B) = 0{,}1\).
1. Calculer \(P(A \cup B)\) et \(P(\overline{A})\).
2. Les événements \(A\) et \(B\) sont-ils incompatibles ?

{{% details title="Solution" closed="true" %}}
1. \(P(A \cup B) = 0{,}5 + 0{,}4 - 0{,}1 = 0{,}8\) et \(P(\overline{A}) = 0{,}5\).
2. Non, car \(P(A \cap B) = 0{,}1 \neq 0\).
{{% /details %}}

### Exercice 4

On lance deux dés équilibrés à six faces et on note le **produit** des deux numéros.
1. Construire un tableau à double entrée des résultats.
2. Calculer la probabilité que le produit soit pair, puis qu’il soit supérieur ou égal à \(20\).

{{% details title="Solution" closed="true" %}}
1. Tableau des \(36\) produits équiprobables (ligne : premier dé, colonne : second dé) :

| × | \(1\) | \(2\) | \(3\) | \(4\) | \(5\) | \(6\) |
|---|---|---|---|---|---|---|
| \(1\) | \(1\) | \(2\) | \(3\) | \(4\) | \(5\) | \(6\) |
| \(2\) | \(2\) | \(4\) | \(6\) | \(8\) | \(10\) | \(12\) |
| \(3\) | \(3\) | \(6\) | \(9\) | \(12\) | \(15\) | \(18\) |
| \(4\) | \(4\) | \(8\) | \(12\) | \(16\) | \(20\) | \(24\) |
| \(5\) | \(5\) | \(10\) | \(15\) | \(20\) | \(25\) | \(30\) |
| \(6\) | \(6\) | \(12\) | \(18\) | \(24\) | \(30\) | \(36\) |

2. Le produit est impair seulement si les deux numéros sont impairs : \(3 \times 3 = 9\) cases. Donc \(P(\text{pair}) = 1 - \frac{9}{36} = \frac{27}{36} = \frac{3}{4}\).

   Produits \(\geq 20\) : \(20\), \(24\) (ligne 4), \(20\), \(25\), \(30\) (ligne 5), \(24\), \(30\), \(36\) (ligne 6), soit \(8\) cases : \(P = \frac{8}{36} = \frac{2}{9}\).
{{% /details %}}

### Exercice 5

Une famille a trois enfants. On admet que chaque naissance donne une fille ou un garçon avec la même probabilité, indépendamment des autres. À l’aide d’un arbre, calculer la probabilité que la famille ait :
1. trois enfants du même sexe ;
2. au moins une fille.

{{% details title="Solution" closed="true" %}}
L’arbre (comme celui des trois lancers de pièce) a \(8\) chemins équiprobables : FFF, FFG, FGF, FGG, GFF, GFG, GGF, GGG.
1. FFF et GGG : \(\frac{2}{8} = \frac{1}{4}\).
2. Contraire de GGG : \(1 - \frac{1}{8} = \frac{7}{8}\).
{{% /details %}}
