---
title: 'Définition et propriétés algébriques'
weight: 1
cascade:
  type: docs
---

## La fonction exponentielle

> [!TIP] **Propriété et définition**  
> Il existe une unique fonction \( f \), définie et dérivable sur \( \mathbb{R} \), telle que :  
> \[
f' = f \quad \text{et} \quad f(0) = 1.
\]
> Cette fonction est appelée **fonction exponentielle** ; on la note \( \exp : x \mapsto \exp(x) \).

> [!IMPORTANT] **Remarque**  
> Par définition, \(\exp(0) = 1\) et, pour tout réel \(x\), \(\exp'(x) = \exp(x)\) : la fonction exponentielle est égale à sa propre dérivée.

## Propriétés algébriques

> [!TIP] **Théorème (relation fonctionnelle)**  
> Pour tous réels \( x \) et \( y \),  
> \[
\exp(x + y) = \exp(x) \times \exp(y).
\]

> [!IMPORTANT] **Remarque**  
> Cette relation permet de passer d’une somme (dans l’exponentielle) à un produit, et inversement.

> [!TIP] **Propriété**  
> Pour tous réels \( x \) et \( y \) :  
> \[
\exp(-x) = \frac{1}{\exp(x)} \quad \text{et} \quad \exp(x - y) = \frac{\exp(x)}{\exp(y)}.
\]

## Lien avec les suites géométriques

> [!TIP] **Propriété**  
> Soit \( a \) un réel, et \((u_n)\) la suite définie pour tout entier naturel \( n \) par \( u_n = \exp(na) \).  
> - La suite \((u_n)\) est **géométrique**, de premier terme \( u_0 = 1 \) et de raison \( \exp(a) \).  
> - Par conséquent, pour tout entier naturel \( n \) et tout réel \( a \), \( \exp(na) = (\exp(a))^n \).

## Notation \( e^x \)

> [!TIP] **Définition et notation**  
> On note \( e \) le nombre \( \exp(1) \).  
> Sa valeur approchée au millième est \( e \approx 2{,}718 \).

> [!IMPORTANT] **Remarque**  
> En appliquant la propriété précédente avec \( a = 1 \), on obtient, pour tout entier naturel \( n \) :  
> \[
\exp(n) = (\exp(1))^n = e^n.
\]

> [!TIP] **Notation**  
> On généralise cette écriture à tous les réels : pour tout réel \( x \), on note  
> \[
\exp(x) = e^x.
\]

Avec cette notation, les propriétés algébriques prennent la même forme que les règles de calcul sur les puissances : \(e^{x+y} = e^x e^y\), \(e^{-x} = \dfrac{1}{e^x}\), \(e^{x-y} = \dfrac{e^x}{e^y}\) et \((e^x)^n = e^{nx}\).

## Exercice résolu : Utiliser la dérivée de la fonction exponentielle

> [!NOTE] **Exercice résolu**  
> Calculer la dérivée de chacune des fonctions suivantes, définies sur \( \mathbb{R} \).  
> 1. \( f(x) = -2\exp(x) + x^2 \)  
> 2. \( g(x) = (2 - x)\exp(x) \)

{{% details title="Solution commentée" closed="true" %}}
1. On dérive terme à terme, en utilisant \(\exp' = \exp\) :  
\( f'(x) = -2\exp(x) + 2x \).  
2. \(g\) est un produit \(uv\) avec \(u(x) = 2 - x\) et \(v(x) = \exp(x)\), donc \(u'(x) = -1\) et \(v'(x) = \exp(x)\) :  
\( g'(x) = -\exp(x) + (2 - x)\exp(x) = (1 - x)\exp(x) \).
{{% /details %}}

## Exercice résolu : Transformer une expression

> [!NOTE] **Exercice résolu**  
> On donne les valeurs approchées suivantes : \( \exp(1) \approx 2{,}7 \), \( \exp(2) \approx 7{,}4 \), \( \exp(5) \approx 148 \).  
> En déduire des valeurs approchées de \( \exp(3) \), \( \exp(-2) \) et \( \exp(7) \).

{{% details title="Solution commentée" closed="true" %}}
On écrit chaque nombre à l’aide des exponentielles connues :
\[
\exp(3) = \exp(5 - 2) = \frac{\exp(5)}{\exp(2)} \approx \frac{148}{7{,}4} = 20
\]  
\[
\exp(-2) = \frac{1}{\exp(2)} \approx \frac{1}{7{,}4} \approx 0{,}135
\]  
\[
\exp(7) = \exp(5 + 2) = \exp(5)\times\exp(2) \approx 148 \times 7{,}4 \approx 1\,095
\]
{{% /details %}}

## Exercice résolu : Utiliser les propriétés algébriques de la fonction exponentielle

> [!NOTE] **Exercice résolu**  
> À l’aide des propriétés algébriques de la fonction exponentielle, simplifier les expressions suivantes, où \(x\) est un réel :  
> \( A = \exp(2x - 1) \times \exp(3 - x) \)  
> \( B = (\exp(x))^3 \times \exp(-x) \)  
> \( C = \dfrac{\exp(2x + 1)}{\exp(2x - 4)} \)

{{% details title="Solution commentée" closed="true" %}}
\[
A = \exp\big((2x - 1) + (3 - x)\big) = \exp(x + 2)
\]  
\[
B = \exp(3x) \times \exp(-x) = \exp(3x - x) = \exp(2x)
\]  
\[
C = \exp\big((2x + 1) - (2x - 4)\big) = \exp(5)
\]
{{% /details %}}

## Exercice résolu : Identifier une suite géométrique

> [!NOTE] **Exercice résolu**  
> On considère la suite \((u_n)\) définie pour tout entier naturel \( n \) par \( u_n = 3e^{-2n} \).  
> 1. Calculer \( u_0 \).  
> 2. Démontrer que \((u_n)\) est géométrique ; préciser son premier terme et sa raison.  
> 3. Sachant que \( e^2 \approx 7{,}4 \), justifier que la suite est décroissante, puis déterminer à partir de quel rang on a \( u_n < 0{,}01 \).

{{% details title="Solution commentée" closed="true" %}}
1. \( u_0 = 3 \times e^{0} = 3 \times 1 = 3 \).  
2. Pour tout entier naturel \(n\) : \( u_{n+1} = 3e^{-2(n+1)} = 3e^{-2n} \times e^{-2} = e^{-2} \times u_n \).  
   La suite \((u_n)\) est donc **géométrique**, de premier terme \( u_0 = 3 \) et de raison \( q = e^{-2} \).  
3. On a \( q = e^{-2} = \dfrac{1}{e^2} \approx \dfrac{1}{7{,}4} \), donc \( 0 < q < 1 \) ; comme \( u_0 = 3 > 0 \), la suite est **strictement décroissante**.  
   On cherche \( n \) tel que \( u_n = \dfrac{3}{(e^2)^n} < 0{,}01 \), c’est-à-dire \( (e^2)^n > 300 \).  
   Avec \( e^2 \approx 7{,}4 \) : \( 7{,}4^2 \approx 55 \) et \( 7{,}4^3 \approx 405 \).  
   Donc \( u_n < 0{,}01 \) à partir du rang \( n = 3 \) (en effet \( u_2 \approx 0{,}055 \) et \( u_3 \approx 0{,}0074 \)).
{{% /details %}}
