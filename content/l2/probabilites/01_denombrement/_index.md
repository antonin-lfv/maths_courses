---
title: 'Dénombrement'
weight: 1
---

Compter des listes, des arrangements, des permutations et des combinaisons.

{{< sommaire >}}

{{% fiche %}}
**Principes** - additif : \({|A \cup B| = |A| + |B|}\) si \(A\), \(B\) disjoints ; multiplicatif : \(n_1\) choix puis \(n_2\) choix donnent \({n_1n_2}\) résultats.

**Crible** - \({|A \cup B| = |A| + |B| - |A \cap B|}\) ; \({|A \cup B \cup C| = \sum |A| - \sum |A \cap B| + |A \cap B \cap C|}\).

| Tirage de \(p\) éléments parmi \(n\) | Avec ordre | Sans ordre |
|---|---|---|
| Sans répétition | \({A_n^p = \dfrac{n!}{(n-p)!}}\) | \({\dbinom{n}{p} = \dfrac{n!}{p!(n-p)!}}\) |
| Avec répétition | \(n^p\) | \(\dbinom{n+p-1}{p}\) |

**Permutations** - \(n!\) façons d’ordonner \(n\) objets distincts. **Anagrammes** - \({\dfrac{n!}{n_1!\,n_2! \cdots n_k!}}\) avec des lettres répétées.

**Binomiaux** - symétrie, Pascal, \({\sum_k \dbinom{n}{k} = 2^n}\), Vandermonde : \({\sum_k \dbinom{m}{k}\dbinom{n}{p-k} = \dbinom{m+n}{p}}\).

**Complémentaire** - « au moins un » : compter le contraire, « aucun ».
{{% /fiche %}}
