---
title: 'Variable aléatoire réelle sur un ensemble fini'
weight: 1
cascade:
  type: docs
---

## Modélisation du résultat numérique d’une expérience aléatoire

{{% details title="Exemples" closed="false" %}}
On considère le jeu suivant.  
Un joueur tire au hasard une boule dans une urne contenant dix boules numérotées de 1 à 10. Si le numéro est un multiple de 5, il gagne 8 € ; sinon, il perd 2 €.  

Ce qui intéresse le joueur, c’est son **gain algébrique** (positif s’il gagne, négatif s’il perd) : c’est une quantité qui prend deux valeurs possibles selon le résultat du tirage.  
On associe donc à chaque issue la valeur correspondante du gain :

| Numéro tiré    | 1  | 2  | 3  | 4  | 5 | 6  | 7  | 8  | 9  | 10 |
|----------------|----|----|----|----|---|----|----|----|----|----|
| Valeur du gain | -2 | -2 | -2 | -2 | 8 | -2 | -2 | -2 | -2 | 8  |
{{% /details %}}

## Variable aléatoire

> [!TIP] **Définition**  
> On considère une expérience aléatoire dont l’univers \(\Omega\) est un ensemble fini.  
> Une **variable aléatoire** \(X\) est une fonction définie sur \(\Omega\) et à valeurs réelles.

> [!IMPORTANT] **Remarque**  
> Définir une variable aléatoire \(X\), c’est associer un nombre réel à chaque issue de l’expérience. Pour un réel \(a\), on note \({\{X = a\}}\) l’évènement formé des issues auxquelles \(X\) associe \(a\) ; on définit de même \({\{X < a\}}\), \({\{X \geq a\}}\), etc.

{{% details title="Exemple" closed="true" %}}
Dans le jeu précédent, on note \(X\) le gain algébrique du joueur.  
\(X\) est une variable aléatoire définie sur \({\Omega = \{1, 2, \dots, 10\}}\), qui prend les valeurs \(8\) et \({-2}\) :

- si le numéro tiré est 5 ou 10, alors \({X = 8}\) ;  
- sinon, \({X = -2}\).

Autrement dit :
\[
\{X = 8\} = \{5, 10\}, \quad \{X = -2\} = \{1, 2, 3, 4, 6, 7, 8, 9\}.
\]

![](/images/image216.png)
{{% /details %}}

## Loi de probabilité d’une variable aléatoire

> [!TIP] **Définition**  
> Soit \(X\) une variable aléatoire prenant les valeurs \(x_1, x_2, \dots, x_n\). Donner la **loi de probabilité** de \(X\), c’est donner la probabilité \({P(X = x_i)}\) de chacun des évènements \({\{X = x_i\}}\).

{{% details title="Exemples" closed="true" %}}
Dans l’exemple précédent, les dix boules ont la même probabilité d’être tirées :
- \({\{X = 8\}}\) contient deux issues (5 et 10), donc \({P(X = 8) = \dfrac{2}{10} = \dfrac{1}{5}}\) ;  
- \({\{X = -2\}}\) contient les huit autres issues, donc \({P(X = -2) = \dfrac{8}{10} = \dfrac{4}{5}}\).

On présente la loi dans un tableau :

| \(x_i\)         | -2  | 8   |
|-----------------|-----|-----|
| \({P(X = x_i)}\)  | 4/5 | 1/5 |
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Pour une variable aléatoire \(X\) prenant les valeurs \(x_1, x_2, \dots, x_n\), on a toujours :
> \[
P(X = x_1) + P(X = x_2) + \dots + P(X = x_n) = 1.
\]

> [!NOTE] **Exercice résolu 1 - Modéliser une situation à l’aide d’une variable aléatoire**  
> On lance trois fois de suite une pièce équilibrée.  
> - Chaque « pile » fait gagner 3 €.  
> - Chaque « face » fait perdre 2 €.  
> On note \(X\) la variable aléatoire égale au gain algébrique à la fin des trois lancers.  
> 
> 1. Quelles valeurs la variable aléatoire \(X\) peut-elle prendre ?  
> 2. Quelles issues réalisent l’évènement \({\{X = 4\}}\) ?  
> 3. Quelles issues réalisent l’évènement \({\{X < 0\}}\) ?

{{% details title="Solution commentée" closed="true" %}}
On note P pour « pile » et F pour « face » ; une issue est une suite de trois lettres, comme PFP.

1. Le gain ne dépend que du nombre de « pile » obtenus :  
   - trois « pile » : \({3 \times 3 = 9}\) € ;  
   - deux « pile » et une « face » : \({2 \times 3 - 2 = 4}\) € ;  
   - une « pile » et deux « face » : \({3 - 2 \times 2 = -1}\) € ;  
   - trois « face » : \({-3 \times 2 = -6}\) €.  

   \(X\) peut donc prendre les valeurs \({-6}\), \({-1}\), \(4\) et \(9\).

2. \({\{X = 4\}}\) correspond à exactement deux « pile » :  
   issues PPF, PFP, FPP.

3. \({\{X < 0\}}\) correspond à \({X = -1}\) ou \({X = -6}\), c’est-à-dire à au plus une « pile » :  
   issues PFF, FPF, FFP, FFF.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Déterminer la loi de probabilité d’une variable aléatoire**  
> Une urne contient dix boules indiscernables au toucher : quatre rouges et six blanches.  
> On tire successivement et avec remise deux boules. On définit la variable aléatoire \(Y\) ainsi :  
> - si les deux boules sont rouges, \({Y = 20}\) ;  
> - si une seule boule est rouge, \({Y = 10}\) ;  
> - sinon, \({Y = 0}\).  
>
> 1. Déterminer la loi de probabilité de \(Y\).  
> 2. Calculer \({P(Y \geq 10)}\).

{{% details title="Solution commentée" closed="true" %}}
1. On note \(R_1\) : « La première boule est rouge » et \(R_2\) : « La seconde boule est rouge ». Le tirage étant avec remise, les deux tirages sont indépendants et :  

   \[
   P(R_1) = P(R_2) = \dfrac{4}{10} = 0{,}4, \quad P(\overline{R_1}) = P(\overline{R_2}) = 0{,}6.
   \]

   ![](/images/image217.png)

   \[
   P(Y = 20) = P(R_1 \cap R_2) = 0{,}4 \times 0{,}4 = 0{,}16
   \]
   \[
   P(Y = 10) = P(R_1 \cap \overline{R_2}) + P(\overline{R_1} \cap R_2) = 2 \times 0{,}4 \times 0{,}6 = 0{,}48
   \]  
   \[
   P(Y = 0) = P(\overline{R_1} \cap \overline{R_2}) = 0{,}6 \times 0{,}6 = 0{,}36
   \]

   | \(y_i\) | 0 | 10 | 20 |
   |----------|----|----|---|
   | \({P(Y = y_i)}\) | 0,36 | 0,48 | 0,16 |

   Vérification : \({0{,}36 + 0{,}48 + 0{,}16 = 1}\).

2.  
   \[
   P(Y \geq 10) = P(Y = 10) + P(Y = 20) = 0{,}48 + 0{,}16 = 0{,}64.
   \]
   (On peut aussi calculer \({1 - P(Y = 0) = 1 - 0{,}36}\).)
{{% /details %}}
