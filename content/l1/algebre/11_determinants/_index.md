---
title: 'Déterminants'
weight: 11
---

Définition, règles de calcul, développement selon une ligne ou une colonne, lien avec l’inversibilité.

{{< sommaire >}}

{{% fiche %}}
**Taille 2** - \({\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc}\). **Taille 3** - règle de Sarrus ou développement.

**Opérations** - \({C_i \leftrightarrow C_j}\) : change le signe ; \({C_i \leftarrow \lambda C_i}\) : multiplie par \(\lambda\) ; \({C_i \leftarrow C_i + \lambda C_j}\) : ne change rien. Idem sur les lignes. \({\det(\lambda A) = \lambda^n \det A}\).

**Triangulaire** - produit des coefficients diagonaux.

**Produit** - \({\det(AB) = \det A \det B}\) ; \({\det(A^T) = \det A}\) ; \({\det(A^{-1}) = \dfrac{1}{\det A}}\).

**Inversibilité** - \(A\) inversible \(\iff\) \({\det A \neq 0}\) ; une famille de \(n\) vecteurs en dimension \(n\) est une base \(\iff\) son déterminant est non nul.

**Développement** - selon la colonne \(j\) : \({\det A = \displaystyle\sum_{i=1}^{n} (-1)^{i+j} a_{ij}\Delta_{ij}}\).

**Attention** - \({\det(A + B) \neq \det A + \det B}\) en général.
{{% /fiche %}}
