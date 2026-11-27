---
title: 'Convergence monotone, Fatou, convergence dominée'
weight: 1
cascade:
  type: docs
---

\((X, \mathcal{A}, \mu)\) est un espace mesuré. Ces trois théorèmes répondent à la question : quand peut-on écrire \({\lim \displaystyle\int f_n = \int \lim f_n}\) ?

## Convergence monotone

> [!TIP] **Théorème de convergence monotone (Beppo Levi)**
>
> Soit \((f_n)\) une suite **croissante** de fonctions mesurables **positives**, et \({f = \lim_n f_n = \sup_n f_n}\). Alors \(f\) est mesurable et
>
> \[ \int_X f\,\mathrm{d}\mu = \lim_{n \to +\infty} \int_X f_n\,\mathrm{d}\mu \qquad \text{(dans } [0, +\infty]\text{)}. \]

{{% details title="Démonstration" closed="true" %}}
La suite \({\left(\displaystyle\int f_n\right)}\) est croissante, de limite \({\ell \leq \displaystyle\int f}\) par croissance de l’intégrale. Pour l’autre inégalité, soit \(\varphi\) étagée avec \({0 \leq \varphi \leq f}\), et \({c \in\, ]0, 1[}\). Les ensembles \({A_n = \{f_n \geq c\varphi\}}\) sont mesurables, croissants, de réunion \(X\) (car \({c\varphi < f}\) là où \({\varphi > 0}\)). Alors

\[
\int f_n \geq \int_{A_n} f_n \geq c\int_{A_n} \varphi \xrightarrow[n \to +\infty]{} c\int \varphi,
\]

par continuité croissante de la mesure. Donc \({\ell \geq c\displaystyle\int \varphi}\), puis \({\ell \geq \displaystyle\int \varphi}\) en faisant tendre \(c\) vers \(1\), et enfin \({\ell \geq \displaystyle\int f}\) en prenant le supremum sur \(\varphi\).
{{% /details %}}

> [!TIP] **Corollaire - Séries de fonctions positives**
>
> Si \((f_n)\) est une suite de fonctions mesurables **positives**, alors
>
> \[ \int_X \left(\sum_{n=0}^{+\infty} f_n\right)\mathrm{d}\mu = \sum_{n=0}^{+\infty} \int_X f_n\,\mathrm{d}\mu \qquad \text{(dans } [0, +\infty]\text{)}. \]

Pour des fonctions positives, on échange toujours somme et intégrale, sans aucune condition.

> [!TIP] **Corollaire - Mesures à densité**
>
> Si \(f\) est mesurable positive, \({\nu(A) = \displaystyle\int_A f\,\mathrm{d}\mu}\) définit une mesure sur \((X, \mathcal{A})\), dite **de densité \(f\)** par rapport à \(\mu\), et pour \(g\) mesurable positive : \({\displaystyle\int g\,\mathrm{d}\nu = \int gf\,\mathrm{d}\mu}\).

## Lemme de Fatou

> [!TIP] **Lemme de Fatou**
>
> Pour toute suite \((f_n)\) de fonctions mesurables **positives** :
>
> \[ \int_X \liminf_{n \to +\infty} f_n\,\mathrm{d}\mu \leq \liminf_{n \to +\infty} \int_X f_n\,\mathrm{d}\mu. \]

{{% details title="Démonstration" closed="true" %}}
On pose \({g_n = \inf_{k \geq n} f_k}\) : la suite \((g_n)\) est croissante, positive, de limite \(\liminf f_n\), et \({g_n \leq f_n}\). Par convergence monotone, \({\displaystyle\int \liminf f_n = \lim \int g_n = \liminf \int g_n \leq \liminf \int f_n}\).
{{% /details %}}

De la masse peut se perdre à la limite, jamais se créer. En particulier, si \({f_n \to f}\) presque partout avec \({f_n \geq 0}\) et \({\displaystyle\int f_n \leq M}\) pour tout \(n\), alors \({\displaystyle\int f \leq M}\).

## Convergence dominée

> [!TIP] **Théorème de convergence dominée (Lebesgue)**
>
> Soit \((f_n)\) une suite de fonctions mesurables telle que :
> - \({f_n(x) \to f(x)}\) pour **presque tout** \(x\) ;
> - **domination** : il existe \(g\) **intégrable** telle que, pour tout \(n\), \({|f_n(x)| \leq g(x)}\) pour presque tout \(x\).
>
> Alors \(f\) est intégrable et
>
> \[ \int_X |f_n - f|\,\mathrm{d}\mu \xrightarrow[n \to +\infty]{} 0, \qquad \text{en particulier} \qquad \int_X f_n\,\mathrm{d}\mu \to \int_X f\,\mathrm{d}\mu. \]

{{% details title="Démonstration" closed="true" %}}
On a \({|f| \leq g}\) presque partout, donc \(f\) est intégrable. Les fonctions \({h_n = 2g - |f_n - f|}\) sont positives (presque partout) et convergent presque partout vers \(2g\). Par le lemme de Fatou :

\[
\int 2g \leq \liminf \int \left(2g - |f_n - f|\right) = \int 2g - \limsup \int |f_n - f|.
\]

Comme \({\displaystyle\int 2g < +\infty}\), on simplifie : \({\limsup \displaystyle\int |f_n - f| \leq 0}\).
{{% /details %}}

> [!IMPORTANT] **Remarque - L’hypothèse de domination est indispensable**
>
> Sur \(\mathbb{R}\) avec la mesure de Lebesgue :
> - **bosse glissante** : \({f_n = \mathbb{1}_{[n, n+1]}}\) tend simplement vers \(0\), mais \({\displaystyle\int f_n = 1}\) ;
> - **pic** : \({f_n = n\mathbb{1}_{]0, 1/n[}}\) tend simplement vers \(0\), mais \({\displaystyle\int f_n = 1}\).
>
> Dans les deux cas, aucune fonction intégrable ne majore tous les \(f_n\).

> [!TIP] **Corollaire - Séries de fonctions**
>
> Soit \((f_n)\) une suite de fonctions mesurables telle que \({\displaystyle\sum_{n} \int_X |f_n|\,\mathrm{d}\mu < +\infty}\). Alors la série \(\sum f_n(x)\) converge absolument pour presque tout \(x\), sa somme est intégrable, et
>
> \[ \int_X \sum_{n=0}^{+\infty} f_n\,\mathrm{d}\mu = \sum_{n=0}^{+\infty} \int_X f_n\,\mathrm{d}\mu. \]

> [!NOTE] **Méthode - Choisir le bon théorème**
>
> - Fonctions **positives** et suite **croissante**, ou série à termes positifs : convergence monotone, sans rien vérifier d’autre.
> - Signe quelconque : convergence dominée ; il faut exhiber \(g\) intégrable, **indépendante de \(n\)**.
> - Pour une inégalité seulement, ou pour montrer qu’une limite est intégrable : lemme de Fatou.
> - Sur un espace de mesure **finie**, une suite uniformément bornée (\({|f_n| \leq M}\)) est dominée par la constante \(M\).

## Intégrales à paramètre

On étudie \({F(x) = \displaystyle\int_T f(x, t)\,\mathrm{d}\mu(t)}\), où \(x\) parcourt un intervalle (ou un espace métrique) \(A\).

> [!TIP] **Théorème de continuité**
>
> On suppose que :
> - pour tout \(x\), \({t \mapsto f(x, t)}\) est mesurable ;
> - pour presque tout \(t\), \({x \mapsto f(x, t)}\) est continue sur \(A\) ;
> - il existe \(g\) intégrable telle que \({|f(x, t)| \leq g(t)}\) pour tout \(x\) et presque tout \(t\).
>
> Alors \(F\) est continue sur \(A\).

> [!TIP] **Théorème de dérivation**
>
> Soit \(A\) un intervalle ouvert. On suppose que :
> - pour tout \(x\), \({t \mapsto f(x, t)}\) est intégrable ;
> - pour presque tout \(t\), \({x \mapsto f(x, t)}\) est dérivable sur \(A\) ;
> - il existe \(g\) intégrable telle que \({\left|\dfrac{\partial f}{\partial x}(x, t)\right| \leq g(t)}\) pour tout \(x\) et presque tout \(t\).
>
> Alors \(F\) est dérivable sur \(A\) et \({F'(x) = \displaystyle\int_T \dfrac{\partial f}{\partial x}(x, t)\,\mathrm{d}\mu(t)}\).

{{% details title="Démonstration" closed="true" %}}
Continuité : pour une suite \({x_n \to x}\), on applique la convergence dominée à \({f_n(t) = f(x_n, t)}\). Dérivation : pour \({h_n \to 0}\), on applique la convergence dominée à \({\dfrac{f(x + h_n, t) - f(x, t)}{h_n}}\), dominé par \(g(t)\) grâce à l’inégalité des accroissements finis.
{{% /details %}}

Comme la continuité et la dérivabilité sont des propriétés locales, il suffit d’obtenir les dominations pour \(x\) dans chaque segment de \(A\).

> [!NOTE] **Exercice résolu - Deux limites d’intégrales et une série**
>
> 1. Déterminer \({\lim_{n \to +\infty} \displaystyle\int_0^n \left(1 - \dfrac{x}{n}\right)^n e^{x/2}\,\mathrm{d}x}\).
> 2. Montrer que \({\displaystyle\int_0^1 \dfrac{\ln x}{x - 1}\,\mathrm{d}x = \sum_{n=1}^{+\infty} \dfrac{1}{n^2}}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** On pose \({f_n(x) = \left(1 - \dfrac{x}{n}\right)^n e^{x/2}\,\mathbb{1}_{[0, n]}(x)}\) sur \({[0, +\infty[}\), de sorte que l’intégrale vaut \({\displaystyle\int_0^{+\infty} f_n}\).

*Convergence simple.* Pour \(x\) fixé et \({n > x}\), \({\left(1 - \dfrac{x}{n}\right)^n = \exp\left(n\ln\left(1 - \dfrac{x}{n}\right)\right) \to e^{-x}}\). Donc \({f_n(x) \to e^{-x/2}}\).

*Domination.* L’inégalité \({\ln(1 - u) \leq -u}\) pour \({u \in [0, 1[}\) donne \({\left(1 - \dfrac{x}{n}\right)^n \leq e^{-x}}\) sur \([0, n]\). Donc \({0 \leq f_n(x) \leq e^{-x/2}}\), intégrable sur \({[0, +\infty[}\) et indépendante de \(n\).

Par convergence dominée :

\[
\lim_{n \to +\infty} \int_0^n \left(1 - \dfrac{x}{n}\right)^n e^{x/2}\,\mathrm{d}x = \int_0^{+\infty} e^{-x/2}\,\mathrm{d}x = 2.
\]

**2.** Pour \({x \in\, ]0, 1[}\), \({\dfrac{1}{1 - x} = \displaystyle\sum_{n=0}^{+\infty} x^n}\), donc

\[
\dfrac{\ln x}{x - 1} = \sum_{n=0}^{+\infty} (-\ln x)\,x^n,
\]

série de fonctions **positives** sur \({]0, 1[}\). Par convergence monotone, on intègre terme à terme (dans \([0, +\infty]\)). Une intégration par parties donne

\[
\int_0^1 (-\ln x)\,x^n\,\mathrm{d}x = \left[-\ln x\,\dfrac{x^{n+1}}{n+1}\right]_0^1 + \int_0^1 \dfrac{x^n}{n+1}\,\mathrm{d}x = \dfrac{1}{(n+1)^2},
\]

le crochet étant nul (\({x^{n+1}\ln x \to 0}\) en \(0\)). Donc

\[
\int_0^1 \dfrac{\ln x}{x - 1}\,\mathrm{d}x = \sum_{n=0}^{+\infty} \dfrac{1}{(n+1)^2} = \sum_{n=1}^{+\infty} \dfrac{1}{n^2}.
\]

Cette somme est finie : la fonction est bien intégrable, et l’intégrale vaut \(\dfrac{\pi^2}{6}\).
{{% /details %}}
