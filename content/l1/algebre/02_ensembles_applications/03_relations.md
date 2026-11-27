---
title: 'Relations d’équivalence et d’ordre'
weight: 3
cascade:
  type: docs
---

## Relations binaires

> [!TIP] **Définition**
>
> Une **relation binaire** \(\mathcal{R}\) sur un ensemble \(E\) est la donnée, pour chaque couple \((x, y)\) de \(E^2\), d’une assertion \({x \,\mathcal{R}\, y}\) vraie ou fausse. La relation \(\mathcal{R}\) est :
> - **réflexive** si \({\forall x \in E,\ x \,\mathcal{R}\, x}\) ;
> - **symétrique** si \({\forall (x, y) \in E^2,\ x \,\mathcal{R}\, y \Rightarrow y \,\mathcal{R}\, x}\) ;
> - **antisymétrique** si \({\forall (x, y) \in E^2,\ (x \,\mathcal{R}\, y \text{ et } y \,\mathcal{R}\, x) \Rightarrow x = y}\) ;
> - **transitive** si \({\forall (x, y, z) \in E^3,\ (x \,\mathcal{R}\, y \text{ et } y \,\mathcal{R}\, z) \Rightarrow x \,\mathcal{R}\, z}\).

## Relations d’équivalence

> [!TIP] **Définition**
>
> Une **relation d’équivalence** est une relation réflexive, symétrique et transitive. La **classe d’équivalence** d’un élément \(x\) de \(E\) est l’ensemble
>
> \[ \operatorname{cl}(x) = \{y \in E,\ x \,\mathcal{R}\, y\}. \]
>
> L’ensemble des classes d’équivalence est l’**ensemble quotient**, noté \(E/\mathcal{R}\).

{{% details title="Exemple" closed="true" %}}
Soit \(n\) un entier, \({n \geq 2}\). Sur \(\mathbb{Z}\), la **congruence modulo \(n\)** est définie par : \({a \equiv b \ [n]}\) si \(n\) divise \({b - a}\).

- Réflexive : \(n\) divise \({a - a = 0}\).
- Symétrique : si \(n\) divise \({b - a}\), il divise \({a - b = -(b - a)}\).
- Transitive : si \(n\) divise \({b - a}\) et \({c - b}\), il divise leur somme \({c - a}\).

C’est une relation d’équivalence. Elle a \(n\) classes, celles de \({0, 1, \dots, n-1}\), et l’ensemble quotient est noté \(\mathbb{Z}/n\mathbb{Z}\).
{{% /details %}}

> [!TIP] **Théorème**
>
> Soit \(\mathcal{R}\) une relation d’équivalence sur \(E\).
> - Pour tous \(x, y\) de \(E\) : \({x \,\mathcal{R}\, y \iff \operatorname{cl}(x) = \operatorname{cl}(y)}\).
> - Les classes d’équivalence forment une partition de \(E\).

{{% details title="Démonstration" closed="true" %}}
Supposons \({x \,\mathcal{R}\, y}\). Si \({z \in \operatorname{cl}(y)}\), alors \({y \,\mathcal{R}\, z}\) et, par transitivité, \({x \,\mathcal{R}\, z}\) : \({z \in \operatorname{cl}(x)}\). Donc \({\operatorname{cl}(y) \subset \operatorname{cl}(x)}\). Par symétrie, \({y \,\mathcal{R}\, x}\), et le même argument donne l’autre inclusion. Réciproquement, si \({\operatorname{cl}(x) = \operatorname{cl}(y)}\), alors \({y \in \operatorname{cl}(y) = \operatorname{cl}(x)}\) par réflexivité, donc \({x \,\mathcal{R}\, y}\).

Partition : chaque classe est non vide (\({x \in \operatorname{cl}(x)}\)), et tout \(x\) appartient à une classe, donc la réunion est \(E\). Si deux classes \(\operatorname{cl}(x)\) et \(\operatorname{cl}(y)\) ont un élément commun \(z\), alors \({x \,\mathcal{R}\, z}\) et \({y \,\mathcal{R}\, z}\), d’où \({\operatorname{cl}(x) = \operatorname{cl}(z) = \operatorname{cl}(y)}\). Deux classes distinctes sont donc disjointes.
{{% /details %}}

## Relations d’ordre

> [!TIP] **Définition**
>
> Une **relation d’ordre** est une relation réflexive, antisymétrique et transitive ; on la note souvent \(\preccurlyeq\). L’ordre est **total** si deux éléments quelconques sont toujours comparables : \({\forall (x, y) \in E^2,\ x \preccurlyeq y \text{ ou } y \preccurlyeq x}\). Sinon, il est **partiel**.

{{% details title="Exemple" closed="true" %}}
- \(\leq\) est un ordre total sur \(\mathbb{R}\).
- L’inclusion \(\subset\) est un ordre sur \(\mathcal{P}(E)\), partiel dès que \(E\) a au moins deux éléments : \(\{a\}\) et \(\{b\}\) ne sont pas comparables.
- La divisibilité est un ordre partiel sur \(\mathbb{N}^*\) : \(2\) ne divise pas \(3\) et \(3\) ne divise pas \(2\). Ce n’est pas un ordre sur \(\mathbb{Z}^*\), car \(2\) divise \(-2\) et \(-2\) divise \(2\) sans qu’ils soient égaux.
{{% /details %}}

> [!TIP] **Définition**
>
> Soit \((E, \preccurlyeq)\) un ensemble ordonné et \(A\) une partie de \(E\).
> - Un **majorant** de \(A\) est un élément \(M\) de \(E\) tel que \({\forall a \in A,\ a \preccurlyeq M}\). On définit de même un **minorant**.
> - Le **plus grand élément** (ou maximum) de \(A\), s’il existe, est un majorant de \(A\) qui appartient à \(A\). Il est alors unique. On définit de même le **plus petit élément**.
> - La **borne supérieure** de \(A\), si elle existe, est le plus petit des majorants de \(A\), notée \(\sup A\). La **borne inférieure** est le plus grand des minorants, notée \(\inf A\).

{{% details title="Exemple" closed="true" %}}
Dans \((\mathbb{R}, \leq)\), l’intervalle \({A = [0, 1[}\) a pour plus petit élément \(0\). Il est majoré par \(1\), mais n’a pas de plus grand élément. Sa borne supérieure est \({\sup A = 1}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Une relation d’équivalence sur \(\mathbb{R}^2\)**
>
> Sur \(\mathbb{R}^2\), on pose \({(x, y) \,\mathcal{R}\, (x', y')}\) si \({x^2 + y^2 = x'^2 + y'^2}\). Montrer que \(\mathcal{R}\) est une relation d’équivalence et décrire ses classes.

{{% details title="Solution commentée" closed="true" %}}
Notons \({N(x, y) = x^2 + y^2}\). La relation s’écrit \({N(x, y) = N(x', y')}\).

- Réflexivité : \({N(x, y) = N(x, y)}\).
- Symétrie : si \({N(x, y) = N(x', y')}\), alors \({N(x', y') = N(x, y)}\).
- Transitivité : si \({N(x, y) = N(x', y')}\) et \({N(x', y') = N(x'', y'')}\), alors \({N(x, y) = N(x'', y'')}\).

C’est une relation d’équivalence. La classe de \((a, b)\) est l’ensemble des points \((x, y)\) tels que \({x^2 + y^2 = a^2 + b^2}\) : c’est le cercle de centre l’origine et de rayon \(\sqrt{a^2 + b^2}\), réduit au point \((0, 0)\) si \({(a, b) = (0, 0)}\). Le plan est ainsi partagé en cercles concentriques.

Plus généralement, toute application \({f : E \to F}\) définit une relation d’équivalence sur \(E\) par \({x \,\mathcal{R}\, x' \iff f(x) = f(x')}\).
{{% /details %}}
