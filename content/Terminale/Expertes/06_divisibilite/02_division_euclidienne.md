---
title: 'Division euclidienne'
weight: 2
cascade:
  type: docs
---

## Théorème de la division euclidienne

> [!TIP] **Théorème**
>
> Soient \(a\) un entier relatif et \(b\) un entier naturel non nul. Il existe un **unique** couple d’entiers relatifs \((q\,;\,r)\) tel que
> \[
a = bq + r \quad \text{et} \quad 0 \leq r < b.
\]
> \(q\) est le **quotient** et \(r\) le **reste** de la division euclidienne de \(a\) par \(b\).

> [!IMPORTANT] **Interprétation graphique**
>
> On encadre \(a\) par deux multiples consécutifs de \(b\) : \(bq \leq a < b(q + 1)\). Le reste \(r = a - bq\) est l’écart entre \(a\) et le plus grand multiple de \(b\) inférieur ou égal à \(a\).

![](/images/image328.png)

{{% details title="Démonstration" closed="true" %}}
**Existence.** L’ensemble des entiers \(k\) tels que \(kb \leq a\) n’est pas vide (il contient \(-|a|\), car \(-|a|b \leq -|a| \leq a\)) et il est majoré (par \(|a|\), car \(k > |a|\) entraîne \(kb > |a| \geq a\)). Il admet donc un plus grand élément, noté \(q\). Alors \(bq \leq a\) et, \(q + 1\) n’étant pas dans l’ensemble, \(a < b(q + 1)\). En posant \(r = a - bq\), on a \(a = bq + r\) et \(0 \leq r < b\).

**Unicité.** Supposons \(a = bq + r = bq' + r'\) avec \(0 \leq r < b\) et \(0 \leq r' < b\). Alors \(b(q - q') = r' - r\), donc \(r' - r\) est un multiple de \(b\). Or \(-b < r' - r < b\) : le seul multiple de \(b\) dans cet intervalle est 0. Donc \(r = r'\), puis \(bq = bq'\) et \(q = q'\) (car \(b \neq 0\)).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
La division euclidienne de 95 par 7 s’écrit \(95 = 7 \times 13 + 4\) avec \(0 \leq 4 < 7\) : \(q = 13\) et \(r = 4\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Dans la division euclidienne par \(b\), il y a \(b\) restes possibles : \(0, 1, \dots, b - 1\).
> - Il existe beaucoup d’écritures \(a = bq + r\), mais une seule vérifie \(0 \leq r < b\). Par exemple \(95 = 7 \times 12 + 11\) est vraie, mais ce n’est pas la division euclidienne car \(11 > 7\).
> - Pour \(a\) négatif, le reste reste positif : \(-23 = 5 \times (-5) + 2\) (et non \(5 \times (-4) - 3\)).

> [!TIP] **Propriété**
>
> Soient \(a\) un entier relatif et \(b\) un entier naturel non nul. \(b\) divise \(a\) si et seulement si le reste de la division euclidienne de \(a\) par \(b\) est nul.

> [!TIP] **Propriété (disjonction des cas)**
>
> Soit \(b \geq 2\) un entier naturel. Tout entier relatif \(n\) s’écrit sous l’une des formes \(bq\), \(bq + 1\), \(bq + 2\), …, \(bq + (b - 1)\), où \(q\) est un entier relatif.

{{% details title="Exemple" closed="true" %}}
Tout entier est de la forme \(2q\) (pair) ou \(2q + 1\) (impair). Montrons ainsi que \(n\) et \(n^2\) ont toujours la même parité : si \(n = 2q\), \(n^2 = 2(2q^2)\) est pair ; si \(n = 2q + 1\), \(n^2 = 4q^2 + 4q + 1 = 2(2q^2 + 2q) + 1\) est impair.
{{% /details %}}

## Utiliser la division euclidienne

> [!NOTE] **Exercice résolu 1 — Écrire une division euclidienne**
>
> Écrire la division euclidienne de \(250\) par \(17\), puis celle de \(-250\) par \(17\).

{{% details title="Solution commentée" closed="true" %}}
- \(17 \times 14 = 238 \leq 250 < 255 = 17 \times 15\), donc \(250 = 17 \times 14 + 12\), avec \(0 \leq 12 < 17\).
- Pour \(-250\), on encadre par deux multiples consécutifs de 17 : \(17 \times (-15) = -255 \leq -250 < -238 = 17 \times (-14)\). Donc \(-250 = 17 \times (-15) + 5\), avec \(0 \leq 5 < 17\) : \(q = -15\) et \(r = 5\).

Remarque : à partir de \(250 = 17 \times 14 + 12\), on obtient \(-250 = 17 \times (-14) - 12\), qui n’est pas la division euclidienne (reste négatif) ; on corrige en écrivant \(-12 = -17 + 5\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Raisonner par disjonction des cas**
>
> Montrer que, pour tout entier relatif \(n\), \(n^3 - n\) est divisible par 3.

{{% details title="Solution commentée" closed="true" %}}
On remarque que \(n^3 - n = (n - 1)n(n + 1)\). D’après la division euclidienne par 3, \(n\) s’écrit \(3q\), \(3q + 1\) ou \(3q + 2\) avec \(q \in \mathbb{Z}\).
- Si \(n = 3q\) : le facteur \(n\) est un multiple de 3.
- Si \(n = 3q + 1\) : le facteur \(n - 1 = 3q\) est un multiple de 3.
- Si \(n = 3q + 2\) : le facteur \(n + 1 = 3(q + 1)\) est un multiple de 3.

Dans tous les cas, l’un des facteurs est divisible par 3, donc le produit \(n^3 - n\) aussi.
{{% /details %}}

> [!NOTE] **Exercice résolu 3 — Conjecturer puis démontrer une divisibilité**
>
> 1. Calculer \(4^n - 1\) pour \(n = 1, 2, 3, 4\). Que conjecturer ?
> 2. Démontrer cette conjecture par récurrence.

{{% details title="Solution commentée" closed="true" %}}
1. On obtient \(3\), \(15\), \(63\), \(255\) : ils sont tous divisibles par 3. On conjecture que \(4^n - 1\) est divisible par 3 pour tout \(n \in \mathbb{N}\).
2. On note \(P(n)\) : « \(3\) divise \(4^n - 1\) ».
   - **Initialisation.** \(4^0 - 1 = 0\), qui est divisible par 3.
   - **Hérédité.** Supposons \(4^n - 1 = 3k\) avec \(k \in \mathbb{Z}\). Alors \(4^{n+1} - 1 = 4 \times 4^n - 1 = 4(4^n - 1) + 3 = 12k + 3 = 3(4k + 1)\), divisible par 3.
   - **Conclusion.** Pour tout \(n \in \mathbb{N}\), \(4^n - 1\) est divisible par 3.
{{% /details %}}
