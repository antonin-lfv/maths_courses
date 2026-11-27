---
title: 'Échantillon et simulation'
weight: 1
cascade:
  type: docs
---

## Échantillon

> [!TIP] **Définition**
>
> On considère une expérience aléatoire et un événement \(A\) de probabilité \(p\). Un **échantillon de taille \(n\)** est la liste des \(n\) résultats obtenus en répétant \(n\) fois cette expérience, de façon **identique et indépendante** (chaque répétition ne dépend pas des autres).
>
> La **fréquence** de \(A\) dans l’échantillon est \({f = \dfrac{\text{nombre de fois où } A \text{ est réalisé}}{n}}\).

{{% details title="Exemple" closed="true" %}}
On lance \(50\) fois un dé équilibré et on obtient \(11\) fois le \(6\). On a constitué un échantillon de taille \(50\), dans lequel la fréquence du \(6\) est \({f = \dfrac{11}{50} = 0{,}22}\), alors que la probabilité d’obtenir \(6\) est \({p = \dfrac{1}{6} \approx 0{,}167}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Lorsqu’on prélève des individus dans une population très grande (sondage), on assimile le prélèvement à des tirages avec remise : on parle encore d’échantillon de taille \(n\), et \(p\) est alors la proportion du caractère étudié dans la population.

## Simulation

> [!TIP] **Définition**
>
> **Simuler** une expérience aléatoire, c’est la remplacer par une expérience produite par un ordinateur ou une calculatrice, qui suit la même loi de probabilité. On utilise pour cela des générateurs de nombres **pseudo-aléatoires**.

| Instruction | Résultat |
|---|---|
| `random()` (Python, module `random`) | un réel au hasard dans \([0\,;\,1[\) |
| `randint(a, b)` (Python) | un entier au hasard entre \(a\) et \(b\) inclus |
| `=ALEA()` (tableur) | un réel au hasard dans \([0\,;\,1[\) |
| `=ALEA.ENTRE.BORNES(a;b)` (tableur) | un entier au hasard entre \(a\) et \(b\) inclus |

{{% details title="Exemple" closed="true" %}}
- `randint(1, 6)` simule le lancer d’un dé équilibré.
- `random() < 0.3` vaut `True` avec une probabilité \(0{,}3\) : cette instruction simule un événement de probabilité \(0{,}3\).
{{% /details %}}

## Fluctuation et loi des grands nombres

> [!TIP] **Propriété - Fluctuation d’échantillonnage**
>
> D’un échantillon à l’autre, la fréquence \(f\) d’un même événement varie : c’est la **fluctuation d’échantillonnage**.

> [!TIP] **Propriété - Loi des grands nombres (admise)**
>
> Lorsque la taille \(n\) de l’échantillon devient grande, la fréquence \(f\) de l’événement \(A\) se rapproche de sa probabilité \(p\).

Le graphique suivant représente la fréquence du \(6\) au cours d’une simulation de \(2\,000\) lancers d’un dé équilibré : les fluctuations sont fortes au début, puis la fréquence se stabilise autour de \(\dfrac{1}{6}\).

![](/images/image398.png)

> [!IMPORTANT] **Remarque**
>
> La loi des grands nombres justifie que l’on puisse **estimer** une probabilité inconnue par la fréquence observée sur un grand échantillon (par exemple, la probabilité qu’une punaise tombe pointe en l’air).

## Simuler avec Python

> [!NOTE] **Méthode - Simuler un échantillon et calculer une fréquence**
>
> Une machine produit des pièces dont \(8\,\%\) sont défectueuses. On prélève \(n\) pièces au hasard (assimilé à des tirages avec remise).
> 1. Écrire une fonction Python `frequence(n)` qui simule un échantillon de taille \(n\) et renvoie la fréquence des pièces défectueuses.
> 2. Que peut-on attendre de `frequence(20)` et de `frequence(10000)` ?

{{% details title="Solution commentée" closed="true" %}}
1. Chaque pièce est défectueuse avec la probabilité \(0{,}08\), ce que l’on simule par `random() < 0.08`. On compte les succès dans une boucle :

```python
from random import random

def frequence(n):
    defauts = 0
    for i in range(n):
        if random() < 0.08:
            defauts = defauts + 1
    return defauts / n
```

2. `frequence(20)` fluctue beaucoup d’un appel à l’autre (on peut obtenir \(0\), \(0{,}05\), \(0{,}15\)…), car l’échantillon est petit. `frequence(10000)` donne des valeurs très proches de \(0{,}08\), conformément à la loi des grands nombres.
{{% /details %}}
