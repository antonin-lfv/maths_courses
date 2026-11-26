---
title: 'Équations et inéquations (fonction inverse)'
weight: 4
cascade:
  type: docs
---

## Équation 1/x = c

> [!TIP] **Propriété**
>
> Soit \(c\) un nombre réel. Dans \(\mathbb{R}^*\), l’équation \(\dfrac{1}{x} = c\) :
> - n’a **aucune solution** si \(c = 0\) ;
> - a **une unique solution**, \(x = \dfrac{1}{c}\), si \(c \neq 0\).

{{% details title="Exemple" closed="true" %}}
\(\dfrac{1}{x} = 4 \iff x = \dfrac{1}{4}\) ; \(\dfrac{1}{x} = -\dfrac{2}{3} \iff x = -\dfrac{3}{2}\) ; \(\dfrac{1}{x} = 0\) n’a pas de solution.
{{% /details %}}

## Inéquations 1/x < c et 1/x > c

> [!TIP] **Propriété**
>
> Soit \(c\) un nombre réel **non nul**. Dans \(\mathbb{R}^*\) :
>
> | | \(c > 0\) | \(c < 0\) |
> |---|---|---|
> | \(\dfrac{1}{x} < c\) | \(x \in ]-\infty\,;\,0[ \cup \left]\dfrac{1}{c}\,;\,+\infty\right[\) | \(x \in \left]\dfrac{1}{c}\,;\,0\right[\) |
> | \(\dfrac{1}{x} > c\) | \(x \in \left]0\,;\,\dfrac{1}{c}\right[\) | \(x \in \left]-\infty\,;\,\dfrac{1}{c}\right[ \cup ]0\,;\,+\infty[\) |
>
> Pour \(c = 0\) : \(\frac{1}{x} < 0 \iff x < 0\) et \(\frac{1}{x} > 0 \iff x > 0\).

Graphiquement (ici avec \(c = 2\)), les solutions de \(\frac{1}{x} < 2\) sont les abscisses des points de l’hyperbole situés sous la droite \(y = 2\) : toute la branche de gauche, et la partie de la branche de droite au-delà de \(\frac{1}{2}\).

![](/images/image379.png)

{{% details title="Démonstration (cas 1/x < c avec c > 0)" closed="true" %}}
Pour \(x \neq 0\) : \(\dfrac{1}{x} < c \iff \dfrac{1}{x} - c < 0 \iff \dfrac{1 - cx}{x} < 0\). On dresse le tableau de signes (\(1 - cx\) s’annule en \(\frac{1}{c} > 0\) et son coefficient \(-c\) est négatif) :

| \(x\) | \(-\infty\) | | \(0\) | | \(\frac{1}{c}\) | | \(+\infty\) |
|---|---|---|---|---|---|---|---|
| \(1 - cx\) | | \(+\) | | \(+\) | \(0\) | \(-\) | |
| \(x\) | | \(-\) | \(0\) | \(+\) | | \(+\) | |
| \(\frac{1 - cx}{x}\) | | \(-\) | ‖ | \(+\) | \(0\) | \(-\) | |

Le quotient est strictement négatif sur \(]-\infty\,;\,0[ \cup \left]\frac{1}{c}\,;\,+\infty\right[\). Les autres cas se démontrent de la même manière.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On ne peut pas « passer à l’inverse » dans une inégalité sans connaître le signe des nombres : la fonction inverse n’est décroissante que sur chacun des intervalles \(]-\infty\,;\,0[\) et \(]0\,;\,+\infty[\). En cas de doute, on revient à un tableau de signes, comme dans la démonstration.

## Résoudre

> [!NOTE] **Méthode 1 — Résoudre une inéquation avec un inverse**
>
> Résoudre dans \(\mathbb{R}^*\) : a) \(\dfrac{1}{x} \geq 4\) ; b) \(\dfrac{1}{x} > -2\).

{{% details title="Solution commentée" closed="true" %}}
a) \(c = 4 > 0\) et \(\frac{1}{c} = \frac{1}{4}\) : \(\frac{1}{x} \geq 4 \iff 0 < x \leq \frac{1}{4}\). \(\mathcal{S} = \left]0\,;\,\dfrac{1}{4}\right]\). *(Contrôle : \(x = 0{,}2\) donne \(5 \geq 4\).)*

b) \(c = -2 < 0\) et \(\frac{1}{c} = -\frac{1}{2}\) : tous les \(x > 0\) conviennent (leur inverse est positif), ainsi que les \(x < -\frac{1}{2}\). \(\mathcal{S} = \left]-\infty\,;\,-\dfrac{1}{2}\right[ \cup ]0\,;\,+\infty[\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Se ramener à 1/x = c**
>
> Résoudre l’équation \(\dfrac{3}{x} - 1 = 5\), puis l’inéquation \(\dfrac{3}{x} - 1 < 5\).

{{% details title="Solution commentée" closed="true" %}}
Pour \(x \neq 0\) : \(\dfrac{3}{x} - 1 = 5 \iff \dfrac{3}{x} = 6 \iff \dfrac{1}{x} = 2 \iff x = \dfrac{1}{2}\). \(\mathcal{S} = \left\{\dfrac{1}{2}\right\}\).

De même, \(\dfrac{3}{x} - 1 < 5 \iff \dfrac{1}{x} < 2\) (on a divisé par \(3 > 0\)). Avec \(c = 2 > 0\) : \(\mathcal{S} = ]-\infty\,;\,0[ \cup \left]\dfrac{1}{2}\,;\,+\infty\right[\).
{{% /details %}}
