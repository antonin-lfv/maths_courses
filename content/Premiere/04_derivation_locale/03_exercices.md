---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x) = x^2 - 3x\). Calculer le taux de variation de \(f\) entre 1 et 4, puis entre \(-2\) et 0.

{{% details title="Solution" closed="true" %}}
Le taux de variation de \(f\) entre \(a\) et \(b\) (\(a \neq b\)) est \(\dfrac{f(b) - f(a)}{b - a}\).

- \(f(1) = 1 - 3 = -2\) et \(f(4) = 16 - 12 = 4\), donc le taux vaut \(\dfrac{4 - (-2)}{4 - 1} = \dfrac{6}{3} = 2\).
- \(f(-2) = 4 + 6 = 10\) et \(f(0) = 0\), donc le taux vaut \(\dfrac{0 - 10}{0 - (-2)} = \dfrac{-10}{2} = -5\).
{{% /details %}}

### Exercice 2

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x) = 2x^2 + x\).
1. Pour \(h \neq 0\), exprimer \(\dfrac{f(1 + h) - f(1)}{h}\) en fonction de \(h\).
2. En déduire que \(f\) est dérivable en 1 et donner \(f'(1)\).

{{% details title="Solution" closed="true" %}}
1. \(f(1 + h) = 2(1 + 2h + h^2) + 1 + h = 3 + 5h + 2h^2\) et \(f(1) = 3\). Donc, pour \(h \neq 0\) :
\[
\frac{f(1 + h) - f(1)}{h} = \frac{5h + 2h^2}{h} = 5 + 2h.
\]
2. Quand \(h\) tend vers 0, \(5 + 2h\) tend vers 5 : la limite existe et est finie, donc \(f\) est dérivable en 1 et \(f'(1) = 5\).
{{% /details %}}

### Exercice 3

Soit \(f\) la fonction inverse, définie sur \(\mathbb{R}^*\) par \(f(x) = \dfrac{1}{x}\). Montrer que \(f\) est dérivable en 2 et calculer \(f'(2)\).

{{% details title="Solution" closed="true" %}}
Pour \(h \neq 0\) tel que \(2 + h \neq 0\) :
\[
f(2 + h) - f(2) = \frac{1}{2 + h} - \frac{1}{2} = \frac{2 - (2 + h)}{2(2 + h)} = \frac{-h}{2(2 + h)},
\]
donc
\[
\frac{f(2 + h) - f(2)}{h} = \frac{-1}{2(2 + h)}.
\]
Quand \(h\) tend vers 0, \(2(2 + h)\) tend vers 4, donc le quotient tend vers \(-\dfrac{1}{4}\). La fonction \(f\) est dérivable en 2 et \(f'(2) = -\dfrac{1}{4}\).
{{% /details %}}

### Exercice 4

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x) = x^2 - 4x + 1\) et \(\mathcal{C}\) sa courbe représentative.
1. Calculer \(f'(3)\) à l’aide d’un taux de variation.
2. Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d’abscisse 3.

{{% details title="Solution" closed="true" %}}
1. \(f(3) = 9 - 12 + 1 = -2\) et \(f(3 + h) = 9 + 6h + h^2 - 12 - 4h + 1 = -2 + 2h + h^2\). Pour \(h \neq 0\) :
\[
\frac{f(3 + h) - f(3)}{h} = \frac{2h + h^2}{h} = 2 + h,
\]
qui tend vers 2 quand \(h\) tend vers 0. Donc \(f'(3) = 2\).
2. La tangente au point d’abscisse \(a\) a pour équation \(y = f'(a)(x - a) + f(a)\). Ici :
\[
y = 2(x - 3) + (-2) \iff y = 2x - 8.
\]
{{% /details %}}

### Exercice 5

Montrer que la fonction racine carrée \(x \mapsto \sqrt{x}\), définie sur \([0\,;\,+\infty[\), n’est pas dérivable en 0.

{{% details title="Solution" closed="true" %}}
Pour \(h > 0\) :
\[
\frac{\sqrt{0 + h} - \sqrt{0}}{h} = \frac{\sqrt{h}}{h} = \frac{1}{\sqrt{h}}.
\]
Quand \(h\) tend vers 0 (avec \(h > 0\)), \(\sqrt{h}\) tend vers 0 et \(\dfrac{1}{\sqrt{h}}\) devient aussi grand que l’on veut : le taux de variation n’a pas de limite finie. La fonction racine carrée n’est donc pas dérivable en 0 (sa courbe admet en l’origine une tangente verticale).
{{% /details %}}

### Exercice 6

Une fonction \(f\) est dérivable en 1 et sa courbe passe par le point \(A(1\,;\,3)\). On sait que la tangente à la courbe en \(A\) passe aussi par le point \(B(3\,;\,-1)\).
1. Déterminer \(f'(1)\).
2. Donner une équation de cette tangente.

{{% details title="Solution" closed="true" %}}
1. Le nombre dérivé \(f'(1)\) est le coefficient directeur de la tangente en \(A\), c’est-à-dire de la droite \((AB)\) :
\[
f'(1) = \frac{y_B - y_A}{x_B - x_A} = \frac{-1 - 3}{3 - 1} = -2.
\]
2. \(y = f'(1)(x - 1) + f(1) = -2(x - 1) + 3\), soit \(y = -2x + 5\). Vérification : pour \(x = 3\), \(y = -6 + 5 = -1\), ce qui correspond bien à \(B\).
{{% /details %}}
