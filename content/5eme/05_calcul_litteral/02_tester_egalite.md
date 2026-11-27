---
title: 'Tester une égalité'
weight: 2
cascade:
  type: docs
---

## Égalité

> [!TIP] **Définitions**
>
> - Une **égalité** est constituée de deux **membres** séparés par un signe \({=}\) : le membre de gauche et le membre de droite.
> - Une égalité est **vraie** quand les deux membres ont la même valeur.

{{% details title="Exemple" closed="true" %}}
\({4 \times 6 = 30 - 6}\) est vraie (les deux membres valent \(24\)). \({2 + 3 \times 4 = 20}\) est fausse (le membre de gauche vaut \(14\)).
{{% /details %}}

## Égalités avec des lettres

> [!TIP] **Propriété**
>
> Une égalité dans laquelle interviennent des expressions littérales peut être **vraie** pour certaines valeurs attribuées aux lettres et **fausse** pour d’autres.

{{% details title="Exemple" closed="true" %}}
On considère l’égalité \({2x + 1 = x + 4}\).
- Pour \({x = 3}\) : membre de gauche \({2 \times 3 + 1 = 7}\) ; membre de droite \({3 + 4 = 7}\). L’égalité est vraie pour \({x = 3}\).
- Pour \({x = 5}\) : \({2 \times 5 + 1 = 11}\) et \({5 + 4 = 9}\). L’égalité est fausse pour \({x = 5}\).
{{% /details %}}

> [!NOTE] **Méthode 1 - Démontrer qu’une égalité est vraie pour tout nombre**
>
> Pour démontrer que deux expressions littérales sont égales pour **tout** nombre \(x\), on peut transformer l’écriture de l’une pour obtenir l’écriture de l’autre. Essayer quelques valeurs ne suffit pas.

{{% details title="Exemple" closed="true" %}}
L’égalité \({3(x + 2) - x = 2x + 6}\) est-elle vraie pour tout nombre \(x\) ? On développe et on réduit le membre de gauche : \({3(x + 2) - x = 3x + 6 - x = 2x + 6}\). C’est le membre de droite : l’égalité est vraie pour tout nombre \(x\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Démontrer qu’une égalité n’est pas toujours vraie**
>
> Pour démontrer que deux expressions littérales ne sont pas égales pour tout nombre \(x\), il suffit de trouver **une** valeur de \(x\) pour laquelle les deux membres ont des valeurs différentes : c’est un **contre-exemple**.

{{% details title="Exemple" closed="true" %}}
L’égalité \({x^2 = 2x}\) est-elle vraie pour tout nombre \(x\) ? Pour \({x = 3}\) : \({3^2 = 9}\) et \({2 \times 3 = 6}\). Les deux membres sont différents : l’égalité n’est pas vraie pour tout \(x\). (Elle est pourtant vraie pour \({x = 2}\) : \({4 = 4}\).)
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> 1. L’égalité \({5x - 3 = 2x + 9}\) est-elle vraie pour \({x = 4}\) ? pour \({x = 1}\) ?
> 2. Démontrer que, pour tout nombre \(x\), \({2(x + 4) + 3x = 5x + 8}\).

{{% details title="Solution commentée" closed="true" %}}
1. Pour \({x = 4}\) : \({5 \times 4 - 3 = 17}\) et \({2 \times 4 + 9 = 17}\) : vraie. Pour \({x = 1}\) : \({5 - 3 = 2}\) et \({2 + 9 = 11}\) : fausse.
2. \({2(x + 4) + 3x = 2x + 8 + 3x = 5x + 8}\) : l’égalité est vraie pour tout nombre \(x\).
{{% /details %}}
