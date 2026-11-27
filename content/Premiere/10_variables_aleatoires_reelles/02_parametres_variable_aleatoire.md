---
title: 'Paramètres d’une variable aléatoire'
weight: 2
cascade:
  type: docs
---

## Espérance, variance et écart type

On considère une expérience aléatoire d’univers fini \(\Omega\), munie d’une loi de probabilité \(P\).  
Soit \(X\) une variable aléatoire définie sur \(\Omega\), prenant les \(n\) valeurs \(x_1, x_2, \dots, x_n\) avec les probabilités respectives \(p_1, p_2, \dots, p_n\) :

| \(x_i\) | \(x_1\) | \(x_2\) | ... | \(x_n\) |
|---------|---------|---------|-----|---------|
| \({P(X = x_i)}\) | \(p_1\) | \(p_2\) | ... | \(p_n\) |

> [!TIP] **Définition**
> L’**espérance** de \(X\) est le nombre noté \(E(X)\) défini par :  
> \[
E(X) = x_1 p_1 + x_2 p_2 + \dots + x_n p_n.
\]

> [!TIP] **Définition**
> La **variance** de \(X\) est le nombre noté \(V(X)\) défini par :  
> \[
V(X) = p_1 (x_1 - E(X))^2 + p_2 (x_2 - E(X))^2 + \dots + p_n (x_n - E(X))^2.
\]

> [!TIP] **Définition**
> L’**écart type** de \(X\) est le nombre noté \(\sigma(X)\) défini par :  
> \[
\sigma(X) = \sqrt{V(X)}.
\]

> [!IMPORTANT] **Remarque**
> Avec le symbole somme, ces définitions s’écrivent :  
> \({E(X) = \displaystyle\sum_{i=1}^n x_i p_i}\) et \({V(X) = \displaystyle\sum_{i=1}^n p_i (x_i - E(X))^2}\).  
> La variance est une somme de termes positifs : elle est toujours positive, ce qui permet d’en prendre la racine carrée.

{{% details title="Exemple" closed="true" %}}
On reprend le jeu de l’urne du paragraphe précédent : \(X\) est le gain algébrique, de loi

| \(x_i\) | \({-2}\) | \(8\) |
|---------|--------|-------|
| \({P(X = x_i)}\) | \(\dfrac{4}{5}\) | \(\dfrac{1}{5}\) |

On calcule :  
\[
E(X) = -2 \times \dfrac{4}{5} + 8 \times \dfrac{1}{5} = -\dfrac{8}{5} + \dfrac{8}{5} = 0
\]
\[
V(X) = \dfrac{4}{5} (-2 - 0)^2 + \dfrac{1}{5} (8 - 0)^2 = \dfrac{16}{5} + \dfrac{64}{5} = 16
\]
\[
\sigma(X) = \sqrt{16} = 4
\]
{{% /details %}}

> [!IMPORTANT] **Interprétation**
> - L’espérance de \(X\) s’interprète comme la **moyenne** des valeurs prises par \(X\) lorsqu’on répète l’expérience un très grand nombre de fois.  
> Dans l’exemple, le gain moyen par partie est de 0 €.  
> Lorsque \(X\) représente le gain à un jeu, on dit que le jeu est **équitable** si \({E(X) = 0}\) ; c’est le cas ici. Il est favorable au joueur si \({E(X) > 0}\), défavorable si \({E(X) < 0}\).  
> - Comme en statistiques, la variance \(V(X)\) et l’écart type \(\sigma(X)\) mesurent la **dispersion** des valeurs de \(X\) autour de l’espérance : plus ils sont grands, plus les valeurs sont éloignées, en moyenne, de \(E(X)\).

> [!NOTE] **Exercice résolu 1 - Calculer une espérance, une variance et un écart type**  
> La loi de probabilité d’une variable aléatoire \(X\) est donnée ci-dessous.  
> Calculer l’espérance, la variance et l’écart type de \(X\).
>
> | \(x_i\) | -2 | 0 | 1 | 4 |
> |---------|----|---|---|---|
> | \({P(X = x_i)}\) | 0,3 | 0,2 | 0,4 | 0,1 |

{{% details title="Solution commentée" closed="true" %}}
\[
\begin{align*}
E(X) &= x_1p_1 + x_2p_2 + x_3p_3 + x_4p_4 \\
&= (-2)\times0{,}3 + 0\times0{,}2 + 1\times0{,}4 + 4\times0{,}1 \\
&= -0{,}6 + 0 + 0{,}4 + 0{,}4 = 0{,}2
\end{align*}
\]

\[
\begin{aligned}
V(X) &= p_1(x_1 - E(X))^2 + p_2(x_2 - E(X))^2 \\[0.3em]
&\quad + p_3(x_3 - E(X))^2 + p_4(x_4 - E(X))^2 \\[0.3em]
&= 0{,}3(-2 - 0{,}2)^2 + 0{,}2(0 - 0{,}2)^2 \\[0.3em]
&\quad + 0{,}4(1 - 0{,}2)^2 + 0{,}1(4 - 0{,}2)^2 \\[0.3em]
&= 0{,}3 \times 4{,}84 + 0{,}2 \times 0{,}04 + 0{,}4 \times 0{,}64 + 0{,}1 \times 14{,}44 \\[0.3em]
&= 1{,}452 + 0{,}008 + 0{,}256 + 1{,}444 = 3{,}16
\end{aligned}
\]

\[
\sigma(X) = \sqrt{3{,}16} \approx 1{,}778
\]
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Interpréter la notion d’espérance**  
> Une partie de jeu consiste à faire tourner deux fois la roue ci-dessous. Le secteur « 1 » occupe la moitié de la roue, le secteur « 3 » un tiers et le secteur « 6 » un sixième. À chaque tour, on marque le nombre de points indiqué par la flèche ; le score d’une partie est la somme des deux tours.  
>
> Sur un très grand nombre de parties, quel score moyen par partie peut-on espérer ?  
> ![](/images/image218.png)

{{% details title="Solution commentée" closed="true" %}}
On note \(X\) le score d’une partie : le score moyen cherché est \(E(X)\).  

À chaque tour, on obtient 1, 3 ou 6 points avec les probabilités \(\dfrac{1}{2}\), \(\dfrac{1}{3}\) et \(\dfrac{1}{6}\), et les deux tours sont indépendants. On représente la partie par un arbre :

![](/images/image219.png)

On regroupe les chemins selon le score :
\[
P(X=2) = P(1 \text{ puis } 1) = \dfrac{1}{2}\times\dfrac{1}{2} = \dfrac{1}{4} = \dfrac{9}{36}
\]
\[
P(X=4) = P(1 \text{ puis } 3) + P(3 \text{ puis } 1) = 2\times\dfrac{1}{2}\times\dfrac{1}{3} = \dfrac{1}{3} = \dfrac{12}{36}
\]
\[
P(X=6) = P(3 \text{ puis } 3) = \dfrac{1}{3}\times\dfrac{1}{3} = \dfrac{1}{9} = \dfrac{4}{36}
\]
\[
P(X=7) = P(1 \text{ puis } 6) + P(6 \text{ puis } 1) = 2\times\dfrac{1}{2}\times\dfrac{1}{6} = \dfrac{1}{6} = \dfrac{6}{36}
\]
\[
P(X=9) = P(3 \text{ puis } 6) + P(6 \text{ puis } 3) = 2\times\dfrac{1}{3}\times\dfrac{1}{6} = \dfrac{1}{9} = \dfrac{4}{36}
\]
\[
P(X=12) = P(6 \text{ puis } 6) = \dfrac{1}{6}\times\dfrac{1}{6} = \dfrac{1}{36}
\]

| \(x_i\) | 2 | 4 | 6 | 7 | 9 | 12 |
|---------|---|---|---|---|----|----|
| \({P(X = x_i)}\) | 9/36 | 12/36 | 4/36 | 6/36 | 4/36 | 1/36 |

Vérification : \({9 + 12 + 4 + 6 + 4 + 1 = 36}\).

\[
\begin{aligned}
E(X) &= \dfrac{2\times9 + 4\times12 + 6\times4 + 7\times6 + 9\times4 + 12\times1}{36} \\[0.3em]
&= \dfrac{18 + 48 + 24 + 42 + 36 + 12}{36} = \dfrac{180}{36} = 5
\end{aligned}
\]

Sur un très grand nombre de parties, on peut donc espérer marquer **en moyenne 5 points par partie**.
{{% /details %}}
