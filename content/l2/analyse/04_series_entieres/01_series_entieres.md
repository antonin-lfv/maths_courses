---
title: 'Rayon de convergence et développements en série entière'
weight: 1
cascade:
  type: docs
---

## Rayon de convergence

> [!TIP] **Définition**
>
> Une **série entière** est une série de fonctions de la forme \(\sum a_nz^n\), où \((a_n)\) est une suite de nombres complexes et \(z\) une variable complexe (ou réelle).

> [!TIP] **Lemme d’Abel**
>
> Si la suite \({(a_nz_0^n)}\) est bornée, alors pour tout \(z\) tel que \({|z| < |z_0|}\), la série \(\sum a_nz^n\) converge absolument.

{{% details title="Démonstration" closed="true" %}}
Soit \(M\) tel que \({|a_nz_0^n| \leq M}\) pour tout \(n\). Alors \({|a_nz^n| = |a_nz_0^n|\left|\dfrac{z}{z_0}\right|^n \leq M\left|\dfrac{z}{z_0}\right|^n}\), terme général d’une série géométrique de raison strictement inférieure à \(1\).
{{% /details %}}

> [!TIP] **Définition et théorème - Rayon de convergence**
>
> Le **rayon de convergence** de \(\sum a_nz^n\) est
>
> \[ R = \sup\{r \geq 0,\ (a_nr^n) \text{ est bornée}\} \in [0, +\infty]. \]
>
> - Si \({|z| < R}\), la série converge **absolument**.
> - Si \({|z| > R}\), la série **diverge grossièrement** (la suite \((a_nz^n)\) n’est pas bornée).
> - Si \({|z| = R}\), on ne peut rien dire en général.
>
> Le disque \({\{|z| < R\}}\) est le **disque ouvert de convergence** ; dans le cas réel, \({]-R, R[}\) est l’**intervalle ouvert de convergence**.

> [!NOTE] **Méthode - Déterminer un rayon de convergence**
>
> - **Règle de d’Alembert** : si \({a_n \neq 0}\) et \({\left|\dfrac{a_{n+1}}{a_n}\right| \to \ell \in [0, +\infty]}\), alors \({R = \dfrac{1}{\ell}}\) (avec \({R = +\infty}\) si \({\ell = 0}\) et \({R = 0}\) si \({\ell = +\infty}\)).
> - **Série lacunaire** (\(\sum a_nz^{2n}\), \(\sum a_nz^{n^2}\)…) : appliquer la règle de d’Alembert numérique directement au terme général \({u_n(z)}\).
> - **Comparaison** : si \({|a_n| \leq |b_n|}\), alors \({R_a \geq R_b}\) ; si \({a_n \sim b_n}\), alors \({R_a = R_b}\).
> - **Encadrement** : si \(\sum a_nz_0^n\) converge, \({R \geq |z_0|}\) ; si elle diverge, ou n’est pas absolument convergente, \({R \leq |z_0|}\).

{{% details title="Exemple" closed="true" %}}
- \(\sum \dfrac{z^n}{n!}\) : \({\dfrac{a_{n+1}}{a_n} = \dfrac{1}{n+1} \to 0}\), donc \({R = +\infty}\).
- \(\sum n!\,z^n\) : \({\dfrac{a_{n+1}}{a_n} = n + 1 \to +\infty}\), donc \({R = 0}\).
- \(\sum \dfrac{z^n}{n^2}\), \(\sum \dfrac{z^n}{n}\) et \(\sum z^n\) ont toutes pour rayon \(1\). Sur le cercle \({|z| = 1}\) : la première converge partout, la troisième nulle part, la deuxième diverge en \(1\) et converge en \(-1\).
- \(\sum \dfrac{z^{2n}}{4^n}\) : c’est une série géométrique de raison \(\dfrac{z^2}{4}\), convergente si et seulement si \({|z| < 2}\). Donc \({R = 2}\).
{{% /details %}}

> [!TIP] **Opérations**
>
> Soient \(\sum a_nz^n\) et \(\sum b_nz^n\) de rayons \(R_a\) et \(R_b\).
> - La somme \(\sum (a_n + b_n)z^n\) a un rayon \({R \geq \min(R_a, R_b)}\), avec égalité si \({R_a \neq R_b}\).
> - Le produit de Cauchy \(\sum c_nz^n\), avec \({c_n = \displaystyle\sum_{k=0}^{n} a_kb_{n-k}}\), a un rayon \({R \geq \min(R_a, R_b)}\), et sa somme est le produit des sommes pour \({|z| < \min(R_a, R_b)}\).
> - Les séries \(\sum a_nz^n\), \(\sum na_nz^{n-1}\) (série dérivée) et \(\sum \dfrac{a_n}{n+1}z^{n+1}\) (série primitive) ont le **même rayon**.

## Régularité de la somme

> [!TIP] **Théorème**
>
> Soit \(\sum a_nx^n\) une série entière de rayon \({R > 0}\), de somme \(f\) sur \({]-R, R[}\).
> - La série converge **normalement** sur tout segment \({[-r, r]}\) avec \({0 < r < R}\) (mais en général pas sur \({]-R, R[}\) entier).
> - \(f\) est de classe \(\mathcal{C}^\infty\) sur \({]-R, R[}\), et ses dérivées s’obtiennent en **dérivant terme à terme** :
>
> \[ f'(x) = \sum_{n=1}^{+\infty} na_nx^{n-1}, \qquad f^{(k)}(x) = \sum_{n=k}^{+\infty} n(n-1)\cdots(n-k+1)a_nx^{n-k}. \]
>
> - On peut **intégrer terme à terme** : pour \({|x| < R}\), \({\displaystyle\int_0^x f(t)\,\mathrm{d}t = \sum_{n=0}^{+\infty} \dfrac{a_n}{n+1}x^{n+1}}\).
> - Les coefficients sont donnés par \({a_n = \dfrac{f^{(n)}(0)}{n!}}\).

> [!TIP] **Corollaire - Unicité des coefficients**
>
> Si \({\displaystyle\sum a_nx^n = \sum b_nx^n}\) sur un intervalle \({]-r, r[}\) avec \({r > 0}\), alors \({a_n = b_n}\) pour tout \(n\). En particulier, la somme est paire si et seulement si tous les coefficients d’indice impair sont nuls.

## Développements en série entière

> [!TIP] **Définition**
>
> Une fonction \(f\) est **développable en série entière** (DSE) en \(0\) s’il existe \({r > 0}\) et une série entière \(\sum a_nx^n\) telle que \({f(x) = \displaystyle\sum_{n=0}^{+\infty} a_nx^n}\) pour tout \({x \in\, ]-r, r[}\). Cette série est alors nécessairement la **série de Taylor** de \(f\) : \({\sum \dfrac{f^{(n)}(0)}{n!}x^n}\).

> [!IMPORTANT] **Remarque**
>
> Être de classe \(\mathcal{C}^\infty\) ne suffit pas. La fonction définie par \({f(x) = e^{-1/x^2}}\) pour \({x \neq 0}\) et \({f(0) = 0}\) est \(\mathcal{C}^\infty\) sur \(\mathbb{R}\) avec toutes ses dérivées nulles en \(0\) : sa série de Taylor est nulle, alors que \(f\) ne l’est pas.

> [!TIP] **Développements usuels**
>
> Pour tout réel \(x\) (rayon infini) :
>
> \[ e^x = \sum_{n=0}^{+\infty} \dfrac{x^n}{n!}, \qquad \cos x = \sum_{n=0}^{+\infty} \dfrac{(-1)^nx^{2n}}{(2n)!}, \qquad \sin x = \sum_{n=0}^{+\infty} \dfrac{(-1)^nx^{2n+1}}{(2n+1)!}, \]
>
> \[ \operatorname{ch} x = \sum_{n=0}^{+\infty} \dfrac{x^{2n}}{(2n)!}, \qquad \operatorname{sh} x = \sum_{n=0}^{+\infty} \dfrac{x^{2n+1}}{(2n+1)!}. \]
>
> Pour \({x \in\, ]-1, 1[}\) (rayon \(1\)) :
>
> \[ \dfrac{1}{1 - x} = \sum_{n=0}^{+\infty} x^n, \qquad \dfrac{1}{1 + x} = \sum_{n=0}^{+\infty} (-1)^nx^n, \qquad \dfrac{1}{(1 - x)^2} = \sum_{n=1}^{+\infty} nx^{n-1}, \]
>
> \[ \ln(1 + x) = \sum_{n=1}^{+\infty} \dfrac{(-1)^{n-1}}{n}x^n, \qquad \arctan x = \sum_{n=0}^{+\infty} \dfrac{(-1)^n}{2n+1}x^{2n+1}, \]
>
> \[ (1 + x)^\alpha = 1 + \sum_{n=1}^{+\infty} \dfrac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!}x^n \qquad (\alpha \in \mathbb{R}). \]

> [!NOTE] **Méthode - Obtenir un développement en série entière**
>
> - Combiner des développements usuels : somme, produit, substitution (\(x \to -x\), \(x^2\), \(ax\)).
> - **Dériver ou intégrer** un développement connu (c’est ainsi que l’on obtient \(\ln(1 + x)\) et \(\arctan x\) à partir de \(\dfrac{1}{1 + x}\) et \(\dfrac{1}{1 + x^2}\)).
> - Fraction rationnelle : décomposer en éléments simples, puis \({\dfrac{1}{a - x} = \dfrac{1}{a} \times \dfrac{1}{1 - x/a}}\).
> - **Équation différentielle** : montrer que \(f\) est solution d’une équation différentielle linéaire, y chercher une solution sous forme de série entière (on obtient une relation de récurrence sur les \(a_n\)), vérifier que son rayon est non nul, puis conclure par unicité de la solution du problème de Cauchy.

> [!NOTE] **Exercice résolu - Rayon, somme et valeur d’une série numérique**
>
> 1. Déterminer le rayon de convergence et la somme de \({f(x) = \displaystyle\sum_{n=1}^{+\infty} nx^n}\).
> 2. En déduire \({\displaystyle\sum_{n=1}^{+\infty} \dfrac{n}{3^n}}\).
> 3. Développer en série entière \({g(x) = \dfrac{1}{(1 - x)(2 - x)}}\) et préciser le rayon.

{{% details title="Solution commentée" closed="true" %}}
**1.** \({\dfrac{a_{n+1}}{a_n} = \dfrac{n + 1}{n} \to 1}\), donc \({R = 1}\). Pour \({|x| < 1}\), on dérive terme à terme \({\dfrac{1}{1 - x} = \displaystyle\sum_{n=0}^{+\infty} x^n}\) :

\[
\dfrac{1}{(1 - x)^2} = \sum_{n=1}^{+\infty} nx^{n-1}, \qquad \text{d’où} \qquad f(x) = \dfrac{x}{(1 - x)^2}.
\]

**2.** \({\dfrac{1}{3} \in\, ]-1, 1[}\), donc \({\displaystyle\sum_{n=1}^{+\infty} \dfrac{n}{3^n} = f\left(\dfrac{1}{3}\right) = \dfrac{1/3}{(2/3)^2} = \dfrac{3}{4}}\).

**3.** Décomposition en éléments simples : \({g(x) = \dfrac{1}{1 - x} - \dfrac{1}{2 - x}}\) (vérification : \({\dfrac{(2 - x) - (1 - x)}{(1 - x)(2 - x)}}\)). Or, pour \({|x| < 2}\),

\[
\dfrac{1}{2 - x} = \dfrac{1}{2} \times \dfrac{1}{1 - \dfrac{x}{2}} = \sum_{n=0}^{+\infty} \dfrac{x^n}{2^{n+1}}.
\]

Donc, pour \({|x| < 1}\) :

\[
g(x) = \sum_{n=0}^{+\infty} \left(1 - \dfrac{1}{2^{n+1}}\right)x^n.
\]

Les deux séries ont des rayons différents, \(1\) et \(2\) : le rayon de la somme est \({\min(1, 2) = 1}\). On le retrouve avec \({a_n = 1 - \dfrac{1}{2^{n+1}} \to 1}\), donc \({a_n \sim 1}\).
{{% /details %}}
