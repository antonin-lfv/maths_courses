---
title: 'Combinatoire & dénombrement'
weight: 9
---
Cours du chapitre 9 : Combinatoire et dénombrement.

{{< sommaire >}}

{{% fiche %}}
**Principes** - additif : pour des ensembles deux à deux disjoints, \({\mathrm{card}(E_1 \cup \dots \cup E_p) = \sum \mathrm{card}(E_i)}\) ; multiplicatif : \({\mathrm{card}(E_1 \times \dots \times E_p) = \prod \mathrm{card}(E_i)}\).

**Choisir \(k\) éléments parmi \(n\)** :

| Situation | Objet | Nombre |
|---|---|---|
| ordre important, répétitions possibles | \(k\)-uplet | \(n^k\) |
| ordre important, sans répétition | arrangement | \({\dfrac{n!}{(n-k)!}}\) |
| tous les éléments, ordre important | permutation | \(n!\) |
| ordre sans importance, sans répétition | combinaison | \({\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}}\) |

**Propriétés** - \({\binom{n}{k} = \binom{n}{n-k}}\) ; Pascal : \({\binom{n-1}{k-1} + \binom{n-1}{k} = \binom{n}{k}}\) ; un ensemble à \(n\) éléments a \({2^n = \sum_{k=0}^n \binom{n}{k}}\) parties.
{{% /fiche %}}
