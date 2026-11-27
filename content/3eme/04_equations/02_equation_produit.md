---
title: 'Résoudre une équation produit'
weight: 2
cascade:
  type: docs
---

## Produit nul

> [!TIP] **Propriété**
>
> On considère un produit de deux facteurs :
> - si au moins l’un des facteurs est nul, alors ce produit est nul ;
> - si ce produit est nul, alors au moins l’un des facteurs est nul.
>
> Autrement dit : \({A \times B = 0}\) si et seulement si \({A = 0}\) ou \({B = 0}\).

> [!IMPORTANT] **Remarque**
>
> Une équation écrite sous la forme d’un produit égal à \(0\), comme \({(ax + b)(cx + d) = 0}\), est appelée une **équation produit** (ou équation produit nul).

{{% details title="Exemple" closed="true" %}}
On résout \({(2x - 5)(x + 3) = 0}\). Un produit est nul si et seulement si l’un de ses facteurs est nul :
\[
2x - 5 = 0 \quad \text{ou} \quad x + 3 = 0, \qquad \text{soit} \qquad x = \dfrac{5}{2} \quad \text{ou} \quad x = -3.
\]
L’équation a deux solutions : \(\dfrac{5}{2}\) et \({-3}\).
{{% /details %}}

> [!NOTE] **Méthode - Se ramener à une équation produit**
>
> Pour se ramener à une équation produit, il est parfois nécessaire de tout passer dans un membre (pour avoir \(0\) dans l’autre), puis de **factoriser**.

> [!NOTE] **Exercice résolu**
>
> Résoudre les équations \({x^2 = 6x}\) et \({x^2 - 16 = 0}\).

{{% details title="Solution commentée" closed="true" %}}
- \({x^2 = 6x}\) équivaut à \({x^2 - 6x = 0}\). On factorise par \(x\) : \({x(x - 6) = 0}\). Donc \({x = 0}\) ou \({x - 6 = 0}\). Les solutions sont \(0\) et \(6\).
  (Diviser par \(x\) aurait fait perdre la solution \(0\) : on ne divise pas par une expression qui peut être nulle.)
- \({x^2 - 16 = 0}\). On factorise avec \({a^2 - b^2 = (a + b)(a - b)}\) : \({(x + 4)(x - 4) = 0}\). Donc \({x = -4}\) ou \({x = 4}\).
{{% /details %}}
