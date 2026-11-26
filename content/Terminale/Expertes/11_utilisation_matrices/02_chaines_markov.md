---
title: 'Chaînes de Markov'
weight: 2
cascade:
  type: docs
---

## Graphe orienté pondéré

> [!TIP] **Définitions**
>
> - Un graphe orienté est **pondéré** lorsque chaque arc est affecté d’un nombre réel positif, appelé **poids** de cet arc.
> - Un **graphe probabiliste** est un graphe orienté pondéré dans lequel tous les poids sont compris entre 0 et 1, et tel que la somme des poids des arcs issus d’un même sommet est égale à 1.

> [!IMPORTANT] **Remarque**
>
> Les sommets d’un graphe probabiliste sont appelés des **états**.

{{% details title="Exemple" closed="true" %}}
Le graphe ci-dessous est un graphe probabiliste à trois états \(A\), \(B\), \(C\). Par exemple, les poids des arcs issus de \(A\) sont \(0{,}5\) (boucle), \(0{,}3\) (vers \(B\)) et \(0{,}2\) (vers \(C\)), de somme 1.

![](/images/image333.png)
{{% /details %}}

> [!TIP] **Définition**
>
> La matrice associée à un graphe probabiliste à \(p\) sommets s’appelle la **matrice de transition**. C’est la matrice carrée \(P\) d’ordre \(p\) dont le terme de la \(i\)-ème ligne et de la \(j\)-ème colonne est le poids de l’arc allant du sommet \(i\) au sommet \(j\) s’il existe, et 0 sinon.

> [!IMPORTANT] **Remarques**
>
> - Si les sommets sont des lettres, on les numérote dans l’ordre alphabétique.
> - Dans une matrice de transition, la somme des termes de chaque ligne est égale à 1.

{{% details title="Exemple" closed="true" %}}
La matrice de transition du graphe précédent est
\[
P = \begin{pmatrix} 0{,}5 & 0{,}3 & 0{,}2 \\ 0{,}1 & 0{,}6 & 0{,}3 \\ 0{,}4 & 0 & 0{,}6 \end{pmatrix}.
\]
Il n’y a pas d’arc de \(C\) vers \(B\), d’où le terme \(p_{32} = 0\).
{{% /details %}}

## Chaîne de Markov à deux ou trois états

> [!TIP] **Définition**
>
> On considère une suite de variables aléatoires \((X_n)\) qui modélise l’évolution, par étapes successives, d’un système pouvant se trouver dans différents états (deux ou trois).
> - À l’étape \(n = 0\), la loi de probabilité de \(X_0\) s’appelle la **distribution initiale** du système.
> - À l’étape \(n\), la loi de probabilité de \(X_n\) s’appelle la **distribution après \(n\) transitions**.
>
> Lorsque, à chaque étape, la probabilité de transition d’un état à un autre ne dépend pas de \(n\) (ni des étapes antérieures, mais seulement de l’état présent), on dit que la suite \((X_n)\) est une **chaîne de Markov**.

> [!IMPORTANT] **Remarque**
>
> On peut associer à une chaîne de Markov :
> - un graphe probabiliste, dont les sommets sont les états du système et dont le poids de chaque arc est la probabilité de passer d’un état à un autre ;
> - la matrice de transition de ce graphe : \(p_{ij} = P_{(X_n = i)}(X_{n+1} = j)\).

## Modéliser par une chaîne de Markov

> [!NOTE] **Exercice résolu 1 — Graphe probabiliste et matrice**
>
> 1. Écrire la matrice de transition \(M\) du graphe probabiliste à deux états \(S\) et \(P\) ci-dessous.
>
> ![](/images/image334.png)
>
> 2. Le graphe dont la matrice serait \(\begin{pmatrix} 0{,}7 & 0{,}4 \\ 0{,}5 & 0{,}5 \end{pmatrix}\) est-il un graphe probabiliste ?

{{% details title="Solution commentée" closed="true" %}}
1. Avec l’ordre \((S, P)\) : \(M = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}4 & 0{,}6 \end{pmatrix}\). Chaque ligne a pour somme 1.
2. Non : la somme des termes de la première ligne vaut \(0{,}7 + 0{,}4 = 1{,}1 \neq 1\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Étudier un déplacement aléatoire**
>
> Une souris se déplace dans trois pièces numérotées 1, 2, 3, disposées en enfilade. Chaque minute :
> - si elle est dans la pièce 1, elle y reste avec la probabilité \(\frac{1}{2}\) ou passe dans la pièce 2 ;
> - si elle est dans la pièce 2, elle reste, passe dans la pièce 1 ou passe dans la pièce 3, avec la même probabilité \(\frac{1}{3}\) ;
> - si elle est dans la pièce 3, elle retourne toujours dans la pièce 2.
>
> On note \(X_n\) la pièce occupée au bout de \(n\) minutes ; la souris est au départ dans la pièce 1.
> 1. Représenter la situation par un graphe probabiliste et donner la matrice de transition \(P\).
> 2. Déterminer la loi de \(X_1\), puis celle de \(X_2\).

{{% details title="Solution commentée" closed="true" %}}
1. Le déplacement ne dépend que de la pièce occupée : \((X_n)\) est une chaîne de Markov à trois états.

![](/images/image335.png)

\[
P = \begin{pmatrix} \frac{1}{2} & \frac{1}{2} & 0 \\ \frac{1}{3} & \frac{1}{3} & \frac{1}{3} \\ 0 & 1 & 0 \end{pmatrix}.
\]
2. Au départ, \(P(X_0 = 1) = 1\). Donc \(P(X_1 = 1) = P(X_1 = 2) = \frac{1}{2}\) et \(P(X_1 = 3) = 0\).

   Pour \(X_2\), on utilise la formule des probabilités totales avec le système complet \(\{X_1 = 1\}, \{X_1 = 2\}\) :
   - \(P(X_2 = 1) = \frac{1}{2} \times \frac{1}{2} + \frac{1}{2} \times \frac{1}{3} = \frac{5}{12}\) ;
   - \(P(X_2 = 2) = \frac{1}{2} \times \frac{1}{2} + \frac{1}{2} \times \frac{1}{3} = \frac{5}{12}\) ;
   - \(P(X_2 = 3) = \frac{1}{2} \times 0 + \frac{1}{2} \times \frac{1}{3} = \frac{1}{6}\).

   On vérifie que \(\frac{5}{12} + \frac{5}{12} + \frac{2}{12} = 1\).
{{% /details %}}
