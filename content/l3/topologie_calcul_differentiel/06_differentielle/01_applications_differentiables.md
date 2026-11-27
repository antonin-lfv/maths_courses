---
title: 'Applications différentiables'
weight: 1
cascade:
  type: docs
---

\(E\), \(F\), \(G\) sont des espaces vectoriels normés, \(U\) un **ouvert** de \(E\) et \({f : U \to F}\).

## Différentielle

> [!TIP] **Définition**
>
> \(f\) est **différentiable en \({a \in U}\)** s’il existe une application linéaire **continue** \({L \in \mathcal{L}_c(E, F)}\) telle que
>
> \[ f(a + h) = f(a) + L(h) + o(\|h\|) \quad \text{quand } h \to 0, \]
>
> c’est-à-dire \({\dfrac{\|f(a + h) - f(a) - L(h)\|}{\|h\|} \to 0}\). L’application \(L\) est alors unique : c’est la **différentielle** de \(f\) en \(a\), notée \(\mathrm{d}f(a)\) ou \(Df(a)\).
>
> \(f\) est **différentiable sur \(U\)** si elle l’est en tout point ; sa différentielle est alors l’application \({\mathrm{d}f : U \to \mathcal{L}_c(E, F)}\), \({a \mapsto \mathrm{d}f(a)}\).

La différentielle est la meilleure approximation linéaire de \({h \mapsto f(a + h) - f(a)}\). En dimension finie, la continuité de \(L\) est automatique, et la notion ne dépend pas des normes choisies.

> [!TIP] **Propriétés**
>
> - Si \(f\) est différentiable en \(a\), elle est continue en \(a\).
> - **Dérivée suivant un vecteur** : si \(f\) est différentiable en \(a\), alors pour tout \({h \in E}\),
>
> \[ \mathrm{d}f(a)(h) = \lim_{t \to 0} \dfrac{f(a + th) - f(a)}{t} = \dfrac{\mathrm{d}}{\mathrm{d}t}f(a + th)\Big|_{t = 0}. \]
>
> - Pour \({E = \mathbb{R}}\), \(f\) est différentiable en \(a\) si et seulement si elle est dérivable, et \({\mathrm{d}f(a)(h) = hf'(a)}\).
> - Pour \({E = \mathbb{R}^n}\) : \({\mathrm{d}f(a)(h) = \displaystyle\sum_{i=1}^{n} h_i\dfrac{\partial f}{\partial x_i}(a)}\), et la matrice de \(\mathrm{d}f(a)\) dans les bases canoniques est la **matrice jacobienne** \({J_f(a) = \left(\dfrac{\partial f_i}{\partial x_j}(a)\right)}\).

> [!IMPORTANT] **Remarque**
>
> La réciproque du deuxième point est fausse : une fonction peut avoir des dérivées suivant tous les vecteurs sans être différentiable, ni même continue. Exemple : \({f(x, y) = \dfrac{x^2y}{x^4 + y^2}}\) hors de l’origine, \({f(0, 0) = 0}\).

> [!NOTE] **Méthode - Calculer une différentielle**
>
> - **Par le développement** : calculer \({f(a + h) - f(a)}\), isoler la partie linéaire en \(h\), et montrer que le reste est un \({o(\|h\|)}\).
> - **Par la dérivée directionnelle** : calculer \({\dfrac{\mathrm{d}}{\mathrm{d}t}f(a + th)}\) en \({t = 0}\) pour trouver le candidat, puis justifier la différentiabilité (souvent par le caractère \(\mathcal{C}^1\)).
> - **Par composition** de fonctions dont on connaît la différentielle.

> [!TIP] **Différentielles de référence**
>
> - Une application constante a une différentielle nulle.
> - Une application **linéaire continue** \(u\) est différentiable et \({\mathrm{d}u(a) = u}\) en tout point \(a\).
> - Une application **bilinéaire continue** \({B : E_1 \times E_2 \to F}\) est différentiable et
>
> \[ \mathrm{d}B(a, b)(h, k) = B(h, b) + B(a, k). \]
>
> - Sur un espace euclidien, \({N(x) = \|x\|^2}\) vérifie \({\mathrm{d}N(a)(h) = 2\langle a, h\rangle}\).

{{% details title="Démonstration" closed="true" %}}
Bilinéaire : \({B(a + h, b + k) = B(a, b) + B(h, b) + B(a, k) + B(h, k)}\). La partie \({(h, k) \mapsto B(h, b) + B(a, k)}\) est linéaire continue, et \({\|B(h, k)\| \leq C\|h\|\|k\| \leq C\|(h, k)\|^2 = o(\|(h, k)\|)}\) pour la norme \({\|(h, k)\| = \max(\|h\|, \|k\|)}\).
{{% /details %}}

## Opérations

> [!TIP] **Théorème**
>
> - **Linéarité** : \({\mathrm{d}(\lambda f + g)(a) = \lambda\,\mathrm{d}f(a) + \mathrm{d}g(a)}\).
> - **Règle de la chaîne** : si \(f\) est différentiable en \(a\) et \(g\) différentiable en \(f(a)\), alors \({g \circ f}\) est différentiable en \(a\) et
>
> \[ \mathrm{d}(g \circ f)(a) = \mathrm{d}g\big(f(a)\big) \circ \mathrm{d}f(a). \]
>
>   En dimension finie : \({J_{g \circ f}(a) = J_g(f(a)) \times J_f(a)}\).
> - **Produit** : si \({f, g : U \to \mathbb{R}}\) sont différentiables, \({\mathrm{d}(fg)(a) = g(a)\,\mathrm{d}f(a) + f(a)\,\mathrm{d}g(a)}\).
> - **Réciproque** : si \(f\) est un homéomorphisme d’un ouvert sur un ouvert, différentiable en \(a\) avec \(\mathrm{d}f(a)\) inversible (d’inverse continu), alors \(f^{-1}\) est différentiable en \(f(a)\) et \({\mathrm{d}(f^{-1})(f(a)) = \big(\mathrm{d}f(a)\big)^{-1}}\).

{{% details title="Démonstration" closed="true" %}}
Règle de la chaîne. Notons \({b = f(a)}\), \({L = \mathrm{d}f(a)}\), \({M = \mathrm{d}g(b)}\). On écrit \({f(a + h) = b + k}\) avec \({k = L(h) + o(\|h\|)}\), donc \({\|k\| \leq (\|L\| + 1)\|h\|}\) pour \(h\) petit. Alors

\[
g(f(a + h)) = g(b) + M(k) + o(\|k\|) = g(b) + M(L(h)) + M(o(\|h\|)) + o(\|h\|),
\]

et \({M(o(\|h\|)) = o(\|h\|)}\) par continuité de \(M\).
{{% /details %}}

## Classe \(\mathcal{C}^1\)

> [!TIP] **Définition et théorème**
>
> \(f\) est de **classe \(\mathcal{C}^1\)** sur \(U\) si elle est différentiable sur \(U\) et si \({\mathrm{d}f : U \to \mathcal{L}_c(E, F)}\) est continue.
>
> **En dimension finie** (\({E = \mathbb{R}^n}\)) : \(f\) est de classe \(\mathcal{C}^1\) sur \(U\) si et seulement si ses dérivées partielles existent et sont continues sur \(U\).

En pratique, pour montrer qu’une fonction de plusieurs variables est différentiable, on montre qu’elle est \(\mathcal{C}^1\) par ce critère.

## Inégalité des accroissements finis

> [!TIP] **Théorème - Inégalité des accroissements finis**
>
> Soit \(f\) différentiable sur \(U\), et \(a\), \(b\) deux points tels que le segment \({[a, b] = \{a + t(b - a),\ t \in [0, 1]\}}\) soit inclus dans \(U\). Si \({\|\mathrm{d}f(x)\| \leq M}\) pour tout \({x \in [a, b]}\), alors
>
> \[ \|f(b) - f(a)\| \leq M\|b - a\|. \]
>
> En particulier, si \(U\) est **convexe** et \({\|\mathrm{d}f\| \leq M}\) sur \(U\), alors \(f\) est \(M\)-lipschitzienne sur \(U\).

> [!IMPORTANT] **Remarque**
>
> Il n’y a pas d’**égalité** des accroissements finis pour les fonctions à valeurs vectorielles : pour \({f(t) = (\cos t, \sin t)}\) sur \({[0, 2\pi]}\), \({f(2\pi) - f(0) = 0}\), alors que \(f'(t)\) ne s’annule jamais. Seule l’inégalité subsiste.

> [!TIP] **Corollaires**
>
> - Si \(U\) est un ouvert **connexe** et si \({\mathrm{d}f = 0}\) sur \(U\), alors \(f\) est constante.
> - Si \(f\) est de classe \(\mathcal{C}^1\), elle est localement lipschitzienne.
> - **Limite de différentielles** : si \((f_n)\) est une suite de fonctions \(\mathcal{C}^1\) sur un ouvert connexe qui converge en un point, et si \((\mathrm{d}f_n)\) converge uniformément, alors \((f_n)\) converge vers une fonction \(\mathcal{C}^1\) dont la différentielle est la limite des \(\mathrm{d}f_n\).

> [!NOTE] **Exercice résolu - Différentielles sur un espace de matrices**
>
> On travaille dans \({E = \mathcal{M}_n(\mathbb{R})}\).
>
> 1. Montrer que \({f : M \mapsto M^2}\) est différentiable et calculer sa différentielle.
> 2. Calculer la différentielle du déterminant en \(I_n\), puis en une matrice inversible \(A\).
> 3. Montrer que \({g : M \mapsto M^{-1}}\) est différentiable sur \(\mathrm{GL}_n(\mathbb{R})\) et calculer sa différentielle.

{{% details title="Solution commentée" closed="true" %}}
On munit \(E\) d’une norme sous-multiplicative (\({\|AB\| \leq \|A\|\|B\|}\)) ; toutes les normes sont équivalentes.

**1.** Pour \({A, H \in E}\) :

\[
f(A + H) = (A + H)^2 = A^2 + AH + HA + H^2.
\]

L’application \({H \mapsto AH + HA}\) est linéaire (continue, car \(E\) est de dimension finie), et \({\|H^2\| \leq \|H\|^2 = o(\|H\|)}\). Donc \(f\) est différentiable et \({\mathrm{d}f(A)(H) = AH + HA}\). Attention : ce n’est \(2AH\) que si \(A\) et \(H\) commutent.

**2.** Le déterminant est polynomial en les coefficients, donc de classe \(\mathcal{C}^1\). On calcule sa différentielle en \(I_n\) par les dérivées directionnelles :

\[
\det(I_n + tH) = 1 + t\operatorname{tr}(H) + o(t),
\]

car dans le développement du déterminant, seul le produit des termes diagonaux \({\prod (1 + th_{ii}) = 1 + t\sum h_{ii} + o(t)}\) contribue à l’ordre \(1\) (tout autre terme contient au moins deux coefficients hors diagonale, donc un facteur \(t^2\)). Donc \({\mathrm{d}(\det)(I_n)(H) = \operatorname{tr}(H)}\).

Pour \(A\) inversible : \({\det(A + H) = \det(A)\det(I_n + A^{-1}H) = \det(A)\big(1 + \operatorname{tr}(A^{-1}H) + o(\|H\|)\big)}\), donc

\[
\mathrm{d}(\det)(A)(H) = \det(A)\operatorname{tr}(A^{-1}H).
\]

**3.** \(\mathrm{GL}_n(\mathbb{R})\) est un ouvert (image réciproque de \(\mathbb{R}^*\) par le déterminant, continu). Pour \(A\) inversible et \(H\) assez petite (\({\|A^{-1}H\| < 1}\)), la série de Neumann donne

\[
(A + H)^{-1} = (I_n + A^{-1}H)^{-1}A^{-1} = \left(I_n - A^{-1}H + \sum_{k \geq 2} (-A^{-1}H)^k\right)A^{-1}.
\]

Le reste vérifie \({\left\|\displaystyle\sum_{k \geq 2} (-A^{-1}H)^k\right\| \leq \dfrac{\|A^{-1}H\|^2}{1 - \|A^{-1}H\|} = o(\|H\|)}\). Donc \(g\) est différentiable en \(A\) et

\[
\mathrm{d}g(A)(H) = -A^{-1}HA^{-1}.
\]

Pour \({n = 1}\), on retrouve la dérivée de \({x \mapsto \dfrac{1}{x}}\) : \({-\dfrac{h}{a^2}}\).
{{% /details %}}
