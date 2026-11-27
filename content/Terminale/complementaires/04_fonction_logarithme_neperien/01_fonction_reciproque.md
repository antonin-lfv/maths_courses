---
title: 'Fonction réciproque'
weight: 1
cascade:
  type: docs
---

## Définition d’une fonction réciproque

> [!TIP] **Définition**
>
> On considère une fonction \(f\) définie, **continue et strictement monotone** sur un intervalle \(I\), et à valeurs dans un intervalle \(J\) (l’ensemble des valeurs prises par \(f\)).
> D’après le corollaire du théorème des valeurs intermédiaires, pour tout réel \(y\) de \(J\), l’équation \({f(x) = y}\) admet une **unique** solution \(x\) dans \(I\).
> - La fonction définie sur \(J\) qui, à \(y\), associe cette solution \(x\) s’appelle la **fonction réciproque** de \(f\).
> - On la note \({f^{-1}}\).

{{% details title="Exemple" closed="true" %}}
La fonction carré \({f : x \mapsto x^2}\) est continue et strictement croissante sur \({I = [0\,;\,+\infty[}\), à valeurs dans \({J = [0\,;\,+\infty[}\). Pour tout \({y \geq 0}\), l’équation \({x^2 = y}\) a une unique solution positive : \({x = \sqrt{y}}\). La fonction réciproque de \(f\) (restreinte à \({[0\,;\,+\infty[}\)) est donc la fonction racine carrée.
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Pour tout réel \(x\) de \(J\), \({f\left(f^{-1}(x)\right) = x}\) et, pour tout réel \(x\) de \(I\), \({f^{-1}\left(f(x)\right) = x}\).

## Représentation graphique de \({f^{-1}}\)

> [!TIP] **Propriété (admise)**
>
> Avec les notations précédentes : \({y = f(x)}\) et \({x \in I}\) \({\iff}\) \({x = f^{-1}(y)}\) et \({y \in J}\).

> [!TIP] **Propriété**
>
> Dans un repère orthonormé, la courbe \(\mathcal{C}_f\) de \(f\) et la courbe \({\mathcal{C}_{f^{-1}}}\) de sa réciproque sont **symétriques par rapport à la droite d’équation \({y = x}\)** :
> \[
\begin{aligned}
M(a\,;\,b) \in \mathcal{C}_f &\iff b = f(a) \iff a = f^{-1}(b) \\[0.3em]
&\iff M'(b\,;\,a) \in \mathcal{C}_{f^{-1}}.
\end{aligned}
\]

![](/images/image344.png)

## Utiliser une fonction réciproque

> [!NOTE] **Méthode 1 - Montrer qu’une fonction admet une réciproque et la déterminer**
>
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = 2x - 3}\).
> 1. Justifier que \(f\) admet une fonction réciproque \({f^{-1}}\) définie sur \(\mathbb{R}\).
> 2. Calculer \(f(4)\) et en déduire \({f^{-1}(5)}\).
> 3. Déterminer l’expression de \({f^{-1}(y)}\) pour tout réel \(y\).

{{% details title="Solution commentée" closed="true" %}}
1. \(f\) est affine de coefficient directeur \({2 > 0}\) : elle est continue et strictement croissante sur \(\mathbb{R}\). Elle prend toutes les valeurs réelles (\({\lim\limits_{-\infty} f = -\infty}\), \({\lim\limits_{+\infty} f = +\infty}\)). Elle admet donc une réciproque définie sur \(\mathbb{R}\).
2. \({f(4) = 5}\), donc \({f^{-1}(5) = 4}\).
3. Pour tout réel \(y\) : \({y = 2x - 3 \iff x = \dfrac{y + 3}{2}}\). Donc \({f^{-1}(y) = \dfrac{y + 3}{2}}\). Vérification : \({f^{-1}(5) = \dfrac{8}{2} = 4}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Tracer la courbe d’une fonction réciproque**
>
> On reprend \({f(x) = 2x - 3}\). Tracer \(\mathcal{C}_f\), puis \({\mathcal{C}_{f^{-1}}}\) dans un repère orthonormé.

{{% details title="Solution commentée" closed="true" %}}
\(\mathcal{C}_f\) est la droite passant par \({(0\,;\,-3)}\) et \((4\,;\,5)\). On place les symétriques de ces points par rapport à la droite \({y = x}\) : \({(-3\,;\,0)}\) et \((5\,;\,4)\). La courbe de \({f^{-1}}\) est la droite passant par ces deux points, d’équation \({y = \dfrac{1}{2}x + \dfrac{3}{2}}\) (on retrouve l’expression de \({f^{-1}}\)). Les deux droites se coupent sur la droite \({y = x}\), au point \((3\,;\,3)\).
{{% /details %}}
