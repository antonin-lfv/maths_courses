---
title: 'Probabilités conditionnelles'
weight: 1
cascade:
  type: docs
---

Dans tout ce chapitre, \(P\) est une loi de probabilité sur un univers \(\Omega\).

## Probabilité de B sachant A

> [!TIP] **Définition**  
> Soient \(A\) et \(B\) deux évènements, avec \({P(A) \neq 0}\).  
> La probabilité que \(B\) soit réalisé sachant que \(A\) est réalisé est notée \(P_A(B)\) ; elle est définie par :  
>
> \[
P_A(B) = \dfrac{P(A \cap B)}{P(A)}.
\]

> [!IMPORTANT] **Remarque**  
> \(P_A(B)\) se lit « probabilité de \(B\) sachant \(A\) ». Savoir que \(A\) est réalisé revient à restreindre l’univers à \(A\) : on cherche la part de \(B\) **à l’intérieur de** \(A\).

{{% details title="Exemples" closed="true" %}}
On lance un dé équilibré à six faces.  
On note \(A\) l’évènement « Le résultat est pair » et \(B\) l’évènement « Le résultat est supérieur ou égal à 5 ».  
On a \({A = \{2 ; 4 ; 6\}}\), \({B = \{5 ; 6\}}\) et \({A \cap B = \{6\}}\). Par équiprobabilité :  
\[
P(A) = \dfrac{3}{6} = \dfrac{1}{2} \quad \text{et} \quad P(A \cap B) = \dfrac{1}{6}.
\]
D’où :
\[
P_A(B) = \dfrac{P(A \cap B)}{P(A)} = \dfrac{\dfrac{1}{6}}{\dfrac{1}{2}} = \dfrac{1}{3}.
\]
On le retrouve directement : parmi les trois résultats pairs, un seul (le 6) est supérieur ou égal à 5.

D’autre part :
\[
P(B) = \dfrac{2}{6} = \dfrac{1}{3}, \quad P_B(A) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{\dfrac{1}{6}}{\dfrac{1}{3}} = \dfrac{1}{2}.
\]
Parmi les deux résultats 5 et 6, un seul est pair, d’où \({P_B(A) = \dfrac{1}{2}}\).  
Cet exemple montre qu’en général \({P_A(B) \neq P_B(A)}\) : il ne faut pas confondre les deux.
{{% /details %}}

## Propriétés

> [!TIP] **Propriétés**  
> Soient \(A\) et \(B\) deux évènements de probabilités non nulles.  
> - \(P(A \cap B) = P(A) \times P_A(B) = P(B) \times P_B(A)\)  
> - \({P_A(\overline{B}) = 1 - P_A(B)}\)

{{% details title="Exemples" closed="true" %}}
Dans un lycée, 70 % des élèves sont demi-pensionnaires, les autres sont externes. Parmi les demi-pensionnaires, 40 % suivent une option sportive.  

On choisit un élève au hasard. On note \(D\) l’évènement « L’élève est demi-pensionnaire » et \(S\) l’évènement « L’élève suit une option sportive ».  

\[
P(D \cap S) = P(D) \times P_D(S) = 0{,}7 \times 0{,}4 = 0{,}28
\]

La probabilité que l’élève soit demi-pensionnaire **et** suive une option sportive est \(0{,}28\).  

\[
P_D(\overline{S}) = 1 - P_D(S) = 1 - 0{,}4 = 0{,}6
\]

Sachant que l’élève est demi-pensionnaire, la probabilité qu’il ne suive pas d’option sportive est \(0{,}6\).
{{% /details %}}

> [!NOTE] **Exercice résolu 1 - Déterminer des probabilités conditionnelles**  
> Une urne contient huit boules indiscernables au toucher : cinq bleues et trois jaunes.  
> On tire au hasard deux boules, l’une après l’autre et sans remise.  
> 1. Quelle est la probabilité que la deuxième boule soit bleue, sachant que la première est bleue ?  
> 2. Quelle est la probabilité que les deux boules tirées soient bleues ?

{{% details title="Solution commentée" closed="true" %}}
1. Si la première boule tirée est bleue, il reste sept boules dans l’urne : quatre bleues et trois jaunes.  
   La probabilité de tirer alors une boule bleue est :
   \[
   \dfrac{4}{7}.
   \]

2. On note \(B_1\) : « La première boule est bleue » et \(B_2\) : « La deuxième boule est bleue ».  
   On cherche \({P(B_1 \cap B_2)}\) :
   \[
   P(B_1 \cap B_2) = P(B_1) \times P_{B_1}(B_2).
   \]
   On a \({P(B_1) = \dfrac{5}{8}}\) et, d’après la question 1, \({P_{B_1}(B_2) = \dfrac{4}{7}}\). Donc :
   \[
   P(B_1 \cap B_2) = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}.
   \]
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Calculer des probabilités conditionnelles à partir d’un tableau d’effectifs**  
> Un club de sport compte 120 adhérents, répartis selon leur activité et leur âge :  
>
> |              | Mineur | Majeur | Total |
> |--------------|--------|--------|--------|
> | Natation     | 24     | 36     | 60     |
> | Escalade     | 16     | 44     | 60     |
> | **Total**    | **40** | **80** | **120** |
> 
> On choisit un adhérent au hasard.
> 1. Quelle est la probabilité qu’il soit mineur ?  
> 2. Quelle est la probabilité qu’il soit mineur et pratique l’escalade ?  
> 3. Sachant que l’adhérent est mineur, quelle est la probabilité qu’il pratique l’escalade ?

{{% details title="Solution commentée" closed="true" %}}
On note \(M\) l’évènement « L’adhérent est mineur » et \(E\) l’évènement « L’adhérent pratique l’escalade ».

1. Le tableau indique 40 mineurs sur 120 adhérents :  
   \[
   P(M) = \dfrac{40}{120} = \dfrac{1}{3}.
   \]

2. 16 adhérents sont à la fois mineurs et grimpeurs :  
   \[
   P(M \cap E) = \dfrac{16}{120} = \dfrac{2}{15}.
   \]

3. On applique la définition :
   \[
   P_M(E) = \dfrac{P(M \cap E)}{P(M)} = \dfrac{\dfrac{2}{15}}{\dfrac{1}{3}} = \dfrac{2}{15} \times 3 = \dfrac{2}{5}.
   \]
   On peut aussi lire directement dans la colonne « Mineur » : 16 grimpeurs parmi 40 mineurs, soit \({\dfrac{16}{40} = \dfrac{2}{5}}\).
{{% /details %}}
