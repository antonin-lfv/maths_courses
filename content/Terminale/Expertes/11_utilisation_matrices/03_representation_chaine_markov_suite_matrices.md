---
title: "Chaîne de Markov et suite de matrices"
weight: 3
cascade:
  type: docs
---

## Modélisation à l’aide d’une suite de matrices

> [!TIP] **Propriété**
>
> On considère une chaîne de Markov à 2 (respectivement 3) états et \(P\) sa matrice de transition. Soient \({n \geq 1}\), \(i\) et \(j\) des entiers tels que \({1 \leq i \leq 2}\) et \({1 \leq j \leq 2}\) (respectivement \({1 \leq i \leq 3}\) et \({1 \leq j \leq 3}\)).
> La probabilité de passer de l’état \(i\) à l’état \(j\) en \(n\) étapes est égale au terme de la \(i\)-ème ligne et \(j\)-ème colonne de la matrice \(P^n\).

{{% details title="Démonstration (cas de deux états)" closed="true" %}}
On note \({q_{ij}^{(n)} = P_{(X_0 = i)}(X_n = j)}\) la probabilité de passer de \(i\) à \(j\) en \(n\) étapes ; il s’agit de montrer que \(q_{ij}^{(n)}\) est le terme \(ij\) de \(P^n\).
- **Initialisation.** Pour \({n = 1}\), \({q_{ij}^{(1)} = p_{ij}}\) par définition de la matrice de transition.
- **Hérédité.** Supposons la propriété vraie au rang \(n\). Pour aller de \(i\) à \(j\) en \({n + 1}\) étapes, on passe, à l’étape \(n\), soit par l’état 1, soit par l’état 2. D’après la formule des probabilités totales, et comme la transition de l’étape \(n\) à l’étape \({n + 1}\) ne dépend que de l’état à l’étape \(n\) :
\[
q_{ij}^{(n+1)} = q_{i1}^{(n)}p_{1j} + q_{i2}^{(n)}p_{2j},
\]
qui est, d’après l’hypothèse de récurrence, le terme \(ij\) du produit \({P^n \times P = P^{n+1}}\).
- **Conclusion.** La propriété est vraie pour tout \({n \geq 1}\). (Le raisonnement est identique avec trois états.)
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
On reprend la chaîne de Markov à deux états \(S\) (soleil) et \(P\) (pluie) de matrice \({M = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}4 & 0{,}6 \end{pmatrix}}\).
\[
M^2 = \begin{pmatrix} 0{,}72 & 0{,}28 \\ 0{,}56 & 0{,}44 \end{pmatrix}, \qquad M^3 = \begin{pmatrix} 0{,}688 & 0{,}312 \\ 0{,}624 & 0{,}376 \end{pmatrix}.
\]
S’il fait beau aujourd’hui, la probabilité qu’il fasse beau dans trois jours est le terme \((1, 1)\) de \(M^3\), soit \(0{,}688\).
{{% /details %}}

## Étude asymptotique

> [!TIP] **Définition**
>
> On considère une chaîne de Markov à 2 (respectivement 3) états. On note \(\pi_n\) la matrice ligne à 2 (respectivement 3) colonnes dont le terme de la \(j\)-ème colonne est la probabilité que la variable aléatoire \(X_n\) soit égale à \(j\) :
> \[
\begin{gathered}
\pi_n = \begin{pmatrix} P(X_n = 1) & P(X_n = 2) \end{pmatrix} \\[0.3em]
\left(\text{respectivement } \pi_n = \begin{pmatrix} P(X_n = 1) & P(X_n = 2) & P(X_n = 3) \end{pmatrix}\right).
\end{gathered}
\]

> [!IMPORTANT] **Remarque**
>
> La matrice \(\pi_0\) représente la distribution initiale et la matrice \(\pi_n\) la distribution après \(n\) transitions.

> [!TIP] **Propriété**
>
> Pour tout entier naturel \(n\) : \({\pi_{n+1} = \pi_nP}\) et \({\pi_n = \pi_0P^n}\).
>
> S’il existe un entier \(n\) tel que la matrice \(P^n\) ne contient pas de 0, alors la suite \((\pi_n)\) converge vers une matrice \(\pi\) vérifiant \({\pi = \pi P}\), et cette limite ne dépend pas de \(\pi_0\). On dit que la matrice \(\pi\) représente la **distribution invariante** (ou stationnaire) du système.

{{% details title="Démonstration de la relation \({\pi_{n+1} = \pi_nP}\)" closed="true" %}}
Pour deux états, d’après la formule des probabilités totales :
\[
P(X_{n+1} = j) = P(X_n = 1)\,p_{1j} + P(X_n = 2)\,p_{2j},
\]
qui est le terme de la colonne \(j\) du produit \(\pi_nP\). On en déduit \({\pi_n = \pi_0P^n}\) par récurrence, comme pour les suites \({U_{n+1} = AU_n}\). La convergence est admise.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Dire que \(P^n\) ne contient pas de 0 signifie qu’en \(n\) étapes, on peut passer de n’importe quel état à n’importe quel autre.
> - En particulier, si la matrice \(P\) elle-même ne contient pas de 0, la suite \((\pi_n)\) converge.
> - La distribution invariante est une matrice ligne dont la somme des termes vaut 1.

## Calculer des probabilités, chercher l’état stable

> [!NOTE] **Exercice résolu 1 - Calculer des probabilités à l’aide de la matrice de transition**
>
> On reprend la souris de la page précédente, de matrice de transition \({P = \begin{pmatrix} \dfrac{1}{2} & \dfrac{1}{2} & 0 \\ \dfrac{1}{3} & \dfrac{1}{3} & \dfrac{1}{3} \\ 0 & 1 & 0 \end{pmatrix}}\), avec \({\pi_0 = \begin{pmatrix} 1 & 0 & 0 \end{pmatrix}}\).
> 1. Calculer \(\pi_2\) à l’aide d’un produit de matrices.
> 2. Calculer \(P^2\). La souris peut-elle passer de la pièce 1 à la pièce 3 en exactement deux minutes ?

{{% details title="Solution commentée" closed="true" %}}
1. \({\pi_1 = \pi_0P = \begin{pmatrix} \dfrac{1}{2} & \dfrac{1}{2} & 0 \end{pmatrix}}\), puis
\[
\pi_2 = \pi_1P = \begin{pmatrix} \dfrac{1}{4} + \dfrac{1}{6} & \dfrac{1}{4} + \dfrac{1}{6} & \dfrac{1}{6} \end{pmatrix} = \begin{pmatrix} \dfrac{5}{12} & \dfrac{5}{12} & \dfrac{1}{6} \end{pmatrix}.
\]
On retrouve les résultats obtenus avec les probabilités totales.
2. \[
P^2 = \begin{pmatrix} \dfrac{5}{12} & \dfrac{5}{12} & \dfrac{1}{6} \\ \dfrac{5}{18} & \dfrac{11}{18} & \dfrac{1}{9} \\ \dfrac{1}{3} & \dfrac{1}{3} & \dfrac{1}{3} \end{pmatrix}.
\]
Le terme \((1, 3)\) vaut \({\dfrac{1}{6} > 0}\) : la souris peut passer de 1 à 3 en deux minutes (par la pièce 2), avec la probabilité \(\dfrac{1}{6}\). De plus, \(P^2\) ne contient aucun 0 : la suite \((\pi_n)\) converge.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Déterminer une distribution invariante**
>
> On reprend la chaîne « soleil / pluie » de matrice \({M = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}4 & 0{,}6 \end{pmatrix}}\).
> 1. Justifier que la suite \((\pi_n)\) converge.
> 2. Déterminer la distribution invariante et l’interpréter.

{{% details title="Solution commentée" closed="true" %}}
1. La matrice \(M\) ne contient pas de 0 : la suite \((\pi_n)\) converge vers une distribution \(\pi\) qui ne dépend pas du temps qu’il fait le premier jour.
2. On cherche \({\pi = \begin{pmatrix} x & y \end{pmatrix}}\) avec \({x + y = 1}\) et \({\pi = \pi M}\) :
\[
\begin{pmatrix} x & y \end{pmatrix} = \begin{pmatrix} 0{,}8x + 0{,}4y & 0{,}2x + 0{,}6y \end{pmatrix} \iff 0{,}2x = 0{,}4y \iff x = 2y.
\]
Avec \({x + y = 1}\) : \({y = \dfrac{1}{3}}\) et \({x = \dfrac{2}{3}}\). La distribution invariante est \({\pi = \begin{pmatrix} \dfrac{2}{3} & \dfrac{1}{3} \end{pmatrix}}\) : à long terme, il fait beau environ deux jours sur trois. On observe d’ailleurs que les lignes de \(M^3\) (\(0{,}688\) et \(0{,}624\)) se rapprochent de \({\dfrac{2}{3} \approx 0{,}667}\).
{{% /details %}}
