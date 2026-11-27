---
title: 'Réduction des endomorphismes : diagonalisation'
weight: 1
---

Valeurs propres, vecteurs propres, polynôme caractéristique et critères de diagonalisabilité.

{{< sommaire >}}

{{% fiche %}}
**Élément propre** - \({f(x) = \lambda x}\) avec \({x \neq 0}\) ; \({E_\lambda = \ker(f - \lambda\,\mathrm{id})}\). Les sous-espaces propres sont en somme directe.

**Polynôme caractéristique** - \({\chi_A(X) = \det(XI_n - A)}\), unitaire de degré \(n\) ; ses racines sont les valeurs propres. \({\chi_A = X^n - \operatorname{tr}(A)X^{n-1} + \dots + (-1)^n\det A}\).

**Multiplicités** - \({1 \leq \dim E_\lambda \leq m(\lambda)}\).

**Critère** - \(A\) diagonalisable \(\iff\) \(\chi_A\) scindé et \({\dim E_\lambda = m(\lambda)}\) pour toute valeur propre \(\iff\) \({\sum \dim E_\lambda = n}\).

**Condition suffisante** - \(n\) valeurs propres distinctes.

**Si \(\chi_A\) est scindé** - \({\operatorname{tr} A = \sum \lambda_i}\) et \({\det A = \prod \lambda_i}\) (avec multiplicités).

**Pratique** - \({A = PDP^{-1}}\), colonnes de \(P\) = base de vecteurs propres ; \({A^k = PD^kP^{-1}}\).

**Applications** - puissances, suites récurrentes \({X_{n+1} = AX_n}\), systèmes différentiels \({X' = AX}\).
{{% /fiche %}}
