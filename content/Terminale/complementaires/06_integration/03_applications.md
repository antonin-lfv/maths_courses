---
title: 'Applications'
weight: 3
cascade:
  type: docs
---

## Valeur moyenne d’une fonction sur un intervalle

> [!TIP] **Définition**
>
> Soient \(a\) et \(b\) deux réels tels que \({a < b}\), et \(f\) une fonction continue sur l’intervalle \([a\,;\,b]\). On appelle **valeur moyenne** de la fonction \(f\) sur l’intervalle \([a\,;\,b]\) le réel
> \[
\mu = \dfrac{1}{b - a}\int_a^b f(x)\,\mathrm{d}x.
\]

{{% details title="Exemple" closed="true" %}}
La valeur moyenne de \({x \mapsto x^2}\) sur \([0\,;\,6]\) est \(\mu = \dfrac{1}{6}\displaystyle\int_0^6 x^2\,\mathrm{d}x = \dfrac{1}{6}\left[\dfrac{x^3}{3}\right]_0^6 = \dfrac{1}{6} \times 72 = 12\).
{{% /details %}}

> [!IMPORTANT] **Interprétation graphique**
>
> Si \(f\) est positive sur \([a\,;\,b]\), en notant \(\mu\) sa valeur moyenne : \({\displaystyle\int_a^b f(x)\,\mathrm{d}x = \mu(b - a)}\). L’aire sous la courbe de \(f\) est donc égale à l’aire du rectangle de largeur \({b - a}\) et de hauteur \(\mu\) : c’est l’aire sous la courbe de la fonction constante égale à \(\mu\).

## Calcul d’aire

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction continue et **négative** sur \([a\,;\,b]\) et \(\mathcal{C}_f\) sa courbe représentative dans un repère orthogonal. L’aire du domaine délimité par \(\mathcal{C}_f\), l’axe des abscisses et les droites \({x = a}\) et \({x = b}\), exprimée en u.a., est égale à
> \[
\int_a^b -f(x)\,\mathrm{d}x = -\int_a^b f(x)\,\mathrm{d}x.
\]

> [!TIP] **Propriété (admise)**
>
> Soient \(f\) et \(g\) deux fonctions continues sur \([a\,;\,b]\) telles que \({f \leq g}\) sur \([a\,;\,b]\), et \(\mathcal{C}_f\), \(\mathcal{C}_g\) leurs courbes dans un repère orthogonal. L’aire du domaine délimité par \(\mathcal{C}_f\), \(\mathcal{C}_g\) et les droites \({x = a}\) et \({x = b}\), exprimée en u.a., est égale à
> \[
\int_a^b \left(g(x) - f(x)\right)\mathrm{d}x.
\]

{{% details title="Exemple" closed="true" %}}
Sur \([0\,;\,1]\), \({x^2 \leq x}\). L’aire du domaine compris entre la parabole \({y = x^2}\) et la droite \({y = x}\) vaut
\[
\int_0^1 \left(x - x^2\right)\mathrm{d}x = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6} \text{ u.a.}
\]

![](/images/image349.png)
{{% /details %}}

## Utiliser les intégrales

> [!NOTE] **Méthode 1 - Calculer la valeur moyenne d’une fonction**
>
> La vitesse d’un cycliste (en km/h), \(t\) heures après le départ, est modélisée par \({v(t) = -6t^2 + 12t + 20}\) pour \({t \in [0\,;\,2]}\). Calculer la vitesse moyenne du cycliste sur ce trajet.

{{% details title="Solution commentée" closed="true" %}}
\[
\begin{aligned}
\mu &= \dfrac{1}{2 - 0}\int_0^2 \left(-6t^2 + 12t + 20\right)\mathrm{d}t = \dfrac{1}{2}\left[-2t^3 + 6t^2 + 20t\right]_0^2 \\[0.3em]
&= \dfrac{1}{2}(-16 + 24 + 40) = 24.
\end{aligned}
\]
La vitesse moyenne est de 24 km/h.
{{% /details %}}

> [!NOTE] **Méthode 2 - Estimer graphiquement une valeur moyenne**
>
> Une fonction positive \(f\) est représentée sur \([0\,;\,4]\). On a compté environ 10 carreaux d’une unité d’aire sous sa courbe. Estimer la valeur moyenne de \(f\) sur \([0\,;\,4]\) et l’interpréter.

{{% details title="Solution commentée" closed="true" %}}
\({\displaystyle\int_0^4 f(x)\,\mathrm{d}x \approx 10}\), donc \({\mu \approx \dfrac{10}{4} = 2{,}5}\). Le rectangle de base \([0\,;\,4]\) et de hauteur \(2{,}5\) a la même aire (environ 10 u.a.) que le domaine sous la courbe : la partie de la courbe au-dessus de la droite \({y = 2{,}5}\) « compense » la partie au-dessous.
{{% /details %}}

> [!NOTE] **Méthode 3 - Calculer une aire entre deux courbes**
>
> On considère \({f(x) = x^2 - 2x}\) et \({g(x) = x}\) sur \([0\,;\,3]\).
> 1. Étudier le signe de \({g(x) - f(x)}\) sur \([0\,;\,3]\).
> 2. Calculer l’aire du domaine délimité par les deux courbes et les droites \({x = 0}\) et \({x = 3}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({g(x) - f(x) = 3x - x^2 = x(3 - x) \geq 0}\) sur \([0\,;\,3]\) : la droite est au-dessus de la parabole.
2. Aire \(= \displaystyle\int_0^3 \left(3x - x^2\right)\mathrm{d}x = \left[\dfrac{3x^2}{2} - \dfrac{x^3}{3}\right]_0^3 = \dfrac{27}{2} - 9 = \dfrac{9}{2} = 4{,}5\) u.a.
{{% /details %}}
