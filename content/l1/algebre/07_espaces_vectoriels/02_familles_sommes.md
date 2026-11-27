---
title: 'Familles libres, génératrices, sommes directes'
weight: 2
cascade:
  type: docs
---

## Familles génératrices

> [!TIP] **Définition**
>
> Une famille \({(u_1, \dots, u_n)}\) de vecteurs de \(E\) est **génératrice** de \(E\) si \({\operatorname{Vect}(u_1, \dots, u_n) = E}\) : tout vecteur de \(E\) est combinaison linéaire des \(u_i\).

## Familles libres

> [!TIP] **Définition**
>
> Une famille \({(u_1, \dots, u_n)}\) est **libre** si la seule combinaison linéaire nulle est celle dont tous les coefficients sont nuls :
>
> \[ \forall (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n, \quad \lambda_1 u_1 + \dots + \lambda_n u_n = 0_E \Rightarrow \lambda_1 = \dots = \lambda_n = 0. \]
>
> On dit aussi que les vecteurs sont **linéairement indépendants**. Dans le cas contraire, la famille est **liée**.

> [!TIP] **Propriétés**
>
> - Une famille est liée si et seulement si l’un de ses vecteurs est combinaison linéaire des autres.
> - Une famille qui contient le vecteur nul, ou deux vecteurs égaux, est liée.
> - Un vecteur seul forme une famille libre si et seulement s’il est non nul.
> - Deux vecteurs forment une famille libre si et seulement s’ils ne sont pas **colinéaires**.
> - Toute sous-famille d’une famille libre est libre ; toute famille qui contient une famille génératrice est génératrice.
> - Si \({(u_1, \dots, u_n)}\) est libre et si \({v \notin \operatorname{Vect}(u_1, \dots, u_n)}\), alors \({(u_1, \dots, u_n, v)}\) est libre.
> - Une famille de polynômes non nuls de degrés deux à deux distincts est libre.

> [!IMPORTANT] **Remarque**
>
> Pour trois vecteurs ou plus, il ne suffit pas qu’ils soient deux à deux non colinéaires : dans \(\mathbb{R}^2\), \({(1, 0)}\), \({(0, 1)}\) et \({(1, 1)}\) sont deux à deux non colinéaires, mais \({(1, 1) = (1, 0) + (0, 1)}\).

> [!NOTE] **Méthode - Étudier la liberté d’une famille**
>
> On écrit \({\lambda_1 u_1 + \dots + \lambda_n u_n = 0_E}\) et on traduit cette égalité en un système linéaire homogène d’inconnues \({\lambda_1, \dots, \lambda_n}\). La famille est libre si et seulement si ce système n’a que la solution nulle. Pour des fonctions, on peut évaluer en des points bien choisis, dériver, ou étudier une limite.

{{% details title="Exemple" closed="true" %}}
Dans \(\mathbb{R}^3\), soient \({u = (1, 2, -1)}\), \({v = (2, 1, 1)}\), \({w = (1, -1, 2)}\). L’égalité \({au + bv + cw = 0}\) équivaut à

\[
\begin{cases} a + 2b + c = 0 \\ 2a + b - c = 0 \\ -a + b + 2c = 0 \end{cases}
\iff
\begin{cases} a + 2b + c = 0 \\ -3b - 3c = 0 \\ 3b + 3c = 0 \end{cases}
\iff
\begin{cases} a = c \\ b = -c \end{cases}
\]

Le système a des solutions non nulles, par exemple \({(a, b, c) = (1, -1, 1)}\) : la famille est liée, et \({u - v + w = 0}\). Vérification : \({(1 - 2 + 1,\ 2 - 1 - 1,\ -1 - 1 + 2) = (0, 0, 0)}\).
{{% /details %}}

## Bases

> [!TIP] **Définition et propriété**
>
> Une **base** de \(E\) est une famille libre et génératrice de \(E\). La famille \({\mathcal{B} = (e_1, \dots, e_n)}\) est une base de \(E\) si et seulement si tout vecteur \(u\) de \(E\) s’écrit de manière **unique**
>
> \[ u = x_1 e_1 + \dots + x_n e_n. \]
>
> Les scalaires \({x_1, \dots, x_n}\) sont les **coordonnées** de \(u\) dans la base \(\mathcal{B}\).

{{% details title="Démonstration" closed="true" %}}
L’existence de l’écriture pour tout \(u\) traduit le caractère générateur. Pour l’unicité : si \({\sum x_i e_i = \sum y_i e_i}\), alors \({\sum (x_i - y_i)e_i = 0_E}\), et la liberté donne \({x_i = y_i}\) pour tout \(i\). Réciproquement, l’unicité de l’écriture du vecteur nul donne la liberté.
{{% /details %}}

> [!TIP] **Bases canoniques**
>
> - Dans \(\mathbb{K}^n\) : \({e_1 = (1, 0, \dots, 0)}\), \({e_2 = (0, 1, 0, \dots, 0)}\), …, \({e_n = (0, \dots, 0, 1)}\).
> - Dans \(\mathbb{K}_n[X]\) : \({(1, X, X^2, \dots, X^n)}\).
> - Dans \(\mathcal{M}_{n,p}(\mathbb{K})\) : les matrices élémentaires \(E_{ij}\), dont tous les coefficients sont nuls sauf celui de la ligne \(i\) et de la colonne \(j\), qui vaut \(1\).

## Somme de sous-espaces

> [!TIP] **Définition**
>
> Soient \(F\) et \(G\) deux sous-espaces vectoriels de \(E\). Leur **somme** est
>
> \[ F + G = \{u + v,\ u \in F,\ v \in G\}. \]
>
> C’est un sous-espace vectoriel de \(E\), le plus petit qui contient \({F \cup G}\). Si \({F = \operatorname{Vect}(u_1, \dots, u_p)}\) et \({G = \operatorname{Vect}(v_1, \dots, v_q)}\), alors \({F + G = \operatorname{Vect}(u_1, \dots, u_p, v_1, \dots, v_q)}\).

> [!TIP] **Définition et théorème - Somme directe**
>
> La somme \({F + G}\) est **directe** si tout vecteur de \({F + G}\) s’écrit de manière unique \({u + v}\) avec \({u \in F}\) et \({v \in G}\). On note alors \({F \oplus G}\).
>
> La somme \({F + G}\) est directe si et seulement si \({F \cap G = \{0_E\}}\).

{{% details title="Démonstration" closed="true" %}}
Supposons la somme directe et soit \({w \in F \cap G}\). Alors \({0_E = 0_E + 0_E = w + (-w)}\) sont deux décompositions du vecteur nul, avec \({w \in F}\) et \({-w \in G}\). Par unicité, \({w = 0_E}\).

Réciproquement, supposons \({F \cap G = \{0_E\}}\) et \({u + v = u' + v'}\) avec \({u, u' \in F}\) et \({v, v' \in G}\). Alors \({u - u' = v' - v}\) appartient à la fois à \(F\) et à \(G\), donc est nul : \({u = u'}\) et \({v = v'}\).
{{% /details %}}

> [!TIP] **Définition - Sous-espaces supplémentaires**
>
> \(F\) et \(G\) sont **supplémentaires** dans \(E\) si \({E = F \oplus G}\), c’est-à-dire si
>
> \[ E = F + G \qquad \text{et} \qquad F \cap G = \{0_E\}. \]
>
> Cela équivaut à : tout vecteur de \(E\) s’écrit de manière unique comme somme d’un vecteur de \(F\) et d’un vecteur de \(G\).

> [!IMPORTANT] **Remarque**
>
> Ne pas confondre supplémentaire et complémentaire. Le complémentaire de \(F\) n’est jamais un sous-espace (il ne contient pas \(0_E\)). Et un sous-espace a en général une infinité de supplémentaires : dans \(\mathbb{R}^2\), toute droite vectorielle distincte de \(F\) est un supplémentaire de la droite \(F\).

> [!NOTE] **Méthode - Montrer que \({E = F \oplus G}\)**
>
> - Montrer \({F \cap G = \{0_E\}}\), puis que tout vecteur de \(E\) se décompose (souvent par analyse-synthèse, qui donne aussi l’unicité).
> - En dimension finie, on verra qu’il suffit de montrer \({F \cap G = \{0_E\}}\) et \({\dim F + \dim G = \dim E}\).

> [!NOTE] **Exercice résolu - Matrices symétriques et antisymétriques**
>
> On note \(\mathcal{S}_n\) et \(\mathcal{A}_n\) les ensembles des matrices symétriques et antisymétriques de \(\mathcal{M}_n(\mathbb{R})\). Montrer que \({\mathcal{M}_n(\mathbb{R}) = \mathcal{S}_n \oplus \mathcal{A}_n}\).

{{% details title="Solution commentée" closed="true" %}}
\(\mathcal{S}_n\) et \(\mathcal{A}_n\) sont des sous-espaces vectoriels : ils contiennent la matrice nulle et, par linéarité de la transposition, sont stables par combinaison linéaire.

**Analyse.** Soit \({M \in \mathcal{M}_n(\mathbb{R})}\). Supposons \({M = S + A}\) avec \(S\) symétrique et \(A\) antisymétrique. En transposant, \({M^T = S - A}\). Par somme et différence :

\[
S = \dfrac{M + M^T}{2} \qquad \text{et} \qquad A = \dfrac{M - M^T}{2}.
\]

La décomposition, si elle existe, est unique.

**Synthèse.** Posons \({S = \dfrac{M + M^T}{2}}\) et \({A = \dfrac{M - M^T}{2}}\). Alors \({S^T = \dfrac{M^T + M}{2} = S}\), \({A^T = \dfrac{M^T - M}{2} = -A}\) et \({S + A = M}\).

Toute matrice s’écrit donc de manière unique comme somme d’une matrice symétrique et d’une matrice antisymétrique : \({\mathcal{M}_n(\mathbb{R}) = \mathcal{S}_n \oplus \mathcal{A}_n}\).

Par exemple, \({\begin{pmatrix} 1 & 4 \\ 2 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 3 & 3 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}}\).
{{% /details %}}
