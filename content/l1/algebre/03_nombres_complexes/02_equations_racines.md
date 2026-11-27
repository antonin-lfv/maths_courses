---
title: 'Racines et équations'
weight: 2
cascade:
  type: docs
---

## Racines carrées d’un nombre complexe

> [!TIP] **Propriété**
>
> Tout nombre complexe non nul \(a\) admet exactement deux **racines carrées** (solutions de \({z^2 = a}\)), et elles sont opposées. Si \({a = re^{i\theta}}\) avec \({r > 0}\), ce sont \({\sqrt{r}\,e^{i\theta/2}}\) et \({-\sqrt{r}\,e^{i\theta/2}}\).

> [!IMPORTANT] **Remarque**
>
> La notation \(\sqrt{a}\) est réservée aux réels positifs. Pour un complexe quelconque, on parle d’« une racine carrée de \(a\) », sans privilégier l’une des deux.

> [!NOTE] **Méthode - Racines carrées sous forme algébrique**
>
> Pour résoudre \({z^2 = a + ib}\) avec \({z = x + iy}\), on écrit l’égalité des parties réelles, des parties imaginaires et des modules :
>
> \[ x^2 - y^2 = a, \qquad 2xy = b, \qquad x^2 + y^2 = \sqrt{a^2 + b^2}. \]
>
> La première et la troisième donnent \(x^2\) et \(y^2\) ; la deuxième donne le signe du produit \(xy\), donc les signes relatifs de \(x\) et \(y\).

{{% details title="Exemple" closed="true" %}}
Cherchons les racines carrées de \({5 - 12i}\). On a \({\sqrt{5^2 + 12^2} = 13}\), donc

\[
x^2 - y^2 = 5, \qquad x^2 + y^2 = 13, \qquad 2xy = -12.
\]

Par somme et différence : \({x^2 = 9}\) et \({y^2 = 4}\). Comme \({xy < 0}\), \(x\) et \(y\) sont de signes contraires. Les racines carrées sont \({3 - 2i}\) et \({-3 + 2i}\).

Vérification : \({(3 - 2i)^2 = 9 - 12i - 4 = 5 - 12i}\).
{{% /details %}}

## Équation du second degré

> [!TIP] **Théorème**
>
> Soient \(a\), \(b\), \(c\) des complexes avec \({a \neq 0}\), et \({\Delta = b^2 - 4ac}\). Soit \(\delta\) une racine carrée de \(\Delta\). Les solutions dans \(\mathbb{C}\) de l’équation \({az^2 + bz + c = 0}\) sont
>
> \[ z_1 = \dfrac{-b + \delta}{2a} \qquad \text{et} \qquad z_2 = \dfrac{-b - \delta}{2a}. \]
>
> Elles sont confondues si et seulement si \({\Delta = 0}\). De plus, \({z_1 + z_2 = -\dfrac{b}{a}}\), \({z_1 z_2 = \dfrac{c}{a}}\) et \({az^2 + bz + c = a(z - z_1)(z - z_2)}\).

{{% details title="Démonstration" closed="true" %}}
Mise sous forme canonique :

\[
az^2 + bz + c = a\left[\left(z + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right] = a\left[\left(z + \dfrac{b}{2a}\right)^2 - \left(\dfrac{\delta}{2a}\right)^2\right] = a(z - z_1)(z - z_2).
\]

Un produit de complexes est nul si et seulement si l’un des facteurs est nul, d’où les solutions. La somme et le produit s’obtiennent par calcul direct : \({z_1 z_2 = \dfrac{b^2 - \delta^2}{4a^2} = \dfrac{4ac}{4a^2}}\).
{{% /details %}}

> [!TIP] **Propriété - Somme et produit**
>
> Deux complexes \(u\) et \(v\) vérifient \({u + v = S}\) et \({uv = P}\) si et seulement si \(u\) et \(v\) sont les deux solutions de \({z^2 - Sz + P = 0}\).

{{% details title="Exemple" closed="true" %}}
Résolvons \({z^2 - (1 + 4i)z - 5 + 5i = 0}\).

\({\Delta = (1 + 4i)^2 - 4(-5 + 5i) = 1 + 8i - 16 + 20 - 20i = 5 - 12i}\). D’après l’exemple précédent, \({\delta = 3 - 2i}\) convient. Les solutions sont

\[
z_1 = \dfrac{1 + 4i + 3 - 2i}{2} = 2 + i \qquad \text{et} \qquad z_2 = \dfrac{1 + 4i - 3 + 2i}{2} = -1 + 3i.
\]

Vérification : \({z_1 + z_2 = 1 + 4i}\) et \({z_1 z_2 = -2 + 6i - i + 3i^2 = -5 + 5i}\).
{{% /details %}}

## Racines \(n\)-ièmes

> [!TIP] **Théorème - Racines \(n\)-ièmes de l’unité**
>
> Soit \(n\) un entier, \({n \geq 1}\). L’équation \({z^n = 1}\) a exactement \(n\) solutions dans \(\mathbb{C}\) :
>
> \[ \omega_k = e^{2ik\pi/n}, \qquad k \in \{0, 1, \dots, n-1\}. \]
>
> Leur ensemble est noté \(\mathbb{U}_n\). Si \({n \geq 2}\), leur somme est nulle : \({\displaystyle\sum_{k=0}^{n-1} \omega_k = 0}\).

{{% details title="Démonstration" closed="true" %}}
Si \({z^n = 1}\), alors \({|z|^n = 1}\), donc \({|z| = 1}\) et \({z = e^{i\theta}}\). L’équation devient \({e^{in\theta} = 1}\), soit \({n\theta \equiv 0 \ [2\pi]}\), c’est-à-dire \({\theta = \dfrac{2k\pi}{n}}\) avec \(k\) entier. Deux entiers \(k\) et \(k'\) donnent le même complexe si et seulement si \({k - k'}\) est multiple de \(n\) : on obtient toutes les solutions, une fois chacune, pour \(k\) allant de \(0\) à \({n-1}\).

Pour la somme : \({\omega_k = \omega_1^k}\) et \({\omega_1 \neq 1}\) si \({n \geq 2}\), donc

\[
\sum_{k=0}^{n-1} \omega_1^k = \dfrac{1 - \omega_1^n}{1 - \omega_1} = 0.
\]
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
- \({\mathbb{U}_2 = \{1, -1\}}\), \({\mathbb{U}_4 = \{1, i, -1, -i\}}\).
- \({\mathbb{U}_3 = \{1, j, j^2\}}\) avec \({j = e^{2i\pi/3} = -\dfrac{1}{2} + i\dfrac{\sqrt{3}}{2}}\). On a \({j^3 = 1}\), \({j^2 = \overline{j}}\) et \({1 + j + j^2 = 0}\).

Les points d’affixes les éléments de \(\mathbb{U}_n\) sont les sommets d’un polygone régulier à \(n\) côtés inscrit dans le cercle trigonométrique.
{{% /details %}}

> [!TIP] **Théorème - Racines \(n\)-ièmes d’un complexe**
>
> Soit \({a = re^{i\theta}}\) un complexe non nul (\({r > 0}\)). L’équation \({z^n = a}\) a exactement \(n\) solutions :
>
> \[ z_k = \sqrt[n]{r}\,e^{i\left(\frac{\theta}{n} + \frac{2k\pi}{n}\right)}, \qquad k \in \{0, 1, \dots, n-1\}. \]
>
> On les obtient en multipliant l’une d’elles par les racines \(n\)-ièmes de l’unité.

{{% details title="Démonstration" closed="true" %}}
Le complexe \({z_0 = \sqrt[n]{r}\,e^{i\theta/n}}\) vérifie \({z_0^n = a}\). Comme \({z_0 \neq 0}\) :

\[
z^n = a \iff z^n = z_0^n \iff \left(\dfrac{z}{z_0}\right)^n = 1 \iff \dfrac{z}{z_0} \in \mathbb{U}_n.
\]
{{% /details %}}

## Exponentielle complexe

> [!TIP] **Définition**
>
> Pour \({z = x + iy}\) avec \(x\), \(y\) réels, on pose \({e^z = e^x e^{iy} = e^x(\cos y + i\sin y)}\).

> [!TIP] **Propriétés**
>
> Pour tous complexes \(z\) et \(z'\) :
> - \({e^{z + z'} = e^z e^{z'}}\) ;
> - \({|e^z| = e^{\mathrm{Re}(z)}}\) et \({\arg(e^z) \equiv \mathrm{Im}(z) \ [2\pi]}\) ; en particulier \({e^z \neq 0}\) ;
> - \({e^z = e^{z'} \iff z - z' \in 2i\pi\mathbb{Z}}\).

## Interprétation géométrique

> [!TIP] **Propriétés**
>
> Soient \(A\), \(B\), \(C\), \(D\) des points d’affixes \(a\), \(b\), \(c\), \(d\), avec \({A \neq B}\) et \({C \neq D}\).
> - \({AB = |b - a|}\) et \({\left(\overrightarrow{AB}, \overrightarrow{CD}\right) \equiv \arg\left(\dfrac{d - c}{b - a}\right) \ [2\pi]}\).
> - Les droites \((AB)\) et \((CD)\) sont parallèles si et seulement si \(\dfrac{d - c}{b - a}\) est réel ; elles sont perpendiculaires si et seulement si \(\dfrac{d - c}{b - a}\) est imaginaire pur.

> [!TIP] **Propriétés - Transformations du plan**
>
> - La translation de vecteur d’affixe \(b\) s’écrit \({z \mapsto z + b}\).
> - La rotation de centre \(\Omega(\omega)\) et d’angle \(\theta\) s’écrit \({z \mapsto \omega + e^{i\theta}(z - \omega)}\).
> - L’homothétie de centre \(\Omega(\omega)\) et de rapport \({k \in \mathbb{R}^*}\) s’écrit \({z \mapsto \omega + k(z - \omega)}\).
> - Plus généralement, pour \({a \in \mathbb{C}^*}\), \({a \neq 1}\) et \({b \in \mathbb{C}}\), l’application \({z \mapsto az + b}\) est une **similitude directe** : elle a un unique point fixe \({\omega = \dfrac{b}{1 - a}}\), et c’est la composée de la rotation de centre \(\Omega\) et d’angle \(\arg a\) et de l’homothétie de centre \(\Omega\) et de rapport \(|a|\).

> [!NOTE] **Exercice résolu - Racines cubiques**
>
> Résoudre dans \(\mathbb{C}\) l’équation \({z^3 = -8i}\) et donner les solutions sous forme algébrique.

{{% details title="Solution commentée" closed="true" %}}
On écrit \({-8i = 8e^{-i\pi/2}}\). Les solutions sont

\[
z_k = \sqrt[3]{8}\,e^{i\left(-\frac{\pi}{6} + \frac{2k\pi}{3}\right)} = 2e^{i\left(-\frac{\pi}{6} + \frac{2k\pi}{3}\right)}, \qquad k \in \{0, 1, 2\}.
\]

- \({z_0 = 2e^{-i\pi/6} = 2\left(\dfrac{\sqrt{3}}{2} - \dfrac{1}{2}i\right) = \sqrt{3} - i}\).
- \({z_1 = 2e^{i\pi/2} = 2i}\).
- \({z_2 = 2e^{7i\pi/6} = 2\left(-\dfrac{\sqrt{3}}{2} - \dfrac{1}{2}i\right) = -\sqrt{3} - i}\).

Vérification : \({(2i)^3 = 8i^3 = -8i}\), et la somme des trois solutions vaut \(0\), comme attendu puisque \({z_k = z_0\,j^k}\) et \({1 + j + j^2 = 0}\).
{{% /details %}}
