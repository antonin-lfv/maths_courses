---
title: "Module d'un nombre complexe"
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Soit \({z = x + iy}\) un nombre complexe sous forme algébrique. On appelle **module** de \(z\) le réel positif
> \[
|z| = \sqrt{x^2 + y^2}.
\]

> [!IMPORTANT] **Remarques**
>
> - Si \(z\) est réel (\({y = 0}\)), son module est \({\sqrt{x^2} = |x|}\) : c’est sa valeur absolue, ce qui justifie la notation.
> - Le module d’un nombre complexe est toujours un réel **positif**.

> [!TIP] **Propriétés (interprétation géométrique)**
>
> Le plan complexe est muni d’un repère orthonormé \((O\,;\,\vec{u}, \vec{v})\).
> - Si \(M\) est le point d’affixe \(z\), alors \({OM = |z|}\).
> - Si \(\vec{w}\) est le vecteur d’affixe \(z\), alors \({\|\vec{w}\| = |z|}\).
> - Si \(A\) et \(B\) ont pour affixes \(z_A\) et \(z_B\), alors \({AB = |z_B - z_A|}\).

{{% details title="Exemple" closed="true" %}}
\({|3 - 4i| = \sqrt{9 + 16} = 5}\) : le point d’affixe \({3 - 4i}\) est à la distance 5 de l’origine. Pour \({A(1 + 2i)}\) et \({B(-1 - i)}\) : \({AB = |-2 - 3i| = \sqrt{4 + 9} = \sqrt{13}}\).
{{% /details %}}

## Propriétés

> [!TIP] **Propriétés**
>
> Pour tout nombre complexe \({z = x + iy}\) :
> - \({|z| = 0 \iff z = 0}\) ;
> - \({|z|^2 = z\overline{z} = x^2 + y^2}\) ;
> - \({|\overline{z}| = |-z| = |z|}\).

> [!TIP] **Propriétés (opérations)**
>
> Soient \(z\) et \(z'\) deux nombres complexes.
> - \({|zz'| = |z| \times |z'|}\) ;
> - si \({z \neq 0}\) : \({\left|\dfrac{1}{z}\right| = \dfrac{1}{|z|}}\) et \({\left|\dfrac{z'}{z}\right| = \dfrac{|z'|}{|z|}}\) ;
> - pour tout entier naturel \(n\), \({|z^n| = |z|^n}\) ; si \({z \neq 0}\), cette égalité reste vraie pour tout entier relatif \(n\) ;
> - **inégalité triangulaire** : \({|z + z'| \leq |z| + |z'|}\), avec égalité si et seulement si \({z = 0}\) ou s’il existe un réel \({k \geq 0}\) tel que \({z' = kz}\).

{{% details title="Démonstration" closed="true" %}}
- **Produit.** \({|zz'|^2 = zz'\,\overline{zz'} = z\overline{z} \times z'\overline{z'} = |z|^2|z'|^2}\). Les modules étant positifs, \({|zz'| = |z||z'|}\).
- **Inverse et quotient.** Si \({z \neq 0}\), \({|z| \times \left|\dfrac{1}{z}\right| = \left|z \times \dfrac{1}{z}\right| = 1}\), d’où \({\left|\dfrac{1}{z}\right| = \dfrac{1}{|z|}}\) ; puis \({\left|\dfrac{z'}{z}\right| = |z'| \times \left|\dfrac{1}{z}\right| = \dfrac{|z'|}{|z|}}\).
- **Puissances**, par récurrence sur \({n \in \mathbb{N}}\) :
  - **Initialisation.** \({|z^0| = 1 = |z|^0}\).
  - **Hérédité.** Si \({|z^n| = |z|^n}\), alors \(|z^{n+1}| = |z^n \times z| = |z^n| \times |z| = |z|^{n+1}\).
  - **Conclusion.** Pour tout \({n \in \mathbb{N}}\), \({|z^n| = |z|^n}\).

  Si \({z \neq 0}\) et \({n = -p}\) avec \({p \in \mathbb{N}}\) : \({|z^{n}| = \left|\dfrac{1}{z^p}\right| = \dfrac{1}{|z|^p} = |z|^{n}}\).
- **Inégalité triangulaire.** On développe :
\[
\begin{aligned}
|z + z'|^2 &= (z + z')(\overline{z} + \overline{z'}) = |z|^2 + |z'|^2 + z\overline{z'} + \overline{z}z' \\[0.3em]
&= |z|^2 + |z'|^2 + 2\,\mathrm{Re}\left(z\overline{z'}\right),
\end{aligned}
\]
car \(\overline{z}z'\) est le conjugué de \(z\overline{z'}\). Or, pour tout complexe \({w = a + ib}\), \({\mathrm{Re}(w) = a \leq \sqrt{a^2 + b^2} = |w|}\), et \({\left|z\overline{z'}\right| = |z||z'|}\). Donc
\[
|z + z'|^2 \leq |z|^2 + |z'|^2 + 2|z||z'| = \left(|z| + |z'|\right)^2,
\]
et, les deux membres étant positifs, \({|z + z'| \leq |z| + |z'|}\). L’égalité a lieu si et seulement si \({\mathrm{Re}\left(z\overline{z'}\right) = \left|z\overline{z'}\right|}\), c’est-à-dire si \(z\overline{z'}\) est un réel positif. Si \({z \neq 0}\), cela revient à \({\dfrac{z'}{z} = \dfrac{\overline{z}z'}{|z|^2}}\) réel positif, soit \({z' = kz}\) avec \({k \geq 0}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Géométriquement, l’inégalité triangulaire traduit le fait que, dans un triangle, la longueur d’un côté est inférieure ou égale à la somme des longueurs des deux autres.

## Ensemble \(\mathbb{U}\) des nombres complexes de module 1

> [!TIP] **Notation**
>
> L’ensemble des nombres complexes de module 1 est noté \(\mathbb{U}\) : \({\mathbb{U} = \{z \in \mathbb{C} : |z| = 1\}}\).

> [!IMPORTANT] **Remarque**
>
> Dans le plan complexe, l’ensemble des images des éléments de \(\mathbb{U}\) est le cercle de centre \(O\) et de rayon 1 : le cercle trigonométrique.

> [!TIP] **Propriétés (stabilité)**
>
> Si \(z\) et \(z'\) appartiennent à \(\mathbb{U}\), alors \({zz' \in \mathbb{U}}\), \({\dfrac{1}{z} \in \mathbb{U}}\) et \({\dfrac{z'}{z} \in \mathbb{U}}\). De plus, pour \({z \in \mathbb{U}}\), \({\dfrac{1}{z} = \overline{z}}\).

{{% details title="Démonstration" closed="true" %}}
Si \({|z| = |z'| = 1}\) : \({|zz'| = |z||z'| = 1}\), \({\left|\dfrac{1}{z}\right| = \dfrac{1}{|z|} = 1}\) et \({\left|\dfrac{z'}{z}\right| = \dfrac{1}{1} = 1}\). Enfin \({z\overline{z} = |z|^2 = 1}\), donc \({\dfrac{1}{z} = \overline{z}}\).
{{% /details %}}

## Calculer et utiliser des modules

> [!NOTE] **Exercice résolu 1 - Calculer un module avec la définition**
>
> Calculer le module de \({z_1 = 3 - 4i}\), \({z_2 = -2i}\), \({z_3 = 1 + i\sqrt{3}}\) et \({z_4 = -5}\).

{{% details title="Solution commentée" closed="true" %}}
- \({|z_1| = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5}\).
- \({|z_2| = \sqrt{0^2 + (-2)^2} = 2}\).
- \({|z_3| = \sqrt{1 + 3} = 2}\).
- \(z_4\) est réel : \({|z_4| = |-5| = 5}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Calculer un module avec les propriétés**
>
> Calculer le module de \({z_1 = (2 - i)(1 + 3i)}\), \({z_2 = (1 + i)^8}\), \({z_3 = \dfrac{3 + 4i}{1 - i}}\) et \({z_4 = \dfrac{\left(\sqrt{3} + i\right)^4}{(1 - i)^2}}\).

{{% details title="Solution commentée" closed="true" %}}
Il est inutile de développer : on utilise les propriétés du module.
- \(|z_1| = |2 - i| \times |1 + 3i| = \sqrt{5} \times \sqrt{10} = \sqrt{50} = 5\sqrt{2}\).
- \({|z_2| = |1 + i|^8 = \left(\sqrt{2}\right)^8 = 2^4 = 16}\).
- \({|z_3| = \dfrac{|3 + 4i|}{|1 - i|} = \dfrac{5}{\sqrt{2}} = \dfrac{5\sqrt{2}}{2}}\).
- \({|z_4| = \dfrac{\left|\sqrt{3} + i\right|^4}{|1 - i|^2} = \dfrac{2^4}{\left(\sqrt{2}\right)^2} = \dfrac{16}{2} = 8}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Déterminer la nature d’un triangle**
>
> Dans le plan complexe, on considère les points \({A(1 + i)}\), \({B(4 + 2i)}\) et \(C(4i)\). Déterminer la nature du triangle \(ABC\).

{{% details title="Solution commentée" closed="true" %}}
On calcule les longueurs des côtés avec \({AB = |z_B - z_A|}\) :
- \({AB = |3 + i| = \sqrt{10}}\) ;
- \({AC = |-1 + 3i| = \sqrt{10}}\) ;
- \({BC = |-4 + 2i| = \sqrt{20}}\).

\({AB = AC}\) : le triangle est isocèle en \(A\). De plus \({AB^2 + AC^2 = 10 + 10 = 20 = BC^2}\) : d’après la réciproque du théorème de Pythagore, il est rectangle en \(A\). Le triangle \(ABC\) est **rectangle isocèle en \(A\)**.
{{% /details %}}
