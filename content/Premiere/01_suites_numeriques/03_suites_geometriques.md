---
title: 'Suites géométriques'
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> Soit \(u_0\) un nombre réel.  
> Une suite \((u_n)\) de premier terme \(u_0\) est **géométrique** s’il existe un nombre réel \(q\) tel que, pour tout entier naturel \(n\), on a :  
> \[
u_{n+1} = q u_n.
\]  
> Le nombre \(q\) est appelé **raison de la suite** \((u_n)\).

> [!IMPORTANT] **Remarque**  
> Une suite \((u_n)\) est géométrique si, pour passer d’un terme au suivant, on multiplie toujours par le même nombre.  

{{% details title="Exemple" closed="true" %}}  
Soit la suite \((u_n)\) définie par \(u_0 = 5\) et, pour tout entier naturel \(n\), \(u_{n+1} = 2u_n\).  
On passe d’un terme au suivant en le multipliant par 2. Ainsi :  
\[
u_1 = 10,\; u_2 = 20,\; u_3 = 40 \dots
\]  
La suite \((u_n)\) est géométrique de premier terme 5 et de raison 2.  
{{% /details %}}

> [!TIP] **Propriété**  
> \((u_n)\) est la suite géométrique de premier terme \(u_0\) et de raison \(q\) si et seulement si, pour tout entier naturel \(n\), on a :  
> \[
u_n = u_0 q^n.
\]

> [!IMPORTANT] **Remarques**  
> - La propriété précédente peut être utilisée avec d’autres termes que \(u_0\) :  
>   \[
u_n = u_1 \times q^{n-1} = u_2 \times q^{n-2} = \dots
\]  
>   et, de façon générale, pour \(p\) entier naturel,  
>   \[
u_n = u_p \times q^{n-p}.
\]  
> - De la relation de récurrence \(u_{n+1} = q u_n\), on peut passer à la formule explicite \(u_n = u_0 q^n\).  
> - Ainsi, pour une suite géométrique, \(u_n = f(n)\), où \(f\) est une fonction de type **exponentielle** (vue dans un chapitre ultérieur).

{{% details title="Exemple" closed="true" %}}  
Soit la suite \((u_n)\) définie par \(u_0 = 2\) et, pour tout entier naturel \(n\), \(u_{n+1} = 3u_n\).  
La suite \((u_n)\) est géométrique de premier terme \(u_0 = 2\) et de raison 3.  

Pour tout entier naturel \(n\), on a :  
\[
u_n = u_0 \times q^n = 2 \times 3^n.
\]  
{{% /details %}}


## Somme des premières puissances d’un réel \(q\)

> [!TIP] **Propriété**  
> Pour tout entier naturel \(n\) et pour tout réel \(q\) différent de 1, on a :  
> \[
1 + q + q^2 + q^3 + \dots + q^n = \frac{1 - q^{n+1}}{1 - q}.
\]

> [!IMPORTANT] **Remarques**  
> - Il s’agit de la somme des \(n+1\) premiers termes de la suite géométrique \((u_n)\) de premier terme \(u_0 = 1\) et de raison \(q\) différente de 1. La formule de la somme de termes consécutifs d’une suite géométrique quelconque est donnée et démontrée p. 21.  
> - Lorsque \(q = 1\), la somme \(1 + q + q^2 + q^3 + \dots + q^n\) vaut \(n + 1\).  


> [!NOTE] **Exercice résolu**  
> Soit la suite \((u_n)\) définie par \(u_0 = 6\) et, pour tout entier naturel \(n\),  
> \[
u_{n+1} = \tfrac{3}{2} u_n.
\]  
> 1. Donner la formule explicite de \(u_n\). En déduire la valeur exacte puis arrondie à l’unité de \(u_{11}\).  
> 2. Quel est le rang du premier terme qui dépasse 100 ?  

{{% details title="Solution commentée" closed="true" %}}

**1.** La suite \((u_n)\) est géométrique de premier terme \(u_0 = 6\) et de raison \(\tfrac{3}{2}\).  
Donc, pour tout entier naturel \(n\), on a :  
\[
u_n = u_0 q^n = 6 \left(\tfrac{3}{2}\right)^n.
\]  

En particulier,  
\[
u_{11} = 6 \left(\tfrac{3}{2}\right)^{11} = \tfrac{531441}{1024} \approx 519.
\]  

---

**2.** Pour tout entier naturel \(n\),  
\[
u_n = 6 \left(\tfrac{3}{2}\right)^n.
\]  
On cherche le plus petit entier \(n\) tel que :  
\[
6 \left(\tfrac{3}{2}\right)^n \geq 100.
\]  

En calculant les premiers termes à la calculatrice, on trouve :  
\[
u_1 = 9,\quad u_2 = \tfrac{27}{2} = 13,5,\quad u_3 = \tfrac{81}{4} = 20,25,
\]  
\[
u_4 = \tfrac{243}{8} \approx 30,375,\quad u_5 = \tfrac{729}{16} \approx 46,\quad u_6 = \tfrac{2187}{32} \approx 68,\quad u_7 = \tfrac{6561}{64} \approx 103.
\]  

Donc le plus petit entier \(n\) tel que \(6 \left(\tfrac{3}{2}\right)^n \geq 100\) est **7**.  

{{% /details %}}