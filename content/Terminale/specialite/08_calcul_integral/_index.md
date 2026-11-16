---
title: 'Calcul intégral'
weight: 8
---
Cours du chapitre 8 : Calcul intégral.

{{< cards >}}
  {{< card link="./01_integrale_fonction_continue_positive" title="Intégrale d'une fonction continue et positive" icon="paper-clip">}}
  {{< card link="./02_integrales_fonction_continue" title="Intégrales d'une fonction continue" icon="paper-clip">}}
  {{< card link="./03_application" title="Calculs d'intégrales et applications" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Définition** — pour \(f\) continue et positive sur \([a ; b]\), \(\int_a^b f(x)\,\mathrm{d}x\) est l’aire (en u.a.) sous la courbe. Pour \(f\) continue quelconque et \(F\) une primitive : \(\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a) = [F(x)]_a^b\). \(x \mapsto \int_a^x f(t)\,\mathrm{d}t\) est la primitive de \(f\) qui s’annule en \(a\).

**Propriétés** — Chasles : \(\int_a^b f = \int_a^c f + \int_c^b f\) ; \(\int_b^a f = -\int_a^b f\) ; linéarité ; pour \(a \leq b\) : positivité (\(f \geq 0 \Rightarrow \int_a^b f \geq 0\)) et intégration des inégalités (\(f \leq g \Rightarrow \int_a^b f \leq \int_a^b g\)).

**Valeur moyenne** — \(m = \frac{1}{b - a}\int_a^b f(x)\,\mathrm{d}x\).

**Intégration par parties** — \(\int_a^b uv' = [uv]_a^b - \int_a^b u'v\) (\(u'\), \(v'\) continues).

**Aires** — \(f \geq 0\) : aire \(= \int_a^b f\) ; \(f \leq 0\) : aire \(= -\int_a^b f\) ; entre deux courbes avec \(g \leq f\) : aire \(= \int_a^b (f - g)\).
