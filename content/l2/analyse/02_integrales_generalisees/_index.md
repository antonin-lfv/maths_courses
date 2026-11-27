---
title: 'Intégrales généralisées'
weight: 2
---

Intégrales sur un intervalle quelconque : convergence, critères de comparaison, intégrabilité.

{{< sommaire >}}

{{% fiche %}}
**Définition** - \({\displaystyle\int_a^b f}\) converge si \({\displaystyle\int_a^x f}\) a une limite finie quand \({x \to b}\). Deux bornes impropres : couper en un point et étudier chaque morceau.

**Riemann en \(+\infty\)** - \({\displaystyle\int_1^{+\infty} \dfrac{\mathrm{d}t}{t^\alpha}}\) converge \(\iff\) \({\alpha > 1}\).

**Riemann en \(0\)** - \({\displaystyle\int_0^1 \dfrac{\mathrm{d}t}{t^\alpha}}\) converge \(\iff\) \({\alpha < 1}\).

**Autres références** - \({\displaystyle\int_0^{+\infty} e^{-at}\,\mathrm{d}t}\) converge \(\iff\) \({a > 0}\) ; \({\displaystyle\int_0^1 \ln t\,\mathrm{d}t}\) converge (vaut \(-1\)).

**Fonctions positives** - comparaison par \(\leq\), \(O\), \(o\), \(\sim\) au voisinage de la borne impropre.

**Intégrabilité** - \(f\) intégrable si \({\displaystyle\int |f|}\) converge ; alors \({\displaystyle\int f}\) converge. La réciproque est fausse : \({\displaystyle\int_1^{+\infty} \dfrac{\sin t}{t}\,\mathrm{d}t}\).

**Faux problème** - si \(f\) a une limite finie en une borne finie, l’intégrale converge en cette borne.

**Outils** - intégration par parties et changement de variable : toujours revenir à un segment ou vérifier les hypothèses (crochet convergent, bijection \(\mathcal{C}^1\)).
{{% /fiche %}}
