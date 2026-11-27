---
title: 'Polynômes d’endomorphismes et trigonalisation'
weight: 2
---

Polynômes annulateurs, polynôme minimal, théorème de Cayley-Hamilton, lemme des noyaux et trigonalisation.

{{< sommaire >}}

{{% fiche %}}
**Polynôme annulateur** - \({P(f) = 0}\). Toute valeur propre de \(f\) est racine de tout polynôme annulateur.

**Polynôme minimal** - \(\pi_f\) : unitaire, annulateur, de degré minimal ; il divise tous les polynômes annulateurs. Ses racines sont exactement les valeurs propres.

**Cayley-Hamilton** - \({\chi_f(f) = 0}\), donc \(\pi_f\) divise \(\chi_f\).

**Lemme des noyaux** - \(P_1, \dots, P_r\) deux à deux premiers entre eux : \({\ker (P_1 \cdots P_r)(f) = \ker P_1(f) \oplus \dots \oplus \ker P_r(f)}\).

**Diagonalisable** \(\iff\) il existe un polynôme annulateur scindé à racines simples \(\iff\) \(\pi_f\) est scindé à racines simples.

**Trigonalisable** \(\iff\) \(\chi_f\) est scindé. Sur \(\mathbb{C}\), toujours.

**Cas usuels** - \({p^2 = p}\) (projecteur), \({s^2 = \mathrm{id}}\) (symétrie) : diagonalisables. \({f^k = 0}\) (nilpotent) : seule valeur propre \(0\), diagonalisable seulement si \({f = 0}\).

**Sous-espaces caractéristiques** - \({F_\lambda = \ker(f - \lambda\,\mathrm{id})^{m(\lambda)}}\), de dimension \(m(\lambda)\) ; \({E = \bigoplus F_\lambda}\) si \(\chi_f\) est scindé.
{{% /fiche %}}
