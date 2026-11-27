---
title: 'Convergence dominée et intégrales à paramètre'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(I\) est un intervalle quelconque de \(\mathbb{R}\), et « intégrable sur \(I\) » signifie que l’intégrale de la valeur absolue converge.

## Suites et séries d’intégrales

> [!TIP] **Théorème de convergence dominée**
>
> Soit \((f_n)\) une suite de fonctions continues par morceaux sur \(I\). On suppose que :
> - \((f_n)\) converge simplement sur \(I\) vers une fonction \(f\) continue par morceaux ;
> - **hypothèse de domination** : il existe une fonction \(\varphi\) intégrable sur \(I\) telle que, pour tout \(n\) et tout \({t \in I}\), \({|f_n(t)| \leq \varphi(t)}\).
>
> Alors les \(f_n\) et \(f\) sont intégrables sur \(I\) et
>
> \[ \int_I f_n(t)\,\mathrm{d}t \xrightarrow[n \to +\infty]{} \int_I f(t)\,\mathrm{d}t. \]

Ce théorème remplace avantageusement la convergence uniforme, qui ne sert que sur un segment. La fonction \(\varphi\) ne doit **pas dépendre de \(n\)**.

{{% details title="Exemple" closed="true" %}}
Limite de \({I_n = \displaystyle\int_0^{+\infty} \dfrac{e^{-t}}{1 + t^n}\,\mathrm{d}t}\).

- Convergence simple : \({\dfrac{e^{-t}}{1 + t^n}}\) tend vers \(e^{-t}\) si \({0 \leq t < 1}\), vers \(\dfrac{e^{-1}}{2}\) si \({t = 1}\), vers \(0\) si \({t > 1}\).
- Domination : \({\left|\dfrac{e^{-t}}{1 + t^n}\right| \leq e^{-t}}\), intégrable sur \({[0, +\infty[}\) et indépendante de \(n\).

Donc \({I_n \to \displaystyle\int_0^1 e^{-t}\,\mathrm{d}t = 1 - \dfrac{1}{e}}\).
{{% /details %}}

> [!TIP] **Théorème - Intégration terme à terme**
>
> Soit \(\sum u_n\) une série de fonctions continues par morceaux et intégrables sur \(I\), qui converge simplement vers une fonction \(S\) continue par morceaux. Si la série numérique
>
> \[ \sum_{n} \int_I |u_n(t)|\,\mathrm{d}t \]
>
> converge, alors \(S\) est intégrable sur \(I\) et \({\displaystyle\int_I S(t)\,\mathrm{d}t = \sum_{n=0}^{+\infty} \int_I u_n(t)\,\mathrm{d}t}\).

## Continuité d’une intégrale à paramètre

On étudie \({F(x) = \displaystyle\int_I f(x, t)\,\mathrm{d}t}\), où \(x\) parcourt un intervalle \(A\) et \(t\) l’intervalle \(I\).

> [!TIP] **Théorème de continuité**
>
> Soit \({f : A \times I \to \mathbb{R}}\). On suppose que :
> - pour tout \({t \in I}\), \({x \mapsto f(x, t)}\) est continue sur \(A\) ;
> - pour tout \({x \in A}\), \({t \mapsto f(x, t)}\) est continue par morceaux sur \(I\) ;
> - **domination** : il existe \(\varphi\) intégrable sur \(I\) telle que \({|f(x, t)| \leq \varphi(t)}\) pour tous \({x \in A}\) et \({t \in I}\).
>
> Alors \(F\) est définie et continue sur \(A\).

> [!IMPORTANT] **Remarque - Domination locale**
>
> La continuité étant une propriété locale, il suffit d’obtenir la domination pour \(x\) dans chaque segment \({[a, b] \subset A}\), avec une fonction \(\varphi_{a,b}\) qui peut dépendre du segment. C’est souvent indispensable quand \(A\) est ouvert ou non borné.

## Dérivation

> [!TIP] **Théorème de dérivation (règle de Leibniz)**
>
> Soit \({f : A \times I \to \mathbb{R}}\). On suppose que :
> - pour tout \({x \in A}\), \({t \mapsto f(x, t)}\) est continue par morceaux et intégrable sur \(I\) ;
> - pour tout \({t \in I}\), \({x \mapsto f(x, t)}\) est de classe \(\mathcal{C}^1\) sur \(A\) ;
> - pour tout \({x \in A}\), \({t \mapsto \dfrac{\partial f}{\partial x}(x, t)}\) est continue par morceaux sur \(I\) ;
> - **domination de la dérivée** : il existe \(\varphi\) intégrable sur \(I\) telle que \({\left|\dfrac{\partial f}{\partial x}(x, t)\right| \leq \varphi(t)}\) pour tous \(x\), \(t\) (ou seulement pour \(x\) dans tout segment de \(A\)).
>
> Alors \(F\) est de classe \(\mathcal{C}^1\) sur \(A\) et
>
> \[ F'(x) = \int_I \dfrac{\partial f}{\partial x}(x, t)\,\mathrm{d}t. \]

> [!NOTE] **Méthode - Rédiger une domination**
>
> 1. Fixer un segment \({[a, b] \subset A}\).
> 2. Majorer \({|f(x, t)|}\) (ou la dérivée partielle) pour \({x \in [a, b]}\) par une expression qui ne dépend plus de \(x\) : remplacer \(x\) par \(a\) ou \(b\) selon la monotonie en \(x\).
> 3. Vérifier que la fonction obtenue est intégrable sur \(I\), en étudiant chaque borne.

{{% details title="Exemple" closed="true" %}}
La fonction \({\Gamma(x) = \displaystyle\int_0^{+\infty} t^{x-1}e^{-t}\,\mathrm{d}t}\) est de classe \(\mathcal{C}^1\) sur \({]0, +\infty[}\).

Ici \({f(x, t) = t^{x-1}e^{-t} = e^{(x-1)\ln t}e^{-t}}\) et \({\dfrac{\partial f}{\partial x}(x, t) = \ln(t)\,t^{x-1}e^{-t}}\). Soit \({[a, b] \subset\, ]0, +\infty[}\) et \({x \in [a, b]}\) :
- pour \({t \in\, ]0, 1]}\), \({t^{x-1} \leq t^{a-1}}\) ;
- pour \({t \geq 1}\), \({t^{x-1} \leq t^{b-1}}\).

Donc \({\left|\dfrac{\partial f}{\partial x}(x, t)\right| \leq \varphi(t) = |\ln t|\left(t^{a-1} + t^{b-1}\right)e^{-t}}\), indépendante de \(x\). Elle est intégrable : en \(0\), \({\varphi(t) \sim |\ln t|\,t^{a-1} = o\left(t^{a/2 - 1}\right)}\) avec \({1 - \dfrac{a}{2} < 1}\) ; en \(+\infty\), \({t^2\varphi(t) \to 0}\).

Le théorème s’applique : \({\Gamma'(x) = \displaystyle\int_0^{+\infty} \ln(t)\,t^{x-1}e^{-t}\,\mathrm{d}t}\). En itérant, \(\Gamma\) est de classe \(\mathcal{C}^\infty\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Calcul d’une intégrale par dérivation**
>
> Pour \({x > 0}\), on pose \({F(x) = \displaystyle\int_0^{+\infty} \dfrac{e^{-xt} - e^{-t}}{t}\,\mathrm{d}t}\).
>
> 1. Montrer que \(F\) est de classe \(\mathcal{C}^1\) sur \({]0, +\infty[}\) et calculer \(F'\).
> 2. En déduire \(F(x)\) pour \({x > 0}\).

{{% details title="Solution commentée" closed="true" %}}
On pose \({f(x, t) = \dfrac{e^{-xt} - e^{-t}}{t}}\) pour \({x > 0}\) et \({t > 0}\).

**1.** *Intégrabilité à \(x\) fixé.* En \(0\) : \({e^{-xt} - e^{-t} = (1 - x)t + o(t)}\), donc \({f(x, t) \to 1 - x}\) : faux problème. En \(+\infty\) : \({|f(x, t)| \leq e^{-xt} + e^{-t}}\) pour \({t \geq 1}\), intégrable. Donc \(F\) est bien définie.

*Dérivée partielle.* \({x \mapsto f(x, t)}\) est de classe \(\mathcal{C}^1\) et \({\dfrac{\partial f}{\partial x}(x, t) = -e^{-xt}}\).

*Domination.* Soit \({[a, b] \subset\, ]0, +\infty[}\). Pour \({x \in [a, b]}\) et \({t > 0}\) : \({\left|-e^{-xt}\right| \leq e^{-at}}\), indépendante de \(x\) et intégrable sur \({]0, +\infty[}\) car \({a > 0}\).

Le théorème de dérivation s’applique : \(F\) est de classe \(\mathcal{C}^1\) sur \({]0, +\infty[}\) et

\[
F'(x) = -\int_0^{+\infty} e^{-xt}\,\mathrm{d}t = -\dfrac{1}{x}.
\]

**2.** Sur l’intervalle \({]0, +\infty[}\), \({F(x) = -\ln x + C}\). Or \({F(1) = \displaystyle\int_0^{+\infty} 0\,\mathrm{d}t = 0}\), donc \({C = 0}\) :

\[
\int_0^{+\infty} \dfrac{e^{-xt} - e^{-t}}{t}\,\mathrm{d}t = -\ln x \qquad (x > 0).
\]

Vérification de cohérence : pour \({x < 1}\), \({e^{-xt} > e^{-t}}\), donc \({F(x) > 0}\), et en effet \({-\ln x > 0}\).
{{% /details %}}
