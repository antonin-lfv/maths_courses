---
title: 'Signe d’un trinôme du second degré'
weight: 3
cascade:
  type: docs
---

## Signe d’un trinôme du second degré

> [!TIP] **Théorème**  
> Soit \( f \) la fonction polynôme du second degré définie sur \(\mathbb{R}\) par \( f(x) = ax^2 + bx + c \), avec \( a \neq 0 \), et \(\Delta\) son discriminant.  
> - Si \(\Delta > 0\), \( f(x) \) s’annule en ses deux racines \( x_1 < x_2 \) ; \( f(x) \) est du signe de \( a \) sur \( ]-\infty ; x_1[ \cup ]x_2 ; +\infty[ \) et du signe de \( -a \) sur \( ]x_1 ; x_2[ \).  
> - Si \(\Delta = 0\), \( f(x) \) s’annule en son unique racine \( x_0 \) et est du signe de \( a \) sur \(\mathbb{R} \setminus \{x_0\}\).  
> - Si \(\Delta < 0\), \( f(x) \) est du signe de \( a \) sur \(\mathbb{R}\) (et ne s’annule jamais).

**Illustration graphique :** position de la parabole par rapport à l’axe des abscisses selon le signe de \( a \) et de \(\Delta\).

![](/images/image151.png)

- \(\Delta > 0\) : la parabole coupe l’axe des abscisses en deux points d’abscisses \( x_1 \) et \( x_2 \).

| \( x \)    | \( -\infty \) |              | \( x_1 \) |               | \( x_2 \) |              | \( +\infty \) |
|------------|---------------|--------------|-----------|---------------|-----------|--------------|---------------|
| \( f(x) \) |               | signe de \( a \) | 0     | signe de \( -a \) | 0     | signe de \( a \) |           |

- \(\Delta = 0\) : la parabole touche l’axe des abscisses en un seul point, d’abscisse \( x_0 \).

| \( x \)    | \( -\infty \) |                  | \( x_0 \) |                  | \( +\infty \) |
|------------|---------------|------------------|-----------|------------------|---------------|
| \( f(x) \) |               | signe de \( a \) | 0         | signe de \( a \) |               |

- \(\Delta < 0\) : la parabole est entièrement au-dessus de l’axe des abscisses si \( a > 0 \), entièrement au-dessous si \( a < 0 \).

| \( x \)    | \( -\infty \) |                  | \( +\infty \) |
|------------|---------------|------------------|---------------|
| \( f(x) \) |               | signe de \( a \) |               |

> [!IMPORTANT] **Remarque**  
> Moyen mnémotechnique : un trinôme est **du signe de \( a \) sauf entre ses racines** (quand elles existent), où il est du signe de \( -a \).  

{{% details title="Exemple" closed="true" %}}
Le trinôme \( (2-x)(4x+1) \) a pour racines 2 et \(-\tfrac{1}{4}\). En développant mentalement, le coefficient de \( x^2 \) est \( a = -1 \times 4 = -4 < 0 \).  
Le trinôme est donc du signe de \(-a\), c’est-à-dire positif, entre les racines : sur \(\left[-\tfrac{1}{4} ; 2\right]\) ; et du signe de \( a \), donc négatif, sur \( \left]-\infty ; -\tfrac{1}{4}\right] \cup [2 ; +\infty[ \) (il est nul en \(-\tfrac14\) et en 2).
{{% /details %}}

## Exercice résolu 1 : Étudier le signe d’un trinôme du second degré

> [!NOTE] **Exercice résolu**  
> Dresser le tableau de signes des fonctions \( f \) et \( g \) ci-dessous, puis contrôler le résultat en traçant leur courbe à la calculatrice.  
> 1. \( f(x) = -2x^2 + 3x + 2 \)  
> 2. \( g(x) = x^2 - 2x + 3 \)

{{% details title="Solution commentée" closed="true" %}}
1. \(\Delta = b^2 - 4ac = 3^2 - 4 \times (-2) \times 2 = 9 + 16 = 25\), et \(\sqrt{\Delta} = 5\).  
\(\Delta > 0\) : le trinôme \( f(x) \) a deux racines réelles distinctes :  
\[
x_1 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{-3 + 5}{-4} = -\tfrac{1}{2}, 
\quad x_2 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{-3 - 5}{-4} = 2.
\]  
Comme \( a = -2 < 0 \), \( f(x) \) est négatif à l’extérieur des racines et positif entre elles :  

| \( x \)    | \( -\infty \) |     | \( -\tfrac12 \) |     | \( 2 \) |     | \( +\infty \) |
|------------|---------------|-----|-----------------|-----|---------|-----|---------------|
| \( f(x) \) |               | \(-\) | 0             | \(+\) | 0     | \(-\) |             |

Graphiquement, la parabole coupe l’axe des abscisses en \(-\tfrac{1}{2}\) et 2, et elle est au-dessus de cet axe sur \( \left]-\tfrac{1}{2} ; 2\right[ \).  

![](/images/image152.png)

2. \(\Delta = b^2 - 4ac = (-2)^2 - 4 \times 1 \times 3 = 4 - 12 = -8\).  
\(\Delta < 0\) : le trinôme \( g(x) \) est du signe de \( a = 1 \), donc strictement positif sur \(\mathbb{R}\).  

| \( x \)    | \( -\infty \) |     | \( +\infty \) |
|------------|---------------|-----|---------------|
| \( g(x) \) |               | \(+\) |             |

Graphiquement, la parabole est entièrement située au-dessus de l’axe des abscisses.  

![](/images/image153.png)

{{% /details %}}

## Exercice résolu 2 : Résoudre une inéquation du second degré

> [!NOTE] **Exercice résolu**  
> Résoudre dans \(\mathbb{R}\) les inéquations suivantes :  
> 1. \((3x - 2)(x + 4) < 0\)  
> 2. \(3x^2 - x \geq -1\)  
> 3. \((2x + 1)^2 \geq (x - 3)^2\)

{{% details title="Solution commentée" closed="true" %}}
1. Le trinôme \((3x - 2)(x + 4)\) a deux racines : \(\tfrac{2}{3}\) et \(-4\).  
Le coefficient de \(x^2\) est \(a = 3 > 0\) : le trinôme est négatif strictement entre ses racines. L’ensemble des solutions est :  
\[
\left]-4 ; \tfrac{2}{3}\right[.
\]

2. On se ramène à une comparaison avec 0 : l’inéquation équivaut à \(3x^2 - x + 1 \geq 0\).  
\(\Delta = (-1)^2 - 4 \times 3 \times 1 = 1 - 12 = -11 < 0\).  
Le trinôme est donc du signe de \( a = 3 \), c’est-à-dire strictement positif, sur \(\mathbb{R}\).  
L’ensemble des solutions est \(\mathbb{R}\).  

3. L’inéquation équivaut à \((2x+1)^2 - (x-3)^2 \geq 0\).  
On factorise avec l’identité \(A^2 - B^2 = (A - B)(A + B)\) :  
\[
(2x+1)^2 - (x-3)^2 = \big(2x + 1 - (x - 3)\big)\big(2x + 1 + (x - 3)\big) = (x + 4)(3x - 2).
\]  
Ce trinôme a pour racines \(-4\) et \(\tfrac{2}{3}\), et son coefficient de \(x^2\) est \(a = 3 > 0\) : il est positif ou nul à l’extérieur des racines (racines comprises). L’ensemble des solutions est :  
\[
]-\infty ; -4] \cup \left[\tfrac{2}{3} ; +\infty\right[.
\]
{{% /details %}}
