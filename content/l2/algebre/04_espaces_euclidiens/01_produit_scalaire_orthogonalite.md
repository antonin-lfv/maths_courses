---
title: 'Produit scalaire et orthogonalité'
weight: 1
cascade:
  type: docs
---

## Produit scalaire

> [!TIP] **Définition**
>
> Un **produit scalaire** sur un \(\mathbb{R}\)-espace vectoriel \(E\) est une forme bilinéaire symétrique définie positive : une application \({(x, y) \mapsto \langle x, y\rangle}\) de \({E \times E}\) dans \(\mathbb{R}\) telle que
> - \({\langle x, y\rangle = \langle y, x\rangle}\) ;
> - \({\langle \lambda x + x', y\rangle = \lambda\langle x, y\rangle + \langle x', y\rangle}\) ;
> - \({\langle x, x\rangle \geq 0}\), et \({\langle x, x\rangle = 0 \iff x = 0}\).
>
> Un espace muni d’un produit scalaire est un espace **préhilbertien réel** ; s’il est de dimension finie, c’est un espace **euclidien**. La **norme euclidienne** associée est \({\|x\| = \sqrt{\langle x, x\rangle}}\).

> [!TIP] **Exemples de référence**
>
> - Sur \(\mathbb{R}^n\), le produit scalaire **canonique** : \({\langle x, y\rangle = \displaystyle\sum_{i=1}^{n} x_iy_i = X^TY}\).
> - Sur \(\mathcal{M}_n(\mathbb{R})\) : \({\langle A, B\rangle = \operatorname{tr}(A^TB) = \displaystyle\sum_{i, j} a_{ij}b_{ij}}\).
> - Sur \(\mathcal{C}([a, b], \mathbb{R})\) : \({\langle f, g\rangle = \displaystyle\int_a^b f(t)g(t)\,\mathrm{d}t}\).

{{% details title="Démonstration" closed="true" %}}
Pour le dernier exemple, la bilinéarité et la symétrie viennent de la linéarité de l’intégrale. La positivité : \({\displaystyle\int_a^b f^2 \geq 0}\). Le caractère défini : si \({\displaystyle\int_a^b f^2 = 0}\), alors \(f^2\) est une fonction continue, positive, d’intégrale nulle, donc nulle. C’est ici que la continuité est indispensable.
{{% /details %}}

> [!TIP] **Théorème - Inégalité de Cauchy-Schwarz**
>
> Pour tous \(x\), \(y\) dans \(E\) :
>
> \[ |\langle x, y\rangle| \leq \|x\|\,\|y\|, \]
>
> avec égalité si et seulement si \(x\) et \(y\) sont colinéaires.

{{% details title="Démonstration" closed="true" %}}
Si \({y = 0}\), c’est évident. Sinon, pour tout réel \(t\), \({\|x + ty\|^2 = \|x\|^2 + 2t\langle x, y\rangle + t^2\|y\|^2 \geq 0}\). Ce trinôme en \(t\) garde un signe constant : son discriminant \({4\langle x, y\rangle^2 - 4\|x\|^2\|y\|^2}\) est négatif ou nul. Il y a égalité si et seulement si le trinôme a une racine \(t_0\), c’est-à-dire \({x + t_0y = 0}\).
{{% /details %}}

> [!TIP] **Propriétés de la norme**
>
> - \({\|x\| = 0 \iff x = 0}\) ; \({\|\lambda x\| = |\lambda|\|x\|}\) ;
> - **inégalité triangulaire** : \({\|x + y\| \leq \|x\| + \|y\|}\) ;
> - \({\|x + y\|^2 = \|x\|^2 + 2\langle x, y\rangle + \|y\|^2}\) ;
> - **identité du parallélogramme** : \({\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2}\) ;
> - **identité de polarisation** : \({\langle x, y\rangle = \dfrac{1}{4}\left(\|x + y\|^2 - \|x - y\|^2\right)}\).

## Orthogonalité

> [!TIP] **Définition**
>
> - \(x\) et \(y\) sont **orthogonaux**, noté \({x \perp y}\), si \({\langle x, y\rangle = 0}\).
> - Une famille est **orthogonale** si ses vecteurs sont deux à deux orthogonaux, **orthonormée** si de plus ils sont tous de norme \(1\).
> - L’**orthogonal** d’une partie \(A\) est \({A^\perp = \{x \in E,\ \forall a \in A,\ \langle x, a\rangle = 0\}}\) ; c’est un sous-espace vectoriel.

> [!TIP] **Propriétés**
>
> - **Théorème de Pythagore** : \({x \perp y \iff \|x + y\|^2 = \|x\|^2 + \|y\|^2}\). Pour une famille orthogonale, \({\|x_1 + \dots + x_p\|^2 = \|x_1\|^2 + \dots + \|x_p\|^2}\).
> - Une famille orthogonale de vecteurs **non nuls** est libre. En particulier, une famille orthonormée de \(n\) vecteurs en dimension \(n\) est une base.
> - \({F \cap F^\perp = \{0\}}\) pour tout sous-espace \(F\), et pour vérifier \({x \in F^\perp}\) il suffit de tester l’orthogonalité avec une famille génératrice de \(F\).

> [!TIP] **Théorème - Calculs dans une base orthonormée**
>
> Soit \({(e_1, \dots, e_n)}\) une base orthonormée de \(E\). Pour tous \(x\), \(y\) de coordonnées \((x_i)\) et \((y_i)\) :
>
> \[ x_i = \langle x, e_i\rangle, \qquad \langle x, y\rangle = \sum_{i=1}^{n} x_iy_i, \qquad \|x\|^2 = \sum_{i=1}^{n} x_i^2. \]
>
> Dans une base orthonormée, tout produit scalaire se calcule comme le produit scalaire canonique.

## Procédé de Gram-Schmidt

> [!TIP] **Théorème - Orthonormalisation de Gram-Schmidt**
>
> Soit \({(v_1, \dots, v_p)}\) une famille libre de \(E\). Il existe une unique famille orthonormée \({(e_1, \dots, e_p)}\) telle que, pour tout \(k\) :
>
> \[ \operatorname{Vect}(e_1, \dots, e_k) = \operatorname{Vect}(v_1, \dots, v_k) \qquad \text{et} \qquad \langle e_k, v_k\rangle > 0. \]
>
> En particulier, tout espace euclidien admet une base orthonormée, et toute famille orthonormée se complète en une base orthonormée.

> [!NOTE] **Méthode - Algorithme de Gram-Schmidt**
>
> 1. \({e_1 = \dfrac{v_1}{\|v_1\|}}\).
> 2. Pour \({k \geq 2}\) : on retire à \(v_k\) ses composantes sur les vecteurs déjà construits,
>
> \[ u_k = v_k - \sum_{i=1}^{k-1} \langle v_k, e_i\rangle e_i, \]
>
>    puis on normalise : \({e_k = \dfrac{u_k}{\|u_k\|}}\).
>
> On peut retarder la normalisation pour éviter les racines carrées : avec une famille orthogonale \((u_i)\) non normée, \({u_k = v_k - \displaystyle\sum_{i < k} \dfrac{\langle v_k, u_i\rangle}{\|u_i\|^2}u_i}\).

{{% details title="Exemple" closed="true" %}}
Dans \(\mathbb{R}^3\) canonique, orthonormalisons \({v_1 = (1, 1, 0)}\), \({v_2 = (1, 0, 1)}\), \({v_3 = (0, 1, 1)}\).

- \({u_1 = v_1}\), \({\|u_1\|^2 = 2}\).
- \({u_2 = v_2 - \dfrac{\langle v_2, u_1\rangle}{2}u_1 = (1, 0, 1) - \dfrac{1}{2}(1, 1, 0) = \left(\dfrac{1}{2}, -\dfrac{1}{2}, 1\right)}\), \({\|u_2\|^2 = \dfrac{3}{2}}\).
- \({\langle v_3, u_1\rangle = 1}\) et \({\langle v_3, u_2\rangle = \dfrac{1}{2}}\), donc

\[
u_3 = (0, 1, 1) - \dfrac{1}{2}(1, 1, 0) - \dfrac{1}{3}\left(\dfrac{1}{2}, -\dfrac{1}{2}, 1\right) = \left(-\dfrac{2}{3}, \dfrac{2}{3}, \dfrac{2}{3}\right).
\]

En normalisant : \({e_1 = \dfrac{1}{\sqrt{2}}(1, 1, 0)}\), \({e_2 = \dfrac{1}{\sqrt{6}}(1, -1, 2)}\), \({e_3 = \dfrac{1}{\sqrt{3}}(-1, 1, 1)}\).

Vérification : \({\langle e_1, e_2\rangle \propto 1 - 1 = 0}\), \({\langle e_1, e_3\rangle \propto -1 + 1 = 0}\), \({\langle e_2, e_3\rangle \propto -1 - 1 + 2 = 0}\).
{{% /details %}}

## Projection orthogonale

> [!TIP] **Théorème - Supplémentaire orthogonal**
>
> Soit \(F\) un sous-espace de **dimension finie** d’un espace préhilbertien \(E\). Alors
>
> \[ E = F \oplus F^\perp. \]
>
> Si \(E\) est euclidien de dimension \(n\) : \({\dim F^\perp = n - \dim F}\) et \({(F^\perp)^\perp = F}\).

> [!TIP] **Définition et théorème - Projection orthogonale**
>
> La **projection orthogonale** sur \(F\) est la projection \(p_F\) sur \(F\) parallèlement à \(F^\perp\). Si \({(e_1, \dots, e_p)}\) est une base **orthonormée** de \(F\) :
>
> \[ p_F(x) = \sum_{i=1}^{p} \langle x, e_i\rangle e_i. \]
>
> Le vecteur \(p_F(x)\) est caractérisé par : \({p_F(x) \in F}\) et \({x - p_F(x) \in F^\perp}\).

> [!TIP] **Théorème - Distance à un sous-espace**
>
> Pour tout \({x \in E}\), \(p_F(x)\) est l’unique vecteur de \(F\) qui réalise la **distance** de \(x\) à \(F\) :
>
> \[ d(x, F) = \inf_{y \in F} \|x - y\| = \|x - p_F(x)\|, \qquad \|x\|^2 = \|p_F(x)\|^2 + d(x, F)^2. \]

{{% details title="Démonstration" closed="true" %}}
Pour \({y \in F}\), on écrit \({x - y = (x - p_F(x)) + (p_F(x) - y)}\), somme d’un vecteur de \(F^\perp\) et d’un vecteur de \(F\). Par le théorème de Pythagore :

\[
\|x - y\|^2 = \|x - p_F(x)\|^2 + \|p_F(x) - y\|^2 \geq \|x - p_F(x)\|^2,
\]

avec égalité si et seulement si \({y = p_F(x)}\).
{{% /details %}}

> [!TIP] **Propriété - Cas d’une droite et d’un hyperplan**
>
> Soit \(a\) un vecteur non nul.
> - Projection orthogonale sur la droite \({D = \operatorname{Vect}(a)}\) : \({p_D(x) = \dfrac{\langle x, a\rangle}{\|a\|^2}a}\).
> - Projection orthogonale sur l’hyperplan \({H = a^\perp}\) : \({p_H(x) = x - \dfrac{\langle x, a\rangle}{\|a\|^2}a}\), et \({d(x, H) = \dfrac{|\langle x, a\rangle|}{\|a\|}}\).

> [!TIP] **Inégalité de Bessel**
>
> Si \({(e_1, \dots, e_p)}\) est une famille orthonormée, alors pour tout \(x\) : \({\displaystyle\sum_{i=1}^{p} \langle x, e_i\rangle^2 \leq \|x\|^2}\).

> [!NOTE] **Exercice résolu - Un problème de minimisation**
>
> Déterminer \({m = \inf\limits_{(a, b) \in \mathbb{R}^2} \displaystyle\int_0^1 \left(t^2 - at - b\right)^2\,\mathrm{d}t}\).

{{% details title="Solution commentée" closed="true" %}}
On se place dans \({E = \mathcal{C}([0, 1], \mathbb{R})}\) muni de \({\langle f, g\rangle = \displaystyle\int_0^1 fg}\). Avec \({f : t \mapsto t^2}\) et \({F = \operatorname{Vect}(1, t)}\), on cherche \({m = d(f, F)^2}\). Le minimum est atteint en \({p_F(f) = at + b}\), caractérisé par \({f - p_F(f) \perp 1}\) et \({f - p_F(f) \perp t}\) :

\[
\int_0^1 (t^2 - at - b)\,\mathrm{d}t = \dfrac{1}{3} - \dfrac{a}{2} - b = 0, \qquad \int_0^1 (t^3 - at^2 - bt)\,\mathrm{d}t = \dfrac{1}{4} - \dfrac{a}{3} - \dfrac{b}{2} = 0.
\]

La première donne \({b = \dfrac{1}{3} - \dfrac{a}{2}}\). En reportant dans la seconde : \({\dfrac{1}{4} - \dfrac{a}{3} - \dfrac{1}{6} + \dfrac{a}{4} = 0}\), soit \({\dfrac{a}{12} = \dfrac{1}{12}}\), donc \({a = 1}\) et \({b = -\dfrac{1}{6}}\).

Le projeté est \({p_F(f) : t \mapsto t - \dfrac{1}{6}}\). Comme \({f - p_F(f)}\) est orthogonal à \(F\), donc à \(p_F(f)\) :

\[
m = \|f - p_F(f)\|^2 = \langle f - p_F(f), f\rangle = \int_0^1 \left(t^4 - t^3 + \dfrac{t^2}{6}\right)\mathrm{d}t = \dfrac{1}{5} - \dfrac{1}{4} + \dfrac{1}{18} = \dfrac{1}{180}.
\]
{{% /details %}}
