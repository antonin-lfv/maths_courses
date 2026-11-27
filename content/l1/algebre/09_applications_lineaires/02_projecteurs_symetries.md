---
title: 'Projecteurs et symétries'
weight: 2
cascade:
  type: docs
---

Dans cette page, \(F\) et \(G\) sont deux sous-espaces supplémentaires de \(E\) : tout vecteur \(u\) de \(E\) s’écrit de manière unique \({u = u_F + u_G}\) avec \({u_F \in F}\) et \({u_G \in G}\).

## Projecteurs

> [!TIP] **Définition**
>
> La **projection sur \(F\) parallèlement à \(G\)** est l’application \({p : E \to E}\) définie par \({p(u) = u_F}\).

> [!TIP] **Propriétés**
>
> La projection \(p\) sur \(F\) parallèlement à \(G\) est un endomorphisme de \(E\) qui vérifie :
> - \({p \circ p = p}\) ;
> - \({\operatorname{Im} p = F}\) et \({\ker p = G}\) ;
> - \({F = \ker(p - \mathrm{id}_E)}\) : les vecteurs de \(F\) sont les vecteurs **invariants** par \(p\).
>
> De plus, \({q = \mathrm{id}_E - p}\) est la projection sur \(G\) parallèlement à \(F\).

> [!TIP] **Théorème - Caractérisation**
>
> Un endomorphisme \(p\) de \(E\) tel que \({p \circ p = p}\) est appelé **projecteur**. Pour un tel endomorphisme :
>
> \[ E = \ker p \oplus \operatorname{Im} p, \]
>
> et \(p\) est la projection sur \(\operatorname{Im} p\) parallèlement à \(\ker p\).

{{% details title="Démonstration" closed="true" %}}
On remarque d’abord que si \({v = p(w) \in \operatorname{Im} p}\), alors \({p(v) = p(p(w)) = p(w) = v}\).

**Intersection.** Si \({v \in \ker p \cap \operatorname{Im} p}\), alors \({v = p(v) = 0_E}\).

**Somme.** Pour tout \({u \in E}\), on écrit \({u = (u - p(u)) + p(u)}\). On a \({p(u) \in \operatorname{Im} p}\) et \({p(u - p(u)) = p(u) - p(p(u)) = 0_E}\), donc \({u - p(u) \in \ker p}\).

Ainsi \({E = \ker p \oplus \operatorname{Im} p}\), et la composante de \(u\) sur \(\operatorname{Im} p\) est \(p(u)\) : \(p\) est bien la projection annoncée.
{{% /details %}}

## Symétries

> [!TIP] **Définition**
>
> La **symétrie par rapport à \(F\) parallèlement à \(G\)** est l’application \({s : E \to E}\) définie par \({s(u) = u_F - u_G}\).

> [!TIP] **Propriétés**
>
> La symétrie \(s\) par rapport à \(F\) parallèlement à \(G\) est un automorphisme de \(E\) qui vérifie :
> - \({s \circ s = \mathrm{id}_E}\), donc \({s^{-1} = s}\) ;
> - \({F = \ker(s - \mathrm{id}_E)}\) (vecteurs invariants) et \({G = \ker(s + \mathrm{id}_E)}\) (vecteurs changés en leur opposé) ;
> - \({s = 2p - \mathrm{id}_E}\), où \(p\) est la projection sur \(F\) parallèlement à \(G\).

> [!TIP] **Théorème - Caractérisation**
>
> Si \(s\) est un endomorphisme de \(E\) tel que \({s \circ s = \mathrm{id}_E}\), alors
>
> \[ E = \ker(s - \mathrm{id}_E) \oplus \ker(s + \mathrm{id}_E), \]
>
> et \(s\) est la symétrie par rapport à \({\ker(s - \mathrm{id}_E)}\) parallèlement à \({\ker(s + \mathrm{id}_E)}\).

{{% details title="Démonstration" closed="true" %}}
On pose \({p = \dfrac{1}{2}(s + \mathrm{id}_E)}\). Alors

\[
p \circ p = \dfrac{1}{4}\left(s \circ s + 2s + \mathrm{id}_E\right) = \dfrac{1}{4}\left(2\,\mathrm{id}_E + 2s\right) = p.
\]

Donc \(p\) est un projecteur : \({E = \ker p \oplus \operatorname{Im} p}\), avec \({\ker p = \ker(s + \mathrm{id}_E)}\) et \({\operatorname{Im} p = \ker(p - \mathrm{id}_E) = \ker(s - \mathrm{id}_E)}\). Enfin \({s = 2p - \mathrm{id}_E}\).
{{% /details %}}

> [!NOTE] **Méthode - Reconnaître et décrire un projecteur ou une symétrie**
>
> 1. Vérifier \({p \circ p = p}\) (ou \({s \circ s = \mathrm{id}_E}\)), en général par un calcul matriciel : \({A^2 = A}\) (ou \({A^2 = I_n}\)).
> 2. Déterminer les éléments caractéristiques : pour un projecteur, \(\operatorname{Im} p\) (ou \({\ker(p - \mathrm{id})}\)) et \(\ker p\) ; pour une symétrie, \({\ker(s - \mathrm{id})}\) et \({\ker(s + \mathrm{id})}\).

> [!NOTE] **Exercice résolu - Une projection de \(\mathbb{R}^3\)**
>
> Dans \(\mathbb{R}^3\), soit \(P\) le plan d’équation \({x + y + z = 0}\) et \(D\) la droite engendrée par \({d = (1, 2, 0)}\).
>
> 1. Montrer que \({\mathbb{R}^3 = P \oplus D}\).
> 2. Déterminer l’expression de la projection \(p\) sur \(P\) parallèlement à \(D\), puis celle de la symétrie \(s\) par rapport à \(P\) parallèlement à \(D\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(P\) est un hyperplan de \(\mathbb{R}^3\), de dimension \(2\), et \(D\) est de dimension \(1\). Le vecteur \(d\) n’est pas dans \(P\) car \({1 + 2 + 0 = 3 \neq 0}\), donc \({P \cap D = \{0\}}\). Comme \({\dim P + \dim D = 3}\), on a \({\mathbb{R}^3 = P \oplus D}\).

**2.** Soit \({u = (x, y, z)}\). On cherche \(\lambda\) tel que \({u - \lambda d \in P}\) ; on aura alors \({u = (u - \lambda d) + \lambda d}\), donc \({p(u) = u - \lambda d}\).

\[
u - \lambda d = (x - \lambda,\ y - 2\lambda,\ z) \in P \iff x + y + z - 3\lambda = 0 \iff \lambda = \dfrac{x + y + z}{3}.
\]

Donc

\[
p(x, y, z) = \left(\dfrac{2x - y - z}{3},\ \dfrac{-2x + y - 2z}{3},\ z\right).
\]

Vérifications : la somme des coordonnées vaut \({\dfrac{2x - y - z - 2x + y - 2z + 3z}{3} = 0}\), donc \({p(u) \in P}\) ; et \({p(1, 2, 0) = (0, 0, 0)}\).

Pour la symétrie, \({s(u) = 2p(u) - u = u - 2\lambda d}\) :

\[
s(x, y, z) = \left(\dfrac{x - 2y - 2z}{3},\ \dfrac{-4x - y - 4z}{3},\ z\right).
\]

Vérification : \({s(1, 2, 0) = \left(\dfrac{1 - 4}{3},\ \dfrac{-4 - 2}{3},\ 0\right) = (-1, -2, 0) = -d}\).
{{% /details %}}
