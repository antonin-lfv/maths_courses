---
title: "Parties d'un ensemble et combinaisons"
weight: 3
cascade:
  type: docs
---

Dans cette page, \(E\) est un ensemble fini à \(n\) éléments, et \(k\) un entier naturel avec \({k \leq n}\).

## Combinaisons d’éléments d’un ensemble

> [!TIP] **Définition**
>
> Une **combinaison de \(k\) éléments** de \(E\) est un sous-ensemble (une **partie**) de \(E\) qui contient \(k\) éléments.

> [!IMPORTANT] **Remarque**
>
> Une combinaison est un ensemble : on la note entre accolades, et l’ordre de ses éléments ne compte pas, ses éléments sont distincts. Ce modèle correspond aux choix **simultanés** (ou dont l’ordre est sans importance) et **sans répétition** : former un groupe, tirer une main de cartes…

{{% details title="Exemple" closed="true" %}}
Avec \({E = \{a\,;\,b\,;\,c\,;\,d\}}\), les combinaisons de 2 éléments de \(E\) sont :
\[
\{a\,;\,b\},\ \{a\,;\,c\},\ \{a\,;\,d\},\ \{b\,;\,c\},\ \{b\,;\,d\},\ \{c\,;\,d\}.
\]
Il y en a 6, alors qu’il y a 12 arrangements de 2 éléments : chaque combinaison \(\{x\,;\,y\}\) correspond aux deux arrangements \((x, y)\) et \((y, x)\).
{{% /details %}}

## Nombre de combinaisons

> [!TIP] **Notation et propriété**
>
> Le nombre de combinaisons de \(k\) éléments de \(E\) se note \(\dbinom{n}{k}\) (lire « \(k\) parmi \(n\) ») ; on l’appelle **coefficient binomial**. On a :
> \[
\binom{n}{k} = \dfrac{n(n - 1)(n - 2)\cdots(n - k + 1)}{k!} = \dfrac{n!}{k!\,(n - k)!}.
\]

> [!IMPORTANT] **Remarques**
>
> - Justification : chaque combinaison de \(k\) éléments donne \(k!\) arrangements (en rangeant ses éléments de toutes les façons possibles). Donc \({\binom{n}{k} \times k! = \dfrac{n!}{(n - k)!}}\).
> - Par convention, si \({k > n}\), on pose \({\binom{n}{k} = 0}\).
> - Les calculatrices disposent d’une fonction « Combinaison » (souvent notée nCr).

> [!TIP] **Cas particuliers**
>
> - \({\dbinom{n}{0} = 1}\) : le seul sous-ensemble à 0 élément est l’ensemble vide \(\varnothing\).
> - \({\dbinom{n}{1} = n}\) : les parties à un élément sont les \(n\) singletons \(\{x\}\), \({x \in E}\).
> - \({\dbinom{n}{n} = 1}\) : la seule partie à \(n\) éléments est \(E\) lui-même.

{{% details title="Exemple" closed="true" %}}
\({\dbinom{6}{2} = \dfrac{6 \times 5}{2 \times 1} = 15}\) et \({\dbinom{7}{3} = \dfrac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35}\).
{{% /details %}}

## Calculer à l’aide des coefficients binomiaux

> [!NOTE] **Méthode 3 - Dénombrer avec des combinaisons**
>
> 1. On tire simultanément 4 cartes d’un jeu de 32 cartes (une « main »). Combien de mains différentes peut-on obtenir ?
> 2. On doit former un comité de 5 personnes parmi 12.
>    a. Combien de comités différents peut-on former ?
>    b. Combien de comités contiennent Alice, qui fait partie des 12 personnes ?
>    c. Combien ne la contiennent pas ?
> 3. Combien de mains de 4 cartes (parmi 32) contiennent exactement 2 cœurs ? (Le jeu compte 8 cœurs.)

{{% details title="Solution commentée" closed="true" %}}
**1.** L’ordre des cartes ne compte pas et il n’y a pas de répétition : une main est une combinaison de 4 cartes parmi 32.
\[
\binom{32}{4} = \dfrac{32 \times 31 \times 30 \times 29}{4 \times 3 \times 2 \times 1} = 35\,960.
\]

**2.** a. \({\dbinom{12}{5} = \dfrac{12 \times 11 \times 10 \times 9 \times 8}{5!} = 792}\) comités.  
b. Alice étant dans le comité, il reste à choisir 4 personnes parmi les 11 autres : \({\dbinom{11}{4} = 330}\).  
c. Il faut choisir les 5 membres parmi les 11 autres personnes : \({\dbinom{11}{5} = 462}\).  
On vérifie que \({330 + 462 = 792}\) (principe additif : un comité contient Alice ou ne la contient pas).

**3.** On choisit 2 cœurs parmi 8, puis 2 cartes parmi les 24 non-cœurs. D’après le principe multiplicatif :
\[
\binom{8}{2} \times \binom{24}{2} = 28 \times 276 = 7\,728.
\]
{{% /details %}}
