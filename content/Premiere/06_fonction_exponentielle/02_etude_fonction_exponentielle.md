---
title: 'Étude de la fonction exponentielle'
weight: 2
cascade:
  type: docs
---

## Signe et variation

> [!TIP] **Propriété**  
> Pour tout réel \( x \), \( e^x > 0 \).  
> La fonction exponentielle est strictement positive.
> ![](/images/image98.png)

> [!TIP] **Propriété**  
> La fonction exponentielle est dérivable sur \( \mathbb{R} \) et \(\exp'(x) = \exp(x)\).  
> Elle est strictement croissante sur \( \mathbb{R} \).
> ![](/images/image99.png)

> [!TIP] **Propriété**  
> Pour tous réels \( a \) et \( b \), on a :  
> \[
e^a = e^b \iff a = b \quad \text{et} \quad e^a \le e^b \iff a \le b.
\]


## Propriétés algébriques

> [!TIP] **Propriétés**  
> - \( e^0 = 1 \) et \( e^1 = e \).  
> - Pour tous réels \( x \) et \( y \), on a :  
>   \[
e^x \times e^{-x} = 1,\quad e^{x+y} = e^x \times e^y,\quad e^{x-y} = \frac{e^x}{e^y}.
\]  
> - Pour tout entier naturel \( n \), \( e^{nx} = (e^x)^n. \)


## Fonctions définies par \( f(t) = e^{kt} \) et \( g(t) = e^{-kt} \)

> [!NOTE] **Vocabulaire**  
> De façon générale, les fonctions définies sur \( \mathbb{R} \) par les expressions \( f(t) = e^{kt} \) ou \( g(t) = e^{-kt} \),  
> où \( k \) est un réel strictement positif, sont appelées **fonctions exponentielles**.

> [!TIP] **Propriété**  
> Soient \( k \in \mathbb{R} \) et \( f, g \) définies sur \( \mathbb{R} \) par \( f(t) = e^{kt} \) et \( g(t) = e^{-kt} \).  
> Alors :  
> \[
f'(t) = k e^{kt} \quad \text{et} \quad g'(t) = -k e^{-kt}.
\]

> [!TIP] **Propriété**  
> Si \( k > 0 \) :  
> - \( f(t) = e^{kt} \) est **strictement croissante** sur \( \mathbb{R} \).  
> ![](/images/image100.png)
> - \( g(t) = e^{-kt} \) est **strictement décroissante** sur \( \mathbb{R} \).
> ![](/images/image101.png)


## Exercice résolu : Étudier une fonction avec une exponentielle

> [!NOTE] **Exercice résolu**  
> Soit \( f(x) = e^{-x} - x \), définie sur \( \mathbb{R} \).  
> - Dresser son tableau de variation.

{{% details title="Solution commentée" closed="true" %}}
On calcule \( f'(x) = -e^{-x} - 1 \).  
On étudie le signe de \( f'(x) = e^{-x} - 1 \).  
\[
f'(x) > 0 \iff e^{-x} > 1 \iff e^x < 1 \iff x < 0.
\]
Ainsi, \( f \) est décroissante sur \( ]-\infty, 0[ \) et croissante sur \( ]0, +\infty[ \).

![](/images/image102.png)
{{% /details %}}


## Exercice résolu : Résoudre une équation ou une inéquation

> [!NOTE] **Exercice résolu**  
> Résoudre les équations et inéquations suivantes :  
> 1. \( e^{2x+1} = 1 \)  
> 2. \( e^{3x-1} = e^{x+2} \)  
> 3. \( e^{2x+1} \le 1 \)

{{% details title="Solution commentée" closed="true" %}}
1. \( e^{2x+1} = 1 \iff 2x + 1 = 0 \iff x = -\tfrac{1}{2} \)  
   \( S = \{-\tfrac{1}{2}\} \)

2. \( e^{3x-1} = e^{x+2} \iff 3x - 1 = x + 2 \iff x = \tfrac{3}{2} \)  
   \( S = \{\tfrac{3}{2}\} \)

3. \( e^{2x+1} \le 1 \iff 2x + 1 \le 0 \iff x \le -\tfrac{1}{2} \)  
   \( S = ]-\infty ; -\tfrac{1}{2}] \)
{{% /details %}}


## Exercice résolu : Étudier une fonction de la forme \( f(t) = e^{-kt} \)

> [!NOTE] **Exercice résolu**  
> Un condensateur de capacité \( C \) est branché aux bornes d’un conducteur ohmique de résistance \( R \).  
> La tension aux bornes du condensateur en fonction du temps (en secondes) est donnée par  
> \[
u_c(t) = E \times e^{-\frac{t}{\tau}}, \quad \text{où} \quad \tau = R \times C.
\]  
> 1. Montrer que la tension \( u_c \) est une fonction décroissante.  
> 2. Déterminer graphiquement le temps pour lequel \( u_c(t) < \frac{E}{2} \).

{{% details title="Solution commentée" closed="true" %}}
1. On a \( \tau = R \times C = 10^4 \times 10^{-3} = 10 \).  
   Donc \( u_c(t) = 2e^{-0,1t} \) et \( u_c'(t) = -0,2 e^{-0,1t} < 0 \).  
   Ainsi, \( u_c(t) \) est **décroissante**.

2. Par lecture graphique ou calcul, la tension devient inférieure à \( 1 \,V \) (soit la moitié de \( E \)) au bout d’environ **7 secondes**.

![](/images/image103.png)
{{% /details %}}