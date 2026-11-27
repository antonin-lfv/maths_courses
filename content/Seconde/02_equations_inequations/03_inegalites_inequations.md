---
title: 'Inégalités et inéquations'
weight: 3
cascade:
  type: docs
---

## Inégalités

> [!TIP] **Définitions**
>
> Soit \(a\) et \(b\) deux nombres réels.
> - \(a\) est **strictement inférieur** à \(b\), noté \({a < b}\) (ou \({b > a}\)), si \({b - a > 0}\).
> - \(a\) est **inférieur ou égal** à \(b\), noté \({a \leq b}\) (ou \({b \geq a}\)), si \({b - a \geq 0}\).
>
> Comparer deux nombres revient donc à étudier le signe de leur différence.

{{% details title="Exemple" closed="true" %}}
Comparons \(\dfrac{7}{9}\) et \(\dfrac{4}{5}\) : \({\dfrac{4}{5} - \dfrac{7}{9} = \dfrac{36 - 35}{45} = \dfrac{1}{45} > 0}\), donc \({\dfrac{7}{9} < \dfrac{4}{5}}\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Soit \(a\), \(b\), \(c\) trois nombres réels tels que \({a < b}\).
> - Pour tout réel \(c\) : \({a + c < b + c}\) et \({a - c < b - c}\).
> - Si \({c > 0}\) : \({ac < bc}\) et \({\dfrac{a}{c} < \dfrac{b}{c}}\).
> - Si \({c < 0}\) : \({ac > bc}\) et \({\dfrac{a}{c} > \dfrac{b}{c}}\).
>
> Ces propriétés restent vraies avec des inégalités larges.

> [!IMPORTANT] **Remarque**
>
> Multiplier ou diviser les deux membres d’une inégalité par un nombre **strictement négatif** **change le sens** de l’inégalité. Par exemple \({2 < 5}\) mais \({-3 \times 2 = -6 > -15 = -3 \times 5}\).

{{% details title="Démonstration (cas c < 0)" closed="true" %}}
On a \({b - a > 0}\) et \({c < 0}\), donc le produit \({(b - a)c}\) est strictement négatif : \({bc - ac < 0}\), c’est-à-dire \({ac > bc}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soit \(a\), \(b\), \(c\), \(d\) des réels. Si \({a < b}\) et \({c < d}\), alors \({a + c < b + d}\). On peut ajouter membre à membre deux inégalités de même sens.

{{% details title="Démonstration" closed="true" %}}
\({(b + d) - (a + c) = (b - a) + (d - c)}\) est la somme de deux nombres strictement positifs : elle est strictement positive, donc \({a + c < b + d}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On ne peut pas soustraire membre à membre deux inégalités : \({1 < 5}\) et \({0 < 10}\), mais \({1 - 0 = 1}\) n’est pas inférieur à \({5 - 10 = -5}\). Pour encadrer une différence \({x - y}\), on encadre d’abord \({-y}\), puis on ajoute.

## Inéquations

> [!TIP] **Définitions**
>
> Soit \(A(x)\) et \(B(x)\) deux expressions algébriques dépendant d’une variable \(x\) qui prend ses valeurs dans un ensemble \(D\). **Résoudre dans \(D\) l’inéquation** \({A(x) < B(x)}\), c’est déterminer l’ensemble des nombres \(x\) de \(D\) pour lesquels l’inégalité est vraie. Ces nombres sont les **solutions** de l’inéquation.
>
> Deux inéquations sont **équivalentes** si elles ont le même ensemble de solutions.

> [!TIP] **Propriétés**
>
> On obtient une inéquation équivalente :
> - en ajoutant (ou soustrayant) un même nombre ou une même expression aux deux membres ;
> - en multipliant (ou divisant) les deux membres par un même nombre **strictement positif** ;
> - en multipliant (ou divisant) les deux membres par un même nombre **strictement négatif** et en **changeant le sens** de l’inégalité.

{{% details title="Exemple" closed="true" %}}
\[
2x + 5 \geq 11 \iff 2x \geq 6 \iff x \geq 3.
\]
L’ensemble des solutions est l’intervalle \({\mathcal{S} = [3\,;\,+\infty[}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’ensemble des solutions d’une inéquation du premier degré est un intervalle, que l’on écrit avec les notations du chapitre 1.

## Encadrer et résoudre

> [!NOTE] **Méthode 1 - Encadrer une expression**
>
> On sait que \({2 \leq x \leq 5}\) et \({-3 \leq y \leq -1}\). Donner le meilleur encadrement possible de :
> \[
3x - 4, \qquad x + y, \qquad -2y, \qquad x - y.
\]

{{% details title="Solution commentée" closed="true" %}}
- On multiplie par \({3 > 0}\) (le sens est conservé), puis on soustrait \(4\) : \({6 \leq 3x \leq 15}\), donc \({2 \leq 3x - 4 \leq 11}\).
- On ajoute membre à membre les deux encadrements : \({2 + (-3) \leq x + y \leq 5 + (-1)}\), soit \({-1 \leq x + y \leq 4}\).
- On multiplie par \({-2 < 0}\) : le sens change. \({-3 \leq y \leq -1}\) donne \({6 \geq -2y \geq 2}\), soit \({2 \leq -2y \leq 6}\).
- On encadre d’abord \({-y}\) (multiplication par \({-1}\)) : \({1 \leq -y \leq 3}\). Puis on ajoute : \({2 + 1 \leq x + (-y) \leq 5 + 3}\), soit \({3 \leq x - y \leq 8}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Résoudre une inéquation du premier degré**
>
> Résoudre dans \(\mathbb{R}\) : a) \({4x - 7 < 9x + 3}\) ; b) \({\dfrac{x}{3} - 1 \geq \dfrac{2x + 1}{2}}\).

{{% details title="Solution commentée" closed="true" %}}
a) On regroupe les termes en \(x\) dans un membre :
\[
\begin{aligned}
4x - 7 < 9x + 3 &\iff 4x - 9x < 3 + 7 \iff -5x < 10 \\[0.3em]
&\iff x > \dfrac{10}{-5} \iff x > -2.
\end{aligned}
\]
On a divisé par \({-5 < 0}\) : le sens a changé. \({\mathcal{S} = ]-2\,;\,+\infty[}\).

b) On multiplie les deux membres par \({6 > 0}\) pour supprimer les dénominateurs :
\[
\begin{aligned}
\dfrac{x}{3} - 1 \geq \dfrac{2x + 1}{2} &\iff 2x - 6 \geq 3(2x + 1) \iff 2x - 6 \geq 6x + 3 \\[0.3em]
&\iff -4x \geq 9 \iff x \leq -\dfrac{9}{4}.
\end{aligned}
\]
\({\mathcal{S} = \left]-\infty\,;\,-\dfrac{9}{4}\right]}\).
{{% /details %}}
