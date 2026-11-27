---
title: 'Intégrales doubles et triples'
weight: 1
cascade:
  type: docs
---

## Intégrale double sur un rectangle

> [!TIP] **Théorème de Fubini (rectangle)**
>
> Soit \(f\) continue sur le rectangle \({R = [a, b] \times [c, d]}\). Alors
>
> \[ \iint_R f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \int_a^b\left(\int_c^d f(x, y)\,\mathrm{d}y\right)\mathrm{d}x = \int_c^d\left(\int_a^b f(x, y)\,\mathrm{d}x\right)\mathrm{d}y. \]
>
> Si \(f\) est **à variables séparées**, \({f(x, y) = g(x)h(y)}\), alors \({\displaystyle\iint_R f = \left(\int_a^b g(x)\,\mathrm{d}x\right)\left(\int_c^d h(y)\,\mathrm{d}y\right)}\).

L’intégrale double de \(f\) positive est le **volume** situé sous la surface \({z = f(x, y)}\), au-dessus de \(R\). Le théorème de Fubini dit qu’on le calcule par tranches, dans l’ordre que l’on veut.

## Intégrale double sur un domaine

> [!TIP] **Théorème - Domaines élémentaires**
>
> Soit \(f\) continue sur \(D\).
> - Si \({D = \{(x, y),\ a \leq x \leq b,\ \varphi(x) \leq y \leq \psi(x)\}}\) avec \(\varphi\), \(\psi\) continues et \({\varphi \leq \psi}\) :
>
> \[ \iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \int_a^b\left(\int_{\varphi(x)}^{\psi(x)} f(x, y)\,\mathrm{d}y\right)\mathrm{d}x. \]
>
> - Si \({D = \{(x, y),\ c \leq y \leq d,\ \alpha(y) \leq x \leq \beta(y)\}}\) :
>
> \[ \iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \int_c^d\left(\int_{\alpha(y)}^{\beta(y)} f(x, y)\,\mathrm{d}x\right)\mathrm{d}y. \]

> [!TIP] **Propriétés**
>
> L’intégrale double est linéaire, positive (si \({f \geq 0}\), \({\iint_D f \geq 0}\)), croissante, additive par rapport au domaine (pour deux domaines qui ne se rencontrent que le long de leur bord), et \({\left|\iint_D f\right| \leq \iint_D |f|}\). L’**aire** de \(D\) est \({\displaystyle\iint_D 1\,\mathrm{d}x\,\mathrm{d}y}\).

> [!NOTE] **Méthode - Calculer une intégrale double**
>
> 1. **Dessiner** le domaine.
> 2. Choisir l’ordre d’intégration : fixer \(x\) entre deux constantes et décrire les \(y\) correspondants, ou l’inverse. Les bornes de l’intégrale **intérieure** peuvent dépendre de la variable extérieure ; celles de l’intégrale **extérieure** sont des constantes.
> 3. Calculer l’intégrale intérieure (l’autre variable étant une constante), puis l’intégrale extérieure.
> 4. Exploiter les symétries : si \(D\) est symétrique par rapport à l’axe \((Oy)\) et \(f\) impaire en \(x\), l’intégrale est nulle.

{{% details title="Exemple" closed="true" %}}
Soit \(D\) le triangle de sommets \((0, 0)\), \((1, 0)\), \((1, 1)\), soit \({D = \{0 \leq x \leq 1,\ 0 \leq y \leq x\}}\).

\[
\iint_D xy\,\mathrm{d}x\,\mathrm{d}y = \int_0^1 x\left(\int_0^x y\,\mathrm{d}y\right)\mathrm{d}x = \int_0^1 \dfrac{x^3}{2}\,\mathrm{d}x = \dfrac{1}{8}.
\]

Dans l’autre ordre, \({D = \{0 \leq y \leq 1,\ y \leq x \leq 1\}}\) :

\[
\int_0^1 y\left(\int_y^1 x\,\mathrm{d}x\right)\mathrm{d}y = \int_0^1 y \times \dfrac{1 - y^2}{2}\,\mathrm{d}y = \dfrac{1}{4} - \dfrac{1}{8} = \dfrac{1}{8}.
\]
{{% /details %}}

## Changement de variables

> [!TIP] **Théorème**
>
> Soit \({\Phi : \Delta \to D}\), \({(u, v) \mapsto (x(u, v), y(u, v))}\), une bijection de classe \(\mathcal{C}^1\) dont le **jacobien** \({\det J_\Phi = \dfrac{\partial x}{\partial u}\dfrac{\partial y}{\partial v} - \dfrac{\partial x}{\partial v}\dfrac{\partial y}{\partial u}}\) ne s’annule pas (sauf éventuellement sur le bord). Alors, pour \(f\) continue sur \(D\) :
>
> \[ \iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \iint_\Delta f\big(x(u, v), y(u, v)\big)\,\big|\det J_\Phi(u, v)\big|\,\mathrm{d}u\,\mathrm{d}v. \]

> [!IMPORTANT] **Remarque**
>
> C’est la **valeur absolue** du jacobien qui intervient, et il faut aussi transformer le domaine. En dimension 1, la formule \({\mathrm{d}x = \varphi'(t)\,\mathrm{d}t}\) n’a pas de valeur absolue parce que l’ordre des bornes en tient compte.

> [!TIP] **Coordonnées polaires**
>
> Avec \({x = r\cos\theta}\), \({y = r\sin\theta}\), le jacobien vaut \(r\) :
>
> \[ \iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \iint_\Delta f(r\cos\theta, r\sin\theta)\,r\,\mathrm{d}r\,\mathrm{d}\theta. \]
>
> On les utilise quand le domaine est un disque, une couronne ou un secteur, ou quand \(f\) dépend de \({x^2 + y^2}\).

{{% details title="Démonstration" closed="true" %}}
\[
\det J_\Phi = \begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{vmatrix} = r\cos^2\theta + r\sin^2\theta = r.
\]
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
**Intégrale de Gauss.** Soit \({I = \displaystyle\int_0^{+\infty} e^{-x^2}\,\mathrm{d}x}\). Alors, en intégrant sur le quart de plan (les intégrales convergent) :

\[
I^2 = \iint_{[0, +\infty[^2} e^{-(x^2 + y^2)}\,\mathrm{d}x\,\mathrm{d}y = \int_0^{\pi/2}\left(\int_0^{+\infty} e^{-r^2}r\,\mathrm{d}r\right)\mathrm{d}\theta = \dfrac{\pi}{2} \times \left[-\dfrac{e^{-r^2}}{2}\right]_0^{+\infty} = \dfrac{\pi}{4}.
\]

Donc \({I = \dfrac{\sqrt{\pi}}{2}}\), et par parité \({\displaystyle\int_{-\infty}^{+\infty} e^{-x^2}\,\mathrm{d}x = \sqrt{\pi}}\).
{{% /details %}}

## Intégrales triples

> [!TIP] **Théorème**
>
> Pour \(f\) continue sur un domaine \(V\) de \(\mathbb{R}^3\), l’intégrale triple se calcule par intégrations successives. Deux découpages classiques :
> - **en piles** : si \({V = \{(x, y) \in D,\ \varphi(x, y) \leq z \leq \psi(x, y)\}}\), alors \({\displaystyle\iiint_V f = \iint_D\left(\int_{\varphi(x, y)}^{\psi(x, y)} f(x, y, z)\,\mathrm{d}z\right)\mathrm{d}x\,\mathrm{d}y}\) ;
> - **en tranches** : si \(V\) est compris entre les plans \({z = a}\) et \({z = b}\) et si \(D_z\) est la section de \(V\) à la cote \(z\), alors \({\displaystyle\iiint_V f = \int_a^b\left(\iint_{D_z} f(x, y, z)\,\mathrm{d}x\,\mathrm{d}y\right)\mathrm{d}z}\).
>
> Le **volume** de \(V\) est \({\displaystyle\iiint_V 1}\).

> [!TIP] **Coordonnées cylindriques et sphériques**
>
> - **Cylindriques** : \({x = r\cos\theta}\), \({y = r\sin\theta}\), \(z\) inchangé ; \({\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z = r\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}z}\).
> - **Sphériques** : \({x = r\sin\varphi\cos\theta}\), \({y = r\sin\varphi\sin\theta}\), \({z = r\cos\varphi}\), avec \({r \geq 0}\), \({\varphi \in [0, \pi]}\) (colatitude), \({\theta \in [0, 2\pi]}\) ; \({\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z = r^2\sin\varphi\,\mathrm{d}r\,\mathrm{d}\varphi\,\mathrm{d}\theta}\).

{{% details title="Exemple" closed="true" %}}
Volume de la boule de rayon \(R\) en coordonnées sphériques (variables séparées) :

\[
\iiint_{B} 1 = \int_0^R r^2\,\mathrm{d}r \times \int_0^\pi \sin\varphi\,\mathrm{d}\varphi \times \int_0^{2\pi} \mathrm{d}\theta = \dfrac{R^3}{3} \times 2 \times 2\pi = \dfrac{4}{3}\pi R^3.
\]
{{% /details %}}

> [!TIP] **Applications**
>
> Pour une plaque \(D\) de densité surfacique \(\rho(x, y)\) : la masse est \({m = \displaystyle\iint_D \rho}\), et le **centre de gravité** a pour coordonnées \({x_G = \dfrac{1}{m}\displaystyle\iint_D x\rho}\), \({y_G = \dfrac{1}{m}\displaystyle\iint_D y\rho}\).

> [!NOTE] **Exercice résolu - Ordre d’intégration et coordonnées polaires**
>
> 1. Calculer \({I = \displaystyle\int_0^1\left(\int_x^1 e^{y^2}\,\mathrm{d}y\right)\mathrm{d}x}\).
> 2. Calculer \({J = \displaystyle\iint_D \dfrac{\mathrm{d}x\,\mathrm{d}y}{1 + x^2 + y^2}}\), où \(D\) est le demi-disque \({\{x^2 + y^2 \leq 3,\ y \geq 0\}}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** On ne sait pas exprimer une primitive de \({y \mapsto e^{y^2}}\) : on change l’ordre d’intégration. Le domaine est \({\{0 \leq x \leq 1,\ x \leq y \leq 1\}}\), triangle de sommets \((0, 0)\), \((0, 1)\), \((1, 1)\), que l’on décrit aussi par \({\{0 \leq y \leq 1,\ 0 \leq x \leq y\}}\). D’après le théorème de Fubini :

\[
I = \int_0^1\left(\int_0^y e^{y^2}\,\mathrm{d}x\right)\mathrm{d}y = \int_0^1 ye^{y^2}\,\mathrm{d}y = \left[\dfrac{e^{y^2}}{2}\right]_0^1 = \dfrac{e - 1}{2}.
\]

**2.** En coordonnées polaires, \(D\) correspond à \({0 \leq r \leq \sqrt{3}}\) et \({0 \leq \theta \leq \pi}\). La fonction ne dépend que de \(r\) :

\[
J = \int_0^\pi \mathrm{d}\theta \times \int_0^{\sqrt{3}} \dfrac{r}{1 + r^2}\,\mathrm{d}r = \pi \times \left[\dfrac{1}{2}\ln(1 + r^2)\right]_0^{\sqrt{3}} = \dfrac{\pi}{2}\ln 4 = \pi\ln 2.
\]
{{% /details %}}
