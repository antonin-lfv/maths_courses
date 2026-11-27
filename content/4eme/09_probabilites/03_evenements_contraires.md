---
title: 'Utiliser des évènements contraires'
weight: 3
cascade:
  type: docs
---

## Événements impossibles et certains

> [!TIP] **Définitions**
>
> - Un événement **impossible** est un événement qui ne peut jamais se réaliser, quel que soit le résultat de l’expérience.
> - Un événement **certain** est un événement qui se réalise toujours, quel que soit le résultat de l’expérience.

> [!TIP] **Propriétés**
>
> La probabilité d’un événement impossible est égale à \(0\) ; celle d’un événement certain est égale à \(1\).

{{% details title="Exemple" closed="true" %}}
On lance un dé à \(6\) faces : « Obtenir \(0\) » est impossible (probabilité \(0\)) ; « Obtenir un nombre entre \(1\) et \(6\) » est certain (probabilité \(1\)).
{{% /details %}}

## Événement contraire

> [!TIP] **Définition**
>
> L’**événement contraire** d’un événement \(A\) est l’événement qui se réalise chaque fois que \(A\) n’est pas réalisé : il est réalisé par toutes les issues qui ne réalisent pas \(A\). On le note \(\overline{A}\).

> [!TIP] **Propriété**
>
> La somme des probabilités d’un événement et de son contraire vaut \(1\) : \(P(A) + P(\overline{A}) = 1\). On en déduit que \(P(\overline{A}) = 1 - P(A)\).

{{% details title="Exemple" closed="true" %}}
Un sac contient \(2\) jetons rouges, \(5\) jetons bleus et \(3\) jetons blancs. On tire un jeton au hasard ; soit \(A\) l’événement « Obtenir un jeton bleu ». \(P(A) = \frac{5}{10} = \frac{1}{2}\). L’événement contraire \(\overline{A}\) est « Ne pas obtenir un jeton bleu », c’est-à-dire « Obtenir un jeton rouge ou blanc » : \(P(\overline{A}) = 1 - \frac{1}{2} = \frac{1}{2}\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> La probabilité qu’un bus soit en retard est \(0{,}12\). Quelle est la probabilité qu’il ne soit pas en retard ?

{{% details title="Solution commentée" closed="true" %}}
« Ne pas être en retard » est l’événement contraire de « être en retard » : sa probabilité est \(1 - 0{,}12 = 0{,}88\).
{{% /details %}}
