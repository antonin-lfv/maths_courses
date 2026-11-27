---
title: 'Suites numériques et récurrence'
weight: 1
---

Vous trouverez ici les cours du chapitre 1 : Suites numériques et récurrence.

{{< sommaire >}}

{{% fiche %}}
**Raisonnement par récurrence** - pour prouver \(P(n)\) pour tout \({n \geq n_0}\) :
- **Initialisation.** vérifier \(P(n_0)\) ;
- **Hérédité.** pour \({k \geq n_0}\) quelconque, supposer \(P(k)\) (hypothèse de récurrence) et en déduire \({P(k+1)}\) ;
- **Conclusion.** \(P(n)\) est vraie pour tout \({n \geq n_0}\).

**Sens de variation** - \((u_n)\) est croissante si \({u_{n+1} \geq u_n}\) pour tout \(n\), décroissante si \({u_{n+1} \leq u_n}\). Outils : signe de \({u_{n+1} - u_n}\) ; comparaison de \({\dfrac{u_{n+1}}{u_n}}\) à 1 (termes strictement positifs) ; variations de \(f\) si \({u_n = f(n)}\) ; récurrence si \({u_{n+1} = f(u_n)}\).

**Suites majorées, minorées, bornées** - majorée : \({u_n \leq M}\) pour tout \(n\) ; minorée : \({u_n \geq m}\) pour tout \(n\) ; bornée : les deux. Une suite croissante est minorée par \(u_0\), une suite décroissante est majorée par \(u_0\).
{{% /fiche %}}
