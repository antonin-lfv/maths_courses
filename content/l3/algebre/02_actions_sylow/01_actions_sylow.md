---
title: 'Actions de groupes, p-groupes, théorèmes de Sylow'
weight: 1
cascade:
  type: docs
---

## Actions de groupes

> [!TIP] **Définition**
>
> Une **action** (à gauche) d’un groupe \(G\) sur un ensemble \(X\) est une application \({G \times X \to X}\), \({(g, x) \mapsto g \cdot x}\), telle que pour tous \({g, h \in G}\) et \({x \in X}\) :
>
> \[ e \cdot x = x \qquad \text{et} \qquad g \cdot (h \cdot x) = (gh) \cdot x. \]
>
> Cela revient à se donner un morphisme de groupes \({\rho : G \to \mathfrak{S}(X)}\), avec \({\rho(g)(x) = g \cdot x}\). L’action est **fidèle** si \(\rho\) est injectif.

> [!TIP] **Définition**
>
> Pour \({x \in X}\) :
> - l’**orbite** de \(x\) est \({\operatorname{Orb}(x) = \{g \cdot x,\ g \in G\}}\) ;
> - le **stabilisateur** de \(x\) est \({\operatorname{Stab}(x) = \{g \in G,\ g \cdot x = x\}}\), un sous-groupe de \(G\).
>
> Les orbites forment une partition de \(X\). L’action est **transitive** s’il n’y a qu’une orbite, **libre** si tous les stabilisateurs sont triviaux. Un point \(x\) est **fixe** si \({\operatorname{Orb}(x) = \{x\}}\).

> [!TIP] **Exemples fondamentaux**
>
> - **Translation à gauche** : \(G\) agit sur lui-même par \({g \cdot x = gx}\). L’action est libre et transitive ; elle donne le **théorème de Cayley** : tout groupe fini d’ordre \(n\) est isomorphe à un sous-groupe de \(\mathfrak{S}_n\).
> - **Conjugaison** : \(G\) agit sur lui-même par \({g \cdot x = gxg^{-1}}\). Les orbites sont les **classes de conjugaison** ; le stabilisateur de \(x\) est son **centralisateur** \({C(x) = \{g,\ gx = xg\}}\) ; les points fixes sont les éléments du centre.
> - \(G\) agit par conjugaison sur l’ensemble de ses sous-groupes ; le stabilisateur de \(H\) est son **normalisateur** \({N(H) = \{g,\ gHg^{-1} = H\}}\).
> - \(G\) agit par translation sur \(G/H\) : \({g \cdot xH = gxH}\). L’action est transitive, et le stabilisateur de \(H\) est \(H\).

> [!TIP] **Théorème - Relation orbite-stabilisateur**
>
> L’application \({g\operatorname{Stab}(x) \mapsto g \cdot x}\) est une bijection de \({G/\operatorname{Stab}(x)}\) sur \(\operatorname{Orb}(x)\). Si \(G\) est fini :
>
> \[ |\operatorname{Orb}(x)| = \dfrac{|G|}{|\operatorname{Stab}(x)|}. \]
>
> En particulier, le cardinal d’une orbite divise l’ordre du groupe.

{{% details title="Démonstration" closed="true" %}}
\({g \cdot x = h \cdot x \iff (h^{-1}g) \cdot x = x \iff h^{-1}g \in \operatorname{Stab}(x) \iff g\operatorname{Stab}(x) = h\operatorname{Stab}(x)}\). L’application est donc bien définie et injective ; elle est surjective par définition de l’orbite.
{{% /details %}}

> [!TIP] **Théorème - Équation aux classes**
>
> Si \(X\) est fini et si \({x_1, \dots, x_r}\) sont des représentants des orbites :
>
> \[ |X| = \sum_{i=1}^{r} |\operatorname{Orb}(x_i)| = \sum_{i=1}^{r} \dfrac{|G|}{|\operatorname{Stab}(x_i)|}. \]
>
> Pour l’action par conjugaison, en isolant les orbites réduites à un point :
>
> \[ |G| = |Z(G)| + \sum_{i} [G : C(x_i)], \]
>
> la somme portant sur des représentants des classes de conjugaison non réduites à un point.

> [!TIP] **Théorème - Formule de Burnside**
>
> Si \(G\) et \(X\) sont finis, le nombre d’orbites est
>
> \[ \dfrac{1}{|G|}\sum_{g \in G} |\operatorname{Fix}(g)|, \qquad \operatorname{Fix}(g) = \{x \in X,\ g \cdot x = x\}. \]

## \(p\)-groupes

> [!TIP] **Définition**
>
> Soit \(p\) un nombre premier. Un **\(p\)-groupe** est un groupe fini dont l’ordre est une puissance de \(p\).

> [!TIP] **Théorème**
>
> - Si un \(p\)-groupe \(G\) agit sur un ensemble fini \(X\), le nombre de points fixes est congru à \(|X|\) modulo \(p\).
> - Le centre d’un \(p\)-groupe non trivial est **non trivial**.
> - Tout groupe d’ordre \(p^2\) est abélien, donc isomorphe à \({\mathbb{Z}/p^2\mathbb{Z}}\) ou à \({\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}}\).

{{% details title="Démonstration" closed="true" %}}
Une orbite non réduite à un point a pour cardinal un diviseur de \(|G|\) autre que \(1\), donc un multiple de \(p\). L’équation aux classes donne \({|X| \equiv |\{\text{points fixes}\}| \ [p]}\).

Pour l’action par conjugaison de \(G\) sur lui-même : \({|Z(G)| \equiv |G| \equiv 0 \ [p]}\). Comme \({e \in Z(G)}\), \({|Z(G)| \geq p}\).

Si \({|G| = p^2}\), alors \({|Z(G)| \in \{p, p^2\}}\). Si \({|Z(G)| = p}\), le quotient \(G/Z(G)\) est d’ordre \(p\), donc cyclique, ce qui entraîne \(G\) abélien (voir le chapitre précédent) et \({Z(G) = G}\) : contradiction. Donc \({Z(G) = G}\).
{{% /details %}}

> [!TIP] **Théorème de Cauchy**
>
> Si un nombre premier \(p\) divise l’ordre d’un groupe fini \(G\), alors \(G\) contient un élément d’ordre \(p\).

## Théorèmes de Sylow

> [!TIP] **Définition**
>
> Soit \(G\) un groupe d’ordre \({p^\alpha m}\) avec \(p\) premier, \({\alpha \geq 1}\) et \(p\) ne divisant pas \(m\). Un **\(p\)-sous-groupe de Sylow** (ou \(p\)-Sylow) de \(G\) est un sous-groupe d’ordre \(p^\alpha\).

> [!TIP] **Théorèmes de Sylow**
>
> Avec ces notations :
> 1. \(G\) possède au moins un \(p\)-Sylow, et tout \(p\)-sous-groupe de \(G\) est contenu dans un \(p\)-Sylow.
> 2. Les \(p\)-Sylow sont tous **conjugués** entre eux.
> 3. Leur nombre \(n_p\) vérifie
>
> \[ n_p \equiv 1 \ [p] \qquad \text{et} \qquad n_p \mid m. \]
>
> **Conséquence** : un \(p\)-Sylow est distingué dans \(G\) si et seulement si \({n_p = 1}\).

> [!NOTE] **Méthode - Montrer qu’un groupe d’ordre donné n’est pas simple**
>
> Un groupe est **simple** s’il n’a pas de sous-groupe distingué autre que \(\{e\}\) et lui-même. Pour montrer qu’un groupe d’ordre \(n\) n’est pas simple :
> 1. Décomposer \(n\) en facteurs premiers.
> 2. Pour chaque \(p\), lister les valeurs possibles de \(n_p\) (diviseurs de \(m\) congrus à \(1\) modulo \(p\)).
> 3. Si un \(n_p\) vaut forcément \(1\), le \(p\)-Sylow est distingué.
> 4. Sinon, compter les éléments : deux \(p\)-Sylow distincts d’ordre premier \(p\) ne se rencontrent qu’en \(e\), ce qui donne \({n_p(p - 1)}\) éléments d’ordre \(p\) ; un excès d’éléments force l’un des \(n_p\) à valoir \(1\).

{{% details title="Exemple" closed="true" %}}
**Groupes d’ordre 15.** \({15 = 3 \times 5}\). \(n_3\) divise \(5\) et \({n_3 \equiv 1 \ [3]}\) : \({n_3 = 1}\). \(n_5\) divise \(3\) et \({n_5 \equiv 1 \ [5]}\) : \({n_5 = 1}\). Le \(3\)-Sylow \(H\) et le \(5\)-Sylow \(K\) sont distingués, \({H \cap K = \{e\}}\) (ordres premiers entre eux). Pour \({h \in H}\), \({k \in K}\), le commutateur \({hkh^{-1}k^{-1}}\) appartient à \({H \cap K}\), donc \({hk = kh}\). Alors \({(h, k) \mapsto hk}\) est un morphisme injectif de \({H \times K}\) dans \(G\), bijectif par cardinalité : \({G \simeq \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z} \simeq \mathbb{Z}/15\mathbb{Z}}\). Tout groupe d’ordre \(15\) est cyclique.
{{% /details %}}

> [!NOTE] **Exercice résolu - Groupes d’ordre 56**
>
> Montrer qu’un groupe d’ordre \(56\) n’est pas simple.

{{% details title="Solution commentée" closed="true" %}}
\({56 = 2^3 \times 7}\).

**Nombre de \(7\)-Sylow.** \(n_7\) divise \(8\) et \({n_7 \equiv 1 \ [7]}\) : \({n_7 \in \{1, 8\}}\).

- Si \({n_7 = 1}\), le \(7\)-Sylow est distingué, d’ordre \(7\) : \(G\) n’est pas simple.
- Si \({n_7 = 8}\) : les \(7\)-Sylow sont d’ordre premier \(7\), donc deux d’entre eux distincts ne se rencontrent qu’en \(e\) (leur intersection est un sous-groupe strict d’un groupe d’ordre \(7\)). Chacun contient \(6\) éléments d’ordre \(7\) : cela fait \({8 \times 6 = 48}\) éléments d’ordre \(7\). Il reste \({56 - 48 = 8}\) éléments. Or un \(2\)-Sylow a \(8\) éléments, dont aucun n’est d’ordre \(7\) : il est formé exactement de ces \(8\) éléments restants. Il n’y a donc qu’un seul \(2\)-Sylow, \({n_2 = 1}\), et il est distingué.

Dans les deux cas, \(G\) a un sous-groupe distingué propre et non trivial : il n’est pas simple.
{{% /details %}}
