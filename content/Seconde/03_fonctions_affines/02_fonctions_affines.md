---
title: 'Fonctions affines'
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Définitions**
>
> Soit \(m\) et \(p\) deux nombres réels. La fonction \(f\) définie sur \(\mathbb{R}\) par
> \[
f(x) = mx + p
\]
> est appelée **fonction affine**.
> - Si \({p = 0}\), \({f(x) = mx}\) : \(f\) est une fonction **linéaire** (elle traduit une situation de proportionnalité, de coefficient \(m\)).
> - Si \({m = 0}\), \({f(x) = p}\) : \(f\) est une fonction **constante**.

{{% details title="Exemple" closed="true" %}}
- Un dépanneur facture \(40\) € de déplacement et \(35\) € par heure de travail. Le prix (en €) pour \(x\) heures est \({f(x) = 35x + 40}\) : \(f\) est affine, avec \({m = 35}\) et \({p = 40}\).
- \({g(x) = \dfrac{x}{4}}\) est linéaire (\({m = \dfrac{1}{4}}\), \({p = 0}\)) ; \({h(x) = -2}\) est constante.
- \({k(x) = 3(x - 1) + 7 = 3x + 4}\) est affine ; en revanche \({x \longmapsto x^2 + 1}\) et \(x \longmapsto \dfrac{1}{x}\) ne le sont pas.
{{% /details %}}

## Représentation graphique

> [!TIP] **Propriété**
>
> Dans un repère, la courbe représentative de la fonction affine \({f : x \longmapsto mx + p}\) est une **droite**, non parallèle à l’axe des ordonnées, d’équation \({y = mx + p}\).
> - \(m\) est le **coefficient directeur** (ou **pente**) de la droite ;
> - \(p\) est l’**ordonnée à l’origine** : la droite passe par le point \((0\,;\,p)\).
>
> Réciproquement, toute droite non parallèle à l’axe des ordonnées représente une fonction affine.

> [!IMPORTANT] **Remarques**
>
> - La droite représentant une fonction **linéaire** passe par l’origine ; celle d’une fonction **constante** est parallèle à l’axe des abscisses.
> - Lecture graphique de \(m\) : quand on avance de \(1\) unité vers la droite, on monte de \(m\) unités si \({m > 0}\), on descend de \(|m|\) unités si \({m < 0}\).

![](/images/image366.png)

{{% details title="Exemple" closed="true" %}}
Sur la figure, la droite \(d_1\) passe par \({(0\,;\,-2)}\) : \({p = -2}\). En partant de ce point, on avance de \(2\) et on monte de \(3\) : \({m = \dfrac{3}{2} = 1{,}5}\). \(d_1\) représente \({x \longmapsto 1{,}5x - 2}\).

La droite \(d_2\) passe par \((0\,;\,3)\) ; en avançant de \(2\), on descend de \(1\) : \({m = -\dfrac{1}{2}}\). \(d_2\) représente \({x \longmapsto -0{,}5x + 3}\).
{{% /details %}}

## Accroissements

> [!TIP] **Propriété**
>
> Une fonction \(f\) définie sur \(\mathbb{R}\) est affine, de la forme \({f(x) = mx + p}\), si et seulement si, pour tous réels \(x_1\) et \(x_2\) distincts,
> \[
\dfrac{f(x_2) - f(x_1)}{x_2 - x_1} = m.
\]
> Ce quotient, appelé **taux d’accroissement** de \(f\) entre \(x_1\) et \(x_2\), est donc constant : les accroissements de \(f(x)\) sont proportionnels aux accroissements de \(x\).

{{% details title="Démonstration (sens direct)" closed="true" %}}
Si \({f(x) = mx + p}\), alors pour \({x_1 \neq x_2}\) :
\[
\dfrac{f(x_2) - f(x_1)}{x_2 - x_1} = \dfrac{(mx_2 + p) - (mx_1 + p)}{x_2 - x_1} = \dfrac{m(x_2 - x_1)}{x_2 - x_1} = m.
\]
Réciproquement, si ce quotient vaut toujours \(m\), on choisit \({x_1 = 0}\) : pour tout \({x \neq 0}\), \({f(x) - f(0) = m x}\), donc \({f(x) = mx + f(0)}\), ce qui reste vrai pour \({x = 0}\). \(f\) est affine, avec \({p = f(0)}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Avec \({f(x) = 35x + 40}\) (dépanneur) : chaque heure supplémentaire coûte \(35\) €. Entre \(2\) h et \(5\) h, \({\dfrac{f(5) - f(2)}{5 - 2} = \dfrac{215 - 110}{3} = 35}\).
{{% /details %}}

## Déterminer une fonction affine

> [!NOTE] **Méthode 1 - Déterminer l’expression d’une fonction affine à partir de deux images**
>
> \(f\) est une fonction affine telle que \({f(-1) = 5}\) et \({f(3) = -3}\). Déterminer l’expression de \(f(x)\).

{{% details title="Solution commentée" closed="true" %}}
\(f\) est affine : \({f(x) = mx + p}\).
- Le coefficient \(m\) est le taux d’accroissement entre \({-1}\) et \(3\) :
\[
m = \dfrac{f(3) - f(-1)}{3 - (-1)} = \dfrac{-3 - 5}{4} = -2.
\]
- On obtient \(p\) avec l’une des deux données : \({f(3) = -2 \times 3 + p = -3}\), donc \({p = 3}\).

Ainsi \({f(x) = -2x + 3}\). Vérification : \({f(-1) = 2 + 3 = 5}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Tracer la droite représentant une fonction affine**
>
> Tracer dans un repère la droite représentant \({g(x) = -\dfrac{2}{3}x + 1}\).

{{% details title="Solution commentée" closed="true" %}}
Une droite est déterminée par deux points. On choisit des abscisses qui donnent des calculs simples :
- \({g(0) = 1}\) : la droite passe par \(A(0\,;\,1)\) ;
- \({g(3) = -2 + 1 = -1}\) : elle passe par \({B(3\,;\,-1)}\).

On trace la droite \((AB)\). Contrôle avec la pente : de \(A\) à \(B\), on avance de \(3\) et on descend de \(2\), ce qui correspond bien à \({m = -\dfrac{2}{3}}\). Un troisième point, par exemple \({g(-3) = 3}\), permet de vérifier le tracé.
{{% /details %}}
