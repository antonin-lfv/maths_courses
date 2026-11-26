---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

On interroge \(500\) personnes sur leurs déplacements : \(62\,\%\) utilisent le bus, \(35\,\%\) le vélo et \(20\,\%\) les deux.
1. Combien de personnes utilisent le vélo ?
2. Quelle proportion de personnes n’utilise ni le bus ni le vélo ? Combien de personnes cela représente-t-il ?

{{% details title="Solution" closed="true" %}}
1. \(0{,}35 \times 500 = 175\) personnes.
2. \(p(B \cup V) = 0{,}62 + 0{,}35 - 0{,}20 = 0{,}77\), donc la proportion cherchée est \(1 - 0{,}77 = 0{,}23\), soit \(0{,}23 \times 500 = 115\) personnes.
{{% /details %}}

### Exercice 2

Le prix d’un casque audio passe de \(120\) € à \(138\) €.
1. Calculer le taux d’évolution.
2. Le prix baisse ensuite de \(15\,\%\). Calculer le nouveau prix, puis le taux d’évolution global.

{{% details title="Solution" closed="true" %}}
1. \(t = \dfrac{138 - 120}{120} = \dfrac{18}{120} = 0{,}15\) : hausse de \(15\,\%\).
2. \(138 \times 0{,}85 = 117{,}30\) €. \(CM_G = 1{,}15 \times 0{,}85 = 0{,}977\,5\) : baisse globale de \(2{,}25\,\%\).
{{% /details %}}

### Exercice 3

Une ville comptait \(25\,000\) habitants en 2022. Sa population augmente de \(4\,\%\) par an.
1. Estimer sa population en 2025.
2. Quel est le taux d’évolution global sur ces trois années ?

{{% details title="Solution" closed="true" %}}
1. \(25\,000 \times 1{,}04^3 = 28\,121{,}6\), soit environ \(28\,122\) habitants.
2. \(CM_G = 1{,}04^3 \approx 1{,}124\,9\) : hausse d’environ \(12{,}5\,\%\).
{{% /details %}}

### Exercice 4

Pendant les soldes, un article est vendu \(64\) € après une remise de \(20\,\%\).
1. Quel était son prix avant la remise ?
2. De quel pourcentage faudra-t-il augmenter le prix soldé pour revenir au prix initial ?

{{% details title="Solution" closed="true" %}}
1. \(V_0 \times 0{,}80 = 64\), donc \(V_0 = \dfrac{64}{0{,}8} = 80\) €.
2. \(CM' = \dfrac{1}{0{,}8} = 1{,}25\) : il faudra une hausse de \(25\,\%\).
{{% /details %}}

### Exercice 5

Voici les notes obtenues à un contrôle par les \(20\) élèves d’un groupe.

| Note | \(6\) | \(8\) | \(10\) | \(12\) | \(14\) | \(16\) |
|---|---|---|---|---|---|---|
| Effectif | \(1\) | \(3\) | \(5\) | \(5\) | \(4\) | \(2\) |

1. Calculer la moyenne de la série. Donner l’écart type arrondi au dixième (calculatrice).
2. Déterminer la médiane, les quartiles et l’écart interquartile.
3. Le professeur ajoute \(1\) point à toutes les notes. Que deviennent la moyenne et l’écart type ?

{{% details title="Solution" closed="true" %}}
1. \(\bar{x} = \dfrac{6 + 24 + 50 + 60 + 56 + 32}{20} = \dfrac{228}{20} = 11{,}4\). La calculatrice donne \(V = 7{,}24\) et \(\sigma \approx 2{,}7\).
2. ECC : \(1\,;\,4\,;\,9\,;\,14\,;\,18\,;\,20\). Médiane : moyenne des 10e et 11e notes, qui valent toutes deux \(12\) : \(\text{Méd} = 12\). \(Q_1\) est la 5e note : \(Q_1 = 10\) ; \(Q_3\) est la 15e note : \(Q_3 = 14\). Écart interquartile : \(4\).
3. La moyenne augmente de \(1\) : \(12{,}4\). Les écarts à la moyenne ne changent pas, donc l’écart type reste \(\approx 2{,}7\).
{{% /details %}}
