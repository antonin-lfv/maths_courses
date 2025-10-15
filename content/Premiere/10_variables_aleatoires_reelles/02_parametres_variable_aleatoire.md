---
title: 'Paramètres d’une variable aléatoire'
weight: 2
cascade:
  type: docs
---

## Espérance, variance et écart type

On considère une expérience aléatoire d'univers fini Ω et une loi de probabilité P associée à cette expérience.  
Soit X une variable aléatoire définie sur Ω et qui prend n valeurs \(x_1, x_2, ..., x_n\) de probabilités respectives \(p_1, p_2, ..., p_n\).

| \(x_i\) | \(x_1\) | \(x_2\) | ... | \(x_n\) |
|---------|---------|---------|-----|---------|
| \(P(X = x_i)\) | \(p_1\) | \(p_2\) | ... | \(p_n\) |

> [!TIP] **Définition**
> L'espérance de X est le nombre noté \(E(X)\) défini par :  
> \(E(X) = x_1 p_1 + x_2 p_2 + ... + x_n p_n\)

> [!TIP] **Définition**
> La variance de X est le nombre noté \(V(X)\) défini par :  
> \(V(X) = p_1 (x_1 - E(X))^2 + ... + p_n (x_n - E(X))^2\).

> [!TIP] **Définition**
> L'écart type de X est le nombre noté \(\sigma(X)\) défini par :  
> \(\sigma(X) = \sqrt{V(X)}\).

> [!IMPORTANT] **Remarque**
> On peut également noter :  
> \(E(X) = \sum_{i=1}^n x_i p_i\) et \(V(X) = \sum_{i=1}^n p_i (x_i - E(X))^2\).

> [!TIP] **Exemple**
> Soit X une variable aléatoire dont la loi de probabilité est la suivante.
>
> | \(x_i\) | \(-3\) | \(9\) |
> |---------|--------|-------|
> | \(P(X = x_i)\) | \(\frac{5}{6}\) | \(\frac{1}{6}\) |
>
> On a :  
> \(E(X) = -3 \times \frac{5}{6} + 9 \times \frac{1}{6} = -1\)  
> \(V(X) = \frac{5}{6} (-3 - 1)^2 + \frac{1}{6} (9 + 1)^2 = 20\)  
> \(\sigma(X) = \sqrt{20} = 2\sqrt{5}\)

> [!IMPORTANT] **Interprétation**
> - De façon générale, l'espérance d'une variable aléatoire X peut être interprétée comme la moyenne des valeurs prises par X sur un grand nombre de répétitions de cette même expérience aléatoire.  
> Dans cet exemple, cette moyenne est égale à -1 €.  
> Si la variable aléatoire X désigne le gain d'un jeu, on dit que ce jeu est équitable lorsque \(E(X) = 0\).  
> - Par analogie avec les statistiques, de la même façon que \(E(X)\) représente une moyenne, \(V(X)\) et \(\sigma(X)\) sont des indicateurs de dispersion des valeurs de X autour de \(E(X)\).  
> Plus la variance et l'écart type sont grands, plus les valeurs sont dispersées autour de la moyenne (espérance).

> [!NOTE] **Exercice résolu 1 — Calculer une espérance, une variance et un écart type**  
> Soit \(X\) une variable aléatoire dont la loi de probabilité est donnée ci-dessous.  
> Calculer l’espérance de \(X\), sa variance et son écart type.
>
> | \(x_i\) | -1 | 2 | 3 | 5 |
> |---------|----|---|---|---|
> | \(P(X = x_i)\) | 0,4 | 0,1 | 0,2 | 0,3 |

{{% details title="Solution commentée" closed="true" %}}
\[
\begin{align*}
E(X) &= x_1p_1 + x_2p_2 + x_3p_3 + x_4p_4 \\
&= (-1)\times0{,}4 + 2\times0{,}1 + 3\times0{,}2 + 5\times0{,}3 = 1{,}9
\end{align*}
\]

\[
\begin{align*}
V(X) &= p_1(x_1 - E(X))^2 + p_2(x_2 - E(X))^2 + p_3(x_3 - E(X))^2 + p_4(x_4 - E(X))^2 \\
&= 0{,}4(-1 - 1{,}9)^2 + 0{,}1(2 - 1{,}9)^2 + 0{,}2(3 - 1{,}9)^2 + 0{,}3(5 - 1{,}9)^2 \\
&= 6{,}49
\end{align*}
\]

\[
\sigma(X) = \sqrt{6{,}49} \approx 2{,}548
\]
{{% /details %}}


> [!NOTE] **Exercice résolu 2 — Interpréter la notion d’espérance**  
> Dans un jeu, une partie se déroule en deux étapes, chacune consistant à tourner la roue de loterie ci-contre.  
> À chaque étape, on gagne le nombre de chamallows indiqué par la flèche rouge.  
>
> Si on joue un très grand nombre de parties, combien peut-on espérer gagner en moyenne de chamallows par partie ?  
> ![](/images/image134.png)

{{% details title="Solution commentée" closed="true" %}}
On définit la variable aléatoire \(X\) égale au nombre de chamallows gagnés lors d’une partie.  
On sait que \(E(X)\) représente la moyenne recherchée.  

On note :
- \(A_1\) : « On gagne 2 chamallows à la première étape »  
- \(B_1\) : « On gagne 4 chamallows à la première étape »  
- \(C_1\) : « On gagne 7 chamallows à la première étape »  

et de même \(A_2, B_2, C_2\) pour la deuxième étape.

\[
P(X=4) = P(A_1 \cap A_2) = \frac{1}{4}\times\frac{1}{4} = \frac{1}{16}
\]
\[
P(X=6) = P(A_1 \cap B_2) + P(B_1 \cap A_2) = 2\times\frac{1}{4}\times\frac{1}{2} = \frac{1}{4}
\]
\[
P(X=8) = P(B_1 \cap B_2) + P(C_1 \cap A_2) = 2\times\frac{1}{2}\times\frac{1}{4} = \frac{1}{8}
\]
\[
P(X=9) = P(A_1 \cap C_2) + P(C_1 \cap A_2) = 2\times\frac{1}{4}\times\frac{1}{4} = \frac{1}{8}
\]
\[
P(X=11) = P(B_1 \cap C_2) + P(C_1 \cap B_2) = 2\times\frac{1}{4}\times\frac{1}{4} = \frac{1}{4}
\]
\[
P(X=14) = P(C_1 \cap C_2) = \frac{1}{4}\times\frac{1}{4} = \frac{1}{16}
\]

![](/images/image135.png)

| \(x_i\) | 4 | 6 | 8 | 9 | 11 | 14 |
|---------|---|---|---|---|----|----|
| \(P(X = x_i)\) | 1/16 | 1/4 | 1/8 | 1/8 | 1/4 | 1/16 |

\[
E(X) = 4\times\frac{1}{16} + 6\times\frac{1}{4} + 8\times\frac{1}{8} + 9\times\frac{1}{8} + 11\times\frac{1}{4} + 14\times\frac{1}{16} = 8{,}5
\]

Ainsi, si l’on joue un très grand nombre de parties, on peut espérer gagner **en moyenne 8,5 chamallows par partie**.
{{% /details %}}