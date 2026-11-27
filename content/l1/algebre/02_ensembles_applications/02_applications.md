---
title: 'Applications'
weight: 2
cascade:
  type: docs
---

## Définitions

> [!TIP] **Définition**
>
> Une **application** \({f : E \to F}\) associe à chaque élément \(x\) de l’ensemble de départ \(E\) un unique élément \(f(x)\) de l’ensemble d’arrivée \(F\), appelé **image** de \(x\). Si \({y = f(x)}\), on dit que \(x\) est un **antécédent** de \(y\).
>
> Deux applications sont égales si elles ont même ensemble de départ, même ensemble d’arrivée et si \({f(x) = g(x)}\) pour tout \(x\) de \(E\). L’ensemble des applications de \(E\) dans \(F\) est noté \(F^E\) ou \(\mathcal{F}(E, F)\).

> [!TIP] **Définition**
>
> - L’**identité** de \(E\) est l’application \({\mathrm{id}_E : E \to E}\), \({x \mapsto x}\).
> - Si \({f : E \to F}\) et \({g : F \to G}\), la **composée** \({g \circ f : E \to G}\) est définie par \({(g \circ f)(x) = g(f(x))}\).
> - Si \({A \subset E}\), la **restriction** de \(f\) à \(A\) est l’application \({f_{|A} : A \to F}\), \({x \mapsto f(x)}\).

> [!IMPORTANT] **Remarque**
>
> La composition est associative : \({h \circ (g \circ f) = (h \circ g) \circ f}\). Elle n’est pas commutative : avec \({f : x \mapsto x + 1}\) et \({g : x \mapsto x^2}\) sur \(\mathbb{R}\), \({(g \circ f)(x) = (x+1)^2}\) alors que \({(f \circ g)(x) = x^2 + 1}\).

## Image directe, image réciproque

> [!TIP] **Définition**
>
> Soit \({f : E \to F}\), \(A\) une partie de \(E\) et \(B\) une partie de \(F\).
> - L’**image directe** de \(A\) est \({f(A) = \{f(x),\ x \in A\} = \{y \in F,\ \exists x \in A,\ y = f(x)\}}\).
> - L’**image réciproque** de \(B\) est \({f^{-1}(B) = \{x \in E,\ f(x) \in B\}}\).

> [!IMPORTANT] **Remarque**
>
> La notation \(f^{-1}(B)\) a un sens pour toute application \(f\), bijective ou non. Elle ne suppose pas l’existence d’une application réciproque.

{{% details title="Exemple" closed="true" %}}
Soit \({f : \mathbb{R} \to \mathbb{R}}\), \({x \mapsto x^2}\).
- \({f([-1, 3]) = [0, 9]}\).
- \({f^{-1}([1, 4]) = [-2, -1] \cup [1, 2]}\).
- \({f^{-1}(\{-5\}) = \varnothing}\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Soit \({f : E \to F}\), \(A, A'\) des parties de \(E\) et \(B, B'\) des parties de \(F\).
> - \({f^{-1}(B \cup B') = f^{-1}(B) \cup f^{-1}(B')}\) et \({f^{-1}(B \cap B') = f^{-1}(B) \cap f^{-1}(B')}\).
> - \({f(A \cup A') = f(A) \cup f(A')}\).
> - \({f(A \cap A') \subset f(A) \cap f(A')}\), et l’inclusion peut être stricte.

{{% details title="Exemple" closed="true" %}}
Avec \({f : x \mapsto x^2}\), \({A = [-2, 0]}\) et \({A' = [0, 2]}\) : \({A \cap A' = \{0\}}\), donc \({f(A \cap A') = \{0\}}\), alors que \({f(A) \cap f(A') = [0, 4]}\).
{{% /details %}}

## Injection, surjection, bijection

> [!TIP] **Définition**
>
> Soit \({f : E \to F}\) une application.
> - \(f\) est **injective** si \({\forall (x, x') \in E^2,\ f(x) = f(x') \Rightarrow x = x'}\). Autrement dit, tout élément de \(F\) a **au plus** un antécédent.
> - \(f\) est **surjective** si \({\forall y \in F,\ \exists x \in E,\ y = f(x)}\). Autrement dit, tout élément de \(F\) a **au moins** un antécédent, ou encore \({f(E) = F}\).
> - \(f\) est **bijective** si elle est injective et surjective : tout élément de \(F\) a **exactement** un antécédent.

{{% details title="Exemple" closed="true" %}}
- \({f : \mathbb{R} \to \mathbb{R}}\), \({x \mapsto x^2}\) n’est ni injective (\({f(-1) = f(1)}\)) ni surjective (\(-1\) n’a pas d’antécédent).
- \({g : \mathbb{R}_+ \to \mathbb{R}}\), \({x \mapsto x^2}\) est injective, non surjective.
- \({h : \mathbb{R}_+ \to \mathbb{R}_+}\), \({x \mapsto x^2}\) est bijective.

Les ensembles de départ et d’arrivée font partie de la donnée d’une application.
{{% /details %}}

> [!TIP] **Définition et théorème - Application réciproque**
>
> Si \({f : E \to F}\) est bijective, l’application qui à tout \(y\) de \(F\) associe son unique antécédent par \(f\) est la **bijection réciproque** de \(f\), notée \({f^{-1} : F \to E}\). Elle vérifie
>
> \[ f^{-1} \circ f = \mathrm{id}_E \qquad \text{et} \qquad f \circ f^{-1} = \mathrm{id}_F. \]
>
> Réciproquement, \({f : E \to F}\) est bijective si et seulement s’il existe une application \({g : F \to E}\) telle que \({g \circ f = \mathrm{id}_E}\) et \({f \circ g = \mathrm{id}_F}\). Dans ce cas, \({g = f^{-1}}\).

{{% details title="Démonstration" closed="true" %}}
Le sens direct vient de la définition de \(f^{-1}\). Réciproquement, supposons qu’une telle application \(g\) existe.

- Injectivité : si \({f(x) = f(x')}\), alors en appliquant \(g\), \({x = g(f(x)) = g(f(x')) = x'}\).
- Surjectivité : pour \({y \in F}\), l’élément \({x = g(y)}\) vérifie \({f(x) = f(g(y)) = y}\).

Donc \(f\) est bijective, et pour tout \({y \in F}\), \(g(y)\) est un antécédent de \(y\), donc l’unique : \({g(y) = f^{-1}(y)}\).
{{% /details %}}

> [!TIP] **Propriétés - Composition**
>
> Soient \({f : E \to F}\) et \({g : F \to G}\).
> - Si \(f\) et \(g\) sont injectives, \({g \circ f}\) est injective.
> - Si \(f\) et \(g\) sont surjectives, \({g \circ f}\) est surjective.
> - Si \(f\) et \(g\) sont bijectives, \({g \circ f}\) est bijective et \({(g \circ f)^{-1} = f^{-1} \circ g^{-1}}\).
> - Si \({g \circ f}\) est injective, alors \(f\) est injective.
> - Si \({g \circ f}\) est surjective, alors \(g\) est surjective.

{{% details title="Démonstration" closed="true" %}}
- Si \({g(f(x)) = g(f(x'))}\), l’injectivité de \(g\) donne \({f(x) = f(x')}\), puis celle de \(f\) donne \({x = x'}\).
- Soit \({z \in G}\). Il existe \({y \in F}\) tel que \({z = g(y)}\), puis \({x \in E}\) tel que \({y = f(x)}\). Alors \({z = (g \circ f)(x)}\).
- La bijectivité résulte des deux points précédents. De plus \({(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ \mathrm{id}_F \circ f = \mathrm{id}_E}\), et de même dans l’autre sens.
- Si \({f(x) = f(x')}\), alors \({g(f(x)) = g(f(x'))}\), donc \({x = x'}\) par injectivité de \({g \circ f}\).
- Soit \({z \in G}\). Il existe \({x \in E}\) tel que \({z = g(f(x))}\) : l’élément \({y = f(x)}\) est un antécédent de \(z\) par \(g\).
{{% /details %}}

> [!NOTE] **Méthode - Montrer qu’une application est bijective**
>
> Trois possibilités :
> - montrer séparément l’injectivité et la surjectivité ;
> - fixer \({y \in F}\) et résoudre l’équation \({f(x) = y}\) d’inconnue \({x \in E}\) : si elle a une solution unique pour chaque \(y\), \(f\) est bijective et la solution donne \(f^{-1}(y)\) ;
> - exhiber une application \(g\) telle que \({g \circ f = \mathrm{id}_E}\) et \({f \circ g = \mathrm{id}_F}\).

> [!NOTE] **Exercice résolu - Une bijection et sa réciproque**
>
> Soit \({f : \mathbb{R} \setminus \{2\} \to \mathbb{R} \setminus \{3\}}\) définie par \({f(x) = \dfrac{3x + 1}{x - 2}}\). Montrer que \(f\) est bien définie, bijective, et déterminer \(f^{-1}\).

{{% details title="Solution commentée" closed="true" %}}
**Bonne définition.** Pour \({x \neq 2}\), \(f(x)\) existe. Il faut vérifier que \({f(x) \neq 3}\) : l’égalité \({\dfrac{3x+1}{x-2} = 3}\) équivaut à \({3x + 1 = 3x - 6}\), soit \({1 = -6}\), ce qui est impossible. Donc \(f\) est bien à valeurs dans \({\mathbb{R} \setminus \{3\}}\).

**Bijectivité.** Soit \({y \neq 3}\). Pour \({x \neq 2}\) :

\[
\begin{aligned}
f(x) = y &\iff 3x + 1 = y(x - 2) \\[0.3em]
&\iff x(3 - y) = -2y - 1 \\[0.3em]
&\iff x = \dfrac{2y + 1}{y - 3} \qquad (\text{car } y \neq 3).
\end{aligned}
\]

Il reste à vérifier que cette valeur est différente de \(2\) : \({\dfrac{2y+1}{y-3} = 2}\) équivaut à \({2y + 1 = 2y - 6}\), impossible.

Tout \(y\) de \({\mathbb{R} \setminus \{3\}}\) a donc un unique antécédent dans \({\mathbb{R} \setminus \{2\}}\) : \(f\) est bijective et

\[
f^{-1}(y) = \dfrac{2y + 1}{y - 3}.
\]
{{% /details %}}
