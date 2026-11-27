---
title: 'Modéliser une expérience aléatoire'
weight: 3
cascade:
  type: docs
---

## Expérience aléatoire

> [!TIP] **Définitions**
>
> - Une **expérience aléatoire** est une expérience dans laquelle intervient le hasard : on ne peut pas en prévoir le résultat à l’avance.
> - Les différents résultats possibles d’une expérience aléatoire sont appelés ses **issues**.

{{% details title="Exemple" closed="true" %}}
On fait tourner une roue partagée en \(5\) secteurs de couleurs différentes (rouge, bleu, vert, jaune, violet) et on note la couleur obtenue. Il y a \(5\) issues.
{{% /details %}}

## Modéliser

> [!TIP] **Définition**
>
> **Modéliser** une expérience aléatoire, c’est associer une probabilité à chaque issue, de sorte que :
> - la probabilité d’une issue soit un nombre compris entre \(0\) et \(1\), qui peut s’interpréter comme la « proportion de chances » d’obtenir cette issue ;
> - la somme des probabilités de toutes les issues soit égale à \(1\).

| Impossible | Improbable | Peu probable | Une chance sur deux | Probable | Très probable | Certain |
|---|---|---|---|---|---|---|
| \(0\) | | | \(0{,}5\) | | | \(1\) |

{{% details title="Exemple" closed="true" %}}
Une roue est partagée en un grand secteur rouge (la moitié de la roue) et deux secteurs bleu et vert d’un quart chacun. On modélise : \(P(\text{rouge}) = \frac{1}{2}\), \(P(\text{bleu}) = \frac{1}{4}\), \(P(\text{vert}) = \frac{1}{4}\). On vérifie : \(\frac{1}{2} + \frac{1}{4} + \frac{1}{4} = 1\).
{{% /details %}}

## Équiprobabilité

> [!TIP] **Définition**
>
> Lorsque toutes les issues d’une expérience aléatoire ont la même probabilité, on dit qu’elles sont **équiprobables**.

> [!TIP] **Propriété**
>
> Lorsque les issues d’une expérience aléatoire sont équiprobables, la probabilité de chacune d’elles est égale à \(\dfrac{1}{\text{nombre total d’issues}}\).

{{% details title="Exemple" closed="true" %}}
Avec un dé équilibré à \(8\) faces numérotées de \(1\) à \(8\), les \(8\) issues sont équiprobables : chacune a la probabilité \(\frac{1}{8} = 0{,}125\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Une pièce est truquée : la probabilité d’obtenir « Pile » est \(0{,}7\). Quelle est la probabilité d’obtenir « Face » ? Les issues sont-elles équiprobables ?

{{% details title="Solution commentée" closed="true" %}}
La somme des probabilités vaut \(1\) : \(P(\text{Face}) = 1 - 0{,}7 = 0{,}3\). Les deux issues n’ont pas la même probabilité : elles ne sont pas équiprobables.
{{% /details %}}
