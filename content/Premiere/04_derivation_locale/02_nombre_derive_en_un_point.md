---
title: 'Nombre dérivé d’une fonction en un point'
weight: 2
cascade:
  type: docs
---

## Point de vue algébrique

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \), et \( a \) un réel de \( I \).  
> Pour tout réel \({h \neq 0}\) tel que \({a + h \in I}\), on considère le taux de variation de \(f\) entre \(a\) et \({a + h}\) :  
> \[
\dfrac{f(a + h) - f(a)}{h}.
\]
> On dit que \( f \) est **dérivable en \( a \)** si ce taux de variation tend vers un nombre réel lorsque \( h \) tend vers 0.  
> Cette limite est alors appelée **nombre dérivé de \( f \) en \( a \)**, et notée \( f'(a) \) :
> \[
f'(a) = \lim_{h \to 0} \dfrac{f(a + h) - f(a)}{h}.
\]

> [!IMPORTANT] **Remarque**  
> Une fonction n’est pas forcément dérivable en tout point.  
> Par exemple, la fonction racine carrée \({x \mapsto \sqrt{x}}\) et la fonction valeur absolue \({x \mapsto |x|}\) ne sont pas dérivables en 0.

## Tangente à une courbe

Soit \( f \) une fonction définie sur un intervalle \( I \), \({a \in I}\), et \({h \neq 0}\) tel que \({a + h \in I}\). On note \( A \) et \( H \) les points de la courbe de \( f \) d’abscisses respectives \( a \) et \({a + h}\).

![](/images/image179.png)

La sécante \( (AH) \) a pour coefficient directeur \({\dfrac{f(a + h) - f(a)}{h}}\). Quand \( h \) se rapproche de 0, le point \( H \) glisse le long de la courbe vers \( A \), et la sécante pivote autour de \(A\) jusqu’à une position limite (en rouge). Si \(f\) est dérivable en \( a \), le coefficient directeur de la sécante tend vers \( f'(a) \) : on admet que \( f'(a) \) est le coefficient directeur de cette droite limite.

> [!TIP] **Définition**  
> Soit \( f \) une fonction dérivable en un réel \( a \), et \( A(a ; f(a)) \).  
> La **tangente** à la courbe représentative de \( f \) au point d’abscisse \( a \) est la droite passant par \( A \) et de coefficient directeur \( f'(a) \).

> [!TIP] **Propriété**  
> Soit \( f \) une fonction dérivable en un réel \( a \), et \( A(a ; f(a)) \).  
> La tangente à la courbe représentative de \( f \) au point \( A \) a pour **équation réduite** :  
> \[
y = f'(a)(x - a) + f(a).
\]

> [!IMPORTANT] **Remarque**  
> Au voisinage de \( A \), la courbe de \( f \) et sa tangente sont presque confondues.  
> Autrement dit, pour \( x \) proche de \( a \) : \({f(x) \approx f'(a)(x - a) + f(a)}\) (approximation affine de \(f\) en \(a\)).

> [!NOTE] **Exercice résolu**  
> On considère la fonction \( f \) définie sur \( \mathbb{R}^* \) par :  
> \[
f(x) = 2 - \dfrac{4}{x}.
\]  
> Démontrer que \( f \) est dérivable en 2 et déterminer \( f'(2) \).

{{% details title="Solution commentée" closed="true" %}}
On calcule le taux de variation de \( f \) entre 2 et \({2 + h}\), pour \({h \neq 0}\) et \({h \neq -2}\) :  
\[
\dfrac{f(2 + h) - f(2)}{h} = \dfrac{\left(2 - \dfrac{4}{2 + h}\right) - \left(2 - \dfrac{4}{2}\right)}{h} = \dfrac{2 - \dfrac{4}{2 + h}}{h}.
\]
On réduit le numérateur au même dénominateur :
\[
2 - \dfrac{4}{2 + h} = \dfrac{2(2 + h) - 4}{2 + h} = \dfrac{2h}{2 + h}.
\]
D’où :
\[
\dfrac{f(2 + h) - f(2)}{h} = \dfrac{2h}{2 + h} \times \dfrac{1}{h} = \dfrac{2}{2 + h}.
\]
Quand \( h \) tend vers 0, \({2 + h}\) tend vers 2, donc le taux de variation tend vers le réel \({\dfrac{2}{2} = 1}\).  
La fonction \( f \) est donc dérivable en 2, et \({f'(2) = 1}\).
{{% /details %}}

> [!NOTE] **Exercice résolu**  
> On considère la fonction \( f \) définie sur \( \mathbb{R} \) par :  
> \[
f(x) = 3x^2 - 2x + 1.
\]  
> 1. Démontrer que \( f \) est dérivable en tout réel \( a \), et exprimer \( f'(a) \) en fonction de \( a \).  
> 2. En déduire \({f'(-1)}\).

{{% details title="Solution commentée" closed="true" %}}
1. Soit \(a\) un réel et \({h \neq 0}\). On calcule le taux de variation de \( f \) entre \( a \) et \({a + h}\) :  
\[
\dfrac{f(a + h) - f(a)}{h} = \dfrac{3(a + h)^2 - 2(a + h) + 1 - (3a^2 - 2a + 1)}{h}.
\]  
En développant \({3(a+h)^2 = 3a^2 + 6ah + 3h^2}\), le numérateur se simplifie :
\[
\dfrac{6ah + 3h^2 - 2h}{h} = \dfrac{h(6a + 3h - 2)}{h} = 6a - 2 + 3h.
\]
Quand \( h \) tend vers 0, ce taux tend vers le réel \({6a - 2}\).  
La fonction \( f \) est donc dérivable en tout réel \( a \), avec \({f'(a) = 6a - 2}\).  

2. \({f'(-1) = 6 \times (-1) - 2 = -8.}\)
{{% /details %}}

> [!NOTE] **Exercice résolu**  
> La fonction \( f \) est définie sur \( \mathbb{R} \) par \({f(x) = x^2 - 5x + 2}\). On admet que \({f'(1) = -3}\).  
> 1. Déterminer l’équation réduite de la tangente à la courbe de \( f \) au point d’abscisse 1.  
> 2. Les points \({T(4 ; -11)}\) et \({U(-2 ; 6)}\) appartiennent-ils à cette tangente ?

{{% details title="Solution commentée" closed="true" %}}
1. On calcule \({f(1) = 1 - 5 + 2 = -2}\), et on sait que \({f'(1) = -3}\).  
D’après la formule \({y = f'(a)(x - a) + f(a)}\) avec \({a = 1}\) :  
\[
y = -3(x - 1) + (-2) \quad \Longleftrightarrow \quad y = -3x + 1.
\]

2. Un point appartient à la tangente si et seulement si ses coordonnées vérifient son équation.  
- Pour \(T\) : \({-3 \times 4 + 1 = -11}\), qui est bien l’ordonnée de \(T\). Donc \( T \) **appartient** à la tangente.  
- Pour \(U\) : \({-3 \times (-2) + 1 = 7 \neq 6}\). Donc \( U \) **n’appartient pas** à la tangente.
{{% /details %}}
