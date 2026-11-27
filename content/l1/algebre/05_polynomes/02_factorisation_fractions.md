---
title: 'Factorisation et fractions rationnelles'
weight: 2
cascade:
  type: docs
---

## Arithmétique des polynômes

L’arithmétique de \(\mathbb{K}[X]\) ressemble à celle de \(\mathbb{Z}\), le degré jouant le rôle de la valeur absolue.

> [!TIP] **Définition et théorème**
>
> Soient \(A\) et \(B\) deux polynômes non tous deux nuls. Il existe un unique polynôme **unitaire** \(D\) qui divise \(A\) et \(B\) et qui est de degré maximal : c’est le **PGCD** de \(A\) et \(B\). On l’obtient par l’algorithme d’Euclide (dernier reste non nul, rendu unitaire), et il existe des polynômes \(U\) et \(V\) tels que \({AU + BV = D}\).
>
> \(A\) et \(B\) sont **premiers entre eux** si leur PGCD est \(1\), ce qui équivaut à l’existence de \(U\), \(V\) tels que \({AU + BV = 1}\) (théorème de Bézout). Le théorème de Gauss reste vrai : si \({A \mid BC}\) et si \(A\) est premier avec \(B\), alors \({A \mid C}\).

> [!TIP] **Définition**
>
> Un polynôme \(P\) de degré au moins \(1\) est **irréductible** dans \(\mathbb{K}[X]\) si ses seuls diviseurs sont les constantes non nulles et les polynômes \(\lambda P\) avec \({\lambda \in \mathbb{K}^*}\).

## Factorisation dans \(\mathbb{C}[X]\)

> [!TIP] **Théorème de d’Alembert-Gauss (admis)**
>
> Tout polynôme non constant de \(\mathbb{C}[X]\) admet au moins une racine dans \(\mathbb{C}\).

> [!TIP] **Théorème**
>
> - Les polynômes irréductibles de \(\mathbb{C}[X]\) sont les polynômes de degré \(1\).
> - Tout polynôme \(P\) de \(\mathbb{C}[X]\) de degré \({n \geq 1}\) est **scindé** : il s’écrit
>
> \[ P = \lambda (X - a_1)^{m_1} (X - a_2)^{m_2} \cdots (X - a_r)^{m_r}, \]
>
> où \(\lambda\) est le coefficient dominant, \({a_1, \dots, a_r}\) les racines distinctes de \(P\) et \(m_i\) leurs multiplicités, avec \({m_1 + \dots + m_r = n}\). Un polynôme complexe de degré \(n\) a donc exactement \(n\) racines comptées avec multiplicité.

{{% details title="Exemple" closed="true" %}}
Les racines de \({X^n - 1}\) sont les \(n\) racines \(n\)-ièmes de l’unité, toutes simples :

\[
X^n - 1 = \prod_{k=0}^{n-1} \left(X - e^{2ik\pi/n}\right).
\]
{{% /details %}}

## Factorisation dans \(\mathbb{R}[X]\)

> [!TIP] **Propriété**
>
> Soit \({P \in \mathbb{R}[X]}\) et \(a\) un complexe. Si \(a\) est racine de \(P\) de multiplicité \(m\), alors \(\overline{a}\) est aussi racine de \(P\), de même multiplicité.

{{% details title="Démonstration" closed="true" %}}
Les coefficients de \(P\) et de ses dérivées sont réels, donc \({P^{(k)}(\overline{a}) = \overline{P^{(k)}(a)}}\) pour tout \(k\). Les dérivées s’annulent donc aux mêmes ordres en \(a\) et en \(\overline{a}\).
{{% /details %}}

> [!TIP] **Théorème**
>
> Les polynômes irréductibles de \(\mathbb{R}[X]\) sont :
> - les polynômes de degré \(1\) ;
> - les polynômes de degré \(2\) à discriminant strictement négatif.
>
> Tout polynôme réel non constant s’écrit de manière unique (à l’ordre près) comme produit de son coefficient dominant et de polynômes irréductibles unitaires.

> [!NOTE] **Méthode - Factoriser dans \(\mathbb{R}[X]\)**
>
> On factorise d’abord dans \(\mathbb{C}[X]\), puis on regroupe chaque racine non réelle \(a\) avec sa conjuguée :
>
> \[ (X - a)(X - \overline{a}) = X^2 - 2\,\mathrm{Re}(a)X + |a|^2. \]

{{% details title="Exemple" closed="true" %}}
Factorisons \({P = X^4 + 4}\). Ses racines complexes sont les racines quatrièmes de \({-4 = 4e^{i\pi}}\) : \({\sqrt{2}\,e^{i(\pi/4 + k\pi/2)}}\), soit \({1 + i}\), \({-1 + i}\), \({-1 - i}\), \({1 - i}\).

On regroupe les conjuguées : \({(X - 1 - i)(X - 1 + i) = X^2 - 2X + 2}\) et \({(X + 1 - i)(X + 1 + i) = X^2 + 2X + 2}\). Donc

\[
X^4 + 4 = \left(X^2 - 2X + 2\right)\left(X^2 + 2X + 2\right).
\]

Vérification : \({(X^2 + 2)^2 - (2X)^2 = X^4 + 4X^2 + 4 - 4X^2 = X^4 + 4}\).
{{% /details %}}

## Relations entre coefficients et racines

> [!TIP] **Propriété**
>
> Soit \({P = a_n X^n + a_{n-1}X^{n-1} + \dots + a_0}\) un polynôme scindé de degré \(n\), de racines \({x_1, \dots, x_n}\) comptées avec multiplicité. Alors
>
> \[ x_1 + x_2 + \dots + x_n = -\dfrac{a_{n-1}}{a_n} \qquad \text{et} \qquad x_1 x_2 \cdots x_n = (-1)^n \dfrac{a_0}{a_n}. \]
>
> Pour \({n = 3}\), avec \({P = aX^3 + bX^2 + cX + d}\) : \({x_1 + x_2 + x_3 = -\dfrac{b}{a}}\), \({x_1x_2 + x_1x_3 + x_2x_3 = \dfrac{c}{a}}\) et \({x_1x_2x_3 = -\dfrac{d}{a}}\).

## Fractions rationnelles

> [!TIP] **Définition**
>
> Une **fraction rationnelle** est un quotient \({F = \dfrac{P}{Q}}\) de deux polynômes, avec \({Q \neq 0}\). L’ensemble des fractions rationnelles est noté \(\mathbb{K}(X)\). Quand \(P\) et \(Q\) sont premiers entre eux (forme irréductible), les racines de \(Q\) sont les **pôles** de \(F\) ; la multiplicité d’un pôle est sa multiplicité comme racine de \(Q\).

> [!TIP] **Théorème - Décomposition en éléments simples dans \(\mathbb{C}(X)\)**
>
> Soit \({F = \dfrac{P}{Q}}\) sous forme irréductible, avec \({Q = (X - a_1)^{m_1} \cdots (X - a_r)^{m_r}}\). Il existe un unique polynôme \(E\) (la **partie entière**, quotient de la division euclidienne de \(P\) par \(Q\)) et des complexes \(\lambda_{i,k}\) uniques tels que
>
> \[ F = E + \sum_{i=1}^{r} \left( \dfrac{\lambda_{i,1}}{X - a_i} + \dfrac{\lambda_{i,2}}{(X - a_i)^2} + \dots + \dfrac{\lambda_{i,m_i}}{(X - a_i)^{m_i}} \right). \]

> [!TIP] **Théorème - Décomposition dans \(\mathbb{R}(X)\)**
>
> Dans \(\mathbb{R}(X)\), on factorise \(Q\) en irréductibles réels. Chaque facteur \({(X - a)^m}\) fournit des termes \(\dfrac{\lambda_k}{(X - a)^k}\), et chaque facteur \({(X^2 + pX + q)^m}\) de discriminant négatif fournit des termes \(\dfrac{\alpha_k X + \beta_k}{(X^2 + pX + q)^k}\), pour \({1 \leq k \leq m}\), avec des coefficients réels.

> [!NOTE] **Méthode - Calculer les coefficients**
>
> 1. Si \({\deg P \geq \deg Q}\), calculer la partie entière par division euclidienne.
> 2. **Pôle simple \(a\)** : le coefficient de \(\dfrac{1}{X - a}\) s’obtient en multipliant \(F\) par \({X - a}\) puis en évaluant en \(a\). Il vaut aussi \(\dfrac{P(a)}{Q'(a)}\).
> 3. **Pôle multiple \(a\) d’ordre \(m\)** : multiplier par \({(X - a)^m}\) et évaluer en \(a\) donne le coefficient de \(\dfrac{1}{(X - a)^m}\).
> 4. Pour les coefficients restants : évaluer en une valeur simple, multiplier par \(X\) et regarder la limite en \(+\infty\), ou utiliser la parité.

{{% details title="Exemple" closed="true" %}}
Décomposons \({F = \dfrac{X + 3}{(X - 1)(X + 2)}}\). Le degré du numérateur est strictement inférieur à celui du dénominateur : la partie entière est nulle, et

\[
F = \dfrac{a}{X - 1} + \dfrac{b}{X + 2}.
\]

- On multiplie par \({X - 1}\) et on évalue en \(1\) : \({a = \dfrac{1 + 3}{1 + 2} = \dfrac{4}{3}}\).
- On multiplie par \({X + 2}\) et on évalue en \(-2\) : \({b = \dfrac{-2 + 3}{-2 - 1} = -\dfrac{1}{3}}\).

Vérification en \(0\) : \({F(0) = -\dfrac{3}{2}}\) et \({-\dfrac{4}{3} - \dfrac{1}{6} = -\dfrac{9}{6} = -\dfrac{3}{2}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Pôle double et facteur de degré 2**
>
> Décomposer en éléments simples dans \(\mathbb{R}(X)\) la fraction \({F = \dfrac{X^2 + 2}{(X - 1)^2(X^2 + 1)}}\).

{{% details title="Solution commentée" closed="true" %}}
Le degré du numérateur (\(2\)) est inférieur à celui du dénominateur (\(4\)) : pas de partie entière. La forme de la décomposition est

\[
F = \dfrac{a}{X - 1} + \dfrac{b}{(X - 1)^2} + \dfrac{cX + d}{X^2 + 1}.
\]

**Coefficient \(b\).** On multiplie par \({(X-1)^2}\) et on évalue en \(1\) : \({b = \dfrac{1 + 2}{1 + 1} = \dfrac{3}{2}}\).

**Coefficients \(c\) et \(d\).** On multiplie par \({X^2 + 1}\) et on évalue en \(i\) :

\[
ci + d = \dfrac{i^2 + 2}{(i - 1)^2} = \dfrac{1}{-2i} = \dfrac{i}{2}.
\]

Comme \(c\) et \(d\) sont réels, \({c = \dfrac{1}{2}}\) et \({d = 0}\).

**Coefficient \(a\).** On multiplie par \(X\) et on fait tendre \(X\) vers \(+\infty\) : \(XF(X)\) tend vers \(0\), et le membre de droite tend vers \({a + c}\). Donc \({a = -c = -\dfrac{1}{2}}\).

\[
F = -\dfrac{1}{2(X - 1)} + \dfrac{3}{2(X - 1)^2} + \dfrac{X}{2(X^2 + 1)}.
\]

**Vérification en \(0\).** \({F(0) = \dfrac{2}{1 \times 1} = 2}\), et le membre de droite donne \({\dfrac{1}{2} + \dfrac{3}{2} + 0 = 2}\).
{{% /details %}}
