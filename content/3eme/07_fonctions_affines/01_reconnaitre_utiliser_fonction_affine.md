---
title: 'Reconnaitre et utiliser une fonction affine'
weight: 1
cascade:
  type: docs
---

## Fonction affine

> [!TIP] **Définition**
>
> Soit \(m\) et \(p\) deux nombres. Une **fonction affine** est une fonction qui, à tout nombre \(x\), associe le nombre \(mx + p\). Si on désigne par \(f\) cette fonction, on note \(f : x \mapsto mx + p\) ou \(f(x) = mx + p\).

{{% details title="Exemples" closed="true" %}}
- \(f : x \mapsto -3x + 4\) est une fonction affine, avec \(m = -3\) et \(p = 4\).
- \(g(x) = \dfrac{x}{2} - 1\) est affine : \(g(x) = 0{,}5x - 1\), avec \(m = 0{,}5\) et \(p = -1\).
- \(h(x) = 7\) est affine (\(m = 0\), \(p = 7\)) : on dit qu’elle est **constante**.
- \(k(x) = x^2 + 1\) n’est pas affine (présence de \(x^2\)) ; \(\ell(x) = \dfrac{3}{x}\) non plus.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Pour reconnaitre une fonction affine, on développe et on réduit son expression : par exemple \(q(x) = (x + 2)^2 - x^2 = x^2 + 4x + 4 - x^2 = 4x + 4\) est affine, bien que son écriture de départ ne le montre pas.

## Représentation graphique

> [!TIP] **Propriété**
>
> Soit \(f\) une fonction.
> - Si \(f\) est une fonction affine, alors sa représentation graphique est une **droite**.
> - Si la représentation graphique de \(f\) est une droite, alors \(f\) est une fonction affine.

> [!NOTE] **Méthode — Tracer la représentation graphique d’une fonction affine**
>
> Puisque c’est une droite, il suffit de calculer les images de **deux** nombres (bien choisis), de placer les deux points correspondants et de tracer la droite qui passe par ces points. Un troisième point permet de vérifier.

{{% details title="Exemple" closed="true" %}}
Soit \(f : x \mapsto 2x - 1\). On calcule deux images :

| \(x\) | \(0\) | \(2\) |
|---|---|---|
| \(f(x)\) | \(-1\) | \(3\) |
| Point | \(A\) | \(B\) |

La représentation graphique de \(f\) est la droite \(\mathcal{D} = (AB)\), avec \(A(0\,;\,-1)\) et \(B(2\,;\,3)\) :

![](/images/image445.png)
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Soit \(f(x) = -0{,}5x + 3\).
> 1. Calculer l’image de \(4\) et l’antécédent de \(5\).
> 2. Le point \(M(10\,;\,-2)\) est-il sur la représentation graphique de \(f\) ?

{{% details title="Solution commentée" closed="true" %}}
1. \(f(4) = -0{,}5 \times 4 + 3 = -2 + 3 = 1\). Antécédent de \(5\) : \(-0{,}5x + 3 = 5\), soit \(-0{,}5x = 2\), donc \(x = -4\).
2. \(f(10) = -5 + 3 = -2\) : le point \(M\) est bien sur la droite.
{{% /details %}}
