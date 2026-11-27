---
title: 'Dérivées partielles, différentielle, extremums'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(U\) est un **ouvert** de \(\mathbb{R}^n\) et \({f : U \to \mathbb{R}}\). On écrit les énoncés pour \(n\) variables et les exemples pour deux.

## Dérivées partielles

> [!TIP] **Définition**
>
> Soit \({a \in U}\) et \(v\) un vecteur de \(\mathbb{R}^n\). La **dérivée de \(f\) en \(a\) suivant \(v\)** est, si elle existe,
>
> \[ D_vf(a) = \lim_{t \to 0} \dfrac{f(a + tv) - f(a)}{t}. \]
>
> La \(i\)-ème **dérivée partielle** de \(f\) en \(a\) est la dérivée suivant le \(i\)-ème vecteur \(e_i\) de la base canonique :
>
> \[ \dfrac{\partial f}{\partial x_i}(a) = \lim_{t \to 0} \dfrac{f(a_1, \dots, a_i + t, \dots, a_n) - f(a)}{t}. \]
>
> On la calcule en dérivant par rapport à \(x_i\), les autres variables étant traitées comme des constantes. Le **gradient** de \(f\) en \(a\) est le vecteur \({\nabla f(a) = \left(\dfrac{\partial f}{\partial x_1}(a), \dots, \dfrac{\partial f}{\partial x_n}(a)\right)}\).

> [!IMPORTANT] **Remarque**
>
> L’existence des dérivées partielles en \(a\) n’entraîne même pas la continuité en \(a\). La fonction \({f(x, y) = \dfrac{xy}{x^2 + y^2}}\), avec \({f(0, 0) = 0}\), a deux dérivées partielles nulles en \((0, 0)\) (car \({f(x, 0) = f(0, y) = 0}\)) sans être continue en ce point.

## Fonctions différentiables

> [!TIP] **Définition**
>
> \(f\) est **différentiable en \(a\)** s’il existe une forme linéaire \({L : \mathbb{R}^n \to \mathbb{R}}\) telle que
>
> \[ f(a + h) = f(a) + L(h) + o(\|h\|) \quad \text{quand } h \to 0. \]
>
> \(L\) est alors unique : c’est la **différentielle** de \(f\) en \(a\), notée \(\mathrm{d}f(a)\). Dans ce cas, \(f\) est continue en \(a\), admet des dérivées suivant tout vecteur, et
>
> \[ \mathrm{d}f(a)(h) = \sum_{i=1}^{n} \dfrac{\partial f}{\partial x_i}(a)h_i = \langle\nabla f(a), h\rangle = D_hf(a). \]

> [!TIP] **Définition et théorème - Classe \(\mathcal{C}^1\)**
>
> \(f\) est de **classe \(\mathcal{C}^1\)** sur \(U\) si ses dérivées partielles existent et sont **continues** sur \(U\). Toute fonction de classe \(\mathcal{C}^1\) est différentiable en tout point de \(U\).
>
> Sommes, produits, quotients et composées de fonctions de classe \(\mathcal{C}^1\) sont de classe \(\mathcal{C}^1\).

En pratique, on justifie presque toujours la différentiabilité par le caractère \(\mathcal{C}^1\).

> [!TIP] **Interprétations géométriques**
>
> - **Plan tangent** : pour \(f\) de classe \(\mathcal{C}^1\) sur un ouvert de \(\mathbb{R}^2\), le plan tangent à la surface \({z = f(x, y)}\) au point d’abscisse \((a, b)\) a pour équation
>
> \[ z = f(a, b) + \dfrac{\partial f}{\partial x}(a, b)(x - a) + \dfrac{\partial f}{\partial y}(a, b)(y - b). \]
>
> - **Gradient** : d’après l’inégalité de Cauchy-Schwarz, \({D_vf(a) = \langle\nabla f(a), v\rangle}\) est maximal, à \(\|v\|\) fixée, quand \(v\) est dans la direction de \(\nabla f(a)\). Le gradient indique la direction de plus forte croissance ; il est orthogonal aux lignes de niveau \({f = \text{constante}}\).

## Règle de la chaîne

> [!TIP] **Théorème**
>
> - **Le long d’un arc** : si \(f\) est de classe \(\mathcal{C}^1\) sur \(U\) et \({\gamma = (x_1, \dots, x_n) : I \to U}\) de classe \(\mathcal{C}^1\), alors \({f \circ \gamma}\) est de classe \(\mathcal{C}^1\) et
>
> \[ (f \circ \gamma)'(t) = \sum_{i=1}^{n} \dfrac{\partial f}{\partial x_i}(\gamma(t))\,x_i'(t) = \langle\nabla f(\gamma(t)), \gamma'(t)\rangle. \]
>
> - **Changement de variables** : si \({g(u, v) = f(x(u, v), y(u, v))}\) avec \(x\), \(y\), \(f\) de classe \(\mathcal{C}^1\), alors
>
> \[ \dfrac{\partial g}{\partial u} = \dfrac{\partial f}{\partial x}\dfrac{\partial x}{\partial u} + \dfrac{\partial f}{\partial y}\dfrac{\partial y}{\partial u}, \qquad \dfrac{\partial g}{\partial v} = \dfrac{\partial f}{\partial x}\dfrac{\partial x}{\partial v} + \dfrac{\partial f}{\partial y}\dfrac{\partial y}{\partial v}, \]
>
>   les dérivées partielles de \(f\) étant prises au point \({(x(u, v), y(u, v))}\).

{{% details title="Exemple" closed="true" %}}
**Coordonnées polaires.** Soit \({g(r, \theta) = f(r\cos\theta, r\sin\theta)}\). Alors

\[
\dfrac{\partial g}{\partial r} = \cos\theta\dfrac{\partial f}{\partial x} + \sin\theta\dfrac{\partial f}{\partial y}, \qquad \dfrac{\partial g}{\partial \theta} = -r\sin\theta\dfrac{\partial f}{\partial x} + r\cos\theta\dfrac{\partial f}{\partial y}.
\]
{{% /details %}}

> [!TIP] **Propriété - Matrice jacobienne**
>
> Pour \({F = (F_1, \dots, F_p) : U \to \mathbb{R}^p}\) de classe \(\mathcal{C}^1\), la **matrice jacobienne** de \(F\) en \(a\) est \({J_F(a) = \left(\dfrac{\partial F_i}{\partial x_j}(a)\right) \in \mathcal{M}_{p,n}(\mathbb{R})}\). La règle de la chaîne s’écrit \({J_{G \circ F}(a) = J_G(F(a)) \times J_F(a)}\).

## Dérivées d’ordre 2

> [!TIP] **Définition et théorème de Schwarz**
>
> \(f\) est de **classe \(\mathcal{C}^2\)** si ses dérivées partielles sont de classe \(\mathcal{C}^1\). On note \({\dfrac{\partial^2 f}{\partial x_i\partial x_j} = \dfrac{\partial}{\partial x_i}\left(\dfrac{\partial f}{\partial x_j}\right)}\).
>
> **Théorème de Schwarz.** Si \(f\) est de classe \(\mathcal{C}^2\) sur \(U\), alors pour tous \(i\), \(j\) :
>
> \[ \dfrac{\partial^2 f}{\partial x_i\partial x_j} = \dfrac{\partial^2 f}{\partial x_j\partial x_i}. \]
>
> La **matrice hessienne** \({H_f(a) = \left(\dfrac{\partial^2 f}{\partial x_i\partial x_j}(a)\right)}\) est donc symétrique.

> [!TIP] **Théorème - Formule de Taylor-Young à l’ordre 2**
>
> Si \(f\) est de classe \(\mathcal{C}^2\) sur \(U\), alors quand \({h \to 0}\) :
>
> \[ f(a + h) = f(a) + \langle\nabla f(a), h\rangle + \dfrac{1}{2}h^TH_f(a)h + o(\|h\|^2). \]

## Extremums

> [!TIP] **Théorème - Condition nécessaire**
>
> Si \(f\), de classe \(\mathcal{C}^1\) sur l’**ouvert** \(U\), admet un extremum local en \({a \in U}\), alors \(a\) est un **point critique** : \({\nabla f(a) = 0}\).

{{% details title="Démonstration" closed="true" %}}
Pour chaque \(i\), la fonction d’une variable \({t \mapsto f(a + te_i)}\) est définie au voisinage de \(0\) (car \(U\) est ouvert) et admet un extremum local en \(0\) : sa dérivée \({\dfrac{\partial f}{\partial x_i}(a)}\) y est nulle.
{{% /details %}}

> [!TIP] **Théorème - Condition suffisante à l’ordre 2**
>
> Soit \(f\) de classe \(\mathcal{C}^2\) et \(a\) un point critique. On considère la forme quadratique \({q(h) = h^TH_f(a)h}\).
> - Si \(q\) est **définie positive** (valeurs propres de \(H_f(a)\) strictement positives), \(f\) a un **minimum local strict** en \(a\).
> - Si \(q\) est **définie négative**, \(f\) a un **maximum local strict** en \(a\).
> - Si \(q\) prend des valeurs strictement positives et strictement négatives, \(a\) est un **point col** (ou point selle) : pas d’extremum.
> - Sinon, on ne peut pas conclure avec l’ordre 2.
>
> **Pour deux variables**, avec les notations de Monge \({r = \dfrac{\partial^2 f}{\partial x^2}(a)}\), \({s = \dfrac{\partial^2 f}{\partial x\partial y}(a)}\), \({t = \dfrac{\partial^2 f}{\partial y^2}(a)}\) :
> - \({rt - s^2 > 0}\) et \({r > 0}\) : minimum local ;
> - \({rt - s^2 > 0}\) et \({r < 0}\) : maximum local ;
> - \({rt - s^2 < 0}\) : point col ;
> - \({rt - s^2 = 0}\) : cas douteux.

> [!NOTE] **Méthode - Extremums sur un compact**
>
> Si \(f\) est continue sur un compact \(K\), elle y atteint son maximum et son minimum. Ils sont atteints :
> - soit en un point **intérieur** à \(K\), qui est alors un point critique ;
> - soit sur le **bord** de \(K\), que l’on étudie en le paramétrant (on se ramène à une fonction d’une variable).
>
> On compare les valeurs de \(f\) en tous ces points candidats.

> [!NOTE] **Exercice résolu - Points critiques et extremums**
>
> Soit \({f(x, y) = x^3 + y^3 - 3xy}\) sur \(\mathbb{R}^2\). Déterminer les points critiques de \(f\) et leur nature. \(f\) admet-elle un extremum global ?

{{% details title="Solution commentée" closed="true" %}}
\(f\) est polynomiale, donc de classe \(\mathcal{C}^2\) sur l’ouvert \(\mathbb{R}^2\).

**Points critiques.**

\[
\dfrac{\partial f}{\partial x} = 3x^2 - 3y = 0 \qquad \text{et} \qquad \dfrac{\partial f}{\partial y} = 3y^2 - 3x = 0.
\]

La première donne \({y = x^2}\) ; en reportant, \({x^4 = x}\), soit \({x(x^3 - 1) = 0}\), donc \({x = 0}\) ou \({x = 1}\). Les points critiques sont \({(0, 0)}\) et \({(1, 1)}\).

**Dérivées secondes.** \({\dfrac{\partial^2 f}{\partial x^2} = 6x}\), \({\dfrac{\partial^2 f}{\partial x\partial y} = -3}\), \({\dfrac{\partial^2 f}{\partial y^2} = 6y}\).

- En \((0, 0)\) : \({r = 0}\), \({s = -3}\), \({t = 0}\), donc \({rt - s^2 = -9 < 0}\). C’est un **point col**. On le voit directement : \({f(x, x) = 2x^3 - 3x^2 < 0}\) et \({f(x, -x) = 3x^2 > 0}\) pour \(x\) petit non nul, alors que \({f(0, 0) = 0}\).
- En \((1, 1)\) : \({r = 6}\), \({s = -3}\), \({t = 6}\), donc \({rt - s^2 = 27 > 0}\) et \({r > 0}\). C’est un **minimum local**, de valeur \({f(1, 1) = -1}\).

**Extremum global.** \({f(x, 0) = x^3}\) tend vers \(+\infty\) en \(+\infty\) et vers \(-\infty\) en \(-\infty\) : \(f\) n’est ni majorée ni minorée, elle n’a pas d’extremum global. Le minimum en \((1, 1)\) est seulement local.
{{% /details %}}
