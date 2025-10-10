---
title: 'Définition et propriétés algébriques'
weight: 1
cascade:
  type: docs
---

## La fonction exponentielle

> [!TIP] **Propriété et définition**  
> Il existe une fonction \( f \) et une seule, définie et dérivable sur \( \mathbb{R} \), telle que :  
> - pour tout réel \( x \), \( f'(x) = f(x) \) et \( f(0) = 1 \).  
> Cette fonction est appelée **fonction exponentielle** et notée \( \exp : x \mapsto \exp(x) \).


## Propriétés algébriques

> [!TIP] **Théorème (relation fonctionnelle)**  
> Pour tous réels \( x \) et \( y \),  
> \[
\exp(x + y) = \exp(x) \times \exp(y).
\]

> [!IMPORTANT] **Remarque**  
> Cette formule permet de transformer une somme en produit et réciproquement.

> [!TIP] **Propriété**  
> Pour tous réels \( x \) et \( y \), on a :  
> \[
\exp(-x) = \frac{1}{\exp(x)} \quad \text{et} \quad \exp(x - y) = \frac{\exp(x)}{\exp(y)}.
\]


## Lien avec les suites géométriques

> [!TIP] **Propriété**  
> Soit \( a \) un réel et \((u_n)\) la suite de terme général \( u_n = \exp(na) \), où \( n \) est un entier naturel.  
> - La suite \((u_n)\) est une **suite géométrique** de premier terme \( u_0 = 1 \) et de raison \( \exp(a) \).  
> - Pour tout entier \( n \) et tout réel \( a \), \( \exp(na) = (\exp(a))^n \).


## Notation \( e^x \)

> [!TIP] **Définition et notation**  
> Le nombre \( \exp(1) \) est noté \( e \).  
> Une valeur approchée au millième de ce nombre est \( e \approx 2{,}718 \).

> [!IMPORTANT] **Remarque**  
> D’après la propriété précédente avec \( a = 1 \), pour tout entier \( n \),  
> \[
\exp(n) = (\exp(1))^n = e^n.
\]

> [!TIP] **Notation**  
> Par extension, pour tout réel \( x \), on note :  
> \[
\exp(x) = e^x.
\]


## Exercice résolu : Utiliser la dérivée de la fonction exponentielle

> [!NOTE] **Exercice résolu**  
> Pour chacune des fonctions suivantes définies sur \( \mathbb{R} \), déterminer l’expression de sa fonction dérivée.  
> 1. \( f(x) = 5\exp(x) + x \)  
> 2. \( g(x) = (3x - 1)\exp(x) \)

{{% details title="Solution commentée" closed="true" %}}
1. \( f'(x) = 5\exp(x) + 1 \)  
2. \( g'(x) = 3\exp(x) + (3x - 1)\exp(x) = (3x + 2)\exp(x) \)
{{% /details %}}


## Exercice résolu : Transformer une expression

> [!NOTE] **Exercice résolu**  
> On donne les ordres de grandeur suivants : \( \exp(2) \approx 7 \), \( \exp(3) \approx 20 \), \( \exp(4) \approx 55 \).  
> En déduire les ordres de grandeur de \( \exp(5) \), \( \exp(-3) \) et \( \exp(1) \).

{{% details title="Solution commentée" closed="true" %}}
\[
\exp(5) = \exp(2 + 3) = \exp(2)\times\exp(3) \approx 7\times20 = 140
\]  
\[
\exp(-3) = \frac{1}{\exp(3)} \approx \frac{1}{20} = 0{,}05
\]  
\[
\exp(1) = \frac{\exp(4)}{\exp(3)} \approx \frac{55}{20} = 2{,}75
\]
{{% /details %}}


## Exercice résolu : Utiliser les propriétés algébriques de la fonction exponentielle

> [!NOTE] **Exercice résolu**  
> Utiliser les propriétés algébriques de la fonction exponentielle pour simplifier les expressions suivantes :  
> \( A = \exp(x + 3) \times \exp(x - 1) \)  
> \( B = (\exp(x))^2 \times \exp(3x) \)  
> \( C = \dfrac{\exp(x - 1)}{\exp(x + 2)} \)

{{% details title="Solution commentée" closed="true" %}}
\[
A = \exp(x + 3 + x - 1) = \exp(2x + 2)
\]  
\[
B = \exp(2x + 3x) = \exp(5x)
\]  
\[
C = \exp[(x - 1) - (x + 2)] = \exp(-3) = \frac{1}{\exp(3)}
\]
{{% /details %}}


## Exercice résolu : Identifier une suite géométrique

> [!NOTE] **Exercice résolu**  
> Soit la suite \((u_n)\) définie pour tout entier naturel \( n \) par \( u_n = 10 \times e^{3n} \).  
> 1. Calculer \( u_0 \).  
> 2. Montrer que \((u_n)\) est une suite géométrique et préciser son premier terme et sa raison.  
> 3. En utilisant \( e^3 \approx 20 \), justifier que la suite est croissante et déterminer à partir de quel rang \( u_n > 10^6 \).

{{% details title="Solution commentée" closed="true" %}}
1. \( u_0 = 10 \times e^{3\times0} = 10 \times 1 = 10 \)  
2. \( u_{n+1} = 10 \times e^{3(n+1)} = e^3 \times u_n \).  
   Donc \((u_n)\) est une **suite géométrique** de raison \( q = e^3 \) et de premier terme \( u_0 = 10 \).  
3. \( e^3 \approx 20 > 1 \), donc la suite est **strictement croissante**.  
   On cherche \( n \) tel que \( 10\times20^n > 10^6 \), soit \( 20^n > 10^5 \).  
   On trouve \( n = 4 \), donc \( u_n \) dépasse le million à partir du rang \( n = 4 \).
{{% /details %}}