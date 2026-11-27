---
title: 'Isométries et théorème spectral'
weight: 1
cascade:
  type: docs
---

\(E\) est un espace euclidien de dimension \(n\).

## Adjoint

> [!TIP] **Théorème et définition**
>
> Pour tout endomorphisme \(f\) de \(E\), il existe un unique endomorphisme \(f^*\), l’**adjoint** de \(f\), tel que
>
> \[ \forall (x, y) \in E^2, \quad \langle f(x), y\rangle = \langle x, f^*(y)\rangle. \]
>
> Si \(A\) est la matrice de \(f\) dans une base **orthonormée**, celle de \(f^*\) dans cette base est \(A^T\).

> [!TIP] **Propriétés**
>
> - \({(f + g)^* = f^* + g^*}\), \({(\lambda f)^* = \lambda f^*}\), \({(f \circ g)^* = g^* \circ f^*}\), \({(f^*)^* = f}\).
> - \({\ker f^* = (\operatorname{Im} f)^\perp}\) et \({\operatorname{Im} f^* = (\ker f)^\perp}\).
> - Si \(F\) est stable par \(f\), alors \(F^\perp\) est stable par \(f^*\).

## Isométries vectorielles

> [!TIP] **Définition et théorème**
>
> Un endomorphisme \(f\) de \(E\) est une **isométrie vectorielle** (ou automorphisme orthogonal) s’il conserve la norme : \({\|f(x)\| = \|x\|}\) pour tout \(x\). Les propriétés suivantes sont équivalentes :
> - \(f\) est une isométrie ;
> - \(f\) conserve le produit scalaire : \({\langle f(x), f(y)\rangle = \langle x, y\rangle}\) ;
> - \(f\) transforme une (toute) base orthonormée en une base orthonormée ;
> - \({f^* \circ f = \mathrm{id}_E}\), c’est-à-dire \(f\) est bijectif et \({f^{-1} = f^*}\).
>
> L’ensemble des isométries de \(E\) est le **groupe orthogonal** \(\mathrm{O}(E)\).

{{% details title="Démonstration" closed="true" %}}
Si \(f\) conserve la norme, l’identité de polarisation \({\langle x, y\rangle = \dfrac{1}{4}\left(\|x + y\|^2 - \|x - y\|^2\right)}\) et la linéarité de \(f\) montrent qu’elle conserve le produit scalaire. La réciproque s’obtient avec \({y = x}\).

De plus, \({\langle f(x), f(y)\rangle = \langle x, f^*(f(y))\rangle}\) : la conservation du produit scalaire équivaut à \({\langle x, (f^* \circ f - \mathrm{id})(y)\rangle = 0}\) pour tous \(x\), \(y\), soit \({f^* \circ f = \mathrm{id}_E}\).
{{% /details %}}

> [!TIP] **Définition - Matrices orthogonales**
>
> Une matrice \({A \in \mathcal{M}_n(\mathbb{R})}\) est **orthogonale** si \({A^TA = I_n}\). Cela équivaut à chacune des propriétés suivantes :
> - \(A\) est inversible et \({A^{-1} = A^T}\) ;
> - les colonnes de \(A\) forment une base orthonormée de \(\mathbb{R}^n\) (pour le produit scalaire canonique) ;
> - les lignes de \(A\) forment une base orthonormée de \(\mathbb{R}^n\).
>
> Leur ensemble est noté \(\mathrm{O}_n(\mathbb{R})\). Un endomorphisme est une isométrie si et seulement si sa matrice dans une base orthonormée est orthogonale. La matrice de passage entre deux bases orthonormées est orthogonale.

> [!TIP] **Propriétés**
>
> - Si \(A\) est orthogonale, \({\det A = 1}\) ou \({\det A = -1}\).
> - \({\mathrm{SO}_n(\mathbb{R}) = \{A \in \mathrm{O}_n(\mathbb{R}),\ \det A = 1\}}\) est le **groupe spécial orthogonal** ; ses éléments représentent les isométries **directes** (ou rotations). Les isométries de déterminant \(-1\) sont dites **indirectes**.
> - Les valeurs propres réelles d’une isométrie sont dans \({\{-1, 1\}}\) ; ses valeurs propres complexes sont de module \(1\).
> - Si \(F\) est stable par une isométrie \(f\), alors \(F^\perp\) l’est aussi.
> - Une **symétrie orthogonale** (symétrie par rapport à \(F\) parallèlement à \(F^\perp\)) est une isométrie. Une **réflexion** est une symétrie orthogonale par rapport à un hyperplan : de vecteur normal \(a\), elle s’écrit \({s(x) = x - 2\dfrac{\langle x, a\rangle}{\|a\|^2}a}\).

> [!IMPORTANT] **Remarque**
>
> Une projection orthogonale n’est pas une isométrie (sauf l’identité) : elle n’est pas injective. Le mot « orthogonal » n’a pas le même sens dans « projection orthogonale » et « matrice orthogonale ».

## Classification en dimension 2 et 3

> [!TIP] **Théorème - Dimension 2**
>
> - Les matrices de \(\mathrm{SO}_2(\mathbb{R})\) sont les matrices de **rotation**
>
> \[ R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}, \qquad R_\theta R_{\theta'} = R_{\theta + \theta'}. \]
>
> - Les matrices orthogonales de déterminant \(-1\) sont les matrices \({\begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix}}\) : ce sont des **réflexions**, par rapport à la droite d’angle polaire \(\dfrac{\theta}{2}\).

> [!TIP] **Théorème - Dimension 3**
>
> Soit \(f\) une isométrie **directe** de \(E\) euclidien orienté de dimension \(3\), distincte de l’identité. Alors \(f\) est une **rotation** : l’ensemble de ses vecteurs invariants est une droite \({D = \ker(f - \mathrm{id}_E)}\), l’**axe**, et dans une base orthonormée directe \({(e_1, e_2, e_3)}\) avec \(e_3\) dirigeant \(D\), sa matrice est
>
> \[ \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}. \]
>
> L’angle \(\theta\) vérifie \({\operatorname{tr}(f) = 1 + 2\cos\theta}\).

> [!NOTE] **Méthode - Étudier une matrice orthogonale \(3 \times 3\)**
>
> 1. Vérifier que les colonnes sont orthonormées, puis calculer le déterminant.
> 2. Si \({\det A = 1}\) et \({A \neq I_3}\) : c’est une rotation. L’axe s’obtient en résolvant \({AX = X}\) ; \(\cos\theta\) avec la trace. Pour le signe de \(\sin\theta\) (axe orienté par \(a\)) : c’est celui de \({\det(a, x, f(x))}\) pour un vecteur \(x\) non colinéaire à \(a\).
> 3. Si \({\det A = -1}\) : si \(A\) est de plus symétrique, c’est une symétrie orthogonale (réflexion si \({\operatorname{tr} A = 1}\), symétrie centrale si \({A = -I_3}\)) ; sinon, c’est la composée d’une rotation et d’une réflexion.

## Endomorphismes symétriques

> [!TIP] **Définition**
>
> Un endomorphisme \(f\) est **symétrique** (ou autoadjoint) si \({f^* = f}\), c’est-à-dire
>
> \[ \forall (x, y) \in E^2, \quad \langle f(x), y\rangle = \langle x, f(y)\rangle. \]
>
> Cela équivaut à : la matrice de \(f\) dans une base orthonormée est symétrique. Les projections orthogonales et les symétries orthogonales sont des endomorphismes symétriques.

> [!TIP] **Théorème spectral**
>
> Tout endomorphisme symétrique d’un espace euclidien est diagonalisable dans une **base orthonormée** : ses valeurs propres sont réelles, ses sous-espaces propres sont deux à deux orthogonaux et leur somme est \(E\).
>
> Version matricielle : pour toute matrice **symétrique réelle** \(A\), il existe \({P \in \mathrm{O}_n(\mathbb{R})}\) et \(D\) diagonale réelle telles que
>
> \[ A = PDP^{-1} = PDP^T. \]

{{% details title="Démonstration" closed="true" %}}
**Valeurs propres réelles.** Soit \(\lambda\) une valeur propre complexe de \(A\) symétrique réelle et \(X\) un vecteur propre complexe. Alors \({\overline{X}^TAX = \lambda\overline{X}^TX}\). En conjuguant et en transposant (avec \({A^T = A}\) et \(A\) réelle), on obtient \({\overline{X}^TAX = \overline{\lambda}\,\overline{X}^TX}\). Comme \({\overline{X}^TX = \sum |x_i|^2 > 0}\), on a \({\lambda = \overline{\lambda}}\).

**Orthogonalité.** Si \({f(x) = \lambda x}\) et \({f(y) = \mu y}\) avec \({\lambda \neq \mu}\) : \({\lambda\langle x, y\rangle = \langle f(x), y\rangle = \langle x, f(y)\rangle = \mu\langle x, y\rangle}\), donc \({\langle x, y\rangle = 0}\).

**Diagonalisation**, par récurrence sur \(n\).
- **Initialisation.** En dimension \(1\), tout vecteur unitaire convient.
- **Hérédité.** Supposons le résultat vrai en dimension \({n - 1}\). \(f\) a une valeur propre réelle \(\lambda\), de vecteur propre unitaire \(e_1\). L’hyperplan \({H = e_1^\perp}\) est stable par \(f\) : si \({x \perp e_1}\), \({\langle f(x), e_1\rangle = \langle x, f(e_1)\rangle = \lambda\langle x, e_1\rangle = 0}\). L’endomorphisme induit sur \(H\) est symétrique : il admet une base orthonormée de vecteurs propres, que l’on complète avec \(e_1\).
- **Conclusion.** Le résultat est vrai en toute dimension.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le théorème ne vaut que pour les matrices symétriques **réelles** : \({\begin{pmatrix} 1 & i \\ i & -1 \end{pmatrix}}\) est symétrique complexe, de carré nul et non nulle, donc non diagonalisable.

> [!TIP] **Applications**
>
> - **Formes quadratiques** : si \({q(x) = X^TAX}\) avec \(A\) symétrique, alors dans une base orthonormée de vecteurs propres, \({q(x) = \lambda_1x_1'^2 + \dots + \lambda_nx_n'^2}\). La signature de \(q\) se lit sur les signes des valeurs propres.
> - **Encadrement** : si \({\lambda_{\min}}\) et \({\lambda_{\max}}\) sont la plus petite et la plus grande valeur propre de \(A\) symétrique, alors pour tout \(X\) : \({\lambda_{\min}\|X\|^2 \leq X^TAX \leq \lambda_{\max}\|X\|^2}\).
> - Une matrice symétrique est **positive** (\({X^TAX \geq 0}\) pour tout \(X\)) si et seulement si ses valeurs propres sont positives, **définie positive** si et seulement si elles sont strictement positives.

> [!NOTE] **Méthode - Diagonaliser une matrice symétrique en base orthonormée**
>
> 1. Calculer les valeurs propres et une base de chaque sous-espace propre.
> 2. Les sous-espaces propres sont automatiquement orthogonaux entre eux. À l’intérieur d’un sous-espace propre de dimension \({\geq 2}\), orthonormaliser la base par Gram-Schmidt.
> 3. Normer tous les vecteurs : la matrice \(P\) obtenue est orthogonale, et \({P^{-1} = P^T}\).

> [!NOTE] **Exercice résolu - Diagonalisation orthogonale**
>
> Soit \({A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}}\). Trouver \(P\) orthogonale et \(D\) diagonale telles que \({A = PDP^T}\). La forme quadratique \({q(x, y, z) = 2x^2 + 2y^2 + 2z^2 + 2xy + 2yz + 2zx}\) est-elle définie positive ?

{{% details title="Solution commentée" closed="true" %}}
\(A\) est symétrique réelle : elle est diagonalisable en base orthonormée.

**Valeurs propres.** \({A = I_3 + J}\), où \(J\) est la matrice dont tous les coefficients valent \(1\). \(J\) est de rang \(1\), donc \(0\) est valeur propre de \(J\) avec un sous-espace propre de dimension \(2\) (le plan \({x + y + z = 0}\)) ; et \({J(1, 1, 1)^T = 3(1, 1, 1)^T}\). Les valeurs propres de \(A\) sont donc \({1 + 0 = 1}\) (double) et \({1 + 3 = 4}\) (simple). Vérification : \({\operatorname{tr}(A) = 6 = 1 + 1 + 4}\).

**Sous-espaces propres.**
- \(E_4\) est dirigé par \({(1, 1, 1)}\), de norme \(\sqrt{3}\) : \({e_3 = \dfrac{1}{\sqrt{3}}(1, 1, 1)}\).
- \(E_1\) est le plan \({x + y + z = 0}\), bien orthogonal à \(E_4\). On en choisit une base orthogonale : \({(1, -1, 0)}\), puis un vecteur du plan orthogonal au premier, \({(1, 1, -2)}\). En normant : \({e_1 = \dfrac{1}{\sqrt{2}}(1, -1, 0)}\) et \({e_2 = \dfrac{1}{\sqrt{6}}(1, 1, -2)}\).

\[
P = \begin{pmatrix} \dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \\[0.6em] -\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \\[0.6em] 0 & -\dfrac{2}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}.
\]

**Forme quadratique.** La matrice de \(q\) est \(A\). Ses valeurs propres \(1\), \(1\), \(4\) sont strictement positives : \(q\) est définie positive, de signature \((3, 0)\). On le voit aussi directement : \({q(x, y, z) = (x + y)^2 + (y + z)^2 + (z + x)^2}\).
{{% /details %}}
