---
title: 'Taux de variation'
weight: 1
cascade:
  type: docs
---

> [!TIP] **Définition**  
> Soit \( f \) une fonction définie sur un intervalle \( I \), et \( a \), \( b \) deux réels distincts de \( I \).  
> Le **taux de variation de \( f \) entre \( a \) et \( b \)** est le nombre  
> \[
\dfrac{f(b) - f(a)}{b - a}.
\]  
> Interprétation graphique : dans un repère \( (O ; \vec{i}, \vec{j}) \), notons \( A(a ; f(a)) \) et \( B(b ; f(b)) \) les points de la courbe de \( f \) d’abscisses \( a \) et \( b \). Le taux de variation \({\dfrac{f(b) - f(a)}{b - a}}\) est la **pente** (ou coefficient directeur) de la sécante \( (AB) \).
> ![](/images/image174.png)

{{% details title="Exemple" closed="true" %}}
On considère la fonction cube \({f : x \mapsto x^3}\), définie sur \( \mathbb{R} \).  
Son taux de variation entre \({-1}\) et 2 vaut  
\[
\dfrac{f(2) - f(-1)}{2 - (-1)} = \dfrac{8 - (-1)}{3} = \dfrac{9}{3} = 3.
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> D’autres disciplines, comme la physique, notent souvent un taux de variation \( \dfrac{\Delta y}{\Delta x} \) lorsque \({y = f(x)}\).  
> La notation s’adapte aux grandeurs étudiées : si \({x = f(t)}\), on écrit \( \dfrac{\Delta x}{\Delta t} \) ; si \({q = f(t)}\), on écrit \( \dfrac{\Delta q}{\Delta t} \).

> [!TIP] **Propriété**  
> Soit \( f \) la fonction affine définie sur \( \mathbb{R} \) par \({f(x) = mx + p}\).  
> Entre deux réels distincts quelconques, le taux de variation de \( f \) est constant et vaut \( m \).

{{% details title="Exemple" closed="true" %}}
On considère la fonction affine \({f : x \mapsto -2x + 5}\). Pour tous réels \({a \neq b}\) :
\[
\dfrac{f(b) - f(a)}{b - a} = \dfrac{-2b + 5 - (-2a + 5)}{b - a} = \dfrac{-2b + 2a}{b - a} = \dfrac{-2(b - a)}{b - a} = -2.
\]
Son taux de variation vaut toujours \({-2}\), son coefficient directeur.
{{% /details %}}

> [!TIP] **Propriétés**  
> Soit \( f \) une fonction définie sur un intervalle \( I \), et \( a \), \( b \) deux réels distincts de \( I \).  
>- Si \( f \) est **croissante** sur \( I \), le taux de variation de \( f \) entre \( a \) et \( b \) est **positif**.  
>- Si \( f \) est **décroissante** sur \( I \), le taux de variation de \( f \) entre \( a \) et \( b \) est **négatif**.

> [!IMPORTANT] **Remarque**  
> Les réciproques de ces propriétés sont fausses : un taux de variation positif entre \(a\) et \(b\) ne garantit pas que \(f\) soit croissante entre \(a\) et \(b\).

{{% details title="Exemple et contre-exemple" closed="true" %}}
On considère la fonction carré \({f : x \mapsto x^2}\), définie sur \( \mathbb{R} \).  
Elle est décroissante sur \({]-\infty ; 0]}\) : son taux de variation entre \({-3}\) et \({-1}\) est donc négatif. On le vérifie : \({\dfrac{f(-1) - f(-3)}{-1 - (-3)} = \dfrac{1 - 9}{2} = -4}\) (segment vert ci-dessous).

**Contre-exemple**
\[
\dfrac{f(3) - f(-1)}{3 - (-1)} = \dfrac{9 - 1}{4} = 2.
\]  
Le taux de variation de \( f \) entre \({-1}\) et 3 est strictement positif (segment rouge), et pourtant \( f \) n’est pas croissante sur \({[-1 ; 3]}\) : elle décroît sur \({[-1 ; 0]}\).

![](/images/image175.png)

{{% /details %}}

> [!NOTE] **Exercice résolu**  
> On considère la fonction inverse \({f : x \mapsto \dfrac{1}{x}}\), définie sur \({]0 ; +\infty[}\).  
> 1. Calculer le taux de variation de \( f \) entre 1 et 2.  
> 2. Calculer le taux de variation de \( f \) entre 2 et 4.  
> 3. Interpréter graphiquement ces résultats.

{{% details title="Solution commentée" closed="true" %}}
1. Entre 1 et 2 :  
\[
\dfrac{f(2) - f(1)}{2 - 1} = \dfrac{\dfrac12 - 1}{1} = -\dfrac{1}{2}.
\]  
2. Entre 2 et 4 :  
\[
\dfrac{f(4) - f(2)}{4 - 2} = \dfrac{\dfrac14 - \dfrac12}{2} = \dfrac{-\dfrac14}{2} = -\dfrac{1}{8}.
\]  
3. Notons \( A(1 ; f(1)) \), \( B(2 ; f(2)) \) et \( C(4 ; f(4)) \). Ces taux sont les coefficients directeurs des sécantes \( (AB) \) et \( (BC) \). Ils sont négatifs, ce qui est cohérent avec la décroissance de \(f\) sur \({]0 ; +\infty[}\), et la droite \((BC)\) est moins inclinée que \((AB)\) : la fonction décroît de moins en moins vite.

![](/images/image176.png)

{{% /details %}}

> [!NOTE] **Exercice résolu**  
> Une vidéo est mise en ligne à l’instant \({t = 0}\). Le graphique ci-dessous donne le nombre \( V \) de personnes en train de la regarder (en milliers) en fonction du temps \( t \) (en heures).  
> 1. Lire graphiquement le nombre de spectateurs au bout de 2 heures, puis au bout de 6 heures.  
> 2. a. Estimer graphiquement le taux de variation de \( V \) entre 2 heures et 3 heures.  
>   b. Estimer graphiquement le taux de variation de \( V \) entre 6 heures et 7 heures.  
> 3. Décrire l’évolution du nombre de spectateurs au cours du temps.
> ![](/images/image177.png)

{{% details title="Solution commentée" closed="true" %}}
1. Au bout de 2 heures, on lit environ 7 200 spectateurs (\({V \approx 7{,}2}\)).  
Au bout de 6 heures, on lit environ 2 000 spectateurs (\({V \approx 2}\)).

2. a. On trace la sécante \( (DE) \) passant par les points de la courbe d’abscisses 2 et 3, puis on estime son coefficient directeur. On lit \({V(3) \approx 6}\), d’où un taux de variation d’environ \({\dfrac{6 - 7{,}2}{3 - 2} \approx -1{,}2}\), soit une perte d’environ 1 200 spectateurs par heure.  
b. Avec la sécante \( (FG) \) entre 6 h et 7 h : \({V(7) \approx 1{,}3}\), d’où un taux d’environ \({\dfrac{1{,}3 - 2}{1} \approx -0{,}7}\), soit une perte d’environ 700 spectateurs par heure.

![](/images/image178.png)

3. Le nombre de spectateurs augmente rapidement au début, atteint un maximum (environ 7 300) au bout d’une heure et demie à deux heures, puis diminue.  
Les taux de variation montrent que la baisse ralentit : elle est presque deux fois moins rapide entre 6 h et 7 h qu’entre 2 h et 3 h.
{{% /details %}}
