---
title: 'Calculer une moyenne'
weight: 1
cascade:
  type: docs
---

## Effectifs et fréquences

> [!TIP] **Définitions**
>
> Dans une série de données :
> - l’**effectif** d’une valeur est le nombre de fois où cette valeur apparaît dans la série ;
> - l’**effectif total** est la somme des effectifs de chaque valeur ;
> - la **fréquence** d’une valeur est le quotient de son effectif par l’effectif total :
> \[
\text{fréquence d’une valeur} = \frac{\text{effectif de la valeur}}{\text{effectif total}}.
\]

{{% details title="Exemple" closed="true" %}}
On a demandé aux \(20\) élèves d’un club combien de livres ils ont lus pendant les vacances.

| Nombre de livres | \(0\) | \(1\) | \(2\) | \(3\) | \(4\) | Total |
|---|---|---|---|---|---|---|
| Effectif | \(3\) | \(6\) | \(5\) | \(4\) | \(2\) | \(20\) |
| Fréquence | \(0{,}15\) | \(0{,}3\) | \(0{,}25\) | \(0{,}2\) | \(0{,}1\) | \(1\) |

L’effectif de la valeur « \(2\) » est \(5\) : cinq élèves ont lu deux livres. Sa fréquence est \(\frac{5}{20} = 0{,}25 = 25\,\%\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Les fréquences sont comprises entre \(0\) et \(1\).
> - Les fréquences sont proportionnelles aux effectifs.
> - La somme de toutes les fréquences est égale à \(1\).

## Moyenne

> [!TIP] **Définition**
>
> La **moyenne** d’une série de données numériques est égale au quotient de la somme des données par l’effectif total :
> \[
\text{moyenne} = \frac{\text{somme des données}}{\text{effectif total}}.
\]

{{% details title="Exemple" closed="true" %}}
Dans l’exemple, la somme des données est \(0 \times 3 + 1 \times 6 + 2 \times 5 + 3 \times 4 + 4 \times 2 = 0 + 6 + 10 + 12 + 8 = 36\). La moyenne est \(\frac{36}{20} = 1{,}8\) livre par élève.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La moyenne d’une série de données est toujours comprise entre la plus petite et la plus grande valeur de la série. Elle n’est pas forcément l’une des valeurs de la série.

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Voici les notes de Tom ce trimestre : \(12\) ; \(15\) ; \(9\) ; \(14\) ; \(10\). Calculer sa moyenne. Quelle note devrait-il obtenir au prochain contrôle pour avoir \(13\) de moyenne sur les six notes ?

{{% details title="Solution commentée" closed="true" %}}
Somme : \(12 + 15 + 9 + 14 + 10 = 60\) ; moyenne : \(60 \div 5 = 12\).

Pour avoir \(13\) de moyenne sur six notes, la somme doit valoir \(13 \times 6 = 78\). Il lui faudrait donc \(78 - 60 = 18\).
{{% /details %}}
