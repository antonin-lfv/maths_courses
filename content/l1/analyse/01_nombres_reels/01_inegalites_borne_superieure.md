---
title: 'Inégalités, valeur absolue, borne supérieure'
weight: 1
cascade:
  type: docs
---

## Inégalités dans \(\mathbb{R}\)

> [!TIP] **Propriétés - Règles de calcul**
>
> Pour tous réels \(a\), \(b\), \(c\), \(d\) :
> - si \({a \leq b}\) et \({c \leq d}\), alors \({a + c \leq b + d}\) ;
> - si \({a \leq b}\) et \({c \geq 0}\), alors \({ac \leq bc}\) ; si \({c \leq 0}\), alors \({ac \geq bc}\) ;
> - si \({0 \leq a \leq b}\) et \({0 \leq c \leq d}\), alors \({ac \leq bd}\) ;
> - si \({0 < a \leq b}\), alors \({\dfrac{1}{b} \leq \dfrac{1}{a}}\).

> [!IMPORTANT] **Remarque**
>
> On ne soustrait pas et on ne divise pas des inégalités membre à membre. Pour encadrer \({a - c}\), on encadre \(-c\) puis on ajoute ; pour encadrer un quotient de nombres strictement positifs, on encadre l’inverse puis on multiplie.

## Valeur absolue

> [!TIP] **Définition**
>
> La **valeur absolue** d’un réel \(x\) est \({|x| = \max(x, -x)}\) : elle vaut \(x\) si \({x \geq 0}\), et \(-x\) sinon. Le réel \({|x - y|}\) est la **distance** entre \(x\) et \(y\).

> [!TIP] **Propriétés**
>
> Pour tous réels \(x\), \(y\) et tout réel \({a \geq 0}\) :
> - \({|x| = 0 \iff x = 0}\) ; \({|xy| = |x||y|}\) ; \({\sqrt{x^2} = |x|}\) ;
> - \({|x| \leq a \iff -a \leq x \leq a}\) ;
> - \({|x - y| \leq a \iff y - a \leq x \leq y + a}\) ;
> - **inégalité triangulaire** : \({|x + y| \leq |x| + |y|}\) ;
> - **seconde inégalité triangulaire** : \({\big||x| - |y|\big| \leq |x - y|}\).

{{% details title="Démonstration" closed="true" %}}
On a \({-|x| \leq x \leq |x|}\) et \({-|y| \leq y \leq |y|}\). En ajoutant : \({-(|x| + |y|) \leq x + y \leq |x| + |y|}\), ce qui équivaut à \({|x + y| \leq |x| + |y|}\).

Pour la seconde : \({|x| = |(x - y) + y| \leq |x - y| + |y|}\), donc \({|x| - |y| \leq |x - y|}\). En échangeant \(x\) et \(y\) : \({|y| - |x| \leq |x - y|}\). Ces deux inégalités donnent le résultat.
{{% /details %}}

## Majorants, minorants

> [!TIP] **Définition**
>
> Soit \(A\) une partie de \(\mathbb{R}\).
> - Un réel \(M\) est un **majorant** de \(A\) si \({\forall a \in A,\ a \leq M}\). On dit alors que \(A\) est **majorée**.
> - Un réel \(m\) est un **minorant** de \(A\) si \({\forall a \in A,\ a \geq m}\). On dit alors que \(A\) est **minorée**.
> - \(A\) est **bornée** si elle est majorée et minorée, ce qui équivaut à : \({\exists K \geq 0,\ \forall a \in A,\ |a| \leq K}\).
> - Le **maximum** de \(A\), s’il existe, est un majorant de \(A\) qui appartient à \(A\). On définit de même le **minimum**.

## Borne supérieure

> [!TIP] **Définition**
>
> La **borne supérieure** de \(A\), si elle existe, est le plus petit des majorants de \(A\), notée \(\sup A\). La **borne inférieure** est le plus grand des minorants, notée \(\inf A\).

> [!TIP] **Théorème - Propriété de la borne supérieure**
>
> Toute partie **non vide et majorée** de \(\mathbb{R}\) admet une borne supérieure. Toute partie non vide et minorée de \(\mathbb{R}\) admet une borne inférieure.

Cette propriété distingue \(\mathbb{R}\) de \(\mathbb{Q}\) : l’ensemble \({\{x \in \mathbb{Q},\ x^2 < 2\}}\) est non vide et majoré, mais n’a pas de borne supérieure dans \(\mathbb{Q}\). Tous les grands théorèmes d’analyse (suites monotones, valeurs intermédiaires, etc.) en découlent.

> [!TIP] **Théorème - Caractérisation de la borne supérieure**
>
> Soit \(A\) une partie non vide de \(\mathbb{R}\) et \(M\) un réel. Alors \({M = \sup A}\) si et seulement si :
> - \(M\) est un majorant de \(A\) ;
> - \({\forall \varepsilon > 0,\ \exists a \in A,\ M - \varepsilon < a}\).
>
> De même, \({m = \inf A}\) si et seulement si \(m\) minore \(A\) et \({\forall \varepsilon > 0,\ \exists a \in A,\ a < m + \varepsilon}\).

{{% details title="Démonstration" closed="true" %}}
La seconde condition dit qu’aucun réel \({M - \varepsilon}\) strictement inférieur à \(M\) n’est un majorant de \(A\). Avec la première, cela signifie exactement que \(M\) est le plus petit des majorants.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Si \(A\) a un maximum, alors \({\sup A = \max A}\). Mais la borne supérieure peut exister sans appartenir à \(A\) : \({\sup\,[0, 1[\, = 1}\), et \([0, 1[\) n’a pas de maximum.
> - Si \(A\) n’est pas majorée, on convient d’écrire \({\sup A = +\infty}\).

> [!NOTE] **Méthode - Déterminer une borne supérieure**
>
> 1. Trouver un majorant \(M\) de \(A\), que l’on pense être le plus petit.
> 2. Si \({M \in A}\), c’est le maximum, donc la borne supérieure.
> 3. Sinon, montrer que pour tout \({\varepsilon > 0}\) il existe un élément de \(A\) strictement supérieur à \({M - \varepsilon}\), ou exhiber une suite d’éléments de \(A\) qui converge vers \(M\).

{{% details title="Exemple" closed="true" %}}
Soit \({A = \left\{\dfrac{n}{n+1},\ n \in \mathbb{N}\right\}}\).

- \(0\) est un minorant et \({0 = \dfrac{0}{1} \in A}\) : \({\min A = \inf A = 0}\).
- Pour tout \(n\), \({\dfrac{n}{n+1} = 1 - \dfrac{1}{n+1} < 1}\) : \(1\) est un majorant, qui n’est pas atteint. Soit \({\varepsilon > 0}\). On a \({1 - \dfrac{1}{n+1} > 1 - \varepsilon}\) dès que \({n + 1 > \dfrac{1}{\varepsilon}}\), ce qui est vrai pour \(n\) assez grand. Donc \({\sup A = 1}\), et \(A\) n’a pas de maximum.
{{% /details %}}

## Partie entière

> [!TIP] **Propriété - \(\mathbb{R}\) est archimédien**
>
> Pour tout réel \(x\), il existe un entier naturel \(n\) tel que \({n > x}\).

{{% details title="Démonstration" closed="true" %}}
Sinon, \(\mathbb{N}\) serait majoré, donc aurait une borne supérieure \(s\). Le réel \({s - 1}\) n’étant pas un majorant, il existerait un entier \(n\) tel que \({n > s - 1}\), donc \({n + 1 > s}\) avec \({n + 1 \in \mathbb{N}}\) : contradiction.
{{% /details %}}

> [!TIP] **Définition**
>
> Pour tout réel \(x\), il existe un unique entier relatif \(n\) tel que \({n \leq x < n + 1}\). C’est la **partie entière** de \(x\), notée \(\lfloor x \rfloor\). On a donc
>
> \[ \lfloor x \rfloor \leq x < \lfloor x \rfloor + 1 \qquad \text{et} \qquad x - 1 < \lfloor x \rfloor \leq x. \]

{{% details title="Exemple" closed="true" %}}
\({\lfloor 3{,}7 \rfloor = 3}\), \({\lfloor 5 \rfloor = 5}\) et \({\lfloor -2{,}3 \rfloor = -3}\) (et non \(-2\)).
{{% /details %}}

## Densité

> [!TIP] **Théorème**
>
> \(\mathbb{Q}\) et \({\mathbb{R} \setminus \mathbb{Q}}\) sont **denses** dans \(\mathbb{R}\) : entre deux réels distincts, il existe toujours un rationnel et un irrationnel.

{{% details title="Démonstration" closed="true" %}}
Soient \({a < b}\) deux réels. On choisit un entier \({q \geq 1}\) tel que \({q > \dfrac{1}{b - a}}\), de sorte que \({qb - qa > 1}\). On pose \({p = \lfloor qa \rfloor + 1}\). Alors \({qa < p \leq qa + 1 < qb}\), donc \({a < \dfrac{p}{q} < b}\).

Pour un irrationnel : il existe un rationnel \(r\) tel que \({\dfrac{a}{\sqrt{2}} < r < \dfrac{b}{\sqrt{2}}}\), et l’on peut le choisir non nul (quitte à en reprendre un entre \(r\) et \(\dfrac{b}{\sqrt{2}}\)). Alors \({a < r\sqrt{2} < b}\) et \(r\sqrt{2}\) est irrationnel.
{{% /details %}}

> [!TIP] **Conséquence**
>
> Tout réel est limite d’une suite de rationnels, et limite d’une suite d’irrationnels. Par exemple, pour \({x \in \mathbb{R}}\), la suite des approximations décimales \({r_n = \dfrac{\lfloor 10^n x \rfloor}{10^n}}\) vérifie \({x - 10^{-n} < r_n \leq x}\).

## Intervalles

> [!TIP] **Théorème - Caractérisation des intervalles**
>
> Une partie \(I\) de \(\mathbb{R}\) est un intervalle si et seulement si elle est **convexe** : pour tous \(a\), \(b\) dans \(I\) avec \({a \leq b}\), on a \({[a, b] \subset I}\).

> [!NOTE] **Exercice résolu - Bornes d’un ensemble**
>
> Déterminer, si elles existent, les bornes supérieure et inférieure de \({A = \left\{(-1)^n + \dfrac{1}{n},\ n \in \mathbb{N}^*\right\}}\). Sont-elles atteintes ?

{{% details title="Solution commentée" closed="true" %}}
Notons \({u_n = (-1)^n + \dfrac{1}{n}}\).

**Borne supérieure.** Si \(n\) est pair, \({n \geq 2}\) et \({u_n = 1 + \dfrac{1}{n} \leq \dfrac{3}{2}}\). Si \(n\) est impair, \({u_n = -1 + \dfrac{1}{n} \leq 0}\). Donc \(\dfrac{3}{2}\) est un majorant de \(A\), et \({u_2 = \dfrac{3}{2} \in A}\). Ainsi \({\sup A = \max A = \dfrac{3}{2}}\).

**Borne inférieure.** Pour tout \(n\), \({u_n \geq -1 + \dfrac{1}{n} > -1}\) : \(-1\) est un minorant, qui n’est pas atteint. Pour \(n\) impair, \({u_n = -1 + \dfrac{1}{n}}\), qui tend vers \(-1\). Soit \({\varepsilon > 0}\) : il existe un entier impair \(n\) tel que \({\dfrac{1}{n} < \varepsilon}\), et alors \({u_n < -1 + \varepsilon}\). Donc \({\inf A = -1}\), et \(A\) n’a pas de minimum.
{{% /details %}}
