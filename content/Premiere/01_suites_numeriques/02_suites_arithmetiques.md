---
title: 'Suites arithmétiques'
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> Soit \(u_0\) un nombre réel.  
> La suite \((u_n)\) de premier terme \(u_0\) est **arithmétique** s’il existe un réel \(r\) tel que, pour tout entier naturel \(n\),  
> \[
 u_{n+1} = u_n + r.
 \]  
> Le réel \(r\) est la **raison** de la suite \((u_n)\).  

> [!IMPORTANT] **Remarque**  
> Autrement dit, une suite est arithmétique quand on passe de chaque terme au suivant en ajoutant toujours le même nombre, c’est-à-dire quand la différence \(u_{n+1} - u_n\) est constante (elle ne dépend pas de \(n\)).  

{{% details title="Exemple" closed="true" %}}  
On définit \((u_n)\) par \(u_0 = -2\) et, pour tout entier naturel \(n\),  
\[
u_{n+1} = u_n + 3
\]  
Chaque terme s’obtient en ajoutant 3 au précédent : \(u_1 = 1\), \(u_2 = 4\), \(u_3 = 7 \ldots\)  
La suite \((u_n)\) est arithmétique, de premier terme \(-2\) et de raison 3.  
{{% /details %}}  

> [!TIP] **Propriété**  
> \((u_n)\) est la suite arithmétique de premier terme \(u_0\) et de raison \(r\) si et seulement si, pour tout entier naturel \(n\),  
> \[
 u_n = u_0 + nr.
 \]  

> [!IMPORTANT] **Remarques**  
> - La formule s’adapte si l’on part d’un autre terme que \(u_0\) :  
>  $$
  u_n = u_1 + (n-1)r = u_2 + (n-2)r = \ldots
   $$  
>   et plus généralement, pour tout entier naturel \(p\),  
>  $$
  u_n = u_p + (n-p)r.
   $$  
> - Cette propriété permet de passer de la relation de récurrence \(u_{n+1} = u_n + r\) à la formule explicite \(u_n = u_0 + nr\).  
> - On a \(u_n = f(n)\) avec \(f\) la fonction affine définie par \(f(x) = u_0 + rx\).  
>   Les points de coordonnées \((n\,;u_n)\) sont donc alignés (sur la droite représentant \(f\)).  

{{% details title="Exemple" closed="true" %}}  
On définit \((u_n)\) par \(u_0 = 10\) et, pour tout entier naturel \(n\) :  
\[
u_{n+1} = u_n - 2,5
\]  
La suite \((u_n)\) est arithmétique de premier terme \(u_0 = 10\) et de raison \(-2,5\).  
Par conséquent, pour tout entier naturel \(n\) :  
\[
u_n = u_0 + nr = 10 - 2,5n
\]  
{{% /details %}}

## Somme des premiers entiers

> [!TIP] **Propriété**  
> Pour tout entier naturel \(n\) non nul :  
> \[
  1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2}.
  \]  

> [!IMPORTANT] **Remarque**  
> Cette somme est celle des \(n\) premiers termes de la suite arithmétique de premier terme \(u_0 = 1\) et de raison 1.  

## Reconnaître une suite arithmétique

> [!NOTE] **Exercice résolu 1 — Reconnaître une suite arithmétique**  
> 1. La suite \((u_n)\) définie pour tout entier naturel \(n\) par \(u_n = n^2 + 1\) est-elle arithmétique ?  
> 2. La suite \((v_n)\) définie pour tout entier naturel \(n\) par \(v_n = (n+2)^2 - n^2\) est-elle arithmétique ?  

{{% details title="Solution commentée" closed="true" %}}  
**1.** On calcule les premiers termes :  
\[
u_0 = 1 \ ; \ u_1 = 2 \ ; \ u_2 = 5
\]  
On obtient \(u_1 - u_0 = 1\) et \(u_2 - u_1 = 3\) : ces deux différences ne sont pas égales.  
La suite \((u_n)\) n’est donc **pas arithmétique** (un seul contre-exemple suffit).  

---

**2.** On calcule les premiers termes :  
\[
v_0 = 2^2 - 0^2 = 4 \ ; \ v_1 = 3^2 - 1^2 = 8 \ ; \ v_2 = 4^2 - 2^2 = 12
\]  
On conjecture que \((v_n)\) est arithmétique de raison 4.  

Pour le démontrer, on calcule la différence de deux termes consécutifs quelconques. Pour tout entier naturel \(n\) :  
\[
v_{n+1} - v_n = [(n+3)^2 - (n+1)^2] - [(n+2)^2 - n^2]
\]  
\[
= (n^2 + 6n + 9 - n^2 - 2n - 1) - (n^2 + 4n + 4 - n^2)
\]  
\[
= (4n + 8) - (4n + 4) = 4
\]  

Pour tout entier naturel \(n\), \(v_{n+1} - v_n = 4\) : la suite \((v_n)\) est **arithmétique de raison 4**.  

*Remarque* : on peut aussi développer directement \(v_n = n^2 + 4n + 4 - n^2 = 4n + 4 = f(n)\), avec \(f\) affine, ce qui prouve également que \((v_n)\) est arithmétique.  
{{% /details %}}

## Étudier une suite arithmétique

> [!NOTE] **Exercice résolu 2 — Étudier une suite arithmétique**  
> On définit la suite \((u_n)\) par \(u_0 = 5\) et, pour tout entier naturel \(n\),  
> \[
 u_{n+1} = u_n - 3.
 \]  
> 1. Donner la formule explicite de \(u_n\), puis calculer \(u_{30}\).  
> 2. Les nombres \(-1000\) et \(-2027\) sont-ils des termes de la suite ?  

{{% details title="Solution commentée" closed="true" %}}  
**1.** La suite \((u_n)\) est arithmétique de premier terme \(u_0 = 5\) et de raison \(-3\).  
Donc, pour tout entier naturel \(n\) :  
\[
u_n = u_0 + nr = 5 - 3n.
\]  
En particulier :  
\[
u_{30} = 5 - 3 \times 30 = -85.
\]  

---

**2.** On cherche s’il existe un entier naturel \(n\) vérifiant l’égalité.  

- Pour \(-1000\) :  
\[
u_n = -1000 \iff 5 - 3n = -1000 \iff -3n = -1005 \iff n = 335.
\]  
335 est un entier naturel : **\(-1000\) est un terme de la suite**, c’est \(u_{335}\).  

- Pour \(-2027\) :  
\[
u_n = -2027 \iff 5 - 3n = -2027 \iff -3n = -2032 \iff n = \frac{2032}{3} \approx 677,33.
\]  
Ce nombre n’est pas entier : **\(-2027\) n’est pas un terme de la suite**.  
{{% /details %}}
