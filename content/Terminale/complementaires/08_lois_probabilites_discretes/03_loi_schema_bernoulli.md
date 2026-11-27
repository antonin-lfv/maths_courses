---
title: 'Loi et schéma de Bernoulli'
weight: 3
cascade:
  type: docs
---

## Loi de Bernoulli

> [!TIP] **Définition**
>
> Dans un univers \(\Omega\), on considère un évènement nommé \(S\) dans \(\Omega\). On note \(E\) (ou \(\overline{S}\)) l’évènement contraire de \(S\).
> On appelle **épreuve de Bernoulli** une expérience aléatoire qui ne comporte que deux issues : \(S\) et \(E\). L’évènement \(S\) s’appelle le « **succès** », l’évènement \(E\) s’appelle l’« **échec** ».

> [!TIP] **Propriété (loi de Bernoulli)**
>
> Dans une épreuve de Bernoulli, si \({P(S) = p}\), alors \({P(E) = 1 - p}\). Le réel \(p\) est le **paramètre** de l’épreuve.

{{% details title="Exemple" closed="true" %}}
On lance un dé équilibré et on appelle succès l’évènement « obtenir 5 ou 6 ». C’est une épreuve de Bernoulli de paramètre \({p = \dfrac{2}{6} = \dfrac{1}{3}}\) ; l’échec a pour probabilité \(\dfrac{2}{3}\).
{{% /details %}}

## Schéma de Bernoulli

> [!TIP] **Définition**
>
> Soit \(n\) un entier naturel non nul. L’expérience aléatoire qui consiste à répéter \(n\) fois de suite, **de manière indépendante**, une épreuve de Bernoulli est appelée **schéma de Bernoulli**. Un schéma de Bernoulli est caractérisé par deux paramètres : le nombre \(n\) de répétitions et la probabilité \(p\) du succès.

{{% details title="Exemple" closed="true" %}}
On représente un schéma de Bernoulli de paramètres \({n = 2}\) et \(p\) par un arbre. Les répétitions étant indépendantes, les probabilités sont les mêmes sur chaque niveau de l’arbre, et la probabilité d’une issue est le produit des probabilités le long de son chemin.

![](/images/image354.png)

Par exemple, la probabilité d’obtenir exactement un succès est \({p(1 - p) + (1 - p)p = 2p(1 - p)}\).
{{% /details %}}

## Modéliser par un schéma de Bernoulli

> [!NOTE] **Méthode 1 - Reconnaître une épreuve et un schéma de Bernoulli**
>
> Une urne contient 3 boules rouges et 7 boules blanches. On tire une boule et on appelle succès « obtenir une boule rouge ».
> 1. Justifier qu’il s’agit d’une épreuve de Bernoulli et donner son paramètre.
> 2. On effectue trois tirages **avec remise**. Est-ce un schéma de Bernoulli ? Même question **sans remise**.

{{% details title="Solution commentée" closed="true" %}}
1. Il y a deux issues, succès ou échec, avec \({P(S) = \dfrac{3}{10} = 0{,}3}\) : c’est une épreuve de Bernoulli de paramètre \(0{,}3\).
2. Avec remise, la composition de l’urne est la même à chaque tirage : les trois épreuves sont identiques et indépendantes. C’est un schéma de Bernoulli de paramètres \({n = 3}\) et \({p = 0{,}3}\). Sans remise, la composition change d’un tirage à l’autre : les épreuves ne sont pas indépendantes, ce n’est pas un schéma de Bernoulli.
{{% /details %}}

> [!NOTE] **Méthode 2 - Utiliser un schéma de Bernoulli**
>
> Dans une production d’ampoules, 3 % sont défectueuses. On en prélève 10 au hasard ; la production est assez grande pour assimiler ce prélèvement à 10 tirages indépendants. Calculer la probabilité qu’aucune ampoule ne soit défectueuse, puis qu’au moins une le soit.

{{% details title="Solution commentée" closed="true" %}}
On répète 10 fois, de façon indépendante, une épreuve de Bernoulli dont le succès « l’ampoule est défectueuse » a pour probabilité \(0{,}03\). « Aucune défectueuse » correspond au seul chemin formé de 10 échecs : sa probabilité est \({0{,}97^{10} \approx 0{,}737}\). L’évènement contraire « au moins une défectueuse » a pour probabilité \({1 - 0{,}97^{10} \approx 0{,}263}\).
{{% /details %}}
