---
title: 'Factorisation d’un trinôme et recherche du 0'
weight: 2
cascade:
  type: docs
---

## Factorisation

> [!TIP] **Définition**  
> Soit \( f \) la fonction polynôme du second degré définie sur \(\mathbb{R}\) par  
> \( f(x) = ax^2 + bx + c \), avec \( a \neq 0 \).  
> Le **discriminant** de \( f \) est le réel noté \(\Delta\) défini par  
> \(\Delta = b^2 - 4ac\).

{{% details title="Exemples" closed="true" %}}
\( f(x) = 2x^2 - 5x + 1 \)  
Ici \( a = 2, b = -5, c = 1 \), donc \(\Delta = (-5)^2 - 4 \times 2 \times 1 = 25 - 8 = 17\).
{{% /details %}}

> [!TIP] **Théorème**  
> Soit \( f(x) = ax^2 + bx + c \), avec \( a \neq 0 \), un trinôme du second degré de discriminant \(\Delta\).  
> - Si \(\Delta > 0\), alors \( f(x) = a(x - x_1)(x - x_2) \), avec  
>   \( x_1 = \dfrac{-b + \sqrt{\Delta}}{2a} \) et \( x_2 = \dfrac{-b - \sqrt{\Delta}}{2a} \).  
> - Si \(\Delta = 0\), alors \( f(x) = a(x - x_0)^2 \), avec \( x_0 = \dfrac{-b}{2a} \).  
> - Si \(\Delta < 0\), alors \( f(x) \) ne peut pas s’écrire comme un produit de deux polynômes du premier degré.

## Résolution de l’équation \( ax^2 + bx + c = 0 \) avec \( a \neq 0 \)

> [!TIP] **Théorème et définition**  
> On appelle **équation du second degré** toute équation de la forme \( ax^2 + bx + c = 0 \), où \( a, b, c \) sont des réels avec \( a \neq 0 \). On note \(\Delta = b^2 - 4ac\).  
> - Si \(\Delta > 0\), l’équation admet deux solutions réelles distinctes :  
>   \( x_1 = \dfrac{-b + \sqrt{\Delta}}{2a} \) et \( x_2 = \dfrac{-b - \sqrt{\Delta}}{2a} \).  
> - Si \(\Delta = 0\), l’équation admet une unique solution réelle : \( x_0 = \dfrac{-b}{2a} \).  
> - Si \(\Delta < 0\), l’équation n’admet aucune solution réelle.

> [!IMPORTANT] **Remarque**  
> Lorsqu’elles existent, les solutions de l’équation \( ax^2 + bx + c = 0 \) sont appelées **racines du trinôme** \( ax^2 + bx + c \).

## Somme et produit des racines

> [!TIP] **Propriété**  
> Si \( x_1 \) et \( x_2 \) sont les racines du polynôme du second degré \( ax^2 + bx + c \), avec \( a \neq 0 \), alors :  
> \[
x_1 + x_2 = \frac{-b}{a}, \quad x_1 \times x_2 = \frac{c}{a}.
\]

{{% details title="Exemples" closed="true" %}}
Le polynôme \( P(x) = 2x^2 - 6x - 8 \) a pour discriminant  
\(\Delta = (-6)^2 - 4 \times 2 \times (-8) = 36 + 64 = 100 > 0\).  
\( P(x) \) a donc deux racines réelles \( x_1 \) et \( x_2 \), et, sans les calculer :  
\( x_1 + x_2 = \dfrac{-(-6)}{2} = 3 \) et \( x_1 x_2 = \dfrac{-8}{2} = -4 \).  
(On peut vérifier que les racines sont 4 et \(-1\).)
{{% /details %}}

## Exercice résolu : Déterminer les solutions d’une équation du second degré

> [!NOTE] **Exercice résolu**  
> Résoudre dans \(\mathbb{R}\) les équations suivantes :  
> 1. \( x^2 + 5x + 2 = 0 \)  
> 2. \( 2x^2 - x + 3 = 0 \)  
> 3. \( 0,5x^2 + 2x + 2 = 0 \)

{{% details title="Solution commentée" closed="true" %}}
1. On calcule le discriminant, avec \( a = 1, b = 5, c = 2\) :  
\(\Delta = b^2 - 4ac = 5^2 - 4 \times 1 \times 2 = 25 - 8 = 17\).  
\(\Delta > 0\) : l’équation a deux solutions réelles distinctes,  
\[
x_1 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{-5 + \sqrt{17}}{2}, \quad
x_2 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{-5 - \sqrt{17}}{2}.
\]

2. Avec \( a = 2, b = -1, c = 3 \) :  
\(\Delta = (-1)^2 - 4 \times 2 \times 3 = 1 - 24 = -23 < 0\).  
L’équation n’a aucune solution réelle.

3. Avec \( a = 0,5, b = 2, c = 2 \) :  
\(\Delta = 2^2 - 4 \times 0,5 \times 2 = 4 - 4 = 0\).  
\(\Delta = 0\) : l’équation a une unique solution réelle,  
\[
x_0 = \frac{-b}{2a} = \frac{-2}{1} = -2.
\]
{{% /details %}}

## Exercice résolu : Factoriser un trinôme du second degré

> [!NOTE] **Exercice résolu**  
> Déterminer les racines éventuelles des trinômes suivants, puis en donner, si c’est possible, une forme factorisée :  
> 1. \( f(x) = 2x^2 + x + 4 \)  
> 2. \( g(x) = -3x^2 + 4x + 4 \)  
> 3. \( h(x) = 4x^2 + 12x + 9 \)

{{% details title="Solution commentée" closed="true" %}}
1. \(\Delta = b^2 - 4ac = 1^2 - 4 \times 2 \times 4 = 1 - 32 = -31 < 0\).  
\( f(x) \) n’a pas de racine réelle : il ne peut pas être factorisé.

2. \(\Delta = 4^2 - 4 \times (-3) \times 4 = 16 + 48 = 64 > 0\), et \(\sqrt{\Delta} = 8\).  
\( g(x) \) se factorise sous la forme \( a(x - x_1)(x - x_2) \), avec  
\( x_1 = \dfrac{-4 + 8}{-6} = -\dfrac{2}{3} \) et \( x_2 = \dfrac{-4 - 8}{-6} = 2 \).  
Donc :  
\[
g(x) = -3\left(x + \tfrac{2}{3}\right)(x - 2).
\]

3. \(\Delta = 12^2 - 4 \times 4 \times 9 = 144 - 144 = 0\).  
\( h(x) \) se factorise sous la forme \( a(x - x_0)^2 \), avec \( x_0 = \dfrac{-b}{2a} = \dfrac{-12}{8} = -\dfrac{3}{2} \).  
Donc :  
\[
h(x) = 4\left(x + \tfrac{3}{2}\right)^2.
\]
{{% /details %}}

## Exercice résolu : Détecter les racines d’un polynôme du second degré

> [!NOTE] **Exercice résolu**  
> On considère le polynôme \( f(x) = 3x^2 + 2x - 5 \).  
> Trouver une racine « évidente » de \( f(x) \), puis en déduire l’autre racine sans calculer \(\Delta\).

{{% details title="Solution commentée" closed="true" %}}
On teste des valeurs simples (0, 1, \(-1\), 2…) : \( f(1) = 3 + 2 - 5 = 0 \), donc \( x_1 = 1 \) est une racine évidente.  
Notons \( x_2 \) l’autre racine.  

D’après la propriété du produit des racines :  
\( x_1 x_2 = \dfrac{c}{a} = \dfrac{-5}{3} \), soit \( 1 \times x_2 = -\dfrac{5}{3} \).  
Donc \( x_2 = -\dfrac{5}{3} \).
{{% /details %}}
