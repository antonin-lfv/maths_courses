---
title: 'Loi uniforme discrète'
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Soit \(X\) une variable aléatoire définie sur un univers \(\Omega\) et à valeurs dans \(\{1\,;\,2\,;\,3\,;\,\dots\,;\,n\}\). On dit que \(X\) **suit la loi uniforme** sur \(\{1\,;\,2\,;\,\dots\,;\,n\}\) lorsque
> \[
\text{pour tout } k \in \{1\,;\,2\,;\,\dots\,;\,n\}, \quad P(X = k) = \dfrac{1}{n}.
\]

{{% details title="Exemples" closed="true" %}}
- On lance un dé équilibré à 6 faces et on note \(X\) le résultat : \(X\) suit la loi uniforme sur \(\{1\,;\,\dots\,;\,6\}\), avec \({P(X = k) = \dfrac{1}{6}}\).
- Une tombola comporte 50 billets numérotés de 1 à 50 ; on tire un billet au hasard et on note \(N\) son numéro : \(N\) suit la loi uniforme sur \(\{1\,;\,\dots\,;\,50\}\). La probabilité que le numéro soit inférieur ou égal à 10 vaut \({\dfrac{10}{50} = 0{,}2}\).
{{% /details %}}

## Espérance

> [!TIP] **Propriété**
>
> Soit \(X\) une variable aléatoire qui suit la loi uniforme sur \(\{1\,;\,2\,;\,\dots\,;\,n\}\). L’espérance mathématique de \(X\) vaut
> \[
E(X) = \dfrac{n + 1}{2}.
\]

{{% details title="Démonstration" closed="true" %}}
\[
E(X) = 1 \times \dfrac{1}{n} + 2 \times \dfrac{1}{n} + \dots + n \times \dfrac{1}{n} = \dfrac{1 + 2 + \dots + n}{n}.
\]
Or \({1 + 2 + \dots + n = \dfrac{n(n + 1)}{2}}\) (somme des termes d’une suite arithmétique). Donc \({E(X) = \dfrac{n(n + 1)}{2n} = \dfrac{n + 1}{2}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’espérance s’interprète comme une moyenne théorique : si l’on répète un grand nombre de fois l’expérience, la moyenne des valeurs obtenues pour \(X\) est très proche de l’espérance.

## Utiliser la loi uniforme

> [!NOTE] **Méthode 1 - Modéliser par une loi uniforme**
>
> Une roue de loterie est partagée en 8 secteurs identiques, numérotés de 1 à 8. On la fait tourner et on note \(X\) le numéro du secteur désigné par la flèche.
> 1. Justifier que \(X\) suit une loi uniforme.
> 2. Calculer \({P(X \geq 6)}\) et \(E(X)\).

{{% details title="Solution commentée" closed="true" %}}
1. Les 8 secteurs étant identiques, ils ont tous la même probabilité \(\dfrac{1}{8}\) d’être désignés : \(X\) suit la loi uniforme sur \(\{1\,;\,\dots\,;\,8\}\).
2. \(P(X \geq 6) = P(X = 6) + P(X = 7) + P(X = 8) = \dfrac{3}{8}\) et \({E(X) = \dfrac{8 + 1}{2} = 4{,}5}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Utiliser une loi uniforme**
>
> En Python, l’instruction `randint(1, 20)` renvoie un entier choisi au hasard entre 1 et 20 (inclus) ; on note \(Y\) cet entier.
> 1. Calculer la probabilité que \(Y\) soit un multiple de 3.
> 2. Calculer \(E(Y)\) et interpréter.

{{% details title="Solution commentée" closed="true" %}}
1. \(Y\) suit la loi uniforme sur \(\{1\,;\,\dots\,;\,20\}\). Les multiples de 3 sont 3, 6, 9, 12, 15, 18 : la probabilité vaut \({\dfrac{6}{20} = 0{,}3}\).
2. \({E(Y) = \dfrac{21}{2} = 10{,}5}\). Si l’on exécute l’instruction un grand nombre de fois, la moyenne des entiers obtenus sera proche de 10,5.
{{% /details %}}
