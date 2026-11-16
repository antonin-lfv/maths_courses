---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Déterminer la fonction dérivée de chacune des fonctions suivantes, sur l’intervalle indiqué.
1. \(f(x) = 3x^4 - 5x^2 + 7x - 2\) sur \(\mathbb{R}\)
2. \(g(x) = (2x + 1)\sqrt{x}\) sur \(]0\,;\,+\infty[\)
3. \(h(x) = \dfrac{3x - 1}{x + 2}\) sur \(]-2\,;\,+\infty[\)
4. \(k(x) = \dfrac{1}{x^2 + 1}\) sur \(\mathbb{R}\)
5. \(m(x) = (5 - 2x)^3\) sur \(\mathbb{R}\)
6. \(p(x) = \sqrt{4x + 1}\) sur \(\left]-\dfrac{1}{4}\,;\,+\infty\right[\)

{{% details title="Solution" closed="true" %}}
1. Somme de fonctions puissances multipliées par des constantes : \(f'(x) = 12x^3 - 10x + 7\).
2. Produit \(uv\) avec \(u(x) = 2x + 1\), \(u'(x) = 2\), \(v(x) = \sqrt{x}\), \(v'(x) = \dfrac{1}{2\sqrt{x}}\) :
\[
g'(x) = 2\sqrt{x} + \frac{2x + 1}{2\sqrt{x}} = \frac{4x + 2x + 1}{2\sqrt{x}} = \frac{6x + 1}{2\sqrt{x}}.
\]
3. Quotient \(\dfrac{u}{v}\) avec \(u(x) = 3x - 1\), \(u'(x) = 3\), \(v(x) = x + 2\), \(v'(x) = 1\) (et \(v(x) \neq 0\) sur l’intervalle) :
\[
h'(x) = \frac{3(x + 2) - (3x - 1) \times 1}{(x + 2)^2} = \frac{7}{(x + 2)^2}.
\]
4. Inverse \(\dfrac{1}{v}\) avec \(v(x) = x^2 + 1 \neq 0\), \(v'(x) = 2x\) : \(k'(x) = -\dfrac{2x}{(x^2 + 1)^2}\).
5. \(m(x) = g(-2x + 5)\) avec \(g(X) = X^3\), \(g'(X) = 3X^2\) : \(m'(x) = -2 \times 3(5 - 2x)^2 = -6(5 - 2x)^2\).
6. \(p(x) = g(4x + 1)\) avec \(g(X) = \sqrt{X}\), dérivable pour \(X > 0\), c’est-à-dire \(x > -\frac{1}{4}\) :
\[
p'(x) = 4 \times \frac{1}{2\sqrt{4x + 1}} = \frac{2}{\sqrt{4x + 1}}.
\]
{{% /details %}}

### Exercice 2

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x) = x^3 - 3x^2 - 9x + 4\).
1. Calculer \(f'(x)\) et étudier son signe.
2. Dresser le tableau de variations de \(f\) et préciser ses extremums locaux.

{{% details title="Solution" closed="true" %}}
1. \(f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)\). Le trinôme \(x^2 - 2x - 3\) a pour discriminant \(\Delta = 4 + 12 = 16\) et pour racines \(\dfrac{2 - 4}{2} = -1\) et \(\dfrac{2 + 4}{2} = 3\). Donc \(f'(x) = 3(x + 1)(x - 3)\), qui est du signe de son coefficient dominant (positif) à l’extérieur des racines :
   - \(f'(x) > 0\) sur \(]-\infty\,;\,-1[\) et sur \(]3\,;\,+\infty[\) ;
   - \(f'(x) < 0\) sur \(]-1\,;\,3[\).
2. \(f(-1) = -1 - 3 + 9 + 4 = 9\) et \(f(3) = 27 - 27 - 27 + 4 = -23\).

![](/images/image321.png)

\(f\) admet un maximum local égal à 9, atteint en \(-1\), et un minimum local égal à \(-23\), atteint en 3 (\(f'\) s’annule en changeant de signe en ces points).
{{% /details %}}

### Exercice 3

Soit \(f\) la fonction définie sur \(]1\,;\,+\infty[\) par \(f(x) = \dfrac{x^2 + 3}{x - 1}\).
1. Montrer que, pour tout \(x > 1\), \(f'(x) = \dfrac{(x - 3)(x + 1)}{(x - 1)^2}\).
2. Étudier les variations de \(f\) et en déduire que, pour tout \(x > 1\), \(f(x) \geq 6\).

{{% details title="Solution" closed="true" %}}
1. Avec \(u(x) = x^2 + 3\), \(u'(x) = 2x\), \(v(x) = x - 1\), \(v'(x) = 1\) :
\[
f'(x) = \frac{2x(x - 1) - (x^2 + 3)}{(x - 1)^2} = \frac{x^2 - 2x - 3}{(x - 1)^2} = \frac{(x - 3)(x + 1)}{(x - 1)^2},
\]
car \((x - 3)(x + 1) = x^2 - 2x - 3\).
2. Sur \(]1\,;\,+\infty[\), \((x - 1)^2 > 0\) et \(x + 1 > 0\) : \(f'(x)\) est du signe de \(x - 3\). Donc \(f\) est décroissante sur \(]1\,;\,3]\) et croissante sur \([3\,;\,+\infty[\), avec \(f(3) = \dfrac{12}{2} = 6\).

![](/images/image322.png)

Le minimum de \(f\) sur \(]1\,;\,+\infty[\) vaut 6 : pour tout \(x > 1\), \(f(x) \geq 6\).
{{% /details %}}

### Exercice 4

Dans une plaque carrée de carton de 12 cm de côté, on découpe aux quatre coins un carré de côté \(x\) cm, puis on relève les bords pour obtenir une boîte sans couvercle.
1. Justifier que \(x \in\, ]0\,;\,6[\) et que le volume de la boîte, en cm³, est \(V(x) = x(12 - 2x)^2\).
2. Montrer que \(V'(x) = (12 - 2x)(12 - 6x)\).
3. Pour quelle valeur de \(x\) le volume est-il maximal ? Quel est ce volume ?

{{% details title="Solution" closed="true" %}}
1. Il faut \(x > 0\) et \(12 - 2x > 0\), soit \(x < 6\). La boîte a une base carrée de côté \(12 - 2x\) et une hauteur \(x\) : \(V(x) = x(12 - 2x)^2\).
2. Produit \(uv\) avec \(u(x) = x\), \(u'(x) = 1\), \(v(x) = (12 - 2x)^2\), \(v'(x) = -2 \times 2(12 - 2x) = -4(12 - 2x)\) :
\[
V'(x) = (12 - 2x)^2 - 4x(12 - 2x) = (12 - 2x)(12 - 2x - 4x) = (12 - 2x)(12 - 6x).
\]
3. Sur \(]0\,;\,6[\), \(12 - 2x > 0\), donc \(V'(x)\) est du signe de \(12 - 6x\) : positif sur \(]0\,;\,2[\), négatif sur \(]2\,;\,6[\). \(V\) est croissante sur \(]0\,;\,2]\) puis décroissante sur \([2\,;\,6[\) : le volume est maximal pour \(x = 2\) cm, et vaut \(V(2) = 2 \times 8^2 = 128\) cm³.
{{% /details %}}

### Exercice 5

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x) = x^3 - 2x\) et \(\mathcal{C}\) sa courbe. Déterminer les points de \(\mathcal{C}\) en lesquels la tangente est parallèle à la droite d’équation \(y = x\), et donner une équation de chacune de ces tangentes.

{{% details title="Solution" closed="true" %}}
La tangente au point d’abscisse \(a\) est parallèle à la droite \(y = x\) si et seulement si son coefficient directeur vaut 1, c’est-à-dire \(f'(a) = 1\).

\(f'(x) = 3x^2 - 2\), donc \(f'(a) = 1 \iff 3a^2 = 3 \iff a = 1\) ou \(a = -1\).

- En \(a = 1\) : \(f(1) = -1\), tangente \(y = 1 \times (x - 1) - 1\), soit \(y = x - 2\).
- En \(a = -1\) : \(f(-1) = -1 + 2 = 1\), tangente \(y = 1 \times (x + 1) + 1\), soit \(y = x + 2\).

Les points cherchés sont \((1\,;\,-1)\) et \((-1\,;\,1)\).
{{% /details %}}
