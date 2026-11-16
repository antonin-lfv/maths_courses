---
title: "Droites et plans de l'espace"
weight: 2
cascade:
  type: docs
---

## Caractérisation d’une droite de l’espace

> [!TIP] **Définitions**
>
> Soient \(A\) et \(B\) deux points distincts de l’espace.
> - La droite \((AB)\) est l’ensemble des points \(M\) de l’espace tels que \(\overrightarrow{AM} = k\overrightarrow{AB}\), où \(k\) est un nombre réel.
> - Le vecteur \(\overrightarrow{AB}\) est appelé un **vecteur directeur** de la droite \((AB)\).

> [!TIP] **Conséquence**
>
> Une droite est entièrement définie par un point \(A\) et un vecteur directeur \(\vec{u}\) non nul. On la note \(d(A, \vec{u})\) : c’est l’ensemble des points \(M\) tels que \(\overrightarrow{AM}\) et \(\vec{u}\) soient colinéaires.

> [!IMPORTANT] **Remarque**
>
> Une droite possède une infinité de vecteurs directeurs : tous les vecteurs non nuls colinéaires à l’un d’eux.

## Caractérisation d’un plan de l’espace

> [!TIP] **Définitions**
>
> Soient \(A\), \(B\) et \(C\) trois points de l’espace **non alignés**.
> - Le plan \((ABC)\) est l’ensemble des points \(M\) de l’espace tels que \(\overrightarrow{AM} = x\overrightarrow{AB} + y\overrightarrow{AC}\), où \(x\) et \(y\) sont des nombres réels.
> - Les vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\) sont appelés des **vecteurs directeurs** du plan \((ABC)\).

> [!TIP] **Conséquence**
>
> Un plan est entièrement défini par un point \(A\) et deux vecteurs \(\vec{u}\) et \(\vec{v}\) **non colinéaires**. On le note \(\mathscr{P}(A, \vec{u}, \vec{v})\) : c’est l’ensemble des points \(M\) tels que \(\overrightarrow{AM} = x\vec{u} + y\vec{v}\), avec \(x, y\) réels.

![](/images/image309.png)

> [!IMPORTANT] **Remarque**
>
> Un plan possède une infinité de couples de vecteurs directeurs (tout couple de vecteurs non colinéaires qui sont combinaisons linéaires de \(\vec{u}\) et \(\vec{v}\)).

## Vecteurs coplanaires

> [!TIP] **Définition**
>
> Soient \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) trois vecteurs de l’espace, et \(O\), \(A\), \(B\), \(C\) des points tels que \(\vec{u} = \overrightarrow{OA}\), \(\vec{v} = \overrightarrow{OB}\) et \(\vec{w} = \overrightarrow{OC}\).
> Les vecteurs \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) sont **coplanaires** si les points \(O\), \(A\), \(B\), \(C\) sont coplanaires (c’est-à-dire appartiennent à un même plan).

> [!TIP] **Propriété (admise)**
>
> Soient \(\vec{u}\) et \(\vec{v}\) deux vecteurs **non colinéaires** et \(\vec{w}\) un vecteur. Les vecteurs \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) sont coplanaires si et seulement si \(\vec{w}\) est une combinaison linéaire de \(\vec{u}\) et \(\vec{v}\), autrement dit s’il existe deux réels \(a\) et \(b\) tels que \(\vec{w} = a\vec{u} + b\vec{v}\).

> [!IMPORTANT] **Remarques**
>
> - Deux vecteurs sont toujours coplanaires ; en revanche, deux droites ne sont pas toujours coplanaires.
> - Quatre points \(A\), \(B\), \(C\), \(D\) sont coplanaires si et seulement si les vecteurs \(\overrightarrow{AB}\), \(\overrightarrow{AC}\), \(\overrightarrow{AD}\) sont coplanaires.

## Démontrer que des vecteurs sont coplanaires

> [!NOTE] **Méthode 2 — Démontrer une coplanarité**
>
> On considère le cube \(ABCDEFGH\).
> 1. Démontrer que \(\overrightarrow{BD} = \overrightarrow{AH} - \overrightarrow{AF}\).
> 2. En déduire que les vecteurs \(\overrightarrow{BD}\), \(\overrightarrow{AF}\) et \(\overrightarrow{AH}\) sont coplanaires.
> 3. Que peut-on en déduire pour la droite \((BD)\) et le plan \((AFH)\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** Par Chasles, \(\overrightarrow{AH} - \overrightarrow{AF} = \overrightarrow{AH} + \overrightarrow{FA} = \overrightarrow{FA} + \overrightarrow{AH} = \overrightarrow{FH}\).  
Or \(BDHF\) est un rectangle (\(\overrightarrow{BF} = \overrightarrow{DH}\)), donc \(\overrightarrow{FH} = \overrightarrow{BD}\). Ainsi \(\overrightarrow{BD} = \overrightarrow{AH} - \overrightarrow{AF}\).

**2.** Les vecteurs \(\overrightarrow{AF}\) et \(\overrightarrow{AH}\) ne sont pas colinéaires (les points \(A\), \(F\), \(H\) ne sont pas alignés), et \(\overrightarrow{BD} = 1 \times \overrightarrow{AH} + (-1) \times \overrightarrow{AF}\) en est une combinaison linéaire : les trois vecteurs sont coplanaires.

**3.** Un vecteur directeur de \((BD)\) est une combinaison linéaire de deux vecteurs directeurs du plan \((AFH)\) : la droite \((BD)\) est donc **parallèle** au plan \((AFH)\) (voir la page suivante). Comme \(B \notin (AFH)\), elle lui est strictement parallèle.
{{% /details %}}
