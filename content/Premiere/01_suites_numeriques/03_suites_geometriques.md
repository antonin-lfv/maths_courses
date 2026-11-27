---
title: 'Suites géométriques'
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> Soit \(u_0\) un nombre réel.  
> La suite \((u_n)\) de premier terme \(u_0\) est **géométrique** s’il existe un réel \(q\) tel que, pour tout entier naturel \(n\) :  
> \[
u_{n+1} = q u_n.
\]  
> Le réel \(q\) est la **raison** de la suite \((u_n)\).

> [!IMPORTANT] **Remarque**  
> Autrement dit, une suite est géométrique quand on passe de chaque terme au suivant en multipliant toujours par le même nombre.  

{{% details title="Exemple" closed="true" %}}  
On définit \((u_n)\) par \({u_0 = 3}\) et, pour tout entier naturel \(n\), \({u_{n+1} = -2u_n}\).  
Chaque terme s’obtient en multipliant le précédent par \({-2}\) :  
\[
u_1 = -6,\; u_2 = 12,\; u_3 = -24 \dots
\]  
La suite \((u_n)\) est géométrique, de premier terme 3 et de raison \({-2}\).  
{{% /details %}}

> [!TIP] **Propriété**  
> \((u_n)\) est la suite géométrique de premier terme \(u_0\) et de raison \(q\) si et seulement si, pour tout entier naturel \(n\) :  
> \[
u_n = u_0 q^n.
\]

> [!IMPORTANT] **Remarques**  
> - La formule s’adapte si l’on part d’un autre terme que \(u_0\) :  
>   \[
u_n = u_1 \times q^{n-1} = u_2 \times q^{n-2} = \dots
\]  
>   et plus généralement, pour tout entier naturel \(p\),  
>   \[
u_n = u_p \times q^{n-p}.
\]  
> - Cette propriété permet de passer de la relation de récurrence \({u_{n+1} = q u_n}\) à la formule explicite \({u_n = u_0 q^n}\).  
> - On a donc \({u_n = f(n)}\) avec \(f\) une fonction de type **exponentielle**, étudiée dans un chapitre ultérieur.

{{% details title="Exemple" closed="true" %}}  
On définit \((u_n)\) par \({u_0 = 5}\) et, pour tout entier naturel \(n\), \({u_{n+1} = \dfrac{1}{2}u_n}\).  
La suite \((u_n)\) est géométrique de premier terme \({u_0 = 5}\) et de raison \(\dfrac{1}{2}\).  

Pour tout entier naturel \(n\) :  
\[
u_n = u_0 \times q^n = 5 \times \left(\dfrac{1}{2}\right)^n.
\]  
{{% /details %}}

## Somme des premières puissances d’un réel \(q\)

> [!TIP] **Propriété**  
> Pour tout entier naturel \(n\) et tout réel \({q \neq 1}\) :  
> \[
1 + q + q^2 + q^3 + \dots + q^n = \dfrac{1 - q^{n+1}}{1 - q}.
\]

> [!IMPORTANT] **Remarques**  
> - C’est la somme des \({n+1}\) premiers termes de la suite géométrique de premier terme \({u_0 = 1}\) et de raison \({q \neq 1}\). En multipliant par \(u_0\), on obtient la somme des termes consécutifs de n’importe quelle suite géométrique de raison \({q \neq 1}\) : \({u_0 + u_1 + \dots + u_n = u_0 \times \dfrac{1 - q^{n+1}}{1 - q}}\).  
> - Si \({q = 1}\), tous les termes valent 1 et la somme \({1 + q + q^2 + \dots + q^n}\) vaut \({n + 1}\).  

> [!NOTE] **Exercice résolu**  
> On définit la suite \((u_n)\) par \({u_0 = 2}\) et, pour tout entier naturel \(n\),  
> \[
u_{n+1} = \dfrac{5}{4} u_n.
\]  
> 1. Donner la formule explicite de \(u_n\). En déduire la valeur exacte de \(u_{10}\), puis son arrondi à l’unité.  
> 2. Déterminer le rang du premier terme supérieur ou égal à 50.  

{{% details title="Solution commentée" closed="true" %}}

**1.** La suite \((u_n)\) est géométrique de premier terme \({u_0 = 2}\) et de raison \(\dfrac{5}{4}\).  
Donc, pour tout entier naturel \(n\) :  
\[
u_n = u_0 q^n = 2 \left(\dfrac{5}{4}\right)^n.
\]  

En particulier,  
\[
u_{10} = 2 \left(\dfrac{5}{4}\right)^{10} = 2 \times \dfrac{9\,765\,625}{1\,048\,576} = \dfrac{9\,765\,625}{524\,288} \approx 19.
\]  

---

**2.** On cherche le plus petit entier naturel \(n\) tel que :  
\[
2 \left(\dfrac{5}{4}\right)^n \geq 50.
\]  

La suite est croissante (raison supérieure à 1 et premier terme positif). Avec le tableau de valeurs de la calculatrice :  
\[
u_{12} \approx 29,1,\quad u_{13} \approx 36,4,\quad u_{14} \approx 45,5,\quad u_{15} \approx 56,8.
\]  

On a \({u_{14} < 50}\) et \({u_{15} \geq 50}\) : le premier terme supérieur ou égal à 50 est de rang **15**.  

{{% /details %}}
