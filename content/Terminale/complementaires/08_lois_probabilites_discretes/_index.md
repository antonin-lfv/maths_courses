---
title: 'Lois de probabilités discrètes'
weight: 8
---
Cours du chapitre 8 : Lois de probabilités discrètes.

{{< sommaire >}}

{{% fiche %}}
**Conditionnement** - \({P_B(A) = \dfrac{P(A \cap B)}{P(B)}}\) ; Bayes : \({P_B(A) = \dfrac{P_A(B)P(A)}{P(B)}}\) ; \(A\), \(B\) indépendants \(\iff P(A \cap B) = P(A)P(B) \iff P_B(A) = P(A)\). Probabilités totales : \({P(B) = \sum P(A_i)P_{A_i}(B)}\) pour une partition \((A_i)\).

**Loi uniforme** sur \(\{1, \dots, n\}\) - \({P(X = k) = \dfrac{1}{n}}\), \({E(X) = \dfrac{n + 1}{2}}\).

**Bernoulli** - épreuve à deux issues (succès de probabilité \(p\)) ; schéma de Bernoulli : \(n\) répétitions indépendantes.

**Coefficients binomiaux** - \(\binom{n}{k}\) = nombre de chemins à \(k\) succès ; \({\binom{n}{0} = \binom{n}{n} = 1}\), \({\binom{n}{k} = \binom{n}{n - k}}\), \({\binom{n}{k - 1} + \binom{n}{k} = \binom{n + 1}{k}}\) (triangle de Pascal).

**Loi binomiale** \(\mathcal{B}(n\,;\,p)\) - nombre de succès ; \({P(X = k) = \binom{n}{k}p^k(1 - p)^{n - k}}\) ; \({E = np}\), \({V = np(1 - p)}\).

**Loi géométrique** \(\mathcal{G}(p)\) - rang du premier succès ; \({P(X = k) = p(1 - p)^{k - 1}}\), \({P(X > \ell) = (1 - p)^\ell}\) ; sans mémoire ; \({E = \dfrac{1}{p}}\), \({V = \dfrac{1 - p}{p^2}}\).
{{% /fiche %}}
