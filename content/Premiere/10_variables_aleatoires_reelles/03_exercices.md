---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Une urne contient 3 boules rouges et 2 boules bleues, indiscernables au toucher. On tire successivement et **sans remise** deux boules. On note \(X\) le nombre de boules rouges obtenues.
1. Déterminer la loi de probabilité de \(X\).
2. Calculer \({P(X \geq 1)}\).

{{% details title="Solution" closed="true" %}}
1. \(X\) prend les valeurs 0, 1 et 2. À l’aide d’un arbre (au second tirage, il reste 4 boules) :
   - \({P(X = 0) = \dfrac{2}{5} \times \dfrac{1}{4} = \dfrac{1}{10}}\) (deux bleues) ;
   - \({P(X = 2) = \dfrac{3}{5} \times \dfrac{2}{4} = \dfrac{3}{10}}\) (deux rouges) ;
   - \({P(X = 1) = \dfrac{3}{5} \times \dfrac{2}{4} + \dfrac{2}{5} \times \dfrac{3}{4} = \dfrac{6}{10}}\).

| \(x_i\) | 0 | 1 | 2 |
|---|---|---|---|
| \({P(X = x_i)}\) | 0,1 | 0,6 | 0,3 |

On vérifie que \({0{,}1 + 0{,}6 + 0{,}3 = 1}\).

2. \({P(X \geq 1) = 1 - P(X = 0) = 0{,}9}\).
{{% /details %}}

### Exercice 2

On lance un dé équilibré à six faces. On gagne 5 € si l’on obtient 6, on gagne 1 € si l’on obtient 4 ou 5, et on perd 2 € sinon. On note \(X\) le gain algébrique.
1. Déterminer la loi de \(X\).
2. Calculer \(E(X)\). Le jeu est-il favorable au joueur ?
3. Calculer \(V(X)\) et \(\sigma(X)\).

{{% details title="Solution" closed="true" %}}
1.

| \(x_i\) | \({-2}\) | 1 | 5 |
|---|---|---|---|
| \({P(X = x_i)}\) | \(\dfrac{1}{2}\) | \(\dfrac{1}{3}\) | \(\dfrac{1}{6}\) |

2. \(E(X) = -2 \times \dfrac{1}{2} + 1 \times \dfrac{1}{3} + 5 \times \dfrac{1}{6} = \dfrac{-6 + 2 + 5}{6} = \dfrac{1}{6} \approx 0{,}17\). L’espérance est positive : en moyenne, sur un grand nombre de parties, le joueur gagne environ 0,17 € par partie. Le jeu lui est (légèrement) favorable.
3. Avec la définition :
\[
V(X) = \dfrac{1}{2}\left(-2 - \dfrac{1}{6}\right)^2 + \dfrac{1}{3}\left(1 - \dfrac{1}{6}\right)^2 + \dfrac{1}{6}\left(5 - \dfrac{1}{6}\right)^2 = \dfrac{1}{2} \times \dfrac{169}{36} + \dfrac{1}{3} \times \dfrac{25}{36} + \dfrac{1}{6} \times \dfrac{841}{36}.
\]
En réduisant au dénominateur 216 : \(V(X) = \dfrac{507 + 50 + 841}{216} = \dfrac{1\,398}{216} = \dfrac{233}{36} \approx 6{,}47\), et \({\sigma(X) = \dfrac{\sqrt{233}}{6} \approx 2{,}54}\).
{{% /details %}}

### Exercice 3

Une variable aléatoire \(X\) a la loi suivante, où \(a\) et \(b\) sont deux réels.

| \(x_i\) | \({-1}\) | 0 | 2 | 4 |
|---|---|---|---|---|
| \({P(X = x_i)}\) | 0,2 | \(a\) | 0,3 | \(b\) |

1. Sachant que \({E(X) = 1{,}4}\), déterminer \(a\) et \(b\).
2. Calculer \({P(X \geq 0)}\) et \({P(X > 0)}\).

{{% details title="Solution" closed="true" %}}
1. La somme des probabilités vaut 1 : \({0{,}2 + a + 0{,}3 + b = 1}\), soit \({a + b = 0{,}5}\). Par ailleurs :
\[
E(X) = -1 \times 0{,}2 + 0 \times a + 2 \times 0{,}3 + 4b = 0{,}4 + 4b = 1{,}4 \iff b = 0{,}25.
\]
Donc \({b = 0{,}25}\) et \({a = 0{,}25}\).
2. \({P(X \geq 0) = 1 - P(X = -1) = 0{,}8}\) et \(P(X > 0) = P(X = 2) + P(X = 4) = 0{,}3 + 0{,}25 = 0{,}55\).
{{% /details %}}

### Exercice 4

On propose deux jeux. Au jeu A, on gagne 10 € avec une probabilité de 0,5 et rien sinon. Au jeu B, on gagne 20 € avec une probabilité de 0,25 et rien sinon. On note \(G_A\) et \(G_B\) les gains.
1. Comparer les espérances des deux gains.
2. Comparer leurs écarts types et interpréter.

{{% details title="Solution" closed="true" %}}
1. \({E(G_A) = 10 \times 0{,}5 = 5}\) et \({E(G_B) = 20 \times 0{,}25 = 5}\) : les deux jeux rapportent en moyenne 5 € par partie.
2. - \(V(G_A) = 0{,}5 \times (10 - 5)^2 + 0{,}5 \times (0 - 5)^2 = 25\), donc \({\sigma(G_A) = 5}\).
   - \(V(G_B) = 0{,}25 \times (20 - 5)^2 + 0{,}75 \times (0 - 5)^2 = 56{,}25 + 18{,}75 = 75\), donc \({\sigma(G_B) = \sqrt{75} \approx 8{,}66}\).

À espérance égale, le jeu B a un écart type plus grand : ses gains sont plus dispersés autour de la moyenne. C’est le jeu le plus « risqué ».
{{% /details %}}

### Exercice 5

Un restaurant propose un menu à 15 €. 40 % des clients ajoutent un dessert à 5 €, et, indépendamment, 30 % prennent un café à 2 €. On note \(X\) la dépense d’un client choisi au hasard.
1. Déterminer la loi de \(X\).
2. Calculer la dépense moyenne par client.

{{% details title="Solution" closed="true" %}}
1. Quatre cas sont possibles. Le choix du dessert et celui du café étant indépendants, on multiplie les probabilités :
   - ni dessert ni café : \({X = 15}\), probabilité \({0{,}6 \times 0{,}7 = 0{,}42}\) ;
   - café seul : \({X = 17}\), probabilité \({0{,}6 \times 0{,}3 = 0{,}18}\) ;
   - dessert seul : \({X = 20}\), probabilité \({0{,}4 \times 0{,}7 = 0{,}28}\) ;
   - dessert et café : \({X = 22}\), probabilité \({0{,}4 \times 0{,}3 = 0{,}12}\).

| \(x_i\) | 15 | 17 | 20 | 22 |
|---|---|---|---|---|
| \({P(X = x_i)}\) | 0,42 | 0,18 | 0,28 | 0,12 |

2. \(E(X) = 15 \times 0{,}42 + 17 \times 0{,}18 + 20 \times 0{,}28 + 22 \times 0{,}12 = 6{,}3 + 3{,}06 + 5{,}6 + 2{,}64 = 17{,}6\). La dépense moyenne est de 17,60 € par client (on retrouve \({15 + 0{,}4 \times 5 + 0{,}3 \times 2 = 17{,}6}\)).
{{% /details %}}
