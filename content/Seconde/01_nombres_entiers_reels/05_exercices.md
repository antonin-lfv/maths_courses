---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Pour chacun des nombres suivants, donner le plus petit des ensembles \(\mathbb{N}\), \(\mathbb{Z}\), \(\mathbb{D}\), \(\mathbb{Q}\), \(\mathbb{R}\) auquel il appartient.
\[
-7 \qquad \frac{3}{8} \qquad \sqrt{16} \qquad \frac{2}{3} \qquad \pi \qquad -\sqrt{5} \qquad 1{,}2 \times 10^{-3} \qquad \frac{-42}{6}
\]

{{% details title="Solution" closed="true" %}}
- \(-7 \in \mathbb{Z}\) (entier négatif, donc pas dans \(\mathbb{N}\)).
- \(\dfrac{3}{8} = 0{,}375 = \dfrac{375}{10^3} \in \mathbb{D}\).
- \(\sqrt{16} = 4 \in \mathbb{N}\).
- \(\dfrac{2}{3} \in \mathbb{Q}\) (il n’est pas décimal, comme \(\frac{1}{3}\)).
- \(\pi\) et \(-\sqrt{5}\) sont irrationnels : ils appartiennent seulement à \(\mathbb{R}\).
- \(1{,}2 \times 10^{-3} = 0{,}0012 \in \mathbb{D}\).
- \(\dfrac{-42}{6} = -7 \in \mathbb{Z}\).
{{% /details %}}

### Exercice 2

1. Le nombre \(221\) est-il premier ?
2. Décomposer \(504\) et \(588\) en produits de facteurs premiers.
3. En déduire la forme irréductible de \(\dfrac{504}{588}\).

{{% details title="Solution" closed="true" %}}
1. On teste les nombres premiers dont le carré est inférieur ou égal à \(221\) : \(2\), \(3\), \(5\), \(7\), \(11\), \(13\) (\(17^2 = 289 > 221\)). \(221\) n’est divisible ni par \(2\), ni par \(3\), ni par \(5\), ni par \(7\), ni par \(11\), mais \(221 = 13 \times 17\) : il n’est pas premier.
2. \(504 = 2 \times 252 = 2^2 \times 126 = 2^3 \times 63 = 2^3 \times 3^2 \times 7\) et \(588 = 2 \times 294 = 2^2 \times 147 = 2^2 \times 3 \times 49 = 2^2 \times 3 \times 7^2\).
3. \(\dfrac{504}{588} = \dfrac{2^3 \times 3^2 \times 7}{2^2 \times 3 \times 7^2} = \dfrac{2 \times 3}{7} = \dfrac{6}{7}\), fraction irréductible car \(6\) et \(7\) n’ont pas de diviseur commun autre que \(1\).
{{% /details %}}

### Exercice 3

1. Montrer que la somme de deux entiers impairs consécutifs est un multiple de \(4\).
2. Soit \(n\) un entier impair. Montrer que \(n^2 - 1\) est un multiple de \(8\). *(On pourra écrire \(n = 2k + 1\) et utiliser le fait que \(k(k + 1)\) est pair.)*

{{% details title="Solution" closed="true" %}}
1. Deux impairs consécutifs s’écrivent \(2k + 1\) et \(2k + 3\) avec \(k \in \mathbb{Z}\). Leur somme vaut \(4k + 4 = 4(k + 1)\), multiple de \(4\).
2. \(n^2 - 1 = (2k + 1)^2 - 1 = 4k^2 + 4k = 4k(k + 1)\). Les entiers \(k\) et \(k + 1\) sont consécutifs, donc leur produit est pair : \(k(k + 1) = 2m\) avec \(m \in \mathbb{Z}\). Ainsi \(n^2 - 1 = 8m\) est un multiple de \(8\). (Exemples : \(3^2 - 1 = 8\), \(5^2 - 1 = 24\), \(7^2 - 1 = 48\).)
{{% /details %}}

### Exercice 4

On donne \(I = [-3\,;\,5[\) et \(J = ]1\,;\,8]\).
1. Déterminer \(I \cap J\) et \(I \cup J\).
2. Écrire sous forme d’intervalle l’ensemble des réels \(x\) tels que \(|x + 1| \leq 4\).
3. Décrire l’ensemble des réels \(x\) tels que \(|x - 2| > 3\).

{{% details title="Solution" closed="true" %}}
1. \(I \cap J = ]1\,;\,5[\) et \(I \cup J = [-3\,;\,8]\).
2. \(|x + 1| = |x - (-1)|\) est la distance entre \(x\) et \(-1\) : elle est au plus \(4\) si et seulement si \(x \in [-5\,;\,3]\).
3. La distance entre \(x\) et \(2\) est strictement supérieure à \(3\) lorsque \(x < 2 - 3 = -1\) ou \(x > 2 + 3 = 5\) : l’ensemble cherché est \(]-\infty\,;\,-1[ \cup ]5\,;\,+\infty[\).
{{% /details %}}

### Exercice 5

1. Écrire \(A = \dfrac{2^5 \times 4^{-1}}{8^2}\) sous la forme d’une puissance de \(2\).
2. La lumière parcourt environ \(3 \times 10^5\) km par seconde, et la distance Terre–Soleil est d’environ \(1{,}5 \times 10^8\) km. Calculer le temps mis par la lumière du Soleil pour nous parvenir, en secondes puis en minutes.

{{% details title="Solution" closed="true" %}}
1. \(4^{-1} = (2^2)^{-1} = 2^{-2}\) et \(8^2 = (2^3)^2 = 2^6\), donc \(A = 2^{5 - 2 - 6} = 2^{-3} = \dfrac{1}{8}\).
2. \(t = \dfrac{1{,}5 \times 10^8}{3 \times 10^5} = 0{,}5 \times 10^3 = 500\) secondes, soit \(\dfrac{500}{60} \approx 8{,}3\) minutes (environ 8 min 20 s).
{{% /details %}}

### Exercice 6

1. Écrire \(E = \sqrt{48} + 2\sqrt{27} - \sqrt{75}\) sous la forme \(a\sqrt{3}\).
2. Calculer \((\sqrt{5} - 1)(\sqrt{5} + 1)\), puis écrire \(F = \dfrac{4}{\sqrt{5} - 1}\) sans racine carrée au dénominateur.
3. Simplifier \(\sqrt{\left(3 - \sqrt{10}\right)^2}\).

{{% details title="Solution" closed="true" %}}
1. \(\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}\), \(\sqrt{27} = 3\sqrt{3}\), \(\sqrt{75} = 5\sqrt{3}\). Donc \(E = 4\sqrt{3} + 6\sqrt{3} - 5\sqrt{3} = 5\sqrt{3}\).
2. \((\sqrt{5} - 1)(\sqrt{5} + 1) = (\sqrt{5})^2 - 1^2 = 5 - 1 = 4\). On multiplie numérateur et dénominateur de \(F\) par \(\sqrt{5} + 1\) :
\[
F = \frac{4(\sqrt{5} + 1)}{(\sqrt{5} - 1)(\sqrt{5} + 1)} = \frac{4(\sqrt{5} + 1)}{4} = \sqrt{5} + 1.
\]
3. \(\sqrt{x^2} = |x|\), et \(3 - \sqrt{10} < 0\) car \(\sqrt{10} > \sqrt{9} = 3\). Donc \(\sqrt{\left(3 - \sqrt{10}\right)^2} = \sqrt{10} - 3\).
{{% /details %}}

### Exercice 7

En s’inspirant de la démonstration faite pour \(\frac{1}{3}\), démontrer que \(\dfrac{1}{7}\) n’est pas un nombre décimal.

{{% details title="Solution" closed="true" %}}
Supposons \(\dfrac{1}{7} = \dfrac{a}{10^n}\) avec \(a \in \mathbb{Z}\) et \(n \in \mathbb{N}\). Alors \(10^n = 7a\), donc \(7\) divise \(10^n\). Or \(10^n = 2^n \times 5^n\) : c’est sa décomposition en facteurs premiers, et elle ne contient pas le facteur \(7\). Par unicité de la décomposition, \(7\) ne peut pas diviser \(10^n\) : contradiction. Donc \(\dfrac{1}{7}\) n’est pas décimal.
{{% /details %}}
