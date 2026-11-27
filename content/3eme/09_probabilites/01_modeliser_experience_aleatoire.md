---
title: 'Modéliser une expérience aléatoire'
weight: 1
cascade:
  type: docs
---

## Expérience aléatoire et modèle

> [!TIP] **Définitions**
>
> - Une **expérience aléatoire** est une expérience dans laquelle intervient le hasard et dont les différents résultats possibles, appelés **issues**, sont connus.
> - **Modéliser** une expérience aléatoire, c’est associer une probabilité à chaque issue, de sorte que :
>   - la probabilité d’une issue soit un nombre compris entre \(0\) et \(1\), qui s’interprète comme la « proportion de chances » d’obtenir cette issue ;
>   - la somme des probabilités de toutes les issues soit égale à \(1\).

> [!IMPORTANT] **Remarque**
>
> Une probabilité peut s’écrire sous forme décimale, fractionnaire ou en pourcentage. Une probabilité de \(0\) correspond à une issue impossible, une probabilité de \(1\) à une issue certaine, une probabilité de \(0{,}5\) à « une chance sur deux ».

{{% details title="Exemple" closed="true" %}}
Une urne contient des boules indiscernables au toucher : \(5\) rouges, \(3\) vertes et \(2\) jaunes. On tire une boule au hasard et on note sa couleur. Les issues sont R, V et J, et on peut les modéliser par :

| Issue | R | V | J |
|---|---|---|---|
| Probabilité | \(0{,}5\) | \(0{,}3\) | \(0{,}2\) |

On vérifie que \(0{,}5 + 0{,}3 + 0{,}2 = 1\).
{{% /details %}}

## Équiprobabilité

> [!TIP] **Définition**
>
> Lorsque toutes les issues d’une expérience aléatoire ont la même probabilité, on dit que les issues sont **équiprobables**.

> [!TIP] **Propriété**
>
> Si une expérience aléatoire comporte \(n\) issues équiprobables, la probabilité de chacune d’elles vaut \(\dfrac{1}{n}\).

{{% details title="Exemple" closed="true" %}}
On lance un dé équilibré à \(12\) faces numérotées de \(1\) à \(12\). Les \(12\) issues sont équiprobables : chacune a une probabilité de \(\dfrac{1}{12} \approx 0{,}083\), soit environ \(8{,}3\,\%\).
{{% /details %}}

## Fréquence et probabilité

> [!TIP] **Propriété**
>
> Si on répète un très grand nombre de fois une expérience aléatoire, la fréquence d’apparition d’une issue devient proche d’un nombre qui est la probabilité de cette issue.

{{% details title="Exemple" closed="true" %}}
On a simulé \(3\,000\) lancers d’un dé équilibré à \(6\) faces et suivi la fréquence d’apparition du \(6\) au fil des lancers. Après \(10\) lancers, la fréquence vaut \(0{,}3\) ; après \(100\) lancers, \(0{,}2\) ; après \(3\,000\) lancers, environ \(0{,}167\). Elle se stabilise autour de \(\dfrac{1}{6}\), la probabilité d’obtenir \(6\).

![](/images/image449.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Lorsqu’on ne sait pas calculer la probabilité d’une issue (dé truqué, punaise qui tombe sur la pointe…), on peut l’**estimer** par sa fréquence observée sur un grand nombre d’expériences.

> [!NOTE] **Exercice résolu**
>
> Une roue est partagée en secteurs : un secteur bleu (probabilité \(0{,}45\)), un secteur rouge (probabilité \(0{,}3\)) et un secteur vert.
> 1. Quelle est la probabilité de tomber sur le vert ?
> 2. Les issues sont-elles équiprobables ?

{{% details title="Solution commentée" closed="true" %}}
1. La somme des probabilités vaut \(1\) : \(P(\text{vert}) = 1 - 0{,}45 - 0{,}3 = 0{,}25\).
2. Non : les trois probabilités ne sont pas égales (sinon elles vaudraient toutes \(\dfrac{1}{3}\)).
{{% /details %}}
