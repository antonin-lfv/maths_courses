---
title: 'Taux de variation'
weight: 1
cascade:
  type: docs
---

> [!TIP] **Définition**  
> Soient \( f \) une fonction définie sur un intervalle \( I \), et \( a \) et \( b \) deux nombres réels distincts appartenant à \( I \).  
> On appelle **taux de variation de \( f \) entre \( a \) et \( b \)** le nombre  
> \[
\frac{f(b) - f(a)}{b - a}.
\]  
> Graphiquement, dans un repère \( (O ; \vec{i}, \vec{j}) \), si \( A \) est le point de la courbe représentative de \( f \) d’abscisse \( a \) et \( B \) le point d’abscisse \( b \), la droite \( (AB) \) sécante à la courbe représentative de \( f \) a pour pente (ou coefficient directeur) le taux de variation \( \frac{f(b) - f(a)}{b - a} \).
> ![](/images/image88.png)

{{% details title="Exemple" closed="true" %}}
Soit \( f \) la fonction cube définie sur \( \mathbb{R} \) par \( f(x) = x^3 \).  
Le taux de variation de \( f \) entre 1 et 3 est  
\[
\frac{f(3) - f(1)}{3 - 1} = \frac{27 - 1}{2} = 13.
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Dans d’autres disciplines, en Physique par exemple, si \( y = f(x) \), on utilise la notation \( \frac{\Delta y}{\Delta x} \) pour désigner un taux de variation.  
> Selon le contexte, si \( x = f(t) \), le taux de variation s’écrit \( \frac{\Delta x}{\Delta t} \) ; si \( q = f(t) \), on écrit \( \frac{\Delta q}{\Delta t} \).

> [!TIP] **Propriété**  
> Soit \( f \) une fonction affine définie sur \( \mathbb{R} \) par \( f(x) = mx + p \).  
> Le taux de variation de \( f \) entre deux nombres distincts est constant, égal à \( m \).

{{% details title="Exemple" closed="true" %}}
Le taux de variation de la fonction affine définie sur \( \mathbb{R} \) par \( f(x) = 3x - 1 \) est 3.  
En effet, pour tous réels \( a \) et \( b \) distincts, on a :
\[
\frac{f(b) - f(a)}{b - a} = \frac{3b - 1 - (3a - 1)}{b - a} = \frac{3b - 3a}{b - a} = \frac{3(b - a)}{b - a} = 3.
\]
{{% /details %}}

> [!TIP] **Propriétés**  
> Soient \( f \) une fonction définie sur un intervalle \( I \), et \( a \) et \( b \) deux nombres réels distincts appartenant à \( I \).  
>- Si \( f \) est **croissante** sur \( I \), alors le taux de variation de \( f \) entre \( a \) et \( b \) est **positif**.  
>- Si \( f \) est **décroissante** sur \( I \), alors le taux de variation de \( f \) entre \( a \) et \( b \) est **négatif**.

> [!IMPORTANT] **Remarque**  
> Les réciproques des propriétés précédentes sont fausses.

{{% details title="Exemple et contre-exemple" closed="true" %}}
Soit \( f \) la fonction carré définie sur \( \mathbb{R} \) par \( f(x) = x^2 \).  
\( f \) est décroissante sur \( ]-\infty ; 0] \), donc le taux de variation entre -4 et -2 est négatif.

**Contre-exemple**
\[
\frac{f(2) - f(-1)}{2 - (-1)} = \frac{4 - 1}{3} = 1.
\]  
Le taux de variation de \( f \) entre -1 et 2 est strictement positif, or la fonction \( f \) n’est pas croissante sur l’intervalle \([-1 ; 2]\).

![](/images/image89.png)

{{% /details %}}

> [!NOTE] **Exercice résolu**  
> On considère la fonction carré définie sur \( \mathbb{R} \) par \( f(x) = x^2 \).  
> 1. Déterminer le taux de variation de \( f \) entre 0 et 1.  
> 2. Déterminer le taux de variation de \( f \) entre 1 et 3.  
> 3. Interpréter graphiquement ces résultats.

{{% details title="Solution commentée" closed="true" %}}
1. Le taux de variation de \( f \) entre 0 et 1 se calcule ainsi :  
\[
\frac{f(1) - f(0)}{1 - 0} = \frac{1 - 0}{1} = 1.
\]  
1. Le taux de variation de \( f \) entre 1 et 3 se calcule ainsi :  
\[
\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4.
\]  
1. Graphiquement, ces taux de variation correspondent aux coefficients directeurs respectifs des droites \( (OA) \) et \( (AB) \), où :  
\( O(0 ; f(0)) \), \( A(1 ; f(1)) \), et \( B(3 ; f(3)) \).

![](/images/image90.png)

{{% /details %}}

> [!NOTE] **Exercice résolu**  
> Un médicament est administré à un patient. Le graphique suivant indique la concentration du médicament dans le sang (en milligramme par litre) au cours du temps \( t \) (en heure).  
> 1. Déterminer graphiquement la concentration du médicament au bout de 1 heure puis au bout de 9 heures.  
> 2. a. Estimer graphiquement le taux de variation de la concentration entre 1 heure et 2 heures.  
>   b. Estimer graphiquement le taux de variation de la concentration entre 9 heures et 10 heures.  
> 3. Décrire l’évolution de la concentration au cours du temps.
> ![](/images/image91.png)

{{% details title="Solution commentée" closed="true" %}}
1. Au bout de 1 heure, la concentration est d’environ \( 5 \, \text{mg.L}^{-1} \).  
Au bout de 9 heures, elle est d’environ \( 1{,}1 \, \text{mg.L}^{-1} \).

![](/images/image92.png)

2.  a. Pour estimer graphiquement le taux de variation, on trace la sécante \( (DE) \) à la courbe passant par les points d’abscisse 1 et 2. On lit ensuite une valeur approchée de son coefficient directeur.  
Ici, on estime le taux de variation entre 1 h et 2 h à environ \( -1 \, \text{mg.L}^{-1} \) par heure.  
b. Par la même méthode, on estime le taux de variation de la concentration entre 9 h et 10 h à \( -0{,}1 \, \text{mg.L}^{-1} \) par heure.

1. En observant l’allure de la courbe, on peut dire que la concentration augmente pendant la première heure puis diminue ensuite.  
En comparant les taux de variation, on peut dire que la diminution est 10 fois plus lente entre 9 h et 10 h qu’entre 1 h et 2 h.
{{% /details %}}
