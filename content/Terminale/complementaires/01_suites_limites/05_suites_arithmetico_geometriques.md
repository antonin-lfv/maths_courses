---
title: 'Suites arithmético-géométriques'
weight: 5
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Une suite \((u_n)\) est **arithmético-géométrique** si elle est définie, pour tout entier naturel \(n\), par une relation de récurrence de la forme
> \[
u_{n+1} = au_n + b,
\]
> où \(a\) et \(b\) sont deux nombres réels.

> [!IMPORTANT] **Remarques**
>
> - Si \(a = 0\), la suite est constante égale à \(b\) (à partir du rang 1).
> - Si \(a = 1\), la suite est arithmétique de raison \(b\).
> - Si \(b = 0\), la suite est géométrique de raison \(a\).

## Représentation graphique

{{% details title="Exemple" closed="true" %}}
On considère la suite définie par \(u_0 = 0\) et \(u_{n+1} = 0{,}5u_n + 3\). On a \(u_{n+1} = f(u_n)\) avec \(f(x) = 0{,}5x + 3\), fonction affine.

Pour représenter les termes sur l’axe des abscisses :
- on trace la droite \(\mathcal{D}\) d’équation \(y = 0{,}5x + 3\) et la droite \(\Delta\) d’équation \(y = x\) ;
- on place \(u_0\) sur l’axe des abscisses ; le point de \(\mathcal{D}\) d’abscisse \(u_0\) a pour ordonnée \(u_1 = f(u_0)\) ;
- on reporte \(u_1\) sur l’axe des abscisses grâce à la droite \(\Delta\) (un point de \(\Delta\) a la même abscisse que son ordonnée) ;
- on recommence pour obtenir \(u_2\), \(u_3\), etc.

![](/images/image337.png)
{{% /details %}}

## Limite des suites arithmético-géométriques

> [!IMPORTANT] **Interprétation graphique**
>
> Une suite arithmético-géométrique peut converger vers un nombre réel \(\ell\) ou tendre vers l’infini.
> - Dans l’exemple ci-dessus, les termes se rapprochent de l’abscisse du point d’intersection des deux droites (ici 6) : la suite converge vers \(\ell = 6\), solution de \(\ell = 0{,}5\ell + 3\).
> - Avec \(u_{n+1} = 1{,}5u_n - 1\) et \(u_0 = 3\), les termes s’éloignent du point d’intersection (d’abscisse 2) : la suite tend vers \(+\infty\).
>
> ![](/images/image338.png)

> [!NOTE] **Méthode — Étudier une suite arithmético-géométrique**
>
> Pour étudier \(u_{n+1} = au_n + b\) avec \(a \neq 1\) :
> 1. on cherche le réel \(\ell\) tel que \(\ell = a\ell + b\) ;
> 2. on montre que la suite \((v_n)\) définie par \(v_n = u_n - \ell\) est géométrique de raison \(a\) ;
> 3. on en déduit \(v_n = v_0a^n\), puis \(u_n = \ell + (u_0 - \ell)a^n\), et la limite de \((u_n)\) à l’aide de la limite de \(a^n\).

## Représenter, conjecturer, démontrer

> [!NOTE] **Exercice résolu 1 — Représenter graphiquement les premiers termes**
>
> On considère la suite définie par \(u_0 = 8\) et \(u_{n+1} = 0{,}5u_n + 3\). Représenter graphiquement \(u_0\), \(u_1\), \(u_2\), \(u_3\) et conjecturer la limite de la suite.

{{% details title="Solution commentée" closed="true" %}}
On utilise les mêmes droites que dans l’exemple : \(\mathcal{D} : y = 0{,}5x + 3\) et \(\Delta : y = x\). En partant de \(u_0 = 8\) sur l’axe des abscisses, on monte (ici, on descend) jusqu’à \(\mathcal{D}\), puis on se déplace horizontalement jusqu’à \(\Delta\), etc. On obtient \(u_1 = 7\), \(u_2 = 6{,}5\), \(u_3 = 6{,}25\). Les termes décroissent et se rapprochent de 6, abscisse du point d’intersection des deux droites : on conjecture \(\lim u_n = 6\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Démontrer la convergence**
>
> On reprend la suite \(u_0 = 8\), \(u_{n+1} = 0{,}5u_n + 3\), et on pose \(v_n = u_n - 6\).
> 1. Montrer que \((v_n)\) est géométrique.
> 2. En déduire l’expression de \(u_n\) en fonction de \(n\), puis la limite de \((u_n)\).

{{% details title="Solution commentée" closed="true" %}}
1. Pour tout \(n\) : \(v_{n+1} = u_{n+1} - 6 = 0{,}5u_n + 3 - 6 = 0{,}5u_n - 3 = 0{,}5(u_n - 6) = 0{,}5v_n\). La suite \((v_n)\) est géométrique de raison \(0{,}5\) et de premier terme \(v_0 = 8 - 6 = 2\).
2. Donc \(v_n = 2 \times 0{,}5^n\) et \(u_n = 6 + 2 \times 0{,}5^n\). Comme \(0 < 0{,}5 < 1\), \(\lim 0{,}5^n = 0\), donc \(\lim u_n = 6\). On retrouve la conjecture.
{{% /details %}}
