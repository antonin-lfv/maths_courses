---
title: "Équation différentielles d'ordre 1"
weight: 3
cascade:
  type: docs
---

## Équations différentielles de la forme \({y' = ay}\)

> [!TIP] **Théorème**
>
> Soit \(a\) un réel. Les fonctions solutions de l’équation différentielle \({y' = ay}\) sont les fonctions \({x \mapsto Ce^{ax}}\), où \(C\) est une constante réelle.
>
> Si, de plus, \(x_0\) et \(k\) sont deux réels, la fonction \(f\) définie sur \(\mathbb{R}\) par \({f(x) = ke^{a(x - x_0)}}\) est l’unique solution de \({y' = ay}\) vérifiant \({y(x_0) = k}\).

{{% details title="Démonstration" closed="true" %}}
- Soit \(C\) un réel et \({f(x) = Ce^{ax}}\). Alors \({f'(x) = Cae^{ax} = af(x)}\) : ces fonctions sont solutions.
- Réciproquement, soit \(g\) une solution de \({y' = ay}\). On pose \({h(x) = e^{-ax}g(x)}\) (\({e^{-ax}}\) ne s’annule pas). Alors
\[
h'(x) = -ae^{-ax}g(x) + e^{-ax}g'(x) = e^{-ax}\left(g'(x) - ag(x)\right) = 0.
\]
Donc \(h\) est constante sur \(\mathbb{R}\) : il existe \(C\) tel que \({e^{-ax}g(x) = C}\), soit \({g(x) = Ce^{ax}}\).
- Condition initiale : \({Ce^{ax_0} = k \iff C = ke^{-ax_0}}\), d’où l’unique solution \({f(x) = ke^{-ax_0}e^{ax} = ke^{a(x - x_0)}}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Les solutions de \({y' = -0{,}5y}\) sont les fonctions \({x \mapsto Ce^{-0{,}5x}}\). Celle qui vérifie \({y(0) = 4}\) est \({x \mapsto 4e^{-0{,}5x}}\).
{{% /details %}}

## Équations différentielles de la forme \({y' = ay + b}\)

> [!TIP] **Théorème (admis)**
>
> Soient \(a\) et \(b\) deux réels, avec \({a \neq 0}\). Les solutions de l’équation différentielle \({y' = ay + b}\) sont les fonctions
> \[
x \mapsto Ce^{ax} - \dfrac{b}{a}, \quad \text{où } C \text{ est une constante réelle.}
\]

> [!IMPORTANT] **Remarques**
>
> - La fonction constante \({x \mapsto -\dfrac{b}{a}}\) est une solution particulière de \({y' = ay + b}\) (sa dérivée est nulle et \({a \times \left(-\dfrac{b}{a}\right) + b = 0}\)).
> - Les fonctions \({x \mapsto Ce^{ax}}\) sont les solutions de l’équation \({y' = ay}\). Les solutions de \({y' = ay + b}\) s’obtiennent donc en ajoutant la solution particulière constante aux solutions de \({y' = ay}\).

{{% details title="Exemple" closed="true" %}}
On considère \({(E) : y' = 2y - 6}\). Ici \({a = 2}\) et \({b = -6}\), donc \({-\dfrac{b}{a} = 3}\). Les solutions de \((E)\) sont les fonctions \({x \mapsto Ce^{2x} + 3}\), \({C \in \mathbb{R}}\).
{{% /details %}}

> [!TIP] **Théorème (admis)**
>
> Soient \(x_0\) et \(y_0\) deux réels. Il existe une unique solution de l’équation \({y' = ay + b}\) vérifiant la condition initiale \({y(x_0) = y_0}\).

## Résoudre des équations différentielles

> [!NOTE] **Méthode 1 - Résoudre \({y' = ay}\)**
>
> Résoudre les équations différentielles : 1. \({y' = 5y}\) ; 2. \({3y' + y = 0}\).

{{% details title="Solution commentée" closed="true" %}}
1. C’est la forme \({y' = ay}\) avec \({a = 5}\) : les solutions sont les fonctions \({x \mapsto Ce^{5x}}\), \({C \in \mathbb{R}}\).
2. \({3y' + y = 0 \iff y' = -\dfrac{1}{3}y}\) : les solutions sont les fonctions \({x \mapsto Ce^{-\frac{x}{3}}}\), \({C \in \mathbb{R}}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Résoudre \({y' = ay + b}\)**
>
> Résoudre l’équation différentielle \({y' = -4y + 2}\).

{{% details title="Solution commentée" closed="true" %}}
On a \({a = -4}\) et \({b = 2}\), donc \({-\dfrac{b}{a} = \dfrac{2}{4} = \dfrac{1}{2}}\). Les solutions sont les fonctions \({x \mapsto Ce^{-4x} + \dfrac{1}{2}}\), \({C \in \mathbb{R}}\).
{{% /details %}}

> [!NOTE] **Méthode 3 - Résoudre avec une condition initiale**
>
> Déterminer la solution \(f\) de l’équation \({2y' - y = 4}\) vérifiant \({f(0) = 1}\).

{{% details title="Solution commentée" closed="true" %}}
\({2y' - y = 4 \iff y' = \dfrac{1}{2}y + 2}\). Avec \({a = \dfrac{1}{2}}\) et \({b = 2}\) : \({-\dfrac{b}{a} = -4}\). Les solutions sont les fonctions \({x \mapsto Ce^{\frac{x}{2}} - 4}\).

\({f(0) = C - 4 = 1}\), donc \({C = 5}\) : \({f(x) = 5e^{\frac{x}{2}} - 4}\).

Vérification : \({f'(x) = \dfrac{5}{2}e^{\frac{x}{2}}}\) et \({2f'(x) - f(x) = 5e^{\frac{x}{2}} - 5e^{\frac{x}{2}} + 4 = 4}\).
{{% /details %}}
