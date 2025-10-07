---
title: 'Fonctions sinus et cosinus'
weight: 4
cascade:
  type: docs
---

## 1. Définition

> [!TIP] **Définition**  
> - La **fonction sinus**, notée \( \sin \), est définie sur \( \mathbb{R} \) par \( x \mapsto \sin(x) \).  
> - La **fonction cosinus**, notée \( \cos \), est définie sur \( \mathbb{R} \) par \( x \mapsto \cos(x) \).  
> Leurs courbes représentatives sont appelées **sinusoïdes**.
> ![](/images/image82.png)

![](/images/image83.png)

> [!IMPORTANT] **Remarque**  
> Pour tout réel \( x \),  
> \[
-1 \leq \sin(x) \leq 1 \quad \text{et} \quad -1 \leq \cos(x) \leq 1.
\]


## 2. Périodicité et parité

> [!TIP] **Définition**  
> Une fonction \( f \) est dite **périodique de période \( T \)** si, pour tout réel \( x \),  
> \[
f(x + T) = f(x).
\]

> [!TIP] **Propriétés**  
> Pour tout \( x \), \( \sin(x + 2\pi) = \sin(x) \) et \( \cos(x + 2\pi) = \cos(x) \).  
>   ⟹ Les fonctions sinus et cosinus sont **\( 2\pi \)-périodiques**.
> 
> ![](/images/image84.png)

![](/images/image85.png)

> [!TIP] **Propriétés**  
> Parité :  
>   \[
\sin(-x) = -\sin(x) \quad \text{(fonction impaire)}
\]
>   \[
\cos(-x) = \cos(x) \quad \text{(fonction paire)}
\]
> ![](/images/image86.png)
> 
> La courbe de la fonction sinus est symétrique par rapport à l’origine \( O \) du repère et la courbe de la fonction cosinus est symétrique par rapport à l’axe des ordonnées.




## Exercice résolu 1 — Utiliser la courbe représentative de \( \cos \)

> [!NOTE] **Énoncé**  
> Résoudre graphiquement \( \cos(x) = 0{,}8 \) sur l’intervalle \([0; 2\pi]\) et donner les valeurs approchées au dixième.

![](/images/image87.png)

{{% details title="Solution commentée" closed="true" %}}
On trace la droite \( y = 0{,}8 \).  
Les abscisses des points d’intersection avec la courbe de \( y = \cos(x) \) donnent les solutions.  
On lit sur le graphique :  
\[
x_1 \approx 0{,}6 \quad \text{et} \quad x_2 \approx 5{,}6.
\]
{{% /details %}}


## Exercice résolu 2 — Étudier la périodicité d’une fonction trigonométrique

> [!NOTE] **Énoncé**  
> On considère \( f(x) = \sin(x) + \cos(x) \).  
> Montrer que \( f \) est périodique de période \( 2\pi \).

{{% details title="Solution commentée" closed="true" %}}
On calcule :  
\[
f(x + 2\pi) = \sin(x + 2\pi) + \cos(x + 2\pi) = \sin(x) + \cos(x) = f(x).
\]  
Donc \( f \) est **\( 2\pi \)-périodique**.
{{% /details %}}


## Exercice résolu 3 — Montrer qu’une fonction est paire ou impaire

> [!NOTE] **Énoncé**  
> Soit \( f(x) = \sin(x) + x \).  
> 1. Montrer que \( f \) est impaire.  
> 2. En déduire la symétrie de sa courbe représentative.

{{% details title="Solution commentée" closed="true" %}}
1. On calcule :
\[
f(-x) = \sin(-x) + (-x) = -\sin(x) - x = -(\sin(x) + x) = -f(x).
\]
Donc \( f \) est **impaire**.

2. Sa courbe est donc **symétrique par rapport à l’origine \( O \)** du repère.
{{% /details %}}