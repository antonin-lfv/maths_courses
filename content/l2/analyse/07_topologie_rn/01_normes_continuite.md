---
title: 'Normes, ouverts, fermés, continuité'
weight: 1
cascade:
  type: docs
---

## Normes

> [!TIP] **Définition**
>
> Une **norme** sur un \(\mathbb{R}\)-espace vectoriel \(E\) est une application \({N : E \to \mathbb{R}_+}\) telle que, pour tous \({x, y \in E}\) et \({\lambda \in \mathbb{R}}\) :
> - **séparation** : \({N(x) = 0 \iff x = 0}\) ;
> - **homogénéité** : \({N(\lambda x) = |\lambda|N(x)}\) ;
> - **inégalité triangulaire** : \({N(x + y) \leq N(x) + N(y)}\).
>
> La **distance** associée est \({d(x, y) = N(x - y)}\).

> [!TIP] **Normes usuelles sur \(\mathbb{R}^n\)**
>
> Pour \({x = (x_1, \dots, x_n)}\) :
>
> \[ \|x\|_1 = \sum_{i=1}^{n} |x_i|, \qquad \|x\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2}, \qquad \|x\|_\infty = \max_{1 \leq i \leq n} |x_i|. \]
>
> Elles vérifient \({\|x\|_\infty \leq \|x\|_2 \leq \|x\|_1 \leq n\|x\|_\infty}\).

> [!TIP] **Définition et théorème - Normes équivalentes**
>
> Deux normes \(N\) et \(N'\) sont **équivalentes** s’il existe \({\alpha, \beta > 0}\) tels que \({\alpha N \leq N' \leq \beta N}\). Elles définissent alors les mêmes suites convergentes, les mêmes ouverts et les mêmes fonctions continues.
>
> **En dimension finie, toutes les normes sont équivalentes.** Les notions topologiques sur \(\mathbb{R}^n\) ne dépendent donc pas de la norme choisie.

> [!TIP] **Définition - Boules**
>
> Pour \({a \in E}\) et \({r > 0}\) : la **boule ouverte** \({B(a, r) = \{x,\ \|x - a\| < r\}}\), la **boule fermée** \({\overline{B}(a, r) = \{x,\ \|x - a\| \leq r\}}\), la **sphère** \({S(a, r) = \{x,\ \|x - a\| = r\}}\). Une partie est **bornée** si elle est incluse dans une boule.

## Suites de \(\mathbb{R}^n\)

> [!TIP] **Définition et propriété**
>
> Une suite \((u_k)\) de \(\mathbb{R}^n\) **converge** vers \(\ell\) si \({\|u_k - \ell\| \to 0}\). Cela équivaut à la convergence de chaque **suite coordonnée** vers la coordonnée correspondante de \(\ell\).

## Ouverts et fermés

> [!TIP] **Définition**
>
> - Une partie \(U\) de \(\mathbb{R}^n\) est **ouverte** si, pour tout \({a \in U}\), il existe \({r > 0}\) tel que \({B(a, r) \subset U}\).
> - Une partie \(F\) est **fermée** si son complémentaire est ouvert.
> - Un point \(a\) est **intérieur** à \(A\) si une boule centrée en \(a\) est incluse dans \(A\) ; il est **adhérent** à \(A\) si toute boule centrée en \(a\) rencontre \(A\). L’**intérieur** \(\mathring{A}\) est l’ensemble des points intérieurs, l’**adhérence** \(\overline{A}\) celui des points adhérents, la **frontière** est \({\overline{A} \setminus \mathring{A}}\).

> [!TIP] **Propriétés**
>
> - \(\varnothing\) et \(\mathbb{R}^n\) sont à la fois ouverts et fermés.
> - Une réunion quelconque d’ouverts est ouverte ; une intersection **finie** d’ouverts est ouverte.
> - Une intersection quelconque de fermés est fermée ; une réunion **finie** de fermés est fermée.
> - Une boule ouverte est ouverte, une boule fermée et une sphère sont fermées.
> - **Caractérisation séquentielle** : \(F\) est fermée si et seulement si toute suite d’éléments de \(F\) qui converge a sa limite dans \(F\). Un point est adhérent à \(A\) si et seulement s’il est limite d’une suite d’éléments de \(A\).

> [!IMPORTANT] **Remarque**
>
> « Fermé » n’est pas le contraire d’« ouvert » : \({[0, 1[}\) n’est ni ouvert ni fermé dans \(\mathbb{R}\). Et une intersection infinie d’ouverts peut ne pas être ouverte : \({\displaystyle\bigcap_{k \geq 1} \left]-\dfrac{1}{k}, \dfrac{1}{k}\right[ = \{0\}}\).

## Limites et continuité

> [!TIP] **Définition**
>
> Soit \({f : A \to \mathbb{R}^p}\) avec \({A \subset \mathbb{R}^n}\), et \(a\) un point adhérent à \(A\). On dit que \(f\) a pour **limite** \(\ell\) en \(a\) si
>
> \[ \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in A,\quad \|x - a\| \leq \eta \Rightarrow \|f(x) - \ell\| \leq \varepsilon. \]
>
> \(f\) est **continue en \({a \in A}\)** si \({\lim_{x \to a} f(x) = f(a)}\), et continue sur \(A\) si elle l’est en tout point.

> [!TIP] **Propriétés**
>
> - **Caractérisation séquentielle** : \(f\) est continue en \(a\) si et seulement si, pour toute suite \({x_k \to a}\), \({f(x_k) \to f(a)}\).
> - \({f = (f_1, \dots, f_p)}\) est continue si et seulement si chaque fonction coordonnée \(f_i\) l’est.
> - Sommes, produits, quotients (à dénominateur non nul) et composées de fonctions continues sont continus.
> - Les projections \({(x_1, \dots, x_n) \mapsto x_i}\) sont continues ; donc les fonctions **polynomiales** en les coordonnées aussi. Toute application linéaire en dimension finie est continue.
> - Toute norme est continue, et même \(1\)-lipschitzienne : \({\big|\|x\| - \|y\|\big| \leq \|x - y\|}\).

> [!NOTE] **Méthode - Étudier une limite en \((0, 0)\)**
>
> - **Pour prouver** que \({f(x, y) \to \ell}\) : majorer \({|f(x, y) - \ell|}\) par une quantité qui ne dépend que de \({r = \sqrt{x^2 + y^2}}\) et qui tend vers \(0\). On utilise \({|x| \leq r}\), \({|y| \leq r}\), \({|xy| \leq \dfrac{x^2 + y^2}{2}}\), ou les coordonnées polaires \({x = r\cos\theta}\), \({y = r\sin\theta}\) (la majoration doit être **uniforme en \(\theta\)**).
> - **Pour réfuter** : trouver deux chemins tendant vers \((0, 0)\) le long desquels \(f\) a des limites différentes (\({y = 0}\), \({x = 0}\), \({y = x}\), \({y = x^2}\)…).

{{% details title="Exemple" closed="true" %}}
- \({f(x, y) = \dfrac{xy}{x^2 + y^2}}\) n’a pas de limite en \((0, 0)\) : \({f(x, 0) = 0}\) et \({f(x, x) = \dfrac{1}{2}}\).
- \({g(x, y) = \dfrac{x^2y}{x^2 + y^2}}\) tend vers \(0\) en \((0, 0)\) : \({|g(x, y)| \leq |y| \times \dfrac{x^2}{x^2 + y^2} \leq |y| \leq \sqrt{x^2 + y^2}}\).
- \({h(x, y) = \dfrac{x^2y}{x^4 + y^2}}\) n’a pas de limite en \((0, 0)\), bien que sa limite soit nulle le long de toute droite passant par l’origine : \({h(x, x^2) = \dfrac{1}{2}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La continuité des **applications partielles** \({x \mapsto f(x, y_0)}\) et \({y \mapsto f(x_0, y)}\) n’entraîne pas la continuité de \(f\). La fonction \(f\) de l’exemple, prolongée par \({f(0, 0) = 0}\), a des applications partielles continues en \(0\) mais n’est pas continue en \((0, 0)\).

> [!TIP] **Théorème - Continuité et topologie**
>
> Soit \({f : \mathbb{R}^n \to \mathbb{R}^p}\) continue. L’image réciproque d’un ouvert par \(f\) est un ouvert ; l’image réciproque d’un fermé est un fermé. En particulier, pour \({f : \mathbb{R}^n \to \mathbb{R}}\) continue :
> - \({\{x,\ f(x) > 0\}}\) et \({\{x,\ f(x) \neq 0\}}\) sont ouverts ;
> - \({\{x,\ f(x) \geq 0\}}\) et \({\{x,\ f(x) = 0\}}\) sont fermés.

## Compacité

> [!TIP] **Définition et théorème**
>
> Une partie \(K\) de \(\mathbb{R}^n\) est **compacte** si toute suite d’éléments de \(K\) admet une suite extraite qui converge vers un élément de \(K\).
>
> **Théorème (Bolzano-Weierstrass, Borel-Lebesgue).** Les parties compactes de \(\mathbb{R}^n\) sont exactement les parties **fermées et bornées**.

> [!TIP] **Théorème des bornes atteintes**
>
> L’image d’un compact par une application continue est compacte. En particulier, toute fonction continue sur un compact non vide, à valeurs réelles, est **bornée et atteint ses bornes**.

> [!TIP] **Théorème de Heine**
>
> Toute fonction continue sur un compact est **uniformément continue** :
>
> \[ \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall (x, y) \in K^2,\quad \|x - y\| \leq \eta \Rightarrow \|f(x) - f(y)\| \leq \varepsilon. \]

> [!TIP] **Définition - Connexité par arcs**
>
> Une partie \(A\) est **connexe par arcs** si deux points quelconques de \(A\) peuvent être reliés par un chemin continu tracé dans \(A\). Une partie **convexe** (qui contient le segment joignant deux quelconques de ses points) est connexe par arcs. L’image d’une partie connexe par arcs par une application continue est connexe par arcs : pour une fonction à valeurs réelles, c’est un intervalle (théorème des valeurs intermédiaires).

> [!NOTE] **Exercice résolu - Ouvert, fermé, compact**
>
> On pose \({A = \{(x, y) \in \mathbb{R}^2,\ x^2 + 4y^2 \leq 4\}}\) et \({B = \{(x, y) \in \mathbb{R}^2,\ xy > 1\}}\).
>
> 1. \(A\) est-il ouvert, fermé, compact ? Même question pour \(B\).
> 2. Justifier que \({f(x, y) = x + 2y}\) admet un maximum sur \(A\), et le déterminer.

{{% details title="Solution commentée" closed="true" %}}
**1.** Les fonctions \({g(x, y) = 4 - x^2 - 4y^2}\) et \({h(x, y) = xy - 1}\) sont polynomiales, donc continues sur \(\mathbb{R}^2\).

- \({A = \{g \geq 0\}}\) est **fermé**. Il est **borné** : si \({(x, y) \in A}\), alors \({x^2 \leq 4}\) et \({y^2 \leq 1}\), donc \({\|(x, y)\|_\infty \leq 2}\). Fermé et borné dans \(\mathbb{R}^2\), \(A\) est **compact**. Il n’est pas ouvert : \({(2, 0) \in A}\), mais toute boule centrée en ce point contient des points \({(2 + \varepsilon, 0)}\) hors de \(A\).
- \({B = \{h > 0\}}\) est **ouvert**. Il n’est pas fermé : la suite \({\left(1 + \dfrac{1}{k}, 1\right)}\) est dans \(B\) et converge vers \((1, 1)\), qui n’est pas dans \(B\). Il n’est pas borné (il contient les points \((k, 1)\) pour \({k \geq 2}\)), donc pas compact.

**2.** \(f\) est continue sur le compact \(A\) : elle y est bornée et atteint son maximum.

Pour le déterminer, on utilise l’inégalité de Cauchy-Schwarz dans \(\mathbb{R}^2\) avec les vecteurs \({(x, 2y)}\) et \({(1, 1)}\) :

\[
x + 2y \leq \sqrt{x^2 + 4y^2}\,\sqrt{2} \leq 2\sqrt{2}.
\]

Il y a égalité quand \({(x, 2y)}\) est colinéaire à \((1, 1)\), de même sens, et \({x^2 + 4y^2 = 4}\) : \({x = 2y}\) et \({2x^2 = 4}\), soit \({(x, y) = \left(\sqrt{2}, \dfrac{\sqrt{2}}{2}\right)}\). Le maximum vaut \(2\sqrt{2}\).
{{% /details %}}
