---
title: 'Déterminer une médiane, calculer une étendue'
weight: 3
cascade:
  type: docs
---

## Médiane

> [!TIP] **Définition**
>
> On considère une série de données numériques **ordonnée**. On appelle **médiane** un nombre qui partage cette série en deux séries de même effectif : au moins la moitié des données sont inférieures ou égales à la médiane, et au moins la moitié lui sont supérieures ou égales.

> [!NOTE] **Méthode — Déterminer une médiane**
>
> 1. On range les données de la série par ordre croissant.
> 2. On cherche un nombre qui partage cette série en deux séries de même effectif :
>    - si l’effectif total \(N\) est **impair**, la médiane est la donnée de rang \(\dfrac{N + 1}{2}\) ;
>    - si \(N\) est **pair**, on prend par convention la moyenne des données de rangs \(\dfrac{N}{2}\) et \(\dfrac{N}{2} + 1\).

{{% details title="Exemple 1 — effectif impair" closed="true" %}}
Temps (en minutes) mis par \(7\) élèves pour venir au collège : \(18\) ; \(5\) ; \(12\) ; \(25\) ; \(9\) ; \(12\) ; \(30\).

Série ordonnée : \(5\) ; \(9\) ; \(12\) ; \(\mathbf{12}\) ; \(18\) ; \(25\) ; \(30\). L’effectif est \(7\) ; la médiane est la \(4^\text{e}\) donnée : \(12\) min. Il y a trois données de part et d’autre.
{{% /details %}}

{{% details title="Exemple 2 — effectif pair" closed="true" %}}
Nombre de livres lus en un an par \(8\) personnes, déjà ordonné : \(1\) ; \(3\) ; \(4\) ; \(\mathbf{6}\) ; \(\mathbf{9}\) ; \(10\) ; \(15\) ; \(22\).

L’effectif est \(8\) : tout nombre compris entre la \(4^\text{e}\) et la \(5^\text{e}\) donnée partage la série en deux groupes de \(4\). Par convention, on prend la médiane égale à \(\dfrac{6 + 9}{2} = 7{,}5\) livres.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La médiane ne dépend pas des valeurs extrêmes de la série. Dans l’exemple 2, si la personne qui a lu \(22\) livres en avait lu \(80\), la médiane serait toujours \(7{,}5\), alors que la moyenne augmenterait beaucoup.

## Étendue

> [!TIP] **Définition**
>
> L’**étendue** d’une série de données numériques est la différence entre la plus grande valeur et la plus petite valeur de la série.

{{% details title="Exemple" closed="true" %}}
Dans l’exemple 1, l’étendue est \(30 - 5 = 25\) min : il y a au plus \(25\) minutes d’écart entre les temps de trajet de ces élèves.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Voici les températures maximales (en °C) relevées pendant \(10\) jours dans une ville : \(21\) ; \(24\) ; \(19\) ; \(23\) ; \(26\) ; \(22\) ; \(20\) ; \(24\) ; \(27\) ; \(18\).
> Calculer la moyenne, la médiane et l’étendue de cette série.

{{% details title="Solution commentée" closed="true" %}}
- Moyenne : \(\dfrac{21 + 24 + 19 + 23 + 26 + 22 + 20 + 24 + 27 + 18}{10} = \dfrac{224}{10} = 22{,}4\) °C.
- Série ordonnée : \(18\) ; \(19\) ; \(20\) ; \(21\) ; \(\mathbf{22}\) ; \(\mathbf{23}\) ; \(24\) ; \(24\) ; \(26\) ; \(27\). Effectif pair (\(10\)) : médiane \(= \dfrac{22 + 23}{2} = 22{,}5\) °C.
- Étendue : \(27 - 18 = 9\) °C.
{{% /details %}}
