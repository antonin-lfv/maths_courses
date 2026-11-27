---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Déterminer une primitive de chaque fonction sur l’intervalle indiqué.
1. \({f(x) = 3x^2 - 4x + 1}\) sur \(\mathbb{R}\)
2. \({g(x) = e^{x} + \dfrac{1}{\sqrt{x}}}\) sur \({]0\,;\,+\infty[}\)
3. \({h(x) = \dfrac{2x}{x^2 + 3}}\) sur \(\mathbb{R}\)
4. \({k(x) = 6e^{-2x}}\) sur \(\mathbb{R}\)

{{% details title="Solution" closed="true" %}}
1. \({F(x) = x^3 - 2x^2 + x}\).
2. \({G(x) = e^x + 2\sqrt{x}}\).
3. Forme \(\dfrac{u'}{u}\) avec \({u(x) = x^2 + 3 > 0}\) : \({H(x) = \ln(x^2 + 3)}\).
4. \({6e^{-2x} = -3 \times (-2)e^{-2x}}\) : \({K(x) = -3e^{-2x}}\).
{{% /details %}}

### Exercice 2

Déterminer la primitive \(F\) de \({f(x) = \dfrac{1}{x} + 2x}\) sur \({]0\,;\,+\infty[}\) telle que \({F(1) = 5}\).

{{% details title="Solution" closed="true" %}}
Les primitives sont \({x \mapsto \ln(x) + x^2 + k}\). \({F(1) = 0 + 1 + k = 5}\), donc \({k = 4}\) et \({F(x) = \ln(x) + x^2 + 4}\).
{{% /details %}}

### Exercice 3

1. Résoudre l’équation différentielle \({y' = 0{,}2y}\).
2. Déterminer la solution qui vaut 50 en \({x = 0}\).

{{% details title="Solution" closed="true" %}}
1. Les solutions sont les fonctions \({x \mapsto Ce^{0{,}2x}}\), \({C \in \mathbb{R}}\).
2. \({Ce^0 = 50}\), donc \({C = 50}\) : \({x \mapsto 50e^{0{,}2x}}\).
{{% /details %}}

### Exercice 4

Une tasse de café, sortie à 80 °C, est posée dans une pièce à 20 °C. On modélise sa température \(\theta(t)\) (en °C, \(t\) en minutes) par la solution de l’équation \({\theta' = -0{,}1\theta + 2}\) avec \({\theta(0) = 80}\).
1. Déterminer \(\theta(t)\).
2. Déterminer la limite de \(\theta(t)\) quand \(t\) tend vers \({+\infty}\) et interpréter.
3. Au bout de combien de minutes le café est-il à moins de 40 °C ?

{{% details title="Solution" closed="true" %}}
1. \({a = -0{,}1}\), \({b = 2}\), \({-\dfrac{b}{a} = 20}\) : \({\theta(t) = Ce^{-0{,}1t} + 20}\). \({\theta(0) = C + 20 = 80}\), donc \({C = 60}\) et \({\theta(t) = 60e^{-0{,}1t} + 20}\).
2. \({\lim\limits_{t \to +\infty} e^{-0{,}1t} = 0}\), donc \({\lim \theta(t) = 20}\) : le café refroidit jusqu’à la température de la pièce.
3. \(60e^{-0{,}1t} + 20 < 40 \iff e^{-0{,}1t} < \dfrac{1}{3} \iff -0{,}1t < -\ln 3 \iff t > 10\ln 3 \approx 11\). Le café passe sous 40 °C au bout d’environ 11 minutes.
{{% /details %}}

### Exercice 5

On considère l’équation \({(E) : y' + 3y = 6}\).
1. Déterminer une solution constante de \((E)\).
2. Résoudre \((E)\), puis déterminer la solution \(f\) telle que \({f(0) = 0}\).

{{% details title="Solution" closed="true" %}}
1. Une fonction constante \({y = c}\) est solution si et seulement si \({0 + 3c = 6}\), soit \({c = 2}\).
2. \({(E) \iff y' = -3y + 6}\) : les solutions sont \({x \mapsto Ce^{-3x} + 2}\). \({f(0) = C + 2 = 0}\), donc \({C = -2}\) et \({f(x) = 2 - 2e^{-3x}}\).
{{% /details %}}

### Exercice 6

Soit \({f(x) = \dfrac{\ln(x)}{x}}\) sur \({]0\,;\,+\infty[}\).
1. Montrer que \({f = u'u}\) pour une fonction \(u\) à préciser.
2. En déduire une primitive de \(f\).

{{% details title="Solution" closed="true" %}}
1. Avec \({u(x) = \ln(x)}\), \({u'(x) = \dfrac{1}{x}}\) et \({u'(x)u(x) = \dfrac{\ln x}{x} = f(x)}\).
2. \(u'u\) a pour primitive \(\dfrac{u^2}{2}\) : \({F(x) = \dfrac{(\ln x)^2}{2}}\). Vérification : \({F'(x) = \dfrac{2\ln(x) \times \dfrac{1}{x}}{2} = \dfrac{\ln x}{x}}\).
{{% /details %}}
