---
title: 'Formes bilinéaires symétriques et formes quadratiques'
weight: 1
cascade:
  type: docs
---

\(E\) est un \(\mathbb{R}\)-espace vectoriel de dimension finie \(n\), muni d’une base \({\mathcal{B} = (e_1, \dots, e_n)}\).

## Formes bilinéaires

> [!TIP] **Définition**
>
> Une **forme bilinéaire** sur \(E\) est une application \({\varphi : E \times E \to \mathbb{R}}\) linéaire par rapport à chacune de ses deux variables. Elle est :
> - **symétrique** si \({\varphi(x, y) = \varphi(y, x)}\) pour tous \(x\), \(y\) ;
> - **antisymétrique** si \({\varphi(x, y) = -\varphi(y, x)}\) pour tous \(x\), \(y\).

> [!TIP] **Définition et propriété - Matrice d’une forme bilinéaire**
>
> La **matrice** de \(\varphi\) dans la base \(\mathcal{B}\) est \({A = \big(\varphi(e_i, e_j)\big)_{1 \leq i, j \leq n}}\). Si \(X\) et \(Y\) sont les colonnes des coordonnées de \(x\) et \(y\) :
>
> \[ \varphi(x, y) = X^TAY = \sum_{i=1}^{n}\sum_{j=1}^{n} a_{ij}x_iy_j. \]
>
> \(\varphi\) est symétrique si et seulement si \(A\) est symétrique.

> [!TIP] **Théorème - Changement de base**
>
> Si \(P\) est la matrice de passage de \(\mathcal{B}\) à \(\mathcal{B}'\), la matrice de \(\varphi\) dans \(\mathcal{B}'\) est
>
> \[ A' = P^TAP. \]
>
> Deux matrices liées par une telle relation sont dites **congruentes**. Elles ont le même rang : le **rang** de \(\varphi\) est celui de sa matrice dans une base quelconque. \(\varphi\) est **non dégénérée** si ce rang vaut \(n\).

{{% details title="Démonstration" closed="true" %}}
Avec \({X = PX'}\) et \({Y = PY'}\) : \({\varphi(x, y) = (PX')^TA(PY') = X'^T(P^TAP)Y'}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Ne pas confondre avec la formule \({A' = P^{-1}AP}\) des endomorphismes. Une même matrice symétrique peut représenter un endomorphisme ou une forme bilinéaire, et ne se transforme pas de la même façon dans les deux cas (sauf si \({P^T = P^{-1}}\)).

## Formes quadratiques

> [!TIP] **Définition**
>
> Une **forme quadratique** sur \(E\) est une application \({q : E \to \mathbb{R}}\) de la forme \({q(x) = \varphi(x, x)}\), où \(\varphi\) est une forme bilinéaire. Il existe alors une unique forme bilinéaire **symétrique** \(\varphi\) telle que \({q(x) = \varphi(x, x)}\) : c’est la **forme polaire** de \(q\), donnée par
>
> \[ \varphi(x, y) = \dfrac{1}{2}\big(q(x + y) - q(x) - q(y)\big) = \dfrac{1}{4}\big(q(x + y) - q(x - y)\big). \]
>
> La matrice de \(q\) est celle de sa forme polaire. On a \({q(\lambda x) = \lambda^2q(x)}\).

> [!NOTE] **Méthode - Écrire la matrice d’une forme quadratique**
>
> En coordonnées, \({q(x) = \displaystyle\sum_{i} a_{ii}x_i^2 + 2\sum_{i < j} a_{ij}x_ix_j}\). Donc :
> - le coefficient de \(x_i^2\) va sur la diagonale ;
> - le coefficient de \(x_ix_j\) est **partagé en deux** entre les positions \((i, j)\) et \((j, i)\).

{{% details title="Exemple" closed="true" %}}
Sur \(\mathbb{R}^3\), \({q(x, y, z) = x^2 + 3y^2 - z^2 + 4xy - 6yz}\) a pour matrice

\[
A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 3 & -3 \\ 0 & -3 & -1 \end{pmatrix},
\]

et sa forme polaire est \({\varphi(u, u') = xx' + 3yy' - zz' + 2(xy' + x'y) - 3(yz' + y'z)}\).
{{% /details %}}

> [!TIP] **Définition**
>
> Une forme quadratique \(q\) (ou sa forme polaire) est :
> - **positive** si \({q(x) \geq 0}\) pour tout \(x\) ;
> - **définie positive** si \({q(x) > 0}\) pour tout \({x \neq 0}\) ;
> - négative, définie négative : de même avec les inégalités inverses.
>
> Le **cône isotrope** est l’ensemble des \(x\) tels que \({q(x) = 0}\).

> [!TIP] **Théorème - Inégalité de Cauchy-Schwarz**
>
> Si \(q\) est positive, de forme polaire \(\varphi\), alors pour tous \(x\), \(y\) : \({\varphi(x, y)^2 \leq q(x)q(y)}\).

## Orthogonalité et réduction

> [!TIP] **Définition**
>
> Deux vecteurs \(x\) et \(y\) sont **orthogonaux** pour \(\varphi\) si \({\varphi(x, y) = 0}\). Une base est **orthogonale** pour \(q\) si ses vecteurs sont deux à deux orthogonaux, ce qui équivaut à : la matrice de \(q\) dans cette base est diagonale.

> [!TIP] **Théorème**
>
> Toute forme quadratique sur un espace de dimension finie admet une base orthogonale. Autrement dit, \(q\) s’écrit comme combinaison linéaire de carrés de formes linéaires **linéairement indépendantes** :
>
> \[ q(x) = \alpha_1\ell_1(x)^2 + \alpha_2\ell_2(x)^2 + \dots + \alpha_r\ell_r(x)^2, \qquad \alpha_i \neq 0, \]
>
> où \(r\) est le rang de \(q\).

> [!NOTE] **Méthode - Réduction de Gauss**
>
> On élimine les variables l’une après l’autre.
> - **S’il y a un carré**, par exemple \({ax_1^2}\) avec \({a \neq 0}\) : on regroupe tous les termes contenant \(x_1\) et on complète le carré,
>
> \[ ax_1^2 + x_1L(x_2, \dots, x_n) = a\left(x_1 + \dfrac{L}{2a}\right)^2 - \dfrac{L^2}{4a}. \]
>
>   Il reste une forme quadratique en \({x_2, \dots, x_n}\), que l’on traite de même.
> - **S’il n’y a aucun carré**, mais un terme \({ax_1x_2}\) : on écrit \({q = ax_1x_2 + x_1L_1 + x_2L_2 + \dots}\), que l’on regroupe en \({a\left(x_1 + \dfrac{L_2}{a}\right)\left(x_2 + \dfrac{L_1}{a}\right) + \dots}\), puis on utilise
>
> \[ uv = \dfrac{1}{4}\big((u + v)^2 - (u - v)^2\big). \]
>
> La méthode garantit que les formes linéaires obtenues sont indépendantes.

{{% details title="Exemple" closed="true" %}}
Réduisons \({q(x, y, z) = x^2 + 3y^2 - z^2 + 4xy - 6yz}\).

Termes en \(x\) : \({x^2 + 4xy = (x + 2y)^2 - 4y^2}\). Donc

\[
q = (x + 2y)^2 - y^2 - 6yz - z^2.
\]

Termes en \(y\) : \({-y^2 - 6yz = -(y + 3z)^2 + 9z^2}\). Donc

\[
q = (x + 2y)^2 - (y + 3z)^2 + 8z^2.
\]

Vérification du coefficient de \(y^2\) : \({4 - 1 = 3}\) ; de \(z^2\) : \({-9 + 8 = -1}\) ; de \(yz\) : \(-6\).

Les trois formes linéaires \({x + 2y}\), \({y + 3z}\), \(z\) sont indépendantes (système triangulaire). Il y a deux carrés positifs et un négatif.
{{% /details %}}

## Signature

> [!TIP] **Théorème - Loi d’inertie de Sylvester**
>
> Dans toute décomposition de \(q\) en combinaison de carrés de formes linéaires indépendantes, le nombre \(p\) de coefficients strictement positifs et le nombre \(m\) de coefficients strictement négatifs sont toujours les mêmes. Le couple \((p, m)\) est la **signature** de \(q\), et \({p + m = \operatorname{rg}(q)}\).

> [!TIP] **Propriétés**
>
> - \(q\) est positive si et seulement si sa signature est \((p, 0)\).
> - \(q\) est définie positive si et seulement si sa signature est \((n, 0)\).
> - \(q\) est non dégénérée si et seulement si \({p + m = n}\).
> - La signature est aussi donnée par les signes des **valeurs propres** de la matrice de \(q\) : \(p\) est le nombre de valeurs propres strictement positives, \(m\) le nombre de valeurs propres strictement négatives (comptées avec multiplicité).

> [!TIP] **Propriété - Cas de la dimension 2**
>
> La forme \({q(x, y) = ax^2 + 2bxy + cy^2}\), de matrice \({\begin{pmatrix} a & b \\ b & c \end{pmatrix}}\), est :
> - définie positive si et seulement si \({ac - b^2 > 0}\) et \({a > 0}\) ;
> - définie négative si et seulement si \({ac - b^2 > 0}\) et \({a < 0}\) ;
> - de signature \((1, 1)\) si et seulement si \({ac - b^2 < 0}\).

> [!NOTE] **Exercice résolu - Signature d’une forme sans carré**
>
> Déterminer la signature et le rang de la forme quadratique \({q(x, y, z) = xy + yz + zx}\) sur \(\mathbb{R}^3\).

{{% details title="Solution commentée" closed="true" %}}
Il n’y a aucun carré. On isole les termes contenant \(x\) ou \(y\) :

\[
q = xy + z(x + y) = (x + z)(y + z) - z^2.
\]

On applique \({uv = \dfrac{1}{4}\big((u + v)^2 - (u - v)^2\big)}\) avec \({u = x + z}\) et \({v = y + z}\) :

\[
q = \dfrac{1}{4}(x + y + 2z)^2 - \dfrac{1}{4}(x - y)^2 - z^2.
\]

Les formes linéaires \({x + y + 2z}\), \({x - y}\) et \(z\) sont indépendantes : le déterminant de leurs coefficients, \({\begin{vmatrix} 1 & 1 & 2 \\ 1 & -1 & 0 \\ 0 & 0 & 1 \end{vmatrix} = -2}\), est non nul.

Il y a un coefficient positif et deux négatifs : la signature est \((1, 2)\) et le rang \(3\). La forme est non dégénérée, ni positive ni négative.

**Vérification.** \({q(1, 1, 1) = 3 > 0}\) et \({q(1, -1, 0) = -1 < 0}\).
{{% /details %}}
