---
title: 'Calcul littéral'
weight: 1
cascade:
  type: docs
---

Les règles de calcul sur les nombres s’appliquent aux **expressions littérales**, dans lesquelles des lettres désignent des nombres réels. Dans cette page, on rappelle les règles sur les fractions, puis on étudie les identités remarquables, outils de base pour développer et factoriser.

## Calculer avec des fractions

> [!TIP] **Propriétés**
>
> Pour tous réels \(a\), \(b\), \(c\), \(d\), avec \({b \neq 0}\) et \({d \neq 0}\) :
> \[
\begin{gathered}
\dfrac{a}{b} = \dfrac{c}{d} \iff a \times d = b \times c, \qquad \dfrac{a}{b} \times \dfrac{c}{d} = \dfrac{a \times c}{b \times d}, \\[0.3em]
\dfrac{a \times c}{b \times c} = \dfrac{a}{b} \ (c \neq 0).
\end{gathered}
\]

> [!TIP] **Propriétés**
>
> Pour tous réels \(a\), \(b\), \(c\), avec \({c \neq 0}\) :
> \[
\dfrac{a}{c} + \dfrac{b}{c} = \dfrac{a + b}{c} \qquad \text{et} \qquad \dfrac{a}{c} - \dfrac{b}{c} = \dfrac{a - b}{c}.
\]
> Pour ajouter deux fractions, on les écrit d’abord avec un même dénominateur.

> [!TIP] **Propriété**
>
> Pour tous réels \(a\), \(b\), \(c\), \(d\), avec \({b \neq 0}\), \({c \neq 0}\) et \({d \neq 0}\) :
> \[
\dfrac{\dfrac{a}{b}}{\dfrac{c}{d}} = \dfrac{a}{b} \times \dfrac{d}{c}.
\]
> Diviser par un nombre non nul revient à multiplier par son inverse. En particulier \({\dfrac{a}{\dfrac{c}{d}} = \dfrac{ad}{c}}\) et \({\dfrac{\dfrac{a}{b}}{c} = \dfrac{a}{bc}}\).

{{% details title="Exemple" closed="true" %}}
- \({\dfrac{5}{6} - \dfrac{3}{4} = \dfrac{10}{12} - \dfrac{9}{12} = \dfrac{1}{12}}\).
- \({\dfrac{\dfrac{4}{9}}{\dfrac{2}{3}} = \dfrac{4}{9} \times \dfrac{3}{2} = \dfrac{12}{18} = \dfrac{2}{3}}\).
- Pour tout réel \({x \neq 0}\) : \({\dfrac{1}{x} + \dfrac{3}{2} = \dfrac{2}{2x} + \dfrac{3x}{2x} = \dfrac{3x + 2}{2x}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On ne simplifie une fraction que par un **facteur** commun au numérateur et au dénominateur, jamais par un terme d’une somme : \({\dfrac{x + 6}{x}}\) ne se simplifie pas, alors que \({\dfrac{3x}{5x} = \dfrac{3}{5}}\) pour \({x \neq 0}\).

## Développer et factoriser

> [!TIP] **Définitions**
>
> - **Développer** une expression, c’est transformer un produit en somme.
> - **Factoriser** une expression, c’est transformer une somme en produit.
>
> On utilise la **distributivité** : pour tous réels \(k\), \(a\), \(b\), \(c\), \(d\),
> \[
k(a + b) = ka + kb \qquad \text{et} \qquad (a + b)(c + d) = ac + ad + bc + bd.
\]

> [!TIP] **Propriété - Identités remarquables**
>
> Pour tous réels \(a\) et \(b\) :
> \[
\begin{gathered}
(a + b)^2 = a^2 + 2ab + b^2, \qquad (a - b)^2 = a^2 - 2ab + b^2, \\[0.3em]
(a + b)(a - b) = a^2 - b^2.
\end{gathered}
\]
> Lues de gauche à droite, ces égalités servent à **développer** ; lues de droite à gauche, à **factoriser**.

{{% details title="Démonstration" closed="true" %}}
Par double distributivité :
- \((a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2\) ;
- \((a - b)^2 = (a - b)(a - b) = a^2 - ab - ba + b^2 = a^2 - 2ab + b^2\) ;
- \((a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2\).
{{% /details %}}

Pour \({a > 0}\) et \({b > 0}\), la première identité s’interprète avec des aires : un carré de côté \({a + b}\) se découpe en un carré d’aire \(a^2\), un carré d’aire \(b^2\) et deux rectangles d’aire \(ab\).

![](/images/image363.png)

> [!IMPORTANT] **Remarque**
>
> Il ne faut pas oublier le **double produit** : \({(a + b)^2 \neq a^2 + b^2}\) dès que \({ab \neq 0}\). Par exemple \({(3 + 4)^2 = 49}\) alors que \({3^2 + 4^2 = 25}\).

{{% details title="Exemple" closed="true" %}}
- \((2x + 5)^2 = (2x)^2 + 2 \times 2x \times 5 + 5^2 = 4x^2 + 20x + 25\).
- \({(\sqrt{7} - 1)^2 = 7 - 2\sqrt{7} + 1 = 8 - 2\sqrt{7}}\).
- \({x^2 - 36 = x^2 - 6^2 = (x + 6)(x - 6)}\).
- \(9t^2 - 12t + 4 = (3t)^2 - 2 \times 3t \times 2 + 2^2 = (3t - 2)^2\).
{{% /details %}}

## Transformer une expression

> [!NOTE] **Méthode 1 - Calculer avec des fractions**
>
> Pour tout réel \(x\) différent de \(0\) et de \({-1}\), écrire sous la forme d’un seul quotient :
> \[
A = \dfrac{2}{x} - \dfrac{1}{x + 1} \qquad \text{et} \qquad B = \dfrac{\dfrac{x}{3}}{\dfrac{x + 1}{6}}.
\]

{{% details title="Solution commentée" closed="true" %}}
- On réduit au même dénominateur \({x(x + 1)}\), qui est non nul :
\[
A = \dfrac{2(x + 1)}{x(x + 1)} - \dfrac{x}{x(x + 1)} = \dfrac{2x + 2 - x}{x(x + 1)} = \dfrac{x + 2}{x(x + 1)}.
\]
- On multiplie par l’inverse du dénominateur, puis on simplifie par le facteur \(3\) :
\[
B = \dfrac{x}{3} \times \dfrac{6}{x + 1} = \dfrac{6x}{3(x + 1)} = \dfrac{2x}{x + 1}.
\]
{{% /details %}}

> [!NOTE] **Méthode 2 - Développer avec les identités remarquables**
>
> Développer et réduire \({C = (3x - 2)^2 - (x + 4)(x - 4)}\).

{{% details title="Solution commentée" closed="true" %}}
On reconnaît \({(a - b)^2}\) avec \({a = 3x}\), \({b = 2}\), et \({(a + b)(a - b)}\) avec \({a = x}\), \({b = 4}\) :
\[
\begin{aligned}
C &= \left(9x^2 - 12x + 4\right) - \left(x^2 - 16\right) = 9x^2 - 12x + 4 - x^2 + 16 \\[0.3em]
&= 8x^2 - 12x + 20.
\end{aligned}
\]
Attention au signe « \({-}\) » devant la parenthèse : il change le signe de chaque terme qu’elle contient.
{{% /details %}}

> [!NOTE] **Méthode 3 - Factoriser une expression**
>
> Factoriser :
> \[
D = (x + 3)(2x - 1) - (x + 3)(x + 5) \qquad \text{et} \qquad E = (2x + 1)^2 - 25.
\]

{{% details title="Solution commentée" closed="true" %}}
- \({(x + 3)}\) est un **facteur commun** aux deux termes :
\[
D = (x + 3)\big[(2x - 1) - (x + 5)\big] = (x + 3)(2x - 1 - x - 5) = (x + 3)(x - 6).
\]
- On reconnaît une différence de deux carrés \({a^2 - b^2}\) avec \({a = 2x + 1}\) et \({b = 5}\) :
\[
E = \big[(2x + 1) + 5\big]\big[(2x + 1) - 5\big] = (2x + 6)(2x - 4) = 2(x + 3) \times 2(x - 2) = 4(x + 3)(x - 2).
\]
On peut vérifier en développant : \({4(x^2 + x - 6) = 4x^2 + 4x - 24}\), et \((2x + 1)^2 - 25 = 4x^2 + 4x + 1 - 25 = 4x^2 + 4x - 24\).
{{% /details %}}
