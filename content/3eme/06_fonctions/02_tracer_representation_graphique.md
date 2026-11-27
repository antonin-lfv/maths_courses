---
title: 'Tracer la représentation graphique d’une fonction'
weight: 2
cascade:
  type: docs
---

## Représentation graphique

> [!TIP] **Définition**
>
> Dans un repère, la **représentation graphique** d’une fonction \(f\) est l’ensemble des points de coordonnées \((x\,;\,f(x))\). Cette représentation graphique est également appelée **courbe représentative** de la fonction \(f\), souvent notée \(\mathcal{C}_f\).

> [!IMPORTANT] **Remarque**
>
> Dire que le point \(M(a\,;\,b)\) appartient à \(\mathcal{C}_f\) revient à dire que \({f(a) = b}\).

## Tracer une courbe point par point

> [!NOTE] **Méthode**
>
> 1. On calcule les images de plusieurs valeurs de \(x\) et on les regroupe dans un tableau de valeurs.
> 2. On place dans un repère les points de coordonnées \((x\,;\,f(x))\).
> 3. On relie ces points par une courbe « régulière » (sans angles), à main levée. En cas de doute sur l’allure, on calcule des points supplémentaires.

{{% details title="Exemple" closed="true" %}}
Soit \({f : x \mapsto 0{,}5x^2 - 2}\). On calcule quelques valeurs :

| \(x\) | \({-3}\) | \({-2}\) | \({-1}\) | \(0\) | \(1\) | \(2\) | \(3\) |
|---|---|---|---|---|---|---|---|
| \(f(x)\) | \(2{,}5\) | \(0\) | \({-1{,}5}\) | \({-2}\) | \({-1{,}5}\) | \(0\) | \(2{,}5\) |
| Point | \(A\) | \(B\) | \(C\) | \(D\) | \(E\) | \(F\) | \(G\) |

On place les points \({A(-3\,;\,2{,}5)}\), \({B(-2\,;\,0)}\), …, \(G(3\,;\,2{,}5)\), puis on les relie par une courbe :

![](/images/image443.png)
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Soit \({g(x) = x^2 - 4x}\).
> 1. Compléter le tableau de valeurs pour \(x\) allant de \({-1}\) à \(5\).
> 2. Le point \(K(6\,;\,12)\) appartient-il à la courbe de \(g\) ? Et le point \({L(-2\,;\,10)}\) ?

{{% details title="Solution commentée" closed="true" %}}
1. On remplace \(x\) par chaque valeur, par exemple \({g(-1) = (-1)^2 - 4 \times (-1) = 1 + 4 = 5}\) :

| \(x\) | \({-1}\) | \(0\) | \(1\) | \(2\) | \(3\) | \(4\) | \(5\) |
|---|---|---|---|---|---|---|---|
| \(g(x)\) | \(5\) | \(0\) | \({-3}\) | \({-4}\) | \({-3}\) | \(0\) | \(5\) |

2. \({g(6) = 36 - 24 = 12}\) : \(K\) appartient à la courbe. \({g(-2) = 4 + 8 = 12 \neq 10}\) : \(L\) n’appartient pas à la courbe.
{{% /details %}}
