---
title: 'Fonctions sinus et cosinus'
weight: 4
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> - La **fonction sinus**, notée \( \sin \), est la fonction définie sur \( \mathbb{R} \) par \({x \mapsto \sin(x)}\).  
> - La **fonction cosinus**, notée \( \cos \), est la fonction définie sur \( \mathbb{R} \) par \({x \mapsto \cos(x)}\).  
>
> Leurs courbes représentatives sont appelées des **sinusoïdes**.

![](/images/image169.png)

![](/images/image170.png)

> [!IMPORTANT] **Remarque**  
> Pour tout réel \( x \),  
> \[
-1 \leq \sin(x) \leq 1 \quad \text{et} \quad -1 \leq \cos(x) \leq 1 :
\]
> les deux courbes sont comprises entre les droites d’équations \({y = -1}\) et \({y = 1}\).

## Périodicité et parité

> [!TIP] **Définition**  
> Soit \(T\) un réel strictement positif. Une fonction \( f \) définie sur \(\mathbb{R}\) est **périodique de période \( T \)** si, pour tout réel \( x \),  
> \[
f(x + T) = f(x).
\]

> [!TIP] **Propriétés**  
> Pour tout réel \( x \), \({\sin(x + 2\pi) = \sin(x)}\) et \({\cos(x + 2\pi) = \cos(x)}\).  
> Les fonctions sinus et cosinus sont donc **périodiques de période \( 2\pi \)** (on dit aussi \( 2\pi \)-périodiques).

En effet, ajouter \(2\pi\) revient à faire un tour complet du cercle : on retombe sur le même point-image. Graphiquement, la courbe est formée d’un même motif, de largeur \(2\pi\), répété indéfiniment par translation.

![](/images/image171.png)

> [!TIP] **Propriétés**  
> Pour tout réel \( x \) :  
>   \[
\sin(-x) = -\sin(x) \quad \text{: la fonction sinus est impaire ;}
\]
>   \[
\cos(-x) = \cos(x) \quad \text{: la fonction cosinus est paire.}
\]
> 
> Par conséquent, la courbe de la fonction sinus est symétrique par rapport à l’origine \( O \) du repère, et celle de la fonction cosinus est symétrique par rapport à l’axe des ordonnées.

Les points-images de \(x\) et de \({-x}\) sont symétriques par rapport à l’axe des abscisses : ils ont la même abscisse (même cosinus) et des ordonnées opposées (sinus opposés).

![](/images/image172.png)

## Exercice résolu 1 - Utiliser la courbe représentative de \( \sin \)

> [!NOTE] **Énoncé**  
> À l’aide de la courbe ci-dessous, résoudre graphiquement l’équation \({\sin(x) = 0{,}7}\) sur l’intervalle \([0; 2\pi]\). On donnera des valeurs approchées au dixième.

![](/images/image173.png)

{{% details title="Solution commentée" closed="true" %}}
On trace la droite horizontale d’équation \({y = 0{,}7}\).  
Les solutions sont les abscisses des points d’intersection de cette droite avec la courbe de la fonction sinus sur \([0; 2\pi]\).  
On lit deux points d’intersection :  
\[
x_1 \approx 0{,}8 \quad \text{et} \quad x_2 \approx 2{,}4.
\]
Cohérence : par symétrie de la courbe autour de la droite \({x = \dfrac{\pi}{2}}\), on a \({x_2 = \pi - x_1 \approx 3{,}14 - 0{,}78}\).  
Sur \(]\pi ; 2\pi[\), le sinus est négatif : il n’y a pas d’autre solution.
{{% /details %}}

## Exercice résolu 2 - Étudier la périodicité d’une fonction trigonométrique

> [!NOTE] **Énoncé**  
> On considère la fonction \( f \) définie sur \(\mathbb{R}\) par \({f(x) = 2\cos(x) - \sin(x)}\).  
> Démontrer que \( f \) est périodique de période \( 2\pi \).

{{% details title="Solution commentée" closed="true" %}}
Pour tout réel \( x \), en utilisant la \(2\pi\)-périodicité du cosinus et du sinus :  
\[
f(x + 2\pi) = 2\cos(x + 2\pi) - \sin(x + 2\pi) = 2\cos(x) - \sin(x) = f(x).
\]  
La fonction \( f \) est donc **\( 2\pi \)-périodique**.
{{% /details %}}

## Exercice résolu 3 - Montrer qu’une fonction est paire ou impaire

> [!NOTE] **Énoncé**  
> On considère la fonction \( f \) définie sur \(\mathbb{R}\) par \({f(x) = x\sin(x)}\).  
> 1. Démontrer que \( f \) est paire.  
> 2. Quelle symétrie sa courbe représentative possède-t-elle ?

{{% details title="Solution commentée" closed="true" %}}
1. L’ensemble de définition \(\mathbb{R}\) est symétrique par rapport à 0. Pour tout réel \( x \), en utilisant l’imparité du sinus :
\[
f(-x) = (-x)\sin(-x) = (-x) \times (-\sin(x)) = x\sin(x) = f(x).
\]
La fonction \( f \) est donc **paire**.

2. Sa courbe représentative est **symétrique par rapport à l’axe des ordonnées**.
{{% /details %}}
