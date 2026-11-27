---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = 2x^2 - 3x + 1}\).
1. Calculer les images de \({-2}\), \(0\) et \(\dfrac{1}{2}\).
2. Déterminer les antécédents de \(1\).
3. Le point \(A(3\,;\,10)\) appartient-il à la courbe de \(f\) ?

{{% details title="Solution" closed="true" %}}
1. \({f(-2) = 8 + 6 + 1 = 15}\) ; \({f(0) = 1}\) ; \({f\left(\dfrac{1}{2}\right) = \dfrac{1}{2} - \dfrac{3}{2} + 1 = 0}\).
2. \(f(x) = 1 \iff 2x^2 - 3x = 0 \iff x(2x - 3) = 0 \iff x = 0\) ou \({x = \dfrac{3}{2}}\). Les antécédents de \(1\) sont \(0\) et \(\dfrac{3}{2}\).
3. \({f(3) = 18 - 9 + 1 = 10}\) : oui, \(A\) appartient à la courbe.
{{% /details %}}

### Exercice 2

La courbe ci-dessous représente une fonction \(f\) définie sur \({[-2\,;\,3]}\).

![](/images/image368.png)

1. Résoudre graphiquement \({f(x) = -2}\), puis \({f(x) = 4}\).
2. Résoudre graphiquement \({f(x) \leq 0}\).
3. Dresser le tableau de signes de \(f\).

{{% details title="Solution" closed="true" %}}
1. La droite \({y = -2}\) coupe la courbe aux points d’abscisses \(0\) et \(1\) : \({\mathcal{S} = \{0\,;\,1\}}\). La droite \({y = 4}\) la coupe en \({-2}\) et \(3\) : \({\mathcal{S} = \{-2\,;\,3\}}\).
2. La courbe est sous l’axe des abscisses (ou dessus) entre \({-1}\) et \(2\) : \({\mathcal{S} = [-1\,;\,2]}\).
3. La courbe coupe l’axe des abscisses en \({-1}\) et \(2\) :

| \(x\) | \({-2}\) | | \({-1}\) | | \(2\) | | \(3\) |
|---|---|---|---|---|---|---|---|
| \(f(x)\) | | \({+}\) | \(0\) | \({-}\) | \(0\) | \({+}\) | |
{{% /details %}}

### Exercice 3

\(g\) est une fonction affine telle que \({g(2) = 1}\) et \({g(6) = 7}\).
1. Déterminer l’expression de \(g(x)\).
2. Donner son sens de variation et dresser son tableau de signes.

{{% details title="Solution" closed="true" %}}
1. \({m = \dfrac{7 - 1}{6 - 2} = \dfrac{6}{4} = 1{,}5}\) et \({g(2) = 3 + p = 1}\), donc \({p = -2}\) : \({g(x) = 1{,}5x - 2}\).
2. \({m > 0}\) : \(g\) est strictement croissante sur \(\mathbb{R}\). \({1{,}5x - 2 = 0 \iff x = \dfrac{4}{3}}\) :

| \(x\) | \({-\infty}\) | | \(\dfrac{4}{3}\) | | \({+\infty}\) |
|---|---|---|---|---|---|
| \(g(x)\) | | \({-}\) | \(0\) | \({+}\) | |
{{% /details %}}

### Exercice 4

Un forfait mobile A coûte \(20\) € par mois, quelle que soit la consommation. Un forfait B coûte \(8\) € par mois plus \(0{,}40\) € par gigaoctet (Go) consommé.
1. Exprimer le coût mensuel de chaque forfait en fonction du nombre \(x\) de Go consommés. De quel type de fonctions s’agit-il ?
2. Pour quelles consommations le forfait B est-il strictement moins cher ?

{{% details title="Solution" closed="true" %}}
1. \({A(x) = 20}\) : fonction constante. \({B(x) = 0{,}4x + 8}\) : fonction affine (croissante, car \({0{,}4 > 0}\)).
2. \(B(x) < A(x) \iff 0{,}4x + 8 < 20 \iff 0{,}4x < 12 \iff x < 30\). Le forfait B est moins cher pour une consommation de moins de \(30\) Go par mois.
{{% /details %}}

### Exercice 5

Soit \(h\) la fonction définie sur \(\mathbb{R}\) par \({h(x) = -\dfrac{x}{4} + 3}\).
1. Calculer le taux d’accroissement de \(h\) entre \({-2}\) et \(10\).
2. Résoudre l’inéquation \({h(x) \geq 0}\).

{{% details title="Solution" closed="true" %}}
1. \({h(-2) = \dfrac{1}{2} + 3 = 3{,}5}\) et \({h(10) = -2{,}5 + 3 = 0{,}5}\). Le taux vaut \({\dfrac{0{,}5 - 3{,}5}{10 - (-2)} = \dfrac{-3}{12} = -\dfrac{1}{4}}\) : c’est le coefficient \(m\), comme prévu.
2. \({h(x) = 0 \iff x = 12}\) ; \({m < 0}\), donc \({h(x) \geq 0}\) pour \({x \leq 12}\) : \({\mathcal{S} = ]-\infty\,;\,12]}\).
{{% /details %}}

### Exercice 6

On cherche à encadrer \(\sqrt{7}\), solution positive de l’équation \({x^2 = 7}\), qui appartient à \([2\,;\,3]\). Par dichotomie, donner un encadrement de \(\sqrt{7}\) d’amplitude \(0{,}125\).

{{% details title="Solution" closed="true" %}}
On compare le carré du milieu à \(7\) :
- \({2{,}5^2 = 6{,}25 < 7}\) : \({\sqrt{7} \in [2{,}5\,;\,3]}\) ;
- \({2{,}75^2 = 7{,}562\,5 > 7}\) : \({\sqrt{7} \in [2{,}5\,;\,2{,}75]}\) ;
- \({2{,}625^2 = 6{,}890\,625 < 7}\) : \({\sqrt{7} \in [2{,}625\,;\,2{,}75]}\).

Donc \({2{,}625 \leq \sqrt{7} \leq 2{,}75}\) (amplitude \(0{,}125\)). La calculatrice donne \({\sqrt{7} \approx 2{,}646}\).
{{% /details %}}
