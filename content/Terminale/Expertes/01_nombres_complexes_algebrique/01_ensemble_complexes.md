---
title: 'Ensemble des complexes'
weight: 1
cascade:
  type: docs
---

L’équation \({x^2 = -1}\) n’a pas de solution réelle. On construit un ensemble de nombres plus grand que \(\mathbb{R}\), dans lequel elle en a, et où l’on calcule avec les mêmes règles qu’avec les réels.

## Forme algébrique d’un nombre complexe

> [!TIP] **Théorème (admis)**
>
> Il existe un ensemble, noté \(\mathbb{C}\) et appelé **ensemble des nombres complexes**, qui contient \(\mathbb{R}\) et qui vérifie :
> - \(\mathbb{C}\) est muni d’une addition et d’une multiplication qui prolongent celles de \(\mathbb{R}\) et qui suivent les mêmes règles de calcul (commutativité, associativité, distributivité, identités remarquables…) ;
> - il existe un nombre complexe, noté \(i\), tel que \({i^2 = -1}\) ;
> - tout nombre complexe \(z\) s’écrit de manière **unique** \({z = x + iy}\), avec \(x\) et \(y\) réels ;
> - le nombre complexe \(0\) s’écrit \({0 + 0i}\).

> [!TIP] **Définition**
>
> L’écriture \({z = x + iy}\), avec \(x\) et \(y\) réels, est la **forme algébrique** du nombre complexe \(z\).
> - Le réel \(x\) est la **partie réelle** de \(z\), notée \(\mathrm{Re}(z)\).
> - Le réel \(y\) est la **partie imaginaire** de \(z\), notée \(\mathrm{Im}(z)\).

> [!IMPORTANT] **Remarques**
>
> - La partie imaginaire est un **réel** : pour \({z = 4 - 7i}\), \({\mathrm{Im}(z) = -7}\) (et non \({-7i}\)).
> - Par unicité de l’écriture, deux nombres complexes sont égaux si et seulement si ils ont même partie réelle et même partie imaginaire.

{{% details title="Exemple" closed="true" %}}
Soient \({z = 2 - 3i}\) et \({z' = -1 + 4i}\).
- \({z + z' = (2 - 1) + (-3 + 4)i = 1 + i}\).
- \(zz' = 2 \times (-1) + 2 \times 4i - 3i \times (-1) - 3i \times 4i = -2 + 8i + 3i - 12i^2 = -2 + 11i + 12 = 10 + 11i\).

Donc \({\mathrm{Re}(zz') = 10}\) et \({\mathrm{Im}(zz') = 11}\).
{{% /details %}}

## La division dans \(\mathbb{C}\)

> [!TIP] **Propriété**
>
> Tout nombre complexe \(z\) **non nul** admet un unique inverse, noté \(\dfrac{1}{z}\), c’est-à-dire un unique nombre complexe \(w\) tel que \({zw = 1}\).

> [!NOTE] **Méthode - Mettre un quotient sous forme algébrique**
>
> On multiplie le numérateur et le dénominateur par l’**expression conjuguée** du dénominateur : si le dénominateur est \({a + ib}\) (avec \(a\), \(b\) réels), on multiplie par \({a - ib}\). Le dénominateur devient le réel \({(a + ib)(a - ib) = a^2 + b^2}\).

{{% details title="Exemple" closed="true" %}}
\[
\dfrac{1}{2 - 5i} = \dfrac{2 + 5i}{(2 - 5i)(2 + 5i)} = \dfrac{2 + 5i}{4 + 25} = \dfrac{2}{29} + \dfrac{5}{29}i.
\]
{{% /details %}}

## Conjugué

> [!TIP] **Définition**
>
> Soit \({z = x + iy}\) un nombre complexe sous forme algébrique. On appelle **conjugué** de \(z\) le nombre complexe, noté \(\overline{z}\), défini par \({\overline{z} = x - iy}\) : il a la même partie réelle que \(z\) et une partie imaginaire opposée.

> [!TIP] **Propriétés**
>
> Pour tous nombres complexes \(z\) et \(z'\) :
> - \({\overline{\overline{z}} = z}\) ;
> - \({\overline{z + z'} = \overline{z} + \overline{z'}}\) ;
> - \({\overline{zz'} = \overline{z} \times \overline{z'}}\) ;
> - pour tout entier naturel \(n\), \({\overline{z^n} = \left(\overline{z}\right)^n}\) ;
> - si \({z \neq 0}\) : \({\overline{\left(\dfrac{1}{z}\right)} = \dfrac{1}{\overline{z}}}\) et \({\overline{\left(\dfrac{z'}{z}\right)} = \dfrac{\overline{z'}}{\overline{z}}}\).

{{% details title="Démonstration" closed="true" %}}
On écrit \({z = x + iy}\) et \({z' = x' + iy'}\) avec \(x, y, x', y'\) réels.

- \(\overline{z + z'} = \overline{(x + x') + i(y + y')} = (x + x') - i(y + y') = (x - iy) + (x' - iy') = \overline{z} + \overline{z'}\).
- \({zz' = (xx' - yy') + i(xy' + x'y)}\), donc \({\overline{zz'} = (xx' - yy') - i(xy' + x'y)}\). D’autre part, \(\overline{z} \times \overline{z'} = (x - iy)(x' - iy') = (xx' - yy') - i(xy' + x'y)\). Les deux sont égaux.
- Puissances, par récurrence sur \(n\) :
  - **Initialisation.** Pour \({n = 0}\) : \({\overline{z^0} = \overline{1} = 1 = \left(\overline{z}\right)^0}\).
  - **Hérédité.** Supposons \({\overline{z^n} = \left(\overline{z}\right)^n}\) pour un entier \({n \geq 0}\). Alors, d’après la propriété du produit, \(\overline{z^{n+1}} = \overline{z^n \times z} = \overline{z^n} \times \overline{z} = \left(\overline{z}\right)^n \times \overline{z} = \left(\overline{z}\right)^{n+1}\).
  - **Conclusion.** Pour tout entier naturel \(n\), \({\overline{z^n} = \left(\overline{z}\right)^n}\).
- Inverse : si \({z \neq 0}\), \({z \times \dfrac{1}{z} = 1}\), donc, en passant au conjugué, \({\overline{z} \times \overline{\left(\dfrac{1}{z}\right)} = \overline{1} = 1}\). Ainsi \(\overline{\left(\dfrac{1}{z}\right)}\) est l’inverse de \(\overline{z}\) (qui est non nul). Pour le quotient, on écrit \({\dfrac{z'}{z} = z' \times \dfrac{1}{z}}\) et on utilise la propriété du produit.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Le conjugué de \({(1 + 2i)(3 - i)}\) est \(\overline{(1 + 2i)} \times \overline{(3 - i)} = (1 - 2i)(3 + i) = 3 + i - 6i - 2i^2 = 5 - 5i\).

Vérification : \((1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 5 + 5i\), dont le conjugué est bien \({5 - 5i}\).
{{% /details %}}

## Calculer dans \(\mathbb{C}\)

> [!NOTE] **Exercice résolu 1 - Calculer avec la forme algébrique**
>
> On pose \({z = 1 + 3i}\) et \({z' = 2 - i}\). Donner la forme algébrique de \({2z - 3z'}\), de \({z \times z'}\) et de \(\left(z'\right)^2\).

{{% details title="Solution commentée" closed="true" %}}
Les règles de calcul de \(\mathbb{R}\) s’appliquent, en remplaçant \(i^2\) par \({-1}\).

- \({2z - 3z' = 2 + 6i - 6 + 3i = -4 + 9i}\).
- \(zz' = (1 + 3i)(2 - i) = 2 - i + 6i - 3i^2 = 2 + 5i + 3 = 5 + 5i\).
- \({\left(z'\right)^2 = (2 - i)^2 = 4 - 4i + i^2 = 3 - 4i}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Utiliser le conjugué**
>
> Donner la forme algébrique du conjugué de chacun des nombres complexes suivants.
> 1. \({z_1 = -4 + 7i}\)
> 2. \({z_2 = 3i(1 + 2i)}\)
> 3. \({z_3 = \dfrac{1 + i}{3i}}\)

{{% details title="Solution commentée" closed="true" %}}
1. \({\overline{z_1} = -4 - 7i}\).
2. On peut utiliser la propriété du produit : \(\overline{z_2} = \overline{3i} \times \overline{1 + 2i} = -3i(1 - 2i) = -3i + 6i^2 = -6 - 3i\). On peut aussi développer d’abord : \({z_2 = 3i + 6i^2 = -6 + 3i}\), dont le conjugué est \({-6 - 3i}\).
3. Propriété du quotient : \({\overline{z_3} = \dfrac{1 - i}{-3i}}\). Pour obtenir la forme algébrique, on multiplie par \(i\) en haut et en bas : \({\dfrac{(1 - i)i}{-3i \times i} = \dfrac{i + 1}{3} = \dfrac{1}{3} + \dfrac{1}{3}i}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Calculer un quotient**
>
> Donner la forme algébrique de \({z = \dfrac{3 + i}{1 - 2i}}\) et de \({z' = \dfrac{2i}{1 + i}}\).

{{% details title="Solution commentée" closed="true" %}}
On multiplie numérateur et dénominateur par le conjugué du dénominateur ; on utilise \({(a + ib)(a - ib) = a^2 + b^2}\).

1. \(z = \dfrac{(3 + i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \dfrac{3 + 6i + i + 2i^2}{1 + 4} = \dfrac{1 + 7i}{5} = \dfrac{1}{5} + \dfrac{7}{5}i\).
2. \(z' = \dfrac{2i(1 - i)}{(1 + i)(1 - i)} = \dfrac{2i - 2i^2}{2} = \dfrac{2 + 2i}{2} = 1 + i\).
{{% /details %}}
