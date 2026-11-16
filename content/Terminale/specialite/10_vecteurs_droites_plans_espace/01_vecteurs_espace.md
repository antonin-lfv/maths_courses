---
title: "Vecteurs de l'espace"
weight: 1
cascade:
  type: docs
---

## Vecteurs : du plan à l’espace

On étend à l’espace la notion de vecteur vue dans le plan, ainsi que ses propriétés.

> [!TIP] **Définitions**
>
> - À tout couple \((A, B)\) de points de l’espace, on associe le **vecteur** \(\overrightarrow{AB}\) : c’est le vecteur de la translation qui transforme \(A\) en \(B\).
> - Un vecteur non nul \(\overrightarrow{AB}\) est caractérisé par sa **direction** (celle de la droite \((AB)\)), son **sens** (de \(A\) vers \(B\)) et sa **norme**, notée \(\|\overrightarrow{AB}\|\), égale à la longueur \(AB\).
> - Deux vecteurs sont **égaux** s’ils ont même direction, même sens et même norme.

> [!TIP] **Propriété**
>
> \(\overrightarrow{AB} = \overrightarrow{CD}\) si et seulement si \(ABDC\) est un parallélogramme (éventuellement aplati).

{{% details title="Exemple" closed="true" %}}
Dans le cube \(ABCDEFGH\) ci-dessous, les faces sont des carrés, donc \(\overrightarrow{AB} = \overrightarrow{DC} = \overrightarrow{EF} = \overrightarrow{HG}\).

![](/images/image308.png)
{{% /details %}}

> [!TIP] **Définitions**
>
> - La **somme** de deux vecteurs \(\vec{u}\) et \(\vec{v}\) est définie comme dans le plan : si \(\vec{u} = \overrightarrow{AB}\) et \(\vec{v} = \overrightarrow{BC}\), alors \(\vec{u} + \vec{v} = \overrightarrow{AC}\).
> - Le **vecteur nul**, noté \(\vec{0}\), est le vecteur \(\overrightarrow{AA}\) (pour tout point \(A\)).
> - Soit \(\vec{u}\) un vecteur non nul et \(k\) un réel non nul. Le **produit** \(k\vec{u}\) est le vecteur qui a :
>   - la même direction que \(\vec{u}\) ;
>   - le même sens que \(\vec{u}\) si \(k > 0\), le sens contraire si \(k < 0\) ;
>   - pour norme \(|k| \times \|\vec{u}\|\).
>
>   Par convention, si \(k = 0\) ou \(\vec{u} = \vec{0}\), alors \(k\vec{u} = \vec{0}\).

> [!TIP] **Propriétés (admises)**
>
> - **Relation de Chasles** : pour tous points \(A\), \(B\), \(C\) de l’espace, \(\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}\).
> - **Règles de calcul** : pour tous vecteurs \(\vec{u}\), \(\vec{v}\) et tous réels \(k\), \(h\) :
>   \(k(\vec{u} + \vec{v}) = k\vec{u} + k\vec{v}\) ; \((k + h)\vec{u} = k\vec{u} + h\vec{u}\) ; \(k(h\vec{u}) = (kh)\vec{u}\).

## Combinaison linéaire de vecteurs

> [!TIP] **Définition**
>
> Soit \(n \geq 1\) un entier, \(\vec{u_1}, \dots, \vec{u_n}\) des vecteurs et \(k_1, \dots, k_n\) des réels. Tout vecteur de la forme
> \[
\vec{v} = k_1\vec{u_1} + k_2\vec{u_2} + \dots + k_n\vec{u_n}
\]
> est appelé **combinaison linéaire** des vecteurs \(\vec{u_1}, \dots, \vec{u_n}\).

{{% details title="Exemple" closed="true" %}}
Dans le cube \(ABCDEFGH\), par la relation de Chasles :
\[
\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE},
\]
car \(\overrightarrow{BC} = \overrightarrow{AD}\) et \(\overrightarrow{CG} = \overrightarrow{AE}\). Le vecteur \(\overrightarrow{AG}\) est une combinaison linéaire de \(\overrightarrow{AB}\), \(\overrightarrow{AD}\) et \(\overrightarrow{AE}\).
{{% /details %}}

## Vecteurs colinéaires

> [!TIP] **Définition**
>
> Deux vecteurs \(\vec{u}\) et \(\vec{v}\) sont **colinéaires** s’il existe un réel \(k\) tel que \(\vec{u} = k\vec{v}\) ou \(\vec{v} = k\vec{u}\). Le vecteur nul est colinéaire à tout vecteur.

> [!TIP] **Propriétés**
>
> - Deux vecteurs non nuls sont colinéaires si et seulement s’ils ont la même direction.
> - Trois points \(A\), \(B\) et \(C\) de l’espace sont **alignés** si et seulement si les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont colinéaires.

## Utiliser des combinaisons linéaires de vecteurs

> [!NOTE] **Méthode 1 — Exprimer un vecteur comme combinaison linéaire**
>
> \(ABCD\) est un tétraèdre. On note \(I\) le milieu de \([BC]\), \(J\) le milieu de \([AD]\), et \(K\) le point défini par \(\overrightarrow{AK} = \dfrac{1}{4}\big(\overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD}\big)\).
> 1. Exprimer \(\overrightarrow{AI}\), puis \(\overrightarrow{IJ}\), en fonction de \(\overrightarrow{AB}\), \(\overrightarrow{AC}\) et \(\overrightarrow{AD}\).
> 2. Démontrer que \(K\) est le milieu du segment \([IJ]\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(I\) étant le milieu de \([BC]\), \(\overrightarrow{AI} = \overrightarrow{AB} + \overrightarrow{BI} = \overrightarrow{AB} + \dfrac{1}{2}\overrightarrow{BC} = \overrightarrow{AB} + \dfrac{1}{2}\big(\overrightarrow{BA} + \overrightarrow{AC}\big) = \dfrac{1}{2}\overrightarrow{AB} + \dfrac{1}{2}\overrightarrow{AC}\).  
Avec Chasles : \(\overrightarrow{IJ} = \overrightarrow{IA} + \overrightarrow{AJ} = -\overrightarrow{AI} + \dfrac{1}{2}\overrightarrow{AD} = -\dfrac{1}{2}\overrightarrow{AB} - \dfrac{1}{2}\overrightarrow{AC} + \dfrac{1}{2}\overrightarrow{AD}\).

**2.** Soit \(M\) le milieu de \([IJ]\). Alors \(\overrightarrow{AM} = \dfrac{1}{2}\big(\overrightarrow{AI} + \overrightarrow{AJ}\big)\), d’où
\[
\overrightarrow{AM} = \frac{1}{2}\left(\frac{1}{2}\overrightarrow{AB} + \frac{1}{2}\overrightarrow{AC} + \frac{1}{2}\overrightarrow{AD}\right) = \frac{1}{4}\big(\overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD}\big) = \overrightarrow{AK}.
\]
Donc \(M = K\) : le point \(K\) est le milieu de \([IJ]\).
{{% /details %}}
