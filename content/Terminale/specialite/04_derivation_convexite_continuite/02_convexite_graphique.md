---
title: 'Convexité: approche graphique'
weight: 2
cascade:
  type: docs
---

## Fonctions convexes et concaves

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \) et \(\mathcal{C}_f\) sa courbe représentative dans un repère.  
> - \( f \) est **convexe** sur \( I \) si, pour tous réels \( a \) et \( b \) de \( I \), la portion de la courbe \(\mathcal{C}_f\) située entre les points \( A(a; f(a)) \) et \( B(b; f(b)) \) est **en dessous** de la sécante \((AB)\).  
> - \( f \) est **concave** sur \( I \) si, pour tous réels \( a \) et \( b \) de \( I \), la portion de la courbe \(\mathcal{C}_f\) située entre les points \( A(a; f(a)) \) et \( B(b; f(b)) \) est **au-dessus** de la sécante \((AB)\).

{{% details title="Exemples" closed="true" %}}
- La fonction représentée ci-dessous est convexe :  
![](/images/image38.png)

- La fonction représentée ci-dessous est concave :  
![](/images/image39.png)

- La fonction carré et la fonction exponentielle sont convexes sur \(\mathbb{R}\).  
- La fonction racine carrée est concave sur \([0 ; +\infty[\).  
- La fonction inverse est concave sur \( ]-\infty ; 0] \) et convexe sur \( ]0 ; +\infty[ \).  
- La fonction cube est concave sur \( ]-\infty ; 0] \) et convexe sur \([0 ; +\infty[ \).
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Étudier la convexité d’une fonction revient à déterminer sur quel(s) intervalle(s) elle est convexe et sur quel(s) intervalle(s) elle est concave.


## Point d’inflexion

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \), \(\mathcal{C}_f\) sa courbe représentative et \( A \) un point de \(\mathcal{C}_f\).  
> \( A \) est un **point d’inflexion** de \(\mathcal{C}_f\) si \(\mathcal{C}_f\) admet une tangente en \( A \) et si \(\mathcal{C}_f\) traverse cette tangente en \( A \).

{{% details title="Exemples" closed="true" %}}
![](/images/image40.png)  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> En l’abscisse d’un point d’inflexion \( A \) de la courbe représentative de \( f \), la fonction \( f \) change de convexité.


## Méthode : Déterminer graphiquement la convexité d’une fonction

> [!NOTE] **Méthode**  
> Soit \( f \) une fonction définie sur l’intervalle \([-3 ; 6]\) dont la représentation graphique \(\mathcal{C}_f\) est donnée dans un repère orthonormé.  
> ![](/images/image41.png)
> 1. Déterminer graphiquement le tableau de variation de la fonction \( f \) sur \([-3 ; 6]\).  
> 2. Déterminer graphiquement le (ou les) intervalle(s) où \( f \) est convexe et celui (ou ceux) où \( f \) est concave.

{{% details title="Solution commentée" closed="true" %}}
1. Graphiquement, on obtient le tableau de variation ci-dessous :  

![](/images/image42.png)

2. La fonction \( f \) semble concave sur l’intervalle \([-3 ; 1]\), car toute sécante formée par des points de la courbe semble être en dessous de la courbe.  
La fonction \( f \) semble convexe sur l’intervalle \([1 ; 6]\), car toute sécante formée par des points de la courbe semble être au-dessus de la courbe.
{{% /details %}}


## Méthode : Déterminer graphiquement l’existence d’un point d’inflexion

> [!NOTE] **Méthode**  
> On considère la fonction \( f : x \mapsto x^3 - 3x + 2 \) définie sur \(\mathbb{R}\) et sa représentation graphique \(\mathcal{C}_f\), dans un repère orthonormé.  
> 1. Tracer la représentation graphique \(\mathcal{C}_f\) de la fonction \( f \) sur \([-2 ; 2]\).  
> 2. Déterminer l’équation de la tangente \(\mathcal{T}_0\) à la courbe \(\mathcal{C}_f\) au point \( A \) d’abscisse 0. Tracer \(\mathcal{T}_0\).  
> 3. En déduire graphiquement l’abscisse d’un point d’inflexion de \(\mathcal{C}_f\).

{{% details title="Solution commentée" closed="true" %}}
1. Voir le graphique ci-dessous.

![](/images/image43.png)  

2. La fonction \( f \) est dérivable sur \(\mathbb{R}\). On a \( f'(x) = 3x^2 - 3 \).  
On a donc \( f'(0) = -3 \). De plus, \( f(0) = 2 \).  
Au point \( A \) d’abscisse 0, l’équation de la tangente \(\mathcal{T}_0\) est :  
\[
y = f'(0)(x-0) + f(0).
\]  
La tangente \(\mathcal{T}_0\) au point d’abscisse 0 a donc pour équation \( y = -3x + 2 \).  

3. Au point \( A \) d’abscisse 0, on observe que la courbe \(\mathcal{C}_f\) traverse la tangente \(\mathcal{T}_0\). Le point \( A \) semble donc être un point d’inflexion de \(\mathcal{C}_f\).
{{% /details %}}