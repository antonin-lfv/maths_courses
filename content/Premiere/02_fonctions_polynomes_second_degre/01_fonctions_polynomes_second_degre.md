---
title: 'Fonctions polynômes du second degré'
weight: 1
cascade:
  type: docs
---

## Fonction polynôme

> [!TIP] **Définition**  
> Une **fonction polynôme de degré 2** est une fonction \( f \) définie sur \(\mathbb{R}\) dont l’expression algébrique peut être mise sous la forme  
> \[
f(x) = ax^2 + bx + c,
\]  
> où \( a, b, c \) sont des réels avec \( a \neq 0 \).  
> Les réels \( a, b, c \) sont appelés **coefficients** de la fonction polynôme.

> [!IMPORTANT] **Remarque**  
> L’expression \( ax^2 + bx + c \) est dite **forme développée** de \( f(x) \) ou **trinôme du second degré**.


## Forme canonique

> [!TIP] **Propriétés et définition**  
> Toute fonction polynôme \( f \) de degré 2 de forme développée \( ax^2 + bx + c \), admet une écriture de la forme  
> \[
f(x) = a(x-\alpha)^2 + \beta,
\]  
> où \(\alpha = \frac{-b}{2a}\) et \(\beta = f(\alpha)\).  
> Cette écriture est la **forme canonique** de la fonction polynôme.


## Variation et représentation graphique

Soit \( f \) une fonction polynôme de degré 2 telle que, pour tout \( x \),  
\[
f(x) = ax^2 + bx + c, \quad a \neq 0.
\]  
On pose \(\alpha = -\frac{b}{2a}\) et \(\beta = f(\alpha)\).

> [!TIP] **Théorème**  
> - Si \( a > 0 \), alors \( f \) est strictement décroissante sur \( ]-\infty ; \alpha] \) et strictement croissante sur \( [\alpha ; +\infty[ \).  
>   \( f \) admet un minimum égal à \(\beta\) atteint en \( x = \alpha \).  
> - Si \( a < 0 \), alors \( f \) est strictement croissante sur \( ]-\infty ; \alpha] \) et strictement décroissante sur \( [\alpha ; +\infty[ \).  
>   \( f \) admet un maximum égal à \(\beta\) atteint en \( x = \alpha \).

> [!TIP] **Propriété (admise)**  
> Dans un repère du plan, la courbe représentative de \( f \) est une **parabole** de sommet \( S(\alpha ; \beta) \) qui admet pour axe de symétrie la droite d’équation \( x = \alpha \).

![](/images/image61.png)


## Exercice résolu : Déterminer la forme canonique

> [!NOTE] **Exercice résolu**  
> Déterminer la forme canonique du trinôme \( f(x) = -x^2 + 2x - 5 \).

{{% details title="Solution commentée" closed="true" %}}
**Première méthode**  
\( f \) est une fonction polynôme de degré 2, de coefficients \( a = -1, b = 2, c = -5 \).  
Son écriture canonique est \(-(x-\alpha)^2 + \beta\), avec :  
\[
\alpha = \frac{-b}{2a} = \frac{-2}{-2} = 1, \quad \beta = f(1) = -4.
\]  
Donc pour tout réel \( x \),  
\[
f(x) = -(x-1)^2 - 4.
\]

**Deuxième méthode**  
On écrit \( f(x) = -(x^2 - 2x + 5) \) en factorisant par \( a = -1 \).  
Puis, en remarquant que \( x^2 - 2x = (x-1)^2 - 1 \), on obtient :  
\(
f(x) = -\big[(x-1)^2 - 1 + 5\big] = -(x-1)^2 - 4.
\)
{{% /details %}}


## Exercice résolu : Déterminer les variations d’une fonction polynôme de degré 2

> [!NOTE] **Exercice résolu**  
> Étudier les variations des fonctions \( f \) et \( g \) définies sur \(\mathbb{R}\), par :  
> \[
f(x) = 3 - (x+2)^2, \quad g(x) = 2x^2 + 4x - 3.
\]

{{% details title="Solution commentée" closed="true" %}}
- \( f(x) = -(x - (-2))^2 + 3 \). On reconnaît la forme canonique de \( f(x) \) avec \( a = -1, \alpha = -2, \beta = 3 \).  
\( f \) est donc strictement croissante sur \( ]-\infty ; -2] \) et strictement décroissante sur \([-2 ; +\infty[ \).  
La fonction \( f \) admet alors un maximum égal à 3, atteint en \(-2\).

- \( g(x) \) est de la forme \( ax^2 + bx + c \) avec \( a = 2 \), soit \( a > 0 \).  
Donc \( g \) admet un minimum en \(\alpha = \frac{-b}{2a} = \frac{-4}{4} = -1\), égal à \( g(-1) = -5 \).  
\( g \) est donc strictement décroissante sur \( ]-\infty ; -1] \) et strictement croissante sur \([-1 ; +\infty[ \).
{{% /details %}}


## Exercice résolu : Identifier la forme d’une fonction polynôme de degré 2

> [!NOTE] **Exercice résolu**  
> Sans calculatrice, associer chaque fonction polynôme ci-dessous à la parabole qui la représente :  
> \[
f(x) = -1 + 3(x-3)^2, \quad g(x) = -1 - 0,25(x-3)^2,
\]  
> \[
h(x) = x^2 - 6x + 7, \quad i(x) = (x-3)(7-x).
\]
> ![](/images/image62.png)


{{% details title="Solution commentée" closed="true" %}}
- La forme canonique de \( f(x) \) indique que \( f \) admet un minimum (\(a > 0\)), égal à -1 atteint en 3. Elle est représentée par \( \mathcal{P}_2 \).  
- La forme canonique de \( g(x) \) indique que \( g \) admet un maximum (\(a < 0\)), égal à -1 atteint en 3. Elle est représentée par \( \mathcal{P}_4 \).  
- L’écriture factorisée de \( i(x) \) indique que ses racines sont 3 et 7, donc sa représentation graphique coupe l’axe des abscisses aux points de coordonnées (3 ; 0) et (7 ; 0). On reconnaît la parabole \( \mathcal{P}_3 \).  
- Par élimination, la fonction \( h \) est représentée par la courbe \( \mathcal{P}_1 \).
{{% /details %}}