---
title: 'Transformer une figure par symétrie'
weight: 1
cascade:
  type: docs
---

Une transformation associe à chaque point d’une figure un point image. Les symétries, déjà rencontrées en 6e et en 5e, sont deux exemples de transformations qui ne déforment pas les figures.

## Symétrie axiale

> [!TIP] **Définition**
>
> Soit \((d)\) une droite.
> - Si le point \(A\) n’est pas sur \((d)\), son **symétrique** par rapport à \((d)\) est le point \(A'\) tel que \((d)\) soit la **médiatrice** du segment \([AA']\).
> - Si le point \(A\) est sur \((d)\), son symétrique par rapport à \((d)\) est le point \(A\) lui-même.

> [!TIP] **Définition**
>
> Le **symétrique d’une figure** \(\mathcal{F}\) par rapport à une droite \((d)\) est la figure \(\mathcal{F}'\) formée des symétriques de tous les points de \(\mathcal{F}\). La droite \((d)\) est l’**axe de symétrie**.

> [!TIP] **Propriétés**
>
> - Deux figures symétriques par rapport à une droite se superposent lorsqu’on plie la feuille le long de cette droite.
> - La symétrie axiale conserve les alignements, les longueurs, les mesures d’angles et les aires.

## Symétrie centrale

> [!TIP] **Définition**
>
> Soit \(O\) un point.
> - Si le point \(A\) est distinct de \(O\), son **symétrique** par rapport à \(O\) est le point \(A'\) tel que \(O\) soit le **milieu** du segment \([AA']\).
> - Le symétrique du point \(O\) est le point \(O\) lui-même.

> [!TIP] **Définition**
>
> Le **symétrique d’une figure** \(\mathcal{F}\) par rapport à un point \(O\) est la figure \(\mathcal{F}'\) formée des symétriques de tous les points de \(\mathcal{F}\). Le point \(O\) est le **centre de symétrie**.

> [!TIP] **Propriétés**
>
> - Deux figures symétriques par rapport à un point \(O\) se superposent en faisant tourner l’une d’un demi-tour autour de \(O\).
> - La symétrie centrale conserve les alignements, les longueurs, les mesures d’angles et les aires.
> - Le symétrique d’une droite par rapport à un point est une droite qui lui est **parallèle**.

Ci-dessous, un drapeau \(\mathcal{F}\) et son image \(\mathcal{F}'\) par une symétrie axiale (à gauche) puis par une symétrie centrale (à droite) :

![](/images/image429.png)

{{% details title="Exemple" closed="true" %}}
Sur la figure de gauche, la pointe \(A\) du fanion est à 2 carreaux de l’axe \((d)\) ; son symétrique \(A'\) est donc à 2 carreaux de l’autre côté, sur la perpendiculaire à \((d)\) passant par \(A\). Le fanion « regarde » vers la gauche dans \(\mathcal{F}'\) : la symétrie axiale retourne la figure.

Sur la figure de droite, \(O\) est le milieu de \([AA']\) : le drapeau \(\mathcal{F}'\) est « la tête en bas », comme après un demi-tour.
{{% /details %}}

## Construire un symétrique

> [!NOTE] **Méthode — Construire le symétrique d’un point**
>
> - **Par rapport à une droite \((d)\)** : on trace la perpendiculaire à \((d)\) passant par \(A\), puis on reporte au compas, de l’autre côté de \((d)\), la distance de \(A\) à \((d)\).
> - **Par rapport à un point \(O\)** : on trace la demi-droite \([AO)\), puis on reporte au compas la longueur \(AO\) au-delà de \(O\).
>
> Pour une figure formée de segments, il suffit de construire les symétriques de ses sommets puis de les relier, puisque la symétrie conserve les alignements.

> [!NOTE] **Exercice résolu**
>
> \(ABC\) est un triangle tel que \(AB = 4\) cm, \(AC = 3\) cm et \(\widehat{BAC} = 70^\circ\). On construit le triangle \(A'B'C'\), symétrique de \(ABC\) par rapport au point \(C\).
> 1. Quelle est la longueur \(A'B'\) ? Quelle est la mesure de \(\widehat{B'A'C'}\) ?
> 2. Où se trouve le point \(C'\) ?
> 3. Que peut-on dire des droites \((AB)\) et \((A'B')\) ?

{{% details title="Solution commentée" closed="true" %}}
1. La symétrie centrale conserve les longueurs et les angles : \(A'B' = AB = 4\) cm et \(\widehat{B'A'C'} = \widehat{BAC} = 70^\circ\).
2. \(C\) est le centre de symétrie : son symétrique est lui-même, donc \(C' = C\).
3. Le symétrique d’une droite par rapport à un point est une droite parallèle : \((A'B') \parallel (AB)\).
{{% /details %}}
