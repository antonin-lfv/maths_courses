---
title: 'Variations et courbes représentatives des fonctions'
weight: 2
cascade:
  type: docs
---

## Lien entre sens de variation d’une fonction dérivable sur un intervalle et signe de sa fonction dérivée

> [!TIP] **Théorème (admis)**  
> Soit \( f \) une fonction dérivable sur un intervalle \( I \subset \mathbb{R} \).  
>- \( f \) est **croissante** sur \( I \) si et seulement si \( f'(x) \ge 0 \) pour tout \( x \in I \).  
>- \( f \) est **décroissante** sur \( I \) si et seulement si \( f'(x) \le 0 \) pour tout \( x \in I \).  
>- \( f \) est **constante** sur \( I \) si et seulement si \( f'(x) = 0 \) pour tout \( x \in I \).

> [!IMPORTANT] **Remarque**  
> En pratique, pour étudier les variations d’une fonction dérivable, on calcule \(f'(x)\), on étudie son signe, puis on résume le tout dans un **tableau de variation**.

## Lien entre extremums et dérivation

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \subset \mathbb{R} \), et \( a \in I \).  
>- \( f \) admet un **maximum** en \( a \) si \( f(x) \le f(a) \) pour tout \( x \in I \).  
> Ce maximum vaut \( f(a) \) ; il est atteint en \( a \).  
>- \( f \) admet un **minimum** en \( a \) si \( f(x) \ge f(a) \) pour tout \( x \in I \).  
> Ce minimum vaut \( f(a) \) ; il est atteint en \( a \).

> [!IMPORTANT] **Remarque**  
> Le mot **extremum** désigne indifféremment un minimum ou un maximum.

> [!TIP] **Propriété**  
> Soit \( f \) une fonction dérivable sur un intervalle ouvert \( I \subset \mathbb{R} \), et \( a \in I \) (\(a\) n’est pas une borne de \( I \)).  
> Si \( f \) admet un extremum en \( a \), alors  
> \[
f'(a) = 0.
\]
> Graphiquement, la tangente à la courbe au point d’abscisse \(a\) est alors horizontale.

> [!IMPORTANT] **Remarque**  
> La réciproque de cette propriété est **fausse** : \(f'\) peut s’annuler en \(a\) sans que \(f\) y admette un extremum. En revanche, si \(f'\) s’annule en \(a\) **en changeant de signe**, alors \(f\) admet un extremum en \(a\).

{{% details title="Exemple" closed="true" %}}
On considère la fonction cube, \( f(x) = x^3 \).  
Sa dérivée est \( f'(x) = 3x^2 \), donc \( f'(0) = 0 \) : la tangente en \(O\) est horizontale.  
Pourtant \( f'(x) \geq 0 \) pour tout \(x\) (la dérivée s’annule en 0 sans changer de signe) : \( f \) est **croissante** sur \( \mathbb{R} \) et n’admet **pas d’extremum** en 0.

![](/images/image180.png)
{{% /details %}}

## Exercice résolu : Étudier les variations d’une fonction

> [!NOTE] **Exercice résolu**  
> On considère la fonction \(f\) définie sur \([-2\,;4]\) par \(f(x)=\dfrac{1}{3}x^3-x^2-3x+2\).  
> 1. Calculer la dérivée de \(f\) et étudier son signe.  
> 2. En déduire le sens de variation de \(f\), puis dresser son tableau de variation.  
> 3. En déduire les extremums de \(f\) sur \([-2\,;4]\) et préciser en quelles valeurs ils sont atteints.

{{% details title="Solution commentée" closed="true" %}}
1. \(f\) est une fonction polynôme, dérivable sur \([-2\,;4]\), et  
\[
f'(x)=\frac{1}{3} \times 3x^2 - 2x - 3 = x^2-2x-3.
\]  
\(f'(x)\) est un trinôme du second degré ; on cherche ses racines :  
\(\Delta =(-2)^2-4\times1\times(-3)=16>0\), et \(\sqrt{\Delta} = 4\).  
Donc \(f'(x)=0\) pour \(x_1=\dfrac{2-4}{2}=-1\) et \(x_2=\dfrac{2+4}{2}=3\).  
Comme \(a=1>0\), \(f'(x)\) est positif à l’extérieur des racines et négatif entre elles. Sur \([-2\,;4]\) :  
- \(f'(x)>0\) sur \([-2\,;-1[ \cup ]3\,;4]\) ;  
- \(f'(x)=0\) en \(-1\) et en \(3\) ;  
- \(f'(x)<0\) sur \(]-1\,;3[\).

2. \(f\) est donc croissante sur \([-2\,;-1]\), décroissante sur \([-1\,;3]\) et croissante sur \([3\,;4]\). On calcule les images utiles :  
\(f(-2)=-\dfrac{8}{3}-4+6+2=\dfrac{4}{3}\) ; \(f(-1)=-\dfrac{1}{3}-1+3+2=\dfrac{11}{3}\) ; \(f(3)=9-9-9+2=-7\) ; \(f(4)=\dfrac{64}{3}-16-12+2=-\dfrac{14}{3}\).

![](/images/image181.png)

3. On compare les valeurs « hautes » et « basses » du tableau, y compris aux bornes :  
- le maximum de \(f\) sur \([-2\,;4]\) est \(\dfrac{11}{3}\) (supérieur à \(f(4)\)), atteint en \(x=-1\) ;  
- le minimum de \(f\) sur \([-2\,;4]\) est \(-7\) (inférieur à \(f(-2)\)), atteint en \(x=3\).
{{% /details %}}

## Exercice résolu : Utiliser la courbe représentative de \(f'\)

> [!NOTE] **Exercice résolu**  
> On donne ci-dessous la courbe représentative de la fonction dérivée \(f'\) d’une fonction \(f\) dérivable sur \(\mathbb{R}\).  
> Déterminer les valeurs en lesquelles la fonction \(f\) admet un extremum.
> ![](/images/image182.png)

{{% details title="Solution commentée" closed="true" %}}
Graphiquement, \(f'(x)=0\) pour \(x = -1\) et \(x = 2\). On lit aussi le signe de \(f'\) : la courbe est sous l’axe des abscisses sur \(]-\infty\,;-1[\) et au-dessus sur \(]-1\,;2[\) et sur \(]2\,;+\infty[\).  
On en déduit le tableau de variation de \(f\) :  

![](/images/image183.png)

- En \(-1\), \(f'\) s’annule **en changeant de signe** (de \(-\) à \(+\)) : \(f\) admet un **minimum** en \(-1\).  
- En \(2\), \(f'\) s’annule **sans changer de signe** : \(f\) n’admet pas d’extremum en 2 (la courbe de \(f\) y a seulement une tangente horizontale).  

Les informations disponibles ne permettent pas de connaître la valeur \(f(-1)\) de ce minimum.
{{% /details %}}
