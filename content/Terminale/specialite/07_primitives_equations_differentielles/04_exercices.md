---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Déterminer une primitive de chacune des fonctions suivantes sur l’intervalle indiqué.
1. \({f(x) = 5x^4 - 3x^2 + 2x - 7}\) sur \(\mathbb{R}\)
2. \({g(x) = \dfrac{1}{x^3}}\) sur \({]0\,;\,+\infty[}\)
3. \({h(x) = \cos(3x)}\) sur \(\mathbb{R}\)
4. \({k(x) = \dfrac{\ln(x)}{x}}\) sur \({]0\,;\,+\infty[}\)
5. \({m(x) = 3x^2e^{x^3}}\) sur \(\mathbb{R}\)

{{% details title="Solution" closed="true" %}}
1. \({F(x) = x^5 - x^3 + x^2 - 7x}\).
2. \({g(x) = x^{-3}}\), donc \({G(x) = \dfrac{x^{-2}}{-2} = -\dfrac{1}{2x^2}}\).
3. \({H(x) = \dfrac{1}{3}\sin(3x)}\).
4. Avec \({u(x) = \ln(x)}\), \({u'(x) = \dfrac{1}{x}}\) : \({k = u'u}\), donc \({K(x) = \dfrac{(\ln(x))^2}{2}}\).
5. Avec \({u(x) = x^3}\), \({u'(x) = 3x^2}\) : \({m = u'e^u}\), donc \({M(x) = e^{x^3}}\).
{{% /details %}}

### Exercice 2

Déterminer la primitive \(F\) sur \(\mathbb{R}\) de \({f(x) = 6x^2 - 4x + 1}\) telle que \({F(1) = 0}\).

{{% details title="Solution" closed="true" %}}
Les primitives de \(f\) sont \({F(x) = 2x^3 - 2x^2 + x + C}\). \({F(1) = 2 - 2 + 1 + C = 1 + C}\), donc \({F(1) = 0 \iff C = -1}\) :  
\({F(x) = 2x^3 - 2x^2 + x - 1}\).
{{% /details %}}

### Exercice 3

1. Déterminer la solution sur \(\mathbb{R}\) de \({y' = -\dfrac{1}{2}y + 3}\) telle que \({y(0) = 0}\).
2. Résoudre sur \(\mathbb{R}\) l’équation \({2y' + 4y = 1}\).

{{% details title="Solution" closed="true" %}}
1. Avec \({a = -\dfrac12}\) et \({b = 3}\), les solutions sont \({x \mapsto Ce^{-x/2} - \dfrac{3}{-1/2} = Ce^{-x/2} + 6}\).  
   \({y(0) = C + 6 = 0}\), donc \({C = -6}\) : \({y(x) = 6 - 6e^{-x/2}}\).
2. \({2y' + 4y = 1 \iff y' = -2y + \dfrac{1}{2}}\). Les solutions sont \({x \mapsto Ce^{-2x} - \dfrac{1/2}{-2} = Ce^{-2x} + \dfrac{1}{4}}\), \({C \in \mathbb{R}}\).
{{% /details %}}

### Exercice 4

On considère l’équation différentielle \((E)\) : \({y' - y = -x}\).
1. Déterminer une fonction affine solution de \((E)\).
2. Résoudre \((E)\) sur \(\mathbb{R}\).
3. Déterminer la solution \(g\) de \((E)\) telle que \({g(0) = 3}\).

{{% details title="Solution" closed="true" %}}
1. On pose \({y_0(x) = mx + p}\) : \({y_0' - y_0 = m - mx - p}\). Par identification avec \({-x}\) : \({-m = -1}\) et \({m - p = 0}\), d’où \({m = 1}\), \({p = 1}\) : \({y_0(x) = x + 1}\).
2. L’équation homogène \({y' = y}\) a pour solutions \({x \mapsto Ce^x}\). Les solutions de \((E)\) sont \({x \mapsto Ce^x + x + 1}\), \({C \in \mathbb{R}}\).
3. \({g(0) = C + 1 = 3}\), donc \({C = 2}\) : \({g(x) = 2e^x + x + 1}\).
{{% /details %}}

### Exercice 5

Un patient reçoit un médicament par perfusion continue. La quantité \(Q\) de médicament présente dans son sang (en mg), en fonction du temps \(t\) (en heures), vérifie \({Q' = -0{,}2Q + 4}\) et \({Q(0) = 0}\).
1. Déterminer \(Q(t)\).
2. Vers quelle quantité tend \(Q(t)\) lorsque \(t\) devient grand ?
3. Au bout de combien de temps la quantité atteint-elle 15 mg ?

{{% details title="Solution" closed="true" %}}
1. Les solutions de \({Q' = -0{,}2Q + 4}\) sont \({t \mapsto Ce^{-0{,}2t} - \dfrac{4}{-0{,}2} = Ce^{-0{,}2t} + 20}\). \({Q(0) = C + 20 = 0}\), donc \({C = -20}\) :  
   \({Q(t) = 20 - 20e^{-0{,}2t}}\).
2. \({\lim\limits_{t \to +\infty} e^{-0{,}2t} = 0}\), donc \({\lim\limits_{t \to +\infty} Q(t) = 20}\) : la quantité se stabilise vers 20 mg.
3. \(Q(t) = 15 \iff 20e^{-0{,}2t} = 5 \iff e^{-0{,}2t} = \dfrac{1}{4} \iff -0{,}2t = -\ln(4) \iff t = 5\ln(4) \approx 6{,}9\) h.
{{% /details %}}
