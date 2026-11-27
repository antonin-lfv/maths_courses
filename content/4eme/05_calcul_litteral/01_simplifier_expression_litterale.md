---
title: 'Simplifier une expression littérale'
weight: 1
cascade:
  type: docs
---

## Conventions d’écriture

> [!TIP] **Convention**
>
> Dans une expression littérale, on peut supprimer le signe \(\times\) lorsqu’il est placé devant une lettre ou une parenthèse.

{{% details title="Exemple" closed="true" %}}
\(-3 \times a = -3a\) ; \(x \times y = xy\) ; \(5 \times (2x - 1) = 5(2x - 1)\) ; \(-2 \times (t + 4) = -2(t + 4)\).
{{% /details %}}

## Supprimer des parenthèses

> [!TIP] **Propriété**
>
> \(a\), \(b\) et \(c\) désignent des nombres quelconques. On a :
> \[
a - (b - c) = a - b + c \qquad \text{et} \qquad a - (b + c) = a - b - c.
\]
> Quand on supprime des parenthèses précédées d’un signe \(-\), on change le signe de chacun des termes qu’elles contiennent.

{{% details title="Exemple" closed="true" %}}
- \(7 - (3x + 2) = 7 - 3x - 2 = -3x + 5\).
- \(4x - (x - 6) = 4x - x + 6 = 3x + 6\).
- \(y - (-y + 1) = y + y - 1 = 2y - 1\).

Quand on simplifie ainsi une expression, on dit qu’on la **réduit**.
{{% /details %}}

## Égalité de deux expressions

> [!NOTE] **Méthode — Démontrer une égalité ou la réfuter**
>
> - Pour démontrer que deux expressions littérales sont égales pour tout nombre \(x\), on transforme l’écriture de l’une pour obtenir l’écriture de l’autre.
> - Pour démontrer que deux expressions littérales ne sont pas égales pour tout nombre \(x\), il suffit de trouver une valeur de \(x\) pour laquelle les deux expressions ont des valeurs différentes.

{{% details title="Exemple" closed="true" %}}
- L’égalité \(5 - (2x - 3) + 4x = 2x + 8\) est-elle vraie pour tout nombre \(x\) ? \(5 - (2x - 3) + 4x = 5 - 2x + 3 + 4x = 2x + 8\). Oui.
- L’égalité \(3x + 4 = 7x\) est-elle vraie pour tout nombre \(x\) ? Pour \(x = 2\) : \(3 \times 2 + 4 = 10\) et \(7 \times 2 = 14\). Non (on ne peut pas remplacer \(x\) par quelques valeurs pour prouver qu’une égalité est vraie, mais une seule suffit pour prouver qu’elle est fausse).
{{% /details %}}

## Nature d’une expression

> [!TIP] **Définitions**
>
> - Le résultat d’une addition est une **somme**, celui d’une soustraction une **différence** ; les nombres qui interviennent sont des **termes**.
> - Le résultat d’une multiplication est un **produit** ; les nombres multipliés sont des **facteurs**. Le résultat d’une division est un **quotient**.
> - La **nature** d’une expression comportant plusieurs opérations est déterminée par l’opération à effectuer en dernier.

{{% details title="Exemple" closed="true" %}}
\(3(x + 5)\) est un **produit** (on calcule d’abord \(x + 5\), puis on multiplie par \(3\)). \(3x + 5\) est une **somme**.
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Réduire : \(A = 8 - (5 - 2x)\) ; \(B = 3a + 4 - (a + 7)\) ; \(C = -(x - 1) - (2 - 3x)\).

{{% details title="Solution commentée" closed="true" %}}
- \(A = 8 - 5 + 2x = 2x + 3\).
- \(B = 3a + 4 - a - 7 = 2a - 3\).
- \(C = -x + 1 - 2 + 3x = 2x - 1\).
{{% /details %}}
