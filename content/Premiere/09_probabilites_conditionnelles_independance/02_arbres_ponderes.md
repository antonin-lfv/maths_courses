---
title: 'Arbres pondérés'
weight: 2
cascade:
  type: docs
---

\(P\) est une loi de probabilité sur un univers \(\Omega\).

## Règles de calcul dans un arbre pondéré

> [!TIP] **Propriétés**  
> Dans un arbre pondéré :  
> - La somme des probabilités des branches issues d’un même nœud est égale à 1.  
> - La probabilité de l’évènement correspondant à un chemin est égale au produit des probabilités inscrites sur les branches de ce chemin.

> [!IMPORTANT] **Remarque**  
> Un chemin passant par un évènement \(A\) puis un évènement \(B\) correspond à l’intersection de ces deux évènements, soit \(A \cap B\).

{{% details title="Exemple" closed="true" %}}
Un footballeur tire successivement deux pénaltys.  
\(A\) est l’évènement « Il marque le premier pénalty » et \(B\) l’évènement « Il marque le second pénalty ».  
On représente cette expérience aléatoire sur l’arbre ci-dessous.  

![](/images/image126.png)

\[
P(A \cap B) = P(A) \times P_A(B) = \frac{3}{5} \times \frac{3}{4} = \frac{9}{20}
\]
La probabilité qu’il marque deux buts est égale à \(\frac{9}{20}\).

\[
P(\overline{A} \cap B) = P(\overline{A}) \times P_{\overline{A}}(B) = \frac{2}{5} \times \frac{1}{2} = \frac{1}{5}
\]
La probabilité qu’il marque seulement le deuxième pénalty est égale à \(\frac{1}{5}\).
{{% /details %}}


## Formule des probabilités totales

> [!TIP] **Définition et propriété**  
> Soient des évènements non vides \(A_1, A_2, \dots, A_n\) de \(\Omega\), deux à deux disjoints et tels que leur réunion forme l’univers \(\Omega\).  
> Soit \(B\) un évènement.  
> - On dit que \(A_1, A_2, \dots, A_n\) constituent une **partition** de \(\Omega\).  
> - \[
P(B) = P(A_1 \cap B) + P(A_2 \cap B) + \dots + P(A_n \cap B)
\]
> ![](/images/image127.png)

> [!IMPORTANT] **Remarques**  
> - Les évènements \(A\) et \(\overline{A}\) forment une partition de \(\Omega\). On a donc \(P(B) = P(A \cap B) + P(\overline{A} \cap B)\).  
> - Sur un arbre pondéré, la probabilité d’un évènement correspondant à plusieurs chemins est égale à la somme des probabilités des chemins correspondants.

{{% details title="Exemple" closed="true" %}}
Dans l’exemple précédent, la formule des probabilités totales donne :  
\[
P(B) = P(A \cap B) + P(\overline{A} \cap B) = \frac{9}{20} + \frac{1}{5} = \frac{13}{20}.
\]
{{% /details %}}


> [!NOTE] **Exercice résolu 1 – Représenter une situation par un arbre pondéré**  
> Un fabricant de smartphones achète ses écrans chez deux fournisseurs.  
> - 60 % des écrans proviennent du fournisseur A, 40 % du fournisseur B.  
> - Le fournisseur A a un taux d’écrans défectueux de 1 %, le fournisseur B de 2 %.  
> On prélève au hasard un smartphone dans le stock du fabricant.  
> 1. Représenter la situation à l’aide d’un arbre pondéré.  
> 2. Calculer les probabilités des évènements suivants :  
>    a. « Le smartphone provient du fournisseur A et est défectueux. »  
>    b. « Le smartphone provient du fournisseur B et n’est pas défectueux. »

{{% details title="Solution commentée" closed="true" %}}
1. On note \(A\) l’évènement « L’écran provient du fournisseur A »,  
   \(B\) l’évènement « L’écran provient du fournisseur B »  
   et \(D\) l’évènement « L’écran est défectueux ».  

   D’après l’énoncé :
   \[
   P(A) = 0{,}6, \quad P(B) = 0{,}4, \quad P_A(D) = 0{,}01, \quad P_B(D) = 0{,}02.
   \]
   On en déduit :
   \[
   P_A(\overline{D}) = 1 - P_A(D) = 0{,}99, \quad P_B(\overline{D}) = 1 - P_B(D) = 0{,}98.
   \]

   ![](/images/image128.png)

2. a. 
   \[
   P(A \cap D) = P(A) \times P_A(D) = 0{,}6 \times 0{,}01 = 0{,}006
   \]
   La probabilité que l’écran provienne du fournisseur A et soit défectueux est \(0{,}006\).

   b.
   \[
   P(B \cap \overline{D}) = P(B) \times P_B(\overline{D}) = 0{,}4 \times 0{,}98 = 0{,}392
   \]
   La probabilité que l’écran provienne du fournisseur B et ne soit pas défectueux est \(0{,}392\).
{{% /details %}}


> [!NOTE] **Exercice résolu 2 – Utiliser la formule des probabilités totales**  
> Une station de ski des Pyrénées propose deux types de forfaits.  
> - Le forfait A comprend la journée de ski et la visite de l’observatoire.  
> - Le forfait B comprend uniquement la journée de ski.  
> 60 % des skieurs choisissent le forfait A et, parmi eux, 70 % sont étrangers.  
> 50 % des skieurs ayant choisi le forfait B sont étrangers.  
> On note \(E\) l’évènement « Le skieur est étranger ».  
>
> 1. Recopier et compléter l’arbre pondéré ci-dessous.  
> 2. On interroge un skieur au hasard. Calculer la probabilité qu’il soit étranger.
> ![](/images/image129.png)

{{% details title="Solution commentée" closed="true" %}}
1. On complète l’arbre en utilisant le fait que la somme des probabilités des branches issues d’un même nœud est égale à 1.  

![](/images/image130.png)

2. Les évènements \(A\) et \(B\) forment une partition de l’univers.  
   \[
   P(E) = P(A \cap E) + P(B \cap E)
   \]
   \[
   P(E) = P(A) \times P_A(E) + P(B) \times P_B(E)
   \]
   \[
   P(E) = 0{,}6 \times 0{,}7 + 0{,}4 \times 0{,}5 = 0{,}62
   \]
   La probabilité que le skieur soit étranger est donc égale à \(0{,}62\).
{{% /details %}}