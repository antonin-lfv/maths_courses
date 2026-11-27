---
title: 'Transformer une figure par translation'
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Transformer une figure par **translation**, c’est la faire glisser en ligne droite, sans la tourner, selon :
> - une **direction** ;
> - un **sens** ;
> - une **longueur**.
>
> Ce glissement se représente par une flèche, appelée **vecteur**.

Sur la figure ci-dessous, la translation qui transforme \(A\) en \(B\) fait glisser la forme \(\mathcal{F}\) de 6 carreaux vers la droite et 1 carreau vers le haut. Toutes les flèches vertes sont parallèles, de même sens et de même longueur.

![](/images/image430.png)

{{% details title="Exemple" closed="true" %}}
Pour la translation qui transforme \(A\) en \(B\) :
- la **direction** est celle de la droite \((AB)\) ;
- le **sens** est « de \(A\) vers \(B\) » ;
- la **longueur** est la longueur \(AB\).

Chaque point \(M\) de \(\mathcal{F}\) est transformé en un point \(M'\) tel que \({(MM') \parallel (AB)}\), \({MM' = AB}\) et le trajet de \(M\) vers \(M'\) se fait dans le même sens que de \(A\) vers \(B\). On dit que \(\mathcal{F}'\) est l’**image** de \(\mathcal{F}\) par cette translation.
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Une figure et son image par une translation sont superposables.
> - La translation conserve les alignements, les longueurs, les mesures d’angles et les aires.

> [!IMPORTANT] **Remarque**
>
> Si \(M'\) est l’image de \(M\) par la translation qui transforme \(A\) en \(B\) (avec \(M\) hors de la droite \((AB)\)), alors \(ABM'M\) est un **parallélogramme**. C’est ce qui permet de construire une image sans quadrillage.

## Frises et pavages

> [!TIP] **Définitions**
>
> - Une **frise** est une figure obtenue en reproduisant un motif par des translations, toutes selon la même direction.
> - Un **pavage** est une figure obtenue en reproduisant un motif par des translations selon deux directions différentes, de façon à recouvrir le plan sans trou ni chevauchement.

La frise suivante est obtenue en répétant le motif bleu par la translation représentée par la flèche rouge (4 carreaux vers la droite) :

![](/images/image431.png)

## Construire l’image par une translation

> [!NOTE] **Méthode - Construire l’image d’un point par une translation**
>
> - **Sur quadrillage** : on compte le déplacement de \(A\) vers \(B\) (par exemple 6 carreaux à droite et 1 en haut) et on applique le même déplacement à chaque sommet.
> - **Sans quadrillage** : pour construire l’image \(M'\) de \(M\) par la translation qui transforme \(A\) en \(B\), on construit le parallélogramme \(ABM'M\) : au compas, on reporte \({BM' = AM}\) et \({MM' = AB}\).

> [!NOTE] **Exercice résolu**
>
> Dans un repère, on considère les points \(A(1\,;\,2)\), \(B(4\,;\,3)\) et le triangle \(RST\) avec \(R(0\,;\,0)\), \({S(2\,;\,-1)}\), \(T(1\,;\,3)\).
> 1. Décrire la translation qui transforme \(A\) en \(B\) en nombre d’unités horizontales et verticales.
> 2. Donner les coordonnées des sommets du triangle \(R'S'T'\), image de \(RST\) par cette translation.
> 3. Le triangle \(R'S'T'\) a-t-il la même aire que \(RST\) ?

{{% details title="Solution commentée" closed="true" %}}
1. Pour aller de \(A(1\,;\,2)\) à \(B(4\,;\,3)\), on avance de \({4 - 1 = 3}\) unités vers la droite et de \({3 - 2 = 1}\) unité vers le haut.
2. On ajoute \(3\) à chaque abscisse et \(1\) à chaque ordonnée : \(R'(3\,;\,1)\), \(S'(5\,;\,0)\), \(T'(4\,;\,4)\).
3. Oui : une translation conserve les aires (les deux triangles sont superposables).
{{% /details %}}
