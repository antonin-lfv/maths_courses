---
title: 'Primitives & équations différentielles'
weight: 7
---
Cours du chapitre 7 : Primitives et équations différentielles.

{{< cards >}}
  {{< card link="./01_equation_differentielle_simple_primitive" title="Équation différentielle simple et primitive" icon="paper-clip">}}
  {{< card link="./02_primitives_operations" title="Primitives et opérations" icon="paper-clip">}}
  {{< card link="./03_equations_differentielles" title="Équations différentielles" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Primitive** - \(F\) est une primitive de \(f\) (continue) sur \(I\) si \({F' = f}\). Toute fonction continue sur un intervalle a des primitives ; elles diffèrent d’une constante, et une seule vérifie \({F(x_0) = y_0}\).

**Primitives usuelles** - \({x^n \to \dfrac{x^{n+1}}{n+1}}\) (\({n \neq -1}\)), \({\dfrac1x \to \ln x}\), \({\dfrac{1}{\sqrt x} \to 2\sqrt x}\), \({e^x \to e^x}\), \({\sin \to -\cos}\), \({\cos \to \sin}\). Formes composées : \({u'u^n \to \dfrac{u^{n+1}}{n+1}}\), \({u'e^u \to e^u}\), \({\dfrac{u'}{u} \to \ln|u|}\), \({\dfrac{u'}{\sqrt u} \to 2\sqrt u}\), \({(v' \circ u)u' \to v \circ u}\).

**Équations différentielles** - \({y' = ay}\) : \({x \mapsto Ce^{ax}}\). \({y' = ay + b}\) (\({a \neq 0}\)) : \({x \mapsto Ce^{ax} - \dfrac{b}{a}}\). \({y' = ay + f}\) : \({x \mapsto Ce^{ax} + y_0(x)}\), où \(y_0\) est une solution particulière. Une condition initiale \({y(x_0) = y_0}\) détermine une unique solution.
