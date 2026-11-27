---
title: 'Proportion et pourcentage'
weight: 1
cascade:
  type: docs
---

## Population et proportion

> [!TIP] **Définitions**
>
> - Une **population** est un ensemble d’individus ou d’éléments. Le nombre d’éléments d’une population \(E\) est son **effectif**, noté \(n_E\).
> - Une **sous-population** \(A\) de \(E\) est une partie de \(E\) ; on note \(n_A\) son effectif.
> - La **proportion** \(p\) d’une sous-population \(A\) par rapport à la population \(E\) est le quotient
> \[
p = \dfrac{n_A}{n_E}.
\]

> [!IMPORTANT] **Remarque**
>
> Une proportion est un nombre compris entre \(0\) et \(1\). On peut l’écrire sous forme décimale, fractionnaire ou en pourcentage : \({p = 0{,}35 = \dfrac{7}{20} = 35\,\%}\).

{{% details title="Exemple" closed="true" %}}
Un lycée compte \(1\,250\) élèves, dont \(540\) internes. La proportion d’internes est \({p = \dfrac{540}{1\,250} = 0{,}432}\), soit \(43{,}2\,\%\).
{{% /details %}}

> [!TIP] **Conséquence**
>
> Si une sous-population \(A\) représente une proportion \(p\) d’une population \(E\), alors \({n_A = p \times n_E}\).

{{% details title="Exemple" closed="true" %}}
Dans une commune de \(8\,400\) habitants, \(15\,\%\) ont moins de \(10\) ans : cela représente \({0{,}15 \times 8\,400 = 1\,260}\) habitants.
{{% /details %}}

## Complémentaire, intersection, réunion

> [!TIP] **Définitions**
>
> Soit \(A\) et \(B\) deux sous-populations d’une population \(E\).
> - Le **complémentaire** de \(A\) dans \(E\), noté \(\overline{A}\), est la sous-population des éléments de \(E\) qui n’appartiennent pas à \(A\).
> - L’**intersection** de \(A\) et \(B\), notée \({A \cap B}\) (« \(A\) inter \(B\) »), est l’ensemble des éléments qui appartiennent à \(A\) **et** à \(B\).
> - La **réunion** de \(A\) et \(B\), notée \({A \cup B}\) (« \(A\) union \(B\) »), est l’ensemble des éléments qui appartiennent à \(A\) **ou** à \(B\) (éventuellement aux deux).

On note \(p(A)\) la proportion de \(A\) dans \(E\), et de même pour les autres sous-populations.

> [!TIP] **Propriétés**
>
> - \({p(A) + p(\overline{A}) = 1}\), donc \({p(\overline{A}) = 1 - p(A)}\).
> - \({p(A \cup B) = p(A) + p(B) - p(A \cap B)}\).

{{% details title="Démonstration de la seconde formule" closed="true" %}}
En additionnant \(n_A\) et \(n_B\), on compte deux fois les éléments de \({A \cap B}\). Donc \({n_{A \cup B} = n_A + n_B - n_{A \cap B}}\). On divise par \(n_E\) pour obtenir la formule sur les proportions.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Dans un club de \(80\) adhérents, \(35\) pratiquent le tennis (\(T\)), \(28\) la natation (\(N\)), et \(9\) pratiquent les deux. Alors
\[
p(T \cup N) = \dfrac{35}{80} + \dfrac{28}{80} - \dfrac{9}{80} = \dfrac{54}{80} = 0{,}675.
\]
\(67{,}5\,\%\) des adhérents pratiquent au moins l’un des deux sports, et \({p\left(\overline{T \cup N}\right) = 0{,}325}\) : \(32{,}5\,\%\) n’en pratiquent aucun.
{{% /details %}}

## Proportion de proportion

> [!TIP] **Propriété**
>
> Soit \(E\), \(F\), \(A\) trois populations telles que \({A \subset F \subset E}\). Si \(p\) est la proportion de \(F\) dans \(E\), et \(p'\) la proportion de \(A\) dans \(F\), alors la proportion de \(A\) dans \(E\) est le produit
> \[
p \times p'.
\]

{{% details title="Démonstration" closed="true" %}}
\({\dfrac{n_A}{n_E} = \dfrac{n_A}{n_F} \times \dfrac{n_F}{n_E} = p' \times p}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Dans le lycée précédent, \(43{,}2\,\%\) des élèves sont internes, et \(55\,\%\) des internes sont en classe de seconde. La proportion d’internes de seconde parmi tous les élèves est \({0{,}432 \times 0{,}55 = 0{,}237\,6}\), soit environ \(23{,}8\,\%\).
{{% /details %}}

## Calculer des proportions

> [!NOTE] **Méthode 1 - Calculer une proportion ou un effectif**
>
> Une entreprise emploie \(360\) salariés, dont \(40\,\%\) de femmes. Parmi les femmes, \(25\,\%\) sont cadres ; parmi les hommes, \(12{,}5\,\%\) sont cadres.
> 1. Calculer le nombre de femmes cadres et le nombre d’hommes cadres.
> 2. Quelle est la proportion de cadres dans l’entreprise ?

{{% details title="Solution commentée" closed="true" %}}
1. Il y a \({0{,}40 \times 360 = 144}\) femmes et \({360 - 144 = 216}\) hommes. Femmes cadres : \({0{,}25 \times 144 = 36}\) ; hommes cadres : \({0{,}125 \times 216 = 27}\).
2. Avec les proportions de proportions : les femmes cadres représentent \({0{,}40 \times 0{,}25 = 0{,}10}\) de l’effectif total, les hommes cadres \({0{,}60 \times 0{,}125 = 0{,}075}\). Ces deux sous-populations n’ont aucun élément commun, donc la proportion de cadres est \({0{,}10 + 0{,}075 = 0{,}175}\), soit \(17{,}5\,\%\). Vérification : \({\dfrac{36 + 27}{360} = \dfrac{63}{360} = 0{,}175}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Utiliser complémentaire et réunion**
>
> Dans une classe, \(60\,\%\) des élèves étudient l’espagnol, \(45\,\%\) l’allemand et \(15\,\%\) les deux langues. Quelle proportion d’élèves n’étudie aucune de ces deux langues ?

{{% details title="Solution commentée" closed="true" %}}
On note \(S\) et \(A\) les sous-populations correspondantes. \({p(S \cup A) = 0{,}60 + 0{,}45 - 0{,}15 = 0{,}90}\). La sous-population cherchée est le complémentaire de \({S \cup A}\) : sa proportion est \({1 - 0{,}90 = 0{,}10}\), soit \(10\,\%\) des élèves.
{{% /details %}}
