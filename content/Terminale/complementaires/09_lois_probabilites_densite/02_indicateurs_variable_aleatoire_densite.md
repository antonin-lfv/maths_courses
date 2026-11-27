---
title: "Indicateurs d'une variable aléatoire à densité"
weight: 2
cascade:
  type: docs
---

## Espérance

> [!TIP] **Définition**
>
> Soit \(X\) une variable aléatoire continue, de densité \(f\) et de support \({I = [a\,;\,b]}\). L’**espérance** de \(X\) est
> \[
E(X) = \int_a^b x f(x)\,\mathrm{d}x.
\]

> [!IMPORTANT] **Remarques**
>
> - Si \({I = [a\,;\,+\infty[}\), alors \({E(X) = \lim\limits_{t \to +\infty} \displaystyle\int_a^t x f(x)\,\mathrm{d}x}\) (lorsque cette limite existe) ; de même si \({I = \,]-\infty\,;\,b]}\).
> - L’espérance est un **paramètre de position** : c’est la valeur moyenne théorique de \(X\), dont se rapproche la moyenne des valeurs observées sur un très grand nombre d’expériences.

{{% details title="Exemple" closed="true" %}}
Si \(X\) a pour densité la fonction constante égale à \(0{,}1\) sur \([0\,;\,10]\) : \(E(X) = \displaystyle\int_0^{10} 0{,}1x\,\mathrm{d}x = \left[0{,}05x^2\right]_0^{10} = 5\).
{{% /details %}}

## Variance et écart type

> [!TIP] **Définitions**
>
> Soit \(X\) une variable aléatoire continue de densité \(f\) et de support \({I = [a\,;\,b]}\).
> \[
V(X) = \int_a^b \left(x - E(X)\right)^2 f(x)\,\mathrm{d}x \qquad \text{et} \qquad \sigma(X) = \sqrt{V(X)}.
\]

> [!IMPORTANT] **Remarques**
>
> - Pour un support non borné, on remplace l’intégrale par une limite, comme pour l’espérance.
> - La variance et l’écart type sont des **paramètres de dispersion** : ils mesurent l’écart des valeurs de \(X\) à son espérance.

## Calculer des indicateurs

> [!NOTE] **Méthode 1 - Calculer une espérance et un écart type**
>
> Soit \(X\) la variable aléatoire de densité \({f(x) = \dfrac{x}{8}}\) sur \([0\,;\,4]\). Calculer \(E(X)\), \(V(X)\) et \(\sigma(X)\).

{{% details title="Solution commentée" closed="true" %}}
\(E(X) = \displaystyle\int_0^4 x \times \dfrac{x}{8}\,\mathrm{d}x = \left[\dfrac{x^3}{24}\right]_0^4 = \dfrac{64}{24} = \dfrac{8}{3}\).

Pour la variance, on développe : \({\left(x - \dfrac{8}{3}\right)^2 \dfrac{x}{8} = \dfrac{1}{8}\left(x^3 - \dfrac{16}{3}x^2 + \dfrac{64}{9}x\right)}\). Donc
\[
\begin{aligned}
V(X) &= \dfrac{1}{8}\left[\dfrac{x^4}{4} - \dfrac{16}{9}x^3 + \dfrac{32}{9}x^2\right]_0^4 = \dfrac{1}{8}\left(64 - \dfrac{1\,024}{9} + \dfrac{512}{9}\right) \\[0.3em]
&= \dfrac{1}{8} \times \dfrac{64}{9} = \dfrac{8}{9},
\end{aligned}
\]
et \({\sigma(X) = \sqrt{\dfrac{8}{9}} = \dfrac{2\sqrt{2}}{3} \approx 0{,}94}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Calculer une espérance lorsque l’intervalle est non borné**
>
> Soit \(X\) la variable aléatoire de densité \({f(x) = \dfrac{2}{x^3}}\) sur \({[1\,;\,+\infty[}\).
> 1. Vérifier que \({\lim\limits_{t \to +\infty} \displaystyle\int_1^t f(x)\,\mathrm{d}x = 1}\).
> 2. Calculer \(E(X)\).

{{% details title="Solution commentée" closed="true" %}}
1. \({\displaystyle\int_1^t \dfrac{2}{x^3}\,\mathrm{d}x = \left[-\dfrac{1}{x^2}\right]_1^t = 1 - \dfrac{1}{t^2}}\), qui tend vers 1.
2. \(\displaystyle\int_1^t x \times \dfrac{2}{x^3}\,\mathrm{d}x = \int_1^t \dfrac{2}{x^2}\,\mathrm{d}x = \left[-\dfrac{2}{x}\right]_1^t = 2 - \dfrac{2}{t}\), qui tend vers 2. Donc \({E(X) = 2}\).
{{% /details %}}
