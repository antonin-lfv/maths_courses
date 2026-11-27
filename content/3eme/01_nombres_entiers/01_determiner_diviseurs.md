---
title: 'Déterminer les diviseurs d’un nombre entier'
weight: 1
cascade:
  type: docs
---

## Division euclidienne

> [!TIP] **Définition**
>
> Un **entier naturel** est un nombre entier positif ou nul : \(0, 1, 2, 3, \dots\)

> [!TIP] **Définition**
>
> Soit \(a\) et \(b\) deux entiers naturels, avec \(b \neq 0\). Effectuer la **division euclidienne** de \(a\) par \(b\), c’est déterminer les deux entiers naturels \(q\) et \(r\) tels que
> \[
a = b \times q + r \qquad \text{avec} \qquad r < b.
\]
> \(q\) est le **quotient** et \(r\) le **reste** de la division euclidienne ; \(a\) est le **dividende** et \(b\) le **diviseur**.

{{% details title="Exemple" closed="true" %}}
Division euclidienne de \(47\) par \(6\) : \(6 \times 7 = 42\) et \(6 \times 8 = 48 > 47\), donc le quotient est \(7\) et le reste est \(47 - 42 = 5\).
\[
47 = 6 \times 7 + 5, \qquad \text{avec } 5 < 6.
\]
Attention : l’égalité \(47 = 6 \times 6 + 11\) est vraie, mais ce n’est pas la division euclidienne, car \(11 > 6\).
{{% /details %}}

## Multiples et diviseurs

> [!TIP] **Définitions**
>
> Soit \(a\) et \(b\) deux entiers naturels, avec \(b \neq 0\). Lorsque la division euclidienne de \(a\) par \(b\) a un reste nul, on a \(a = b \times q\). On dit alors que :
> - \(a\) est un **multiple** de \(b\) ;
> - \(b\) est un **diviseur** de \(a\) ;
> - \(a\) est **divisible** par \(b\).

{{% details title="Exemple" closed="true" %}}
\(91 = 7 \times 13\) : \(91\) est un multiple de \(7\) et de \(13\) ; \(7\) et \(13\) sont des diviseurs de \(91\) ; \(91\) est divisible par \(7\) et par \(13\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - On ne divise jamais par \(0\).
> - Tout entier naturel non nul est divisible par \(1\) et par lui-même.

## Critères de divisibilité

> [!TIP] **Propriétés**
>
> - Un nombre entier est divisible par \(2\) lorsque son chiffre des unités est \(0\), \(2\), \(4\), \(6\) ou \(8\).
> - Un nombre entier est divisible par \(3\) lorsque la somme de ses chiffres est divisible par \(3\).
> - Un nombre entier est divisible par \(5\) lorsque son chiffre des unités est \(0\) ou \(5\).
> - Un nombre entier est divisible par \(9\) lorsque la somme de ses chiffres est divisible par \(9\).
> - Un nombre entier est divisible par \(10\) lorsque son chiffre des unités est \(0\).

{{% details title="Exemple" closed="true" %}}
Pour \(2\,610\) : le chiffre des unités est \(0\), donc \(2\,610\) est divisible par \(2\), \(5\) et \(10\). La somme des chiffres est \(2 + 6 + 1 + 0 = 9\) : \(2\,610\) est aussi divisible par \(3\) et par \(9\).

Pour \(745\) : divisible par \(5\), mais pas par \(2\) ; \(7 + 4 + 5 = 16\) n’est divisible ni par \(3\) ni par \(9\).
{{% /details %}}

## Trouver tous les diviseurs

> [!NOTE] **Méthode — Lister les diviseurs d’un entier**
>
> On teste les entiers \(1, 2, 3, \dots\) dans l’ordre. Chaque fois qu’un entier \(d\) divise \(n\), on note la paire \(d\) et \(n \div d\). On s’arrête dès que \(d \times d\) dépasse \(n\) : tous les diviseurs ont alors été trouvés.

> [!NOTE] **Exercice résolu**
>
> Déterminer tous les diviseurs de \(84\).

{{% details title="Solution commentée" closed="true" %}}
On cherche les produits de deux entiers égaux à \(84\) :
\[
84 = 1 \times 84 = 2 \times 42 = 3 \times 28 = 4 \times 21 = 6 \times 14 = 7 \times 12.
\]
\(5\) ne divise pas \(84\) (chiffre des unités \(4\)), \(8\) non plus (\(84 = 8 \times 10 + 4\)), ni \(9\) (\(8 + 4 = 12\) n’est pas divisible par \(9\)). Comme \(10 \times 10 = 100 > 84\), on peut s’arrêter.

Les diviseurs de \(84\) sont : \(1\), \(2\), \(3\), \(4\), \(6\), \(7\), \(12\), \(14\), \(21\), \(28\), \(42\), \(84\).
{{% /details %}}
