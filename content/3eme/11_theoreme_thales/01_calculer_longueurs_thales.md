---
title: 'Calculer des longueurs avec le théorème de Thalès'
weight: 1
cascade:
  type: docs
---

## Le théorème de Thalès

> [!TIP] **Théorème de Thalès**
>
> Si les points \(A\), \(B\), \(M\) d’une part et \(A\), \(C\), \(N\) d’autre part sont alignés, et si les droites \((BC)\) et \((MN)\) sont parallèles, alors
> \[
\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}.
\]

Le théorème s’applique dans deux configurations : la configuration « classique », où \(M\) et \(N\) sont sur les segments \([AB]\) et \([AC]\), et la configuration « papillon », où \(M\) et \(N\) sont de l’autre côté de \(A\).

![](/images/image454.png)

> [!IMPORTANT] **Remarques**
>
> - On a également \({\dfrac{AB}{AM} = \dfrac{AC}{AN} = \dfrac{BC}{MN}}\).
> - Le triangle \(AMN\) est l’image du triangle \(ABC\) par une homothétie de centre \(A\) (de rapport positif dans la configuration classique, négatif dans la configuration papillon).
> - Les longueurs des côtés du triangle \(AMN\) sont proportionnelles à celles des côtés correspondants du triangle \(ABC\) : le triangle \(ABC\) est un agrandissement ou une réduction du triangle \(AMN\).

## Calculer une longueur

> [!NOTE] **Méthode**
>
> 1. On vérifie les deux alignements (dans le même ordre ou en papillon) et le parallélisme.
> 2. On écrit les trois rapports égaux, avec au numérateur les côtés d’un même triangle.
> 3. On remplace par les longueurs connues, on choisit deux rapports avec une seule inconnue et on utilise les produits en croix.

{{% details title="Exemple 1 - configuration classique" closed="true" %}}
Les points \(E\), \(K\), \(F\) sont alignés, ainsi que \(E\), \(L\), \(G\), avec \({(KL) \parallel (FG)}\). On sait que \({EK = 2{,}4}\) cm, \({EF = 6}\) cm, \({EL = 3}\) cm et \({FG = 5}\) cm. D’après le théorème de Thalès :
\[
\dfrac{EK}{EF} = \dfrac{EL}{EG} = \dfrac{KL}{FG}, \qquad \dfrac{2{,}4}{6} = \dfrac{3}{EG} = \dfrac{KL}{5}.
\]
Donc \({EG = \dfrac{6 \times 3}{2{,}4} = 7{,}5}\) cm et \({KL = \dfrac{2{,}4 \times 5}{6} = 2}\) cm.
{{% /details %}}

{{% details title="Exemple 2 - configuration papillon" closed="true" %}}
Les droites \((PR)\) et \((QS)\) se coupent en \(O\) ; les points \(P\), \(O\), \(R\) sont alignés dans cet ordre, de même que \(Q\), \(O\), \(S\), et \({(PQ) \parallel (RS)}\). On sait que \({OP = 4}\) cm, \({OR = 10}\) cm et \({PQ = 3{,}2}\) cm. D’après le théorème de Thalès :
\[
\dfrac{OP}{OR} = \dfrac{OQ}{OS} = \dfrac{PQ}{RS}, \qquad \dfrac{4}{10} = \dfrac{3{,}2}{RS}.
\]
Donc \({RS = \dfrac{10 \times 3{,}2}{4} = 8}\) cm.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Pour estimer la hauteur d’un arbre, Inès place un bâton vertical de \(1{,}5\) m à \(12\) m du pied de l’arbre. En se couchant au sol, au point \(O\) situé à \(2\) m du bâton, elle voit le haut du bâton et le haut de l’arbre alignés. Le bâton et l’arbre sont verticaux, le sol horizontal. Quelle est la hauteur de l’arbre ?

{{% details title="Solution commentée" closed="true" %}}
Notons \(B\) le pied du bâton, \(H\) son sommet, \(A\) le pied de l’arbre et \(T\) son sommet. Les points \(O\), \(B\), \(A\) sont alignés, ainsi que \(O\), \(H\), \(T\). Le bâton et l’arbre étant verticaux, \({(BH) \parallel (AT)}\). On a \({OB = 2}\) m et \({OA = 2 + 12 = 14}\) m. D’après le théorème de Thalès :
\[
\dfrac{OB}{OA} = \dfrac{BH}{AT}, \qquad \dfrac{2}{14} = \dfrac{1{,}5}{AT}, \qquad AT = \dfrac{14 \times 1{,}5}{2} = 10{,}5 \text{ m}.
\]
L’arbre mesure environ \(10{,}5\) m.
{{% /details %}}
