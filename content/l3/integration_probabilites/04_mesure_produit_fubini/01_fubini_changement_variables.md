---
title: 'Théorèmes de Fubini et changement de variables'
weight: 1
cascade:
  type: docs
---

\((X, \mathcal{A}, \mu)\) et \((Y, \mathcal{B}, \nu)\) sont deux espaces mesurés, avec \(\mu\) et \(\nu\) **\(\sigma\)-finies**.

## Mesure produit

> [!TIP] **Définition et théorème**
>
> La **tribu produit** \({\mathcal{A} \otimes \mathcal{B}}\) est la tribu sur \({X \times Y}\) engendrée par les **pavés mesurables** \({A \times B}\), \({A \in \mathcal{A}}\), \({B \in \mathcal{B}}\).
>
> Il existe une unique mesure sur \({(X \times Y, \mathcal{A} \otimes \mathcal{B})}\), la **mesure produit** \({\mu \otimes \nu}\), telle que
>
> \[ (\mu \otimes \nu)(A \times B) = \mu(A)\,\nu(B). \]
>
> Pour tout \({C \in \mathcal{A} \otimes \mathcal{B}}\), en notant \({C_x = \{y,\ (x, y) \in C\}}\) la section de \(C\) : \({(\mu \otimes \nu)(C) = \displaystyle\int_X \nu(C_x)\,\mathrm{d}\mu(x)}\).

> [!TIP] **Propriété**
>
> \({\mathcal{B}(\mathbb{R}^p) \otimes \mathcal{B}(\mathbb{R}^q) = \mathcal{B}(\mathbb{R}^{p+q})}\) et \({\lambda_p \otimes \lambda_q = \lambda_{p+q}}\) : la mesure de Lebesgue de \(\mathbb{R}^d\) est le produit de \(d\) copies de celle de \(\mathbb{R}\).

## Théorèmes de Fubini

> [!TIP] **Théorème de Fubini-Tonelli (fonctions positives)**
>
> Soit \({f : X \times Y \to [0, +\infty]}\) mesurable pour la tribu produit. Alors les fonctions \({x \mapsto \displaystyle\int_Y f(x, y)\,\mathrm{d}\nu(y)}\) et \({y \mapsto \displaystyle\int_X f(x, y)\,\mathrm{d}\mu(x)}\) sont mesurables, et
>
> \[ \int_{X \times Y} f\,\mathrm{d}(\mu \otimes \nu) = \int_X\left(\int_Y f(x, y)\,\mathrm{d}\nu(y)\right)\mathrm{d}\mu(x) = \int_Y\left(\int_X f(x, y)\,\mathrm{d}\mu(x)\right)\mathrm{d}\nu(y), \]
>
> ces trois quantités étant égales dans \([0, +\infty]\).

> [!TIP] **Théorème de Fubini (fonctions intégrables)**
>
> Soit \(f\) **intégrable** sur \({X \times Y}\) pour \({\mu \otimes \nu}\). Alors :
> - pour presque tout \(x\), \({y \mapsto f(x, y)}\) est \(\nu\)-intégrable, et \({x \mapsto \displaystyle\int_Y f(x, y)\,\mathrm{d}\nu(y)}\) est \(\mu\)-intégrable (de même en échangeant les rôles) ;
> - les trois intégrales du théorème précédent sont égales.

> [!NOTE] **Méthode - Utiliser Fubini en deux temps**
>
> 1. **Tonelli sur \(|f|\)** : calculer (ou majorer) l’une des intégrales itérées de \(|f|\). Si elle est finie, \(f\) est intégrable sur le produit.
> 2. **Fubini sur \(f\)** : intégrer dans l’ordre le plus commode.
>
> Si \(f\) est positive, la première étape suffit et aucune vérification n’est nécessaire.

> [!IMPORTANT] **Remarque**
>
> Sans intégrabilité, les intégrales itérées peuvent exister et être différentes. Pour \({f(x, y) = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}}\) sur \({]0, 1[^2}\) :
>
> \[ \int_0^1\left(\int_0^1 f(x, y)\,\mathrm{d}y\right)\mathrm{d}x = \dfrac{\pi}{4} \qquad \text{et} \qquad \int_0^1\left(\int_0^1 f(x, y)\,\mathrm{d}x\right)\mathrm{d}y = -\dfrac{\pi}{4}. \]
>
> L’hypothèse de \(\sigma\)-finitude est également nécessaire.

> [!TIP] **Applications**
>
> - **Séries doubles** : avec la mesure de comptage sur \({\mathbb{N} \times \mathbb{N}}\), si \({\displaystyle\sum_{m}\sum_{n} |a_{m,n}| < +\infty}\), alors \({\displaystyle\sum_m\sum_n a_{m,n} = \sum_n\sum_m a_{m,n}}\).
> - **Série et intégrale** : mesure de comptage sur \(\mathbb{N}\) et mesure \(\mu\) sur \(X\) ; on retrouve l’intégration terme à terme.
> - **Formule de la baignoire** : pour \(f\) mesurable positive, \({\displaystyle\int_X f\,\mathrm{d}\mu = \int_0^{+\infty} \mu(\{f > t\})\,\mathrm{d}t}\).

{{% details title="Démonstration" closed="true" %}}
Formule de la baignoire. \({f(x) = \displaystyle\int_0^{+\infty} \mathbb{1}_{\{t < f(x)\}}\,\mathrm{d}t}\). La fonction \({(x, t) \mapsto \mathbb{1}_{\{t < f(x)\}}}\) est mesurable positive : par Fubini-Tonelli,

\[
\int_X f\,\mathrm{d}\mu = \int_X\int_0^{+\infty} \mathbb{1}_{\{t < f(x)\}}\,\mathrm{d}t\,\mathrm{d}\mu(x) = \int_0^{+\infty}\int_X \mathbb{1}_{\{f > t\}}\,\mathrm{d}\mu\,\mathrm{d}t = \int_0^{+\infty} \mu(\{f > t\})\,\mathrm{d}t.
\]
{{% /details %}}

## Changement de variables

> [!TIP] **Théorème**
>
> Soit \({\varphi : U \to V}\) un \(\mathcal{C}^1\)-difféomorphisme entre deux ouverts de \(\mathbb{R}^d\). Pour toute fonction \(f\) borélienne positive (ou intégrable) sur \(V\) :
>
> \[ \int_V f(y)\,\mathrm{d}y = \int_U f(\varphi(x))\,\big|\det J_\varphi(x)\big|\,\mathrm{d}x. \]
>
> Et \(f\) est intégrable sur \(V\) si et seulement si \({(f \circ \varphi)\,|\det J_\varphi|}\) l’est sur \(U\).

> [!TIP] **Cas usuels**
>
> - **Affine** : \({\displaystyle\int_{\mathbb{R}^d} f(Ax + b)\,\mathrm{d}x = \dfrac{1}{|\det A|}\int_{\mathbb{R}^d} f(y)\,\mathrm{d}y}\) pour \(A\) inversible. La mesure de Lebesgue est invariante par translation et par isométrie.
> - **Polaires** : \({\displaystyle\int_{\mathbb{R}^2} f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \int_0^{+\infty}\int_0^{2\pi} f(r\cos\theta, r\sin\theta)\,r\,\mathrm{d}\theta\,\mathrm{d}r}\). La demi-droite que l’on retire pour avoir un difféomorphisme est de mesure nulle.
> - **Sphériques** dans \(\mathbb{R}^3\) : élément de volume \({r^2\sin\varphi\,\mathrm{d}r\,\mathrm{d}\varphi\,\mathrm{d}\theta}\).

## Convolution

> [!TIP] **Définition et théorème**
>
> Pour \(f\) et \(g\) intégrables sur \(\mathbb{R}^d\), le **produit de convolution**
>
> \[ (f * g)(x) = \int_{\mathbb{R}^d} f(x - y)\,g(y)\,\mathrm{d}y \]
>
> est défini pour presque tout \(x\), intégrable, et
>
> \[ \|f * g\|_1 \leq \|f\|_1\,\|g\|_1, \qquad \int f * g = \left(\int f\right)\left(\int g\right). \]
>
> La convolution est commutative, associative et bilinéaire.

{{% details title="Démonstration" closed="true" %}}
Par Fubini-Tonelli et invariance par translation de la mesure de Lebesgue :

\[
\int\int |f(x - y)||g(y)|\,\mathrm{d}y\,\mathrm{d}x = \int |g(y)|\left(\int |f(x - y)|\,\mathrm{d}x\right)\mathrm{d}y = \|f\|_1\|g\|_1 < +\infty.
\]

Donc \({(x, y) \mapsto f(x - y)g(y)}\) est intégrable sur \(\mathbb{R}^{2d}\), et le théorème de Fubini donne que \({f * g}\) est définie presque partout et intégrable. La commutativité vient du changement de variable \({y' = x - y}\).
{{% /details %}}

La convolution régularise : si \(g\) est \(\mathcal{C}^k\) à support compact, \({f * g}\) est \(\mathcal{C}^k\). En probabilités, la densité de la somme de deux variables indépendantes à densité est la convolution de leurs densités.

> [!NOTE] **Exercice résolu - Fubini pour calculer une intégrale simple**
>
> 1. Pour \({0 < a < b}\), calculer \({I = \displaystyle\int_0^{+\infty} \dfrac{e^{-ax} - e^{-bx}}{x}\,\mathrm{d}x}\) en écrivant l’intégrande comme une intégrale.
> 2. Calculer le volume de la boule unité \({B_3 = \{x^2 + y^2 + z^2 \leq 1\}}\) par tranches.

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour \({x > 0}\) : \({\dfrac{e^{-ax} - e^{-bx}}{x} = \displaystyle\int_a^b e^{-tx}\,\mathrm{d}t}\). Donc

\[
I = \int_0^{+\infty}\left(\int_a^b e^{-tx}\,\mathrm{d}t\right)\mathrm{d}x.
\]

La fonction \({(x, t) \mapsto e^{-tx}}\) est continue et **positive** sur \({]0, +\infty[ \times [a, b]}\) : le théorème de Fubini-Tonelli permet d’échanger l’ordre, sans autre vérification.

\[
I = \int_a^b\left(\int_0^{+\infty} e^{-tx}\,\mathrm{d}x\right)\mathrm{d}t = \int_a^b \dfrac{\mathrm{d}t}{t} = \ln\left(\dfrac{b}{a}\right).
\]

Le résultat étant fini, la fonction de départ est bien intégrable.

**2.** \({\lambda_3(B_3) = \displaystyle\int_{\mathbb{R}^3} \mathbb{1}_{B_3}}\). Par Fubini-Tonelli, en intégrant d’abord en \((x, y)\) à \(z\) fixé :

\[
\lambda_3(B_3) = \int_{-1}^{1} \lambda_2\big(\{(x, y),\ x^2 + y^2 \leq 1 - z^2\}\big)\,\mathrm{d}z = \int_{-1}^{1} \pi(1 - z^2)\,\mathrm{d}z = \pi\left(2 - \dfrac{2}{3}\right) = \dfrac{4\pi}{3}.
\]

La section à la cote \(z\) est un disque de rayon \(\sqrt{1 - z^2}\), d’aire \({\pi(1 - z^2)}\).
{{% /details %}}
