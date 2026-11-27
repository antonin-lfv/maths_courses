---
title: 'Déterminer la probabilité d’un évènement'
weight: 2
cascade:
  type: docs
---

## Probabilité d’un événement

> [!TIP] **Définition**
>
> La **probabilité d’un événement** est égale à la somme des probabilités des issues qui le réalisent.

{{% details title="Exemple" closed="true" %}}
Un dé truqué à \(6\) faces suit la loi suivante :

| Issue | \(1\) | \(2\) | \(3\) | \(4\) | \(5\) | \(6\) |
|---|---|---|---|---|---|---|
| Probabilité | \(0{,}1\) | \(0{,}15\) | \(0{,}2\) | \(0{,}15\) | \(0{,}25\) | \(0{,}15\) |

L’événement « Obtenir un nombre impair » est réalisé par \(1\), \(3\) et \(5\) : sa probabilité est \(0{,}1 + 0{,}2 + 0{,}25 = 0{,}55\).
{{% /details %}}

> [!TIP] **Propriété**
>
> La probabilité d’un événement est un nombre compris entre \(0\) et \(1\).

## Cas de l’équiprobabilité

> [!TIP] **Propriété**
>
> Dans une expérience aléatoire où toutes les issues sont équiprobables, la probabilité d’un événement \(A\), notée \(P(A)\), vaut :
> \[
P(A) = \frac{\text{nombre d’issues qui réalisent l’événement } A}{\text{nombre total d’issues}}.
\]

{{% details title="Exemple" closed="true" %}}
On tire au hasard une carte parmi \(20\) cartes numérotées de \(1\) à \(20\). L’événement \(B\) « Obtenir un multiple de \(4\) » est réalisé par \(4\), \(8\), \(12\), \(16\), \(20\) : \(P(B) = \frac{5}{20} = \frac{1}{4}\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Un sac contient \(5\) jetons verts, \(3\) jetons jaunes et \(4\) jetons rouges, indiscernables au toucher. On tire un jeton au hasard. Calculer la probabilité de tirer un jeton jaune, puis un jeton vert ou rouge.

{{% details title="Solution commentée" closed="true" %}}
\(12\) jetons équiprobables. Jaune : \(\frac{3}{12} = \frac{1}{4}\). Vert ou rouge : \(\frac{5 + 4}{12} = \frac{9}{12} = \frac{3}{4}\).
{{% /details %}}
