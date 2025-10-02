---
title: 'Fonctions continues'
weight: 4
cascade:
  type: docs
---

## Fonction continue sur un intervalle

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \).  
> - Soit \( a \in I \). On dit que \( f \) est continue en \( a \) lorsque \( \lim_{x \to a} f(x) = f(a) \).  
> - La fonction \( f \) est continue sur \( I \) si, pour tout réel \( a \) appartenant à \( I \), \( f \) est continue en \( a \).

{{% details title="Exemples" closed="true" %}}
- \( f \) est définie sur \(\mathbb{R}\) par :  
\( f(x) = x^3 - 3x + 2 \).  
![](/images/image49.png)  
\( f \) est continue sur \(\mathbb{R}\).

- \( f \) est définie sur \(\mathbb{R}\) par :  
\[
f(x) = 
\begin{cases} 
3 - x^2 & \text{si } x \leq 1 \\ 
x^2 - 2x + 2 & \text{si } x > 1 
\end{cases}
\]  
![](/images/image50.png)  
\( f \) n’est pas continue en 1, donc elle n’est pas continue sur \(\mathbb{R}\).

- \( f \) est définie sur \(\mathbb{R}\) par :  
\( f(x) = E(x) \), où \( E(x) \) désigne la partie entière de \( x \).  
![](/images/image51.png)  
Quel que soit \( n \) entier, \( f \) n’est pas continue en \( n \), donc \( f \) n’est pas continue sur \(\mathbb{R}\).
{{% /details %}}


## Propriétés

> [!TIP] **Propriété (admise) : continuité des fonctions usuelles**  
> - Les fonctions affines, les fonctions polynômes, la fonction racine carrée et la fonction exponentielle sont continues sur leur ensemble de définition.  
> - Les sommes, produits, quotients et composées de fonctions continues sont des fonctions continues sur chacun des intervalles formant leur ensemble de définition.

{{% details title="Exemple" closed="true" %}}
La fonction \( f \), définie sur \( ]-\infty ; 1[ \cup ]1 ; +\infty[ \) par  
\[
f(x) = \frac{x^2 - 3x + 5}{x - 1},
\]  
est continue sur chacun des intervalles \( ]-\infty ; 1[ \) et \( ]1 ; +\infty[ \) en tant que quotient de fonctions polynômes.  
![](/images/image47.png)
{{% /details %}}

> [!TIP] **Propriété (admise) : continuité et dérivabilité**  
> Une fonction dérivable sur un intervalle \( I \) est continue sur \( I \).

> [!IMPORTANT] **Remarque**  
> La réciproque de cette propriété est fausse. Par exemple, la fonction valeur absolue est continue sur \(\mathbb{R}\), mais elle n’est pas dérivable en 0.
> ![](/images/image52.png)

> [!TIP] **Propriété (admise) : continuité et suites convergentes**  
> Soient \( f \) une fonction continue sur un intervalle \( I \), \( a \) un réel appartenant à \( I \) et \((u_n)\) une suite à valeurs dans \( I \).  
> Si \((u_n)\) converge vers \( a \), alors la suite \((f(u_n))\) converge vers \( f(a) \).


## Méthode : Étudier une fonction définie par morceaux

> [!NOTE] **Méthode**  
> Soit \( f \) la fonction définie sur \(\mathbb{R}\) par :  
> \[
f(x) = 
\begin{cases} 
-x^2 - 2x & \text{si } x \leq -1 \\ 
-x & \text{si } x > -1 
\end{cases}
\]  
> 1. Tracer la courbe représentative de la fonction \( f \) dans un repère.  
> 2. Étudier la continuité de la fonction \( f \) :  
> a. sur l’intervalle \( ]-\infty ; -1] \) ;  
> b. sur l’intervalle \( ]-1 ; +\infty[ \) ;  
> c. en \(-1\).  
> 3. Que peut-on en conclure ?

{{% details title="Solution commentée" closed="true" %}}
1. Voir le graphique ci-dessous.  
![](/images/image53.png)

2. a. La fonction \( x \mapsto -x^2 - 2x \) est un polynôme, donc elle est continue sur \(\mathbb{R}\) et donc sur \( ]-\infty ; -1] \).  

b. La fonction \( x \mapsto -x \) est affine, donc elle est continue sur \(\mathbb{R}\) et donc sur \( ]-1 ; +\infty[ \).  

c. D’une part, \( f \) est continue sur \( ]-\infty ; -1] \), avec \( f(-1) = 1 \). On a donc :  
\[
\lim_{x \to -1^-} f(x) = f(-1) = 1.
\]  
D’autre part :  
\[
\lim_{x \to -1^+} f(x) = \lim_{x \to -1^+} (-x) = 1.
\]  
Finalement :  
\[
\lim_{x \to -1^-} f(x) = \lim_{x \to -1^+} f(x) = f(-1) = 1.
\]  
La fonction \( f \) est donc continue en \(-1\).

3. La fonction \( f \) est continue sur \(\mathbb{R}\).
{{% /details %}}


## Méthode : Calculer la limite d’une suite définie par une relation de récurrence

> [!NOTE] **Méthode**  
> On considère la suite \((u_n)\) définie par son premier terme \( u_0 = 1 \) et par la relation de récurrence, pour tout entier naturel \( n \),  
> \[
u_{n+1} = f(u_n),
\]  
> où \( f \) est la fonction définie sur \(\mathbb{R}\) par \( f(x) = \tfrac{1}{2}x + 2 \).  
> On admet que \((u_n)\) converge et on note \( \ell \) la limite de \((u_n)\).  
> 1. Justifier que \( f \) est continue sur \(\mathbb{R}\).  
> 2. À l’aide d’un tableur ou d’une calculatrice, conjecturer la valeur de \( \ell \).  
> 3. Démontrer qu’il existe un unique réel \( \alpha \) tel que \( f(\alpha) = \alpha \).  
> 4. Démontrer la conjecture de la question 2 en utilisant la continuité de \( f \).

{{% details title="Solution commentée" closed="true" %}}
1. La fonction \( f \) est affine, donc elle est continue sur \(\mathbb{R}\).  

2. À l’aide d’une calculatrice (voir ci-dessous), on conjecture que la limite de la suite \((u_n)\) est 4.  
![](/images/image54.png)

3. On résout l’équation \( f(x) = x \).  
\[
f(x) = x \iff \tfrac{1}{2}x + 2 = x \iff x = 4.
\]  
Le nombre 4 est donc l’unique réel égal à sa propre image par \( f \).  

4. \( f \) est une fonction continue sur \(\mathbb{R}\), donc, puisque \((u_n)\) converge vers \( \ell \), la suite \((f(u_n))\) converge vers \( f(\ell) \). Or la suite \((f(u_n))\) est la suite \((u_{n+1})\), qui a la même limite que \((u_n)\). Donc la limite \( \ell \) vérifie \( \ell = f(\ell) \).  
D’après la question 3, l’unique solution de cette équation est 4. La suite \((u_n)\) converge donc vers 4.
{{% /details %}}