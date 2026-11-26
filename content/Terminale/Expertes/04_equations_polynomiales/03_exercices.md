---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Résoudre dans \(\mathbb{C}\) :
1. \(z^2 + 2z + 5 = 0\)
2. \(4z^2 - 12z + 9 = 0\)
3. \(-z^2 + 3z - 4 = 0\)

{{% details title="Solution" closed="true" %}}
1. \(\Delta = 4 - 20 = -16 < 0\) : \(z = \dfrac{-2 \pm 4i}{2}\), soit \(\mathcal{S} = \{-1 - 2i\,;\,-1 + 2i\}\).
2. \(\Delta = 144 - 144 = 0\) : solution double \(z_0 = \dfrac{12}{8} = \dfrac{3}{2}\).
3. L’équation équivaut à \(z^2 - 3z + 4 = 0\) ; \(\Delta = 9 - 16 = -7 < 0\) : \(\mathcal{S} = \left\{\dfrac{3 - i\sqrt{7}}{2}\,;\,\dfrac{3 + i\sqrt{7}}{2}\right\}\).
{{% /details %}}

### Exercice 2

Déterminer deux réels \(b\) et \(c\) tels que \(1 - 2i\) soit solution de l’équation \(z^2 + bz + c = 0\).

{{% details title="Solution" closed="true" %}}
**Méthode 1.** Les coefficients étant réels, si \(1 - 2i\) est solution (non réelle), l’autre solution est son conjugué \(1 + 2i\). Alors \(z^2 + bz + c = \big(z - (1 - 2i)\big)\big(z - (1 + 2i)\big) = z^2 - 2z + 5\), donc \(b = -2\) et \(c = 5\).

**Méthode 2.** On remplace : \((1 - 2i)^2 + b(1 - 2i) + c = -3 - 4i + b - 2bi + c = (b + c - 3) + i(-4 - 2b)\). Cette quantité est nulle si et seulement si \(-4 - 2b = 0\) et \(b + c - 3 = 0\), soit \(b = -2\) et \(c = 5\).
{{% /details %}}

### Exercice 3

Résoudre dans \(\mathbb{C}\) l’équation \(z^4 - 2z^2 - 8 = 0\).

{{% details title="Solution" closed="true" %}}
On pose \(Z = z^2\) : \(Z^2 - 2Z - 8 = 0\), de discriminant \(4 + 32 = 36\), donc \(Z = \dfrac{2 - 6}{2} = -2\) ou \(Z = \dfrac{2 + 6}{2} = 4\).
- \(z^2 = 4 \iff z = \pm 2\) ;
- \(z^2 = -2 \iff z = \pm i\sqrt{2}\).

\(\mathcal{S} = \left\{-2\,;\,2\,;\,-i\sqrt{2}\,;\,i\sqrt{2}\right\}\).
{{% /details %}}

### Exercice 4

1. Factoriser \(z^3 - 1\) par \(z - 1\).
2. En déduire les solutions dans \(\mathbb{C}\) de l’équation \(z^3 = 1\).

{{% details title="Solution" closed="true" %}}
1. D’après la formule \(z^n - a^n = (z - a)\sum\limits_{k=0}^{n-1} a^kz^{n-1-k}\) avec \(a = 1\) et \(n = 3\) : \(z^3 - 1 = (z - 1)(z^2 + z + 1)\).
2. \(z^3 = 1 \iff z = 1\) ou \(z^2 + z + 1 = 0\). Ce trinôme a pour discriminant \(1 - 4 = -3\) et pour racines \(\dfrac{-1 \pm i\sqrt{3}}{2}\).

   \(\mathcal{S} = \left\{1\,;\,-\dfrac{1}{2} - \dfrac{\sqrt{3}}{2}i\,;\,-\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\right\}\). (On retrouvera ces nombres au chapitre 5 : ce sont les racines cubiques de l’unité.)
{{% /details %}}

### Exercice 5

On considère le polynôme à coefficients complexes \(P(z) = z^3 - (2 + i)z^2 + (2 + 2i)z - 2i\).
1. Montrer que \(i\) est une racine de \(P\).
2. Déterminer deux nombres \(a\) et \(b\) tels que \(P(z) = (z - i)(z^2 + az + b)\).
3. Résoudre dans \(\mathbb{C}\) l’équation \(P(z) = 0\).

{{% details title="Solution" closed="true" %}}
1. Avec \(i^2 = -1\) et \(i^3 = -i\) : \(P(i) = -i + (2 + i) + (2 + 2i)i - 2i = -i + 2 + i + 2i - 2 - 2i = 0\).
2. \((z - i)(z^2 + az + b) = z^3 + (a - i)z^2 + (b - ai)z - bi\). Par identification :
\[
\begin{cases} a - i = -(2 + i) \\ b - ai = 2 + 2i \\ -bi = -2i \end{cases} \iff \begin{cases} a = -2 \\ b = 2 \end{cases}
\]
(la deuxième équation donne bien \(2 + 2i = 2 + 2i\)). Donc \(P(z) = (z - i)(z^2 - 2z + 2)\).
3. \(z^2 - 2z + 2 = 0\) a pour discriminant \(-4\) et pour solutions \(1 \pm i\). \(\mathcal{S} = \{i\,;\,1 - i\,;\,1 + i\}\).

Remarque : \(P\) n’est pas à coefficients réels, et ses racines ne sont pas deux à deux conjuguées (\(-i\) n’est pas racine).
{{% /details %}}

### Exercice 6

On considère le polynôme \(P(z) = z^4 + 4\).
1. Vérifier que \(1 + i\) et \(-1 + i\) sont des racines de \(P\).
2. Justifier que \(1 - i\) et \(-1 - i\) sont aussi des racines de \(P\).
3. En déduire une factorisation de \(P\) en produit de deux polynômes du second degré à coefficients réels.

{{% details title="Solution" closed="true" %}}
1. \((1 + i)^2 = 2i\), donc \((1 + i)^4 = (2i)^2 = -4\) et \(P(1 + i) = 0\). De même \((-1 + i)^2 = 1 - 2i - 1 = -2i\), donc \((-1 + i)^4 = (-2i)^2 = -4\) et \(P(-1 + i) = 0\).
2. Les coefficients de \(P\) sont réels, donc pour tout \(z\), \(\overline{P(z)} = \overline{z}^4 + 4 = P(\overline{z})\). Si \(P(z) = 0\), alors \(P(\overline{z}) = \overline{0} = 0\). Les conjugués \(1 - i\) et \(-1 - i\) sont donc aussi des racines.
3. On regroupe les racines conjuguées :
   - \(\big(z - (1 + i)\big)\big(z - (1 - i)\big) = (z - 1)^2 + 1 = z^2 - 2z + 2\) ;
   - \(\big(z - (-1 + i)\big)\big(z - (-1 - i)\big) = (z + 1)^2 + 1 = z^2 + 2z + 2\).

   \(P\) a quatre racines distinctes et est de degré 4 ; en factorisant successivement par \(z - a\) pour chaque racine, on obtient \(P(z) = (z^2 - 2z + 2)(z^2 + 2z + 2)\). Vérification : \((z^2 + 2)^2 - (2z)^2 = z^4 + 4z^2 + 4 - 4z^2 = z^4 + 4\).
{{% /details %}}
