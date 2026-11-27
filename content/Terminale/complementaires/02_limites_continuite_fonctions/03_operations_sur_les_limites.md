---
title: 'Opérations sur les limites'
weight: 3
cascade:
  type: docs
---

Dans cette page, \(f\) et \(g\) sont deux fonctions, \(\ell\) et \(\ell'\) deux réels. Les limites sont prises en \({+\infty}\), en \({-\infty}\) ou en un réel \(a\) (la même pour \(f\) et \(g\)). Les propriétés sont admises ; ce sont les mêmes que pour les suites.

## Somme

> [!TIP] **Propriété**
>
> | Si \({\lim f =}\) | \(\ell\) | \(\ell\) | \(\ell\) | \({+\infty}\) | \({-\infty}\) | \({+\infty}\) |
> |---|---|---|---|---|---|---|
> | et \({\lim g =}\) | \(\ell'\) | \({+\infty}\) | \({-\infty}\) | \({+\infty}\) | \({-\infty}\) | \({-\infty}\) |
> | alors \({\lim (f + g) =}\) | \({\ell + \ell'}\) | \({+\infty}\) | \({-\infty}\) | \({+\infty}\) | \({-\infty}\) | forme indéterminée |

> [!IMPORTANT] **Remarque**
>
> Face à une forme indéterminée, il faut transformer l’écriture de \({f(x) + g(x)}\) (factorisation, développement…) pour déterminer la limite éventuelle.

## Produit

> [!TIP] **Propriété**
>
> Le symbole \(\infty\) désigne \({+\infty}\) ou \({-\infty}\).
>
> | Si \({\lim f =}\) | \(\ell\) | \({\ell \neq 0}\) | \(\infty\) | \(0\) |
> |---|---|---|---|---|
> | et \({\lim g =}\) | \(\ell'\) | \(\infty\) | \(\infty\) | \(\infty\) |
> | alors \({\lim (fg) =}\) | \(\ell\ell'\) | \(\infty\) | \(\infty\) | forme indéterminée |

> [!IMPORTANT] **Remarque**
>
> Quand le tableau indique \(\infty\), on détermine le signe avec la règle des signes. Par exemple, si \({\lim\limits_{x \to +\infty} f(x) = -3}\) et \({\lim\limits_{x \to +\infty} g(x) = -\infty}\), alors \({\lim\limits_{x \to +\infty} f(x)g(x) = +\infty}\).

## Quotient

> [!TIP] **Propriété**
>
> | Si \({\lim f =}\) | \(\ell\) | \(\ell\) | \({\ell \neq 0}\) ou \(\infty\) | \(\infty\) | \(\infty\) | \(0\) |
> |---|---|---|---|---|---|---|
> | et \({\lim g =}\) | \({\ell' \neq 0}\) | \(\infty\) | \(0\) (avec \(g\) de signe constant) | \(\ell'\) | \(\infty\) | \(0\) |
> | alors \({\lim \dfrac{f}{g} =}\) | \(\dfrac{\ell}{\ell'}\) | \(0\) | \(\infty\) | \(\infty\) | forme indéterminée | forme indéterminée |

> [!IMPORTANT] **Remarque**
>
> Si \({\lim g = 0}\), il faut connaître le signe de \(g(x)\) au voisinage du point considéré pour appliquer la règle des signes. Par exemple, si \({\lim\limits_{x \to 1} f(x) = 4}\) et \({\lim\limits_{x \to 1} g(x) = 0}\) avec \({g(x) < 0}\) pour \(x\) proche de 1, alors \({\lim\limits_{x \to 1} \dfrac{f(x)}{g(x)} = -\infty}\).

## Calculer des limites de fonctions

> [!NOTE] **Méthode 1 - Déterminer une limite en l’infini**
>
> 1. Déterminer \({\lim\limits_{x \to -\infty} \left(x^3 + 2x - 5\right)}\).
> 2. Déterminer \({\lim\limits_{x \to +\infty} \left(4 - \dfrac{3}{x^2 + 1}\right)}\) et interpréter graphiquement.

{{% details title="Solution commentée" closed="true" %}}
1. \({\lim\limits_{x \to -\infty} x^3 = -\infty}\) et \({\lim\limits_{x \to -\infty} (2x - 5) = -\infty}\) : par somme, la limite vaut \({-\infty}\).
2. \({\lim\limits_{x \to +\infty} (x^2 + 1) = +\infty}\), donc \({\lim\limits_{x \to +\infty} \dfrac{3}{x^2 + 1} = 0}\), et la limite vaut 4. La droite d’équation \({y = 4}\) est asymptote horizontale à la courbe en \({+\infty}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Déterminer une limite en un réel**
>
> Soit \(f\) la fonction définie sur \({]-\infty\,;\,3[}\) par \({f(x) = \dfrac{2x + 1}{x - 3}}\). Déterminer la limite de \(f\) lorsque \(x\) tend vers 3 et interpréter graphiquement.

{{% details title="Solution commentée" closed="true" %}}
\({\lim\limits_{x \to 3} (2x + 1) = 7}\) et \({\lim\limits_{x \to 3} (x - 3) = 0}\). Comme \({x < 3}\), on a \({x - 3 < 0}\) : le dénominateur tend vers 0 par valeurs négatives. Par quotient (règle des signes), \({\lim\limits_{x \to 3^-} f(x) = -\infty}\). La droite d’équation \({x = 3}\) est asymptote verticale à la courbe.
{{% /details %}}

> [!NOTE] **Méthode 3 - Lever une indétermination**
>
> Déterminer \({\lim\limits_{x \to +\infty} \left(3x^2 - 5x + 2\right)}\) et \({\lim\limits_{x \to +\infty} \dfrac{2x^2 - x}{x^2 + 4}}\).

{{% details title="Solution commentée" closed="true" %}}
- Forme « \({\infty - \infty}\) ». On factorise par \(x^2\) (pour \({x \neq 0}\)) : \({3x^2 - 5x + 2 = x^2\left(3 - \dfrac{5}{x} + \dfrac{2}{x^2}\right)}\). La parenthèse tend vers 3 et \(x^2\) vers \({+\infty}\) : la limite vaut \({+\infty}\).
- Forme « \(\dfrac{\infty}{\infty}\) ». \({\dfrac{2x^2 - x}{x^2 + 4} = \dfrac{x^2\left(2 - \dfrac{1}{x}\right)}{x^2\left(1 + \dfrac{4}{x^2}\right)} = \dfrac{2 - \dfrac{1}{x}}{1 + \dfrac{4}{x^2}}}\), qui tend vers \({\dfrac{2}{1} = 2}\).
{{% /details %}}
