---
title: 'Techniques de calcul intégral'
weight: 2
cascade:
  type: docs
---

## Intégration par parties

> [!TIP] **Théorème**
>
> Soient \(u\) et \(v\) deux fonctions de classe \(\mathcal{C}^1\) sur \([a, b]\). Alors
>
> \[ \int_a^b u'(t)v(t)\,\mathrm{d}t = \big[u(t)v(t)\big]_a^b - \int_a^b u(t)v'(t)\,\mathrm{d}t. \]

{{% details title="Démonstration" closed="true" %}}
\({(uv)' = u'v + uv'}\) est continue, donc \({\big[uv\big]_a^b = \displaystyle\int_a^b (uv)' = \int_a^b u'v + \int_a^b uv'}\).
{{% /details %}}

> [!NOTE] **Méthode - Quand intégrer par parties ?**
>
> - Produit d’un polynôme par \(e^{ax}\), \(\cos(ax)\) ou \(\sin(ax)\) : on dérive le polynôme, autant de fois que son degré.
> - Présence de \(\ln\), \(\arctan\), \(\arcsin\) : on dérive cette fonction (quitte à écrire \({f = 1 \times f}\)).
> - Produit \({e^{ax}\cos(bx)}\) : deux intégrations par parties ramènent à l’intégrale de départ.
> - Pour obtenir une relation de récurrence sur une suite d’intégrales.

{{% details title="Exemple" closed="true" %}}
\[
\int_1^e t^2\ln t\,\mathrm{d}t = \left[\dfrac{t^3}{3}\ln t\right]_1^e - \int_1^e \dfrac{t^3}{3} \times \dfrac{1}{t}\,\mathrm{d}t = \dfrac{e^3}{3} - \left[\dfrac{t^3}{9}\right]_1^e = \dfrac{e^3}{3} - \dfrac{e^3 - 1}{9} = \dfrac{2e^3 + 1}{9}.
\]

On a posé \({u'(t) = t^2}\), \({u(t) = \dfrac{t^3}{3}}\), \({v(t) = \ln t}\), \({v'(t) = \dfrac{1}{t}}\).
{{% /details %}}

## Changement de variable

> [!TIP] **Théorème**
>
> Soit \(\varphi\) une fonction de classe \(\mathcal{C}^1\) sur \([a, b]\) et \(f\) une fonction continue sur un intervalle contenant \(\varphi([a, b])\). Alors
>
> \[ \int_a^b f(\varphi(t))\,\varphi'(t)\,\mathrm{d}t = \int_{\varphi(a)}^{\varphi(b)} f(x)\,\mathrm{d}x. \]

{{% details title="Démonstration" closed="true" %}}
Si \(F\) est une primitive de \(f\), alors \({F \circ \varphi}\) est de classe \(\mathcal{C}^1\) et \({(F \circ \varphi)' = (f \circ \varphi)\varphi'}\). Les deux membres valent donc \({F(\varphi(b)) - F(\varphi(a))}\).
{{% /details %}}

> [!NOTE] **Méthode - Effectuer un changement de variable \({x = \varphi(t)}\)**
>
> Trois choses changent :
> 1. l’élément différentiel : \({\mathrm{d}x = \varphi'(t)\,\mathrm{d}t}\) ;
> 2. les bornes : quand \(t\) vaut \(a\) puis \(b\), \(x\) vaut \(\varphi(a)\) puis \(\varphi(b)\) ;
> 3. l’expression de la fonction.
>
> On précise toujours que \(\varphi\) est de classe \(\mathcal{C}^1\).

{{% details title="Exemple" closed="true" %}}
Calculons \({I = \displaystyle\int_0^1 \sqrt{1 - x^2}\,\mathrm{d}x}\). On pose \({x = \sin t}\), avec \({t \in \left[0, \dfrac{\pi}{2}\right]}\) ; \(\sin\) est de classe \(\mathcal{C}^1\), \({\mathrm{d}x = \cos t\,\mathrm{d}t}\), et \({\sqrt{1 - \sin^2 t} = \cos t}\) car \({\cos t \geq 0}\) sur cet intervalle.

\[
I = \int_0^{\pi/2} \cos^2 t\,\mathrm{d}t = \int_0^{\pi/2} \dfrac{1 + \cos(2t)}{2}\,\mathrm{d}t = \left[\dfrac{t}{2} + \dfrac{\sin(2t)}{4}\right]_0^{\pi/2} = \dfrac{\pi}{4}.
\]

C’est bien l’aire d’un quart de disque de rayon \(1\).
{{% /details %}}

> [!TIP] **Propriétés - Parité et périodicité**
>
> Soit \(f\) continue sur \(\mathbb{R}\).
> - Si \(f\) est paire : \({\displaystyle\int_{-a}^{a} f = 2\int_0^a f}\). Si \(f\) est impaire : \({\displaystyle\int_{-a}^{a} f = 0}\).
> - Si \(f\) est \(T\)-périodique : \({\displaystyle\int_a^{a + T} f = \int_0^T f}\) pour tout réel \(a\).

## Primitives des fractions rationnelles

> [!NOTE] **Méthode**
>
> On décompose la fraction en éléments simples dans \(\mathbb{R}(X)\), puis on intègre terme à terme :
> - \(\dfrac{1}{x - a}\) a pour primitive \(\ln\lvert x - a\rvert\) ;
> - \(\dfrac{1}{(x - a)^n}\) (\({n \geq 2}\)) a pour primitive \(\dfrac{-1}{(n - 1)(x - a)^{n-1}}\) ;
> - pour \(\dfrac{\alpha x + \beta}{x^2 + px + q}\) avec \({p^2 - 4q < 0}\) : on fait apparaître la dérivée du dénominateur, \({\dfrac{\alpha}{2} \times \dfrac{2x + p}{x^2 + px + q}}\), qui s’intègre en logarithme ; le reste est de la forme \(\dfrac{\gamma}{x^2 + px + q}\), que l’on intègre en arc tangente après mise sous forme canonique :
>
> \[ \int \dfrac{\mathrm{d}x}{(x - c)^2 + d^2} = \dfrac{1}{d}\arctan\left(\dfrac{x - c}{d}\right). \]

{{% details title="Exemple" closed="true" %}}
Primitive de \({f(x) = \dfrac{x + 3}{x^2 + 2x + 5}}\) sur \(\mathbb{R}\). Le discriminant du dénominateur vaut \({4 - 20 < 0}\). On écrit

\[
f(x) = \dfrac{1}{2} \times \dfrac{2x + 2}{x^2 + 2x + 5} + \dfrac{2}{(x + 1)^2 + 4}.
\]

Une primitive est donc

\[
F(x) = \dfrac{1}{2}\ln(x^2 + 2x + 5) + \arctan\left(\dfrac{x + 1}{2}\right).
\]

Vérification : la dérivée du second terme est \({\dfrac{1}{2} \times \dfrac{1}{1 + \dfrac{(x+1)^2}{4}} = \dfrac{2}{4 + (x + 1)^2}}\).
{{% /details %}}

## Expressions trigonométriques

> [!NOTE] **Méthode**
>
> - \({\cos^p x \sin^q x}\) avec \(p\) ou \(q\) impair : si \(q\) est impair, on pose \({u = \cos x}\) ; si \(p\) est impair, \({u = \sin x}\).
> - \(p\) et \(q\) pairs : on linéarise.
> - Fraction rationnelle en \(\cos x\) et \(\sin x\) : le changement de variable \({u = \tan\dfrac{x}{2}}\) ramène à une fraction rationnelle, avec
>
> \[ \cos x = \dfrac{1 - u^2}{1 + u^2}, \qquad \sin x = \dfrac{2u}{1 + u^2}, \qquad \mathrm{d}x = \dfrac{2\,\mathrm{d}u}{1 + u^2}. \]

> [!NOTE] **Exercice résolu - Intégrales de Wallis**
>
> Pour tout entier naturel \(n\), on pose \({W_n = \displaystyle\int_0^{\pi/2} \sin^n t\,\mathrm{d}t}\).
>
> 1. Calculer \(W_0\) et \(W_1\).
> 2. Montrer que, pour tout \({n \geq 0}\), \({W_{n+2} = \dfrac{n + 1}{n + 2}W_n}\).
> 3. En déduire \(W_4\) et \(W_5\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({W_0 = \displaystyle\int_0^{\pi/2} 1\,\mathrm{d}t = \dfrac{\pi}{2}}\) et \({W_1 = \big[-\cos t\big]_0^{\pi/2} = 1}\).

**2.** On écrit \({\sin^{n+2} t = \sin t \times \sin^{n+1} t}\) et on intègre par parties avec \({u'(t) = \sin t}\), \({u(t) = -\cos t}\), \({v(t) = \sin^{n+1} t}\), \({v'(t) = (n + 1)\cos t\sin^n t}\), toutes de classe \(\mathcal{C}^1\) :

\[
W_{n+2} = \big[-\cos t\sin^{n+1} t\big]_0^{\pi/2} + (n + 1)\int_0^{\pi/2} \cos^2 t\sin^n t\,\mathrm{d}t.
\]

Le crochet est nul (car \({\cos\dfrac{\pi}{2} = 0}\) et \({\sin 0 = 0}\)). Avec \({\cos^2 t = 1 - \sin^2 t}\) :

\[
W_{n+2} = (n + 1)(W_n - W_{n+2}), \qquad \text{d’où} \qquad (n + 2)W_{n+2} = (n + 1)W_n.
\]

**3.** \({W_2 = \dfrac{1}{2}W_0 = \dfrac{\pi}{4}}\), puis \({W_4 = \dfrac{3}{4}W_2 = \dfrac{3\pi}{16}}\).

\({W_3 = \dfrac{2}{3}W_1 = \dfrac{2}{3}}\), puis \({W_5 = \dfrac{4}{5}W_3 = \dfrac{8}{15}}\).
{{% /details %}}
