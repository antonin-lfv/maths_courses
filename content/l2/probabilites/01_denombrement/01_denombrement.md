---
title: 'Listes, arrangements, combinaisons'
weight: 1
cascade:
  type: docs
---

Dénombrer, c’est calculer le cardinal d’un ensemble fini sans en faire la liste. Le cardinal de \(E\) est noté \(|E|\) ou \(\operatorname{card}(E)\).

## Principes de base

> [!TIP] **Propriétés**
>
> Soient \(A\) et \(B\) deux ensembles finis.
> - **Bijection** : s’il existe une bijection de \(A\) sur \(B\), alors \({|A| = |B|}\).
> - **Principe additif** : si \(A\) et \(B\) sont disjoints, \({|A \cup B| = |A| + |B|}\). Plus généralement, si \({A_1, \dots, A_k}\) forment une partition de \(E\), \({|E| = |A_1| + \dots + |A_k|}\).
> - **Complémentaire** : si \({A \subset E}\), \({|E \setminus A| = |E| - |A|}\).
> - **Formule du crible** : \({|A \cup B| = |A| + |B| - |A \cap B|}\), et
>
> \[ |A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|. \]
>
> - **Principe multiplicatif** : \({|A \times B| = |A| \times |B|}\). Si une construction se fait en \(k\) étapes successives, avec \(n_1\) possibilités à la première, \(n_2\) à la deuxième (quel que soit le premier choix), …, \(n_k\) à la dernière, le nombre total de résultats est \({n_1n_2 \cdots n_k}\).

> [!NOTE] **Méthode - Bien dénombrer**
>
> - Se demander si **l’ordre compte** et si les **répétitions** sont permises.
> - « **Ou** » exclusif (cas disjoints) : on additionne. « **Puis** » (étapes successives) : on multiplie.
> - « **Au moins un** » : on passe au complémentaire.
> - Vérifier que chaque objet est compté **une fois et une seule**. Si chaque objet est compté \(k\) fois, on divise par \(k\) (principe des bergers).

## Listes et arrangements

> [!TIP] **Définition et théorème**
>
> Soit \(E\) un ensemble à \(n\) éléments et \(p\) un entier naturel.
> - Une **\(p\)-liste** (ou \(p\)-uplet) de \(E\) est un élément de \(E^p\) : l’ordre compte, les répétitions sont permises. Il y en a \(n^p\).
> - Un **arrangement** de \(p\) éléments de \(E\) est une \(p\)-liste d’éléments **deux à deux distincts**. Pour \({p \leq n}\), il y en a
>
> \[ A_n^p = n(n-1)\cdots(n-p+1) = \dfrac{n!}{(n-p)!}. \]
>
> - Une **permutation** de \(E\) est un arrangement des \(n\) éléments de \(E\). Il y en a \(n!\).

En termes d’applications : il y a \(n^p\) applications d’un ensemble à \(p\) éléments dans un ensemble à \(n\) éléments, dont \(A_n^p\) injections ; et \(n!\) bijections d’un ensemble à \(n\) éléments sur lui-même.

{{% details title="Exemple" closed="true" %}}
Un code est formé de \(4\) chiffres de \(0\) à \(9\).
- Nombre de codes : \({10^4 = 10\,000}\).
- Codes à chiffres tous distincts : \({A_{10}^4 = 10 \times 9 \times 8 \times 7 = 5040}\).
- Codes ayant au moins deux chiffres identiques : \({10\,000 - 5040 = 4960}\).
{{% /details %}}

## Combinaisons

> [!TIP] **Définition et théorème**
>
> Une **combinaison** de \(p\) éléments de \(E\) est une **partie** de \(E\) à \(p\) éléments : l’ordre ne compte pas, pas de répétition. Pour \({0 \leq p \leq n}\), il y en a
>
> \[ \binom{n}{p} = \dfrac{A_n^p}{p!} = \dfrac{n!}{p!\,(n-p)!}. \]

{{% details title="Démonstration" closed="true" %}}
Chaque partie à \(p\) éléments peut être ordonnée de \(p!\) façons, ce qui donne \(p!\) arrangements distincts ; et chaque arrangement est obtenu ainsi à partir d’une seule partie. Donc \({A_n^p = p! \times \dbinom{n}{p}}\).
{{% /details %}}

> [!TIP] **Propriétés des coefficients binomiaux**
>
> - \({\dbinom{n}{0} = \dbinom{n}{n} = 1}\), \({\dbinom{n}{1} = n}\), \({\dbinom{n}{2} = \dfrac{n(n-1)}{2}}\).
> - **Symétrie** : \({\dbinom{n}{p} = \dbinom{n}{n-p}}\) (choisir \(p\) éléments revient à choisir les \({n - p}\) que l’on écarte).
> - **Formule de Pascal** : \({\dbinom{n}{p} = \dbinom{n-1}{p-1} + \dbinom{n-1}{p}}\).
> - **Formule du capitaine** : \({p\dbinom{n}{p} = n\dbinom{n-1}{p-1}}\).
> - \({\displaystyle\sum_{p=0}^{n} \dbinom{n}{p} = 2^n}\) : nombre total de parties d’un ensemble à \(n\) éléments.
> - **Formule de Vandermonde** : \({\displaystyle\sum_{k=0}^{p} \dbinom{m}{k}\dbinom{n}{p-k} = \dbinom{m+n}{p}}\).

{{% details title="Démonstration" closed="true" %}}
Preuves combinatoires.

**Pascal.** On fixe un élément \(a\) de \(E\). Les parties à \(p\) éléments se répartissent en celles qui contiennent \(a\) (on choisit les \({p - 1}\) autres parmi \({n - 1}\)) et celles qui ne le contiennent pas (on choisit \(p\) éléments parmi \({n - 1}\)).

**Vandermonde.** Dans un groupe de \(m\) femmes et \(n\) hommes, on forme un comité de \(p\) personnes. On classe les comités selon le nombre \(k\) de femmes : \(\dbinom{m}{k}\) choix pour les femmes, \(\dbinom{n}{p-k}\) pour les hommes.
{{% /details %}}

## Cas avec répétitions

> [!TIP] **Propriétés**
>
> - **Permutations avec répétition (anagrammes)** : le nombre de façons d’ordonner \(n\) objets dont \(n_1\) sont identiques d’un premier type, \(n_2\) d’un deuxième, …, \(n_k\) d’un \(k\)-ième (\({n_1 + \dots + n_k = n}\)) est
>
> \[ \dfrac{n!}{n_1!\,n_2! \cdots n_k!}. \]
>
> - **Combinaisons avec répétition** : le nombre de façons de choisir \(p\) objets parmi \(n\) types, sans ordre et avec répétitions permises, est \(\dbinom{n+p-1}{p}\). C’est aussi le nombre de solutions en entiers naturels de \({x_1 + x_2 + \dots + x_n = p}\).

{{% details title="Exemple" closed="true" %}}
Le mot « STATISTIQUE » a \(11\) lettres : S (2), T (3), A (1), I (2), Q (1), U (1), E (1). Son nombre d’anagrammes est

\[
\dfrac{11!}{2!\,3!\,2!} = \dfrac{39\,916\,800}{24} = 1\,663\,200.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu - Mains de cartes**
>
> D’un jeu de \(32\) cartes (quatre couleurs de huit cartes, dont un as par couleur), on tire simultanément \(5\) cartes. Combien y a-t-il de mains :
>
> 1. au total ?
> 2. contenant exactement deux as ?
> 3. contenant au moins un as ?
> 4. contenant exactement deux as et exactement deux cœurs ?

{{% details title="Solution commentée" closed="true" %}}
Une main est une partie à \(5\) éléments : l’ordre ne compte pas.

**1.** \({\dbinom{32}{5} = \dfrac{32 \times 31 \times 30 \times 29 \times 28}{120} = 201\,376}\).

**2.** On choisit \(2\) as parmi \(4\), puis \(3\) cartes parmi les \(28\) qui ne sont pas des as :

\[
\binom{4}{2} \times \binom{28}{3} = 6 \times 3276 = 19\,656.
\]

**3.** On passe au complémentaire. Mains sans as : \({\dbinom{28}{5} = 98\,280}\). Mains avec au moins un as : \({201\,376 - 98\,280 = 103\,096}\).

**4.** L’as de cœur est à la fois un as et un cœur : on distingue deux cas disjoints. Les cartes se répartissent en : l’as de cœur (1), les autres as (3), les autres cœurs (7), les cartes ni as ni cœur (21).

- **Sans l’as de cœur** : \(2\) as parmi les \(3\) autres, \(2\) cœurs parmi les \(7\) autres, \(1\) carte parmi \(21\) : \({\dbinom{3}{2}\dbinom{7}{2} \times 21 = 3 \times 21 \times 21 = 1323}\).
- **Avec l’as de cœur** : \(1\) autre as parmi \(3\), \(1\) autre cœur parmi \(7\), \(2\) cartes parmi \(21\) : \({3 \times 7 \times \dbinom{21}{2} = 21 \times 210 = 4410}\).

Total : \({1323 + 4410 = 5733}\).
{{% /details %}}
