---
title: 'Limites et opérations'
weight: 2
cascade:
  type: docs
---

Dans cette page, \((u_n)\) et \((v_n)\) sont deux suites, et \(\ell\), \(\ell'\) deux réels. Les propriétés sont admises.

## Somme

> [!TIP] **Propriété**
>
> | Si \(\lim u_n =\) | \(\ell\) | \(\ell\) | \(\ell\) | \(+\infty\) | \(-\infty\) | \(+\infty\) |
> |---|---|---|---|---|---|---|
> | et \(\lim v_n =\) | \(\ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | \(-\infty\) |
> | alors \(\lim (u_n + v_n) =\) | \(\ell + \ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | forme indéterminée |

> [!IMPORTANT] **Remarques**
>
> - Si \(\lim u_n = +\infty\) et \(\lim v_n = -\infty\), on ne peut pas conclure directement sur la limite de \((u_n + v_n)\) : on parle de **forme indéterminée**. Il faut alors transformer l’écriture de \(u_n + v_n\) (factoriser, par exemple) pour lever l’indétermination.
> - Une suite constante égale à \(k\) a pour limite \(k\) : la limite de \((u_n + k)\) se déduit du tableau avec \(\ell' = k\).

## Produit

> [!TIP] **Propriété**
>
> Le symbole \(\infty\) désigne \(+\infty\) ou \(-\infty\) ; le signe de la limite s’obtient par la règle des signes.
>
> | Si \(\lim u_n =\) | \(\ell\) | \(\ell \neq 0\) | \(\infty\) | \(0\) |
> |---|---|---|---|---|
> | et \(\lim v_n =\) | \(\ell'\) | \(\infty\) | \(\infty\) | \(\infty\) |
> | alors \(\lim (u_nv_n) =\) | \(\ell\ell'\) | \(\infty\) | \(\infty\) | forme indéterminée |

> [!IMPORTANT] **Remarques**
>
> - Par exemple, si \(\lim u_n = -\infty\) et \(\lim v_n = +\infty\), alors \(\lim u_nv_n = -\infty\).
> - Pour un réel \(k\) non nul, la limite de \((ku_n)\) s’obtient avec la suite constante \(v_n = k\).

## Quotient

> [!TIP] **Propriété**
>
> On suppose que, pour tout \(n\), \(v_n \neq 0\).
>
> | Si \(\lim u_n =\) | \(\ell\) | \(\ell\) | \(\infty\) | \(\infty\) | \(\infty\) | \(0\) |
> |---|---|---|---|---|---|---|
> | et \(\lim v_n =\) | \(\ell' \neq 0\) | \(\infty\) | \(\ell' \neq 0\) | \(0\) | \(\infty\) | \(0\) |
> | alors \(\lim \dfrac{u_n}{v_n} =\) | \(\dfrac{\ell}{\ell'}\) | \(0\) | \(\infty\) | \(\infty\) | forme indéterminée | forme indéterminée |

> [!IMPORTANT] **Remarque**
>
> Lorsque \(\lim v_n = 0\) (et \(\lim u_n\) est non nulle ou infinie), il faut connaître le signe de \(v_n\) à partir d’un certain rang pour conclure avec la règle des signes. Sinon, le quotient peut ne pas avoir de limite.

Les quatre formes indéterminées sont donc : « \(\infty - \infty\) », « \(0 \times \infty\) », « \(\dfrac{\infty}{\infty}\) » et « \(\dfrac{0}{0}\) ».

## Calculer des limites

> [!NOTE] **Méthode 1 — Utiliser les opérations**
>
> Déterminer la limite des suites définies pour tout entier \(n \geq 1\) par :
> 1. \(u_n = 5 + \dfrac{2}{n^2}\)
> 2. \(v_n = \dfrac{4}{3 + \frac{1}{n}}\)

{{% details title="Solution commentée" closed="true" %}}
1. \(\lim \dfrac{1}{n^2} = 0\), donc \(\lim \dfrac{2}{n^2} = 0\) (produit par 2), puis \(\lim u_n = 5 + 0 = 5\) (somme).
2. \(\lim \left(3 + \dfrac{1}{n}\right) = 3 \neq 0\), donc, par quotient, \(\lim v_n = \dfrac{4}{3}\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Utiliser la règle des signes**
>
> Déterminer la limite des suites définies pour tout entier \(n \geq 1\) par :
> 1. \(u_n = (2 - n)\sqrt{n}\)
> 2. \(v_n = \left(\dfrac{1}{n} - 4\right)n^3\)

{{% details title="Solution commentée" closed="true" %}}
1. \(\lim (2 - n) = -\infty\) et \(\lim \sqrt{n} = +\infty\). Par produit (règle des signes) : \(\lim u_n = -\infty\).
2. \(\lim \left(\dfrac{1}{n} - 4\right) = -4\) et \(\lim n^3 = +\infty\). Par produit : \(\lim v_n = -\infty\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Lever une indétermination**
>
> Déterminer la limite des suites définies pour tout entier \(n \geq 1\) par :
> 1. \(u_n = 2n^2 - 7n + 1\)
> 2. \(v_n = \dfrac{3n^2 + n}{n^2 + 5}\)

{{% details title="Solution commentée" closed="true" %}}
1. \(\lim 2n^2 = +\infty\) et \(\lim (-7n) = -\infty\) : forme indéterminée « \(\infty - \infty\) ». On factorise par le terme de plus haut degré :
\[
u_n = n^2\left(2 - \frac{7}{n} + \frac{1}{n^2}\right).
\]
La parenthèse tend vers 2 et \(\lim n^2 = +\infty\) : par produit, \(\lim u_n = +\infty\).
2. Forme indéterminée « \(\dfrac{\infty}{\infty}\) ». On factorise numérateur et dénominateur par \(n^2\) :
\[
v_n = \frac{n^2\left(3 + \frac{1}{n}\right)}{n^2\left(1 + \frac{5}{n^2}\right)} = \frac{3 + \frac{1}{n}}{1 + \frac{5}{n^2}}.
\]
Le numérateur tend vers 3 et le dénominateur vers 1 : \(\lim v_n = 3\).
{{% /details %}}
