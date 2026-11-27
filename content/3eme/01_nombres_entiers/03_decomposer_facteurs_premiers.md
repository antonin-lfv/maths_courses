---
title: 'Décomposer un entier en produit de facteurs premiers'
weight: 3
cascade:
  type: docs
---

## Décomposition en facteurs premiers

> [!TIP] **Propriété et définition**
>
> Soit \(n\) un entier supérieur ou égal à \(2\). Le nombre \(n\) peut s’écrire comme un produit de nombres premiers, c’est-à-dire sous la forme
> \[
n = p_1^{k_1} \times p_2^{k_2} \times \dots
\]
> où \(p_1, p_2, \dots\) sont des nombres premiers et \(k_1, k_2, \dots\) des entiers naturels non nuls. Cette écriture s’appelle la **décomposition en facteurs premiers** de \(n\).

> [!TIP] **Propriété**
>
> Pour un entier donné, il n’existe qu’une seule décomposition en produit de facteurs premiers, si l’on ne tient pas compte de l’ordre des facteurs.

## Obtenir la décomposition

> [!NOTE] **Méthode — Décomposer un entier**
>
> On divise le nombre par le plus petit nombre premier qui le divise, puis on recommence avec le quotient obtenu, jusqu’à obtenir un quotient égal à \(1\). Les diviseurs successifs sont les facteurs premiers.

{{% details title="Exemple" closed="true" %}}
Décomposition de \(252\) :
\[
252 = 2 \times 126 = 2 \times 2 \times 63 = 2 \times 2 \times 3 \times 21 = 2 \times 2 \times 3 \times 3 \times 7.
\]
Donc \(252 = 2^2 \times 3^2 \times 7\).

De même, \(330 = 2 \times 165 = 2 \times 3 \times 55 = 2 \times 3 \times 5 \times 11\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Certaines calculatrices donnent directement la décomposition en facteurs premiers d’un entier.
> - La décomposition en facteurs premiers permet de simplifier une fraction : on « barre » les facteurs communs au numérateur et au dénominateur.

{{% details title="Exemple" closed="true" %}}
Avec les décompositions précédentes :
\[
\frac{252}{330} = \frac{2 \times 2 \times 3 \times 3 \times 7}{2 \times 3 \times 5 \times 11} = \frac{2 \times 3 \times 7}{5 \times 11} = \frac{42}{55}.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> 1. Décomposer \(180\) et \(126\) en produits de facteurs premiers.
> 2. En déduire le plus grand diviseur commun à \(180\) et \(126\).
> 3. Simplifier la fraction \(\dfrac{126}{180}\).

{{% details title="Solution commentée" closed="true" %}}
1. \(180 = 2 \times 90 = 2 \times 2 \times 45 = 2 \times 2 \times 3 \times 15 = 2 \times 2 \times 3 \times 3 \times 5\), soit \(180 = 2^2 \times 3^2 \times 5\).
   \(126 = 2 \times 63 = 2 \times 3 \times 21 = 2 \times 3 \times 3 \times 7\), soit \(126 = 2 \times 3^2 \times 7\).
2. Les facteurs communs sont \(2\) (une fois) et \(3\) (deux fois) : le plus grand diviseur commun est \(2 \times 3^2 = 18\).
3. \(\dfrac{126}{180} = \dfrac{18 \times 7}{18 \times 10} = \dfrac{7}{10}\).
{{% /details %}}
