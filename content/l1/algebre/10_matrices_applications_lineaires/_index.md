---
title: 'Matrices et applications linéaires'
weight: 10
---

Matrice d’une application linéaire dans des bases, changement de base, rang d’une matrice, matrices semblables.

{{< sommaire >}}

{{% fiche %}}
**Matrice de \(f\)** - la colonne \(j\) de \({\operatorname{Mat}_{\mathcal{B}, \mathcal{C}}(f)}\) contient les coordonnées de \(f(e_j)\) dans la base d’arrivée \(\mathcal{C}\).

**Calcul d’une image** - \({Y = AX}\). **Composée** - \({\operatorname{Mat}(g \circ f) = \operatorname{Mat}(g) \times \operatorname{Mat}(f)}\). **Réciproque** - \({\operatorname{Mat}(f^{-1}) = \operatorname{Mat}(f)^{-1}}\).

**Matrice de passage** - \(P\) de \(\mathcal{B}\) à \(\mathcal{B}'\) : colonnes = nouveaux vecteurs dans l’ancienne base. Coordonnées : \({X = PX'}\).

**Changement de base** - endomorphisme : \({A' = P^{-1}AP}\). Cas général : \({A' = Q^{-1}AP}\).

**Rang** - rang des colonnes = rang des lignes = rang de \(f\) = nombre de pivots ; \({\operatorname{rg}(A^T) = \operatorname{rg}(A)}\). \({A \in \mathcal{M}_n(\mathbb{K})}\) inversible \(\iff\) \({\operatorname{rg} A = n}\).

**Semblables** - \({B = P^{-1}AP}\) : même rang, même trace, même déterminant.

**Trace** - \({\operatorname{tr}(AB) = \operatorname{tr}(BA)}\).
{{% /fiche %}}
