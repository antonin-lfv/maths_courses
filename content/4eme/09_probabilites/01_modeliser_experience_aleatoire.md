---
title: 'Modéliser une expérience aléatoire'
weight: 1
cascade:
  type: docs
---

## Expérience aléatoire et événement

> [!TIP] **Définitions**
>
> - Une **expérience aléatoire** est une expérience dont on connaît les résultats possibles (les **issues**) sans pouvoir prévoir lequel sera obtenu.
> - Selon l’issue obtenue lors d’une expérience aléatoire, un **événement** peut être réalisé ou non. On peut décrire un événement par une phrase ou en donnant la liste des issues qui le réalisent.

{{% details title="Exemple" closed="true" %}}
On tire au hasard une boule dans une urne contenant des boules numérotées de \(1\) à \(10\). Il y a \(10\) issues. L’événement « Obtenir un nombre premier » est réalisé par les issues \(2\), \(3\), \(5\) et \(7\).
{{% /details %}}

## Modéliser

> [!TIP] **Définition**
>
> **Modéliser** une expérience aléatoire, c’est associer une probabilité à chaque issue de sorte que :
> - la probabilité d’une issue soit un nombre compris entre \(0\) et \(1\), qui peut s’interpréter comme la « proportion de chances » d’obtenir cette issue ;
> - la somme des probabilités de toutes les issues soit égale à \(1\).

| Impossible | Improbable | Peu probable | Une chance sur deux | Probable | Très probable | Certain |
|---|---|---|---|---|---|---|
| \(0\) | | | \(0{,}5\) | | | \(1\) |

{{% details title="Exemple" closed="true" %}}
Une roue est partagée en \(3\) secteurs : un rouge occupant la moitié, un bleu et un vert occupant chacun un quart. Modèle : \({P(\text{rouge}) = 0{,}5}\), \({P(\text{bleu}) = 0{,}25}\), \({P(\text{vert}) = 0{,}25}\) ; la somme vaut \(1\).
{{% /details %}}

## Équiprobabilité

> [!TIP] **Définition**
>
> Lorsque toutes les issues d’une expérience aléatoire ont la même probabilité, on dit qu’elles sont **équiprobables**.

> [!TIP] **Propriété**
>
> \(n\) désigne un nombre entier positif. Si une expérience aléatoire comporte \(n\) issues équiprobables, alors la probabilité de chacune d’elles est égale à \(\dfrac{1}{n}\).

{{% details title="Exemple" closed="true" %}}
Avec un dé équilibré à \(12\) faces, chaque face a la probabilité \(\dfrac{1}{12}\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Un dé à \(6\) faces est truqué : les faces \(1\), \(2\), \(3\), \(4\), \(5\) ont chacune la probabilité \(0{,}1\). Quelle est la probabilité d’obtenir \(6\) ?

{{% details title="Solution commentée" closed="true" %}}
La somme des probabilités vaut \(1\) : \({P(6) = 1 - 5 \times 0{,}1 = 0{,}5}\).
{{% /details %}}
