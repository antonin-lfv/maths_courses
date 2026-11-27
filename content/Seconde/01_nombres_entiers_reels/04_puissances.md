---
title: 'Puissances et racines carrées'
weight: 4
cascade:
  type: docs
---

## Puissances d’un nombre réel

> [!TIP] **Définitions**
>
> Soit \(a\) un nombre réel et \(n\) un entier naturel non nul.
> - \({a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ facteurs}}}\). On lit « \(a\) puissance \(n\) » ; \(n\) est l’**exposant**.
> - Par convention, \({a^0 = 1}\) (pour \({a \neq 0}\)) et \({a^1 = a}\).
> - Si \({a \neq 0}\), on pose \({a^{-n} = \dfrac{1}{a^n}}\).

{{% details title="Exemple" closed="true" %}}
\({(-2)^5 = -32}\) ; \({5^{-2} = \dfrac{1}{25} = 0{,}04}\) ; \({10^{-3} = 0{,}001}\) ; \({\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Attention aux parenthèses : \({(-3)^2 = 9}\) mais \({-3^2 = -(3^2) = -9}\). Une puissance d’exposant pair d’un nombre négatif est positive ; d’exposant impair, elle est négative.

> [!TIP] **Propriétés**
>
> Pour tous réels \(a\) et \(b\) non nuls et pour tous entiers relatifs \(m\) et \(n\) :
> \[
a^m \times a^n = a^{m+n}, \qquad \dfrac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{m \times n},
\]
> \[
(a \times b)^n = a^n \times b^n, \qquad \left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}.
\]

{{% details title="Démonstration (pour m et n entiers naturels non nuls)" closed="true" %}}
- \({a^m \times a^n}\) est un produit de \(m\) facteurs \(a\) suivi de \(n\) facteurs \(a\) : il y a \({m + n}\) facteurs, donc \({a^m \times a^n = a^{m+n}}\).
- \((a^m)^n\) est le produit de \(n\) facteurs égaux à \(a^m\), soit \(n\) paquets de \(m\) facteurs \(a\) : \({(a^m)^n = a^{mn}}\).
- \({(ab)^n = (ab)(ab)\cdots(ab)}\) ; en regroupant les \(a\) et les \(b\) (le produit est commutatif), on obtient \(a^n b^n\).

Les autres cas se déduisent de la définition \({a^{-n} = \dfrac{1}{a^n}}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({\dfrac{3^7 \times 3^{-2}}{3^4} = 3^{7 - 2 - 4} = 3^1 = 3}\) ; \({\left(2^3\right)^{-2} = 2^{-6} = \dfrac{1}{64}}\) ; \({4^5 \times 25^5 = (4 \times 25)^5 = 100^5 = 10^{10}}\).
{{% /details %}}

> [!TIP] **Définition**
>
> Tout nombre décimal non nul \(x\) peut s’écrire de façon unique sous la forme \({x = a \times 10^n}\), où \(a\) est un nombre décimal tel que \({1 \leq |a| < 10}\) et \(n\) un entier relatif. C’est l’**écriture scientifique** de \(x\).

{{% details title="Exemple" closed="true" %}}
\({384\,000 = 3{,}84 \times 10^5}\) ; \({-0{,}000\,72 = -7{,}2 \times 10^{-4}}\).
{{% /details %}}

## Racine carrée d’un nombre positif

> [!TIP] **Définition**
>
> Soit \(x\) un nombre réel **positif**. La **racine carrée** de \(x\), notée \(\sqrt{x}\), est l’unique nombre réel **positif** dont le carré est égal à \(x\).

{{% details title="Exemple" closed="true" %}}
\({\sqrt{49} = 7}\) (et non \({-7}\), bien que \({(-7)^2 = 49}\)) ; \({\sqrt{0{,}09} = 0{,}3}\) ; \({\sqrt{0} = 0}\) ; \({\sqrt{1} = 1}\). L’écriture \({\sqrt{-4}}\) n’a pas de sens.
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Pour tout réel \(x\) positif, \({\left(\sqrt{x}\right)^2 = x}\).
> - Pour tout réel \(x\), \({\sqrt{x^2} = |x|}\).

{{% details title="Exemple" closed="true" %}}
\({\left(\sqrt{11}\right)^2 = 11}\) ; \({\sqrt{(-6)^2} = \sqrt{36} = 6 = |-6|}\) ; \({\sqrt{(2 - \pi)^2} = |2 - \pi| = \pi - 2}\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Pour tous réels \(a\) et \(b\) positifs :
> \[
\sqrt{a \times b} = \sqrt{a} \times \sqrt{b} \qquad \text{et, si } b \neq 0, \qquad \sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}.
\]

{{% details title="Démonstration" closed="true" %}}
\({\sqrt{a} \times \sqrt{b}}\) est positif (produit de deux nombres positifs), et son carré vaut \({\left(\sqrt{a}\right)^2 \times \left(\sqrt{b}\right)^2 = ab}\). C’est donc le nombre positif dont le carré est \(ab\) : \({\sqrt{a}\sqrt{b} = \sqrt{ab}}\). On procède de même pour le quotient.
{{% /details %}}

> [!TIP] **Propriété**
>
> Pour tous réels \(a\) et \(b\) **strictement** positifs,
> \[
\sqrt{a + b} < \sqrt{a} + \sqrt{b}.
\]

{{% details title="Démonstration" closed="true" %}}
Les deux membres sont positifs ; on compare leurs carrés :
\[
\begin{gathered}
\left(\sqrt{a} + \sqrt{b}\right)^2 = a + 2\sqrt{a}\sqrt{b} + b = (a + b) + 2\sqrt{ab} \qquad \text{et} \\[0.3em]
\left(\sqrt{a + b}\right)^2 = a + b.
\end{gathered}
\]
Comme \({a > 0}\) et \({b > 0}\), \({2\sqrt{ab} > 0}\), donc \({\left(\sqrt{a + b}\right)^2 < \left(\sqrt{a} + \sqrt{b}\right)^2}\). Deux nombres positifs sont rangés dans le même ordre que leurs carrés, d’où \({\sqrt{a + b} < \sqrt{a} + \sqrt{b}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Il n’y a donc **pas** de formule pour la racine d’une somme : par exemple \({\sqrt{9 + 16} = \sqrt{25} = 5}\), alors que \({\sqrt{9} + \sqrt{16} = 3 + 4 = 7}\).

## Calculer avec des puissances et des racines

> [!NOTE] **Méthode 1 - Simplifier une expression avec des puissances**
>
> 1. Écrire \({A = \dfrac{6^4 \times 2^{-3}}{9^2}}\) sous la forme d’une puissance de \(2\).
> 2. Donner l’écriture scientifique de \({B = \dfrac{1{,}2 \times 10^{5} \times 5 \times 10^{-8}}{4 \times 10^{-2}}}\).

{{% details title="Solution commentée" closed="true" %}}
1. On décompose chaque nombre en facteurs premiers : \({6^4 = (2 \times 3)^4 = 2^4 \times 3^4}\) et \({9^2 = (3^2)^2 = 3^4}\). Donc
\[
A = \dfrac{2^4 \times 3^4 \times 2^{-3}}{3^4} = 2^{4 - 3} = 2^1 = 2.
\]
2. On regroupe les nombres d’un côté et les puissances de \(10\) de l’autre :
\[
B = \dfrac{1{,}2 \times 5}{4} \times \dfrac{10^{5} \times 10^{-8}}{10^{-2}} = 1{,}5 \times 10^{5 - 8 + 2} = 1{,}5 \times 10^{-1}.
\]
Comme \({1 \leq 1{,}5 < 10}\), c’est l’écriture scientifique : \({B = 1{,}5 \times 10^{-1} = 0{,}15}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Simplifier une racine carrée**
>
> 1. Écrire \(\sqrt{72}\) et \(\sqrt{50}\) sous la forme \(a\sqrt{2}\), avec \(a\) entier, puis simplifier \({C = \sqrt{72} - \sqrt{50} + 3\sqrt{8}}\).
> 2. Écrire \({D = \dfrac{6}{\sqrt{3}}}\) sans racine carrée au dénominateur.

{{% details title="Solution commentée" closed="true" %}}
1. On fait apparaître le plus grand carré parfait possible sous la racine :
\[
\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36}\sqrt{2} = 6\sqrt{2}, \qquad \sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}, \qquad \sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}.
\]
Donc \(C = 6\sqrt{2} - 5\sqrt{2} + 3 \times 2\sqrt{2} = (6 - 5 + 6)\sqrt{2} = 7\sqrt{2}\).
2. On multiplie le numérateur et le dénominateur par \(\sqrt{3}\) :
\[
D = \dfrac{6 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}} = \dfrac{6\sqrt{3}}{3} = 2\sqrt{3}.
\]
{{% /details %}}
