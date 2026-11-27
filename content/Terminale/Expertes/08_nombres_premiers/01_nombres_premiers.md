---
title: 'Nombres premiers'
weight: 1
cascade:
  type: docs
---

## Définition d’un nombre premier

> [!TIP] **Définition**
>
> Un entier naturel \(p\) est **premier** s’il possède exactement deux diviseurs positifs distincts : \(1\) et \(p\).

{{% details title="Exemples" closed="true" %}}
- \(1\) n’est pas premier : il n’a qu’un seul diviseur positif.
- \(2\) est le plus petit nombre premier, et le seul nombre premier pair (tout autre nombre pair est divisible par 1, 2 et lui-même).
- \(29\) est premier ; \({51 = 3 \times 17}\) ne l’est pas.
- Les nombres premiers inférieurs à 50 sont : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
{{% /details %}}

## Plus petit diviseur premier

> [!TIP] **Théorème**
>
> - Tout entier naturel \({n \geq 2}\) admet au moins un diviseur premier ; son plus petit diviseur supérieur ou égal à 2 est premier.
> - Si \({n \geq 2}\) n’est pas premier, son plus petit diviseur premier \(p\) vérifie \({p \leq \sqrt{n}}\).

{{% details title="Démonstration" closed="true" %}}
- L’ensemble des diviseurs de \(n\) supérieurs ou égaux à 2 n’est pas vide (il contient \(n\)) : il a un plus petit élément \(p\). Si \(p\) n’était pas premier, il aurait un diviseur \(d\) avec \({2 \leq d < p}\), et \(d\) diviserait \(n\) : cela contredit la définition de \(p\). Donc \(p\) est premier.
- Si \(n\) n’est pas premier, on écrit \({n = pq}\) avec \(q\) diviseur de \(n\) et \({q \geq 2}\) (sinon \({n = p}\) serait premier). Par minimalité de \(p\), \({q \geq p}\), donc \({n = pq \geq p^2}\), soit \({p \leq \sqrt{n}}\).
{{% /details %}}

{{% details title="Exemples" closed="true" %}}
- \(91\) n’est pas premier : son plus petit diviseur premier est \({7 \leq \sqrt{91} \approx 9{,}5}\) (\({91 = 7 \times 13}\)).
- \({49 = 7^2}\) : son plus petit diviseur premier est \({7 = \sqrt{49}}\).
{{% /details %}}

> [!TIP] **Propriété (test de primalité)**
>
> Soit \({n \geq 2}\) un entier. Si \(n\) n’est divisible par aucun nombre premier \(p\) tel que \({p \leq \sqrt{n}}\), alors \(n\) est premier.

{{% details title="Exemple" closed="true" %}}
\({\sqrt{97} \approx 9{,}8}\). Les nombres premiers inférieurs à 9,8 sont 2, 3, 5 et 7. Or 97 est impair, la somme de ses chiffres (16) n’est pas multiple de 3, il ne se termine ni par 0 ni par 5, et \({97 = 7 \times 13 + 6}\). Donc 97 est premier.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Ce test devient très long pour de grands nombres : il faut connaître et essayer tous les nombres premiers jusqu’à \(\sqrt{n}\). La difficulté à décomposer de très grands nombres est à la base de certaines méthodes de cryptographie.

## Infinité des nombres premiers

> [!TIP] **Théorème**
>
> Il existe une infinité de nombres premiers.

{{% details title="Démonstration" closed="true" %}}
On raisonne par l’absurde : supposons qu’il n’y ait qu’un nombre fini de nombres premiers \(p_1, p_2, \dots, p_k\). On pose \({N = p_1p_2\cdots p_k + 1 \geq 3}\). D’après le théorème précédent, \(N\) admet un diviseur premier, qui est l’un des \(p_i\). Alors \(p_i\) divise \(N\) et \(p_1p_2\cdots p_k\), donc il divise la différence \({N - p_1\cdots p_k = 1}\) : c’est impossible car \({p_i \geq 2}\). Il y a donc une infinité de nombres premiers.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - On connaît des nombres premiers gigantesques, de plusieurs dizaines de millions de chiffres, souvent de la forme \({2^p - 1}\) (nombres de Mersenne).
> - Aucune formule simple ne donne tous les nombres premiers. Certaines expressions en fournissent beaucoup : \({n^2 + n + 41}\) est premier pour \({n = 0, 1, \dots, 39}\), mais pas pour \({n = 40}\) (\({40^2 + 40 + 41 = 41^2}\)).

## Reconnaître un nombre premier

> [!NOTE] **Exercice résolu 1 - Tester la primalité**
>
> Les nombres \(241\) et \(221\) sont-ils premiers ?

{{% details title="Solution commentée" closed="true" %}}
1. \({\sqrt{241} \approx 15{,}5}\) : on teste les nombres premiers 2, 3, 5, 7, 11, 13. 241 est impair ; \({2 + 4 + 1 = 7}\) n’est pas multiple de 3 ; il ne se termine ni par 0 ni par 5 ; \(241 = 7 \times 34 + 3 = 11 \times 21 + 10 = 13 \times 18 + 7\). Aucun ne divise 241 : **241 est premier**.
2. \({\sqrt{221} \approx 14{,}9}\). On teste 2, 3, 5, 7, 11 sans succès, puis \({221 = 13 \times 17}\) : **221 n’est pas premier**.
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Programmer le test de primalité**
>
> Écrire une fonction Python `est_premier(n)` qui renvoie `True` si l’entier \({n \geq 2}\) est premier, puis l’utiliser pour trouver le plus petit nombre premier supérieur à 1 000.

{{% details title="Solution commentée" closed="true" %}}
On teste les diviseurs \(d\) de 2 jusqu’à \(\sqrt{n}\), c’est-à-dire tant que \({d^2 \leq n}\) (il suffit de tester tous les entiers, pas seulement les premiers : si aucun entier ne divise \(n\), aucun premier non plus).

```python
def est_premier(n):
    d = 2
    while d * d <= n:
        if n % d == 0:
            return False
        d = d + 1
    return True

n = 1001
while not est_premier(n):
    n = n + 1
print(n)   # 1009
```
Le plus petit nombre premier supérieur à 1 000 est 1 009 (1 001 = 7 × 11 × 13, 1 003 = 17 × 59, 1 005, 1 007 = 19 × 53 ne le sont pas).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Nombre premier défini par une expression**
>
> Déterminer les entiers naturels \(n\) tels que \({n^2 - 4n + 3}\) soit un nombre premier.

{{% details title="Solution commentée" closed="true" %}}
On factorise : \({n^2 - 4n + 3 = (n - 1)(n - 3)}\). Un nombre premier \(p\) ne peut s’écrire comme produit de deux entiers que sous la forme \({1 \times p}\), \({p \times 1}\), \({(-1) \times (-p)}\) ou \({(-p) \times (-1)}\) : l’un des facteurs vaut \(1\) ou \({-1}\).
- \({n - 1 = 1}\) : \({n = 2}\), le produit vaut \({1 \times (-1) = -1}\), non premier.
- \({n - 1 = -1}\) : \({n = 0}\), le produit vaut \({(-1) \times (-3) = 3}\), premier.
- \({n - 3 = 1}\) : \({n = 4}\), le produit vaut \({3 \times 1 = 3}\), premier.
- \({n - 3 = -1}\) : \({n = 2}\), déjà vu.

Les entiers cherchés sont \({n = 0}\) et \({n = 4}\).
{{% /details %}}
