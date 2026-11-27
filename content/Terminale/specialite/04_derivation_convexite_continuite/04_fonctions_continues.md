---
title: 'Fonctions continues'
weight: 4
cascade:
  type: docs
---

## Fonction continue sur un intervalle

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \).  
> - Soit \({a \in I}\). On dit que \( f \) est **continue en \( a \)** si \({\lim\limits_{x \to a} f(x) = f(a)}\).  
> - On dit que \( f \) est **continue sur \( I \)** si elle est continue en tout réel \( a \) de \( I \).

> [!IMPORTANT] **Remarque**  
> Graphiquement, une fonction continue sur un intervalle a une courbe « d’un seul tenant » : on peut la tracer sans lever le crayon.

{{% details title="Exemples" closed="true" %}}
- La fonction \( f \) définie sur \(\mathbb{R}\) par \({f(x) = -x^3 + 2x}\) est continue sur \(\mathbb{R}\) : sa courbe se trace sans lever le crayon.  
![](/images/image256.png)  

- La fonction \( f \) définie sur \(\mathbb{R}\) par  
\[
f(x) = 
\begin{cases} 
x + 1 & \text{si } x \leq 2 \\ 
-x + 1 & \text{si } x > 2 
\end{cases}
\]  
vérifie \({f(2) = 3}\), alors que \({\lim\limits_{x \to 2^+} f(x) = -1}\). Elle n’est pas continue en 2, donc pas continue sur \(\mathbb{R}\) : sa courbe présente un « saut ».  
![](/images/image257.png)  

- La fonction **partie entière**, notée \( E \), associe à tout réel \( x \) le plus grand entier inférieur ou égal à \( x \) (par exemple \({E(2{,}7) = 2}\) et \({E(-1{,}3) = -2}\)). Elle n’est continue en aucun entier \( n \) (sa courbe est « en escalier »), donc elle n’est pas continue sur \(\mathbb{R}\).  
![](/images/image258.png)  
{{% /details %}}

## Propriétés

> [!TIP] **Propriété (admise) : continuité des fonctions usuelles**  
> - Les fonctions affines, les fonctions polynômes, la fonction racine carrée et la fonction exponentielle sont continues sur leur ensemble de définition.  
> - Une somme, un produit, un quotient ou une composée de fonctions continues est une fonction continue sur chacun des intervalles qui forment son ensemble de définition.

{{% details title="Exemple" closed="true" %}}
La fonction \( f \) définie sur \({]-\infty ; -3[ \cup ]-3 ; +\infty[}\) par  
\[
f(x) = \dfrac{2x^2 + 1}{x + 3}
\]  
est un quotient de fonctions polynômes : elle est continue sur chacun des intervalles \({]-\infty ; -3[}\) et \({]-3 ; +\infty[}\).  
![](/images/image259.png)
{{% /details %}}

> [!TIP] **Propriété (admise) : continuité et dérivabilité**  
> Toute fonction dérivable sur un intervalle \( I \) est continue sur \( I \).

> [!IMPORTANT] **Remarque**  
> La réciproque est fausse : la fonction valeur absolue est continue sur \(\mathbb{R}\), mais elle n’est pas dérivable en 0 (sa courbe présente un « point anguleux » à l’origine).
> ![](/images/image260.png)

> [!TIP] **Propriété (admise) : continuité et suites convergentes**  
> Soit \( f \) une fonction continue sur un intervalle \( I \), \( a \) un réel de \( I \), et \((u_n)\) une suite dont tous les termes sont dans \( I \).  
> Si \((u_n)\) converge vers \( a \), alors la suite \((f(u_n))\) converge vers \( f(a) \).

## Méthode : Étudier une fonction définie par morceaux

> [!NOTE] **Méthode**  
> On considère la fonction \( f \) définie sur \(\mathbb{R}\) par :  
> \[
f(x) = 
\begin{cases} 
x^2 - 4x & \text{si } x \leq 1 \\ 
-3x & \text{si } x > 1 
\end{cases}
\]  
> 1. Tracer la courbe représentative de \( f \).  
> 2. Étudier la continuité de \( f \) :  
> a. sur l’intervalle \({]-\infty ; 1]}\) ;  
> b. sur l’intervalle \({]1 ; +\infty[}\) ;  
> c. en 1.  
> 3. Conclure.

{{% details title="Solution commentée" closed="true" %}}
1. Voir le graphique ci-dessous.  
![](/images/image261.png)

2. a. Sur \({]-\infty ; 1]}\), \({f(x) = x^2 - 4x}\) : c’est une fonction polynôme, continue sur \(\mathbb{R}\), donc en particulier sur \({]-\infty ; 1]}\).  

b. Sur \({]1 ; +\infty[}\), \({f(x) = -3x}\) : fonction affine, donc continue sur \({]1 ; +\infty[}\).  

c. D’une part, \({f(1) = 1 - 4 = -3}\), et comme \( f \) est continue sur \({]-\infty ; 1]}\) :  
\[
\lim_{x \to 1^-} f(x) = f(1) = -3.
\]  
D’autre part :  
\[
\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (-3x) = -3.
\]  
Les limites à gauche et à droite sont égales à \( f(1) \) : \({\lim\limits_{x \to 1} f(x) = f(1)}\). La fonction \( f \) est donc continue en 1.

3. \( f \) est continue sur \({]-\infty ; 1]}\), sur \({]1 ; +\infty[}\) et en 1 : elle est continue sur \(\mathbb{R}\). Sa courbe se trace bien sans lever le crayon.
{{% /details %}}

## Méthode : Calculer la limite d’une suite définie par une relation de récurrence

> [!NOTE] **Méthode**  
> On considère la suite \((u_n)\) définie par \({u_0 = 0}\) et, pour tout entier naturel \( n \),  
> \[
u_{n+1} = f(u_n),
\]  
> où \( f \) est la fonction définie sur \(\mathbb{R}\) par \({f(x) = 0{,}6x + 2}\).  
> On admet que \((u_n)\) converge, et on note \( \ell \) sa limite.  
> 1. Justifier que \( f \) est continue sur \(\mathbb{R}\).  
> 2. À l’aide d’une calculatrice ou d’un tableur, conjecturer la valeur de \( \ell \).  
> 3. Démontrer que l’équation \({f(x) = x}\) admet une unique solution réelle.  
> 4. Démontrer la conjecture de la question 2 en utilisant la continuité de \( f \).

{{% details title="Solution commentée" closed="true" %}}
1. \( f \) est une fonction affine, donc continue sur \(\mathbb{R}\).  

2. Avec la calculatrice, on obtient (valeurs arrondies) :

| \( n \)   | 0 | 1 | 2   | 3    | 4     | 5      | 10     | 20      |
|-----------|---|---|-----|------|-------|--------|--------|---------|
| \( u_n \) | 0 | 2 | 3,2 | 3,92 | 4,352 | 4,6112 | 4,9698 | 4,99982 |

On conjecture que \({\ell = 5}\).

3. On résout l’équation :  
\[
f(x) = x \iff 0{,}6x + 2 = x \iff 2 = 0{,}4x \iff x = 5.
\]  
L’équation \({f(x) = x}\) a une unique solution : 5.  

4. Comme \((u_n)\) converge vers \( \ell \) et que \( f \) est continue en \(\ell\), la suite \((f(u_n))\) converge vers \( f(\ell) \). Or \({f(u_n) = u_{n+1}}\), et la suite \({(u_{n+1})}\) a la même limite \(\ell\) que \((u_n)\). Par unicité de la limite, \({\ell = f(\ell)}\).  
D’après la question 3, on en déduit \({\ell = 5}\) : la suite \((u_n)\) converge vers 5.
{{% /details %}}
