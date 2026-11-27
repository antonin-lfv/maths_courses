---
title: 'Divisibilité, PGCD, Bézout et Gauss'
weight: 1
cascade:
  type: docs
---

## Divisibilité et division euclidienne

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux entiers relatifs. On dit que \(b\) **divise** \(a\), noté \({b \mid a}\), s’il existe un entier \(k\) tel que \({a = bk}\). On dit aussi que \(a\) est un **multiple** de \(b\). L’ensemble des multiples de \(b\) est noté \(b\mathbb{Z}\).

> [!TIP] **Propriétés**
>
> - Si \({a \mid b}\) et \({b \mid c}\), alors \({a \mid c}\).
> - Si \({d \mid a}\) et \({d \mid b}\), alors \({d \mid au + bv}\) pour tous entiers \(u\), \(v\).
> - Si \({a \mid b}\) et \({b \neq 0}\), alors \({|a| \leq |b|}\).
> - \({a \mid b}\) et \({b \mid a}\) si et seulement si \({a = b}\) ou \({a = -b}\).

> [!TIP] **Théorème - Division euclidienne**
>
> Soient \({a \in \mathbb{Z}}\) et \({b \in \mathbb{N}^*}\). Il existe un unique couple \({(q, r) \in \mathbb{Z}^2}\) tel que
>
> \[ a = bq + r \qquad \text{et} \qquad 0 \leq r < b. \]
>
> \(q\) est le **quotient** et \(r\) le **reste** de la division euclidienne de \(a\) par \(b\).

{{% details title="Démonstration" closed="true" %}}
**Existence.** L’ensemble \({A = \{a - bk,\ k \in \mathbb{Z}\} \cap \mathbb{N}}\) est une partie non vide de \(\mathbb{N}\) (prendre \({k = -|a|}\) : \({a + b|a| \geq a + |a| \geq 0}\)). Elle a donc un plus petit élément \({r = a - bq}\). Si l’on avait \({r \geq b}\), alors \({r - b = a - b(q+1)}\) serait un élément de \(A\) strictement plus petit que \(r\) : c’est impossible. Donc \({0 \leq r < b}\).

**Unicité.** Si \({a = bq + r = bq' + r'}\) avec \({0 \leq r, r' < b}\), alors \({b(q - q') = r' - r}\) et \({|r' - r| < b}\). Donc \({|q - q'| < 1}\), puis \({q = q'}\) et \({r = r'}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Division de \(-47\) par \(6\) : \({-47 = 6 \times (-8) + 1}\), donc \({q = -8}\) et \({r = 1}\). Attention : \({-47 = 6 \times (-7) - 5}\) n’est pas la division euclidienne, car le reste doit être positif.
{{% /details %}}

## PGCD et algorithme d’Euclide

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux entiers non tous deux nuls. Le **PGCD** de \(a\) et \(b\), noté \(\operatorname{pgcd}(a, b)\) ou \({a \wedge b}\), est le plus grand entier qui divise à la fois \(a\) et \(b\). On convient que \({\operatorname{pgcd}(0, 0) = 0}\).
>
> \(a\) et \(b\) sont **premiers entre eux** si \({\operatorname{pgcd}(a, b) = 1}\).

> [!TIP] **Propriété - Lemme d’Euclide**
>
> Si \({a = bq + r}\), alors les diviseurs communs à \(a\) et \(b\) sont les diviseurs communs à \(b\) et \(r\). En particulier, \({\operatorname{pgcd}(a, b) = \operatorname{pgcd}(b, r)}\).

> [!NOTE] **Méthode - Algorithme d’Euclide**
>
> Pour \({a \geq b > 0}\), on enchaîne les divisions euclidiennes : \(a\) par \(b\) (reste \(r_1\)), puis \(b\) par \(r_1\) (reste \(r_2\)), puis \(r_1\) par \(r_2\), etc. Les restes forment une suite strictement décroissante d’entiers naturels : l’un d’eux est nul. Le PGCD est le **dernier reste non nul**.

{{% details title="Exemple" closed="true" %}}
Calcul de \(\operatorname{pgcd}(378, 120)\) :

\[
\begin{aligned}
378 &= 120 \times 3 + 18 \\
120 &= 18 \times 6 + 12 \\
18 &= 12 \times 1 + 6 \\
12 &= 6 \times 2 + 0
\end{aligned}
\]

Donc \({\operatorname{pgcd}(378, 120) = 6}\).
{{% /details %}}

> [!TIP] **Théorème - Relation de Bézout**
>
> Soient \(a\) et \(b\) deux entiers et \({d = \operatorname{pgcd}(a, b)}\). Il existe des entiers \(u\) et \(v\) tels que
>
> \[ au + bv = d. \]
>
> Par conséquent, les diviseurs communs à \(a\) et \(b\) sont exactement les diviseurs de \(d\), et \({a\mathbb{Z} + b\mathbb{Z} = d\mathbb{Z}}\).

{{% details title="Démonstration" closed="true" %}}
Si \({a = b = 0}\), c’est évident. Sinon, l’ensemble \({E = \{au + bv,\ (u, v) \in \mathbb{Z}^2\}}\) contient des entiers strictement positifs (\(|a|\) ou \(|b|\)). Soit \({m = au_0 + bv_0}\) le plus petit d’entre eux.

Divisons \(a\) par \(m\) : \({a = mq + r}\) avec \({0 \leq r < m}\). Alors \({r = a - mq = a(1 - u_0 q) + b(-v_0 q)}\) appartient à \(E\). Par minimalité de \(m\), \({r = 0}\) : \(m\) divise \(a\). De même, \(m\) divise \(b\). Donc \({m \leq d}\).

Par ailleurs, \(d\) divise \(a\) et \(b\), donc \(d\) divise \({au_0 + bv_0 = m}\), d’où \({d \leq m}\). Ainsi \({m = d}\).

Enfin, un diviseur commun à \(a\) et \(b\) divise \({au + bv = d}\) ; réciproquement, un diviseur de \(d\) divise \(a\) et \(b\).
{{% /details %}}

> [!TIP] **Théorème de Bézout**
>
> Deux entiers \(a\) et \(b\) sont premiers entre eux si et seulement s’il existe des entiers \(u\) et \(v\) tels que \({au + bv = 1}\).

> [!NOTE] **Méthode - Trouver des coefficients de Bézout**
>
> On « remonte » l’algorithme d’Euclide : on exprime le dernier reste non nul à l’aide des deux précédents, puis on remplace de proche en proche chaque reste par son expression.

{{% details title="Exemple" closed="true" %}}
Avec les divisions de l’exemple précédent :

\[
\begin{aligned}
6 &= 18 - 12 \\
&= 18 - (120 - 18 \times 6) = 18 \times 7 - 120 \\
&= (378 - 120 \times 3) \times 7 - 120 = 378 \times 7 - 120 \times 22.
\end{aligned}
\]

Donc \({378 \times 7 + 120 \times (-22) = 6}\). Vérification : \({2646 - 2640 = 6}\).
{{% /details %}}

## Théorème de Gauss et conséquences

> [!TIP] **Théorème de Gauss**
>
> Soient \(a\), \(b\), \(c\) trois entiers. Si \(a\) divise \(bc\) et si \(a\) est premier avec \(b\), alors \(a\) divise \(c\).

{{% details title="Démonstration" closed="true" %}}
Il existe \(u\), \(v\) entiers tels que \({au + bv = 1}\). En multipliant par \(c\) : \({acu + bcv = c}\). Or \(a\) divise \(acu\) et \(a\) divise \(bcv\) (car \({a \mid bc}\)). Donc \(a\) divise \(c\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Si \(a\) est premier avec \(b\) et avec \(c\), alors \(a\) est premier avec \(bc\).
> - Si \(a\) et \(b\) divisent \(c\) et sont premiers entre eux, alors \(ab\) divise \(c\).
> - Si \({d = \operatorname{pgcd}(a, b) \neq 0}\), alors \({a = da'}\) et \({b = db'}\) avec \(a'\) et \(b'\) premiers entre eux.
> - Tout rationnel s’écrit de manière unique sous **forme irréductible** \(\dfrac{p}{q}\) avec \({p \in \mathbb{Z}}\), \({q \in \mathbb{N}^*}\) et \({\operatorname{pgcd}(p, q) = 1}\).

> [!TIP] **Définition et propriété - PPCM**
>
> Pour \(a\) et \(b\) non nuls, le **PPCM** de \(a\) et \(b\) est le plus petit multiple commun strictement positif de \(a\) et \(b\). Les multiples communs à \(a\) et \(b\) sont les multiples de \(\operatorname{ppcm}(a, b)\), et
>
> \[ \operatorname{pgcd}(a, b) \times \operatorname{ppcm}(a, b) = |ab|. \]

## Équations diophantiennes \({ax + by = c}\)

> [!NOTE] **Méthode**
>
> Soient \(a\), \(b\) non nuls, \({d = \operatorname{pgcd}(a, b)}\). On cherche les couples d’entiers \((x, y)\) tels que \({ax + by = c}\).
> 1. Si \(d\) ne divise pas \(c\), il n’y a pas de solution.
> 2. Sinon, on divise par \(d\) pour se ramener à \({a'x + b'y = c'}\) avec \(a'\) et \(b'\) premiers entre eux.
> 3. On trouve une solution particulière \((x_0, y_0)\) (coefficients de Bézout multipliés par \(c'\)).
> 4. Par différence, \({a'(x - x_0) = -b'(y - y_0)}\) ; le théorème de Gauss donne \({x = x_0 + b'k}\) et \({y = y_0 - a'k}\), avec \({k \in \mathbb{Z}}\).
> 5. On vérifie que ces couples conviennent.

> [!NOTE] **Exercice résolu - Une équation diophantienne**
>
> Résoudre dans \(\mathbb{Z}^2\) l’équation \({(E) : 21x + 15y = 12}\).

{{% details title="Solution commentée" closed="true" %}}
\({\operatorname{pgcd}(21, 15) = 3}\) et \(3\) divise \(12\) : l’équation a des solutions. En divisant par \(3\), \((E)\) équivaut à \({7x + 5y = 4}\), avec \(7\) et \(5\) premiers entre eux.

**Solution particulière.** \({7 \times (-2) + 5 \times 3 = 1}\), donc en multipliant par \(4\) : \({7 \times (-8) + 5 \times 12 = 4}\). Le couple \({(x_0, y_0) = (-8, 12)}\) convient.

**Solution générale.** Soit \((x, y)\) une solution. Par différence :

\[
7(x + 8) = -5(y - 12).
\]

Donc \(5\) divise \({7(x + 8)}\) ; comme \(5\) est premier avec \(7\), le théorème de Gauss donne \({5 \mid x + 8}\) : il existe \({k \in \mathbb{Z}}\) tel que \({x = -8 + 5k}\). En reportant, \({7 \times 5k = -5(y - 12)}\), donc \({y = 12 - 7k}\).

**Réciproque.** Pour tout \({k \in \mathbb{Z}}\) : \({7(-8 + 5k) + 5(12 - 7k) = -56 + 60 = 4}\).

L’ensemble des solutions est \({\{(-8 + 5k,\ 12 - 7k),\ k \in \mathbb{Z}\}}\).
{{% /details %}}
