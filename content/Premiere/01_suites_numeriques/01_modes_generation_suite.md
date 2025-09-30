---
title: 'Modes de génération d’une suite numérique'
weight: 1
cascade:
  type: docs
---

## Définition d’une suite numérique

> [!TIP] **Définition**  
> Une **suite numérique** est une fonction \(u : n \mapsto u(n)\) définie sur \(\mathbb{N}\) (ou seulement pour \(n \geq k\) avec \(k\) entier naturel) et à valeurs dans \(\mathbb{R}\).  
> Le nombre réel \(u(n)\), noté \(u_n\) (se lit « \(u\) indice \(n\) »), est appelé le terme de rang \(n\) ou le terme général de la suite. On note cette suite \((u_n)\).  

Une suite \((u_n)\) peut être représentée graphiquement par le nuage de points de coordonnées \((n;u_n)\).  

![](/images/image8.png)

{{% details title="Exemple" closed="true" %}}  
La liste \(50 ; 25 ; 12,5 ; 6,25 \ldots\) définit les premiers termes de la suite \((u_n)\) telle que \(u_0 = 50\), \(u_1 = 25\), \(u_2 = 12,5\), \(u_3 = 6,25 \ldots\).  
On dit que 50 est le terme de rang 0 ; 25 est le terme de rang 1 ; 12,5 est le terme de rang 2, etc.  
{{% /details %}}

## Suite définie par une formule explicite \(u_n = f(n)\)

> [!TIP] **Définition**  
> Une suite est définie par une **formule explicite** lorsque \(u_n\) s’exprime en fonction de l’entier \(n\).  
> Dans ce cas, on peut calculer chaque terme \(u_n\) directement à partir de son rang \(n\).  

{{% details title="Exemples" closed="true" %}}  
- Pour tout entier naturel \(n\), on donne \(u_n = 2n\).  
\(u_0 = 2 \times 0 = 0 \ ; \ u_1 = 2 \times 1 = 2\).  
\(u_2 = 2 \times 2 = 4 \ ; \ldots ; \ u_{20} = 2 \times 20 = 40\).  

- Pour tout entier naturel \(n \geq 1\), on donne \(v_n = \sqrt{n - 1}\).  
\(v_1 = \sqrt{1 - 1} = 0\) (le premier terme ici est \(v_1\) et non \(v_0\)) ;  
\(v_2 = \sqrt{2 - 1} = 1 \ ; \ldots ; \ v_{17} = \sqrt{17 - 1} = 4\).  
{{% /details %}}

## Suite définie par une relation de récurrence \(u_{n+1} = f(u_n)\)

> [!TIP] **Définition**  
> Une suite est définie par une **relation de récurrence** lorsqu’elle est définie par la donnée de :  
> - son premier terme ;  
> - une relation qui permet de calculer chaque terme à partir du précédent.  
>   
> Dans ce cas, pour calculer chaque terme \(u_n\), il faut avoir calculé tous les termes qui le précèdent.  


{{% details title="Exemples" closed="true" %}}  
- On définit la suite \((u_n)\) par \(u_0 = 5\) et chaque terme est le triple de son précédent.  
\(u_0 = 5 \ ; \ u_1 = 3u_0 = 3 \times 5 = 15\ ;\ u_2 = 3u_1 = 3 \times 15 = 45 \ldots\)  

- On définit la suite \((v_n)\) par \(v_0 = 3\) et, pour tout entier naturel \(n\),  
\(v_{n+1} = 4v_n - 6\).  
\(v_0 = 3 \ ; \ v_1 = 4v_0 - 6 = 4 \times 3 - 6 = 6 \ ; \ v_2 = 4v_1 - 6 = 4 \times 6 - 6 = 18 \ldots\)  
{{% /details %}}  

> [!IMPORTANT] **Remarque**  
> Il existe d’autres modes de génération d’une suite comme par exemple un algorithme ou encore un dénombrement lié à une suite de motifs géométriques.


## Calculer des termes d’une suite

> [!NOTE] **Exercice résolu 1 — Calculer des termes d’une suite**  
> 1. Soit la suite \((u_n)\) définie pour tout entier naturel \(n\) par :  
> \[
> u_n = 3n^2 - 2n + 1
> \]  
> a. Calculer le terme de rang 5, puis le 10e terme.  
> b. Déterminer l’expression en fonction de \(n\) des termes \(u_{n+1}\) et \(u_{2n}\).  
>   
> 2. Soit la suite \((v_n)\) définie par \(v_0 = 1\) et, pour tout entier naturel \(n\),  
> \[
v_{n+1} = 0,5v_n + 4.
\]  
> Calculer \(v_3\).  
>   
> 3. Soit la suite \((w_n)\) définie par \(w_0 = \tfrac{3}{2}\) et, pour tout entier naturel \(n\),  
> \[
w_{n+1} = 2w_n(1 - w_n) + 2.
\]  
> Calculer \(w_2\).  

{{% details title="Solution commentée" closed="true" %}}  
**1.**  
a. Le terme de rang 5 est \(u_5\). On remplace \(n\) par 5 :  
\[
u_5 = 3 \times 5^2 - 2 \times 5 + 1 = 66
\]  
Le premier terme étant de rang 0, le 10e terme est de rang 9 :  
\[
u_9 = 3 \times 9^2 - 2 \times 9 + 1 = 226
\]  

b.  
\[
u_{n+1} = 3(n+1)^2 - 2(n+1) + 1 = 3n^2 + 6n + 3 - 2n - 2 + 1 = 3n^2 + 4n + 2
\]  
\[
u_{2n} = 3(2n)^2 - 2(2n) + 1 = 12n^2 - 4n + 1
\]  

---

**2.** Pour obtenir \(v_3\), il faut calculer tous les termes qui le précèdent :  
\[
v_1 = v_0 \times 0,5 + 4 = 0,5 \times 1 + 4 = 4,5
\]  
\[
v_2 = v_1 \times 0,5 + 4 = 0,5 \times 4,5 + 4 = 6,25
\]  
\[
v_3 = v_2 \times 0,5 + 4 = 0,5 \times 6,25 + 4 = 7,125
\]  

---

**3.** Pour obtenir \(w_2\), il faut calculer tous les termes qui le précèdent :  
\[
w_1 = 2w_0(1 - w_0) + 2 = 2 \times \tfrac{3}{2}(1 - \tfrac{3}{2}) + 2 = 3 \times (-\tfrac{1}{2}) + 2 = -\tfrac{3}{2} + 2 = \tfrac{1}{2}
\]  
\[
w_2 = 2w_1(1 - w_1) + 2 = 2 \times \tfrac{1}{2}(1 - \tfrac{1}{2}) + 2 = 1 \times \tfrac{1}{2} + 2 = \tfrac{5}{2}
\]  
{{% /details %}}