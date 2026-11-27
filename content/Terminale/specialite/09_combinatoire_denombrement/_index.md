---
title: 'Combinatoire & dénombrement'
weight: 9
---
Cours du chapitre 9 : Combinatoire et dénombrement.

{{< cards >}}
  {{< card link="./01_principe_additif_multiplicatif" title="Principe additif et multiplicatif" icon="paper-clip">}}
  {{< card link="./02_k_uplets_ensemble_fini" title="k-uplets d'un ensemble fini" icon="paper-clip">}}
  {{< card link="./03_parties_ensemble_combinaisons" title="Parties d'un ensemble et combinaisons" icon="paper-clip">}}
  {{< card link="./04_proprietes_combinaisons" title="Propriétés des combinaisons" icon="paper-clip">}}
  {{< card link="./05_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Principes** - additif : pour des ensembles deux à deux disjoints, \({\mathrm{card}(E_1 \cup \dots \cup E_p) = \sum \mathrm{card}(E_i)}\) ; multiplicatif : \({\mathrm{card}(E_1 \times \dots \times E_p) = \prod \mathrm{card}(E_i)}\).

**Choisir \(k\) éléments parmi \(n\)** :

| Situation | Objet | Nombre |
|---|---|---|
| ordre important, répétitions possibles | \(k\)-uplet | \(n^k\) |
| ordre important, sans répétition | arrangement | \({\dfrac{n!}{(n-k)!}}\) |
| tous les éléments, ordre important | permutation | \(n!\) |
| ordre sans importance, sans répétition | combinaison | \({\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}}\) |

**Propriétés** - \({\binom{n}{k} = \binom{n}{n-k}}\) ; Pascal : \({\binom{n-1}{k-1} + \binom{n-1}{k} = \binom{n}{k}}\) ; un ensemble à \(n\) éléments a \({2^n = \sum_{k=0}^n \binom{n}{k}}\) parties.
