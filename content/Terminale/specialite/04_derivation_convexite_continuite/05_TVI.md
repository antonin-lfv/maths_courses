---
title: 'Théorème des valeurs intermédiaires'
weight: 5
cascade:
  type: docs
---

## Cas d’un intervalle fermé

> [!TIP] **Théorème des valeurs intermédiaires (admis)**  
> Soit \( f \) une fonction continue sur un intervalle \([a ; b]\).  
> Pour tout réel \( k \) compris entre \( f(a) \) et \( f(b) \), l’équation \( f(x)=k \) admet au moins une solution dans l’intervalle \([a ; b]\).
> ![](/images/image55.png)

> [!IMPORTANT] **Remarque**  
> Cela signifie que, quand \( x \) varie de \( a \) à \( b \), \( f(x) \) prend toutes les valeurs intermédiaires comprises entre \( f(a) \) et \( f(b) \).

> [!TIP] **Cas particulier du théorème des valeurs intermédiaires (admis)**  
> Soit \( f \) une fonction **continue et strictement monotone** sur un intervalle \([a ; b]\).  
> Pour tout réel \( k \) compris entre \( f(a) \) et \( f(b) \), l’équation \( f(x)=k \) admet **une unique** solution dans \([a ; b]\).  
> - **Cas où \( f \) est strictement croissante :**  
> ![](/images/image56.png)  
> - **Cas où \( f \) est strictement décroissante :**  
> ![](/images/image57.png)

> [!IMPORTANT] **Remarque**  
> Dans un tableau de variation, les flèches obliques indiquent que la fonction est continue et strictement monotone sur l’intervalle considéré.


## Extension à d’autres intervalles

> [!TIP] **Théorème (admis)**  
> \( a \) désigne soit un réel, soit \( -\infty \) ; \( b \) désigne soit un réel, soit \( +\infty \).  
> Soit \( f \) une fonction **continue** sur l’intervalle \( ]a ; b[ \).  
> - Pour tout réel \( k \) **strictement** compris entre \( \displaystyle \lim_{x\to a} f(x) \) et \( \displaystyle \lim_{x\to b} f(x) \), l’équation \( f(x)=k \) admet **au moins une** solution dans \( ]a ; b[ \).  
> - Si, de plus, \( f \) est **strictement monotone** sur \( ]a ; b[ \), alors cette solution est **unique**.

> [!IMPORTANT] **Remarque**  
> On peut étendre ce théorème à un intervalle semi-ouvert \([a ; b[\) ou \( ]a ; b]\).


## Méthode : Prouver l’existence d’une solution d’une équation du type \( f(x)=k \)

> [!NOTE] **Méthode**  
> Soit \( f \) la fonction définie sur \([0 ; +\infty[\) par \( f(x)=x-2\sqrt{x}+3 \).  
> - Prouver que l’équation \( f(x)=5 \) admet au moins une solution dans l’intervalle \([4 ; 9]\).

{{% details title="Solution commentée" closed="true" %}}
La fonction \( x \mapsto x+3 \) est une fonction affine continue sur \(\mathbb{R}\), donc sur \([0 ; +\infty[\), et la fonction racine carrée est continue sur \([0 ; +\infty[\). Donc, par **somme** de fonctions continues sur \([0 ; +\infty[\), \( f \) est continue sur \([0 ; +\infty[\).  
La fonction \( f \) est donc continue sur \([4 ; 9]\).

On calcule \( f(4)=3 \) et \( f(9)=6 \), donc \( 5 \in [f(4) ; f(9)] \).  
D’après le **théorème des valeurs intermédiaires**, l’équation \( f(x)=5 \) admet **au moins une solution** \( c \) dans l’intervalle \([4 ; 9]\).

Illustration graphique :  
![](/images/image58.png)
{{% /details %}}


## Méthode : Prouver l’existence et l’unicité d’une solution d’une équation du type \( f(x)=k \)

> [!NOTE] **Méthode**  
> Soit \( f \) la fonction définie sur \(\mathbb{R}\) par \( f(x)=e^x + x - 2 \).  
> 1. Tracer la courbe représentative de \( f \) dans un repère.  
> 2. Démontrer que \( f \) est strictement croissante et continue sur \(\mathbb{R}\).  
> 3. Démontrer que l’équation \( f(x)=0 \) admet une **unique** solution dans \(\mathbb{R}\).  
> 4. Déterminer avec la calculatrice un encadrement décimal de \( \alpha \) à \(10^{-2}\) près.

{{% details title="Solution commentée" closed="true" %}}
1. Voir la figure ci-dessous.  
![](/images/image59.png)

2. La fonction \( f \) est dérivable sur \(\mathbb{R}\) comme somme de fonctions dérivables et on a \( f'(x)=e^x+1 \).  
Pour tout réel \( x \), \( f'(x)>0 \), donc \( f \) est **strictement croissante** sur \(\mathbb{R}\). De plus, \( f \) est dérivable sur \(\mathbb{R}\), donc **continue** sur \(\mathbb{R}\).

3. \(\displaystyle \lim_{x\to-\infty}(x-2)=-\infty\) et \(\displaystyle \lim_{x\to-\infty} e^x=0\) donc, par somme de limites :  
\(\displaystyle \lim_{x\to-\infty} f(x)=-\infty.\)  
\(\displaystyle \lim_{x\to+\infty}(x-2)=+\infty\) et \(\displaystyle \lim_{x\to+\infty} e^x=+\infty\) donc, par somme de limites :  
\(\displaystyle \lim_{x\to+\infty} f(x)=+\infty.\)

La fonction \( f \) est continue et **strictement croissante** sur \(\mathbb{R}\).  
De plus, \( 0 \in \left]\displaystyle \lim_{x\to-\infty} f(x)\,;\, \displaystyle \lim_{x\to+\infty} f(x)\right[ \).  
D’après le **cas particulier du TVI** pour les fonctions strictement monotones, l’équation \( f(x)=0 \) admet **une unique** solution dans \(\mathbb{R}\).

4. D’après le tableau de valeurs (pas de \(0{,}01\)), on obtient l’encadrement :  
\[
0{,}44<\alpha<0{,}45.
\]

Extrait de l’écran de calculatrice :  
![](/images/image60.png)
{{% /details %}}