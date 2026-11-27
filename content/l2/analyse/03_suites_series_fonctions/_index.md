---
title: 'Suites et séries de fonctions'
weight: 3
---

Convergence simple, uniforme, normale, et théorèmes d’échange de limites.

{{< sommaire >}}

{{% fiche %}}
**Simple** - pour chaque \(x\), \({f_n(x) \to f(x)}\). **Uniforme** - \({\|f_n - f\|_\infty = \sup_{x \in I} |f_n(x) - f(x)| \to 0}\). Uniforme \(\Rightarrow\) simple.

**Montrer la CVU** - majorer \({|f_n(x) - f(x)| \leq \alpha_n}\) indépendamment de \(x\), avec \({\alpha_n \to 0}\) ; ou étudier les variations de \({f_n - f}\).

**Réfuter la CVU** - trouver \((x_n)\) telle que \({f_n(x_n) - f(x_n)}\) ne tend pas vers \(0\) ; ou limite simple discontinue alors que les \(f_n\) sont continues.

**Continuité** - limite uniforme de fonctions continues : continue.

**Intégration sur un segment** - CVU sur \([a, b]\) : \({\displaystyle\int_a^b f_n \to \int_a^b f}\).

**Dérivation** - \(f_n\) de classe \(\mathcal{C}^1\), \((f_n)\) CVS, \((f_n')\) CVU : \(f\) est \(\mathcal{C}^1\) et \({f' = \lim f_n'}\).

**Séries** - convergence **normale** : \(\sum \|u_n\|_\infty\) converge. Normale \(\Rightarrow\) uniforme \(\Rightarrow\) simple, et normale \(\Rightarrow\) absolue en tout point.

**Échanges pour les séries** - continuité de la somme, intégration terme à terme sur un segment, dérivation terme à terme (CVU de \(\sum u_n'\)), double limite.
{{% /fiche %}}
