---
title: 'Théorème des valeurs intermédiaires'
weight: 5
cascade:
  type: docs
---

## Cas d’un intervalle fermé

> [!TIP] **Théorème des valeurs intermédiaires (admis)**  
> Soit \( f \) une fonction continue sur un intervalle \([a ; b]\).  
> Pour tout réel \( k \) compris entre \( f(a) \) et \( f(b) \), l’équation \({f(x) = k}\) admet **au moins une** solution dans l’intervalle \([a ; b]\).
> ![](/images/image262.png)

> [!IMPORTANT] **Remarque**  
> Autrement dit, lorsque \( x \) parcourt \([a ; b]\), une fonction continue prend **toutes** les valeurs comprises entre \( f(a) \) et \( f(b) \) (sa courbe ne peut pas « sauter » par-dessus la droite d’équation \({y = k}\)). La solution n’est pas forcément unique : sur la figure, il y en a trois.

> [!TIP] **Cas particulier : fonction strictement monotone (admis)**  
> Soit \( f \) une fonction **continue et strictement monotone** sur un intervalle \([a ; b]\).  
> Pour tout réel \( k \) compris entre \( f(a) \) et \( f(b) \), l’équation \({f(x) = k}\) admet **une unique** solution dans \([a ; b]\).  
> - **Cas où \( f \) est strictement croissante :**  
> ![](/images/image263.png)  
> - **Cas où \( f \) est strictement décroissante :**  
> ![](/images/image264.png)

> [!IMPORTANT] **Remarque**  
> Par convention, dans un tableau de variation, une flèche oblique signifie que la fonction est continue et strictement monotone sur l’intervalle correspondant.

## Extension à d’autres intervalles

> [!TIP] **Théorème (admis)**  
> Soit \( a \) un réel ou \({-\infty}\), et \( b \) un réel ou \({+\infty}\), avec \({a < b}\). Soit \( f \) une fonction **continue** sur l’intervalle \( ]a ; b[ \), admettant des limites (finies ou infinies) en \(a\) et en \(b\).  
> - Pour tout réel \( k \) **strictement** compris entre \({\displaystyle \lim_{x\to a} f(x)}\) et \({\displaystyle \lim_{x\to b} f(x)}\), l’équation \({f(x) = k}\) admet **au moins une** solution dans \( ]a ; b[ \).  
> - Si de plus \( f \) est **strictement monotone** sur \( ]a ; b[ \), cette solution est **unique**.

> [!IMPORTANT] **Remarque**  
> Ce théorème s’adapte aux intervalles semi-ouverts \([a ; b[\) et \( ]a ; b]\) (en utilisant la valeur \(f(a)\) ou \(f(b)\) à la borne fermée).

## Méthode : Prouver l’existence d’une solution d’une équation du type \({f(x) = k}\)

> [!NOTE] **Méthode**  
> On considère la fonction \( f \) définie sur \(\mathbb{R}\) par \({f(x) = x^3 - 2x}\).  
> Démontrer que l’équation \({f(x) = 2}\) admet au moins une solution dans l’intervalle \([1 ; 2]\).

{{% details title="Solution commentée" closed="true" %}}
\( f \) est une fonction polynôme, donc continue sur \(\mathbb{R}\), et en particulier sur \([1 ; 2]\).

On calcule \({f(1) = 1 - 2 = -1}\) et \({f(2) = 8 - 4 = 4}\). Comme \({-1 \leq 2 \leq 4}\), le réel 2 est compris entre \( f(1) \) et \( f(2) \).  
D’après le **théorème des valeurs intermédiaires**, l’équation \({f(x) = 2}\) admet **au moins une solution** \( c \) dans \([1 ; 2]\).

Illustration graphique :  
![](/images/image265.png)
{{% /details %}}

## Méthode : Prouver l’existence et l’unicité d’une solution d’une équation du type \({f(x) = k}\)

> [!NOTE] **Méthode**  
> On considère la fonction \( f \) définie sur \(\mathbb{R}\) par \({f(x) = e^x + 2x - 3}\).  
> 1. Tracer la courbe représentative de \( f \).  
> 2. Démontrer que \( f \) est continue et strictement croissante sur \(\mathbb{R}\).  
> 3. Démontrer que l’équation \({f(x) = 0}\) admet une **unique** solution \(\alpha\) dans \(\mathbb{R}\).  
> 4. À l’aide de la calculatrice, donner un encadrement de \( \alpha \) d’amplitude \({10^{-2}}\).

{{% details title="Solution commentée" closed="true" %}}
1. Voir la figure ci-dessous.  
![](/images/image266.png)

2. \( f \) est dérivable sur \(\mathbb{R}\) (somme de fonctions dérivables), avec \({f'(x) = e^x + 2}\).  
Pour tout réel \( x \), \({e^x > 0}\), donc \({f'(x) > 0}\) : \( f \) est **strictement croissante** sur \(\mathbb{R}\). Étant dérivable, \( f \) est aussi **continue** sur \(\mathbb{R}\).

3. On détermine les limites aux bornes :  
- \({\displaystyle \lim_{x\to-\infty} e^x = 0}\) et \({\displaystyle \lim_{x\to-\infty} (2x - 3) = -\infty}\), donc, par somme, \({\displaystyle \lim_{x\to-\infty} f(x) = -\infty}\) ;  
- \({\displaystyle \lim_{x\to+\infty} e^x = +\infty}\) et \({\displaystyle \lim_{x\to+\infty} (2x - 3) = +\infty}\), donc, par somme, \({\displaystyle \lim_{x\to+\infty} f(x) = +\infty}\).

\( f \) est continue et strictement croissante sur \(\mathbb{R}\), et \( 0 \) est strictement compris entre \({-\infty}\) et \({+\infty}\). D’après le théorème des valeurs intermédiaires (cas strictement monotone), l’équation \({f(x) = 0}\) admet **une unique** solution \(\alpha\) dans \(\mathbb{R}\).

4. On calcule \({f(0) = -2 < 0}\) et \({f(1) = e - 1 > 0}\), donc \({0 < \alpha < 1}\). On affine avec un tableau de valeurs de pas \(0{,}01\) (valeurs arrondies) :

| \( x \)    | 0,57    | 0,58    | 0,59    | 0,60   | 0,61   |
|------------|---------|---------|---------|--------|--------|
| \( f(x) \) | −0,0917 | −0,0540 | −0,0160 | 0,0221 | 0,0604 |

\(f\) change de signe entre 0,59 et 0,60, d’où :
\[
0{,}59 < \alpha < 0{,}60.
\]
{{% /details %}}
