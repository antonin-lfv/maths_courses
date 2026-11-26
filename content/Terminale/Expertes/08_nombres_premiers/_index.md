---
title: 'Nombres premiers'
weight: 8
---
Cours du chapitre 8 : Nombres premiers.

{{< cards >}}
  {{< card link="./01_nombres_premiers" title="Nombres premiers" icon="paper-clip">}}
  {{< card link="./02_deux_theoremes_fondamentaux" title="Deux théorèmes fondamentaux" icon="paper-clip">}}
  {{< card link="./03_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Nombre premier** — entier naturel ayant exactement deux diviseurs positifs, 1 et lui-même. 2 est le seul premier pair. Il y a une infinité de nombres premiers.

**Plus petit diviseur premier** — tout \(n \geq 2\) a un diviseur premier ; si \(n\) n’est pas premier, son plus petit diviseur premier est \(\leq \sqrt{n}\). Test : \(n\) est premier s’il n’est divisible par aucun premier \(p \leq \sqrt{n}\).

**Lemme d’Euclide** — si \(p\) premier divise \(ab\), alors \(p \mid a\) ou \(p \mid b\).

**Décomposition** — tout \(n \geq 2\) s’écrit de façon unique \(p_1^{\alpha_1}\cdots p_k^{\alpha_k}\) ; il a \((\alpha_1 + 1)\cdots(\alpha_k + 1)\) diviseurs positifs, les \(p_1^{\beta_1}\cdots p_k^{\beta_k}\) avec \(0 \leq \beta_i \leq \alpha_i\).

**Fermat** — \(p\) premier, \(p \nmid a\) : \(a^{p-1} \equiv 1 \ [p]\) ; pour tout \(a\) : \(a^p \equiv a \ [p]\).
