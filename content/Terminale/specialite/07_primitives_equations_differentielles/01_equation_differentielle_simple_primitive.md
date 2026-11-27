---
title: 'Équation différentielle simple et primitive'
weight: 1
cascade:
  type: docs
---

Dans tout le chapitre, \(I\) désigne un intervalle de \(\mathbb{R}\).

## Équations différentielles

> [!TIP] **Définition**
>
> Une **équation différentielle** est une équation dont l’inconnue est une **fonction**. Elle relie cette fonction (souvent notée \(y\)), une ou plusieurs de ses dérivées et, éventuellement, la variable.
>
> **Résoudre** une équation différentielle sur \(I\), c’est déterminer **toutes** les fonctions dérivables sur \(I\) qui la vérifient : ces fonctions sont appelées les **solutions** de l’équation.

{{% details title="Exemples" closed="true" %}}
- \({y' = 3y - 1}\) est une équation différentielle du premier ordre (seule la dérivée première intervient). Une fonction \(f\) en est solution sur \(\mathbb{R}\) si, pour tout réel \(x\), \({f'(x) = 3f(x) - 1}\).
- \({y' = \cos(x)}\) : on cherche les fonctions dont la dérivée est la fonction cosinus ; par exemple, \({x \mapsto \sin(x)}\) est une solution.
- \({y'' = -4y}\) est une équation différentielle du second ordre ; \({x \mapsto \cos(2x)}\) en est une solution, car sa dérivée seconde vaut \({-4\cos(2x)}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’équation différentielle la plus simple est \({y' = f}\), où \(f\) est une fonction donnée : ses solutions sont les fonctions dont la dérivée est \(f\). Ce sont les **primitives** de \(f\).

## Primitives d’une fonction

> [!TIP] **Définition**
>
> Soit \(f\) une fonction continue sur \(I\). On appelle **primitive** de \(f\) sur \(I\) toute fonction \(F\) dérivable sur \(I\) telle que \({F' = f}\), c’est-à-dire \({F'(x) = f(x)}\) pour tout \({x \in I}\).

{{% details title="Exemples" closed="true" %}}
- \({F : x \mapsto x^3 - 2x + 5}\) est une primitive sur \(\mathbb{R}\) de \({f : x \mapsto 3x^2 - 2}\), car \({F'(x) = 3x^2 - 2}\).
- \({G : x \mapsto x\ln(x) - x}\) est une primitive de \(\ln\) sur \({]0\,;\,+\infty[}\), car \({G'(x) = \ln(x) + x \times \dfrac{1}{x} - 1 = \ln(x)}\).
{{% /details %}}

> [!TIP] **Théorème (admis)**
>
> Toute fonction continue sur un intervalle \(I\) admet des primitives sur \(I\).

> [!TIP] **Propriété (admise)**
>
> Si \(F\) est une fonction dérivable sur l’**intervalle** \(I\) telle que \({F'(x) = 0}\) pour tout \({x \in I}\), alors \(F\) est constante sur \(I\).

> [!TIP] **Théorème**
>
> Soit \(f\) une fonction continue sur \(I\) et \(F\) une primitive de \(f\) sur \(I\).
> - Les primitives de \(f\) sur \(I\) sont exactement les fonctions \({x \mapsto F(x) + k}\), où \(k\) est un réel.
> - Pour tout \({x_0 \in I}\) et tout réel \(y_0\), il existe une **unique** primitive \(F_0\) de \(f\) sur \(I\) telle que \({F_0(x_0) = y_0}\).

> [!IMPORTANT] **Remarque**
>
> Justification : si \(G\) est une autre primitive de \(f\) sur \(I\), alors \({(G - F)' = f - f = 0}\), donc \({G - F}\) est constante sur \(I\). La condition \({F_0(x_0) = y_0}\) fixe ensuite la valeur de la constante.
> Graphiquement, les courbes des primitives se déduisent les unes des autres par des translations verticales, et une seule passe par le point \((x_0\,;\,y_0)\).

{{% details title="Exemple" closed="true" %}}
Les primitives sur \(\mathbb{R}\) de \({f : x \mapsto 2x}\) sont les fonctions \({x \mapsto x^2 + k}\), \({k \in \mathbb{R}}\).  
Celle qui vérifie \({F(1) = 3}\) est telle que \({1 + k = 3}\), soit \({k = 2}\) : \({F(x) = x^2 + 2}\).

![](/images/image294.png)
{{% /details %}}

## Vérifier qu’une fonction est une primitive

> [!NOTE] **Méthode 1 - Vérifier une primitive et utiliser une condition initiale**
>
> On considère les fonctions \(f\) et \(F\) définies sur \(\mathbb{R}\) par \({f(x) = xe^x}\) et \({F(x) = (x - 1)e^x}\).
> 1. Démontrer que \(F\) est une primitive de \(f\) sur \(\mathbb{R}\).
> 2. En déduire la primitive \(G\) de \(f\) sur \(\mathbb{R}\) telle que \({G(0) = 2}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** On dérive \(F\) comme un produit : \(F'(x) = 1 \times e^x + (x - 1)e^x = xe^x = f(x)\). Donc \(F\) est une primitive de \(f\) sur \(\mathbb{R}\).

**2.** Les primitives de \(f\) sont de la forme \({G(x) = (x - 1)e^x + k}\), \({k \in \mathbb{R}}\).  
\({G(0) = -1 + k}\), donc \({G(0) = 2 \iff k = 3}\) : \({G(x) = (x - 1)e^x + 3}\).
{{% /details %}}
