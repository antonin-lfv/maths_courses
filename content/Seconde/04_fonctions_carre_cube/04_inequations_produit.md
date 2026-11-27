---
title: 'Inéquations produit et quotient'
weight: 4
cascade:
  type: docs
---

On sait déjà étudier le signe d’une expression affine \({mx + p}\) (chapitre 3). Pour résoudre une inéquation plus compliquée, on se ramène à l’étude du signe d’un **produit** ou d’un **quotient** de facteurs affines.

## Signe d’un produit

> [!TIP] **Propriété - Règle des signes**
>
> Soit \(A(x)\) et \(B(x)\) deux expressions algébriques.
> - Le produit \({A(x) \times B(x)}\) est **strictement positif** si et seulement si \(A(x)\) et \(B(x)\) sont non nuls et **de même signe**.
> - Il est **strictement négatif** si et seulement si \(A(x)\) et \(B(x)\) sont non nuls et **de signes contraires**.
> - Il est **nul** si et seulement si \({A(x) = 0}\) ou \({B(x) = 0}\).
>
> Plus généralement, un produit de facteurs non nuls est positif s’il contient un nombre pair de facteurs négatifs, négatif sinon.

> [!NOTE] **Méthode - Dresser le tableau de signes d’un produit**
>
> 1. On détermine la valeur qui annule chaque facteur.
> 2. On range ces valeurs dans l’ordre croissant sur la première ligne du tableau.
> 3. On consacre une ligne au signe de chaque facteur.
> 4. Dans la dernière ligne, on applique la règle des signes colonne par colonne.

{{% details title="Exemple" closed="true" %}}
On résout \({(2x - 3)(x + 1) > 0}\). Les facteurs s’annulent en \(\dfrac{3}{2}\) et \({-1}\), et leurs coefficients \(2\) et \(1\) sont positifs.

| \(x\) | \({-\infty}\) | | \({-1}\) | | \(\dfrac{3}{2}\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \({2x - 3}\) | | \({-}\) | | \({-}\) | \(0\) | \({+}\) | |
| \({x + 1}\) | | \({-}\) | \(0\) | \({+}\) | | \({+}\) | |
| \({(2x - 3)(x + 1)}\) | | \({+}\) | \(0\) | \({-}\) | \(0\) | \({+}\) | |

\({\mathcal{S} = ]-\infty\,;\,-1[ \cup \left]\dfrac{3}{2}\,;\,+\infty\right[}\).
{{% /details %}}

## Signe d’un quotient

> [!TIP] **Propriété**
>
> Pour tout \(x\) tel que \({B(x) \neq 0}\), le quotient \(\dfrac{A(x)}{B(x)}\) a le **même signe** que le produit \({A(x) \times B(x)}\). Il s’annule là où \({A(x) = 0}\) (et \({B(x) \neq 0}\)) et n’est pas défini là où \({B(x) = 0}\).

> [!IMPORTANT] **Remarque**
>
> Dans un tableau de signes, on indique une **valeur interdite** par une double barre ‖ dans la ligne du quotient. Une valeur interdite n’est jamais solution, même pour une inégalité large.

{{% details title="Exemple" closed="true" %}}
On résout \({\dfrac{x - 2}{x + 3} \leq 0}\). Valeur interdite : \({-3}\).

| \(x\) | \({-\infty}\) | | \({-3}\) | | \(2\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \({x - 2}\) | | \({-}\) | | \({-}\) | \(0\) | \({+}\) | |
| \({x + 3}\) | | \({-}\) | \(0\) | \({+}\) | | \({+}\) | |
| \({\dfrac{x - 2}{x + 3}}\) | | \({+}\) | ‖ | \({-}\) | \(0\) | \({+}\) | |

\({\mathcal{S} = ]-3\,;\,2]}\) : \({-3}\) est exclu, \(2\) est inclus.
{{% /details %}}

## Résoudre par un tableau de signes

> [!NOTE] **Méthode 1 - Se ramener à un produit**
>
> Résoudre dans \(\mathbb{R}\) l’inéquation \({x^2 \geq 3x}\).

{{% details title="Solution commentée" closed="true" %}}
On ne divise pas par \(x\) (dont on ne connaît pas le signe) : on passe tout dans un membre et on factorise.
\[
x^2 \geq 3x \iff x^2 - 3x \geq 0 \iff x(x - 3) \geq 0.
\]

| \(x\) | \({-\infty}\) | | \(0\) | | \(3\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \(x\) | | \({-}\) | \(0\) | \({+}\) | | \({+}\) | |
| \({x - 3}\) | | \({-}\) | | \({-}\) | \(0\) | \({+}\) | |
| \({x(x - 3)}\) | | \({+}\) | \(0\) | \({-}\) | \(0\) | \({+}\) | |

\({\mathcal{S} = ]-\infty\,;\,0] \cup [3\,;\,+\infty[}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Facteur à coefficient négatif**
>
> Résoudre dans \(\mathbb{R}\) l’inéquation \({(3 - x)(2x + 5) \geq 0}\).

{{% details title="Solution commentée" closed="true" %}}
\({3 - x = 0 \iff x = 3}\) ; le coefficient de \(x\) est \({-1 < 0}\), donc \({3 - x}\) est positif avant \(3\) et négatif après. \({2x + 5 = 0 \iff x = -\dfrac{5}{2}}\), coefficient positif.

| \(x\) | \({-\infty}\) | | \({-\dfrac{5}{2}}\) | | \(3\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \({3 - x}\) | | \({+}\) | | \({+}\) | \(0\) | \({-}\) | |
| \({2x + 5}\) | | \({-}\) | \(0\) | \({+}\) | | \({+}\) | |
| produit | | \({-}\) | \(0\) | \({+}\) | \(0\) | \({-}\) | |

\({\mathcal{S} = \left[-\dfrac{5}{2}\,;\,3\right]}\).
{{% /details %}}

> [!NOTE] **Méthode 3 - Se ramener à un quotient comparé à 0**
>
> Résoudre dans \(\mathbb{R}\) l’inéquation \({\dfrac{x + 4}{2 - x} \geq 1}\).

{{% details title="Solution commentée" closed="true" %}}
Valeur interdite : \(2\). On ne multiplie pas par \({2 - x}\), dont le signe varie : on compare à \(0\).
\[
\dfrac{x + 4}{2 - x} - 1 \geq 0 \iff \dfrac{x + 4 - (2 - x)}{2 - x} \geq 0 \iff \dfrac{2x + 2}{2 - x} \geq 0.
\]

| \(x\) | \({-\infty}\) | | \({-1}\) | | \(2\) | | \({+\infty}\) |
|---|---|---|---|---|---|---|---|
| \({2x + 2}\) | | \({-}\) | \(0\) | \({+}\) | | \({+}\) | |
| \({2 - x}\) | | \({+}\) | | \({+}\) | \(0\) | \({-}\) | |
| \({\dfrac{2x + 2}{2 - x}}\) | | \({-}\) | \(0\) | \({+}\) | ‖ | \({-}\) | |

\({\mathcal{S} = [-1\,;\,2[}\). Vérification avec \({x = 0}\) : \({\dfrac{4}{2} = 2 \geq 1}\).
{{% /details %}}
