---
title: 'Formes bilinéaires et formes quadratiques'
weight: 3
---

Formes bilinéaires symétriques, formes quadratiques, réduction de Gauss et signature.

{{< sommaire >}}

{{% fiche %}}
**Matrice** - \({\varphi(x, y) = X^TAY}\) avec \({a_{ij} = \varphi(e_i, e_j)}\). Changement de base : \({A' = P^TAP}\) (matrices **congruentes**).

**Forme quadratique** - \({q(x) = \varphi(x, x)}\) ; polarisation : \({\varphi(x, y) = \dfrac{1}{2}\big(q(x + y) - q(x) - q(y)\big)}\).

**Lecture de la matrice** - coefficient de \(x_i^2\) sur la diagonale ; coefficient de \(x_ix_j\) **divisé par 2** hors diagonale.

**Réduction de Gauss** - écrire \(q\) comme combinaison de carrés de formes linéaires **indépendantes** : compléter le carré s’il y a un terme \(x_i^2\) ; sinon utiliser \({ab = \dfrac{1}{4}\big((a + b)^2 - (a - b)^2\big)}\).

**Signature** - \((p, m)\) : nombres de carrés à coefficient \(> 0\) et \(< 0\), indépendants de la décomposition (loi d’inertie de Sylvester). Rang \({= p + m}\).

**Positivité** - \(q\) positive \(\iff\) \({m = 0}\) ; définie positive \(\iff\) signature \((n, 0)\).

**Cauchy-Schwarz** - si \(q\) est positive : \({\varphi(x, y)^2 \leq q(x)q(y)}\).
{{% /fiche %}}
