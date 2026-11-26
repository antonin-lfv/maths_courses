---
title: 'Intervalles – Valeur absolue d’un nombre réel'
weight: 3
cascade:
  type: docs
---

## Intervalles de ℝ

Sur la droite numérique, l’ensemble des réels \(x\) qui vérifient une inégalité ou un encadrement est une portion de droite (segment, demi-droite) : on l’appelle un **intervalle**.

> [!TIP] **Définition**
>
> Soit \(a\) et \(b\) deux nombres réels tels que \(a < b\). Les intervalles de \(\mathbb{R}\) sont les ensembles suivants.
>
> | Ensemble des réels \(x\) tels que | Intervalle | Description |
> |---|---|---|
> | \(a \leq x \leq b\) | \([a\,;\,b]\) | intervalle fermé |
> | \(a < x < b\) | \(]a\,;\,b[\) | intervalle ouvert |
> | \(a \leq x < b\) | \([a\,;\,b[\) | fermé en \(a\), ouvert en \(b\) |
> | \(a < x \leq b\) | \(]a\,;\,b]\) | ouvert en \(a\), fermé en \(b\) |
> | \(x \geq a\) | \([a\,;\,+\infty[\) | |
> | \(x > a\) | \(]a\,;\,+\infty[\) | |
> | \(x \leq b\) | \(]-\infty\,;\,b]\) | |
> | \(x < b\) | \(]-\infty\,;\,b[\) | |
>
> Les nombres \(a\) et \(b\) sont les **bornes** de l’intervalle.

> [!IMPORTANT] **Remarques**
>
> - Un crochet tourné vers l’intérieur signifie que la borne est **incluse** ; tourné vers l’extérieur, qu’elle est **exclue**.
> - Les symboles \(-\infty\) (« moins l’infini ») et \(+\infty\) (« plus l’infini ») ne sont pas des nombres : le crochet est toujours ouvert de leur côté.
> - \(\mathbb{R} = ]-\infty\,;\,+\infty[\). On note aussi \(\mathbb{R}_+ = [0\,;\,+\infty[\) et \(\mathbb{R}_- = ]-\infty\,;\,0]\).

Sur la droite numérique, on représente un intervalle en coloriant la partie concernée et en dessinant un crochet à chaque borne :

![](/images/image361.png)

> [!TIP] **Définitions**
>
> Soit \(I\) et \(J\) deux ensembles de nombres réels.
> - L’**intersection** de \(I\) et \(J\), notée \(I \cap J\), est l’ensemble des réels qui appartiennent à \(I\) **et** à \(J\).
> - La **réunion** de \(I\) et \(J\), notée \(I \cup J\), est l’ensemble des réels qui appartiennent à \(I\) **ou** à \(J\) (éventuellement aux deux).

{{% details title="Exemple" closed="true" %}}
Soit \(I = [-1\,;\,4[\) et \(J = ]2\,;\,+\infty[\). Les réels qui sont à la fois dans \(I\) et dans \(J\) sont ceux tels que \(2 < x < 4\), et ceux qui sont dans l’un au moins des deux sont ceux tels que \(x \geq -1\) :
\[
I \cap J = ]2\,;\,4[ \qquad \text{et} \qquad I \cup J = [-1\,;\,+\infty[.
\]
Si \(K = [6\,;\,7]\), alors \(I \cap K\) ne contient aucun réel : c’est l’ensemble vide, noté \(\varnothing\).
{{% /details %}}

## Valeur absolue et distance

> [!TIP] **Définition**
>
> La **valeur absolue** d’un nombre réel \(x\), notée \(|x|\), est la distance entre le point d’abscisse \(x\) et l’origine \(O\) de la droite numérique. On a
> \[
|x| = \begin{cases} x & \text{si } x \geq 0, \\ -x & \text{si } x < 0. \end{cases}
\]

{{% details title="Exemple" closed="true" %}}
\(|7{,}5| = 7{,}5\) ; \(|-4| = -(-4) = 4\) ; \(|0| = 0\) ; \(|1 - \sqrt{3}| = \sqrt{3} - 1\) car \(1 - \sqrt{3} < 0\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Une valeur absolue est toujours positive ou nulle, et \(|-x| = |x|\) pour tout réel \(x\).

> [!TIP] **Propriété**
>
> La distance entre deux points \(A\) et \(B\) de la droite numérique, d’abscisses respectives \(a\) et \(b\), est
> \[
AB = |b - a| = |a - b|.
\]

{{% details title="Exemple" closed="true" %}}
La distance entre \(-5\) et \(2\) est \(|2 - (-5)| = 7\). La distance entre \(-3{,}5\) et \(-1\) est \(|-1 - (-3{,}5)| = 2{,}5\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Soit \(r\) un réel **positif**.
> - \(|x| = r \iff x = r\) ou \(x = -r\).
> - \(|x| \leq r \iff -r \leq x \leq r \iff x \in [-r\,;\,r]\).
>
> Plus généralement, pour tout réel \(a\) :
> - \(|x - a| \leq r \iff x \in [a - r\,;\,a + r]\) ;
> - \(|x - a| < r \iff x \in ]a - r\,;\,a + r[\).

En effet, \(|x - a| \leq r\) signifie que la distance entre \(x\) et \(a\) est au plus \(r\) : \(x\) est dans l’intervalle de **centre** \(a\) et de **rayon** \(r\).

![](/images/image362.png)

> [!TIP] **Propriété**
>
> Soit \(a < b\). L’intervalle \([a\,;\,b]\) est l’ensemble des réels \(x\) tels que \(|x - c| \leq r\), où
> \[
c = \frac{a + b}{2} \quad (\text{centre}) \qquad \text{et} \qquad r = \frac{b - a}{2} \quad (\text{rayon}).
\]

## Représenter et interpréter

> [!NOTE] **Méthode 1 — Représenter des intervalles, une intersection, une réunion**
>
> 1. Écrire sous forme d’intervalle l’ensemble des réels \(x\) tels que \(-2 < x \leq 3\), puis celui des réels tels que \(x \geq 1\).
> 2. Représenter ces deux intervalles \(I\) et \(J\) sur une même droite numérique et en déduire \(I \cap J\) et \(I \cup J\).
> 3. Le nombre \(\dfrac{22}{7}\) appartient-il à \(I \cap J\) ?

{{% details title="Solution commentée" closed="true" %}}
1. \(I = ]-2\,;\,3]\) (\(-2\) exclu, \(3\) inclus) et \(J = [1\,;\,+\infty[\).
2. On colorie \(I\) d’une couleur et \(J\) d’une autre. La partie coloriée deux fois va de \(1\) (inclus) à \(3\) (inclus) ; la partie coloriée au moins une fois commence juste après \(-2\) et n’a pas de fin à droite :
\[
I \cap J = [1\,;\,3] \qquad \text{et} \qquad I \cup J = ]-2\,;\,+\infty[.
\]
3. \(\dfrac{22}{7} \approx 3{,}14 > 3\) : \(\dfrac{22}{7} \notin I\), donc \(\dfrac{22}{7} \notin I \cap J\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Interpréter une valeur absolue**
>
> 1. Écrire sous forme d’intervalle l’ensemble des réels \(x\) tels que \(|x - 6| \leq 1{,}5\).
> 2. Écrire l’intervalle \([-3\,;\,9]\) à l’aide d’une valeur absolue.
> 3. Résoudre l’équation \(|x + 2| = 5\).

{{% details title="Solution commentée" closed="true" %}}
1. \(|x - 6| \leq 1{,}5\) signifie que la distance entre \(x\) et \(6\) est au plus \(1{,}5\) : \(x \in [6 - 1{,}5\,;\,6 + 1{,}5] = [4{,}5\,;\,7{,}5]\).
2. Centre : \(c = \dfrac{-3 + 9}{2} = 3\) ; rayon : \(r = \dfrac{9 - (-3)}{2} = 6\). Donc \(x \in [-3\,;\,9] \iff |x - 3| \leq 6\).
3. \(|x + 2| = |x - (-2)|\) est la distance entre \(x\) et \(-2\). Elle vaut \(5\) si \(x = -2 + 5 = 3\) ou \(x = -2 - 5 = -7\). L’ensemble des solutions est \(\{-7\,;\,3\}\).
{{% /details %}}
