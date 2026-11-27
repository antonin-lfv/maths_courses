---
title: 'Calculs de probabilités'
weight: 2
cascade:
  type: docs
---

Dans cette page, on reprend l’expérience du dé équilibré à douze faces : \({\Omega = \{1\,;\,2\,;\,\dots\,;\,12\}}\), en situation d’équiprobabilité. On considère les événements \(A\) « obtenir un nombre pair » et \(B\) « obtenir un multiple de \(3\) » :
\[
A = \{2\,;\,4\,;\,6\,;\,8\,;\,10\,;\,12\}, \qquad B = \{3\,;\,6\,;\,9\,;\,12\}.
\]

## Événement contraire

> [!TIP] **Définition**
>
> L’**événement contraire** d’un événement \(A\), noté \(\overline{A}\), est l’ensemble des issues de \(\Omega\) qui ne réalisent pas \(A\).

> [!TIP] **Propriété**
>
> Pour tout événement \(A\), \({P(A) + P(\overline{A}) = 1}\), c’est-à-dire \({P(\overline{A}) = 1 - P(A)}\).

{{% details title="Justification" closed="true" %}}
Chaque issue de \(\Omega\) réalise soit \(A\), soit \(\overline{A}\), mais pas les deux. La somme des probabilités des issues de \(A\) et de celles de \(\overline{A}\) est donc la somme des probabilités de toutes les issues, qui vaut \(1\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(\overline{B}\) est l’événement « ne pas obtenir un multiple de \(3\) ». \({P(B) = \dfrac{4}{12} = \dfrac{1}{3}}\), donc \({P(\overline{B}) = 1 - \dfrac{1}{3} = \dfrac{2}{3}}\).
{{% /details %}}

## Intersection et réunion

> [!TIP] **Définitions**
>
> Soit \(A\) et \(B\) deux événements.
> - L’événement \({A \cap B}\) (« \(A\) **et** \(B\) ») est formé des issues qui réalisent à la fois \(A\) et \(B\).
> - L’événement \({A \cup B}\) (« \(A\) **ou** \(B\) ») est formé des issues qui réalisent au moins l’un des deux événements.

On visualise ces événements sur un **diagramme de Venn** :

![](/images/image396.png)

{{% details title="Exemple" closed="true" %}}
\({A \cap B = \{6\,;\,12\}}\) : « obtenir un multiple de \(6\) ». \({A \cup B = \{2\,;\,3\,;\,4\,;\,6\,;\,8\,;\,9\,;\,10\,;\,12\}}\).
{{% /details %}}

> [!TIP] **Définition**
>
> Deux événements \(A\) et \(B\) sont **incompatibles** s’ils ne peuvent pas être réalisés simultanément, c’est-à-dire si \({A \cap B = \varnothing}\).

> [!TIP] **Propriétés**
>
> Pour tous événements \(A\) et \(B\) :
> \[
P(A \cup B) = P(A) + P(B) - P(A \cap B).
\]
> En particulier, si \(A\) et \(B\) sont incompatibles, \({P(A \cup B) = P(A) + P(B)}\).

{{% details title="Justification" closed="true" %}}
Dans la somme \({P(A) + P(B)}\), les probabilités des issues de \({A \cap B}\) sont comptées deux fois : on les retire une fois. Si \({A \cap B = \varnothing}\), il n’y a rien à retirer.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({P(A \cup B) = \dfrac{6}{12} + \dfrac{4}{12} - \dfrac{2}{12} = \dfrac{8}{12} = \dfrac{2}{3}}\), ce que confirme le dénombrement direct de \({A \cup B}\) (\(8\) issues).

L’événement \(C\) « obtenir \(1\) ou \(5\) » est incompatible avec \(A\) (\(1\) et \(5\) sont impairs) : \({P(A \cup C) = \dfrac{6}{12} + \dfrac{2}{12} = \dfrac{2}{3}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Un événement et son contraire sont toujours incompatibles, et leur réunion est \(\Omega\). Mais deux événements incompatibles ne sont pas forcément contraires : \(A\) et \(C\) ci-dessus sont incompatibles, sans que \({C = \overline{A}}\).

## Calculer avec les formules

> [!NOTE] **Méthode 1 - Utiliser la formule de la réunion**
>
> \(E\) et \(F\) sont deux événements tels que \({P(E) = 0{,}45}\), \({P(F) = 0{,}3}\) et \({P(E \cup F) = 0{,}6}\).
> 1. Calculer \({P(E \cap F)}\). Les événements \(E\) et \(F\) sont-ils incompatibles ?
> 2. Calculer \(P(\overline{E})\) et \({P\left(\overline{E \cup F}\right)}\).

{{% details title="Solution commentée" closed="true" %}}
1. \(P(E \cap F) = P(E) + P(F) - P(E \cup F) = 0{,}45 + 0{,}3 - 0{,}6 = 0{,}15\). Comme \({P(E \cap F) \neq 0}\), \(E\) et \(F\) ne sont pas incompatibles.
2. \({P(\overline{E}) = 1 - 0{,}45 = 0{,}55}\) et \({P\left(\overline{E \cup F}\right) = 1 - 0{,}6 = 0{,}4}\) : c’est la probabilité que ni \(E\) ni \(F\) ne soit réalisé.
{{% /details %}}

> [!NOTE] **Méthode 2 - Passer par l’événement contraire**
>
> Avec la roue de loterie de la page précédente (gains \(0\), \(1\), \(5\), \(20\) € de probabilités \(0{,}4\), \(0{,}3\), \(0{,}2\), \(0{,}1\)), calculer la probabilité de gagner quelque chose, puis celle de gagner une somme impaire ou supérieure à \(4\) €.

{{% details title="Solution commentée" closed="true" %}}
- « Gagner quelque chose » est le contraire de « gagner \(0\) € » : sa probabilité est \({1 - 0{,}4 = 0{,}6}\).
- Soit \(I\) « gain impair » \({= \{1\,;\,5\}}\) et \(S\) « gain supérieur à \(4\) » \({= \{5\,;\,20\}}\). \({P(I) = 0{,}5}\), \({P(S) = 0{,}3}\), \({I \cap S = \{5\}}\) et \({P(I \cap S) = 0{,}2}\). Donc \({P(I \cup S) = 0{,}5 + 0{,}3 - 0{,}2 = 0{,}6}\). (Vérification : \({I \cup S = \{1\,;\,5\,;\,20\}}\), de probabilité \({0{,}3 + 0{,}2 + 0{,}1 = 0{,}6}\).)
{{% /details %}}
