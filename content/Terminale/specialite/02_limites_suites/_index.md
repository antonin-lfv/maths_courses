---
title: 'Limites de suites'
weight: 2
---

Vous trouverez ici les cours du chapitre 2 : Limites de suites.

{{< cards >}}
  {{< card link="./01_definition_limites" title="Définition des limites" icon="paper-clip">}}
  {{< card link="./02_limites_operations" title="Limites et opérations" icon="paper-clip">}}
  {{< card link="./03_limites_comparaison" title="Limites et comparaison" icon="paper-clip">}}
  {{< card link="./04_suites_geometriques_monotones" title="Suites géométriques, suites monotones" icon="paper-clip">}}
  {{< card link="./05_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Définitions** — \(\lim u_n = \ell\) : pour tout \(r > 0\), on a \(|u_n - \ell| < r\) à partir d’un certain rang (suite convergente, limite unique). \(\lim u_n = +\infty\) : pour tout réel \(A\), \(u_n \geq A\) à partir d’un certain rang. Une suite non convergente est divergente ; elle peut n’avoir aucune limite, comme \(((-1)^n)\).

**Suites de référence** — pour \(k \geq 1\) : \(\frac{1}{n^k} \to 0\), \(\frac{1}{\sqrt n} \to 0\), \(n^k \to +\infty\), \(\sqrt n \to +\infty\). Pour \((q^n)\) : pas de limite si \(q \leq -1\) ; limite 0 si \(-1 < q < 1\) ; limite 1 si \(q = 1\) ; limite \(+\infty\) si \(q > 1\).

**Opérations** — formes indéterminées : « \(+\infty - \infty\) », « \(0 \times \infty\) », « \(\frac{\infty}{\infty}\) », « \(\frac{0}{0}\) » ; on les lève souvent en factorisant par le terme dominant.

**Comparaison** — si \(u_n \leq v_n\) à partir d’un certain rang : \(u_n \to +\infty \Rightarrow v_n \to +\infty\) et \(v_n \to -\infty \Rightarrow u_n \to -\infty\). **Gendarmes** : si \(u_n \leq v_n \leq w_n\) avec \(u_n \to \ell\) et \(w_n \to \ell\), alors \(v_n \to \ell\). Le passage à la limite conserve les inégalités larges.

**Suites monotones** — croissante et majorée (ou décroissante et minorée) \(\Rightarrow\) convergente ; croissante et non majorée \(\Rightarrow\) limite \(+\infty\). **Point fixe** : si \(u_{n+1} = f(u_n)\), \(u_n \to \ell\) et \(f\) est continue en \(\ell\), alors \(f(\ell) = \ell\).
