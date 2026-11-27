---
title: 'Endomorphismes des espaces euclidiens'
weight: 5
---

Adjoint, isométries et matrices orthogonales, endomorphismes symétriques et théorème spectral.

{{< sommaire >}}

{{% fiche %}}
**Adjoint** - \({\langle f(x), y\rangle = \langle x, f^*(y)\rangle}\) ; en base orthonormée, \({\operatorname{Mat}(f^*) = A^T}\).

**Isométrie** - conserve la norme \(\iff\) conserve le produit scalaire \(\iff\) envoie une base orthonormée sur une base orthonormée \(\iff\) \({f^* = f^{-1}}\).

**Matrice orthogonale** - \({A^TA = I_n}\) \(\iff\) colonnes orthonormées \(\iff\) \({A^{-1} = A^T}\) ; \({\det A = \pm 1}\). \(\mathrm{SO}_n\) : déterminant \(1\).

**Dimension 2** - \(\mathrm{SO}_2\) : rotations \({\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}}\) ; déterminant \(-1\) : réflexions.

**Dimension 3** - \(\mathrm{SO}_3\) : rotation d’axe \({\ker(f - \mathrm{id})}\), angle donné par \({\operatorname{tr} = 1 + 2\cos\theta}\).

**Théorème spectral** - toute matrice symétrique réelle est diagonalisable dans une base orthonormée : \({A = PDP^T}\) avec \(P\) orthogonale ; les sous-espaces propres sont deux à deux orthogonaux.

**Positivité** - \(A\) symétrique positive \(\iff\) valeurs propres \(\geq 0\) ; définie positive \(\iff\) valeurs propres \(> 0\).
{{% /fiche %}}
