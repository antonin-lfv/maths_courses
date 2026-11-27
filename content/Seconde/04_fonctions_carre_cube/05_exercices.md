---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Sans calculatrice, comparer : a) \({(-0{,}3)^2}\) et \({(-0{,}31)^2}\) ; b) \(\pi^2\) et \(3{,}15^2\) ; c) \({(-1{,}2)^3}\) et \({(-1{,}1)^3}\) ; d) \(0{,}95^2\) et \(0{,}95^3\).

{{% details title="Solution" closed="true" %}}
a) \({-0{,}31 < -0{,}3 \leq 0}\) et la fonction carré est décroissante sur \({]-\infty\,;\,0]}\) : \({(-0{,}31)^2 > (-0{,}3)^2}\).

b) \({0 \leq \pi < 3{,}15}\) et la fonction carré est croissante sur \({[0\,;\,+\infty[}\) : \({\pi^2 < 3{,}15^2}\).

c) La fonction cube est croissante sur \(\mathbb{R}\) et \({-1{,}2 < -1{,}1}\) : \({(-1{,}2)^3 < (-1{,}1)^3}\).

d) \({0 < 0{,}95 < 1}\), donc \({0{,}95^3 < 0{,}95^2}\).
{{% /details %}}

### Exercice 2

On sait que \({-4 \leq x \leq 1}\). Encadrer \(x^2\), puis \(x^3\).

{{% details title="Solution" closed="true" %}}
L’intervalle contient \(0\) : sur \({[-4\,;\,0]}\), \({0 \leq x^2 \leq 16}\) ; sur \([0\,;\,1]\), \({0 \leq x^2 \leq 1}\). Donc \({0 \leq x^2 \leq 16}\).

La fonction cube est croissante : \({-64 \leq x^3 \leq 1}\).
{{% /details %}}

### Exercice 3

Résoudre dans \(\mathbb{R}\) : a) \({x^2 = 7}\) ; b) \({(2x + 1)^2 = 9}\) ; c) \({x^2 \geq 25}\) ; d) \({x^3 + 8 = 0}\) ; e) \({x^2 + 3 < 0}\).

{{% details title="Solution" closed="true" %}}
a) \({\mathcal{S} = \{-\sqrt{7}\,;\,\sqrt{7}\}}\).

b) \({2x + 1 = 3}\) ou \({2x + 1 = -3}\), soit \({x = 1}\) ou \({x = -2}\) : \({\mathcal{S} = \{-2\,;\,1\}}\).

c) \({\mathcal{S} = ]-\infty\,;\,-5] \cup [5\,;\,+\infty[}\).

d) \({x^3 = -8 \iff x = -2}\) : \({\mathcal{S} = \{-2\}}\).

e) \({x^2 + 3 \geq 3 > 0}\) pour tout réel : \({\mathcal{S} = \varnothing}\).
{{% /details %}}

### Exercice 4

Résoudre dans \(\mathbb{R}\) l’inéquation \({(x - 4)(5 - 2x) < 0}\).

{{% details title="Solution" closed="true" %}}
\({x - 4}\) s’annule en \(4\) (coefficient positif) ; \({5 - 2x}\) s’annule en \(\dfrac{5}{2}\) (coefficient négatif).

| \(x\) | \({-\infty}\) | | \(\dfrac{5}{2}\) | | \(4\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \({x - 4}\) | | \({-}\) | | \({-}\) | \(0\) | \({+}\) | |
| \({5 - 2x}\) | | \({+}\) | \(0\) | \({-}\) | | \({-}\) | |
| produit | | \({-}\) | \(0\) | \({+}\) | \(0\) | \({-}\) | |

\({\mathcal{S} = \left]-\infty\,;\,\dfrac{5}{2}\right[ \cup ]4\,;\,+\infty[}\).
{{% /details %}}

### Exercice 5

Résoudre dans \(\mathbb{R}\) l’inéquation \({\dfrac{3x - 6}{x + 1} \geq 0}\).

{{% details title="Solution" closed="true" %}}
Valeur interdite : \({-1}\). \({3x - 6}\) s’annule en \(2\).

| \(x\) | \({-\infty}\) | | \({-1}\) | | \(2\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \({3x - 6}\) | | \({-}\) | | \({-}\) | \(0\) | \({+}\) | |
| \({x + 1}\) | | \({-}\) | \(0\) | \({+}\) | | \({+}\) | |
| quotient | | \({+}\) | ‖ | \({-}\) | \(0\) | \({+}\) | |

\({\mathcal{S} = ]-\infty\,;\,-1[ \cup [2\,;\,+\infty[}\).
{{% /details %}}

### Exercice 6

On veut aménager un potager carré de côté \(x\) mètres dont l’aire soit comprise entre \(18\) m² et \(50\) m². Déterminer les valeurs possibles de \(x\) (valeurs exactes, puis arrondies au centimètre).

{{% details title="Solution" closed="true" %}}
On cherche \({x > 0}\) tel que \({18 \leq x^2 \leq 50}\). Sur \({[0\,;\,+\infty[}\), la fonction carré est croissante, donc cela équivaut à \({\sqrt{18} \leq x \leq \sqrt{50}}\), soit \({3\sqrt{2} \leq x \leq 5\sqrt{2}}\). Le côté doit être compris entre environ \(4{,}24\) m et \(7{,}07\) m.
{{% /details %}}
