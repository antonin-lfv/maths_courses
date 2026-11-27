---
title: 'Enchaîner des opérations'
weight: 2
cascade:
  type: docs
---

## Priorités opératoires

> [!TIP] **Convention**
>
> Dans une expression sans parenthèses ne comportant que des additions et des soustractions (ou que des multiplications et des divisions), on effectue les calculs **de la gauche vers la droite**.

{{% details title="Exemple" closed="true" %}}
\(A = 20 - 7 + 3 = 13 + 3 = 16\) (et non \(20 - 10\)). \(B = 36 \div 4 \times 3 = 9 \times 3 = 27\).
{{% /details %}}

> [!TIP] **Convention**
>
> Dans une expression sans parenthèses, on effectue :
> - d’abord les **puissances** ;
> - puis les **multiplications et les divisions** ;
> - puis les **additions et les soustractions**.

{{% details title="Exemple" closed="true" %}}
- \(C = 5 + 4 \times 6 = 5 + 24 = 29\) : la multiplication est prioritaire sur l’addition.
- \(D = 3 \times 2^3 - 10 = 3 \times 8 - 10 = 24 - 10 = 14\).
{{% /details %}}

## Expressions avec parenthèses

> [!TIP] **Conventions**
>
> - Dans une expression avec parenthèses, on effectue d’abord les calculs entre parenthèses.
> - Quand il y a plusieurs niveaux de parenthèses, on commence par les plus intérieures.
> - À l’intérieur des parenthèses, on applique les priorités ci-dessus.

{{% details title="Exemple" closed="true" %}}
- \(E = 4 \times (7 + 3) = 4 \times 10 = 40\).
- \(F = 2 \times [15 - (4 + 6)] = 2 \times [15 - 10] = 2 \times 5 = 10\). Avec plusieurs niveaux, on peut utiliser des crochets.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Une expression qui figure au numérateur ou au dénominateur d’un quotient est considérée comme écrite entre parenthèses : \(\dfrac{12 + 8}{9 - 5} = (12 + 8) \div (9 - 5) = 20 \div 4 = 5\).

## Nature d’une expression

> [!TIP] **Définition**
>
> La **nature** d’une expression comportant plusieurs opérations est déterminée par l’opération à effectuer **en dernier**.

{{% details title="Exemple" closed="true" %}}
Dans \(7 + 2 \times 9\), on effectue la multiplication en premier et l’addition en dernier : c’est une **somme** (la somme de \(7\) et du produit de \(2\) par \(9\)). Dans \((7 + 2) \times 9\), c’est un **produit**.
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Calculer en détaillant : \(G = 18 - 3 \times 4 + 2\) ; \(H = (18 - 3) \times (4 + 2)\) ; \(K = 50 - 2 \times 3^2\). Donner la nature de \(G\) et de \(H\).

{{% details title="Solution commentée" closed="true" %}}
- \(G = 18 - 12 + 2 = 6 + 2 = 8\). La dernière opération est l’addition (de gauche à droite après la multiplication) : \(G\) est une somme.
- \(H = 15 \times 6 = 90\) : c’est un produit.
- \(K = 50 - 2 \times 9 = 50 - 18 = 32\).
{{% /details %}}
