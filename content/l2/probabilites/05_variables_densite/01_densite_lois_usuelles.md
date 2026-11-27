---
title: 'Densité, espérance, lois usuelles'
weight: 1
cascade:
  type: docs
---

## Variables à densité

> [!TIP] **Définition**
>
> Une **densité de probabilité** est une fonction \({f : \mathbb{R} \to \mathbb{R}}\) positive, continue par morceaux, telle que \({\displaystyle\int_{-\infty}^{+\infty} f(t)\,\mathrm{d}t = 1}\).
>
> Une variable aléatoire réelle \(X\) est **à densité** \(f\) si, pour tous \({a \leq b}\) (éventuellement infinis) :
>
> \[ P(a \leq X \leq b) = \int_a^b f(t)\,\mathrm{d}t. \]

> [!TIP] **Propriétés**
>
> - Pour tout réel \(a\), \({P(X = a) = 0}\). Les inégalités larges ou strictes donnent donc les mêmes probabilités.
> - La **fonction de répartition** \({F(x) = P(X \leq x) = \displaystyle\int_{-\infty}^{x} f(t)\,\mathrm{d}t}\) est continue sur \(\mathbb{R}\), croissante, de limites \(0\) en \(-\infty\) et \(1\) en \(+\infty\), et \({F'(x) = f(x)}\) en tout point où \(f\) est continue.
> - \({P(a < X \leq b) = F(b) - F(a)}\).
> - Réciproquement, si la fonction de répartition de \(X\) est continue sur \(\mathbb{R}\) et de classe \(\mathcal{C}^1\) sauf en un nombre fini de points, alors \(X\) est à densité, et \({f = F'}\) (là où \(F\) est dérivable) est une densité.

> [!IMPORTANT] **Remarque**
>
> Une densité n’est pas une probabilité : elle peut dépasser \(1\) (la densité uniforme sur \({\left[0, \dfrac{1}{2}\right]}\) vaut \(2\)). C’est \({f(x)\,\mathrm{d}x}\) qui s’interprète comme la probabilité que \(X\) soit dans un petit intervalle de longueur \(\mathrm{d}x\) autour de \(x\).

## Espérance et variance

> [!TIP] **Définition et théorème**
>
> \(X\) de densité \(f\) est **d’espérance finie** si \({\displaystyle\int_{-\infty}^{+\infty} |x|f(x)\,\mathrm{d}x}\) converge, et alors
>
> \[ E(X) = \int_{-\infty}^{+\infty} xf(x)\,\mathrm{d}x. \]
>
> **Théorème de transfert** : pour \(g\) continue par morceaux, si l’intégrale converge absolument,
>
> \[ E(g(X)) = \int_{-\infty}^{+\infty} g(x)f(x)\,\mathrm{d}x. \]
>
> La variance est \({V(X) = E\big((X - E(X))^2\big) = E(X^2) - E(X)^2}\), avec \({E(X^2) = \displaystyle\int_{-\infty}^{+\infty} x^2f(x)\,\mathrm{d}x}\).

Les propriétés de l’espérance et de la variance (linéarité, croissance, \({V(aX + b) = a^2V(X)}\), additivité de la variance pour des variables indépendantes) sont les mêmes que dans le cas discret.

## Lois usuelles

> [!TIP] **Loi uniforme \(\mathcal{U}([a, b])\)**
>
> Densité : \({f(x) = \dfrac{1}{b - a}}\) si \({x \in [a, b]}\), \(0\) sinon. Fonction de répartition : \({F(x) = \dfrac{x - a}{b - a}}\) sur \([a, b]\).
>
> \[ E(X) = \dfrac{a + b}{2}, \qquad V(X) = \dfrac{(b - a)^2}{12}. \]
>
> La probabilité d’un intervalle inclus dans \([a, b]\) est proportionnelle à sa longueur.

> [!TIP] **Loi exponentielle \(\mathcal{E}(\lambda)\), \({\lambda > 0}\)**
>
> Densité : \({f(x) = \lambda e^{-\lambda x}}\) si \({x \geq 0}\), \(0\) sinon. Pour \({t \geq 0}\) : \({F(t) = 1 - e^{-\lambda t}}\) et \({P(X > t) = e^{-\lambda t}}\).
>
> \[ E(X) = \dfrac{1}{\lambda}, \qquad V(X) = \dfrac{1}{\lambda^2}. \]
>
> **Absence de mémoire** : pour tous \({s, t \geq 0}\), \({P_{X > s}(X > s + t) = P(X > t)}\). Elle modélise des durées de vie sans vieillissement et des temps d’attente.

{{% details title="Démonstration" closed="true" %}}
Espérance, par intégration par parties sur \([0, A]\) puis passage à la limite :

\[
\int_0^A x\lambda e^{-\lambda x}\,\mathrm{d}x = \big[-xe^{-\lambda x}\big]_0^A + \int_0^A e^{-\lambda x}\,\mathrm{d}x \xrightarrow[A \to +\infty]{} 0 + \dfrac{1}{\lambda}.
\]

De même, \({E(X^2) = \dfrac{2}{\lambda^2}}\), d’où \({V(X) = \dfrac{2}{\lambda^2} - \dfrac{1}{\lambda^2}}\).

Absence de mémoire : \({P_{X > s}(X > s + t) = \dfrac{P(X > s + t)}{P(X > s)} = \dfrac{e^{-\lambda(s + t)}}{e^{-\lambda s}} = e^{-\lambda t}}\).
{{% /details %}}

> [!TIP] **Loi normale \(\mathcal{N}(m, \sigma^2)\), \({\sigma > 0}\)**
>
> Densité :
>
> \[ f(x) = \dfrac{1}{\sigma\sqrt{2\pi}}\exp\left(-\dfrac{(x - m)^2}{2\sigma^2}\right), \qquad E(X) = m, \quad V(X) = \sigma^2. \]
>
> La loi \(\mathcal{N}(0, 1)\) est la loi normale **centrée réduite**, de densité \({\varphi(x) = \dfrac{1}{\sqrt{2\pi}}e^{-x^2/2}}\) et de fonction de répartition notée \(\Phi\).
> - **Standardisation** : \({X \sim \mathcal{N}(m, \sigma^2)}\) si et seulement si \({Z = \dfrac{X - m}{\sigma} \sim \mathcal{N}(0, 1)}\).
> - **Symétrie** : \({\Phi(-x) = 1 - \Phi(x)}\), donc \({P(|Z| \leq x) = 2\Phi(x) - 1}\).
> - **Stabilité** : si \({X \sim \mathcal{N}(m_1, \sigma_1^2)}\) et \({Y \sim \mathcal{N}(m_2, \sigma_2^2)}\) sont indépendantes, alors \({X + Y \sim \mathcal{N}(m_1 + m_2, \sigma_1^2 + \sigma_2^2)}\).
> - Valeurs à connaître : \({P(|X - m| \leq \sigma) \approx 0{,}68}\), \({P(|X - m| \leq 1{,}96\sigma) \approx 0{,}95}\), \({P(|X - m| \leq 3\sigma) \approx 0{,}997}\).

Le fait que \(\varphi\) soit une densité vient de l’intégrale de Gauss : \({\displaystyle\int_{-\infty}^{+\infty} e^{-x^2/2}\,\mathrm{d}x = \sqrt{2\pi}}\). La fonction \(\Phi\) ne s’exprime pas avec les fonctions usuelles : on utilise une table ou une calculatrice.

## Loi d’une fonction de \(X\)

> [!NOTE] **Méthode - Loi de \({Y = g(X)}\)**
>
> 1. Déterminer l’ensemble des valeurs prises par \(Y\).
> 2. Pour \(y\) dans cet ensemble, exprimer l’événement \({\{Y \leq y\}}\) à l’aide de \(X\) et calculer \({F_Y(y) = P(g(X) \leq y)}\) avec \(F_X\).
> 3. Vérifier que \(F_Y\) est continue et \(\mathcal{C}^1\) par morceaux, puis dériver pour obtenir une densité.

{{% details title="Exemple" closed="true" %}}
**Transformation affine.** Si \(X\) a pour densité \(f\) et \({a > 0}\), alors \({Y = aX + b}\) vérifie \({F_Y(y) = P\left(X \leq \dfrac{y - b}{a}\right) = F_X\left(\dfrac{y - b}{a}\right)}\), donc a pour densité \({y \mapsto \dfrac{1}{a}f\left(\dfrac{y - b}{a}\right)}\). C’est ainsi que l’on passe de \(\mathcal{N}(0, 1)\) à \(\mathcal{N}(m, \sigma^2)\).

**Simulation.** Si \({U \sim \mathcal{U}([0, 1[)}\) et \({\lambda > 0}\), alors \({X = -\dfrac{1}{\lambda}\ln(1 - U)}\) vérifie, pour \({t \geq 0}\) : \({P(X \leq t) = P\left(U \leq 1 - e^{-\lambda t}\right) = 1 - e^{-\lambda t}}\). Donc \({X \sim \mathcal{E}(\lambda)}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Carré d’une uniforme et minimum d’exponentielles**
>
> 1. Soit \({X \sim \mathcal{U}([-1, 1])}\). Déterminer une densité de \({Y = X^2}\) et calculer \(E(Y)\).
> 2. Soient \(T_1\) et \(T_2\) indépendantes de lois \(\mathcal{E}(\lambda_1)\) et \(\mathcal{E}(\lambda_2)\). Quelle est la loi de \({M = \min(T_1, T_2)}\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** \(X\) a pour densité \(\dfrac{1}{2}\) sur \([-1, 1]\), et \(Y\) prend ses valeurs dans \([0, 1]\). Pour \({y \in [0, 1]}\) :

\[
F_Y(y) = P(X^2 \leq y) = P\left(-\sqrt{y} \leq X \leq \sqrt{y}\right) = \dfrac{2\sqrt{y}}{2} = \sqrt{y}.
\]

De plus \({F_Y(y) = 0}\) pour \({y < 0}\) et \({F_Y(y) = 1}\) pour \({y > 1}\). \(F_Y\) est continue sur \(\mathbb{R}\) et de classe \(\mathcal{C}^1\) sauf en \(0\) et \(1\) : \(Y\) est à densité, et

\[
f_Y(y) = \dfrac{1}{2\sqrt{y}} \text{ si } 0 < y < 1, \qquad f_Y(y) = 0 \text{ sinon}.
\]

Cette densité n’est pas bornée près de \(0\), mais elle est intégrable.

Pour l’espérance, le théorème de transfert évite de passer par \(f_Y\) :

\[
E(Y) = E(X^2) = \int_{-1}^{1} \dfrac{x^2}{2}\,\mathrm{d}x = \dfrac{1}{3}.
\]

Vérification avec \(f_Y\) : \({\displaystyle\int_0^1 \dfrac{y}{2\sqrt{y}}\,\mathrm{d}y = \dfrac{1}{2}\int_0^1 \sqrt{y}\,\mathrm{d}y = \dfrac{1}{2} \times \dfrac{2}{3} = \dfrac{1}{3}}\).

**2.** Pour \({t \geq 0}\), \({\{M > t\} = \{T_1 > t\} \cap \{T_2 > t\}}\), et par indépendance :

\[
P(M > t) = e^{-\lambda_1 t}e^{-\lambda_2 t} = e^{-(\lambda_1 + \lambda_2)t}.
\]

Donc \({F_M(t) = 1 - e^{-(\lambda_1 + \lambda_2)t}}\) pour \({t \geq 0}\) : \({M \sim \mathcal{E}(\lambda_1 + \lambda_2)}\). En particulier \({E(M) = \dfrac{1}{\lambda_1 + \lambda_2}}\).
{{% /details %}}
