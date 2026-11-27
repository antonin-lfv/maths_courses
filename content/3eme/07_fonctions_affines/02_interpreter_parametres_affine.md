---
title: 'Interpréter les paramètres d’une fonction affine'
weight: 2
cascade:
  type: docs
---

## Coefficient directeur et ordonnée à l’origine

> [!TIP] **Définitions et propriétés**
>
> Soit \(m\) et \(p\) deux nombres, \(f\) la fonction affine \({f : x \mapsto mx + p}\) et \(\mathcal{D}\) sa représentation graphique.
> - Le nombre \(m\) est appelé **coefficient directeur** ou **pente** de la droite \(\mathcal{D}\). Quand on augmente l’abscisse de \(1\), l’ordonnée du point de \(\mathcal{D}\) augmente de \(m\).
> - Le nombre \(p\) est appelé **ordonnée à l’origine** de la droite \(\mathcal{D}\) : c’est l’ordonnée du point d’intersection de \(\mathcal{D}\) avec l’axe des ordonnées, car \({f(0) = p}\).

{{% details title="Exemple" closed="true" %}}
Sur la figure de la page précédente, la droite \(\mathcal{D}\) représente \({f : x \mapsto 2x - 1}\).
- \({p = -1}\) : \(\mathcal{D}\) coupe l’axe des ordonnées au point \({(0\,;\,-1)}\).
- \({m = 2}\) : en partant du point \((1\,;\,1)\) de \(\mathcal{D}\), on avance de \(1\) vers la droite et on monte de \(2\) pour retrouver le point \((2\,;\,3)\) de \(\mathcal{D}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le coefficient directeur indique l’inclinaison de la droite. Si \({m > 0}\), la droite « monte » quand on la parcourt de gauche à droite ; si \({m < 0}\), elle « descend » ; si \({m = 0}\), elle est horizontale. Plus \(m\) est grand en valeur absolue, plus la droite est pentue.

## Lire et déterminer les paramètres

> [!NOTE] **Méthode - Lire \(m\) et \(p\) sur un graphique**
>
> - \(p\) se lit à l’intersection de la droite et de l’axe des ordonnées.
> - Pour \(m\), on part d’un point de la droite, on avance de \(1\) horizontalement et on lit de combien il faut monter (\({m > 0}\)) ou descendre (\({m < 0}\)) pour revenir sur la droite.

> [!NOTE] **Méthode - Déterminer une fonction affine à partir de deux images**
>
> Si \(f\) est affine avec \(f(a)\) et \(f(b)\) connus (\({a \neq b}\)), alors
> \[
m = \dfrac{f(b) - f(a)}{b - a},
\]
> puis on trouve \(p\) en résolvant \({f(a) = ma + p}\).

> [!NOTE] **Exercice résolu**
>
> \(g\) est une fonction affine telle que \({g(1) = 5}\) et \({g(4) = -1}\). Déterminer l’expression de \(g(x)\).

{{% details title="Solution commentée" closed="true" %}}
On cherche \({g(x) = mx + p}\).
\[
m = \dfrac{g(4) - g(1)}{4 - 1} = \dfrac{-1 - 5}{3} = \dfrac{-6}{3} = -2.
\]
Puis \({g(1) = 5}\) donne \({-2 \times 1 + p = 5}\), donc \({p = 7}\). Ainsi \({g(x) = -2x + 7}\).

Vérification : \({g(4) = -8 + 7 = -1}\). La droite « descend » car \({m < 0}\).
{{% /details %}}
