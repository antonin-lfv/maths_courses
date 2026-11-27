---
title: 'Variations d’une fonction et extremums'
weight: 2
cascade:
  type: docs
---

## Lire des variations sur une courbe

La courbe ci-dessous représente une fonction \(f\) définie sur \({[-2\,;\,4]}\). Quand on la parcourt de gauche à droite, elle monte de \({x = -2}\) à \({x = -1}\), descend jusqu’à \({x = 2}\), puis remonte jusqu’à \({x = 4}\).

![](/images/image382.png)

On résume ces observations dans un **tableau de variation** : les flèches indiquent si la fonction monte ou descend, et on écrit aux extrémités des flèches les images correspondantes.

![](/images/image383.png)

> [!IMPORTANT] **Remarque**
>
> Une fonction dont la courbe est un segment horizontal sur un intervalle est **constante** sur cet intervalle : on la représente par une flèche horizontale.

## Fonctions croissantes, décroissantes

> [!TIP] **Définitions**
>
> Soit \(f\) une fonction définie sur un intervalle \(I\).
> - \(f\) est **croissante** sur \(I\) si, pour tous réels \(u\) et \(v\) de \(I\), \({u < v}\) entraîne \({f(u) \leq f(v)}\).
> - \(f\) est **strictement croissante** sur \(I\) si, pour tous \(u\), \(v\) de \(I\), \({u < v}\) entraîne \({f(u) < f(v)}\).
> - \(f\) est **décroissante** sur \(I\) si, pour tous \(u\), \(v\) de \(I\), \({u < v}\) entraîne \({f(u) \geq f(v)}\).
> - \(f\) est **strictement décroissante** sur \(I\) si, pour tous \(u\), \(v\) de \(I\), \({u < v}\) entraîne \({f(u) > f(v)}\).
> - \(f\) est **constante** sur \(I\) si, pour tous \(u\), \(v\) de \(I\), \({f(u) = f(v)}\).
>
> Une fonction croissante sur \(I\) ou décroissante sur \(I\) est dite **monotone** sur \(I\).

> [!IMPORTANT] **Remarque**
>
> Une fonction croissante **conserve l’ordre** : les images sont rangées dans le même ordre que les antécédents. Une fonction décroissante **renverse l’ordre**.

> [!TIP] **Conséquences**
>
> Soit \(f\) une fonction définie sur un intervalle \([a\,;\,b]\).
> - Si \(f\) est croissante sur \([a\,;\,b]\), alors pour tout \({x \in [a\,;\,b]}\), \({f(a) \leq f(x) \leq f(b)}\).
> - Si \(f\) est décroissante sur \([a\,;\,b]\), alors pour tout \({x \in [a\,;\,b]}\), \({f(b) \leq f(x) \leq f(a)}\).

{{% details title="Exemple" closed="true" %}}
Avec la fonction \(f\) de la figure : \(f\) est strictement décroissante sur \({[-1\,;\,2]}\), et \({0 < 1}\), donc \({f(0) > f(1)}\). Pour tout \({x \in [2\,;\,4]}\), \({-3 \leq f(x) \leq 7{,}4}\).
{{% /details %}}

## Maximum et minimum

> [!TIP] **Définitions**
>
> Soit \(f\) une fonction définie sur un intervalle \(I\), et \({x_0 \in I}\).
> - Dire que \(M\) est le **maximum** de \(f\) sur \(I\), atteint en \(x_0\), signifie que \({f(x_0) = M}\) et que, pour tout \({x \in I}\), \({f(x) \leq M}\).
> - Dire que \(m\) est le **minimum** de \(f\) sur \(I\), atteint en \(x_0\), signifie que \({f(x_0) = m}\) et que, pour tout \({x \in I}\), \({f(x) \geq m}\).
>
> Un maximum ou un minimum est appelé un **extremum**.

{{% details title="Exemple" closed="true" %}}
Sur \({[-2\,;\,4]}\), le maximum de \(f\) est \(7{,}4\), atteint en \(4\), et son minimum est \({-3}\), atteint en \(2\).

Sur \({[-2\,;\,2]}\), le maximum est \(2{,}4\), atteint en \({-1}\) : un extremum dépend de l’intervalle considéré.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les extremums d’une fonction sur un intervalle se lisent dans son tableau de variation : ils sont à chercher parmi les valeurs écrites aux extrémités des flèches (changements de sens de variation et bornes de l’intervalle).

## Variations des fonctions de référence

> [!TIP] **Propriété (récapitulatif)**
>
> | Fonction | Ensemble de définition | Variations |
> |---|---|---|
> | \({x \longmapsto mx + p}\) | \(\mathbb{R}\) | strictement croissante si \({m > 0}\), strictement décroissante si \({m < 0}\), constante si \({m = 0}\) |
> | \(x \longmapsto x^2\) | \(\mathbb{R}\) | strictement décroissante sur \({]-\infty\,;\,0]}\), strictement croissante sur \({[0\,;\,+\infty[}\) ; minimum \(0\) en \(0\) |
> | \(x \longmapsto x^3\) | \(\mathbb{R}\) | strictement croissante sur \(\mathbb{R}\) |
> | \(x \longmapsto \dfrac{1}{x}\) | \(\mathbb{R}^*\) | strictement décroissante sur \({]-\infty\,;\,0[}\) et sur \({]0\,;\,+\infty[}\) |
> | \(x \longmapsto \sqrt{x}\) | \({[0\,;\,+\infty[}\) | strictement croissante sur \({[0\,;\,+\infty[}\) ; minimum \(0\) en \(0\) |
>
> Ces résultats sont démontrés aux chapitres 3, 4 et 5.

## Exploiter un tableau de variation

> [!NOTE] **Méthode 1 - Tracer une courbe compatible et compter des solutions**
>
> Une fonction \(g\) définie sur \({[-4\,;\,5]}\) a le tableau de variation suivant.
>
> ![](/images/image384.png)
>
> 1. Tracer l’allure d’une courbe compatible avec ce tableau.
> 2. Donner le maximum et le minimum de \(g\) sur \({[-4\,;\,5]}\).
> 3. Combien l’équation \({g(x) = 0}\) a-t-elle de solutions ? Et l’équation \({g(x) = 2}\) ?
> 4. Peut-on comparer \({g(-3)}\) et \({g(-2)}\) ? \(g(0)\) et \(g(3)\) ?

{{% details title="Solution commentée" closed="true" %}}
1. On place les points \({(-4\,;\,3)}\), \({(-1\,;\,-2)}\), \((2\,;\,4)\) et \((5\,;\,1)\), puis on les relie en respectant le sens de chaque flèche : la courbe descend de \({-4}\) à \({-1}\), monte jusqu’à \(2\), puis redescend. Plusieurs courbes conviennent : le tableau ne donne pas la forme exacte.
2. Le maximum est \(4\), atteint en \(2\) ; le minimum est \({-2}\), atteint en \({-1}\).
3. On raisonne intervalle par intervalle, où \(g\) est strictement monotone :
   - sur \({[-4\,;\,-1]}\), \(g\) décroît de \(3\) à \({-2}\) : elle prend une seule fois la valeur \(0\) et une seule fois la valeur \(2\) ;
   - sur \({[-1\,;\,2]}\), \(g\) croît de \({-2}\) à \(4\) : elle prend une seule fois chacune des valeurs \(0\) et \(2\) ;
   - sur \([2\,;\,5]\), \(g\) décroît de \(4\) à \(1\) : elle ne prend pas la valeur \(0\), mais prend une fois la valeur \(2\).

   L’équation \({g(x) = 0}\) a donc **deux** solutions et l’équation \({g(x) = 2}\) en a **trois**.
4. \({-3}\) et \({-2}\) sont dans \({[-4\,;\,-1]}\), où \(g\) est décroissante : \({-3 < -2}\) donne \({g(-3) > g(-2)}\). En revanche, \(0\) et \(3\) ne sont pas dans un même intervalle de monotonie : on sait seulement que \({-2 \leq g(0) \leq 4}\) et \({1 \leq g(3) \leq 4}\), ce qui ne permet pas de conclure.
{{% /details %}}

> [!NOTE] **Méthode 2 - Démontrer un sens de variation avec la définition**
>
> Soit \(h\) la fonction définie sur \({]0\,;\,+\infty[}\) par \({h(x) = 3 - \dfrac{2}{x}}\). Démontrer que \(h\) est strictement croissante sur \({]0\,;\,+\infty[}\).

{{% details title="Solution commentée" closed="true" %}}
Soit \(u\) et \(v\) deux réels tels que \({0 < u < v}\). On étudie le signe de \({h(v) - h(u)}\) :
\[
h(v) - h(u) = \left(3 - \dfrac{2}{v}\right) - \left(3 - \dfrac{2}{u}\right) = \dfrac{2}{u} - \dfrac{2}{v} = \dfrac{2v - 2u}{uv} = \dfrac{2(v - u)}{uv}.
\]
Comme \({v - u > 0}\) et \({uv > 0}\), on a \({h(v) - h(u) > 0}\), c’est-à-dire \({h(u) < h(v)}\). Donc \(h\) est strictement croissante sur \({]0\,;\,+\infty[}\).

*Autre raisonnement :* si \({0 < u < v}\), alors \({\dfrac{1}{u} > \dfrac{1}{v}}\) (la fonction inverse est décroissante), donc \({-\dfrac{2}{u} < -\dfrac{2}{v}}\) (multiplication par \({-2 < 0}\)), puis \({3 - \dfrac{2}{u} < 3 - \dfrac{2}{v}}\).
{{% /details %}}
