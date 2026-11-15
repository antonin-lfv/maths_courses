---
title: 'Fonction logarithme'
weight: 6
---
Cours du chapitre 6 : Fonction logarithme.

{{< cards >}}
  {{< card link="./01_fonction_logarithme_neperien" title="Fonction logarithme népérien" icon="paper-clip">}}
  {{< card link="./02_variations_limites_ln" title="Variations et limites de la fonction ln" icon="paper-clip">}}
  {{< card link="./03_croissances_comparees_composees" title="Croissances comparées et fonctions composées" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Définition** — pour \(a > 0\), \(\ln(a)\) est l’unique solution de \(e^x = a\). Pour \(x > 0\) et \(y\) réel : \(y = \ln(x) \iff e^y = x\) ; \(\ln(e^x) = x\), \(e^{\ln x} = x\) ; \(\ln 1 = 0\), \(\ln e = 1\). Les courbes de \(\ln\) et \(\exp\) sont symétriques par rapport à \(y = x\).

**Relations fonctionnelles** — pour \(x, y > 0\) et \(n \in \mathbb{Z}\) : \(\ln(xy) = \ln x + \ln y\), \(\ln\frac{x}{y} = \ln x - \ln y\), \(\ln\frac{1}{y} = -\ln y\), \(\ln\sqrt{x} = \frac12 \ln x\), \(\ln(x^n) = n\ln x\).

**Étude** — \(\ln' (x)= \frac{1}{x}\) : \(\ln\) est strictement croissante et concave sur \(]0 ; +\infty[\) ; \(\ln a = \ln b \iff a = b\), \(\ln a < \ln b \iff a < b\) ; \(\ln x < 0\) sur \(]0 ; 1[\), \(> 0\) sur \(]1 ; +\infty[\) ; \(\ln x \leq x - 1\).

**Limites** — \(\lim\limits_{0^+} \ln x = -\infty\) (asymptote verticale \(x = 0\)), \(\lim\limits_{+\infty} \ln x = +\infty\) ; croissances comparées (\(n \geq 1\)) : \(\frac{\ln x}{x^n} \to 0\) en \(+\infty\), \(x^n \ln x \to 0\) en \(0^+\) ; \(\lim\limits_{h \to 0} \frac{\ln(1+h)}{h} = 1\).

**Composée** — si \(u > 0\) est dérivable, \((\ln u)' = \frac{u'}{u}\), et \(\ln u\) a les mêmes variations que \(u\).
