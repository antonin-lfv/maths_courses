---
title: 'Convexité des fonctions dérivables'
weight: 3
cascade:
  type: docs
---

## Caractérisations de la convexité

> [!TIP] **Propriétés (admises)**  
> Soit \( f \) une fonction définie et deux fois dérivable sur un intervalle \( I \).  
> On note \( f' \) sa dérivée et \( f'' \) sa dérivée seconde.  
> Les propositions suivantes sont équivalentes :  
> - \( f \) est convexe sur l’intervalle \( I \).  
> - \( f'' \) est positive sur l’intervalle \( I \).  
> - \( f' \) est croissante sur \( I \).  
>   
> Les propositions suivantes sont équivalentes :  
> - \( f \) est concave sur l’intervalle \( I \).  
> - \( f'' \) est négative sur l’intervalle \( I \).  
> - \( f' \) est décroissante sur \( I \).

{{% details title="Exemple" closed="true" %}}
On considère la fonction polynôme \( f \), définie sur \(\mathbb{R}\) par  
\[
f(x) = 3x^2 - 5x + 1.
\]  
La fonction \( f \) est deux fois dérivable sur \(\mathbb{R}\). On a :  
\[
f''(x) = 6.
\]  
La fonction \( f'' \) est positive sur \(\mathbb{R}\), donc la fonction \( f \) est convexe sur \(\mathbb{R}\).
{{% /details %}}


## Convexité et tangentes

> [!TIP] **Propriétés**  
> Soient \( f \) une fonction et \(\mathcal{C}_f\) sa courbe représentative dans un repère.  
> Soit \( I \) un intervalle sur lequel \( f \) est dérivable.  
> - Sur l’intervalle \( I \), \( f \) est convexe si et seulement si \(\mathcal{C}_f\) est **au-dessus de toutes ses tangentes**.  
> - Sur l’intervalle \( I \), \( f \) est concave si et seulement si \(\mathcal{C}_f\) est **en dessous de toutes ses tangentes**.

{{% details title="Exemples" closed="true" %}}
- La fonction \( f \) représentée ci-dessous est convexe :  
![](/images/image44.png)  

- La fonction \( g \) représentée ci-dessous est concave :  
![](/images/image45.png)  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Une fonction croissante et convexe sur un intervalle \( I \) est une fonction qui croît « de plus en plus vite » sur \( I \).  
> Si elle est dérivable sur \( I \), les pentes des tangentes à sa courbe représentative augmentent quand les abscisses augmentent.  
> Pour une fonction croissante et concave, c’est le contraire : elle croît « de moins en moins vite ».


## Point d’inflexion

> [!TIP] **Propriétés (admises)**  
> Soient \( f \) une fonction définie et deux fois dérivable sur un intervalle \( I \), \(\mathcal{C}_f\) sa courbe représentative et \( a \) un réel appartenant à \( I \).  
> - Si \( f' \) change de sens de variation en \( a \), alors \(\mathcal{C}_f\) admet un point d’inflexion au point d’abscisse \( a \).  
> - Si \( f'' \) s’annule et change de signe en \( a \), alors \(\mathcal{C}_f\) admet un point d’inflexion au point d’abscisse \( a \).


## Méthode : Utiliser la dérivée seconde pour étudier la convexité d’une fonction

> [!NOTE] **Méthode**  
> Soit la fonction polynôme définie sur \(\mathbb{R}\) par  
> \[
f(x) = \tfrac{1}{3}x^3 - x^2 + x + 1.
\]  
> On note \(\mathcal{C}_f\) sa courbe représentative dans un repère.  
> 1. À l’aide d’une calculatrice ou d’un logiciel de géométrie, conjecturer la convexité de \( f \) et les éventuels points d’inflexion de \(\mathcal{C}_f\).  
> 2. Calculer la dérivée seconde de \( f \).  
> 3. En déduire la convexité de \( f \).  
> 4. Justifier l’existence d’un point d’inflexion de \(\mathcal{C}_f\), que l’on précisera.

{{% details title="Solution commentée" closed="true" %}}
1. On conjecture sur la figure ci-dessous, obtenue avec un logiciel de géométrie, que \( f \) est concave sur \( ]-\infty ; 1] \) et convexe sur \([1 ; +\infty[\) et que \(\mathcal{C}_f\) admet un point d’inflexion d’abscisse 1, noté \( A \) sur la figure.  

![](/images/image46.png)  

2. La fonction \( f \) est deux fois dérivable sur \(\mathbb{R}\), car c’est une fonction polynôme, et \( f'(x) = x^2 - 2x + 1 \). Donc \( f''(x) = 2x - 2 \).  

3. \( f''(x) = 2x - 2 = 2(x-1) \).  
- Pour tout réel \( x \) appartenant à \( ]-\infty ; 1] \), \( f''(x) \leq 0 \), donc \( f \) est concave sur \( ]-\infty ; 1] \).  
- Pour tout réel \( x \) appartenant à \([1 ; +\infty[ \), \( f''(x) \geq 0 \), donc \( f \) est convexe sur \([1 ; +\infty[ \).  

4. En \( x=1 \), \( f'' \) s’annule en changeant de signe, donc \(\mathcal{C}_f\) admet un point d’inflexion d’abscisse 1.  
{{% /details %}}


## Méthode : Relier convexité d’une fonction et sens de variation de sa dérivée

> [!NOTE] **Méthode**  
> Soit \( f \) une fonction définie et dérivable sur \([0 ; 4]\).  
> On note \(\mathcal{C}_f\) sa courbe représentative et \(\mathcal{C}_{f'}\) la courbe représentative de sa fonction dérivée \( f' \), représentée ci-dessous.  
> ![](/images/image47.png)
> \(\mathcal{C}_f\) est l’une des trois courbes ci-dessous.  
> Préciser laquelle en justifiant clairement la réponse.  
> ![](/images/image48.png)

{{% details title="Solution commentée" closed="true" %}}
\(\mathcal{C}_{f'}\) est au-dessus de l’axe des abscisses, donc \( f' \) est positive, donc \( f \) est une fonction croissante, ce qui élimine la courbe \(\mathcal{C}_2\).  
De plus, l’allure de \(\mathcal{C}_{f'}\) indique que \( f' \) est décroissante et donc que \( f \) est concave : la courbe représentative de \( f \) est donc la courbe \(\mathcal{C}_1\).  
{{% /details %}}