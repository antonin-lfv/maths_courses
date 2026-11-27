---
title: 'Utiliser des rapports trigonométriques'
weight: 3
cascade:
  type: docs
---

## Calculer une longueur

> [!NOTE] **Méthode**
>
> On peut calculer la longueur d’un côté d’un triangle rectangle si l’on connait la longueur d’un autre côté et la mesure d’un angle aigu. On choisit le rapport trigonométrique qui fait intervenir l’angle connu, la longueur connue et la longueur cherchée, puis on utilise les produits en croix.

{{% details title="Exemple" closed="true" %}}
Le triangle \(RST\) est rectangle en \(S\), avec \(\widehat{R} = 35^\circ\) et \(RT = 12\) cm. On cherche \(ST\) et \(RS\).
- \([ST]\) est opposé à \(\widehat{R}\) et \([RT]\) est l’hypoténuse : on utilise le sinus.
\[
\sin 35^\circ = \frac{ST}{12}, \qquad ST = 12 \times \sin 35^\circ \approx 6{,}9 \text{ cm}.
\]
- \([RS]\) est adjacent à \(\widehat{R}\) : on utilise le cosinus.
\[
\cos 35^\circ = \frac{RS}{12}, \qquad RS = 12 \times \cos 35^\circ \approx 9{,}8 \text{ cm}.
\]
On aurait aussi pu calculer \(RS\) avec le théorème de Pythagore, une fois \(ST\) connu.
{{% /details %}}

## Calculer la mesure d’un angle

> [!NOTE] **Méthode**
>
> On peut calculer la mesure d’un angle aigu d’un triangle rectangle si l’on connait les longueurs de deux côtés. On choisit le rapport trigonométrique qui fait intervenir l’angle cherché et les deux longueurs connues, puis on utilise la touche « arccos », « arcsin » ou « arctan » (ou \(\cos^{-1}\), \(\sin^{-1}\), \(\tan^{-1}\)) de la calculatrice, réglée en degrés.

{{% details title="Exemple" closed="true" %}}
Le triangle \(UVW\) est rectangle en \(V\), avec \(UV = 4\) cm et \(VW = 7\) cm. On cherche \(\widehat{VUW}\).

Pour l’angle \(\widehat{U}\), \([VW]\) est le côté opposé et \([UV]\) le côté adjacent : on utilise la tangente.
\[
\tan \widehat{VUW} = \frac{VW}{UV} = \frac{7}{4} = 1{,}75.
\]
La calculatrice donne \(\widehat{VUW} \approx 60^\circ\). On en déduit le troisième angle : \(\widehat{VWU} \approx 180^\circ - 90^\circ - 60^\circ = 30^\circ\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Une rampe d’accès pour fauteuils roulants doit faire avec le sol un angle d’au plus \(3^\circ\). Une rampe monte de \(1{,}5\) m sur une distance horizontale de \(40\) m.
> 1. Calculer l’angle de cette rampe avec le sol. Est-elle conforme ?
> 2. Quelle est la longueur de la rampe, arrondie au centimètre ?

{{% details title="Solution commentée" closed="true" %}}
1. La rampe, le sol et la verticale forment un triangle rectangle. Pour l’angle \(\alpha\) au sol, la hauteur \(1{,}5\) m est le côté opposé et la distance horizontale \(40\) m le côté adjacent :
\[
\tan \alpha = \frac{1{,}5}{40} = 0{,}0375, \qquad \alpha \approx 2{,}1^\circ.
\]
\(2{,}1^\circ < 3^\circ\) : la rampe est conforme.
2. La rampe est l’hypoténuse. D’après le théorème de Pythagore : \(L^2 = 40^2 + 1{,}5^2 = 1\,600 + 2{,}25 = 1\,602{,}25\), donc \(L = \sqrt{1\,602{,}25} \approx 40{,}03\) m.
{{% /details %}}
