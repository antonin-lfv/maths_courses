---
title: 'Coefficients de Fourier et théorèmes de convergence'
weight: 1
cascade:
  type: docs
---

L’idée : écrire une fonction périodique comme une somme (infinie) de fonctions sinusoïdales dont les fréquences sont les multiples d’une fréquence fondamentale. On traite le cas de la période \(2\pi\) ; le cas général s’y ramène.

## Coefficients de Fourier

> [!TIP] **Cadre**
>
> \(f\) est une fonction \(2\pi\)-périodique de \(\mathbb{R}\) dans \(\mathbb{R}\) ou \(\mathbb{C}\), **continue par morceaux** : sur \({[-\pi, \pi]}\), elle est continue sauf en un nombre fini de points, où elle a des limites finies à gauche et à droite, notées \(f(x^-)\) et \(f(x^+)\).
>
> Par périodicité, l’intégrale de \(f\) sur un intervalle de longueur \(2\pi\) ne dépend pas de cet intervalle.

> [!TIP] **Définition**
>
> Les **coefficients de Fourier trigonométriques** de \(f\) sont
>
> \[ a_0(f) = \dfrac{1}{2\pi}\int_{-\pi}^{\pi} f(t)\,\mathrm{d}t, \]
>
> et, pour \({n \geq 1}\),
>
> \[ a_n(f) = \dfrac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos(nt)\,\mathrm{d}t, \qquad b_n(f) = \dfrac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin(nt)\,\mathrm{d}t. \]
>
> Les **coefficients exponentiels** sont, pour \({n \in \mathbb{Z}}\) :
>
> \[ c_n(f) = \dfrac{1}{2\pi}\int_{-\pi}^{\pi} f(t)e^{-int}\,\mathrm{d}t. \]
>
> La **série de Fourier** de \(f\) est la série de fonctions
>
> \[ a_0 + \sum_{n \geq 1} \big(a_n\cos(nx) + b_n\sin(nx)\big) = \sum_{n \in \mathbb{Z}} c_ne^{inx}, \]
>
> et l’on note \({S_N(f)(x) = a_0 + \displaystyle\sum_{n=1}^{N} \big(a_n\cos(nx) + b_n\sin(nx)\big) = \sum_{n=-N}^{N} c_ne^{inx}}\) ses sommes partielles.

> [!IMPORTANT] **Remarque**
>
> Avec cette convention, \(a_0\) est la **valeur moyenne** de \(f\). Certains ouvrages définissent \(a_0\) avec le facteur \(\dfrac{1}{\pi}\) et écrivent la série \({\dfrac{a_0}{2} + \dots}\) : il faut toujours vérifier la convention utilisée.

> [!TIP] **Propriétés**
>
> - Liens : \({c_0 = a_0}\) et, pour \({n \geq 1}\), \({c_n = \dfrac{a_n - ib_n}{2}}\), \({c_{-n} = \dfrac{a_n + ib_n}{2}}\), soit \({a_n = c_n + c_{-n}}\) et \({b_n = i(c_n - c_{-n})}\).
> - **Parité** : si \(f\) est paire, \({b_n = 0}\) et \({a_n = \dfrac{2}{\pi}\displaystyle\int_0^\pi f(t)\cos(nt)\,\mathrm{d}t}\) ; si \(f\) est impaire, \({a_n = 0}\) et \({b_n = \dfrac{2}{\pi}\displaystyle\int_0^\pi f(t)\sin(nt)\,\mathrm{d}t}\).
> - **Lemme de Riemann-Lebesgue** : \({a_n(f) \to 0}\), \({b_n(f) \to 0}\) et \({c_n(f) \to 0}\) quand \({|n| \to +\infty}\).
> - **Dérivation** : si \(f\) est continue et de classe \(\mathcal{C}^1\) par morceaux, \({c_n(f') = in\,c_n(f)}\). Plus \(f\) est régulière, plus ses coefficients décroissent vite.

## Structure préhilbertienne

> [!TIP] **Propriété**
>
> Sur l’espace des fonctions continues \(2\pi\)-périodiques, \({\langle f, g\rangle = \dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} \overline{f(t)}g(t)\,\mathrm{d}t}\) définit un produit scalaire (hermitien). La famille \({(e_n)_{n \in \mathbb{Z}}}\), avec \({e_n(t) = e^{int}}\), est **orthonormée**, et \({c_n(f) = \langle e_n, f\rangle}\).
>
> La somme partielle \(S_N(f)\) est donc la **projection orthogonale** de \(f\) sur le sous-espace engendré par \({e_{-N}, \dots, e_N}\) : c’est le polynôme trigonométrique de degré au plus \(N\) le plus proche de \(f\) en moyenne quadratique.

## Théorèmes de convergence

> [!TIP] **Théorème de Parseval**
>
> Pour toute fonction \(f\) continue par morceaux et \(2\pi\)-périodique :
>
> \[ \dfrac{1}{2\pi}\int_{-\pi}^{\pi} |f(t)|^2\,\mathrm{d}t = \sum_{n=-\infty}^{+\infty} |c_n|^2 = |a_0|^2 + \dfrac{1}{2}\sum_{n=1}^{+\infty} \left(|a_n|^2 + |b_n|^2\right). \]

> [!TIP] **Théorème de Dirichlet**
>
> Soit \(f\) une fonction \(2\pi\)-périodique **de classe \(\mathcal{C}^1\) par morceaux**. Alors sa série de Fourier converge en tout réel \(x\), et
>
> \[ \lim_{N \to +\infty} S_N(f)(x) = \dfrac{f(x^+) + f(x^-)}{2}. \]
>
> En particulier, en tout point où \(f\) est continue, la somme de la série de Fourier vaut \(f(x)\).

> [!TIP] **Théorème de convergence normale**
>
> Si \(f\) est \(2\pi\)-périodique, **continue** et de classe \(\mathcal{C}^1\) par morceaux, sa série de Fourier converge **normalement** sur \(\mathbb{R}\), et sa somme est \(f\).

> [!NOTE] **Méthode - Développer une fonction en série de Fourier**
>
> 1. Tracer la fonction sur plusieurs périodes ; repérer parité, discontinuités, régularité.
> 2. Calculer les coefficients (en utilisant la parité, et des intégrations par parties).
> 3. Citer le théorème adapté : Dirichlet (avec la demi-somme aux points de discontinuité) ou convergence normale.
> 4. Évaluer en des points particuliers (\(0\), \(\pi\), \(\dfrac{\pi}{2}\)) ou appliquer Parseval pour obtenir la somme de séries numériques.

> [!TIP] **Fonctions de période \(T\)**
>
> Pour \(f\) de période \({T > 0}\), on pose \({\omega = \dfrac{2\pi}{T}}\). Alors
>
> \[ a_0 = \dfrac{1}{T}\int_0^T f, \qquad a_n = \dfrac{2}{T}\int_0^T f(t)\cos(n\omega t)\,\mathrm{d}t, \qquad b_n = \dfrac{2}{T}\int_0^T f(t)\sin(n\omega t)\,\mathrm{d}t, \]
>
> et la série de Fourier est \({a_0 + \displaystyle\sum_{n \geq 1} \big(a_n\cos(n\omega x) + b_n\sin(n\omega x)\big)}\). Les théorèmes sont inchangés.

> [!NOTE] **Exercice résolu - Un créneau**
>
> Soit \(f\) la fonction \(2\pi\)-périodique, impaire, telle que \({f(x) = 1}\) pour \({x \in\, ]0, \pi[}\) et \({f(0) = f(\pi) = 0}\).
>
> 1. Calculer les coefficients de Fourier de \(f\).
> 2. Étudier la convergence de la série de Fourier et en déduire \({\displaystyle\sum_{k=0}^{+\infty} \dfrac{(-1)^k}{2k + 1}}\).
> 3. Avec le théorème de Parseval, calculer \({\displaystyle\sum_{k=0}^{+\infty} \dfrac{1}{(2k + 1)^2}}\), puis \({\displaystyle\sum_{n=1}^{+\infty} \dfrac{1}{n^2}}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(f\) est impaire : \({a_n = 0}\) pour tout \({n \geq 0}\). Pour \({n \geq 1}\) :

\[
b_n = \dfrac{2}{\pi}\int_0^\pi \sin(nt)\,\mathrm{d}t = \dfrac{2}{\pi}\left[-\dfrac{\cos(nt)}{n}\right]_0^\pi = \dfrac{2\big(1 - (-1)^n\big)}{n\pi}.
\]

Donc \({b_{2k} = 0}\) et \({b_{2k+1} = \dfrac{4}{(2k + 1)\pi}}\).

**2.** \(f\) est de classe \(\mathcal{C}^1\) par morceaux : le théorème de Dirichlet s’applique. En tout point \(x\), la série converge vers \({\dfrac{f(x^+) + f(x^-)}{2}}\), qui vaut \(f(x)\) aux points de continuité, et \({\dfrac{1 + (-1)}{2} = 0 = f(x)}\) aux points de discontinuité \({x = k\pi}\). Donc, pour tout réel \(x\) :

\[
f(x) = \dfrac{4}{\pi}\sum_{k=0}^{+\infty} \dfrac{\sin\big((2k + 1)x\big)}{2k + 1}.
\]

En \({x = \dfrac{\pi}{2}}\) : \({\sin\left((2k + 1)\dfrac{\pi}{2}\right) = (-1)^k}\) et \({f\left(\dfrac{\pi}{2}\right) = 1}\), d’où

\[
\sum_{k=0}^{+\infty} \dfrac{(-1)^k}{2k + 1} = \dfrac{\pi}{4}.
\]

**3.** \({\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} f^2 = 1}\). Le théorème de Parseval donne

\[
1 = \dfrac{1}{2}\sum_{k=0}^{+\infty} \dfrac{16}{(2k + 1)^2\pi^2}, \qquad \text{donc} \qquad \sum_{k=0}^{+\infty} \dfrac{1}{(2k + 1)^2} = \dfrac{\pi^2}{8}.
\]

Notons \({S = \displaystyle\sum_{n=1}^{+\infty} \dfrac{1}{n^2}}\). En séparant les indices pairs et impairs : \({S = \displaystyle\sum_{k=1}^{+\infty} \dfrac{1}{4k^2} + \dfrac{\pi^2}{8} = \dfrac{S}{4} + \dfrac{\pi^2}{8}}\). Donc \({\dfrac{3S}{4} = \dfrac{\pi^2}{8}}\), soit

\[
\sum_{n=1}^{+\infty} \dfrac{1}{n^2} = \dfrac{\pi^2}{6}.
\]
{{% /details %}}
