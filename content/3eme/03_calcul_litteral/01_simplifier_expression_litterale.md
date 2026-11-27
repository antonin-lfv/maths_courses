---
title: 'Simplifier une expression littérale'
weight: 1
cascade:
  type: docs
---

## Écritures simplifiées

> [!TIP] **Convention**
>
> Dans une expression littérale, on peut supprimer le signe \({\times}\) lorsqu’il est placé devant une lettre ou une parenthèse.

{{% details title="Exemples" closed="true" %}}
- \({5 \times a = 5a}\) ; \({x \times y = xy}\) ; \({4 \times (x + 1) = 4(x + 1)}\).
- \({2 \times x \times (-3) \times y = -6xy}\) ; \({a \times a \times 7 = 7a^2}\).
- Attention : \({3 \times 5}\) ne s’écrit pas \(35\) ; le signe \({\times}\) ne se supprime pas entre deux nombres.
{{% /details %}}

## Supprimer des parenthèses

> [!TIP] **Propriété**
>
> Soit \(a\), \(b\) et \(c\) des nombres quelconques. On a
> \[
a - (b + c) = a - b - c.
\]
> Plus généralement, des parenthèses précédées d’un signe \({-}\) peuvent être supprimées à condition de changer le signe de chaque terme qu’elles contiennent.

{{% details title="Exemples" closed="true" %}}
- \({9 - (4x + 2) = 9 - 4x - 2 = -4x + 7}\).
- \({3y - (5 - y) = 3y - 5 + y = 4y - 5}\).
- \(-2x - (-x^2 + 6x) = -2x + x^2 - 6x = x^2 - 8x\).
{{% /details %}}

## Égalité de deux expressions

> [!NOTE] **Méthode - Prouver ou réfuter une égalité**
>
> - Pour **démontrer** que deux expressions littérales sont égales pour tout nombre \(x\), on transforme l’écriture de l’une pour obtenir l’écriture de l’autre (par un calcul littéral valable pour tout \(x\)).
> - Pour **démontrer** que deux expressions ne sont **pas** égales pour tout \(x\), il suffit de trouver **une** valeur de \(x\) pour laquelle elles donnent des résultats différents : c’est un **contre-exemple**.

{{% details title="Exemple 1" closed="true" %}}
L’égalité \({6 - (2x - 5) + 3x = x + 11}\) est-elle vraie pour tout \(x\) ?

\(6 - (2x - 5) + 3x = 6 - 2x + 5 + 3x = x + 11\). L’égalité est vraie pour tout nombre \(x\).
{{% /details %}}

{{% details title="Exemple 2" closed="true" %}}
L’égalité \({x^2 + 1 = 2x + 1}\) est-elle vraie pour tout \(x\) ?

Pour \({x = 3}\) : \({x^2 + 1 = 10}\) et \({2x + 1 = 7}\). Les résultats sont différents : l’égalité n’est pas vraie pour tout \(x\).

(Pour \({x = 0}\) ou \({x = 2}\), les deux membres sont égaux : tester quelques valeurs ne suffit donc jamais à prouver une égalité.)
{{% /details %}}

## Nature d’une expression

> [!TIP] **Définitions**
>
> - Le résultat d’une addition est une **somme** ; celui d’une soustraction est une **différence**. Les nombres qui interviennent dans une somme ou une différence sont les **termes**.
> - Le résultat d’une multiplication est un **produit** ; les nombres multipliés sont les **facteurs**. Le résultat d’une division est un **quotient**.
> - La **nature** d’une expression comportant plusieurs opérations est déterminée par l’opération à effectuer **en dernier**.

{{% details title="Exemple" closed="true" %}}
- \({5(x - 2)}\) : on calcule d’abord la parenthèse, puis on multiplie par \(5\). C’est un **produit** de facteurs \(5\) et \({x - 2}\).
- \({5x - 2}\) : on multiplie d’abord, puis on soustrait. C’est une **différence**.
- \({(x + 1)^2 - 4}\) est une différence ; \({(x + 3)(x - 3)}\) est un produit.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> On considère \({A = 7x - (3 - 2x) - (x + 4)}\).
> 1. Réduire \(A\).
> 2. Quelle est la nature de l’expression obtenue ?

{{% details title="Solution commentée" closed="true" %}}
1. On supprime les parenthèses précédées d’un signe \({-}\) en changeant les signes : \(A = 7x - 3 + 2x - x - 4 = (7 + 2 - 1)x + (-3 - 4) = 8x - 7\).
2. Dans \({8x - 7}\), la dernière opération est la soustraction : c’est une différence.
{{% /details %}}
