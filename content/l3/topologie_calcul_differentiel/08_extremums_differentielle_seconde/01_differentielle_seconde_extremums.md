---
title: 'Différentielle seconde, extremums libres et liés'
weight: 1
cascade:
  type: docs
---

\(U\) est un ouvert de \({E = \mathbb{R}^n}\) (les énoncés s’étendent aux espaces de Banach) et \({f : U \to \mathbb{R}}\).

## Différentielle seconde

> [!TIP] **Définition**
>
> \(f\) est **deux fois différentiable en \(a\)** si elle est différentiable au voisinage de \(a\) et si \({\mathrm{d}f : U \to \mathcal{L}(E, \mathbb{R})}\) est différentiable en \(a\). La **différentielle seconde** \(\mathrm{d}^2f(a)\) s’identifie à une forme **bilinéaire** sur \(E\) :
>
> \[ \mathrm{d}^2f(a)(h, k) = \sum_{i=1}^{n}\sum_{j=1}^{n} \dfrac{\partial^2 f}{\partial x_i\partial x_j}(a)\,h_ik_j = h^TH_f(a)k, \]
>
> où \({H_f(a) = \left(\dfrac{\partial^2 f}{\partial x_i\partial x_j}(a)\right)}\) est la **matrice hessienne**. \(f\) est de **classe \(\mathcal{C}^2\)** si ses dérivées partielles secondes existent et sont continues.

> [!TIP] **Théorème de Schwarz**
>
> Si \(f\) est deux fois différentiable en \(a\) (en particulier si \(f\) est \(\mathcal{C}^2\)), la forme bilinéaire \(\mathrm{d}^2f(a)\) est **symétrique** : la matrice hessienne est symétrique.

> [!TIP] **Théorème - Formules de Taylor à l’ordre 2**
>
> Soit \(f\) de classe \(\mathcal{C}^2\) sur \(U\).
> - **Taylor-Young** : quand \({h \to 0}\),
>
> \[ f(a + h) = f(a) + \mathrm{d}f(a)(h) + \dfrac{1}{2}\mathrm{d}^2f(a)(h, h) + o(\|h\|^2). \]
>
> - **Taylor avec reste intégral** : si \({[a, a + h] \subset U}\),
>
> \[ f(a + h) = f(a) + \mathrm{d}f(a)(h) + \int_0^1 (1 - t)\,\mathrm{d}^2f(a + th)(h, h)\,\mathrm{d}t. \]

{{% details title="Démonstration" closed="true" %}}
On applique la formule de Taylor avec reste intégral à la fonction d’une variable \({\varphi(t) = f(a + th)}\) sur \([0, 1]\) : \({\varphi'(t) = \mathrm{d}f(a + th)(h)}\) et \({\varphi''(t) = \mathrm{d}^2f(a + th)(h, h)}\).
{{% /details %}}

## Extremums libres

> [!TIP] **Théorème - Conditions nécessaires**
>
> Si \(f\) admet un **minimum local** en un point \(a\) de l’ouvert \(U\) :
> - **ordre 1** : si \(f\) est différentiable en \(a\), alors \({\mathrm{d}f(a) = 0}\) (\(a\) est un **point critique**) ;
> - **ordre 2** : si \(f\) est \(\mathcal{C}^2\), la forme quadratique \({h \mapsto \mathrm{d}^2f(a)(h, h)}\) est **positive**.

> [!TIP] **Théorème - Condition suffisante**
>
> Soit \(f\) de classe \(\mathcal{C}^2\) et \(a\) un point critique.
> - Si \(H_f(a)\) est **définie positive**, \(f\) admet en \(a\) un **minimum local strict**.
> - Si \(H_f(a)\) est **définie négative**, \(f\) admet en \(a\) un **maximum local strict**.
> - Si \(H_f(a)\) a des valeurs propres strictement positives et strictement négatives, \(a\) est un **point selle** : ni minimum ni maximum.
> - Si \(H_f(a)\) est positive ou négative sans être définie (une valeur propre nulle), on ne peut pas conclure à l’ordre 2.

{{% details title="Démonstration" closed="true" %}}
Supposons \(H_f(a)\) définie positive, de plus petite valeur propre \({\lambda > 0}\). Alors \({h^TH_f(a)h \geq \lambda\|h\|^2}\) (norme euclidienne), et la formule de Taylor-Young donne

\[
f(a + h) - f(a) \geq \dfrac{\lambda}{2}\|h\|^2 + o(\|h\|^2) = \|h\|^2\left(\dfrac{\lambda}{2} + o(1)\right),
\]

strictement positif pour \(h\) non nul assez petit.

Point selle : si \(v_+\) et \(v_-\) sont des vecteurs propres pour des valeurs propres \({\mu_+ > 0}\) et \({\mu_- < 0}\), alors \({f(a + tv_\pm) - f(a) = \dfrac{t^2}{2}\mu_\pm\|v_\pm\|^2 + o(t^2)}\) change de signe selon la direction.
{{% /details %}}

> [!NOTE] **Méthode - Signe d’une matrice hessienne**
>
> - Calculer les valeurs propres, ou
> - appliquer la réduction de Gauss à la forme quadratique, ou
> - **critère de Sylvester** : une matrice symétrique est définie positive si et seulement si tous ses mineurs principaux dominants (déterminants des blocs en haut à gauche de taille \({1, 2, \dots, n}\)) sont strictement positifs.
>
> Dans le **cas douteux**, on revient à la définition en étudiant le signe de \({f(a + h) - f(a)}\) le long de directions ou de courbes bien choisies.

## Convexité

> [!TIP] **Théorème**
>
> Soit \(f\) de classe \(\mathcal{C}^2\) sur un ouvert **convexe** \(U\).
> - \(f\) est convexe si et seulement si \(H_f(x)\) est positive pour tout \({x \in U}\).
> - \(f\) est convexe si et seulement si \({f(y) \geq f(x) + \mathrm{d}f(x)(y - x)}\) pour tous \(x\), \(y\) : le graphe est au-dessus de ses plans tangents.
> - Si \(f\) est convexe, tout point critique est un **minimum global**. Si \(H_f(x)\) est définie positive partout (stricte convexité), ce minimum est unique.

## Extremums liés

> [!TIP] **Théorème des extremums liés (multiplicateurs de Lagrange)**
>
> Soient \(f\), \({g_1, \dots, g_p}\) de classe \(\mathcal{C}^1\) sur \(U\) et \({\Gamma = \{x \in U,\ g_1(x) = \dots = g_p(x) = 0\}}\). Si la restriction de \(f\) à \(\Gamma\) admet un extremum local en \({a \in \Gamma}\), et si les gradients \({\nabla g_1(a), \dots, \nabla g_p(a)}\) sont **linéairement indépendants**, alors il existe des réels \({\lambda_1, \dots, \lambda_p}\) tels que
>
> \[ \nabla f(a) = \lambda_1\nabla g_1(a) + \dots + \lambda_p\nabla g_p(a). \]

Interprétation pour une contrainte : en un extremum sous contrainte, le gradient de \(f\) est orthogonal à l’ensemble \(\Gamma\), donc colinéaire à \(\nabla g\).

> [!NOTE] **Méthode - Extremums d’une fonction sur un compact**
>
> 1. **Existence** : \(f\) continue sur un compact atteint ses bornes.
> 2. **Candidats intérieurs** : points critiques de \(f\) dans l’intérieur.
> 3. **Candidats sur le bord** : paramétrer le bord (fonction d’une variable), ou appliquer le théorème des extremums liés ; ne pas oublier les « coins » où le bord n’est pas régulier.
> 4. Comparer les valeurs de \(f\) en tous les candidats.

> [!NOTE] **Exercice résolu - Un cas douteux et un extremum lié**
>
> 1. Étudier les extremums locaux de \({f(x, y) = x^4 + y^4 - 4xy}\) sur \(\mathbb{R}^2\). Admet-elle un minimum global ?
> 2. Déterminer le maximum de \({g(x, y, z) = xyz}\) sur \({\Gamma = \{(x, y, z),\ x, y, z > 0,\ x + y + z = 3\}}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** *Points critiques.* \({\dfrac{\partial f}{\partial x} = 4x^3 - 4y = 0}\) et \({\dfrac{\partial f}{\partial y} = 4y^3 - 4x = 0}\) donnent \({y = x^3}\) puis \({x^9 = x}\), soit \({x(x^8 - 1) = 0}\) : \({x \in \{0, 1, -1\}}\). Les points critiques sont \((0, 0)\), \((1, 1)\) et \((-1, -1)\).

*Hessienne.* \({H_f(x, y) = \begin{pmatrix} 12x^2 & -4 \\ -4 & 12y^2 \end{pmatrix}}\).

- En \((0, 0)\) : \({\begin{pmatrix} 0 & -4 \\ -4 & 0 \end{pmatrix}}\), de déterminant \({-16 < 0}\) : valeurs propres \(4\) et \(-4\). **Point selle.**
- En \((1, 1)\) et \((-1, -1)\) : \({\begin{pmatrix} 12 & -4 \\ -4 & 12 \end{pmatrix}}\), de déterminant \({144 - 16 = 128 > 0}\) et de trace \({24 > 0}\) : définie positive. **Minimums locaux stricts**, de valeur \({f(1, 1) = f(-1, -1) = 1 + 1 - 4 = -2}\).

*Minimum global.* On a \({4xy \leq 2x^2 + 2y^2}\), donc \({f(x, y) \geq (x^4 - 2x^2) + (y^4 - 2y^2) = (x^2 - 1)^2 + (y^2 - 1)^2 - 2 \geq -2}\). Le minimum global vaut \(-2\), atteint en \((1, 1)\) et \((-1, -1)\).

**2.** *Existence.* L’adhérence \({\overline{\Gamma} = \{x, y, z \geq 0,\ x + y + z = 3\}}\) est compacte (fermée et bornée) et \(g\) y est continue : \(g\) y atteint son maximum. Sur \({\overline{\Gamma} \setminus \Gamma}\), une coordonnée est nulle et \({g = 0}\), alors que \({g(1, 1, 1) = 1 > 0}\) : le maximum est atteint en un point \(a\) de \(\Gamma\).

*Lagrange.* Avec \({h(x, y, z) = x + y + z - 3}\), \({\nabla h = (1, 1, 1) \neq 0}\). L’ensemble \({\{x, y, z > 0\}}\) est ouvert, donc le théorème s’applique : il existe \(\lambda\) tel que

\[
\nabla g(a) = (yz, xz, xy) = \lambda(1, 1, 1).
\]

Donc \({yz = xz = xy}\). Comme \({x, y, z > 0}\), on en tire \({x = y = z}\), puis \({x = y = z = 1}\) avec la contrainte.

Le maximum vaut \({g(1, 1, 1) = 1}\). On retrouve l’inégalité arithmético-géométrique : \({xyz \leq \left(\dfrac{x + y + z}{3}\right)^3}\).
{{% /details %}}
