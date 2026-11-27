---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Soit \(k\) un réel et \(f\) la fonction définie par \({f(x) = kx^2}\) sur \([0\,;\,3]\) et \({f(x) = 0}\) sinon.
1. Déterminer \(k\) pour que \(f\) soit une densité de probabilité.
2. \(X\) étant une variable aléatoire de densité \(f\), calculer \({P(X \leq 2)}\) et \(E(X)\).

{{% details title="Solution" closed="true" %}}
1. Il faut \({k \geq 0}\) et \({\displaystyle\int_0^3 kx^2\,\mathrm{d}x = k\left[\dfrac{x^3}{3}\right]_0^3 = 9k = 1}\), soit \({k = \dfrac{1}{9}}\).
2. \({P(X \leq 2) = \left[\dfrac{x^3}{27}\right]_0^2 = \dfrac{8}{27}}\) et \(E(X) = \displaystyle\int_0^3 \dfrac{x^3}{9}\,\mathrm{d}x = \left[\dfrac{x^4}{36}\right]_0^3 = \dfrac{81}{36} = \dfrac{9}{4}\).
{{% /details %}}

### Exercice 2

L’instruction Python `random()` renvoie un nombre réel choisi au hasard dans \([0\,;\,1[\) ; on le modélise par une variable \(U\) de loi uniforme sur \([0\,;\,1]\).
1. Calculer \({P(U > 0{,}7)}\) et \({P(0{,}2 \leq U \leq 0{,}45)}\).
2. Donner \(E(U)\) et \(V(U)\).

{{% details title="Solution" closed="true" %}}
1. \({P(U > 0{,}7) = \dfrac{1 - 0{,}7}{1} = 0{,}3}\) et \({P(0{,}2 \leq U \leq 0{,}45) = 0{,}25}\).
2. \({E(U) = \dfrac{0 + 1}{2} = 0{,}5}\) et \({V(U) = \dfrac{(1 - 0)^2}{12} = \dfrac{1}{12}}\).
{{% /details %}}

### Exercice 3

La durée \(T\), en minutes, entre deux appels reçus par un standard téléphonique suit la loi exponentielle de paramètre \({\lambda = 0{,}2}\).
1. Calculer la durée moyenne entre deux appels.
2. Calculer \({P(T \leq 5)}\) et \({P(T > 10)}\).
3. Déterminer le réel \(m\) tel que \({P(T \leq m) = 0{,}5}\).

{{% details title="Solution" closed="true" %}}
1. \({E(T) = \dfrac{1}{0{,}2} = 5}\) minutes.
2. \({P(T \leq 5) = 1 - e^{-1} \approx 0{,}632}\) et \({P(T > 10) = e^{-2} \approx 0{,}135}\).
3. \(1 - e^{-0{,}2m} = 0{,}5 \iff e^{-0{,}2m} = 0{,}5 \iff m = \dfrac{\ln 2}{0{,}2} = 5\ln 2 \approx 3{,}47\) minutes. (La moitié des appels arrivent moins de 3,5 minutes après le précédent.)
{{% /details %}}

### Exercice 4

Soit \(X\) une variable aléatoire de densité \({f(x) = 2x}\) sur \([0\,;\,1]\).
1. Vérifier que \(f\) est une densité.
2. Calculer \(E(X)\), \(V(X)\) et \(\sigma(X)\).

{{% details title="Solution" closed="true" %}}
1. \(f\) est continue et positive sur \([0\,;\,1]\), et \({\displaystyle\int_0^1 2x\,\mathrm{d}x = 1}\).
2. \({E(X) = \displaystyle\int_0^1 2x^2\,\mathrm{d}x = \dfrac{2}{3}}\). Puis \({\left(x - \dfrac{2}{3}\right)^2 \times 2x = 2x^3 - \dfrac{8}{3}x^2 + \dfrac{8}{9}x}\), donc
\[
V(X) = \left[\dfrac{x^4}{2} - \dfrac{8}{9}x^3 + \dfrac{4}{9}x^2\right]_0^1 = \dfrac{1}{2} - \dfrac{8}{9} + \dfrac{4}{9} = \dfrac{1}{18}, \qquad \sigma(X) = \dfrac{1}{\sqrt{18}} = \dfrac{\sqrt{2}}{6} \approx 0{,}24.
\]
{{% /details %}}

### Exercice 5

Une variable aléatoire \(X\) suit une loi uniforme sur un intervalle \([a\,;\,b]\). On sait que \({E(X) = 10}\) et \({\sigma(X) = \sqrt{3}}\). Déterminer \(a\) et \(b\).

{{% details title="Solution" closed="true" %}}
\({\dfrac{a + b}{2} = 10}\) et \({\dfrac{b - a}{2\sqrt{3}} = \sqrt{3}}\), soit \({a + b = 20}\) et \({b - a = 6}\). Donc \({a = 7}\) et \({b = 13}\).
{{% /details %}}

### Exercice 6

La durée de vie \(D\), en années, d’un appareil suit une loi exponentielle. La probabilité qu’il fonctionne encore au bout de 4 ans est \(0{,}5\).
1. Déterminer le paramètre \(\lambda\) de la loi.
2. Un appareil a déjà fonctionné 4 ans. Quelle est la probabilité qu’il fonctionne encore au moins 2 ans ?

{{% details title="Solution" closed="true" %}}
1. \(P(D > 4) = e^{-4\lambda} = 0{,}5 \iff \lambda = \dfrac{\ln 2}{4} \approx 0{,}173\).
2. Par absence de mémoire : \(P_{(D > 4)}(D > 6) = P(D > 2) = e^{-2\lambda} = e^{-\frac{\ln 2}{2}} = \dfrac{1}{\sqrt{2}} \approx 0{,}707\).
{{% /details %}}
