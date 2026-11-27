---
title: 'Calculer une moyenne'
weight: 2
cascade:
  type: docs
---

## Effectifs et fréquences

> [!TIP] **Définitions**
>
> Dans une série de données :
> - l’**effectif** d’une donnée est le nombre de fois où cette donnée apparait ;
> - l’**effectif total** est la somme de tous les effectifs ;
> - la **fréquence** d’une donnée est le quotient de son effectif par l’effectif total :
> \[
\text{fréquence d'une donnée} = \dfrac{\text{effectif de la donnée}}{\text{effectif total}}.
\]

{{% details title="Exemple" closed="true" %}}
On a demandé à \(25\) élèves combien ils ont de frères et sœurs.

| Nombre de frères et sœurs | \(0\) | \(1\) | \(2\) | \(3\) | \(4\) | Total |
|---|---|---|---|---|---|---|
| Effectif | \(5\) | \(9\) | \(7\) | \(3\) | \(1\) | \(25\) |
| Fréquence | \(0{,}2\) | \(0{,}36\) | \(0{,}28\) | \(0{,}12\) | \(0{,}04\) | \(1\) |

La fréquence de la donnée « \(2\) » est \({\dfrac{7}{25} = 0{,}28}\), soit \(28\,\%\).
{{% /details %}}

## Moyenne pondérée

> [!TIP] **Définition**
>
> La **moyenne pondérée** d’une série de données numériques est égale à la somme des produits de chaque donnée par son effectif, divisée par l’effectif total :
> \[
\text{moyenne pondérée} = \dfrac{\text{somme des produits des données par leurs effectifs}}{\text{effectif total}}.
\]

{{% details title="Exemple" closed="true" %}}
Pour la série précédente :
\[
\begin{aligned}
\dfrac{0 \times 5 + 1 \times 9 + 2 \times 7 + 3 \times 3 + 4 \times 1}{25} &= \dfrac{0 + 9 + 14 + 9 + 4}{25} = \dfrac{36}{25} \\[0.3em]
&= 1{,}44.
\end{aligned}
\]
En moyenne, ces élèves ont \(1{,}44\) frère ou sœur.
{{% /details %}}

## Moyenne d’une série regroupée en classes

> [!NOTE] **Méthode**
>
> Pour calculer la moyenne d’une série dont les données sont regroupées en classes :
> - on calcule le **centre** de chaque classe, en faisant la moyenne des valeurs extrêmes de la classe ;
> - on calcule la moyenne pondérée de la série en prenant comme valeurs les centres des classes.
>
> Le résultat est une valeur **approchée** de la moyenne, car on ne connait pas les valeurs exactes à l’intérieur des classes.

{{% details title="Exemple" closed="true" %}}
On reprend les hauteurs des \(60\) plants de tournesol. Centre de la première classe : \({\dfrac{100 + 120}{2} = 110}\) ; de même pour les autres.

| Classe | \([100\,;\,120[\) | \([120\,;\,140[\) | \([140\,;\,160[\) | \([160\,;\,180[\) | \([180\,;\,200[\) |
|---|---|---|---|---|---|
| Centre | \(110\) | \(130\) | \(150\) | \(170\) | \(190\) |
| Effectif | \(8\) | \(15\) | \(22\) | \(11\) | \(4\) |

\[
\begin{aligned}
&\dfrac{110 \times 8 + 130 \times 15 + 150 \times 22 + 170 \times 11 + 190 \times 4}{60} \\[0.3em]
&= \dfrac{880 + 1\,950 + 3\,300 + 1\,870 + 760}{60} = \dfrac{8\,760}{60} = 146.
\end{aligned}
\]
La hauteur moyenne des plants est d’environ \(146\) cm.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Une élève a obtenu les notes suivantes : \(14\) (coefficient \(2\)), \(9\) (coefficient \(1\)), \(16\) (coefficient \(3\)) et \(11\) (coefficient \(2\)). Calculer sa moyenne. Quelle note aurait-elle dû obtenir au devoir de coefficient \(1\) pour avoir \(14\) de moyenne ?

{{% details title="Solution commentée" closed="true" %}}
Les coefficients jouent le rôle d’effectifs ; leur somme est \({2 + 1 + 3 + 2 = 8}\).
\[
\dfrac{14 \times 2 + 9 \times 1 + 16 \times 3 + 11 \times 2}{8} = \dfrac{28 + 9 + 48 + 22}{8} = \dfrac{107}{8} \approx 13{,}4.
\]
Pour une moyenne de \(14\), il faut un total de \({14 \times 8 = 112}\) points, soit \(5\) points de plus : la note de coefficient \(1\) aurait dû être \({9 + 5 = 14}\).
{{% /details %}}
