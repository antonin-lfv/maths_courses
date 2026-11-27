---
title: 'Variations et signe d’une fonction affine'
weight: 3
cascade:
  type: docs
---

## Sens de variation

On dit qu’une fonction \(f\) est **strictement croissante** sur un intervalle \(I\) si, pour tous réels \(x_1\) et \(x_2\) de \(I\), \({x_1 < x_2}\) entraîne \({f(x_1) < f(x_2)}\) ; **strictement décroissante** si \({x_1 < x_2}\) entraîne \({f(x_1) > f(x_2)}\). Ces notions sont approfondies au chapitre 6.

> [!TIP] **Propriété**
>
> Soit \(f\) la fonction affine définie sur \(\mathbb{R}\) par \({f(x) = mx + p}\).
> - Si \({m > 0}\), \(f\) est strictement croissante sur \(\mathbb{R}\).
> - Si \({m < 0}\), \(f\) est strictement décroissante sur \(\mathbb{R}\).
> - Si \({m = 0}\), \(f\) est constante sur \(\mathbb{R}\).

{{% details title="Démonstration" closed="true" %}}
Soit \({x_1 < x_2}\). On a \({f(x_2) - f(x_1) = m(x_2 - x_1)}\), avec \({x_2 - x_1 > 0}\).
- Si \({m > 0}\), ce produit est strictement positif : \({f(x_1) < f(x_2)}\).
- Si \({m < 0}\), il est strictement négatif : \({f(x_1) > f(x_2)}\).
- Si \({m = 0}\), il est nul : \({f(x_1) = f(x_2)}\).
{{% /details %}}

Les tableaux de variation correspondants sont les suivants (à gauche \({m > 0}\), à droite \({m < 0}\)) :

![](/images/image367.png)

> [!IMPORTANT] **Remarque**
>
> Graphiquement, la droite « monte » de gauche à droite quand \({m > 0}\) et « descend » quand \({m < 0}\).

## Signe de mx + p

> [!TIP] **Propriété**
>
> Soit \({m \neq 0}\) et \(p\) deux réels. L’équation \({mx + p = 0}\) a une unique solution, \({x_0 = -\dfrac{p}{m}}\), et le signe de \({mx + p}\) est donné par :
>
> | Si \({m > 0}\) : \(x\) | \({-\infty}\) | | \({-\dfrac{p}{m}}\) | | \({+\infty}\) |
> |---|---|---|---|---|---|
> | \({mx + p}\) | | \({-}\) | \(0\) | \({+}\) | |
>
> | Si \({m < 0}\) : \(x\) | \({-\infty}\) | | \({-\dfrac{p}{m}}\) | | \({+\infty}\) |
> |---|---|---|---|---|---|
> | \({mx + p}\) | | \({+}\) | \(0\) | \({-}\) | |
>
> Autrement dit, \({mx + p}\) est du **signe de \(m\)** à droite de \({-\dfrac{p}{m}}\), et du signe contraire à gauche.

{{% details title="Démonstration (cas m > 0)" closed="true" %}}
\(mx + p > 0 \iff mx > -p \iff x > -\dfrac{p}{m}\) (division par \({m > 0}\), le sens est conservé). De même \({mx + p < 0 \iff x < -\dfrac{p}{m}}\). Le cas \({m < 0}\) se traite de la même façon, en changeant le sens de l’inégalité lors de la division.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({-0{,}5x + 2 = 0 \iff x = 4}\). Ici \({m = -0{,}5 < 0}\) :

| \(x\) | \({-\infty}\) | | \(4\) | | \({+\infty}\) |
|---|---|---|---|---|---|
| \({-0{,}5x + 2}\) | | \({+}\) | \(0\) | \({-}\) | |
{{% /details %}}

## Exploiter le sens de variation et le signe

> [!NOTE] **Méthode 1 - Étudier une fonction affine**
>
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = 6 - 3x}\).
> 1. Donner le sens de variation de \(f\).
> 2. Dresser le tableau de signes de \(f(x)\).
> 3. Sans calcul, comparer \(f(\sqrt{5})\) et \(f(2{,}3)\).

{{% details title="Solution commentée" closed="true" %}}
1. \({f(x) = -3x + 6}\) : \({m = -3 < 0}\), donc \(f\) est strictement décroissante sur \(\mathbb{R}\).
2. \({-3x + 6 = 0 \iff x = 2}\). Comme \({m < 0}\), \(f(x)\) est positif avant \(2\) et négatif après :

| \(x\) | \({-\infty}\) | | \(2\) | | \({+\infty}\) |
|---|---|---|---|---|---|
| \(f(x)\) | | \({+}\) | \(0\) | \({-}\) | |

3. \({\sqrt{5} \approx 2{,}236 < 2{,}3}\) et \(f\) est strictement décroissante : elle inverse l’ordre, donc \({f(\sqrt{5}) > f(2{,}3)}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Lire le signe pour résoudre une inéquation**
>
> Résoudre dans \(\mathbb{R}\) l’inéquation \({\dfrac{2}{3}x + 4 \leq 0}\) à l’aide du signe d’une fonction affine.

{{% details title="Solution commentée" closed="true" %}}
\({\dfrac{2}{3}x + 4 = 0 \iff x = -4 \times \dfrac{3}{2} = -6}\). Le coefficient \({m = \dfrac{2}{3}}\) est positif, donc l’expression est négative à gauche de \({-6}\), nulle en \({-6}\) :

| \(x\) | \({-\infty}\) | | \({-6}\) | | \({+\infty}\) |
|---|---|---|---|---|---|
| \({\dfrac{2}{3}x + 4}\) | | \({-}\) | \(0\) | \({+}\) | |

L’ensemble des solutions est \({\mathcal{S} = ]-\infty\,;\,-6]}\).
{{% /details %}}
