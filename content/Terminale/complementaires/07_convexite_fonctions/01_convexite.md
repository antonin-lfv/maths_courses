---
title: 'Convexité'
weight: 1
cascade:
  type: docs
---

## Fonctions convexes, fonctions concaves

> [!TIP] **Définitions**
>
> Soit \(f\) une fonction définie sur un intervalle \(I\) et \(\mathcal{C}_f\) sa courbe représentative dans un repère.
> - \(f\) est **convexe** sur \(I\) si, pour tous réels \(a\) et \(b\) de \(I\), en notant \(A(a\,;\,f(a))\) et \(B(b\,;\,f(b))\), la portion de la courbe \(\mathcal{C}_f\) située entre \(A\) et \(B\) est **en dessous** de la sécante \((AB)\).
> - \(f\) est **concave** sur \(I\) si, pour tous \(a\) et \(b\) de \(I\), la portion de \(\mathcal{C}_f\) située entre \(A\) et \(B\) est **au-dessus** de la sécante \((AB)\).

![](/images/image350.png)

> [!IMPORTANT] **Remarques**
>
> - Étudier la convexité d’une fonction revient à déterminer sur quel(s) intervalle(s) elle est convexe et sur quel(s) intervalle(s) elle est concave.
> - Une fonction est concave si et seulement si son opposée est convexe.
> - En géométrie, une surface est convexe si, pour tous points \(A\) et \(B\) de la surface, le segment \([AB]\) est entièrement inclus dans la surface. Une fonction est convexe si et seulement si la partie du plan située au-dessus de sa courbe est convexe.

> [!TIP] **Propriétés (cas des fonctions de référence)**
>
> - La fonction carré et la fonction exponentielle sont convexes sur \(\mathbb{R}\).
> - La fonction racine carrée est concave sur \({[0\,;\,+\infty[}\).
> - La fonction inverse est concave sur \({]-\infty\,;\,0[}\) et convexe sur \({]0\,;\,+\infty[}\).
> - La fonction cube est concave sur \({]-\infty\,;\,0]}\) et convexe sur \({[0\,;\,+\infty[}\).
> - La fonction logarithme népérien est concave sur \({]0\,;\,+\infty[}\).

## Point d’inflexion

> [!TIP] **Définition**
>
> Soit \(f\) une fonction définie et dérivable sur un intervalle \(I\), \(\mathcal{C}_f\) sa courbe représentative et \(A\) un point de \(\mathcal{C}_f\). Le point \(A\) est un **point d’inflexion** de \(\mathcal{C}_f\) si \(\mathcal{C}_f\) admet une tangente en \(A\) et **traverse** cette tangente en \(A\).

![](/images/image351.png)

> [!IMPORTANT] **Remarque**
>
> En l’abscisse d’un point d’inflexion de la courbe, la fonction change de convexité (elle passe de concave à convexe, ou l’inverse). Par exemple, l’origine est un point d’inflexion de la courbe de la fonction cube.

## Lire la convexité sur un graphique

> [!NOTE] **Méthode 1 - Déterminer graphiquement la convexité d’une fonction**
>
> Une fonction \(f\), définie sur \({[-3\,;\,3]}\), a une courbe en forme de « S » : la courbe est sous ses sécantes sur \({[-3\,;\,0]}\), au-dessus sur \([0\,;\,3]\). Que peut-on dire de la convexité de \(f\) et de sa courbe au point d’abscisse 0 ?

{{% details title="Solution commentée" closed="true" %}}
\(f\) est convexe sur \({[-3\,;\,0]}\) (courbe sous ses sécantes) et concave sur \([0\,;\,3]\) (courbe au-dessus de ses sécantes). Elle change de convexité en 0 : si elle y est dérivable, le point de la courbe d’abscisse 0 est un point d’inflexion (la courbe y traverse sa tangente).
{{% /details %}}

> [!NOTE] **Méthode 2 - Montrer graphiquement l’existence d’un point d’inflexion**
>
> On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \({f(x) = x^3 - 3x^2 + 4}\).
> 1. Déterminer l’équation de la tangente \(T\) à la courbe au point \(I\) d’abscisse 1.
> 2. Étudier la position de la courbe par rapport à \(T\) et conclure.

{{% details title="Solution commentée" closed="true" %}}
1. \({f'(x) = 3x^2 - 6x}\), \({f'(1) = -3}\) et \({f(1) = 2}\). \({T : y = -3(x - 1) + 2 = -3x + 5}\).
2. \(f(x) - (-3x + 5) = x^3 - 3x^2 + 3x - 1 = (x - 1)^3\). Cette différence est négative pour \({x < 1}\) et positive pour \({x > 1}\) : la courbe est sous \(T\) à gauche de \(I\) et au-dessus à droite. Elle traverse sa tangente en \(I\) : \(I(1\,;\,2)\) est un point d’inflexion.
{{% /details %}}
