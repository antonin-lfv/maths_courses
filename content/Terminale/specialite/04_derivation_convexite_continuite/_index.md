---
title: 'Dérivation, convexité et continuité'
weight: 4
---

{{< cards >}}
  {{< card link="./01_derivation" title="Dérivation" icon="paper-clip">}}
  {{< card link="./02_convexite_graphique" title="Convexité graphique" icon="paper-clip">}}
  {{< card link="./03_convexite_fonctions_derivables" title="Convexité des fonctions dérivables" icon="paper-clip">}}
  {{< card link="./04_fonctions_continues" title="Fonctions continues" icon="paper-clip">}}
  {{< card link="./05_TVI" title="Théorèmes des valeurs intermédiaires" icon="paper-clip">}}

{{< /cards >}}

#### Fiche résumé du chapitre

**Composée et dérivée** — \((v \circ u)(x) = v(u(x))\) et \((v \circ u)' = (v' \circ u) \times u'\). En particulier : \((e^u)' = u'e^u\), \((\sqrt u)' = \frac{u'}{2\sqrt u}\) (si \(u > 0\)), \((u^n)' = n u' u^{n-1}\). La dérivée seconde \(f''\) est la dérivée de \(f'\).

**Convexité** — \(f\) convexe : courbe en dessous de ses cordes et au-dessus de ses tangentes ; concave : l’inverse. Pour \(f\) deux fois dérivable : \(f\) convexe \(\iff f'\) croissante \(\iff f'' \geq 0\) ; \(f\) concave \(\iff f'\) décroissante \(\iff f'' \leq 0\).

**Point d’inflexion** — point où la courbe traverse sa tangente ; c’est le cas en \(a\) si \(f''\) s’annule en changeant de signe en \(a\).

**Continuité** — \(f\) est continue en \(a\) si \(\lim\limits_{x \to a} f(x) = f(a)\). Les fonctions usuelles sont continues ; dérivable \(\Rightarrow\) continue (réciproque fausse : \(|x|\) en 0). Si \(u_n \to a\) et \(f\) est continue en \(a\), alors \(f(u_n) \to f(a)\).

**Théorème des valeurs intermédiaires** — si \(f\) est continue sur \([a ; b]\) et \(k\) compris entre \(f(a)\) et \(f(b)\), l’équation \(f(x) = k\) admet au moins une solution dans \([a ; b]\), et une seule si \(f\) est de plus strictement monotone. Extension aux intervalles ouverts à l’aide des limites aux bornes.
