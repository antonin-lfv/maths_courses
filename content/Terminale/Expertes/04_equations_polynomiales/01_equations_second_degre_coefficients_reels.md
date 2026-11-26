---
title: 'Équations du second degré à coefficients réels'
weight: 1
cascade:
  type: docs
---

## Équation \(z^2 = a\)

> [!TIP] **Propriété**
>
> Soit \(a\) un réel. Dans \(\mathbb{C}\), l’équation \(z^2 = a\) admet :
> - une seule solution, \(0\), si \(a = 0\) ;
> - deux solutions réelles, \(\sqrt{a}\) et \(-\sqrt{a}\), si \(a > 0\) ;
> - deux solutions imaginaires pures, \(i\sqrt{-a}\) et \(-i\sqrt{-a}\), si \(a < 0\).

{{% details title="Démonstration" closed="true" %}}
Le cas \(a \geq 0\) est connu. Si \(a < 0\), alors \(-a > 0\) et \(a = -\left(\sqrt{-a}\right)^2 = \left(i\sqrt{-a}\right)^2\). Donc
\[
z^2 = a \iff z^2 - \left(i\sqrt{-a}\right)^2 = 0 \iff \left(z - i\sqrt{-a}\right)\left(z + i\sqrt{-a}\right) = 0,
\]
et un produit de nombres complexes est nul si et seulement si l’un des facteurs est nul.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(z^2 = -9\) a pour solutions \(3i\) et \(-3i\) ; \(z^2 = -5\) a pour solutions \(i\sqrt{5}\) et \(-i\sqrt{5}\).
{{% /details %}}

## Équations du type \(az^2 + bz + c = 0\)

> [!TIP] **Propriété**
>
> Soient \(a\), \(b\), \(c\) trois **réels** avec \(a \neq 0\). On considère l’équation \((E) : az^2 + bz + c = 0\), de discriminant \(\Delta = b^2 - 4ac\).
> - Si \(\Delta > 0\), \((E)\) admet deux solutions réelles : \(z_1 = \dfrac{-b - \sqrt{\Delta}}{2a}\) et \(z_2 = \dfrac{-b + \sqrt{\Delta}}{2a}\).
> - Si \(\Delta = 0\), \((E)\) admet une unique solution réelle, dite racine double : \(z_0 = -\dfrac{b}{2a}\).
> - Si \(\Delta < 0\), \((E)\) admet deux solutions complexes **conjuguées** :
> \[
z_1 = \frac{-b - i\sqrt{-\Delta}}{2a} \quad \text{et} \quad z_2 = \overline{z_1} = \frac{-b + i\sqrt{-\Delta}}{2a}.
\]

{{% details title="Démonstration" closed="true" %}}
Comme en Première, on écrit la forme canonique : pour tout complexe \(z\),
\[
az^2 + bz + c = a\left[\left(z + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right].
\]
Les cas \(\Delta \geq 0\) sont ceux de Première. Si \(\Delta < 0\), alors \(\dfrac{\Delta}{4a^2} = \left(\dfrac{i\sqrt{-\Delta}}{2a}\right)^2\), d’où la factorisation
\[
az^2 + bz + c = a\left(z + \frac{b}{2a} - \frac{i\sqrt{-\Delta}}{2a}\right)\left(z + \frac{b}{2a} + \frac{i\sqrt{-\Delta}}{2a}\right) = a(z - z_2)(z - z_1),
\]
qui s’annule si et seulement si \(z = z_1\) ou \(z = z_2\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Lorsque \(\Delta < 0\), il suffit de calculer l’une des solutions : l’autre est sa conjuguée. Cette propriété n’est valable que si les coefficients \(a\), \(b\), \(c\) sont réels.

{{% details title="Exemple" closed="true" %}}
\(2z^2 - 2z + 5 = 0\) : \(\Delta = 4 - 40 = -36 < 0\), donc les solutions sont
\[
z_1 = \frac{2 - 6i}{4} = \frac{1}{2} - \frac{3}{2}i \quad \text{et} \quad z_2 = \overline{z_1} = \frac{1}{2} + \frac{3}{2}i.
\]
{{% /details %}}

## Factorisation d’un polynôme du second degré

> [!TIP] **Propriété**
>
> Soient \(a\), \(b\), \(c\) trois réels avec \(a \neq 0\), et \(P\) le polynôme défini sur \(\mathbb{C}\) par \(P(z) = az^2 + bz + c\). On note \(z_1\) et \(z_2\) les solutions de \(P(z) = 0\), avec éventuellement \(z_1 = z_2\) (cas \(\Delta = 0\)). Alors, pour tout \(z \in \mathbb{C}\) :
> \[
P(z) = a(z - z_1)(z - z_2).
\]

{{% details title="Exemple" closed="true" %}}
\(P(z) = z^2 - 6z + 13\) : \(\Delta = 36 - 52 = -16\), donc les racines sont \(3 - 2i\) et \(3 + 2i\), et
\[
P(z) = \big(z - (3 - 2i)\big)\big(z - (3 + 2i)\big) = (z - 3 + 2i)(z - 3 - 2i).
\]
{{% /details %}}

## Résoudre des équations

> [!NOTE] **Exercice résolu 1 — Résoudre une équation de degré 2 dans \(\mathbb{C}\)**
>
> Résoudre dans \(\mathbb{C}\) :
> 1. \(z^2 + 4z + 13 = 0\)
> 2. \(9z^2 - 6z + 1 = 0\)
> 3. \(z^2 - z - 6 = 0\)

{{% details title="Solution commentée" closed="true" %}}
1. \(\Delta = 16 - 52 = -36 < 0\) : deux solutions conjuguées, \(z_1 = \dfrac{-4 - 6i}{2} = -2 - 3i\) et \(z_2 = -2 + 3i\).
2. \(\Delta = 36 - 36 = 0\) : une solution double, \(z_0 = \dfrac{6}{18} = \dfrac{1}{3}\).
3. \(\Delta = 1 + 24 = 25 > 0\) : deux solutions réelles, \(\dfrac{1 - 5}{2} = -2\) et \(\dfrac{1 + 5}{2} = 3\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Se ramener à une équation du second degré**
>
> Résoudre dans \(\mathbb{C}\) :
> 1. \(z^4 + 5z^2 - 36 = 0\)
> 2. \(z + \dfrac{4}{z} = 2\), pour \(z \neq 0\).

{{% details title="Solution commentée" closed="true" %}}
1. On pose \(Z = z^2\) : l’équation devient \(Z^2 + 5Z - 36 = 0\), de discriminant \(25 + 144 = 169 = 13^2\), donc \(Z = \dfrac{-5 - 13}{2} = -9\) ou \(Z = \dfrac{-5 + 13}{2} = 4\).
   - \(z^2 = 4 \iff z = 2\) ou \(z = -2\) ;
   - \(z^2 = -9 \iff z = 3i\) ou \(z = -3i\).

   \(\mathcal{S} = \{-2\,;\,2\,;\,-3i\,;\,3i\}\).
2. Pour \(z \neq 0\), on multiplie par \(z\) : \(z^2 + 4 = 2z \iff z^2 - 2z + 4 = 0\). \(\Delta = 4 - 16 = -12 < 0\), donc \(z = \dfrac{2 \pm i\sqrt{12}}{2} = 1 \pm i\sqrt{3}\). Ces solutions sont non nulles. \(\mathcal{S} = \left\{1 - i\sqrt{3}\,;\,1 + i\sqrt{3}\right\}\).
{{% /details %}}
