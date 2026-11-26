---
title: 'Opérations sur les vecteurs'
weight: 2
cascade:
  type: docs
---

## Somme de deux vecteurs

> [!TIP] **Définition**
>
> Soit \(\vec{u}\) et \(\vec{v}\) deux vecteurs. La **somme** \(\vec{u} + \vec{v}\) est le vecteur associé à la translation obtenue en enchaînant la translation de vecteur \(\vec{u}\) puis la translation de vecteur \(\vec{v}\).

> [!TIP] **Propriété — Relation de Chasles**
>
> Pour tous points \(A\), \(B\), \(C\) du plan :
> \[
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.
\]

Pour additionner deux vecteurs, on place donc l’origine du second à l’extrémité du premier (« bout à bout »).

> [!TIP] **Propriété — Règle du parallélogramme**
>
> Soit \(A\), \(B\), \(C\), \(D\) quatre points. \(ABCD\) est un parallélogramme si et seulement si
> \[
\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}.
\]

Pour additionner deux vecteurs de même origine, on construit donc le parallélogramme dont ils sont deux côtés : la somme est la diagonale issue de cette origine.

![](/images/image386.png)

{{% details title="Démonstration de la règle du parallélogramme" closed="true" %}}
D’après la relation de Chasles, \(\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}\). Donc \(\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}\) équivaut à \(\overrightarrow{AD} = \overrightarrow{BC}\), c’est-à-dire à « \(ADCB\) est un parallélogramme », ce qui revient à dire que \(ABCD\) est un parallélogramme.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’ordre des termes n’a pas d’importance : \(\vec{u} + \vec{v} = \vec{v} + \vec{u}\). De plus \(\vec{u} + \vec{0} = \vec{u}\).

## Opposé et différence

> [!TIP] **Définitions**
>
> - L’**opposé** du vecteur \(\vec{u}\), noté \(-\vec{u}\), est le vecteur de même direction et de même norme que \(\vec{u}\), mais de sens contraire. Pour tous points \(A\) et \(B\), \(-\overrightarrow{AB} = \overrightarrow{BA}\), et \(\vec{u} + (-\vec{u}) = \vec{0}\).
> - La **différence** \(\vec{u} - \vec{v}\) est le vecteur \(\vec{u} + (-\vec{v})\).

{{% details title="Exemple" closed="true" %}}
\(\overrightarrow{AB} - \overrightarrow{CB} = \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}\). Pour tous points \(A\), \(B\), \(M\) : \(\overrightarrow{MB} - \overrightarrow{MA} = \overrightarrow{AM} + \overrightarrow{MB} = \overrightarrow{AB}\).
{{% /details %}}

## Produit d’un vecteur par un réel

> [!TIP] **Définition**
>
> Soit \(\vec{u}\) un vecteur non nul et \(k\) un réel non nul. Le **produit** de \(\vec{u}\) par \(k\), noté \(k\vec{u}\), est le vecteur :
> - de même direction que \(\vec{u}\) ;
> - de même sens que \(\vec{u}\) si \(k > 0\), de sens contraire si \(k < 0\) ;
> - de norme \(|k| \times \|\vec{u}\|\).
>
> Si \(k = 0\) ou \(\vec{u} = \vec{0}\), on pose \(k\vec{u} = \vec{0}\).

![](/images/image387.png)

> [!TIP] **Règles de calcul (admises)**
>
> Pour tous vecteurs \(\vec{u}\), \(\vec{v}\) et tous réels \(k\), \(k'\) :
> \[
k(\vec{u} + \vec{v}) = k\vec{u} + k\vec{v}, \qquad (k + k')\vec{u} = k\vec{u} + k'\vec{u}, \qquad k(k'\vec{u}) = (kk')\vec{u}.
\]

{{% details title="Exemple" closed="true" %}}
\(3(\vec{u} - 2\vec{v}) + 4\vec{v} = 3\vec{u} - 6\vec{v} + 4\vec{v} = 3\vec{u} - 2\vec{v}\).
{{% /details %}}

## Caractérisation du milieu

> [!TIP] **Propriété**
>
> Soit \(A\), \(B\), \(M\) trois points. Les propositions suivantes sont équivalentes :
> - \(M\) est le milieu du segment \([AB]\) ;
> - \(\overrightarrow{AM} = \overrightarrow{MB}\) ;
> - \(\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}\) ;
> - \(\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB}\).

{{% details title="Démonstration" closed="true" %}}
\(M\) est le milieu de \([AB]\) si et seulement si \(\overrightarrow{AM}\) et \(\overrightarrow{MB}\) ont même direction (\(M \in (AB)\)), même sens (\(M\) entre \(A\) et \(B\)) et même norme (\(AM = MB\)), c’est-à-dire \(\overrightarrow{AM} = \overrightarrow{MB}\).

Ensuite, \(\overrightarrow{AM} = \overrightarrow{MB} \iff \overrightarrow{MB} - \overrightarrow{AM} = \vec{0} \iff \overrightarrow{MB} + \overrightarrow{MA} = \vec{0}\).

Enfin, par la relation de Chasles, \(\overrightarrow{AB} = \overrightarrow{AM} + \overrightarrow{MB}\), donc \(\overrightarrow{AM} = \overrightarrow{MB} \iff \overrightarrow{AB} = 2\overrightarrow{AM} \iff \overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}\).
{{% /details %}}

## Calculer avec des vecteurs

> [!NOTE] **Méthode 1 — Simplifier une somme avec la relation de Chasles**
>
> Simplifier, pour tous points \(A\), \(B\), \(C\), \(D\) :
> \[
\vec{u} = \overrightarrow{AB} + \overrightarrow{CA} - \overrightarrow{CB} \qquad \text{et} \qquad \vec{v} = \overrightarrow{DA} - \overrightarrow{DB} + \overrightarrow{CB} - \overrightarrow{CA}.
\]

{{% details title="Solution commentée" closed="true" %}}
On transforme chaque différence en somme (\(-\overrightarrow{XY} = \overrightarrow{YX}\)), puis on réordonne les termes pour les mettre « bout à bout ».
\[
\vec{u} = \overrightarrow{AB} + \overrightarrow{CA} + \overrightarrow{BC} = \overrightarrow{CA} + \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{CB} + \overrightarrow{BC} = \overrightarrow{CC} = \vec{0}.
\]
\[
\vec{v} = \overrightarrow{DA} + \overrightarrow{BD} + \overrightarrow{CB} + \overrightarrow{AC} = \overrightarrow{BD} + \overrightarrow{DA} + \overrightarrow{AC} + \overrightarrow{CB} = \overrightarrow{BB} = \vec{0}.
\]
{{% /details %}}

> [!NOTE] **Méthode 2 — Démontrer une égalité vectorielle**
>
> Soit \(ABC\) un triangle et \(I\) le milieu de \([BC]\). Démontrer que \(\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AI}\).

{{% details title="Solution commentée" closed="true" %}}
On fait apparaître le point \(I\) dans chaque vecteur grâce à la relation de Chasles :
\[
\overrightarrow{AB} + \overrightarrow{AC} = \left(\overrightarrow{AI} + \overrightarrow{IB}\right) + \left(\overrightarrow{AI} + \overrightarrow{IC}\right) = 2\overrightarrow{AI} + \left(\overrightarrow{IB} + \overrightarrow{IC}\right).
\]
Comme \(I\) est le milieu de \([BC]\), \(\overrightarrow{IB} + \overrightarrow{IC} = \vec{0}\). Donc \(\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AI}\).
{{% /details %}}
