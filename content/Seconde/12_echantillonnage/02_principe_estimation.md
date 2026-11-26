---
title: 'Principe de l’estimation'
weight: 2
cascade:
  type: docs
---

## Intervalle de fluctuation

> [!TIP] **Propriété (admise)**
>
> Soit un événement de probabilité \(p\) (ou un caractère de proportion \(p\) dans une population). Pour des échantillons de taille \(n\) suffisamment grande, la proportion des échantillons dont la fréquence \(f\) vérifie
> \[
|f - p| \leq \frac{1}{\sqrt{n}}, \qquad \text{c’est-à-dire} \qquad f \in \left[p - \frac{1}{\sqrt{n}}\,;\,p + \frac{1}{\sqrt{n}}\right],
\]
> est **au moins égale à 95 %** environ.

Sur la figure ci-dessous, on a simulé \(100\) échantillons de taille \(n = 100\) d’un événement de probabilité \(p = 0{,}3\). L’intervalle \(\left[0{,}3 - \frac{1}{\sqrt{100}}\,;\,0{,}3 + \frac{1}{\sqrt{100}}\right] = [0{,}2\,;\,0{,}4]\) est représenté en couleur : très peu de points en sortent (un seul ici).

![](/images/image399.png)

> [!IMPORTANT] **Remarque**
>
> Plus \(n\) est grand, plus l’intervalle est étroit : sa longueur \(\frac{2}{\sqrt{n}}\) est divisée par \(2\) quand la taille de l’échantillon est multipliée par \(4\).

> [!NOTE] **Méthode 1 — Vérifier la propriété par simulation**
>
> Écrire un programme Python qui simule \(N\) échantillons de taille \(n\) d’un événement de probabilité \(p\) et renvoie la proportion d’échantillons dont la fréquence vérifie \(|f - p| \leq \frac{1}{\sqrt{n}}\).

{{% details title="Solution commentée" closed="true" %}}
On réutilise une fonction qui calcule la fréquence dans un échantillon, puis on compte les échantillons « dans l’intervalle » :

```python
from random import random
from math import sqrt

def frequence(n, p):
    succes = 0
    for i in range(n):
        if random() < p:
            succes = succes + 1
    return succes / n

def proportion_dans_intervalle(N, n, p):
    compteur = 0
    for k in range(N):
        f = frequence(n, p)
        if abs(f - p) <= 1 / sqrt(n):
            compteur = compteur + 1
    return compteur / N
```

Par exemple, `proportion_dans_intervalle(1000, 100, 0.3)` renvoie des valeurs voisines de \(0{,}97\) à \(0{,}98\) : on retrouve bien « au moins \(95\,\%\) ».
{{% /details %}}

## Estimer une proportion inconnue

Dans la pratique, \(p\) est souvent **inconnue** (proportion d’électeurs favorables à un projet, proportion de pièces défectueuses…). On dispose d’un seul échantillon de taille \(n\), dans lequel on observe une fréquence \(f\).

> [!TIP] **Propriété (principe de l’estimation)**
>
> D’après la propriété précédente, dire que \(|f - p| \leq \frac{1}{\sqrt{n}}\) revient à dire que
> \[
p \in \left[f - \frac{1}{\sqrt{n}}\,;\,f + \frac{1}{\sqrt{n}}\right].
\]
> Cet intervalle contient la proportion inconnue \(p\) pour au moins \(95\,\%\) environ des échantillons de taille \(n\). On l’utilise pour **estimer** \(p\) à partir de \(f\), en acceptant un risque d’erreur d’environ \(5\,\%\).

> [!IMPORTANT] **Remarque**
>
> Ces résultats ne s’appliquent que si \(n\) est assez grand. En pratique, on les utilise lorsque \(n \geq 25\) et que \(p\) (ou \(f\)) n’est pas trop proche de \(0\) ou de \(1\).

## Prendre une décision, estimer

> [!NOTE] **Méthode 2 — Juger si un échantillon est conforme à un modèle**
>
> On lance \(400\) fois une pièce et on obtient \(228\) fois « Pile ». Peut-on penser que la pièce est équilibrée ?

{{% details title="Solution commentée" closed="true" %}}
Si la pièce est équilibrée, \(p = 0{,}5\). Avec \(n = 400\), \(\frac{1}{\sqrt{400}} = 0{,}05\) : au moins \(95\,\%\) des échantillons ont une fréquence dans \([0{,}45\,;\,0{,}55]\).

Ici \(f = \frac{228}{400} = 0{,}57\), en dehors de cet intervalle. Une telle fréquence est peu probable avec une pièce équilibrée : on peut douter de l’équilibre de la pièce, avec un risque de se tromper d’environ \(5\,\%\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Estimer une proportion et choisir la taille d’un échantillon**
>
> Dans un sondage réalisé auprès de \(625\) personnes choisies au hasard, \(350\) se déclarent favorables à la création d’une piste cyclable.
> 1. Donner un intervalle d’estimation de la proportion \(p\) de personnes favorables dans la population.
> 2. Combien de personnes faudrait-il interroger pour obtenir un intervalle de longueur au plus \(0{,}04\) ?

{{% details title="Solution commentée" closed="true" %}}
1. \(f = \frac{350}{625} = 0{,}56\) et \(\frac{1}{\sqrt{625}} = \frac{1}{25} = 0{,}04\). L’intervalle d’estimation est \([0{,}56 - 0{,}04\,;\,0{,}56 + 0{,}04] = [0{,}52\,;\,0{,}60]\). On peut estimer, avec un risque d’erreur d’environ \(5\,\%\), qu’entre \(52\,\%\) et \(60\,\%\) de la population est favorable.
2. La longueur de l’intervalle est \(\frac{2}{\sqrt{n}}\). On veut \(\frac{2}{\sqrt{n}} \leq 0{,}04 \iff \sqrt{n} \geq 50 \iff n \geq 2\,500\). Il faudrait interroger au moins \(2\,500\) personnes.
{{% /details %}}
