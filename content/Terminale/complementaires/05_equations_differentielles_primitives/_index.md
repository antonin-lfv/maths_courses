---
title: 'Équations différentielles & primitives'
weight: 5
---
Cours du chapitre 5 : Équations différentielles et primitives.

{{< cards >}}
  {{< card link="./01_equations_differentielles" title="Équations différentielles" icon="paper-clip">}}
  {{< card link="./02_primitives_fonction_continue" title="Primitives d'une fonction continue" icon="paper-clip">}}
  {{< card link="./03_equations_differentielles_ordre_1" title="Équation différentielles d'ordre 1" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Équation différentielle** — équation dont l’inconnue est une fonction ; la résoudre sur \(I\), c’est trouver toutes les fonctions dérivables qui la vérifient.

**Primitives** — \(F\) primitive de \(f\) sur \(I\) si \(F' = f\). Toute fonction continue a des primitives ; elles diffèrent d’une constante ; une seule vérifie \(F(x_0) = y_0\).

**Primitives usuelles** — \(x^n \to \frac{x^{n+1}}{n + 1}\) (\(n \neq -1\)), \(\frac{1}{x} \to \ln x\), \(\frac{1}{\sqrt{x}} \to 2\sqrt{x}\), \(e^x \to e^x\).

**Formes composées** — \(u'u^n \to \frac{u^{n+1}}{n + 1}\), \(\frac{u'}{u^2} \to -\frac{1}{u}\), \(\frac{u'}{2\sqrt{u}} \to \sqrt{u}\), \(\frac{u'}{u} \to \ln u\) (\(u > 0\)), \(u'e^u \to e^u\).

**\(y' = ay\)** — solutions \(x \mapsto Ce^{ax}\) ; avec \(y(x_0) = k\) : \(x \mapsto ke^{a(x - x_0)}\).

**\(y' = ay + b\)** (\(a \neq 0\)) — solutions \(x \mapsto Ce^{ax} - \frac{b}{a}\) ; une unique solution vérifie une condition initiale donnée.
