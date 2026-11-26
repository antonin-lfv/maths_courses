---
title: 'Techniques opératoires'
weight: 2
cascade:
  type: docs
---

## Nombres réels, nombres imaginaires purs

> [!TIP] **Définition**
>
> Soit \(z\) un nombre complexe.
> - Si \(\mathrm{Im}(z) = 0\), alors \(z\) est un **réel**.
> - Si \(\mathrm{Re}(z) = 0\), on dit que \(z\) est un **imaginaire pur**.

> [!TIP] **Propriétés**
>
> Pour tout nombre complexe \(z = x + iy\) (\(x\), \(y\) réels) :
> - \(z + \overline{z} = 2\,\mathrm{Re}(z)\) et \(z - \overline{z} = 2i\,\mathrm{Im}(z)\) ;
> - \(z\overline{z} = x^2 + y^2\), qui est un réel positif ;
> - \(z\) est réel si et seulement si \(\overline{z} = z\) ;
> - \(z\) est imaginaire pur si et seulement si \(\overline{z} = -z\).

{{% details title="Démonstration" closed="true" %}}
- \(z + \overline{z} = (x + iy) + (x - iy) = 2x\) et \(z - \overline{z} = 2iy\).
- \(z\overline{z} = (x + iy)(x - iy) = x^2 - (iy)^2 = x^2 + y^2\).
- \(\overline{z} = z \iff z - \overline{z} = 0 \iff 2iy = 0 \iff y = 0\).
- \(\overline{z} = -z \iff z + \overline{z} = 0 \iff 2x = 0 \iff x = 0\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le nombre \(0\) est à la fois réel et imaginaire pur.

## La formule du binôme de Newton

> [!TIP] **Propriété (formule du binôme de Newton)**
>
> Pour tous nombres complexes \(a\) et \(b\) et tout entier naturel \(n\) :
> \[
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}.
\]

> [!IMPORTANT] **Remarque**
>
> Les coefficients \(\binom{n}{k}\) sont les coefficients binomiaux ; on les obtient rapidement avec le triangle de Pascal (\(1\,;\,4\,;\,6\,;\,4\,;\,1\) pour \(n = 4\), par exemple). Pour \(n = 2\), on retrouve \((a + b)^2 = a^2 + 2ab + b^2\).

{{% details title="Démonstration" closed="true" %}}
On note \(P(n)\) : « \((a + b)^n = \sum\limits_{k=0}^{n} \binom{n}{k} a^k b^{n-k}\) ».

- **Initialisation.** Pour \(n = 0\) : \((a + b)^0 = 1\) et \(\sum\limits_{k=0}^{0} \binom{0}{k} a^k b^{-k} = \binom{0}{0} a^0 b^0 = 1\). \(P(0)\) est vraie.
- **Hérédité.** Supposons \(P(n)\) vraie pour un entier \(n \geq 0\). Alors
\[
(a + b)^{n+1} = (a + b)(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{k+1} b^{n-k} + \sum_{k=0}^{n} \binom{n}{k} a^k b^{n+1-k}.
\]
Dans la première somme, on pose \(j = k + 1\) : elle vaut \(\sum\limits_{j=1}^{n+1} \binom{n}{j-1} a^{j} b^{n+1-j}\). On isole le terme \(j = n + 1\) de la première somme (égal à \(a^{n+1}\)) et le terme \(k = 0\) de la seconde (égal à \(b^{n+1}\)) :
\[
(a + b)^{n+1} = a^{n+1} + \sum_{k=1}^{n} \left[\binom{n}{k-1} + \binom{n}{k}\right] a^k b^{n+1-k} + b^{n+1}.
\]
D’après la relation de Pascal, \(\binom{n}{k-1} + \binom{n}{k} = \binom{n+1}{k}\) ; de plus \(\binom{n+1}{n+1} = \binom{n+1}{0} = 1\). Donc
\[
(a + b)^{n+1} = \sum_{k=0}^{n+1} \binom{n+1}{k} a^k b^{n+1-k},
\]
c’est-à-dire que \(P(n + 1)\) est vraie.
- **Conclusion.** Pour tout entier naturel \(n\), \(P(n)\) est vraie.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Avec \(a = -i\), \(b = 2\) et les coefficients \(1\,;\,4\,;\,6\,;\,4\,;\,1\) :
\[
(2 - i)^4 = 2^4 + 4 \times 2^3 \times (-i) + 6 \times 2^2 \times (-i)^2 + 4 \times 2 \times (-i)^3 + (-i)^4.
\]
Or \((-i)^2 = -1\), \((-i)^3 = i\) et \((-i)^4 = 1\), donc \((2 - i)^4 = 16 - 32i - 24 + 8i + 1 = -7 - 24i\).

Vérification : \((2 - i)^2 = 3 - 4i\), puis \((3 - 4i)^2 = 9 - 24i - 16 = -7 - 24i\).
{{% /details %}}

## Équations dans \(\mathbb{C}\)

> [!TIP] **Propriété**
>
> Deux nombres complexes sont égaux si et seulement si ils ont **même partie réelle** et **même partie imaginaire** :
> \[
x + iy = x' + iy' \iff x = x' \text{ et } y = y' \qquad (x, y, x', y' \text{ réels}).
\]

> [!NOTE] **Méthode 1 — Équation du premier degré en \(z\)**
>
> Lorsque l’équation ne fait intervenir que \(z\) (pas \(\overline{z}\)) et est du premier degré, on la résout comme dans \(\mathbb{R}\) : on isole \(z\), puis on met le résultat sous forme algébrique.

> [!NOTE] **Méthode 2 — Passer par la forme algébrique**
>
> On pose \(z = a + ib\) avec \(a\) et \(b\) réels, on écrit chaque membre sous forme algébrique, puis on identifie les parties réelles et les parties imaginaires : on obtient un système de deux équations d’inconnues réelles \(a\) et \(b\).

> [!IMPORTANT] **Remarque**
>
> La méthode 2 est indispensable lorsque l’équation fait intervenir à la fois \(z\) et son conjugué \(\overline{z}\) (on ne peut alors pas « isoler \(z\) »).

## S’entraîner

> [!NOTE] **Exercice résolu 1 — Caractériser des réels**
>
> Déterminer l’ensemble des nombres complexes \(z\) tels que \(Z = z^2 + 2z\) soit un réel.

{{% details title="Solution commentée" closed="true" %}}
**Méthode 1 : avec la forme algébrique.** On pose \(z = x + iy\), \(x\) et \(y\) réels. Alors \(z^2 = x^2 - y^2 + 2ixy\) et
\[
Z = (x^2 - y^2 + 2x) + i(2xy + 2y), \quad \text{donc} \quad \mathrm{Im}(Z) = 2y(x + 1).
\]
\(Z\) est réel si et seulement si \(2y(x + 1) = 0\), c’est-à-dire \(y = 0\) ou \(x = -1\).

**Méthode 2 : avec le conjugué.** \(Z\) est réel si et seulement si \(\overline{Z} = Z\), c’est-à-dire \(\overline{z}^2 + 2\overline{z} = z^2 + 2z\), soit
\[
z^2 - \overline{z}^2 + 2(z - \overline{z}) = 0 \iff (z - \overline{z})(z + \overline{z} + 2) = 0 \iff z = \overline{z} \ \text{ou} \ 2\,\mathrm{Re}(z) = -2.
\]
Dans les deux cas, \(Z\) est réel si et seulement si \(z\) est réel ou \(\mathrm{Re}(z) = -1\) : l’ensemble cherché est \(\mathbb{R} \cup \{-1 + iy,\ y \in \mathbb{R}\}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Résoudre une équation du premier degré**
>
> Résoudre dans \(\mathbb{C}\) l’équation \((1 + i)z - 3 = 2iz + 1 - i\).

{{% details title="Solution commentée" closed="true" %}}
On regroupe les termes en \(z\) :
\[
(1 + i)z - 2iz = 4 - i \iff (1 - i)z = 4 - i \iff z = \frac{4 - i}{1 - i}.
\]
On multiplie par le conjugué du dénominateur :
\[
z = \frac{(4 - i)(1 + i)}{(1 - i)(1 + i)} = \frac{4 + 4i - i - i^2}{2} = \frac{5 + 3i}{2}.
\]
L’ensemble des solutions est \(\mathcal{S} = \left\{\dfrac{5}{2} + \dfrac{3}{2}i\right\}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 — Résoudre une équation avec \(z\) et \(\overline{z}\)**
>
> Résoudre dans \(\mathbb{C}\) :
> 1. \(2z + i\overline{z} = 4 + 5i\)
> 2. \(z\overline{z} + 2z = 5 + 4i\)

{{% details title="Solution commentée" closed="true" %}}
On pose \(z = a + ib\), avec \(a\) et \(b\) réels, donc \(\overline{z} = a - ib\).

1. \(2z + i\overline{z} = 2a + 2ib + ia - i^2 b = (2a + b) + i(a + 2b)\). Par identification :
\[
\begin{cases} 2a + b = 4 \\ a + 2b = 5 \end{cases} \iff \begin{cases} b = 4 - 2a \\ a + 8 - 4a = 5 \end{cases} \iff \begin{cases} a = 1 \\ b = 2 \end{cases}
\]
\(\mathcal{S} = \{1 + 2i\}\). Vérification : \(2(1 + 2i) + i(1 - 2i) = 2 + 4i + i + 2 = 4 + 5i\).
2. \(z\overline{z} + 2z = a^2 + b^2 + 2a + 2ib\). Par identification : \(2b = 4\), donc \(b = 2\), et \(a^2 + 4 + 2a = 5\), soit \(a^2 + 2a - 1 = 0\). Ce trinôme a pour discriminant \(\Delta = 4 + 4 = 8\) et pour racines \(a = \dfrac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}\).
\(\mathcal{S} = \left\{-1 - \sqrt{2} + 2i\,;\, -1 + \sqrt{2} + 2i\right\}\).
{{% /details %}}
