---
title: 'Projection, théorème de Riesz, bases hilbertiennes'
weight: 1
cascade:
  type: docs
---

Les espaces de Hilbert sont les espaces de dimension infinie où la géométrie euclidienne (orthogonalité, projection, coordonnées dans une base orthonormée) continue de fonctionner.

## Définition

> [!TIP] **Définition**
>
> Un **espace préhilbertien** est un espace vectoriel \(H\) (réel ou complexe) muni d’un produit scalaire \(\langle\cdot, \cdot\rangle\) : dans le cas complexe, une forme **hermitienne** définie positive, linéaire à droite, antilinéaire à gauche, avec \({\langle y, x\rangle = \overline{\langle x, y\rangle}}\). Un **espace de Hilbert** est un espace préhilbertien **complet** pour la norme \({\|x\| = \sqrt{\langle x, x\rangle}}\).

> [!TIP] **Exemples**
>
> - Tout espace euclidien ou hermitien de dimension finie.
> - \(\ell^2\), avec \({\langle u, v\rangle = \displaystyle\sum_n \overline{u_n}v_n}\).
> - \(L^2(\mu)\), avec \({\langle f, g\rangle = \displaystyle\int \overline{f}g\,\mathrm{d}\mu}\) (complet par le théorème de Riesz-Fischer).
>
> En revanche, \(\mathcal{C}([0, 1])\) muni de \({\langle f, g\rangle = \displaystyle\int_0^1 fg}\) est préhilbertien **non complet**.

> [!TIP] **Propriétés**
>
> - **Cauchy-Schwarz** : \({|\langle x, y\rangle| \leq \|x\|\|y\|}\) ; le produit scalaire est donc continu.
> - **Identité du parallélogramme** : \({\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2}\). Elle caractérise les normes issues d’un produit scalaire.
> - **Pythagore** : si \({x \perp y}\), \({\|x + y\|^2 = \|x\|^2 + \|y\|^2}\).
> - L’orthogonal \(A^\perp\) d’une partie \(A\) est un sous-espace **fermé**, et \({A^\perp = \overline{\operatorname{Vect}(A)}^\perp}\).

## Projection sur un convexe fermé

> [!TIP] **Théorème de projection**
>
> Soit \(C\) un **convexe fermé non vide** d’un espace de Hilbert \(H\). Pour tout \({x \in H}\), il existe un **unique** point \({p_C(x) \in C}\) tel que
>
> \[ \|x - p_C(x)\| = d(x, C) = \inf_{y \in C} \|x - y\|. \]
>
> Il est caractérisé par : \({p_C(x) \in C}\) et, pour tout \({y \in C}\), \({\mathrm{Re}\,\langle x - p_C(x), y - p_C(x)\rangle \leq 0}\). L’application \(p_C\) est \(1\)-lipschitzienne.

{{% details title="Démonstration" closed="true" %}}
Soit \({d = d(x, C)}\) et \((y_n)\) une suite de \(C\) telle que \({\|x - y_n\| \to d}\). L’identité du parallélogramme appliquée à \({x - y_n}\) et \({x - y_m}\) donne

\[
\|y_n - y_m\|^2 = 2\|x - y_n\|^2 + 2\|x - y_m\|^2 - 4\left\|x - \dfrac{y_n + y_m}{2}\right\|^2 \leq 2\|x - y_n\|^2 + 2\|x - y_m\|^2 - 4d^2,
\]

car \({\dfrac{y_n + y_m}{2} \in C}\) par convexité. Le majorant tend vers \(0\) : la suite \((y_n)\) est de Cauchy. \(H\) étant complet et \(C\) fermé, elle converge vers un point \({p \in C}\) avec \({\|x - p\| = d}\). La même inégalité, appliquée à deux points réalisant la distance, donne l’unicité.
{{% /details %}}

La complétude et la convexité sont toutes deux utilisées. Ce théorème est faux dans un espace de Banach général.

> [!TIP] **Théorème - Projection orthogonale sur un sous-espace fermé**
>
> Soit \(F\) un sous-espace vectoriel **fermé** de \(H\). Alors :
> - \(p_F(x)\) est l’unique élément de \(F\) tel que \({x - p_F(x) \in F^\perp}\) ;
> - \(p_F\) est linéaire continue, de norme \(1\) (si \({F \neq \{0\}}\)), et \({\|x\|^2 = \|p_F(x)\|^2 + \|x - p_F(x)\|^2}\) ;
> - \({H = F \oplus F^\perp}\) et \({(F^\perp)^\perp = F}\).
>
> Pour un sous-espace quelconque : \({(F^\perp)^\perp = \overline{F}}\).

> [!TIP] **Corollaire - Critère de densité**
>
> Un sous-espace \(F\) de \(H\) est dense si et seulement si \({F^\perp = \{0\}}\). Une famille est **totale** (son espace engendré est dense) si et seulement si le seul vecteur orthogonal à tous ses éléments est le vecteur nul.

## Théorème de représentation de Riesz

> [!TIP] **Théorème de Riesz**
>
> Soit \(H\) un espace de Hilbert. Pour toute forme linéaire **continue** \(\varphi\) sur \(H\), il existe un unique \({a \in H}\) tel que
>
> \[ \forall x \in H, \quad \varphi(x) = \langle a, x\rangle. \]
>
> De plus, \({\|\varphi\| = \|a\|}\). Le dual topologique de \(H\) s’identifie donc à \(H\).

{{% details title="Démonstration" closed="true" %}}
Si \({\varphi = 0}\), \({a = 0}\). Sinon, \({F = \ker\varphi}\) est un sous-espace fermé (car \(\varphi\) est continue) distinct de \(H\), donc \({F^\perp \neq \{0\}}\). Soit \({b \in F^\perp}\) avec \({\varphi(b) = 1}\). Pour tout \(x\), \({x - \varphi(x)b \in F}\), donc \({\langle b, x - \varphi(x)b\rangle = 0}\), soit \({\langle b, x\rangle = \varphi(x)\|b\|^2}\). Le vecteur \({a = \dfrac{b}{\|b\|^2}}\) convient. L’unicité et l’égalité des normes viennent de l’inégalité de Cauchy-Schwarz.
{{% /details %}}

## Bases hilbertiennes

> [!TIP] **Définition**
>
> Une famille \((e_n)_{n \in \mathbb{N}}\) de \(H\) est une **base hilbertienne** si elle est **orthonormée** et **totale**. Un espace de Hilbert admet une base hilbertienne dénombrable si et seulement s’il est **séparable** (il contient une partie dénombrable dense).

> [!IMPORTANT] **Remarque**
>
> En dimension infinie, une base hilbertienne n’est **pas** une base au sens algébrique : les vecteurs de \(H\) ne sont pas des combinaisons linéaires finies des \(e_n\), mais des sommes de séries.

> [!TIP] **Théorème**
>
> Soit \((e_n)\) une famille orthonormée de \(H\).
> - **Inégalité de Bessel** : pour tout \(x\), \({\displaystyle\sum_{n} |\langle e_n, x\rangle|^2 \leq \|x\|^2}\).
> - La série \({\sum c_ne_n}\) converge dans \(H\) si et seulement si \({\sum |c_n|^2 < +\infty}\).
> - La famille est une base hilbertienne si et seulement si l’une des propriétés équivalentes suivantes est vraie pour tout \({x \in H}\) :
>
> \[ x = \sum_{n=0}^{+\infty} \langle e_n, x\rangle e_n \qquad ; \qquad \|x\|^2 = \sum_{n=0}^{+\infty} |\langle e_n, x\rangle|^2 \quad \text{(égalité de Parseval)}. \]
>
> L’application \({x \mapsto (\langle e_n, x\rangle)_n}\) est alors une isométrie de \(H\) sur \(\ell^2\) : tout espace de Hilbert séparable de dimension infinie est isométrique à \(\ell^2\).

{{% details title="Démonstration" closed="true" %}}
Bessel : la projection orthogonale de \(x\) sur \({\operatorname{Vect}(e_0, \dots, e_N)}\) est \({\displaystyle\sum_{n \leq N} \langle e_n, x\rangle e_n}\), de norme au carré \({\displaystyle\sum_{n \leq N} |\langle e_n, x\rangle|^2 \leq \|x\|^2}\).

Convergence : par Pythagore, \({\left\|\displaystyle\sum_{n=p}^{q} c_ne_n\right\|^2 = \sum_{n=p}^{q} |c_n|^2}\) ; la suite des sommes partielles est de Cauchy si et seulement si \({\sum |c_n|^2}\) converge, et \(H\) est complet.

Si la famille est totale, \({y = x - \sum \langle e_n, x\rangle e_n}\) est orthogonal à tous les \(e_n\), donc nul.
{{% /details %}}

> [!TIP] **Exemples**
>
> - Dans \(\ell^2\) : la base canonique \((e_n)\), avec \({e_n = (0, \dots, 0, 1, 0, \dots)}\).
> - Dans \({L^2(]-\pi, \pi[, \dfrac{\mathrm{d}x}{2\pi})}\) : la famille \({(e^{inx})_{n \in \mathbb{Z}}}\). Les coordonnées de \(f\) sont ses **coefficients de Fourier** \(c_n(f)\), la série de Fourier de \(f\) converge vers \(f\) **en norme \(L^2\)**, et l’égalité de Parseval s’écrit \({\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} |f|^2 = \sum_{n \in \mathbb{Z}} |c_n(f)|^2}\).
> - Dans \(L^2(]-1, 1[)\) : les polynômes de Legendre normalisés, obtenus en orthonormalisant \({(1, x, x^2, \dots)}\).

> [!NOTE] **Méthode - Calculer une distance dans un Hilbert**
>
> La distance de \(x\) à un sous-espace fermé \(F\) est \({\|x - p_F(x)\|}\). Si \({(e_1, \dots, e_n)}\) est une base **orthonormée** de \(F\) :
>
> \[ p_F(x) = \sum_{k=1}^{n} \langle e_k, x\rangle e_k, \qquad d(x, F)^2 = \|x\|^2 - \sum_{k=1}^{n} |\langle e_k, x\rangle|^2. \]
>
> Si \({F = \ker\varphi}\) est un hyperplan fermé avec \({\varphi = \langle a, \cdot\rangle}\) : \({d(x, F) = \dfrac{|\langle a, x\rangle|}{\|a\|}}\).

> [!NOTE] **Exercice résolu - Distance à un hyperplan de \(L^2\)**
>
> Dans \({H = L^2(]0, 1[)}\) réel, soit \({F = \left\{f \in H,\ \displaystyle\int_0^1 f(t)\,\mathrm{d}t = 0\right\}}\).
>
> 1. Montrer que \(F\) est un sous-espace fermé et déterminer \(F^\perp\).
> 2. Calculer la projection orthogonale sur \(F\) de \({g : t \mapsto e^t}\) et la distance \(d(g, F)\).

{{% details title="Solution commentée" closed="true" %}}
**1.** La forme linéaire \({\varphi(f) = \displaystyle\int_0^1 f = \langle \mathbf{1}, f\rangle}\), où \(\mathbf{1}\) est la fonction constante égale à \(1\), est continue par l’inégalité de Cauchy-Schwarz : \({|\varphi(f)| \leq \|\mathbf{1}\|_2\|f\|_2 = \|f\|_2}\). Donc \({F = \ker\varphi}\) est un sous-espace fermé.

\({F = \{\mathbf{1}\}^\perp = \operatorname{Vect}(\mathbf{1})^\perp}\). Comme \(\operatorname{Vect}(\mathbf{1})\) est de dimension finie, donc fermé : \({F^\perp = \left(\operatorname{Vect}(\mathbf{1})^\perp\right)^\perp = \operatorname{Vect}(\mathbf{1})}\), la droite des fonctions constantes.

**2.** On décompose \({g = p_F(g) + c\mathbf{1}}\), où \(c\mathbf{1}\) est la projection de \(g\) sur \(F^\perp\). Comme \({\|\mathbf{1}\|_2 = 1}\) :

\[
c = \langle \mathbf{1}, g\rangle = \int_0^1 e^t\,\mathrm{d}t = e - 1.
\]

Donc \({p_F(g)(t) = e^t - (e - 1)}\) : on retire à \(g\) sa valeur moyenne. Et

\[
d(g, F) = \|g - p_F(g)\|_2 = \|(e - 1)\mathbf{1}\|_2 = e - 1.
\]

Vérification : \({\displaystyle\int_0^1 \big(e^t - (e - 1)\big)\,\mathrm{d}t = (e - 1) - (e - 1) = 0}\), donc \({p_F(g) \in F}\).
{{% /details %}}
