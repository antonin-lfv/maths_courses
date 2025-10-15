---
title: 'Variable aléatoire réelle sur un ensemble fini'
weight: 1
cascade:
  type: docs
---

## Modélisation du résultat numérique d’une expérience aléatoire

{{% details title="Exemples" closed="false" %}}
On considère l’expérience aléatoire suivante.  
Un joueur lance un dé cubique équilibré : si le résultat est 6, le joueur gagne 9 €, sinon il perd 3 €.  

On peut considérer le « gain algébrique » du joueur : ce gain est donc une variable pouvant prendre deux valeurs selon le résultat de l’expérience.  
On modélise cette expérience en associant à chaque issue du dé une valeur du gain :

| Résultat du dé | 1 | 2 | 3 | 4 | 5 | 6 |
|----------------|---|---|---|---|---|---|
| Valeur du gain | -3 | -3 | -3 | -3 | -3 | 9 |
{{% /details %}}


## Variable aléatoire

> [!TIP] **Définition**  
> On considère une expérience aléatoire dont l’univers est un ensemble fini noté \(\Omega\).  
> Une **variable aléatoire** \(X\) est une fonction définie sur \(\Omega\) et à valeurs dans \(\mathbb{R}\).

> [!IMPORTANT] **Remarque**  
> Définir une variable aléatoire \(X\) consiste donc à associer, à chaque issue de l’expérience aléatoire, un nombre réel.

{{% details title="Exemple" closed="true" %}}
On reprend le jeu précédent et on note \(X\) le gain algébrique du joueur.  
\(X\) est une variable aléatoire définie sur \(\Omega = \{1,2,3,4,5,6\}\) pouvant prendre les valeurs \(-3\) et \(9\).

- Si le résultat du dé est 1, 2, 3, 4 ou 5, alors \(X = -3\).  
- Si le résultat du dé est 6, alors \(X = 9\).

On note donc les évènements :
\[
\{X = -3\} = \{1, 2, 3, 4, 5\}, \quad \{X = 9\} = \{6\}.
\]

![](/images/image132.png)
{{% /details %}}


## Loi de probabilité d’une variable aléatoire

> [!TIP] **Définition**  
> Donner la **loi de probabilité** d’une variable aléatoire \(X\), c’est donner, pour chaque valeur \(x_i\) que peut prendre \(X\), la probabilité de l’évènement \(\{X = x_i\}\), notée \(P(X = x_i)\).

{{% details title="Exemples" closed="true" %}}
Dans l’exemple précédent :
- \(\{X = 9\}\) correspond à une seule issue : 6, donc \(P(X = 9) = \frac{1}{6}\).  
- \(\{X = -3\}\) correspond aux issues 1, 2, 3, 4, 5, donc \(P(X = -3) = \frac{5}{6}\).

| \(x_i\)         | -3  | 9  |
|-----------------|-----|----|
| \(P(X = x_i)\)  | 5/6 | 1/6 |

> [!IMPORTANT] **Remarque**  
> Pour une variable aléatoire \(X\) prenant les valeurs \(x_1, x_2, \dots, x_n\), on a toujours :
> \[
P(X = x_1) + P(X = x_2) + \dots + P(X = x_n) = 1.
\]
{{% /details %}}


> [!NOTE] **Exercice résolu 1 – Modéliser une situation à l’aide d’une variable aléatoire**  
> On lance un dé équilibré à 6 faces deux fois de suite.  
> - Un résultat pair fait gagner 2 €.  
> - Un résultat impair fait perdre 1 €.  
> On appelle \(X\) la variable aléatoire égale au gain algébrique en fin de partie.  
> 
> 1. Quelles sont les valeurs prises par cette variable aléatoire \(X\) ?  
> 2. Quelle(s) issue(s) réalise(nt) l’évènement \(\{X = 4\}\) ?  
> 3. Quelle(s) issue(s) réalise(nt) l’évènement \(\{X < 0\}\) ?

{{% details title="Solution commentée" closed="true" %}}
1. On peut avoir :  
   - deux résultats pairs → gain de 4 € ;  
   - deux résultats impairs → perte de 2 € ;  
   - un pair et un impair → gain de 1 €.  

   Les valeurs possibles pour \(X\) sont donc \(4, -2, 1\).

2. L’évènement \(\{X = 4\}\) correspond à deux résultats pairs.  
   Issues : (2,2), (2,4), (2,6), (4,2), (4,4), (4,6), (6,2), (6,4), (6,6).

3. L’évènement \(\{X < 0\}\) correspond à deux résultats impairs.  
   Issues : (1,1), (1,3), (1,5), (3,1), (3,3), (3,5), (5,1), (5,3), (5,5).
{{% /details %}}


> [!NOTE] **Exercice résolu 2 – Déterminer la loi de probabilité d’une variable aléatoire**  
> On rappelle qu’un jeu de 32 cartes contient 4 familles (cœur, carreau, trèfle, pique), chacune avec trois figures (roi, dame, valet), un as et les cartes de 7 à 10.  
>  
> Dans ce jeu, on tire successivement et avec remise deux cartes.  
> On définit la variable aléatoire \(Y\) ainsi :  
> - Si on tire deux figures, \(Y = 30\) ;  
> - Si on tire une figure et une autre carte, \(Y = 25\) ;  
> - Sinon, \(Y = 5\).  
>
> 1. Déterminer la loi de probabilité de \(Y\).  
> 2. Déterminer \(P(Y \geq 25)\).

{{% details title="Solution commentée" closed="true" %}}
1. On note \(F_1\) : « figure au premier tirage », \(F_2\) : « figure au second tirage ».  

   \[
   P(F_1) = P(F_2) = \frac{12}{32} = \frac{3}{8}, \quad P(\overline{F_1}) = P(\overline{F_2}) = \frac{20}{32} = \frac{5}{8}.
   \]

   \[
   P(Y = 30) = \frac{12}{32} \times \frac{12}{32} = \frac{9}{64}
   \]
    \[
   P(Y = 25) = 2 \times \frac{12}{32} \times \frac{20}{32} = \frac{15}{32}
   \]  
   \[
   P(Y = 5) = \frac{20}{32} \times \frac{20}{32} = \frac{25}{64}
   \]

   ![](/images/image133.png)

   | \(y_i\) | 30 | 25 | 5 |
   |----------|----|----|---|
   | \(P(Y = y_i)\) | 9/64 | 15/32 | 25/64 |

2.  
   \[
   P(Y \geq 25) = P(Y = 30) + P(Y = 25) = \frac{9}{64} + \frac{15}{32} = \frac{39}{64}.
   \]
{{% /details %}}