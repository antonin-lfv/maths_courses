---
title: 'Nombre dérivé d’une fonction en un point'
weight: 2
cascade:
  type: docs
---

## Point de vue algébrique

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \) et \( a \) un nombre appartenant à \( I \).  
> Soit \( h \) un nombre réel non nul tel que \( a + h \) appartienne à \( I \).  
> On dit que \( f \) est **dérivable en \( a \)** lorsque le taux de variation  
> \[
\frac{f(a + h) - f(a)}{h}
\]
> tend vers un unique nombre réel lorsque \( h \) tend vers zéro.  
> Ce nombre limite est appelé **nombre dérivé de \( f \) en \( a \)**.  
> On le note \( f'(a) \).

> [!IMPORTANT] **Remarque**  
> Une fonction peut ne pas être dérivable en un réel \( a \).  
> Les fonctions \( x \mapsto \sqrt{x} \) et \( x \mapsto |x| \) ne sont pas dérivables en 0.


## Tangente à une courbe

Soit \( f \) une fonction définie sur un intervalle \( I \), \( a \) un réel appartenant à \( I \) et \( h \) un nombre réel non nul tel que \( a + h \) appartienne à \( I \). Soit \( A \) le point de la courbe représentative de \( f \) d’abscisse \( a \) et \( H \) le point de la courbe représentative de \( f \) d’abscisse \( a + h \).

![](/images/image93.png)

Lorsque \( h \) tend vers zéro, le point \( H \) se rapproche de \( A \) et la sécante \( (AH) \) de coefficient directeur \(\frac{f(a + h) - f(a)}{h}\) se rapproche d’une position limite (en rouge sur le dessin). Si \(f\) est dérivable en \( a \), \( \frac{f(a + h) - f(a)}{h} \) tend vers \( f'(a) \) lorsque \( h \) tend vers zéro. On admet alors que ce nombre dérivé est le coefficient directeur de la droite qui correspond à la position limite de la sécante \( (AH) \). 

> [!TIP] **Définition**  
> Soient \( f \) une fonction dérivable en un réel \( a \) et \( A \) le point de coordonnées \( A(a ; f(a)) \).  
> La **tangente** à la courbe représentative de \( f \) au point d’abscisse \( a \) est la droite de coefficient directeur \( f'(a) \) passant par \( A \).

> [!TIP] **Propriété**  
> Soient \( f \) une fonction dérivable en un réel \( a \) et \( A \) le point de coordonnées \( A(a ; f(a)) \).  
> La tangente à la courbe représentative de \( f \) au point \( A \) a pour **équation réduite** :  
> \[
y = f'(a)(x - a) + f(a).
\]

> [!IMPORTANT] **Remarque**  
> Localement, la courbe représentative de \( f \) au voisinage du point \( A \) est presque confondue avec sa tangente.  
> Autrement dit, lorsque \( x \approx a \), on a \( f(x) \approx f'(a)(x - a) + f(a) \).


> [!NOTE] **Exercice résolu**  
> On considère la fonction \( f \) définie sur \( \mathbb{R}^* \) par :  
> \[
f(x) = 1 + \frac{3}{x}.
\]  
> Montrer que \( f \) est dérivable en 5 et donner la valeur de \( f'(5) \).

{{% details title="Solution commentée" closed="true" %}}
Pour étudier la dérivabilité de \( f \) en 5, on calcule le taux de variation de \( f \) entre 5 et \( 5 + h \) (\( h \neq -5 \) et \( h \neq 0 \)) :  
\[
\frac{f(5 + h) - f(5)}{h} = \frac{\left(1 + \frac{3}{5 + h}\right) - \left(1 + \frac{3}{5}\right)}{h}
\]
\[
  = \frac{-3h}{5(5 + h)} \times \frac{1}{h} = \frac{-3}{5(5 + h)}.
\]
Lorsque \( h \) tend vers zéro, \( 5(5 + h) \) tend vers 25 et donc le taux de variation tend vers le nombre réel  
\[
-\frac{3}{25}.
\]  
La fonction \( f \) est donc dérivable en 5 avec \( f'(5) = -\frac{3}{25} \).
{{% /details %}}

> [!NOTE] **Exercice résolu**  
> On considère la fonction \( f \) définie sur \( \mathbb{R} \) par :  
> \[
f(x) = x^2 + 4x - 3.
\]  
> 1. Montrer que la fonction \( f \) est dérivable en tout réel \( a \) et exprimer \( f'(a) \) en fonction de \( a \).  
> 2. En déduire \( f'(3) \).

{{% details title="Solution commentée" closed="true" %}}
1. Pour étudier la dérivabilité de \( f \) en \( a \), on calcule le taux de variation de \( f \) entre \( a \) et \( a + h \) :  
\[
\frac{f(a + h) - f(a)}{h} = \frac{(a + h)^2 + 4(a + h) - 3 - (a^2 + 4a - 3)}{h}
\]  
\[
= \frac{2ah + h^2 + 4h}{h} = 2a + 4 + h.
\]
Lorsque \( h \) tend vers zéro, le taux de variation tend vers le nombre réel \( 2a + 4 \).  
La fonction \( f \) est donc dérivable en tout réel \( a \) avec \( f'(a) = 2a + 4 \).  

1. \( f'(3) = 2 \times 3 + 4 = 10. \)
{{% /details %}}

> [!NOTE] **Exercice résolu**  
> La fonction \( f \) est définie sur \( \mathbb{R} \) par \( f(x) = x^2 + 3x - 7 \).  
> On admet que \( f'(3) = 9 \).  
> 1. Donner l’équation de la tangente à la courbe de \( f \) au point d’abscisse 3.  
> 2. Le point \( S(10 ; 80) \) appartient-il à cette droite ?

{{% details title="Solution commentée" closed="true" %}}
1. \( f(3) = 3^2 + 3 \times 3 - 7 = 11. \)  
On a aussi \( f'(3) = 9 \).  
On obtient donc :  
\[
y = 9(x - 3) + 11 \quad \Rightarrow \quad y = 9x - 16.
\]

2. Un point appartient à la tangente si et seulement si ses coordonnées vérifient l’équation réduite.  
\( 9 \times 10 - 16 = 74 \), or \( 80 \neq 74 \).  
Les coordonnées de \( S \) ne vérifient pas l’équation, donc \( S \) n’appartient pas à la tangente.
{{% /details %}}
