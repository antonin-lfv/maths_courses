---
title: 'Sommes et transformations de variables aléatoires'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, les variables aléatoires sont définies sur un même univers fini et prennent un nombre fini de valeurs.

## Loi d’un couple, somme de deux variables aléatoires

> [!TIP] **Définitions**
>
> - Pour deux variables aléatoires \(X\) et \(Y\), la **loi du couple** \((X\,;\,Y)\) est définie, pour tous réels \(k\) et \(\ell\), par \(P\big((X = k) \cap (Y = \ell)\big)\).
> - Deux variables aléatoires \(X\) et \(Y\) sont **indépendantes** si, pour tous réels \(k\) et \(\ell\), les événements \(\{X = k\}\) et \(\{Y = \ell\}\) sont indépendants.

> [!TIP] **Propriétés**
>
> - Si \(X\) et \(Y\) sont indépendantes, alors pour tous réels \(k\) et \(\ell\) : \(P\big((X = k) \cap (Y = \ell)\big) = P(X = k) \times P(Y = \ell)\).
> - La loi de la variable aléatoire \(X + Y\) s’obtient à partir de la loi du couple : pour tout réel \(s\),
> \[
P(X + Y = s) = \sum_{k + \ell = s} P\big((X = k) \cap (Y = \ell)\big),
\]
>   la somme portant sur tous les couples \((k\,;\,\ell)\) de valeurs prises par \(X\) et \(Y\) tels que \(k + \ell = s\).

{{% details title="Exemple" closed="true" %}}
On fait tourner une roue équilibrée à trois secteurs numérotés 1, 2, 3 (résultat \(X\)), puis on lance une pièce qui donne 1 ou 2 points avec la même probabilité (résultat \(Y\)). \(X\) et \(Y\) sont indépendantes, et chaque couple a pour probabilité \(\frac{1}{3} \times \frac{1}{2} = \frac{1}{6}\). On lit les valeurs de \(S = X + Y\) dans un tableau à double entrée :

| \(X \backslash Y\) | 1 | 2 |
|---|---|---|
| **1** | 2 | 3 |
| **2** | 3 | 4 |
| **3** | 4 | 5 |

| \(s\) | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| \(P(S = s)\) | \(\frac{1}{6}\) | \(\frac{2}{6}\) | \(\frac{2}{6}\) | \(\frac{1}{6}\) |
{{% /details %}}

## Échantillon et loi binomiale

> [!TIP] **Définition**
>
> Soit \(n \geq 1\) un entier. Un **échantillon de taille \(n\)** d’une loi de probabilité est une liste \((X_1, X_2, \dots, X_n)\) de \(n\) variables aléatoires **indépendantes** suivant toutes cette loi.

> [!TIP] **Propriété (admise)**
>
> Si \((B_1, B_2, \dots, B_n)\) est un échantillon de taille \(n\) de la loi de Bernoulli de paramètre \(p\), alors la variable aléatoire \(S = B_1 + B_2 + \dots + B_n\) suit la loi binomiale \(\mathcal{B}(n\,;\,p)\).

> [!IMPORTANT] **Remarque**
>
> \(B_i\) vaut 1 si la \(i\)-ème épreuve est un succès et 0 sinon : la somme \(S\) compte donc le nombre de succès.

> [!TIP] **Propriété**
>
> Si \(X_1\) suit la loi \(\mathcal{B}(n_1\,;\,p)\), \(X_2\) suit la loi \(\mathcal{B}(n_2\,;\,p)\) et si \(X_1\) et \(X_2\) sont indépendantes, alors \(X_1 + X_2\) suit la loi \(\mathcal{B}(n_1 + n_2\,;\,p)\).

{{% details title="Exemple" closed="true" %}}
Deux machines produisent des pièces avec le même taux de défaut de 2 %, indépendamment. Sur 300 pièces de la première, le nombre de défectueuses suit \(\mathcal{B}(300\,;\,0{,}02)\) ; sur 200 pièces de la seconde, il suit \(\mathcal{B}(200\,;\,0{,}02)\). Le nombre total de pièces défectueuses suit \(\mathcal{B}(500\,;\,0{,}02)\).
{{% /details %}}

## Espérance et variance d’une somme

> [!TIP] **Propriétés**
>
> Pour toutes variables aléatoires \(X\) et \(Y\) et tout réel \(b\) :
> - \(E(X + Y) = E(X) + E(Y)\) ;
> - \(E(X + b) = E(X) + b\).

> [!TIP] **Propriétés**
>
> Pour toutes variables aléatoires \(X\) et \(Y\) **indépendantes** et tout réel \(b\) :
> - \(V(X + Y) = V(X) + V(Y)\) ;
> - \(V(X + b) = V(X)\).

> [!IMPORTANT] **Remarque**
>
> L’additivité de l’espérance est toujours vraie ; celle de la variance nécessite l’indépendance.

{{% details title="Exemple" closed="true" %}}
On lance un dé équilibré à 4 faces (résultat \(Q\)) et un dé équilibré à 8 faces (résultat \(H\)), indépendamment.
- \(E(Q) = \frac{1 + 2 + 3 + 4}{4} = 2{,}5\) et \(E(H) = \frac{1 + \dots + 8}{8} = 4{,}5\), donc \(E(Q + H) = 7\).
- \(V(Q) = \frac{1 + 4 + 9 + 16}{4} - 2{,}5^2 = 1{,}25\) et \(V(H) = \frac{1 + 4 + \dots + 64}{8} - 4{,}5^2 = 25{,}5 - 20{,}25 = 5{,}25\) ; par indépendance, \(V(Q + H) = 6{,}5\).
{{% /details %}}

## Application à la loi binomiale

> [!TIP] **Propriétés**
>
> Si \(X\) suit la loi binomiale \(\mathcal{B}(n\,;\,p)\), alors \(E(X) = np\), \(V(X) = np(1 - p)\) et \(\sigma(X) = \sqrt{np(1 - p)}\).

En effet, \(X\) a la même loi que la somme \(B_1 + \dots + B_n\) d’un échantillon de la loi de Bernoulli de paramètre \(p\), pour laquelle \(E(B_i) = p\) et \(V(B_i) = p(1 - p)\) : on additionne \(n\) fois.

## Produit par un réel

> [!TIP] **Propriétés**
>
> Pour toute variable aléatoire \(X\) et tous réels \(a\) et \(b\) :
> - \(E(aX + b) = aE(X) + b\) ;
> - \(V(aX + b) = a^2 V(X)\) ;
> - \(\sigma(aX + b) = |a|\,\sigma(X)\).

{{% details title="Exemple" closed="true" %}}
À un jeu, on gagne 5 € par succès sur 10 parties indépendantes (probabilité de succès 0,4 à chaque partie), mais la participation coûte 20 €. Le nombre de succès \(X\) suit \(\mathcal{B}(10\,;\,0{,}4)\), avec \(E(X) = 4\) et \(V(X) = 2{,}4\). Le gain net est \(G = 5X - 20\) :
\(E(G) = 5 \times 4 - 20 = 0\) (jeu équitable), \(V(G) = 25 \times 2{,}4 = 60\) et \(\sigma(G) = \sqrt{60} \approx 7{,}75\) €.
{{% /details %}}

## Simuler des variables aléatoires avec Python

On peut simuler une variable aléatoire, un échantillon, puis estimer une probabilité ou une espérance par une fréquence ou une moyenne sur un grand nombre de simulations.

```python
from random import random

def bernoulli(p):
    """Renvoie 1 avec la probabilité p, 0 sinon."""
    return 1 if random() < p else 0

def somme_echantillon(n, p):
    """Somme d'un échantillon de taille n de la loi de Bernoulli de paramètre p."""
    return sum(bernoulli(p) for _ in range(n))

def estimations(n, p, nb_simul=10000):
    valeurs = [somme_echantillon(n, p) for _ in range(nb_simul)]
    moyenne = sum(valeurs) / nb_simul                      # estime E(S) = np
    freq_3 = valeurs.count(3) / nb_simul                   # estime P(S = 3)
    return moyenne, freq_3

print(estimations(10, 0.4))   # environ (4.0, 0.215)
```

## Étudier une somme de variables aléatoires

> [!NOTE] **Méthode 1 — Déterminer la loi et l’espérance d’une somme**
>
> \(X\) et \(Y\) sont deux variables aléatoires indépendantes. \(X\) prend les valeurs 0, 1, 2 avec les probabilités 0,5 ; 0,3 ; 0,2, et \(Y\) suit la loi de Bernoulli de paramètre 0,4.
> 1. Déterminer la loi de \(S = X + Y\).
> 2. Calculer \(E(S)\) de deux façons.

{{% details title="Solution commentée" closed="true" %}}
**1.** \(S\) prend les valeurs 0, 1, 2, 3. Par indépendance :
- \(P(S = 0) = P(X = 0)P(Y = 0) = 0{,}5 \times 0{,}6 = 0{,}30\) ;
- \(P(S = 1) = P(X = 0)P(Y = 1) + P(X = 1)P(Y = 0) = 0{,}20 + 0{,}18 = 0{,}38\) ;
- \(P(S = 2) = P(X = 1)P(Y = 1) + P(X = 2)P(Y = 0) = 0{,}12 + 0{,}12 = 0{,}24\) ;
- \(P(S = 3) = P(X = 2)P(Y = 1) = 0{,}08\).

La somme vaut bien 1.

**2.** Avec la loi : \(E(S) = 0{,}38 + 2 \times 0{,}24 + 3 \times 0{,}08 = 1{,}10\).  
Avec la linéarité : \(E(X) = 0{,}3 + 0{,}4 = 0{,}7\) et \(E(Y) = 0{,}4\), d’où \(E(S) = 1{,}1\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Calculer les indicateurs d’une combinaison linéaire**
>
> \(X\) et \(Y\) sont indépendantes, avec \(E(X) = 3\), \(V(X) = 2\), \(E(Y) = -1\) et \(V(Y) = 0{,}5\). Calculer l’espérance et la variance de \(Z = 2X - 3\) et de \(T = X + 4Y\).

{{% details title="Solution commentée" closed="true" %}}
- \(E(Z) = 2 \times 3 - 3 = 3\) et \(V(Z) = 2^2 \times 2 = 8\).
- \(E(T) = E(X) + 4E(Y) = 3 - 4 = -1\). Par indépendance de \(X\) et \(4Y\) : \(V(T) = V(X) + 4^2V(Y) = 2 + 16 \times 0{,}5 = 10\).
{{% /details %}}
