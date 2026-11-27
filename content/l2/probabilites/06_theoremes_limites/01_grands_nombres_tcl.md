---
title: 'Inégalités de concentration et théorèmes limites'
weight: 1
cascade:
  type: docs
---

## Inégalités de concentration

> [!TIP] **Théorème - Inégalité de Markov**
>
> Soit \(X\) une variable aléatoire **positive** d’espérance finie. Pour tout réel \({a > 0}\) :
>
> \[ P(X \geq a) \leq \dfrac{E(X)}{a}. \]

{{% details title="Démonstration" closed="true" %}}
On a \({X \geq a\,\mathbb{1}_{\{X \geq a\}}}\) : si \({X \geq a}\), le membre de droite vaut \(a\) ; sinon il vaut \(0\) et \({X \geq 0}\). Par croissance de l’espérance, \({E(X) \geq aP(X \geq a)}\).
{{% /details %}}

> [!TIP] **Théorème - Inégalité de Bienaymé-Tchebychev**
>
> Soit \(X\) une variable aléatoire admettant une variance. Pour tout \({\varepsilon > 0}\) :
>
> \[ P\big(|X - E(X)| \geq \varepsilon\big) \leq \dfrac{V(X)}{\varepsilon^2}. \]

{{% details title="Démonstration" closed="true" %}}
On applique l’inégalité de Markov à la variable positive \({(X - E(X))^2}\) et à \({a = \varepsilon^2}\) : \({P\big((X - E(X))^2 \geq \varepsilon^2\big) \leq \dfrac{E\big((X - E(X))^2\big)}{\varepsilon^2}}\).
{{% /details %}}

Ces inégalités sont valables pour toute loi, ce qui les rend souvent grossières : pour \({\varepsilon = 2\sigma}\), Bienaymé-Tchebychev donne une probabilité d’au plus \(0{,}25\), alors qu’elle vaut environ \(0{,}05\) pour une loi normale.

## Loi des grands nombres

> [!TIP] **Cadre**
>
> \((X_n)_{n \geq 1}\) est une suite de variables aléatoires **indépendantes et de même loi**, d’espérance \(m\) et de variance \(\sigma^2\). On note
>
> \[ S_n = X_1 + \dots + X_n, \qquad \overline{X}_n = \dfrac{S_n}{n} \quad \text{(moyenne empirique)}. \]
>
> Par linéarité et indépendance : \({E(\overline{X}_n) = m}\) et \({V(\overline{X}_n) = \dfrac{\sigma^2}{n}}\).

> [!TIP] **Théorème - Loi faible des grands nombres**
>
> Pour tout \({\varepsilon > 0}\) :
>
> \[ P\big(|\overline{X}_n - m| \geq \varepsilon\big) \leq \dfrac{\sigma^2}{n\varepsilon^2} \xrightarrow[n \to +\infty]{} 0. \]
>
> On dit que \(\overline{X}_n\) **converge en probabilité** vers \(m\).

{{% details title="Démonstration" closed="true" %}}
C’est l’inégalité de Bienaymé-Tchebychev appliquée à \(\overline{X}_n\), d’espérance \(m\) et de variance \(\dfrac{\sigma^2}{n}\).
{{% /details %}}

> [!TIP] **Théorème - Loi forte des grands nombres (admis)**
>
> Si les \(X_n\) sont indépendantes, de même loi et d’espérance finie \(m\), alors \(\overline{X}_n\) converge **presque sûrement** vers \(m\) :
>
> \[ P\left(\lim_{n \to +\infty} \overline{X}_n = m\right) = 1. \]

En particulier, la **fréquence** d’un événement dans une suite d’épreuves indépendantes converge vers sa probabilité : c’est ce qui justifie l’interprétation d’une probabilité comme fréquence limite.

## Théorème central limite

> [!TIP] **Définition - Convergence en loi**
>
> Une suite \((Y_n)\) de variables aléatoires réelles **converge en loi** vers \(Y\) si \({F_{Y_n}(t) \to F_Y(t)}\) en tout point \(t\) où \(F_Y\) est continue.

> [!TIP] **Théorème central limite (admis)**
>
> Soit \((X_n)\) une suite de variables indépendantes, de même loi, d’espérance \(m\) et de variance \({\sigma^2 > 0}\). Alors la somme centrée réduite
>
> \[ Z_n = \dfrac{S_n - nm}{\sigma\sqrt{n}} = \dfrac{\sqrt{n}\,(\overline{X}_n - m)}{\sigma} \]
>
> converge en loi vers la loi normale \(\mathcal{N}(0, 1)\) : pour tous \({a < b}\),
>
> \[ P(a \leq Z_n \leq b) \xrightarrow[n \to +\infty]{} \Phi(b) - \Phi(a) = \dfrac{1}{\sqrt{2\pi}}\int_a^b e^{-x^2/2}\,\mathrm{d}x. \]

Quelle que soit la loi de départ, la somme d’un grand nombre de variables indépendantes est approximativement normale. La loi des grands nombres dit que \({\overline{X}_n - m}\) tend vers \(0\) ; le théorème central limite précise que cet écart est d’ordre \(\dfrac{\sigma}{\sqrt{n}}\).

> [!TIP] **Corollaire - Théorème de Moivre-Laplace**
>
> Si \({S_n \sim \mathcal{B}(n, p)}\) avec \({0 < p < 1}\), alors \({\dfrac{S_n - np}{\sqrt{np(1 - p)}}}\) converge en loi vers \(\mathcal{N}(0, 1)\). En pratique, pour \(n\) grand (par exemple \({np \geq 5}\) et \({n(1 - p) \geq 5}\)), on approche la loi \(\mathcal{B}(n, p)\) par la loi \({\mathcal{N}(np, np(1 - p))}\).

> [!NOTE] **Méthode - Approximation normale**
>
> 1. Identifier \(S_n\) comme somme de \(n\) variables indépendantes de même loi ; calculer \({E(S_n) = nm}\) et \({V(S_n) = n\sigma^2}\).
> 2. Centrer et réduire : \({P(S_n \leq x) \approx \Phi\left(\dfrac{x - nm}{\sigma\sqrt{n}}\right)}\).
> 3. Lire la valeur de \(\Phi\) dans une table, en utilisant \({\Phi(-x) = 1 - \Phi(x)}\).

## Intervalles de confiance

> [!TIP] **Principe**
>
> On veut estimer une proportion inconnue \(p\) à partir de \(n\) observations indépendantes \({X_1, \dots, X_n}\) de loi \(\mathcal{B}(p)\). La fréquence observée \({F_n = \overline{X}_n}\) est un estimateur de \(p\). Un **intervalle de confiance** de niveau \({1 - \alpha}\) est un intervalle aléatoire \(I_n\), calculé à partir des observations, tel que \({P(p \in I_n) \geq 1 - \alpha}\) (au moins approximativement).

> [!TIP] **Propriété**
>
> - **Par Bienaymé-Tchebychev** : comme \({p(1 - p) \leq \dfrac{1}{4}}\), \({P(|F_n - p| \geq \varepsilon) \leq \dfrac{1}{4n\varepsilon^2}}\). L’intervalle \({\left[F_n - \dfrac{1}{2\sqrt{n\alpha}},\ F_n + \dfrac{1}{2\sqrt{n\alpha}}\right]}\) est de niveau au moins \({1 - \alpha}\), pour tout \(n\).
> - **Par le théorème central limite** : pour \(n\) grand, \({P\left(|F_n - p| \leq 1{,}96\sqrt{\dfrac{p(1 - p)}{n}}\right) \approx 0{,}95}\). En majorant \({\sqrt{p(1 - p)}}\) par \(\dfrac{1}{2}\), l’intervalle
>
> \[ \left[F_n - \dfrac{1}{\sqrt{n}},\ F_n + \dfrac{1}{\sqrt{n}}\right] \]
>
>   est un intervalle de confiance au niveau (asymptotique) d’au moins \(95\,\%\).

La précision est en \(\dfrac{1}{\sqrt{n}}\) : pour diviser la marge d’erreur par \(10\), il faut \(100\) fois plus d’observations.

> [!NOTE] **Exercice résolu - Lancers d’un dé**
>
> On lance \(n\) fois un dé équilibré et on note \(S_n\) le nombre de six obtenus.
>
> 1. Avec l’inégalité de Bienaymé-Tchebychev, trouver un entier \(n\) à partir duquel la fréquence de six est comprise entre \({\dfrac{1}{6} - 0{,}02}\) et \({\dfrac{1}{6} + 0{,}02}\) avec une probabilité d’au moins \(0{,}95\).
> 2. Pour \({n = 720}\), donner une valeur approchée de \({P(S_n \geq 135)}\). On donne \({\Phi(1{,}5) \approx 0{,}933}\).

{{% details title="Solution commentée" closed="true" %}}
\(S_n\) est la somme de \(n\) variables de Bernoulli indépendantes de paramètre \({p = \dfrac{1}{6}}\) : \({S_n \sim \mathcal{B}\left(n, \dfrac{1}{6}\right)}\), \({E(S_n) = \dfrac{n}{6}}\), \({V(S_n) = \dfrac{5n}{36}}\).

**1.** La fréquence \({F_n = \dfrac{S_n}{n}}\) a pour espérance \(\dfrac{1}{6}\) et pour variance \({\dfrac{5}{36n}}\). D’après l’inégalité de Bienaymé-Tchebychev :

\[
P\left(\left|F_n - \dfrac{1}{6}\right| \geq 0{,}02\right) \leq \dfrac{5}{36n \times 0{,}0004} = \dfrac{5}{0{,}0144\,n}.
\]

On veut que cette borne soit inférieure à \(0{,}05\) : \({n \geq \dfrac{5}{0{,}0144 \times 0{,}05} \approx 6944{,}4}\). Donc \({n = 6945}\) convient.

(Le théorème central limite donnerait une taille bien plus petite : \({1{,}96\sqrt{\dfrac{5}{36n}} \leq 0{,}02}\) dès que \({n \geq 1334}\). L’inégalité de Bienaymé-Tchebychev est sûre mais pessimiste.)

**2.** Pour \({n = 720}\) : \({E(S_n) = 120}\) et \({V(S_n) = 100}\), donc \({\sigma(S_n) = 10}\). D’après le théorème de Moivre-Laplace, \({\dfrac{S_n - 120}{10}}\) suit approximativement la loi \(\mathcal{N}(0, 1)\) :

\[
P(S_n \geq 135) = P\left(\dfrac{S_n - 120}{10} \geq 1{,}5\right) \approx 1 - \Phi(1{,}5) \approx 0{,}067.
\]

Il y a environ \(6{,}7\,\%\) de chances d’obtenir au moins \(135\) six en \(720\) lancers.
{{% /details %}}
