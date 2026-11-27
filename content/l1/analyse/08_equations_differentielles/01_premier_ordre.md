---
title: 'Équations linéaires du premier ordre'
weight: 1
cascade:
  type: docs
---

## Vocabulaire

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux fonctions continues sur un intervalle \(I\). L’équation
>
> \[ (E) : \quad y' + a(x)y = b(x) \]
>
> est une **équation différentielle linéaire du premier ordre**. Une **solution** sur \(I\) est une fonction \(y\) dérivable sur \(I\) telle que \({y'(x) + a(x)y(x) = b(x)}\) pour tout \({x \in I}\).
>
> L’**équation homogène associée** est \({(E_0) : y' + a(x)y = 0}\).

> [!IMPORTANT] **Remarque**
>
> Une équation \({\alpha(x)y' + \beta(x)y = \gamma(x)}\) se met sous cette forme en divisant par \(\alpha(x)\), ce qui n’est possible que sur un intervalle où \(\alpha\) **ne s’annule pas**. On résout donc séparément sur chacun de ces intervalles.

## Équation homogène

> [!TIP] **Théorème**
>
> Soit \(A\) une primitive de \(a\) sur \(I\). Les solutions de \({y' + a(x)y = 0}\) sur \(I\) sont les fonctions
>
> \[ x \mapsto \lambda e^{-A(x)}, \qquad \lambda \in \mathbb{R}. \]

{{% details title="Démonstration" closed="true" %}}
Soit \(y\) dérivable sur \(I\). On pose \({z(x) = y(x)e^{A(x)}}\). Alors

\[
z'(x) = \big(y'(x) + a(x)y(x)\big)e^{A(x)}.
\]

Comme l’exponentielle ne s’annule pas, \(y\) est solution si et seulement si \({z' = 0}\) sur l’intervalle \(I\), c’est-à-dire si \(z\) est une constante \(\lambda\), soit \({y(x) = \lambda e^{-A(x)}}\).
{{% /details %}}

> [!TIP] **Conséquence**
>
> Une solution de l’équation homogène est soit identiquement nulle, soit ne s’annule jamais sur \(I\). L’ensemble des solutions est une droite vectorielle.

## Équation avec second membre

> [!TIP] **Théorème - Structure des solutions**
>
> Si \(y_p\) est une solution particulière de \((E)\), les solutions de \((E)\) sur \(I\) sont les fonctions
>
> \[ x \mapsto y_p(x) + \lambda e^{-A(x)}, \qquad \lambda \in \mathbb{R}. \]

{{% details title="Démonstration" closed="true" %}}
Par linéarité, \(y\) est solution de \((E)\) si et seulement si \({(y - y_p)' + a(x)(y - y_p) = b(x) - b(x) = 0}\), c’est-à-dire si \({y - y_p}\) est solution de l’équation homogène.
{{% /details %}}

> [!NOTE] **Méthode - Variation de la constante**
>
> Quand aucune solution particulière n’est évidente, on la cherche sous la forme \({y_p(x) = \lambda(x)e^{-A(x)}}\), où \(\lambda\) est une fonction dérivable. En reportant dans \((E)\), les termes en \(\lambda(x)\) se simplifient et il reste
>
> \[ \lambda'(x)e^{-A(x)} = b(x), \qquad \text{soit} \qquad \lambda'(x) = b(x)e^{A(x)}. \]
>
> Il suffit de trouver une primitive.

> [!TIP] **Principe de superposition**
>
> Si \(y_1\) est solution de \({y' + a(x)y = b_1(x)}\) et \(y_2\) solution de \({y' + a(x)y = b_2(x)}\), alors \({y_1 + y_2}\) est solution de \({y' + a(x)y = b_1(x) + b_2(x)}\).

> [!TIP] **Théorème - Problème de Cauchy**
>
> Pour tout \({x_0 \in I}\) et tout réel \(y_0\), il existe une unique solution de \((E)\) sur \(I\) telle que \({y(x_0) = y_0}\).

{{% details title="Exemple" closed="true" %}}
Résolvons \({y' + 2y = e^{-x}}\) sur \(\mathbb{R}\), avec \({y(0) = 3}\).

- **Équation homogène.** \({a(x) = 2}\), \({A(x) = 2x}\) : les solutions sont \({\lambda e^{-2x}}\).
- **Solution particulière.** On cherche \({y_p(x) = ce^{-x}}\) : \({-ce^{-x} + 2ce^{-x} = e^{-x}}\) donne \({c = 1}\).
- **Solution générale.** \({y(x) = e^{-x} + \lambda e^{-2x}}\).
- **Condition initiale.** \({y(0) = 1 + \lambda = 3}\), donc \({\lambda = 2}\).

La solution est \({y(x) = e^{-x} + 2e^{-2x}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Variation de la constante**
>
> Résoudre sur \({I = \,]0, +\infty[}\) l’équation \({(E) : xy' - 2y = x^3\cos x}\).

{{% details title="Solution commentée" closed="true" %}}
Sur \(I\), \({x \neq 0}\) : l’équation équivaut à \({y' - \dfrac{2}{x}y = x^2\cos x}\).

**Équation homogène.** \({a(x) = -\dfrac{2}{x}}\), dont une primitive sur \(I\) est \({A(x) = -2\ln x}\). Les solutions sont \({\lambda e^{2\ln x} = \lambda x^2}\).

**Solution particulière.** On cherche \({y_p(x) = \lambda(x)x^2}\). Alors \({y_p'(x) = \lambda'(x)x^2 + 2x\lambda(x)}\), et

\[
y_p' - \dfrac{2}{x}y_p = \lambda'(x)x^2 + 2x\lambda(x) - 2x\lambda(x) = \lambda'(x)x^2.
\]

On veut \({\lambda'(x)x^2 = x^2\cos x}\), soit \({\lambda'(x) = \cos x}\) : on prend \({\lambda(x) = \sin x}\), d’où \({y_p(x) = x^2\sin x}\).

**Solution générale.** Les solutions de \((E)\) sur \({]0, +\infty[}\) sont les fonctions

\[
y(x) = x^2\sin x + \lambda x^2 = x^2(\sin x + \lambda), \qquad \lambda \in \mathbb{R}.
\]

**Vérification.** Pour \({y = x^2\sin x}\) : \({xy' = x(2x\sin x + x^2\cos x) = 2x^2\sin x + x^3\cos x}\), et \({xy' - 2y = x^3\cos x}\).
{{% /details %}}
