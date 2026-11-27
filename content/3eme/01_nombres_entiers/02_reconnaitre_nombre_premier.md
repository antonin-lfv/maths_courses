---
title: 'Reconnaitre un nombre premier'
weight: 2
cascade:
  type: docs
---

## Nombres premiers

> [!TIP] **Définition**
>
> Un **nombre premier** est un entier naturel qui admet exactement deux diviseurs : \(1\) et lui-même.

{{% details title="Exemple" closed="true" %}}
- \(13\) est premier : ses seuls diviseurs sont \(1\) et \(13\).
- \(15\) n’est pas premier : il admet \(1\), \(3\), \(5\) et \(15\) comme diviseurs.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - \(0\) n’est pas premier : il est divisible par tous les entiers non nuls (il a une infinité de diviseurs).
> - \(1\) n’est pas premier : il n’a qu’un seul diviseur, lui-même.
> - \(2\) est le seul nombre premier pair : tout autre nombre pair est divisible par \(1\), par \(2\) et par lui-même.

> [!TIP] **Propriété**
>
> Les \(25\) nombres premiers inférieurs à \(100\) sont :
> \[
\begin{gathered}
2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ 41, \\[0.3em]
43,\ 47,\ 53,\ 59,\ 61,\ 67,\ 71,\ 73,\ 79,\ 83,\ 89,\ 97.
\end{gathered}
\]

> [!TIP] **Propriété**
>
> Il existe une infinité de nombres premiers.

## Tester si un nombre est premier

> [!NOTE] **Méthode**
>
> Pour savoir si un entier \({n \geq 2}\) est premier, on teste sa divisibilité par les nombres premiers \(2, 3, 5, 7, 11, \dots\) dans l’ordre (avec les critères de divisibilité ou la calculatrice) :
> - si l’un d’eux divise \(n\) (et est différent de \(n\)), alors \(n\) n’est pas premier ;
> - si aucun ne divise \(n\) jusqu’à ce que le carré du nombre testé dépasse \(n\), alors \(n\) est premier.

> [!NOTE] **Exercice résolu**
>
> Les nombres \(119\) et \(113\) sont-ils premiers ?

{{% details title="Solution commentée" closed="true" %}}
- \(119\) : il n’est pas divisible par \(2\) (impair), ni par \(3\) (\({1 + 1 + 9 = 11}\)), ni par \(5\). Par \(7\) : \({119 = 7 \times 17}\). Donc \(119\) n’est pas premier.
- \(113\) : il n’est divisible ni par \(2\), ni par \(3\) (\({1 + 1 + 3 = 5}\)), ni par \(5\), ni par \(7\) (\({113 = 7 \times 16 + 1}\)). Le nombre premier suivant est \(11\), et \({11 \times 11 = 121 > 113}\) : on peut s’arrêter. Donc \(113\) est premier.
{{% /details %}}
