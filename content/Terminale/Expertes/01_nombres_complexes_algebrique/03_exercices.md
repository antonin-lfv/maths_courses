---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Donner la forme algébrique de :
\[
\begin{gathered}
A = (3 - 2i)(1 + 4i), \qquad B = (2 + i)^2 - (1 - i)^2, \qquad C = i^{2026}, \\[0.3em]
D = \dfrac{1 + i}{2 - i}.
\end{gathered}
\]

{{% details title="Solution" closed="true" %}}
- \({A = 3 + 12i - 2i - 8i^2 = 11 + 10i}\).
- \({(2 + i)^2 = 4 + 4i - 1 = 3 + 4i}\) et \({(1 - i)^2 = 1 - 2i - 1 = -2i}\), donc \({B = 3 + 4i + 2i = 3 + 6i}\).
- \({i^4 = (i^2)^2 = 1}\) et \({2026 = 4 \times 506 + 2}\), donc \({C = (i^4)^{506} \times i^2 = -1}\).
- \(D = \dfrac{(1 + i)(2 + i)}{(2 - i)(2 + i)} = \dfrac{2 + i + 2i + i^2}{5} = \dfrac{1 + 3i}{5} = \dfrac{1}{5} + \dfrac{3}{5}i\).
{{% /details %}}

### Exercice 2

On pose \({z = \dfrac{2 - 3i}{1 + i}}\).
1. Donner la forme algébrique de \(z\), puis \(\mathrm{Re}(z)\) et \(\mathrm{Im}(z)\).
2. En déduire la forme algébrique de \(\overline{z}\), et vérifier le résultat avec la propriété du conjugué d’un quotient.

{{% details title="Solution" closed="true" %}}
1. \(z = \dfrac{(2 - 3i)(1 - i)}{(1 + i)(1 - i)} = \dfrac{2 - 2i - 3i + 3i^2}{2} = \dfrac{-1 - 5i}{2}\). Donc \({\mathrm{Re}(z) = -\dfrac{1}{2}}\) et \({\mathrm{Im}(z) = -\dfrac{5}{2}}\).
2. \({\overline{z} = -\dfrac{1}{2} + \dfrac{5}{2}i}\). Avec la propriété : \(\overline{z} = \dfrac{2 + 3i}{1 - i} = \dfrac{(2 + 3i)(1 + i)}{2} = \dfrac{2 + 2i + 3i - 3}{2} = \dfrac{-1 + 5i}{2}\), ce qui est bien le même nombre.
{{% /details %}}

### Exercice 3

Soit \(z\) un nombre complexe. Sans utiliser la forme algébrique, montrer que :
1. \({Z = (z - i)(\overline{z} + i)}\) est un réel ;
2. \({W = z^2 - \overline{z}^2}\) est un imaginaire pur.

{{% details title="Solution" closed="true" %}}
1. \(\overline{Z} = \overline{(z - i)} \times \overline{(\overline{z} + i)} = (\overline{z} + i)(z - i) = Z\), car \({\overline{-i} = i}\) et \({\overline{\overline{z}} = z}\). Comme \({\overline{Z} = Z}\), \(Z\) est réel.
2. \({\overline{W} = \overline{z}^2 - \overline{\overline{z}}^2 = \overline{z}^2 - z^2 = -W}\). Donc \(W\) est imaginaire pur.
{{% /details %}}

### Exercice 4

1. À l’aide de la formule du binôme de Newton, calculer \({(1 + i)^6}\).
2. Retrouver ce résultat en calculant d’abord \({(1 + i)^2}\).

{{% details title="Solution" closed="true" %}}
1. Les coefficients pour \({n = 6}\) sont \(1\,;\,6\,;\,15\,;\,20\,;\,15\,;\,6\,;\,1\) et les puissances successives de \(i\) sont \({1, i, -1, -i, 1, i, -1}\) :
\[
(1 + i)^6 = \sum_{k=0}^{6} \binom{6}{k} i^k = 1 + 6i - 15 - 20i + 15 + 6i - 1 = -8i.
\]
2. \({(1 + i)^2 = 1 + 2i - 1 = 2i}\), donc \({(1 + i)^6 = (2i)^3 = 8i^3 = -8i}\).
{{% /details %}}

### Exercice 5

Résoudre dans \(\mathbb{C}\) :
1. \({(2 - i)z + 3 = iz - 1 + 4i}\)
2. \({3z - 2\overline{z} = 1 + 10i}\)

{{% details title="Solution" closed="true" %}}
1. \((2 - i - i)z = -4 + 4i \iff (2 - 2i)z = -4 + 4i \iff z = \dfrac{-4 + 4i}{2 - 2i} = \dfrac{-2(2 - 2i)}{2 - 2i} = -2\). \({\mathcal{S} = \{-2\}}\).
2. On pose \({z = a + ib}\) (\(a\), \(b\) réels) : \(3z - 2\overline{z} = 3a + 3ib - 2a + 2ib = a + 5ib\). Par identification, \({a = 1}\) et \({5b = 10}\), soit \({b = 2}\). \({\mathcal{S} = \{1 + 2i\}}\).
{{% /details %}}

### Exercice 6

Pour tout nombre complexe \({z \neq i}\), on pose \({Z = \dfrac{z + 1}{z - i}}\). On écrit \({z = x + iy}\) avec \(x\), \(y\) réels.
1. Montrer que \({\mathrm{Im}(Z) = \dfrac{x - y + 1}{x^2 + (y - 1)^2}}\).
2. Déterminer l’ensemble des nombres complexes \(z\) tels que \(Z\) soit réel.

{{% details title="Solution" closed="true" %}}
1. \({z - i = x + i(y - 1)}\), dont le conjugué est \({x - i(y - 1)}\), et \({(z - i)\overline{(z - i)} = x^2 + (y - 1)^2}\). On calcule le numérateur :
\[
(x + 1 + iy)\big(x - i(y - 1)\big) = x(x + 1) + y(y - 1) + i\big[xy - (x + 1)(y - 1)\big].
\]
Or \(xy - (x + 1)(y - 1) = xy - xy + x - y + 1 = x - y + 1\). Donc \({\mathrm{Im}(Z) = \dfrac{x - y + 1}{x^2 + (y - 1)^2}}\).
2. \(Z\) est réel si et seulement si \({x - y + 1 = 0}\), soit \({y = x + 1}\), avec \({z \neq i}\) (c’est-à-dire \({(x, y) \neq (0, 1)}\), ce qui revient à \({x \neq 0}\) sur cette droite). L’ensemble cherché est \({\{x + i(x + 1),\ x \in \mathbb{R},\ x \neq 0\}}\).
{{% /details %}}
