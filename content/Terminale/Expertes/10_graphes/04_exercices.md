---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

1. Existe-t-il un graphe simple à 5 sommets dont les degrés sont \(3, 3, 2, 2, 1\) ?
2. Lors d’une réunion de 9 personnes, est-il possible que chacune serre la main d’exactement 3 autres ?

{{% details title="Solution" closed="true" %}}
1. La somme des degrés vaudrait \(11\), qui est impaire ; or elle doit être le double du nombre d’arêtes. Un tel graphe n’existe pas.
2. On représente les personnes par des sommets et les poignées de main par des arêtes. Chaque sommet serait de degré 3 : la somme des degrés vaudrait \(9 \times 3 = 27\), impaire. C’est impossible.
{{% /details %}}

### Exercice 2

1. Combien d’arêtes possède le graphe complet d’ordre 10 ?
2. Quel est l’ordre d’un graphe complet possédant 28 arêtes ?

{{% details title="Solution" closed="true" %}}
1. \(\dfrac{10 \times 9}{2} = 45\) arêtes.
2. On résout \(\dfrac{n(n - 1)}{2} = 28\), soit \(n^2 - n - 56 = 0\), dont les racines sont \(8\) et \(-7\). L’ordre est \(n = 8\).
{{% /details %}}

### Exercice 3

Un graphe non orienté de sommets \(1, 2, 3, 4, 5\) a pour matrice d’adjacence
\[
M = \begin{pmatrix} 0 & 1 & 1 & 0 & 0 \\ 1 & 0 & 1 & 1 & 1 \\ 1 & 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 1 & 0 \end{pmatrix}.
\]
1. Donner le nombre d’arêtes et le degré de chaque sommet.
2. Ce graphe admet-il un cycle eulérien ? une chaîne eulérienne ? Si oui, en donner une.

{{% details title="Solution" closed="true" %}}
1. Les sommes des lignes donnent les degrés : \(1 : 2\), \(2 : 4\), \(3 : 3\), \(4 : 2\), \(5 : 3\). Leur somme vaut 14, donc il y a 7 arêtes : \(1\)–\(2\), \(1\)–\(3\), \(2\)–\(3\), \(2\)–\(4\), \(2\)–\(5\), \(3\)–\(5\), \(4\)–\(5\).
2. Le graphe est connexe (la chaîne \(1 - 3 - 5 - 4 - 2\) passe par tous les sommets). Il a deux sommets de degré impair, 3 et 5 : il n’admet pas de cycle eulérien, mais il admet une chaîne eulérienne d’extrémités 3 et 5, par exemple \(3 - 1 - 2 - 3 - 5 - 2 - 4 - 5\).
{{% /details %}}

### Exercice 4

Un graphe orienté de sommets \(1, 2, 3\) a pour matrice d’adjacence \(M = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}\).
1. Dessiner ce graphe à main levée et donner le degré de chaque sommet.
2. Calculer \(M^2\) et \(M^3\).
3. Combien y a-t-il de chemins de longueur 3 allant du sommet 3 au sommet 1 ? Les écrire.

{{% details title="Solution" closed="true" %}}
1. Les arcs sont \(1 \to 2\), \(1 \to 3\), \(2 \to 1\), \(2 \to 3\), \(3 \to 1\). Degrés (arcs entrants + sortants) : sommet 1 : \(2 + 2 = 4\) ; sommet 2 : \(1 + 2 = 3\) ; sommet 3 : \(2 + 1 = 3\).
2. \(M^2 = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}\) et \(M^3 = M^2M = \begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 2 & 0 & 1 \end{pmatrix}\).
3. \(m_{31}^{(3)} = 2\) : les chemins sont \(3 \to 1 \to 2 \to 1\) et \(3 \to 1 \to 3 \to 1\).
{{% /details %}}

### Exercice 5

On considère le graphe \(H\) et sa matrice d’adjacence \(N\) (sommets dans l’ordre \(A, B, C, D, E\)).

![](/images/image332.png)

1. Calculer le terme d’indice \((A, D)\) de \(N^2\) et l’interpréter.
2. Calculer le terme d’indice \((A, A)\) de \(N^2\). Que représente-t-il ?

{{% details title="Solution" closed="true" %}}
On a \(N = \begin{pmatrix} 0 & 1 & 0 & 0 & 1 \\ 1 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 & 0 \end{pmatrix}\).
1. Ligne de \(A\) fois colonne de \(D\) : \(0 \times 0 + 1 \times 1 + 0 \times 1 + 0 \times 0 + 1 \times 1 = 2\). Il y a deux chaînes de longueur 2 de \(A\) à \(D\) : \(A - B - D\) et \(A - E - D\).
2. Ligne de \(A\) fois colonne de \(A\) : \(0 + 1 + 0 + 0 + 1 = 2\). C’est le nombre de chaînes de longueur 2 partant de \(A\) et y revenant (\(A - B - A\) et \(A - E - A\)) : il est égal au degré de \(A\).
{{% /details %}}

### Exercice 6

Un musée comporte cinq salles \(S_1, \dots, S_5\). Les portes relient \(S_1\) et \(S_2\), \(S_1\) et \(S_3\), \(S_2\) et \(S_3\), \(S_2\) et \(S_4\), \(S_3\) et \(S_4\), \(S_4\) et \(S_5\), et enfin \(S_3\) et \(S_5\).
1. Représenter la situation par un graphe.
2. Un visiteur peut-il passer par chaque porte exactement une fois ? Peut-il de plus revenir dans sa salle de départ ?

{{% details title="Solution" closed="true" %}}
1. Les sommets sont les salles et les arêtes les portes (7 arêtes).
2. Degrés : \(S_1 : 2\), \(S_2 : 3\), \(S_3 : 4\), \(S_4 : 3\), \(S_5 : 2\). Le graphe est connexe et a exactement deux sommets de degré impair, \(S_2\) et \(S_4\). D’après le théorème d’Euler, il existe une chaîne eulérienne, qui doit commencer en \(S_2\) et finir en \(S_4\) (ou l’inverse) : par exemple \(S_2 - S_1 - S_3 - S_2 - S_4 - S_3 - S_5 - S_4\). En revanche, il n’existe pas de cycle eulérien : le visiteur ne peut pas revenir à son point de départ en passant une seule fois par chaque porte.
{{% /details %}}
