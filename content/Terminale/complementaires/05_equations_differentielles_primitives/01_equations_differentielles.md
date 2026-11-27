---
title: 'Équations différentielles'
weight: 1
cascade:
  type: docs
---

## Généralités

> [!TIP] **Définition**
>
> Une **équation différentielle** est une équation dont l’inconnue est une **fonction**. Elle se présente comme une relation entre la fonction inconnue, une ou plusieurs de ses dérivées successives, et éventuellement d’autres fonctions.

> [!IMPORTANT] **Remarque**
>
> La fonction inconnue est en général notée \(y\) (on peut aussi la noter \(f\), \(g\)…). Dans l’équation \({y' + 2y = x^2}\), \(y\) désigne une fonction de la variable \(x\), \(y'\) sa dérivée, et le second membre est la fonction \({x \mapsto x^2}\).

> [!TIP] **Propriété**
>
> **Résoudre** une équation différentielle sur un intervalle \(I\), c’est trouver **toutes** les fonctions dérivables sur \(I\) qui vérifient l’équation pour tout \(x\) de \(I\).

> [!IMPORTANT] **Remarque**
>
> Lorsqu’on résout une équation différentielle, on cherche en général des fonctions définies sur le plus grand intervalle possible.

## Équation différentielle de la forme \({y' = f}\)

> [!TIP] **Définition**
>
> Soit \(f\) une fonction définie sur un intervalle \(I\). On appelle **primitive** de \(f\) sur \(I\) toute fonction \(F\) dérivable sur \(I\) solution de l’équation différentielle \({y' = f}\), c’est-à-dire telle que \({F'(x) = f(x)}\) pour tout \({x \in I}\).

{{% details title="Exemple" closed="true" %}}
La fonction \(F\) définie sur \(\mathbb{R}\) par \({F(x) = x^3 - 2x + 5}\) vérifie \({F'(x) = 3x^2 - 2}\) : c’est une primitive sur \(\mathbb{R}\) de \({f : x \mapsto 3x^2 - 2}\), donc une solution de \({y' = 3x^2 - 2}\).
{{% /details %}}

> [!TIP] **Théorème (admis)**
>
> Si \(f\) est une fonction continue sur un intervalle \(I\), alors \(f\) admet des primitives sur \(I\).

> [!TIP] **Propriétés**
>
> Soit \(f\) une fonction continue sur un intervalle \(I\) et \(F\) une primitive de \(f\) sur \(I\).
> - Pour tout réel \(k\), la fonction \({F + k}\) est aussi une primitive de \(f\) sur \(I\).
> - Si \(G\) est une primitive de \(f\) sur \(I\), alors il existe un réel \(k\) tel que \({G = F + k}\).

{{% details title="Démonstration" closed="true" %}}
- \({(F + k)' = F' + 0 = f}\).
- Si \({G' = f = F'}\), alors \({(G - F)' = 0}\) sur l’intervalle \(I\) : la fonction \({G - F}\) est constante, égale à un réel \(k\).
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction continue sur un intervalle \(I\). Quels que soient \({x_0 \in I}\) et \({y_0 \in \mathbb{R}}\), il existe une **unique** primitive \(F\) de \(f\) sur \(I\) telle que \({F(x_0) = y_0}\). Autrement dit, l’équation \({y' = f}\) admet une unique solution vérifiant la **condition initiale** \({y(x_0) = y_0}\).

## Vérifier des solutions, chercher des primitives

> [!NOTE] **Méthode 1 - Vérifier qu’une fonction est solution d’une équation différentielle**
>
> Dans chaque cas, vérifier que la fonction donnée est solution de l’équation sur l’intervalle indiqué.
> 1. \({f(x) = e^{3x} + 2}\) et \({(E_1) : y' = 3y - 6}\) sur \(\mathbb{R}\).
> 2. \({g(x) = x^2 + \dfrac{1}{x}}\) et \({(E_2) : xy' + y = 3x^2}\) sur \({]0\,;\,+\infty[}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({f'(x) = 3e^{3x}}\) et \({3f(x) - 6 = 3e^{3x} + 6 - 6 = 3e^{3x}}\). Donc \({f' = 3f - 6}\) : \(f\) est solution de \((E_1)\).
2. \({g'(x) = 2x - \dfrac{1}{x^2}}\), donc \(xg'(x) + g(x) = 2x^2 - \dfrac{1}{x} + x^2 + \dfrac{1}{x} = 3x^2\) : \(g\) est solution de \((E_2)\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Vérifier qu’une fonction est une primitive**
>
> Montrer que \({F(x) = (x - 1)e^x}\) est une primitive de \({f(x) = xe^x}\) sur \(\mathbb{R}\).

{{% details title="Solution commentée" closed="true" %}}
\(F\) est dérivable sur \(\mathbb{R}\) et \(F'(x) = 1 \times e^x + (x - 1)e^x = xe^x = f(x)\). Donc \(F\) est une primitive de \(f\) sur \(\mathbb{R}\).
{{% /details %}}

> [!NOTE] **Méthode 3 - Déterminer la primitive vérifiant une condition**
>
> On reprend \({f(x) = xe^x}\).
> 1. Déterminer toutes les primitives de \(f\) sur \(\mathbb{R}\).
> 2. Déterminer la primitive \(G\) de \(f\) telle que \({G(0) = 3}\).

{{% details title="Solution commentée" closed="true" %}}
1. Les primitives de \(f\) sont les fonctions \({x \mapsto (x - 1)e^x + k}\), \({k \in \mathbb{R}}\).
2. \({G(0) = (0 - 1)e^0 + k = -1 + k = 3}\), donc \({k = 4}\) et \({G(x) = (x - 1)e^x + 4}\).
{{% /details %}}
