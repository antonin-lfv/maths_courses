---
title: 'Notion de continuité'
weight: 4
cascade:
  type: docs
---

## Notion intuitive de fonction continue sur un intervalle

> [!TIP] **Définition**
>
> On considère une fonction \(f\) définie sur un intervalle \(I\) de \(\mathbb{R}\). On dit que \(f\) est **continue** sur \(I\) si l’on peut tracer sa courbe représentative sur \(I\) sans lever le crayon.

{{% details title="Exemples" closed="true" %}}
La fonction de gauche est continue sur \([-2\,;\,3]\). Celle de droite présente un « saut » en 1 : elle n’est pas continue sur \([-2\,;\,3]\) (elle l’est sur \([-2\,;\,1]\) et sur \(]1\,;\,3]\)).

![](/images/image341.png)
{{% /details %}}

## Continuité des fonctions de référence

> [!TIP] **Propriété (admise)**
>
> Soit \(f\) une fonction définie sur un intervalle \(I\) et \(a\) un réel appartenant à \(I\). \(f\) est continue en \(a\) si et seulement si
> \[
\lim_{x \to a} f(x) = f(a).
\]
> \(f\) est continue sur \(I\) lorsqu’elle est continue en tout réel de \(I\).

> [!TIP] **Propriétés (admises)**
>
> - Les fonctions \(x \mapsto x^2\), \(x \mapsto x^3\), les fonctions affines et, plus généralement, les fonctions polynômes sont continues sur \(\mathbb{R}\).
> - La fonction racine carrée \(x \mapsto \sqrt{x}\) est continue sur \([0\,;\,+\infty[\).
> - La fonction inverse \(x \mapsto \dfrac{1}{x}\) est continue sur \(]-\infty\,;\,0[\) et sur \(]0\,;\,+\infty[\).
> - La fonction exponentielle \(x \mapsto e^x\) est continue sur \(\mathbb{R}\).

> [!IMPORTANT] **Remarque**
>
> Les sommes, produits et quotients (lorsque le dénominateur ne s’annule pas) de fonctions continues sont continus. Toute fonction **dérivable** sur un intervalle y est continue.

## Étudier la continuité

> [!NOTE] **Méthode 1 — Conjecturer graphiquement la continuité**
>
> Sur la figure ci-dessus, indiquer sur quels intervalles chaque fonction est continue.

{{% details title="Solution commentée" closed="true" %}}
- La courbe de gauche se trace sans lever le crayon sur \([-2\,;\,3]\) : la fonction est continue sur \([-2\,;\,3]\).
- Pour celle de droite, il faut lever le crayon en \(x = 1\) : la fonction est continue sur \([-2\,;\,1]\) et sur \(]1\,;\,3]\), mais pas sur \([-2\,;\,3]\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Étudier la continuité d’une fonction définie par morceaux**
>
> On considère la fonction \(f\) définie sur \(\mathbb{R}\) par
> \[
f(x) = \begin{cases} 3x - 1 & \text{si } x < 2 \\ x^2 + 1 & \text{si } x \geq 2 \end{cases}
\]
> 1. Justifier que \(f\) est continue sur \(]-\infty\,;\,2[\) et sur \([2\,;\,+\infty[\).
> 2. \(f\) est-elle continue en 2 ? sur \(\mathbb{R}\) ?

{{% details title="Solution commentée" closed="true" %}}
1. Sur \(]-\infty\,;\,2[\), \(f\) est une fonction affine ; sur \([2\,;\,+\infty[\), c’est une fonction polynôme : elle est continue sur chacun de ces intervalles.
2. \(f(2) = 2^2 + 1 = 5\). À gauche de 2 : \(\lim\limits_{x \to 2^-} (3x - 1) = 5\). À droite : \(\lim\limits_{x \to 2^+} (x^2 + 1) = 5\). Donc \(\lim\limits_{x \to 2} f(x) = 5 = f(2)\) : \(f\) est continue en 2, donc sur \(\mathbb{R}\). (Les deux morceaux de courbe se raccordent au point \((2\,;\,5)\).)
{{% /details %}}
