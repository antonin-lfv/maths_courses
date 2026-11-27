---
title: 'Matrice d’une application linéaire, changement de base'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(E\) et \(F\) sont des espaces de dimension finie, \({\mathcal{B} = (e_1, \dots, e_p)}\) une base de \(E\) et \({\mathcal{C} = (f_1, \dots, f_n)}\) une base de \(F\).

## Matrice d’une application linéaire

> [!TIP] **Définition**
>
> - La **matrice d’un vecteur** \(u\) de \(E\) dans la base \(\mathcal{B}\) est la colonne \(X\) de ses coordonnées dans \(\mathcal{B}\).
> - La **matrice d’une application linéaire** \({f \in \mathcal{L}(E, F)}\) dans les bases \(\mathcal{B}\) et \(\mathcal{C}\) est la matrice \({A = \operatorname{Mat}_{\mathcal{B}, \mathcal{C}}(f) \in \mathcal{M}_{n,p}(\mathbb{K})}\) dont la colonne \(j\) est formée des coordonnées de \(f(e_j)\) dans la base \(\mathcal{C}\) :
>
> \[ f(e_j) = \sum_{i=1}^{n} a_{ij} f_i. \]
>
> Pour un endomorphisme, on prend la même base au départ et à l’arrivée et on note \(\operatorname{Mat}_{\mathcal{B}}(f)\).

> [!IMPORTANT] **Remarque**
>
> La matrice a autant de colonnes que la dimension de l’espace de **départ** et autant de lignes que la dimension de l’espace d’**arrivée**. Elle dépend des bases choisies.

{{% details title="Exemple" closed="true" %}}
Soit \({f : \mathbb{R}_2[X] \to \mathbb{R}_2[X]}\), \({P \mapsto P + (X + 1)P'}\), et \({\mathcal{B} = (1, X, X^2)}\).

- \({f(1) = 1}\) ;
- \({f(X) = X + (X + 1) = 1 + 2X}\) ;
- \({f(X^2) = X^2 + 2X(X + 1) = 2X + 3X^2}\).

Donc

\[
\operatorname{Mat}_{\mathcal{B}}(f) = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ 0 & 0 & 3 \end{pmatrix}.
\]
{{% /details %}}

> [!TIP] **Théorème**
>
> - L’application \({f \mapsto \operatorname{Mat}_{\mathcal{B}, \mathcal{C}}(f)}\) est un isomorphisme de \(\mathcal{L}(E, F)\) sur \(\mathcal{M}_{n,p}(\mathbb{K})\). En particulier, \({\dim \mathcal{L}(E, F) = \dim E \times \dim F}\).
> - **Image d’un vecteur** : si \(X\) est la colonne de \(u\) dans \(\mathcal{B}\) et \(Y\) celle de \(f(u)\) dans \(\mathcal{C}\), alors \({Y = AX}\).
> - **Composée** : si \({g \in \mathcal{L}(F, G)}\) et \(\mathcal{D}\) est une base de \(G\), alors
>
> \[ \operatorname{Mat}_{\mathcal{B}, \mathcal{D}}(g \circ f) = \operatorname{Mat}_{\mathcal{C}, \mathcal{D}}(g) \times \operatorname{Mat}_{\mathcal{B}, \mathcal{C}}(f). \]
>
> - **Isomorphisme** : si \({\dim E = \dim F}\), \(f\) est bijective si et seulement si \(A\) est inversible, et alors \({\operatorname{Mat}_{\mathcal{C}, \mathcal{B}}(f^{-1}) = A^{-1}}\).

Le produit matriciel a été défini précisément pour que la matrice d’une composée soit le produit des matrices.

> [!TIP] **Définition - Application linéaire canoniquement associée**
>
> À toute matrice \({A \in \mathcal{M}_{n,p}(\mathbb{K})}\) on associe l’application linéaire \({\mathbb{K}^p \to \mathbb{K}^n}\), \({X \mapsto AX}\) (en identifiant vecteurs et colonnes). Le **noyau** et l’**image** de \(A\) sont ceux de cette application : \({\ker A = \{X,\ AX = 0\}}\), et \(\operatorname{Im} A\) est le sous-espace engendré par les colonnes de \(A\).

## Changement de base

> [!TIP] **Définition**
>
> Soient \(\mathcal{B}\) et \(\mathcal{B}'\) deux bases de \(E\). La **matrice de passage** de \(\mathcal{B}\) à \(\mathcal{B}'\) est la matrice \({P = P_{\mathcal{B} \to \mathcal{B}'}}\) dont les colonnes sont les coordonnées des vecteurs de la nouvelle base \(\mathcal{B}'\) dans l’ancienne base \(\mathcal{B}\).

> [!TIP] **Propriétés**
>
> - \(P\) est inversible, et \({P^{-1}}\) est la matrice de passage de \(\mathcal{B}'\) à \(\mathcal{B}\).
> - **Coordonnées d’un vecteur** : si \(X\) et \(X'\) sont les colonnes d’un même vecteur dans \(\mathcal{B}\) et dans \(\mathcal{B}'\), alors
>
> \[ X = PX'. \]
>
> La matrice de passage donne les **anciennes** coordonnées en fonction des **nouvelles**.

> [!TIP] **Théorème - Formules de changement de base**
>
> - **Endomorphisme** : si \({A = \operatorname{Mat}_{\mathcal{B}}(f)}\), \({A' = \operatorname{Mat}_{\mathcal{B}'}(f)}\) et \({P = P_{\mathcal{B} \to \mathcal{B}'}}\), alors
>
> \[ A' = P^{-1}AP. \]
>
> - **Cas général** : si \({f \in \mathcal{L}(E, F)}\), \({P = P_{\mathcal{B} \to \mathcal{B}'}}\) dans \(E\) et \({Q = P_{\mathcal{C} \to \mathcal{C}'}}\) dans \(F\), alors \({A' = Q^{-1}AP}\).

{{% details title="Démonstration" closed="true" %}}
Soit \(u\) un vecteur, de colonnes \(X\), \(X'\) dans \(\mathcal{B}\), \(\mathcal{B}'\), et \(f(u)\) de colonnes \(Y\), \(Y'\) dans \(\mathcal{C}\), \(\mathcal{C}'\). On a \({Y = AX}\), \({X = PX'}\) et \({Y = QY'}\). Donc \({QY' = APX'}\), soit \({Y' = Q^{-1}APX'}\). Ceci étant vrai pour tout \(X'\), la matrice de \(f\) dans les nouvelles bases est \(Q^{-1}AP\).
{{% /details %}}

> [!TIP] **Définition - Matrices semblables**
>
> Deux matrices carrées \(A\) et \(B\) de \(\mathcal{M}_n(\mathbb{K})\) sont **semblables** s’il existe \({P \in \mathrm{GL}_n(\mathbb{K})}\) telle que \({B = P^{-1}AP}\). Cela revient à dire qu’elles représentent le même endomorphisme dans deux bases. Alors, pour tout entier naturel \(k\), \({B^k = P^{-1}A^kP}\).

## Rang d’une matrice

> [!TIP] **Définition et théorème**
>
> Le **rang** d’une matrice \(A\) est le rang de la famille de ses colonnes. C’est aussi :
> - le rang de toute application linéaire représentée par \(A\) ;
> - le rang de la famille de ses lignes : \({\operatorname{rg}(A^T) = \operatorname{rg}(A)}\) ;
> - le nombre de pivots obtenus après échelonnement par le pivot de Gauss.
>
> Les opérations élémentaires sur les lignes ou sur les colonnes, et la multiplication par une matrice inversible, ne changent pas le rang.

> [!TIP] **Propriétés**
>
> - Pour \({A \in \mathcal{M}_{n,p}(\mathbb{K})}\) : \({\operatorname{rg} A \leq \min(n, p)}\), et \({p = \dim \ker A + \operatorname{rg} A}\) (théorème du rang).
> - \({A \in \mathcal{M}_n(\mathbb{K})}\) est inversible si et seulement si \({\operatorname{rg} A = n}\), si et seulement si \({\ker A = \{0\}}\), si et seulement si ses colonnes forment une base de \(\mathbb{K}^n\).
> - \({\operatorname{rg}(AB) \leq \min(\operatorname{rg} A, \operatorname{rg} B)}\).

## Trace

> [!TIP] **Définition et propriétés**
>
> La **trace** d’une matrice carrée \(A\) est la somme de ses coefficients diagonaux : \({\operatorname{tr}(A) = \displaystyle\sum_{i=1}^{n} a_{ii}}\).
> - La trace est une forme linéaire sur \(\mathcal{M}_n(\mathbb{K})\).
> - Pour toutes matrices \({A \in \mathcal{M}_{n,p}(\mathbb{K})}\) et \({B \in \mathcal{M}_{p,n}(\mathbb{K})}\) : \({\operatorname{tr}(AB) = \operatorname{tr}(BA)}\).
> - Deux matrices semblables ont la même trace. On peut donc définir la **trace d’un endomorphisme** comme la trace de sa matrice dans une base quelconque.
> - La trace d’un projecteur est égale à son rang.

{{% details title="Démonstration" closed="true" %}}
\({\operatorname{tr}(AB) = \displaystyle\sum_{i=1}^{n}\sum_{k=1}^{p} a_{ik}b_{ki} = \sum_{k=1}^{p}\sum_{i=1}^{n} b_{ki}a_{ik} = \operatorname{tr}(BA)}\).

Par conséquent, \({\operatorname{tr}(P^{-1}AP) = \operatorname{tr}(APP^{-1}) = \operatorname{tr}(A)}\).

Pour un projecteur \(p\) de rang \(r\), on choisit une base adaptée à \({E = \operatorname{Im} p \oplus \ker p}\) : la matrice de \(p\) est diagonale, avec \(r\) coefficients égaux à \(1\) puis des \(0\). Sa trace vaut \(r\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Changer de base pour calculer des puissances**
>
> Soit \(f\) l’endomorphisme de \(\mathbb{R}^2\) de matrice \({A = \begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}}\) dans la base canonique. On pose \({u_1 = (1, 1)}\) et \({u_2 = (2, 1)}\).
>
> 1. Montrer que \({\mathcal{B}' = (u_1, u_2)}\) est une base de \(\mathbb{R}^2\) et donner la matrice de \(f\) dans \(\mathcal{B}'\).
> 2. En déduire \(A^n\) pour tout entier naturel \(n\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(u_1\) et \(u_2\) ne sont pas colinéaires : ils forment une famille libre de deux vecteurs de \(\mathbb{R}^2\), donc une base.

\[
A\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \end{pmatrix} \qquad \text{et} \qquad A\begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \end{pmatrix}.
\]

Donc \({f(u_1) = 2u_1}\) et \({f(u_2) = 3u_2}\) : la matrice de \(f\) dans \(\mathcal{B}'\) est \({D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}}\).

**2.** La matrice de passage est \({P = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}}\), de déterminant \({1 - 2 = -1}\), donc \({P^{-1} = \begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}}\). On a \({D = P^{-1}AP}\), soit \({A = PDP^{-1}}\), d’où \({A^n = PD^nP^{-1}}\) :

\[
A^n = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 2^n & 0 \\ 0 & 3^n \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}
= \begin{pmatrix} 2 \times 3^n - 2^n & 2^{n+1} - 2 \times 3^n \\ 3^n - 2^n & 2^{n+1} - 3^n \end{pmatrix}.
\]

Vérification pour \({n = 1}\) : \({\begin{pmatrix} 6 - 2 & 4 - 6 \\ 3 - 2 & 4 - 3 \end{pmatrix} = \begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix} = A}\). On note aussi que \({\operatorname{tr}(A) = 5 = \operatorname{tr}(D)}\).
{{% /details %}}
