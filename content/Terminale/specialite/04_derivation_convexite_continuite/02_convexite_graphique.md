---
title: 'Convexité: approche graphique'
weight: 2
cascade:
  type: docs
---

## Fonctions convexes et concaves

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \), et \(\mathcal{C}_f\) sa courbe représentative dans un repère.  
> - \( f \) est **convexe** sur \( I \) si, pour tous réels \( a \) et \( b \) de \( I \), la partie de \(\mathcal{C}_f\) comprise entre les points \( A(a; f(a)) \) et \( B(b; f(b)) \) est située **en dessous** de la sécante \((AB)\).  
> - \( f \) est **concave** sur \( I \) si, pour tous réels \( a \) et \( b \) de \( I \), la partie de \(\mathcal{C}_f\) comprise entre les points \( A(a; f(a)) \) et \( B(b; f(b)) \) est située **au-dessus** de la sécante \((AB)\).

{{% details title="Exemples" closed="true" %}}
- La fonction représentée ci-dessous est convexe : la courbe est sous chacune de ses cordes.  
![](/images/image245.png)

- La fonction représentée ci-dessous est concave : la courbe est au-dessus de chacune de ses cordes.  
![](/images/image246.png)

- Les fonctions carré et exponentielle sont convexes sur \(\mathbb{R}\).  
- La fonction racine carrée est concave sur \({[0 ; +\infty[}\).  
- La fonction inverse est concave sur \({]-\infty ; 0[}\) et convexe sur \({]0 ; +\infty[}\).  
- La fonction cube est concave sur \({]-\infty ; 0]}\) et convexe sur \({[0 ; +\infty[}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Étudier la convexité d’une fonction, c’est déterminer les intervalles sur lesquels elle est convexe et ceux sur lesquels elle est concave.

## Point d’inflexion

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \), \(\mathcal{C}_f\) sa courbe représentative et \( A \) un point de \(\mathcal{C}_f\).  
> On dit que \( A \) est un **point d’inflexion** de \(\mathcal{C}_f\) si \(\mathcal{C}_f\) admet une tangente en \( A \) et si la courbe **traverse** cette tangente au point \( A \).

{{% details title="Exemples" closed="true" %}}
Sur la figure ci-dessous, la courbe passe de part et d’autre de sa tangente en \(A\) : \(A\) est un point d’inflexion.  

![](/images/image247.png)  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> En l’abscisse d’un point d’inflexion, la fonction change de convexité (elle passe de concave à convexe, ou l’inverse).

## Méthode : Déterminer graphiquement la convexité d’une fonction

> [!NOTE] **Méthode**  
> Soit \( f \) une fonction définie sur l’intervalle \({[-1 ; 3]}\), dont la courbe représentative \(\mathcal{C}_f\) est donnée ci-dessous dans un repère orthonormé.  
> ![](/images/image248.png)
> 1. Dresser graphiquement le tableau de variation de \( f \) sur \({[-1 ; 3]}\).  
> 2. Déterminer graphiquement le ou les intervalles sur lesquels \( f \) est convexe, et ceux sur lesquels elle est concave.

{{% details title="Solution commentée" closed="true" %}}
1. On lit les extremums locaux (en 0 et en 2) et les valeurs aux bornes :  

![](/images/image249.png)

2. Sur \({[-1 ; 1]}\), toute corde reliant deux points de la courbe semble située en dessous de la courbe : \( f \) semble **concave** sur \({[-1 ; 1]}\).  
Sur \([1 ; 3]\), toute corde semble située au-dessus de la courbe : \( f \) semble **convexe** sur \([1 ; 3]\).  
La convexité change en \({x = 1}\) : le point de coordonnées \((1 ; 1)\) semble être un point d’inflexion.
{{% /details %}}

## Méthode : Déterminer graphiquement l’existence d’un point d’inflexion

> [!NOTE] **Méthode**  
> On considère la fonction \({f : x \mapsto -x^3 + 3x^2 - 1}\), définie sur \(\mathbb{R}\), et sa courbe \(\mathcal{C}_f\) dans un repère orthonormé.  
> 1. Tracer \(\mathcal{C}_f\) sur \({[-1 ; 3]}\).  
> 2. Déterminer une équation de la tangente \(\mathcal{T}_1\) à \(\mathcal{C}_f\) au point \( A \) d’abscisse 1, puis la tracer.  
> 3. En déduire graphiquement l’abscisse d’un point d’inflexion de \(\mathcal{C}_f\).

{{% details title="Solution commentée" closed="true" %}}
1. Voir le graphique ci-dessous.

![](/images/image250.png)  

2. \( f \) est dérivable sur \(\mathbb{R}\), avec \({f'(x) = -3x^2 + 6x}\).  
Ainsi \({f'(1) = -3 + 6 = 3}\) et \({f(1) = -1 + 3 - 1 = 1}\).  
La tangente au point d’abscisse 1 a pour équation :  
\[
y = f'(1)(x - 1) + f(1) = 3(x - 1) + 1, \quad \text{soit} \quad y = 3x - 2.
\]  

3. Au point \( A(1 ; 1) \), la courbe \(\mathcal{C}_f\) passe d’un côté à l’autre de la tangente \(\mathcal{T}_1\) (au-dessous à gauche de \(A\), au-dessus à droite). Le point \( A \), d’abscisse 1, semble donc être un point d’inflexion de \(\mathcal{C}_f\).
{{% /details %}}
