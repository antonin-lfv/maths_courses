---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Calculer les intégrales suivantes.
1. \(\displaystyle\int_0^2 (3x^2 - 2x + 1)\,\mathrm{d}x\)
2. \(\displaystyle\int_1^4 \frac{1}{\sqrt{x}}\,\mathrm{d}x\)
3. \(\displaystyle\int_0^{\ln 3} e^{x}\,\mathrm{d}x\)
4. \(\displaystyle\int_{1}^{2} \frac{3}{x}\,\mathrm{d}x\)

{{% details title="Solution" closed="true" %}}
1. \(\left[x^3 - x^2 + x\right]_0^2 = 8 - 4 + 2 = 6\).
2. \(\left[2\sqrt{x}\right]_1^4 = 4 - 2 = 2\).
3. \(\left[e^x\right]_0^{\ln 3} = 3 - 1 = 2\).
4. \(\left[3\ln x\right]_1^2 = 3\ln 2\).
{{% /details %}}

### Exercice 2

Soit \(f(x) = 4 - x^2\).
1. Montrer que \(f\) est positive sur \([-2\,;\,2]\).
2. Calculer l’aire du domaine délimité par la courbe de \(f\) et l’axe des abscisses sur \([-2\,;\,2]\).

{{% details title="Solution" closed="true" %}}
1. \(f(x) = (2 - x)(2 + x) \geq 0\) sur \([-2\,;\,2]\).
2. Aire \(= \displaystyle\int_{-2}^{2} (4 - x^2)\,\mathrm{d}x = \left[4x - \frac{x^3}{3}\right]_{-2}^{2} = \left(8 - \frac{8}{3}\right) - \left(-8 + \frac{8}{3}\right) = \frac{32}{3}\) u.a.
{{% /details %}}

### Exercice 3

Soit \(f(x) = x^2 - 4x + 3\).
1. Étudier le signe de \(f\) sur \([0\,;\,3]\).
2. Calculer \(\displaystyle\int_0^3 f(x)\,\mathrm{d}x\). Ce nombre représente-t-il une aire ?
3. Calculer l’aire totale du domaine délimité par la courbe, l’axe des abscisses et les droites \(x = 0\) et \(x = 3\).

{{% details title="Solution" closed="true" %}}
1. \(f(x) = (x - 1)(x - 3)\) : positive sur \([0\,;\,1]\), négative sur \([1\,;\,3]\).
2. Une primitive est \(F(x) = \dfrac{x^3}{3} - 2x^2 + 3x\). \(\displaystyle\int_0^3 f = F(3) - F(0) = 9 - 18 + 9 = 0\). Ce n’est pas une aire : les parties positive et négative se compensent.
3. \(\displaystyle\int_0^1 f = F(1) = \frac{1}{3} - 2 + 3 = \frac{4}{3}\) et \(\displaystyle\int_1^3 f = 0 - \frac{4}{3} = -\frac{4}{3}\). L’aire totale vaut \(\dfrac{4}{3} + \dfrac{4}{3} = \dfrac{8}{3}\) u.a.
{{% /details %}}

### Exercice 4

La concentration d’un médicament dans le sang (en mg/L) est modélisée par \(C(t) = 8te^{-t}\), \(t\) en heures.
1. Vérifier que \(G(t) = -8(t + 1)e^{-t}\) est une primitive de \(C\).
2. Calculer la concentration moyenne sur les 4 premières heures (arrondie au centième).

{{% details title="Solution" closed="true" %}}
1. \(G'(t) = -8e^{-t} - 8(t + 1)(-e^{-t}) = -8e^{-t} + 8(t + 1)e^{-t} = 8te^{-t} = C(t)\).
2. \(\mu = \dfrac{1}{4}\left(G(4) - G(0)\right) = \dfrac{1}{4}\left(-40e^{-4} + 8\right) = 2 - 10e^{-4} \approx 1{,}82\) mg/L.
{{% /details %}}

### Exercice 5

Calculer l’aire du domaine compris entre les courbes de \(f(x) = x^2\) et \(g(x) = 2x\) entre leurs points d’intersection.

{{% details title="Solution" closed="true" %}}
\(x^2 = 2x \iff x(x - 2) = 0 \iff x = 0\) ou \(x = 2\). Sur \([0\,;\,2]\), \(2x - x^2 = x(2 - x) \geq 0\). Aire \(= \displaystyle\int_0^2 (2x - x^2)\,\mathrm{d}x = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}\) u.a.
{{% /details %}}

### Exercice 6

Soit \(F(x) = \displaystyle\int_1^x \frac{1}{t^2}\,\mathrm{d}t\) pour \(x > 0\).
1. Calculer \(F(x)\).
2. Déterminer \(\lim\limits_{x \to +\infty} F(x)\) et interpréter graphiquement.

{{% details title="Solution" closed="true" %}}
1. Une primitive de \(t \mapsto \dfrac{1}{t^2}\) est \(t \mapsto -\dfrac{1}{t}\) : \(F(x) = -\dfrac{1}{x} + 1 = 1 - \dfrac{1}{x}\).
2. \(\lim\limits_{x \to +\infty} F(x) = 1\). L’aire sous la courbe de \(t \mapsto \frac{1}{t^2}\) entre 1 et \(x\) reste inférieure à 1 u.a. et s’en rapproche quand \(x\) devient grand.
{{% /details %}}
