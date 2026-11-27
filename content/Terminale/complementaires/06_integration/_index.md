---
title: 'Intégration'
weight: 6
---
Cours du chapitre 6 : Intégration.

{{< cards >}}
  {{< card link="./01_integrale_continue_positive_intervalle" title="Intégrale d'une fonction continue et positive sur un intervalle" icon="paper-clip">}}
  {{< card link="./02_integrale_fonction_continue" title="Intégrale d'une fonction continue" icon="paper-clip">}}
  {{< card link="./03_applications" title="Applications" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Fonction positive** - \(\int_a^b f(x)\,\mathrm{d}x\) est l’aire (en u.a.) sous la courbe entre \({x = a}\) et \({x = b}\) ; valeur approchée par la méthode des rectangles.

**Théorème fondamental** - \({x \mapsto \int_a^x f(t)\,\mathrm{d}t}\) est la primitive de \(f\) qui s’annule en \(a\) ; pour toute primitive \(F\) : \({\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a) = \big[F(x)\big]_a^b}\).

**Signe quelconque** - même définition ; l’intégrale peut être négative ; relation de Chasles : \({\int_a^b f = \int_a^c f + \int_c^b f}\).

**Valeur moyenne** - \({\mu = \dfrac{1}{b - a}\int_a^b f(x)\,\mathrm{d}x}\).

**Aires** - si \({f \leq 0}\) : aire \({= -\int_a^b f(x)\,\mathrm{d}x}\) ; entre deux courbes avec \({f \leq g}\) : aire \({= \int_a^b (g(x) - f(x))\,\mathrm{d}x}\).
