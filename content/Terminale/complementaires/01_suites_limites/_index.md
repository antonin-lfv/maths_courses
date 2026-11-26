---
title: 'Suites et limites'
weight: 1
---
Cours du chapitre 1 : Suites et limites.

{{< cards >}}
  {{< card link="./01_notion_intuitive_limite_suite" title="Notion intuitive de la limite d'une suite" icon="paper-clip">}}
  {{< card link="./02_limites_operations" title="Limites et opérations" icon="paper-clip">}}
  {{< card link="./03_limites_comparaisons" title="Limites et comparaisons" icon="paper-clip">}}
  {{< card link="./04_suites_arithmetiques_geometriques" title="Suites arithmétiques et géométriques" icon="paper-clip">}}
  {{< card link="./05_suites_arithmetico_geometriques" title="Suites arithmético-géométriques" icon="paper-clip">}}
  {{< card link="./06_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Limites de référence** — \(\frac{1}{n}\), \(\frac{1}{n^k}\), \(\frac{1}{\sqrt{n}}\) tendent vers 0 ; \(n\), \(n^k\), \(\sqrt{n}\) tendent vers \(+\infty\). Une suite peut n’avoir aucune limite (\((-1)^n\)).

**Opérations** — tableaux de la somme, du produit et du quotient ; formes indéterminées : \(\infty - \infty\), \(0 \times \infty\), \(\frac{\infty}{\infty}\), \(\frac{0}{0}\) (on factorise par le terme dominant).

**Comparaison** — si \(u_n \leq v_n\) et \(u_n \to +\infty\), alors \(v_n \to +\infty\) ; si \(v_n \to -\infty\), alors \(u_n \to -\infty\). Les inégalités larges passent à la limite. Gendarmes : \(u_n \leq v_n \leq w_n\), \(u_n \to \ell\), \(w_n \to \ell\) \(\Rightarrow\) \(v_n \to \ell\).

**Suites de référence** — arithmétique : limite \(\pm\infty\) selon le signe de \(r\) ; \(q^n \to 0\) si \(0 \leq q < 1\), \(\to +\infty\) si \(q > 1\) ; si \(0 < q < 1\), \(u_0 + \dots + u_n \to \frac{u_0}{1 - q}\).

**Arithmético-géométrique** \(u_{n+1} = au_n + b\) (\(a \neq 1\)) — \(\ell = a\ell + b\), \(v_n = u_n - \ell\) est géométrique de raison \(a\), \(u_n = \ell + (u_0 - \ell)a^n\).
