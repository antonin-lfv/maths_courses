---
title: 'Fonctions polynômes du second degré'
weight: 1
cascade:
  type: docs
---

## Fonction polynôme

> [!TIP] **Définition**  
> On appelle **fonction polynôme de degré 2** toute fonction \( f \) définie sur \(\mathbb{R}\) dont l’expression peut s’écrire  
> \[
f(x) = ax^2 + bx + c,
\]  
> où \( a, b, c \) sont des réels avec \({a \neq 0}\).  
> Les réels \( a, b, c \) sont les **coefficients** de la fonction polynôme.

> [!IMPORTANT] **Remarque**  
> L’écriture \({ax^2 + bx + c}\) s’appelle la **forme développée** de \( f(x) \) ; on parle aussi de **trinôme du second degré**.

## Forme canonique

> [!TIP] **Propriétés et définition**  
> Toute fonction polynôme \( f \) de degré 2, de forme développée \({ax^2 + bx + c}\), peut s’écrire sous la forme  
> \[
f(x) = a(x-\alpha)^2 + \beta,
\]  
> avec \({\alpha = \dfrac{-b}{2a}}\) et \({\beta = f(\alpha)}\).  
> Cette écriture est la **forme canonique** de la fonction polynôme.

## Variation et représentation graphique

Dans toute cette partie, \( f \) est une fonction polynôme de degré 2 définie pour tout réel \( x \) par  
\[
f(x) = ax^2 + bx + c, \quad a \neq 0,
\]  
et l’on note \({\alpha = -\dfrac{b}{2a}}\) et \({\beta = f(\alpha)}\).

> [!TIP] **Théorème**  
> - Si \({a > 0}\), \( f \) est strictement décroissante sur \({]-\infty ; \alpha]}\) et strictement croissante sur \({[\alpha ; +\infty[}\).  
>   \( f \) admet un **minimum** égal à \(\beta\), atteint en \({x = \alpha}\).  
> - Si \({a < 0}\), \( f \) est strictement croissante sur \({]-\infty ; \alpha]}\) et strictement décroissante sur \({[\alpha ; +\infty[}\).  
>   \( f \) admet un **maximum** égal à \(\beta\), atteint en \({x = \alpha}\).

> [!TIP] **Propriété (admise)**  
> Dans un repère du plan, la courbe représentative de \( f \) est une **parabole** de sommet \( S(\alpha ; \beta) \), qui admet pour axe de symétrie la droite d’équation \({x = \alpha}\).

![](/images/image149.png)

## Exercice résolu : Déterminer la forme canonique

> [!NOTE] **Exercice résolu**  
> Écrire sous forme canonique le trinôme \({f(x) = 2x^2 - 8x + 3}\).

{{% details title="Solution commentée" closed="true" %}}
**Première méthode : avec les formules**  
\( f \) est une fonction polynôme de degré 2 de coefficients \({a = 2, b = -8, c = 3}\).  
Sa forme canonique est \({2(x-\alpha)^2 + \beta}\), avec :  
\[
\alpha = \dfrac{-b}{2a} = \dfrac{8}{4} = 2, \quad \beta = f(2) = 2 \times 4 - 16 + 3 = -5.
\]  
Donc, pour tout réel \( x \),  
\[
f(x) = 2(x-2)^2 - 5.
\]

**Deuxième méthode : en complétant le carré**  
On factorise par \({a = 2}\) les termes en \( x \) : \({f(x) = 2(x^2 - 4x) + 3}\).  
Or \({x^2 - 4x}\) est le début du développement de \({(x-2)^2 = x^2 - 4x + 4}\), donc \({x^2 - 4x = (x-2)^2 - 4}\). Ainsi :  
\[
f(x) = 2\big[(x-2)^2 - 4\big] + 3 = 2(x-2)^2 - 8 + 3 = 2(x-2)^2 - 5.
\]
{{% /details %}}

## Exercice résolu : Déterminer les variations d’une fonction polynôme de degré 2

> [!NOTE] **Exercice résolu**  
> Étudier les variations des fonctions \( f \) et \( g \) définies sur \(\mathbb{R}\) par :  
> \[
f(x) = 2(x-1)^2 + 4, \quad g(x) = -x^2 + 6x - 1.
\]

{{% details title="Solution commentée" closed="true" %}}
- \({f(x) = 2(x-1)^2 + 4}\) est déjà sous forme canonique, avec \({a = 2, \alpha = 1, \beta = 4}\).  
Comme \({a > 0}\), \( f \) est strictement décroissante sur \({]-\infty ; 1]}\) et strictement croissante sur \({[1 ; +\infty[}\).  
La fonction \( f \) admet un minimum égal à 4, atteint en 1.

- \( g(x) \) est sous forme développée avec \({a = -1, b = 6, c = -1}\) ; ici \({a < 0}\).  
\( g \) admet donc un maximum en \({\alpha = \dfrac{-b}{2a} = \dfrac{-6}{-2} = 3}\), égal à \({g(3) = -9 + 18 - 1 = 8}\).  
\( g \) est strictement croissante sur \({]-\infty ; 3]}\) et strictement décroissante sur \({[3 ; +\infty[}\).
{{% /details %}}

## Exercice résolu : Identifier la forme d’une fonction polynôme de degré 2

> [!NOTE] **Exercice résolu**  
> Sans calculatrice, associer chacune des fonctions suivantes à la parabole qui la représente :  
> \[
f(x) = 2 + 2(x+1)^2, \quad g(x) = 2 - 0,5(x+1)^2,
\]  
> \[
h(x) = x^2 + 2x - 3, \quad i(x) = (x+1)(3-x).
\]
> ![](/images/image150.png)

{{% details title="Solution commentée" closed="true" %}}
- La forme canonique de \( f(x) \) montre que \( f \) admet un minimum (\({a = 2 > 0}\)) égal à 2, atteint en \({-1}\) : c’est la parabole tournée vers le haut de sommet \({(-1 ; 2)}\), donc \( \mathcal{P}_3 \).  
- La forme canonique de \( g(x) \) montre que \( g \) admet un maximum (\({a = -0,5 < 0}\)) égal à 2, atteint en \({-1}\) : c’est \( \mathcal{P}_4 \).  
- La forme factorisée de \( i(x) \) montre que \( i \) s’annule en \({-1}\) et en 3 : sa courbe coupe l’axe des abscisses aux points \({(-1 ; 0)}\) et \((3 ; 0)\). C’est \( \mathcal{P}_1 \).  
- Il reste \( h \), représentée par \( \mathcal{P}_2 \). Vérification : \({h(x) = (x+1)^2 - 4}\), de sommet \({(-1 ; -4)}\).
{{% /details %}}
