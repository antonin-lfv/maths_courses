---
title: 'Fonction cube'
weight: 2
cascade:
  type: docs
---

## Définition et courbe

> [!TIP] **Définition**
>
> La **fonction cube** est la fonction \(g\) définie sur \(\mathbb{R}\) par \(g(x) = x^3\).

{{% details title="Exemple" closed="true" %}}
\(g(2) = 8\), \(g(-2) = -8\), \(g(0{,}1) = 0{,}001\). Pour tout réel \(x\), \(g(-x) = (-x)^3 = -x^3 = -g(x)\) : deux nombres opposés ont des cubes opposés.
{{% /details %}}

> [!TIP] **Propriétés**
>
> Dans un repère orthogonal d’origine \(O\), la courbe représentative de la fonction cube a pour équation \(y = x^3\).
> - Elle est **symétrique par rapport à l’origine** \(O\), car \((-x)^3 = -x^3\).
> - Le cube d’un nombre a le même signe que ce nombre : la courbe est en dessous de l’axe des abscisses pour \(x < 0\) et au-dessus pour \(x > 0\).

![](/images/image371.png)

## Variations

> [!TIP] **Propriété**
>
> La fonction cube est **strictement croissante** sur \(\mathbb{R}\). Ainsi, pour tous réels \(a\) et \(b\) :
> \[
a < b \iff a^3 < b^3.
\]
> Deux nombres réels sont toujours rangés dans le même ordre que leurs cubes.

![](/images/image372.png)

{{% details title="Démonstration" closed="true" %}}
Soit \(a < b\). On vérifie en développant que \(b^3 - a^3 = (b - a)(b^2 + ab + a^2)\). De plus
\[
b^2 + ab + a^2 = \left(b + \frac{a}{2}\right)^2 + \frac{3}{4}a^2 \geq 0,
\]
et cette somme ne peut être nulle que si \(a = 0\) et \(b = 0\), ce qui est exclu puisque \(a < b\). Donc \(b^2 + ab + a^2 > 0\) et \(b - a > 0\) : \(b^3 - a^3 > 0\), soit \(a^3 < b^3\).
{{% /details %}}

## Comparer x, x² et x³

> [!TIP] **Propriété**
>
> - Si \(0 < x < 1\), alors \(x^3 < x^2 < x\).
> - Si \(x > 1\), alors \(x < x^2 < x^3\).
> - Pour \(x = 0\) et \(x = 1\), les trois nombres sont égaux.

{{% details title="Démonstration" closed="true" %}}
\(x^2 - x = x(x - 1)\) et \(x^3 - x^2 = x^2(x - 1)\).
- Si \(0 < x < 1\) : \(x > 0\) et \(x - 1 < 0\), donc \(x^2 - x < 0\) ; \(x^2 > 0\), donc \(x^3 - x^2 < 0\). D’où \(x^3 < x^2 < x\).
- Si \(x > 1\) : \(x - 1 > 0\), donc les deux différences sont strictement positives : \(x < x^2 < x^3\).
{{% /details %}}

Sur \([0\,;\,+\infty[\), on visualise ces positions avec les courbes d’équations \(y = x\), \(y = x^2\) et \(y = x^3\), qui se coupent aux points d’abscisses \(0\) et \(1\) :

![](/images/image373.png)

{{% details title="Exemple" closed="true" %}}
\(0{,}9^3 = 0{,}729 < 0{,}9^2 = 0{,}81 < 0{,}9\), alors que \(1{,}1 < 1{,}1^2 = 1{,}21 < 1{,}1^3 = 1{,}331\).
{{% /details %}}

## Utiliser la fonction cube

> [!NOTE] **Méthode — Comparer et encadrer des cubes**
>
> 1. Sans calculatrice, comparer \((-1{,}5)^3\) et \((-1{,}05)^3\), puis \(\left(\dfrac{7}{8}\right)^3\) et \(\left(\dfrac{7}{8}\right)^2\).
> 2. Encadrer \(x^3\) sachant que \(-2 \leq x \leq 0{,}5\).

{{% details title="Solution commentée" closed="true" %}}
1. \(-1{,}5 < -1{,}05\) et la fonction cube est strictement croissante sur \(\mathbb{R}\) : \((-1{,}5)^3 < (-1{,}05)^3\). *(Contrairement à la fonction carré, il n’y a pas besoin de distinguer selon le signe.)*

   \(0 < \frac{7}{8} < 1\), donc \(\left(\frac{7}{8}\right)^3 < \left(\frac{7}{8}\right)^2\).
2. La fonction cube conserve l’ordre : \((-2)^3 \leq x^3 \leq 0{,}5^3\), soit \(-8 \leq x^3 \leq 0{,}125\).
{{% /details %}}
