---
title: 'Intégrale et primitives'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \({a < b}\) sont deux réels.

## Construction de l’intégrale

> [!TIP] **Définition - Fonctions en escalier**
>
> Une fonction \({\varphi : [a, b] \to \mathbb{R}}\) est **en escalier** s’il existe une subdivision \({a = x_0 < x_1 < \dots < x_n = b}\) telle que \(\varphi\) soit constante, égale à \(c_i\), sur chaque intervalle ouvert \({]x_{i-1}, x_i[}\). Son intégrale est
>
> \[ \int_a^b \varphi = \sum_{i=1}^{n} c_i(x_i - x_{i-1}). \]
>
> C’est l’aire algébrique entre la courbe et l’axe des abscisses, comptée positivement au-dessus de l’axe et négativement en dessous.

> [!TIP] **Définition - Fonctions continues par morceaux**
>
> Une fonction \({f : [a, b] \to \mathbb{R}}\) est **continue par morceaux** s’il existe une subdivision \({a = x_0 < \dots < x_n = b}\) telle que \(f\) soit continue sur chaque \({]x_{i-1}, x_i[}\) et admette des limites finies à droite en \(x_{i-1}\) et à gauche en \(x_i\).

> [!TIP] **Théorème et définition**
>
> Soit \(f\) continue par morceaux sur \([a, b]\). Pour tout \({\varepsilon > 0}\), il existe des fonctions en escalier \(\varphi\) et \(\psi\) telles que \({\varphi \leq f \leq \psi}\) et \({\displaystyle\int_a^b (\psi - \varphi) \leq \varepsilon}\). Par conséquent,
>
> \[ \sup\left\{\int_a^b \varphi,\ \varphi \text{ en escalier},\ \varphi \leq f\right\} = \inf\left\{\int_a^b \psi,\ \psi \text{ en escalier},\ \psi \geq f\right\}. \]
>
> Cette valeur commune est l’**intégrale** de \(f\) sur \([a, b]\), notée \({\displaystyle\int_a^b f}\) ou \({\displaystyle\int_a^b f(t)\,\mathrm{d}t}\).
>
> On pose \({\displaystyle\int_a^a f = 0}\) et \({\displaystyle\int_b^a f = -\int_a^b f}\).

## Propriétés de l’intégrale

> [!TIP] **Théorème**
>
> Soient \(f\) et \(g\) continues par morceaux sur \([a, b]\), et \(\lambda\) un réel.
> - **Linéarité** : \({\displaystyle\int_a^b (\lambda f + g) = \lambda\int_a^b f + \int_a^b g}\).
> - **Relation de Chasles** : pour tout \(c\), \({\displaystyle\int_a^b f = \int_a^c f + \int_c^b f}\).
> - **Positivité** : si \({f \geq 0}\) sur \([a, b]\), alors \({\displaystyle\int_a^b f \geq 0}\).
> - **Croissance** : si \({f \leq g}\) sur \([a, b]\), alors \({\displaystyle\int_a^b f \leq \int_a^b g}\).
> - **Inégalité triangulaire** : \({\left|\displaystyle\int_a^b f\right| \leq \int_a^b |f|}\).
> - **Inégalité de la moyenne** : si \({m \leq f \leq M}\) sur \([a, b]\), alors \({m(b - a) \leq \displaystyle\int_a^b f \leq M(b - a)}\).

> [!IMPORTANT] **Remarque**
>
> La positivité, la croissance et l’inégalité triangulaire supposent les bornes **dans le bon ordre** (\({a \leq b}\)).

> [!TIP] **Théorème - Intégrale nulle d’une fonction positive**
>
> Soit \(f\) **continue** et **positive** sur \([a, b]\). Si \({\displaystyle\int_a^b f = 0}\), alors \(f\) est nulle sur \([a, b]\).
>
> De façon équivalente : si \(f\) est continue, positive et non identiquement nulle, alors \({\displaystyle\int_a^b f > 0}\).

{{% details title="Démonstration" closed="true" %}}
Par contraposée. Supposons qu’il existe \({c \in [a, b]}\) tel que \({f(c) > 0}\). Par continuité, il existe un segment \({[\alpha, \beta] \subset [a, b]}\), avec \({\alpha < \beta}\), sur lequel \({f \geq \dfrac{f(c)}{2}}\). Alors, par positivité et relation de Chasles :

\[
\int_a^b f \geq \int_\alpha^\beta f \geq \dfrac{f(c)}{2}(\beta - \alpha) > 0.
\]
{{% /details %}}

> [!TIP] **Définition et propriété - Valeur moyenne**
>
> La **valeur moyenne** de \(f\) sur \([a, b]\) est \({\mu = \dfrac{1}{b - a}\displaystyle\int_a^b f}\). Si \(f\) est continue, il existe \({c \in [a, b]}\) tel que \({f(c) = \mu}\).

> [!TIP] **Théorème - Inégalité de Cauchy-Schwarz**
>
> Pour \(f\) et \(g\) continues sur \([a, b]\) :
>
> \[ \left(\int_a^b fg\right)^2 \leq \left(\int_a^b f^2\right)\left(\int_a^b g^2\right). \]

{{% details title="Démonstration" closed="true" %}}
Pour tout réel \(\lambda\), \({\displaystyle\int_a^b (\lambda f + g)^2 \geq 0}\), soit \({\lambda^2\displaystyle\int_a^b f^2 + 2\lambda\int_a^b fg + \int_a^b g^2 \geq 0}\). Si \({\displaystyle\int_a^b f^2 > 0}\), c’est un trinôme en \(\lambda\) de signe constant : son discriminant est négatif ou nul, ce qui est l’inégalité voulue. Si \({\displaystyle\int_a^b f^2 = 0}\), alors \({f = 0}\) et l’inégalité est évidente.
{{% /details %}}

## Sommes de Riemann

> [!TIP] **Théorème**
>
> Soit \(f\) continue sur \([a, b]\). Alors
>
> \[ \dfrac{b - a}{n}\sum_{k=0}^{n-1} f\left(a + k\dfrac{b - a}{n}\right) \xrightarrow[n \to +\infty]{} \int_a^b f(t)\,\mathrm{d}t. \]
>
> Le résultat reste vrai avec une somme de \({k = 1}\) à \(n\). Sur \([0, 1]\) : \({\dfrac{1}{n}\displaystyle\sum_{k=1}^{n} f\left(\dfrac{k}{n}\right) \to \int_0^1 f}\).

{{% details title="Exemple" closed="true" %}}
\[
\sum_{k=1}^{n} \dfrac{1}{n + k} = \dfrac{1}{n}\sum_{k=1}^{n} \dfrac{1}{1 + \dfrac{k}{n}} \xrightarrow[n \to +\infty]{} \int_0^1 \dfrac{\mathrm{d}x}{1 + x} = \ln 2.
\]
{{% /details %}}

## Primitives

> [!TIP] **Définition**
>
> Une **primitive** de \(f\) sur un intervalle \(I\) est une fonction \(F\) dérivable sur \(I\) telle que \({F' = f}\). Deux primitives de \(f\) sur un intervalle diffèrent d’une constante.

> [!TIP] **Théorème fondamental de l’analyse**
>
> Soit \(f\) **continue** sur un intervalle \(I\) et \({a \in I}\). La fonction
>
> \[ F : x \mapsto \int_a^x f(t)\,\mathrm{d}t \]
>
> est de classe \(\mathcal{C}^1\) sur \(I\), et c’est l’unique primitive de \(f\) qui s’annule en \(a\). Par conséquent, pour toute primitive \(G\) de \(f\) :
>
> \[ \int_a^b f(t)\,\mathrm{d}t = G(b) - G(a) = \big[G(t)\big]_a^b. \]

{{% details title="Démonstration" closed="true" %}}
Soit \({x_0 \in I}\) et \({h \neq 0}\) tel que \({x_0 + h \in I}\). Par relation de Chasles,

\[
\dfrac{F(x_0 + h) - F(x_0)}{h} - f(x_0) = \dfrac{1}{h}\int_{x_0}^{x_0 + h} \big(f(t) - f(x_0)\big)\,\mathrm{d}t.
\]

Soit \({\varepsilon > 0}\). Par continuité de \(f\) en \(x_0\), il existe \({\eta > 0}\) tel que \({|f(t) - f(x_0)| \leq \varepsilon}\) dès que \({|t - x_0| \leq \eta}\). Pour \({|h| \leq \eta}\), l’inégalité triangulaire donne

\[
\left|\dfrac{F(x_0 + h) - F(x_0)}{h} - f(x_0)\right| \leq \dfrac{1}{|h|} \times |h|\,\varepsilon = \varepsilon.
\]

Donc \(F\) est dérivable en \(x_0\) et \({F'(x_0) = f(x_0)}\). Comme \({F' = f}\) est continue, \(F\) est de classe \(\mathcal{C}^1\).
{{% /details %}}

> [!TIP] **Conséquence**
>
> Si \(f\) est de classe \(\mathcal{C}^1\) sur \(I\), alors pour tous \(a\), \(x\) dans \(I\) : \({f(x) = f(a) + \displaystyle\int_a^x f'(t)\,\mathrm{d}t}\).

> [!TIP] **Primitives usuelles**
>
> | Fonction | Une primitive | Intervalle |
> |---|---|---|
> | \(x^\alpha\) (\({\alpha \neq -1}\)) | \(\dfrac{x^{\alpha + 1}}{\alpha + 1}\) | \({]0, +\infty[}\) (ou \(\mathbb{R}\) si \({\alpha \in \mathbb{N}}\)) |
> | \(\dfrac{1}{x}\) | \(\ln\lvert x\rvert\) | \({]-\infty, 0[}\) ou \({]0, +\infty[}\) |
> | \(e^{ax}\) (\({a \neq 0}\)) | \(\dfrac{e^{ax}}{a}\) | \(\mathbb{R}\) |
> | \(\cos x\) | \(\sin x\) | \(\mathbb{R}\) |
> | \(\sin x\) | \(-\cos x\) | \(\mathbb{R}\) |
> | \(\dfrac{1}{\cos^2 x} = 1 + \tan^2 x\) | \(\tan x\) | \({\left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[}\) |
> | \(\operatorname{ch} x\) | \(\operatorname{sh} x\) | \(\mathbb{R}\) |
> | \(\operatorname{sh} x\) | \(\operatorname{ch} x\) | \(\mathbb{R}\) |
> | \(\dfrac{1}{1 + x^2}\) | \(\arctan x\) | \(\mathbb{R}\) |
> | \(\dfrac{1}{\sqrt{1 - x^2}}\) | \(\arcsin x\) | \({]-1, 1[}\) |
> | \(\ln x\) | \(x\ln x - x\) | \({]0, +\infty[}\) |
>
> Formes composées : \(u'u^\alpha\) a pour primitive \(\dfrac{u^{\alpha+1}}{\alpha + 1}\) ; \(\dfrac{u'}{u}\) a pour primitive \(\ln\lvert u\rvert\) ; \(u'e^u\) a pour primitive \(e^u\) ; \(\dfrac{u'}{1 + u^2}\) a pour primitive \(\arctan u\).

> [!NOTE] **Exercice résolu - Dériver une intégrale dépendant de ses bornes**
>
> Soit \({G(x) = \displaystyle\int_x^{x^2} \dfrac{\mathrm{d}t}{\ln t}}\) pour \({x > 1}\). Montrer que \(G\) est dérivable sur \({]1, +\infty[}\), calculer \(G'\) et en déduire le sens de variation de \(G\).

{{% details title="Solution commentée" closed="true" %}}
La fonction \({f : t \mapsto \dfrac{1}{\ln t}}\) est continue sur \({]1, +\infty[}\) : elle y admet une primitive \(F\), de classe \(\mathcal{C}^1\). Pour \({x > 1}\), on a \({x^2 > 1}\) aussi, et

\[
G(x) = F(x^2) - F(x).
\]

\(G\) est donc dérivable comme composée et différence de fonctions dérivables, et

\[
G'(x) = 2x\,f(x^2) - f(x) = \dfrac{2x}{\ln(x^2)} - \dfrac{1}{\ln x} = \dfrac{2x}{2\ln x} - \dfrac{1}{\ln x} = \dfrac{x - 1}{\ln x}.
\]

Pour \({x > 1}\), \({x - 1 > 0}\) et \({\ln x > 0}\), donc \({G'(x) > 0}\) : \(G\) est strictement croissante sur \({]1, +\infty[}\).
{{% /details %}}
