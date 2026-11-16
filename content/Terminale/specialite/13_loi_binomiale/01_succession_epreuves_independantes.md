---
title: "Succession d'épreuves indépendantes"
weight: 1
cascade:
  type: docs
---

## Succession d’épreuves quelconques

> [!TIP] **Modélisation (rappels)**
>
> - Une succession d’épreuves (quelconques) se représente par un **arbre pondéré**.
> - Dans un arbre, le chemin « \(A\) puis \(B\) » représente l’événement \(A \cap B\), et sa probabilité est le produit des probabilités portées par les branches : \(P(A \cap B) = P(A) \times P_A(B)\).
> - Les probabilités portées par les branches à partir du deuxième niveau sont des **probabilités conditionnelles**.

{{% details title="Exemple" closed="true" %}}
Une urne contient 4 boules rouges et 2 boules bleues. On tire successivement et **sans remise** deux boules. On note \(R_1\) : « la première boule est rouge » et \(R_2\) : « la seconde boule est rouge ».  
Après le premier tirage, l’urne ne contient plus que 5 boules et sa composition dépend du premier résultat :
\[
P(R_1 \cap R_2) = P(R_1) \times P_{R_1}(R_2) = \frac{4}{6} \times \frac{3}{5} = \frac{2}{5}.
\]
Ici, le résultat de la première épreuve influe sur la seconde : les épreuves ne sont pas indépendantes.
{{% /details %}}

## Succession d’épreuves indépendantes

> [!TIP] **Définition**
>
> Des épreuves successives sont **indépendantes** lorsque le résultat de chacune n’influe pas sur les résultats des suivantes.

> [!TIP] **Modélisations**
>
> - Une succession de \(n\) épreuves indépendantes se représente par un arbre pondéré à \(n\) niveaux, dans lequel les probabilités d’une même épreuve sont identiques à chaque niveau.
> - Si les univers des \(n\) épreuves sont \(\Omega_1, \Omega_2, \dots, \Omega_n\), l’univers de la succession est le produit cartésien \(\Omega_1 \times \Omega_2 \times \dots \times \Omega_n\) : une issue est un \(n\)-uplet \((x_1, x_2, \dots, x_n)\).

{{% details title="Exemple" closed="true" %}}
On lance une pièce équilibrée, puis un dé équilibré à six faces. Les deux épreuves sont indépendantes, d’univers \(\Omega_1 = \{P\,;\,F\}\) et \(\Omega_2 = \{1\,;\,2\,;\,3\,;\,4\,;\,5\,;\,6\}\). L’univers de l’expérience est \(\Omega_1 \times \Omega_2\), qui contient \(2 \times 6 = 12\) issues, comme \((P, 3)\) ou \((F, 6)\).
{{% /details %}}

> [!TIP] **Propriétés (admises)**
>
> - Dans une succession de \(n\) épreuves indépendantes, la probabilité d’une issue \((x_1, x_2, \dots, x_n)\) est égale au **produit** des probabilités de ses composantes : \(P(x_1) \times P(x_2) \times \dots \times P(x_n)\).
> - **Cas particulier** : on répète \(n\) fois, de façon indépendante, une même épreuve à deux issues, dont l’une a la probabilité \(p\). La probabilité d’une issue qui contient \(k\) fois cette issue (et \(n - k\) fois l’autre) est
> \[
p^k (1 - p)^{n - k}.
\]

{{% details title="Exemple" closed="true" %}}
Dans l’exemple de la pièce et du dé, \(P\big((P, 6)\big) = \dfrac{1}{2} \times \dfrac{1}{6} = \dfrac{1}{12}\).  
On lance trois fois un dé équilibré. La probabilité d’obtenir « 6, puis un autre résultat, puis 6 » est \(\dfrac{1}{6} \times \dfrac{5}{6} \times \dfrac{1}{6} = \left(\dfrac{1}{6}\right)^2 \times \dfrac{5}{6} = \dfrac{5}{216}\).
{{% /details %}}

## Modéliser une succession d’épreuves

> [!NOTE] **Méthode 1 — Modéliser une succession d’épreuves**
>
> Une urne contient 5 boules : 3 vertes et 2 noires.
> 1. On tire successivement deux boules **sans remise**. Calculer la probabilité d’obtenir deux boules de la même couleur.
> 2. On tire maintenant successivement trois boules **avec remise**.
>    a. Justifier que les tirages sont indépendants et décrire l’univers.
>    b. Calculer la probabilité d’obtenir exactement une boule noire, puis celle d’obtenir au moins une boule noire.

{{% details title="Solution commentée" closed="true" %}}
**1.** Sans remise, la composition change après le premier tirage. Avec un arbre pondéré :
\[
P(VV) + P(NN) = \frac{3}{5} \times \frac{2}{4} + \frac{2}{5} \times \frac{1}{4} = \frac{6}{20} + \frac{2}{20} = \frac{2}{5}.
\]

**2.** a. Avec remise, l’urne retrouve sa composition avant chaque tirage : le résultat d’un tirage n’influe pas sur les suivants, les tirages sont indépendants. L’univers est \(\{V\,;\,N\}^3\), formé de \(2^3 = 8\) triplets, avec \(P(V) = \frac{3}{5}\) et \(P(N) = \frac{2}{5}\) à chaque tirage.

b. Les issues contenant exactement une boule noire sont \((N, V, V)\), \((V, N, V)\) et \((V, V, N)\), chacune de probabilité \(\frac{2}{5} \times \left(\frac{3}{5}\right)^2 = \frac{18}{125}\). D’où
\[
P(\text{exactement une noire}) = 3 \times \frac{18}{125} = \frac{54}{125} = 0{,}432.
\]
Pour « au moins une noire », on passe par l’événement contraire « aucune noire », qui correspond à l’issue \((V, V, V)\) :
\[
P(\text{au moins une noire}) = 1 - \left(\frac{3}{5}\right)^3 = 1 - \frac{27}{125} = \frac{98}{125} = 0{,}784.
\]
{{% /details %}}
