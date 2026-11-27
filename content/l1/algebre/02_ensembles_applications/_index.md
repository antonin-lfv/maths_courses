---
title: 'Ensembles et applications'
weight: 2
---

Le langage des ensembles, les applications (injection, surjection, bijection) et les relations d’équivalence et d’ordre.

{{< sommaire >}}

{{% fiche %}}
**Opérations** - \({A \cup B}\), \({A \cap B}\), \({A \setminus B}\), complémentaire \(\overline{A}\) ; lois de De Morgan : \({\overline{A \cup B} = \overline{A} \cap \overline{B}}\) et \({\overline{A \cap B} = \overline{A} \cup \overline{B}}\).

**Double inclusion** - pour montrer \({A = B}\), on montre \({A \subset B}\) et \({B \subset A}\).

**Injection** - \({f(x) = f(x') \Rightarrow x = x'}\) : tout élément de l’arrivée a au plus un antécédent.

**Surjection** - \({\forall y \in F,\ \exists x \in E,\ y = f(x)}\) : tout élément de l’arrivée a au moins un antécédent.

**Bijection** - injective et surjective : tout \(y\) a exactement un antécédent, \(f^{-1}(y)\). Équivaut à l’existence de \(g\) telle que \({g \circ f = \mathrm{id}_E}\) et \({f \circ g = \mathrm{id}_F}\).

**Image directe, image réciproque** - \({f(A) = \{f(x),\ x \in A\}}\) ; \({f^{-1}(B) = \{x \in E,\ f(x) \in B\}}\) (définie même si \(f\) n’est pas bijective).

**Relation d’équivalence** - réflexive, symétrique, transitive ; les classes d’équivalence forment une partition. **Relation d’ordre** - réflexive, antisymétrique, transitive.

**Dénombrement** - \({\operatorname{card}(E \times F) = \operatorname{card}(E)\operatorname{card}(F)}\) ; \({\operatorname{card}\mathcal{P}(E) = 2^n}\) ; \({\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}}\) parties à \(k\) éléments ; binôme : \({(a+b)^n = \displaystyle\sum_{k=0}^{n} \dbinom{n}{k} a^k b^{n-k}}\).
{{% /fiche %}}
