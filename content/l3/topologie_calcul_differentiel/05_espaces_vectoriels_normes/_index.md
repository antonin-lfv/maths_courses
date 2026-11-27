---
title: 'Espaces vectoriels normés et applications linéaires continues'
weight: 5
---

Applications linéaires continues, norme subordonnée, dimension finie et espaces de Banach.

{{< sommaire >}}

{{% fiche %}}
**Linéaire continue** \(\iff\) continue en \(0\) \(\iff\) bornée sur la boule unité \(\iff\) \({\exists C,\ \|u(x)\| \leq C\|x\|}\) \(\iff\) lipschitzienne.

**Norme subordonnée** - \({\|u\| = \sup_{x \neq 0} \dfrac{\|u(x)\|}{\|x\|} = \sup_{\|x\| = 1} \|u(x)\|}\) ; \({\|u(x)\| \leq \|u\|\|x\|}\) ; \({\|v \circ u\| \leq \|v\|\|u\|}\).

**Calcul de \(\|u\|\)** - majorer \({\|u(x)\| \leq C\|x\|}\), puis trouver \(x\) (ou une suite) réalisant l’égalité.

**Dimension finie** - toutes les normes équivalentes ; toute application linéaire de source de dimension finie est continue ; complet ; compacts = fermés bornés ; tout sous-espace de dimension finie est fermé.

**\(\mathcal{L}_c(E, F)\)** - complet si \(F\) l’est. **Dual topologique** \({E' = \mathcal{L}_c(E, \mathbb{K})}\) : toujours complet.

**Forme linéaire** - continue \(\iff\) son noyau est fermé.

**Série de Neumann** - \(E\) de Banach, \({\|u\| < 1}\) : \({\mathrm{id} - u}\) inversible, \({(\mathrm{id} - u)^{-1} = \sum u^n}\).

**Multilinéaire continue** - \({\|B(x, y)\| \leq C\|x\|\|y\|}\).
{{% /fiche %}}
