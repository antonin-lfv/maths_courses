---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Sans calculatrice, comparer : a) \(\sqrt{0{,}8}\) et \(0{,}8\) ; b) \(\dfrac{1}{\sqrt{5}}\) et \(\dfrac{1}{2{,}2}\) ; c) \({\dfrac{1}{-0{,}1}}\) et \({\dfrac{1}{-0{,}01}}\) ; d) \(\sqrt{7{,}5}\) et \(\sqrt{7{,}49}\).

{{% details title="Solution" closed="true" %}}
a) \({0 < 0{,}8 < 1}\), donc \({0{,}8 < \sqrt{0{,}8}}\).

b) \({2{,}2^2 = 4{,}84 < 5}\), donc \({2{,}2 < \sqrt{5}}\) ; ces nombres sont positifs et la fonction inverse est décroissante sur \({]0\,;\,+\infty[}\) : \({\dfrac{1}{\sqrt{5}} < \dfrac{1}{2{,}2}}\).

c) \({-0{,}1 < -0{,}01 < 0}\) et la fonction inverse est décroissante sur \({]-\infty\,;\,0[}\) : \({\dfrac{1}{-0{,}1} > \dfrac{1}{-0{,}01}}\) (en effet \({-10 > -100}\)).

d) La fonction racine carrée est croissante : \({\sqrt{7{,}49} < \sqrt{7{,}5}}\).
{{% /details %}}

### Exercice 2

On sait que \({0{,}25 \leq x \leq 9}\). Encadrer \(\sqrt{x}\), \(\dfrac{1}{x}\), puis \({2 - \dfrac{1}{x}}\).

{{% details title="Solution" closed="true" %}}
- La racine carrée conserve l’ordre : \({0{,}5 \leq \sqrt{x} \leq 3}\).
- L’inverse renverse l’ordre sur \({]0\,;\,+\infty[}\) : \({\dfrac{1}{9} \leq \dfrac{1}{x} \leq 4}\).
- En multipliant par \({-1}\) (le sens change) : \({-4 \leq -\dfrac{1}{x} \leq -\dfrac{1}{9}}\), puis en ajoutant \(2\) : \({-2 \leq 2 - \dfrac{1}{x} \leq \dfrac{17}{9}}\).
{{% /details %}}

### Exercice 3

Résoudre : a) \({\sqrt{x} = 1{,}2}\) ; b) \({\sqrt{x + 3} = 5}\) ; c) \({\sqrt{x} \geq 4}\) ; d) \({\sqrt{x} < -3}\).

{{% details title="Solution" closed="true" %}}
a) \({x = 1{,}2^2 = 1{,}44}\) : \({\mathcal{S} = \{1{,}44\}}\).

b) Condition \({x \geq -3}\). \({x + 3 = 25 \iff x = 22}\), qui vérifie la condition : \({\mathcal{S} = \{22\}}\).

c) \({\sqrt{x} \geq 4 \iff x \geq 16}\) : \({\mathcal{S} = [16\,;\,+\infty[}\).

d) Une racine carrée est positive : \({\mathcal{S} = \varnothing}\).
{{% /details %}}

### Exercice 4

Résoudre dans \(\mathbb{R}^*\) : a) \({\dfrac{1}{x} = -5}\) ; b) \({\dfrac{1}{x} \leq 0{,}5}\) ; c) \({\dfrac{1}{x} < -4}\).

{{% details title="Solution" closed="true" %}}
a) \({x = -\dfrac{1}{5}}\).

b) \({c = 0{,}5 > 0}\), \({\dfrac{1}{c} = 2}\) : \({\mathcal{S} = ]-\infty\,;\,0[ \cup [2\,;\,+\infty[}\).

c) \({c = -4 < 0}\), \({\dfrac{1}{c} = -\dfrac{1}{4}}\) : \({\mathcal{S} = \left]-\dfrac{1}{4}\,;\,0\right[}\). *(Contrôle : \({x = -0{,}2}\) donne \({-5 < -4}\).)*
{{% /details %}}

### Exercice 5

Un rectangle a une aire de \(12\) m² et une longueur de \(x\) mètres.
1. Exprimer sa largeur \(\ell(x)\) en fonction de \(x\).
2. Pour quelles valeurs de \(x\) la largeur est-elle inférieure ou égale à \(3\) m ?

{{% details title="Solution" closed="true" %}}
1. \({x \times \ell(x) = 12}\), donc \({\ell(x) = \dfrac{12}{x}}\), pour \({x > 0}\).
2. \({\dfrac{12}{x} \leq 3 \iff \dfrac{1}{x} \leq \dfrac{1}{4}}\). Avec \({x > 0}\) : \({x \geq 4}\). La largeur est au plus \(3\) m dès que la longueur atteint \(4\) m.
{{% /details %}}

### Exercice 6

Soit \(x\) un réel strictement positif. Ranger dans l’ordre croissant \(x\), \(x^2\), \(\sqrt{x}\) et \(\dfrac{1}{x}\) lorsque \({x = 0{,}5}\), puis lorsque \({x = 4}\).

{{% details title="Solution" closed="true" %}}
- Pour \({x = 0{,}5}\) : \({x^2 = 0{,}25}\), \({\sqrt{x} \approx 0{,}71}\), \({\dfrac{1}{x} = 2}\). Donc \({x^2 < x < \sqrt{x} < \dfrac{1}{x}}\).
- Pour \({x = 4}\) : \({x^2 = 16}\), \({\sqrt{x} = 2}\), \({\dfrac{1}{x} = 0{,}25}\). Donc \({\dfrac{1}{x} < \sqrt{x} < x < x^2}\).
{{% /details %}}
