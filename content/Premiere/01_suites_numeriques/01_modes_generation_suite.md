---
title: 'Modes de génération d’une suite numérique'
weight: 1
cascade:
  type: docs
---

## Définition d’une suite numérique

> [!TIP] **Définition**  
> Une **suite numérique** \((u_n)\) est une fonction \(u : n \mapsto u(n)\) définie sur \(\mathbb{N}\) (ou seulement pour les entiers \(n \geq k\), avec \(k\) entier naturel) et à valeurs réelles.  
> Le réel \(u(n)\) se note \(u_n\) (lire « \(u\) indice \(n\) ») : c’est le **terme de rang \(n\)**, aussi appelé **terme général** de la suite.  

Pour représenter une suite dans un repère, on place les points de coordonnées \((n\,;u_n)\) : on obtient un nuage de points isolés (on ne les relie pas).

![](/images/image273.png)

{{% details title="Exemple" closed="true" %}}  
On considère la liste de nombres \(2 ; 6 ; 18 ; 54 \ldots\) Elle donne les premiers termes d’une suite \((u_n)\) avec \(u_0 = 2\), \(u_1 = 6\), \(u_2 = 18\), \(u_3 = 54\ldots\)  
Le nombre 2 est le terme de rang 0, le nombre 6 le terme de rang 1, le nombre 18 le terme de rang 2, et ainsi de suite.  
{{% /details %}}

## Suite définie par une formule explicite \(u_n = f(n)\)

> [!TIP] **Définition**  
> Une suite est définie par une **formule explicite** lorsque son terme général \(u_n\) est donné directement en fonction de \(n\), sous la forme \(u_n = f(n)\).  
> On peut alors calculer n’importe quel terme à partir de son seul rang, sans connaître les termes précédents.  

{{% details title="Exemples" closed="true" %}}  
- Pour tout entier naturel \(n\), \(u_n = 5n - 3\).  
\(u_0 = 5 \times 0 - 3 = -3 \ ; \ u_1 = 5 \times 1 - 3 = 2 \ ; \ u_2 = 5 \times 2 - 3 = 7 \ ; \ldots ; \ u_{10} = 5 \times 10 - 3 = 47\).  

- Pour tout entier \(n \geq 2\), \(v_n = \dfrac{1}{n - 1}\).  
La suite commence au rang 2 (le calcul est impossible pour \(n = 1\)) :  
\(v_2 = \dfrac{1}{2-1} = 1 \ ; \ v_3 = \dfrac{1}{2} \ ; \ldots ; \ v_{11} = \dfrac{1}{10}\).  
{{% /details %}}

## Suite définie par une relation de récurrence \(u_{n+1} = f(u_n)\)

> [!TIP] **Définition**  
> Une suite est définie par une **relation de récurrence** lorsqu’on donne :  
> - son premier terme ;  
> - une relation permettant d’obtenir chaque terme à partir du terme précédent.  
>   
> Pour calculer \(u_n\), il faut alors avoir calculé, de proche en proche, tous les termes de rang inférieur.  

{{% details title="Exemples" closed="true" %}}  
- La suite \((u_n)\) a pour premier terme \(u_0 = 4\), et chaque terme s’obtient en ajoutant 7 au précédent.  
\(u_0 = 4 \ ; \ u_1 = u_0 + 7 = 11 \ ; \ u_2 = u_1 + 7 = 18 \ldots\)  

- La suite \((v_n)\) est définie par \(v_0 = 2\) et, pour tout entier naturel \(n\), \(v_{n+1} = 3v_n - 1\).  
\(v_0 = 2 \ ; \ v_1 = 3 \times 2 - 1 = 5 \ ; \ v_2 = 3 \times 5 - 1 = 14 \ldots\)  
{{% /details %}}  

> [!IMPORTANT] **Remarque**  
> Formule explicite et récurrence ne sont pas les seules façons de définir une suite : on peut aussi la décrire par un algorithme, ou par un comptage (par exemple le nombre d’allumettes nécessaires pour construire le \(n\)-ième motif d’une figure qui grandit).

## Calculer des termes d’une suite

> [!NOTE] **Exercice résolu 1 — Calculer des termes d’une suite**  
> 1. On considère la suite \((u_n)\) définie pour tout entier naturel \(n\) par :  
> \[
u_n = 2n^2 + n - 3
\]  
> a. Calculer le terme de rang 4, puis le 8e terme.  
> b. Exprimer \(u_{n+1}\) et \(u_{2n}\) en fonction de \(n\).  
>   
> 2. On considère la suite \((v_n)\) définie par \(v_0 = 4\) et, pour tout entier naturel \(n\),  
> \[
v_{n+1} = 2v_n - 3.
\]  
> Calculer \(v_3\).  
>   
> 3. On considère la suite \((w_n)\) définie par \(w_0 = \tfrac{1}{3}\) et, pour tout entier naturel \(n\),  
> \[
w_{n+1} = 3w_n(1 - w_n) + 1.
\]  
> Calculer \(w_2\).  

{{% details title="Solution commentée" closed="true" %}}  
**1.**  
a. Le terme de rang 4 est \(u_4\) : on remplace \(n\) par 4.  
\[
u_4 = 2 \times 4^2 + 4 - 3 = 32 + 4 - 3 = 33
\]  
Le premier terme est \(u_0\) : le 1er terme est de rang 0, donc le 8e terme est de rang 7.  
\[
u_7 = 2 \times 7^2 + 7 - 3 = 98 + 7 - 3 = 102
\]  

b. On remplace \(n\) par \(n+1\), puis par \(2n\), et on développe :  
\[
u_{n+1} = 2(n+1)^2 + (n+1) - 3 = 2n^2 + 4n + 2 + n + 1 - 3 = 2n^2 + 5n
\]  
\[
u_{2n} = 2(2n)^2 + 2n - 3 = 8n^2 + 2n - 3
\]  

---

**2.** La suite est définie par récurrence : on calcule les termes un par un jusqu’à \(v_3\).  
\[
v_1 = 2v_0 - 3 = 2 \times 4 - 3 = 5
\]  
\[
v_2 = 2v_1 - 3 = 2 \times 5 - 3 = 7
\]  
\[
v_3 = 2v_2 - 3 = 2 \times 7 - 3 = 11
\]  

---

**3.** Même démarche : on calcule \(w_1\), puis \(w_2\).  
\[
w_1 = 3w_0(1 - w_0) + 1 = 3 \times \tfrac{1}{3} \times \left(1 - \tfrac{1}{3}\right) + 1 = \tfrac{2}{3} + 1 = \tfrac{5}{3}
\]  
\[
w_2 = 3w_1(1 - w_1) + 1 = 3 \times \tfrac{5}{3} \times \left(1 - \tfrac{5}{3}\right) + 1 = 5 \times \left(-\tfrac{2}{3}\right) + 1 = -\tfrac{10}{3} + 1 = -\tfrac{7}{3}
\]  
{{% /details %}}
