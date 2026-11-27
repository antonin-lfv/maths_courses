---
title: 'Formules de Taylor et développements limités'
weight: 1
cascade:
  type: docs
---

## Comparaison locale des fonctions

> [!TIP] **Définition**
>
> Soient \(f\) et \(g\) deux fonctions définies au voisinage de \(a\) (réel ou \(\pm\infty\)), \(g\) ne s’annulant pas au voisinage de \(a\) (sauf éventuellement en \(a\)).
> - \(f\) est **négligeable** devant \(g\) en \(a\), noté \({f = o(g)}\), si \({\dfrac{f(x)}{g(x)} \to 0}\) quand \({x \to a}\).
> - \(f\) est **équivalente** à \(g\) en \(a\), noté \({f \sim g}\), si \({\dfrac{f(x)}{g(x)} \to 1}\) quand \({x \to a}\), c’est-à-dire si \({f = g + o(g)}\).
> - \(f\) est **dominée** par \(g\) en \(a\), noté \({f = O(g)}\), si \(\dfrac{f}{g}\) est bornée au voisinage de \(a\).

Les règles sont celles vues pour les suites : les équivalents se multiplient, se divisent, s’élèvent à une puissance fixe, mais ne s’ajoutent pas et ne se composent pas.

## Formules de Taylor

> [!TIP] **Théorème - Formule de Taylor-Young**
>
> Soit \(f\) une fonction \(n\) fois dérivable en \(a\). Alors, quand \({x \to a}\) :
>
> \[ f(x) = \sum_{k=0}^{n} \dfrac{f^{(k)}(a)}{k!}(x - a)^k + o\big((x - a)^n\big). \]

> [!TIP] **Théorème - Formule de Taylor avec reste intégral**
>
> Soit \(f\) de classe \(\mathcal{C}^{n+1}\) sur un intervalle \(I\). Pour tous \(a\), \(x\) dans \(I\) :
>
> \[ f(x) = \sum_{k=0}^{n} \dfrac{f^{(k)}(a)}{k!}(x - a)^k + \int_a^x \dfrac{(x - t)^n}{n!}f^{(n+1)}(t)\,\mathrm{d}t. \]

> [!TIP] **Théorème - Inégalité de Taylor-Lagrange**
>
> Avec les mêmes hypothèses, si \({|f^{(n+1)}| \leq M}\) sur \(I\), alors pour tous \(a\), \(x\) dans \(I\) :
>
> \[ \left|f(x) - \sum_{k=0}^{n} \dfrac{f^{(k)}(a)}{k!}(x - a)^k\right| \leq M\dfrac{|x - a|^{n+1}}{(n + 1)!}. \]

La formule de Taylor-Young est **locale** : elle décrit \(f\) près de \(a\). Les deux autres sont **globales** : elles donnent une information sur tout l’intervalle, utile pour majorer une erreur.

{{% details title="Exemple" closed="true" %}}
Pour \({f = \exp}\), \({a = 0}\) et \({x = 1}\) : \({|f^{(n+1)}| \leq e \leq 3}\) sur \([0, 1]\), donc

\[
\left|e - \sum_{k=0}^{n} \dfrac{1}{k!}\right| \leq \dfrac{3}{(n + 1)!}.
\]

On retrouve que \({\displaystyle\sum_{k=0}^{n} \dfrac{1}{k!} \to e}\), avec une majoration de l’erreur.
{{% /details %}}

## Développements limités

> [!TIP] **Définition**
>
> \(f\) admet un **développement limité à l’ordre \(n\) en \(a\)** (en abrégé \(\mathrm{DL}_n(a)\)) s’il existe des réels \({c_0, \dots, c_n}\) tels que, quand \({x \to a}\) :
>
> \[ f(x) = c_0 + c_1(x - a) + \dots + c_n(x - a)^n + o\big((x - a)^n\big). \]
>
> Le polynôme \({c_0 + c_1(x - a) + \dots + c_n(x - a)^n}\) est la **partie régulière** du développement. En posant \({x = a + h}\), on se ramène toujours à un développement en \(0\).

> [!TIP] **Propriétés**
>
> - **Unicité** : si un développement limité existe, ses coefficients sont uniques.
> - **Troncature** : un \(\mathrm{DL}_n\) donne un \(\mathrm{DL}_p\) pour tout \({p \leq n}\), en ne gardant que les termes de degré au plus \(p\).
> - **Parité** : en \(0\), le développement d’une fonction paire ne contient que des puissances paires, celui d’une fonction impaire que des puissances impaires.
> - \(f\) admet un \(\mathrm{DL}_0(a)\) si et seulement si \(f\) est continue en \(a\) (ou prolongeable par continuité), et un \(\mathrm{DL}_1(a)\) si et seulement si \(f\) est dérivable en \(a\).
> - Si \(f\) est \(n\) fois dérivable en \(a\), elle admet un \(\mathrm{DL}_n(a)\), donné par la formule de Taylor-Young.
> - **Équivalent** : \(f\) est équivalente en \(a\) au premier terme non nul de son développement.

## Développements usuels en 0

> [!TIP] **Formulaire**
>
> Quand \({x \to 0}\) :
>
> \[ e^x = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \dots + \dfrac{x^n}{n!} + o(x^n) \]
>
> \[ \cos x = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dots + (-1)^n\dfrac{x^{2n}}{(2n)!} + o(x^{2n+1}) \]
>
> \[ \sin x = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \dots + (-1)^n\dfrac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2}) \]
>
> \[ \operatorname{ch} x = 1 + \dfrac{x^2}{2!} + \dots + \dfrac{x^{2n}}{(2n)!} + o(x^{2n+1}) \qquad \operatorname{sh} x = x + \dfrac{x^3}{3!} + \dots + \dfrac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2}) \]
>
> \[ \dfrac{1}{1 - x} = 1 + x + x^2 + \dots + x^n + o(x^n) \qquad \dfrac{1}{1 + x} = 1 - x + x^2 - \dots + (-1)^n x^n + o(x^n) \]
>
> \[ \ln(1 + x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dots + (-1)^{n-1}\dfrac{x^n}{n} + o(x^n) \]
>
> \[ (1 + x)^\alpha = 1 + \alpha x + \dfrac{\alpha(\alpha - 1)}{2!}x^2 + \dots + \dfrac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!}x^n + o(x^n) \]
>
> \[ \arctan x = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \dots + (-1)^n\dfrac{x^{2n+1}}{2n+1} + o(x^{2n+2}) \qquad \tan x = x + \dfrac{x^3}{3} + o(x^4) \]

En particulier, \({\sqrt{1 + x} = 1 + \dfrac{x}{2} - \dfrac{x^2}{8} + o(x^2)}\) et \({\dfrac{1}{\sqrt{1 + x}} = 1 - \dfrac{x}{2} + \dfrac{3x^2}{8} + o(x^2)}\).

## Opérations

> [!TIP] **Théorème**
>
> Si \(f\) et \(g\) admettent des \(\mathrm{DL}_n(0)\) de parties régulières \(P\) et \(Q\) :
> - \({f + g}\) admet un \(\mathrm{DL}_n(0)\) de partie régulière \({P + Q}\) ;
> - \(fg\) admet un \(\mathrm{DL}_n(0)\), obtenu en développant \(PQ\) et en ne gardant que les termes de degré au plus \(n\) ;
> - si \({f(0) = 0}\), \({g \circ f}\) admet un \(\mathrm{DL}_n(0)\), obtenu en remplaçant dans \(Q\) la variable par \(P\) et en tronquant au degré \(n\) ;
> - **primitivation** : si \(f\) est dérivable et si \(f'\) admet un \(\mathrm{DL}_n(0)\) de partie régulière \({c_0 + c_1 x + \dots + c_n x^n}\), alors \(f\) admet le \(\mathrm{DL}_{n+1}(0)\)
>
> \[ f(x) = f(0) + c_0 x + \dfrac{c_1}{2}x^2 + \dots + \dfrac{c_n}{n + 1}x^{n+1} + o(x^{n+1}). \]

> [!IMPORTANT] **Remarques**
>
> - On ne dérive pas un développement limité sans précaution : une fonction peut admettre un \(\mathrm{DL}_n\) sans que sa dérivée en admette un. En revanche, si \(f\) est de classe \(\mathcal{C}^n\), le \(\mathrm{DL}_{n-1}\) de \(f'\) s’obtient en dérivant celui de \(f\).
> - Pour un quotient, on écrit \({\dfrac{1}{1 + u}}\) avec \({u \to 0}\) et on compose.
> - Avant de composer, vérifier que la fonction intérieure tend vers \(0\). Sinon, factoriser pour s’y ramener : \({\ln(2 + x) = \ln 2 + \ln\left(1 + \dfrac{x}{2}\right)}\).

{{% details title="Exemple" closed="true" %}}
\(\mathrm{DL}_3(0)\) de \({f(x) = \dfrac{e^x}{1 + x}}\). On multiplie les développements à l’ordre \(3\) :

\[
\begin{aligned}
f(x) &= \left(1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6}\right)\left(1 - x + x^2 - x^3\right) + o(x^3) \\[0.3em]
&= 1 + (1 - 1)x + \left(1 - 1 + \dfrac{1}{2}\right)x^2 + \left(-1 + 1 - \dfrac{1}{2} + \dfrac{1}{6}\right)x^3 + o(x^3) \\[0.3em]
&= 1 + \dfrac{x^2}{2} - \dfrac{x^3}{3} + o(x^3).
\end{aligned}
\]
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(\mathrm{DL}_4(0)\) de \({g(x) = \ln(\cos x)}\). On écrit \({\cos x = 1 + u}\) avec \({u = -\dfrac{x^2}{2} + \dfrac{x^4}{24} + o(x^4)}\), qui tend vers \(0\). Comme \(u\) est d’ordre \(x^2\), il suffit de développer \({\ln(1 + u) = u - \dfrac{u^2}{2} + o(u^2)}\), avec \({u^2 = \dfrac{x^4}{4} + o(x^4)}\) :

\[
\ln(\cos x) = -\dfrac{x^2}{2} + \dfrac{x^4}{24} - \dfrac{x^4}{8} + o(x^4) = -\dfrac{x^2}{2} - \dfrac{x^4}{12} + o(x^4).
\]
{{% /details %}}

## Applications

> [!NOTE] **Méthode - Calcul de limites et d’équivalents**
>
> On développe numérateur et dénominateur jusqu’au premier terme non nul. Si les premiers termes se compensent, on augmente l’ordre.

> [!NOTE] **Méthode - Tangente et position de la courbe**
>
> Si \({f(x) = c_0 + c_1(x - a) + c_p(x - a)^p + o\big((x - a)^p\big)}\) avec \({p \geq 2}\) et \({c_p \neq 0}\), alors la tangente en \(a\) a pour équation \({y = c_0 + c_1(x - a)}\), et \({f(x) - c_0 - c_1(x - a)}\) est du signe de \({c_p(x - a)^p}\) près de \(a\) :
> - si \(p\) est pair, la courbe reste du même côté de sa tangente (au-dessus si \({c_p > 0}\)) ;
> - si \(p\) est impair, la courbe traverse sa tangente : point d’inflexion.

> [!NOTE] **Méthode - Asymptote oblique**
>
> Pour étudier \(f\) en \(\pm\infty\), on pose \({h = \dfrac{1}{x}}\) et on cherche un développement de la forme
>
> \[ f(x) = ax + b + \dfrac{c}{x} + o\left(\dfrac{1}{x}\right). \]
>
> La droite \({y = ax + b}\) est alors asymptote, et le signe de \(\dfrac{c}{x}\) donne la position de la courbe.

> [!NOTE] **Exercice résolu - Limite et asymptote**
>
> 1. Calculer \({\lim_{x \to 0} \dfrac{\sin x - x\cos x}{x^3}}\).
> 2. Étudier la branche infinie en \(+\infty\) de \({f(x) = \sqrt{x^2 + 2x + 3}}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Le dénominateur est d’ordre \(3\) : on développe le numérateur à l’ordre \(3\).

\[
\sin x - x\cos x = \left(x - \dfrac{x^3}{6}\right) - x\left(1 - \dfrac{x^2}{2}\right) + o(x^3) = \dfrac{x^3}{3} + o(x^3).
\]

Donc \({\dfrac{\sin x - x\cos x}{x^3} = \dfrac{1}{3} + o(1)}\), et la limite vaut \(\dfrac{1}{3}\).

**2.** Pour \({x > 0}\), on factorise \(x^2\) sous la racine :

\[
f(x) = x\sqrt{1 + \dfrac{2}{x} + \dfrac{3}{x^2}} = x\sqrt{1 + u}, \qquad u = \dfrac{2}{x} + \dfrac{3}{x^2} \to 0.
\]

Avec \({\sqrt{1 + u} = 1 + \dfrac{u}{2} - \dfrac{u^2}{8} + o(u^2)}\) et \({u^2 = \dfrac{4}{x^2} + o\left(\dfrac{1}{x^2}\right)}\) :

\[
\sqrt{1 + u} = 1 + \dfrac{1}{x} + \dfrac{3}{2x^2} - \dfrac{1}{2x^2} + o\left(\dfrac{1}{x^2}\right) = 1 + \dfrac{1}{x} + \dfrac{1}{x^2} + o\left(\dfrac{1}{x^2}\right).
\]

Donc

\[
f(x) = x + 1 + \dfrac{1}{x} + o\left(\dfrac{1}{x}\right).
\]

La droite d’équation \({y = x + 1}\) est asymptote à la courbe en \(+\infty\), et comme \({\dfrac{1}{x} > 0}\), la courbe est au-dessus de son asymptote pour \(x\) assez grand.

Vérification : \({x^2 + 2x + 3 = (x + 1)^2 + 2 > (x + 1)^2}\), donc \({f(x) > x + 1}\) pour tout \({x > -1}\).
{{% /details %}}
