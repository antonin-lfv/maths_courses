---
title: 'Indépendance'
weight: 3
cascade:
  type: docs
---

\(P\) est une loi de probabilité sur un univers \(\Omega\).

## Évènements indépendants

> [!TIP] **Définition**  
> On dit que deux évènements \(A\) et \(B\) sont indépendants lorsque :  
> \[
P(A \cap B) = P(A) \times P(B).
\]

> [!TIP] **Propriété**  
> Soient \(A\) et \(B\) deux évènements de probabilités non nulles.  
> \(A\) et \(B\) sont indépendants si et seulement si :  
> \[
P_B(A) = P(A) \iff P_A(B) = P(B).
\]

> [!IMPORTANT] **Remarques**  
> - \(P_B(A) = P(A)\) signifie que la réalisation ou non de l’évènement \(B\) n’a pas d’influence sur la réalisation de \(A\).  
> - Il ne faut pas confondre **évènements indépendants** et **évènements incompatibles**.  
>   Deux évènements sont incompatibles lorsque \(P(A \cap B) = 0\), c’est-à-dire qu’ils ne peuvent pas se réaliser simultanément.

> [!TIP] **Propriété**  
> Si \(A\) et \(B\) sont deux évènements indépendants, alors \(\overline{A}\) et \(B\) sont indépendants.

> [!IMPORTANT] **Remarque**  
> Si \(A\) et \(B\) sont deux évènements indépendants, alors \(A\) et \(\overline{B}\) sont aussi indépendants, ainsi que \(\overline{A}\) et \(\overline{B}\).


## Succession de deux épreuves indépendantes

> [!TIP] **Définition**  
> Lorsque deux expériences aléatoires se succèdent et que les résultats de la première expérience n’ont aucune influence sur les résultats de la seconde, on dit qu’il s’agit d’une **succession de deux épreuves indépendantes**.

{{% details title="Exemples" closed="true" %}}
On tire au hasard successivement deux cartes dans un jeu de cartes et on note les deux cartes obtenues.  
- Si l’on remet la carte tirée dans le paquet, les deux tirages sont indépendants.  
- Sinon, le contenu du paquet après le premier tirage dépend de la carte tirée : les deux tirages ne sont pas indépendants.
{{% /details %}}

> [!TIP] **Propriété (admise)**  
> Lorsque deux épreuves sont indépendantes, la probabilité d’un couple de résultats est égale au produit des probabilités de chacun d’entre eux.

{{% details title="Exemple" closed="true" %}}
On lance successivement deux fois un dé cubique non truqué.  
Il s’agit d’une succession de deux épreuves indépendantes.  
La probabilité d’obtenir deux fois le numéro 6 est :
\[
\frac{1}{6} \times \frac{1}{6} = \frac{1}{36}.
\]
{{% /details %}}


> [!NOTE] **Exercice résolu – Étudier l’indépendance de deux évènements**  
> Une urne contient quatre jetons rouges indiscernables au toucher numérotés de 1 à 4, trois jetons verts numérotés de 5 à 7 et un jeton noir numéroté 8.  
> On tire au hasard un jeton et on considère les évènements :  
> \(A\) : « Obtenir un numéro pair »,  
> \(B\) : « Obtenir un jeton rouge »,  
> \(C\) : « Obtenir un jeton vert ».  
>
> 1. Calculer \(P(A)\).  
> 2.  
>    a. Les évènements \(A\) et \(B\) sont-ils indépendants ? Justifier à l’aide de la définition.  
>    b. Reprendre la question précédente avec les évènements \(A\) et \(C\).  
> 3. Retrouver les résultats de la question 2 en calculant \(P_B(A)\) et \(P_C(A)\).

{{% details title="Solution commentée" closed="true" %}}
1. Il y a quatre jetons dont le numéro est pair :
   \[
   P(A) = \frac{4}{8} = \frac{1}{2}.
   \]

2.  
   a. \(A \cap B\) est l’évènement « Obtenir un numéro pair et rouge » :  
   \[
   P(A \cap B) = \frac{2}{8} = \frac{1}{4}.
   \]
   On a \(P(B) = \frac{1}{2}\), donc :
   \[
   P(A) \times P(B) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4} = P(A \cap B).
   \]
   Les évènements \(A\) et \(B\) sont indépendants.

   b. \(A \cap C\) est l’évènement « Obtenir un numéro pair et vert » :  
   \[
   P(A \cap C) = \frac{1}{8}.
   \]
   Or :
   \[
   P(A) \times P(C) = \frac{1}{2} \times \frac{3}{8} = \frac{3}{16}.
   \]
   Donc \(P(A \cap C) \neq P(A) \times P(C)\).  
   Les évènements \(A\) et \(C\) ne sont pas indépendants.

3. Parmi les quatre jetons rouges, deux ont un numéro pair.  
   Parmi les huit jetons au total, quatre ont un numéro pair.  
   \[
   P_B(A) = \frac{1}{2} = P(A).
   \]
   Donc \(A\) et \(B\) sont indépendants.

   En revanche, parmi les trois jetons verts, un seul possède un numéro pair.  
   \[
   P_C(A) = \frac{1}{3} \neq P(A).
   \]
   Donc \(A\) et \(C\) ne sont pas indépendants.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 – Étudier une répétition d’expériences aléatoires**  
> Dans une population, 13 % des personnes sont gauchères.  
> On interroge au hasard deux individus et on suppose la population suffisamment importante pour considérer ces deux épreuves indépendantes.  
> 
> 1. Représenter cette expérience aléatoire à l’aide d’un arbre pondéré.  
> 2. Calculer la probabilité que les deux personnes soient gauchères.  
> 3. Calculer la probabilité qu’exactement l’une de ces personnes soit gauchère.

{{% details title="Solution commentée" closed="true" %}}
1. La probabilité qu’une personne interrogée au hasard soit gauchère est égale à \(0{,}13\).  
   On a donc :
   \[
   P(G_1) = P(G_2) = 0{,}13 \quad \text{et} \quad P(\overline{G_1}) = P(\overline{G_2}) = 1 - 0{,}13 = 0{,}87.
   \]

   ![](/images/image131.png)

2. La probabilité que les deux personnes soient gauchères est :
   \[
   P(G_1 \cap G_2) = 0{,}13 \times 0{,}13 = 0{,}0169.
   \]

3. La probabilité qu’exactement l’une de ces personnes soit gauchère est :
   \[
   P(G_1 \cap \overline{G_2}) + P(\overline{G_1} \cap G_2) = 0{,}13 \times 0{,}87 + 0{,}87 \times 0{,}13 = 2 \times 0{,}13 \times 0{,}87 = 0{,}2262.
   \]
{{% /details %}}