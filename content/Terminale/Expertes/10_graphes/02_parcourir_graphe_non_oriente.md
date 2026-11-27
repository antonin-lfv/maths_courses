---
title: 'Parcourir un graphe non-orienté'
weight: 2
cascade:
  type: docs
---

## Chaîne

> [!TIP] **Définitions**
>
> - Dans un graphe non orienté, une **chaîne** est une suite de sommets dans laquelle deux sommets consécutifs sont adjacents.
> - La **longueur** d’une chaîne est le nombre d’arêtes qui la composent.
> - Une chaîne est **fermée** si son premier et son dernier sommet sont confondus.
> - Un **cycle** est une chaîne fermée dont les arêtes sont toutes distinctes.
> - Un graphe est **connexe** si deux sommets distincts quelconques peuvent toujours être reliés par une chaîne.

> [!IMPORTANT] **Remarque**
>
> S’il existe une chaîne passant par tous les sommets du graphe, alors le graphe est connexe.

{{% details title="Exemples" closed="true" %}}
On reprend le graphe \(G\) du paragraphe précédent.

![](/images/image329.png)

- \({A - B - D - F}\) est une chaîne de longueur 3.
- \({B - C - D - B}\) est un cycle de longueur 3.
- La chaîne \({A - B - D - E - F}\) passe par tous les sommets : \(G\) est connexe.
- Le graphe obtenu en supprimant les arêtes \(B\)-\(D\) et \(C\)-\(D\) n’est plus connexe : aucune chaîne ne relie \(A\) à \(E\).
{{% /details %}}

## Chaîne eulérienne

> [!TIP] **Définitions**
>
> - Une **chaîne eulérienne** est une chaîne qui contient **chaque arête** du graphe **une et une seule fois**.
> - Un **cycle eulérien** est une chaîne eulérienne fermée.

> [!TIP] **Théorème d’Euler (admis)**
>
> Un graphe **connexe** non orienté admet une chaîne eulérienne si et seulement si le nombre de ses sommets de degré impair vaut \(0\) ou \(2\).

> [!TIP] **Conséquences**
>
> - Un graphe connexe admet un cycle eulérien si et seulement si tous ses sommets sont de degré pair.
> - Si un graphe connexe a exactement deux sommets de degré impair, ce sont les extrémités de toute chaîne eulérienne.
> - Un graphe ayant plus de deux sommets de degré impair ne possède pas de chaîne eulérienne.

{{% details title="Exemple" closed="true" %}}
Le graphe \(G\) est connexe et a exactement deux sommets de degré impair, \(B\) et \(C\). Il admet donc une chaîne eulérienne, d’extrémités \(B\) et \(C\), par exemple :
\[
B - A - C - B - D - E - F - D - C,
\]
qui utilise chacune des 8 arêtes exactement une fois. Il n’admet pas de cycle eulérien.
{{% /details %}}

## Parcourir un graphe

> [!NOTE] **Exercice résolu 1 - Chaînes, cycles et connexité**
>
> On considère le graphe \(H\) ci-dessous.
>
> ![](/images/image332.png)
>
> 1. Donner une chaîne de longueur 4 reliant \(A\) à \(C\), puis une chaîne de longueur minimale reliant ces deux sommets.
> 2. Donner un cycle de longueur 4.
> 3. Le graphe \(H\) est-il connexe ?

{{% details title="Solution commentée" closed="true" %}}
1. \({A - E - D - B - C}\) est une chaîne de longueur 4. \(A\) et \(C\) ne sont pas adjacents, mais \({A - B - C}\) est une chaîne de longueur 2 : c’est la longueur minimale.
2. \({B - C - D - E - B}\) est un cycle de longueur 4 (ses quatre arêtes sont distinctes).
3. La chaîne \({A - B - C - D - E}\) passe par tous les sommets : \(H\) est connexe.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Chaîne eulérienne**
>
> Peut-on dessiner le graphe \(H\) sans lever le crayon et sans repasser sur une arête ? Si oui, proposer un tel tracé.

{{% details title="Solution commentée" closed="true" %}}
Dessiner le graphe ainsi revient à trouver une chaîne eulérienne. Les degrés sont : \(A : 2\), \(B : 4\), \(C : 2\), \(D : 3\), \(E : 3\). Le graphe est connexe et a exactement deux sommets de degré impair, \(D\) et \(E\) : d’après le théorème d’Euler, c’est possible, en commençant en \(D\) et en terminant en \(E\) (ou l’inverse). Par exemple :
\[
D - C - B - A - E - B - D - E.
\]
On vérifie que les 7 arêtes sont utilisées une seule fois.
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Cycle eulérien**
>
> Un agent d’entretien doit nettoyer toutes les allées d’un parc, représentées par les arêtes du graphe complet d’ordre 5 (cinq carrefours reliés deux à deux). Peut-il parcourir chaque allée exactement une fois et revenir à son point de départ ? Même question pour le graphe complet d’ordre 4.

{{% details title="Solution commentée" closed="true" %}}
Il s’agit de savoir si le graphe admet un cycle eulérien.
- Graphe complet d’ordre 5 : il est connexe et chaque sommet est de degré 4, pair. Il admet donc un cycle eulérien : c’est possible. Par exemple, avec les sommets \(1, 2, 3, 4, 5\) : \(1 - 2 - 3 - 4 - 5 - 1 - 3 - 5 - 2 - 4 - 1\) (10 arêtes).
- Graphe complet d’ordre 4 : chaque sommet est de degré 3, impair, et il y a 4 sommets de degré impair : il n’existe ni cycle ni même chaîne eulérienne. C’est impossible.
{{% /details %}}
