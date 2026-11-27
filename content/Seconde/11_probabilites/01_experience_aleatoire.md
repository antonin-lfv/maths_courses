---
title: 'Expérience aléatoire et loi de probabilité'
weight: 1
cascade:
  type: docs
---

## Univers et loi de probabilité

> [!TIP] **Définitions**
>
> - Une **expérience aléatoire** est une expérience dont on connaît tous les résultats possibles, mais dont on ne peut pas prévoir le résultat à l’avance.
> - Les résultats possibles sont appelés **issues**. L’ensemble de toutes les issues est l’**univers**, noté \(\Omega\).

{{% details title="Exemple" closed="true" %}}
On lance un dé équilibré à douze faces numérotées de \(1\) à \(12\) et on note le numéro obtenu : \({\Omega = \{1\,;\,2\,;\,\dots\,;\,12\}}\).
{{% /details %}}

> [!TIP] **Définition**
>
> Soit \({\Omega = \{x_1\,;\,x_2\,;\,\dots\,;\,x_n\}}\) l’univers d’une expérience aléatoire. Définir une **loi de probabilité** sur \(\Omega\), c’est associer à chaque issue \(x_i\) un nombre \({p_i = P(\{x_i\})}\), appelé **probabilité** de \(x_i\), de sorte que :
> - chaque \(p_i\) est compris entre \(0\) et \(1\) ;
> - \({p_1 + p_2 + \dots + p_n = 1}\).
>
> **Modéliser** une expérience aléatoire, c’est choisir une loi de probabilité qui la représente.

{{% details title="Exemple" closed="true" %}}
Une roue de loterie est partagée en secteurs inégaux. Le gain (en €) obtenu en la faisant tourner suit la loi :

| Gain | \(0\) | \(1\) | \(5\) | \(20\) |
|---|---|---|---|---|
| Probabilité | \(0{,}4\) | \(0{,}3\) | \(0{,}2\) | \(0{,}1\) |

On vérifie que \({0{,}4 + 0{,}3 + 0{,}2 + 0{,}1 = 1}\).
{{% /details %}}

> [!TIP] **Propriété - Équiprobabilité**
>
> Si toutes les issues ont la même probabilité, on dit qu’on est dans une situation d’**équiprobabilité**. Si l’univers comporte \(n\) issues, chacune a alors pour probabilité \(\dfrac{1}{n}\).

> [!IMPORTANT] **Remarque**
>
> Les mots « équilibré », « au hasard », « indiscernables au toucher »… signalent en général une situation d’équiprobabilité. Avec le dé à douze faces équilibré, chaque face a une probabilité \(\dfrac{1}{12}\).

## Événements

> [!TIP] **Définitions**
>
> - Un **événement** est une partie de l’univers, c’est-à-dire un ensemble d’issues. On dit qu’une issue **réalise** l’événement si elle lui appartient.
> - La **probabilité d’un événement** \(A\), notée \(P(A)\), est la somme des probabilités des issues qui le réalisent.

> [!TIP] **Propriétés**
>
> - L’événement \(\varnothing\), qui ne contient aucune issue, est l’**événement impossible** : \({P(\varnothing) = 0}\).
> - L’événement \(\Omega\) est l’**événement certain** : \({P(\Omega) = 1}\).
> - Pour tout événement \(A\), \({0 \leq P(A) \leq 1}\).

> [!TIP] **Propriété**
>
> En situation d’équiprobabilité, pour tout événement \(A\) :
> \[
P(A) = \dfrac{\text{nombre d’issues qui réalisent } A}{\text{nombre total d’issues}}.
\]

{{% details title="Exemple" closed="true" %}}
- Avec la roue : l’événement « gagner au moins \(5\) € » est \(\{5\,;\,20\}\), de probabilité \({0{,}2 + 0{,}1 = 0{,}3}\).
- Avec le dé à douze faces : l’événement \(A\) « obtenir un nombre premier » est \(\{2\,;\,3\,;\,5\,;\,7\,;\,11\}\). Il y a équiprobabilité, donc \({P(A) = \dfrac{5}{12}}\).
{{% /details %}}

## Déterminer une loi, calculer une probabilité

> [!NOTE] **Méthode 1 - Déterminer une loi de probabilité**
>
> 1. Un sac contient \(5\) jetons verts, \(8\) jetons jaunes et \(7\) jetons noirs, indiscernables au toucher. On tire un jeton au hasard et on note sa couleur. Déterminer la loi de probabilité.
> 2. Une pièce est truquée de sorte que « Pile » soit trois fois plus probable que « Face ». Déterminer la loi de probabilité.

{{% details title="Solution commentée" closed="true" %}}
1. Il y a \(20\) jetons, chacun a la même probabilité \(\dfrac{1}{20}\) d’être tiré. Les issues sont les couleurs \(V\), \(J\), \(N\), qui ne sont pas équiprobables :

| Couleur | \(V\) | \(J\) | \(N\) |
|---|---|---|---|
| Probabilité | \({\dfrac{5}{20} = 0{,}25}\) | \({\dfrac{8}{20} = 0{,}4}\) | \({\dfrac{7}{20} = 0{,}35}\) |

2. On note \({p = P(\text{Face})}\). Alors \({P(\text{Pile}) = 3p}\) et \({p + 3p = 1}\), donc \({p = 0{,}25}\). Loi : \({P(\text{Face}) = 0{,}25}\) et \({P(\text{Pile}) = 0{,}75}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Calculer la probabilité d’un événement**
>
> On tire au hasard une carte dans un jeu de \(32\) cartes (\(4\) couleurs, \(8\) valeurs : 7, 8, 9, 10, valet, dame, roi, as). Calculer la probabilité des événements \(R\) « tirer un roi », \(C\) « tirer un cœur » et \(F\) « tirer une figure (valet, dame ou roi) ».

{{% details title="Solution commentée" closed="true" %}}
Le tirage se fait au hasard : chacune des \(32\) cartes a la probabilité \(\dfrac{1}{32}\).
- Il y a \(4\) rois : \({P(R) = \dfrac{4}{32} = \dfrac{1}{8}}\).
- Il y a \(8\) cœurs : \({P(C) = \dfrac{8}{32} = \dfrac{1}{4}}\).
- Il y a \({3 \times 4 = 12}\) figures : \({P(F) = \dfrac{12}{32} = \dfrac{3}{8}}\).
{{% /details %}}
