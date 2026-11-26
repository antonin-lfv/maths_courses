---
title: 'Notion de vecteur'
weight: 1
cascade:
  type: docs
---

## Translation et vecteur

> [!TIP] **Définition**
>
> Soit \(A\) et \(B\) deux points distincts du plan. La **translation** qui transforme \(A\) en \(B\) associe à tout point \(M\) du plan l’unique point \(M'\) tel que \(ABM'M\) soit un parallélogramme (éventuellement aplati). On dit que \(M'\) est l’**image** de \(M\) par cette translation.

On peut se représenter une translation comme un « glissement » de tout le plan, sans rotation ni déformation : tous les points se déplacent dans la même direction, dans le même sens et de la même longueur.

> [!TIP] **Définition**
>
> La translation qui transforme \(A\) en \(B\) est appelée **translation de vecteur** \(\overrightarrow{AB}\). Le vecteur \(\overrightarrow{AB}\) est caractérisé par :
> - sa **direction** : celle de la droite \((AB)\) ;
> - son **sens** : de \(A\) vers \(B\) ;
> - sa **norme** (ou longueur), notée \(\|\overrightarrow{AB}\|\) : c’est la longueur \(AB\).
>
> On le représente par une flèche allant de \(A\) (l’**origine**) à \(B\) (l’**extrémité**).

> [!IMPORTANT] **Remarque**
>
> Deux droites parallèles ont la même direction. Il ne faut pas confondre **direction** et **sens** : \(\overrightarrow{AB}\) et \(\overrightarrow{BA}\) ont la même direction mais des sens contraires.

## Égalité de vecteurs

> [!TIP] **Définition**
>
> Deux vecteurs sont **égaux** s’ils ont la même direction, le même sens et la même norme. Autrement dit, \(\overrightarrow{AB} = \overrightarrow{CD}\) signifie que la translation qui transforme \(A\) en \(B\) transforme aussi \(C\) en \(D\).
>
> Toutes les flèches qui représentent un même vecteur sont des **représentants** de ce vecteur ; on le note souvent avec une seule lettre : \(\vec{u}\), \(\vec{v}\)…

> [!TIP] **Propriété**
>
> Soit \(A\), \(B\), \(C\), \(D\) quatre points du plan. \(\overrightarrow{AB} = \overrightarrow{CD}\) si et seulement si \(ABDC\) est un parallélogramme (éventuellement aplati).

![](/images/image385.png)

> [!IMPORTANT] **Remarque**
>
> Attention à l’ordre des lettres : \(\overrightarrow{AB} = \overrightarrow{CD}\) correspond au parallélogramme \(ABDC\), et non \(ABCD\).

> [!TIP] **Propriété**
>
> \(\overrightarrow{AB} = \overrightarrow{CD}\) si et seulement si les segments \([AD]\) et \([BC]\) ont le même milieu.

En effet, un quadrilatère est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu ; les diagonales de \(ABDC\) sont \([AD]\) et \([BC]\).

## Vecteur nul

> [!TIP] **Définition**
>
> Le vecteur associé à la translation qui transforme tout point en lui-même est le **vecteur nul**, noté \(\vec{0}\). Pour tout point \(A\), \(\overrightarrow{AA} = \vec{0}\). Sa norme est nulle et il n’a ni direction ni sens.

> [!TIP] **Conséquence**
>
> \(\overrightarrow{AB} = \vec{0}\) si et seulement si les points \(A\) et \(B\) sont confondus.

## Construire et reconnaître des vecteurs égaux

> [!NOTE] **Méthode 1 — Construire l’image d’un point par une translation**
>
> Soit \(ABC\) un triangle. Construire le point \(D\), image de \(C\) par la translation de vecteur \(\overrightarrow{AB}\), puis le point \(E\) tel que \(\overrightarrow{EA} = \overrightarrow{BC}\).

{{% details title="Solution commentée" closed="true" %}}
- \(D\) est l’image de \(C\) par la translation de vecteur \(\overrightarrow{AB}\) signifie \(\overrightarrow{CD} = \overrightarrow{AB}\), c’est-à-dire que \(ABDC\) est un parallélogramme. On trace la parallèle à \((AB)\) passant par \(C\) et la parallèle à \((AC)\) passant par \(B\) : \(D\) est leur point d’intersection. (On peut aussi reporter au compas \(CD = AB\) et \(BD = AC\).)
- \(\overrightarrow{EA} = \overrightarrow{BC}\) signifie que \(EACB\) est un parallélogramme : \([EC]\) et \([AB]\) ont le même milieu \(I\). On construit \(I\), milieu de \([AB]\), puis \(E\), symétrique de \(C\) par rapport à \(I\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Reconnaître des vecteurs égaux dans une figure**
>
> \(ABCD\) est un parallélogramme de centre \(O\). Citer tous les vecteurs égaux à \(\overrightarrow{AB}\), à \(\overrightarrow{AO}\) et à \(\overrightarrow{OB}\), dont l’origine et l’extrémité sont parmi les points \(A\), \(B\), \(C\), \(D\), \(O\).

{{% details title="Solution commentée" closed="true" %}}
- \(ABCD\) est un parallélogramme, donc \(\overrightarrow{AB} = \overrightarrow{DC}\) (attention au sens : \(\overrightarrow{AB} \neq \overrightarrow{CD}\)).
- Les diagonales se coupent en leur milieu \(O\) : \(O\) est le milieu de \([AC]\), donc \(\overrightarrow{AO} = \overrightarrow{OC}\).
- \(O\) est le milieu de \([BD]\), donc \(\overrightarrow{OB} = \overrightarrow{DO}\).
{{% /details %}}
