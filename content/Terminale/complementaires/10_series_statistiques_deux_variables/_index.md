---
title: 'Séries statistiques à deux variables'
weight: 10
---
Cours du chapitre 10 : Séries statistiques à deux variables.

{{< cards >}}
  {{< card link="./01_series_statistiques_doubles" title="Séries statistiques doubles" icon="paper-clip">}}
  {{< card link="./02_ajustement_affine" title="Ajustement affine" icon="paper-clip">}}
  {{< card link="./03_correlation_ajustements" title="Corrélation et ajustements" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Série double** - couples \((x_i\,;\,y_i)\), représentés par un nuage de points ; point moyen \(G(\bar{x}\,;\,\bar{y})\).

**Covariance** - \(\mathrm{cov}(x\,;\,y) = \dfrac{1}{n}\sum (x_i - \bar{x})(y_i - \bar{y}) = \dfrac{1}{n}\sum x_iy_i - \bar{x}\bar{y}\).

**Droite des moindres carrés** - \({y = mx + p}\) avec \({m = \dfrac{\mathrm{cov}(x\,;\,y)}{\sigma^2(x)}}\), \({p = \bar{y} - m\bar{x}}\) ; elle passe par \(G\) et minimise la somme des carrés des écarts verticaux.

**Corrélation** - \({r = \dfrac{\mathrm{cov}(x\,;\,y)}{\sigma(x)\sigma(y)} \in [-1\,;\,1]}\) ; corrélation linéaire forte si \({|r| > 0{,}75}\). Corrélation ne signifie pas causalité.

**Changement de variable** - si le nuage est incurvé, on ajuste \({z = \ln y}\) (ajustement exponentiel \({y = e^{b}e^{ax}}\)) ou \({z = \sqrt{y}}\) ; interpolation (dans le domaine observé) et extrapolation (au-delà, avec prudence).
