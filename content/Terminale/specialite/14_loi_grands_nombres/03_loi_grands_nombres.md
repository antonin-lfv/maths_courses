---
title: 'Inégalité de concentration et loi des grands nombres'
weight: 3
cascade:
  type: docs
---

Dans cette page, \(X\) est une variable aléatoire, \((X_1, \dots, X_n)\) un échantillon de taille \(n\) de la loi de \(X\), et \(M_n = \dfrac{X_1 + \dots + X_n}{n}\) sa moyenne.

## Inégalité de concentration

> [!TIP] **Propriété (inégalité de concentration)**
>
> Pour tout réel \(\delta > 0\) :
> \[
P\big(|M_n - E(X)| \geq \delta\big) \leq \frac{V(X)}{n\delta^2}.
\]

> [!IMPORTANT] **Remarque**
>
> C’est l’inégalité de Bienaymé-Tchebychev appliquée à \(M_n\), avec \(E(M_n) = E(X)\) et \(V(M_n) = \frac{V(X)}{n}\). Pour un écart \(\delta\) fixé, la majoration diminue quand la taille \(n\) de l’échantillon augmente.

## Loi des grands nombres

> [!TIP] **Propriété (loi faible des grands nombres)**
>
> Pour tout réel \(\delta > 0\) :
> \[
\lim_{n \to +\infty} P\big(|M_n - E(X)| \geq \delta\big) = 0.
\]

> [!IMPORTANT] **Interprétation**
>
> Plus la taille \(n\) de l’échantillon est grande, plus la probabilité que la moyenne \(M_n\) s’écarte de l’espérance \(E(X)\) d’au moins \(\delta\) est proche de 0, aussi petit que soit \(\delta\) : la moyenne de l’échantillon se **concentre** autour de l’espérance.
> Dans le cas d’une loi de Bernoulli de paramètre \(p\), \(M_n\) est la fréquence des succès : la loi des grands nombres justifie que la fréquence observée sur un grand nombre de répétitions se rapproche de la probabilité \(p\).

{{% details title="Exemple" closed="true" %}}
On lance un dé équilibré (espérance 3,5) et l’on calcule la moyenne des résultats. Avec 5 000 simulations d’échantillons de taille 10, puis de taille 100, on observe que les moyennes sont beaucoup plus resserrées autour de 3,5 pour \(n = 100\).

![](/images/image319.png)

Une simulation en Python :

```python
from random import randint

def moyenne_lancers(n):
    return sum(randint(1, 6) for _ in range(n)) / n

def proportion_proches(n, delta, nb_echantillons=5000):
    """Proportion d'échantillons de taille n dont la moyenne est à moins de delta de 3,5."""
    ok = sum(1 for _ in range(nb_echantillons) if abs(moyenne_lancers(n) - 3.5) < delta)
    return ok / nb_echantillons

for n in (10, 100, 1000):
    print(n, proportion_proches(n, 0.2))   # la proportion se rapproche de 1 quand n grandit
```
{{% /details %}}

## Déterminer une taille d’échantillon

> [!NOTE] **Méthode 4 — Choisir la taille d’un échantillon**
>
> Dans une population, 20 % des personnes sont gauchères. On interroge \(n\) personnes au hasard (tirages assimilés à des tirages indépendants) et on note \(M_n\) la proportion de gauchers dans l’échantillon.
> 1. Justifier que \(E(M_n) = 0{,}2\) et \(V(M_n) = \dfrac{0{,}16}{n}\).
> 2. Déterminer une taille \(n\) d’échantillon assurant \(P\big(|M_n - 0{,}2| \geq 0{,}05\big) \leq 0{,}05\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(M_n\) est la moyenne d’un échantillon de taille \(n\) de la loi de Bernoulli de paramètre \(p = 0{,}2\), d’espérance 0,2 et de variance \(0{,}2 \times 0{,}8 = 0{,}16\). Donc \(E(M_n) = 0{,}2\) et \(V(M_n) = \frac{0{,}16}{n}\).

**2.** D’après l’inégalité de concentration avec \(\delta = 0{,}05\) :
\[
P\big(|M_n - 0{,}2| \geq 0{,}05\big) \leq \frac{0{,}16}{n \times 0{,}05^2} = \frac{64}{n}.
\]
Il suffit donc que \(\frac{64}{n} \leq 0{,}05\), soit \(n \geq 1\,280\). Avec 1 280 personnes interrogées, la proportion observée est à moins de 5 points de 20 % avec une probabilité d’au moins 95 %.
{{% /details %}}

> [!NOTE] **Méthode 5 — Minorer une probabilité de concentration**
>
> On lance 1 000 fois un dé équilibré et l’on note \(M\) la moyenne des résultats. On admet que la variance du résultat d’un lancer vaut \(\frac{35}{12}\). Minorer la probabilité que \(M\) soit strictement compris entre 3,3 et 3,7.

{{% details title="Solution commentée" closed="true" %}}
L’espérance d’un lancer est 3,5 et \(3{,}3 < M < 3{,}7 \iff |M - 3{,}5| < 0{,}2\). D’après l’inégalité de concentration :
\[
P\big(|M - 3{,}5| \geq 0{,}2\big) \leq \frac{35/12}{1\,000 \times 0{,}2^2} = \frac{35}{480} \approx 0{,}073.
\]
Donc \(P(3{,}3 < M < 3{,}7) \geq 1 - 0{,}073 \approx 0{,}927\).
{{% /details %}}
