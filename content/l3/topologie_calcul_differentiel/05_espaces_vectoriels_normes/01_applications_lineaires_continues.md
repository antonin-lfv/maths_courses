---
title: 'Applications linéaires continues et norme subordonnée'
weight: 1
cascade:
  type: docs
---

\(E\), \(F\), \(G\) sont des espaces vectoriels normés sur \({\mathbb{K} = \mathbb{R}}\) ou \(\mathbb{C}\).

## Exemples d’espaces normés

> [!TIP] **Exemples de référence**
>
> - \(\mathbb{K}^n\) avec \({\|x\|_1}\), \({\|x\|_2}\), \({\|x\|_\infty}\), toutes équivalentes.
> - \(\mathcal{C}([a, b], \mathbb{K})\) avec \({\|f\|_\infty = \sup |f|}\), \({\|f\|_1 = \displaystyle\int_a^b |f|}\), \({\|f\|_2 = \left(\displaystyle\int_a^b |f|^2\right)^{1/2}}\). On a \({\|f\|_1 \leq \sqrt{b - a}\,\|f\|_2 \leq (b - a)\|f\|_\infty}\), mais ces normes ne sont **pas équivalentes**.
> - Les espaces de suites \({\ell^p = \left\{(u_n),\ \sum |u_n|^p < +\infty\right\}}\) avec \({\|u\|_p = \left(\sum |u_n|^p\right)^{1/p}}\) pour \({p \geq 1}\), et \(\ell^\infty\) (suites bornées) avec \({\|u\|_\infty = \sup |u_n|}\). Ce sont des espaces de Banach.

{{% details title="Exemple" closed="true" %}}
Sur \(\mathcal{C}([0, 1], \mathbb{R})\), soit \({f_n(t) = t^n}\). Alors \({\|f_n\|_\infty = 1}\) et \({\|f_n\|_1 = \dfrac{1}{n + 1} \to 0}\). Il n’existe donc pas de constante \(C\) telle que \({\|f\|_\infty \leq C\|f\|_1}\) pour toute \(f\) : les deux normes ne sont pas équivalentes. La suite \((f_n)\) converge vers \(0\) pour \({\|\cdot\|_1}\) mais pas pour \({\|\cdot\|_\infty}\).
{{% /details %}}

## Applications linéaires continues

> [!TIP] **Théorème - Caractérisation**
>
> Pour une application **linéaire** \({u : E \to F}\), les propriétés suivantes sont équivalentes :
> - \(u\) est continue sur \(E\) ;
> - \(u\) est continue en \(0\) ;
> - \(u\) est bornée sur la boule unité fermée ;
> - il existe \({C \geq 0}\) tel que \({\|u(x)\|_F \leq C\|x\|_E}\) pour tout \({x \in E}\) ;
> - \(u\) est lipschitzienne.
>
> L’ensemble des applications linéaires continues de \(E\) dans \(F\) est noté \(\mathcal{L}_c(E, F)\).

{{% details title="Démonstration" closed="true" %}}
Si \(u\) est continue en \(0\), il existe \({\eta > 0}\) tel que \({\|x\| \leq \eta \Rightarrow \|u(x)\| \leq 1}\). Pour \({x \neq 0}\), le vecteur \({\dfrac{\eta x}{\|x\|}}\) est de norme \(\eta\), donc par linéarité \({\|u(x)\| \leq \dfrac{1}{\eta}\|x\|}\). Réciproquement, si \({\|u(x)\| \leq C\|x\|}\), alors \({\|u(x) - u(y)\| = \|u(x - y)\| \leq C\|x - y\|}\) : \(u\) est \(C\)-lipschitzienne, donc continue.
{{% /details %}}

> [!TIP] **Définition - Norme subordonnée**
>
> Pour \({u \in \mathcal{L}_c(E, F)}\), la **norme subordonnée** (ou norme d’opérateur) est
>
> \[ \|u\| = \sup_{x \neq 0} \dfrac{\|u(x)\|_F}{\|x\|_E} = \sup_{\|x\| \leq 1} \|u(x)\|_F = \sup_{\|x\| = 1} \|u(x)\|_F. \]
>
> C’est la plus petite constante \(C\) telle que \({\|u(x)\| \leq C\|x\|}\) pour tout \(x\).

> [!TIP] **Propriétés**
>
> - \({u \mapsto \|u\|}\) est une norme sur \(\mathcal{L}_c(E, F)\).
> - \({\|u(x)\| \leq \|u\|\,\|x\|}\) pour tout \(x\).
> - **Sous-multiplicativité** : \({\|v \circ u\| \leq \|v\|\,\|u\|}\), et \({\|\mathrm{id}_E\| = 1}\).
> - Si \(F\) est un espace de Banach, \(\mathcal{L}_c(E, F)\) est un espace de Banach. En particulier le **dual topologique** \({E' = \mathcal{L}_c(E, \mathbb{K})}\) est toujours complet.

> [!NOTE] **Méthode - Calculer une norme subordonnée**
>
> 1. **Majorer** : trouver \(C\) tel que \({\|u(x)\| \leq C\|x\|}\) pour tout \(x\). Alors \({\|u\| \leq C}\).
> 2. **Minorer** : trouver un vecteur \({x_0 \neq 0}\) tel que \({\|u(x_0)\| = C\|x_0\|}\), ou une suite \((x_n)\) de vecteurs non nuls telle que \({\dfrac{\|u(x_n)\|}{\|x_n\|} \to C}\). Alors \({\|u\| \geq C}\).
>
> En dimension infinie, la borne supérieure n’est pas toujours atteinte : la seconde possibilité est alors nécessaire.

{{% details title="Exemple" closed="true" %}}
Sur \({E = \mathcal{C}([0, 1], \mathbb{R})}\) muni de \({\|\cdot\|_\infty}\), soit \({\varphi(f) = \displaystyle\int_0^1 f(t)\,\mathrm{d}t}\). Alors \({|\varphi(f)| \leq \|f\|_\infty}\), donc \({\|\varphi\| \leq 1}\) ; et pour \({f = 1}\), \({\varphi(1) = 1 = \|1\|_\infty}\). Donc \({\|\varphi\| = 1}\).

L’évaluation \({\delta_0 : f \mapsto f(0)}\) est continue pour \({\|\cdot\|_\infty}\) (de norme \(1\)), mais **pas** pour \({\|\cdot\|_1}\) : avec \({f_n(t) = \max(1 - nt, 0)}\), on a \({\delta_0(f_n) = 1}\) alors que \({\|f_n\|_1 = \dfrac{1}{2n} \to 0}\).
{{% /details %}}

> [!TIP] **Normes subordonnées de matrices**
>
> Pour \({A \in \mathcal{M}_n(\mathbb{R})}\), vue comme endomorphisme de \(\mathbb{R}^n\) :
> - pour \({\|\cdot\|_\infty}\) : \({\|A\| = \max_i \displaystyle\sum_j |a_{ij}|}\) (maximum des sommes par ligne) ;
> - pour \({\|\cdot\|_1}\) : \({\|A\| = \max_j \displaystyle\sum_i |a_{ij}|}\) (maximum des sommes par colonne) ;
> - pour \({\|\cdot\|_2}\) : \({\|A\| = \sqrt{\rho(A^TA)}}\), racine de la plus grande valeur propre de \(A^TA\).

## Dimension finie

> [!TIP] **Théorème**
>
> Soit \(E\) un espace vectoriel normé de **dimension finie**.
> - Toutes les normes sur \(E\) sont équivalentes.
> - Toute application linéaire de \(E\) dans un espace vectoriel normé quelconque est **continue**. De même, toute application multilinéaire définie sur un produit d’espaces de dimension finie est continue.
> - \(E\) est complet ; ses compacts sont ses fermés bornés.
> - Tout sous-espace de dimension finie d’un espace vectoriel normé quelconque est **fermé**.

{{% details title="Démonstration" closed="true" %}}
Pour la continuité : avec une base \((e_i)\) et la norme \({\|x\|_\infty = \max |x_i|}\), on a \({\|u(x)\| \leq \sum |x_i|\|u(e_i)\| \leq \left(\sum \|u(e_i)\|\right)\|x\|_\infty}\).

Un sous-espace de dimension finie est complet pour la norme induite, donc fermé.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> En dimension infinie, il existe toujours des applications linéaires non continues, et des sous-espaces non fermés. La dérivation \({P \mapsto P'}\) sur \(\mathbb{R}[X]\) muni de \({\|P\| = \sup_{[0, 1]} |P|}\) n’est pas continue : \({\|X^n\| = 1}\) et \({\|(X^n)'\| = n}\). Et le sous-espace des fonctions polynomiales est dense, non fermé, dans \({(\mathcal{C}([0, 1]), \|\cdot\|_\infty)}\) (théorème de Weierstrass).

> [!TIP] **Propriété - Formes linéaires**
>
> Une forme linéaire \(\varphi\) sur \(E\) est continue si et seulement si son noyau est **fermé**. Si elle n’est pas continue, son noyau est dense.

## Outils dans les espaces de Banach

> [!TIP] **Théorème - Série de Neumann**
>
> Soit \(E\) un espace de Banach et \({u \in \mathcal{L}_c(E)}\) avec \({\|u\| < 1}\). Alors \({\mathrm{id}_E - u}\) est inversible dans \(\mathcal{L}_c(E)\) et
>
> \[ (\mathrm{id}_E - u)^{-1} = \sum_{n=0}^{+\infty} u^n, \qquad \left\|(\mathrm{id}_E - u)^{-1}\right\| \leq \dfrac{1}{1 - \|u\|}. \]
>
> Par conséquent, l’ensemble des éléments inversibles de \(\mathcal{L}_c(E)\) est un **ouvert**, et \({u \mapsto u^{-1}}\) y est continue.

{{% details title="Démonstration" closed="true" %}}
\({\|u^n\| \leq \|u\|^n}\), terme général d’une série géométrique convergente : la série \(\sum u^n\) est absolument convergente dans l’espace de Banach \(\mathcal{L}_c(E)\), donc convergente, de somme \(S\). Or \({(\mathrm{id} - u)\displaystyle\sum_{n=0}^{N} u^n = \mathrm{id} - u^{N+1} \to \mathrm{id}}\), donc \({(\mathrm{id} - u)S = \mathrm{id}}\), et de même \({S(\mathrm{id} - u) = \mathrm{id}}\).
{{% /details %}}

> [!TIP] **Définition - Exponentielle**
>
> Dans un espace de Banach \(E\), pour \({u \in \mathcal{L}_c(E)}\) (en particulier pour une matrice), la série \({\exp(u) = \displaystyle\sum_{n=0}^{+\infty} \dfrac{u^n}{n!}}\) est absolument convergente. Si \(u\) et \(v\) commutent, \({\exp(u + v) = \exp(u)\exp(v)}\).

> [!NOTE] **Exercice résolu - Une norme d’opérateur non atteinte**
>
> Sur \({E = \mathcal{C}([0, 1], \mathbb{R})}\) muni de \({\|\cdot\|_\infty}\), on pose \({\varphi(f) = \displaystyle\int_0^{1/2} f(t)\,\mathrm{d}t - \int_{1/2}^{1} f(t)\,\mathrm{d}t}\). Montrer que \(\varphi\) est continue, calculer \(\|\varphi\|\) et montrer que cette norme n’est pas atteinte.

{{% details title="Solution commentée" closed="true" %}}
**Majoration.** \(\varphi\) est linéaire, et \({|\varphi(f)| \leq \displaystyle\int_0^{1/2} |f| + \int_{1/2}^{1} |f| \leq \|f\|_\infty}\). Donc \(\varphi\) est continue et \({\|\varphi\| \leq 1}\).

**Minoration.** Il faudrait \(f\) valant \(1\) sur \({\left[0, \dfrac{1}{2}\right[}\) et \(-1\) sur \({\left]\dfrac{1}{2}, 1\right]}\), qui n’est pas continue : on l’approche. Pour \({n \geq 2}\), soit \(f_n\) la fonction continue valant \(1\) sur \({\left[0, \dfrac{1}{2} - \dfrac{1}{n}\right]}\), \(-1\) sur \({\left[\dfrac{1}{2} + \dfrac{1}{n}, 1\right]}\), et affine entre les deux. Alors \({\|f_n\|_\infty = 1}\). Par symétrie par rapport à \(\dfrac{1}{2}\), \({\varphi(f_n) = 2\displaystyle\int_0^{1/2} f_n}\), et

\[
\int_0^{1/2} f_n = \left(\dfrac{1}{2} - \dfrac{1}{n}\right) + \dfrac{1}{2n} = \dfrac{1}{2} - \dfrac{1}{2n},
\]

(le second terme est l’aire d’un triangle de base \(\dfrac{1}{n}\) et de hauteur \(1\)). Donc \({\varphi(f_n) = 1 - \dfrac{1}{n} \to 1}\), et \({\|\varphi\| \geq 1}\). Ainsi \({\|\varphi\| = 1}\).

**Norme non atteinte.** Supposons \({\|f\|_\infty = 1}\) et \({\varphi(f) = 1}\). Alors

\[
\int_0^{1/2} (1 - f) + \int_{1/2}^{1} (1 + f) = 1 - \varphi(f) = 0,
\]

où les deux fonctions intégrées sont continues et positives. Elles sont donc nulles : \({f = 1}\) sur \({\left[0, \dfrac{1}{2}\right]}\) et \({f = -1}\) sur \({\left[\dfrac{1}{2}, 1\right]}\), ce qui est contradictoire en \(\dfrac{1}{2}\). La borne supérieure n’est pas atteinte : la boule unité de \(E\) n’est pas compacte.
{{% /details %}}
