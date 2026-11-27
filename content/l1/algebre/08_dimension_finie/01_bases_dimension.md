---
title: 'Bases et dimension'
weight: 1
cascade:
  type: docs
---

## Espaces de dimension finie

> [!TIP] **Définition**
>
> Un espace vectoriel \(E\) est de **dimension finie** s’il admet une famille génératrice finie. Sinon, il est de dimension infinie.

{{% details title="Exemple" closed="true" %}}
\(\mathbb{K}^n\), \(\mathbb{K}_n[X]\) et \(\mathcal{M}_{n,p}(\mathbb{K})\) sont de dimension finie. En revanche, \(\mathbb{K}[X]\) est de dimension infinie : une famille finie de polynômes n’engendre que des polynômes de degré au plus égal au plus grand de leurs degrés.
{{% /details %}}

> [!TIP] **Lemme fondamental**
>
> Si \(E\) admet une famille génératrice de \(n\) vecteurs, alors toute famille de \({n + 1}\) vecteurs de \(E\) est liée.

{{% details title="Démonstration" closed="true" %}}
Soit \({(g_1, \dots, g_n)}\) génératrice et \({(v_1, \dots, v_{n+1})}\) une famille quelconque. Chaque \(v_j\) s’écrit \({v_j = \displaystyle\sum_{i=1}^{n} a_{ij}g_i}\). L’égalité \({\displaystyle\sum_{j=1}^{n+1} \lambda_j v_j = 0_E}\) est vérifiée dès que

\[
\forall i \in \{1, \dots, n\}, \quad \sum_{j=1}^{n+1} a_{ij}\lambda_j = 0.
\]

C’est un système linéaire homogène de \(n\) équations à \({n + 1}\) inconnues. Son rang est au plus \(n\), strictement inférieur au nombre d’inconnues : il admet une solution non nulle. La famille est liée.
{{% /details %}}

> [!TIP] **Théorème - Existence de bases**
>
> Soit \(E\) un espace de dimension finie, non réduit à \(\{0_E\}\).
> - **Base extraite** : de toute famille génératrice finie de \(E\), on peut extraire une base de \(E\).
> - **Base incomplète** : toute famille libre de \(E\) peut être complétée en une base de \(E\), en lui ajoutant des vecteurs choisis dans une famille génératrice donnée.
>
> En particulier, \(E\) admet une base.

{{% details title="Démonstration" closed="true" %}}
Soit \(\mathcal{G}\) une famille génératrice finie et \(\mathcal{L}\) une famille libre (éventuellement vide). Parmi les familles libres obtenues en ajoutant à \(\mathcal{L}\) des vecteurs de \(\mathcal{G}\), on en choisit une, \(\mathcal{B}\), de cardinal maximal. Si un vecteur \(g\) de \(\mathcal{G}\) n’était pas combinaison linéaire des vecteurs de \(\mathcal{B}\), la famille obtenue en ajoutant \(g\) à \(\mathcal{B}\) serait encore libre, ce qui contredit la maximalité. Donc \({\operatorname{Vect}(\mathcal{B})}\) contient \(\mathcal{G}\), donc \(E\) : \(\mathcal{B}\) est une base.
{{% /details %}}

> [!TIP] **Théorème et définition - Dimension**
>
> Dans un espace de dimension finie, toutes les bases ont le même nombre de vecteurs. Ce nombre est la **dimension** de \(E\), notée \(\dim E\). Par convention, \({\dim\{0_E\} = 0}\).

{{% details title="Démonstration" closed="true" %}}
Soient \(\mathcal{B}\) et \(\mathcal{B}'\) deux bases, de cardinaux \(n\) et \(n'\). Comme \(\mathcal{B}\) est génératrice et \(\mathcal{B}'\) libre, le lemme fondamental donne \({n' \leq n}\). En échangeant les rôles, \({n \leq n'}\).
{{% /details %}}

> [!TIP] **Dimensions de référence**
>
> - \({\dim \mathbb{K}^n = n}\) ; \({\dim \mathbb{K}_n[X] = n + 1}\) ; \({\dim \mathcal{M}_{n,p}(\mathbb{K}) = np}\).
> - \(\mathbb{C}\) est de dimension \(1\) comme \(\mathbb{C}\)-espace vectoriel, et de dimension \(2\) comme \(\mathbb{R}\)-espace vectoriel, de base \({(1, i)}\).
> - Un espace de dimension \(1\) est une **droite vectorielle**, de dimension \(2\) un **plan vectoriel**.

> [!TIP] **Théorème - Familles et dimension**
>
> Soit \(E\) un espace de dimension \(n\).
> - Toute famille libre a au plus \(n\) vecteurs.
> - Toute famille génératrice a au moins \(n\) vecteurs.
> - Pour une famille de **exactement \(n\) vecteurs**, il y a équivalence entre : être libre, être génératrice, être une base.

> [!NOTE] **Méthode - Montrer qu’une famille est une base**
>
> Quand on connaît la dimension \(n\) de l’espace, il suffit de compter les vecteurs (il en faut \(n\)) et de vérifier **une seule** des deux propriétés, en général la liberté.

{{% details title="Exemple" closed="true" %}}
Dans \(\mathbb{R}_2[X]\), la famille \({(1,\ X - 1,\ (X - 1)^2)}\) est formée de polynômes non nuls de degrés deux à deux distincts : elle est libre. Elle compte \(3\) vecteurs et \({\dim \mathbb{R}_2[X] = 3}\) : c’est une base.

Les coordonnées de \({P = X^2 + X + 1}\) dans cette base sont données par la formule de Taylor en \(1\) : \({P(1) = 3}\), \({P'(1) = 3}\), \({\dfrac{P''(1)}{2} = 1}\), donc \({P = 3 + 3(X - 1) + (X - 1)^2}\).
{{% /details %}}

## Sous-espaces en dimension finie

> [!TIP] **Théorème**
>
> Soit \(E\) de dimension finie et \(F\) un sous-espace de \(E\). Alors \(F\) est de dimension finie, \({\dim F \leq \dim E}\), et
>
> \[ \dim F = \dim E \iff F = E. \]

> [!TIP] **Théorème - Formule de Grassmann**
>
> Soient \(F\) et \(G\) deux sous-espaces d’un espace de dimension finie. Alors
>
> \[ \dim(F + G) = \dim F + \dim G - \dim(F \cap G). \]

{{% details title="Démonstration" closed="true" %}}
Soit \({(e_1, \dots, e_r)}\) une base de \({F \cap G}\). On la complète en une base \({(e_1, \dots, e_r, f_1, \dots, f_p)}\) de \(F\) et en une base \({(e_1, \dots, e_r, g_1, \dots, g_q)}\) de \(G\). La famille \({\mathcal{B} = (e_1, \dots, e_r, f_1, \dots, f_p, g_1, \dots, g_q)}\) engendre \({F + G}\).

Elle est libre : si \({\sum \alpha_i e_i + \sum \beta_j f_j + \sum \gamma_k g_k = 0}\), alors \({\sum \gamma_k g_k = -\sum \alpha_i e_i - \sum \beta_j f_j}\) appartient à \({F \cap G}\), donc s’écrit \({\sum \delta_i e_i}\). Par liberté de la base de \(G\), tous les \(\gamma_k\) sont nuls. Il reste \({\sum \alpha_i e_i + \sum \beta_j f_j = 0}\), d’où \({\alpha_i = \beta_j = 0}\) par liberté de la base de \(F\).

Donc \({\dim(F + G) = r + p + q = (r + p) + (r + q) - r}\).
{{% /details %}}

> [!TIP] **Théorème - Supplémentaires en dimension finie**
>
> Soit \(E\) de dimension finie.
> - Tout sous-espace \(F\) de \(E\) admet un supplémentaire, et tous ses supplémentaires sont de dimension \({\dim E - \dim F}\).
> - \({E = F \oplus G}\) si et seulement si deux des trois conditions suivantes sont vérifiées (la troisième l’est alors aussi) :
>   \({F \cap G = \{0_E\}}\) ; \({F + G = E}\) ; \({\dim F + \dim G = \dim E}\).
> - Si \({E = F \oplus G}\), on obtient une base de \(E\) en réunissant une base de \(F\) et une base de \(G\) (base **adaptée**).

> [!TIP] **Définition - Hyperplan**
>
> Dans un espace de dimension \(n\), un **hyperplan** est un sous-espace de dimension \({n - 1}\). Tout hyperplan de \(\mathbb{K}^n\) est l’ensemble des solutions d’une équation \({a_1 x_1 + \dots + a_n x_n = 0}\) avec \({(a_1, \dots, a_n) \neq 0}\).

## Rang d’une famille de vecteurs

> [!TIP] **Définition**
>
> Le **rang** d’une famille \({(u_1, \dots, u_p)}\) est la dimension du sous-espace qu’elle engendre :
>
> \[ \operatorname{rg}(u_1, \dots, u_p) = \dim \operatorname{Vect}(u_1, \dots, u_p). \]
>
> On a \({\operatorname{rg}(u_1, \dots, u_p) \leq p}\), avec égalité si et seulement si la famille est libre.

> [!NOTE] **Méthode - Calculer un rang, extraire une base**
>
> On écrit les vecteurs **en lignes** d’une matrice et on applique le pivot de Gauss. Les opérations élémentaires sur les lignes ne changent pas le sous-espace engendré. À la fin, les lignes non nulles sont échelonnées, donc libres : elles forment une base du sous-espace, et leur nombre est le rang.

{{% details title="Exemple" closed="true" %}}
Dans \(\mathbb{R}^4\), soient \({u_1 = (1, 2, 0, 1)}\), \({u_2 = (2, 5, 1, 0)}\), \({u_3 = (1, 3, 1, -1)}\).

\[
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 5 & 1 & 0 \\ 1 & 3 & 1 & -1 \end{pmatrix}
\xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 - 2L_1}
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 1 & -2 \\ 0 & 1 & 1 & -2 \end{pmatrix}
\xrightarrow{L_3 \leftarrow L_3 - L_2}
\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{pmatrix}
\]

Le rang est \(2\). La famille est liée (\({u_3 = u_2 - u_1}\)) et \({\big((1, 2, 0, 1),\ (0, 1, 1, -2)\big)}\) est une base de \({\operatorname{Vect}(u_1, u_2, u_3)}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Deux plans de \(\mathbb{R}^4\)**
>
> Dans \(\mathbb{R}^4\), on pose \({F = \{(x, y, z, t),\ x + y = 0 \text{ et } z - t = 0\}}\) et \({G = \operatorname{Vect}\big((1, 0, 0, 1),\ (0, 1, 1, 0)\big)}\). Déterminer les dimensions de \(F\), \(G\), \({F \cap G}\) et \({F + G}\). Les sous-espaces \(F\) et \(G\) sont-ils supplémentaires ?

{{% details title="Solution commentée" closed="true" %}}
**Dimension de \(F\).** \({(x, y, z, t) \in F \iff y = -x \text{ et } t = z}\), donc \({(x, y, z, t) = x(1, -1, 0, 0) + z(0, 0, 1, 1)}\). Ces deux vecteurs engendrent \(F\) et ne sont pas colinéaires : \({\dim F = 2}\).

**Dimension de \(G\).** Les deux vecteurs qui engendrent \(G\) ne sont pas colinéaires : \({\dim G = 2}\).

**Intersection.** Un vecteur de \(G\) s’écrit \({a(1, 0, 0, 1) + b(0, 1, 1, 0) = (a, b, b, a)}\). Il est dans \(F\) si et seulement si \({a + b = 0}\) et \({b - a = 0}\), soit \({a = b = 0}\). Donc \({F \cap G = \{0\}}\) et \({\dim(F \cap G) = 0}\).

**Somme.** D’après la formule de Grassmann, \({\dim(F + G) = 2 + 2 - 0 = 4 = \dim \mathbb{R}^4}\), donc \({F + G = \mathbb{R}^4}\).

**Conclusion.** \({F \cap G = \{0\}}\) et \({\dim F + \dim G = 4}\) : \(F\) et \(G\) sont supplémentaires dans \(\mathbb{R}^4\).
{{% /details %}}
