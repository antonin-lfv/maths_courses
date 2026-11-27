---
title: 'Équations et inéquations'
weight: 3
cascade:
  type: docs
---

## Équations et inéquations avec un carré

> [!TIP] **Propriété**
>
> Soit \(c\) un nombre réel. Dans \(\mathbb{R}\), l’équation \({x^2 = c}\) :
> - n’a **aucune solution** si \({c < 0}\) ;
> - a **une seule solution**, \(0\), si \({c = 0}\) ;
> - a **deux solutions**, \(\sqrt{c}\) et \({-\sqrt{c}}\), si \({c > 0}\).

{{% details title="Démonstration (cas c > 0)" closed="true" %}}
\(x^2 = c \iff x^2 - \left(\sqrt{c}\right)^2 = 0 \iff \left(x - \sqrt{c}\right)\left(x + \sqrt{c}\right) = 0 \iff x = \sqrt{c}\) ou \({x = -\sqrt{c}}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soit \(c\) un réel **strictement positif**.
> - L’ensemble des solutions de \({x^2 < c}\) est l’intervalle \({\left]-\sqrt{c}\,;\,\sqrt{c}\right[}\).
> - L’ensemble des solutions de \({x^2 > c}\) est \({\left]-\infty\,;\,-\sqrt{c}\right[ \cup \left]\sqrt{c}\,;\,+\infty\right[}\).
>
> Avec des inégalités larges, on remplace les crochets ouverts en \({\pm\sqrt{c}}\) par des crochets fermés.

Graphiquement, on lit les abscisses des points de la parabole situés sous (ou au-dessus de) la droite d’équation \({y = c}\) :

![](/images/image374.png)

{{% details title="Exemple" closed="true" %}}
- \({x^2 = 10 \iff x = \sqrt{10}}\) ou \({x = -\sqrt{10}}\) ; \({x^2 = -4}\) n’a pas de solution réelle.
- \({x^2 \leq 9 \iff x \in [-3\,;\,3]}\) ; \(x^2 > 2 \iff x \in \left]-\infty\,;\,-\sqrt{2}\right[ \cup \left]\sqrt{2}\,;\,+\infty\right[\).
- \({x^2 < -1}\) n’a aucune solution, et \({x^2 \geq -1}\) est vraie pour tout réel \(x\).
{{% /details %}}

## Équations et inéquations avec un cube

> [!TIP] **Propriété**
>
> Pour tout réel \(c\), l’équation \({x^3 = c}\) admet une **unique** solution réelle, appelée **racine cubique** de \(c\) et notée \(\sqrt[3]{c}\) (ou \(c^{\frac{1}{3}}\) à la calculatrice). De plus :
> \[
x^3 < c \iff x < \sqrt[3]{c} \qquad \text{et} \qquad x^3 > c \iff x > \sqrt[3]{c}.
\]

Cette propriété découle de la stricte croissance de la fonction cube : sa courbe coupe une fois et une seule chaque droite horizontale.

{{% details title="Exemple" closed="true" %}}
- \({x^3 = -27 \iff x = -3}\), car \({(-3)^3 = -27}\).
- \({x^3 = 5 \iff x = \sqrt[3]{5} \approx 1{,}710}\).
- \({x^3 \geq 64 \iff x \geq 4}\) : \({\mathcal{S} = [4\,;\,+\infty[}\).
{{% /details %}}

## Résoudre

> [!NOTE] **Méthode 1 - Se ramener à x² = c ou à une inéquation du même type**
>
> Résoudre dans \(\mathbb{R}\) : a) \({3x^2 - 12 = 0}\) ; b) \({(x - 1)^2 = 16}\) ; c) \({2x^2 + 1 < 9}\).

{{% details title="Solution commentée" closed="true" %}}
a) \({3x^2 - 12 = 0 \iff x^2 = 4 \iff x = 2}\) ou \({x = -2}\) : \({\mathcal{S} = \{-2\,;\,2\}}\).

b) On pose \({X = x - 1}\) : \({X^2 = 16 \iff X = 4}\) ou \({X = -4}\), donc \({x = 5}\) ou \({x = -3}\) : \({\mathcal{S} = \{-3\,;\,5\}}\).

c) \(2x^2 + 1 < 9 \iff 2x^2 < 8 \iff x^2 < 4 \iff -2 < x < 2\) : \({\mathcal{S} = ]-2\,;\,2[}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Résoudre une équation ou une inéquation avec un cube**
>
> Un cube a un volume de \(50\) cm³. Donner la longueur de son arête, arrondie au millimètre. Pour quelles arêtes \(a\) le volume dépasse-t-il \(1\) litre ?

{{% details title="Solution commentée" closed="true" %}}
Le volume d’un cube d’arête \(a\) est \(a^3\). \({a^3 = 50 \iff a = \sqrt[3]{50} \approx 3{,}684}\), soit environ \(3{,}7\) cm.

\(1\) L \({= 1\,000}\) cm³ et \({a^3 > 1\,000 \iff a > \sqrt[3]{1\,000} = 10}\) : l’arête doit dépasser \(10\) cm.
{{% /details %}}
