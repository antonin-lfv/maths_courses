---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Développer et réduire \(A = (x - 3)^2 + (2x + 1)(2x - 1)\).

{{% details title="Solution" closed="true" %}}
\(A = (x^2 - 6x + 9) + (4x^2 - 1) = 5x^2 - 6x + 8\).
{{% /details %}}

### Exercice 2

Factoriser : a) \(16x^2 - 9\) ; b) \(x^2 + 10x + 25\) ; c) \((x - 1)(3x + 2) + (x - 1)^2\).

{{% details title="Solution" closed="true" %}}
a) \(16x^2 - 9 = (4x)^2 - 3^2 = (4x - 3)(4x + 3)\).

b) \(x^2 + 10x + 25 = x^2 + 2 \times x \times 5 + 5^2 = (x + 5)^2\).

c) Facteur commun \((x - 1)\) : \((x - 1)\big[(3x + 2) + (x - 1)\big] = (x - 1)(4x + 1)\).
{{% /details %}}

### Exercice 3

Résoudre dans \(\mathbb{R}\) : a) \((x + 2)(5 - x) = 0\) ; b) \(4x^2 = 9\) ; c) \((2x - 1)^2 = (x + 4)^2\).

{{% details title="Solution" closed="true" %}}
a) \(x + 2 = 0\) ou \(5 - x = 0\) : \(\mathcal{S} = \{-2\,;\,5\}\).

b) \(4x^2 - 9 = 0 \iff (2x - 3)(2x + 3) = 0 \iff x = \dfrac{3}{2}\) ou \(x = -\dfrac{3}{2}\) : \(\mathcal{S} = \left\{-\dfrac{3}{2}\,;\,\dfrac{3}{2}\right\}\).

c) \((2x - 1)^2 - (x + 4)^2 = 0 \iff \big[(2x - 1) - (x + 4)\big]\big[(2x - 1) + (x + 4)\big] = 0 \iff (x - 5)(3x + 3) = 0\). Donc \(\mathcal{S} = \{-1\,;\,5\}\).
{{% /details %}}

### Exercice 4

Résoudre dans \(\mathbb{R}\) : a) \(\dfrac{x + 3}{x - 2} = 2\) ; b) \(\dfrac{x^2 - 4}{x + 2} = 0\).

{{% details title="Solution" closed="true" %}}
a) Valeur interdite : \(2\). Pour \(x \neq 2\) : \(x + 3 = 2(x - 2) \iff x + 3 = 2x - 4 \iff x = 7\). \(\mathcal{S} = \{7\}\).

b) Valeur interdite : \(-2\). Le quotient est nul si et seulement si \(x^2 - 4 = 0\) et \(x \neq -2\). Or \(x^2 - 4 = (x - 2)(x + 2) = 0 \iff x = 2\) ou \(x = -2\). On exclut \(-2\) : \(\mathcal{S} = \{2\}\).
{{% /details %}}

### Exercice 5

1. Résoudre dans \(\mathbb{R}\) l’inéquation \(3(x - 2) \leq 5x + 4\).
2. Un service de location de vélos propose deux tarifs : tarif A, \(2\) € par heure ; tarif B, un forfait de \(12\) € plus \(0{,}50\) € par heure. À partir de combien d’heures de location le tarif B est-il strictement plus avantageux ?

{{% details title="Solution" closed="true" %}}
1. \(3x - 6 \leq 5x + 4 \iff -2x \leq 10 \iff x \geq -5\) (division par \(-2 < 0\), le sens change). \(\mathcal{S} = [-5\,;\,+\infty[\).
2. Pour \(h\) heures, le tarif A coûte \(2h\) € et le tarif B \(12 + 0{,}5h\) €. Le tarif B est plus avantageux si \(12 + 0{,}5h < 2h \iff 12 < 1{,}5h \iff h > 8\). Le tarif B est strictement plus avantageux pour une location de plus de \(8\) heures.
{{% /details %}}

### Exercice 6

La longueur \(L\) d’un rectangle, mesurée au millimètre près, vérifie \(7{,}9 \leq L \leq 8{,}1\) (en cm), et sa largeur \(\ell\) vérifie \(4{,}9 \leq \ell \leq 5{,}1\).
1. Encadrer le périmètre \(P\) du rectangle.
2. Encadrer son aire \(\mathcal{A}\).

{{% details title="Solution" closed="true" %}}
1. En ajoutant membre à membre : \(12{,}8 \leq L + \ell \leq 13{,}2\), puis en multipliant par \(2 > 0\) : \(25{,}6 \leq P \leq 26{,}4\) cm.
2. On multiplie \(7{,}9 \leq L \leq 8{,}1\) par \(\ell > 0\) : \(7{,}9\,\ell \leq L\ell \leq 8{,}1\,\ell\). Puis \(4{,}9 \leq \ell \leq 5{,}1\) multiplié par \(7{,}9 > 0\) et par \(8{,}1 > 0\) donne \(7{,}9\,\ell \geq 7{,}9 \times 4{,}9 = 38{,}71\) et \(8{,}1\,\ell \leq 8{,}1 \times 5{,}1 = 41{,}31\). Finalement \(38{,}71 \leq \mathcal{A} \leq 41{,}31\) cm².
{{% /details %}}
