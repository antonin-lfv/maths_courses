---
title: 'Parité d’une fonction'
weight: 1
cascade:
  type: docs
---

## Fonctions paires, fonctions impaires

> [!TIP] **Définition**
>
> Un ensemble \(D\) de nombres réels est **symétrique par rapport à 0** si, pour tout réel \(x\) de \(D\), le réel \({-x}\) appartient aussi à \(D\).

{{% details title="Exemple" closed="true" %}}
\(\mathbb{R}\), \(\mathbb{R}^*\), \({[-5\,;\,5]}\) et \({]-\infty\,;\,-1[ \cup ]1\,;\,+\infty[}\) sont symétriques par rapport à \(0\). En revanche, \({[-2\,;\,3]}\) ne l’est pas (\(3\) y est, mais pas \({-3}\)), ni \({[0\,;\,+\infty[}\).
{{% /details %}}

> [!TIP] **Définitions**
>
> Soit \(f\) une fonction définie sur un ensemble \(D\) **symétrique par rapport à 0**.
> - \(f\) est **paire** si, pour tout \({x \in D}\), \({f(-x) = f(x)}\).
> - \(f\) est **impaire** si, pour tout \({x \in D}\), \({f(-x) = -f(x)}\).

{{% details title="Exemple" closed="true" %}}
- La fonction carré est paire : \({(-x)^2 = x^2}\). La fonction valeur absolue aussi : \({|-x| = |x|}\).
- Les fonctions cube et inverse sont impaires : \({(-x)^3 = -x^3}\) et \({\dfrac{1}{-x} = -\dfrac{1}{x}}\).
- \({h(x) = x^2 + x}\) n’est ni paire ni impaire : \({h(1) = 2}\) et \({h(-1) = 0}\), donc \({h(-1) \neq h(1)}\) et \({h(-1) \neq -h(1)}\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Si l’ensemble de définition n’est pas symétrique par rapport à \(0\), la fonction n’est ni paire ni impaire (par exemple la fonction racine carrée).
> - Pour prouver qu’une fonction n’est **pas** paire (ou pas impaire), un seul contre-exemple suffit. Pour prouver qu’elle l’est, il faut un calcul valable pour **tout** \(x\) de \(D\).
> - Si \(f\) est impaire et définie en \(0\), alors \({f(0) = -f(0)}\), donc \({f(0) = 0}\).

## Interprétation graphique

> [!TIP] **Propriété**
>
> Dans un repère **orthogonal** :
> - \(f\) est paire si et seulement si sa courbe est **symétrique par rapport à l’axe des ordonnées** ;
> - \(f\) est impaire si et seulement si sa courbe est **symétrique par rapport à l’origine** du repère.

{{% details title="Justification" closed="true" %}}
Le symétrique du point \(M(x\,;\,y)\) par rapport à l’axe des ordonnées est \({M'(-x\,;\,y)}\), et son symétrique par rapport à l’origine est \({M''(-x\,;\,-y)}\). Dire que \(f\) est paire signifie que, dès que \(M(x\,;\,f(x))\) est sur la courbe, \({M'(-x\,;\,f(x))}\) y est aussi ; dire qu’elle est impaire signifie que \({M''(-x\,;\,-f(x))}\) y est aussi.
{{% /details %}}

Ci-dessous, à gauche la courbe d’une fonction paire, à droite celle d’une fonction impaire :

![](/images/image381.png)

> [!IMPORTANT] **Remarque**
>
> Pour étudier une fonction paire ou impaire, il suffit de l’étudier sur \({D \cap [0\,;\,+\infty[}\), puis de compléter par symétrie.

## Étudier la parité

> [!NOTE] **Méthode - Étudier la parité d’une fonction**
>
> Étudier la parité des fonctions suivantes :
> \[
\begin{gathered}
f(x) = 3x^4 - x^2 + 5 \ \text{sur } \mathbb{R}, \qquad g(x) = \dfrac{x}{x^2 + 1} \ \text{sur } \mathbb{R}, \\[0.3em]
k(x) = x^2 - 2x \ \text{sur } \mathbb{R}, \qquad m(x) = x^3 \ \text{sur } [-1\,;\,2].
\end{gathered}
\]

{{% details title="Solution commentée" closed="true" %}}
On vérifie d’abord que l’ensemble de définition est symétrique par rapport à \(0\), puis on calcule l’image de \({-x}\).
- \(\mathbb{R}\) est symétrique par rapport à \(0\) et, pour tout réel \(x\), \(f(-x) = 3(-x)^4 - (-x)^2 + 5 = 3x^4 - x^2 + 5 = f(x)\) : \(f\) est **paire**.
- Pour tout réel \(x\), \(g(-x) = \dfrac{-x}{(-x)^2 + 1} = -\dfrac{x}{x^2 + 1} = -g(x)\) : \(g\) est **impaire**.
- \({k(1) = -1}\) et \({k(-1) = 3}\) : \({k(-1) \neq k(1)}\) et \({k(-1) \neq -k(1)}\). \(k\) n’est **ni paire ni impaire**.
- \({[-1\,;\,2]}\) n’est pas symétrique par rapport à \(0\) (\(2\) y est mais pas \({-2}\)) : \(m\) n’est **ni paire ni impaire** sur cet intervalle, bien que la fonction cube soit impaire sur \(\mathbb{R}\).
{{% /details %}}
