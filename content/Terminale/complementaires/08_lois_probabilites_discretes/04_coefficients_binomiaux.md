---
title: 'Coefficients binomiaux'
weight: 4
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Soit \(n\) un entier naturel et \(p\) un réel appartenant à \([0\,;\,1]\). On considère un schéma de Bernoulli de paramètres \(n\) et \(p\).
> Le nombre de façons d’obtenir exactement \(k\) succès (\(k\) entier naturel, \(0 \leq k \leq n\)) s’appelle **coefficient binomial**. Il est noté \(\dbinom{n}{k}\) et se lit « \(k\) parmi \(n\) ».

{{% details title="Exemple" closed="true" %}}
Dans un schéma de Bernoulli de paramètre \(n = 3\), les façons d’obtenir exactement deux succès sont \(SSE\), \(SES\) et \(ESS\). Donc \(\dbinom{3}{2} = 3\).
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Dans un schéma de Bernoulli, \(\dbinom{n}{k}\) est le nombre de chemins de l’arbre contenant exactement \(k\) succès.

> [!TIP] **Propriétés (admises)**
>
> Pour tout entier naturel \(n\) et tout entier \(k\) tel que \(0 \leq k \leq n\) :
> - \(\dbinom{n}{0} = \dbinom{n}{n} = 1\) ;
> - \(\dbinom{n}{k} = \dbinom{n}{n - k}\) (propriété de symétrie) ;
> - pour \(1 \leq k \leq n\) : \(\dbinom{n}{k - 1} + \dbinom{n}{k} = \dbinom{n + 1}{k}\) (propriété d’addition, ou relation de Pascal).

## Triangle de Pascal

La relation de Pascal permet de calculer les coefficients binomiaux de proche en proche : chaque case s’obtient en ajoutant la case située juste au-dessus et celle située au-dessus à gauche.

| \(n \backslash k\) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| 0 | 1 | | | | | | | |
| 1 | 1 | 1 | | | | | | |
| 2 | 1 | 2 | 1 | | | | | |
| 3 | 1 | 3 | 3 | 1 | | | | |
| 4 | 1 | 4 | 6 | 4 | 1 | | | |
| 5 | 1 | 5 | 10 | 10 | 5 | 1 | | |
| 6 | 1 | 6 | 15 | 20 | 15 | 6 | 1 | |
| 7 | 1 | 7 | 21 | 35 | 35 | 21 | 7 | 1 |

## Calculer des coefficients binomiaux

> [!NOTE] **Méthode 1 — Avec un arbre ou la calculatrice**
>
> 1. Déterminer, sans calculatrice, \(\dbinom{4}{1}\) et \(\dbinom{4}{3}\).
> 2. À l’aide de la calculatrice, déterminer \(\dbinom{10}{3}\) et \(\dbinom{10}{7}\).

{{% details title="Solution commentée" closed="true" %}}
1. Dans un arbre à 4 niveaux, les chemins avec exactement un succès sont \(SEEE\), \(ESEE\), \(EESE\), \(EEES\) : \(\dbinom{4}{1} = 4\). Par symétrie, \(\dbinom{4}{3} = \dbinom{4}{1} = 4\).
2. À la calculatrice (commande « nCr » ou « Combinaison »), \(\dbinom{10}{3} = 120\), et \(\dbinom{10}{7} = \dbinom{10}{3} = 120\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Avec les propriétés**
>
> 1. On donne \(\dbinom{20}{7} = 77\,520\). Calculer \(\dbinom{20}{13}\).
> 2. On donne \(\dbinom{19}{6} = 27\,132\) et \(\dbinom{19}{7} = 50\,388\). Calculer \(\dbinom{20}{7}\) et vérifier le résultat précédent.

{{% details title="Solution commentée" closed="true" %}}
1. Par symétrie, \(\dbinom{20}{13} = \dbinom{20}{20 - 13} = \dbinom{20}{7} = 77\,520\).
2. Par la relation de Pascal, \(\dbinom{20}{7} = \dbinom{19}{6} + \dbinom{19}{7} = 27\,132 + 50\,388 = 77\,520\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Avec le triangle de Pascal**
>
> À l’aide du triangle de Pascal, déterminer \(\dbinom{8}{3}\).

{{% details title="Solution commentée" closed="true" %}}
On construit la ligne \(n = 8\) à partir de la ligne \(n = 7\) : \(1\,;\,7\,;\,21\,;\,35\,;\,35\,;\,21\,;\,7\,;\,1\). Le coefficient \(\dbinom{8}{3}\) s’obtient en ajoutant les cases \((7, 2)\) et \((7, 3)\) : \(\dbinom{8}{3} = 21 + 35 = 56\).
{{% /details %}}
