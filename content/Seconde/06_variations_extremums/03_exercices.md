---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Étudier la parité des fonctions suivantes :
\[
f(x) = x^3 - 5x \ \text{sur } \mathbb{R}, \qquad g(x) = \frac{4}{x^2 - 1} \ \text{sur } \mathbb{R} \setminus \{-1\,;\,1\}, \qquad h(x) = (x + 1)^2 \ \text{sur } \mathbb{R}.
\]

{{% details title="Solution" closed="true" %}}
- \(f(-x) = -x^3 + 5x = -(x^3 - 5x) = -f(x)\) : \(f\) est impaire.
- L’ensemble \(\mathbb{R} \setminus \{-1\,;\,1\}\) est symétrique par rapport à \(0\), et \(g(-x) = \dfrac{4}{(-x)^2 - 1} = \dfrac{4}{x^2 - 1} = g(x)\) : \(g\) est paire.
- \(h(1) = 4\) et \(h(-1) = 0\) : \(h(-1) \neq h(1)\) et \(h(-1) \neq -h(1)\), donc \(h\) n’est ni paire ni impaire.
{{% /details %}}

### Exercice 2

Une fonction \(f\) **paire**, définie sur \([-3\,;\,3]\), est croissante sur \([0\,;\,2]\) et décroissante sur \([2\,;\,3]\), avec \(f(0) = 1\), \(f(2) = 4\) et \(f(3) = 2\).
1. Décrire les variations de \(f\) sur \([-3\,;\,3]\).
2. Donner le maximum et le minimum de \(f\) sur \([-3\,;\,3]\).

{{% details title="Solution" closed="true" %}}
1. La courbe est symétrique par rapport à l’axe des ordonnées, ce qui « retourne » les variations : \(f\) est croissante sur \([-3\,;\,-2]\), décroissante sur \([-2\,;\,0]\), croissante sur \([0\,;\,2]\) et décroissante sur \([2\,;\,3]\), avec \(f(-3) = 2\) et \(f(-2) = 4\).
2. Le maximum est \(4\), atteint en \(-2\) et en \(2\). Le minimum est à chercher parmi \(f(-3) = 2\), \(f(0) = 1\) et \(f(3) = 2\) : c’est \(1\), atteint en \(0\).
{{% /details %}}

### Exercice 3

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x) = (x - 3)^2 + 1\).
1. Soit \(u < v \leq 3\). Montrer que \(f(v) - f(u) = (v - u)(v + u - 6)\), puis en déduire le sens de variation de \(f\) sur \(]-\infty\,;\,3]\).
2. On admet que \(f\) est croissante sur \([3\,;\,+\infty[\). Montrer que \(f\) admet un minimum sur \(\mathbb{R}\), et le préciser.

{{% details title="Solution" closed="true" %}}
1. \(f(v) - f(u) = (v - 3)^2 - (u - 3)^2 = \big[(v - 3) - (u - 3)\big]\big[(v - 3) + (u - 3)\big] = (v - u)(v + u - 6)\). Or \(v - u > 0\) et, comme \(u < 3\) et \(v \leq 3\), \(u + v < 6\), donc \(v + u - 6 < 0\). Ainsi \(f(v) < f(u)\) : \(f\) est strictement décroissante sur \(]-\infty\,;\,3]\).
2. Pour tout réel \(x\), \((x - 3)^2 \geq 0\), donc \(f(x) \geq 1\), et \(f(3) = 1\). Le minimum de \(f\) sur \(\mathbb{R}\) est \(1\), atteint en \(3\) (ce que confirment les variations).
{{% /details %}}

### Exercice 4

Une fonction \(f\) définie sur \([0\,;\,10]\) est croissante sur \([0\,;\,4]\) et décroissante sur \([4\,;\,10]\), avec \(f(0) = -1\), \(f(4) = 5\) et \(f(10) = 2\).
1. Donner le maximum et le minimum de \(f\) sur \([0\,;\,10]\).
2. Comparer \(f(1)\) et \(f(3)\), puis \(f(5)\) et \(f(9)\).
3. Combien l’équation \(f(x) = 0\) a-t-elle de solutions ? Quel est le signe de \(f(7)\) ?

{{% details title="Solution" closed="true" %}}
1. Maximum \(5\) en \(4\) ; minimum \(-1\) en \(0\) (car \(f(10) = 2 > -1\)).
2. \(f\) est croissante sur \([0\,;\,4]\) et \(1 < 3\), donc \(f(1) \leq f(3)\). \(f\) est décroissante sur \([4\,;\,10]\) et \(5 < 9\), donc \(f(5) \geq f(9)\). *(Avec les seules informations « croissante » et « décroissante », les inégalités sont larges.)*
3. Sur \([0\,;\,4]\), \(f\) va de \(-1\) à \(5\) : en admettant qu’elle prend toutes les valeurs intermédiaires, l’équation y a une solution (une seule si \(f\) est strictement croissante). Sur \([4\,;\,10]\), \(2 \leq f(x) \leq 5\) : pas de solution. Donc une solution. Comme \(7 \in [4\,;\,10]\), \(f(7) \geq 2 > 0\).
{{% /details %}}

### Exercice 5

Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \(g(x) = 8 - 2x^2\).
1. Montrer que \(g\) est paire.
2. Montrer que \(g\) admet un maximum sur \(\mathbb{R}\) et le déterminer.
3. Résoudre l’inéquation \(g(x) \geq 0\).

{{% details title="Solution" closed="true" %}}
1. \(g(-x) = 8 - 2(-x)^2 = 8 - 2x^2 = g(x)\) pour tout réel \(x\).
2. Pour tout réel \(x\), \(-2x^2 \leq 0\), donc \(g(x) \leq 8\), et \(g(0) = 8\). Le maximum est \(8\), atteint en \(0\).
3. \(8 - 2x^2 \geq 0 \iff x^2 \leq 4 \iff -2 \leq x \leq 2\) : \(\mathcal{S} = [-2\,;\,2]\).
{{% /details %}}
