---
title: 'Loi géométrique'
weight: 6
cascade:
  type: docs
---

## Définition et caractéristiques

> [!TIP] **Définition**
>
> Soit \(p\) un réel appartenant à \(]0\,;\,1]\). On considère une épreuve de Bernoulli dont la probabilité du succès est \(p\), et on répète cette épreuve de manière indépendante. On note \(X\) la variable aléatoire qui compte le **nombre de répétitions nécessaires pour obtenir le premier succès**. On dit que \(X\) **suit la loi géométrique de paramètre \(p\)**, notée \(\mathcal{G}(p)\).

> [!IMPORTANT] **Remarque**
>
> La variable \(X\) peut prendre toutes les valeurs entières \(k \geq 1\).

> [!TIP] **Propriété**
>
> Soit \(X\) une variable aléatoire qui suit une loi géométrique \(\mathcal{G}(p)\). Pour tout entier naturel non nul \(k\) :
> \[
P(X = k) = p(1 - p)^{k - 1}.
\]

{{% details title="Démonstration" closed="true" %}}
L’évènement \(\{X = k\}\) signifie que les \(k - 1\) premières répétitions sont des échecs et que la \(k\)-ième est un succès. Les répétitions étant indépendantes, on multiplie les probabilités : \(P(X = k) = (1 - p)^{k - 1} \times p\).
{{% /details %}}

> [!TIP] **Propriété (loi sans mémoire)**
>
> Soit \(X\) une variable aléatoire qui suit une loi géométrique \(\mathcal{G}(p)\). Pour tous entiers naturels \(k\) et \(\ell\) non nuls :
> \[
P_{(X > k)}(X > k + \ell) = P(X > \ell).
\]

> [!IMPORTANT] **Remarque**
>
> On dit que \(X\) est **sans mémoire** : la probabilité que \(X\) prenne des valeurs supérieures à \(k + \ell\) sachant que \(X\) prend des valeurs supérieures à \(k\) ne dépend pas de \(k\), mais seulement de \(\ell\). Avoir déjà subi \(k\) échecs ne rapproche pas du succès. On utilise aussi \(P(X > \ell) = (1 - p)^\ell\) (les \(\ell\) premières répétitions sont des échecs).

## Représentation graphique

![](/images/image353.png)

## Espérance, variance et écart type

> [!TIP] **Propriétés**
>
> Soit \(X\) une variable aléatoire suivant la loi géométrique \(\mathcal{G}(p)\) :
> \[
E(X) = \frac{1}{p}, \qquad V(X) = \frac{1 - p}{p^2} \qquad \text{et} \qquad \sigma(X) = \sqrt{V(X)} = \frac{\sqrt{1 - p}}{p}.
\]

> [!IMPORTANT] **Remarque**
>
> En moyenne, il faut \(\frac{1}{p}\) répétitions pour obtenir le premier succès : par exemple 6 lancers d’un dé en moyenne pour obtenir un 6.

## Utiliser la loi géométrique

> [!NOTE] **Méthode 1 — Calculer des probabilités avec une loi géométrique**
>
> Une joueuse de basket réussit un lancer franc avec la probabilité \(0{,}4\). Elle tire jusqu’à réussir, les tirs étant indépendants. On note \(X\) le nombre de tirs effectués.
> 1. Quelle est la loi de \(X\) ?
> 2. Calculer \(P(X = 3)\), \(P(X \leq 3)\) et \(E(X)\).

{{% details title="Solution commentée" closed="true" %}}
1. \(X\) compte le nombre de répétitions indépendantes d’une épreuve de Bernoulli (succès de probabilité \(0{,}4\)) jusqu’au premier succès : \(X \sim \mathcal{G}(0{,}4)\).
2. \(P(X = 3) = 0{,}4 \times 0{,}6^2 = 0{,}144\). \(P(X \leq 3) = 1 - P(X > 3) = 1 - 0{,}6^3 = 0{,}784\). \(E(X) = \dfrac{1}{0{,}4} = 2{,}5\) tirs en moyenne.
{{% /details %}}

> [!NOTE] **Méthode 2 — Modéliser une situation par une loi géométrique**
>
> Dans un jeu sur smartphone, chaque partie permet de gagner un bonus avec la probabilité \(0{,}05\), indépendamment des autres. On note \(N\) le nombre de parties jouées jusqu’à l’obtention du premier bonus.
> 1. Combien de parties faut-il jouer en moyenne pour obtenir un bonus ?
> 2. Quelle est la probabilité de devoir jouer plus de 10 parties ?

{{% details title="Solution commentée" closed="true" %}}
\(N \sim \mathcal{G}(0{,}05)\).
1. \(E(N) = \dfrac{1}{0{,}05} = 20\) parties en moyenne.
2. \(P(N > 10) = 0{,}95^{10} \approx 0{,}599\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Utiliser l’absence de mémoire**
>
> On reprend le jeu précédent. Un joueur a déjà joué 5 parties sans obtenir de bonus. Quelle est la probabilité qu’il doive encore jouer plus de 3 parties ?

{{% details title="Solution commentée" closed="true" %}}
On cherche \(P_{(N > 5)}(N > 8)\). D’après la propriété d’absence de mémoire, \(P_{(N > 5)}(N > 5 + 3) = P(N > 3) = 0{,}95^3 \approx 0{,}857\). Les 5 échecs précédents ne changent rien.
{{% /details %}}
