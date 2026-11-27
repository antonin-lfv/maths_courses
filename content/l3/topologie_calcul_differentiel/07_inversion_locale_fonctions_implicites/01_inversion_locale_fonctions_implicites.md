---
title: 'Théorèmes d’inversion locale et des fonctions implicites'
weight: 1
cascade:
  type: docs
---

Ces deux théorèmes disent qu’une application \(\mathcal{C}^1\) se comporte localement comme sa différentielle : si l’approximation linéaire est inversible, l’application l’est aussi, au voisinage du point.

## Difféomorphismes

> [!TIP] **Définition**
>
> Soient \(U\) et \(V\) deux ouverts d’espaces de Banach. Une application \({f : U \to V}\) est un **\(\mathcal{C}^1\)-difféomorphisme** si elle est bijective, de classe \(\mathcal{C}^1\), et si \(f^{-1}\) est de classe \(\mathcal{C}^1\).

> [!TIP] **Propriété**
>
> Si \(f\) est un \(\mathcal{C}^1\)-difféomorphisme, alors pour tout \({a \in U}\), \(\mathrm{d}f(a)\) est un isomorphisme et
>
> \[ \mathrm{d}(f^{-1})\big(f(a)\big) = \big(\mathrm{d}f(a)\big)^{-1}. \]
>
> En dimension finie, cela impose \({\dim E = \dim F}\) et un **jacobien** \({\det J_f(a)}\) non nul.

{{% details title="Démonstration" closed="true" %}}
On différentie \({f^{-1} \circ f = \mathrm{id}_U}\) et \({f \circ f^{-1} = \mathrm{id}_V}\) par la règle de la chaîne.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Une bijection \(\mathcal{C}^1\) n’est pas forcément un difféomorphisme : \({x \mapsto x^3}\) est une bijection \(\mathcal{C}^1\) de \(\mathbb{R}\) sur \(\mathbb{R}\), mais sa réciproque n’est pas dérivable en \(0\) (là où la dérivée s’annule).

## Inversion locale

> [!TIP] **Théorème d’inversion locale**
>
> Soit \({f : U \to F}\) de classe \(\mathcal{C}^1\) sur un ouvert \(U\) d’un espace de Banach \(E\), et \({a \in U}\). Si \(\mathrm{d}f(a)\) est un **isomorphisme** de \(E\) sur \(F\) (bijective, d’inverse continu), alors il existe un voisinage ouvert \(V\) de \(a\) et un voisinage ouvert \(W\) de \(f(a)\) tels que \(f\) soit un \(\mathcal{C}^1\)-difféomorphisme de \(V\) sur \(W\).
>
> En dimension finie, l’hypothèse s’écrit : \({\det J_f(a) \neq 0}\).

{{% details title="Démonstration" closed="true" %}}
Idée. En composant avec des translations et avec \({\mathrm{d}f(a)^{-1}}\), on se ramène à \({a = 0}\), \({f(0) = 0}\), \({\mathrm{d}f(0) = \mathrm{id}}\). On pose \({g(x) = x - f(x)}\) : \({\mathrm{d}g(0) = 0}\), donc par continuité de \(\mathrm{d}g\), il existe \({r > 0}\) tel que \({\|\mathrm{d}g(x)\| \leq \dfrac{1}{2}}\) sur \(\overline{B}(0, r)\). Par l’inégalité des accroissements finis, \(g\) y est \(\dfrac{1}{2}\)-lipschitzienne.

Pour \(y\) fixé avec \({\|y\| \leq \dfrac{r}{2}}\), résoudre \({f(x) = y}\) revient à chercher un point fixe de \({\Phi_y : x \mapsto y + g(x)}\). Cette application envoie \(\overline{B}(0, r)\) dans elle-même et y est \(\dfrac{1}{2}\)-contractante : par le **théorème du point fixe de Banach-Picard**, \({f(x) = y}\) a une unique solution dans \(\overline{B}(0, r)\). On montre ensuite que la réciproque ainsi construite est lipschitzienne, puis différentiable, puis \(\mathcal{C}^1\).
{{% /details %}}

> [!TIP] **Théorème d’inversion globale**
>
> Soit \({f : U \to F}\) de classe \(\mathcal{C}^1\). Si \(f\) est **injective** et si \(\mathrm{d}f(x)\) est un isomorphisme pour **tout** \({x \in U}\), alors \(f(U)\) est un ouvert et \(f\) est un \(\mathcal{C}^1\)-difféomorphisme de \(U\) sur \(f(U)\).

> [!IMPORTANT] **Remarque**
>
> L’inversibilité locale en tout point n’entraîne pas l’injectivité globale. L’application \({f(x, y) = (e^x\cos y, e^x\sin y)}\) a pour jacobien \({e^{2x} \neq 0}\) partout sur \(\mathbb{R}^2\), mais \({f(x, y + 2\pi) = f(x, y)}\).

> [!NOTE] **Méthode - Montrer qu’une application est un difféomorphisme**
>
> 1. Vérifier que \(f\) est de classe \(\mathcal{C}^1\).
> 2. Calculer le jacobien et vérifier qu’il ne s’annule pas sur \(U\).
> 3. Montrer que \(f\) est injective (ou bijective de \(U\) sur \(V\)) en résolvant \({f(x) = y}\).
> 4. Conclure par le théorème d’inversion globale. Il n’est pas nécessaire de prouver directement que \(f^{-1}\) est \(\mathcal{C}^1\).

{{% details title="Exemple" closed="true" %}}
**Coordonnées polaires.** \({\Phi(r, \theta) = (r\cos\theta, r\sin\theta)}\) est \(\mathcal{C}^1\), de jacobien \({r > 0}\) sur \({U = \,]0, +\infty[ \times ]-\pi, \pi[}\), et injective sur \(U\). C’est donc un \(\mathcal{C}^1\)-difféomorphisme de \(U\) sur \({\mathbb{R}^2 \setminus (]-\infty, 0] \times \{0\})}\), le plan privé d’une demi-droite.
{{% /details %}}

## Fonctions implicites

Une équation \({f(x, y) = 0}\) définit-elle \(y\) comme fonction de \(x\) ? Le cercle \({x^2 + y^2 - 1 = 0}\) montre que ce n’est vrai que localement, et pas aux points \({(\pm 1, 0)}\) où la tangente est verticale.

> [!TIP] **Théorème des fonctions implicites (deux variables)**
>
> Soit \(f\) de classe \(\mathcal{C}^1\) sur un ouvert \(U\) de \(\mathbb{R}^2\), et \({(a, b) \in U}\) tel que
>
> \[ f(a, b) = 0 \qquad \text{et} \qquad \dfrac{\partial f}{\partial y}(a, b) \neq 0. \]
>
> Alors il existe un intervalle ouvert \(I\) contenant \(a\), un intervalle ouvert \(J\) contenant \(b\) et une unique fonction \({\varphi : I \to J}\) de classe \(\mathcal{C}^1\) tels que
>
> \[ \forall (x, y) \in I \times J, \quad f(x, y) = 0 \iff y = \varphi(x). \]
>
> De plus, \({\varphi(a) = b}\) et, pour tout \({x \in I}\) :
>
> \[ \varphi'(x) = -\dfrac{\dfrac{\partial f}{\partial x}(x, \varphi(x))}{\dfrac{\partial f}{\partial y}(x, \varphi(x))}. \]

{{% details title="Démonstration" closed="true" %}}
On applique le théorème d’inversion locale à \({F(x, y) = (x, f(x, y))}\), dont le jacobien en \((a, b)\) est \({\dfrac{\partial f}{\partial y}(a, b) \neq 0}\). Son inverse local est de la forme \({(x, z) \mapsto (x, \psi(x, z))}\), et \({\varphi(x) = \psi(x, 0)}\) convient.

La formule de \(\varphi'\) s’obtient en dérivant l’identité \({f(x, \varphi(x)) = 0}\) par la règle de la chaîne : \({\dfrac{\partial f}{\partial x} + \dfrac{\partial f}{\partial y}\varphi'(x) = 0}\).
{{% /details %}}

> [!TIP] **Théorème - Cas général**
>
> Soit \({f : U \subset \mathbb{R}^n \times \mathbb{R}^p \to \mathbb{R}^p}\) de classe \(\mathcal{C}^1\), \({f(a, b) = 0}\), et supposons que la différentielle partielle \({\mathrm{d}_yf(a, b)}\) (matrice \({p \times p}\) des dérivées par rapport aux \(p\) dernières variables) est **inversible**. Alors, au voisinage de \((a, b)\), l’équation \({f(x, y) = 0}\) équivaut à \({y = \varphi(x)}\) avec \(\varphi\) de classe \(\mathcal{C}^1\), et
>
> \[ \mathrm{d}\varphi(x) = -\big(\mathrm{d}_yf(x, \varphi(x))\big)^{-1} \circ \mathrm{d}_xf(x, \varphi(x)). \]
>
> Si \(f\) est de classe \(\mathcal{C}^k\), \(\varphi\) l’est aussi.

> [!TIP] **Applications géométriques**
>
> - **Courbe \({f(x, y) = 0}\)** : en un point \((a, b)\) où \({\nabla f(a, b) \neq 0}\) (point **régulier**), la courbe est localement un graphe, et sa tangente a pour équation
>
> \[ \dfrac{\partial f}{\partial x}(a, b)(x - a) + \dfrac{\partial f}{\partial y}(a, b)(y - b) = 0. \]
>
> - **Surface \({f(x, y, z) = 0}\)** : en un point régulier, le plan tangent est orthogonal au gradient.
> - **Extremums liés** : si \(f\) et \(g\) sont \(\mathcal{C}^1\) et si la restriction de \(f\) à \({\{g = 0\}}\) admet un extremum local en un point \(a\) où \({\nabla g(a) \neq 0}\), alors il existe un réel \(\lambda\) (**multiplicateur de Lagrange**) tel que \({\nabla f(a) = \lambda\nabla g(a)}\).

> [!NOTE] **Exercice résolu - Une fonction définie implicitement**
>
> On considère l’équation \({(E) : x^3 + y^3 - 3xy - 1 = 0}\).
>
> 1. Montrer que \((E)\) définit, au voisinage du point \((0, 1)\), \(y\) comme fonction \(\varphi\) de classe \(\mathcal{C}^\infty\) de \(x\).
> 2. Calculer \(\varphi'(0)\) et \(\varphi''(0)\), et en déduire le développement limité de \(\varphi\) à l’ordre \(2\) en \(0\).

{{% details title="Solution commentée" closed="true" %}}
On pose \({f(x, y) = x^3 + y^3 - 3xy - 1}\), polynomiale donc de classe \(\mathcal{C}^\infty\) sur \(\mathbb{R}^2\).

**1.** \({f(0, 1) = 0 + 1 - 0 - 1 = 0}\), et \({\dfrac{\partial f}{\partial y}(x, y) = 3y^2 - 3x}\), donc \({\dfrac{\partial f}{\partial y}(0, 1) = 3 \neq 0}\). Le théorème des fonctions implicites s’applique : il existe des intervalles ouverts \(I\) contenant \(0\) et \(J\) contenant \(1\) et une fonction \({\varphi : I \to J}\) de classe \(\mathcal{C}^\infty\) telle que, sur \({I \times J}\), \({f(x, y) = 0 \iff y = \varphi(x)}\), avec \({\varphi(0) = 1}\).

**2.** On dérive l’identité \({x^3 + \varphi(x)^3 - 3x\varphi(x) - 1 = 0}\) :

\[
3x^2 + 3\varphi(x)^2\varphi'(x) - 3\varphi(x) - 3x\varphi'(x) = 0.
\]

En \({x = 0}\), avec \({\varphi(0) = 1}\) : \({3\varphi'(0) - 3 = 0}\), donc \({\varphi'(0) = 1}\).

On dérive une seconde fois :

\[
6x + 6\varphi\varphi'^2 + 3\varphi^2\varphi'' - 3\varphi' - 3\varphi' - 3x\varphi'' = 0.
\]

En \({x = 0}\) : \({6 \times 1 \times 1 + 3\varphi''(0) - 6 = 0}\), donc \({\varphi''(0) = 0}\).

D’après la formule de Taylor-Young :

\[
\varphi(x) = 1 + x + o(x^2).
\]

**Vérification.** En reportant \({y = 1 + x}\) dans \(f\) : \({x^3 + (1 + x)^3 - 3x(1 + x) - 1 = x^3 + 1 + 3x + 3x^2 + x^3 - 3x - 3x^2 - 1 = 2x^3}\), qui est bien un \(o(x^2)\).
{{% /details %}}
