---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Calculer la dérivée seconde des fonctions suivantes, définies sur \(\mathbb{R}\).
1. \({f(x) = x^4 - 2x^3 + 5x}\)
2. \({g(x) = e^{3x} - x^2}\)
3. \({h(x) = (x + 1)e^{-x}}\)

{{% details title="Solution" closed="true" %}}
1. \({f'(x) = 4x^3 - 6x^2 + 5}\), \({f''(x) = 12x^2 - 12x}\).
2. \({g'(x) = 3e^{3x} - 2x}\), \({g''(x) = 9e^{3x} - 2}\).
3. \({h'(x) = e^{-x} - (x + 1)e^{-x} = -xe^{-x}}\), \({h''(x) = -e^{-x} + xe^{-x} = (x - 1)e^{-x}}\).
{{% /details %}}

### Exercice 2

On reprend \({f(x) = x^4 - 2x^3 + 5x}\). Étudier la convexité de \(f\) et donner les abscisses des points d’inflexion de sa courbe.

{{% details title="Solution" closed="true" %}}
\({f''(x) = 12x(x - 1)}\) : positive sur \({]-\infty\,;\,0]}\) et sur \({[1\,;\,+\infty[}\), négative sur \([0\,;\,1]\). \(f\) est convexe sur \({]-\infty\,;\,0]}\), concave sur \([0\,;\,1]\), convexe sur \({[1\,;\,+\infty[}\). \(f''\) change de signe en 0 et en 1 : la courbe a deux points d’inflexion, d’abscisses 0 et 1.
{{% /details %}}

### Exercice 3

1. Justifier que la fonction exponentielle est convexe sur \(\mathbb{R}\).
2. En déduire que, pour tout réel \(x\), \({e^x \geq 1 + x}\).
3. En déduire que, pour tout réel \(x\), \({e^{-x} \geq 1 - x}\).

{{% details title="Solution" closed="true" %}}
1. La dérivée seconde de \(\exp\) est \(\exp\), strictement positive : la fonction est convexe sur \(\mathbb{R}\).
2. Une fonction convexe a sa courbe au-dessus de toutes ses tangentes. La tangente en 0 a pour équation \({y = e^0(x - 0) + e^0 = x + 1}\). Donc \({e^x \geq x + 1}\) pour tout \(x\).
3. On applique l’inégalité précédente à \({-x}\) : \({e^{-x} \geq 1 + (-x) = 1 - x}\).
{{% /details %}}

### Exercice 4

Soit \(f\) la fonction définie sur \({]0\,;\,+\infty[}\) par \({f(x) = x^2 - 8\ln(x)}\).
1. Calculer \(f'(x)\) et \(f''(x)\).
2. Étudier la convexité de \(f\).

{{% details title="Solution" closed="true" %}}
1. \({f'(x) = 2x - \dfrac{8}{x}}\) et \({f''(x) = 2 + \dfrac{8}{x^2}}\).
2. Pour tout \({x > 0}\), \({f''(x) > 0}\) : \(f\) est convexe sur \({]0\,;\,+\infty[}\).
{{% /details %}}

### Exercice 5

Le nombre de personnes ayant vu une vidéo (en milliers), \(t\) jours après sa mise en ligne, est modélisé par \({N(t) = -t^3 + 15t^2}\) pour \({t \in [0\,;\,10]}\).
1. Calculer \(N'(t)\) et \(N''(t)\).
2. Étudier la convexité de \(N\) et déterminer le point d’inflexion.
3. Interpréter ce point d’inflexion en termes de vitesse de diffusion.

{{% details title="Solution" closed="true" %}}
1. \({N'(t) = -3t^2 + 30t}\) et \({N''(t) = -6t + 30}\).
2. \({N''(t) \geq 0 \iff t \leq 5}\) : \(N\) est convexe sur \([0\,;\,5]\) et concave sur \([5\,;\,10]\). Point d’inflexion d’abscisse 5, de coordonnées \((5\,;\,250)\).
3. \(N'(t)\) est la vitesse de diffusion (en milliers de vues par jour). Elle croît jusqu’au 5ᵉ jour puis décroît : la diffusion est la plus rapide au 5ᵉ jour, avec \({N'(5) = 75}\) milliers de vues par jour.
{{% /details %}}

### Exercice 6

Montrer que, pour tout \({x > 0}\), \({\ln(x) \leq x - 1}\).

{{% details title="Solution" closed="true" %}}
La fonction \(\ln\) est deux fois dérivable sur \({]0\,;\,+\infty[}\), avec \({\ln''(x) = -\dfrac{1}{x^2} < 0}\) : elle est concave, donc sa courbe est en dessous de toutes ses tangentes. La tangente au point d’abscisse 1 a pour équation \({y = \dfrac{1}{1}(x - 1) + \ln 1 = x - 1}\). Donc \({\ln(x) \leq x - 1}\) pour tout \({x > 0}\).
{{% /details %}}
