---
title: 'Probabilités conditionnelles et indépendance'
weight: 1
cascade:
  type: docs
---

\((\Omega, \mathcal{A}, P)\) est un espace probabilisé.

## Probabilité conditionnelle

> [!TIP] **Définition**
>
> Soit \(B\) un événement tel que \({P(B) > 0}\). La **probabilité conditionnelle de \(A\) sachant \(B\)** est
>
> \[ P_B(A) = P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}. \]
>
> L’application \({P_B : A \mapsto P_B(A)}\) est une probabilité sur \((\Omega, \mathcal{A})\). Toutes les règles de calcul s’y appliquent, par exemple \({P_B(\overline{A}) = 1 - P_B(A)}\).

Conditionner par \(B\), c’est tenir compte de l’information « \(B\) est réalisé » : l’univers est ramené à \(B\).

> [!TIP] **Théorème - Formule des probabilités composées**
>
> Si \({P(A_1 \cap \dots \cap A_{n-1}) > 0}\), alors
>
> \[ P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1)\,P_{A_1}(A_2)\,P_{A_1 \cap A_2}(A_3) \cdots P_{A_1 \cap \dots \cap A_{n-1}}(A_n). \]
>
> Pour deux événements : \({P(A \cap B) = P(A)P_A(B) = P(B)P_B(A)}\).

Cette formule sert quand l’expérience se déroule par étapes successives : c’est la règle « on multiplie le long des branches » d’un arbre pondéré.

> [!TIP] **Théorème - Formule des probabilités totales**
>
> Soit \((A_i)_{i \in I}\) un système complet d’événements (fini ou dénombrable) de probabilités non nulles. Pour tout événement \(B\) :
>
> \[ P(B) = \sum_{i \in I} P(B \cap A_i) = \sum_{i \in I} P(A_i)\,P_{A_i}(B). \]
>
> Cas le plus courant : \({P(B) = P(A)P_A(B) + P(\overline{A})P_{\overline{A}}(B)}\).

{{% details title="Démonstration" closed="true" %}}
\(B\) est la réunion des événements \({B \cap A_i}\), deux à deux incompatibles. Par \(\sigma\)-additivité, \({P(B) = \sum_i P(B \cap A_i)}\), et \({P(B \cap A_i) = P(A_i)P_{A_i}(B)}\).
{{% /details %}}

> [!TIP] **Théorème - Formule de Bayes**
>
> Avec les mêmes hypothèses et \({P(B) > 0}\) :
>
> \[ P_B(A_j) = \dfrac{P(A_j)\,P_{A_j}(B)}{P(B)} = \dfrac{P(A_j)\,P_{A_j}(B)}{\displaystyle\sum_{i \in I} P(A_i)\,P_{A_i}(B)}. \]

La formule de Bayes « remonte le temps » : connaissant les probabilités des effets sachant les causes, elle donne la probabilité des causes sachant un effet observé.

> [!IMPORTANT] **Remarque**
>
> \(P_B(A)\) et \(P_A(B)\) n’ont aucune raison d’être proches. La probabilité d’être malade sachant qu’un test est positif peut être faible même si la probabilité que le test soit positif sachant qu’on est malade est proche de \(1\).

## Indépendance

> [!TIP] **Définition**
>
> Deux événements \(A\) et \(B\) sont **indépendants** si
>
> \[ P(A \cap B) = P(A)\,P(B). \]
>
> Si \({P(B) > 0}\), cela équivaut à \({P_B(A) = P(A)}\) : savoir que \(B\) est réalisé ne change pas la probabilité de \(A\).

> [!TIP] **Propriété**
>
> Si \(A\) et \(B\) sont indépendants, alors \(A\) et \(\overline{B}\), \(\overline{A}\) et \(B\), \(\overline{A}\) et \(\overline{B}\) le sont aussi.

{{% details title="Démonstration" closed="true" %}}
\({P(A \cap \overline{B}) = P(A) - P(A \cap B) = P(A) - P(A)P(B) = P(A)(1 - P(B)) = P(A)P(\overline{B})}\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Ne pas confondre **indépendants** et **incompatibles**. Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants : \({P(A \cap B) = 0 \neq P(A)P(B)}\).
> - L’indépendance dépend de la probabilité \(P\) : ce n’est pas une propriété ensembliste.

> [!TIP] **Définition - Indépendance mutuelle**
>
> Les événements d’une famille \((A_i)_{i \in I}\) sont **mutuellement indépendants** si, pour toute partie finie \(J\) de \(I\) :
>
> \[ P\left(\bigcap_{i \in J} A_i\right) = \prod_{i \in J} P(A_i). \]
>
> On peut alors remplacer certains \(A_i\) par leur contraire sans perdre l’indépendance. L’indépendance mutuelle entraîne l’indépendance deux à deux, mais la réciproque est fausse.

{{% details title="Exemple" closed="true" %}}
On lance deux fois une pièce équilibrée. Soient \(A\) : « pile au premier lancer », \(B\) : « pile au second », \(C\) : « les deux lancers donnent le même résultat ». Chacun est de probabilité \(\dfrac{1}{2}\), et \({P(A \cap B) = P(A \cap C) = P(B \cap C) = \dfrac{1}{4}}\) : ils sont deux à deux indépendants. Mais \({A \cap B \cap C = A \cap B}\), donc \({P(A \cap B \cap C) = \dfrac{1}{4} \neq \dfrac{1}{8}}\) : ils ne sont pas mutuellement indépendants.
{{% /details %}}

> [!NOTE] **Méthode - Répétition d’épreuves indépendantes**
>
> Quand on répète \(n\) fois, de façon indépendante, une épreuve où un événement a la probabilité \(p\) de se produire :
> - la probabilité qu’il ne se produise jamais est \({(1 - p)^n}\) ;
> - la probabilité qu’il se produise **au moins une fois** est \({1 - (1 - p)^n}\) ;
> - la probabilité qu’il se produise pour la première fois à la \(k\)-ième épreuve est \({(1 - p)^{k-1}p}\).

> [!NOTE] **Exercice résolu - Un test de dépistage**
>
> Une maladie touche \(2\,\%\) d’une population. Un test est positif pour \(95\,\%\) des malades (sensibilité) et pour \(4\,\%\) des personnes saines (faux positifs).
>
> 1. Quelle est la probabilité qu’une personne prise au hasard ait un test positif ?
> 2. Une personne a un test positif. Quelle est la probabilité qu’elle soit malade ?
> 3. Elle refait le test, de façon indépendante conditionnellement à son état, et il est encore positif. Même question.

{{% details title="Solution commentée" closed="true" %}}
Notons \(M\) : « la personne est malade » et \(T\) : « le test est positif ». On a \({P(M) = 0{,}02}\), \({P_M(T) = 0{,}95}\), \({P_{\overline{M}}(T) = 0{,}04}\).

**1.** \({(M, \overline{M})}\) est un système complet. Par la formule des probabilités totales :

\[
P(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}04 = 0{,}019 + 0{,}0392 = 0{,}0582.
\]

**2.** Par la formule de Bayes :

\[
P_T(M) = \dfrac{0{,}019}{0{,}0582} \approx 0{,}326.
\]

Malgré un test fiable, une personne positive n’a qu’environ une chance sur trois d’être malade : la maladie étant rare, les faux positifs (\(3{,}92\,\%\) de la population) sont plus nombreux que les vrais positifs (\(1{,}9\,\%\)).

**3.** Notons \(T_2\) : « les deux tests sont positifs ». Par indépendance conditionnelle, \({P_M(T_2) = 0{,}95^2 = 0{,}9025}\) et \({P_{\overline{M}}(T_2) = 0{,}04^2 = 0{,}0016}\).

\[
P_{T_2}(M) = \dfrac{0{,}02 \times 0{,}9025}{0{,}02 \times 0{,}9025 + 0{,}98 \times 0{,}0016} = \dfrac{0{,}01805}{0{,}01805 + 0{,}001568} \approx 0{,}920.
\]

Un second test positif fait passer la probabilité d’être malade à environ \(92\,\%\).
{{% /details %}}
