---
title: "k-uplets d'un ensemble fini"
weight: 2
cascade:
  type: docs
---

Dans cette page, \(E\) est un ensemble fini à \(n\) éléments (\(n \geq 1\)) et \(k\) un entier naturel non nul.

## \(k\)-uplets d’éléments de \(E\)

> [!TIP] **Propriété**
>
> Le nombre de \(k\)-uplets d’éléments de \(E\) (avec répétitions possibles) est \(\mathrm{card}(E^k) = n^k\).

> [!IMPORTANT] **Remarque**
>
> On rencontre ce modèle pour des choix **successifs**, **ordonnés** et **avec répétition** : tirages avec remise, codes, mots formés avec un alphabet…

{{% details title="Exemples" closed="true" %}}
- Avec les lettres \(A\), \(B\), \(C\), on peut écrire \(3^4 = 81\) « mots » de 4 lettres (avec ou sans sens).
- On lance trois fois de suite un dé à six faces : il y a \(6^3 = 216\) résultats possibles (triplets).
{{% /details %}}

## Factorielle

> [!TIP] **Définition et notation**
>
> On appelle **factorielle** \(n\), et on note \(n!\), le produit des entiers de 1 à \(n\) :
> \[
n! = 1 \times 2 \times 3 \times \dots \times n.
\]
> Par convention, \(0! = 1\).

{{% details title="Exemples" closed="true" %}}
- \(5! = 1 \times 2 \times 3 \times 4 \times 5 = 120\).
- \(10! = 3\,628\,800\) : les factorielles grandissent très vite ; par exemple \(20! \approx 2{,}4 \times 10^{18}\).
- Pour tout \(n \geq 1\), \(n! = n \times (n - 1)!\).
{{% /details %}}

## Arrangements d’éléments d’un ensemble

> [!TIP] **Définition**
>
> Soit \(k\) un entier tel que \(1 \leq k \leq n\). Un **arrangement de \(k\) éléments** de \(E\) est un \(k\)-uplet d’éléments **deux à deux distincts** de \(E\).

{{% details title="Exemple" closed="true" %}}
Avec \(E = \{a\,;\,b\,;\,c\,;\,d\}\) :
- \((a, c)\), \((c, a)\) et \((d, b)\) sont des arrangements de 2 éléments de \(E\) ;
- \((b, b)\) n’en est pas un, car un élément est répété.

Il y a 12 arrangements de 2 éléments de \(E\) : 4 choix pour le premier, puis 3 pour le second.
{{% /details %}}

> [!TIP] **Propriété**
>
> Le nombre d’arrangements de \(k\) éléments de \(E\) (avec \(1 \leq k \leq n\)) est
> \[
n \times (n - 1) \times \dots \times (n - k + 1) = \frac{n!}{(n - k)!}.
\]

> [!IMPORTANT] **Remarque**
>
> Ce produit compte \(k\) facteurs : \(n\) choix pour le premier élément, \(n - 1\) pour le deuxième (il doit être différent), …, \(n - k + 1\) pour le \(k\)-ième. Ce modèle correspond aux choix **successifs**, **ordonnés** et **sans répétition** (tirages sans remise où l’ordre compte, classements…).

{{% details title="Exemple" closed="true" %}}
Dix coureurs disputent une course. Le nombre de podiums possibles (1ᵉʳ, 2ᵉ, 3ᵉ) est le nombre d’arrangements de 3 coureurs parmi 10 :
\[
10 \times 9 \times 8 = \frac{10!}{7!} = 720.
\]
{{% /details %}}

## Permutations

> [!TIP] **Définition**
>
> Une **permutation** de \(E\) est un arrangement des \(n\) éléments de \(E\) : c’est une façon de les ranger dans un certain ordre.

> [!TIP] **Propriété**
>
> Le nombre de permutations de \(E\) est \(n!\).

{{% details title="Exemple" closed="true" %}}
On peut écrire les lettres du mot MATH dans \(4! = 24\) ordres différents (anagrammes, avec ou sans sens), car ses quatre lettres sont distinctes.
{{% /details %}}

## Utiliser les arrangements et les permutations

> [!NOTE] **Méthode 2 — Utiliser les arrangements et les permutations**
>
> 1. Une association de 12 membres élit un bureau composé d’un président, d’un trésorier et d’un secrétaire (trois personnes différentes). Combien de bureaux sont possibles ?
> 2. Six livres différents (3 de mathématiques et 3 de physique) sont rangés sur une étagère.
>    a. De combien de façons peut-on les ranger ?
>    b. De combien de façons, si les livres d’une même matière doivent rester groupés ?
> 3. Combien de codes à 4 chiffres (de 0 à 9) existe-t-il ? Combien ont leurs 4 chiffres distincts ?

{{% details title="Solution commentée" closed="true" %}}
**1.** Un bureau est un triplet ordonné (président, trésorier, secrétaire) de personnes distinctes : c’est un arrangement de 3 éléments parmi 12.
\[
12 \times 11 \times 10 = 1\,320 \text{ bureaux.}
\]

**2.** a. Un rangement est une permutation des 6 livres : \(6! = 720\) façons.  
b. On choisit d’abord l’ordre des deux blocs (maths puis physique, ou l’inverse) : \(2! = 2\) façons. Puis on range les 3 livres de mathématiques dans leur bloc : \(3! = 6\) façons, et de même pour la physique : \(3! = 6\) façons. D’après le principe multiplicatif :
\[
2 \times 6 \times 6 = 72 \text{ façons.}
\]

**3.** Avec répétitions possibles, un code est un 4-uplet de chiffres : \(10^4 = 10\,000\) codes.  
Avec 4 chiffres distincts, c’est un arrangement de 4 éléments parmi 10 : \(10 \times 9 \times 8 \times 7 = 5\,040\) codes.
{{% /details %}}
