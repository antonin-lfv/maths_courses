---
title: 'Développer un produit'
weight: 2
cascade:
  type: docs
---

## Simple distributivité

> [!TIP] **Définition**
>
> **Développer**, c’est transformer un produit en une somme ou une différence.

> [!TIP] **Propriété**
>
> Soit \(k\), \(a\) et \(b\) des nombres.
> \[
k(a + b) = ka + kb \qquad \text{et} \qquad k(a - b) = ka - kb.
\]

{{% details title="Exemples" closed="true" %}}
- \(A = 6(3x + 2) = 6 \times 3x + 6 \times 2 = 18x + 12\).
- \(B = -4(5 - 2x) = (-4) \times 5 - (-4) \times 2x = -20 + 8x\).
- \(C = x(x - 7) = x^2 - 7x\).
{{% /details %}}

## Double distributivité

> [!TIP] **Propriété**
>
> Soit \(a\), \(b\), \(c\) et \(d\) des nombres.
> \[
(a + b)(c + d) = ac + ad + bc + bd.
\]

{{% details title="Exemple 1" closed="true" %}}
On développe \(D = (3x + 1)(x + 5)\) en multipliant chaque terme de la première parenthèse par chaque terme de la seconde :
\[
D = 3x \times x + 3x \times 5 + 1 \times x + 1 \times 5 = 3x^2 + 15x + x + 5 = 3x^2 + 16x + 5.
\]
{{% /details %}}

{{% details title="Exemple 2" closed="true" %}}
On développe \(E = (2x - 3)(x - 4)\). On peut écrire \(E = (2x + (-3))(x + (-4))\) :
\[
E = 2x \times x + 2x \times (-4) + (-3) \times x + (-3) \times (-4) = 2x^2 - 8x - 3x + 12 = 2x^2 - 11x + 12.
\]
Attention aux signes : \((-3) \times (-4) = +12\).
{{% /details %}}

## Une identité remarquable

> [!TIP] **Propriété**
>
> Soit \(a\) et \(b\) des nombres.
> \[
(a + b)(a - b) = a^2 - b^2.
\]

> [!IMPORTANT] **Remarque**
>
> Cette égalité, vraie quelles que soient les valeurs de \(a\) et de \(b\), est appelée une **identité remarquable**. Elle permet de développer rapidement un produit de la forme \((a + b)(a - b)\) ou \((a - b)(a + b)\). On la démontre avec la double distributivité : \((a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2\).

{{% details title="Exemples" closed="true" %}}
- \((x + 6)(x - 6) = x^2 - 6^2 = x^2 - 36\).
- \((5x - 2)(5x + 2) = (5x)^2 - 2^2 = 25x^2 - 4\).
- Calcul mental : \(103 \times 97 = (100 + 3)(100 - 3) = 10\,000 - 9 = 9\,991\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Développer et réduire \(F = (x + 2)(3x - 1) - (x - 5)(x + 5)\).

{{% details title="Solution commentée" closed="true" %}}
- Double distributivité : \((x + 2)(3x - 1) = 3x^2 - x + 6x - 2 = 3x^2 + 5x - 2\).
- Identité remarquable : \((x - 5)(x + 5) = x^2 - 25\).

Attention au signe \(-\) devant le second produit : on garde des parenthèses.
\[
F = 3x^2 + 5x - 2 - (x^2 - 25) = 3x^2 + 5x - 2 - x^2 + 25 = 2x^2 + 5x + 23.
\]
{{% /details %}}
