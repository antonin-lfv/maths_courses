---
title: 'Polynômes, division euclidienne, racines'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\).

## L’ensemble \(\mathbb{K}[X]\)

> [!TIP] **Définition**
>
> Un **polynôme** à coefficients dans \(\mathbb{K}\) est une expression
>
> \[ P = a_0 + a_1 X + a_2 X^2 + \dots + a_n X^n = \sum_{k=0}^{n} a_k X^k, \]
>
> où les \(a_k\) sont des éléments de \(\mathbb{K}\), appelés **coefficients**. Deux polynômes sont égaux si et seulement s’ils ont les mêmes coefficients. L’ensemble des polynômes est noté \(\mathbb{K}[X]\).
>
> Si \({P \neq 0}\), le plus grand entier \(n\) tel que \({a_n \neq 0}\) est le **degré** de \(P\), noté \(\deg P\) ; \(a_n\) est son **coefficient dominant**. Si \({a_n = 1}\), \(P\) est **unitaire**. Par convention, \({\deg 0 = -\infty}\). On note \(\mathbb{K}_n[X]\) l’ensemble des polynômes de degré inférieur ou égal à \(n\).

> [!TIP] **Propriétés**
>
> Pour tous polynômes \(P\) et \(Q\) :
> - \({\deg(P + Q) \leq \max(\deg P, \deg Q)}\), avec égalité si \({\deg P \neq \deg Q}\) ;
> - \({\deg(PQ) = \deg P + \deg Q}\) ;
> - si \({PQ = 0}\), alors \({P = 0}\) ou \({Q = 0}\) (intégrité).

> [!TIP] **Définition - Polynôme dérivé**
>
> Le polynôme dérivé de \({P = \displaystyle\sum_{k=0}^{n} a_k X^k}\) est \({P' = \displaystyle\sum_{k=1}^{n} k a_k X^{k-1}}\). On a \({(P + Q)' = P' + Q'}\), \({(PQ)' = P'Q + PQ'}\) et, si \({\deg P \geq 1}\), \({\deg P' = \deg P - 1}\).

## Division euclidienne

> [!TIP] **Définition**
>
> \(B\) **divise** \(A\) dans \(\mathbb{K}[X]\), noté \({B \mid A}\), s’il existe \({Q \in \mathbb{K}[X]}\) tel que \({A = BQ}\).

> [!TIP] **Théorème - Division euclidienne**
>
> Soient \(A\) et \(B\) deux polynômes de \(\mathbb{K}[X]\) avec \({B \neq 0}\). Il existe un unique couple \((Q, R)\) de polynômes tel que
>
> \[ A = BQ + R \qquad \text{et} \qquad \deg R < \deg B. \]

{{% details title="Démonstration" closed="true" %}}
**Unicité.** Si \({A = BQ_1 + R_1 = BQ_2 + R_2}\), alors \({B(Q_1 - Q_2) = R_2 - R_1}\). Si \({Q_1 \neq Q_2}\), le membre de gauche est de degré au moins \(\deg B\), alors que celui de droite est de degré strictement inférieur : impossible. Donc \({Q_1 = Q_2}\), puis \({R_1 = R_2}\).

**Existence.** Par récurrence forte sur le degré de \(A\), en notant \({p = \deg B}\) et \(b\) le coefficient dominant de \(B\). Si \({\deg A < p}\), le couple \({(0, A)}\) convient. Sinon, soit \({n = \deg A \geq p}\) et \(a\) le coefficient dominant de \(A\). Le polynôme \({A_1 = A - \dfrac{a}{b}X^{n-p}B}\) est de degré strictement inférieur à \(n\) : par hypothèse de récurrence, \({A_1 = BQ_1 + R}\) avec \({\deg R < p}\). Alors \({A = B\left(Q_1 + \dfrac{a}{b}X^{n-p}\right) + R}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Division de \({A = 2X^4 - 3X^3 + X + 5}\) par \({B = X^2 - X + 2}\).

- \({A - 2X^2 B = -X^3 - 4X^2 + X + 5}\) ;
- \({(-X^3 - 4X^2 + X + 5) + XB = -5X^2 + 3X + 5}\) ;
- \({(-5X^2 + 3X + 5) + 5B = -2X + 15}\).

Donc \({Q = 2X^2 - X - 5}\) et \({R = -2X + 15}\).

Vérification du terme constant : \({2 \times (-5) + 15 = 5}\).
{{% /details %}}

## Racines

> [!TIP] **Définition et propriété**
>
> Un élément \(a\) de \(\mathbb{K}\) est une **racine** de \(P\) si \({P(a) = 0}\).
>
> Le reste de la division euclidienne de \(P\) par \({X - a}\) est le polynôme constant \(P(a)\). Par conséquent, \(a\) est racine de \(P\) si et seulement si \({X - a}\) divise \(P\).

{{% details title="Démonstration" closed="true" %}}
On écrit \({P = (X - a)Q + R}\) avec \({\deg R < 1}\) : \(R\) est une constante \(c\). En évaluant en \(a\), \({P(a) = c}\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Si \({a_1, \dots, a_r}\) sont des racines deux à deux distinctes de \(P\), alors \({(X - a_1) \cdots (X - a_r)}\) divise \(P\).
> - Un polynôme non nul de degré \(n\) a au plus \(n\) racines distinctes.
> - Un polynôme de \(\mathbb{K}_n[X]\) qui a au moins \({n + 1}\) racines est nul. En particulier, un polynôme qui a une infinité de racines est nul.

> [!IMPORTANT] **Remarque**
>
> La dernière propriété sert à montrer que deux polynômes sont égaux : si \(P\) et \(Q\) sont de degré au plus \(n\) et coïncident en \({n + 1}\) points, alors \({P = Q}\). On peut ainsi identifier un polynôme et sa fonction polynomiale sur \(\mathbb{R}\) ou \(\mathbb{C}\).

## Multiplicité

> [!TIP] **Définition**
>
> Soit \(P\) un polynôme non nul, \({a \in \mathbb{K}}\) et \({m \in \mathbb{N}^*}\). On dit que \(a\) est une racine de **multiplicité** \(m\) de \(P\) si \({(X - a)^m}\) divise \(P\) et \({(X - a)^{m+1}}\) ne divise pas \(P\). Cela revient à écrire \({P = (X - a)^m Q}\) avec \({Q(a) \neq 0}\).
>
> Une racine de multiplicité \(1\) est dite **simple**, de multiplicité \(2\) **double**.

> [!TIP] **Théorème - Formule de Taylor**
>
> Pour tout polynôme \(P\) de degré inférieur ou égal à \(n\) et tout \({a \in \mathbb{K}}\) :
>
> \[ P(X) = \sum_{k=0}^{n} \dfrac{P^{(k)}(a)}{k!}(X - a)^k. \]

> [!TIP] **Théorème - Caractérisation de la multiplicité**
>
> \(a\) est racine de multiplicité \(m\) de \(P\) si et seulement si
>
> \[ P(a) = P'(a) = \dots = P^{(m-1)}(a) = 0 \qquad \text{et} \qquad P^{(m)}(a) \neq 0. \]

{{% details title="Démonstration" closed="true" %}}
D’après la formule de Taylor, si les dérivées en \(a\) sont nulles jusqu’à l’ordre \({m - 1}\) et \({P^{(m)}(a) \neq 0}\), alors

\[
P = (X - a)^m \sum_{k=m}^{n} \dfrac{P^{(k)}(a)}{k!}(X - a)^{k-m} = (X - a)^m Q, \qquad Q(a) = \dfrac{P^{(m)}(a)}{m!} \neq 0.
\]

Réciproquement, si \(a\) est de multiplicité \(m\), soit \(r\) le plus petit indice tel que \({P^{(r)}(a) \neq 0}\) (il existe car \({P \neq 0}\)). D’après le sens direct, \(a\) est de multiplicité \(r\), donc \({r = m}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Soit \({P = X^4 - 5X^3 + 6X^2 + 4X - 8}\). On a \({P(2) = 16 - 40 + 24 + 8 - 8 = 0}\).

\({P' = 4X^3 - 15X^2 + 12X + 4}\) et \({P'(2) = 32 - 60 + 24 + 4 = 0}\).

\({P'' = 12X^2 - 30X + 12}\) et \({P''(2) = 48 - 60 + 12 = 0}\).

\({P''' = 24X - 30}\) et \({P'''(2) = 18 \neq 0}\).

Donc \(2\) est racine triple, et \({P = (X - 2)^3(X + 1)}\) (le dernier facteur s’obtient avec le coefficient dominant et le terme constant : \({(-2)^3 \times 1 = -8}\)).
{{% /details %}}

> [!NOTE] **Exercice résolu - Reste d’une division sans la poser**
>
> Soit \(n\) un entier, \({n \geq 2}\). Déterminer le reste de la division euclidienne de \({X^n}\) par \({(X - 1)(X - 3)}\), puis par \({(X - 1)^2}\).

{{% details title="Solution commentée" closed="true" %}}
**Par \({(X - 1)(X - 3)}\).** Le diviseur est de degré \(2\), donc le reste s’écrit \({R = aX + b}\) : \({X^n = (X-1)(X-3)Q + aX + b}\). On évalue en les racines du diviseur :

\[
\begin{cases} a + b = 1 \\ 3a + b = 3^n \end{cases}
\qquad \text{d’où} \qquad a = \dfrac{3^n - 1}{2}, \quad b = \dfrac{3 - 3^n}{2}.
\]

Le reste est \({R = \dfrac{3^n - 1}{2}X + \dfrac{3 - 3^n}{2}}\).

**Par \({(X - 1)^2}\).** On écrit \({X^n = (X-1)^2 Q + aX + b}\). Il n’y a qu’une racine : on obtient une seconde équation en dérivant.

- En évaluant en \(1\) : \({a + b = 1}\).
- En dérivant : \({nX^{n-1} = 2(X-1)Q + (X-1)^2Q' + a}\), puis en évaluant en \(1\) : \({a = n}\).

Le reste est \({R = nX + 1 - n}\).
{{% /details %}}
