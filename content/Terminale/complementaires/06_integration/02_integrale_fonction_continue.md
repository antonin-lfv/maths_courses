---
title: "Intégrale d'une fonction continue"
weight: 2
cascade:
  type: docs
---

## Théorème fondamental

> [!TIP] **Théorème (admis)**
>
> Soit \(f\) une fonction continue et positive sur un intervalle \([a\,;\,b]\). Soit \(F\) la fonction définie sur \([a\,;\,b]\) par
> \[
F(x) = \int_a^x f(t)\,\mathrm{d}t.
\]
> La fonction \(F\) est dérivable sur \([a\,;\,b]\) et a pour dérivée \(f\) : c’est une primitive de \(f\).

> [!IMPORTANT] **Remarque**
>
> Ce théorème justifie, dans le cas des fonctions continues et positives, l’existence de primitives.

> [!TIP] **Théorème**
>
> Soit \(f\) une fonction continue et positive sur un intervalle \([a\,;\,b]\), et \(F\) **une** primitive quelconque de \(f\) sur \([a\,;\,b]\). Alors
> \[
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a).
\]
> Ce nombre se note aussi \(\big[F(x)\big]_a^b\).

{{% details title="Démonstration" closed="true" %}}
La fonction \(G : x \mapsto \displaystyle\int_a^x f(t)\,\mathrm{d}t\) est une primitive de \(f\). Comme \(F\) en est une autre, il existe un réel \(k\) tel que \(G = F + k\). Or \(G(a) = 0\) (domaine d’aire nulle), donc \(k = -F(a)\). Ainsi
\[
\int_a^b f(x)\,\mathrm{d}x = G(b) = F(b) - F(a).
\]
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Ce théorème permet de calculer l’aire sous la courbe d’une fonction continue et positive grâce à une primitive.
> - Le résultat ne dépend pas de la primitive choisie : si \(G = F + k\), alors \(G(b) - G(a) = F(b) - F(a)\).

{{% details title="Exemple" closed="true" %}}
On reprend \(g(x) = 0{,}5x^2 + 1\) sur \([0\,;\,2]\). Une primitive est \(G(x) = \dfrac{x^3}{6} + x\), donc
\[
\int_0^2 \left(0{,}5x^2 + 1\right)\mathrm{d}x = G(2) - G(0) = \frac{8}{6} + 2 = \frac{10}{3} \approx 3{,}33 \text{ u.a.}
\]
{{% /details %}}

## Intégrale d’une fonction de signe quelconque

> [!TIP] **Définition**
>
> Soit \(f\) une fonction continue sur un intervalle \(I\), \(a\) et \(b\) deux réels de \(I\), et \(F\) une primitive de \(f\) sur \(I\). On définit l’**intégrale** de \(a\) à \(b\) de \(f\) par
> \[
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a) = \big[F(x)\big]_a^b.
\]

> [!IMPORTANT] **Remarques**
>
> - Cette définition généralise celle de l’intégrale d’une fonction continue positive. En particulier, la **relation de Chasles** s’applique encore.
> - L’intégrale d’une fonction de signe quelconque est un réel qui peut être **négatif** : si \(f \leq 0\) sur \([a\,;\,b]\) (avec \(a \leq b\)), son intégrale est négative.
> - La fonction \(F\) définie par \(F(x) = \displaystyle\int_a^x f(t)\,\mathrm{d}t\) est la primitive de \(f\) qui s’annule en \(a\).
> - \(\displaystyle\int_a^a f(x)\,\mathrm{d}x = 0\) et \(\displaystyle\int_b^a f(x)\,\mathrm{d}x = -\int_a^b f(x)\,\mathrm{d}x\).

## Calculer des intégrales

> [!NOTE] **Méthode 1 — Calculer l’aire sous la courbe d’une fonction positive**
>
> Soit \(f\) la fonction définie sur \([1\,;\,4]\) par \(f(x) = -x^2 + 5x - 4\).
> 1. Étudier le signe de \(f\) sur \([1\,;\,4]\).
> 2. Calculer l’aire, en u.a., du domaine délimité par la courbe de \(f\), l’axe des abscisses et les droites \(x = 1\) et \(x = 4\).

{{% details title="Solution commentée" closed="true" %}}
1. \(f(x) = -(x - 1)(x - 4)\) : trinôme de coefficient dominant négatif, de racines 1 et 4, donc positif entre ses racines. \(f \geq 0\) sur \([1\,;\,4]\).
2. L’aire vaut \(\displaystyle\int_1^4 f(x)\,\mathrm{d}x\). Une primitive est \(F(x) = -\dfrac{x^3}{3} + \dfrac{5x^2}{2} - 4x\) :
\[
F(4) = -\frac{64}{3} + 40 - 16 = \frac{8}{3}, \qquad F(1) = -\frac{1}{3} + \frac{5}{2} - 4 = -\frac{11}{6}.
\]
L’aire vaut \(\dfrac{8}{3} + \dfrac{11}{6} = \dfrac{27}{6} = \dfrac{9}{2} = 4{,}5\) u.a.
{{% /details %}}

> [!NOTE] **Méthode 2 — Calculer une intégrale à l’aide d’une primitive**
>
> Calculer \(I = \displaystyle\int_0^1 \left(e^{2x} - 3x^2\right)\mathrm{d}x\) et \(J = \displaystyle\int_1^e \frac{2}{x}\,\mathrm{d}x\).

{{% details title="Solution commentée" closed="true" %}}
- Une primitive de \(x \mapsto e^{2x} - 3x^2\) est \(x \mapsto \dfrac{1}{2}e^{2x} - x^3\). Donc \(I = \left(\dfrac{e^2}{2} - 1\right) - \dfrac{1}{2} = \dfrac{e^2 - 3}{2} \approx 2{,}19\).
- Une primitive de \(x \mapsto \dfrac{2}{x}\) sur \([1\,;\,e]\) est \(x \mapsto 2\ln(x)\). Donc \(J = 2\ln(e) - 2\ln(1) = 2\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Utiliser la relation de Chasles**
>
> Soit \(f\) la fonction définie sur \([-2\,;\,3]\) par \(f(x) = |x|\).
> 1. Calculer \(\displaystyle\int_{-2}^{0} f(x)\,\mathrm{d}x\) et \(\displaystyle\int_{0}^{3} f(x)\,\mathrm{d}x\).
> 2. En déduire \(\displaystyle\int_{-2}^{3} f(x)\,\mathrm{d}x\).

{{% details title="Solution commentée" closed="true" %}}
1. Sur \([-2\,;\,0]\), \(f(x) = -x\), de primitive \(-\dfrac{x^2}{2}\) : l’intégrale vaut \(0 - \left(-\dfrac{4}{2}\right) = 2\). Sur \([0\,;\,3]\), \(f(x) = x\) : l’intégrale vaut \(\dfrac{9}{2}\).
2. D’après la relation de Chasles, \(\displaystyle\int_{-2}^{3} |x|\,\mathrm{d}x = 2 + \frac{9}{2} = \frac{13}{2}\).
{{% /details %}}
