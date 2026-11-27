---
title: 'Loi uniforme'
weight: 3
cascade:
  type: docs
---

## Définition d’une loi uniforme sur un intervalle

> [!TIP] **Définition et propriété**
>
> Une variable aléatoire \(X\) suit la **loi uniforme** sur l’intervalle \([a\,;\,b]\) (\({a < b}\)) si sa fonction de densité \(f\) est constante sur \([a\,;\,b]\) et nulle ailleurs. On a alors
> \[
f(x) = \dfrac{1}{b - a} \ \text{ pour tout } x \in [a\,;\,b], \quad \text{et } f(x) = 0 \text{ sinon.}
\]

> [!IMPORTANT] **Remarques**
>
> - Lorsque \(X\) suit la loi uniforme sur \([a\,;\,b]\), on note \({X \sim \mathcal{U}([a\,;\,b])}\).
> - La loi uniforme permet de modéliser des temps d’attente sur des intervalles de temps donnés, ou le choix « au hasard » d’un nombre dans un intervalle.

> [!TIP] **Propriété**
>
> Soit \(X\) une variable aléatoire qui suit la loi uniforme sur \([a\,;\,b]\). Pour tout intervalle \([c\,;\,d]\) inclus dans \([a\,;\,b]\) :
> \[
P\left(X \in [c\,;\,d]\right) = \dfrac{d - c}{b - a}.
\]

{{% details title="Démonstration" closed="true" %}}
\({P(c \leq X \leq d) = \displaystyle\int_c^d \dfrac{1}{b - a}\,\mathrm{d}x = \dfrac{d - c}{b - a}}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Si \(X\) suit la loi uniforme sur \([2\,;\,7]\), sa densité vaut \(\dfrac{1}{5}\) sur cet intervalle et \({P(3 \leq X \leq 5) = \dfrac{5 - 3}{7 - 2} = \dfrac{2}{5}}\).

![](/images/image356.png)
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Soit \(X\) une variable aléatoire qui suit la loi uniforme sur \([a\,;\,b]\). Sa fonction de répartition \(F\) est définie par
> \[
F(t) = 0 \text{ si } t < a, \qquad F(t) = \dfrac{t - a}{b - a} \text{ si } t \in [a\,;\,b], \qquad F(t) = 1 \text{ si } t > b.
\]

> [!IMPORTANT] **Remarque**
>
> Pour déterminer \(F\) sur \([a\,;\,b]\), on calcule \({F(t) = P(X \leq t) = \displaystyle\int_a^t f(x)\,\mathrm{d}x}\).

## Espérance et variance d’une loi uniforme

> [!TIP] **Propriété**
>
> Soit \(X\) une variable aléatoire qui suit la loi uniforme sur \([a\,;\,b]\) :
> \[
E(X) = \dfrac{a + b}{2}, \qquad V(X) = \dfrac{(b - a)^2}{12}, \qquad \sigma(X) = \dfrac{b - a}{2\sqrt{3}}.
\]

{{% details title="Démonstration (espérance)" closed="true" %}}
\[
\begin{aligned}
E(X) &= \int_a^b \dfrac{x}{b - a}\,\mathrm{d}x = \dfrac{1}{b - a}\left[\dfrac{x^2}{2}\right]_a^b = \dfrac{b^2 - a^2}{2(b - a)} = \dfrac{(b - a)(b + a)}{2(b - a)} \\[0.3em]
&= \dfrac{a + b}{2}.
\end{aligned}
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’espérance d’une variable aléatoire de loi uniforme sur \([a\,;\,b]\) est la valeur du milieu de l’intervalle.

## Utiliser une loi uniforme

> [!NOTE] **Méthode 1 - Calculer des probabilités**
>
> Soit \({X \sim \mathcal{U}([-2\,;\,3])}\). Calculer \({P(-1 < X < 2)}\), \({P(X > 0)}\) et \({P(X \leq 1{,}5)}\).

{{% details title="Solution commentée" closed="true" %}}
La longueur de l’intervalle est \(5\).
- \({P(-1 < X < 2) = \dfrac{2 - (-1)}{5} = \dfrac{3}{5}}\).
- \({P(X > 0) = P(0 < X \leq 3) = \dfrac{3}{5}}\).
- \(P(X \leq 1{,}5) = F(1{,}5) = \dfrac{1{,}5 - (-2)}{5} = 0{,}7\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Modéliser par une loi uniforme**
>
> Un bus passe à un arrêt à un instant aléatoire entre 7 h 00 et 7 h 20. Une personne arrive à l’arrêt à 7 h 00. On note \(X\) son temps d’attente, en minutes, que l’on modélise par la loi uniforme sur \([0\,;\,20]\).
> 1. Calculer la probabilité qu’elle attende moins de 5 minutes, puis entre 5 et 12 minutes.
> 2. Calculer le temps d’attente moyen et l’écart type.

{{% details title="Solution commentée" closed="true" %}}
1. \({P(X \leq 5) = \dfrac{5}{20} = \dfrac{1}{4}}\) et \({P(5 \leq X \leq 12) = \dfrac{7}{20} = 0{,}35}\).
2. \({E(X) = \dfrac{0 + 20}{2} = 10}\) minutes et \({\sigma(X) = \dfrac{20}{2\sqrt{3}} = \dfrac{10}{\sqrt{3}} \approx 5{,}77}\) minutes.
{{% /details %}}
