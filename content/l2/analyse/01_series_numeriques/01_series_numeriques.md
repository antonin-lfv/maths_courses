---
title: 'Convergence des séries numériques'
weight: 1
cascade:
  type: docs
---

## Définitions

> [!TIP] **Définition**
>
> Soit \((u_n)\) une suite réelle ou complexe. La **série de terme général \(u_n\)**, notée \(\sum u_n\), est la suite des **sommes partielles**
>
> \[ S_n = \sum_{k=0}^{n} u_k. \]
>
> La série **converge** si \((S_n)\) a une limite finie \(S\), appelée **somme** de la série et notée \({\displaystyle\sum_{n=0}^{+\infty} u_n}\). Sinon, elle **diverge**. En cas de convergence, le **reste** d’ordre \(n\) est \({R_n = S - S_n = \displaystyle\sum_{k=n+1}^{+\infty} u_k}\), et \({R_n \to 0}\).

Étudier la **nature** d’une série, c’est dire si elle converge ou diverge. La nature ne dépend pas des premiers termes ; la somme, si.

> [!TIP] **Propriétés**
>
> - **Condition nécessaire** : si \(\sum u_n\) converge, alors \({u_n \to 0}\). Si \(u_n\) ne tend pas vers \(0\), la série **diverge grossièrement**.
> - **Linéarité** : si \(\sum u_n\) et \(\sum v_n\) convergent, \(\sum (\lambda u_n + v_n)\) converge et sa somme est \({\lambda\sum u_n + \sum v_n}\).
> - La somme d’une série convergente et d’une série divergente diverge.
> - **Lien suite-série** : la série télescopique \(\sum (a_{n+1} - a_n)\) converge si et seulement si la suite \((a_n)\) converge.

{{% details title="Démonstration" closed="true" %}}
\({u_n = S_n - S_{n-1} \to S - S = 0}\). Pour la série télescopique, \({\displaystyle\sum_{k=0}^{n} (a_{k+1} - a_k) = a_{n+1} - a_0}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La condition \({u_n \to 0}\) n’est pas suffisante : la **série harmonique** \(\sum \dfrac{1}{n}\) diverge, bien que \({\dfrac{1}{n} \to 0}\).

> [!TIP] **Séries de référence**
>
> - **Série géométrique** : \(\sum q^n\) converge si et seulement si \({|q| < 1}\), et alors \({\displaystyle\sum_{n=0}^{+\infty} q^n = \dfrac{1}{1 - q}}\).
> - **Séries de Riemann** : \(\sum \dfrac{1}{n^\alpha}\) converge si et seulement si \({\alpha > 1}\).
> - **Série exponentielle** : pour tout complexe \(z\), \({\displaystyle\sum_{n=0}^{+\infty} \dfrac{z^n}{n!} = e^z}\).

## Séries à termes positifs

> [!TIP] **Théorème**
>
> Une série à termes **positifs** converge si et seulement si la suite de ses sommes partielles est majorée. Sinon, ses sommes partielles tendent vers \(+\infty\).

> [!TIP] **Théorèmes de comparaison**
>
> Soient \(\sum u_n\) et \(\sum v_n\) deux séries à termes **positifs**.
> - Si \({u_n \leq v_n}\) à partir d’un certain rang (ou plus généralement \({u_n = O(v_n)}\)) : si \(\sum v_n\) converge, alors \(\sum u_n\) converge ; si \(\sum u_n\) diverge, alors \(\sum v_n\) diverge.
> - Si \({u_n \sim v_n}\), les deux séries ont la **même nature**.

> [!IMPORTANT] **Remarque**
>
> Le critère des équivalents exige des termes de **signe constant** à partir d’un certain rang. Il est faux pour des séries de signe quelconque.

> [!NOTE] **Méthode - Comparer à une série de Riemann**
>
> Pour une série à termes positifs :
> - si l’on trouve \({\alpha > 1}\) tel que \({n^\alpha u_n \to 0}\) (ou reste borné), alors \(\sum u_n\) converge ;
> - si \({nu_n \to +\infty}\) (ou reste minoré par une constante strictement positive), alors \(\sum u_n\) diverge.

> [!TIP] **Règle de d’Alembert**
>
> Soit \(\sum u_n\) une série à termes **strictement positifs** telle que \({\dfrac{u_{n+1}}{u_n} \to \ell}\).
> - Si \({\ell < 1}\), la série converge.
> - Si \({\ell > 1}\), la série diverge grossièrement.
> - Si \({\ell = 1}\), on ne peut pas conclure.

{{% details title="Démonstration" closed="true" %}}
Si \({\ell < 1}\), on choisit \(q\) avec \({\ell < q < 1}\). À partir d’un rang \(N\), \({u_{n+1} \leq qu_n}\), donc \({u_n \leq u_Nq^{n-N}}\) : la série est dominée par une série géométrique convergente. Si \({\ell > 1}\), la suite \((u_n)\) est croissante à partir d’un certain rang, donc ne tend pas vers \(0\).
{{% /details %}}

> [!TIP] **Théorème - Comparaison série-intégrale**
>
> Soit \(f\) une fonction continue, **positive et décroissante** sur \({[1, +\infty[}\). Alors la série \(\sum f(n)\) converge si et seulement si \({\displaystyle\int_1^x f(t)\,\mathrm{d}t}\) a une limite finie quand \({x \to +\infty}\). De plus, pour tout \({n \geq 2}\) :
>
> \[ \int_n^{n+1} f(t)\,\mathrm{d}t \leq f(n) \leq \int_{n-1}^{n} f(t)\,\mathrm{d}t. \]

{{% details title="Exemple" closed="true" %}}
Pour \({f(t) = \dfrac{1}{t^\alpha}}\) avec \({\alpha > 0}\) : \({\displaystyle\int_1^x \dfrac{\mathrm{d}t}{t^\alpha}}\) vaut \(\ln x\) si \({\alpha = 1}\) et \({\dfrac{x^{1-\alpha} - 1}{1 - \alpha}}\) sinon. Elle a une limite finie si et seulement si \({\alpha > 1}\) : on retrouve le critère de Riemann.

L’encadrement donne aussi un équivalent : \({\displaystyle\sum_{k=1}^{n} \dfrac{1}{k} \sim \ln n}\).
{{% /details %}}

## Séries de signe quelconque

> [!TIP] **Définition et théorème - Convergence absolue**
>
> La série \(\sum u_n\) (réelle ou complexe) est **absolument convergente** si \(\sum |u_n|\) converge. Toute série absolument convergente est convergente, et
>
> \[ \left|\sum_{n=0}^{+\infty} u_n\right| \leq \sum_{n=0}^{+\infty} |u_n|. \]
>
> Une série convergente mais non absolument convergente est dite **semi-convergente**.

{{% details title="Démonstration" closed="true" %}}
Cas réel. On pose \({u_n^+ = \max(u_n, 0)}\) et \({u_n^- = \max(-u_n, 0)}\). Alors \({0 \leq u_n^\pm \leq |u_n|}\), donc \(\sum u_n^+\) et \(\sum u_n^-\) convergent par comparaison, et \({u_n = u_n^+ - u_n^-}\). Le cas complexe s’en déduit avec les parties réelle et imaginaire.
{{% /details %}}

> [!TIP] **Théorème - Critère spécial des séries alternées**
>
> Soit \((a_n)\) une suite **décroissante** de réels positifs qui **tend vers \(0\)**. Alors la série \(\sum (-1)^na_n\) converge. De plus, son reste \(R_n\) est du signe de son premier terme \({(-1)^{n+1}a_{n+1}}\) et
>
> \[ |R_n| \leq a_{n+1}. \]

{{% details title="Démonstration" closed="true" %}}
Les suites \({(S_{2n})}\) et \({(S_{2n+1})}\) sont adjacentes : \({S_{2n+2} - S_{2n} = a_{2n+2} - a_{2n+1} \leq 0}\), \({S_{2n+3} - S_{2n+1} = a_{2n+2} - a_{2n+3} \geq 0}\) et \({S_{2n} - S_{2n+1} = a_{2n+1} \to 0}\). Elles convergent vers une même limite \(S\), donc \((S_n)\) converge vers \(S\). L’encadrement \({S_{2n+1} \leq S \leq S_{2n}}\) donne la majoration du reste.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
La **série harmonique alternée** \(\sum \dfrac{(-1)^{n-1}}{n}\) converge (sa somme vaut \(\ln 2\)), mais pas absolument : elle est semi-convergente.
{{% /details %}}

> [!NOTE] **Méthode - Étudier la nature d’une série**
>
> 1. Le terme général tend-il vers \(0\) ? Sinon, divergence grossière.
> 2. Série à termes positifs : équivalent, comparaison à une série de Riemann ou géométrique, règle de d’Alembert (factorielles, puissances), comparaison série-intégrale.
> 3. Signe quelconque : étudier d’abord la convergence absolue.
> 4. Si elle échoue : critère des séries alternées, ou développement asymptotique du terme général en une somme de termes dont on connaît la nature.

> [!TIP] **Théorème - Produit de Cauchy**
>
> Si \(\sum u_n\) et \(\sum v_n\) sont absolument convergentes, la série de terme général \({w_n = \displaystyle\sum_{k=0}^{n} u_kv_{n-k}}\) est absolument convergente et
>
> \[ \sum_{n=0}^{+\infty} w_n = \left(\sum_{n=0}^{+\infty} u_n\right)\left(\sum_{n=0}^{+\infty} v_n\right). \]

> [!NOTE] **Exercice résolu - Nature de quatre séries**
>
> Déterminer la nature des séries de terme général
>
> \[ a_n = \dfrac{n^2 + 1}{n^4 + 3n}, \qquad b_n = \dfrac{n^3}{3^n}, \qquad c_n = \ln\left(1 + \dfrac{1}{n}\right), \qquad d_n = \dfrac{(-1)^n}{n} + \dfrac{1}{n^2}. \]

{{% details title="Solution commentée" closed="true" %}}
**Série \(\sum a_n\).** Termes positifs et \({a_n \sim \dfrac{n^2}{n^4} = \dfrac{1}{n^2}}\). La série de Riemann \(\sum \dfrac{1}{n^2}\) converge (\({2 > 1}\)), donc \(\sum a_n\) converge.

**Série \(\sum b_n\).** Termes strictement positifs, et

\[
\dfrac{b_{n+1}}{b_n} = \dfrac{(n+1)^3}{n^3} \times \dfrac{1}{3} \to \dfrac{1}{3} < 1.
\]

D’après la règle de d’Alembert, \(\sum b_n\) converge.

**Série \(\sum c_n\).** Termes positifs et \({c_n \sim \dfrac{1}{n}}\). La série harmonique diverge, donc \(\sum c_n\) diverge. On le voit aussi directement : \({c_n = \ln(n + 1) - \ln n}\) est télescopique, et \({\ln(n + 1) \to +\infty}\).

**Série \(\sum d_n\).** \(\sum \dfrac{(-1)^n}{n}\) converge par le critère des séries alternées (\(\dfrac{1}{n}\) décroît vers \(0\)), et \(\sum \dfrac{1}{n^2}\) converge. Par linéarité, \(\sum d_n\) converge. Elle ne converge pas absolument, car \({|d_n| \sim \dfrac{1}{n}}\).
{{% /details %}}
