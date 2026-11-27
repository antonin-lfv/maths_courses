---
title: 'Continuité'
weight: 2
cascade:
  type: docs
---

## Fonctions continues

> [!TIP] **Définition**
>
> Soit \({f : I \to \mathbb{R}}\) et \({a \in I}\). La fonction \(f\) est **continue en \(a\)** si \({\lim_{x \to a} f(x) = f(a)}\), c’est-à-dire
>
> \[ \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in I,\quad |x - a| \leq \eta \Rightarrow |f(x) - f(a)| \leq \varepsilon. \]
>
> \(f\) est **continue sur \(I\)** si elle est continue en tout point de \(I\). L’ensemble des fonctions continues sur \(I\) est noté \(\mathcal{C}(I, \mathbb{R})\) ou \(\mathcal{C}^0(I, \mathbb{R})\).

> [!TIP] **Propriétés**
>
> - Si \(f\) et \(g\) sont continues en \(a\), alors \({f + g}\), \(\lambda f\), \(fg\) et \(|f|\) le sont, ainsi que \(\dfrac{f}{g}\) si \({g(a) \neq 0}\).
> - Si \(f\) est continue en \(a\) et \(g\) continue en \(f(a)\), alors \({g \circ f}\) est continue en \(a\).
> - Si \(f\) est continue en \(a\) et si \({x_n \to a}\), alors \({f(x_n) \to f(a)}\).
> - Les fonctions polynomiales, rationnelles, \(\exp\), \(\ln\), \(\sin\), \(\cos\), racine carrée et valeur absolue sont continues sur leur ensemble de définition.

> [!TIP] **Définition - Prolongement par continuité**
>
> Si \(f\) est définie sur \({I \setminus \{a\}}\) et admet une limite **finie** \(\ell\) en \(a\), la fonction \(\tilde{f}\) définie sur \(I\) par \({\tilde{f}(x) = f(x)}\) si \({x \neq a}\) et \({\tilde{f}(a) = \ell}\) est continue en \(a\). C’est le **prolongement par continuité** de \(f\) en \(a\).

{{% details title="Exemple" closed="true" %}}
La fonction \({x \mapsto \dfrac{\sin x}{x}}\), définie sur \(\mathbb{R}^*\), se prolonge par continuité en \(0\) en posant \({f(0) = 1}\).

La fonction \({x \mapsto x\sin\left(\dfrac{1}{x}\right)}\) se prolonge par continuité en \(0\) par la valeur \(0\), car \({\left|x\sin\left(\dfrac{1}{x}\right)\right| \leq |x|}\).

La partie entière est discontinue en tout entier \(n\) : sa limite à gauche vaut \({n - 1}\), sa limite à droite \(n\).
{{% /details %}}

## Théorème des valeurs intermédiaires

> [!TIP] **Théorème des valeurs intermédiaires**
>
> Soit \(f\) une fonction **continue** sur un **intervalle** \(I\), et \({a < b}\) deux points de \(I\). Pour tout réel \(y\) compris entre \(f(a)\) et \(f(b)\), il existe \({c \in [a, b]}\) tel que \({f(c) = y}\).
>
> Autrement dit : l’image d’un intervalle par une fonction continue est un intervalle.

{{% details title="Démonstration" closed="true" %}}
Supposons \({f(a) \leq y \leq f(b)}\) (l’autre cas est analogue). L’ensemble \({A = \{x \in [a, b],\ f(x) \leq y\}}\) est non vide (il contient \(a\)) et majoré par \(b\) : il admet une borne supérieure \({c \in [a, b]}\).

- Il existe une suite \((x_n)\) d’éléments de \(A\) qui tend vers \(c\). Comme \({f(x_n) \leq y}\) et que \(f\) est continue en \(c\), on obtient \({f(c) \leq y}\).
- Si \({c = b}\), alors \({f(c) = f(b) \geq y}\). Sinon, pour \(n\) assez grand, \({c + \dfrac{1}{n} \in\, ]c, b]}\) n’est pas dans \(A\), donc \({f\left(c + \dfrac{1}{n}\right) > y}\), et à la limite \({f(c) \geq y}\).

Dans tous les cas, \({f(c) = y}\).
{{% /details %}}

> [!TIP] **Corollaire**
>
> Si \(f\) est continue sur \([a, b]\) et si \({f(a)f(b) \leq 0}\), alors \(f\) s’annule au moins une fois sur \([a, b]\).

> [!IMPORTANT] **Remarque**
>
> Le théorème donne l’existence, pas l’unicité. Pour l’unicité, on ajoute la stricte monotonie. La **dichotomie** donne une valeur approchée : on coupe \([a, b]\) en son milieu \(m\) et on garde la moitié aux extrémités de laquelle \(f\) change de signe ; après \(n\) étapes, la solution est encadrée à \(\dfrac{b - a}{2^n}\) près.

## Fonctions continues sur un segment

> [!TIP] **Théorème des bornes atteintes**
>
> Toute fonction **continue sur un segment** \([a, b]\) est bornée et atteint ses bornes : il existe \(x_m\) et \(x_M\) dans \([a, b]\) tels que, pour tout \({x \in [a, b]}\),
>
> \[ f(x_m) \leq f(x) \leq f(x_M). \]
>
> Avec le théorème des valeurs intermédiaires : l’image d’un segment par une fonction continue est un segment, \({f([a, b]) = [m, M]}\).

{{% details title="Démonstration" closed="true" %}}
Soit \({M = \sup f([a, b])}\), fini ou égal à \(+\infty\). Il existe une suite \((x_n)\) de \([a, b]\) telle que \({f(x_n) \to M}\). La suite \((x_n)\) est bornée : d’après le théorème de Bolzano-Weierstrass, une suite extraite \({(x_{\varphi(n)})}\) converge vers un réel \(c\), et \({c \in [a, b]}\) par passage à la limite dans les inégalités. Par continuité, \({f(x_{\varphi(n)}) \to f(c)}\). Par unicité de la limite, \({M = f(c)}\) : \(M\) est fini et atteint. On procède de même pour la borne inférieure.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les deux hypothèses comptent. Sur \({]0, 1]}\), \({x \mapsto \dfrac{1}{x}}\) est continue mais non bornée (l’intervalle n’est pas fermé). Sur \({[0, +\infty[}\), \({x \mapsto \dfrac{x}{1 + x}}\) est continue et bornée, mais n’atteint pas sa borne supérieure \(1\) (l’intervalle n’est pas borné).

## Théorème de la bijection

> [!TIP] **Théorème de la bijection**
>
> Soit \(f\) une fonction **continue et strictement monotone** sur un intervalle \(I\). Alors :
> - \({J = f(I)}\) est un intervalle, dont les bornes sont les limites de \(f\) aux bornes de \(I\) ;
> - \(f\) réalise une bijection de \(I\) sur \(J\) ;
> - la bijection réciproque \({f^{-1} : J \to I}\) est continue, strictement monotone, de même sens que \(f\).
>
> Dans un repère orthonormé, les courbes de \(f\) et de \(f^{-1}\) sont symétriques par rapport à la droite d’équation \({y = x}\).

> [!NOTE] **Méthode - Existence et unicité d’une solution**
>
> Pour montrer que l’équation \({f(x) = k}\) a une unique solution dans \(I\) : vérifier que \(f\) est continue et strictement monotone sur \(I\), déterminer \(f(I)\) à l’aide des limites aux bornes, puis constater que \({k \in f(I)}\).

> [!NOTE] **Exercice résolu - Un point fixe**
>
> Soit \({f : [0, 1] \to [0, 1]}\) une fonction continue. Montrer que \(f\) admet au moins un point fixe : il existe \({c \in [0, 1]}\) tel que \({f(c) = c}\). Le résultat reste-t-il vrai sur \({]0, 1[}\) ?

{{% details title="Solution commentée" closed="true" %}}
On pose \({g(x) = f(x) - x}\) pour \({x \in [0, 1]}\). La fonction \(g\) est continue sur \([0, 1]\) comme différence de fonctions continues.

- \({g(0) = f(0) \geq 0}\), car \(f\) est à valeurs dans \([0, 1]\).
- \({g(1) = f(1) - 1 \leq 0}\), pour la même raison.

Donc \({g(0)g(1) \leq 0}\). D’après le théorème des valeurs intermédiaires, il existe \({c \in [0, 1]}\) tel que \({g(c) = 0}\), c’est-à-dire \({f(c) = c}\).

Sur \({]0, 1[}\), le résultat est faux : la fonction \({f : x \mapsto x^2}\) est continue de \({]0, 1[}\) dans \({]0, 1[}\), mais \({x^2 = x}\) n’a pour solutions que \(0\) et \(1\), qui ne sont pas dans l’intervalle.
{{% /details %}}
