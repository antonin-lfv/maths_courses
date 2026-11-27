---
title: 'Dérivées successives et convexité'
weight: 2
cascade:
  type: docs
---

## Dérivées successives

> [!TIP] **Définition**
>
> On pose \({f^{(0)} = f}\) et, si \(f^{(n)}\) est dérivable, \({f^{(n+1)} = \left(f^{(n)}\right)'}\). La fonction \(f\) est :
> - **de classe \(\mathcal{C}^n\)** sur \(I\) si elle est \(n\) fois dérivable sur \(I\) et si \(f^{(n)}\) est continue sur \(I\) ;
> - **de classe \(\mathcal{C}^\infty\)** sur \(I\) si elle est indéfiniment dérivable sur \(I\).

> [!TIP] **Propriétés**
>
> - Les sommes, produits, quotients (à dénominateur non nul) et composées de fonctions de classe \(\mathcal{C}^n\) sont de classe \(\mathcal{C}^n\).
> - **Formule de Leibniz** : si \(f\) et \(g\) sont \(n\) fois dérivables,
>
> \[ (fg)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} f^{(k)} g^{(n-k)}. \]

> [!TIP] **Dérivées \(n\)-ièmes usuelles**
>
> - \({\left(e^{ax}\right)^{(n)} = a^n e^{ax}}\).
> - \({\sin^{(n)}(x) = \sin\left(x + \dfrac{n\pi}{2}\right)}\) et \({\cos^{(n)}(x) = \cos\left(x + \dfrac{n\pi}{2}\right)}\).
> - \({\left(x^p\right)^{(n)} = \dfrac{p!}{(p - n)!}x^{p-n}}\) si \({n \leq p}\), et \(0\) si \({n > p}\) (\(p\) entier naturel).
> - \({\left(\dfrac{1}{x - a}\right)^{(n)} = \dfrac{(-1)^n\, n!}{(x - a)^{n+1}}}\).

{{% details title="Exemple" closed="true" %}}
Calculons la dérivée \(n\)-ième de \({h(x) = x^2 e^{3x}}\) pour \({n \geq 2}\). Avec \({f(x) = x^2}\) et \({g(x) = e^{3x}}\), les dérivées de \(f\) sont nulles à partir de l’ordre \(3\) :

\[
\begin{aligned}
h^{(n)}(x) &= x^2 \times 3^n e^{3x} + n \times 2x \times 3^{n-1}e^{3x} + \dfrac{n(n-1)}{2} \times 2 \times 3^{n-2}e^{3x} \\[0.3em]
&= 3^{n-2}e^{3x}\left(9x^2 + 6nx + n(n-1)\right).
\end{aligned}
\]

Vérification pour \({n = 2}\) par calcul direct : \({h'(x) = (2x + 3x^2)e^{3x}}\), puis \({h''(x) = (2 + 6x + 6x + 9x^2)e^{3x} = (9x^2 + 12x + 2)e^{3x}}\), ce qui correspond bien à la formule.
{{% /details %}}

## Fonctions convexes

> [!TIP] **Définition**
>
> Une fonction \({f : I \to \mathbb{R}}\) est **convexe** sur l’intervalle \(I\) si, pour tous \(x\), \(y\) dans \(I\) et tout \({t \in [0, 1]}\) :
>
> \[ f\big((1 - t)x + ty\big) \leq (1 - t)f(x) + tf(y). \]
>
> Géométriquement : tout arc de la courbe est situé **sous sa corde**. La fonction \(f\) est **concave** si \(-f\) est convexe.

> [!TIP] **Théorème - Caractérisation des fonctions convexes dérivables**
>
> Soit \(f\) dérivable sur l’intervalle \(I\). Les propriétés suivantes sont équivalentes :
> - \(f\) est convexe sur \(I\) ;
> - \(f'\) est croissante sur \(I\) ;
> - la courbe de \(f\) est **au-dessus de toutes ses tangentes** : pour tous \(a\), \(x\) dans \(I\), \({f(x) \geq f(a) + f'(a)(x - a)}\).
>
> Si \(f\) est deux fois dérivable, \(f\) est convexe si et seulement si \({f'' \geq 0}\) sur \(I\).

> [!TIP] **Définition - Point d’inflexion**
>
> Un **point d’inflexion** est un point de la courbe où celle-ci traverse sa tangente. Si \(f\) est deux fois dérivable et si \(f''\) s’annule en changeant de signe en \(a\), alors le point d’abscisse \(a\) est un point d’inflexion.

> [!TIP] **Inégalités de convexité classiques**
>
> - \(\exp\) est convexe sur \(\mathbb{R}\) : \({e^x \geq 1 + x}\) pour tout réel \(x\).
> - \(\ln\) est concave sur \({]0, +\infty[}\) : \({\ln x \leq x - 1}\) pour tout \({x > 0}\), ou encore \({\ln(1 + x) \leq x}\) pour \({x > -1}\).
> - \(\sin\) est concave sur \({\left[0, \dfrac{\pi}{2}\right]}\) : \({\dfrac{2}{\pi}x \leq \sin x \leq x}\) pour \({x \in \left[0, \dfrac{\pi}{2}\right]}\) (corde et tangente en \(0\)).

> [!TIP] **Propriété - Inégalité de Jensen**
>
> Si \(f\) est convexe sur \(I\), alors pour tous \({x_1, \dots, x_n \in I}\) et tous réels positifs \({\lambda_1, \dots, \lambda_n}\) de somme \(1\) :
>
> \[ f\left(\sum_{i=1}^{n} \lambda_i x_i\right) \leq \sum_{i=1}^{n} \lambda_i f(x_i). \]

> [!NOTE] **Exercice résolu - Moyennes arithmétique et géométrique**
>
> Montrer que, pour tous réels strictement positifs \(a\), \(b\), \(c\) : \({\sqrt[3]{abc} \leq \dfrac{a + b + c}{3}}\).

{{% details title="Solution commentée" closed="true" %}}
La fonction \(\ln\) est deux fois dérivable sur \({]0, +\infty[}\) et \({\ln''(x) = -\dfrac{1}{x^2} < 0}\) : elle est concave. L’inégalité de Jensen, appliquée à la fonction convexe \(-\ln\) avec \({\lambda_1 = \lambda_2 = \lambda_3 = \dfrac{1}{3}}\), donne

\[
\ln\left(\dfrac{a + b + c}{3}\right) \geq \dfrac{\ln a + \ln b + \ln c}{3} = \ln\left((abc)^{1/3}\right).
\]

La fonction exponentielle étant croissante, on en déduit \({\dfrac{a + b + c}{3} \geq \sqrt[3]{abc}}\).

Vérification avec \({(a, b, c) = (1, 2, 4)}\) : \({\sqrt[3]{8} = 2}\) et \({\dfrac{7}{3} \approx 2{,}33}\).
{{% /details %}}
