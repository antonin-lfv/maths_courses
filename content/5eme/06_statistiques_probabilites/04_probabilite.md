---
title: 'Calculer une probabilité'
weight: 4
cascade:
  type: docs
---

## Événement

> [!TIP] **Définitions**
>
> - Selon l’issue obtenue lors d’une expérience aléatoire, un **événement** peut être réalisé ou non.
> - On peut décrire un événement par une phrase ou en donnant la liste des issues qui le réalisent.

{{% details title="Exemple" closed="true" %}}
Avec un dé équilibré à \(8\) faces, l’événement « Obtenir un multiple de \(3\) » est réalisé par les issues \(3\) et \(6\).
{{% /details %}}

## Probabilité d’un événement

> [!TIP] **Propriété**
>
> Dans une expérience aléatoire où toutes les issues sont équiprobables, la probabilité d’un événement \(A\), notée \(P(A)\), vaut :
> \[
P(A) = \frac{\text{nombre d’issues qui réalisent l’événement } A}{\text{nombre total d’issues}}.
\]

{{% details title="Exemple" closed="true" %}}
Avec le dé à \(8\) faces : la probabilité d’obtenir un multiple de \(3\) est \(\frac{2}{8} = \frac{1}{4}\). L’événement \(B\) « Obtenir un nombre supérieur à \(5\) » est réalisé par \(6\), \(7\), \(8\) : \(P(B) = \frac{3}{8}\).
{{% /details %}}

## Expériences à deux étapes

> [!NOTE] **Méthode — Utiliser un arbre ou un tableau**
>
> Pour trouver toutes les issues d’une expérience aléatoire à deux étapes, on peut utiliser un **arbre** ou un **tableau à double entrée**. On compte ensuite les issues favorables.

{{% details title="Exemple" closed="true" %}}
Un sac contient une boule rouge (R) et une boule verte (V). On tire une boule, on note sa couleur, on la remet, puis on tire une seconde boule.

| 1er tirage \ 2e tirage | R | V |
|---|---|---|
| R | (R ; R) | (R ; V) |
| V | (V ; R) | (V ; V) |

Les \(4\) issues sont équiprobables. La probabilité d’obtenir deux boules de couleurs différentes est \(\frac{2}{4} = \frac{1}{2}\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> On tire au hasard une carte parmi \(12\) cartes numérotées de \(1\) à \(12\). Calculer la probabilité des événements : \(A\) « obtenir un nombre pair » ; \(B\) « obtenir un diviseur de \(12\) » ; \(C\) « obtenir \(13\) ».

{{% details title="Solution commentée" closed="true" %}}
Les \(12\) issues sont équiprobables.
- \(A\) : \(2, 4, 6, 8, 10, 12\), soit \(6\) issues : \(P(A) = \frac{6}{12} = \frac{1}{2}\).
- \(B\) : \(1, 2, 3, 4, 6, 12\), soit \(6\) issues : \(P(B) = \frac{1}{2}\).
- \(C\) est impossible : \(P(C) = 0\).
{{% /details %}}
