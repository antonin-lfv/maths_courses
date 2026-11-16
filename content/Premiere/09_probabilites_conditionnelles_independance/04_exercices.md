---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Une salle de sport compte 240 adhérents, qui pratiquent soit le yoga, soit le cardio. La répartition est donnée ci-dessous.

|  | Yoga | Cardio | Total |
|---|---|---|---|
| Femmes | 60 | 70 | 130 |
| Hommes | 30 | 80 | 110 |
| Total | 90 | 150 | 240 |

On choisit un adhérent au hasard. On note \(F\) l’évènement « l’adhérent est une femme » et \(Y\) l’évènement « l’adhérent pratique le yoga ».
1. Calculer \(P(Y)\) et \(P(F \cap Y)\).
2. Calculer \(P_F(Y)\) et \(P_Y(F)\), et interpréter ces deux probabilités.

{{% details title="Solution" closed="true" %}}
1. \(P(Y) = \dfrac{90}{240} = \dfrac{3}{8}\) et \(P(F \cap Y) = \dfrac{60}{240} = \dfrac{1}{4}\).
2. - \(P_F(Y) = \dfrac{60}{130} = \dfrac{6}{13} \approx 0{,}46\) : probabilité qu’un adhérent pratique le yoga **sachant** que c’est une femme.
   - \(P_Y(F) = \dfrac{60}{90} = \dfrac{2}{3}\) : probabilité qu’un adhérent soit une femme **sachant** qu’il pratique le yoga.

On peut vérifier avec la définition : \(P_Y(F) = \dfrac{P(F \cap Y)}{P(Y)} = \dfrac{1/4}{3/8} = \dfrac{2}{3}\).
{{% /details %}}

### Exercice 2

Un jour donné, il pleut avec une probabilité de 0,3. S’il pleut, le bus d’Inès est en retard avec une probabilité de 0,4 ; s’il ne pleut pas, il est en retard avec une probabilité de 0,1. On note \(P\) l’évènement « il pleut » et \(R\) l’évènement « le bus est en retard ».
1. Représenter la situation par un arbre pondéré.
2. Calculer la probabilité que le bus soit en retard.
3. Le bus est en retard. Quelle est la probabilité qu’il ait plu ?

{{% details title="Solution" closed="true" %}}
1.

![](/images/image324.png)

2. \(P\) et \(\overline{P}\) forment une partition de l’univers. D’après la formule des probabilités totales :
\[
P(R) = P(P \cap R) + P(\overline{P} \cap R) = 0{,}3 \times 0{,}4 + 0{,}7 \times 0{,}1 = 0{,}12 + 0{,}07 = 0{,}19.
\]
3. \(P_R(P) = \dfrac{P(P \cap R)}{P(R)} = \dfrac{0{,}12}{0{,}19} = \dfrac{12}{19} \approx 0{,}63\).
{{% /details %}}

### Exercice 3

\(A\) et \(B\) sont deux évènements tels que \(P(A) = 0{,}3\), \(P_A(B) = 0{,}6\) et \(P_{\overline{A}}(B) = 0{,}2\). Calculer \(P(A \cap B)\), \(P(B)\) et \(P_B(A)\).

{{% details title="Solution" closed="true" %}}
- \(P(A \cap B) = P(A) \times P_A(B) = 0{,}3 \times 0{,}6 = 0{,}18\).
- \(P(\overline{A} \cap B) = P(\overline{A}) \times P_{\overline{A}}(B) = 0{,}7 \times 0{,}2 = 0{,}14\), donc, par la formule des probabilités totales, \(P(B) = 0{,}18 + 0{,}14 = 0{,}32\).
- \(P_B(A) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{0{,}18}{0{,}32} = \dfrac{9}{16} = 0{,}5625\).
{{% /details %}}

### Exercice 4

On lance un dé équilibré à six faces. On considère les évènements \(A\) : « le résultat est pair », \(B\) : « le résultat est inférieur ou égal à 4 » et \(C\) : « le résultat est un nombre premier ».
1. Les évènements \(A\) et \(B\) sont-ils indépendants ?
2. Les évènements \(A\) et \(C\) sont-ils indépendants ?

{{% details title="Solution" closed="true" %}}
On a \(A = \{2, 4, 6\}\), \(B = \{1, 2, 3, 4\}\), \(C = \{2, 3, 5\}\), et la loi est équirépartie.

1. \(P(A) = \dfrac{1}{2}\), \(P(B) = \dfrac{4}{6} = \dfrac{2}{3}\) et \(A \cap B = \{2, 4\}\), donc \(P(A \cap B) = \dfrac{1}{3}\). Comme \(P(A) \times P(B) = \dfrac{1}{2} \times \dfrac{2}{3} = \dfrac{1}{3} = P(A \cap B)\), les évènements \(A\) et \(B\) sont indépendants.
2. \(P(C) = \dfrac{1}{2}\) et \(A \cap C = \{2\}\), donc \(P(A \cap C) = \dfrac{1}{6}\). Or \(P(A) \times P(C) = \dfrac{1}{4} \neq \dfrac{1}{6}\) : \(A\) et \(C\) ne sont pas indépendants.
{{% /details %}}

### Exercice 5

\(A\) et \(B\) sont deux évènements indépendants tels que \(P(A) = 0{,}4\) et \(P(B) = 0{,}5\). Calculer \(P(A \cap B)\), \(P(A \cup B)\) et \(P(\overline{A} \cap B)\).

{{% details title="Solution" closed="true" %}}
- Par indépendance, \(P(A \cap B) = 0{,}4 \times 0{,}5 = 0{,}2\).
- \(P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}4 + 0{,}5 - 0{,}2 = 0{,}7\).
- Si \(A\) et \(B\) sont indépendants, \(\overline{A}\) et \(B\) le sont aussi : \(P(\overline{A} \cap B) = 0{,}6 \times 0{,}5 = 0{,}3\). (On retrouve \(P(B) - P(A \cap B) = 0{,}5 - 0{,}2 = 0{,}3\).)
{{% /details %}}

### Exercice 6

Une archère atteint la cible avec une probabilité de 0,7. Elle tire deux flèches ; on admet que les deux tirs sont des épreuves indépendantes. Calculer la probabilité :
1. qu’elle atteigne deux fois la cible ;
2. qu’elle atteigne la cible exactement une fois ;
3. qu’elle atteigne la cible au moins une fois.

{{% details title="Solution" closed="true" %}}
On note \(S\) « la flèche atteint la cible » ; pour chaque tir, \(P(S) = 0{,}7\) et \(P(\overline{S}) = 0{,}3\). Les tirs étant indépendants, la probabilité d’une issue \((x_1, x_2)\) est le produit des probabilités.

1. \(P\big((S, S)\big) = 0{,}7^2 = 0{,}49\).
2. Deux issues conviennent, \((S, \overline{S})\) et \((\overline{S}, S)\) : \(0{,}7 \times 0{,}3 + 0{,}3 \times 0{,}7 = 0{,}42\).
3. L’évènement contraire est « aucune flèche n’atteint la cible », de probabilité \(0{,}3^2 = 0{,}09\). La probabilité cherchée est \(1 - 0{,}09 = 0{,}91\) (on retrouve \(0{,}49 + 0{,}42\)).
{{% /details %}}
