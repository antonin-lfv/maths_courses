---
title: 'Variations et courbes représentatives des fonctions'
weight: 2
cascade:
  type: docs
---

## Lien entre sens de variation d’une fonction dérivable sur un intervalle et signe de sa fonction dérivée

> [!TIP] **Théorème (admis)**  
> Soit \( f \) une fonction dérivable sur un intervalle \( I \subset \mathbb{R} \).  
>- \( f \) est **croissante** sur \( I \) si et seulement si, pour tout \( x \in I \), \( f'(x) \ge 0 \).  
>- \( f \) est **décroissante** sur \( I \) si et seulement si, pour tout \( x \in I \), \( f'(x) \le 0 \).  
>- \( f \) est **constante** sur \( I \) si et seulement si, pour tout \( x \in I \), \( f'(x) = 0 \).


## Lien entre extremums et dérivation

> [!TIP] **Définition**  
> Soient \( f \) une fonction définie sur un intervalle \( I \subset \mathbb{R} \) et \( a \in I \).  
>- \( f \) admet un **maximum** en \( a \) si, pour tout \( x \in I \), \( f(x) \le f(a) \).  
> Le maximum vaut \( f(a) \) et est atteint en \( a \).  
>- \( f \) admet un **minimum** en \( a \) si, pour tout \( x \in I \), \( f(x) \ge f(a) \).  
> Le minimum vaut \( f(a) \) et est atteint en \( a \).

> [!IMPORTANT] **Remarque**  
> Un extremum est un **minimum ou un maximum**.

> [!TIP] **Propriété**  
> Soient \( f \) une fonction dérivable sur un intervalle ouvert \( I \subset \mathbb{R} \) et \( a \in I \) (non borne de \( I \)).  
> Si \( f \) admet un extremum en \( a \), alors  
> \[
> f'(a) = 0.
> \]

> [!IMPORTANT] **Remarque**  
> La réciproque de cette propriété est **fausse**.

{{% details title="Exemple" closed="true" %}}
Soit \( f(x) = x^3 \).  
On a \( f'(x) = 3x^2 \) donc \( f'(0) = 0 \).  
Mais \( f \) est **croissante** sur \( \mathbb{R} \), donc \( f \) **n’admet pas d’extremum** sur \( \mathbb{R} \).

![](/images/image94.png)
{{% /details %}}

## Exercice résolu : Étudier les variations d’une fonction

> [!NOTE] **Exercice résolu**  
> On donne la fonction \(f\) définie sur \([-3\,;3]\) par \(f(x)=\dfrac{2}{3}x^3-\dfrac{3}{2}x^2-2x+1\).  
> 1. Déterminer l’expression de la dérivée de \(f\) et étudier son signe.  
> 2. En déduire le sens de variation de \(f\) et dresser son tableau de variation.  
> 3. En déduire les extremums de la fonction et préciser en quelles valeurs ils sont atteints.

{{% details title="Solution commentée" closed="true" %}}
1. La dérivée de la fonction \(f\) a pour expression  
\[
f'(x)=2x^2-3x-2.
\]  
\(f'(x)\) est un polynôme de degré 2. On étudie son signe en cherchant ses racines :  
\(\Delta =(-3)^2-4\times2\times(-2)=25>0\).  
Ainsi, \(f'(x)=0\) pour \(x_1=\dfrac{3-5}{4}=-\dfrac{1}{2}\) et \(x_2=\dfrac{3+5}{4}=2\).  
Comme \(a=2>0\), \(f'\) est négative entre les racines et positive à l’extérieur, donc sur \([-3\,;3]\) :  
- \(f'(x)>0\) sur \([-3\,;-\tfrac{1}{2}[ \cup ]2\,;3]\) ;  
- \(f'(x)=0\) en \(-\tfrac{1}{2}\) et \(2\) ;  
- \(f'(x)<0\) sur \(]-\tfrac{1}{2}\,;2[\).

2. Par le lien signe de \(f'\) / variations de \(f\), on obtient le tableau :

![](/images/image95.png)

3. D’après le tableau, le minimum de \(f\) sur \([-3\,;3]\) est \(-\dfrac{49}{2}\), atteint pour \(x=-3\) (borne de l’intervalle).  
Le maximum de \(f\) est \(\dfrac{37}{24}\), atteint pour \(x=-\dfrac{1}{2}\).
{{% /details %}}


## Exercice résolu : Utiliser la courbe représentative de \(f'\)

> [!NOTE] **Exercice résolu**  
> On donne ci-dessous la courbe représentative de la fonction dérivée \(f'\) d’une fonction \(f\) dérivable sur \(\mathbb{R}\).  
> - Déterminer les valeurs pour lesquelles la fonction \(f\) admet des extremums.
> ![](/images/image96.png)

{{% details title="Solution commentée" closed="true" %}}
Graphiquement, les solutions de l’équation \(f'(x)=0\) sont \(-3\) et \(1\).  
On dresse le tableau de variation de la fonction \(f\) : \(f'\) s’annule et change de signe en \(1\).  

![](/images/image97.png)

Ainsi, \(f\) admet un minimum atteint en \(1\) et en \(-3\), la dérivée s’annule sans changer de signe.  
Les renseignements dont on dispose ne permettent pas de connaître la valeur du minimum.
{{% /details %}}