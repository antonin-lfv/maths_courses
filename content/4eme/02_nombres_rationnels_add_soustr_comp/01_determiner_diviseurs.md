---
title: 'Déterminer les diviseurs d’un nombre entier'
weight: 1
cascade:
  type: docs
---

## Division euclidienne, multiples et diviseurs

> [!TIP] **Définition**
>
> \(a\) et \(b\) sont deux entiers naturels (\({b \neq 0}\)). Effectuer la **division euclidienne** de \(a\) par \(b\), c’est déterminer les deux entiers naturels \(q\) et \(r\) tels que :
> \[
a = b \times q + r \qquad \text{avec} \qquad r < b.
\]
> \(a\) s’appelle le **dividende**, \(b\) le **diviseur**, \(q\) le **quotient** et \(r\) le **reste**.

{{% details title="Exemple" closed="true" %}}
Division euclidienne de \(487\) par \(15\) : \({487 = 15 \times 32 + 7}\), avec \({7 < 15}\). Le quotient est \(32\) et le reste \(7\).
{{% /details %}}

> [!TIP] **Définitions**
>
> \(a\) et \(b\) sont deux entiers naturels (\({b \neq 0}\)). Lorsque la division euclidienne de \(a\) par \(b\) donne un reste nul, on a \({a = b \times q}\), où \(q\) est un entier naturel. On dit que \(a\) est un **multiple** de \(b\), que \(b\) est un **diviseur** de \(a\) et que \(a\) est **divisible** par \(b\).

> [!TIP] **Propriétés - Critères de divisibilité**
>
> - Si un nombre entier a pour chiffre des unités \(0\), \(2\), \(4\), \(6\) ou \(8\), alors il est divisible par \(2\).
> - Si la somme des chiffres d’un nombre entier est divisible par \(3\), alors ce nombre est divisible par \(3\).
> - Si un nombre entier a pour chiffre des unités \(0\) ou \(5\), alors il est divisible par \(5\).
> - Si la somme des chiffres d’un nombre entier est divisible par \(9\), alors ce nombre est divisible par \(9\).
> - Si un nombre entier a pour chiffre des unités \(0\), alors il est divisible par \(10\).

## Nombres premiers

> [!TIP] **Définition**
>
> Un **nombre premier** est un entier naturel qui admet exactement deux diviseurs : \(1\) et lui-même.

{{% details title="Exemple" closed="true" %}}
- \(17\) est premier : il n’a que deux diviseurs, \(1\) et \(17\).
- \(39\) n’est pas premier : \({39 = 3 \times 13}\), il admet \(1\), \(3\), \(13\) et \(39\) comme diviseurs.
- Les nombres premiers inférieurs à \(30\) sont : \(2\), \(3\), \(5\), \(7\), \(11\), \(13\), \(17\), \(19\), \(23\), \(29\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - \(0\) n’est pas premier, car il possède une infinité de diviseurs (tous les nombres entiers non nuls).
> - \(1\) n’est pas premier, car il possède un seul diviseur : lui-même.
> - \(2\) est le seul nombre premier pair, car tous les nombres pairs sont divisibles par \(2\).

> [!TIP] **Propriété**
>
> Tout entier naturel non premier et différent de \(0\) et \(1\) peut s’écrire comme un produit de facteurs premiers.

{{% details title="Exemple" closed="true" %}}
\(150 = 2 \times 75 = 2 \times 3 \times 25 = 2 \times 3 \times 5 \times 5\). On a décomposé \(150\) en produit de facteurs premiers.
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> 1. Le nombre \(91\) est-il premier ?
> 2. Décomposer \(264\) en produit de facteurs premiers.

{{% details title="Solution commentée" closed="true" %}}
1. \(91\) n’est divisible ni par \(2\), ni par \(3\), ni par \(5\), mais \({91 = 7 \times 13}\) : il n’est pas premier.
2. On divise successivement par les plus petits nombres premiers possibles : \(264 = 2 \times 132 = 2 \times 2 \times 66 = 2 \times 2 \times 2 \times 33 = 2 \times 2 \times 2 \times 3 \times 11\).
{{% /details %}}
