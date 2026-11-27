---
title: 'Étudier des expériences aléatoires à deux épreuves'
weight: 3
cascade:
  type: docs
---

## Expériences à deux épreuves

> [!TIP] **Définition**
>
> La succession de deux expériences aléatoires constitue une **expérience aléatoire à deux épreuves**. Chaque issue est alors un couple de résultats : (résultat de la 1ʳᵉ épreuve ; résultat de la 2ᵉ épreuve).

{{% details title="Exemple" closed="true" %}}
On lance une pièce équilibrée (Pile ou Face), puis un dé équilibré à \(4\) faces numérotées de \(1\) à \(4\). Une issue possible est « obtenir Pile puis \(3\) », notée \((P\,;\,3)\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Dans cet exemple, le résultat de la deuxième épreuve ne dépend pas du résultat de la première : on dit que les deux épreuves sont **indépendantes**. Ce serait différent, par exemple, si l’on tirait successivement deux boules d’une urne **sans remettre** la première.

## Dénombrer les issues

> [!NOTE] **Méthode**
>
> Pour étudier une expérience aléatoire à deux épreuves, on peut lister toutes les issues dans un **tableau à double entrée** ou à l’aide d’un **arbre**. Lorsque les issues sont équiprobables, on compte ensuite les issues favorables.

{{% details title="Exemple - avec un arbre" closed="true" %}}
Pour l’expérience « pièce puis dé à \(4\) faces », l’arbre suivant montre les \({2 \times 4 = 8}\) issues :

![](/images/image450.png)

Les \(8\) issues sont équiprobables : chacune a une probabilité de \(\dfrac{1}{8}\). L’évènement « obtenir Pile et un nombre pair » est réalisé par \((P\,;\,2)\) et \((P\,;\,4)\) : sa probabilité est \({\dfrac{2}{8} = \dfrac{1}{4}}\).
{{% /details %}}

{{% details title="Exemple - avec un tableau à double entrée" closed="true" %}}
On lance deux dés équilibrés à \(4\) faces et on additionne les deux nombres obtenus. On complète le tableau des sommes :

| Dé 1 / Dé 2 | \(1\) | \(2\) | \(3\) | \(4\) |
|---|---|---|---|---|
| \(1\) | \(2\) | \(3\) | \(4\) | \(5\) |
| \(2\) | \(3\) | \(4\) | \(5\) | \(6\) |
| \(3\) | \(4\) | \(5\) | \(6\) | \(7\) |
| \(4\) | \(5\) | \(6\) | \(7\) | \(8\) |

Il y a \(16\) issues équiprobables.
- « La somme vaut \(5\) » : \(4\) cases, donc une probabilité de \({\dfrac{4}{16} = \dfrac{1}{4}}\).
- « La somme est supérieure ou égale à \(6\) » : \(6\) cases (\(3\) fois \(6\), \(2\) fois \(7\), \(1\) fois \(8\)), donc \({\dfrac{6}{16} = \dfrac{3}{8}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Une urne contient trois jetons : un rouge (R), un vert (V) et un bleu (B). On tire un jeton, on note sa couleur, on le **remet** dans l’urne, puis on tire un second jeton.
> 1. Combien y a-t-il d’issues ? Sont-elles équiprobables ?
> 2. Quelle est la probabilité d’obtenir deux jetons de la même couleur ?
> 3. Quelle est la probabilité d’obtenir au moins un jeton rouge ?

{{% details title="Solution commentée" closed="true" %}}
1. Chaque tirage a \(3\) résultats équiprobables : il y a \({3 \times 3 = 9}\) issues équiprobables : (R;R), (R;V), (R;B), (V;R), (V;V), (V;B), (B;R), (B;V), (B;B).
2. Même couleur : (R;R), (V;V), (B;B), soit \(3\) issues : probabilité \({\dfrac{3}{9} = \dfrac{1}{3}}\).
3. L’évènement contraire « aucun rouge » est réalisé par (V;V), (V;B), (B;V), (B;B), soit \(4\) issues, de probabilité \(\dfrac{4}{9}\). Donc la probabilité d’obtenir au moins un rouge est \({1 - \dfrac{4}{9} = \dfrac{5}{9}}\).
{{% /details %}}
