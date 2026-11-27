---
title: 'Principe additif et multiplicatif'
weight: 1
cascade:
  type: docs
---

Dans tout le chapitre, \(n\) et \(p\) désignent des entiers naturels, avec \({p \geq 1}\).

## Cardinal d’un ensemble et principe additif

> [!TIP] **Définition**
>
> Le **cardinal** d’un ensemble fini \(E\) est le nombre d’éléments de \(E\). On le note \(\mathrm{card}(E)\).

{{% details title="Exemple" closed="true" %}}
Si \(E\) est l’ensemble des jours de la semaine, \({\mathrm{card}(E) = 7}\). L’ensemble vide a pour cardinal 0.
{{% /details %}}

> [!TIP] **Propriété (admise) : principe additif**
>
> Si \(E_1, E_2, \dots, E_p\) sont \(p\) ensembles finis **deux à deux disjoints** (aucun élément commun à deux d’entre eux), alors :
> \[
\mathrm{card}(E_1 \cup E_2 \cup \dots \cup E_p) = \mathrm{card}(E_1) + \mathrm{card}(E_2) + \dots + \mathrm{card}(E_p).
\]

![](/images/image305.png)

{{% details title="Exemple" closed="true" %}}
On considère \({A = \{1\,;\,3\,;\,5\}}\) et \({B = \{2\,;\,4\}}\). Ces ensembles sont disjoints (\({A \cap B = \varnothing}\)), donc
\({\mathrm{card}(A \cup B) = 3 + 2 = 5}\) ; en effet \({A \cup B = \{1\,;\,2\,;\,3\,;\,4\,;\,5\}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Si deux ensembles finis \(A\) et \(B\) ne sont pas disjoints, les éléments de \({A \cap B}\) seraient comptés deux fois : on a alors \(\mathrm{card}(A \cup B) = \mathrm{card}(A) + \mathrm{card}(B) - \mathrm{card}(A \cap B)\).

## Couples, triplets, \(p\)-uplets

> [!TIP] **Définitions**
>
> On appelle **couple** (respectivement **triplet**, **\(p\)-uplet**) une collection **ordonnée** de deux (respectivement trois, \(p\)) objets, éventuellement répétés. On les note entre parenthèses : \((a, b)\), \((a, b, c)\), \((a_1, a_2, \dots, a_p)\).

> [!IMPORTANT] **Remarque**
>
> L’ordre compte : le couple \((2, 5)\) est différent du couple \((5, 2)\). Au contraire, dans un ensemble, l’ordre ne compte pas : \({\{2\,;\,5\} = \{5\,;\,2\}}\). Un \(p\)-uplet peut contenir plusieurs fois le même objet.

{{% details title="Exemples" closed="true" %}}
- \((3, 1, 4)\) est un triplet d’entiers.
- \((V, R, V, B)\) est un 4-uplet de couleurs, dans lequel \(V\) apparaît deux fois.
{{% /details %}}

## Produit cartésien

> [!TIP] **Définitions**
>
> Soient \(E\), \(F\), \(G\) et \(E_1, \dots, E_p\) des ensembles.
> - Le **produit cartésien** \({E \times F}\) est l’ensemble des couples \((a, b)\) avec \({a \in E}\) et \({b \in F}\).
> - Le produit cartésien \({E \times F \times G}\) est l’ensemble des triplets \((a, b, c)\) avec \({a \in E}\), \({b \in F}\) et \({c \in G}\).
> - Plus généralement, \({E_1 \times E_2 \times \dots \times E_p}\) est l’ensemble des \(p\)-uplets \((a_1, a_2, \dots, a_p)\) tels que \({a_1 \in E_1}\), \({a_2 \in E_2}\), …, \({a_p \in E_p}\).
>
> **Notations** : \({E \times E}\) se note \(E^2\) et, plus généralement, \({\underbrace{E \times E \times \dots \times E}_{p \text{ fois}}}\) se note \(E^p\).

{{% details title="Exemple" closed="true" %}}
On lance une pièce (résultat dans \({E = \{P\,;\,F\}}\)), puis on tire un jeton numéroté parmi \({F' = \{1\,;\,2\,;\,3\}}\). Les issues sont les couples de \({E \times F'}\) :
\[
E \times F' = \{(P, 1)\,;\,(P, 2)\,;\,(P, 3)\,;\,(F, 1)\,;\,(F, 2)\,;\,(F, 3)\}.
\]
Un arbre permet de les énumérer : chaque chemin correspond à un couple.

![](/images/image306.png)
{{% /details %}}

## Principe multiplicatif

> [!TIP] **Propriétés (admises) : principe multiplicatif**
>
> - Si \(E_1, E_2, \dots, E_p\) sont \(p\) ensembles finis, alors
> \[
\mathrm{card}(E_1 \times E_2 \times \dots \times E_p) = \mathrm{card}(E_1) \times \mathrm{card}(E_2) \times \dots \times \mathrm{card}(E_p).
\]
> - En particulier, si \(E\) est un ensemble fini de cardinal \(n\), alors pour tout entier \({k \geq 1}\), \({\mathrm{card}(E^k) = n^k}\).

{{% details title="Exemples" closed="true" %}}
- Dans l’exemple précédent, \({\mathrm{card}(E \times F') = 2 \times 3 = 6}\).
- Un restaurant propose 3 entrées, 4 plats et 2 desserts : on peut composer \({3 \times 4 \times 2 = 24}\) menus « entrée - plat - dessert » différents.
- Avec l’ensemble \(\{0\,;\,1\}\), on forme \({2^8 = 256}\) suites de 8 chiffres binaires (octets).
{{% /details %}}

## Dénombrer avec un calcul ou une représentation adaptée

> [!NOTE] **Méthode 1 - Dénombrer avec un tableau, un diagramme ou le principe multiplicatif**
>
> 1. Un club sportif compte 40 adhérents. 22 pratiquent le basket, 15 le handball, et 6 pratiquent les deux. Combien d’adhérents ne pratiquent aucun de ces deux sports ?
> 2. Un identifiant est formé de deux lettres majuscules (parmi 26), suivies de trois chiffres (parmi 10). Combien d’identifiants différents peut-on former ?

{{% details title="Solution commentée" closed="true" %}}
**1.** On représente la situation par un diagramme de Venn, en remplissant d’abord l’intersection.
- Basket et handball : 6.
- Basket seulement : \({22 - 6 = 16}\) ; handball seulement : \({15 - 6 = 9}\).
- Au moins un des deux sports : \({16 + 6 + 9 = 31}\) (principe additif, sur des ensembles disjoints).

Le nombre d’adhérents ne pratiquant aucun de ces sports est \({40 - 31 = 9}\).

![](/images/image307.png)

**2.** Un identifiant est un 5-uplet de \({L \times L \times C \times C \times C}\), où \(L\) est l’ensemble des 26 lettres et \(C\) celui des 10 chiffres. D’après le principe multiplicatif :
\[
26 \times 26 \times 10 \times 10 \times 10 = 26^2 \times 10^3 = 676\,000.
\]
{{% /details %}}
