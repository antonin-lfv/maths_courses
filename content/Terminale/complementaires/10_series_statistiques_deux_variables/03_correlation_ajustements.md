---
title: 'Corrélation et ajustements'
weight: 3
cascade:
  type: docs
---

## Coefficient de corrélation linéaire

> [!TIP] **Définition**
>
> On appelle **coefficient de corrélation linéaire** d’une série statistique à deux variables \(x\) et \(y\) le nombre
> \[
r = \frac{\mathrm{cov}(x\,;\,y)}{\sigma(x)\,\sigma(y)},
\]
> où \(\sigma(x)\) est l’écart type de la série \(x\) et \(\sigma(y)\) l’écart type de la série \(y\).

> [!TIP] **Propriété (admise)**
>
> \(r\) est un nombre réel tel que \(-1 \leq r \leq 1\). Il a le signe de la covariance, donc le signe du coefficient directeur de la droite des moindres carrés.

> [!TIP] **Définition**
>
> Lorsque \(r\) est très proche de 1 ou de \(-1\) (en pratique, lorsque \(r > 0{,}75\) ou \(r < -0{,}75\)), on dit que la **corrélation linéaire** entre les séries \(x\) et \(y\) est **forte**. Un ajustement affine est alors justifié.

{{% details title="Exemple" closed="true" %}}
Pour la série « budget publicitaire / chiffre d’affaires », la calculatrice donne \(r \approx 0{,}991\) : la corrélation linéaire est très forte, l’ajustement affine \(y = 3{,}03x + 9{,}07\) est pertinent.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - **Il ne faut pas confondre corrélation et causalité.** Une forte corrélation entre deux variables ne signifie pas que l’une est la cause de l’autre : elles peuvent toutes deux dépendre d’un troisième facteur (par exemple, ventes de glaces et nombre de coups de soleil, liées à l’ensoleillement).
> - Lorsque \(r\) est proche de 0, il n’y a pas de lien **affine**, mais il peut exister un autre type de lien : le nuage peut être « ajusté » par une autre courbe.

## Ajustement se ramenant à un ajustement affine

Lorsqu’un nuage de points n’a pas une forme rectiligne, on peut parfois se ramener à un ajustement affine en remplaçant l’une des variables par une autre (par exemple \(z = \ln(y)\) ou \(z = \sqrt{y}\)) : c’est un **changement de variable**.

{{% details title="Exemple" closed="true" %}}
On compte le nombre \(y_i\) de bactéries (en milliers) dans une culture, toutes les heures :

| Heure \(x_i\) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| \(y_i\) | 100 | 148 | 225 | 330 | 500 | 740 |
| \(z_i = \ln(y_i)\) | 4,61 | 5,00 | 5,42 | 5,80 | 6,21 | 6,61 |

Le nuage \((x_i\,;\,y_i)\) est incurvé, mais le nuage \((x_i\,;\,z_i)\) est presque parfaitement aligné (\(r \approx 0{,}99995\)). La calculatrice donne la droite des moindres carrés de \(z\) en \(x\) : \(z = 0{,}401x + 4{,}603\). Comme \(y = e^z\) :
\[
y = e^{0{,}401x + 4{,}603} = e^{4{,}603} \times e^{0{,}401x} \approx 99{,}8\,e^{0{,}401x}.
\]
On a ainsi réalisé un ajustement **exponentiel** du nuage initial.

![](/images/image359.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Utiliser un ajustement pour estimer une valeur à l’intérieur de l’intervalle des valeurs observées s’appelle une **interpolation** ; à l’extérieur, une **extrapolation**. Une extrapolation suppose que la tendance observée se prolonge, ce qui n’est pas toujours le cas.

## Mesurer et exploiter une corrélation

> [!NOTE] **Méthode 1 — Calculer un coefficient de corrélation linéaire**
>
> On reprend la série « budget \(x\) / chiffre d’affaires \(y\) » (\(x\) : 1 à 6 ; \(y\) : 12, 15, 19, 20, 25, 27), pour laquelle \(\mathrm{cov}(x\,;\,y) = \frac{53}{6}\) et \(\sigma^2(x) = \frac{35}{12}\).
> 1. Calculer \(\sigma^2(y)\), puis \(r\).
> 2. Interpréter.

{{% details title="Solution commentée" closed="true" %}}
1. \(\sum y_i^2 = 144 + 225 + 361 + 400 + 625 + 729 = 2\,484\), donc \(\sigma^2(y) = \dfrac{2\,484}{6} - \left(\dfrac{118}{6}\right)^2 = 414 - 386{,}78 \approx 27{,}22\). Ainsi
\[
r = \frac{53/6}{\sqrt{35/12} \times \sqrt{27{,}22}} \approx \frac{8{,}833}{1{,}708 \times 5{,}218} \approx 0{,}991.
\]
2. \(r > 0{,}75\) : la corrélation linéaire est forte et positive ; le chiffre d’affaires augmente avec le budget publicitaire (ce qui ne prouve pas, à lui seul, que la publicité en est la cause).
{{% /details %}}

> [!NOTE] **Méthode 2 — Réaliser un ajustement par changement de variable**
>
> On reprend la série des bactéries et l’ajustement \(y \approx 99{,}8\,e^{0{,}401x}\).
> 1. Justifier le choix du changement de variable \(z = \ln(y)\).
> 2. Estimer le nombre de bactéries au bout de 7 heures.

{{% details title="Solution commentée" closed="true" %}}
1. Le nombre de bactéries est multiplié à peu près par le même nombre (environ 1,5) chaque heure : la croissance est exponentielle. Le logarithme transforme une telle croissance en croissance affine : le nuage \((x\,;\,\ln y)\) est aligné, alors que \(r(x\,;\,y) \approx 0{,}962\) seulement pour le nuage initial.
2. Pour \(x = 7\) : \(y \approx 99{,}8\,e^{0{,}401 \times 7} = 99{,}8\,e^{2{,}807} \approx 1\,650\) milliers de bactéries (extrapolation, à interpréter avec prudence).
{{% /details %}}
