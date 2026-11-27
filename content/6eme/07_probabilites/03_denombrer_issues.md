---
title: 'Dénombrer des issues'
weight: 3
cascade:
  type: docs
---

Lorsqu’une expérience aléatoire se déroule en **deux étapes**, il faut bien recenser toutes les issues avant de calculer une probabilité.

## Tableau à double entrée

> [!NOTE] **Méthode — Utiliser un tableau à double entrée**
>
> Pour trouver toutes les issues d’une expérience à deux étapes, on peut utiliser un tableau : les résultats de la première étape en lignes, ceux de la seconde en colonnes. Chaque case correspond à une issue.

{{% details title="Exemple" closed="true" %}}
On fait tourner deux fois une roue équilibrée à trois secteurs, A, B et C, et on note les deux lettres obtenues.

| 1er tour \ 2e tour | A | B | C |
|---|---|---|---|
| A | (A ; A) | (A ; B) | (A ; C) |
| B | (B ; A) | (B ; B) | (B ; C) |
| C | (C ; A) | (C ; B) | (C ; C) |

Il y a \(9\) issues, qui ont la même chance de se produire. L’événement « Obtenir deux fois la même lettre » est réalisé par \(3\) issues (sur la diagonale) : sa probabilité est \(\frac{3}{9} = \frac{1}{3}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les issues (A ; B) et (B ; A) sont différentes : dans la première, on obtient A au premier tour ; dans la seconde, au deuxième tour.

## Arbre

> [!NOTE] **Méthode — Utiliser un arbre**
>
> On peut aussi représenter toutes les issues par un **arbre** : chaque branche correspond à un résultat possible d’une étape, et chaque chemin complet correspond à une issue.

{{% details title="Exemple" closed="true" %}}
On lance deux fois une pièce équilibrée (P pour Pile, F pour Face).

![](/images/image403.png)

On retrouve les quatre issues (P ; P), (P ; F), (F ; P), (F ; F), qui ont la même chance de se produire. La probabilité d’obtenir une fois Pile et une fois Face est \(\frac{2}{4} = \frac{1}{2}\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> On lance deux dés équilibrés à quatre faces numérotées de \(1\) à \(4\) et on note la somme des deux numéros. Quelle est la probabilité que la somme soit égale à \(5\) ? à \(8\) ?

{{% details title="Solution commentée" closed="true" %}}
On remplit un tableau des sommes :

| 1er dé \ 2e dé | \(1\) | \(2\) | \(3\) | \(4\) |
|---|---|---|---|---|
| \(1\) | \(2\) | \(3\) | \(4\) | \(5\) |
| \(2\) | \(3\) | \(4\) | \(5\) | \(6\) |
| \(3\) | \(4\) | \(5\) | \(6\) | \(7\) |
| \(4\) | \(5\) | \(6\) | \(7\) | \(8\) |

Il y a \(16\) issues de même chance. La somme \(5\) apparaît \(4\) fois : probabilité \(\frac{4}{16} = \frac{1}{4}\). La somme \(8\) apparaît une seule fois : probabilité \(\frac{1}{16}\).
{{% /details %}}
