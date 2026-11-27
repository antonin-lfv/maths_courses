---
title: 'Modes de convergence, loi des grands nombres, théorème central limite'
weight: 1
cascade:
  type: docs
---

\((X_n)\) et \(X\) sont des variables aléatoires réelles sur un même espace probabilisé \((\Omega, \mathcal{A}, P)\).

## Modes de convergence

> [!TIP] **Définition**
>
> - **Convergence presque sûre** : \({P\left(\{\omega,\ X_n(\omega) \to X(\omega)\}\right) = 1}\).
> - **Convergence en probabilité** : pour tout \({\varepsilon > 0}\), \({P(|X_n - X| > \varepsilon) \to 0}\).
> - **Convergence dans \(L^p\)** (\({p \geq 1}\)) : \({E(|X_n - X|^p) \to 0}\). Pour \({p = 2}\), on parle de convergence en moyenne quadratique.
> - **Convergence en loi** : pour toute fonction \(g\) continue bornée, \({E(g(X_n)) \to E(g(X))}\).

La convergence en loi ne porte que sur les lois : elle a un sens même si les variables sont définies sur des espaces différents, et la limite n’est définie qu’en loi.

> [!TIP] **Théorème - Liens entre les convergences**
>
> - Presque sûre \(\Rightarrow\) en probabilité.
> - Dans \(L^p\) \(\Rightarrow\) en probabilité ; dans \(L^q\) \(\Rightarrow\) dans \(L^p\) pour \({p \leq q}\).
> - En probabilité \(\Rightarrow\) en loi.
> - En probabilité \(\Rightarrow\) convergence presque sûre d’une **suite extraite**.
> - Si la limite est une **constante** \(c\) : convergence en loi vers \(c\) \(\iff\) convergence en probabilité vers \(c\).
> - Presque sûre + domination (\({|X_n| \leq Y}\), \({Y \in L^p}\)) \(\Rightarrow\) dans \(L^p\) (convergence dominée).
>
> Aucune autre implication n’est vraie en général.

{{% details title="Démonstration" closed="true" %}}
**p.s. \(\Rightarrow\) probabilité.** \({\mathbb{1}_{\{|X_n - X| > \varepsilon\}} \to 0}\) presque sûrement, et ces indicatrices sont dominées par \(1\), intégrable : par convergence dominée, \({P(|X_n - X| > \varepsilon) \to 0}\).

**\(L^p\) \(\Rightarrow\) probabilité.** Inégalité de Markov : \({P(|X_n - X| > \varepsilon) \leq \dfrac{E(|X_n - X|^p)}{\varepsilon^p}}\).

**Sous-suite.** On choisit \(n_k\) tel que \({P(|X_{n_k} - X| > 2^{-k}) \leq 2^{-k}}\). La série de ces probabilités converge : par Borel-Cantelli, presque sûrement \({|X_{n_k} - X| \leq 2^{-k}}\) à partir d’un certain rang.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Contre-exemples sur \({\Omega = [0, 1]}\) muni de la mesure de Lebesgue.

- \({X_n = n\mathbb{1}_{[0, 1/n]}}\) : converge presque sûrement (et en probabilité) vers \(0\), mais \({E(X_n) = 1}\) : pas de convergence dans \(L^1\).
- **Bosse glissante** : \({X_n = \mathbb{1}_{I_n}}\), où les \(I_n\) sont les intervalles \({\left[\dfrac{j}{2^k}, \dfrac{j+1}{2^k}\right]}\) énumérés par longueur décroissante. \({E(X_n) \to 0}\) : convergence dans \(L^1\) et en probabilité vers \(0\) ; mais pour tout \(\omega\), \({X_n(\omega) = 1}\) pour une infinité de \(n\) : pas de convergence presque sûre.
- Si \({X \sim \mathcal{N}(0, 1)}\) et \({X_n = -X}\) pour tout \(n\) : \(X_n\) a la loi de \(X\), donc converge en loi vers \(X\), mais \({|X_n - X| = 2|X|}\) ne tend pas vers \(0\) en probabilité.
{{% /details %}}

## Convergence en loi

> [!TIP] **Théorème - Caractérisations**
>
> Les propriétés suivantes sont équivalentes :
> - \((X_n)\) converge en loi vers \(X\) ;
> - \({F_{X_n}(t) \to F_X(t)}\) en tout point \(t\) où \(F_X\) est **continue** ;
> - **théorème de Lévy** : \({\varphi_{X_n}(t) \to \varphi_X(t)}\) pour tout réel \(t\).
>
> Pour des variables à valeurs entières : \({P(X_n = k) \to P(X = k)}\) pour tout \(k\).

> [!TIP] **Propriétés**
>
> - **Image continue** : si \({X_n \to X}\) en loi et si \(h\) est continue, alors \({h(X_n) \to h(X)}\) en loi.
> - **Lemme de Slutsky** : si \({X_n \to X}\) en loi et \({Y_n \to c}\) (constante) en probabilité, alors \({X_n + Y_n \to X + c}\) et \({X_nY_n \to cX}\) en loi.

> [!IMPORTANT] **Remarque**
>
> La convergence en loi ne se comporte pas bien avec les sommes : \({X_n \to X}\) et \({Y_n \to Y}\) en loi n’entraînent pas \({X_n + Y_n \to X + Y}\) en loi, sauf si l’une des limites est constante (Slutsky) ou si \((X_n, Y_n)\) converge en loi comme couple.

## Loi des grands nombres

> [!TIP] **Théorème - Loi forte des grands nombres (Kolmogorov)**
>
> Soit \((X_n)_{n \geq 1}\) une suite de variables aléatoires **indépendantes, de même loi, intégrables**, d’espérance \(m\). Alors
>
> \[ \overline{X}_n = \dfrac{X_1 + \dots + X_n}{n} \xrightarrow[n \to +\infty]{} m \quad \text{presque sûrement}. \]

{{% details title="Démonstration" closed="true" %}}
Cas particulier où \({E(X_1^4) < +\infty}\). Quitte à remplacer \(X_n\) par \({X_n - m}\), on suppose \({m = 0}\). En développant \(S_n^4\), les seuls termes d’espérance non nulle sont les \({E(X_i^4)}\) et les \({E(X_i^2X_j^2)}\) pour \({i \neq j}\) (dès qu’un indice apparaît une seule fois, l’indépendance et le centrage annulent l’espérance). Donc

\[
E(S_n^4) = nE(X_1^4) + 3n(n - 1)E(X_1^2)^2 \leq Cn^2.
\]

Alors \({E\left(\displaystyle\sum_n \overline{X}_n^4\right) = \sum_n \dfrac{E(S_n^4)}{n^4} \leq \sum_n \dfrac{C}{n^2} < +\infty}\) (convergence monotone). La variable \({\sum \overline{X}_n^4}\) est donc finie presque sûrement, ce qui impose \({\overline{X}_n \to 0}\) presque sûrement.
{{% /details %}}

> [!TIP] **Applications**
>
> - **Fréquences** : la fréquence d’un événement dans une suite d’épreuves indépendantes converge presque sûrement vers sa probabilité.
> - **Méthode de Monte-Carlo** : pour \(g\) intégrable sur \([0, 1]\) et \((U_n)\) i.i.d. uniformes, \({\dfrac{1}{n}\displaystyle\sum_{k=1}^{n} g(U_k) \to \int_0^1 g(x)\,\mathrm{d}x}\) presque sûrement.
> - **Théorème de Glivenko-Cantelli** : la fonction de répartition empirique converge uniformément, presque sûrement, vers la fonction de répartition.

## Théorème central limite

> [!TIP] **Théorème central limite**
>
> Soit \((X_n)\) une suite de variables aléatoires indépendantes, de même loi, de carré intégrable, d’espérance \(m\) et de variance \({\sigma^2 > 0}\). Alors
>
> \[ \dfrac{S_n - nm}{\sigma\sqrt{n}} = \dfrac{\sqrt{n}\,(\overline{X}_n - m)}{\sigma} \xrightarrow[n \to +\infty]{\text{loi}} \mathcal{N}(0, 1). \]

{{% details title="Démonstration" closed="true" %}}
On suppose \({m = 0}\) et \({\sigma = 1}\) (quitte à centrer et réduire). Soit \(\varphi\) la fonction caractéristique de \(X_1\) : comme \(X_1\) a une variance, \({\varphi(u) = 1 - \dfrac{u^2}{2} + o(u^2)}\). Par indépendance, la fonction caractéristique de \({\dfrac{S_n}{\sqrt{n}}}\) est

\[
\varphi\left(\dfrac{t}{\sqrt{n}}\right)^n = \left(1 - \dfrac{t^2}{2n} + o\left(\dfrac{1}{n}\right)\right)^n \xrightarrow[n \to +\infty]{} e^{-t^2/2},
\]

qui est la fonction caractéristique de \(\mathcal{N}(0, 1)\). On conclut par le théorème de Lévy.
{{% /details %}}

> [!TIP] **Applications statistiques**
>
> - **Intervalle de confiance asymptotique** pour une moyenne : si \(\hat{\sigma}_n\) est un estimateur convergent de \(\sigma\), le lemme de Slutsky donne \({\dfrac{\sqrt{n}(\overline{X}_n - m)}{\hat{\sigma}_n} \to \mathcal{N}(0, 1)}\) en loi, d’où l’intervalle de niveau asymptotique \(95\,\%\) : \({\left[\overline{X}_n \pm 1{,}96\dfrac{\hat{\sigma}_n}{\sqrt{n}}\right]}\).
> - **Méthode delta** : si \({\sqrt{n}(T_n - \theta) \to \mathcal{N}(0, \sigma^2)}\) en loi et si \(g\) est dérivable en \(\theta\), alors \({\sqrt{n}\big(g(T_n) - g(\theta)\big) \to \mathcal{N}\big(0, g'(\theta)^2\sigma^2\big)}\) en loi.

> [!NOTE] **Méthode - Montrer une convergence en loi**
>
> - Par les **fonctions caractéristiques** (théorème de Lévy) : le plus efficace pour des sommes de variables indépendantes.
> - Par les **fonctions de répartition** : adapté aux maximums et minimums, \({P(\max X_i \leq t) = F(t)^n}\).
> - Pour des variables **discrètes** : convergence des probabilités ponctuelles.

> [!NOTE] **Exercice résolu - Loi limite d’un maximum et loi des événements rares**
>
> 1. Soit \((U_n)\) une suite i.i.d. de loi uniforme sur \([0, 1]\) et \({M_n = \max(U_1, \dots, U_n)}\). Étudier la convergence de \(M_n\), puis celle de \({n(1 - M_n)}\).
> 2. Soit \({X_n \sim \mathcal{B}\left(n, \dfrac{\lambda}{n}\right)}\) avec \({\lambda > 0}\). Montrer que \((X_n)\) converge en loi vers la loi de Poisson \(\mathcal{P}(\lambda)\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour \({t \in [0, 1]}\), par indépendance : \({P(M_n \leq t) = P(U_1 \leq t)^n = t^n}\).

*Convergence de \(M_n\).* Pour \({\varepsilon \in\, ]0, 1[}\), \({P(|M_n - 1| > \varepsilon) = P(M_n < 1 - \varepsilon) = (1 - \varepsilon)^n \to 0}\) : \(M_n\) converge en probabilité vers \(1\). De plus \({\sum (1 - \varepsilon)^n < +\infty}\), donc par Borel-Cantelli, presque sûrement \({M_n \geq 1 - \varepsilon}\) à partir d’un certain rang : la convergence est presque sûre (on peut aussi le voir par monotonie de \((M_n)\)).

*Vitesse.* Pour \({x \geq 0}\) et \({n \geq x}\) :

\[
P\big(n(1 - M_n) > x\big) = P\left(M_n < 1 - \dfrac{x}{n}\right) = \left(1 - \dfrac{x}{n}\right)^n \xrightarrow[n \to +\infty]{} e^{-x}.
\]

Donc \({F_{n(1 - M_n)}(x) \to 1 - e^{-x}}\) pour \({x \geq 0}\) (et \(0\) pour \({x < 0}\)) : \({n(1 - M_n)}\) converge en loi vers la loi **exponentielle** \(\mathcal{E}(1)\). L’écart entre \(M_n\) et \(1\) est d’ordre \(\dfrac{1}{n}\), bien plus petit que le \(\dfrac{1}{\sqrt{n}}\) du théorème central limite.

**2.** Par les fonctions caractéristiques :

\[
\varphi_{X_n}(t) = \left(1 - \dfrac{\lambda}{n} + \dfrac{\lambda}{n}e^{it}\right)^n = \left(1 + \dfrac{\lambda(e^{it} - 1)}{n}\right)^n \xrightarrow[n \to +\infty]{} \exp\big(\lambda(e^{it} - 1)\big),
\]

car \({\left(1 + \dfrac{z}{n}\right)^n \to e^z}\) pour tout complexe \(z\). La limite est la fonction caractéristique de \(\mathcal{P}(\lambda)\) : par le théorème de Lévy, \(X_n\) converge en loi vers \(\mathcal{P}(\lambda)\).
{{% /details %}}
