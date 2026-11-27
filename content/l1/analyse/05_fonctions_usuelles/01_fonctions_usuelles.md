---
title: 'Logarithme, puissances, fonctions hyperboliques et réciproques'
weight: 1
cascade:
  type: docs
---

## Logarithme et exponentielle

> [!TIP] **Définition et propriétés**
>
> Le **logarithme népérien** est l’unique primitive de \({x \mapsto \dfrac{1}{x}}\) sur \({]0, +\infty[}\) qui s’annule en \(1\). Il est strictement croissant, concave, et réalise une bijection de \({]0, +\infty[}\) sur \(\mathbb{R}\). Pour tous \({a, b > 0}\) et tout entier relatif \(n\) :
>
> \[ \ln(ab) = \ln a + \ln b, \qquad \ln\left(\dfrac{a}{b}\right) = \ln a - \ln b, \qquad \ln(a^n) = n\ln a. \]
>
> L’**exponentielle** est sa bijection réciproque, de \(\mathbb{R}\) sur \({]0, +\infty[}\). Elle est strictement croissante, convexe, égale à sa dérivée, et \({e^{a + b} = e^a e^b}\).

> [!TIP] **Définition - Logarithme et exponentielle de base \(a\)**
>
> Pour \({a > 0}\), \({a \neq 1}\) : \({\log_a(x) = \dfrac{\ln x}{\ln a}}\) pour \({x > 0}\), et \({a^x = e^{x\ln a}}\) pour \(x\) réel. Le logarithme décimal est \({\log = \log_{10}}\).

## Fonctions puissances

> [!TIP] **Définition**
>
> Pour \(\alpha\) réel et \({x > 0}\), on pose \({x^\alpha = e^{\alpha\ln x}}\).

> [!TIP] **Propriétés**
>
> Pour \({x, y > 0}\) et \(\alpha\), \(\beta\) réels :
> - \({x^{\alpha + \beta} = x^\alpha x^\beta}\), \({(x^\alpha)^\beta = x^{\alpha\beta}}\), \({(xy)^\alpha = x^\alpha y^\alpha}\), \({\ln(x^\alpha) = \alpha\ln x}\) ;
> - \({x \mapsto x^\alpha}\) est dérivable sur \({]0, +\infty[}\), de dérivée \({x \mapsto \alpha x^{\alpha - 1}}\) ;
> - elle est strictement croissante si \({\alpha > 0}\), strictement décroissante si \({\alpha < 0}\) ;
> - si \({\alpha > 0}\), elle se prolonge par continuité en \(0\) par la valeur \(0\).

> [!NOTE] **Méthode - Étudier \({x \mapsto u(x)^{v(x)}}\)**
>
> Dès que l’exposant dépend de \(x\), on revient à la forme exponentielle \({u(x)^{v(x)} = e^{v(x)\ln u(x)}}\), valable pour \({u(x) > 0}\), avant de dériver ou de chercher une limite.

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = x^x = e^{x\ln x}}\) pour \({x > 0}\).

- Dérivée : \({f'(x) = (\ln x + 1)e^{x\ln x} = (1 + \ln x)x^x}\). Elle s’annule en \({x = \dfrac{1}{e}}\) : \(f\) est décroissante sur \({\left]0, \dfrac{1}{e}\right]}\), croissante ensuite.
- Limite en \(0^+\) : \({x\ln x \to 0}\) par croissances comparées, donc \({f(x) \to e^0 = 1}\).
{{% /details %}}

## Fonctions hyperboliques

> [!TIP] **Définition**
>
> Pour tout réel \(x\) :
>
> \[ \operatorname{ch} x = \dfrac{e^x + e^{-x}}{2}, \qquad \operatorname{sh} x = \dfrac{e^x - e^{-x}}{2}, \qquad \operatorname{th} x = \dfrac{\operatorname{sh} x}{\operatorname{ch} x} = \dfrac{e^x - e^{-x}}{e^x + e^{-x}}. \]
>
> Ce sont le **cosinus**, le **sinus** et la **tangente hyperboliques**. \(\operatorname{ch}\) est la partie paire de l’exponentielle, \(\operatorname{sh}\) sa partie impaire.

> [!TIP] **Propriétés**
>
> - \({\operatorname{ch} x + \operatorname{sh} x = e^x}\), \({\operatorname{ch} x - \operatorname{sh} x = e^{-x}}\) et \({\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1}\).
> - \(\operatorname{ch}\) est paire, \(\operatorname{sh}\) et \(\operatorname{th}\) sont impaires.
> - \({\operatorname{ch}' = \operatorname{sh}}\), \({\operatorname{sh}' = \operatorname{ch}}\), \({\operatorname{th}' = 1 - \operatorname{th}^2 = \dfrac{1}{\operatorname{ch}^2}}\).
> - \(\operatorname{sh}\) est une bijection strictement croissante de \(\mathbb{R}\) sur \(\mathbb{R}\) ; \(\operatorname{ch}\) est décroissante sur \({]-\infty, 0]}\), croissante sur \({[0, +\infty[}\), de minimum \({\operatorname{ch} 0 = 1}\) ; \(\operatorname{th}\) est une bijection strictement croissante de \(\mathbb{R}\) sur \({]-1, 1[}\).
> - \({\operatorname{ch}(a + b) = \operatorname{ch} a \operatorname{ch} b + \operatorname{sh} a \operatorname{sh} b}\) et \({\operatorname{sh}(a + b) = \operatorname{sh} a \operatorname{ch} b + \operatorname{ch} a \operatorname{sh} b}\).

## Fonctions circulaires réciproques

Les fonctions \(\sin\), \(\cos\), \(\tan\) ne sont pas bijectives. On les restreint à un intervalle où elles sont continues et strictement monotones, puis on applique le théorème de la bijection.

> [!TIP] **Définition - Arc sinus**
>
> La restriction de \(\sin\) à \({\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]}\) est une bijection sur \([-1, 1]\). Sa réciproque est la fonction \({\arcsin : [-1, 1] \to \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]}\). Pour \({x \in [-1, 1]}\), \(\arcsin x\) est l’unique angle de \({\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]}\) dont le sinus vaut \(x\).
>
> \(\arcsin\) est impaire, strictement croissante, continue sur \([-1, 1]\), dérivable sur \({]-1, 1[}\) et
>
> \[ \arcsin'(x) = \dfrac{1}{\sqrt{1 - x^2}}. \]

> [!TIP] **Définition - Arc cosinus**
>
> La restriction de \(\cos\) à \([0, \pi]\) est une bijection sur \([-1, 1]\). Sa réciproque est \({\arccos : [-1, 1] \to [0, \pi]}\), strictement décroissante, continue sur \([-1, 1]\), dérivable sur \({]-1, 1[}\) et
>
> \[ \arccos'(x) = -\dfrac{1}{\sqrt{1 - x^2}}. \]
>
> Pour tout \({x \in [-1, 1]}\) : \({\arcsin x + \arccos x = \dfrac{\pi}{2}}\).

> [!TIP] **Définition - Arc tangente**
>
> La restriction de \(\tan\) à \({\left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[}\) est une bijection sur \(\mathbb{R}\). Sa réciproque est \({\arctan : \mathbb{R} \to \left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[}\), impaire, strictement croissante, dérivable sur \(\mathbb{R}\) et
>
> \[ \arctan'(x) = \dfrac{1}{1 + x^2}, \qquad \lim_{x \to +\infty} \arctan x = \dfrac{\pi}{2}, \qquad \lim_{x \to -\infty} \arctan x = -\dfrac{\pi}{2}. \]

{{% details title="Démonstration" closed="true" %}}
Dérivée de \(\arcsin\). Pour \({x \in\, ]-1, 1[}\), posons \({y = \arcsin x \in \left]-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right[}\). Alors \({\sin'(y) = \cos y > 0}\), donc \(\arcsin\) est dérivable en \(x\) et \({\arcsin'(x) = \dfrac{1}{\cos y}}\). Or \({\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2}}\) puisque \({\cos y > 0}\).

Dérivée de \(\arctan\). Avec \({y = \arctan x}\), \({\tan'(y) = 1 + \tan^2 y = 1 + x^2 \neq 0}\), donc \({\arctan'(x) = \dfrac{1}{1 + x^2}}\).

Relation \({\arcsin + \arccos}\). La fonction \({x \mapsto \arcsin x + \arccos x}\) a une dérivée nulle sur \({]-1, 1[}\) : elle y est constante, égale à sa valeur en \(0\), soit \({0 + \dfrac{\pi}{2}}\). Par continuité, l’égalité vaut aussi en \(\pm 1\).
{{% /details %}}

> [!TIP] **Valeurs remarquables**
>
> | \(x\) | \(0\) | \(\dfrac{1}{2}\) | \(\dfrac{\sqrt{2}}{2}\) | \(\dfrac{\sqrt{3}}{2}\) | \(1\) |
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | \(\arcsin x\) | \(0\) | \(\dfrac{\pi}{6}\) | \(\dfrac{\pi}{4}\) | \(\dfrac{\pi}{3}\) | \(\dfrac{\pi}{2}\) |
> | \(\arccos x\) | \(\dfrac{\pi}{2}\) | \(\dfrac{\pi}{3}\) | \(\dfrac{\pi}{4}\) | \(\dfrac{\pi}{6}\) | \(0\) |
>
> \({\arctan 0 = 0}\), \({\arctan\dfrac{1}{\sqrt{3}} = \dfrac{\pi}{6}}\), \({\arctan 1 = \dfrac{\pi}{4}}\), \({\arctan\sqrt{3} = \dfrac{\pi}{3}}\).

> [!IMPORTANT] **Remarque - Simplifications**
>
> - \({\sin(\arcsin x) = x}\) pour tout \({x \in [-1, 1]}\), et \({\tan(\arctan x) = x}\) pour tout réel \(x\).
> - En revanche, \({\arcsin(\sin x) = x}\) **seulement** si \({x \in \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]}\). Par exemple, \({\arcsin\left(\sin\dfrac{5\pi}{6}\right) = \arcsin\dfrac{1}{2} = \dfrac{\pi}{6}}\).
> - \({\cos(\arcsin x) = \sin(\arccos x) = \sqrt{1 - x^2}}\) pour \({x \in [-1, 1]}\).

> [!NOTE] **Exercice résolu - Une identité avec arctan**
>
> Montrer que, pour tout réel \({x > 0}\), \({\arctan x + \arctan\dfrac{1}{x} = \dfrac{\pi}{2}}\). Que vaut cette somme pour \({x < 0}\) ?

{{% details title="Solution commentée" closed="true" %}}
On pose \({g(x) = \arctan x + \arctan\dfrac{1}{x}}\) pour \({x \neq 0}\). La fonction \(g\) est dérivable sur \(\mathbb{R}^*\) et

\[
g'(x) = \dfrac{1}{1 + x^2} + \left(-\dfrac{1}{x^2}\right) \times \dfrac{1}{1 + \dfrac{1}{x^2}} = \dfrac{1}{1 + x^2} - \dfrac{1}{x^2 + 1} = 0.
\]

Donc \(g\) est constante sur chacun des **intervalles** \({]0, +\infty[}\) et \({]-\infty, 0[}\) (mais pas forcément sur leur réunion, qui n’est pas un intervalle).

- Sur \({]0, +\infty[}\) : \({g(x) = g(1) = \dfrac{\pi}{4} + \dfrac{\pi}{4} = \dfrac{\pi}{2}}\).
- Sur \({]-\infty, 0[}\) : \({g(x) = g(-1) = -\dfrac{\pi}{4} - \dfrac{\pi}{4} = -\dfrac{\pi}{2}}\). On le retrouve aussi par imparité de \(g\).
{{% /details %}}
