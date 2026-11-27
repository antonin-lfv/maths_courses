---
title: 'Déterminer un angle dans un triangle rectangle'
weight: 4
cascade:
  type: docs
---

## Cosinus d’un angle aigu

Dans un triangle rectangle, pour un angle aigu donné, on repère deux côtés : l’**hypoténuse** et le **côté adjacent** à cet angle (le côté de l’angle qui n’est pas l’hypoténuse).

![](/images/image438.png)

> [!TIP] **Propriété et définition**
>
> Soit \(ABC\) un triangle rectangle en \(B\). Le rapport \(\dfrac{AB}{AC}\) ne dépend que de la mesure de l’angle \(\widehat{A}\) (et pas de la taille du triangle). On l’appelle **cosinus** de l’angle \(\widehat{A}\) et on le note \(\cos \widehat{A}\) :
> \[
\cos \widehat{A} = \dfrac{\text{longueur du côté adjacent à } \widehat{A}}{\text{longueur de l'hypoténuse}} = \dfrac{AB}{AC}.
\]

{{% details title="Exemple" closed="true" %}}
\(DEF\) est rectangle en \(E\), avec \({DE = 12}\) cm et \({DF = 13}\) cm. Le côté adjacent à \(\widehat{D}\) est \([DE]\) et l’hypoténuse est \([DF]\) :
\[
\cos \widehat{D} = \dfrac{DE}{DF} = \dfrac{12}{13}.
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le cosinus est un quotient de deux longueurs exprimées dans la même unité : il n’a **pas d’unité**.

> [!TIP] **Propriété**
>
> Le cosinus d’un angle aigu est un nombre strictement compris entre \(0\) et \(1\).

> [!IMPORTANT] **Remarque**
>
> Cela vient de ce que l’hypoténuse est le plus long côté du triangle rectangle : dans \({\cos \widehat{A} = \dfrac{AB}{AC}}\), le dénominateur est plus grand que le numérateur, donc le quotient est inférieur à \(1\).

## Utiliser le cosinus

> [!NOTE] **Méthode 1 - Calculer la mesure d’un angle**
>
> On calcule le cosinus de l’angle (côté adjacent / hypoténuse), puis on utilise la touche \({\cos^{-1}}\) (ou Arccos, ou acs) de la calculatrice, réglée en degrés.

{{% details title="Exemple" closed="true" %}}
Dans le triangle \(DEF\) précédent, \({\cos \widehat{D} = \dfrac{12}{13}}\). À la calculatrice, \({\cos^{-1}(12 \div 13) \approx 22{,}6}\). Donc \({\widehat{D} \approx 23^\circ}\) (arrondi au degré).
{{% /details %}}

> [!NOTE] **Méthode 2 - Calculer une longueur**
>
> On écrit le cosinus de l’angle connu sous forme de quotient, on remplace les valeurs connues, puis on utilise l’égalité des produits en croix (en écrivant \({\cos \widehat{A} = \dfrac{\cos \widehat{A}}{1}}\)).

> [!NOTE] **Exercice résolu**
>
> 1. \(KLM\) est rectangle en \(L\), avec \({KM = 10}\) cm et \({\widehat{K} = 40^\circ}\). Calculer \(KL\), arrondi au millimètre.
> 2. \(RST\) est rectangle en \(S\), avec \({RS = 6}\) cm et \({\widehat{R} = 35^\circ}\). Calculer l’hypoténuse \(RT\), arrondie au millimètre.

{{% details title="Solution commentée" closed="true" %}}
1. Le côté adjacent à \(\widehat{K}\) est \([KL]\) et l’hypoténuse est \([KM]\) :
\[
\cos \widehat{K} = \dfrac{KL}{KM}, \qquad \cos 40^\circ = \dfrac{KL}{10}, \qquad KL = 10 \times \cos 40^\circ \approx 7{,}7 \text{ cm}.
\]
2. Le côté adjacent à \(\widehat{R}\) est \([RS]\) et l’hypoténuse est \([RT]\) :
\[
\cos 35^\circ = \dfrac{6}{RT}, \qquad RT = \dfrac{6}{\cos 35^\circ} \approx 7{,}3 \text{ cm}.
\]
On vérifie que l’hypoténuse est bien plus longue que le côté adjacent : \({7{,}3 > 6}\).
{{% /details %}}
