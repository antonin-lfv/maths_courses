---
title: 'Systèmes linéaires et matrices'
weight: 6
---

La méthode du pivot de Gauss, puis le calcul matriciel : produit, inverse, transposée.

{{< sommaire >}}

{{% fiche %}}
**Opérations élémentaires** - \({L_i \leftrightarrow L_j}\), \({L_i \leftarrow \lambda L_i}\) (\({\lambda \neq 0}\)), \({L_i \leftarrow L_i + \lambda L_j}\) : elles ne changent pas l’ensemble des solutions.

**Système échelonné** - le nombre de pivots est le rang \(r\). Solutions : aucune (équation \({0 = b}\) avec \({b \neq 0}\)), une seule (\({r = p}\) inconnues), ou une infinité (\({p - r}\) paramètres).

**Structure** - solutions de \({AX = B}\) : une solution particulière plus les solutions du système homogène \({AX = 0}\).

**Produit** - \({(AB)_{ij} = \displaystyle\sum_k a_{ik}b_{kj}}\) ; associatif, non commutatif, non intègre.

**Transposée** - \({(AB)^T = B^T A^T}\). **Inverse** - \({(AB)^{-1} = B^{-1}A^{-1}}\), \({(A^T)^{-1} = (A^{-1})^T}\).

**Matrice \(2 \times 2\)** - \({A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}}\) inversible \(\iff\) \({ad - bc \neq 0}\), et \({A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}}\).

**Calcul de l’inverse** - résoudre \({AX = Y}\), ou pivot de Gauss sur \({(A \mid I_n)}\).

**Binôme** - si \({AB = BA}\) : \({(A + B)^n = \displaystyle\sum_{k=0}^{n} \dbinom{n}{k}A^k B^{n-k}}\).
{{% /fiche %}}
