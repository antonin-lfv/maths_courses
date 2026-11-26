---
title: 'Conditionnement et indépendance'
weight: 1
cascade:
  type: docs
---

## Rappel : probabilités conditionnelles

> [!TIP] **Définition**
>
> Soient \(A\) et \(B\) deux évènements tels que \(P(B) \neq 0\). La **probabilité conditionnelle de \(A\) sachant \(B\)** est le nombre, noté \(P_B(A)\), défini par
> \[
P_B(A) = \frac{P(A \cap B)}{P(B)}.
\]

> [!TIP] **Propriété (formule de Bayes)**
>
> Soient \(A\) et \(B\) deux évènements tels que \(P(A) \neq 0\) et \(P(B) \neq 0\). On a \(P(A \cap B) = P_B(A) \times P(B) = P_A(B) \times P(A)\), ou encore
> \[
P_B(A) = \frac{P_A(B) \times P(A)}{P(B)}.
\]

{{% details title="Exemple" closed="true" %}}
On donne \(P(A) = 0{,}4\), \(P_A(B) = 0{,}3\) et \(P_{\overline{A}}(B) = 0{,}5\). Dans l’arbre pondéré, \(P(B) = 0{,}4 \times 0{,}3 + 0{,}6 \times 0{,}5 = 0{,}42\). Alors
\[
P_B(A) = \frac{P_A(B) \times P(A)}{P(B)} = \frac{0{,}12}{0{,}42} = \frac{2}{7}.
\]
{{% /details %}}

> [!TIP] **Définition**
>
> On dit que deux évènements \(A\) et \(B\) de probabilités non nulles sont **indépendants** lorsque \(P(A \cap B) = P(A) \times P(B)\).

> [!TIP] **Propriété**
>
> - \(A\) et \(B\) sont indépendants si et seulement si \(P_B(A) = P(A)\).
> - \(A\) et \(B\) sont indépendants si et seulement si \(P_A(B) = P(B)\).

> [!IMPORTANT] **Remarque**
>
> Dire que \(A\) et \(B\) sont indépendants, c’est dire que savoir que \(B\) est réalisé ne modifie pas la probabilité de \(A\).

## Théorème des probabilités totales

> [!TIP] **Propriété (admise) — théorème des probabilités totales**
>
> On considère un univers \(\Omega\) et \(\{A_1, A_2, \dots, A_n\}\) une **partition** de l’univers en \(n\) évènements \(A_1, A_2, \dots, A_n\) de probabilités non nulles (l’intersection des évènements deux à deux est vide et \(\Omega = A_1 \cup A_2 \cup \dots \cup A_n\)). Pour tout évènement \(B\) de \(\Omega\) :
> \[
P(B) = P(B \cap A_1) + P(B \cap A_2) + \dots + P(B \cap A_n) = P(A_1) \times P_{A_1}(B) + \dots + P(A_n) \times P_{A_n}(B).
\]

## Utiliser les probabilités conditionnelles

> [!NOTE] **Méthode 1 — Réinvestir les probabilités conditionnelles**
>
> Dans une salle de sport, 60 % des adhérents sont des femmes. 30 % des femmes et 45 % des hommes ont pris un abonnement annuel. On choisit un adhérent au hasard ; on note \(F\) « l’adhérent est une femme » et \(A\) « l’adhérent a un abonnement annuel ».
> 1. Traduire l’énoncé par des probabilités et calculer \(P(F \cap A)\) et \(P(A)\).
> 2. Un adhérent a un abonnement annuel. Quelle est la probabilité que ce soit une femme ?
> 3. Les évènements \(F\) et \(A\) sont-ils indépendants ?

{{% details title="Solution commentée" closed="true" %}}
1. \(P(F) = 0{,}6\), \(P_F(A) = 0{,}3\), \(P_{\overline{F}}(A) = 0{,}45\). \(P(F \cap A) = 0{,}6 \times 0{,}3 = 0{,}18\) et, par la formule des probabilités totales, \(P(A) = 0{,}18 + 0{,}4 \times 0{,}45 = 0{,}36\).
2. \(P_A(F) = \dfrac{P(F \cap A)}{P(A)} = \dfrac{0{,}18}{0{,}36} = 0{,}5\).
3. \(P(F) \times P(A) = 0{,}6 \times 0{,}36 = 0{,}216 \neq 0{,}18 = P(F \cap A)\) : \(F\) et \(A\) ne sont pas indépendants.
{{% /details %}}

> [!NOTE] **Méthode 2 — Utiliser la formule des probabilités totales**
>
> Une maladie touche 2 % d’une population. Un test de dépistage est positif dans 95 % des cas chez une personne malade, et dans 4 % des cas chez une personne non malade. On note \(M\) « la personne est malade » et \(T\) « le test est positif ».
> 1. Calculer la probabilité que le test soit positif.
> 2. Une personne a un test positif. Quelle est la probabilité qu’elle soit malade ? Commenter.

{{% details title="Solution commentée" closed="true" %}}
1. \(\{M, \overline{M}\}\) est une partition de l’univers. \(P(T) = P(M) \times P_M(T) + P(\overline{M}) \times P_{\overline{M}}(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}04 = 0{,}019 + 0{,}0392 = 0{,}0582\).
2. D’après la formule de Bayes, \(P_T(M) = \dfrac{0{,}019}{0{,}0582} \approx 0{,}326\). Moins d’un test positif sur trois correspond à une personne malade : comme la maladie est rare, les « faux positifs » sont nombreux par rapport aux vrais positifs.
{{% /details %}}
