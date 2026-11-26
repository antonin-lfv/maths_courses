---
title: 'Graphes orientés'
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Un graphe est **orienté** lorsque ses arêtes ont une origine et une extrémité : une flèche indique le sens dans lequel l’arête peut être parcourue. Dans ce cas, les arêtes sont appelées **arcs**, et on parle de **chemin** plutôt que de chaîne. Le **degré** d’un sommet est la somme du nombre d’arcs qui arrivent à ce sommet et du nombre d’arcs qui en partent.

{{% details title="Exemple" closed="true" %}}
Le graphe orienté \(\Gamma\) ci-dessous est d’ordre 4 et possède 6 arcs. Le sommet 1 est l’origine de deux arcs (vers 2 et vers 3) et l’extrémité d’un arc (venant de 4) : il est de degré 3. \(4 \to 1 \to 3\) est un chemin de longueur 2 ; \(3 \to 2\) n’est pas un chemin, car l’arc va de 2 vers 3.

![](/images/image331.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les définitions et propriétés des paragraphes précédents s’adaptent aux graphes orientés, sauf la notion de graphe complet et le théorème d’Euler.

## Matrice d’adjacence d’un graphe

> [!TIP] **Définition**
>
> La **matrice d’adjacence** d’un graphe (orienté ou non) d’ordre \(n\), dont les sommets sont numérotés de 1 à \(n\), est la matrice carrée \(M\) d’ordre \(n\) dont le terme \(m_{ij}\) est égal au nombre d’arêtes (ou d’arcs) reliant le sommet \(i\) au sommet \(j\).

{{% details title="Exemple" closed="true" %}}
Pour le graphe \(\Gamma\), la ligne \(i\) indique vers quels sommets partent les arcs issus de \(i\) :
\[
M = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 1 & 0 & 0 \end{pmatrix}.
\]
Pour le graphe non orienté \(G\) du premier paragraphe (sommets \(A, \dots, F\) numérotés de 1 à 6), la matrice d’adjacence est symétrique :
\[
\begin{pmatrix} 0 & 1 & 1 & 0 & 0 & 0 \\ 1 & 0 & 1 & 1 & 0 & 0 \\ 1 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 1 & 1 & 0 \end{pmatrix}.
\]
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - La matrice d’adjacence d’un graphe non orienté est **symétrique** (\(m_{ij} = m_{ji}\)), car le nombre d’arêtes reliant \(i\) à \(j\) est le même que celui reliant \(j\) à \(i\).
> - Dans un graphe non orienté sans boucle, la somme des termes de la ligne \(i\) est le degré du sommet \(i\).

> [!TIP] **Propriété**
>
> Soit \(G\) un graphe d’ordre \(n\) et \(M\) sa matrice d’adjacence. Pour tout entier \(p \geq 1\), le nombre de chaînes (ou de chemins) de longueur \(p\) reliant le sommet \(i\) au sommet \(j\) est égal au terme d’indice \(ij\) de la matrice \(M^p\), noté \(m_{ij}^{(p)}\).

{{% details title="Démonstration" closed="true" %}}
Par récurrence sur \(p\).
- **Initialisation.** Pour \(p = 1\), \(M^1 = M\) et, par définition, \(m_{ij}\) est le nombre de chaînes de longueur 1 (c’est-à-dire d’arêtes) de \(i\) à \(j\).
- **Hérédité.** Supposons la propriété vraie pour un entier \(p \geq 1\). Une chaîne de longueur \(p + 1\) de \(i\) à \(j\) se décompose en une chaîne de longueur \(p\) de \(i\) à un sommet \(k\), suivie d’une arête de \(k\) à \(j\). Pour un sommet \(k\) fixé, il y a \(m_{ik}^{(p)} \times m_{kj}\) telles chaînes. En additionnant sur tous les sommets \(k\) possibles, le nombre de chaînes de longueur \(p + 1\) de \(i\) à \(j\) est
\[
\sum_{k=1}^{n} m_{ik}^{(p)}m_{kj} = \left(M^pM\right)_{ij} = m_{ij}^{(p+1)}.
\]
- **Conclusion.** La propriété est vraie pour tout entier \(p \geq 1\).
{{% /details %}}

## Utiliser une matrice d’adjacence

> [!NOTE] **Exercice résolu 1 — Écrire la matrice d’adjacence**
>
> Écrire la matrice d’adjacence du graphe \(H\) ci-dessous (sommets \(A, B, C, D, E\) dans l’ordre alphabétique), puis retrouver les degrés des sommets.
>
> ![](/images/image332.png)

{{% details title="Solution commentée" closed="true" %}}
\[
N = \begin{pmatrix} 0 & 1 & 0 & 0 & 1 \\ 1 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 & 0 \end{pmatrix}.
\]
La matrice est symétrique (graphe non orienté). Les sommes des lignes donnent les degrés : \(A : 2\), \(B : 4\), \(C : 2\), \(D : 3\), \(E : 3\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Compter des chemins**
>
> On reprend le graphe orienté \(\Gamma\) et sa matrice d’adjacence \(M\).
> 1. Calculer \(M^2\) et \(M^3\).
> 2. Combien y a-t-il de chemins de longueur 2 allant du sommet 4 au sommet 3 ? Les écrire.
> 3. Combien y a-t-il de chemins de longueur 3 partant du sommet 4 et y revenant ? Les écrire.

{{% details title="Solution commentée" closed="true" %}}
1. À la main ou à la calculatrice :
\[
M^2 = \begin{pmatrix} 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \end{pmatrix}, \qquad M^3 = \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 2 \end{pmatrix}.
\]
2. \(m_{43}^{(2)} = 2\) : il y a deux chemins de longueur 2 de 4 à 3, à savoir \(4 \to 1 \to 3\) et \(4 \to 2 \to 3\).
3. \(m_{44}^{(3)} = 2\) : les chemins sont \(4 \to 1 \to 3 \to 4\) et \(4 \to 2 \to 3 \to 4\).
{{% /details %}}
