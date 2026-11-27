---
title: 'Nombres premiers et congruences'
weight: 2
cascade:
  type: docs
---

## Nombres premiers

> [!TIP] **Définition**
>
> Un entier \({p \geq 2}\) est **premier** si ses seuls diviseurs positifs sont \(1\) et \(p\). Un entier \({n \geq 2}\) non premier est dit **composé**.

> [!TIP] **Propriétés**
>
> - Tout entier \({n \geq 2}\) admet au moins un diviseur premier.
> - Si \({n \geq 2}\) est composé, il admet un diviseur premier \(p\) tel que \({p \leq \sqrt{n}}\).
> - Il existe une infinité de nombres premiers.
> - Un nombre premier \(p\) est premier avec tout entier qu’il ne divise pas.
> - **Lemme d’Euclide** : si un nombre premier \(p\) divise un produit \(ab\), alors \(p\) divise \(a\) ou \(p\) divise \(b\).

{{% details title="Démonstration" closed="true" %}}
- Le plus petit diviseur \({p \geq 2}\) de \(n\) est premier : un diviseur \({d \geq 2}\) de \(p\) divise \(n\), donc \({d \geq p}\), donc \({d = p}\).
- Si \(n\) est composé, \({n = ab}\) avec \({2 \leq a \leq b}\). Alors \({a^2 \leq ab = n}\), donc \({a \leq \sqrt{n}}\), et un diviseur premier de \(a\) convient.
- Supposons par l’absurde qu’il n’y ait qu’un nombre fini de nombres premiers \({p_1, \dots, p_r}\). L’entier \({N = p_1 p_2 \cdots p_r + 1}\) admet un diviseur premier, qui est l’un des \(p_i\). Alors \(p_i\) divise \({N - p_1 \cdots p_r = 1}\) : contradiction.
- Le PGCD de \(p\) et \(a\) est un diviseur positif de \(p\), donc \(1\) ou \(p\). Si \(p\) ne divise pas \(a\), c’est \(1\).
- Si \(p\) ne divise pas \(a\), il est premier avec \(a\), et le théorème de Gauss donne \({p \mid b}\).
{{% /details %}}

> [!TIP] **Théorème fondamental de l’arithmétique**
>
> Tout entier \({n \geq 2}\) s’écrit comme produit de nombres premiers, et cette écriture est unique à l’ordre des facteurs près :
>
> \[ n = p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_k^{\alpha_k}, \]
>
> avec \({p_1 < p_2 < \dots < p_k}\) premiers et \({\alpha_i \geq 1}\). L’exposant de \(p\) dans cette décomposition est la **valuation \(p\)-adique** de \(n\), notée \(v_p(n)\) (elle vaut \(0\) si \(p\) ne divise pas \(n\)).

{{% details title="Démonstration" closed="true" %}}
**Existence**, par récurrence forte sur \(n\).
- **Initialisation.** \({n = 2}\) est premier.
- **Hérédité.** Soit \({n \geq 2}\) tel que tout entier de \(2\) à \(n\) soit produit de nombres premiers. Si \({n + 1}\) est premier, c’est terminé. Sinon, \({n + 1 = ab}\) avec \({2 \leq a, b \leq n}\), et \(a\) et \(b\) sont des produits de nombres premiers, donc \({n+1}\) aussi.
- **Conclusion.** Tout entier \({n \geq 2}\) est produit de nombres premiers.

**Unicité.** Si \({p_1 \cdots p_r = q_1 \cdots q_s}\) avec tous les facteurs premiers, alors \(p_1\) divise \({q_1 \cdots q_s}\), donc l’un des \(q_j\) d’après le lemme d’Euclide, et \({p_1 = q_j}\) puisque \(q_j\) est premier. On simplifie et on recommence : les deux listes sont les mêmes à l’ordre près.
{{% /details %}}

> [!TIP] **Propriétés**
>
> Soient \(a\) et \(b\) deux entiers naturels non nuls.
> - \({a \mid b}\) si et seulement si \({v_p(a) \leq v_p(b)}\) pour tout nombre premier \(p\).
> - \({v_p(ab) = v_p(a) + v_p(b)}\).
> - \({v_p(\operatorname{pgcd}(a, b)) = \min(v_p(a), v_p(b))}\) et \({v_p(\operatorname{ppcm}(a, b)) = \max(v_p(a), v_p(b))}\).

{{% details title="Exemple" closed="true" %}}
\({360 = 2^3 \times 3^2 \times 5}\) et \({756 = 2^2 \times 3^3 \times 7}\). Donc

\[
\operatorname{pgcd}(360, 756) = 2^2 \times 3^2 = 36 \qquad \text{et} \qquad \operatorname{ppcm}(360, 756) = 2^3 \times 3^3 \times 5 \times 7 = 7560.
\]

Vérification : \({36 \times 7560 = 272\,160 = 360 \times 756}\).

Le nombre de diviseurs positifs de \(360\) est \({(3+1)(2+1)(1+1) = 24}\) : un diviseur s’écrit \({2^a 3^b 5^c}\) avec \({0 \leq a \leq 3}\), \({0 \leq b \leq 2}\), \({0 \leq c \leq 1}\).
{{% /details %}}

## Congruences

> [!TIP] **Définition**
>
> Soit \(n\) un entier, \({n \geq 1}\). Deux entiers \(a\) et \(b\) sont **congrus modulo \(n\)**, noté \({a \equiv b \ [n]}\), si \(n\) divise \({a - b}\). Cela revient à dire que \(a\) et \(b\) ont le même reste dans la division euclidienne par \(n\).

> [!TIP] **Propriétés**
>
> La congruence modulo \(n\) est une relation d’équivalence. Si \({a \equiv b \ [n]}\) et \({c \equiv d \ [n]}\), alors :
> - \({a + c \equiv b + d \ [n]}\) ;
> - \({ac \equiv bd \ [n]}\) ;
> - \({a^k \equiv b^k \ [n]}\) pour tout entier naturel \(k\).

> [!IMPORTANT] **Remarque**
>
> On ne peut pas simplifier une congruence comme une égalité : \({2 \times 4 \equiv 2 \times 1 \ [6]}\), mais \({4 \not\equiv 1 \ [6]}\). La simplification par \(c\) est permise quand \(c\) est premier avec \(n\) : si \({ac \equiv bc \ [n]}\) et \({\operatorname{pgcd}(c, n) = 1}\), alors \(n\) divise \({(a - b)c}\), donc \({a - b}\) d’après le théorème de Gauss.

> [!TIP] **Propriété - Inverse modulo \(n\)**
>
> Un entier \(a\) admet un **inverse modulo \(n\)** (un entier \(u\) tel que \({au \equiv 1 \ [n]}\)) si et seulement si \(a\) est premier avec \(n\). On obtient \(u\) par une relation de Bézout \({au + nv = 1}\).

> [!TIP] **Petit théorème de Fermat**
>
> Soit \(p\) un nombre premier. Pour tout entier \(a\), \({a^p \equiv a \ [p]}\). Si de plus \(p\) ne divise pas \(a\), alors \({a^{p-1} \equiv 1 \ [p]}\).

{{% details title="Démonstration" closed="true" %}}
Pour \({1 \leq k \leq p-1}\), l’égalité \({k\dbinom{p}{k} = p\dbinom{p-1}{k-1}}\) montre que \(p\) divise \({k\dbinom{p}{k}}\). Comme \(p\) est premier avec \(k\), il divise \(\dbinom{p}{k}\).

On montre alors \({a^p \equiv a \ [p]}\) par récurrence sur \({a \in \mathbb{N}}\).
- **Initialisation.** \({0^p = 0}\).
- **Hérédité.** Si \({a^p \equiv a \ [p]}\), alors d’après la formule du binôme, \({(a+1)^p = a^p + \displaystyle\sum_{k=1}^{p-1} \dbinom{p}{k}a^k + 1 \equiv a^p + 1 \equiv a + 1 \ [p]}\).
- **Conclusion.** \({a^p \equiv a \ [p]}\) pour tout entier naturel \(a\).

Pour \(a\) négatif, \(a\) est congru modulo \(p\) à un entier naturel, et le résultat s’étend. Enfin, si \(p\) ne divise pas \(a\), \(p\) divise \({a(a^{p-1} - 1)}\) et est premier avec \(a\), donc \(p\) divise \({a^{p-1} - 1}\).
{{% /details %}}

> [!NOTE] **Méthode - Calculer un reste de puissance**
>
> Pour trouver le reste de \(a^N\) modulo \(n\), on cherche un exposant \(k\) tel que \({a^k \equiv 1 \ [n]}\) (en calculant les premières puissances, ou avec le petit théorème de Fermat), puis on divise \(N\) par \(k\).

> [!NOTE] **Exercice résolu - Puissances et système de congruences**
>
> 1. Déterminer le reste de la division euclidienne de \(5^{2026}\) par \(13\).
> 2. Résoudre dans \(\mathbb{Z}\) le système \({x \equiv 2 \ [7]}\) et \({x \equiv 5 \ [9]}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Modulo \(13\) : \({5^2 = 25 \equiv -1}\), donc \({5^4 \equiv 1}\). Or \({2026 = 4 \times 506 + 2}\), donc

\[
5^{2026} = \left(5^4\right)^{506} \times 5^2 \equiv 1 \times (-1) \equiv 12 \ [13].
\]

Le reste est \(12\).

**2.** On cherche d’abord une solution particulière. \({x \equiv 5 \ [9]}\) s’écrit \({x = 5 + 9k}\). On veut \({5 + 9k \equiv 2 \ [7]}\), soit \({2k \equiv -3 \equiv 4 \ [7]}\). Comme \(2\) est premier avec \(7\), on simplifie : \({k \equiv 2 \ [7]}\). Avec \({k = 2}\), on obtient \({x_0 = 23}\). Vérification : \({23 = 3 \times 7 + 2}\) et \({23 = 2 \times 9 + 5}\).

Soit maintenant \(x\) un entier. Il est solution si et seulement si \({x - 23 \equiv 0 \ [7]}\) et \({x - 23 \equiv 0 \ [9]}\), c’est-à-dire si \(7\) et \(9\) divisent \({x - 23}\). Comme \(7\) et \(9\) sont premiers entre eux, cela équivaut à : \(63\) divise \({x - 23}\).

Les solutions sont les entiers \({x = 23 + 63k}\), \({k \in \mathbb{Z}}\).
{{% /details %}}
