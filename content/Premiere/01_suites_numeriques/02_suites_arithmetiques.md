---
title: 'Suites arithmétiques'
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> Soit \(u_0\) un nombre réel.  
> Une suite \((u_n)\) de premier terme \(u_0\) est **arithmétique** s’il existe un nombre réel \(r\) tel que, pour tout entier naturel \(n\),  
> \[
 u_{n+1} = u_n + r.
 \]  
> Le nombre \(r\) est appelé **raison** de la suite \((u_n)\).  

> [!IMPORTANT] **Remarque**  
> Une suite \((u_n)\) est arithmétique si, pour passer d’un terme au suivant, on ajoute toujours le même nombre ou encore si la différence \(u_{n+1} - u_n\) ne dépend pas de \(n\).  

{{% details title="Exemple" closed="true" %}}  
Soit la suite \((u_n)\) définie par \(u_0 = 3\) et, pour tout entier naturel \(n\),  
\[
u_{n+1} = u_n + 5
\]  
On passe d’un terme au suivant en ajoutant 5. Ainsi \(u_1 = 8\), \(u_2 = 13\), \(u_3 = 18 \ldots\)  
La suite \((u_n)\) est arithmétique de premier terme 3 et de raison 5.  
{{% /details %}}  

> [!TIP] **Propriété**  
> \((u_n)\) est la suite arithmétique de premier terme \(u_0\) et de raison \(r\) si et seulement si, pour tout entier naturel \(n\),  
> \[
 u_n = u_0 + nr.
 \]  

> [!IMPORTANT] **Remarques**  
> - La propriété précédente peut être utilisée avec d’autres termes que \(u_0\) :  
>  $$
  u_n = u_1 + (n-1)r = u_2 + (n-2)r = \ldots
   $$  
>   et, de façon générale pour \(p\) entier naturel,  
>  $$
  u_n = u_p + (n-p)r.
   $$  
> - De la relation de récurrence \(u_{n+1} = u_n + r\), on peut passer à la formule explicite \(u_n = u_0 + nr\).  
> - Pour une suite arithmétique, on a \(u_n = f(n)\), où \(f\) est la fonction affine \(f(x) = u_0 + xr\).  
>   Dans un repère, les points de coordonnées \((n ; u_n)\) sont alignés.  

{{% details title="Exemple" closed="true" %}}  
Soit la suite \((u_n)\) définie par \(u_0 = -1\) et, pour tout entier naturel \(n\) :  
\[
u_{n+1} = u_n + 1,5
\]  
La suite \((u_n)\) est arithmétique de premier terme \(u_0 = -1\) et de raison 1,5.  
Donc, pour tout entier naturel \(n\), on a :  
\[
u_n = u_0 + nr = -1 + 1,5n
\]  
{{% /details %}}


## Somme des premiers entiers

> [!TIP] **Propriété**  
> Pour tout entier naturel \(n\) non nul, on a :  
> \[
  1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2}.
  \]  

> [!IMPORTANT] **Remarque**  
> Il s’agit de la somme des \(n\) premiers termes de la suite arithmétique \((u_n)\) de premier terme \(u_0 = 1\) et de raison 1.  


## Reconnaître une suite arithmétique

> [!NOTE] **Exercice résolu 1 — Reconnaître une suite arithmétique**  
> 1. La suite \((u_n)\), définie par \(u_n = n^2\) pour tout entier naturel \(n\), est-elle arithmétique ?  
> 2. La suite \((v_n)\), définie par \(v_n = n^2 - (n+1)^2\) pour tout entier naturel \(n\), est-elle arithmétique ?  

{{% details title="Solution commentée" closed="true" %}}  
**1.** On commence par calculer les premiers termes de la suite \((u_n)\) :  
\[
u_0 = 0 \ ; \ u_1 = 1 \ ; \ u_2 = 4
\]  
On a \(u_1 - u_0 = 1\) et \(u_2 - u_1 = 3\), donc \(u_1 - u_0 \neq u_2 - u_1\).  
La suite \((u_n)\) n’est donc **pas arithmétique**.  

---

**2.** On commence par calculer les premiers termes de la suite \((v_n)\) :  
\[
v_0 = 0^2 - (0+1)^2 = -1 \ ; \ v_1 = 1^2 - (1+1)^2 = -3 \ ; \ v_2 = 2^2 - (2+1)^2 = -5
\]  
Il semble que la suite \((v_n)\) soit arithmétique de raison \(-2\).  

Pour le prouver, on montre que la différence entre deux termes consécutifs quelconques est égale à \(-2\).  
Pour tout entier naturel \(n\), on a :  
\[
v_{n+1} - v_n = [(n+1)^2 - (n+2)^2] - [n^2 - (n+1)^2]
\]  
\[
= (n^2 + 2n + 1 - n^2 - 4n - 4) - (n^2 - n^2 - 2n - 1)
\]  
\[
= (-2n - 3) - (-2n - 1) = -2n - 3 + 2n + 1 = -2
\]  

Ainsi, pour tout entier naturel \(n\), \(v_{n+1} - v_n = -2\).  
Donc la suite \((v_n)\) est **arithmétique de raison -2**.  

*Remarque* : on peut également prouver que \((v_n)\) est arithmétique en montrant que  
\[
v_n = n^2 - (n+1)^2 = -2n - 1 = f(n)
\]  
avec \(f\) affine.  
{{% /details %}}


## Étudier une suite arithmétique

> [!NOTE] **Exercice résolu 2 — Étudier une suite arithmétique**  
> Soit la suite \((u_n)\) définie par \(u_0 = -7\) et, pour tout entier naturel \(n\),  
> \[
 u_{n+1} = u_n + 4.
 \]  
> 1. Donner la formule explicite de \(u_n\). En déduire la valeur de \(u_{21}\).  
> 2. Un terme de la suite vaut-il 2019 ?  

{{% details title="Solution commentée" closed="true" %}}  
**1.** La suite \((u_n)\) est arithmétique de premier terme \(u_0 = -7\) et de raison 4.  
Donc, pour tout entier naturel \(n\), on a :  
\[
u_n = u_0 + nr = -7 + 4n.
\]  
En particulier :  
\[
u_{21} = -7 + 4 \times 21 = 77.
\]  

---

**2.** On cherche s’il existe un entier naturel \(n\) tel que \(u_n = 2019\).  
On résout l’équation :  
\[
u_n = 2019 \iff -7 + 4n = 2019 \iff 4n = 2026 \iff n = \frac{2026}{4} = 506,5.
\]  

Or \(n\) doit être un entier naturel, donc **aucun terme de la suite n’est égal à 2019**.  
{{% /details %}}