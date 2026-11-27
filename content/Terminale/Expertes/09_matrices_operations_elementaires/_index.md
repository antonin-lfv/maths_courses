---
title: 'Matrices & opérations élémentaires'
weight: 9
---
Cours du chapitre 9 : Matrices et opérations élémentaires.

{{< cards >}}
  {{< card link="./01_introduction" title="Introduction" icon="paper-clip">}}
  {{< card link="./02_produit" title="Produit" icon="paper-clip">}}
  {{< card link="./03_matrice_inverse" title="Matrice inverse" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Vocabulaire** - matrice de format \({m \times n}\), terme \(a_{ij}\) ; matrice carrée d’ordre \(n\), ligne, colonne, nulle \(O\), diagonale, identité \(I\).

**Opérations** - addition (même format) et multiplication par un réel terme à terme.

**Produits** - \(AC\) (carrée × colonne), \(LA\) (ligne × carrée), \(AB\) : \({(AB)_{ij} = \sum_k a_{ik}b_{kj}}\). Associatif, distributif, **non commutatif** ; \({AB = O}\) n’implique pas \({A = O}\) ou \({B = O}\). \({AI = IA = A}\). \({A^0 = I}\), \({A^n = A \times \dots \times A}\).

**Inverse** - \(A\) inversible s’il existe \(B\) avec \({AB = I}\) (alors \({BA = I}\)) ; \({B = A^{-1}}\) est unique. Ordre 2 : \({A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}}\) inversible \({\iff ad - bc \neq 0}\), \({A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}}\).

**Systèmes** - \({(S) \iff AX = B}\) ; si \(A\) est inversible, \({X = A^{-1}B}\).
