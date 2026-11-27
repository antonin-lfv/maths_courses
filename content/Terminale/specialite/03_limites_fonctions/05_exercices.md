---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Déterminer les limites suivantes.
1. \({\displaystyle\lim_{x \to +\infty} \left(-2x^3 + 5x - 1\right)}\)
2. \({\displaystyle\lim_{x \to -\infty} \dfrac{3x^2 - x}{1 - x^2}}\)
3. \({\displaystyle\lim_{x \to 2^+} \dfrac{x + 1}{x - 2}}\) et \({\displaystyle\lim_{x \to 2^-} \dfrac{x + 1}{x - 2}}\)
4. \({\displaystyle\lim_{x \to +\infty} \left(\sqrt{x} - x\right)}\)

{{% details title="Solution" closed="true" %}}
1. Forme « \({-\infty + \infty}\) » : on factorise par \(x^3\) (pour \({x \neq 0}\)) : \({-2x^3 + 5x - 1 = x^3\left(-2 + \dfrac{5}{x^2} - \dfrac{1}{x^3}\right)}\). La parenthèse tend vers \({-2}\) : la limite vaut \({-\infty}\).
2. Forme « \(\dfrac{\infty}{\infty}\) » : \(\dfrac{3x^2 - x}{1 - x^2} = \dfrac{x^2\left(3 - \dfrac1x\right)}{x^2\left(\dfrac{1}{x^2} - 1\right)} = \dfrac{3 - \dfrac1x}{\dfrac{1}{x^2} - 1} \to \dfrac{3}{-1} = -3\).
3. Le numérateur tend vers 3. Quand \({x \to 2^+}\), \({x - 2 \to 0^+}\) : la limite vaut \({+\infty}\) ; quand \({x \to 2^-}\), \({x - 2 \to 0^-}\) : la limite vaut \({-\infty}\).
4. Forme « \({+\infty - \infty}\) » : pour \({x > 0}\), \({\sqrt{x} - x = x\left(\dfrac{1}{\sqrt{x}} - 1\right)}\). La parenthèse tend vers \({-1}\) : la limite vaut \({-\infty}\).
{{% /details %}}

### Exercice 2

On considère la fonction \(f\) définie sur \({\mathbb{R} \setminus \{-1\}}\) par \({f(x) = \dfrac{2x - 3}{x + 1}}\). Déterminer les limites de \(f\) aux bornes de son ensemble de définition et en déduire les asymptotes à sa courbe.

{{% details title="Solution" closed="true" %}}
- En \({\pm\infty}\) : \({f(x) = \dfrac{2 - \dfrac{3}{x}}{1 + \dfrac{1}{x}} \to 2}\). La droite d’équation \({y = 2}\) est asymptote horizontale en \({-\infty}\) et en \({+\infty}\).
- En \({-1}\) : le numérateur tend vers \({-5}\). Si \({x \to -1^-}\), \({x + 1 \to 0^-}\) et \({f(x) \to +\infty}\) ; si \({x \to -1^+}\), \({x + 1 \to 0^+}\) et \({f(x) \to -\infty}\). La droite d’équation \({x = -1}\) est asymptote verticale.
{{% /details %}}

### Exercice 3

Déterminer \({\displaystyle\lim_{x \to +\infty} \dfrac{x + \sin(x)}{x}}\).

{{% details title="Solution" closed="true" %}}
Pour \({x > 0}\), \({-1 \leq \sin(x) \leq 1}\), donc \({\dfrac{x - 1}{x} \leq \dfrac{x + \sin(x)}{x} \leq \dfrac{x + 1}{x}}\), c’est-à-dire \({1 - \dfrac{1}{x} \leq \dfrac{x + \sin(x)}{x} \leq 1 + \dfrac{1}{x}}\). Les deux membres extrêmes tendent vers 1 : d’après le théorème des gendarmes, la limite vaut 1.
{{% /details %}}

### Exercice 4

À l’aide des croissances comparées, déterminer :
1. \({\displaystyle\lim_{x \to +\infty} x^2e^{-x}}\)
2. \({\displaystyle\lim_{x \to -\infty} (x + 1)e^x}\)
3. \({\displaystyle\lim_{x \to +\infty} \left(e^x - x^3\right)}\)

{{% details title="Solution" closed="true" %}}
1. \({x^2e^{-x} = \dfrac{x^2}{e^x}}\) et \({\dfrac{e^x}{x^2} \to +\infty}\), donc, par passage à l’inverse, la limite vaut 0.
2. \({(x + 1)e^x = xe^x + e^x}\) ; par croissances comparées \({xe^x \to 0}\) en \({-\infty}\), et \({e^x \to 0}\) : la limite vaut 0.
3. Forme « \({+\infty - \infty}\) » : \({e^x - x^3 = e^x\left(1 - \dfrac{x^3}{e^x}\right)}\) et \({\dfrac{x^3}{e^x} \to 0}\) : la limite vaut \({+\infty}\).
{{% /details %}}

### Exercice 5

Par composition, déterminer :
1. \({\displaystyle\lim_{x \to +\infty} \sqrt{\dfrac{4x + 1}{x + 3}}}\)
2. \({\displaystyle\lim_{x \to +\infty} e^{-x^2}}\)

{{% details title="Solution" closed="true" %}}
1. \({\dfrac{4x + 1}{x + 3} = \dfrac{4 + \dfrac1x}{1 + \dfrac3x} \to 4}\), et \({\lim\limits_{X \to 4} \sqrt{X} = 2}\) : la limite vaut 2.
2. \({-x^2 \to -\infty}\) et \({\lim\limits_{X \to -\infty} e^X = 0}\) : la limite vaut 0.
{{% /details %}}
