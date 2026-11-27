---
title: 'Séries numériques'
weight: 1
---

Convergence d’une série, séries à termes positifs, convergence absolue et séries alternées.

{{< sommaire >}}

{{% fiche %}}
**Condition nécessaire** - si \(\sum u_n\) converge, alors \({u_n \to 0}\). Sinon : divergence grossière.

**Géométrique** - \(\sum q^n\) converge \(\iff\) \({|q| < 1}\), somme \(\dfrac{1}{1 - q}\). **Riemann** - \(\sum \dfrac{1}{n^\alpha}\) converge \(\iff\) \({\alpha > 1}\). **Télescopique** - \(\sum (a_{n+1} - a_n)\) converge \(\iff\) \((a_n)\) converge.

**Termes positifs** - converge \(\iff\) sommes partielles majorées. Comparaison : \({0 \leq u_n \leq v_n}\) ; \({u_n = O(v_n)}\) ; \({u_n \sim v_n}\) (même nature).

**Règle \(n^\alpha u_n\)** - si \({n^\alpha u_n \to 0}\) avec \({\alpha > 1}\) : convergence ; si \({nu_n \to +\infty}\) : divergence.

**D’Alembert** - \({\dfrac{u_{n+1}}{u_n} \to \ell}\) : converge si \({\ell < 1}\), diverge si \({\ell > 1}\), rien si \({\ell = 1}\).

**Comparaison série-intégrale** - \(f\) positive décroissante : \(\sum f(n)\) et \({\displaystyle\int_1^{+\infty} f}\) ont même nature.

**Convergence absolue** - \(\sum |u_n|\) converge \(\Rightarrow\) \(\sum u_n\) converge.

**Séries alternées** - \({u_n = (-1)^na_n}\), \((a_n)\) décroissante de limite \(0\) : converge, \({|R_n| \leq a_{n+1}}\), \(R_n\) du signe de son premier terme.
{{% /fiche %}}
