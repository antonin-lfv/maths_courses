---
title: 'Dérivation complexe et équations de Cauchy-Riemann'
weight: 1
cascade:
  type: docs
---

\(U\) désigne un ouvert de \(\mathbb{C}\), que l’on identifie à \(\mathbb{R}^2\) par \({z = x + iy}\).

## Dérivabilité au sens complexe

> [!TIP] **Définition**
>
> Une fonction \({f : U \to \mathbb{C}}\) est **dérivable au sens complexe** (ou \(\mathbb{C}\)-dérivable) en \({z_0 \in U}\) si la limite
>
> \[ f'(z_0) = \lim_{\substack{h \to 0 \\ h \in \mathbb{C}^*}} \dfrac{f(z_0 + h) - f(z_0)}{h} \]
>
> existe dans \(\mathbb{C}\). \(f\) est **holomorphe** sur \(U\) si elle est \(\mathbb{C}\)-dérivable en tout point de \(U\). L’ensemble des fonctions holomorphes sur \(U\) est noté \(\mathcal{H}(U)\). Une fonction holomorphe sur \(\mathbb{C}\) tout entier est dite **entière**.

La définition ressemble à celle de la dérivée réelle, mais \(h\) tend vers \(0\) dans **toutes les directions** du plan : c’est une condition beaucoup plus forte, qui a des conséquences spectaculaires.

> [!TIP] **Propriétés**
>
> - Une fonction \(\mathbb{C}\)-dérivable en \(z_0\) est continue en \(z_0\).
> - Les règles usuelles s’appliquent : \({(f + g)' = f' + g'}\), \({(fg)' = f'g + fg'}\), \({\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}}\), \({(g \circ f)' = f' \times g' \circ f}\).
> - Les polynômes sont entiers, avec \({(z^n)' = nz^{n-1}}\) ; les fractions rationnelles sont holomorphes hors de leurs pôles.

{{% details title="Exemple" closed="true" %}}
La fonction \({f(z) = \overline{z}}\) n’est \(\mathbb{C}\)-dérivable en aucun point :

\[
\dfrac{\overline{z_0 + h} - \overline{z_0}}{h} = \dfrac{\overline{h}}{h},
\]

qui vaut \(1\) pour \(h\) réel et \(-1\) pour \(h\) imaginaire pur : pas de limite quand \({h \to 0}\). Pourtant, vue comme application de \(\mathbb{R}^2\) dans \(\mathbb{R}^2\), \({(x, y) \mapsto (x, -y)}\) est linéaire, donc de classe \(\mathcal{C}^\infty\).
{{% /details %}}

## Équations de Cauchy-Riemann

On écrit \({f(x + iy) = P(x, y) + iQ(x, y)}\) avec \({P = \mathrm{Re}(f)}\) et \({Q = \mathrm{Im}(f)}\).

> [!TIP] **Théorème**
>
> \(f\) est \(\mathbb{C}\)-dérivable en \({z_0 = x_0 + iy_0}\) si et seulement si \(f\) est **différentiable** en \((x_0, y_0)\) comme application de \(\mathbb{R}^2\) dans \(\mathbb{R}^2\) et vérifie les **équations de Cauchy-Riemann** :
>
> \[ \dfrac{\partial P}{\partial x} = \dfrac{\partial Q}{\partial y} \qquad \text{et} \qquad \dfrac{\partial P}{\partial y} = -\dfrac{\partial Q}{\partial x}, \]
>
> ce qui s’écrit aussi \({\dfrac{\partial f}{\partial y} = i\dfrac{\partial f}{\partial x}}\). On a alors
>
> \[ f'(z_0) = \dfrac{\partial f}{\partial x}(z_0) = -i\dfrac{\partial f}{\partial y}(z_0) = \dfrac{\partial P}{\partial x} + i\dfrac{\partial Q}{\partial x}. \]

{{% details title="Démonstration" closed="true" %}}
\(f\) est \(\mathbb{C}\)-dérivable en \(z_0\) de dérivée \({c = a + ib}\) si et seulement si \({f(z_0 + h) = f(z_0) + ch + o(|h|)}\). Cela signifie que \(f\) est différentiable et que sa différentielle est \({h \mapsto ch}\), la multiplication par \(c\). Or, pour \({h = h_1 + ih_2}\), \({ch = (ah_1 - bh_2) + i(bh_1 + ah_2)}\) : sa matrice dans la base \((1, i)\) est \({\begin{pmatrix} a & -b \\ b & a \end{pmatrix}}\). Une application \(\mathbb{R}\)-linéaire de \(\mathbb{C}\) est donc la multiplication par un complexe si et seulement si sa matrice a cette forme. Appliqué à la jacobienne \({\begin{pmatrix} \partial_xP & \partial_yP \\ \partial_xQ & \partial_yQ \end{pmatrix}}\), cela donne exactement les équations de Cauchy-Riemann.
{{% /details %}}

Géométriquement : la différentielle d’une fonction holomorphe est une **similitude directe** (ou nulle). En un point où \({f'(z_0) \neq 0}\), \(f\) conserve les angles orientés : elle est **conforme**.

> [!NOTE] **Méthode - Tester l’holomorphie**
>
> - Reconnaître une somme, un produit, un quotient ou une composée de fonctions holomorphes.
> - Sinon, écrire \({f = P + iQ}\), vérifier que \(P\) et \(Q\) sont de classe \(\mathcal{C}^1\), puis tester les équations de Cauchy-Riemann.
> - Une fonction qui fait intervenir \(\overline{z}\), \(|z|\), \(\mathrm{Re}(z)\) ou \(\mathrm{Im}(z)\) n’est en général pas holomorphe.

> [!TIP] **Corollaires**
>
> Soit \(f\) holomorphe sur un ouvert **connexe** \(U\).
> - Si \({f' = 0}\) sur \(U\), alors \(f\) est constante.
> - Si \(f\) est à valeurs réelles, ou si \(\mathrm{Re}(f)\) est constante, ou si \(|f|\) est constant, alors \(f\) est constante.
> - Si \(f\) est de classe \(\mathcal{C}^2\) (ce qui est toujours vrai, comme on le verra), \(P\) et \(Q\) sont **harmoniques** : \({\Delta P = \dfrac{\partial^2 P}{\partial x^2} + \dfrac{\partial^2 P}{\partial y^2} = 0}\).

{{% details title="Démonstration" closed="true" %}}
Si \(f\) est à valeurs réelles, \({Q = 0}\), donc les équations de Cauchy-Riemann donnent \({\dfrac{\partial P}{\partial x} = \dfrac{\partial P}{\partial y} = 0}\) : la différentielle de \(P\) est nulle sur l’ouvert connexe \(U\), donc \(P\) est constante.

Harmonicité : \({\dfrac{\partial^2 P}{\partial x^2} = \dfrac{\partial^2 Q}{\partial x\partial y}}\) et \({\dfrac{\partial^2 P}{\partial y^2} = -\dfrac{\partial^2 Q}{\partial y\partial x}}\), de somme nulle par le théorème de Schwarz.
{{% /details %}}

## Fonctions usuelles

> [!TIP] **Exponentielle complexe**
>
> \({e^z = \displaystyle\sum_{n=0}^{+\infty} \dfrac{z^n}{n!} = e^x(\cos y + i\sin y)}\) pour \({z = x + iy}\).
> - Elle est entière et \({(e^z)' = e^z}\).
> - \({e^{z + w} = e^ze^w}\), \({|e^z| = e^{\mathrm{Re}(z)}}\), \({e^z \neq 0}\).
> - Elle est \(2i\pi\)-périodique : \({e^z = e^w \iff z - w \in 2i\pi\mathbb{Z}}\). Elle est surjective de \(\mathbb{C}\) sur \(\mathbb{C}^*\), mais **pas injective**.
> - \({\cos z = \dfrac{e^{iz} + e^{-iz}}{2}}\), \({\sin z = \dfrac{e^{iz} - e^{-iz}}{2i}}\), \({\operatorname{ch} z = \dfrac{e^z + e^{-z}}{2}}\), \({\operatorname{sh} z = \dfrac{e^z - e^{-z}}{2}}\) sont entières. Attention : \(\cos\) et \(\sin\) ne sont **pas bornées** sur \(\mathbb{C}\).

> [!TIP] **Logarithme complexe**
>
> Comme l’exponentielle n’est pas injective, il n’y a pas de logarithme défini sur \(\mathbb{C}^*\) tout entier.
>
> La **détermination principale de l’argument** \(\operatorname{Arg} z\) est l’argument de \(z\) dans \({]-\pi, \pi]}\). La **détermination principale du logarithme** est
>
> \[ \operatorname{Log} z = \ln|z| + i\operatorname{Arg} z. \]
>
> Elle est holomorphe sur le plan fendu \({\mathbb{C} \setminus \mathbb{R}_-}\), où \({e^{\operatorname{Log} z} = z}\) et \({\operatorname{Log}'(z) = \dfrac{1}{z}}\). Elle est discontinue le long de \({]-\infty, 0[}\).
>
> Plus généralement, une **détermination du logarithme** sur un ouvert \(U\) est une fonction continue \(\ell\) telle que \({e^{\ell(z)} = z}\) ; elle est alors holomorphe, de dérivée \(\dfrac{1}{z}\). Il en existe sur tout ouvert **simplement connexe** ne contenant pas \(0\), mais pas sur \(\mathbb{C}^*\).

> [!IMPORTANT] **Remarque**
>
> Les formules réelles ne se transposent pas. En général \({\operatorname{Log}(zw) \neq \operatorname{Log} z + \operatorname{Log} w}\) : avec \({z = w = e^{3i\pi/4}}\), \({zw = e^{3i\pi/2} = -i}\) et \({\operatorname{Log}(zw) = -\dfrac{i\pi}{2}}\), alors que \({2\operatorname{Log} z = \dfrac{3i\pi}{2}}\). Les deux diffèrent de \(2i\pi\).

> [!TIP] **Puissances complexes**
>
> Pour \({\alpha \in \mathbb{C}}\) et \({z \in \mathbb{C} \setminus \mathbb{R}_-}\), la détermination principale de \(z^\alpha\) est \({z^\alpha = e^{\alpha\operatorname{Log} z}}\), holomorphe, de dérivée \({\alpha z^{\alpha - 1}}\). Par exemple \({i^i = e^{i \times i\pi/2} = e^{-\pi/2}}\), qui est réel.

> [!NOTE] **Exercice résolu - Holomorphie et fonction harmonique conjuguée**
>
> 1. La fonction \({f(z) = |z|^2}\) est-elle holomorphe ? En quels points est-elle \(\mathbb{C}\)-dérivable ?
> 2. Soit \({P(x, y) = x^3 - 3xy^2 + 2x}\). Vérifier que \(P\) est harmonique et trouver toutes les fonctions entières \(f\) telles que \({\mathrm{Re}(f) = P}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({f = x^2 + y^2}\), donc \({P = x^2 + y^2}\) et \({Q = 0}\), de classe \(\mathcal{C}^1\). Les équations de Cauchy-Riemann s’écrivent \({2x = 0}\) et \({2y = 0}\) : elles ne sont vérifiées qu’en \((0, 0)\). Donc \(f\) est \(\mathbb{C}\)-dérivable en \(0\) seulement (avec \({f'(0) = 0}\)) ; comme \(\{0\}\) n’est pas un ouvert, \(f\) n’est holomorphe sur aucun ouvert. C’est cohérent avec le corollaire : une fonction holomorphe à valeurs réelles est constante.

**2.** \({\dfrac{\partial^2 P}{\partial x^2} = 6x}\) et \({\dfrac{\partial^2 P}{\partial y^2} = -6x}\) : \({\Delta P = 0}\), \(P\) est harmonique.

On cherche \(Q\) telle que les équations de Cauchy-Riemann soient vérifiées :

\[
\dfrac{\partial Q}{\partial y} = \dfrac{\partial P}{\partial x} = 3x^2 - 3y^2 + 2, \qquad \dfrac{\partial Q}{\partial x} = -\dfrac{\partial P}{\partial y} = 6xy.
\]

La seconde donne \({Q = 3x^2y + c(y)}\). En reportant dans la première : \({3x^2 + c'(y) = 3x^2 - 3y^2 + 2}\), donc \({c(y) = -y^3 + 2y + k}\) avec \(k\) réel. Ainsi \({Q = 3x^2y - y^3 + 2y + k}\), et

\[
f = (x^3 - 3xy^2 + 2x) + i(3x^2y - y^3 + 2y) + ik = (x + iy)^3 + 2(x + iy) + ik.
\]

Les solutions sont \({f(z) = z^3 + 2z + ik}\), \({k \in \mathbb{R}}\). Elles sont bien entières (polynômes), et \(P\), \(Q\) étant \(\mathcal{C}^1\) et vérifiant Cauchy-Riemann, ce sont les seules.
{{% /details %}}
