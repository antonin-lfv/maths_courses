---
title: 'Signe d’un trinôme du second degré'
weight: 3
cascade:
  type: docs
---

## Signe d’un trinôme du second degré

> [!TIP] **Théorème**  
> Soit \( f \) une fonction polynomiale du second degré, définie sur \(\mathbb{R}\) par \( f(x) = ax^2 + bx + c \), avec \( a \neq 0 \).  
> - Si \(\Delta > 0\), alors \( f(x) \) s’annule en \( x_1 \) et \( x_2 \) et est du signe de \( a \) sur \( ]-\infty ; x_1[ \cup ]x_2 ; +\infty[ \), où \( x_1 \) et \( x_2 \) sont les racines (\( x_1 < x_2 \)).  
> - Si \(\Delta = 0\), alors \( f(x) \) s’annule en son unique racine \( x_0 \) et est du signe de \( a \) sur \(\mathbb{R} \setminus \{x_0\}\).  
> - Si \(\Delta < 0\), alors \( f(x) \) est du signe de \( a \) sur \(\mathbb{R}\).

**Illustration graphique :**

![](/images/image63.png)

> [!IMPORTANT] **Remarque**  
> On peut retenir ce théorème sous la forme :  
> Le trinôme \( ax^2 + bx + c \) est du signe de \(-a\) entre les racines quand elles existent ou du signe de \( a \) sauf entre les racines quand elles existent.  

{{% details title="Exemple" closed="true" %}}
Le polynôme \( (1-x)(3x-2) \) a pour racines 1 et \(\tfrac{2}{3}\). Le coefficient \( a \) est le coefficient de \( x^2 \).  
On a \( a = -3 < 0 \).  
Le trinôme est du signe de \(-a\) donc positif sur l’intervalle \(\left[\tfrac{2}{3} ; 1\right]\) et du signe de \( a \) donc négatif sur \( ]-\infty ; \tfrac{2}{3}] \cup [1 ; +\infty[ \).
{{% /details %}}


## Exercice résolu 1 : Étudier le signe d’un trinôme du second degré

> [!NOTE] **Exercice résolu**  
> Dresser le tableau de signes des fonctions \( f \) et \( g \) définies ci-dessous et les représenter graphiquement avec la calculatrice pour contrôler les résultats.  
> 1. \( f(x) = -3x^2 - 5x + 2 \)  
> 2. \( g(x) = 2x^2 - 4x + 2,4 \)

{{% details title="Solution commentée" closed="true" %}}
1. \(\Delta = b^2 - 4ac = (-5)^2 - 4 \times (-3) \times 2 = 25 + 24 = 49\).  
\(\Delta > 0\), donc le trinôme \( f(x) \) admet deux racines réelles distinctes :  
\[
x_1 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{5 - 7}{-6} = \frac{-2}{-6} = \tfrac{1}{3}, 
\quad x_2 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{5 + 7}{-6} = \frac{12}{-6} = -2.
\]  
\( a < 0 \), donc on obtient le tableau de signes suivant :  

![](/images/image64.png)

Sur la calculatrice, on constate que la parabole coupe l’axe des abscisses en -2 et \( \tfrac{1}{3} \), et qu’elle est au-dessus de cet axe sur \( ]-2 ; \tfrac{1}{3}[ \).  

![](/images/image65.png)

2. \(\Delta = b^2 - 4ac = (-4)^2 - 4 \times 2 \times 2,4 = 16 - 19,2 = -3,2\).  
\(\Delta < 0\), donc le trinôme \( g(x) \) est du signe de \( a \) (ici \( a = 2 \)) sur \(\mathbb{R}\).  
On obtient le tableau de signes suivant :  

![](/images/image66.png)

Sur la calculatrice, on constate que la parabole est strictement au-dessus de l’axe des abscisses.  

![](/images/image67.png)

{{% /details %}}


## Exercice résolu 2 : Résoudre une inéquation du second degré

> [!NOTE] **Exercice résolu**  
> Résoudre les inéquations suivantes :  
> 1. \((2x + 1)(3 - x) > 0\)  
> 2. \(-2x^2 + 5x \leq 4\)  
> 3. \((x - 4)^2 \leq (-5x + 2)^2\)

{{% details title="Solution commentée" closed="true" %}}
1. Le trinôme \((2x + 1)(3 - x)\) admet deux racines \(-\tfrac{1}{2}\) et 3.  
Le coefficient de \(x^2\) est \(a = -2\), donc l’ensemble des solutions de l’inéquation est :  
\[
]-\tfrac{1}{2} ; 3[.
\]

2. L’inéquation \(-2x^2 + 5x \leq 4\) est équivalente à \(-2x^2 + 5x - 4 \leq 0\).  
\(\Delta = b^2 - 4ac = 25 - 32 = -7 < 0\).  
\(\Delta < 0\), alors le trinôme est du signe de \( a \) (ici \( a = -2\)) sur \(\mathbb{R}\).  
Donc l’ensemble des solutions est \(\mathbb{R}\).  

3. L’inéquation \((x-4)^2 \leq (-5x+2)^2\) est équivalente à \((x-4)^2 - (-5x+2)^2 \leq 0\).  
On reconnaît une identité remarquable : \((x-4)^2 - (-5x+2)^2 = (x-4-(-5x+2))(x-4+(-5x+2))\).  
On obtient ainsi :  
\[
(x-4)^2 - (-5x+2)^2 = (6x-6)(-4x-2).
\]  
Le trinôme \((6x-6)(-4x-2)\) admet deux racines 1 et \(-\tfrac{1}{2}\).  
Le coefficient de \(x^2\) est \(a = -24\), donc l’ensemble des solutions est :  
\[
]-\infty ; -\tfrac{1}{2}] \cup [1 ; +\infty[.
\]
{{% /details %}}