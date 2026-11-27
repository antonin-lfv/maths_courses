---
title: 'Suites réelles'
weight: 2
---

Limite d’une suite, théorèmes de convergence, suites extraites, suites récurrentes et comparaison de suites.

{{< sommaire >}}

{{% fiche %}}
**Convergence** - \({u_n \to \ell}\) : \({\forall \varepsilon > 0,\ \exists N,\ \forall n \geq N,\ |u_n - \ell| \leq \varepsilon}\). La limite est unique ; toute suite convergente est bornée.

**Encadrement** - si \({v_n \leq u_n \leq w_n}\) et \({v_n, w_n \to \ell}\), alors \({u_n \to \ell}\). Bornée \(\times\) tend vers \(0\) : tend vers \(0\).

**Limite monotone** - croissante majorée : converge vers \(\sup u_n\) ; croissante non majorée : tend vers \(+\infty\).

**Suites adjacentes** - \((u_n)\) croissante, \((v_n)\) décroissante, \({v_n - u_n \to 0}\) : même limite \(\ell\), et \({u_n \leq \ell \leq v_n}\).

**Suites extraites** - si \({u_n \to \ell}\), toute suite extraite tend vers \(\ell\). Si \({u_{2n} \to \ell}\) et \({u_{2n+1} \to \ell}\), alors \({u_n \to \ell}\). Deux suites extraites de limites différentes : divergence.

**Bolzano-Weierstrass** - toute suite bornée a une suite extraite convergente.

**Récurrence \({u_{n+1} = f(u_n)}\)** - intervalle stable ; si \(f\) est continue et \({u_n \to \ell}\), alors \({f(\ell) = \ell}\) ; \(f\) croissante : \((u_n)\) monotone.

**Comparaison** - \({u_n \sim v_n}\) \(\iff\) \({\dfrac{u_n}{v_n} \to 1}\). Croissances comparées : \({(\ln n)^\beta \ll n^\alpha \ll a^n \ll n! \ll n^n}\) (\({\alpha, \beta > 0}\), \({a > 1}\)).
{{% /fiche %}}
