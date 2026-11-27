---
title: 'Notion de densité'
weight: 1
cascade:
  type: docs
---

## Variable aléatoire à densité

> [!TIP] **Définition**
>
> Soit \(X\) une variable aléatoire. Lorsque l’ensemble des valeurs possibles de \(X\) contient un intervalle, on dit que \(X\) est une **variable aléatoire continue**.

> [!TIP] **Définition**
>
> Soit \(X\) une variable aléatoire continue. On dit que \(X\) **est de densité \(f\)** lorsque :
> - il existe une fonction \(f\) définie sur \(\mathbb{R}\), **continue et positive** sur un intervalle \(I\) (appelé **support** de \(f\)) et nulle en dehors de \(I\), telle que l’aire totale sous la courbe représentative de \(f\) est égale à 1 ;
> - la probabilité de l’évènement \({\{X \in [a\,;\,b]\}}\) (avec \({[a\,;\,b] \subset I}\)) est
> \[
P\left(X \in [a\,;\,b]\right) = \int_a^b f(x)\,\mathrm{d}x.
\]

{{% details title="Exemple" closed="true" %}}
La fonction \(f\) définie par \({f(x) = \dfrac{3}{4}x(2 - x)}\) sur \([0\,;\,2]\) et nulle ailleurs est continue et positive sur \([0\,;\,2]\), et
\[
\int_0^2 \dfrac{3}{4}x(2 - x)\,\mathrm{d}x = \dfrac{3}{4}\left[x^2 - \dfrac{x^3}{3}\right]_0^2 = \dfrac{3}{4} \times \dfrac{4}{3} = 1.
\]
C’est une densité. Si \(X\) a pour densité \(f\) :
\[
P(0{,}5 \leq X \leq 1{,}5) = \dfrac{3}{4}\left[x^2 - \dfrac{x^3}{3}\right]_{0{,}5}^{1{,}5} = \dfrac{3}{4}\left(1{,}125 - \dfrac{5}{24}\right) = \dfrac{11}{16}.
\]

![](/images/image355.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Pour tout réel \(a\), \({P(X = a) = \displaystyle\int_a^a f(x)\,\mathrm{d}x = 0}\). Par conséquent, \({P(X \leq a) = P(X < a)}\) : avec une variable à densité, les inégalités larges ou strictes donnent les mêmes probabilités.

## Fonction de répartition

> [!TIP] **Définition**
>
> Soit \(X\) une variable aléatoire de densité \(f\). On appelle **fonction de répartition** de \(X\) la fonction \(F\) définie pour tout réel \(t\) par \({F(t) = P(X \leq t)}\).

> [!TIP] **Propriétés (admises)**
>
> Soit \(X\) une variable aléatoire de densité \(f\) et \(F\) sa fonction de répartition.
> - Pour tous réels \(a\) et \(b\) tels que \({a < b}\) :
> \[
P(a \leq X \leq b) = P(a < X \leq b) = P(a \leq X < b) = P(a < X < b) = F(b) - F(a).
\]
> - En tout point \(t\) où la fonction \(f\) est continue, \(F\) est dérivable et \({F'(t) = f(t)}\).

## Utiliser une densité

> [!NOTE] **Méthode 1 - Vérifier qu’une fonction est une densité**
>
> Les fonctions suivantes, nulles en dehors de l’intervalle indiqué, sont-elles des densités de probabilité ?
> 1. \({f(x) = \dfrac{x}{8}}\) sur \([0\,;\,4]\)
> 2. \({g(x) = 1 - x}\) sur \([0\,;\,2]\)

{{% details title="Solution commentée" closed="true" %}}
1. \(f\) est continue et positive sur \([0\,;\,4]\), et \({\displaystyle\int_0^4 \dfrac{x}{8}\,\mathrm{d}x = \left[\dfrac{x^2}{16}\right]_0^4 = 1}\) : c’est une densité.
2. \(g\) est négative sur \(]1\,;\,2]\) (par exemple \({g(2) = -1}\)) : ce n’est pas une densité. (D’ailleurs, \({\int_0^2 g = 0 \neq 1}\).)
{{% /details %}}

> [!NOTE] **Méthode 2 - Calculer des probabilités**
>
> Soit \(X\) la variable aléatoire de densité \({f(x) = \dfrac{x}{8}}\) sur \([0\,;\,4]\) (et nulle ailleurs).
> 1. Calculer \({P(X \leq 2)}\), \({P(1 \leq X \leq 3)}\) et \({P(X > 3)}\).
> 2. Déterminer la fonction de répartition de \(X\) sur \([0\,;\,4]\).

{{% details title="Solution commentée" closed="true" %}}
Une primitive de \(f\) est \({x \mapsto \dfrac{x^2}{16}}\).
1. \({P(X \leq 2) = \dfrac{4}{16} = \dfrac{1}{4}}\) ; \({P(1 \leq X \leq 3) = \dfrac{9 - 1}{16} = \dfrac{1}{2}}\) ; \(P(X > 3) = 1 - P(X \leq 3) = 1 - \dfrac{9}{16} = \dfrac{7}{16}\).
2. Pour \({t \in [0\,;\,4]}\), \({F(t) = \displaystyle\int_0^t \dfrac{x}{8}\,\mathrm{d}x = \dfrac{t^2}{16}}\) (et \({F(t) = 0}\) si \({t < 0}\), \({F(t) = 1}\) si \({t > 4}\)).
{{% /details %}}
