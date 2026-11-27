---
title: 'Sous-groupes distingués et groupes quotients'
weight: 1
cascade:
  type: docs
---

On suppose connues les notions de groupe, de sous-groupe, de morphisme et d’ordre d’un élément. \(G\) désigne un groupe noté multiplicativement, de neutre \(e\).

## Classes modulo un sous-groupe

> [!TIP] **Définition**
>
> Soit \(H\) un sous-groupe de \(G\). La **classe à gauche** de \({x \in G}\) est \({xH = \{xh,\ h \in H\}}\) ; sa **classe à droite** est \({Hx}\). L’ensemble des classes à gauche est noté \(G/H\), et son cardinal, s’il est fini, est l’**indice** de \(H\) dans \(G\), noté \({[G : H]}\).

> [!TIP] **Propriétés**
>
> - \({xH = yH \iff x^{-1}y \in H}\). Les classes à gauche sont les classes de la relation d’équivalence \({x \sim y \iff x^{-1}y \in H}\) : elles forment une partition de \(G\).
> - Chaque classe \(xH\) est en bijection avec \(H\) par \({h \mapsto xh}\).
> - **Théorème de Lagrange** : si \(G\) est fini, \({|G| = [G : H] \times |H|}\).

## Sous-groupes distingués

> [!TIP] **Définition**
>
> Un sous-groupe \(H\) de \(G\) est **distingué** (ou normal), noté \({H \lhd G}\), si
>
> \[ \forall g \in G,\ \forall h \in H, \quad ghg^{-1} \in H. \]
>
> Cela équivaut à \({gHg^{-1} = H}\) pour tout \(g\), ou encore à \({gH = Hg}\) pour tout \(g\) : classes à gauche et à droite coïncident.

> [!TIP] **Propriétés**
>
> - Dans un groupe abélien, tout sous-groupe est distingué.
> - Le noyau d’un morphisme de groupes est distingué.
> - Tout sous-groupe d’indice \(2\) est distingué.
> - Le **centre** \({Z(G) = \{z \in G,\ \forall g \in G,\ zg = gz\}}\) est un sous-groupe distingué.
> - L’image réciproque d’un sous-groupe distingué par un morphisme est distinguée.

{{% details title="Démonstration" closed="true" %}}
**Noyau.** Si \({h \in \ker f}\) et \({g \in G}\), alors \({f(ghg^{-1}) = f(g)e'f(g)^{-1} = e'}\).

**Indice 2.** Si \({[G : H] = 2}\), les deux classes à gauche sont \(H\) et \({G \setminus H}\) ; de même pour les classes à droite. Pour \({g \in H}\), \({gH = H = Hg}\). Pour \({g \notin H}\), \({gH = G \setminus H = Hg}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
- \({\mathrm{SL}_n(\mathbb{K}) \lhd \mathrm{GL}_n(\mathbb{K})}\), comme noyau du déterminant.
- \({\mathfrak{A}_n \lhd \mathfrak{S}_n}\), comme noyau de la signature (ou comme sous-groupe d’indice \(2\)).
- Dans \(\mathfrak{S}_3\), le sous-groupe \({H = \{\mathrm{id}, (1\ 2)\}}\) n’est pas distingué : \({(1\ 3)(1\ 2)(1\ 3)^{-1} = (2\ 3) \notin H}\).
{{% /details %}}

## Groupe quotient

> [!TIP] **Théorème et définition**
>
> Soit \(H\) un sous-groupe **distingué** de \(G\). La loi
>
> \[ (xH)(yH) = (xy)H \]
>
> est bien définie sur \(G/H\) et en fait un groupe, le **groupe quotient** de \(G\) par \(H\). Son neutre est \({H = eH}\), et \({(xH)^{-1} = x^{-1}H}\). La **surjection canonique** \({\pi : G \to G/H}\), \({x \mapsto xH}\), est un morphisme surjectif de noyau \(H\).
>
> Si \(G\) est fini, \({|G/H| = \dfrac{|G|}{|H|}}\).

{{% details title="Démonstration" closed="true" %}}
Il faut vérifier que \(xyH\) ne dépend pas des représentants. Si \({x' = xh_1}\) et \({y' = yh_2}\) avec \({h_1, h_2 \in H}\), alors

\[
x'y' = xh_1yh_2 = xy\,(y^{-1}h_1y)\,h_2,
\]

et \({y^{-1}h_1y \in H}\) car \(H\) est distingué. Donc \({x'y'H = xyH}\). Les axiomes de groupe se transportent alors de \(G\) à \(G/H\).
{{% /details %}}

Les sous-groupes distingués sont donc exactement les noyaux de morphismes.

> [!TIP] **Théorème - Propriété universelle du quotient**
>
> Soit \({f : G \to G'}\) un morphisme et \({H \lhd G}\). Il existe un morphisme \({\bar{f} : G/H \to G'}\) tel que \({f = \bar{f} \circ \pi}\) si et seulement si \({H \subset \ker f}\). Il est alors unique, défini par \({\bar{f}(xH) = f(x)}\).

> [!TIP] **Premier théorème d’isomorphisme**
>
> Pour tout morphisme de groupes \({f : G \to G'}\), l’application \({x\ker f \mapsto f(x)}\) est un isomorphisme
>
> \[ G/\ker f \simeq \operatorname{Im} f. \]
>
> En particulier, si \(G\) est fini : \({|G| = |\ker f| \times |\operatorname{Im} f|}\).

{{% details title="Exemple" closed="true" %}}
- \({\theta \mapsto e^{i\theta}}\) : \({\mathbb{R}/2\pi\mathbb{Z} \simeq \mathbb{U}}\).
- \(\det\) : \({\mathrm{GL}_n(\mathbb{K})/\mathrm{SL}_n(\mathbb{K}) \simeq \mathbb{K}^*}\).
- Signature : \({\mathfrak{S}_n/\mathfrak{A}_n \simeq \{-1, 1\}}\) pour \({n \geq 2}\).
- \({z \mapsto |z|}\) : \({\mathbb{C}^*/\mathbb{U} \simeq \mathbb{R}_+^*}\).
{{% /details %}}

> [!TIP] **Théorème de correspondance**
>
> Soit \({H \lhd G}\). L’application \({K \mapsto K/H}\) est une bijection entre les sous-groupes de \(G\) contenant \(H\) et les sous-groupes de \(G/H\). Elle conserve le caractère distingué, et si \({H \subset K}\) avec \({K \lhd G}\) :
>
> \[ (G/H)/(K/H) \simeq G/K. \]

## Groupes cycliques

> [!TIP] **Théorème**
>
> - Tout groupe monogène infini est isomorphe à \(\mathbb{Z}\) ; tout groupe cyclique d’ordre \(n\) est isomorphe à \(\mathbb{Z}/n\mathbb{Z}\).
> - Tout sous-groupe et tout quotient d’un groupe cyclique est cyclique.
> - Pour chaque diviseur \(d\) de \(n\), \(\mathbb{Z}/n\mathbb{Z}\) possède un **unique** sous-groupe d’ordre \(d\), engendré par la classe de \(\dfrac{n}{d}\).
> - La classe de \(k\) engendre \(\mathbb{Z}/n\mathbb{Z}\) si et seulement si \({\operatorname{pgcd}(k, n) = 1}\). Le nombre de générateurs est \(\varphi(n)\), l’**indicatrice d’Euler**. Plus précisément, la classe de \(k\) est d’ordre \(\dfrac{n}{\operatorname{pgcd}(k, n)}\).

> [!TIP] **Théorème chinois**
>
> Si \(m\) et \(n\) sont premiers entre eux, l’application \({k \mapsto (k \bmod m,\ k \bmod n)}\) induit un isomorphisme
>
> \[ \mathbb{Z}/mn\mathbb{Z} \simeq \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}. \]
>
> Par conséquent \({\varphi(mn) = \varphi(m)\varphi(n)}\), et pour \({n = \prod p_i^{\alpha_i}}\) : \({\varphi(n) = n\displaystyle\prod_i \left(1 - \dfrac{1}{p_i}\right)}\).

{{% details title="Démonstration" closed="true" %}}
Le morphisme \({\mathbb{Z} \to \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}}\) a pour noyau l’ensemble des entiers multiples de \(m\) et de \(n\), c’est-à-dire \(mn\mathbb{Z}\) puisque \(m\) et \(n\) sont premiers entre eux. Par le premier théorème d’isomorphisme, \(\mathbb{Z}/mn\mathbb{Z}\) s’injecte dans le produit ; les deux groupes ayant \(mn\) éléments, c’est un isomorphisme.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’hypothèse est indispensable : \({\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}}\) n’est pas isomorphe à \(\mathbb{Z}/4\mathbb{Z}\), car tous ses éléments non nuls sont d’ordre \(2\).

> [!TIP] **Théorème - Structure des groupes abéliens finis (admis)**
>
> Tout groupe abélien fini est isomorphe à un produit \({\mathbb{Z}/d_1\mathbb{Z} \times \dots \times \mathbb{Z}/d_r\mathbb{Z}}\) avec \({d_1 \mid d_2 \mid \dots \mid d_r}\) et \({d_1 \geq 2}\), et cette suite d’entiers est unique.

> [!NOTE] **Exercice résolu - Groupes d’ordre 4 et quotient par le centre**
>
> 1. Montrer que tout groupe d’ordre \(4\) est isomorphe à \(\mathbb{Z}/4\mathbb{Z}\) ou à \({\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}}\).
> 2. Soit \(G\) un groupe tel que \(G/Z(G)\) soit cyclique. Montrer que \(G\) est abélien.

{{% details title="Solution commentée" closed="true" %}}
**1.** Soit \(G\) d’ordre \(4\). D’après le théorème de Lagrange, l’ordre de chaque élément divise \(4\).

- S’il existe un élément d’ordre \(4\), il engendre \(G\), qui est cyclique : \({G \simeq \mathbb{Z}/4\mathbb{Z}}\).
- Sinon, tout élément \({x \neq e}\) est d’ordre \(2\) : \({x^2 = e}\), soit \({x = x^{-1}}\). Alors \(G\) est abélien : \({xy = (xy)^{-1} = y^{-1}x^{-1} = yx}\). Soient \(a\) et \(b\) deux éléments distincts, différents de \(e\). Le produit \(ab\) est différent de \(e\) (sinon \({b = a^{-1} = a}\)), de \(a\) et de \(b\) (sinon \({b = e}\) ou \({a = e}\)) : \({G = \{e, a, b, ab\}}\). L’application \({(i, j) \mapsto a^ib^j}\) est alors un isomorphisme de \({\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}}\) sur \(G\) : c’est un morphisme car \(G\) est abélien et \({a^2 = b^2 = e}\), et il est bijectif.

**2.** Notons \({Z = Z(G)}\) et soit \(gZ\) un générateur de \(G/Z\). Tout élément de \(G\) appartient à une classe \({(gZ)^k = g^kZ}\), donc s’écrit \({g^kz}\) avec \({k \in \mathbb{Z}}\) et \({z \in Z}\). Soient \({x = g^kz}\) et \({y = g^\ell z'}\). Comme \(z\) et \(z'\) commutent avec tout élément :

\[
xy = g^kzg^\ell z' = g^{k + \ell}zz' = g^\ell z'g^kz = yx.
\]

Donc \(G\) est abélien (et alors \({Z = G}\), le quotient est trivial).

Conséquence : pour un groupe non abélien, \(G/Z(G)\) n’est jamais cyclique ; en particulier l’indice du centre n’est jamais un nombre premier.
{{% /details %}}
