---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Déterminer les entiers naturels \(n\) tels que \(n + 3\) divise \(n^2 + 5\).

{{% details title="Solution" closed="true" %}}
On écrit \(n^2 + 5 = (n + 3)(n - 3) + 14\) (en effet \((n + 3)(n - 3) = n^2 - 9\)).

Si \(n + 3\) divise \(n^2 + 5\), il divise la combinaison linéaire \((n^2 + 5) - (n - 3)(n + 3) = 14\). Comme \(n + 3 \geq 3\), on a \(n + 3 \in \{7, 14\}\), soit \(n \in \{4, 11\}\).

Réciproquement : pour \(n = 4\), \(\frac{21}{7} = 3\) ; pour \(n = 11\), \(\frac{126}{14} = 9\). Les solutions sont \(4\) et \(11\).
{{% /details %}}

### Exercice 2

Écrire la division euclidienne de \(2027\) par \(45\), puis celle de \(-2027\) par \(45\).

{{% details title="Solution" closed="true" %}}
- \(45 \times 45 = 2025\), donc \(2027 = 45 \times 45 + 2\), avec \(0 \leq 2 < 45\).
- \(45 \times (-46) = -2070 \leq -2027 < -2025 = 45 \times (-45)\), donc \(-2027 = 45 \times (-46) + 43\), avec \(0 \leq 43 < 45\).
{{% /details %}}

### Exercice 3

Montrer que, pour tout entier naturel \(n\), le produit \(n(n + 1)(n + 2)\) est divisible par 6.

{{% details title="Solution" closed="true" %}}
On raisonne par disjonction des cas selon le reste \(r\) de \(n\) modulo 6, en utilisant la compatibilité des congruences avec la multiplication : \(n(n + 1)(n + 2) \equiv r(r + 1)(r + 2) \ [6]\).

| \(r\) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| \(r(r + 1)(r + 2)\) | 0 | 6 | 24 | 60 | 120 | 210 |
| reste modulo 6 | 0 | 0 | 0 | 0 | 0 | 0 |

Dans tous les cas, \(n(n + 1)(n + 2) \equiv 0 \ [6]\) : le produit est divisible par 6. (Interprétation : parmi trois entiers consécutifs, il y a toujours un multiple de 2 et un multiple de 3.)
{{% /details %}}

### Exercice 4

1. Résoudre dans \(\mathbb{Z}\) l’équation \(4x \equiv 3 \ [7]\).
2. Déterminer le chiffre des unités de \(7^{2026}\).

{{% details title="Solution" closed="true" %}}
1. Table des restes modulo 7 :

| \(x \equiv \dots \ [7]\) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| \(4x \equiv \dots \ [7]\) | 0 | 4 | 1 | 5 | 2 | 6 | 3 |

   \(4x \equiv 3 \ [7] \iff x \equiv 6 \ [7]\) : les solutions sont les entiers \(7k + 6\), \(k \in \mathbb{Z}\).

2. Le chiffre des unités est le reste de la division par 10. \(7^2 = 49 \equiv 9\), \(7^4 \equiv 81 \equiv 1 \ [10]\). Comme \(2026 = 4 \times 506 + 2\), \(7^{2026} = \left(7^4\right)^{506} \times 7^2 \equiv 49 \equiv 9 \ [10]\). Le chiffre des unités est 9.
{{% /details %}}

### Exercice 5

Montrer que, pour tout entier naturel \(n\), \(3^{2n+1} + 2^{n+2}\) est divisible par 7.

{{% details title="Solution" closed="true" %}}
\(3^{2n+1} = 3 \times 9^n\) et \(2^{n+2} = 4 \times 2^n\). Or \(9 \equiv 2 \ [7]\), donc \(9^n \equiv 2^n \ [7]\) et
\[
3^{2n+1} + 2^{n+2} \equiv 3 \times 2^n + 4 \times 2^n = 7 \times 2^n \equiv 0 \ [7].
\]
Vérification pour \(n = 1\) : \(27 + 8 = 35 = 5 \times 7\).
{{% /details %}}

### Exercice 6

1. Montrer que tout entier naturel est congru modulo 9 à la somme de ses chiffres.
2. Sans poser la division, déterminer le reste de la division euclidienne de \(7\,245\,836\) par 9.

{{% details title="Solution" closed="true" %}}
1. Un entier naturel s’écrit \(N = a_p10^p + \dots + a_110 + a_0\), où les \(a_k\) sont ses chiffres. Comme \(10 \equiv 1 \ [9]\), on a \(10^k \equiv 1 \ [9]\) pour tout \(k\), donc, par compatibilité avec l’addition et la multiplication, \(N \equiv a_p + \dots + a_1 + a_0 \ [9]\).
2. La somme des chiffres vaut \(7 + 2 + 4 + 5 + 8 + 3 + 6 = 35\), et \(35 = 9 \times 3 + 8\). Donc \(7\,245\,836 \equiv 35 \equiv 8 \ [9]\) : le reste est 8.
{{% /details %}}
