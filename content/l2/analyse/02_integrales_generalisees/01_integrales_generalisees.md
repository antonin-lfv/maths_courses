---
title: 'Convergence des intégrales généralisées'
weight: 1
cascade:
  type: docs
---

L’intégrale du cours de première année porte sur un segment. On l’étend ici aux intervalles non bornés et aux fonctions non bornées près d’une extrémité.

## Définitions

> [!TIP] **Définition**
>
> Soit \(f\) continue par morceaux sur \({[a, b[}\), avec \({-\infty < a < b \leq +\infty}\). L’intégrale \({\displaystyle\int_a^b f(t)\,\mathrm{d}t}\) **converge** si la fonction \({x \mapsto \displaystyle\int_a^x f(t)\,\mathrm{d}t}\) a une limite finie quand \({x \to b^-}\). On pose alors
>
> \[ \int_a^b f(t)\,\mathrm{d}t = \lim_{x \to b^-} \int_a^x f(t)\,\mathrm{d}t. \]
>
> Sinon, l’intégrale **diverge**. On procède de même sur \({]a, b]}\).
>
> Sur un intervalle ouvert \({]a, b[}\), on choisit \({c \in\, ]a, b[}\) : l’intégrale \({\displaystyle\int_a^b f}\) converge si \({\displaystyle\int_a^c f}\) **et** \({\displaystyle\int_c^b f}\) convergent toutes les deux, et sa valeur est leur somme.

> [!IMPORTANT] **Remarques**
>
> - Quand les deux bornes posent problème, on les étudie **séparément**. L’existence de \({\lim_{x \to +\infty} \displaystyle\int_{-x}^{x} f}\) ne suffit pas : pour \({f(t) = t}\), cette limite vaut \(0\), mais \({\displaystyle\int_{-\infty}^{+\infty} t\,\mathrm{d}t}\) diverge.
> - Contrairement aux séries, la convergence de \({\displaystyle\int_a^{+\infty} f}\) n’impose pas que \(f\) tende vers \(0\) en \(+\infty\). Mais si \(f\) a une limite \({\ell \neq 0}\) en \(+\infty\), l’intégrale diverge.
> - **Faux problème** : si \(b\) est fini et si \(f\) a une limite finie en \(b\), on prolonge \(f\) par continuité et l’intégrale converge.

> [!TIP] **Intégrales de référence**
>
> - **Riemann en \(+\infty\)** : \({\displaystyle\int_1^{+\infty} \dfrac{\mathrm{d}t}{t^\alpha}}\) converge si et seulement si \({\alpha > 1}\).
> - **Riemann en \(0\)** : \({\displaystyle\int_0^1 \dfrac{\mathrm{d}t}{t^\alpha}}\) converge si et seulement si \({\alpha < 1}\). Plus généralement, \({\displaystyle\int_a^b \dfrac{\mathrm{d}t}{(b - t)^\alpha}}\) converge si et seulement si \({\alpha < 1}\).
> - **Exponentielle** : \({\displaystyle\int_0^{+\infty} e^{-at}\,\mathrm{d}t}\) converge si et seulement si \({a > 0}\), et vaut alors \(\dfrac{1}{a}\).
> - **Logarithme** : \({\displaystyle\int_0^1 \ln t\,\mathrm{d}t}\) converge et vaut \(-1\).

{{% details title="Démonstration" closed="true" %}}
Pour \({\alpha \neq 1}\) : \({\displaystyle\int_1^x \dfrac{\mathrm{d}t}{t^\alpha} = \dfrac{x^{1-\alpha} - 1}{1 - \alpha}}\), qui a une limite finie en \(+\infty\) si et seulement si \({1 - \alpha < 0}\). Pour \({\alpha = 1}\), \({\ln x \to +\infty}\).

En \(0\) : \({\displaystyle\int_x^1 \dfrac{\mathrm{d}t}{t^\alpha} = \dfrac{1 - x^{1-\alpha}}{1 - \alpha}}\), qui a une limite finie en \(0^+\) si et seulement si \({1 - \alpha > 0}\).

Logarithme : \({\displaystyle\int_x^1 \ln t\,\mathrm{d}t = \big[t\ln t - t\big]_x^1 = -1 - x\ln x + x \to -1}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les deux critères de Riemann vont en sens inverse, et \({\displaystyle\int_0^{+\infty} \dfrac{\mathrm{d}t}{t^\alpha}}\) diverge pour tout \(\alpha\).

## Fonctions positives

> [!TIP] **Théorème**
>
> Si \(f\) est **positive** sur \({[a, b[}\), l’intégrale \({\displaystyle\int_a^b f}\) converge si et seulement si \({x \mapsto \displaystyle\int_a^x f}\) est majorée.

> [!TIP] **Théorèmes de comparaison**
>
> Soient \(f\) et \(g\) continues par morceaux et **positives** sur \({[a, b[}\).
> - Si \({f \leq g}\) au voisinage de \(b\), ou \({f = O(g)}\), ou \({f = o(g)}\) en \(b\) : la convergence de \({\displaystyle\int_a^b g}\) entraîne celle de \({\displaystyle\int_a^b f}\) ; la divergence de \({\displaystyle\int_a^b f}\) entraîne celle de \({\displaystyle\int_a^b g}\).
> - Si \({f \sim g}\) en \(b\), les deux intégrales ont la **même nature**.

> [!NOTE] **Méthode - Règle \(t^\alpha f(t)\)**
>
> - En \(+\infty\) : si \({t^\alpha f(t) \to 0}\) pour un \({\alpha > 1}\), l’intégrale converge ; si \({tf(t) \to +\infty}\), elle diverge.
> - En \(0\) : si \({t^\alpha f(t) \to 0}\) pour un \({\alpha < 1}\), l’intégrale converge ; si \({tf(t) \to +\infty}\), elle diverge.

## Intégrabilité

> [!TIP] **Définition et théorème**
>
> \(f\) est **intégrable** sur \(I\) (ou l’intégrale est **absolument convergente**) si \({\displaystyle\int_I |f|}\) converge. Dans ce cas, \({\displaystyle\int_I f}\) converge et
>
> \[ \left|\int_I f\right| \leq \int_I |f|. \]
>
> Une intégrale convergente mais non absolument convergente est dite **semi-convergente**.

> [!TIP] **Propriétés**
>
> Pour les intégrales convergentes : linéarité, relation de Chasles, positivité et croissance restent vraies. Si \(f\) est **continue**, positive et intégrable sur \(I\) avec \({\displaystyle\int_I f = 0}\), alors \(f\) est nulle sur \(I\).

## Calculs

> [!NOTE] **Méthode - Intégration par parties et changement de variable**
>
> - **Par parties** : si \(u\) et \(v\) sont de classe \(\mathcal{C}^1\) sur \({]a, b[}\) et si le produit \(uv\) a des limites finies en \(a\) et \(b\), alors \({\displaystyle\int_a^b u'v}\) et \({\displaystyle\int_a^b uv'}\) ont même nature, et en cas de convergence \({\displaystyle\int_a^b u'v = \big[uv\big]_a^b - \int_a^b uv'}\). Le plus sûr est d’intégrer par parties sur un segment \([x, y]\), puis de passer à la limite.
> - **Changement de variable** : si \(\varphi\) est une bijection de classe \(\mathcal{C}^1\), strictement croissante, de \({]\alpha, \beta[}\) sur \({]a, b[}\), alors \({\displaystyle\int_a^b f(x)\,\mathrm{d}x}\) et \({\displaystyle\int_\alpha^\beta f(\varphi(t))\varphi'(t)\,\mathrm{d}t}\) ont même nature, et sont égales en cas de convergence.

{{% details title="Exemple" closed="true" %}}
La **fonction Gamma** : pour \({x > 0}\), \({\Gamma(x) = \displaystyle\int_0^{+\infty} t^{x-1}e^{-t}\,\mathrm{d}t}\).

- En \(0\) : \({t^{x-1}e^{-t} \sim t^{x-1} = \dfrac{1}{t^{1-x}}}\), intégrable car \({1 - x < 1}\).
- En \(+\infty\) : \({t^2 \times t^{x-1}e^{-t} \to 0}\) par croissances comparées, donc intégrable.

Une intégration par parties sur \([\varepsilon, A]\) donne, à la limite (le crochet \({\big[-t^xe^{-t}\big]}\) tend vers \(0\) aux deux bornes) : \({\Gamma(x + 1) = x\Gamma(x)}\). Comme \({\Gamma(1) = 1}\), on obtient \({\Gamma(n + 1) = n!}\) pour tout entier naturel \(n\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Nature et calcul**
>
> 1. Étudier la convergence de \({I = \displaystyle\int_0^{+\infty} \dfrac{\mathrm{d}t}{\sqrt{t}\,(1 + t)}}\), puis la calculer.
> 2. Montrer que \({J = \displaystyle\int_1^{+\infty} \dfrac{\sin t}{t}\,\mathrm{d}t}\) converge.

{{% details title="Solution commentée" closed="true" %}}
**1.** La fonction \({f : t \mapsto \dfrac{1}{\sqrt{t}(1 + t)}}\) est continue et positive sur \({]0, +\infty[}\). Il y a deux bornes à étudier.

- En \(0\) : \({f(t) \sim \dfrac{1}{t^{1/2}}}\), intégrable en \(0\) car \({\dfrac{1}{2} < 1}\).
- En \(+\infty\) : \({f(t) \sim \dfrac{1}{t^{3/2}}}\), intégrable en \(+\infty\) car \({\dfrac{3}{2} > 1}\).

Donc \(I\) converge. Pour la calculer, on pose \({t = u^2}\) : \({u \mapsto u^2}\) est une bijection \(\mathcal{C}^1\) strictement croissante de \({]0, +\infty[}\) sur lui-même, et \({\mathrm{d}t = 2u\,\mathrm{d}u}\).

\[
I = \int_0^{+\infty} \dfrac{2u\,\mathrm{d}u}{u(1 + u^2)} = 2\int_0^{+\infty} \dfrac{\mathrm{d}u}{1 + u^2} = 2\big[\arctan u\big]_0^{+\infty} = \pi.
\]

**2.** On intègre par parties sur \([1, x]\), avec \({u'(t) = \sin t}\), \({u(t) = -\cos t}\), \({v(t) = \dfrac{1}{t}}\) :

\[
\int_1^x \dfrac{\sin t}{t}\,\mathrm{d}t = \left[-\dfrac{\cos t}{t}\right]_1^x - \int_1^x \dfrac{\cos t}{t^2}\,\mathrm{d}t = \cos 1 - \dfrac{\cos x}{x} - \int_1^x \dfrac{\cos t}{t^2}\,\mathrm{d}t.
\]

Quand \({x \to +\infty}\) : \({\dfrac{\cos x}{x} \to 0}\), et \({\left|\dfrac{\cos t}{t^2}\right| \leq \dfrac{1}{t^2}}\), intégrable sur \({[1, +\infty[}\), donc la dernière intégrale a une limite finie. Ainsi \(J\) converge.

On peut montrer que \(J\) n’est pas absolument convergente : c’est une intégrale semi-convergente.
{{% /details %}}
