---
title: 'Convexité des fonctions dérivables'
weight: 3
cascade:
  type: docs
---

## Caractérisations de la convexité

> [!TIP] **Propriétés (admises)**  
> Soit \( f \) une fonction deux fois dérivable sur un intervalle \( I \), de dérivée \( f' \) et de dérivée seconde \( f'' \).  
> Les trois propositions suivantes sont équivalentes :  
> - \( f \) est convexe sur \( I \) ;  
> - \( f' \) est croissante sur \( I \) ;  
> - \( f'' \) est positive sur \( I \).  
>   
> De même, les trois propositions suivantes sont équivalentes :  
> - \( f \) est concave sur \( I \) ;  
> - \( f' \) est décroissante sur \( I \) ;  
> - \( f'' \) est négative sur \( I \).

{{% details title="Exemple" closed="true" %}}
On considère la fonction polynôme \( f \) définie sur \(\mathbb{R}\) par  
\[
f(x) = -2x^2 + x + 4.
\]  
Elle est deux fois dérivable sur \(\mathbb{R}\), avec \( f'(x) = -4x + 1 \) et  
\[
f''(x) = -4.
\]  
\( f'' \) est négative sur \(\mathbb{R}\) : la fonction \( f \) est concave sur \(\mathbb{R}\). (Plus généralement, \(x \mapsto ax^2 + bx + c\) est convexe si \(a > 0\) et concave si \(a < 0\).)
{{% /details %}}

## Convexité et tangentes

> [!TIP] **Propriétés**  
> Soit \( f \) une fonction dérivable sur un intervalle \( I \), et \(\mathcal{C}_f\) sa courbe représentative.  
> - \( f \) est convexe sur \( I \) si et seulement si, sur \(I\), \(\mathcal{C}_f\) est située **au-dessus de chacune de ses tangentes**.  
> - \( f \) est concave sur \( I \) si et seulement si, sur \(I\), \(\mathcal{C}_f\) est située **en dessous de chacune de ses tangentes**.

{{% details title="Exemples" closed="true" %}}
- La fonction \( f \) représentée ci-dessous est convexe : sa courbe est au-dessus de ses tangentes.  
![](/images/image251.png)  

- La fonction \( g \) représentée ci-dessous est concave : sa courbe est en dessous de ses tangentes.  
![](/images/image252.png)  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Une fonction croissante et convexe sur \( I \) croît « de plus en plus vite » : quand l’abscisse augmente, les tangentes deviennent de plus en plus pentues (\(f'\) est croissante).  
> À l’inverse, une fonction croissante et concave croît « de moins en moins vite ».

> [!IMPORTANT] **Remarque**  
> Ces propriétés servent à démontrer des inégalités : si \(f\) est convexe sur \(I\) et \(a \in I\), alors pour tout \(x \in I\), \(f(x) \geq f'(a)(x - a) + f(a)\). Par exemple, l’exponentielle étant convexe, sa courbe est au-dessus de sa tangente en 0 : \(e^x \geq x + 1\) pour tout réel \(x\).

## Point d’inflexion

> [!TIP] **Propriétés (admises)**  
> Soit \( f \) une fonction deux fois dérivable sur un intervalle \( I \), \(\mathcal{C}_f\) sa courbe représentative, et \( a \) un réel de \( I \).  
> - Si \( f' \) change de sens de variation en \( a \), alors \(\mathcal{C}_f\) admet un point d’inflexion d’abscisse \( a \).  
> - Si \( f'' \) s’annule **en changeant de signe** en \( a \), alors \(\mathcal{C}_f\) admet un point d’inflexion d’abscisse \( a \).

## Méthode : Utiliser la dérivée seconde pour étudier la convexité d’une fonction

> [!NOTE] **Méthode**  
> On considère la fonction polynôme \( f \) définie sur \(\mathbb{R}\) par  
> \[
f(x) = -\tfrac{1}{3}x^3 + 2x^2 - 3x + 1,
\]  
> et \(\mathcal{C}_f\) sa courbe représentative.  
> 1. À l’aide d’une calculatrice ou d’un logiciel, conjecturer la convexité de \( f \) et les éventuels points d’inflexion de \(\mathcal{C}_f\).  
> 2. Calculer la dérivée seconde de \( f \).  
> 3. En déduire la convexité de \( f \).  
> 4. Justifier que \(\mathcal{C}_f\) admet un point d’inflexion, et en donner les coordonnées.

{{% details title="Solution commentée" closed="true" %}}
1. Sur la figure ci-dessous, on conjecture que \( f \) est convexe sur \( ]-\infty ; 2] \), concave sur \([2 ; +\infty[\), et que \(\mathcal{C}_f\) a un point d’inflexion \( A \) d’abscisse 2.  

![](/images/image253.png)  

2. \( f \) est une fonction polynôme, donc deux fois dérivable sur \(\mathbb{R}\) :  
\( f'(x) = -x^2 + 4x - 3 \), puis \( f''(x) = -2x + 4 \).  

3. \( f''(x) = -2x + 4 = -2(x - 2) \).  
- Pour \( x \in \,]-\infty ; 2] \), \( f''(x) \geq 0 \) : \( f \) est convexe sur \( ]-\infty ; 2] \).  
- Pour \( x \in [2 ; +\infty[ \), \( f''(x) \leq 0 \) : \( f \) est concave sur \([2 ; +\infty[ \).  

4. \( f'' \) s’annule en 2 en changeant de signe : \(\mathcal{C}_f\) admet un point d’inflexion d’abscisse 2.  
Son ordonnée est \( f(2) = -\tfrac{8}{3} + 8 - 6 + 1 = \tfrac{1}{3} \) : c’est le point \( A\left(2 ; \tfrac{1}{3}\right) \).  
{{% /details %}}

## Méthode : Relier convexité d’une fonction et sens de variation de sa dérivée

> [!NOTE] **Méthode**  
> Soit \( f \) une fonction dérivable sur \([0 ; 4]\). La courbe \(\mathcal{C}_{f'}\) de sa fonction dérivée \( f' \) est représentée ci-dessous.  
> ![](/images/image254.png)
> La courbe \(\mathcal{C}_f\) de \(f\) est l’une des trois courbes suivantes.  
> Laquelle ? Justifier.  
> ![](/images/image255.png)

{{% details title="Solution commentée" closed="true" %}}
- \(\mathcal{C}_{f'}\) est entièrement au-dessus de l’axe des abscisses : \( f' \) est positive, donc \( f \) est croissante sur \([0 ; 4]\). Cela élimine \(\mathcal{C}_2\), qui représente une fonction décroissante.  
- \(\mathcal{C}_{f'}\) « monte » : \( f' \) est croissante, donc \( f \) est convexe sur \([0 ; 4]\). Cela élimine \(\mathcal{C}_1\), qui représente une fonction concave (elle croît de moins en moins vite).  

La courbe représentative de \( f \) est donc \(\mathcal{C}_3\) : croissante et de plus en plus pentue.  
{{% /details %}}
