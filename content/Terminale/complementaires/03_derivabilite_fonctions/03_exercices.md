---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Soit \(f\) la fonction définie sur \({]0\,;\,+\infty[}\) par \({f(x) = \dfrac{4}{x}}\).
1. Montrer, à l’aide du taux de variation, que \({f'(1) = -4}\).
2. Déterminer une équation de la tangente à la courbe de \(f\) au point d’abscisse 1.

{{% details title="Solution" closed="true" %}}
1. Pour \({h \neq 0}\) (avec \({1 + h > 0}\)) : \(\dfrac{f(1 + h) - f(1)}{h} = \dfrac{\dfrac{4}{1 + h} - 4}{h} = \dfrac{4 - 4(1 + h)}{h(1 + h)} = \dfrac{-4}{1 + h}\), qui tend vers \({-4}\) quand \(h\) tend vers 0.
2. \({y = -4(x - 1) + 4}\), soit \({y = -4x + 8}\).
{{% /details %}}

### Exercice 2

Déterminer la dérivée de chaque fonction sur l’intervalle indiqué.
1. \({f(x) = (2x + 3)e^{x}}\) sur \(\mathbb{R}\)
2. \({g(x) = \dfrac{3}{x^2 + 2}}\) sur \(\mathbb{R}\)
3. \({h(x) = e^{x^2 - 3x}}\) sur \(\mathbb{R}\)
4. \({k(x) = \sqrt{4x + 1}}\) sur \({\left]-\dfrac{1}{4}\,;\,+\infty\right[}\)

{{% details title="Solution" closed="true" %}}
1. \(f'(x) = 2e^x + (2x + 3)e^x = (2x + 5)e^x\).
2. \({g = 3 \times \dfrac{1}{u}}\) avec \({u(x) = x^2 + 2}\) : \({g'(x) = -\dfrac{3 \times 2x}{(x^2 + 2)^2} = -\dfrac{6x}{(x^2 + 2)^2}}\).
3. \({h'(x) = (2x - 3)e^{x^2 - 3x}}\).
4. \({k'(x) = \dfrac{4}{2\sqrt{4x + 1}} = \dfrac{2}{\sqrt{4x + 1}}}\).
{{% /details %}}

### Exercice 3

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = (x - 2)e^{-x}}\).
1. Montrer que \({f'(x) = (3 - x)e^{-x}}\).
2. Étudier les variations de \(f\) et préciser son extremum.

{{% details title="Solution" closed="true" %}}
1. Produit : \(f'(x) = 1 \times e^{-x} + (x - 2) \times (-e^{-x}) = (1 - x + 2)e^{-x} = (3 - x)e^{-x}\).
2. \({e^{-x} > 0}\), donc \(f'(x)\) est du signe de \({3 - x}\) : \(f\) est strictement croissante sur \({]-\infty\,;\,3]}\) et strictement décroissante sur \({[3\,;\,+\infty[}\). Elle admet un maximum en 3 : \({f(3) = e^{-3} \approx 0{,}05}\).
{{% /details %}}

### Exercice 4

Une entreprise fabrique \(x\) centaines d’objets par jour, avec \({x \in [0\,;\,8]}\). Le bénéfice journalier, en milliers d’euros, est \({B(x) = -x^3 + 9x^2 - 15x - 5}\).
1. Calculer \(B'(x)\) et étudier son signe.
2. Combien d’objets faut-il fabriquer pour que le bénéfice soit maximal ? Quel est ce bénéfice ?

{{% details title="Solution" closed="true" %}}
1. \(B'(x) = -3x^2 + 18x - 15 = -3(x^2 - 6x + 5) = -3(x - 1)(x - 5)\). \({B'(x) < 0}\) sur \([0\,;\,1[\) et \(]5\,;\,8]\), \({B'(x) > 0}\) sur \(]1\,;\,5[\).
2. \(B\) décroît sur \([0\,;\,1]\), croît sur \([1\,;\,5]\), décroît sur \([5\,;\,8]\). On compare : \({B(5) = -125 + 225 - 75 - 5 = 20}\) et \({B(0) = -5}\). Le bénéfice est maximal pour 500 objets par jour ; il vaut 20 000 €.
{{% /details %}}

### Exercice 5

Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \({g(x) = x^3}\).
1. Calculer \(g'(0)\).
2. \(g\) admet-elle un extremum en 0 ? Que peut-on en conclure ?

{{% details title="Solution" closed="true" %}}
1. \({g'(x) = 3x^2}\), donc \({g'(0) = 0}\).
2. \({g'(x) = 3x^2 \geq 0}\) ne change pas de signe : \(g\) est strictement croissante sur \(\mathbb{R}\) (\(g'\) ne s’annule qu’en 0). Elle n’a donc pas d’extremum en 0. Ainsi, \({f'(a) = 0}\) ne suffit pas pour conclure à l’existence d’un extremum : il faut que \(f'\) change de signe en \(a\).
{{% /details %}}

### Exercice 6

Soit \(h\) la fonction définie sur \({]0\,;\,+\infty[}\) par \({h(x) = x + \dfrac{9}{x}}\).
1. Montrer que \({h'(x) = \dfrac{(x - 3)(x + 3)}{x^2}}\).
2. En déduire que, pour tout \({x > 0}\), \({h(x) \geq 6}\).

{{% details title="Solution" closed="true" %}}
1. \(h'(x) = 1 - \dfrac{9}{x^2} = \dfrac{x^2 - 9}{x^2} = \dfrac{(x - 3)(x + 3)}{x^2}\).
2. Sur \({]0\,;\,+\infty[}\), \({x^2 > 0}\) et \({x + 3 > 0}\) : \(h'(x)\) est du signe de \({x - 3}\). \(h\) est décroissante sur \(]0\,;\,3]\) et croissante sur \({[3\,;\,+\infty[}\) ; son minimum est \({h(3) = 3 + 3 = 6}\). Donc \({h(x) \geq 6}\) pour tout \({x > 0}\).
{{% /details %}}
