---
title: 'Propriétés des combinaisons'
weight: 4
cascade:
  type: docs
---

Dans cette page, \(n\) et \(k\) sont des entiers naturels.

## Symétrie et relation de Pascal

> [!TIP] **Propriété (symétrie)**
>
> Pour \(0 \leq k \leq n\) :
> \[
\binom{n}{k} = \binom{n}{n - k}.
\]

> [!IMPORTANT] **Remarque**
>
> Choisir les \(k\) éléments que l’on garde revient à choisir les \(n - k\) éléments que l’on écarte. On le vérifie aussi avec la formule : \(\frac{n!}{k!\,(n-k)!}\) est inchangée quand on échange \(k\) et \(n - k\).

> [!TIP] **Propriété (relation de Pascal)**
>
> Pour \(n \geq 2\) et \(1 \leq k \leq n - 1\) :
> \[
\binom{n - 1}{k - 1} + \binom{n - 1}{k} = \binom{n}{k}.
\]

> [!IMPORTANT] **Remarque**
>
> Interprétation : on fixe un élément \(a\) de \(E\) (de cardinal \(n\)). Une partie à \(k\) éléments contient \(a\) — il reste alors \(k - 1\) éléments à choisir parmi les \(n - 1\) autres — ou ne contient pas \(a\) — il faut alors choisir \(k\) éléments parmi les \(n - 1\) autres. Le principe additif donne la relation. (Avec la convention \(\binom{n-1}{n} = 0\), elle reste vraie pour \(k = n\).)

## Triangle de Pascal

La relation de Pascal permet de calculer les coefficients \(\binom{n}{k}\) de proche en proche, ligne par ligne : chaque coefficient est la somme du coefficient situé juste au-dessus et de celui situé au-dessus à gauche.

| \(n \backslash k\) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| **0** | 1 | | | | | | | |
| **1** | 1 | 1 | | | | | | |
| **2** | 1 | 2 | 1 | | | | | |
| **3** | 1 | 3 | 3 | 1 | | | | |
| **4** | 1 | 4 | 6 | 4 | 1 | | | |
| **5** | 1 | 5 | 10 | 10 | 5 | 1 | | |
| **6** | 1 | 6 | 15 | 20 | 15 | 6 | 1 | |
| **7** | 1 | 7 | 21 | 35 | 35 | 21 | 7 | 1 |

Par exemple, \(\binom{6}{3} = \binom{5}{2} + \binom{5}{3} = 10 + 10 = 20\). On remarque aussi la symétrie de chaque ligne.

## Nombre de parties d’un ensemble

> [!TIP] **Propriété**
>
> Un ensemble \(E\) à \(n\) éléments possède \(2^n\) sous-ensembles (parties), et
> \[
\sum_{k=0}^{n} \binom{n}{k} = \binom{n}{0} + \binom{n}{1} + \dots + \binom{n}{n} = 2^n.
\]

> [!IMPORTANT] **Remarque**
>
> Pour construire une partie de \(E = \{x_1\,;\,\dots\,;\,x_n\}\), on décide pour chaque élément s’il en fait partie ou non : 2 choix pour chacun des \(n\) éléments, donc \(2^n\) parties (principe multiplicatif). En les regroupant selon leur nombre \(k\) d’éléments, on obtient la somme des \(\binom{n}{k}\). Par exemple, la ligne \(n = 4\) du triangle donne \(1 + 4 + 6 + 4 + 1 = 16 = 2^4\).

## Utiliser les propriétés des coefficients binomiaux

> [!NOTE] **Méthode 4 — Utiliser les propriétés des combinaisons**
>
> 1. Sans formule, calculer \(\dbinom{10}{8}\) à l’aide de la symétrie.
> 2. Calculer la ligne \(n = 8\) du triangle de Pascal.
> 3. Un ensemble \(E\) possède 6 éléments.
>    a. Combien \(E\) a-t-il de parties ?
>    b. Combien de parties de \(E\) contiennent au moins 2 éléments ?

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\dbinom{10}{8} = \dbinom{10}{2} = \dfrac{10 \times 9}{2} = 45\).

**2.** On additionne deux à deux les termes voisins de la ligne \(n = 7\) (1, 7, 21, 35, 35, 21, 7, 1) :
\[
1 \quad 8 \quad 28 \quad 56 \quad 70 \quad 56 \quad 28 \quad 8 \quad 1.
\]
Vérification : leur somme vaut \(256 = 2^8\).

**3.** a. \(E\) a \(2^6 = 64\) parties.  
b. On retire les parties à 0 élément (\(\binom{6}{0} = 1\)) et à 1 élément (\(\binom{6}{1} = 6\)) : \(64 - 1 - 6 = 57\) parties.
{{% /details %}}
