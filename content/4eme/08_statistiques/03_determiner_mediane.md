---
title: 'Déterminer une médiane'
weight: 3
cascade:
  type: docs
---

## Médiane

> [!TIP] **Définition**
>
> Dans une série ordonnée de données numériques, on appelle **médiane** un nombre qui partage cette série en deux séries de même effectif.

> [!NOTE] **Méthode — Déterminer une médiane**
>
> - On range les données de la série par ordre croissant.
> - On cherche un nombre qui partage la série en deux séries de même effectif :
>   - si l’effectif est **impair**, la médiane est la donnée « du milieu » ;
>   - si l’effectif est **pair**, on prend en général pour médiane la moyenne des deux données centrales.

{{% details title="Exemple" closed="true" %}}
- Série d’effectif impair (\(7\) données) : \(3\) ; \(8\) ; \(9\) ; \(\mathbf{12}\) ; \(14\) ; \(15\) ; \(20\). La médiane est \(12\) : il y a autant de données inférieures ou égales à \(12\) que de données supérieures ou égales.
- Série d’effectif pair (\(6\) données) : \(4\) ; \(6\) ; \(\mathbf{9}\) ; \(\mathbf{11}\) ; \(17\) ; \(18\). La médiane est \(\frac{9 + 11}{2} = 10\).
{{% /details %}}

> [!NOTE] **Méthode — Médiane d’une série donnée par un tableau d’effectifs**
>
> On repère, grâce aux effectifs cumulés, la position de la ou des données centrales.

{{% details title="Exemple" closed="true" %}}
Tournoi de football : \(30\) matchs, effectif pair. Les données centrales sont la 15e et la 16e. Les \(6\) premiers matchs ont \(0\) but, les \(9\) suivants (du 7e au 15e) ont \(1\) but, puis du 16e au 22e, \(2\) buts. La 15e donnée vaut \(1\) et la 16e vaut \(2\) : la médiane est \(\frac{1 + 2}{2} = 1{,}5\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - La médiane ne dépend pas des valeurs extrêmes de la série : si la plus grande donnée de la première série ci-dessus était \(200\) au lieu de \(20\), la médiane resterait \(12\), alors que la moyenne changerait beaucoup.
> - Calculer une médiane nécessite de trier les données, ce qui peut être long quand la série est grande : on utilise alors un tableur (fonction MEDIANE) ou une calculatrice.

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Voici les masses (en kg) de \(10\) sacs de pommes : \(5{,}2\) ; \(4{,}8\) ; \(5{,}5\) ; \(5{,}0\) ; \(4{,}9\) ; \(5{,}3\) ; \(5{,}1\) ; \(4{,}7\) ; \(5{,}4\) ; \(5{,}0\). Déterminer la médiane et interpréter.

{{% details title="Solution commentée" closed="true" %}}
Série ordonnée : \(4{,}7\) ; \(4{,}8\) ; \(4{,}9\) ; \(5{,}0\) ; \(\mathbf{5{,}0}\) ; \(\mathbf{5{,}1}\) ; \(5{,}2\) ; \(5{,}3\) ; \(5{,}4\) ; \(5{,}5\). Effectif pair : médiane \(\frac{5{,}0 + 5{,}1}{2} = 5{,}05\) kg. La moitié des sacs pèse moins de \(5{,}05\) kg, l’autre moitié plus.
{{% /details %}}
