---
title: "Primitives d'une fonction continue"
weight: 2
cascade:
  type: docs
---

## Primitives des fonctions usuelles

> [!TIP] **Propriété**
>
> | La fonction \({f : x \mapsto}\) | a pour primitive \({F : x \mapsto}\) | sur l’intervalle \({I =}\) |
> |---|---|---|
> | \(k\) (constante) | \(kx\) | \(\mathbb{R}\) |
> | \(x^n\) (\({n \in \mathbb{Z}}\), \({n \neq -1}\)) | \({\dfrac{x^{n+1}}{n + 1}}\) | \(\mathbb{R}\) si \({n \geq 0}\) ; \({]-\infty\,;\,0[}\) ou \({]0\,;\,+\infty[}\) si \({n \leq -2}\) |
> | \({-\dfrac{1}{x^2}}\) | \(\dfrac{1}{x}\) | \({]-\infty\,;\,0[}\) ou \({]0\,;\,+\infty[}\) |
> | \(\dfrac{1}{x}\) | \(\ln(x)\) | \({]0\,;\,+\infty[}\) |
> | \(\dfrac{1}{\sqrt{x}}\) | \(2\sqrt{x}\) | \({]0\,;\,+\infty[}\) |
> | \(e^x\) | \(e^x\) | \(\mathbb{R}\) |

> [!IMPORTANT] **Remarque**
>
> On obtient ce tableau en lisant « à l’envers » le tableau des dérivées : on vérifie chaque ligne en dérivant \(F\).

## Primitives et opérations

> [!TIP] **Théorème**
>
> Soient \(f\) et \(g\) deux fonctions admettant respectivement \(F\) et \(G\) comme primitives sur un intervalle \(I\), et \(\lambda\) un réel. Alors \({F + G}\) est une primitive de \({f + g}\) sur \(I\), et \(\lambda F\) est une primitive de \(\lambda f\) sur \(I\).

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = 6x^2 - \dfrac{3}{x}}\) sur \({]0\,;\,+\infty[}\). Une primitive est \(F(x) = 6 \times \dfrac{x^3}{3} - 3\ln(x) = 2x^3 - 3\ln(x)\).
{{% /details %}}

> [!TIP] **Propriété - formes composées**
>
> Soit \(u\) une fonction dérivable sur un intervalle \(I\).
>
> | Fonction \(f\) du type… | a pour primitive \(F\) du type… | Conditions |
> |---|---|---|
> | \(u'u^n\) (\({n \in \mathbb{Z}}\), \({n \neq -1}\)) | \({\dfrac{u^{n+1}}{n + 1}}\) | si \({n \leq -2}\), \({u(x) \neq 0}\) pour tout \({x \in I}\) |
> | \(2u'u\) | \(u^2\) | |
> | \(\dfrac{u'}{u^2}\) | \({-\dfrac{1}{u}}\) | \({u(x) \neq 0}\) pour tout \({x \in I}\) |
> | \(\dfrac{u'}{2\sqrt{u}}\) | \(\sqrt{u}\) | \({u(x) > 0}\) pour tout \({x \in I}\) |
> | \(\dfrac{u'}{u}\) | \(\ln(u)\) | \({u(x) > 0}\) pour tout \({x \in I}\) |
> | \(u'e^u\) | \(e^u\) | |

## Calculer des primitives

> [!NOTE] **Méthode 1 - Utiliser les primitives usuelles**
>
> 1. Déterminer une primitive sur \(\mathbb{R}\) de \({f(x) = 4x^3 - 6x + 7}\).
> 2. Déterminer une primitive sur \({]0\,;\,+\infty[}\) de \({g(x) = \dfrac{2}{x^3} + \dfrac{5}{x}}\).

{{% details title="Solution commentée" closed="true" %}}
1. \(F(x) = 4 \times \dfrac{x^4}{4} - 6 \times \dfrac{x^2}{2} + 7x = x^4 - 3x^2 + 7x\).
2. \({\dfrac{2}{x^3} = 2x^{-3}}\), de primitive \({2 \times \dfrac{x^{-2}}{-2} = -\dfrac{1}{x^2}}\) ; \(\dfrac{5}{x}\) a pour primitive \(5\ln(x)\). Donc \({G(x) = -\dfrac{1}{x^2} + 5\ln(x)}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Reconnaître une forme composée**
>
> Déterminer une primitive de chaque fonction sur l’intervalle indiqué.
> 1. \({f(x) = 2x(x^2 + 1)^3}\) sur \(\mathbb{R}\)
> 2. \({g(x) = \dfrac{3}{3x + 2}}\) sur \({\left]-\dfrac{2}{3}\,;\,+\infty\right[}\)
> 3. \({h(x) = e^{4x - 1}}\) sur \(\mathbb{R}\)
> 4. \({k(x) = \dfrac{x}{(x^2 + 5)^2}}\) sur \(\mathbb{R}\)

{{% details title="Solution commentée" closed="true" %}}
1. \({u(x) = x^2 + 1}\), \({u'(x) = 2x}\) : \({f = u'u^3}\), de primitive \({F(x) = \dfrac{(x^2 + 1)^4}{4}}\).
2. \({u(x) = 3x + 2 > 0}\) sur l’intervalle, \({u'(x) = 3}\) : \({g = \dfrac{u'}{u}}\), de primitive \({G(x) = \ln(3x + 2)}\).
3. \({u(x) = 4x - 1}\), \({u'(x) = 4}\) : \({h = \dfrac{1}{4}u'e^u}\), de primitive \({H(x) = \dfrac{1}{4}e^{4x - 1}}\).
4. \({u(x) = x^2 + 5 \neq 0}\), \({u'(x) = 2x}\) : \({k = \dfrac{1}{2} \times \dfrac{u'}{u^2}}\), de primitive \({K(x) = -\dfrac{1}{2(x^2 + 5)}}\).
{{% /details %}}
