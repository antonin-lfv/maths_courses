---
title: "Calculs d'intégrales et applications"
weight: 3
cascade:
  type: docs
---

## Intégration par parties

> [!TIP] **Théorème**
>
> Soient \(u\) et \(v\) deux fonctions dérivables sur un intervalle \(I\), dont les dérivées \(u'\) et \(v'\) sont continues sur \(I\). Pour tous réels \(a\) et \(b\) de \(I\) :
> \[
\int_a^b u(x)v'(x)\,\mathrm{d}x = \big[u(x)v(x)\big]_a^b - \int_a^b u'(x)v(x)\,\mathrm{d}x.
\]

> [!IMPORTANT] **Remarque**
>
> Cette formule vient de la dérivée d’un produit, \({(uv)' = u'v + uv'}\), intégrée entre \(a\) et \(b\). On l’utilise quand on ne connaît pas de primitive de \(uv'\) mais que \(u'v\) est plus simple : en pratique, on choisit pour \(u\) un facteur qui se simplifie en dérivant (polynôme, \(\ln\)…).

{{% details title="Exemple" closed="true" %}}
On calcule \(\displaystyle\int_0^1 xe^x\,\mathrm{d}x\). On pose \({u(x) = x}\) et \({v'(x) = e^x}\), d’où \({u'(x) = 1}\) et \({v(x) = e^x}\) (fonctions dérivables, de dérivées continues sur \([0\,;\,1]\)) :
\[
\int_0^1 xe^x\,\mathrm{d}x = \big[xe^x\big]_0^1 - \int_0^1 e^x\,\mathrm{d}x = e - \big[e^x\big]_0^1 = e - (e - 1) = 1.
\]
{{% /details %}}

## Calcul d’aires

Dans ce paragraphe, \(f\) est une fonction continue sur un intervalle \(I\), \(a\) et \(b\) sont deux réels de \(I\) avec \({a < b}\), et \(\mathcal{D}\) est le domaine compris entre la courbe de \(f\), l’axe des abscisses et les droites d’équations \({x = a}\) et \({x = b}\).

> [!TIP] **Propriétés**
>
> - Si \(f\) est **positive** sur \([a\,;\,b]\), l’aire de \(\mathcal{D}\), en unités d’aire, est \(\displaystyle\int_a^b f(x)\,\mathrm{d}x\).
> - Si \(f\) est **négative** sur \([a\,;\,b]\), l’aire de \(\mathcal{D}\), en unités d’aire, est \({\displaystyle-\int_a^b f(x)\,\mathrm{d}x}\).

> [!IMPORTANT] **Remarque**
>
> Si \(f\) change de signe sur \([a\,;\,b]\), on découpe l’intervalle (relation de Chasles) en sous-intervalles sur lesquels \(f\) garde un signe constant, et on additionne les aires obtenues.

{{% details title="Exemple" closed="true" %}}
On calcule l’aire du domaine compris entre la courbe de \({f : x \mapsto x^2 - 1}\), l’axe des abscisses et les droites \({x = 0}\) et \({x = 2}\). \(f\) est négative sur \([0\,;\,1]\) et positive sur \([1\,;\,2]\). Une primitive est \({F(x) = \dfrac{x^3}{3} - x}\).
- \({\displaystyle\int_0^1 f(x)\,\mathrm{d}x = F(1) - F(0) = -\dfrac{2}{3}}\) : l’aire de la partie située sous l’axe est \(\dfrac{2}{3}\).
- \(\displaystyle\int_1^2 f(x)\,\mathrm{d}x = F(2) - F(1) = \dfrac{2}{3} + \dfrac{2}{3} = \dfrac{4}{3}\).

L’aire cherchée vaut \({\dfrac{2}{3} + \dfrac{4}{3} = 2}\) u.a. (alors que \({\displaystyle\int_0^2 f(x)\,\mathrm{d}x = \dfrac{2}{3}}\) seulement).

![](/images/image303.png)
{{% /details %}}

> [!TIP] **Propriété (admise) : aire entre deux courbes**
>
> Soient \(f\) et \(g\) deux fonctions continues sur \(I\) telles que \({g(x) \leq f(x)}\) pour tout \({x \in [a\,;\,b]}\). L’aire, en unités d’aire, du domaine compris entre les courbes de \(f\) et de \(g\) et les droites d’équations \({x = a}\) et \({x = b}\) est
> \[
\int_a^b \big(f(x) - g(x)\big)\,\mathrm{d}x.
\]

{{% details title="Exemple" closed="true" %}}
On considère \({f(x) = -x^2 + 4}\) et \({g(x) = x + 2}\). Les courbes se coupent quand \({-x^2 + 4 = x + 2}\), soit \({x^2 + x - 2 = 0}\), c’est-à-dire en \({x = -2}\) et \({x = 1}\) ; et \({f(x) - g(x) = -x^2 - x + 2 \geq 0}\) sur \({[-2\,;\,1]}\). L’aire du domaine compris entre les deux courbes vaut
\[
\int_{-2}^{1} (-x^2 - x + 2)\,\mathrm{d}x = \left[-\dfrac{x^3}{3} - \dfrac{x^2}{2} + 2x\right]_{-2}^{1} = \dfrac{7}{6} - \left(-\dfrac{10}{3}\right) = \dfrac{9}{2} \text{ u.a.}
\]

![](/images/image304.png)
{{% /details %}}

## Valeur moyenne d’une fonction (généralisation)

> [!TIP] **Définition**
>
> Soit \(f\) une fonction continue sur \(I\), et \({a < b}\) deux réels de \(I\). La **valeur moyenne** de \(f\) sur \([a\,;\,b]\) est le nombre réel
> \[
m = \dfrac{1}{b - a}\int_a^b f(x)\,\mathrm{d}x.
\]

{{% details title="Exemple" closed="true" %}}
La valeur moyenne de la fonction sinus sur \([0\,;\,\pi]\) est
\[
m = \dfrac{1}{\pi}\int_0^{\pi} \sin(x)\,\mathrm{d}x = \dfrac{1}{\pi}\big[-\cos(x)\big]_0^{\pi} = \dfrac{1}{\pi}(1 + 1) = \dfrac{2}{\pi} \approx 0{,}64.
\]
{{% /details %}}

## Calculer une intégrale à l’aide d’une intégration par parties

> [!NOTE] **Méthode 4 - Intégrer par parties**
>
> 1. Calculer à l’aide d’une intégration par parties :
>    a. \({I = \displaystyle\int_1^e x\ln(x)\,\mathrm{d}x}\) ; b. \({J = \displaystyle\int_0^{\pi} x\cos(x)\,\mathrm{d}x}\).
> 2. À l’aide d’une intégration par parties, déterminer la primitive de \(\ln\) sur \({]0\,;\,+\infty[}\) qui s’annule en 1.

{{% details title="Solution commentée" closed="true" %}}
**1.** a. On ne connaît pas de primitive de \({x \mapsto x\ln(x)}\). On pose \({u(x) = \ln(x)}\) et \({v'(x) = x}\), d’où \({u'(x) = \dfrac{1}{x}}\) et \({v(x) = \dfrac{x^2}{2}}\) ; ces fonctions sont dérivables à dérivées continues sur \([1\,;\,e]\).
\[
\begin{aligned}
I &= \left[\dfrac{x^2}{2}\ln(x)\right]_1^e - \int_1^e \dfrac{1}{x} \times \dfrac{x^2}{2}\,\mathrm{d}x = \dfrac{e^2}{2} - \int_1^e \dfrac{x}{2}\,\mathrm{d}x = \dfrac{e^2}{2} - \left[\dfrac{x^2}{4}\right]_1^e \\[0.3em]
&= \dfrac{e^2}{2} - \dfrac{e^2 - 1}{4} = \dfrac{e^2 + 1}{4}.
\end{aligned}
\]
b. On pose \({u(x) = x}\) et \({v'(x) = \cos(x)}\), d’où \({u'(x) = 1}\) et \({v(x) = \sin(x)}\) :
\[
J = \big[x\sin(x)\big]_0^{\pi} - \int_0^{\pi} \sin(x)\,\mathrm{d}x = 0 - \big[-\cos(x)\big]_0^{\pi} = -(1 + 1) = -2.
\]

**2.** \(\ln\) est continue sur \({]0\,;\,+\infty[}\) ; sa primitive qui s’annule en 1 est \({F(x) = \displaystyle\int_1^x \ln(t)\,\mathrm{d}t}\). On écrit \({\ln(t) = 1 \times \ln(t)}\) et on pose \({u(t) = \ln(t)}\), \({v'(t) = 1}\), d’où \({u'(t) = \dfrac{1}{t}}\), \({v(t) = t}\) :
\[
F(x) = \big[t\ln(t)\big]_1^x - \int_1^x \dfrac{1}{t} \times t\,\mathrm{d}t = x\ln(x) - (x - 1) = x\ln(x) - x + 1.
\]
{{% /details %}}
