---
title: 'Graphes'
weight: 10
---
Cours du chapitre 10 : Graphes.

{{< cards >}}
  {{< card link="./01_graphes_non_orientes" title="Graphes non-orientés" icon="paper-clip">}}
  {{< card link="./02_parcourir_graphe_non_oriente" title="Parcourir un graphe non-orienté" icon="paper-clip">}}
  {{< card link="./03_graphes_orientes" title="Graphes orientés" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Vocabulaire** - sommets, arêtes, sommets adjacents, boucle, sous-graphe, ordre (nombre de sommets), degré d’un sommet (une boucle compte deux fois), graphe simple, graphe complet.

**Degrés** - dans un graphe simple non orienté : somme des degrés \({= 2 \times}\) nombre d’arêtes ; le nombre de sommets de degré impair est pair. Le graphe complet d’ordre \(n\) a \({\dfrac{n(n - 1)}{2}}\) arêtes.

**Parcours** - chaîne, longueur, chaîne fermée, cycle (arêtes distinctes), graphe connexe.

**Euler** - un graphe connexe admet une chaîne eulérienne \({\iff}\) il a 0 ou 2 sommets de degré impair (dans ce cas, ce sont les extrémités) ; un cycle eulérien \({\iff}\) tous les degrés sont pairs.

**Graphes orientés et matrices** - arcs, chemins ; matrice d’adjacence \(M\) (\(m_{ij}\) = nombre d’arêtes/arcs de \(i\) vers \(j\)), symétrique si le graphe est non orienté. Le nombre de chaînes (chemins) de longueur \(p\) de \(i\) à \(j\) est le terme \(ij\) de \(M^p\).
