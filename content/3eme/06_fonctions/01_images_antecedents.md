---
title: 'Déterminer des images et des antécédents'
weight: 1
cascade:
  type: docs
---

## Notion de fonction

> [!TIP] **Définition**
>
> Une **fonction** est un procédé qui, à un nombre \(x\), fait correspondre un nombre unique appelé **image** de \(x\).

{{% details title="Exemple" closed="true" %}}
Le procédé « multiplier par \(2\), puis ajouter \(5\) » est une fonction : \({3 \mapsto 11}\), \({-4 \mapsto -3}\), \({0{,}5 \mapsto 6}\).
{{% /details %}}

> [!TIP] **Notation**
>
> Si on nomme \(f\) la fonction, l’image d’un nombre \(x\) est notée \(f(x)\) (lire « \(f\) de \(x\) »). On note aussi \({f : x \mapsto f(x)}\).

{{% details title="Exemple 1 - fonction définie par une formule" closed="true" %}}
Soit \(f\) la fonction qui, à tout nombre \(x\), fait correspondre le nombre \({2x + 5}\). On écrit \({f : x \mapsto 2x + 5}\), ou \({f(x) = 2x + 5}\).
- \({f(3) = 2 \times 3 + 5 = 11}\) : l’image de \(3\) par \(f\) est \(11\).
- \({f(-4) = 2 \times (-4) + 5 = -3}\) : l’image de \({-4}\) est \({-3}\).
{{% /details %}}

{{% details title="Exemple 2 - fonction définie par un tableau" closed="true" %}}
La fonction \(h\) donne la température (en °C) relevée à différentes heures \(x\) d’une journée :

| \(x\) (heure) | \(6\) | \(9\) | \(12\) | \(15\) | \(18\) |
|---|---|---|---|---|---|
| \(h(x)\) | \(4\) | \(9\) | \(14\) | \(15\) | \(9\) |

On lit \({h(12) = 14}\) : l’image de \(12\) par \(h\) est \(14\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Il ne faut pas confondre \(f\) et \(f(x)\) : \(f\) désigne une **fonction** (un procédé), tandis que \(f(x)\) désigne un **nombre**, l’image de \(x\) par \(f\).

## Antécédents

> [!TIP] **Définition**
>
> Si un nombre \(x\) a pour image le nombre \(y\) par une fonction \(f\), on dit que \(x\) est **un antécédent** de \(y\) par la fonction \(f\).

{{% details title="Exemple" closed="true" %}}
Avec la fonction \(h\) de l’exemple 2 : \({h(9) = 9}\) et \({h(18) = 9}\). Le nombre \(9\) a donc deux antécédents par \(h\) : \(9\) et \(18\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Un nombre \(x\) ne peut pas avoir plusieurs images, mais un nombre \(y\) peut avoir plusieurs antécédents. Par exemple, si \({g(x) = x^2}\), le nombre \(16\) a deux antécédents : \(4\) et \({-4}\).
> - Un nombre peut n’avoir aucun antécédent. Par exemple, si \({g(x) = x^2}\), le nombre \({-9}\) n’a aucun antécédent, car un carré n’est jamais négatif.

## Calculer images et antécédents

> [!NOTE] **Méthode**
>
> - Pour calculer l’**image** de \(a\) par \(f\), on remplace \(x\) par \(a\) dans l’expression de \(f(x)\).
> - Pour trouver les **antécédents** de \(b\) par \(f\), on résout l’équation \({f(x) = b}\).

> [!NOTE] **Exercice résolu**
>
> Soit \(f\) la fonction définie par \({f(x) = 3x - 7}\).
> 1. Calculer l’image de \({-2}\) par \(f\).
> 2. Déterminer l’antécédent de \(8\) par \(f\).

{{% details title="Solution commentée" closed="true" %}}
1. \({f(-2) = 3 \times (-2) - 7 = -6 - 7 = -13}\). L’image de \({-2}\) est \({-13}\).
2. On résout \({f(x) = 8}\) : \({3x - 7 = 8}\), soit \({3x = 15}\), donc \({x = 5}\). L’antécédent de \(8\) par \(f\) est \(5\) (vérification : \({f(5) = 15 - 7 = 8}\)).
{{% /details %}}
