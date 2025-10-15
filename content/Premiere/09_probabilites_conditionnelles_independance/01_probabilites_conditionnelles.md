---
title: 'Probabilités conditionnelles'
weight: 1
cascade:
  type: docs
---

\(P\) est une loi de probabilité sur un univers \(\Omega\).

## Probabilité de B sachant A

> [!TIP] **Définition**  
> Soient \(A\) et \(B\) deux évènements avec \(P(A) \neq 0\).  
> La probabilité que l’évènement \(B\) se réalise, sachant que l’évènement \(A\) est réalisé, est notée \(P_A(B)\) et définie par :  
>
> \[
P_A(B) = \frac{P(A \cap B)}{P(A)}.
\]

> [!IMPORTANT] **Remarque**  
> \(P_A(B)\) se lit « P de B sachant A ».

{{% details title="Exemples" closed="true" %}}
On tire une carte au hasard dans un jeu de 32 cartes.  
On note \(A\) l’évènement « La couleur de la carte est rouge » et \(B\) l’évènement « La carte est un valet ».  
Les tirages étant équiprobables, on a :  
\[
P(A) = \frac{1}{2} \quad \text{et} \quad P(A \cap B) = \frac{2}{32} = \frac{1}{16}.
\]
On a alors :
\[
P_A(B) = \frac{P(A \cap B)}{P(A)} = \frac{\tfrac{1}{16}}{\tfrac{1}{2}} = \frac{1}{8}.
\]
Parmi les seize cartes rouges, il y a deux valets, donc la probabilité de tirer un valet sachant que la carte est rouge est bien \(P_A(B) = \frac{1}{8}\).

Par ailleurs :
\[
P(B) = \frac{4}{32} = \frac{1}{8}, \quad P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{\tfrac{1}{16}}{\tfrac{1}{8}} = \frac{1}{2}.
\]
Parmi les quatre valets, il y a deux cartes rouges, donc \(P_B(A) = \frac{1}{2}\).  
En particulier, \(P_A(B) \neq P_B(A)\).
{{% /details %}}


## Propriétés

> [!TIP] **Propriétés**  
> Soient \(A\) et \(B\) deux évènements de probabilités non nulles.  
> - \(P(A \cap B) = P(A) \times P_A(B) = P(B) \times P_B(A)\)  
> - \(P_A(\overline{B}) = 1 - P_A(B)\)

{{% details title="Exemples" closed="true" %}}
À la montagne, 80 % des vacanciers pratiquent le ski alpin et 20 % la randonnée en raquettes.  
60 % des skieurs et 50 % des marcheurs sont des hommes.  

On choisit un vacancier au hasard et on note \(S\) l’évènement « Le vacancier choisi pratique le ski » et \(H\) l’évènement « Le vacancier choisi est un homme ».  

\[
P(S \cap H) = P(S) \times P_S(H) = 0{,}8 \times 0{,}6 = 0{,}48
\]

La probabilité que le vacancier choisi soit un homme et qu’il pratique le ski est donc \(0{,}48\).  

\[
P_S(\overline{H}) = 1 - P_S(H) = 0{,}4
\]

Si l’on sait que le vacancier choisi pratique le ski, la probabilité que ce soit une femme est égale à \(0{,}4\).
{{% /details %}}


> [!NOTE] **Exercice résolu 1 – Déterminer des probabilités conditionnelles**  
> Une urne contient sept boules : quatre rouges numérotées 1, 2, 3 et 4, et trois vertes numérotées 1, 2 et 3.  
> On tire deux boules au hasard, successivement et sans remise.  
> 1. Quelle est la probabilité que la deuxième boule tirée soit rouge sachant que la première est rouge ?  
> 2. Quelle est la probabilité que les deux boules tirées soient rouges ?

{{% details title="Solution commentée" closed="true" %}}
1. Après avoir tiré une première boule rouge, il reste six boules (trois vertes et trois rouges).  
   La probabilité de tirer une boule rouge est alors :
   \[
   \frac{3}{6} = \frac{1}{2}.
   \]
   Donc la probabilité que la deuxième boule tirée soit rouge sachant que la première est rouge est \( \frac{1}{2} \).

2. Soit \(R_1\) : « La première boule tirée est rouge » et \(R_2\) : « La deuxième boule tirée est rouge ».  
   Alors :
   \[
   P(R_1 \cap R_2) = P(R_1) \times P_{R_1}(R_2).
   \]
   D’après la question 1 :
   \[
   P_{R_1}(R_2) = \frac{1}{2} \quad \text{et} \quad P(R_1) = \frac{4}{7}.
   \]
   Donc :
   \[
   P(R_1 \cap R_2) = \frac{4}{7} \times \frac{1}{2} = \frac{2}{7}.
   \]
{{% /details %}}


> [!NOTE] **Exercice résolu 2 – Calculer des probabilités conditionnelles à partir d’un tableau de fréquences**  
> Le tableau ci-dessous donne la répartition des participants à un stage de survie en Aquitaine, en fonction de leur sexe et de leur département d’origine.  
>
> |              | Homme | Femme | Total |
> |--------------|--------|--------|--------|
> | Gironde      | 18     | 50     | 68     |
> | Landes       | 11     | 21     | 32     |
> | **Total**    | **29** | **71** | **100** |
> 
> On choisit au hasard une fiche parmi les fiches des participants.
> 1. Quelle est la probabilité que ce soit un homme ?  
> 2. Quelle est la probabilité que ce soit un homme originaire des Landes ?  
> 3. Quelle est la probabilité qu’il soit originaire des Landes sachant que c’est un homme ?

{{% details title="Solution commentée" closed="true" %}}
On note \(H\) l’évènement « La fiche est celle d’un homme » et \(L\) l’évènement « La fiche est celle d’un Landais ».

1. D’après le tableau : \(29\) hommes participent au stage.  
   \[
   P(H) = \frac{29}{100} = 0{,}29.
   \]

2. D’après le tableau : \(11\) Landais sont des hommes.  
   \[
   P(H \cap L) = \frac{11}{100} = 0{,}11.
   \]

3. On applique la formule :
   \[
   P_H(L) = \frac{P(H \cap L)}{P(H)} = \frac{0{,}11}{0{,}29} = \frac{11}{29}.
   \]
   On lit aussi directement dans le tableau que parmi les 29 hommes, 11 viennent des Landes, d’où \(P_H(L) = \frac{11}{29}\).
{{% /details %}}