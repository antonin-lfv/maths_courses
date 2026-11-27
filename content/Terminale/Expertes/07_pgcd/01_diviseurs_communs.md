---
title: 'Diviseurs communs'
weight: 1
cascade:
  type: docs
---

## PGCD de deux entiers naturels

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux entiers naturels non tous les deux nuls. On note \(\mathcal{D}(a\,;\,b)\) l’ensemble des diviseurs communs à \(a\) et \(b\) : \({\mathcal{D}(a\,;\,b) = \mathcal{D}(a) \cap \mathcal{D}(b)}\).
> Cet ensemble contient un plus grand élément, appelé **plus grand commun diviseur** de \(a\) et \(b\) et noté \(\mathrm{PGCD}(a\,;\,b)\).

> [!IMPORTANT] **Remarques**
>
> - \(\mathcal{D}(a\,;\,b)\) n’est pas vide, car il contient \(1\) : donc \({\mathrm{PGCD}(a\,;\,b) \geq 1}\).
> - Si, par exemple, \({a \neq 0}\), \(\mathcal{D}(a)\) est fini et \({\mathcal{D}(a\,;\,b) \subset \mathcal{D}(a)}\) : l’ensemble des diviseurs communs est fini, ce qui justifie l’existence du plus grand.
> - Si \({a \neq 0}\), tout entier divise 0, donc \({\mathcal{D}(a\,;\,0) = \mathcal{D}(a)}\) et \({\mathrm{PGCD}(a\,;\,0) = a}\).
> - Pour des entiers relatifs \(a\) et \(b\) non tous deux nuls, \({\mathcal{D}(a\,;\,b) = \mathcal{D}(|a|\,;\,|b|)}\) : on définit \({\mathrm{PGCD}(a\,;\,b) = \mathrm{PGCD}(|a|\,;\,|b|)}\).

{{% details title="Exemple" closed="true" %}}
\({\mathcal{D}(10) = \{\pm 1, \pm 2, \pm 5, \pm 10\}}\) et \({\mathcal{D}(15) = \{\pm 1, \pm 3, \pm 5, \pm 15\}}\), donc \({\mathcal{D}(10\,;\,15) = \{\pm 1, \pm 5\}}\) et \({\mathrm{PGCD}(10\,;\,15) = 5}\). De même \({\mathrm{PGCD}(-10\,;\,15) = 5}\).
{{% /details %}}

## Algorithme d’Euclide

> [!TIP] **Propriété**
>
> Soient \(a\) et \(b\) deux entiers naturels non nuls et \(r\) le reste de la division euclidienne de \(a\) par \(b\). Alors
> \[
\mathcal{D}(a\,;\,b) = \mathcal{D}(b\,;\,r), \qquad \text{donc} \qquad \mathrm{PGCD}(a\,;\,b) = \mathrm{PGCD}(b\,;\,r).
\]
> Plus généralement, pour tout entier relatif \(k\), \({\mathcal{D}(a\,;\,b) = \mathcal{D}(b\,;\,a - kb)}\).

{{% details title="Démonstration" closed="true" %}}
Soit \(k\) un entier relatif et \({c = a - kb}\).
- Si \(d\) divise \(a\) et \(b\), il divise la combinaison linéaire \({a - kb = c}\) : \({d \in \mathcal{D}(b\,;\,c)}\).
- Si \(d\) divise \(b\) et \(c\), il divise \({c + kb = a}\) : \({d \in \mathcal{D}(a\,;\,b)}\).

Donc \({\mathcal{D}(a\,;\,b) = \mathcal{D}(b\,;\,c)}\). Avec la division euclidienne \({a = bq + r}\), on prend \({k = q}\) : \({c = r}\).
{{% /details %}}

> [!TIP] **Propriété et définition (algorithme d’Euclide)**
>
> Soient \(a\) et \(b\) deux entiers naturels non nuls. L’**algorithme d’Euclide** consiste à effectuer la division euclidienne de \(a\) par \(b\), puis, tant que le reste n’est pas nul, la division euclidienne du diviseur précédent par le reste précédent :
>
> | Étape | Division | Dividende | Diviseur | Reste |
> |---|---|---|---|---|
> | 1 | \({a = bq_1 + r_1}\) | \(a\) | \(b\) | \({0 \leq r_1 < b}\) |
> | 2 | \({b = r_1q_2 + r_2}\) | \(b\) | \(r_1\) | \({0 \leq r_2 < r_1}\) |
> | 3 | \({r_1 = r_2q_3 + r_3}\) | \(r_1\) | \(r_2\) | \({0 \leq r_3 < r_2}\) |
> | … | … | … | … | … |
> | \(n\) | \({r_{n-2} = r_{n-1}q_n + 0}\) | \({r_{n-2}}\) | \({r_{n-1}}\) | \(0\) |
>
> Les restes forment une suite d’entiers naturels strictement décroissante : on obtient un reste nul après un nombre fini d’étapes. Le PGCD de \(a\) et \(b\) est le **dernier reste non nul** : \({\mathrm{PGCD}(a\,;\,b) = r_{n-1}}\).

> [!IMPORTANT] **Remarque**
>
> À chaque étape, \(\mathrm{PGCD}(a\,;\,b) = \mathrm{PGCD}(b\,;\,r_1) = \mathrm{PGCD}(r_1\,;\,r_2) = \dots = \mathrm{PGCD}(r_{n-1}\,;\,0) = r_{n-1}\). Si \(b\) divise \(a\), l’algorithme s’arrête dès la première étape et \({\mathrm{PGCD}(a\,;\,b) = b}\).

## Ensemble des diviseurs communs

> [!TIP] **Propriété**
>
> Soient \(a\) et \(b\) deux entiers naturels non tous deux nuls et \({d = \mathrm{PGCD}(a\,;\,b)}\). L’ensemble des diviseurs communs à \(a\) et \(b\) est l’ensemble des diviseurs de \(d\) : \({\mathcal{D}(a\,;\,b) = \mathcal{D}(d)}\).

{{% details title="Démonstration" closed="true" %}}
Si \({b = 0}\), c’est la remarque \({\mathcal{D}(a\,;\,0) = \mathcal{D}(a)}\). Sinon, d’après la propriété précédente appliquée à chaque étape de l’algorithme d’Euclide : \(\mathcal{D}(a\,;\,b) = \mathcal{D}(b\,;\,r_1) = \dots = \mathcal{D}(r_{n-1}\,;\,0) = \mathcal{D}(r_{n-1}) = \mathcal{D}(d)\).
{{% /details %}}

## Déterminer un PGCD

> [!NOTE] **Exercice résolu 1 - Avec les listes de diviseurs**
>
> Déterminer \(\mathrm{PGCD}(84\,;\,120)\) à l’aide des listes de diviseurs positifs.

{{% details title="Solution commentée" closed="true" %}}
On cherche les diviseurs par paires (\({84 = 1 \times 84 = 2 \times 42 = \dots}\)) :
- diviseurs positifs de 84 : \(1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84\) ;
- diviseurs positifs de 120 : \(1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120\).

Les diviseurs positifs communs sont \(1, 2, 3, 4, 6, 12\) : \({\mathrm{PGCD}(84\,;\,120) = 12}\). On vérifie que ce sont bien les diviseurs de 12.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Avec l’algorithme d’Euclide**
>
> 1. Déterminer \(\mathrm{PGCD}(1\,078\,;\,322)\) avec l’algorithme d’Euclide.
> 2. En déduire l’ensemble des diviseurs communs à \(1\,078\) et \(322\).

{{% details title="Solution commentée" closed="true" %}}
1. On enchaîne les divisions euclidiennes :
\[
1\,078 = 322 \times 3 + 112, \qquad 322 = 112 \times 2 + 98, \qquad 112 = 98 \times 1 + 14, \qquad 98 = 14 \times 7 + 0.
\]
Le dernier reste non nul est 14 : \({\mathrm{PGCD}(1\,078\,;\,322) = 14}\) (et en effet \({1\,078 = 14 \times 77}\), \({322 = 14 \times 23}\)).
2. \(\mathcal{D}(1\,078\,;\,322) = \mathcal{D}(14) = \{\pm 1, \pm 2, \pm 7, \pm 14\}\).

L’algorithme se programme facilement en Python :

```python
def pgcd(a, b):
    while b != 0:
        a, b = b, a % b   # a % b est le reste de la division euclidienne
    return a

print(pgcd(1078, 322))   # 14
```
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - PGCD dépendant d’un paramètre**
>
> Soit \(n\) un entier naturel. On pose \({a = 3n + 5}\) et \({b = n + 1}\).
> 1. Montrer que \({\mathrm{PGCD}(a\,;\,b) = \mathrm{PGCD}(n + 1\,;\,2)}\).
> 2. En déduire les valeurs possibles de \(\mathrm{PGCD}(a\,;\,b)\) selon \(n\).

{{% details title="Solution commentée" closed="true" %}}
1. \({a - 3b = 3n + 5 - 3n - 3 = 2}\). D’après la propriété \({\mathcal{D}(a\,;\,b) = \mathcal{D}(b\,;\,a - kb)}\) avec \({k = 3}\) : \({\mathcal{D}(a\,;\,b) = \mathcal{D}(n + 1\,;\,2)}\), donc les PGCD sont égaux.
2. \({\mathrm{PGCD}(n + 1\,;\,2)}\) divise 2 : il vaut 1 ou 2.
   - Si \(n\) est impair, \({n + 1}\) est pair et le PGCD vaut 2 (exemple : \({n = 3}\), \({a = 14}\), \({b = 4}\)).
   - Si \(n\) est pair, \({n + 1}\) est impair et le PGCD vaut 1 (exemple : \({n = 4}\), \({a = 17}\), \({b = 5}\)).
{{% /details %}}
