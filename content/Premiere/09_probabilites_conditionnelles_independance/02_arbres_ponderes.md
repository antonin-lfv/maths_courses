---
title: 'Arbres pondérés'
weight: 2
cascade:
  type: docs
---

\(P\) est une loi de probabilité sur un univers \(\Omega\).

## Règles de calcul dans un arbre pondéré

> [!TIP] **Propriétés**  
> Dans un arbre pondéré :  
> - la somme des probabilités portées par les branches issues d’un même nœud vaut 1 ;  
> - la probabilité de l’évènement associé à un chemin est égale au produit des probabilités inscrites sur les branches de ce chemin.

> [!IMPORTANT] **Remarque**  
> Sur les branches du deuxième niveau figurent des probabilités conditionnelles : la branche allant de \(A\) à \(B\) porte \(P_A(B)\). Un chemin passant par \(A\) puis par \(B\) représente l’évènement \({A \cap B}\), et la règle du produit traduit \({P(A \cap B) = P(A) \times P_A(B)}\).

{{% details title="Exemple" closed="true" %}}
Une basketteuse tire deux lancers francs, l’un après l’autre.  
On note \(A\) l’évènement « Elle réussit le premier lancer » et \(B\) l’évènement « Elle réussit le second lancer ». L’expérience est décrite par l’arbre ci-dessous.  

![](/images/image210.png)

\[
P(A \cap B) = P(A) \times P_A(B) = \dfrac{4}{5} \times \dfrac{3}{4} = \dfrac{3}{5}
\]
La probabilité qu’elle réussisse les deux lancers est \(\dfrac{3}{5}\).

\[
P(\overline{A} \cap B) = P(\overline{A}) \times P_{\overline{A}}(B) = \dfrac{1}{5} \times \dfrac{1}{2} = \dfrac{1}{10}
\]
La probabilité qu’elle manque le premier lancer et réussisse le second est \(\dfrac{1}{10}\).
{{% /details %}}

## Formule des probabilités totales

> [!TIP] **Définition et propriété**  
> Soient \(A_1, A_2, \dots, A_n\) des évènements non vides de \(\Omega\), deux à deux disjoints, dont la réunion est \(\Omega\).  
> - On dit que \(A_1, A_2, \dots, A_n\) forment une **partition** de \(\Omega\).  
> - Pour tout évènement \(B\) :
> \[
P(B) = P(A_1 \cap B) + P(A_2 \cap B) + \dots + P(A_n \cap B)
\]
> ![](/images/image211.png)

> [!IMPORTANT] **Remarques**  
> - Pour tout évènement \(A\) (avec \({A \neq \varnothing}\) et \({A \neq \Omega}\)), \(A\) et \(\overline{A}\) forment une partition de \(\Omega\). On a donc \({P(B) = P(A \cap B) + P(\overline{A} \cap B)}\).  
> - Sur un arbre pondéré, la probabilité d’un évènement associé à plusieurs chemins est la somme des probabilités de ces chemins.

{{% details title="Exemple" closed="true" %}}
Avec l’arbre de l’exemple précédent, la formule des probabilités totales donne la probabilité que la basketteuse réussisse le second lancer :  
\[
P(B) = P(A \cap B) + P(\overline{A} \cap B) = \dfrac{3}{5} + \dfrac{1}{10} = \dfrac{7}{10}.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu 1 - Représenter une situation par un arbre pondéré**  
> Un fabricant de vélos électriques se fournit en batteries auprès de deux entreprises.  
> - 70 % des batteries viennent de l’entreprise A, les autres de l’entreprise B.  
> - 3 % des batteries de A sont défectueuses, contre 5 % de celles de B.  
> On choisit au hasard un vélo dans le stock.  
> 1. Représenter la situation par un arbre pondéré.  
> 2. Calculer la probabilité des évènements suivants :  
>    a. « La batterie vient de A et est défectueuse » ;  
>    b. « La batterie vient de B et n’est pas défectueuse ».

{{% details title="Solution commentée" closed="true" %}}
1. On note \(A\) l’évènement « La batterie vient de l’entreprise A », \(B\) l’évènement « La batterie vient de l’entreprise B » et \(D\) l’évènement « La batterie est défectueuse ».  

   L’énoncé donne :
   \[
   \begin{gathered}
   P(A) = 0{,}7, \qquad P(B) = 1 - 0{,}7 = 0{,}3, \qquad P_A(D) = 0{,}03, \\[0.3em]
   P_B(D) = 0{,}05.
   \end{gathered}
   \]
   On complète avec les évènements contraires :
   \[
   P_A(\overline{D}) = 1 - 0{,}03 = 0{,}97, \quad P_B(\overline{D}) = 1 - 0{,}05 = 0{,}95.
   \]

   ![](/images/image212.png)

2. a. On suit le chemin \(A\) puis \(D\) :
   \[
   P(A \cap D) = P(A) \times P_A(D) = 0{,}7 \times 0{,}03 = 0{,}021
   \]

   b. On suit le chemin \(B\) puis \(\overline{D}\) :
   \[
   P(B \cap \overline{D}) = P(B) \times P_B(\overline{D}) = 0{,}3 \times 0{,}95 = 0{,}285
   \]
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Utiliser la formule des probabilités totales**  
> Un cinéma propose deux tarifs : réduit ou plein.  
> 35 % des spectateurs paient le tarif réduit ; parmi eux, 80 % achètent du pop-corn.  
> Parmi les spectateurs au plein tarif, 40 % achètent du pop-corn.  
> On note \(R\) l’évènement « Le spectateur paie le tarif réduit » et \(C\) l’évènement « Le spectateur achète du pop-corn ».  
>
> 1. Recopier et compléter l’arbre pondéré ci-dessous.  
> 2. On choisit un spectateur au hasard. Calculer la probabilité qu’il achète du pop-corn.
> ![](/images/image213.png)

{{% details title="Solution commentée" closed="true" %}}
1. Sur chaque nœud, la somme des probabilités des branches vaut 1 : \({P(\overline{R}) = 1 - 0{,}35 = 0{,}65}\), \({P_R(\overline{C}) = 1 - 0{,}8 = 0{,}2}\) et \({P_{\overline{R}}(\overline{C}) = 1 - 0{,}4 = 0{,}6}\).  

![](/images/image214.png)

2. \(R\) et \(\overline{R}\) forment une partition de l’univers. D’après la formule des probabilités totales :  
   \[
   P(C) = P(R \cap C) + P(\overline{R} \cap C)
   \]
   \[
   P(C) = P(R) \times P_R(C) + P(\overline{R}) \times P_{\overline{R}}(C)
   \]
   \[
   P(C) = 0{,}35 \times 0{,}8 + 0{,}65 \times 0{,}4 = 0{,}28 + 0{,}26 = 0{,}54
   \]
   La probabilité que le spectateur achète du pop-corn est \(0{,}54\).
{{% /details %}}
