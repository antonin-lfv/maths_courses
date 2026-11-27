---
title: 'Transformer une figure par homothétie'
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Soit \(O\) un point. Transformer une figure par une **homothétie** de centre \(O\), c’est l’agrandir ou la réduire en faisant glisser ses points le long de droites passant par \(O\). Une homothétie est définie par :
> - un **centre** \(O\) ;
> - un **rapport** \(k\), nombre non nul.
>
> L’image d’un point \(M\) est le point \(M'\) de la droite \((OM)\) tel que \(OM' = |k| \times OM\), situé du même côté que \(M\) par rapport à \(O\) si \(k > 0\), et de l’autre côté si \(k < 0\).

![](/images/image453.png)

{{% details title="Exemple 1 — rapport positif" closed="true" %}}
Sur la figure de gauche, le triangle rouge est l’image du triangle bleu par l’homothétie de centre \(O\) et de rapport \(2\) : chaque sommet image est deux fois plus loin de \(O\), dans la même direction. Comme \(k > 1\), l’homothétie effectue un **agrandissement** : toutes les longueurs sont multipliées par \(2\).

Si \(0 < k < 1\), l’homothétie effectue une **réduction**.
{{% /details %}}

{{% details title="Exemple 2 — rapport négatif" closed="true" %}}
Sur la figure de droite, le rapport est \(-0{,}5\) : chaque point image est de l’autre côté de \(O\), deux fois plus près. La figure est réduite (longueurs multipliées par \(0{,}5\)) et « retournée » par rapport à \(O\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’homothétie de centre \(O\) et de rapport \(-1\) est la symétrie centrale de centre \(O\).

## Propriétés

> [!TIP] **Propriétés**
>
> - Une figure et son image par une homothétie ont la même forme.
> - L’homothétie conserve les alignements et les mesures des angles.
> - Par une homothétie de rapport \(k\), les longueurs sont multipliées par \(|k|\) et les aires par \(k^2\).

{{% details title="Exemple" closed="true" %}}
Un triangle d’aire \(3\) cm² et de périmètre \(8\) cm a pour image, par une homothétie de rapport \(-4\), un triangle de périmètre \(4 \times 8 = 32\) cm et d’aire \((-4)^2 \times 3 = 16 \times 3 = 48\) cm².
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Sur une droite graduée d’origine \(O\), on place le point \(A\) d’abscisse \(3\) et le point \(B\) d’abscisse \(5\).
> 1. Donner l’abscisse de l’image \(A'\) de \(A\) par l’homothétie de centre \(O\) et de rapport \(2{,}5\).
> 2. Donner l’abscisse de l’image \(B'\) de \(B\) par l’homothétie de centre \(O\) et de rapport \(-0{,}6\).
> 3. Un carré de côté \(5\) cm est transformé par une homothétie de rapport \(0{,}6\). Calculer le côté et l’aire du carré image.

{{% details title="Solution commentée" closed="true" %}}
1. \(A'\) est du même côté que \(A\), à une distance \(2{,}5 \times 3 = 7{,}5\) de \(O\) : abscisse \(7{,}5\).
2. \(B'\) est de l’autre côté de \(O\), à une distance \(0{,}6 \times 5 = 3\) : abscisse \(-3\).
3. Côté : \(0{,}6 \times 5 = 3\) cm. Aire : \(0{,}6^2 \times 25 = 0{,}36 \times 25 = 9\) cm² (on retrouve \(3^2 = 9\)).
{{% /details %}}
