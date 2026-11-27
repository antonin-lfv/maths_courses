---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Écrire chaque expression sous la forme la plus simple possible, pour tout réel \(x\).
\[
A = e^{3x} \times e^{-x + 2}, \qquad B = \dfrac{\left(e^{x}\right)^3}{e^{2x - 1}}, \qquad C = e^{x}\left(e^{x} + e^{-x}\right).
\]

{{% details title="Solution" closed="true" %}}
On utilise \({e^{a}e^{b} = e^{a + b}}\), \({\dfrac{e^{a}}{e^{b}} = e^{a - b}}\) et \({\left(e^{a}\right)^n = e^{na}}\).

- \({A = e^{3x + (-x + 2)} = e^{2x + 2}}\).
- \({B = \dfrac{e^{3x}}{e^{2x - 1}} = e^{3x - (2x - 1)} = e^{x + 1}}\).
- \(C = e^{x}e^{x} + e^{x}e^{-x} = e^{2x} + e^{0} = e^{2x} + 1\).
{{% /details %}}

### Exercice 2

Résoudre dans \(\mathbb{R}\) :
1. \({e^{2x - 1} = e^{x + 3}}\)
2. \({e^{x^2} = e^{4x - 3}}\)
3. \({e^{3x} \leq e^{6 - x}}\)
4. \({e^{x^2} > e}\)

{{% details title="Solution" closed="true" %}}
Pour tous réels \(a\) et \(b\) : \({e^{a} = e^{b} \iff a = b}\) et \({e^{a} < e^{b} \iff a < b}\).

1. \({2x - 1 = x + 3 \iff x = 4}\). \({\mathcal{S} = \{4\}}\).
2. \(x^2 = 4x - 3 \iff x^2 - 4x + 3 = 0 \iff (x - 1)(x - 3) = 0\). \({\mathcal{S} = \{1\,;\,3\}}\).
3. \({3x \leq 6 - x \iff 4x \leq 6 \iff x \leq \dfrac{3}{2}}\). \({\mathcal{S} = \left]-\infty\,;\,\dfrac{3}{2}\right]}\).
4. \({e = e^{1}}\), donc l’inéquation équivaut à \({x^2 > 1}\), c’est-à-dire \({x < -1}\) ou \({x > 1}\). \({\mathcal{S} = \,]-\infty\,;\,-1[\, \cup \,]1\,;\,+\infty[}\).
{{% /details %}}

### Exercice 3

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = (x - 2)e^{x}}\).
1. Montrer que \({f'(x) = (x - 1)e^{x}}\).
2. Étudier les variations de \(f\) et donner son minimum.

{{% details title="Solution" closed="true" %}}
1. Produit \(uv\) avec \({u(x) = x - 2}\), \({u'(x) = 1}\), \({v(x) = e^{x}}\), \({v'(x) = e^{x}}\) :
\[
f'(x) = 1 \times e^{x} + (x - 2)e^{x} = (x - 1)e^{x}.
\]
2. Pour tout réel \(x\), \({e^{x} > 0}\), donc \(f'(x)\) est du signe de \({x - 1}\) : \(f\) est décroissante sur \({]-\infty\,;\,1]}\) et croissante sur \({[1\,;\,+\infty[}\). Son minimum est \({f(1) = -e}\).

![](/images/image323.png)
{{% /details %}}

### Exercice 4

Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \({g(x) = (2x + 1)e^{-x}}\).
1. Calculer \(g'(x)\).
2. En déduire que \(g\) admet un maximum, et donner sa valeur exacte.

{{% details title="Solution" closed="true" %}}
1. La dérivée de \({x \mapsto e^{-x}}\) est \({x \mapsto -e^{-x}}\). Avec la dérivée d’un produit :
\[
g'(x) = 2e^{-x} + (2x + 1)\left(-e^{-x}\right) = (2 - 2x - 1)e^{-x} = (1 - 2x)e^{-x}.
\]
2. Comme \({e^{-x} > 0}\), \(g'(x)\) est du signe de \({1 - 2x}\) : positif sur \({\left]-\infty\,;\,\dfrac{1}{2}\right[}\), négatif sur \({\left]\dfrac{1}{2}\,;\,+\infty\right[}\). Donc \(g\) est croissante puis décroissante, et admet un maximum en \(\dfrac{1}{2}\) :
\[
g\left(\dfrac{1}{2}\right) = 2e^{-\frac{1}{2}} = \dfrac{2}{\sqrt{e}} \approx 1{,}21.
\]
{{% /details %}}

### Exercice 5

On considère la suite \((u_n)\) définie pour tout entier naturel \(n\) par \({u_n = e^{-0{,}5n + 1}}\).
1. Montrer que \((u_n)\) est une suite géométrique dont on précisera le premier terme et la raison.
2. En déduire son sens de variation.

{{% details title="Solution" closed="true" %}}
1. Pour tout \({n \in \mathbb{N}}\), \({u_n > 0}\) et
\[
\dfrac{u_{n+1}}{u_n} = \dfrac{e^{-0{,}5(n + 1) + 1}}{e^{-0{,}5n + 1}} = e^{-0{,}5(n + 1) + 1 + 0{,}5n - 1} = e^{-0{,}5}.
\]
Le quotient est constant : \((u_n)\) est géométrique de raison \({q = e^{-0{,}5} \approx 0{,}61}\) et de premier terme \({u_0 = e^{1} = e}\).
2. On a \({0 < q < 1}\) et \({u_0 > 0}\) : la suite \((u_n)\) est strictement décroissante.
{{% /details %}}

### Exercice 6

Le nombre de bactéries d’une culture traitée par un antibiotique est modélisé, \(t\) heures après le début du traitement, par \({N(t) = 1\,000\,e^{-0{,}2t}}\) pour \({t \geq 0}\).
1. Étudier le sens de variation de \(N\) sur \({[0\,;\,+\infty[}\).
2. Calculer \(N(5)\), arrondi à l’unité.
3. À l’aide de la calculatrice, déterminer entre quelles heures entières le nombre de bactéries passe sous 500.

{{% details title="Solution" closed="true" %}}
1. \(N'(t) = 1\,000 \times (-0{,}2)e^{-0{,}2t} = -200\,e^{-0{,}2t} < 0\) : \(N\) est strictement décroissante sur \({[0\,;\,+\infty[}\) (c’est une fonction du type \({t \mapsto e^{-kt}}\) avec \({k = 0{,}2 > 0}\), multipliée par un nombre positif).
2. \({N(5) = 1\,000\,e^{-1} \approx 368}\) bactéries.
3. \({N(3) = 1\,000\,e^{-0{,}6} \approx 548{,}8}\) et \({N(4) = 1\,000\,e^{-0{,}8} \approx 449{,}3}\). Comme \(N\) est décroissante, le nombre de bactéries passe sous 500 entre la 3ᵉ et la 4ᵉ heure.
{{% /details %}}
