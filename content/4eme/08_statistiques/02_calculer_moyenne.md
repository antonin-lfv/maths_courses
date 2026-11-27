---
title: 'Calculer une moyenne'
weight: 2
cascade:
  type: docs
---

## Effectifs et fréquences

> [!TIP] **Définitions**
>
> Dans une série de données :
> - l’**effectif** d’une donnée est le nombre de fois où cette donnée apparaît ;
> - l’**effectif total** est la somme des effectifs ;
> - la **fréquence** d’une donnée est le quotient de son effectif par l’effectif total.

> [!TIP] **Propriétés**
>
> - Une fréquence peut être donnée sous forme de fraction, de nombre décimal ou de pourcentage ; c’est toujours un nombre compris entre \(0\) et \(1\).
> - Les fréquences sont proportionnelles aux effectifs.
> - La somme de toutes les fréquences est égale à \(1\).

{{% details title="Exemple" closed="true" %}}
Dans le tournoi de football (page précédente), l’effectif total est \(30\) matchs. La fréquence de la valeur « \(1\) but » est \({\dfrac{9}{30} = 0{,}3 = 30\,\%}\).
{{% /details %}}

## Moyenne pondérée

> [!TIP] **Définition**
>
> La **moyenne pondérée** d’une série de données numériques est égale à la somme des produits de chaque donnée par son effectif, divisée par l’effectif total :
> \[
\text{moyenne pondérée} = \dfrac{\text{somme des produits des données par leurs effectifs}}{\text{effectif total}}.
\]

{{% details title="Exemple" closed="true" %}}
Nombre moyen de buts par match :
\[
\begin{aligned}
&\dfrac{0 \times 6 + 1 \times 9 + 2 \times 7 + 3 \times 4 + 4 \times 3 + 5 \times 1}{30} \\[0.3em]
&= \dfrac{0 + 9 + 14 + 12 + 12 + 5}{30} = \dfrac{52}{30} \approx 1{,}7.
\end{aligned}
\]
En moyenne, il y a eu environ \(1{,}7\) but par match.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On peut aussi pondérer par des coefficients : une note de \(14\) coefficient \(2\) et une note de \(11\) coefficient \(1\) donnent une moyenne de \({\dfrac{14 \times 2 + 11 \times 1}{3} = \dfrac{39}{3} = 13}\).

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Voici les temps de trajet (en minutes) des élèves d’une classe :
>
> | Temps (min) | \(5\) | \(10\) | \(15\) | \(20\) | \(30\) |
> |---|---|---|---|---|---|
> | Effectif | \(4\) | \(8\) | \(6\) | \(5\) | \(2\) |
>
> Calculer le temps moyen de trajet.

{{% details title="Solution commentée" closed="true" %}}
Effectif total : \(25\). Somme des produits : \({20 + 80 + 90 + 100 + 60 = 350}\). Moyenne : \({\dfrac{350}{25} = 14}\) min.
{{% /details %}}
