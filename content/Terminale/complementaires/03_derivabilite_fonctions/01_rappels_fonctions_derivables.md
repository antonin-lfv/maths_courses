---
title: 'Rappels sur les fonctions dérivables'
weight: 1
cascade:
  type: docs
---

## Dérivabilité d’une fonction

> [!TIP] **Définitions**
>
> Soient \(f\) une fonction définie sur un intervalle \(I\), et \(a\) et \({a + h}\) deux réels de \(I\), avec \({h \neq 0}\).
> - \(f\) est **dérivable en \(a\)** si le taux de variation \({\dfrac{f(a + h) - f(a)}{h}}\) tend vers un nombre réel quand \(h\) tend vers 0. Ce nombre est appelé **nombre dérivé** de \(f\) en \(a\) et noté \(f'(a)\).
> - \(f\) est **dérivable sur \(I\)** si elle est dérivable en tout réel \(a\) de \(I\).
> - La fonction \({f' : x \mapsto f'(x)}\) est alors appelée **fonction dérivée** de \(f\).

## Équation de la tangente

> [!TIP] **Propriété**
>
> Si \(f\) est dérivable en \(a\), la **tangente** à la courbe représentative de \(f\) au point \(A\) d’abscisse \(a\) est la droite passant par \(A\) et de coefficient directeur \(f'(a)\). Elle a pour équation réduite
> \[
y = f'(a)(x - a) + f(a).
\]

![](/images/image343.png)

## Continuité et dérivabilité

> [!TIP] **Propriété (admise)**
>
> Une fonction dérivable sur un intervalle \(I\) est continue sur \(I\).

> [!IMPORTANT] **Remarque**
>
> La réciproque est fausse : la fonction valeur absolue \({x \mapsto |x|}\) est continue en 0 mais n’y est pas dérivable (son taux de variation entre 0 et \(h\) vaut 1 si \({h > 0}\) et \({-1}\) si \({h < 0}\)).

## Dérivée et variation

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction dérivable sur un intervalle \(I\) de \(\mathbb{R}\).
> - Si, pour tout \({x \in I}\), \({f'(x) > 0}\), alors \(f\) est strictement croissante sur \(I\).
> - Si, pour tout \({x \in I}\), \({f'(x) < 0}\), alors \(f\) est strictement décroissante sur \(I\).
> - Si, pour tout \({x \in I}\), \({f'(x) = 0}\), alors \(f\) est constante sur \(I\).

> [!IMPORTANT] **Remarques**
>
> - La réciproque du premier point est fausse : la fonction cube \({x \mapsto x^3}\) est strictement croissante sur \(\mathbb{R}\), mais sa dérivée \(3x^2\) s’annule en 0. Le résultat reste vrai si \(f'\) s’annule seulement en des points isolés.
> - Dans un tableau de variation, une flèche signifie que la fonction est continue et strictement monotone sur l’intervalle correspondant.

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction dérivable sur un intervalle **ouvert** \(I\) et \(a\) un réel de \(I\). Si \(f\) admet un extremum local en \(a\), alors \({f'(a) = 0}\).

> [!IMPORTANT] **Remarque**
>
> La réciproque est fausse : pour la fonction cube, \({f'(0) = 0}\) mais \(f\) n’admet pas d’extremum en 0. En revanche, si \(f'\) s’annule en \(a\) **en changeant de signe**, alors \(f\) admet un extremum local en \(a\).

## Utiliser la dérivée

> [!NOTE] **Méthode 1 - Étudier la dérivabilité en un point et trouver une tangente**
>
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = x^2 - 3x}\).
> 1. À l’aide du taux de variation, montrer que \(f\) est dérivable en 2 et calculer \(f'(2)\).
> 2. Déterminer une équation de la tangente à la courbe de \(f\) au point d’abscisse 2.

{{% details title="Solution commentée" closed="true" %}}
1. Pour \({h \neq 0}\) : \(f(2 + h) = (2 + h)^2 - 3(2 + h) = 4 + 4h + h^2 - 6 - 3h = -2 + h + h^2\) et \({f(2) = -2}\). Donc
\[
\dfrac{f(2 + h) - f(2)}{h} = \dfrac{h + h^2}{h} = 1 + h,
\]
qui tend vers 1 quand \(h\) tend vers 0. \(f\) est dérivable en 2 et \({f'(2) = 1}\).
2. \(y = f'(2)(x - 2) + f(2) = 1 \times (x - 2) - 2\), soit \({y = x - 4}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Étudier les variations d’une fonction**
>
> Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \({g(x) = -x^3 + 3x + 1}\).
> 1. Calculer \(g'(x)\) et étudier son signe.
> 2. En déduire les variations de \(g\) et ses extremums locaux.

{{% details title="Solution commentée" closed="true" %}}
1. \(g'(x) = -3x^2 + 3 = 3(1 - x^2) = 3(1 - x)(1 + x)\). C’est un trinôme de coefficient dominant négatif, de racines \({-1}\) et 1 : \({g'(x) < 0}\) sur \({]-\infty\,;\,-1[}\) et sur \({]1\,;\,+\infty[}\), \({g'(x) > 0}\) sur \({]-1\,;\,1[}\).
2. \(g\) est strictement décroissante sur \({]-\infty\,;\,-1]}\), strictement croissante sur \({[-1\,;\,1]}\), strictement décroissante sur \({[1\,;\,+\infty[}\). Comme \(g'\) s’annule en changeant de signe en \({-1}\) et en 1 :
   - minimum local en \({-1}\) : \({g(-1) = 1 - 3 + 1 = -1}\) ;
   - maximum local en 1 : \({g(1) = -1 + 3 + 1 = 3}\).
{{% /details %}}
