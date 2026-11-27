---
title: 'Éléments propres et diagonalisation'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\), \(E\) est un \(\mathbb{K}\)-espace vectoriel de dimension finie \({n \geq 1}\) et \(f\) un endomorphisme de \(E\). Réduire \(f\), c’est chercher une base dans laquelle sa matrice est la plus simple possible.

## Éléments propres

> [!TIP] **Définition**
>
> - Un scalaire \(\lambda\) est une **valeur propre** de \(f\) s’il existe un vecteur \(x\) **non nul** tel que \({f(x) = \lambda x}\). Un tel vecteur est un **vecteur propre** associé à \(\lambda\).
> - Le **sous-espace propre** associé à \(\lambda\) est \({E_\lambda(f) = \ker(f - \lambda\,\mathrm{id}_E)}\) : il contient le vecteur nul et les vecteurs propres associés à \(\lambda\).
> - L’ensemble des valeurs propres est le **spectre** de \(f\), noté \(\operatorname{Sp}(f)\).
>
> Pour une matrice \({A \in \mathcal{M}_n(\mathbb{K})}\), on définit de même valeurs propres, vecteurs propres (colonnes \({X \neq 0}\) telles que \({AX = \lambda X}\)) et sous-espaces propres \({E_\lambda(A) = \ker(A - \lambda I_n)}\).

> [!TIP] **Propriétés**
>
> - \(\lambda\) est valeur propre de \(f\) si et seulement si \({f - \lambda\,\mathrm{id}_E}\) n’est pas injectif, c’est-à-dire \({\det(f - \lambda\,\mathrm{id}_E) = 0}\).
> - \(0\) est valeur propre de \(f\) si et seulement si \(f\) n’est pas bijectif ; alors \({E_0 = \ker f}\).
> - Si \({f(x) = \lambda x}\), alors \({f^k(x) = \lambda^k x}\) et, pour tout polynôme \(P\), \({P(f)(x) = P(\lambda)x}\).

> [!TIP] **Théorème**
>
> Des sous-espaces propres associés à des valeurs propres deux à deux distinctes sont **en somme directe**. En particulier, des vecteurs propres associés à des valeurs propres deux à deux distinctes forment une famille libre, et \(f\) a au plus \(n\) valeurs propres.

{{% details title="Démonstration" closed="true" %}}
Par récurrence sur le nombre \(p\) de valeurs propres distinctes \({\lambda_1, \dots, \lambda_p}\).

- **Initialisation.** Pour \({p = 1}\), il n’y a rien à démontrer.
- **Hérédité.** Supposons le résultat vrai pour \({p - 1}\) valeurs propres, et soit \({x_1 + \dots + x_p = 0}\) avec \({x_i \in E_{\lambda_i}}\). En appliquant \(f\) : \({\lambda_1 x_1 + \dots + \lambda_p x_p = 0}\). En retranchant \(\lambda_p\) fois la première égalité : \({(\lambda_1 - \lambda_p)x_1 + \dots + (\lambda_{p-1} - \lambda_p)x_{p-1} = 0}\). Par hypothèse de récurrence, chaque terme est nul, et comme \({\lambda_i \neq \lambda_p}\), on a \({x_1 = \dots = x_{p-1} = 0}\), puis \({x_p = 0}\).
- **Conclusion.** La somme est directe pour tout \(p\).
{{% /details %}}

## Polynôme caractéristique

> [!TIP] **Définition**
>
> Le **polynôme caractéristique** de \({A \in \mathcal{M}_n(\mathbb{K})}\) est
>
> \[ \chi_A(X) = \det(XI_n - A). \]
>
> Deux matrices semblables ont le même polynôme caractéristique : on définit donc \(\chi_f\) comme celui de la matrice de \(f\) dans une base quelconque.

> [!TIP] **Propriétés**
>
> - \(\chi_A\) est unitaire, de degré \(n\), et
>
> \[ \chi_A(X) = X^n - \operatorname{tr}(A)X^{n-1} + \dots + (-1)^n\det(A). \]
>
> - Les valeurs propres de \(A\) sont exactement les **racines** de \(\chi_A\) dans \(\mathbb{K}\).
> - Pour \({n = 2}\) : \({\chi_A(X) = X^2 - \operatorname{tr}(A)X + \det(A)}\).
> - Si \(A\) est triangulaire, ses valeurs propres sont ses coefficients diagonaux.
> - Si \(\chi_A\) est scindé, de racines \({\lambda_1, \dots, \lambda_n}\) comptées avec multiplicité : \({\operatorname{tr}(A) = \lambda_1 + \dots + \lambda_n}\) et \({\det(A) = \lambda_1 \cdots \lambda_n}\).

> [!TIP] **Définition et théorème - Multiplicités**
>
> La **multiplicité** \(m(\lambda)\) d’une valeur propre \(\lambda\) est sa multiplicité comme racine de \(\chi_f\). On a toujours
>
> \[ 1 \leq \dim E_\lambda(f) \leq m(\lambda). \]

{{% details title="Démonstration" closed="true" %}}
Soit \({d = \dim E_\lambda}\). On complète une base de \(E_\lambda\) en une base de \(E\). Dans cette base, la matrice de \(f\) est de la forme \({\begin{pmatrix} \lambda I_d & B \\ 0 & C \end{pmatrix}}\), donc \({\chi_f(X) = (X - \lambda)^d \chi_C(X)}\) (déterminant triangulaire par blocs). Ainsi \({(X - \lambda)^d}\) divise \(\chi_f\) et \({d \leq m(\lambda)}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le corps compte. La matrice \({\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}}\) a pour polynôme caractéristique \({X^2 + 1}\) : elle n’a aucune valeur propre réelle, mais deux valeurs propres complexes \(i\) et \(-i\).

## Diagonalisabilité

> [!TIP] **Définition**
>
> \(f\) est **diagonalisable** s’il existe une base de \(E\) formée de vecteurs propres de \(f\), c’est-à-dire une base dans laquelle la matrice de \(f\) est diagonale.
>
> Une matrice \(A\) est diagonalisable si elle est semblable à une matrice diagonale : il existe \(P\) inversible et \(D\) diagonale telles que \({A = PDP^{-1}}\). Les colonnes de \(P\) forment alors une base de vecteurs propres, et les coefficients diagonaux de \(D\) sont les valeurs propres correspondantes, dans le même ordre.

> [!TIP] **Théorème - Critères de diagonalisabilité**
>
> Les propriétés suivantes sont équivalentes :
> - \(f\) est diagonalisable ;
> - \(E\) est la somme directe des sous-espaces propres de \(f\) ;
> - \({\displaystyle\sum_{\lambda \in \operatorname{Sp}(f)} \dim E_\lambda(f) = n}\) ;
> - \(\chi_f\) est **scindé** sur \(\mathbb{K}\) et, pour toute valeur propre \(\lambda\), \({\dim E_\lambda(f) = m(\lambda)}\).

> [!TIP] **Corollaire - Condition suffisante**
>
> Si \(f\) admet \(n\) valeurs propres deux à deux distinctes (c’est-à-dire si \(\chi_f\) est scindé à racines simples), alors \(f\) est diagonalisable, et chaque sous-espace propre est une droite.

> [!IMPORTANT] **Remarques**
>
> - Cette condition n’est pas nécessaire : \(I_n\) est diagonale avec une seule valeur propre.
> - Une matrice qui a une **seule** valeur propre \(\lambda\) est diagonalisable si et seulement si elle est égale à \(\lambda I_n\). Ainsi \({\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}}\) n’est pas diagonalisable.
> - Pour une valeur propre simple, la condition \({\dim E_\lambda = m(\lambda) = 1}\) est automatique : seules les valeurs propres multiples sont à examiner.

> [!NOTE] **Méthode - Diagonaliser une matrice**
>
> 1. Calculer \(\chi_A\) et le factoriser. S’il n’est pas scindé sur \(\mathbb{K}\), \(A\) n’est pas diagonalisable sur \(\mathbb{K}\).
> 2. Pour chaque valeur propre \(\lambda\), résoudre \({(A - \lambda I_n)X = 0}\) pour obtenir une base de \(E_\lambda\). Par le théorème du rang, \({\dim E_\lambda = n - \operatorname{rg}(A - \lambda I_n)}\).
> 3. Comparer \(\dim E_\lambda\) et \(m(\lambda)\) pour les valeurs propres multiples.
> 4. Si \(A\) est diagonalisable, former \(P\) en juxtaposant les bases des sous-espaces propres, et \(D\) avec les valeurs propres dans le même ordre.

{{% details title="Exemple" closed="true" %}}
Soit \({A = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}}\). Elle est triangulaire : \({\chi_A = (X - 2)^2(X - 3)}\), scindé, avec \(2\) valeur propre double et \(3\) valeur propre simple.

\({A - 2I_3 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}}\) est de rang \(1\), donc \({\dim E_2 = 3 - 1 = 2 = m(2)}\). La matrice est diagonalisable.

- \(E_2\) : \({z = 0}\), base \({\big((1, 0, 0), (0, 1, 0)\big)}\).
- \(E_3\) : \({-x + z = 0}\) et \({-y = 0}\), base \({\big((1, 0, 1)\big)}\).

\[
P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}, \qquad A = PDP^{-1}.
\]

En revanche, \({B = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}}\) a le même polynôme caractéristique, mais \({B - 2I_3}\) est de rang \(2\) : \({\dim E_2 = 1 < 2}\), et \(B\) n’est pas diagonalisable.
{{% /details %}}

## Applications

> [!NOTE] **Méthode - Puissances, suites, systèmes différentiels**
>
> Si \({A = PDP^{-1}}\) avec \({D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)}\) :
> - **Puissances** : \({A^k = PD^kP^{-1}}\) avec \({D^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)}\).
> - **Suites récurrentes** \({X_{k+1} = AX_k}\) : \({X_k = A^kX_0}\). En posant \({Y_k = P^{-1}X_k}\), on obtient \({Y_{k+1} = DY_k}\), soit \(n\) suites géométriques indépendantes.
> - **Système différentiel** \({X'(t) = AX(t)}\) : en posant \({Y = P^{-1}X}\), on obtient \({Y' = DY}\), soit \({y_i(t) = c_i e^{\lambda_i t}}\). Les solutions sont
>
> \[ X(t) = c_1 e^{\lambda_1 t}V_1 + \dots + c_n e^{\lambda_n t}V_n, \]
>
> où \(V_i\) est la colonne \(i\) de \(P\) et les \(c_i\) des constantes.

> [!NOTE] **Exercice résolu - Diagonalisation et suites couplées**
>
> Soit \({A = \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix}}\).
>
> 1. Diagonaliser \(A\).
> 2. Les suites \((u_k)\) et \((v_k)\) vérifient \({u_0 = 1}\), \({v_0 = 0}\), \({u_{k+1} = u_k + 2v_k}\) et \({v_{k+1} = 4u_k + 3v_k}\). Exprimer \(u_k\) et \(v_k\) en fonction de \(k\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({\chi_A(X) = X^2 - 4X + (3 - 8) = X^2 - 4X - 5 = (X - 5)(X + 1)}\). Deux valeurs propres distinctes, \(5\) et \(-1\), en dimension \(2\) : \(A\) est diagonalisable.

- \(E_5\) : \({-4x + 2y = 0}\), soit \({y = 2x}\) ; vecteur propre \({V_1 = (1, 2)}\).
- \(E_{-1}\) : \({2x + 2y = 0}\), soit \({y = -x}\) ; vecteur propre \({V_2 = (1, -1)}\).

\[
P = \begin{pmatrix} 1 & 1 \\ 2 & -1 \end{pmatrix}, \qquad D = \begin{pmatrix} 5 & 0 \\ 0 & -1 \end{pmatrix}, \qquad A = PDP^{-1}.
\]

Vérification : \({A\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 10 \end{pmatrix}}\) et \({A\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}}\).

**2.** On pose \({X_k = \begin{pmatrix} u_k \\ v_k \end{pmatrix}}\), de sorte que \({X_{k+1} = AX_k}\). On décompose \(X_0\) dans la base de vecteurs propres : \({X_0 = aV_1 + bV_2}\) donne \({a + b = 1}\) et \({2a - b = 0}\), d’où \({a = \dfrac{1}{3}}\) et \({b = \dfrac{2}{3}}\). Alors

\[
X_k = A^kX_0 = \dfrac{1}{3} \times 5^k V_1 + \dfrac{2}{3} \times (-1)^k V_2.
\]

Donc

\[
u_k = \dfrac{5^k + 2(-1)^k}{3} \qquad \text{et} \qquad v_k = \dfrac{2 \times 5^k - 2(-1)^k}{3}.
\]

Vérification pour \({k = 1}\) : \({u_1 = \dfrac{5 - 2}{3} = 1}\) et \({v_1 = \dfrac{10 + 2}{3} = 4}\), ce qui correspond à \({u_1 = u_0 + 2v_0 = 1}\) et \({v_1 = 4u_0 + 3v_0 = 4}\).
{{% /details %}}
