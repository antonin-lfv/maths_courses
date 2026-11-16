---
title: 'Inégalités probabilistes et moyenne d’échantillon'
weight: 2
cascade:
  type: docs
---

## Inégalité de Markov

> [!TIP] **Propriété (inégalité de Markov)**
>
> Pour toute variable aléatoire \(X\) à valeurs **positives** et tout réel \(\delta > 0\) :
> \[
P(X \geq \delta) \leq \frac{E(X)}{\delta}.
\]

{{% details title="Exemple" closed="true" %}}
Le temps d’attente \(T\) (en minutes) à un guichet est une variable aléatoire positive d’espérance 2 min. Sans connaître sa loi, on peut affirmer que \(P(T \geq 10) \leq \dfrac{2}{10} = 0{,}2\).
{{% /details %}}

## Inégalité de Bienaymé-Tchebychev

> [!TIP] **Propriété (inégalité de Bienaymé-Tchebychev)**
>
> Pour toute variable aléatoire \(X\) et tout réel \(\delta > 0\) :
> \[
P\big(|X - E(X)| \geq \delta\big) \leq \frac{V(X)}{\delta^2}.
\]

> [!IMPORTANT] **Remarques**
>
> - L’événement \(|X - E(X)| \geq \delta\) signifie que \(X\) s’écarte de son espérance d’au moins \(\delta\). Par passage au contraire : \(P\big(|X - E(X)| < \delta\big) \geq 1 - \dfrac{V(X)}{\delta^2}\).
> - Avec \(\delta = k\sigma(X)\) (\(k > 0\)) : \(P\big(|X - E(X)| \geq k\sigma(X)\big) \leq \dfrac{1}{k^2}\). Par exemple, une variable aléatoire s’écarte de son espérance de deux écarts types ou plus avec une probabilité d’au plus 25 %.
> - Ces inégalités sont valables pour toute loi, mais elles donnent souvent des majorations larges.

{{% details title="Exemple" closed="true" %}}
On considère \(X \sim \mathcal{B}(50\,;\,0{,}4)\) : \(E(X) = 20\) et \(V(X) = 12\). Avec \(\delta = 8\) :
\[
P\big(|X - 20| \geq 8\big) \leq \frac{12}{64} = 0{,}1875, \quad \text{donc} \quad P(12 < X < 28) \geq 0{,}8125.
\]
Le calcul exact avec la loi binomiale donne \(P(13 \leq X \leq 27) \approx 0{,}971\) : l’inégalité est vraie mais peu précise.

![](/images/image320.png)
{{% /details %}}

## Moyenne d’un échantillon

> [!TIP] **Définition**
>
> Pour un échantillon \((X_1, \dots, X_n)\) de taille \(n\) d’une loi de probabilité donnée, la **variable aléatoire moyenne** de l’échantillon est
> \[
M_n = \frac{1}{n}\left(X_1 + X_2 + \dots + X_n\right).
\]

> [!TIP] **Propriétés**
>
> Pour tout échantillon \((X_1, \dots, X_n)\) de la loi d’une variable aléatoire \(X\), on a :
> \[
E(M_n) = E(X), \qquad V(M_n) = \frac{1}{n}V(X), \qquad \sigma(M_n) = \frac{1}{\sqrt{n}}\sigma(X).
\]

> [!IMPORTANT] **Remarque**
>
> Ces formules découlent des propriétés de la page précédente : \(E(X_1 + \dots + X_n) = nE(X)\) et, par indépendance, \(V(X_1 + \dots + X_n) = nV(X)\) ; on multiplie ensuite par \(\frac{1}{n}\) (donc la variance par \(\frac{1}{n^2}\)). La moyenne a la même espérance que \(X\), mais elle est **moins dispersée** : sa variance est divisée par \(n\).

{{% details title="Exemple" closed="true" %}}
\(X\) suit la loi \(\mathcal{B}(8\,;\,0{,}25)\) : \(E(X) = 2\) et \(V(X) = 1{,}5\). Pour un échantillon de taille 16 : \(E(M_{16}) = 2\), \(V(M_{16}) = \frac{1{,}5}{16} \approx 0{,}094\) et \(\sigma(M_{16}) = \frac{\sqrt{1{,}5}}{4} \approx 0{,}31\), contre \(\sigma(X) \approx 1{,}22\).
{{% /details %}}

## Utiliser l’inégalité de Bienaymé-Tchebychev

> [!NOTE] **Méthode 3 — Majorer une probabilité d’écart**
>
> On lance 600 fois un dé équilibré ; \(Y\) est le nombre de 6 obtenus.
> 1. Donner la loi de \(Y\), son espérance et sa variance.
> 2. À l’aide de l’inégalité de Bienaymé-Tchebychev, minorer la probabilité \(P(80 < Y < 120)\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(Y \sim \mathcal{B}\left(600\,;\,\frac{1}{6}\right)\), donc \(E(Y) = 100\) et \(V(Y) = 600 \times \frac{1}{6} \times \frac{5}{6} = \frac{250}{3} \approx 83{,}3\).

**2.** \(80 < Y < 120 \iff |Y - 100| < 20\). Avec \(\delta = 20\) :
\[
P\big(|Y - 100| \geq 20\big) \leq \frac{250/3}{400} = \frac{5}{24} \approx 0{,}208, \quad \text{donc} \quad P(80 < Y < 120) \geq 1 - \frac{5}{24} = \frac{19}{24} \approx 0{,}79.
\]
(La valeur exacte est environ 0,968.)
{{% /details %}}
