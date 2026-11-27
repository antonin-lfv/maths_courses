---
title: 'Limite d’une suite'
weight: 1
cascade:
  type: docs
---

Une suite réelle est une application de \(\mathbb{N}\) dans \(\mathbb{R}\), notée \((u_n)_{n \in \mathbb{N}}\) ou simplement \((u_n)\).

## Suites convergentes

> [!TIP] **Définition**
>
> Une suite \((u_n)\) **converge** vers le réel \(\ell\) si
>
> \[ \forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ |u_n - \ell| \leq \varepsilon. \]
>
> On note \({\lim u_n = \ell}\) ou \({u_n \to \ell}\). Une suite qui ne converge vers aucun réel est **divergente**.

Autrement dit : aussi petit que soit \({\varepsilon > 0}\), tous les termes de la suite sont dans l’intervalle \({[\ell - \varepsilon, \ell + \varepsilon]}\) à partir d’un certain rang (qui dépend de \(\varepsilon\)).

> [!TIP] **Définition - Limites infinies**
>
> - \((u_n)\) tend vers \(+\infty\) si \({\forall A \in \mathbb{R},\ \exists N \in \mathbb{N},\ \forall n \geq N,\ u_n \geq A}\).
> - \((u_n)\) tend vers \(-\infty\) si \({\forall A \in \mathbb{R},\ \exists N \in \mathbb{N},\ \forall n \geq N,\ u_n \leq A}\).
>
> Une suite qui tend vers \(\pm\infty\) est divergente.

> [!TIP] **Propriétés**
>
> - **Unicité** : si une suite a une limite (finie ou infinie), cette limite est unique.
> - Toute suite convergente est **bornée**. La réciproque est fausse : \({((-1)^n)}\) est bornée et divergente.
> - Si \({u_n \to \ell}\) avec \({\ell > 0}\), alors \({u_n > 0}\) à partir d’un certain rang (et même \({u_n \geq \dfrac{\ell}{2}}\)).

{{% details title="Démonstration" closed="true" %}}
**Unicité** (cas fini). Supposons que \((u_n)\) converge vers \(\ell\) et \(\ell'\) avec \({\ell \neq \ell'}\). On pose \({\varepsilon = \dfrac{|\ell - \ell'|}{3} > 0}\). Il existe \(N\) et \(N'\) tels que \({|u_n - \ell| \leq \varepsilon}\) pour \({n \geq N}\) et \({|u_n - \ell'| \leq \varepsilon}\) pour \({n \geq N'}\). Pour \({n = \max(N, N')}\) :

\[
|\ell - \ell'| \leq |\ell - u_n| + |u_n - \ell'| \leq 2\varepsilon = \dfrac{2}{3}|\ell - \ell'|,
\]

ce qui est impossible puisque \({|\ell - \ell'| > 0}\).

**Convergente donc bornée.** Avec \({\varepsilon = 1}\), il existe \(N\) tel que \({|u_n| \leq |\ell| + 1}\) pour \({n \geq N}\). Alors \({|u_n| \leq \max(|u_0|, \dots, |u_{N-1}|, |\ell| + 1)}\) pour tout \(n\).
{{% /details %}}

> [!NOTE] **Méthode - Revenir à la définition**
>
> Pour montrer \({u_n \to \ell}\) avec la définition : on fixe \({\varepsilon > 0}\), on majore \({|u_n - \ell|}\) par une expression simple qui tend vers \(0\), puis on cherche à partir de quel rang cette expression est inférieure à \(\varepsilon\).

{{% details title="Exemple" closed="true" %}}
Montrons que \({u_n = \dfrac{3n + 1}{n + 2}}\) converge vers \(3\). Pour tout \(n\) :

\[
|u_n - 3| = \left|\dfrac{3n + 1 - 3n - 6}{n + 2}\right| = \dfrac{5}{n + 2} \leq \dfrac{5}{n} \quad (n \geq 1).
\]

Soit \({\varepsilon > 0}\). On choisit un entier \({N \geq 1}\) tel que \({N \geq \dfrac{5}{\varepsilon}}\). Pour tout \({n \geq N}\), \({|u_n - 3| \leq \dfrac{5}{n} \leq \dfrac{5}{N} \leq \varepsilon}\).
{{% /details %}}

## Opérations sur les limites

> [!TIP] **Théorème**
>
> Si \({u_n \to \ell}\) et \({v_n \to \ell'}\) avec \(\ell\), \(\ell'\) réels, alors :
> - \({u_n + v_n \to \ell + \ell'}\) et \({\lambda u_n \to \lambda\ell}\) pour tout réel \(\lambda\) ;
> - \({u_n v_n \to \ell\ell'}\) ;
> - si \({\ell' \neq 0}\), \({\dfrac{u_n}{v_n} \to \dfrac{\ell}{\ell'}}\) ;
> - \({|u_n| \to |\ell|}\).
>
> Ces règles s’étendent aux limites infinies, sauf pour les **formes indéterminées** : \({(+\infty) - (+\infty)}\), \({0 \times \infty}\), \(\dfrac{\infty}{\infty}\), \(\dfrac{0}{0}\), ainsi que \(1^\infty\), \(\infty^0\) et \(0^0\) pour les puissances.

{{% details title="Démonstration" closed="true" %}}
Pour le produit : \((u_n)\) est bornée par un réel \({K > 0}\), et

\[
|u_n v_n - \ell\ell'| = |u_n(v_n - \ell') + \ell'(u_n - \ell)| \leq K|v_n - \ell'| + |\ell'||u_n - \ell|.
\]

Soit \({\varepsilon > 0}\). À partir d’un certain rang, \({|v_n - \ell'| \leq \dfrac{\varepsilon}{2K}}\) et \({|u_n - \ell| \leq \dfrac{\varepsilon}{2(|\ell'| + 1)}}\), donc \({|u_n v_n - \ell\ell'| \leq \varepsilon}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Le produit d’une suite **bornée** par une suite qui tend vers \(0\) tend vers \(0\).

## Limites et inégalités

> [!TIP] **Théorème - Passage à la limite**
>
> Si \({u_n \leq v_n}\) à partir d’un certain rang, et si \({u_n \to \ell}\) et \({v_n \to \ell'}\), alors \({\ell \leq \ell'}\).

> [!IMPORTANT] **Remarque**
>
> Les inégalités strictes deviennent larges à la limite : \({\dfrac{1}{n} > 0}\) pour tout \({n \geq 1}\), mais la limite vaut \(0\).

> [!TIP] **Théorème d’encadrement (des gendarmes)**
>
> Si \({v_n \leq u_n \leq w_n}\) à partir d’un certain rang et si \((v_n)\) et \((w_n)\) convergent vers la même limite \(\ell\), alors \((u_n)\) converge vers \(\ell\).
>
> En particulier, si \({|u_n - \ell| \leq \alpha_n}\) avec \({\alpha_n \to 0}\), alors \({u_n \to \ell}\).

> [!TIP] **Théorème de comparaison**
>
> Si \({u_n \leq v_n}\) à partir d’un certain rang :
> - si \({u_n \to +\infty}\), alors \({v_n \to +\infty}\) ;
> - si \({v_n \to -\infty}\), alors \({u_n \to -\infty}\).

{{% details title="Exemple" closed="true" %}}
Pour \({n \geq 1}\), \({-\dfrac{1}{n} \leq \dfrac{\sin(n^2)}{n} \leq \dfrac{1}{n}}\), donc \({\dfrac{\sin(n^2)}{n} \to 0}\).

Pour \({n \geq 0}\), \({n + (-1)^n \geq n - 1}\), donc \({n + (-1)^n \to +\infty}\).
{{% /details %}}

## Suites de référence

> [!TIP] **Propriétés**
>
> - **Suite géométrique** : \({q^n \to 0}\) si \({|q| < 1}\) ; \({q^n \to +\infty}\) si \({q > 1}\) ; \((q^n)\) est constante si \({q = 1}\) et n’a pas de limite si \({q \leq -1}\).
> - **Somme géométrique** : pour \({q \neq 1}\), \({\displaystyle\sum_{k=0}^{n} q^k = \dfrac{1 - q^{n+1}}{1 - q}}\), qui tend vers \(\dfrac{1}{1 - q}\) si \({|q| < 1}\).
> - **Suite arithmético-géométrique** \({u_{n+1} = au_n + b}\) avec \({a \neq 1}\) : en notant \({\ell = \dfrac{b}{1 - a}}\) le point fixe, la suite \({(u_n - \ell)}\) est géométrique de raison \(a\), donc \({u_n = \ell + a^n(u_0 - \ell)}\).
> - **Récurrence linéaire d’ordre 2** \({u_{n+2} = au_{n+1} + bu_n}\) : on résout l’équation caractéristique \({r^2 = ar + b}\). Avec deux racines réelles distinctes \(r_1\), \(r_2\) : \({u_n = \lambda r_1^n + \mu r_2^n}\). Avec une racine double \(r\) : \({u_n = (\lambda + \mu n)r^n}\). Avec deux racines complexes conjuguées \({\rho e^{\pm i\theta}}\) : \({u_n = \rho^n(\lambda\cos(n\theta) + \mu\sin(n\theta))}\). Les constantes \(\lambda\), \(\mu\) sont fixées par \(u_0\) et \(u_1\).

> [!NOTE] **Exercice résolu - Lever une indétermination**
>
> Étudier la limite des suites \({u_n = \sqrt{n^2 + 3n} - n}\) et \({v_n = \dfrac{2^n + n^2}{3^n - 5n}}\).

{{% details title="Solution commentée" closed="true" %}}
**Suite \((u_n)\).** C’est une forme \({(+\infty) - (+\infty)}\). On multiplie par l’expression conjuguée :

\[
u_n = \dfrac{(n^2 + 3n) - n^2}{\sqrt{n^2 + 3n} + n} = \dfrac{3n}{n\left(\sqrt{1 + \dfrac{3}{n}} + 1\right)} = \dfrac{3}{\sqrt{1 + \dfrac{3}{n}} + 1}.
\]

Comme \({\sqrt{1 + \dfrac{3}{n}} \to 1}\), on obtient \({u_n \to \dfrac{3}{2}}\).

**Suite \((v_n)\).** On met en facteur le terme dominant au numérateur et au dénominateur :

\[
v_n = \dfrac{2^n\left(1 + \dfrac{n^2}{2^n}\right)}{3^n\left(1 - \dfrac{5n}{3^n}\right)} = \left(\dfrac{2}{3}\right)^n \times \dfrac{1 + \dfrac{n^2}{2^n}}{1 - \dfrac{5n}{3^n}}.
\]

Par croissances comparées, \({\dfrac{n^2}{2^n} \to 0}\) et \({\dfrac{5n}{3^n} \to 0}\) : le quotient tend vers \(1\). Comme \({\left(\dfrac{2}{3}\right)^n \to 0}\), on conclut \({v_n \to 0}\).
{{% /details %}}
