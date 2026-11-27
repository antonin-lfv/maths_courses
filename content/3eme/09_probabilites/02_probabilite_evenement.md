---
title: 'Déterminer la probabilité d’un évènement'
weight: 2
cascade:
  type: docs
---

## Évènement et probabilité

> [!TIP] **Définitions**
>
> - Un **évènement** est décrit par une phrase, ou par la liste des issues qui le réalisent. Selon l’issue obtenue lors d’une expérience aléatoire, un évènement peut être **réalisé** ou non.
> - La **probabilité d’un évènement** est égale à la somme des probabilités des issues qui le réalisent.

{{% details title="Exemple" closed="true" %}}
On reprend l’urne contenant \(5\) boules rouges, \(3\) vertes et \(2\) jaunes. L’évènement \(A\) : « la boule tirée n’est pas rouge » est réalisé par les issues V et J :
\[
P(A) = P(\text{V}) + P(\text{J}) = 0{,}3 + 0{,}2 = 0{,}5.
\]
{{% /details %}}

> [!TIP] **Propriété**
>
> La probabilité d’un évènement est un nombre compris entre \(0\) et \(1\). Un évènement **impossible** a une probabilité de \(0\) ; un évènement **certain** a une probabilité de \(1\).

> [!TIP] **Propriété**
>
> Dans une expérience aléatoire où toutes les issues sont équiprobables, la probabilité d’un évènement \(A\), notée \(P(A)\), vaut
> \[
P(A) = \dfrac{\text{nombre d'issues qui réalisent l'évènement } A}{\text{nombre total d'issues}}.
\]

{{% details title="Exemple" closed="true" %}}
Un sac contient \(20\) jetons numérotés de \(1\) à \(20\). On tire un jeton au hasard ; les \(20\) issues sont équiprobables. L’évènement \(M\) : « le numéro est un multiple de \(3\) » est réalisé par \(3\), \(6\), \(9\), \(12\), \(15\), \(18\), soit \(6\) issues :
\[
P(M) = \dfrac{6}{20} = \dfrac{3}{10} = 0{,}3.
\]
{{% /details %}}

## Évènement contraire

> [!TIP] **Définition**
>
> L’**évènement contraire** d’un évènement \(A\) est l’évènement qui se réalise chaque fois que \(A\) n’est pas réalisé : il est réalisé par toutes les issues qui ne réalisent pas \(A\). On le note \(\overline{A}\).

> [!TIP] **Propriété**
>
> La somme des probabilités d’un évènement et de son contraire vaut \(1\) : \({P(A) + P(\overline{A}) = 1}\).

> [!IMPORTANT] **Remarque**
>
> On en déduit \({P(\overline{A}) = 1 - P(A)}\). C’est souvent plus rapide de calculer la probabilité de l’évènement contraire.

{{% details title="Exemple" closed="true" %}}
Avec le sac de \(20\) jetons, l’évènement \(\overline{M}\) : « le numéro n’est pas un multiple de \(3\) » a pour probabilité \({P(\overline{M}) = 1 - 0{,}3 = 0{,}7}\) (on vérifie : \(14\) jetons sur \(20\)).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> On tire une carte au hasard dans un jeu de \(32\) cartes (\(4\) couleurs : cœur, carreau, trèfle, pique ; dans chaque couleur : 7, 8, 9, 10, valet, dame, roi, as).
> 1. Calculer la probabilité des évènements \(R\) : « tirer un roi » et \(C\) : « tirer un cœur ».
> 2. Calculer la probabilité de l’évènement \(F\) : « tirer une figure (valet, dame ou roi) », puis de \(\overline{F}\).

{{% details title="Solution commentée" closed="true" %}}
Les \(32\) issues sont équiprobables.
1. Il y a \(4\) rois : \({P(R) = \dfrac{4}{32} = \dfrac{1}{8}}\). Il y a \(8\) cœurs : \({P(C) = \dfrac{8}{32} = \dfrac{1}{4}}\).
2. Il y a \(3\) figures par couleur, soit \(12\) figures : \({P(F) = \dfrac{12}{32} = \dfrac{3}{8}}\). Donc \({P(\overline{F}) = 1 - \dfrac{3}{8} = \dfrac{5}{8}}\).
{{% /details %}}
