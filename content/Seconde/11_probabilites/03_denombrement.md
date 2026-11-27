---
title: 'Dénombrement : tableaux et arbres'
weight: 3
cascade:
  type: docs
---

En situation d’équiprobabilité, calculer une probabilité revient à **compter** des issues. Lorsque l’expérience comporte plusieurs étapes, on organise ce comptage avec un tableau ou un arbre.

## Tableau à double entrée

> [!TIP] **Propriété**
>
> Lorsqu’une expérience consiste à combiner deux choix (par exemple deux lancers), on peut représenter toutes les issues dans un **tableau à double entrée** : une ligne par résultat du premier choix, une colonne par résultat du second. Si le premier choix a \(n\) résultats et le second \(m\), il y a \({n \times m}\) issues.

{{% details title="Exemple" closed="true" %}}
On lance deux dés tétraédriques équilibrés (faces numérotées de \(1\) à \(4\)), un rouge et un bleu, et on note la somme des deux numéros.

| Rouge \ Bleu | \(1\) | \(2\) | \(3\) | \(4\) |
|---|---|---|---|---|
| \(1\) | \(2\) | \(3\) | \(4\) | \(5\) |
| \(2\) | \(3\) | \(4\) | \(5\) | \(6\) |
| \(3\) | \(4\) | \(5\) | \(6\) | \(7\) |
| \(4\) | \(5\) | \(6\) | \(7\) | \(8\) |

Les \({4 \times 4 = 16}\) couples (rouge ; bleu) sont équiprobables. La somme \(5\) apparaît \(4\) fois : la probabilité de l’événement « la somme vaut \(5\) » est \({\dfrac{4}{16} = \dfrac{1}{4}}\). En revanche, les sommes ne sont pas équiprobables : la probabilité que la somme vaille \(2\) n’est que de \(\dfrac{1}{16}\).
{{% /details %}}

## Arbre des possibles

> [!TIP] **Propriété**
>
> Lorsqu’une expérience se déroule en plusieurs étapes, on peut représenter les issues par un **arbre** : chaque étape correspond à un niveau de branches, et chaque chemin complet (de la racine à une extrémité) correspond à une issue.

{{% details title="Exemple" closed="true" %}}
On lance trois fois une pièce équilibrée et on note la suite des résultats (P pour Pile, F pour Face).

![](/images/image397.png)

L’arbre comporte \({2 \times 2 \times 2 = 8}\) chemins, donc \(8\) issues équiprobables. L’événement « obtenir exactement deux Pile » est réalisé par PPF, PFP et FPP : sa probabilité est \(\dfrac{3}{8}\). L’événement « obtenir au moins un Face » est le contraire de « PPP » : sa probabilité est \({1 - \dfrac{1}{8} = \dfrac{7}{8}}\).
{{% /details %}}

## Tableau de proportions et diagramme

> [!IMPORTANT] **Remarque**
>
> Lorsqu’on choisit **au hasard** un individu dans une population, la probabilité qu’il appartienne à une sous-population est égale à la proportion de cette sous-population. Les calculs du chapitre 10 sur les proportions (\({p \times p'}\), réunion, complémentaire) s’appliquent alors directement.

> [!NOTE] **Méthode 1 - Compléter et exploiter un tableau à double entrée**
>
> Dans un lycée, \(52\,\%\) des élèves sont des filles. \(30\,\%\) des filles et \(20\,\%\) des garçons pratiquent un sport en club. On choisit un élève au hasard ; on note \(F\) « l’élève est une fille » et \(S\) « l’élève pratique un sport en club ».
> 1. Calculer \({P(F \cap S)}\) et \({P(\overline{F} \cap S)}\).
> 2. Compléter un tableau de probabilités à double entrée, puis calculer \(P(S)\) et \({P(F \cup S)}\).

{{% details title="Solution commentée" closed="true" %}}
1. Les filles sportives représentent \(30\,\%\) de \(52\,\%\) des élèves : \({P(F \cap S) = 0{,}52 \times 0{,}30 = 0{,}156}\). De même, \({P(\overline{F}) = 0{,}48}\) et \({P(\overline{F} \cap S) = 0{,}48 \times 0{,}20 = 0{,}096}\).
2. On complète par différences (chaque ligne et chaque colonne se totalise) :

| | \(S\) | \(\overline{S}\) | Total |
|---|---|---|---|
| \(F\) | \(0{,}156\) | \(0{,}364\) | \(0{,}52\) |
| \(\overline{F}\) | \(0{,}096\) | \(0{,}384\) | \(0{,}48\) |
| Total | \(0{,}252\) | \(0{,}748\) | \(1\) |

   \({P(S) = 0{,}156 + 0{,}096 = 0{,}252}\). Puis \(P(F \cup S) = P(F) + P(S) - P(F \cap S) = 0{,}52 + 0{,}252 - 0{,}156 = 0{,}616\). (Vérification : \({1 - P(\overline{F} \cap \overline{S}) = 1 - 0{,}384 = 0{,}616}\).)
{{% /details %}}

> [!NOTE] **Méthode 2 - Exploiter un arbre**
>
> Un code d’accès est formé d’une lettre choisie au hasard parmi A, B, C, suivie d’un chiffre choisi au hasard parmi 1, 2. Représenter les codes possibles par un arbre, puis calculer la probabilité que le code contienne la lettre A ou le chiffre 2.

{{% details title="Solution commentée" closed="true" %}}
Au premier niveau, trois branches (A, B, C) ; de chacune partent deux branches (1, 2). On obtient \({3 \times 2 = 6}\) codes équiprobables : A1, A2, B1, B2, C1, C2.

L’événement « contient A ou 2 » est réalisé par A1, A2, B2, C2 : sa probabilité est \({\dfrac{4}{6} = \dfrac{2}{3}}\). Avec la formule : \({P(\text{A}) = \dfrac{2}{6}}\), \({P(2) = \dfrac{3}{6}}\), \({P(\text{A et } 2) = \dfrac{1}{6}}\), donc \({P = \dfrac{2}{6} + \dfrac{3}{6} - \dfrac{1}{6} = \dfrac{4}{6}}\).
{{% /details %}}
