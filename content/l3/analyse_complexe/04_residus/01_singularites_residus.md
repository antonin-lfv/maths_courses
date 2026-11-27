---
title: 'Séries de Laurent, résidus, calcul d’intégrales'
weight: 1
cascade:
  type: docs
---

## Séries de Laurent

> [!TIP] **Théorème**
>
> Soit \(f\) holomorphe sur la couronne \({\{r_1 < |z - a| < r_2\}}\), avec \({0 \leq r_1 < r_2 \leq +\infty}\). Alors \(f\) admet un unique développement en **série de Laurent** :
>
> \[ f(z) = \sum_{n=-\infty}^{+\infty} a_n(z - a)^n, \qquad a_n = \dfrac{1}{2i\pi}\int_{C(a, r)} \dfrac{f(w)}{(w - a)^{n+1}}\,\mathrm{d}w \quad (r_1 < r < r_2). \]
>
> La série converge normalement sur tout compact de la couronne. La somme des termes d’indice \({n < 0}\) est la **partie principale**.

Le développement dépend de la couronne : une même fonction peut avoir des développements de Laurent différents sur des couronnes différentes de même centre.

{{% details title="Exemple" closed="true" %}}
Soit \({f(z) = \dfrac{1}{z(1 - z)} = \dfrac{1}{z} + \dfrac{1}{1 - z}}\).

- Sur \({0 < |z| < 1}\) : \({f(z) = \dfrac{1}{z} + \displaystyle\sum_{n=0}^{+\infty} z^n}\).
- Sur \({|z| > 1}\) : \({\dfrac{1}{1 - z} = -\dfrac{1}{z} \times \dfrac{1}{1 - 1/z} = -\displaystyle\sum_{n=1}^{+\infty} \dfrac{1}{z^n}}\), donc \({f(z) = -\displaystyle\sum_{n=2}^{+\infty} \dfrac{1}{z^n}}\).
{{% /details %}}

## Singularités isolées

> [!TIP] **Définition**
>
> \(a\) est une **singularité isolée** de \(f\) si \(f\) est holomorphe sur un disque épointé \({D(a, r) \setminus \{a\}}\). On considère alors le développement de Laurent sur \({0 < |z - a| < r}\).
> - **Singularité effaçable** : la partie principale est nulle. \(f\) se prolonge en une fonction holomorphe en \(a\).
> - **Pôle d’ordre \(m\)** (\({m \geq 1}\)) : la partie principale est finie, \({a_{-m} \neq 0}\) et \({a_n = 0}\) pour \({n < -m}\).
> - **Singularité essentielle** : la partie principale a une infinité de termes non nuls.

> [!TIP] **Théorème - Caractérisations**
>
> - **Riemann** : \(a\) est effaçable si et seulement si \(f\) est **bornée** au voisinage de \(a\).
> - \(a\) est un **pôle** si et seulement si \({|f(z)| \to +\infty}\) quand \({z \to a}\). Il est d’ordre \(m\) si et seulement si \({(z - a)^mf(z)}\) a une limite finie **non nulle** en \(a\), ou encore si \({f = \dfrac{g}{(z - a)^m}}\) avec \(g\) holomorphe et \({g(a) \neq 0}\).
> - **Casorati-Weierstrass** : si \(a\) est une singularité essentielle, l’image par \(f\) de tout voisinage épointé de \(a\) est **dense** dans \(\mathbb{C}\) ; \(|f|\) n’a pas de limite en \(a\).
>
> Si \({f = \dfrac{g}{h}}\) avec \(g\), \(h\) holomorphes, \(a\) zéro d’ordre \(p\) de \(g\) et d’ordre \(q\) de \(h\) : si \({p \geq q}\), la singularité est effaçable ; sinon c’est un pôle d’ordre \({q - p}\).

{{% details title="Exemple" closed="true" %}}
- \({\dfrac{\sin z}{z}}\) a une singularité effaçable en \(0\) (zéros d’ordre \(1\) au numérateur et au dénominateur).
- \({\dfrac{e^z}{z^3}}\) a un pôle d’ordre \(3\) en \(0\).
- \({e^{1/z} = \displaystyle\sum_{n=0}^{+\infty} \dfrac{1}{n!\,z^n}}\) a une singularité essentielle en \(0\) : \({e^{1/x} \to +\infty}\) quand \({x \to 0^+}\) et \({e^{1/x} \to 0}\) quand \({x \to 0^-}\).
{{% /details %}}

> [!TIP] **Définition**
>
> Une fonction est **méromorphe** sur \(U\) si elle est holomorphe sur \(U\) privé d’un ensemble de points isolés qui sont des pôles. Les fractions rationnelles, \({\tan z}\), \({\dfrac{1}{\sin z}}\) sont méromorphes sur \(\mathbb{C}\).

## Résidus

> [!TIP] **Définition**
>
> Le **résidu** de \(f\) en une singularité isolée \(a\) est le coefficient \(a_{-1}\) de son développement de Laurent en \(a\) :
>
> \[ \operatorname{Res}(f, a) = a_{-1} = \dfrac{1}{2i\pi}\int_{C(a, \varepsilon)} f(z)\,\mathrm{d}z \quad (\varepsilon \text{ petit}). \]

C’est le seul terme du développement qui n’a pas de primitive : tous les autres ont une intégrale nulle sur un cercle.

> [!NOTE] **Méthode - Calculer un résidu**
>
> - **Pôle simple** : \({\operatorname{Res}(f, a) = \lim_{z \to a} (z - a)f(z)}\).
> - **Pôle simple d’un quotient** : si \({f = \dfrac{g}{h}}\) avec \({g(a) \neq 0}\), \({h(a) = 0}\), \({h'(a) \neq 0}\), alors \({\operatorname{Res}(f, a) = \dfrac{g(a)}{h'(a)}}\).
> - **Pôle d’ordre \(m\)** :
>
> \[ \operatorname{Res}(f, a) = \dfrac{1}{(m - 1)!}\lim_{z \to a} \dfrac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}}\Big[(z - a)^mf(z)\Big]. \]
>
> - **Cas général** (ordre élevé, singularité essentielle) : calculer le début du développement de Laurent à l’aide de développements limités, et lire le coefficient de \(\dfrac{1}{z - a}\).

## Théorème des résidus

> [!TIP] **Théorème des résidus**
>
> Soit \(U\) un ouvert simplement connexe, \(f\) holomorphe sur \(U\) privé d’un nombre fini de points \({a_1, \dots, a_p}\), et \(\gamma\) un lacet **simple** dans \(U\), parcouru dans le **sens direct**, ne passant par aucun \(a_k\). Alors
>
> \[ \int_\gamma f(z)\,\mathrm{d}z = 2i\pi\sum_{a_k \text{ intérieur à } \gamma} \operatorname{Res}(f, a_k). \]

{{% details title="Démonstration" closed="true" %}}
Idée. On retire à \(f\) ses parties principales \(P_k\) en chaque \(a_k\) : la fonction \({f - \sum P_k}\) a des singularités effaçables, donc se prolonge en une fonction holomorphe sur \(U\), d’intégrale nulle sur \(\gamma\) par le théorème de Cauchy. Il reste à intégrer chaque \(P_k\) : par déformation du contour, on se ramène à un petit cercle autour de \(a_k\) si \(a_k\) est intérieur (ce qui donne \({2i\pi\operatorname{Res}(f, a_k)}\), seul le terme en \(\dfrac{1}{z - a_k}\) contribuant), et à \(0\) si \(a_k\) est extérieur.
{{% /details %}}

> [!TIP] **Corollaire - Principe de l’argument**
>
> Soit \(f\) méromorphe sur \(U\) simplement connexe et \(\gamma\) un lacet simple, sens direct, ne passant par aucun zéro ni pôle de \(f\). Alors
>
> \[ \dfrac{1}{2i\pi}\int_\gamma \dfrac{f'(z)}{f(z)}\,\mathrm{d}z = Z - P, \]
>
> où \(Z\) et \(P\) sont les nombres de zéros et de pôles de \(f\) à l’intérieur de \(\gamma\), comptés avec multiplicité.
>
> **Théorème de Rouché** : si \(f\) et \(g\) sont holomorphes et si \({|g(z)| < |f(z)|}\) sur \(\gamma\), alors \(f\) et \({f + g}\) ont le même nombre de zéros à l’intérieur de \(\gamma\).

## Calcul d’intégrales réelles

> [!NOTE] **Méthode - Fractions rationnelles sur \(\mathbb{R}\)**
>
> Soit \({R = \dfrac{P}{Q}}\) une fraction rationnelle sans pôle réel, avec \({\deg Q \geq \deg P + 2}\). On intègre \(R\) sur le bord du demi-disque supérieur de rayon \(\rho\) : le segment \([-\rho, \rho]\) puis le demi-cercle. Sur le demi-cercle, \({|R(z)| \leq \dfrac{C}{\rho^2}}\) et la longueur est \(\pi\rho\) : la contribution tend vers \(0\). À la limite :
>
> \[ \int_{-\infty}^{+\infty} R(x)\,\mathrm{d}x = 2i\pi\sum_{\mathrm{Im}(a) > 0} \operatorname{Res}(R, a). \]

> [!NOTE] **Méthode - Intégrales trigonométriques sur une période**
>
> Pour \({\displaystyle\int_0^{2\pi} R(\cos\theta, \sin\theta)\,\mathrm{d}\theta}\), on pose \({z = e^{i\theta}}\) : \({\cos\theta = \dfrac{1}{2}\left(z + \dfrac{1}{z}\right)}\), \({\sin\theta = \dfrac{1}{2i}\left(z - \dfrac{1}{z}\right)}\), \({\mathrm{d}\theta = \dfrac{\mathrm{d}z}{iz}}\). L’intégrale devient celle d’une fraction rationnelle sur le cercle unité, que l’on calcule par les résidus aux pôles de module strictement inférieur à \(1\).

> [!NOTE] **Méthode - Intégrales de Fourier**
>
> Pour \({\displaystyle\int_{-\infty}^{+\infty} R(x)e^{i\xi x}\,\mathrm{d}x}\) avec \({\xi > 0}\) et \({\deg Q \geq \deg P + 1}\) : même contour dans le demi-plan supérieur, où \({|e^{i\xi z}| = e^{-\xi\,\mathrm{Im}(z)} \leq 1}\). Le **lemme de Jordan** assure que la contribution du demi-cercle tend vers \(0\). Pour \({\xi < 0}\), on ferme par le demi-plan inférieur (avec un signe \(-\), le contour étant parcouru dans le sens indirect).

> [!NOTE] **Exercice résolu - Trois intégrales par les résidus**
>
> Calculer \({I = \displaystyle\int_{-\infty}^{+\infty} \dfrac{\mathrm{d}x}{(1 + x^2)^2}}\), \({J = \displaystyle\int_0^{2\pi} \dfrac{\mathrm{d}\theta}{2 + \cos\theta}}\) et \({K = \displaystyle\int_{-\infty}^{+\infty} \dfrac{\cos x}{1 + x^2}\,\mathrm{d}x}\).

{{% details title="Solution commentée" closed="true" %}}
**Intégrale \(I\).** \({R(z) = \dfrac{1}{(1 + z^2)^2} = \dfrac{1}{(z - i)^2(z + i)^2}}\) n’a pas de pôle réel, et le degré du dénominateur dépasse celui du numérateur de \(4\). Le seul pôle du demi-plan supérieur est \(i\), d’ordre \(2\) :

\[
\operatorname{Res}(R, i) = \lim_{z \to i} \dfrac{\mathrm{d}}{\mathrm{d}z}\left[\dfrac{1}{(z + i)^2}\right] = \dfrac{-2}{(2i)^3} = \dfrac{-2}{-8i} = \dfrac{1}{4i}.
\]

Donc \({I = 2i\pi \times \dfrac{1}{4i} = \dfrac{\pi}{2}}\).

**Intégrale \(J\).** Avec \({z = e^{i\theta}}\) :

\[
J = \int_{C(0, 1)} \dfrac{1}{2 + \dfrac{1}{2}\left(z + \dfrac{1}{z}\right)} \times \dfrac{\mathrm{d}z}{iz} = \dfrac{2}{i}\int_{C(0, 1)} \dfrac{\mathrm{d}z}{z^2 + 4z + 1}.
\]

Les racines de \({z^2 + 4z + 1}\) sont \({-2 \pm \sqrt{3}}\). Seule \({z_1 = -2 + \sqrt{3} \approx -0{,}27}\) est dans le disque unité (l’autre, \({z_2 = -2 - \sqrt{3}}\), est de module supérieur à \(1\)). C’est un pôle simple, de résidu

\[
\dfrac{1}{2z_1 + 4} = \dfrac{1}{2\sqrt{3}}.
\]

Donc \({J = \dfrac{2}{i} \times 2i\pi \times \dfrac{1}{2\sqrt{3}} = \dfrac{2\pi}{\sqrt{3}}}\).

Vérification de cohérence : \({\dfrac{1}{3} \leq \dfrac{1}{2 + \cos\theta} \leq 1}\), donc \({\dfrac{2\pi}{3} \leq J \leq 2\pi}\), et \({\dfrac{2\pi}{\sqrt{3}} \approx 3{,}63}\) est bien dans \({[2{,}09 ; 6{,}28]}\).

**Intégrale \(K\).** \(K\) est la partie réelle de \({\displaystyle\int_{-\infty}^{+\infty} \dfrac{e^{ix}}{1 + x^2}\,\mathrm{d}x}\). Soit \({f(z) = \dfrac{e^{iz}}{1 + z^2}}\). Dans le demi-plan supérieur, \({|e^{iz}| \leq 1}\), donc sur le demi-cercle de rayon \(\rho\), \({|f(z)| \leq \dfrac{1}{\rho^2 - 1}}\) et la contribution, majorée par \({\dfrac{\pi\rho}{\rho^2 - 1}}\), tend vers \(0\). Le seul pôle du demi-plan supérieur est \(i\), simple :

\[
\operatorname{Res}(f, i) = \dfrac{e^{i \times i}}{2i} = \dfrac{e^{-1}}{2i}.
\]

Donc \({\displaystyle\int_{-\infty}^{+\infty} \dfrac{e^{ix}}{1 + x^2}\,\mathrm{d}x = 2i\pi \times \dfrac{e^{-1}}{2i} = \dfrac{\pi}{e}}\), qui est réel : \({K = \dfrac{\pi}{e}}\).

On retrouve la valeur \({\pi e^{-|x|}}\) en \({x = 1}\) obtenue par inversion de Fourier.
{{% /details %}}
