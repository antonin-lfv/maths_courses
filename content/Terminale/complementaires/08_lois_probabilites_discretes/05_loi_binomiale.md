---
title: 'Loi binomiale'
weight: 5
cascade:
  type: docs
---

## Définition et caractéristiques

> [!TIP] **Définition**
>
> Soit \(n\) un entier naturel non nul et \(p\) un réel de \([0\,;\,1]\). On considère un schéma de Bernoulli de paramètres \(n\) et \(p\), et on note \(X\) la variable aléatoire qui compte le **nombre de succès** obtenus au cours des \(n\) répétitions. On dit que \(X\) **suit la loi binomiale de paramètres \(n\) et \(p\)**, notée \(\mathcal{B}(n\,;\,p)\).

> [!IMPORTANT] **Remarques**
>
> - Si \({n = 1}\), l’expérience se résume à une épreuve de Bernoulli : la variable aléatoire qui compte le nombre de succès (0 ou 1) suit la **loi de Bernoulli** de paramètre \(p\).
> - Pour \({n \geq 1}\), \(X\) prend toutes les valeurs entières de 0 à \(n\).

> [!TIP] **Propriété**
>
> Soit \(X\) une variable aléatoire qui suit la loi binomiale \(\mathcal{B}(n\,;\,p)\). Pour tout entier naturel \(k\) tel que \({0 \leq k \leq n}\) :
> \[
P(X = k) = \binom{n}{k}p^k(1 - p)^{n - k}.
\]

{{% details title="Démonstration" closed="true" %}}
Un chemin de l’arbre comportant exactement \(k\) succès comporte aussi \({n - k}\) échecs ; les répétitions étant indépendantes, sa probabilité est \({p^k(1 - p)^{n - k}}\). Il y a \(\dbinom{n}{k}\) tels chemins, d’où le résultat.
{{% /details %}}

## Représentation graphique

On représente une loi binomiale par un diagramme en bâtons : pour chaque \(k\), la hauteur du bâton est \({P(X = k)}\).

![](/images/image352.png)

## Espérance, variance et écart type

> [!TIP] **Propriétés (admises)**
>
> Soit \(X\) une variable aléatoire suivant la loi binomiale \(\mathcal{B}(n\,;\,p)\). On a :
> \[
\begin{gathered}
E(X) = np, \qquad V(X) = np(1 - p), \\[0.3em]
\sigma(X) = \sqrt{V(X)} = \sqrt{np(1 - p)}.
\end{gathered}
\]

> [!IMPORTANT] **Remarque**
>
> Si \(X\) suit la loi de Bernoulli \(\mathcal{B}(1\,;\,p)\), alors \({E(X) = p}\).

## Utiliser la loi binomiale

> [!NOTE] **Méthode 1 - Reconnaître et utiliser la loi binomiale**
>
> On lance 5 fois un dé équilibré et on note \(X\) le nombre de 6 obtenus.
> 1. Justifier que \(X\) suit une loi binomiale dont on donnera les paramètres.
> 2. Calculer \({P(X = 2)}\) et \({P(X = 0)}\).

{{% details title="Solution commentée" closed="true" %}}
1. Chaque lancer est une épreuve de Bernoulli de succès « obtenir 6 », de probabilité \(\dfrac{1}{6}\) ; les 5 lancers sont indépendants. \(X\) compte les succès : \({X \sim \mathcal{B}\left(5\,;\,\dfrac{1}{6}\right)}\).
2. \(P(X = 2) = \dbinom{5}{2}\left(\dfrac{1}{6}\right)^2\left(\dfrac{5}{6}\right)^3 = 10 \times \dfrac{1}{36} \times \dfrac{125}{216} = \dfrac{1\,250}{7\,776} \approx 0{,}161\) et \({P(X = 0) = \left(\dfrac{5}{6}\right)^5 \approx 0{,}402}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Calculer des probabilités à la calculatrice**
>
> Soit \(X\) une variable aléatoire qui suit la loi binomiale \(\mathcal{B}(40\,;\,0{,}25)\).
> 1. Calculer \(E(X)\), \(V(X)\) et \(\sigma(X)\).
> 2. À la calculatrice, déterminer \({P(X \leq 8)}\) et \({P(X \geq 12)}\), arrondies au millième.

{{% details title="Solution commentée" closed="true" %}}
1. \({E(X) = 40 \times 0{,}25 = 10}\), \({V(X) = 10 \times 0{,}75 = 7{,}5}\) et \({\sigma(X) = \sqrt{7{,}5} \approx 2{,}74}\).
2. Avec la fonction de répartition binomiale (« binomFRép » ou « BinomialCD ») : \({P(X \leq 8) \approx 0{,}300}\). Pour la seconde, on passe par le contraire : \({P(X \geq 12) = 1 - P(X \leq 11) \approx 0{,}285}\).
{{% /details %}}
