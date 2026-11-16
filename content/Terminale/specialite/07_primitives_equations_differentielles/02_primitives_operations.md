---
title: 'Primitives et opérations'
weight: 2
cascade:
  type: docs
---

## Primitives des fonctions usuelles

> [!TIP] **Propriété**
>
> Dans le tableau ci-dessous, \(C\) désigne une constante réelle quelconque.
>
> | La fonction \(f\) définie par… | admet pour primitives… | sur l’intervalle… |
> |---|---|---|
> | \(f(x) = k\) (\(k\) réel) | \(F(x) = kx + C\) | \(\mathbb{R}\) |
> | \(f(x) = x^n\), \(n\) entier, \(n \geq 0\) | \(F(x) = \dfrac{x^{n+1}}{n+1} + C\) | \(\mathbb{R}\) |
> | \(f(x) = x^n\), \(n\) entier, \(n \leq -2\) | \(F(x) = \dfrac{x^{n+1}}{n+1} + C\) | \(]-\infty\,;\,0[\) ou \(]0\,;\,+\infty[\) |
> | \(f(x) = \dfrac{1}{x}\) | \(F(x) = \ln(x) + C\) | \(]0\,;\,+\infty[\) |
> | \(f(x) = \dfrac{1}{\sqrt{x}}\) | \(F(x) = 2\sqrt{x} + C\) | \(]0\,;\,+\infty[\) |
> | \(f(x) = e^x\) | \(F(x) = e^x + C\) | \(\mathbb{R}\) |
> | \(f(x) = \sin(x)\) | \(F(x) = -\cos(x) + C\) | \(\mathbb{R}\) |
> | \(f(x) = \cos(x)\) | \(F(x) = \sin(x) + C\) | \(\mathbb{R}\) |

> [!IMPORTANT] **Remarques**
>
> - On lit ce tableau « à l’envers » d’un tableau de dérivées : on vérifie toujours un résultat en dérivant \(F\).
> - Le cas \(n = -1\) est exclu de la formule \(\frac{x^{n+1}}{n+1}\) (division par 0) : la primitive de \(\frac{1}{x}\) fait intervenir le logarithme.

## Opérations sur les primitives

> [!TIP] **Propriétés**
>
> Soient \(f\) et \(g\) deux fonctions continues sur \(I\), de primitives respectives \(F\) et \(G\) sur \(I\), et \(k\) un réel.
> - \(F + G\) est une primitive de \(f + g\) sur \(I\) ;
> - \(kF\) est une primitive de \(kf\) sur \(I\).

> [!TIP] **Propriétés**
>
> Soit \(u\) une fonction dérivable sur \(I\).
> - Pour tout entier \(n \neq -1\), la fonction \(u'u^n\) admet pour primitives sur \(I\) les fonctions \(\dfrac{u^{n+1}}{n+1} + C\) (si \(n < 0\), on suppose que \(u\) ne s’annule pas sur \(I\)) ;
> - \(u'e^u\) admet pour primitives sur \(I\) les fonctions \(e^u + C\) ;
> - si \(u\) ne s’annule pas sur \(I\), \(\dfrac{u'}{u}\) admet pour primitives sur \(I\) les fonctions \(\ln(|u|) + C\) (donc \(\ln(u) + C\) si \(u > 0\) sur \(I\)) ;
> - si \(u > 0\) sur \(I\), \(\dfrac{u'}{\sqrt{u}}\) admet pour primitives sur \(I\) les fonctions \(2\sqrt{u} + C\).

> [!TIP] **Propriété**
>
> Soit \(u\) une fonction dérivable sur \(I\) et \(v\) une fonction dérivable sur un intervalle \(J\) telles que \(u(x) \in J\) pour tout \(x \in I\). La fonction \((v' \circ u) \times u'\) admet pour primitive sur \(I\) la fonction \(v \circ u\).

> [!IMPORTANT] **Remarque**
>
> C’est la formule de dérivation d’une fonction composée, \((v \circ u)' = (v' \circ u) \times u'\), lue à l’envers. Par exemple, \(u'\cos(u)\) a pour primitive \(\sin(u)\), et \(x \mapsto \cos(ax + b)\) (\(a \neq 0\)) a pour primitive \(x \mapsto \frac{1}{a}\sin(ax + b)\).

{{% details title="Exemple" closed="true" %}}
On cherche une primitive sur \(\mathbb{R}\) de \(f(x) = 2x\cos(x^2)\).  
Avec \(u(x) = x^2\), on a \(u'(x) = 2x\) et \(f = u' \times \cos(u)\) : une primitive est \(F(x) = \sin(x^2)\). Vérification : \(F'(x) = 2x\cos(x^2)\).
{{% /details %}}

## Calculer les primitives d’une fonction

> [!NOTE] **Méthode 2 — Calculer des primitives**
>
> Déterminer les primitives des fonctions suivantes sur l’intervalle indiqué.
> 1. \(f(x) = 4x^3 - 6x^2 + 5\) sur \(\mathbb{R}\)
> 2. \(g(x) = \dfrac{3}{x^2}\) sur \(]0\,;\,+\infty[\)
> 3. \(h(x) = 2\cos(x) + \sin(x)\) sur \(\mathbb{R}\)
> 4. \(k(x) = x(x^2 + 1)^3\) sur \(\mathbb{R}\)
> 5. \(m(x) = e^{2x - 1}\) sur \(\mathbb{R}\)
> 6. \(p(x) = \dfrac{2x}{x^2 + 3}\) sur \(\mathbb{R}\)
> 7. \(q(x) = \dfrac{1}{\sqrt{4x + 1}}\) sur \(\left]-\dfrac{1}{4}\,;\,+\infty\right[\)

{{% details title="Solution commentée" closed="true" %}}
On note \(C\) une constante réelle quelconque.

1. Terme à terme : \(F(x) = 4 \times \dfrac{x^4}{4} - 6 \times \dfrac{x^3}{3} + 5x + C = x^4 - 2x^3 + 5x + C\).
2. \(g(x) = 3x^{-2}\) : \(G(x) = 3 \times \dfrac{x^{-1}}{-1} + C = -\dfrac{3}{x} + C\).
3. \(H(x) = 2\sin(x) - \cos(x) + C\).
4. Avec \(u(x) = x^2 + 1\), \(u'(x) = 2x\) : \(k = \dfrac{1}{2}u'u^3\), donc \(K(x) = \dfrac{1}{2} \times \dfrac{(x^2 + 1)^4}{4} + C = \dfrac{(x^2 + 1)^4}{8} + C\).
5. Avec \(u(x) = 2x - 1\), \(u'(x) = 2\) : \(m = \dfrac{1}{2}u'e^u\), donc \(M(x) = \dfrac{1}{2}e^{2x - 1} + C\).
6. Avec \(u(x) = x^2 + 3 > 0\), \(u'(x) = 2x\) : \(p = \dfrac{u'}{u}\), donc \(P(x) = \ln(x^2 + 3) + C\).
7. Avec \(u(x) = 4x + 1 > 0\) sur l’intervalle, \(u'(x) = 4\) : \(q = \dfrac{1}{4} \times \dfrac{u'}{\sqrt{u}}\), donc \(Q(x) = \dfrac{1}{4} \times 2\sqrt{4x + 1} + C = \dfrac{1}{2}\sqrt{4x + 1} + C\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Déterminer une primitive vérifiant une condition**
>
> Déterminer la primitive \(F\) sur \(\left]-\dfrac{1}{2}\,;\,+\infty\right[\) de \(f(x) = \dfrac{1}{2x + 1}\) telle que \(F(0) = 3\).

{{% details title="Solution commentée" closed="true" %}}
Avec \(u(x) = 2x + 1 > 0\) sur l’intervalle et \(u'(x) = 2\) : \(f = \dfrac{1}{2} \times \dfrac{u'}{u}\).  
Les primitives de \(f\) sont \(F(x) = \dfrac{1}{2}\ln(2x + 1) + C\), \(C \in \mathbb{R}\).  
\(F(0) = \dfrac{1}{2}\ln(1) + C = C\), donc \(C = 3\) : \(F(x) = \dfrac{1}{2}\ln(2x + 1) + 3\).
{{% /details %}}
