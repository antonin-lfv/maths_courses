---
title: 'Conditionnement et indépendance'
weight: 3
---

Probabilité conditionnelle, formules des probabilités composées, totales et de Bayes, indépendance.

{{< sommaire >}}

{{% fiche %}}
**Conditionnelle** - \({P_B(A) = P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}}\) ; \(P_B\) est une probabilité.

**Probabilités composées** - \({P(A_1 \cap \dots \cap A_n) = P(A_1)P_{A_1}(A_2) \cdots P_{A_1 \cap \dots \cap A_{n-1}}(A_n)}\).

**Probabilités totales** - \((A_i)\) système complet : \({P(B) = \displaystyle\sum_i P(A_i)P_{A_i}(B)}\).

**Bayes** - \({P_B(A_j) = \dfrac{P(A_j)P_{A_j}(B)}{\sum_i P(A_i)P_{A_i}(B)}}\).

**Indépendance** - \({P(A \cap B) = P(A)P(B)}\). **Mutuelle** - \({P\left(\bigcap_{i \in J} A_i\right) = \prod_{i \in J} P(A_i)}\) pour toute sous-famille finie \(J\).

**Pièges** - indépendants \(\neq\) incompatibles ; deux à deux indépendants \(\not\Rightarrow\) mutuellement indépendants ; \({P_B(A) \neq P_A(B)}\).

**Au moins un succès en \(n\) essais indépendants** - \({1 - (1 - p)^n}\).
{{% /fiche %}}
