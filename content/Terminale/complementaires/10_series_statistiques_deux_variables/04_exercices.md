---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Le tableau suivant donne la température extérieure moyenne \(x_i\) (en °C) et la consommation de gaz \(y_i\) (en kWh) d’un logement, sur cinq semaines d’hiver.

| \(x_i\) | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| \(y_i\) | 410 | 370 | 335 | 290 | 255 |

1. Calculer les coordonnées du point moyen \(G\).
2. À la calculatrice, déterminer l’équation de la droite des moindres carrés de \(y\) en \(x\) et le coefficient de corrélation \(r\).
3. Estimer la consommation pour une température moyenne de 5 °C.

{{% details title="Solution" closed="true" %}}
1. \({\bar{x} = \dfrac{20}{5} = 4}\) et \({\bar{y} = \dfrac{1\,660}{5} = 332}\) : \(G(4\,;\,332)\).
2. \(\sum x_iy_i = 0 + 740 + 1\,340 + 1\,740 + 2\,040 = 5\,860\), \(\mathrm{cov}(x\,;\,y) = \dfrac{5\,860}{5} - 4 \times 332 = 1\,172 - 1\,328 = -156\) ; \({\sigma^2(x) = \dfrac{120}{5} - 16 = 8}\). Donc \({m = \dfrac{-156}{8} = -19{,}5}\) et \({p = 332 + 19{,}5 \times 4 = 410}\) : \({y = -19{,}5x + 410}\). La calculatrice donne \({r \approx -0{,}999}\) : forte corrélation négative.
3. \({y \approx -19{,}5 \times 5 + 410 = 312{,}5}\) kWh (interpolation).
{{% /details %}}

### Exercice 2

Pour une série statistique double, on donne \({\bar{x} = 12}\), \({\bar{y} = 50}\), \({\mathrm{cov}(x\,;\,y) = 18}\), \({\sigma(x) = 3}\) et \({\sigma(y) = 7}\).
1. Calculer le coefficient de corrélation linéaire et interpréter.
2. Déterminer l’équation de la droite des moindres carrés de \(y\) en \(x\).

{{% details title="Solution" closed="true" %}}
1. \({r = \dfrac{18}{3 \times 7} = \dfrac{6}{7} \approx 0{,}857 > 0{,}75}\) : la corrélation linéaire est forte (et positive).
2. \({m = \dfrac{18}{3^2} = 2}\) et \({p = 50 - 2 \times 12 = 26}\) : \({y = 2x + 26}\).
{{% /details %}}

### Exercice 3

Dans une ville, on constate une forte corrélation positive entre le nombre de bouteilles d’eau vendues chaque jour et le nombre de passages aux urgences pour malaise. Peut-on en conclure que boire de l’eau provoque des malaises ?

{{% details title="Solution" closed="true" %}}
Non : une corrélation n’est pas une causalité. Les deux variables dépendent vraisemblablement d’un troisième facteur, la chaleur : les jours de forte chaleur, on achète plus d’eau et les malaises sont plus fréquents.
{{% /details %}}

### Exercice 4

Le nombre d’abonnés \(y_i\) (en milliers) à un service en ligne, au mois \(x_i\), est donné ci-dessous.

| \(x_i\) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| \(y_i\) | 3,0 | 4,6 | 6,7 | 10,1 | 15,2 |

1. Compléter le tableau avec \({z_i = \ln(y_i)}\), arrondi au centième.
2. À la calculatrice, on obtient la droite des moindres carrés \({z = 0{,}40x + 0{,}70}\). En déduire un ajustement de \(y\) en fonction de \(x\).
3. Estimer le nombre d’abonnés au mois 7.

{{% details title="Solution" closed="true" %}}
1. \(z_i\) : \(1{,}10\) ; \(1{,}53\) ; \(1{,}90\) ; \(2{,}31\) ; \(2{,}72\).
2. \({y = e^z = e^{0{,}70} \times e^{0{,}40x} \approx 2{,}01\,e^{0{,}40x}}\).
3. Pour \({x = 7}\) : \({y \approx 2{,}01\,e^{2{,}8} \approx 33{,}1}\), soit environ 33 000 abonnés (extrapolation).
{{% /details %}}

### Exercice 5

La distance de freinage \(d_i\) (en m) d’un véhicule est relevée pour différentes vitesses \(v_i\) (en km/h).

| \(v_i\) | 40 | 60 | 80 | 100 | 120 |
|---|---|---|---|---|---|
| \(d_i\) | 9 | 20 | 36 | 56 | 81 |

1. On pose \({w_i = \sqrt{d_i}}\). Calculer les valeurs de \(w_i\) (arrondies au dixième).
2. Le nuage \((v_i\,;\,w_i)\) est presque aligné ; la droite des moindres carrés a pour équation \({w = 0{,}075v}\) environ. En déduire une expression approchée de \(d\) en fonction de \(v\), puis estimer la distance de freinage à 90 km/h.

{{% details title="Solution" closed="true" %}}
1. \(w_i\) : \(3\) ; \(4{,}5\) ; \(6\) ; \(7{,}5\) ; \(9\).
2. \({\sqrt{d} = 0{,}075v}\), donc \({d = (0{,}075v)^2 = 0{,}005\,625\,v^2}\). Pour \({v = 90}\) : \({d \approx 0{,}005\,625 \times 8\,100 \approx 45{,}6}\) m.
{{% /details %}}
