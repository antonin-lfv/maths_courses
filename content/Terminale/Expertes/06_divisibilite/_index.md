---
title: 'Divisibilité'
weight: 6
---
Cours du chapitre 6 : Divisibilité.

{{< cards >}}
  {{< card link="./01_dans_Z" title="Dans Z" icon="paper-clip">}}
  {{< card link="./02_division_euclidienne" title="Division euclidienne" icon="paper-clip">}}
  {{< card link="./03_congruence_Z" title="Congruence dans Z" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Divisibilité** (\({b \neq 0}\)) - \({b \mid a \iff a = kb}\), \({k \in \mathbb{Z}}\). \({b \mid a \iff -b \mid a \iff b \mid -a}\). Un entier non nul \(n\) a un nombre fini de diviseurs, compris entre \({-|n|}\) et \(|n|\). Transitivité ; si \(a \mid b\) et \(a \mid c\), alors \({a \mid bu + cv}\).

**Division euclidienne** (\({a \in \mathbb{Z}}\), \({b \in \mathbb{N}^*}\)) - il existe un unique couple \((q, r)\) avec \({a = bq + r}\) et \({0 \leq r < b}\). \({b \mid a \iff r = 0}\). Tout entier s’écrit \(bq\), \({bq + 1}\), …, \({bq + (b - 1)}\) (disjonction des cas).

**Congruences** - \({a \equiv b \ [n] \iff n \mid a - b \iff}\) même reste dans la division par \(n\). Compatibles avec l’addition, la multiplication et les puissances ; **pas** avec la division.

**Méthodes** - table des restes pour résoudre une équation modulo \(n\) ; chercher une puissance congrue à 1 pour calculer le reste d’une grande puissance.
