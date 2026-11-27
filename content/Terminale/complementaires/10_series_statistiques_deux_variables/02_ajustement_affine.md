---
title: 'Ajustement affine'
weight: 2
cascade:
  type: docs
---

## Notion d’ajustement affine

> [!TIP] **Définition**
>
> Dans un nuage de points, chercher une droite qui « approche au mieux » tous les points du nuage s’appelle **réaliser un ajustement affine**. La droite trouvée s’appelle un **ajustement affine** du nuage de points, ou une **droite de régression**.

> [!IMPORTANT] **Remarques**
>
> - Dire que la droite « approche au mieux » les points du nuage est très subjectif : plusieurs droites peuvent sembler convenir.
> - Un ajustement affine n’a de sens que si les points du nuage paraissent globalement alignés.

> [!TIP] **Propriété (admise)**
>
> Dans tout ajustement affine « raisonnable » (et en particulier pour la droite des moindres carrés ci-dessous), on choisit une droite passant par le point moyen \(G\) du nuage.

## Droite des moindres carrés

> [!TIP] **Propriété (admise)**
>
> Soit un nuage de points \(M_1, M_2, \dots, M_n\). On considère toutes les droites \(d\) passant par le point moyen \(G\) et, pour chacune, les points \(P_1, P_2, \dots, P_n\) de \(d\) qui ont les mêmes abscisses que \(M_1, M_2, \dots, M_n\). Il existe une unique droite \(d\) qui rend minimale la somme
> \[
M_1P_1^2 + M_2P_2^2 + \dots + M_nP_n^2.
\]
> Cette droite est un ajustement affine du nuage, appelé **droite des moindres carrés** ou **droite de régression de \(y\) en \(x\)**.

> [!TIP] **Définition et propriété (admise)**
>
> On appelle **covariance** des variables \(x\) (de valeurs \(x_1, \dots, x_n\)) et \(y\) (de valeurs \(y_1, \dots, y_n\)) le nombre
> \[
\begin{aligned}
\mathrm{cov}(x\,;\,y) &= \dfrac{(x_1 - \bar{x})(y_1 - \bar{y}) + \dots + (x_n - \bar{x})(y_n - \bar{y})}{n} \\[0.3em]
&= \dfrac{x_1y_1 + x_2y_2 + \dots + x_ny_n}{n} - \bar{x}\,\bar{y}.
\end{aligned}
\]
> La droite des moindres carrés de \(y\) en \(x\) a pour équation \({y = mx + p}\) avec
> \[
m = \dfrac{\mathrm{cov}(x\,;\,y)}{\sigma^2(x)} \qquad \text{et} \qquad p = \bar{y} - m\bar{x},
\]
> où \(\sigma(x)\) est l’écart type de la série \(x\) (\({\sigma^2(x) = \dfrac{x_1^2 + \dots + x_n^2}{n} - \bar{x}^2}\)). On retrouve que la droite passe par \(G(\bar{x}\,;\,\bar{y})\).

> [!IMPORTANT] **Remarque**
>
> En pratique, on obtient l’équation de la droite des moindres carrés à l’aide d’une calculatrice ou d’un tableur, qui donnent directement \(m\) et \(p\) (et le coefficient de corrélation \(r\), voir la page suivante).

## Ajuster un nuage de points

> [!NOTE] **Méthode 1 - Réaliser un ajustement affine « au jugé »**
>
> On reprend le nuage « âge / hauteur » des plants de tomate : \((2\,;\,8)\), \((3\,;\,13)\), \((4\,;\,19)\), \((5\,;\,24)\), \((6\,;\,31)\), \((7\,;\,35)\).
> 1. Calculer les coordonnées du point moyen \(G\).
> 2. Tracer une droite passant par \(G\) qui semble approcher au mieux les points, et déterminer son équation à l’aide d’un second point bien placé.

{{% details title="Solution commentée" closed="true" %}}
1. \({\bar{a} = \dfrac{27}{6} = 4{,}5}\) et \({\bar{h} = \dfrac{130}{6} \approx 21{,}7}\) : \(G(4{,}5\,;\,21{,}7)\).
2. La droite passant par \(G\) et par le point \((2\,;\,8)\), par exemple, a pour coefficient directeur \({\dfrac{21{,}7 - 8}{4{,}5 - 2} \approx 5{,}5}\), d’où l’équation approchée \({h = 5{,}5a - 3}\). D’autres choix sont possibles : c’est un ajustement « au jugé ».
{{% /details %}}

> [!NOTE] **Méthode 2 - Déterminer l’équation de la droite des moindres carrés**
>
> On reprend la série « budget publicitaire \(x\) / chiffre d’affaires \(y\) » : \(x\) : 1, 2, 3, 4, 5, 6 et \(y\) : 12, 15, 19, 20, 25, 27.
> 1. Calculer \(\mathrm{cov}(x\,;\,y)\) et \(\sigma^2(x)\).
> 2. En déduire l’équation de la droite des moindres carrés (coefficients arrondis au centième).
> 3. Estimer le chiffre d’affaires pour un budget de 8 000 €.

{{% details title="Solution commentée" closed="true" %}}
1. \({\bar{x} = 3{,}5}\), \({\bar{y} = \dfrac{118}{6}}\). \(\sum x_iy_i = 12 + 30 + 57 + 80 + 125 + 162 = 466\), donc \(\mathrm{cov}(x\,;\,y) = \dfrac{466}{6} - 3{,}5 \times \dfrac{118}{6} = \dfrac{466 - 413}{6} = \dfrac{53}{6} \approx 8{,}83\). \({\sum x_i^2 = 91}\), donc \({\sigma^2(x) = \dfrac{91}{6} - 12{,}25 = \dfrac{35}{12} \approx 2{,}92}\).
2. \({m = \dfrac{53/6}{35/12} = \dfrac{106}{35} \approx 3{,}03}\) et \(p = \bar{y} - m\bar{x} = \dfrac{118}{6} - \dfrac{106}{35} \times 3{,}5 = \dfrac{118}{6} - 10{,}6 \approx 9{,}07\). La droite a pour équation \({y = 3{,}03x + 9{,}07}\).
3. Pour \({x = 8}\) : \({y \approx 3{,}03 \times 8 + 9{,}07 \approx 33{,}3}\). On peut estimer un chiffre d’affaires d’environ 33 300 €, à condition que la tendance se maintienne en dehors des valeurs observées.
{{% /details %}}
