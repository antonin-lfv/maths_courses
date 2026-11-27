---
title: 'Équations du second ordre à coefficients constants'
weight: 2
cascade:
  type: docs
---

## Équation homogène

> [!TIP] **Définition**
>
> Soient \(a\), \(b\), \(c\) trois réels avec \({a \neq 0}\), et \(f\) une fonction continue sur un intervalle \(I\). On considère
>
> \[ (E) : \quad ay'' + by' + cy = f(x) \qquad \text{et} \qquad (E_0) : \quad ay'' + by' + cy = 0. \]
>
> L’**équation caractéristique** est \({ar^2 + br + c = 0}\), de discriminant \({\Delta = b^2 - 4ac}\).

L’idée : \({x \mapsto e^{rx}}\) est solution de \((E_0)\) si et seulement si \({ar^2 + br + c = 0}\).

> [!TIP] **Théorème - Solutions réelles de l’équation homogène**
>
> Les solutions de \((E_0)\) sur \(\mathbb{R}\) sont, avec \(\lambda\), \(\mu\) réels quelconques :
> - si \({\Delta > 0}\), deux racines réelles \(r_1\), \(r_2\) :
>
> \[ y(x) = \lambda e^{r_1 x} + \mu e^{r_2 x} ; \]
>
> - si \({\Delta = 0}\), une racine double \(r\) :
>
> \[ y(x) = (\lambda x + \mu)e^{rx} ; \]
>
> - si \({\Delta < 0}\), deux racines complexes conjuguées \({\alpha \pm i\beta}\) :
>
> \[ y(x) = e^{\alpha x}\big(\lambda\cos(\beta x) + \mu\sin(\beta x)\big). \]
>
> L’ensemble des solutions est un plan vectoriel.

{{% details title="Démonstration" closed="true" %}}
Soit \(r\) une racine (réelle ou complexe) de l’équation caractéristique. Pour \(y\) deux fois dérivable, on pose \({y(x) = z(x)e^{rx}}\). Un calcul donne

\[
ay'' + by' + cy = \big(az'' + (2ar + b)z' + (ar^2 + br + c)z\big)e^{rx} = \big(az'' + (2ar + b)z'\big)e^{rx}.
\]

Donc \(y\) est solution si et seulement si \(z'\) est solution de l’équation du premier ordre \({aw' + (2ar + b)w = 0}\).

- Si \(r\) est racine double, \({2ar + b = 0}\) : \({z'' = 0}\), donc \({z(x) = \lambda x + \mu}\).
- Sinon, l’autre racine est \({r' = -\dfrac{b}{a} - r}\) et \({-\dfrac{2ar + b}{a} = r' - r}\) : \({z'(x) = ke^{(r' - r)x}}\), donc \({z(x) = \lambda' e^{(r' - r)x} + \mu}\), et \({y(x) = \lambda' e^{r'x} + \mu e^{rx}}\).

Quand \({\Delta < 0}\), on obtient les solutions complexes \({\lambda' e^{(\alpha + i\beta)x} + \mu' e^{(\alpha - i\beta)x}}\) ; celles qui sont réelles sont les fonctions \({e^{\alpha x}(\lambda\cos\beta x + \mu\sin\beta x)}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
- \({y'' - y' - 6y = 0}\) : \({r^2 - r - 6 = (r - 3)(r + 2)}\), solutions \({\lambda e^{3x} + \mu e^{-2x}}\).
- \({y'' + 6y' + 9y = 0}\) : \({(r + 3)^2 = 0}\), solutions \({(\lambda x + \mu)e^{-3x}}\).
- \({y'' + 2y' + 5y = 0}\) : \({\Delta = -16}\), racines \({-1 \pm 2i}\), solutions \({e^{-x}(\lambda\cos 2x + \mu\sin 2x)}\).
- \({y'' + \omega^2 y = 0}\) (\({\omega > 0}\)) : racines \({\pm i\omega}\), solutions \({\lambda\cos(\omega x) + \mu\sin(\omega x)}\), que l’on écrit aussi \({A\cos(\omega x - \varphi)}\).
{{% /details %}}

## Équation avec second membre

> [!TIP] **Théorème**
>
> - **Structure** : les solutions de \((E)\) sont les sommes d’une solution particulière de \((E)\) et d’une solution quelconque de \((E_0)\).
> - **Problème de Cauchy** : pour tous \({x_0 \in I}\) et \(y_0\), \(y_1\) réels, il existe une unique solution de \((E)\) sur \(I\) telle que \({y(x_0) = y_0}\) et \({y'(x_0) = y_1}\).
> - **Superposition** : une solution particulière pour le second membre \({f_1 + f_2}\) s’obtient en ajoutant une solution particulière pour \(f_1\) et une pour \(f_2\).

> [!NOTE] **Méthode - Second membre \({P(x)e^{mx}}\)**
>
> Si \({f(x) = P(x)e^{mx}}\) avec \(P\) polynôme et \(m\) réel ou complexe, on cherche une solution particulière de la forme
>
> \[ y_p(x) = x^k Q(x)e^{mx}, \qquad \deg Q = \deg P, \]
>
> où \(k\) vaut \(0\) si \(m\) n’est pas racine de l’équation caractéristique, \(1\) si \(m\) est racine simple, \(2\) si \(m\) est racine double. Le cas \({m = 0}\) correspond à un second membre polynomial.

> [!NOTE] **Méthode - Second membre trigonométrique**
>
> Pour \({f(x) = e^{\alpha x}\cos(\omega x)}\) ou \({e^{\alpha x}\sin(\omega x)}\), on résout l’équation complexe de second membre \({e^{(\alpha + i\omega)x}}\), puis on prend la partie réelle ou la partie imaginaire de la solution trouvée (les coefficients \(a\), \(b\), \(c\) étant réels). On peut aussi chercher directement \({y_p(x) = x^k e^{\alpha x}(A\cos\omega x + B\sin\omega x)}\).

{{% details title="Exemple" closed="true" %}}
Solution particulière de \({y'' - y' - 6y = 4e^{3x}}\). Ici \({m = 3}\) est racine simple de l’équation caractéristique : on cherche \({y_p(x) = cxe^{3x}}\).

\[
y_p'(x) = c(1 + 3x)e^{3x}, \qquad y_p''(x) = c(6 + 9x)e^{3x}.
\]

\[
y_p'' - y_p' - 6y_p = c\big(6 + 9x - 1 - 3x - 6x\big)e^{3x} = 5ce^{3x}.
\]

Donc \({c = \dfrac{4}{5}}\) et \({y_p(x) = \dfrac{4}{5}xe^{3x}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Un problème de Cauchy**
>
> Résoudre \({(E) : y'' + 2y' + 5y = 10x + 9}\), avec les conditions initiales \({y(0) = 2}\) et \({y'(0) = 1}\).

{{% details title="Solution commentée" closed="true" %}}
**Équation homogène.** \({r^2 + 2r + 5 = 0}\) a pour discriminant \(-16\) et pour racines \({-1 \pm 2i}\). Les solutions de \((E_0)\) sont \({e^{-x}(\lambda\cos 2x + \mu\sin 2x)}\).

**Solution particulière.** Le second membre est un polynôme de degré \(1\) (cas \({m = 0}\), qui n’est pas racine) : on cherche \({y_p(x) = \alpha x + \beta}\). Alors \({y_p'' = 0}\), \({y_p' = \alpha}\), et

\[
2\alpha + 5(\alpha x + \beta) = 10x + 9 \iff 5\alpha = 10 \text{ et } 2\alpha + 5\beta = 9 \iff \alpha = 2 \text{ et } \beta = 1.
\]

Donc \({y_p(x) = 2x + 1}\).

**Solution générale.** \({y(x) = 2x + 1 + e^{-x}(\lambda\cos 2x + \mu\sin 2x)}\).

**Conditions initiales.**
- \({y(0) = 1 + \lambda = 2}\), donc \({\lambda = 1}\).
- \({y'(x) = 2 - e^{-x}(\lambda\cos 2x + \mu\sin 2x) + e^{-x}(-2\lambda\sin 2x + 2\mu\cos 2x)}\), donc \({y'(0) = 2 - \lambda + 2\mu = 1}\), d’où \({\mu = 0}\).

La solution est

\[
y(x) = 2x + 1 + e^{-x}\cos(2x).
\]
{{% /details %}}
