---
title: 'Notion de limite en infini'
weight: 1
cascade:
  type: docs
---

## Limite finie en \(+\infty\) ou en \(-\infty\)

> [!TIP] **Définitions (intuitives)**
>
> - On dit que la fonction \(f\) **admet pour limite le réel \(\ell\) lorsque \(x\) tend vers \(+\infty\)** si \(f(x)\) prend des valeurs aussi proches de \(\ell\) que l’on veut dès que \(x\) est assez grand. On note \(\displaystyle\lim_{x \to +\infty} f(x) = \ell\).
> - On dit que \(f\) admet pour limite \(\ell\) lorsque \(x\) tend vers \(-\infty\) si \(f(x)\) prend des valeurs aussi proches de \(\ell\) que l’on veut dès que \(x\) est négatif et assez grand en valeur absolue. On note \(\displaystyle\lim_{x \to -\infty} f(x) = \ell\).

> [!TIP] **Propriétés (admises)**
>
> \[
\lim_{x \to +\infty} \frac{1}{x} = 0, \qquad \lim_{x \to -\infty} \frac{1}{x} = 0, \qquad \lim_{x \to -\infty} e^x = 0.
\]

## Asymptote horizontale

> [!TIP] **Définition**
>
> La droite d’équation \(y = \ell\) est une **asymptote horizontale** à la courbe représentative de \(f\) en \(+\infty\) (respectivement en \(-\infty\)) si \(\displaystyle\lim_{x \to +\infty} f(x) = \ell\) (respectivement \(\displaystyle\lim_{x \to -\infty} f(x) = \ell\)).

{{% details title="Exemple" closed="true" %}}
Pour \(f(x) = 2 + \dfrac{3}{x^2 + 1}\), les valeurs de \(f(x)\) se rapprochent de 2 quand \(x\) devient grand, en valeur absolue : la droite d’équation \(y = 2\) est asymptote horizontale à la courbe en \(+\infty\) et en \(-\infty\).

![](/images/image339.png)
{{% /details %}}

## Limite infinie en \(+\infty\) ou en \(-\infty\)

> [!TIP] **Définitions (intuitives)**
>
> - On dit que \(f\) admet pour limite \(+\infty\) lorsque \(x\) tend vers \(+\infty\) si \(f(x)\) prend des valeurs aussi grandes que l’on veut dès que \(x\) est assez grand. On note \(\displaystyle\lim_{x \to +\infty} f(x) = +\infty\).
> - On dit que \(f\) admet pour limite \(-\infty\) lorsque \(x\) tend vers \(+\infty\) si \(f(x)\) prend des valeurs négatives aussi grandes que l’on veut en valeur absolue dès que \(x\) est assez grand.
>
> On définit de même les limites infinies en \(-\infty\).

> [!TIP] **Propriétés (admises)**
>
> \[
\lim_{x \to +\infty} x^2 = +\infty, \quad \lim_{x \to -\infty} x^2 = +\infty, \quad \lim_{x \to +\infty} x^3 = +\infty, \quad \lim_{x \to -\infty} x^3 = -\infty, \quad \lim_{x \to +\infty} e^x = +\infty, \quad \lim_{x \to +\infty} \sqrt{x} = +\infty.
\]

> [!IMPORTANT] **Remarque**
>
> Plus généralement, pour tout entier \(n \geq 1\), \(\lim\limits_{x \to +\infty} x^n = +\infty\) ; en \(-\infty\), \(x^n\) tend vers \(+\infty\) si \(n\) est pair et vers \(-\infty\) si \(n\) est impair.

## Conjecturer des limites en l’infini

> [!NOTE] **Méthode 1 — Conjecturer graphiquement des limites et une asymptote**
>
> On donne la courbe de la fonction \(f\) de l’exemple ci-dessus. Conjecturer les limites de \(f\) en \(-\infty\) et en \(+\infty\) et l’existence d’une asymptote.

{{% details title="Solution commentée" closed="true" %}}
Lorsque \(x\) devient grand en valeur absolue (vers la gauche ou vers la droite), la courbe se rapproche de la droite horizontale d’équation \(y = 2\) en restant au-dessus. On conjecture \(\lim\limits_{x \to -\infty} f(x) = \lim\limits_{x \to +\infty} f(x) = 2\), et la droite \(y = 2\) est asymptote horizontale en \(-\infty\) et en \(+\infty\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Conjecturer avec la calculatrice**
>
> À l’aide d’un tableau de valeurs, conjecturer les limites en \(+\infty\) et en \(-\infty\) des fonctions \(g(x) = \dfrac{6x + 1}{2x - 5}\) et \(h(x) = x^2 - 10x\).

{{% details title="Solution commentée" closed="true" %}}
| \(x\) | \(-10^4\) | \(-10^2\) | \(10^2\) | \(10^4\) |
|---|---|---|---|---|
| \(g(x)\) | ≈ 2,9992 | ≈ 2,9220 | ≈ 3,0821 | ≈ 3,0008 |
| \(h(x)\) | \(100\,100\,000\) | \(11\,000\) | \(9\,000\) | \(99\,900\,000\) |

On conjecture que \(\lim\limits_{x \to \pm\infty} g(x) = 3\) (asymptote horizontale \(y = 3\)) et que \(\lim\limits_{x \to \pm\infty} h(x) = +\infty\).
{{% /details %}}
