---
title: 'Formules de dérivées'
weight: 2
cascade:
  type: docs
---

## Dérivées des fonctions usuelles et opérations

> [!TIP] **Propriété (admise) - fonctions usuelles**
>
> | Fonction \(f\) | Fonction dérivée \(f'\) | Ensemble de dérivabilité |
> |---|---|---|
> | \(k\) (constante réelle) | \(0\) | \(\mathbb{R}\) |
> | \({mx + p}\) | \(m\) | \(\mathbb{R}\) |
> | \(x^n\) (\(n\) entier non nul) | \({nx^{n-1}}\) | \(\mathbb{R}\) si \({n > 0}\) ; \({]-\infty\,;\,0[}\) et \({]0\,;\,+\infty[}\) si \({n < 0}\) |
> | \(\dfrac{1}{x}\) | \({-\dfrac{1}{x^2}}\) | \({]-\infty\,;\,0[}\) et \({]0\,;\,+\infty[}\) |
> | \(\sqrt{x}\) | \(\dfrac{1}{2\sqrt{x}}\) | \({]0\,;\,+\infty[}\) |
> | \(\lvert x\rvert\) | \({-1}\) sur \({]-\infty\,;\,0[}\), \(1\) sur \({]0\,;\,+\infty[}\) | \({]-\infty\,;\,0[}\) et \({]0\,;\,+\infty[}\) |
> | \(e^x\) | \(e^x\) | \(\mathbb{R}\) |

> [!IMPORTANT] **Remarque**
>
> Les fonctions polynômes et les fonctions rationnelles (quotients de deux polynômes) sont dérivables sur leur ensemble de définition.

> [!TIP] **Propriété (admise) - opérations**
>
> \(u\) et \(v\) sont deux fonctions dérivables sur un intervalle \(I\) et \(k\) est une constante réelle.
>
> | Fonction | Fonction dérivée | Condition |
> |---|---|---|
> | \({u + v}\) | \({u' + v'}\) | |
> | \(ku\) | \(ku'\) | |
> | \(uv\) | \({u'v + uv'}\) | |
> | \(\dfrac{1}{u}\) | \({-\dfrac{u'}{u^2}}\) | \({u(x) \neq 0}\) pour tout \({x \in I}\) |
> | \(\dfrac{u}{v}\) | \({\dfrac{u'v - uv'}{v^2}}\) | \({v(x) \neq 0}\) pour tout \({x \in I}\) |

## De nouvelles formules

> [!TIP] **Propriétés (admises)**
>
> Soit \(u\) une fonction dérivable sur un intervalle \(I\).
> - La fonction \(f\) définie sur \(I\) par \({f(x) = e^{u(x)}}\) est dérivable sur \(I\) et \({f'(x) = u'(x)e^{u(x)}}\).
> - La fonction \(f\) définie sur \(I\) par \({f(x) = \left(u(x)\right)^2}\) est dérivable sur \(I\) et \({f'(x) = 2u'(x)u(x)}\).
> - Si, de plus, \({u(x) > 0}\) pour tout \({x \in I}\), la fonction \(f\) définie par \({f(x) = \sqrt{u(x)}}\) est dérivable sur \(I\) et \({f'(x) = \dfrac{u'(x)}{2\sqrt{u(x)}}}\).
> - Soient \(f\) une fonction dérivable sur un intervalle \(J\), et \(a\), \(b\) deux réels. Si \({ax + b \in J}\) pour tout \({x \in I}\), la fonction \(g\) définie par \({g(x) = f(ax + b)}\) est dérivable sur \(I\) et \({g'(x) = af'(ax + b)}\).

{{% details title="Exemples" closed="true" %}}
- \({f(x) = e^{-2x^2}}\) : \({u(x) = -2x^2}\), \({u'(x) = -4x}\), donc \({f'(x) = -4xe^{-2x^2}}\).
- \({g(x) = (3x - 1)^2}\) : \({g'(x) = 2 \times 3 \times (3x - 1) = 6(3x - 1)}\).
- \({h(x) = \sqrt{x^2 + 4}}\) sur \(\mathbb{R}\) (\({x^2 + 4 > 0}\)) : \({h'(x) = \dfrac{2x}{2\sqrt{x^2 + 4}} = \dfrac{x}{\sqrt{x^2 + 4}}}\).
{{% /details %}}

## Calculer des dérivées

> [!NOTE] **Méthode 1 - Déterminer des fonctions dérivées**
>
> Déterminer la fonction dérivée de chacune des fonctions suivantes sur l’intervalle indiqué.
> 1. \({f(x) = 4x^3 - 5x^2 + 2}\) sur \(\mathbb{R}\)
> 2. \({g(x) = \dfrac{x + 2}{2x - 1}}\) sur \({\left]\dfrac{1}{2}\,;\,+\infty\right[}\)
> 3. \({h(x) = (x^2 + 1)e^x}\) sur \(\mathbb{R}\)
> 4. \({k(x) = x\sqrt{x}}\) sur \({]0\,;\,+\infty[}\)

{{% details title="Solution commentée" closed="true" %}}
1. \({f'(x) = 12x^2 - 10x}\).
2. Quotient \(\dfrac{u}{v}\) avec \({u(x) = x + 2}\), \({u'(x) = 1}\), \({v(x) = 2x - 1}\), \({v'(x) = 2}\) :
\[
g'(x) = \dfrac{1 \times (2x - 1) - (x + 2) \times 2}{(2x - 1)^2} = \dfrac{-5}{(2x - 1)^2}.
\]
3. Produit avec \({u(x) = x^2 + 1}\), \({v(x) = e^x}\) : \(h'(x) = 2xe^x + (x^2 + 1)e^x = (x^2 + 2x + 1)e^x = (x + 1)^2e^x\).
4. Produit avec \({u(x) = x}\), \({v(x) = \sqrt{x}}\) : \(k'(x) = \sqrt{x} + x \times \dfrac{1}{2\sqrt{x}} = \sqrt{x} + \dfrac{\sqrt{x}}{2} = \dfrac{3}{2}\sqrt{x}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Utiliser les nouvelles formules**
>
> Déterminer la dérivée des fonctions suivantes, définies sur l’intervalle indiqué.
> 1. \({f(x) = e^{5 - x}}\) sur \(\mathbb{R}\)
> 2. \({g(x) = (x^3 - 2x)^2}\) sur \(\mathbb{R}\)
> 3. \({h(x) = \sqrt{6 - 2x}}\) sur \({]-\infty\,;\,3[}\)

{{% details title="Solution commentée" closed="true" %}}
1. \({u(x) = 5 - x}\), \({u'(x) = -1}\) : \({f'(x) = -e^{5 - x}}\).
2. \({u(x) = x^3 - 2x}\), \({u'(x) = 3x^2 - 2}\) : \({g'(x) = 2(3x^2 - 2)(x^3 - 2x)}\).
3. \({u(x) = 6 - 2x > 0}\) sur \({]-\infty\,;\,3[}\), \({u'(x) = -2}\) : \({h'(x) = \dfrac{-2}{2\sqrt{6 - 2x}} = -\dfrac{1}{\sqrt{6 - 2x}}}\).
{{% /details %}}
