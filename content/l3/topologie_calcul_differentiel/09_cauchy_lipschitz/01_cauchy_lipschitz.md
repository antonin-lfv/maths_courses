---
title: 'Problème de Cauchy, existence et unicité'
weight: 1
cascade:
  type: docs
---

## Problème de Cauchy

> [!TIP] **Définition**
>
> Soit \(I\) un intervalle ouvert de \(\mathbb{R}\), \(\Omega\) un ouvert de \(\mathbb{R}^n\) et \({f : I \times \Omega \to \mathbb{R}^n}\) continue. Une **solution** de l’équation différentielle
>
> \[ y' = f(t, y) \]
>
> est un couple \((J, y)\) où \(J\) est un intervalle inclus dans \(I\) et \({y : J \to \Omega}\) une fonction dérivable telle que \({y'(t) = f(t, y(t))}\) pour tout \({t \in J}\). Le **problème de Cauchy** en \({(t_0, y_0) \in I \times \Omega}\) consiste à chercher les solutions vérifiant la **condition initiale** \({y(t_0) = y_0}\).

> [!TIP] **Propriétés**
>
> - **Forme intégrale** : une fonction continue \(y\) est solution du problème de Cauchy si et seulement si
>
> \[ y(t) = y_0 + \int_{t_0}^{t} f(s, y(s))\,\mathrm{d}s. \]
>
> - **Réduction à l’ordre 1** : l’équation \({y^{(n)} = g(t, y, y', \dots, y^{(n-1)})}\) équivaut au système d’ordre \(1\) \({Y' = F(t, Y)}\) pour \({Y = (y, y', \dots, y^{(n-1)})}\). La condition initiale porte alors sur \({y(t_0), y'(t_0), \dots, y^{(n-1)}(t_0)}\).
> - L’équation est **autonome** si \(f\) ne dépend pas de \(t\) ; les translatées en temps d’une solution sont alors des solutions.

> [!TIP] **Définition - Solution maximale**
>
> Une solution \((J, y)\) est **maximale** si elle n’admet pas de prolongement en une solution définie sur un intervalle strictement plus grand. Elle est **globale** si \({J = I}\).

## Théorème de Cauchy-Lipschitz

> [!TIP] **Définition**
>
> \(f\) est **localement lipschitzienne par rapport à \(y\)** si tout point de \({I \times \Omega}\) possède un voisinage \(V\) et une constante \(k\) tels que
>
> \[ \forall (t, y_1), (t, y_2) \in V, \quad \|f(t, y_1) - f(t, y_2)\| \leq k\|y_1 - y_2\|. \]
>
> C’est le cas dès que \(f\) est de classe \(\mathcal{C}^1\) (par l’inégalité des accroissements finis).

> [!TIP] **Théorème de Cauchy-Lipschitz**
>
> Soit \(f\) continue et localement lipschitzienne par rapport à \(y\). Alors, pour tout \({(t_0, y_0) \in I \times \Omega}\) :
> - **existence et unicité locales** : il existe \({\alpha > 0}\) tel que le problème de Cauchy admette une unique solution sur \({[t_0 - \alpha, t_0 + \alpha]}\) ;
> - **unicité globale** : deux solutions du même problème de Cauchy coïncident sur l’intersection de leurs intervalles de définition ;
> - il existe une **unique solution maximale**, et son intervalle de définition est ouvert.

{{% details title="Démonstration" closed="true" %}}
Idée de l’existence locale. On choisit un cylindre \({C = [t_0 - \alpha, t_0 + \alpha] \times \overline{B}(y_0, r)}\) sur lequel \({\|f\| \leq M}\) et \(f\) est \(k\)-lipschitzienne en \(y\), avec \({\alpha M \leq r}\) et \({\alpha k < 1}\). Sur l’espace complet \(X\) des fonctions continues de \({[t_0 - \alpha, t_0 + \alpha]}\) dans \(\overline{B}(y_0, r)\), muni de \({\|\cdot\|_\infty}\), on pose

\[
T(y)(t) = y_0 + \int_{t_0}^{t} f(s, y(s))\,\mathrm{d}s.
\]

\(T\) envoie \(X\) dans \(X\) (car \({\|T(y)(t) - y_0\| \leq \alpha M \leq r}\)) et \({\|T(y) - T(z)\|_\infty \leq \alpha k\|y - z\|_\infty}\). Par le théorème du point fixe de Banach-Picard, \(T\) a un unique point fixe : c’est la solution cherchée.

Unicité globale : l’ensemble des points où deux solutions coïncident est non vide, fermé (par continuité) et ouvert (par unicité locale) dans l’intersection des intervalles, qui est connexe.
{{% /details %}}

> [!TIP] **Conséquences géométriques**
>
> - Par chaque point de \({I \times \Omega}\) passe une courbe intégrale et une seule : deux courbes intégrales distinctes **ne se coupent pas**.
> - Si \({f(t, c) = 0}\) pour tout \(t\), la fonction constante \(c\) est solution (**équilibre**). Une solution qui n’est pas constante égale à \(c\) ne prend jamais la valeur \(c\). En dimension \(1\), elle reste donc toujours du même côté de \(c\).

> [!IMPORTANT] **Remarque**
>
> Sans l’hypothèse lipschitzienne, l’existence subsiste (théorème de Cauchy-Peano-Arzelà) mais l’unicité peut tomber : le problème \({y' = 2\sqrt{|y|}}\), \({y(0) = 0}\) admet la solution nulle et la solution \({y(t) = t|t|}\). La fonction \({y \mapsto \sqrt{|y|}}\) n’est pas lipschitzienne en \(0\).

## Solutions maximales et explosion

> [!TIP] **Théorème de sortie de tout compact**
>
> Soit \({y : \,]\alpha, \beta[ \to \Omega}\) une solution maximale, avec \({\beta < \sup I}\). Alors \(y(t)\) sort de tout compact de \(\Omega\) quand \({t \to \beta^-}\). Si \({\Omega = \mathbb{R}^n}\) :
>
> \[ \|y(t)\| \xrightarrow[t \to \beta^-]{} +\infty \qquad (\text{explosion en temps fini}). \]
>
> Par contraposée : une solution maximale qui reste **bornée** est globale (quand \({\Omega = \mathbb{R}^n}\)).

{{% details title="Exemple" closed="true" %}}
\({y' = y^2}\), \({y(0) = 1}\). La fonction \({f(y) = y^2}\) est \(\mathcal{C}^1\). La solution ne s’annule pas (la fonction nulle est solution), donc \({\dfrac{y'}{y^2} = 1}\), soit \({-\dfrac{1}{y} = t - 1}\) : \({y(t) = \dfrac{1}{1 - t}}\), définie sur \({]-\infty, 1[}\), et qui explose en \({t = 1}\). La solution maximale n’est pas globale, bien que \(f\) soit définie sur \(\mathbb{R}\) tout entier.
{{% /details %}}

> [!TIP] **Lemme de Gronwall**
>
> Soient \(u\) et \(a\) deux fonctions continues sur \({[t_0, t_1]}\), avec \({a \geq 0}\), et \(C\) une constante. Si
>
> \[ \forall t \in [t_0, t_1], \quad u(t) \leq C + \int_{t_0}^{t} a(s)u(s)\,\mathrm{d}s, \]
>
> alors \({u(t) \leq C\exp\left(\displaystyle\int_{t_0}^{t} a(s)\,\mathrm{d}s\right)}\) pour tout \({t \in [t_0, t_1]}\).

{{% details title="Démonstration" closed="true" %}}
On pose \({v(t) = C + \displaystyle\int_{t_0}^{t} a(s)u(s)\,\mathrm{d}s}\), de classe \(\mathcal{C}^1\), et \({A(t) = \displaystyle\int_{t_0}^{t} a}\). Alors \({v' = au \leq av}\) (car \({a \geq 0}\) et \({u \leq v}\)), donc \({\left(ve^{-A}\right)' = (v' - av)e^{-A} \leq 0}\). La fonction \(ve^{-A}\) est décroissante : \({v(t)e^{-A(t)} \leq v(t_0) = C}\), d’où \({u(t) \leq v(t) \leq Ce^{A(t)}}\).
{{% /details %}}

> [!TIP] **Théorème - Existence globale**
>
> Si \({\Omega = \mathbb{R}^n}\) et s’il existe des fonctions continues \({a, b : I \to \mathbb{R}_+}\) telles que
>
> \[ \|f(t, y)\| \leq a(t)\|y\| + b(t), \]
>
> alors toutes les solutions maximales sont **globales**. C’est le cas si \(f\) est globalement lipschitzienne en \(y\), et en particulier pour les équations **linéaires**.

## Systèmes différentiels linéaires

> [!TIP] **Théorème**
>
> Soient \({A : I \to \mathcal{M}_n(\mathbb{R})}\) et \({B : I \to \mathbb{R}^n}\) continues. Pour tout \({(t_0, Y_0)}\), le problème \({Y' = A(t)Y + B(t)}\), \({Y(t_0) = Y_0}\) admet une unique solution, définie sur \(I\) **tout entier**.
> - L’ensemble des solutions de l’équation homogène \({Y' = A(t)Y}\) est un espace vectoriel de **dimension \(n\)** : l’application \({Y \mapsto Y(t_0)}\) est un isomorphisme sur \(\mathbb{R}^n\).
> - Les solutions de l’équation complète forment un espace affine : solution particulière plus solutions de l’équation homogène.
> - **Wronskien** : si \({Y_1, \dots, Y_n}\) sont des solutions de l’équation homogène, \({W(t) = \det(Y_1(t), \dots, Y_n(t))}\) vérifie \({W' = \operatorname{tr}(A(t))W}\). Il est soit identiquement nul, soit jamais nul ; les solutions forment une base si et seulement si \({W \neq 0}\).
> - **Coefficients constants** : la solution de \({Y' = AY}\), \({Y(t_0) = Y_0}\) est \({Y(t) = e^{(t - t_0)A}Y_0}\). Avec second membre (formule de Duhamel) :
>
> \[ Y(t) = e^{(t - t_0)A}Y_0 + \int_{t_0}^{t} e^{(t - s)A}B(s)\,\mathrm{d}s. \]

> [!NOTE] **Méthode - Étude qualitative d’une équation scalaire autonome \({y' = f(y)}\)**
>
> 1. Vérifier que \(f\) est \(\mathcal{C}^1\) : Cauchy-Lipschitz s’applique.
> 2. Trouver les équilibres (zéros de \(f\)) : ce sont des solutions constantes, que les autres solutions ne franchissent pas.
> 3. Entre deux équilibres consécutifs, \(f\) garde un signe constant : la solution y est **strictement monotone** et bornée, donc globale, et elle tend vers les équilibres aux deux extrémités.
> 4. Au-delà du dernier équilibre, la solution est monotone ; il faut étudier si elle explose en temps fini.

> [!NOTE] **Exercice résolu - L’équation logistique**
>
> On considère le problème de Cauchy \({y' = y(1 - y)}\), \({y(0) = y_0}\) avec \({0 < y_0 < 1}\).
>
> 1. Montrer, sans la calculer, que la solution maximale est globale, à valeurs dans \({]0, 1[}\), strictement croissante, et déterminer ses limites en \(\pm\infty\).
> 2. Calculer la solution.

{{% details title="Solution commentée" closed="true" %}}
**1.** \({f(y) = y(1 - y)}\) est polynomiale, donc \(\mathcal{C}^1\) sur \(\mathbb{R}\) : le théorème de Cauchy-Lipschitz s’applique, il existe une unique solution maximale \(y\), définie sur un intervalle ouvert \({]\alpha, \beta[}\) contenant \(0\).

*Encadrement.* Les fonctions constantes \(0\) et \(1\) sont solutions (équilibres). Par unicité, \(y\) ne prend jamais les valeurs \(0\) ni \(1\). Étant continue avec \({y(0) \in\, ]0, 1[}\), le théorème des valeurs intermédiaires impose \({0 < y(t) < 1}\) pour tout \(t\).

*Globalité.* \(y\) est bornée : d’après le théorème de sortie de tout compact, \({\alpha = -\infty}\) et \({\beta = +\infty}\).

*Monotonie.* \({y' = y(1 - y) > 0}\) puisque \({0 < y < 1}\) : \(y\) est strictement croissante.

*Limites.* Croissante et majorée, \(y\) a une limite \({\ell \in\, ]y_0, 1]}\) en \(+\infty\). Alors \({y'(t) \to \ell(1 - \ell)}\). Si cette limite était strictement positive, \(y\) tendrait vers \(+\infty\), ce qui est impossible ; donc \({\ell(1 - \ell) = 0}\), et \({\ell = 1}\). De même, la limite en \(-\infty\) est \(0\).

**2.** Comme \({y(1 - y) \neq 0}\), on sépare les variables :

\[
\dfrac{y'}{y(1 - y)} = \dfrac{y'}{y} + \dfrac{y'}{1 - y} = 1, \qquad \text{d’où} \qquad \ln\left(\dfrac{y}{1 - y}\right) = t + c.
\]

Avec \({c = \ln\left(\dfrac{y_0}{1 - y_0}\right)}\) : \({\dfrac{y}{1 - y} = \dfrac{y_0}{1 - y_0}e^t}\), soit

\[
y(t) = \dfrac{y_0e^t}{1 - y_0 + y_0e^t} = \dfrac{y_0}{y_0 + (1 - y_0)e^{-t}}.
\]

On vérifie \({y(0) = y_0}\), et l’on retrouve les limites \(1\) en \(+\infty\) et \(0\) en \(-\infty\).
{{% /details %}}
