---
title: 'Factorisation d’un trinôme et recherche du 0'
weight: 2
cascade:
  type: docs
---

## Factorisation

> [!TIP] **Définition**  
> Soit \( f \) une fonction polynôme du second degré, définie sur \(\mathbb{R}\) par  
> \( f(x) = ax^2 + bx + c \), avec \( a \neq 0 \).  
> On appelle **discriminant** de \( f \) le réel, noté \(\Delta\), défini par  
> \(\Delta = b^2 - 4ac\).

{{% details title="Exemples" closed="true" %}}
\( f(x) = 3x^2 + x - 2 \)  
\( f \) a pour discriminant \(\Delta = 1^2 - 4 \times 3 \times (-2) = 1 + 24 = 25\).
{{% /details %}}

> [!TIP] **Théorème**  
> Soit \( f(x) = ax^2 + bx + c \), \( a \neq 0 \), un trinôme du second degré.  
> - Si \(\Delta > 0\), alors \( f(x) = a(x - x_1)(x - x_2) \), où  
>   \( x_1 = \frac{-b + \sqrt{\Delta}}{2a} \) et \( x_2 = \frac{-b - \sqrt{\Delta}}{2a} \).  
> - Si \(\Delta = 0\), alors \( f(x) = a(x - x_0)^2 \), où \( x_0 = \frac{-b}{2a} \).  
> - Si \(\Delta < 0\), alors \( f(x) \) ne peut pas s’écrire comme le produit de deux polynômes du 1er degré.


## Résolution de l’équation \( ax^2 + bx + c = 0 \) avec \( a \neq 0 \)

> [!TIP] **Théorème et définition**  
> Une **équation du second degré** est une équation de la forme \( ax^2 + bx + c = 0 \), où \( a, b, c \) sont des réels et \( a \neq 0 \).  
> - Si \(\Delta > 0\), alors l’équation admet deux solutions réelles distinctes :  
>   \( x_1 = \frac{-b + \sqrt{\Delta}}{2a} \), \( x_2 = \frac{-b - \sqrt{\Delta}}{2a} \).  
> - Si \(\Delta = 0\), alors l’équation admet une unique solution réelle \( x_0 = \frac{-b}{2a} \).  
> - Si \(\Delta < 0\), alors l’équation n’admet pas de solution réelle.

> [!IMPORTANT] **Remarque**  
> Les solutions de l’équation \( ax^2 + bx + c = 0 \), si elles existent, sont appelées les **racines du trinôme** \( ax^2 + bx + c \).


## Somme et produit des racines

> [!TIP] **Propriété**  
> Soient \( x_1 \) et \( x_2 \) les racines d’un polynôme du second degré \( ax^2 + bx + c \), avec \( a \neq 0 \).  
> On a :  
> \[
x_1 + x_2 = \frac{-b}{a}, \quad x_1 \times x_2 = \frac{c}{a}.
\]

{{% details title="Exemples" closed="true" %}}
Le polynôme du second degré \( P(x) = -x^2 + 2x + 3 \) a pour discriminant  
\(\Delta = 2^2 - 4 \times (-1) \times 3 = 16\).  
\( P(x) \) admet donc deux racines réelles \( x_1 \) et \( x_2 \).  

On a alors :  
\( x_1 + x_2 = \frac{-2}{-1} = 2 \) et \( x_1 x_2 = \frac{3}{-1} = -3 \).
{{% /details %}}


## Exercice résolu : Déterminer les solutions d’une équation du second degré

> [!NOTE] **Exercice résolu**  
> Résoudre les équations suivantes :  
> 1. \( x^2 - 3x + 1 = 0 \)  
> 2. \( x^2 + x + 1 = 0 \)  
> 3. \( 0,3x^2 - 3x + 7,5 = 0 \)

{{% details title="Solution commentée" closed="true" %}}
1. On calcule le discriminant \(\Delta\). On a \( a = 1, b = -3, c = 1\).  
\(\Delta = b^2 - 4ac = (-3)^2 - 4 \times 1 \times 1 = 9 - 4 = 5\).  
\(\Delta > 0\), donc l’équation admet deux solutions réelles distinctes :  
\[
x_1 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{3 + \sqrt{5}}{2}, \quad
x_2 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{3 - \sqrt{5}}{2}.
\]

2. On calcule \(\Delta\). On a \( a = 1, b = 1, c = 1 \).  
\(\Delta = 1^2 - 4 \times 1 \times 1 = -3 < 0\).  
L’équation n’admet pas de solution réelle.

3. On calcule \(\Delta\). On a \( a = 0,3, b = -3, c = 7,5 \).  
\(\Delta = (-3)^2 - 4 \times 0,3 \times 7,5 = 9 - 9 = 0\).  
\(\Delta = 0\), donc l’équation admet une unique solution réelle :  
\[
x_0 = \frac{-b}{2a} = \frac{3}{0,6} = 5.
\]
{{% /details %}}


## Exercice résolu : Factoriser un trinôme du second degré

> [!NOTE] **Exercice résolu**  
> Déterminer les racines éventuelles et en déduire, si possible, une expression factorisée des trinômes du second degré suivants :  
> 1. \( f(x) = 3x^2 - 2x + 2 \)  
> 2. \( g(x) = -2x^2 + 5x + 3 \)  
> 3. \( h(x) = 18x^2 - 12x + 2 \)

{{% details title="Solution commentée" closed="true" %}}
1. \(\Delta = b^2 - 4ac = (-2)^2 - 4 \times 3 \times 2 = 4 - 24 = -20 < 0\).  
Donc \( f(x) \) ne peut pas être factorisé.

2. \(\Delta = 5^2 - 4 \times (-2) \times 3 = 25 + 24 = 49 > 0\).  
Donc \( g(x) \) peut être factorisé sous la forme \( a(x - x_1)(x - x_2) \).  
\( x_1 = \frac{-5 + 7}{-4} = -\frac{1}{2}, \quad x_2 = \frac{-5 - 7}{-4} = 3 \).  
Donc :  
\[
g(x) = -2(x + \tfrac{1}{2})(x - 3).
\]

3. \(\Delta = (-12)^2 - 4 \times 18 \times 2 = 144 - 144 = 0\).  
Donc \( h(x) \) peut être factorisé sous la forme \( a(x - x_0)^2 \).  
\( x_0 = \frac{-b}{2a} = \frac{12}{36} = \tfrac{1}{3} \).  
Donc :  
\[
h(x) = 18(x - \tfrac{1}{3})^2.
\]
{{% /details %}}


## Exercice résolu : Détecter les racines d’un polynôme du second degré

> [!NOTE] **Exercice résolu**  
> Soit le polynôme \( f(x) = 5x^2 - 4x - 1 \).  
> Trouver une racine dite « évidente » de \( f(x) \) et en déduire la deuxième racine.

{{% details title="Solution commentée" closed="true" %}}
\( 5 \times 1^2 - 4 \times 1 - 1 = 0 \), donc 1 est racine évidente de \( f(x) \).  
Soit \( x_2 \) la deuxième racine.  

On utilise :  
\( x_1 x_2 = \frac{c}{a} = \frac{-1}{5} \).  
Donc \( x_2 = \frac{-1}{5} \).
{{% /details %}}