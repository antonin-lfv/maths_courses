---
title: 'Variations d’une quantité'
weight: 2
cascade:
  type: docs
---

Dans cette page, une grandeur passe d’une **valeur initiale** \(V_0\) à une **valeur finale** \(V_1\), toutes deux strictement positives.

## Variation absolue et variation relative

> [!TIP] **Définitions**
>
> - La **variation absolue** de \(V_0\) à \(V_1\) est la différence \(V_1 - V_0\). Elle s’exprime dans l’unité de la grandeur.
> - La **variation relative**, ou **taux d’évolution**, de \(V_0\) à \(V_1\) est le quotient
> \[
t = \frac{V_1 - V_0}{V_0}.
\]
> Il est sans unité et s’exprime souvent en pourcentage.

> [!IMPORTANT] **Remarques**
>
> - Si \(t > 0\), il s’agit d’une **augmentation** (hausse) ; si \(t < 0\), d’une **diminution** (baisse).
> - Le taux d’évolution ne dépend pas de l’unité choisie, ce qui permet de comparer des évolutions de grandeurs très différentes.

{{% details title="Exemple" closed="true" %}}
Le prix d’un abonnement passe de \(45\) € à \(54\) €. La variation absolue est \(54 - 45 = 9\) € et le taux d’évolution est \(t = \dfrac{9}{45} = 0{,}2\), soit une hausse de \(20\,\%\).

Une population de bactéries passe de \(2\,500\) à \(2\,150\) : \(t = \dfrac{2\,150 - 2\,500}{2\,500} = -0{,}14\), soit une baisse de \(14\,\%\).
{{% /details %}}

## Coefficient multiplicateur

> [!TIP] **Propriété**
>
> Soit \(t\) un réel strictement supérieur à \(-1\). Une évolution de taux \(t\) se traduit par
> \[
V_1 = (1 + t) \times V_0.
\]
> Le nombre \(CM = 1 + t\) est appelé **coefficient multiplicateur** associé à cette évolution.

{{% details title="Démonstration" closed="true" %}}
\(t = \dfrac{V_1 - V_0}{V_0} \iff tV_0 = V_1 - V_0 \iff V_1 = V_0 + tV_0 = (1 + t)V_0\).
{{% /details %}}

> [!TIP] **Conséquences**
>
> - Si \(CM > 1\), l’évolution est une **hausse** ; si \(0 < CM < 1\), c’est une **baisse** ; si \(CM = 1\), la grandeur est **stable**.
> - Augmenter de \(a\,\%\) revient à multiplier par \(1 + \frac{a}{100}\) ; diminuer de \(a\,\%\) revient à multiplier par \(1 - \frac{a}{100}\).

{{% details title="Exemple" closed="true" %}}
- Une hausse de \(8\,\%\) correspond à \(CM = 1{,}08\) ; une baisse de \(35\,\%\) à \(CM = 0{,}65\).
- \(CM = 0{,}97\) correspond à une baisse de \(3\,\%\) ; \(CM = 2{,}5\) à une hausse de \(150\,\%\).
{{% /details %}}

## Calculer avec un taux d’évolution

> [!NOTE] **Méthode 1 — Calculer une valeur finale ou une valeur initiale**
>
> 1. Un téléviseur coûte \(480\) €. Son prix baisse de \(15\,\%\). Calculer le nouveau prix.
> 2. Après une hausse de \(6\,\%\), un loyer s’élève à \(689\) €. Quel était le loyer avant la hausse ?

{{% details title="Solution commentée" closed="true" %}}
1. \(CM = 1 - 0{,}15 = 0{,}85\), donc \(V_1 = 480 \times 0{,}85 = 408\) €.
2. \(CM = 1{,}06\) et \(V_1 = 1{,}06 \times V_0 = 689\), donc \(V_0 = \dfrac{689}{1{,}06} = 650\) €. *(Attention : on ne retire pas \(6\,\%\) de \(689\), car le pourcentage s’applique à la valeur initiale.)*
{{% /details %}}

> [!NOTE] **Méthode 2 — Déterminer un taux d’évolution**
>
> Le nombre d’abonnés d’une médiathèque est passé de \(1\,840\) à \(2\,116\) en un an. Déterminer le coefficient multiplicateur et le taux d’évolution.

{{% details title="Solution commentée" closed="true" %}}
\(CM = \dfrac{V_1}{V_0} = \dfrac{2\,116}{1\,840} = 1{,}15\), donc \(t = CM - 1 = 0{,}15\) : le nombre d’abonnés a augmenté de \(15\,\%\). On peut aussi calculer directement \(t = \dfrac{2\,116 - 1\,840}{1\,840} = \dfrac{276}{1\,840} = 0{,}15\).
{{% /details %}}
