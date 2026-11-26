---
title: 'Graphes non-orientés'
weight: 1
cascade:
  type: docs
---

## Vocabulaire

> [!TIP] **Définitions**
>
> - Un **graphe non orienté** \(G\) est un ensemble de points, appelés **sommets**, reliés par des lignes, appelées **arêtes**.
> - Deux sommets reliés par une arête sont dits **adjacents**. Une arête reliant deux sommets est dite **incidente** à ces deux sommets.
> - Une arête qui relie un sommet à lui-même est une **boucle**.
> - Un **sous-graphe** \(G'\) d’un graphe \(G\) est un graphe constitué de certains sommets de \(G\) et de certaines des arêtes de \(G\) qui relient ces sommets.
> - L’**ordre** d’un graphe est le nombre de ses sommets.
> - Le **degré** d’un sommet est le nombre d’arêtes incidentes à ce sommet, une boucle comptant pour deux.
> - Un graphe est **simple** s’il n’a pas de boucle et si deux sommets sont reliés par au plus une arête.

{{% details title="Exemple" closed="true" %}}
Le graphe \(G\) ci-dessous est un graphe simple d’ordre 6 et à 8 arêtes. Les sommets \(A\) et \(B\) sont adjacents ; \(A\) et \(D\) ne le sont pas.

![](/images/image329.png)

| Sommet | \(A\) | \(B\) | \(C\) | \(D\) | \(E\) | \(F\) |
|---|---|---|---|---|---|---|
| Degré | 2 | 3 | 3 | 4 | 2 | 2 |

Le graphe formé des sommets \(D\), \(E\), \(F\) et des arêtes \(D\)–\(E\), \(E\)–\(F\), \(F\)–\(D\) est un sous-graphe de \(G\).
{{% /details %}}

> [!TIP] **Théorème**
>
> Dans un graphe simple non orienté, la somme des degrés des sommets est égale au **double du nombre d’arêtes**.

{{% details title="Démonstration" closed="true" %}}
Chaque arête relie deux sommets distincts : elle est comptée une fois dans le degré de chacune de ses deux extrémités. En additionnant les degrés de tous les sommets, chaque arête est donc comptée exactement deux fois.
{{% /details %}}

> [!TIP] **Conséquence**
>
> Dans un graphe simple non orienté, le nombre de sommets de degré impair est **pair**.

{{% details title="Démonstration" closed="true" %}}
La somme de tous les degrés est paire (double du nombre d’arêtes). La somme des degrés pairs est paire, donc la somme des degrés impairs est paire aussi. Or une somme de nombres impairs est paire si et seulement si le nombre de termes est pair.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Pour le graphe \(G\) : \(2 + 3 + 3 + 4 + 2 + 2 = 16 = 2 \times 8\), et il y a deux sommets de degré impair (\(B\) et \(C\)). En revanche, il n’existe aucun graphe simple à trois sommets de degrés 1, 1 et 1 : la somme 3 serait impaire.
{{% /details %}}

## Graphe complet

> [!TIP] **Définition**
>
> Un graphe non orienté est **complet** si tous ses sommets sont adjacents deux à deux.

![](/images/image330.png)

> [!IMPORTANT] **Remarque**
>
> Dans un graphe simple complet d’ordre \(n\), chaque sommet est de degré \(n - 1\) ; d’après le théorème précédent, le nombre d’arêtes est \(\dfrac{n(n - 1)}{2} = \dbinom{n}{2}\). Par exemple, le graphe complet d’ordre 6 a 15 arêtes.

## Décrire un graphe

> [!NOTE] **Exercice résolu 1 — Utiliser le vocabulaire**
>
> Un club organise un tournoi d’échecs entre 7 joueurs. On représente chaque joueur par un sommet et chaque partie jouée par une arête.
> 1. Si chaque joueur affronte une fois chacun des autres, combien de parties seront jouées ?
> 2. Après la première journée, les degrés des sommets sont \(3, 2, 2, 1, 1, 1, 0\). Combien de parties ont été jouées ?
> 3. Est-il possible qu’après la deuxième journée, les degrés soient \(4, 3, 3, 2, 2, 2, 1\) ?

{{% details title="Solution commentée" closed="true" %}}
1. Le graphe est alors complet d’ordre 7 : il y a \(\dfrac{7 \times 6}{2} = 21\) parties.
2. La somme des degrés vaut \(10\), donc il y a \(\dfrac{10}{2} = 5\) parties.
3. La somme des degrés vaudrait \(4 + 3 + 3 + 2 + 2 + 2 + 1 = 17\), qui est impair : c’est impossible (il y aurait trois sommets de degré impair).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Reconnaître des sous-graphes complets**
>
> On reprend le graphe \(G\) de l’exemple.
> 1. Le graphe \(G\) est-il complet ?
> 2. Donner un sous-graphe complet d’ordre 3 de \(G\). Existe-t-il un sous-graphe complet d’ordre 4 ?

{{% details title="Solution commentée" closed="true" %}}
1. Non : par exemple \(A\) et \(D\) ne sont pas adjacents.
2. Les sommets \(A\), \(B\), \(C\) sont adjacents deux à deux : ils forment un sous-graphe complet d’ordre 3 (de même \(B\), \(C\), \(D\) et \(D\), \(E\), \(F\)). Un sous-graphe complet d’ordre 4 nécessiterait 4 sommets de degré au moins 3 dans \(G\) ; seuls \(B\), \(C\) et \(D\) conviennent. Il n’en existe donc pas.
{{% /details %}}
