---
title: 'Dérivée, Rolle et accroissements finis'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(f\) est une fonction définie sur un intervalle \(I\) non réduit à un point, à valeurs réelles.

## Nombre dérivé

> [!TIP] **Définition**
>
> \(f\) est **dérivable en \({a \in I}\)** si le taux d’accroissement \({\dfrac{f(x) - f(a)}{x - a}}\) admet une limite finie quand \(x\) tend vers \(a\). Cette limite est le **nombre dérivé** de \(f\) en \(a\) :
>
> \[ f'(a) = \lim_{x \to a} \dfrac{f(x) - f(a)}{x - a} = \lim_{h \to 0} \dfrac{f(a + h) - f(a)}{h}. \]
>
> La droite d’équation \({y = f(a) + f'(a)(x - a)}\) est la **tangente** à la courbe de \(f\) au point d’abscisse \(a\).
>
> On définit de même la dérivée à droite \(f'_d(a)\) et la dérivée à gauche \(f'_g(a)\), avec des limites à droite et à gauche.

> [!TIP] **Propriété - Développement limité d’ordre 1**
>
> \(f\) est dérivable en \(a\) si et seulement s’il existe un réel \(\ell\) tel que
>
> \[ f(a + h) = f(a) + \ell h + o(h) \quad \text{quand } h \to 0, \]
>
> et alors \({\ell = f'(a)}\). En particulier, **toute fonction dérivable en \(a\) est continue en \(a\)**.

> [!IMPORTANT] **Remarque**
>
> La réciproque est fausse : \({x \mapsto |x|}\) est continue en \(0\), mais non dérivable en \(0\) (dérivée à gauche \(-1\), à droite \(1\)). De même, \({x \mapsto \sqrt{x}}\) est continue en \(0\) mais non dérivable : son taux d’accroissement \(\dfrac{1}{\sqrt{x}}\) tend vers \(+\infty\) (tangente verticale).

## Opérations

> [!TIP] **Théorème**
>
> Si \(f\) et \(g\) sont dérivables en \(a\) :
> - \({(f + g)'(a) = f'(a) + g'(a)}\) et \({(\lambda f)'(a) = \lambda f'(a)}\) ;
> - \({(fg)'(a) = f'(a)g(a) + f(a)g'(a)}\) ;
> - si \({g(a) \neq 0}\), \({\left(\dfrac{f}{g}\right)'(a) = \dfrac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}}\).
>
> **Composée** : si \(f\) est dérivable en \(a\) et \(g\) dérivable en \(f(a)\), alors \({(g \circ f)'(a) = f'(a) \times g'(f(a))}\).
>
> **Réciproque** : si \(f\) est une bijection continue et strictement monotone de \(I\) sur \(J\), dérivable en \(a\) avec \({f'(a) \neq 0}\), alors \(f^{-1}\) est dérivable en \({b = f(a)}\) et
>
> \[ \left(f^{-1}\right)'(b) = \dfrac{1}{f'(a)} = \dfrac{1}{f'\left(f^{-1}(b)\right)}. \]

## Extremums locaux

> [!TIP] **Définition**
>
> \(f\) admet un **maximum local** en \(a\) s’il existe \({\eta > 0}\) tel que \({f(x) \leq f(a)}\) pour tout \({x \in I \cap [a - \eta, a + \eta]}\). On définit de même un minimum local. Un **extremum** est un maximum ou un minimum.

> [!TIP] **Théorème - Condition nécessaire d’extremum**
>
> Si \(f\) admet un extremum local en un point \(a\) **intérieur** à \(I\) et si \(f\) est dérivable en \(a\), alors \({f'(a) = 0}\).

{{% details title="Démonstration" closed="true" %}}
Cas d’un maximum local. Pour \({x > a}\) proche de \(a\), \({\dfrac{f(x) - f(a)}{x - a} \leq 0}\), donc à la limite \({f'(a) \leq 0}\). Pour \({x < a}\) proche de \(a\), le taux est positif, donc \({f'(a) \geq 0}\). Ainsi \({f'(a) = 0}\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - La condition n’est pas suffisante : pour \({f(x) = x^3}\), \({f'(0) = 0}\) sans extremum en \(0\).
> - Elle ne vaut qu’en un point intérieur : sur \([0, 1]\), \({f(x) = x}\) a un maximum en \(1\) avec \({f'(1) = 1}\).
> - Un point où \({f'(a) = 0}\) est un **point critique**.

## Théorème de Rolle et accroissements finis

> [!TIP] **Théorème de Rolle**
>
> Soit \(f\) continue sur \([a, b]\), dérivable sur \({]a, b[}\), avec \({f(a) = f(b)}\). Alors il existe \({c \in\, ]a, b[}\) tel que \({f'(c) = 0}\).

{{% details title="Démonstration" closed="true" %}}
\(f\) est continue sur le segment \([a, b]\) : elle y atteint son minimum \(m\) et son maximum \(M\). Si \({m = M}\), \(f\) est constante et tout \(c\) convient. Sinon, l’une des deux valeurs est différente de \({f(a) = f(b)}\), donc est atteinte en un point \(c\) de \({]a, b[}\). C’est un extremum en un point intérieur, donc \({f'(c) = 0}\).
{{% /details %}}

> [!TIP] **Théorème des accroissements finis**
>
> Soit \(f\) continue sur \([a, b]\) et dérivable sur \({]a, b[}\). Il existe \({c \in\, ]a, b[}\) tel que
>
> \[ f(b) - f(a) = f'(c)(b - a). \]

{{% details title="Démonstration" closed="true" %}}
On applique le théorème de Rolle à \({g(x) = f(x) - \dfrac{f(b) - f(a)}{b - a}(x - a)}\), qui est continue sur \([a, b]\), dérivable sur \({]a, b[}\), et vérifie \({g(a) = g(b) = f(a)}\). Il existe \(c\) tel que \({g'(c) = 0}\), soit \({f'(c) = \dfrac{f(b) - f(a)}{b - a}}\).
{{% /details %}}

> [!TIP] **Inégalité des accroissements finis**
>
> Soit \(f\) dérivable sur un intervalle \(I\). S’il existe \({k \geq 0}\) tel que \({|f'(t)| \leq k}\) pour tout \({t \in I}\), alors pour tous \(x\), \(y\) dans \(I\) :
>
> \[ |f(x) - f(y)| \leq k|x - y|. \]
>
> On dit que \(f\) est **\(k\)-lipschitzienne** sur \(I\).

> [!TIP] **Théorème - Dérivée et variations**
>
> Soit \(f\) dérivable sur un **intervalle** \(I\).
> - \(f\) est constante sur \(I\) si et seulement si \({f' = 0}\) sur \(I\).
> - \(f\) est croissante sur \(I\) si et seulement si \({f' \geq 0}\) sur \(I\).
> - Si \({f' > 0}\) sur \(I\), sauf éventuellement en un nombre fini de points, alors \(f\) est strictement croissante sur \(I\).

> [!TIP] **Théorème de la limite de la dérivée**
>
> Soit \(f\) continue sur \(I\), dérivable sur \({I \setminus \{a\}}\). Si \(f'(x)\) tend vers un réel \(\ell\) quand \(x\) tend vers \(a\), alors \(f\) est dérivable en \(a\) et \({f'(a) = \ell}\). Si \(f'(x)\) tend vers \(\pm\infty\), alors \(f\) n’est pas dérivable en \(a\).

> [!NOTE] **Méthode - Suite récurrente et point fixe**
>
> Soit \({u_{n+1} = f(u_n)}\) avec \(f\) dérivable sur un intervalle stable \(I\), \({|f'| \leq k < 1}\) sur \(I\), et \({\ell \in I}\) un point fixe de \(f\). L’inégalité des accroissements finis donne \({|u_{n+1} - \ell| = |f(u_n) - f(\ell)| \leq k|u_n - \ell|}\), puis par récurrence
>
> \[ |u_n - \ell| \leq k^n|u_0 - \ell|. \]
>
> La suite converge vers \(\ell\), avec une vitesse géométrique.

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = \cos x}\) sur \({I = [0, 1]}\). Pour \({x \in [0, 1]}\), \({\cos 1 \leq \cos x \leq 1}\), donc \(I\) est stable. De plus \({|f'(x)| = \sin x \leq \sin 1 < 1}\). L’équation \({\cos x = x}\) a une solution \(\ell\) dans \([0, 1]\) (théorème des valeurs intermédiaires appliqué à \({x \mapsto \cos x - x}\)). Toute suite \({u_{n+1} = \cos(u_n)}\) avec \({u_0 \in [0, 1]}\) converge donc vers \(\ell\), avec \({|u_n - \ell| \leq (\sin 1)^n}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Un encadrement par les accroissements finis**
>
> Montrer que, pour tout réel \({x > 0}\), \({\dfrac{1}{x + 1} < \ln(x + 1) - \ln(x) < \dfrac{1}{x}}\). En déduire la limite de \({u_n = \displaystyle\sum_{k=1}^{n} \dfrac{1}{k}}\).

{{% details title="Solution commentée" closed="true" %}}
Soit \({x > 0}\). La fonction \(\ln\) est continue sur \({[x, x + 1]}\) et dérivable sur \({]x, x + 1[}\). D’après le théorème des accroissements finis, il existe \({c \in\, ]x, x + 1[}\) tel que

\[
\ln(x + 1) - \ln(x) = \dfrac{1}{c}\big((x + 1) - x\big) = \dfrac{1}{c}.
\]

Comme \({0 < x < c < x + 1}\), on a \({\dfrac{1}{x + 1} < \dfrac{1}{c} < \dfrac{1}{x}}\), d’où l’encadrement.

En particulier, pour tout entier \({k \geq 1}\), \({\dfrac{1}{k} > \ln(k + 1) - \ln(k)}\). En sommant de \({k = 1}\) à \(n\), la somme de droite est télescopique :

\[
u_n > \sum_{k=1}^{n} \big(\ln(k + 1) - \ln(k)\big) = \ln(n + 1) - \ln(1) = \ln(n + 1).
\]

Comme \({\ln(n + 1) \to +\infty}\), le théorème de comparaison donne \({u_n \to +\infty}\).
{{% /details %}}
