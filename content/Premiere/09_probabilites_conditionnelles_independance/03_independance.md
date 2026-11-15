---
title: 'Indépendance'
weight: 3
cascade:
  type: docs
---

\(P\) est une loi de probabilité sur un univers \(\Omega\).

## Évènements indépendants

> [!TIP] **Définition**  
> Deux évènements \(A\) et \(B\) sont dits **indépendants** lorsque :  
> \[
P(A \cap B) = P(A) \times P(B).
\]

> [!TIP] **Propriété**  
> Soient \(A\) et \(B\) deux évènements de probabilités non nulles.  
> \(A\) et \(B\) sont indépendants si et seulement si \(P_B(A) = P(A)\), ce qui équivaut aussi à \(P_A(B) = P(B)\).

> [!IMPORTANT] **Remarques**  
> - L’égalité \(P_B(A) = P(A)\) signifie que savoir que \(B\) est réalisé ne modifie pas la probabilité de \(A\) : \(B\) n’a pas d’influence sur \(A\).  
> - Il ne faut pas confondre évènements **indépendants** et évènements **incompatibles**.  
>   Deux évènements sont incompatibles lorsqu’ils ne peuvent pas se produire en même temps : \(A \cap B = \varnothing\), donc \(P(A \cap B) = 0\).

> [!TIP] **Propriété**  
> Si \(A\) et \(B\) sont indépendants, alors \(\overline{A}\) et \(B\) sont indépendants.

> [!IMPORTANT] **Remarque**  
> Par conséquent, si \(A\) et \(B\) sont indépendants, il en est de même de \(A\) et \(\overline{B}\), ainsi que de \(\overline{A}\) et \(\overline{B}\).

## Succession de deux épreuves indépendantes

> [!TIP] **Définition**  
> Lorsque deux expériences aléatoires ont lieu l’une après l’autre et que le résultat de la première n’a aucune influence sur celui de la seconde, on parle de **succession de deux épreuves indépendantes**.

{{% details title="Exemples" closed="true" %}}
On tire successivement deux boules au hasard dans une urne et on note leurs couleurs.  
- Si l’on remet la première boule dans l’urne avant le second tirage (tirage **avec remise**), l’urne est identique pour les deux tirages : les épreuves sont indépendantes.  
- Si on ne la remet pas (tirage **sans remise**), la composition de l’urne au second tirage dépend de la première boule : les épreuves ne sont pas indépendantes.
{{% /details %}}

> [!TIP] **Propriété (admise)**  
> Dans une succession de deux épreuves indépendantes, la probabilité d’un couple de résultats est égale au produit des probabilités de chacun des deux résultats.

{{% details title="Exemple" closed="true" %}}
On lance une pièce équilibrée, puis un dé cubique équilibré.  
Les deux épreuves sont indépendantes.  
La probabilité d’obtenir « pile » puis le numéro 6 est :
\[
\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu – Étudier l’indépendance de deux évènements**  
> On tire au hasard une carte parmi douze cartes numérotées de 1 à 12. On considère les évènements :  
> \(A\) : « Le numéro est un multiple de 3 »,  
> \(B\) : « Le numéro est inférieur ou égal à 6 »,  
> \(C\) : « Le numéro est inférieur ou égal à 4 ».  
>
> 1. Calculer \(P(A)\).  
> 2.  
>    a. Les évènements \(A\) et \(B\) sont-ils indépendants ? Justifier avec la définition.  
>    b. Même question pour les évènements \(A\) et \(C\).  
> 3. Retrouver les résultats de la question 2 en calculant \(P_B(A)\) et \(P_C(A)\).

{{% details title="Solution commentée" closed="true" %}}
1. \(A = \{3 ; 6 ; 9 ; 12\}\) contient quatre numéros sur douze :
   \[
   P(A) = \frac{4}{12} = \frac{1}{3}.
   \]

2.  
   a. \(A \cap B = \{3 ; 6\}\), donc :  
   \[
   P(A \cap B) = \frac{2}{12} = \frac{1}{6}.
   \]
   Par ailleurs \(P(B) = \frac{6}{12} = \frac{1}{2}\), d’où :
   \[
   P(A) \times P(B) = \frac{1}{3} \times \frac{1}{2} = \frac{1}{6} = P(A \cap B).
   \]
   Les évènements \(A\) et \(B\) sont indépendants.

   b. \(A \cap C = \{3\}\), donc :  
   \[
   P(A \cap C) = \frac{1}{12}.
   \]
   Or \(P(C) = \frac{4}{12} = \frac{1}{3}\) et :
   \[
   P(A) \times P(C) = \frac{1}{3} \times \frac{1}{3} = \frac{1}{9}.
   \]
   Comme \(\frac{1}{12} \neq \frac{1}{9}\), les évènements \(A\) et \(C\) ne sont pas indépendants.

3. Parmi les six cartes de \(B\), deux portent un multiple de 3 :  
   \[
   P_B(A) = \frac{2}{6} = \frac{1}{3} = P(A).
   \]
   On retrouve que \(A\) et \(B\) sont indépendants.

   Parmi les quatre cartes de \(C\), une seule porte un multiple de 3 :  
   \[
   P_C(A) = \frac{1}{4} \neq P(A).
   \]
   On retrouve que \(A\) et \(C\) ne sont pas indépendants.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 – Étudier une répétition d’expériences aléatoires**  
> Dans une ville, 30 % des habitants se rendent au travail à vélo.  
> On interroge au hasard deux habitants ; la population est assez grande pour que l’on considère ces deux choix comme indépendants.  
> 
> 1. Représenter l’expérience par un arbre pondéré.  
> 2. Calculer la probabilité que les deux habitants aillent au travail à vélo.  
> 3. Calculer la probabilité qu’exactement un des deux habitants aille au travail à vélo.

{{% details title="Solution commentée" closed="true" %}}
1. On note \(V_1\) (resp. \(V_2\)) l’évènement « Le premier (resp. le second) habitant va au travail à vélo ». Les épreuves étant indépendantes :
   \[
   P(V_1) = P(V_2) = 0{,}3 \quad \text{et} \quad P(\overline{V_1}) = P(\overline{V_2}) = 1 - 0{,}3 = 0{,}7,
   \]
   et les probabilités du second niveau ne dépendent pas du premier résultat.

   ![](/images/image215.png)

2. On suit le chemin \(V_1\) puis \(V_2\) :
   \[
   P(V_1 \cap V_2) = 0{,}3 \times 0{,}3 = 0{,}09.
   \]

3. Deux chemins conviennent : \(V_1\) puis \(\overline{V_2}\), ou \(\overline{V_1}\) puis \(V_2\). On additionne leurs probabilités :
   \[
   P(V_1 \cap \overline{V_2}) + P(\overline{V_1} \cap V_2) = 0{,}3 \times 0{,}7 + 0{,}7 \times 0{,}3 = 2 \times 0{,}21 = 0{,}42.
   \]
{{% /details %}}
