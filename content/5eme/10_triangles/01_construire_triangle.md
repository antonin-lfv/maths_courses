---
title: 'Construire un triangle'
weight: 1
cascade:
  type: docs
---

## Inégalité triangulaire

> [!TIP] **Propriété**
>
> On peut construire un triangle dont on connaît les longueurs des trois côtés lorsque la longueur de son plus grand côté est inférieure à la somme des longueurs des deux autres côtés.

{{% details title="Exemple" closed="true" %}}
- \(EF = 9\) cm, \(FG = 4\) cm, \(EG = 4{,}5\) cm : \(4 + 4{,}5 = 8{,}5 < 9\). Le triangle n’est pas constructible.
- \(RS = 7\) cm, \(ST = 5\) cm, \(RT = 3\) cm : \(5 + 3 = 8 > 7\). Le triangle est constructible (il existe deux positions possibles pour \(T\), de part et d’autre de \([RS]\)).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Si la plus grande longueur est égale à la somme des deux autres, les trois sommets sont alignés : on parle de triangle « aplati ».

## Somme des angles

> [!TIP] **Propriété**
>
> La somme des mesures des trois angles d’un triangle est égale à \(180^\circ\).

{{% details title="Démonstration" closed="true" %}}
Soit \(ABC\) un triangle. On trace la parallèle \((d)\) à \((BC)\) passant par \(A\). Les angles alternes-internes formés par \((AB)\) avec les parallèles \((d)\) et \((BC)\) sont égaux : l’angle entre \((d)\) et \([AB]\) mesure \(\widehat{B}\). De même, l’angle entre \((d)\) et \([AC]\) mesure \(\widehat{C}\). Ces deux angles et \(\widehat{A}\) forment, autour de \(A\), un angle plat : \(\widehat{A} + \widehat{B} + \widehat{C} = 180^\circ\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Dans un triangle \(KLM\), \(\widehat{K} = 41^\circ\) et \(\widehat{L} = 93^\circ\) : \(\widehat{M} = 180^\circ - 41^\circ - 93^\circ = 46^\circ\).
{{% /details %}}

## Construire avec des angles

> [!TIP] **Propriété**
>
> On peut construire un triangle dans les deux cas suivants :
> - si on connaît la longueur de deux côtés et la mesure de l’angle formé par ces deux côtés ;
> - si on connaît la longueur d’un côté et les mesures des deux angles dont la somme est inférieure à \(180^\circ\).

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> 1. Peut-on construire un triangle de côtés \(6\) cm, \(2{,}5\) cm et \(3{,}5\) cm ?
> 2. Peut-on construire un triangle \(ABC\) avec \(AB = 5\) cm, \(\widehat{A} = 110^\circ\) et \(\widehat{B} = 75^\circ\) ?

{{% details title="Solution commentée" closed="true" %}}
1. \(2{,}5 + 3{,}5 = 6\) : la plus grande longueur est égale à la somme des deux autres. Le triangle est aplati (les points sont alignés).
2. \(110^\circ + 75^\circ = 185^\circ > 180^\circ\) : non, ce triangle n’est pas constructible.
{{% /details %}}
