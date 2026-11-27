---
title: 'Limites et continuité'
weight: 3
---

Limite d’une fonction, continuité, théorème des valeurs intermédiaires, théorème des bornes atteintes et théorème de la bijection.

{{< sommaire >}}

{{% fiche %}}
**Limite** - \({f(x) \to \ell}\) en \(a\) : \({\forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in I,\ |x - a| \leq \eta \Rightarrow |f(x) - \ell| \leq \varepsilon}\).

**Caractérisation séquentielle** - \({f(x) \to \ell}\) en \(a\) \(\iff\) pour toute suite \({x_n \to a}\), \({f(x_n) \to \ell}\). Pour montrer qu’une limite n’existe pas : deux suites qui donnent deux limites différentes.

**Continuité** - \(f\) continue en \(a\) \(\iff\) \({\lim_{x \to a} f(x) = f(a)}\). Sommes, produits, quotients, composées de fonctions continues sont continus.

**Valeurs intermédiaires** - \(f\) continue sur un intervalle : l’image est un intervalle. Si \({f(a)f(b) \leq 0}\), \(f\) s’annule sur \([a, b]\).

**Bornes atteintes** - \(f\) continue sur un segment \([a, b]\) : bornée, atteint son minimum et son maximum ; \({f([a, b]) = [m, M]}\).

**Bijection** - \(f\) continue et strictement monotone sur un intervalle \(I\) : bijection de \(I\) sur l’intervalle \(f(I)\), réciproque continue, de même monotonie.

**Prolongement par continuité** - si \(f\) a une limite finie \(\ell\) en \({a \notin I}\), on pose \({f(a) = \ell}\).
{{% /fiche %}}
