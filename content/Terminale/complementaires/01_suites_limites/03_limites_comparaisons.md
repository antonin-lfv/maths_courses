---
title: 'Limites et comparaisons'
weight: 3
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Propriété (admise)**
>
> Soient \((u_n)\) et \((v_n)\) deux suites telles que, à partir d’un certain rang, \({u_n \leq v_n}\).
> - Si \({\displaystyle\lim_{n \to +\infty} u_n = +\infty}\), alors \({\displaystyle\lim_{n \to +\infty} v_n = +\infty}\).
> - Si \({\displaystyle\lim_{n \to +\infty} v_n = -\infty}\), alors \({\displaystyle\lim_{n \to +\infty} u_n = -\infty}\).

{{% details title="Exemple" closed="true" %}}
Pour tout \({n \in \mathbb{N}}\), \({\cos(n) \geq -1}\), donc \({v_n = n^2 + \cos(n) \geq n^2 - 1}\). Comme \({\lim (n^2 - 1) = +\infty}\), on obtient \({\lim v_n = +\infty}\).
{{% /details %}}

## Limite finie

> [!TIP] **Propriété (admise)**
>
> Soient \((u_n)\) et \((v_n)\) deux suites qui convergent respectivement vers \(\ell\) et \(\ell'\). Si, à partir d’un certain rang, \({u_n \leq v_n}\), alors \({\ell \leq \ell'}\).

> [!IMPORTANT] **Remarques**
>
> - Si \((u_n)\) converge vers \(\ell\) et si, pour tout \(n\), \({u_n \leq k}\) (\(k\) réel), alors \({\ell \leq k}\).
> - Les inégalités strictes ne se conservent pas forcément par passage à la limite : on peut avoir \({u_n < v_n}\) pour tout \(n\) et \({\ell = \ell'}\). Par exemple, \({u_n = 2 - \dfrac{1}{n}}\) et \({v_n = 2 + \dfrac{1}{n}}\) vérifient \({u_n < v_n}\) pour tout \({n \geq 1}\), mais ont la même limite 2.

> [!TIP] **Théorème d’encadrement, dit « des gendarmes » (admis)**
>
> Soient trois suites \((u_n)\), \((v_n)\) et \((w_n)\) telles que, à partir d’un certain rang, \({u_n \leq v_n \leq w_n}\). Si \((u_n)\) et \((w_n)\) convergent vers une même limite \(\ell\), alors \((v_n)\) converge aussi vers \(\ell\).

{{% details title="Exemple" closed="true" %}}
Soit \({v_n = 1 + \dfrac{\sin(n)}{n}}\) pour \({n \geq 1}\). Comme \({-1 \leq \sin(n) \leq 1}\) et \({n > 0}\) :
\[
1 - \dfrac{1}{n} \leq v_n \leq 1 + \dfrac{1}{n}.
\]
Les deux suites qui encadrent \(v_n\) tendent vers 1 : d’après le théorème des gendarmes, \({\lim v_n = 1}\).
{{% /details %}}

## Utiliser des comparaisons

> [!NOTE] **Méthode 1 - Déterminer une limite par comparaison**
>
> Dans chaque cas, comparer les suites \((u_n)\) et \((v_n)\) afin de déterminer la limite de \((u_n)\).
> 1. Pour tout entier \(n\), \({u_n = n^3 + 2 + (-1)^n}\) et \({v_n = n^3 + 1}\).
> 2. Pour tout entier \(n\), \({u_n = -4n + \sin(n)}\) et \({v_n = -4n + 1}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({(-1)^n \geq -1}\), donc \({u_n \geq n^3 + 1 = v_n}\). Or \({\lim v_n = +\infty}\) : par comparaison, \({\lim u_n = +\infty}\).
2. \({\sin(n) \leq 1}\), donc \({u_n \leq v_n}\). Or \({\lim v_n = -\infty}\) : par comparaison, \({\lim u_n = -\infty}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Comparer des limites**
>
> On considère la suite \((u_n)\) définie pour tout \({n \geq 1}\) par \({u_n = \dfrac{5n - 1}{n}}\). On admet que \((u_n)\) est convergente. Montrer que sa limite est inférieure ou égale à 5.

{{% details title="Solution commentée" closed="true" %}}
Pour tout \({n \geq 1}\), \({u_n = 5 - \dfrac{1}{n} \leq 5}\). La suite constante égale à 5 converge vers 5, donc, par passage à la limite dans l’inégalité, \({\lim u_n \leq 5}\). (En fait, \({\lim u_n = 5}\) : l’inégalité large est atteinte.)
{{% /details %}}

> [!NOTE] **Méthode 3 - Utiliser le théorème des gendarmes**
>
> Déterminer la limite de la suite définie pour tout entier \({n \geq 1}\) par \({u_n = \dfrac{3 + 2(-1)^n}{n}}\).

{{% details title="Solution commentée" closed="true" %}}
Pour tout \(n\), \({-1 \leq (-1)^n \leq 1}\), donc \({1 \leq 3 + 2(-1)^n \leq 5}\). En divisant par \({n > 0}\) :
\[
\dfrac{1}{n} \leq u_n \leq \dfrac{5}{n}.
\]
Or \({\lim \dfrac{1}{n} = \lim \dfrac{5}{n} = 0}\). D’après le théorème des gendarmes, \({\lim u_n = 0}\).
{{% /details %}}
