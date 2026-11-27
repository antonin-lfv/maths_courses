---
title: 'Congruence dans Z'
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux entiers relatifs et \(n\) un entier naturel non nul. On dit que \(a\) est **congru à \(b\) modulo \(n\)**, et on note \({a \equiv b \ [n]}\) (ou \({a \equiv b \pmod n}\)), lorsque \({a - b}\) est un multiple de \(n\).

{{% details title="Exemples" closed="true" %}}
- \({23 - 3 = 20 = 4 \times 5}\), donc \({23 \equiv 3 \ [5]}\).
- \({-7 - 5 = -12 = (-2) \times 6}\), donc \({-7 \equiv 5 \ [6]}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> \({a \equiv b \ [n] \iff b \equiv a \ [n]}\) : on dit simplement que \(a\) et \(b\) sont congrus modulo \(n\).

> [!TIP] **Propriété**
>
> \({a \equiv b \ [n]}\) si et seulement si \(a\) et \(b\) ont le même reste dans la division euclidienne par \(n\).

{{% details title="Démonstration" closed="true" %}}
On écrit les divisions euclidiennes \({a = nq + r}\) et \({b = nq' + r'}\), avec \({0 \leq r < n}\) et \({0 \leq r' < n}\). Alors \({a - b = n(q - q') + (r - r')}\).
- Si \({r = r'}\), \({a - b = n(q - q')}\) est un multiple de \(n\).
- Réciproquement, si \({n \mid a - b}\), alors \(n\) divise \({r - r' = (a - b) - n(q - q')}\). Or \({-n < r - r' < n}\), donc \({r - r' = 0}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({38 = 7 \times 5 + 3}\) et \({17 = 7 \times 2 + 3}\) : même reste 3 dans la division par 7, donc \({38 \equiv 17 \ [7]}\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Soient \(a\), \(b\), \(c\) des entiers relatifs et \(n\) un entier naturel non nul.
> 1. \({a \equiv 0 \ [n]}\) si et seulement si \(a\) est divisible par \(n\).
> 2. \({a \equiv a \ [n]}\).
> 3. \(r\) est le reste de la division euclidienne de \(a\) par \(n\) si et seulement si \({a \equiv r \ [n]}\) et \({0 \leq r < n}\).
> 4. Si \({a \equiv b \ [n]}\) et \({b \equiv c \ [n]}\), alors \({a \equiv c \ [n]}\).

## Calculs avec les congruences

> [!TIP] **Propriétés (compatibilité avec les opérations)**
>
> Soient \(a\), \(b\), \(c\), \(d\) des entiers relatifs et \(n\) un entier naturel non nul.
> 1. Si \({a \equiv b \ [n]}\), alors \({a + c \equiv b + c \ [n]}\).
> 2. Si \({a \equiv b \ [n]}\) et \({c \equiv d \ [n]}\), alors \({a + c \equiv b + d \ [n]}\).
>
> On dit que l’addition est compatible avec les congruences.
>
> 3. Si \({a \equiv b \ [n]}\), alors \({ac \equiv bc \ [n]}\).
> 4. Si \({a \equiv b \ [n]}\) et \({c \equiv d \ [n]}\), alors \({ac \equiv bd \ [n]}\).
> 5. Si \({a \equiv b \ [n]}\), alors pour tout entier naturel \(p\), \({a^p \equiv b^p \ [n]}\).
>
> On dit que la multiplication est compatible avec les congruences.

{{% details title="Démonstration" closed="true" %}}
On écrit \({a = b + kn}\) et \({c = d + k'n}\) avec \({k, k' \in \mathbb{Z}}\).
- \({a + c = b + d + (k + k')n}\), donc \({a + c \equiv b + d \ [n]}\) (la propriété 1 est le cas \({c = d}\)).
- \(ac = (b + kn)(d + k'n) = bd + n(bk' + dk + kk'n)\), donc \({ac \equiv bd \ [n]}\) (la propriété 3 est le cas \({c = d}\)).
- Puissances, par récurrence sur \(p\) : \({a^0 = b^0 = 1}\) ; si \({a^p \equiv b^p \ [n]}\), alors par la propriété 4, \({a^{p+1} = a^p \times a \equiv b^p \times b = b^{p+1} \ [n]}\).
{{% /details %}}

{{% details title="Exemples" closed="true" %}}
- Si \({x + 5 \equiv 2 \ [6]}\), alors \({x \equiv 2 - 5 = -3 \equiv 3 \ [6]}\).
- \({10 \equiv 1 \ [9]}\), donc pour tout entier naturel \(p\), \({10^p \equiv 1^p = 1 \ [9]}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La division **n’est pas** compatible avec les congruences : \({4 \times 3 \equiv 2 \times 3 \ [6]}\) (car \({12 - 6 = 6}\)), mais \({4 \not\equiv 2 \ [6]}\). On ne peut donc pas « simplifier » par 3.

## Utiliser les congruences

> [!NOTE] **Exercice résolu 1 - Résoudre des équations avec des congruences**
>
> Résoudre dans \(\mathbb{Z}\) :
> 1. \({x + 4 \equiv 2 \ [5]}\)
> 2. \({3x \equiv 2 \ [7]}\)
> 3. \({x^2 \equiv 4 \ [6]}\)

{{% details title="Solution commentée" closed="true" %}}
1. En ajoutant \({-4}\) : \({x \equiv -2 \equiv 3 \ [5]}\). Les solutions sont les entiers \({5k + 3}\), \({k \in \mathbb{Z}}\).
2. On ne peut pas diviser par 3 : on étudie tous les restes possibles de \(x\) modulo 7.

| \({x \equiv \dots \ [7]}\) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| \({3x \equiv \dots \ [7]}\) | 0 | 3 | 6 | 2 | 5 | 1 | 4 |

   \({3x \equiv 2 \ [7] \iff x \equiv 3 \ [7]}\). Les solutions sont les entiers \({7k + 3}\), \({k \in \mathbb{Z}}\).

3. Même méthode modulo 6 :

| \({x \equiv \dots \ [6]}\) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| \({x^2 \equiv \dots \ [6]}\) | 0 | 1 | 4 | 3 | 4 | 1 |

   \({x^2 \equiv 4 \ [6] \iff x \equiv 2 \ [6]}\) ou \({x \equiv 4 \ [6]}\). Les solutions sont les entiers \({6k + 2}\) et \({6k + 4}\), \({k \in \mathbb{Z}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Démontrer une divisibilité**
>
> 1. Montrer que, pour tout entier naturel \(n\), \({2^{3n} - 1}\) est divisible par 7.
> 2. Déterminer les entiers naturels \(n\) tels que \({2^n + 3}\) soit divisible par 7.

{{% details title="Solution commentée" closed="true" %}}
1. \({2^3 = 8 \equiv 1 \ [7]}\), donc \({2^{3n} = (2^3)^n \equiv 1^n = 1 \ [7]}\), c’est-à-dire \({2^{3n} - 1 \equiv 0 \ [7]}\).
2. On écrit \({n = 3k + r}\) avec \({r \in \{0, 1, 2\}}\) (division euclidienne par 3). Alors \({2^n = (2^3)^k \times 2^r \equiv 2^r \ [7]}\) :

| \(r\) | 0 | 1 | 2 |
|---|---|---|---|
| \({2^n \equiv \dots \ [7]}\) | 1 | 2 | 4 |
| \({2^n + 3 \equiv \dots \ [7]}\) | 4 | 5 | 0 |

   \({2^n + 3}\) est divisible par 7 si et seulement si \({n \equiv 2 \ [3]}\), c’est-à-dire \({n = 3k + 2}\), \({k \in \mathbb{N}}\). (Vérification : \({2^2 + 3 = 7}\), \({2^5 + 3 = 35}\).)
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Déterminer le reste d’une grande puissance**
>
> Déterminer le reste de la division euclidienne de \(13^{2027}\) par 5.

{{% details title="Solution commentée" closed="true" %}}
\({13 \equiv 3 \ [5]}\). On cherche une puissance de 3 congrue à 1 : \({3^2 = 9 \equiv 4}\), \({3^3 \equiv 12 \equiv 2}\), \({3^4 \equiv 6 \equiv 1 \ [5]}\).

Or \({2027 = 4 \times 506 + 3}\), donc
\[
13^{2027} \equiv 3^{2027} = \left(3^4\right)^{506} \times 3^3 \equiv 1^{506} \times 27 \equiv 2 \ [5].
\]
Comme \({0 \leq 2 < 5}\), le reste est 2.
{{% /details %}}
