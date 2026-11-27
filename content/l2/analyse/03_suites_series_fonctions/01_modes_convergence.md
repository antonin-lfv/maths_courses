---
title: 'Convergence simple, uniforme, normale'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \((f_n)\) est une suite de fonctions définies sur un intervalle \(I\), à valeurs réelles ou complexes.

## Convergence simple et uniforme

> [!TIP] **Définition - Convergence simple**
>
> La suite \((f_n)\) **converge simplement** vers \(f\) sur \(I\) si, pour tout \({x \in I}\), la suite numérique \((f_n(x))\) converge vers \(f(x)\) :
>
> \[ \forall x \in I,\ \forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ |f_n(x) - f(x)| \leq \varepsilon. \]

> [!TIP] **Définition - Convergence uniforme**
>
> La suite \((f_n)\) **converge uniformément** vers \(f\) sur \(I\) si
>
> \[ \forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ \forall x \in I,\ |f_n(x) - f(x)| \leq \varepsilon, \]
>
> ce qui équivaut à \({\|f_n - f\|_\infty \to 0}\), où \({\|g\|_\infty = \sup_{x \in I} |g(x)|}\).

La différence tient à l’ordre des quantificateurs : dans la convergence simple, le rang \(N\) dépend de \(x\) ; dans la convergence uniforme, le même \(N\) convient pour tous les \(x\). La convergence uniforme entraîne la convergence simple, vers la même limite.

> [!NOTE] **Méthode - Étudier la convergence uniforme**
>
> 1. Déterminer la limite simple \(f\) (à \(x\) fixé).
> 2. **Pour prouver** la convergence uniforme : majorer \({|f_n(x) - f(x)|}\) par un réel \(\alpha_n\) indépendant de \(x\) et de limite nulle, ou calculer \({\|f_n - f\|_\infty}\) par une étude de fonction.
> 3. **Pour la réfuter** : trouver une suite \((x_n)\) de points de \(I\) telle que \({f_n(x_n) - f(x_n)}\) ne tende pas vers \(0\) ; ou constater que \(f\) n’est pas continue alors que les \(f_n\) le sont.
> 4. En cas d’échec sur \(I\), chercher la convergence uniforme sur des intervalles plus petits (segments, \({[a, +\infty[}\)…).

{{% details title="Exemple" closed="true" %}}
Soit \({f_n(x) = x^n}\) sur \([0, 1]\).

- **Limite simple.** Si \({0 \leq x < 1}\), \({x^n \to 0}\) ; et \({f_n(1) = 1}\). La limite simple est la fonction \(f\) nulle sur \({[0, 1[}\) et valant \(1\) en \(1\).
- **Pas de convergence uniforme sur \([0, 1]\)** : les \(f_n\) sont continues et \(f\) ne l’est pas. On le voit aussi avec \({x_n = 1 - \dfrac{1}{n}}\) : \({f_n(x_n) = \left(1 - \dfrac{1}{n}\right)^n \to \dfrac{1}{e} \neq 0}\).
- **Convergence uniforme sur \([0, a]\)** pour tout \({a < 1}\) : \({\sup_{[0, a]} |x^n - 0| = a^n \to 0}\).
{{% /details %}}

## Théorèmes d’échange

> [!TIP] **Théorème - Continuité**
>
> Si les \(f_n\) sont continues sur \(I\) et si \((f_n)\) converge uniformément vers \(f\) sur \(I\), alors \(f\) est continue sur \(I\). Il suffit que la convergence soit uniforme sur tout segment de \(I\).

{{% details title="Démonstration" closed="true" %}}
Soit \({a \in I}\) et \({\varepsilon > 0}\). On fixe \(n\) tel que \({\|f_n - f\|_\infty \leq \dfrac{\varepsilon}{3}}\). Par continuité de \(f_n\) en \(a\), il existe \({\eta > 0}\) tel que \({|f_n(x) - f_n(a)| \leq \dfrac{\varepsilon}{3}}\) pour \({|x - a| \leq \eta}\). Alors

\[
|f(x) - f(a)| \leq |f(x) - f_n(x)| + |f_n(x) - f_n(a)| + |f_n(a) - f(a)| \leq \varepsilon.
\]
{{% /details %}}

> [!TIP] **Théorème - Double limite**
>
> Soit \(a\) une extrémité de \(I\) (éventuellement infinie). Si \((f_n)\) converge uniformément vers \(f\) sur \(I\) et si chaque \(f_n\) a une limite finie \(\ell_n\) en \(a\), alors \((\ell_n)\) converge, \(f\) a une limite en \(a\), et
>
> \[ \lim_{x \to a}\lim_{n \to +\infty} f_n(x) = \lim_{n \to +\infty}\lim_{x \to a} f_n(x). \]

> [!TIP] **Théorème - Intégration sur un segment**
>
> Si les \(f_n\) sont continues sur le **segment** \([a, b]\) et convergent uniformément vers \(f\) sur \([a, b]\), alors
>
> \[ \int_a^b f_n(t)\,\mathrm{d}t \xrightarrow[n \to +\infty]{} \int_a^b f(t)\,\mathrm{d}t. \]

{{% details title="Démonstration" closed="true" %}}
\({\left|\displaystyle\int_a^b f_n - \int_a^b f\right| \leq \int_a^b |f_n - f| \leq (b - a)\|f_n - f\|_\infty \to 0}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La convergence simple ne suffit pas. Pour \({f_n(x) = n^2x(1 - x)^n}\) sur \([0, 1]\), \((f_n)\) converge simplement vers \(0\), mais \({\displaystyle\int_0^1 f_n = \dfrac{n^2}{(n+1)(n+2)} \to 1 \neq 0}\).

> [!TIP] **Théorème - Dérivation**
>
> Soit \((f_n)\) une suite de fonctions de classe \(\mathcal{C}^1\) sur \(I\). Si
> - \((f_n)\) converge simplement vers \(f\) sur \(I\),
> - \((f_n')\) converge uniformément vers \(g\) sur \(I\) (ou sur tout segment de \(I\)),
>
> alors \(f\) est de classe \(\mathcal{C}^1\) sur \(I\) et \({f' = g}\).

> [!IMPORTANT] **Remarque**
>
> C’est la suite des **dérivées** qui doit converger uniformément. La convergence uniforme de \((f_n)\) ne dit rien sur les dérivées : \({f_n(x) = \dfrac{\sin(nx)}{\sqrt{n}}}\) converge uniformément vers \(0\) sur \(\mathbb{R}\), mais \({f_n'(x) = \sqrt{n}\cos(nx)}\) ne converge pas.

## Séries de fonctions

> [!TIP] **Définition**
>
> La série de fonctions \(\sum u_n\) converge simplement (resp. uniformément) sur \(I\) si la suite de ses sommes partielles \({S_n = \displaystyle\sum_{k=0}^{n} u_k}\) converge simplement (resp. uniformément). Sa **somme** est \({S = \displaystyle\sum_{n=0}^{+\infty} u_n}\).
>
> La convergence uniforme équivaut à : la série converge simplement et la suite des restes \((R_n)\) converge uniformément vers \(0\).

> [!TIP] **Définition et théorème - Convergence normale**
>
> La série \(\sum u_n\) **converge normalement** sur \(I\) si la série numérique \({\sum \|u_n\|_\infty}\) converge. Cela revient à trouver une suite \((\alpha_n)\) indépendante de \(x\) telle que
>
> \[ \forall x \in I,\ |u_n(x)| \leq \alpha_n \qquad \text{et} \qquad \sum \alpha_n \text{ converge}. \]
>
> La convergence normale entraîne la convergence uniforme, et la convergence absolue en tout point.

{{% details title="Démonstration" closed="true" %}}
Pour tout \(x\), \({|u_n(x)| \leq \|u_n\|_\infty}\) : la série \(\sum u_n(x)\) converge absolument. De plus, \({|R_n(x)| \leq \displaystyle\sum_{k=n+1}^{+\infty} \|u_k\|_\infty}\), reste d’une série convergente, indépendant de \(x\) et de limite nulle.
{{% /details %}}

> [!TIP] **Théorèmes pour les séries**
>
> - **Continuité** : si les \(u_n\) sont continues et si \(\sum u_n\) converge uniformément sur tout segment de \(I\), la somme est continue sur \(I\).
> - **Intégration terme à terme** : si les \(u_n\) sont continues et si \(\sum u_n\) converge uniformément sur \([a, b]\), alors
>
> \[ \int_a^b \sum_{n=0}^{+\infty} u_n(t)\,\mathrm{d}t = \sum_{n=0}^{+\infty} \int_a^b u_n(t)\,\mathrm{d}t. \]
>
> - **Dérivation terme à terme** : si les \(u_n\) sont de classe \(\mathcal{C}^1\), si \(\sum u_n\) converge simplement et si \(\sum u_n'\) converge uniformément sur tout segment de \(I\), alors la somme est de classe \(\mathcal{C}^1\) et \({\left(\displaystyle\sum u_n\right)' = \sum u_n'}\).
> - **Double limite** : si \(\sum u_n\) converge uniformément sur \(I\) et si \({u_n(x) \to \ell_n}\) quand \({x \to a}\), alors \(\sum \ell_n\) converge et \({\lim_{x \to a} \displaystyle\sum u_n(x) = \sum \ell_n}\).

> [!NOTE] **Méthode - Convergence uniforme sans convergence normale**
>
> Pour une série **alternée** vérifiant le critère spécial en chaque \(x\), le reste est majoré par \({|R_n(x)| \leq |u_{n+1}(x)|}\). Il suffit alors que \({\|u_{n+1}\|_\infty \to 0}\) pour avoir la convergence uniforme.

> [!NOTE] **Exercice résolu - Une fonction définie par une série**
>
> Pour \({x \geq 0}\), on pose \({S(x) = \displaystyle\sum_{n=1}^{+\infty} \dfrac{e^{-nx}}{n^2}}\).
>
> 1. Montrer que \(S\) est définie et continue sur \({[0, +\infty[}\).
> 2. Montrer que \(S\) est de classe \(\mathcal{C}^1\) sur \({]0, +\infty[}\).
> 3. Déterminer la limite de \(S\) en \(+\infty\).

{{% details title="Solution commentée" closed="true" %}}
On pose \({u_n(x) = \dfrac{e^{-nx}}{n^2}}\) pour \({n \geq 1}\).

**1.** Pour tout \({x \geq 0}\), \({|u_n(x)| \leq \dfrac{1}{n^2}}\), terme général d’une série convergente indépendante de \(x\). La série converge normalement sur \({[0, +\infty[}\), donc uniformément. Les \(u_n\) étant continues, \(S\) est définie et continue sur \({[0, +\infty[}\).

**2.** Les \(u_n\) sont de classe \(\mathcal{C}^1\) et \({u_n'(x) = -\dfrac{e^{-nx}}{n}}\). Sur \({[0, +\infty[}\), \({\|u_n'\|_\infty = \dfrac{1}{n}}\) : pas de convergence normale. Mais pour \({a > 0}\) fixé et \({x \geq a}\) :

\[
|u_n'(x)| \leq \dfrac{e^{-na}}{n} \leq \left(e^{-a}\right)^n,
\]

terme général d’une série géométrique convergente (\({e^{-a} < 1}\)). La série \(\sum u_n'\) converge normalement sur \({[a, +\infty[}\) pour tout \({a > 0}\), donc uniformément sur tout segment de \({]0, +\infty[}\). Comme \(\sum u_n\) converge simplement, \(S\) est de classe \(\mathcal{C}^1\) sur \({]0, +\infty[}\) et \({S'(x) = -\displaystyle\sum_{n=1}^{+\infty} \dfrac{e^{-nx}}{n}}\).

**3.** La série converge uniformément sur \({[0, +\infty[}\) et, pour chaque \(n\), \({u_n(x) \to 0}\) quand \({x \to +\infty}\). Par le théorème de la double limite, \({\lim_{x \to +\infty} S(x) = \displaystyle\sum_{n=1}^{+\infty} 0 = 0}\).
{{% /details %}}
