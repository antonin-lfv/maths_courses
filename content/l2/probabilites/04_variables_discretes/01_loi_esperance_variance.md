---
title: 'Loi, espérance, variance, lois usuelles'
weight: 1
cascade:
  type: docs
---

## Variables aléatoires discrètes

> [!TIP] **Définition**
>
> Une **variable aléatoire discrète** sur \((\Omega, \mathcal{A}, P)\) est une application \({X : \Omega \to E}\) dont l’ensemble des valeurs \(X(\Omega)\) est fini ou dénombrable, et telle que \({\{X = x\} = \{\omega \in \Omega,\ X(\omega) = x\}}\) soit un événement pour tout \(x\).
>
> La **loi** de \(X\) est la donnée des nombres \({P(X = x)}\) pour \({x \in X(\Omega)}\). Ils sont positifs et de somme \(1\), car les événements \(\{X = x\}\) forment un système complet.

> [!TIP] **Définition - Fonction de répartition**
>
> Pour \(X\) réelle, la **fonction de répartition** est \({F_X(t) = P(X \leq t)}\). Elle est croissante, de limite \(0\) en \(-\infty\) et \(1\) en \(+\infty\), et caractérise la loi. Pour \(X\) à valeurs entières : \({P(X = k) = F_X(k) - F_X(k - 1)}\).

## Espérance

> [!TIP] **Définition**
>
> Une variable aléatoire réelle discrète \(X\) est **d’espérance finie** si la série \({\sum x\,P(X = x)}\) converge **absolument**. Son **espérance** est alors
>
> \[ E(X) = \sum_{x \in X(\Omega)} x\,P(X = x). \]
>
> C’est la moyenne des valeurs de \(X\), pondérées par leurs probabilités. Une variable bornée, en particulier une variable finie, est toujours d’espérance finie.

> [!TIP] **Propriétés**
>
> Pour \(X\), \(Y\) d’espérance finie et \(a\), \(b\) réels :
> - **linéarité** : \({E(aX + bY) = aE(X) + bE(Y)}\), et \({E(b) = b}\) ;
> - **positivité** : si \({X \geq 0}\), alors \({E(X) \geq 0}\) ; **croissance** : si \({X \leq Y}\), alors \({E(X) \leq E(Y)}\) ;
> - \({|E(X)| \leq E(|X|)}\) ;
> - pour un événement \(A\), \({E(\mathbb{1}_A) = P(A)}\).

> [!TIP] **Théorème de transfert**
>
> Pour toute fonction \(g\) définie sur \(X(\Omega)\), \(g(X)\) est d’espérance finie si et seulement si \({\sum g(x)P(X = x)}\) converge absolument, et alors
>
> \[ E(g(X)) = \sum_{x \in X(\Omega)} g(x)\,P(X = x). \]

On calcule donc \(E(g(X))\) sans chercher la loi de \(g(X)\).

## Variance

> [!TIP] **Définition**
>
> Si \(X^2\) est d’espérance finie, \(X\) l’est aussi, et la **variance** de \(X\) est
>
> \[ V(X) = E\big((X - E(X))^2\big) \geq 0. \]
>
> L’**écart type** est \({\sigma(X) = \sqrt{V(X)}}\). La variance mesure la dispersion de \(X\) autour de son espérance.

> [!TIP] **Propriétés**
>
> - **Formule de König-Huygens** : \({V(X) = E(X^2) - E(X)^2}\).
> - \({V(aX + b) = a^2V(X)}\) et \({\sigma(aX + b) = |a|\sigma(X)}\).
> - \({V(X) = 0}\) si et seulement si \(X\) est presque sûrement constante.
> - Si \({\sigma(X) > 0}\), la variable \({X^* = \dfrac{X - E(X)}{\sigma(X)}}\) est **centrée réduite** : \({E(X^*) = 0}\), \({V(X^*) = 1}\).

## Lois usuelles

> [!TIP] **Lois finies**
>
> - **Loi uniforme** sur \({\{1, \dots, n\}}\) : \({P(X = k) = \dfrac{1}{n}}\) ; \({E(X) = \dfrac{n + 1}{2}}\), \({V(X) = \dfrac{n^2 - 1}{12}}\).
> - **Loi de Bernoulli** \(\mathcal{B}(p)\) : \({P(X = 1) = p}\), \({P(X = 0) = 1 - p}\) ; \({E(X) = p}\), \({V(X) = p(1 - p)}\). C’est la loi de l’indicatrice d’un événement de probabilité \(p\).
> - **Loi binomiale** \(\mathcal{B}(n, p)\) : pour \({0 \leq k \leq n}\),
>
> \[ P(X = k) = \binom{n}{k}p^k(1 - p)^{n-k} ; \qquad E(X) = np, \quad V(X) = np(1 - p). \]
>
>   C’est la loi du **nombre de succès** dans \(n\) épreuves de Bernoulli indépendantes de même paramètre \(p\).

> [!TIP] **Lois à valeurs dans \(\mathbb{N}\)**
>
> - **Loi géométrique** \(\mathcal{G}(p)\), \({0 < p < 1}\) : pour \({k \geq 1}\),
>
> \[ P(X = k) = (1 - p)^{k-1}p ; \qquad E(X) = \dfrac{1}{p}, \quad V(X) = \dfrac{1 - p}{p^2}. \]
>
>   C’est la loi du **rang du premier succès** dans une suite d’épreuves de Bernoulli indépendantes. On a \({P(X > k) = (1 - p)^k}\), et la loi est **sans mémoire** : \({P_{X > m}(X > m + k) = P(X > k)}\).
> - **Loi de Poisson** \(\mathcal{P}(\lambda)\), \({\lambda > 0}\) : pour \({k \geq 0}\),
>
> \[ P(X = k) = e^{-\lambda}\dfrac{\lambda^k}{k!} ; \qquad E(X) = \lambda, \quad V(X) = \lambda. \]
>
>   Elle modélise le nombre d’événements rares sur une période donnée. C’est la limite de la loi binomiale \(\mathcal{B}(n, p_n)\) quand \({n \to +\infty}\) avec \({np_n \to \lambda}\).

{{% details title="Démonstration" closed="true" %}}
**Espérance de la loi géométrique.** Avec \({q = 1 - p}\) et la série dérivée de la série géométrique :

\[
E(X) = \sum_{k=1}^{+\infty} kq^{k-1}p = \dfrac{p}{(1 - q)^2} = \dfrac{1}{p}.
\]

**Espérance de la loi de Poisson.**

\[
E(X) = \sum_{k=1}^{+\infty} ke^{-\lambda}\dfrac{\lambda^k}{k!} = \lambda e^{-\lambda}\sum_{k=1}^{+\infty} \dfrac{\lambda^{k-1}}{(k-1)!} = \lambda e^{-\lambda}e^{\lambda} = \lambda.
\]

De même, \({E(X(X - 1)) = \lambda^2}\), donc \({E(X^2) = \lambda^2 + \lambda}\) et \({V(X) = \lambda}\).
{{% /details %}}

## Couples et indépendance

> [!TIP] **Définition**
>
> La **loi conjointe** du couple \((X, Y)\) est la donnée des \({P(X = x, Y = y)}\). Les **lois marginales** s’en déduisent : \({P(X = x) = \displaystyle\sum_y P(X = x, Y = y)}\). La réciproque est fausse : les lois marginales ne déterminent pas la loi conjointe.
>
> \(X\) et \(Y\) sont **indépendantes** si, pour tous \(x\), \(y\) :
>
> \[ P(X = x, Y = y) = P(X = x)\,P(Y = y). \]

> [!TIP] **Propriétés**
>
> Si \(X\) et \(Y\) sont indépendantes :
> - \(f(X)\) et \(g(Y)\) sont indépendantes pour toutes fonctions \(f\), \(g\) ;
> - \({E(XY) = E(X)E(Y)}\) ;
> - \({V(X + Y) = V(X) + V(Y)}\).
>
> Pour des variables **mutuellement indépendantes** \({X_1, \dots, X_n}\) : \({V(X_1 + \dots + X_n) = V(X_1) + \dots + V(X_n)}\), et toute fonction de certaines d’entre elles est indépendante de toute fonction des autres (lemme des coalitions).

> [!TIP] **Définition et propriétés - Covariance**
>
> \[ \operatorname{Cov}(X, Y) = E\big((X - E(X))(Y - E(Y))\big) = E(XY) - E(X)E(Y). \]
>
> - \({V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y)}\).
> - Si \(X\) et \(Y\) sont indépendantes, \({\operatorname{Cov}(X, Y) = 0}\). **La réciproque est fausse.**
> - Inégalité de Cauchy-Schwarz : \({|\operatorname{Cov}(X, Y)| \leq \sigma(X)\sigma(Y)}\). Le **coefficient de corrélation** \({\rho = \dfrac{\operatorname{Cov}(X, Y)}{\sigma(X)\sigma(Y)}}\) est dans \([-1, 1]\).

> [!TIP] **Propriétés - Sommes de variables indépendantes**
>
> - Si \({X \sim \mathcal{B}(n, p)}\) et \({Y \sim \mathcal{B}(m, p)}\) sont indépendantes, \({X + Y \sim \mathcal{B}(n + m, p)}\). Une somme de \(n\) variables de Bernoulli indépendantes de paramètre \(p\) suit \(\mathcal{B}(n, p)\).
> - Si \({X \sim \mathcal{P}(\lambda)}\) et \({Y \sim \mathcal{P}(\mu)}\) sont indépendantes, \({X + Y \sim \mathcal{P}(\lambda + \mu)}\).

## Fonctions génératrices

> [!TIP] **Définition et propriétés**
>
> Pour \(X\) à valeurs dans \(\mathbb{N}\), la **fonction génératrice** est la série entière
>
> \[ G_X(t) = E(t^X) = \sum_{k=0}^{+\infty} P(X = k)\,t^k, \]
>
> de rayon au moins \(1\), avec \({G_X(1) = 1}\).
> - \(G_X\) caractérise la loi : \({P(X = k) = \dfrac{G_X^{(k)}(0)}{k!}}\).
> - \(X\) est d’espérance finie si et seulement si \(G_X\) est dérivable en \(1\), et alors \({E(X) = G_X'(1)}\). Si de plus \(G_X\) est deux fois dérivable en \(1\) : \({V(X) = G_X''(1) + G_X'(1) - G_X'(1)^2}\).
> - Si \(X\) et \(Y\) sont indépendantes, \({G_{X+Y} = G_XG_Y}\).
>
> Exemples : \({G_X(t) = (1 - p + pt)^n}\) pour \(\mathcal{B}(n, p)\) ; \({G_X(t) = e^{\lambda(t - 1)}}\) pour \(\mathcal{P}(\lambda)\) ; \({G_X(t) = \dfrac{pt}{1 - (1 - p)t}}\) pour \(\mathcal{G}(p)\).

> [!NOTE] **Exercice résolu - Minimum de deux lois géométriques**
>
> Soient \(X\) et \(Y\) deux variables indépendantes de lois géométriques de paramètres \(p_1\) et \(p_2\). On pose \({Z = \min(X, Y)}\).
>
> 1. Déterminer la loi de \(Z\) et son espérance.
> 2. Calculer \({P(X = Y)}\) lorsque \({p_1 = p_2 = p}\).

{{% details title="Solution commentée" closed="true" %}}
Notons \({q_1 = 1 - p_1}\) et \({q_2 = 1 - p_2}\).

**1.** Pour un minimum, on calcule \({P(Z > k)}\). Pour \({k \geq 0}\), \({\{Z > k\} = \{X > k\} \cap \{Y > k\}}\), et par indépendance :

\[
P(Z > k) = P(X > k)\,P(Y > k) = q_1^k q_2^k = (q_1q_2)^k.
\]

C’est la fonction de survie d’une loi géométrique de paramètre \({r = 1 - q_1q_2}\) : pour \({k \geq 1}\), \({P(Z = k) = P(Z > k - 1) - P(Z > k) = (q_1q_2)^{k-1}(1 - q_1q_2)}\). Donc

\[
Z \sim \mathcal{G}(p_1 + p_2 - p_1p_2), \qquad E(Z) = \dfrac{1}{p_1 + p_2 - p_1p_2}.
\]

On a utilisé \({1 - (1 - p_1)(1 - p_2) = p_1 + p_2 - p_1p_2}\).

**2.** Les événements \({\{X = k\} \cap \{Y = k\}}\), \({k \geq 1}\), sont deux à deux incompatibles. Avec \({q = 1 - p}\) :

\[
P(X = Y) = \sum_{k=1}^{+\infty} P(X = k)P(Y = k) = \sum_{k=1}^{+\infty} p^2q^{2(k-1)} = \dfrac{p^2}{1 - q^2} = \dfrac{p^2}{p(2 - p)} = \dfrac{p}{2 - p}.
\]

Vérification pour \({p = 1}\) : \({X = Y = 1}\) presque sûrement, et la formule donne bien \(1\).
{{% /details %}}
