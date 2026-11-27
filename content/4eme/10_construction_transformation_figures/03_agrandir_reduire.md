---
title: 'Agrandir et réduire une figure'
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Soit \(k\) un nombre strictement positif. Multiplier toutes les longueurs d’une figure par \(k\), c’est réaliser :
> - un **agrandissement** de rapport \(k\) si \(k > 1\) ;
> - une **réduction** de rapport \(k\) si \(k < 1\).

Le triangle \(\mathcal{T}\) a des côtés de l’angle droit de 4 et 3 carreaux. Son agrandissement de rapport 2 a des côtés de 8 et 6 carreaux ; sa réduction de rapport 0,5 a des côtés de 2 et 1,5 carreaux.

![](/images/image432.png)

> [!TIP] **Propriété**
>
> Dans un agrandissement ou une réduction, les **mesures des angles** sont conservées.

> [!IMPORTANT] **Remarque**
>
> Les longueurs d’une figure et celles de son agrandissement (ou de sa réduction) sont **proportionnelles** : le coefficient de proportionnalité est \(k\).

## Effet sur les aires et les volumes

> [!TIP] **Propriété**
>
> Soit \(k\) un nombre strictement positif. Lorsque toutes les longueurs d’une figure sont multipliées par \(k\) :
> - les **aires** sont multipliées par \(k^2\) (c’est-à-dire \(k \times k\)) ;
> - les **volumes** sont multipliés par \(k^3\) (c’est-à-dire \(k \times k \times k\)).

{{% details title="Exemple 1 (aire)" closed="true" %}}
Un rectangle mesure 3 cm sur 2 cm : son aire est \(3 \times 2 = 6\) cm². On l’agrandit avec le rapport \(k = 3\) : il mesure alors 9 cm sur 6 cm et son aire est \(9 \times 6 = 54\) cm².

On retrouve bien \(54 = 6 \times 9 = 6 \times 3^2\) : l’aire a été multipliée par \(3^2 = 9\), et non par 3.
{{% /details %}}

{{% details title="Exemple 2 (volume)" closed="true" %}}
Un pavé droit mesure 1 cm, 2 cm et 3 cm : son volume est \(1 \times 2 \times 3 = 6\) cm³. Agrandi avec le rapport \(k = 3\), il mesure 3 cm, 6 cm et 9 cm, et son volume est \(3 \times 6 \times 9 = 162\) cm³.

On a bien \(162 = 6 \times 27 = 6 \times 3^3\) : le volume a été multiplié par \(3^3 = 27\).
{{% /details %}}

## Calculer avec un rapport

> [!NOTE] **Méthode — Utiliser un rapport d’agrandissement ou de réduction**
>
> - Pour trouver le rapport \(k\), on divise une longueur de la nouvelle figure par la longueur correspondante de la figure de départ.
> - On multiplie ensuite les longueurs par \(k\), les aires par \(k^2\), les volumes par \(k^3\) ; les angles ne changent pas.

> [!NOTE] **Exercice résolu**
>
> Une maquette de bateau est une réduction du bateau réel. Le bateau mesure 24 m de long et la maquette 40 cm.
> 1. Calculer le rapport de réduction.
> 2. Le mât de la maquette mesure 15 cm. Quelle est la hauteur du mât réel ?
> 3. La voile de la maquette a une aire de 120 cm². Quelle est l’aire de la voile réelle, en m² ?

{{% details title="Solution commentée" closed="true" %}}
1. On exprime les deux longueurs dans la même unité : \(24\) m \(= 2\,400\) cm. Le rapport est \(k = \dfrac{40}{2\,400} = \dfrac{1}{60}\).
2. On passe de la maquette au bateau en multipliant par \(60\) : \(15 \times 60 = 900\) cm, soit \(9\) m.
3. Les aires sont multipliées par \(60^2 = 3\,600\) : \(120 \times 3\,600 = 432\,000\) cm². Comme \(1\) m² \(= 10\,000\) cm², l’aire de la voile réelle est \(43{,}2\) m².
{{% /details %}}
