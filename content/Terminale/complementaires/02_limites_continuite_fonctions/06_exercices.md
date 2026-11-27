---
title: 'Exercices'
weight: 6
cascade:
  type: docs
---

### Exercice 1

Déterminer les limites suivantes.
1. \({\lim\limits_{x \to +\infty} \left(-2x^3 + x^2\right)}\)
2. \({\lim\limits_{x \to -\infty} \left(e^x + \dfrac{1}{x} - 4\right)}\)
3. \({\lim\limits_{x \to +\infty} \dfrac{5x - 2}{x + 3}}\)
4. \({\lim\limits_{x \to +\infty} \left(\sqrt{x} + x^2\right)}\)

{{% details title="Solution" closed="true" %}}
1. Forme « \({-\infty + \infty}\) » : \({-2x^3 + x^2 = x^3\left(-2 + \dfrac{1}{x}\right)}\), la parenthèse tend vers \({-2}\) : limite \({-\infty}\).
2. \({\lim\limits_{-\infty} e^x = 0}\) et \({\lim\limits_{-\infty} \dfrac{1}{x} = 0}\) : limite \({-4}\).
3. \({\dfrac{5x - 2}{x + 3} = \dfrac{5 - \dfrac{2}{x}}{1 + \dfrac{3}{x}}}\), qui tend vers 5.
4. Somme de deux fonctions qui tendent vers \({+\infty}\) : limite \({+\infty}\).
{{% /details %}}

### Exercice 2

Soit \(f\) la fonction définie sur \({]-2\,;\,+\infty[}\) par \({f(x) = \dfrac{3x}{x + 2}}\).
1. Déterminer la limite de \(f\) en \({+\infty}\).
2. Déterminer la limite de \(f\) lorsque \(x\) tend vers \({-2}\) (avec \({x > -2}\)).
3. En déduire les asymptotes à la courbe de \(f\).

{{% details title="Solution" closed="true" %}}
1. \({f(x) = \dfrac{3}{1 + \dfrac{2}{x}}}\) pour \({x \neq 0}\), donc \({\lim\limits_{x \to +\infty} f(x) = 3}\).
2. \({\lim\limits_{x \to -2} 3x = -6}\) et \({x + 2 \to 0}\) avec \({x + 2 > 0}\) : par quotient, \({\lim\limits_{x \to -2^+} f(x) = -\infty}\).
3. La droite \({y = 3}\) est asymptote horizontale en \({+\infty}\) ; la droite \({x = -2}\) est asymptote verticale.
{{% /details %}}

### Exercice 3

On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \({f(x) = \begin{cases} x^2 - 1 & \text{si } x \leq 1 \\ 2x + m & \text{si } x > 1 \end{cases}}\), où \(m\) est un réel. Déterminer \(m\) pour que \(f\) soit continue sur \(\mathbb{R}\).

{{% details title="Solution" closed="true" %}}
Chacun des deux morceaux est continu (polynôme et fonction affine). Il faut que les morceaux se raccordent en 1 : \({f(1) = 0}\) et \({\lim\limits_{x \to 1^+} (2x + m) = 2 + m}\). La fonction est continue en 1 si et seulement si \({2 + m = 0}\), soit \({m = -2}\).
{{% /details %}}

### Exercice 4

Soit \(f\) la fonction définie sur \([0\,;\,2]\) par \({f(x) = x^3 + 3x - 2}\).
1. Étudier les variations de \(f\).
2. Montrer que l’équation \({f(x) = 0}\) admet une unique solution \(\alpha\) dans \([0\,;\,2]\).
3. Donner un encadrement de \(\alpha\) d’amplitude \({10^{-2}}\).

{{% details title="Solution" closed="true" %}}
1. \({f'(x) = 3x^2 + 3 > 0}\) : \(f\) est strictement croissante sur \([0\,;\,2]\).
2. \(f\) est continue (polynôme), strictement croissante, \({f(0) = -2 < 0}\) et \({f(2) = 12 > 0}\) : d’après le corollaire du théorème des valeurs intermédiaires, l’équation admet une unique solution \(\alpha\).
3. \({f(0{,}59) \approx -0{,}024}\) et \({f(0{,}60) = 0{,}016}\), donc \({0{,}59 < \alpha < 0{,}60}\).
{{% /details %}}

### Exercice 5

Une fonction \(g\) est continue sur \(\mathbb{R}\). Elle est strictement décroissante sur \({]-\infty\,;\,0]}\), de \({+\infty}\) à \({-1}\), puis strictement croissante sur \({[0\,;\,+\infty[}\), de \({-1}\) à \(5\) (limite en \({+\infty}\)).
1. Combien l’équation \({g(x) = 0}\) a-t-elle de solutions ?
2. Même question pour \({g(x) = 6}\) et pour \({g(x) = -2}\).

{{% details title="Solution" closed="true" %}}
1. Sur \({]-\infty\,;\,0]}\), 0 est compris entre \({-1}\) et \({+\infty}\) : une unique solution. Sur \({[0\,;\,+\infty[}\), 0 est compris entre \({-1}\) et 5 : une unique solution. Au total, **deux** solutions.
2. \({g(x) = 6}\) : une solution sur \({]-\infty\,;\,0]}\) et aucune sur \({[0\,;\,+\infty[}\) (où \({g(x) < 5}\)) : **une** solution. \({g(x) = -2}\) : le minimum de \(g\) vaut \({-1}\), donc **aucune** solution.
{{% /details %}}

### Exercice 6

La température (en °C) d’un four qui refroidit est modélisée par \({T(t) = 20 + 180e^{-0{,}1t}}\), où \({t \geq 0}\) est le temps en minutes.
1. Déterminer \({\lim\limits_{t \to +\infty} T(t)}\) et interpréter.
2. Justifier qu’il existe un unique instant \(t_0\) auquel la température vaut 50 °C, et en donner une valeur approchée à la minute près.

{{% details title="Solution" closed="true" %}}
1. \({\lim\limits_{t \to +\infty} (-0{,}1t) = -\infty}\) et \({\lim\limits_{X \to -\infty} e^X = 0}\), donc \({\lim\limits_{t \to +\infty} T(t) = 20}\) : la température du four se rapproche de la température ambiante, 20 °C.
2. \(T'(t) = 180 \times (-0{,}1)e^{-0{,}1t} = -18e^{-0{,}1t} < 0\) : \(T\) est continue et strictement décroissante sur \({[0\,;\,+\infty[}\), de \({T(0) = 200}\) vers 20. Comme 50 est compris entre 20 et 200, l’équation \({T(t) = 50}\) a une unique solution \(t_0\). À la calculatrice, \({T(17) \approx 52{,}9}\) et \({T(18) \approx 49{,}8}\) : \({t_0 \approx 18}\) minutes.
{{% /details %}}
