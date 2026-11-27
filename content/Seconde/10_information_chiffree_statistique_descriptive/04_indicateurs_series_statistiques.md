---
title: 'Indicateurs de séries statistiques'
weight: 4
cascade:
  type: docs
---

Dans cette page, on utilise la série suivante : la durée \(x_i\) du trajet domicile-lycée (en minutes) de \(20\) élèves.

| Durée \(x_i\) | \(5\) | \(10\) | \(15\) | \(20\) | \(30\) |
|---|---|---|---|---|---|
| Effectif \(n_i\) | \(2\) | \(5\) | \(6\) | \(4\) | \(3\) |

## Moyenne

> [!TIP] **Définition et propriété**
>
> Soit une série de valeurs \(x_1, \dots, x_p\) d’effectifs \(n_1, \dots, n_p\), d’effectif total \({N = n_1 + \dots + n_p}\).
> - La **moyenne** de la série est
> \[
\bar{x} = \dfrac{n_1x_1 + n_2x_2 + \dots + n_px_p}{N}.
\]
> - Si \({f_i = \dfrac{n_i}{N}}\) désigne la **fréquence** de la valeur \(x_i\), alors \({\bar{x} = f_1x_1 + f_2x_2 + \dots + f_px_p}\).

{{% details title="Exemple" closed="true" %}}
\[
\begin{aligned}
\bar{x} &= \dfrac{2 \times 5 + 5 \times 10 + 6 \times 15 + 4 \times 20 + 3 \times 30}{20} \\[0.3em]
&= \dfrac{10 + 50 + 90 + 80 + 90}{20} = \dfrac{320}{20} = 16.
\end{aligned}
\]
La durée moyenne du trajet est de \(16\) minutes.
{{% /details %}}

> [!TIP] **Propriétés - Linéarité de la moyenne**
>
> Soit \(a\) et \(b\) deux réels.
> - Si on multiplie toutes les valeurs d’une série par \(a\), la moyenne est multipliée par \(a\).
> - Si on ajoute \(b\) à toutes les valeurs, la moyenne augmente de \(b\).

{{% details title="Exemple" closed="true" %}}
Si des travaux allongent chaque trajet de \(2\) minutes, la nouvelle moyenne est \({16 + 2 = 18}\) minutes. Si tous les trajets durent \(10\,\%\) de plus (multiplication par \(1{,}1\)), la moyenne devient \({16 \times 1{,}1 = 17{,}6}\) minutes.
{{% /details %}}

## Variance et écart type

> [!TIP] **Définitions**
>
> - La **variance** de la série est la moyenne des carrés des écarts à la moyenne :
> \[
V = \dfrac{n_1(x_1 - \bar{x})^2 + n_2(x_2 - \bar{x})^2 + \dots + n_p(x_p - \bar{x})^2}{N}.
\]
> - L’**écart type** de la série est \({\sigma = \sqrt{V}}\). Il s’exprime dans la même unité que les valeurs.

> [!TIP] **Propriété**
>
> L’écart type mesure la **dispersion** des valeurs autour de la moyenne : plus il est grand, plus les valeurs sont dispersées. On résume souvent une série par le couple \((\bar{x}\,;\,\sigma)\).

{{% details title="Exemple" closed="true" %}}
\[
\begin{aligned}
V &= \dfrac{1}{20}\big(2(5 - 16)^2 + 5(10 - 16)^2 + 6(15 - 16)^2 \\[0.3em]
&\qquad + 4(20 - 16)^2 + 3(30 - 16)^2\big) \\[0.3em]
&= \dfrac{242 + 180 + 6 + 64 + 588}{20} = \dfrac{1\,080}{20} = 54,
\end{aligned}
\]
donc \({\sigma = \sqrt{54} \approx 7{,}3}\) minutes. En pratique, on obtient ces indicateurs avec la calculatrice ou un tableur.
{{% /details %}}

## Médiane, quartiles, écart interquartile

> [!TIP] **Définition**
>
> L’**effectif cumulé croissant** (ECC) associé à une valeur est le nombre de données inférieures ou égales à cette valeur.

| Durée \(x_i\) | \(5\) | \(10\) | \(15\) | \(20\) | \(30\) |
|---|---|---|---|---|---|
| ECC | \(2\) | \(7\) | \(13\) | \(17\) | \(20\) |

> [!TIP] **Définitions**
>
> On range les \(N\) données de la série dans l’ordre croissant.
> - La **médiane** \(\text{Méd}\) partage la série en deux groupes de même effectif : si \(N\) est impair, c’est la donnée de rang \({\dfrac{N + 1}{2}}\) ; si \(N\) est pair, c’est la moyenne des données de rangs \(\dfrac{N}{2}\) et \({\dfrac{N}{2} + 1}\).
> - Le **premier quartile** \(Q_1\) est la plus petite valeur de la série telle qu’au moins \(25\,\%\) des données lui soient inférieures ou égales.
> - Le **troisième quartile** \(Q_3\) est la plus petite valeur de la série telle qu’au moins \(75\,\%\) des données lui soient inférieures ou égales.
> - L’**écart interquartile** est \({Q_3 - Q_1}\).

> [!TIP] **Propriété**
>
> En notant \(\min\) et \(\max\) la plus petite et la plus grande valeur, environ \(25\,\%\) des données sont comprises entre \(\min\) et \(Q_1\), \(25\,\%\) entre \(Q_1\) et \(\text{Méd}\), \(25\,\%\) entre \(\text{Méd}\) et \(Q_3\), et \(25\,\%\) entre \(Q_3\) et \(\max\). L’écart interquartile mesure la dispersion de la moitié « centrale » des données ; on résume la série par le couple \({(\text{Méd}\,;\,Q_3 - Q_1)}\).

{{% details title="Exemple" closed="true" %}}
- \({N = 20}\) est pair : la médiane est la moyenne des 10e et 11e données. D’après les ECC, ces deux données valent \(15\) (les données de rang \(8\) à \(13\) valent \(15\)). \({\text{Méd} = 15}\).
- \({\dfrac{N}{4} = 5}\) : \(Q_1\) est la 5e donnée, soit \({Q_1 = 10}\).
- \({\dfrac{3N}{4} = 15}\) : \(Q_3\) est la 15e donnée, soit \({Q_3 = 20}\).
- L’écart interquartile vaut \({20 - 10 = 10}\) minutes.

On résume ces indicateurs par un **diagramme en boîte** :

![](/images/image395.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La médiane et les quartiles sont peu sensibles aux valeurs extrêmes, contrairement à la moyenne et à l’écart type. Par exemple, si l’élève qui met \(30\) minutes en mettait \(90\), la moyenne passerait à \(19\) minutes, mais la médiane resterait \(15\).

## Comparer des séries

> [!NOTE] **Méthode - Comparer deux séries avec leurs indicateurs**
>
> Dans un autre lycée, on relève les durées de trajet (en minutes) de \(16\) élèves :
> \[
8 \quad 12 \quad 12 \quad 14 \quad 15 \quad 15 \quad 16 \quad 16 \quad 17 \quad 18 \quad 18 \quad 19 \quad 20 \quad 21 \quad 22 \quad 23
\]
> 1. Calculer la moyenne et l’écart type (à la calculatrice), puis la médiane et les quartiles.
> 2. Comparer avec la série de la page.

{{% details title="Solution commentée" closed="true" %}}
1. La somme des données vaut \(266\), donc \({\bar{x} = \dfrac{266}{16} = 16{,}625}\) min. La calculatrice donne \({\sigma \approx 3{,}9}\) min.

   \({N = 16}\) : la médiane est la moyenne des 8e et 9e données, \({\dfrac{16 + 17}{2} = 16{,}5}\). \({\dfrac{N}{4} = 4}\) : \(Q_1\) est la 4e donnée, \({Q_1 = 14}\) ; \({\dfrac{3N}{4} = 12}\) : \(Q_3\) est la 12e donnée, \({Q_3 = 19}\). Écart interquartile : \(5\).
2. Les moyennes (\(16{,}6\) et \(16\)) et les médianes (\(16{,}5\) et \(15\)) sont proches : les durées sont du même ordre. Mais l’écart type (\(3{,}9\) contre \(7{,}3\)) et l’écart interquartile (\(5\) contre \(10\)) sont environ deux fois plus petits : les durées du second lycée sont beaucoup plus homogènes.
{{% /details %}}
