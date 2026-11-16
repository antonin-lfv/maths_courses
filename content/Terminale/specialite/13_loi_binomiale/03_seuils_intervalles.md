---
title: 'Loi binomiale : seuils et intervalles'
weight: 3
cascade:
  type: docs
---

Dans cette page, \(X\) est une variable aléatoire qui suit la loi binomiale \(\mathcal{B}(n\,;\,p)\) : \(X\) compte le nombre de succès en \(n\) tentatives, \(p\) étant la probabilité de succès d’une tentative. \(k\) désigne un entier compris entre 0 et \(n\).

## Loi de probabilité de \(X\)

On note \(p_k = P(X = k) = \binom{n}{k}p^k(1 - p)^{n - k}\) la probabilité d’obtenir exactement \(k\) succès. On présente ces valeurs dans un tableau, que la calculatrice ou un tableur fournit directement (fonction de type « binomFdp » ou `LOI.BINOMIALE(k;n;p;FAUX)`).

## Probabilités cumulées croissantes

> [!TIP] **Définition**
>
> La probabilité d’obtenir **au plus** \(k\) succès est la probabilité cumulée
> \[
c_k = P(X \leq k) = p_0 + p_1 + \dots + p_k.
\]

> [!IMPORTANT] **Remarques**
>
> - Ces probabilités s’obtiennent de proche en proche : \(c_0 = p_0\) et, pour \(k \geq 1\), \(c_k = c_{k-1} + p_k\). Elles croissent de \(c_0\) à \(c_n = 1\).
> - Calculatrice : fonction de type « binomFRép » ; tableur : `LOI.BINOMIALE(k;n;p;VRAI)`.
> - On en déduit les autres probabilités : \(P(X > k) = 1 - P(X \leq k)\) et \(P(a \leq X \leq b) = P(X \leq b) - P(X \leq a - 1)\).

{{% details title="Exemple" closed="true" %}}
Pour \(X \sim \mathcal{B}(20\,;\,0{,}3)\), on obtient (valeurs arrondies) :

| \(k\) | 1 | 2 | 3 | … | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|
| \(P(X = k)\) | 0,0068 | 0,0278 | 0,0716 | … | 0,1144 | 0,0654 | 0,0308 | 0,0120 |
| \(P(X \leq k)\) | 0,0076 | 0,0355 | 0,1071 | … | 0,8867 | 0,9520 | 0,9829 | 0,9949 |
{{% /details %}}

## Déterminer une valeur correspondant à un seuil

> [!TIP] **Principe**
>
> Soit \(\alpha\) un réel de \(]0\,;\,1[\). Déterminer la valeur à partir de laquelle la probabilité cumulée dépasse un **seuil** \(\alpha\), c’est trouver le plus petit entier \(k\) tel que \(P(X \leq k) \geq \alpha\). On le lit dans le tableau des probabilités cumulées (qui sont croissantes).

{{% details title="Exemple" closed="true" %}}
Pour \(X \sim \mathcal{B}(20\,;\,0{,}3)\) et \(\alpha = 0{,}95\) : \(P(X \leq 8) \approx 0{,}887 < 0{,}95\) et \(P(X \leq 9) \approx 0{,}952 \geq 0{,}95\). Le plus petit entier cherché est \(k = 9\) : il y a au moins 95 % de chances d’obtenir au plus 9 succès.
{{% /details %}}

## Déterminer un intervalle

> [!TIP] **Principe**
>
> Soit \(\beta\) un réel de \(]0\,;\,1[\). Déterminer un **intervalle de probabilité supérieure ou égale à \(\beta\)**, c’est trouver deux entiers \(a\) et \(b\), avec \(0 \leq a \leq b \leq n\), tels que \(P(a \leq X \leq b) \geq \beta\).

> [!IMPORTANT] **Remarque**
>
> Une méthode courante pour \(\beta = 0{,}95\) consiste à choisir \(a\) le plus petit entier tel que \(P(X \leq a) > 0{,}025\), et \(b\) le plus petit entier tel que \(P(X \leq b) \geq 0{,}975\) : on écarte ainsi au plus 2,5 % de probabilité de chaque côté.

{{% details title="Exemple" closed="true" %}}
Pour \(X \sim \mathcal{B}(20\,;\,0{,}3)\) : \(P(X \leq 1) \approx 0{,}008 \leq 0{,}025\) et \(P(X \leq 2) \approx 0{,}036 > 0{,}025\), donc \(a = 2\) ; \(P(X \leq 9) \approx 0{,}952 < 0{,}975\) et \(P(X \leq 10) \approx 0{,}983 \geq 0{,}975\), donc \(b = 10\).
\[
P(2 \leq X \leq 10) = P(X \leq 10) - P(X \leq 1) \approx 0{,}983 - 0{,}008 = 0{,}975 \geq 0{,}95.
\]

![](/images/image318.png)
{{% /details %}}

## Résoudre un problème de seuil ou d’intervalle

> [!NOTE] **Méthode 4 — Problème de seuil**
>
> Un QCM comporte 10 questions à 3 réponses (une seule juste) et un candidat répond au hasard ; \(X \sim \mathcal{B}\left(10\,;\,\frac{1}{3}\right)\) est le nombre de bonnes réponses.
> 1. Déterminer le plus petit entier \(k\) tel que \(P(X \leq k) \geq 0{,}9\).
> 2. L’examinateur veut fixer une note de passage \(m\) (nombre minimal de bonnes réponses) telle qu’un candidat répondant au hasard ait moins de 5 % de chances de l’atteindre. Quelle valeur minimale de \(m\) doit-il choisir ?

{{% details title="Solution commentée" closed="true" %}}
La calculatrice donne les probabilités cumulées suivantes (arrondies) :

| \(k\) | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
| \(P(X \leq k)\) | 0,299 | 0,559 | 0,787 | 0,923 | 0,980 |

**1.** \(P(X \leq 4) \approx 0{,}787 < 0{,}9\) et \(P(X \leq 5) \approx 0{,}923 \geq 0{,}9\) : \(k = 5\).

**2.** On cherche le plus petit \(m\) tel que \(P(X \geq m) < 0{,}05\), c’est-à-dire \(P(X \leq m - 1) > 0{,}95\).  
\(P(X \leq 5) \approx 0{,}923\) ne convient pas ; \(P(X \leq 6) \approx 0{,}980 > 0{,}95\) convient, donc \(m - 1 = 6\), soit \(m = 7\).  
Avec 7 bonnes réponses exigées, un candidat répondant au hasard n’a qu’environ 2 % de chances de réussir.
{{% /details %}}
