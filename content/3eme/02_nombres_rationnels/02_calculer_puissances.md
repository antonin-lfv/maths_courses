---
title: 'Calculer avec des puissances'
weight: 2
cascade:
  type: docs
---

## Puissances d’un nombre relatif

> [!TIP] **Définition**
>
> Soit \(a\) un nombre relatif et \(n\) un nombre entier supérieur ou égal à \(2\).
> - Le produit de \(n\) facteurs égaux à \(a\) se note \(a^n\) et se lit « \(a\) exposant \(n\) » ; on dit que ce produit est une **puissance** de \(a\) :
> \[
a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ facteurs}}.
\]
> - Pour \(a \neq 0\), le nombre \(a^{-n}\) désigne l’**inverse** de \(a^n\) : \(a^{-n} = \dfrac{1}{a^n}\).

> [!IMPORTANT] **Remarque**
>
> Cas particuliers : par convention, \(a^1 = a\) et, si \(a \neq 0\), \(a^0 = 1\).

{{% details title="Exemples" closed="true" %}}
\[
(-2)^5 = (-2) \times (-2) \times (-2) \times (-2) \times (-2) = -32, \qquad 3^{-2} = \frac{1}{3^2} = \frac{1}{9}, \qquad 7^0 = 1.
\]
Attention : \(-2^4 = -(2^4) = -16\), alors que \((-2)^4 = 16\).
{{% /details %}}

> [!TIP] **Convention (priorités)**
>
> Dans une expression sans parenthèses comportant des puissances, on calcule d’abord les puissances, puis les multiplications et les divisions, enfin les additions et les soustractions.

{{% details title="Exemples" closed="true" %}}
- \(C = 5 + 2 \times 3^2 = 5 + 2 \times 9 = 5 + 18 = 23\).
- \(D = 4 - (1 + 2)^3 = 4 - 3^3 = 4 - 27 = -23\).
{{% /details %}}

## Puissances de 10

> [!TIP] **Propriété**
>
> Soit \(n\) un nombre entier strictement positif.
> \[
10^n = \underbrace{10 \times \dots \times 10}_{n \text{ facteurs}} = 1\underbrace{0\dots0}_{n \text{ zéros}} \qquad \text{et} \qquad 10^{-n} = \frac{1}{10^n} = 0{,}\underbrace{0\dots0}_{n - 1 \text{ zéros}}1.
\]

{{% details title="Exemples" closed="true" %}}
\(10^6 = 1\,000\,000\) (un million) ; \(10^{-3} = 0{,}001\) (un millième) ; \(10^{-7} = 0{,}000\,000\,1\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Pour des entiers relatifs \(m\) et \(n\) : \(10^m \times 10^n = 10^{m+n}\), \(\dfrac{10^m}{10^n} = 10^{m-n}\) et \((10^m)^n = 10^{m \times n}\).

## Écriture scientifique

> [!TIP] **Définition**
>
> L’**écriture scientifique** d’un nombre décimal positif est son écriture sous la forme \(a \times 10^n\), où :
> - \(a\) est un nombre décimal tel que \(1 \leq a < 10\) ;
> - \(n\) est un nombre entier relatif.

{{% details title="Exemples" closed="true" %}}
- \(46\,300\,000 = 4{,}63 \times 10^7\).
- \(0{,}000\,52 = 5{,}2 \times 10^{-4}\).
- \(37{,}5 \times 10^3\) n’est pas une écriture scientifique (\(37{,}5 \geq 10\)) ; l’écriture scientifique de ce nombre est \(3{,}75 \times 10^4\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> 1. Calculer \(E = 2^3 - 3 \times (-1)^5 + 4^0\).
> 2. Donner l’écriture scientifique de \(F = \dfrac{6 \times 10^{5} \times 4 \times 10^{-2}}{8 \times 10^{-3}}\).

{{% details title="Solution commentée" closed="true" %}}
1. \(2^3 = 8\), \((-1)^5 = -1\) et \(4^0 = 1\). Donc \(E = 8 - 3 \times (-1) + 1 = 8 + 3 + 1 = 12\).
2. On regroupe les nombres d’un côté, les puissances de \(10\) de l’autre :
\[
F = \frac{6 \times 4}{8} \times \frac{10^5 \times 10^{-2}}{10^{-3}} = 3 \times \frac{10^{3}}{10^{-3}} = 3 \times 10^{6}.
\]
{{% /details %}}
