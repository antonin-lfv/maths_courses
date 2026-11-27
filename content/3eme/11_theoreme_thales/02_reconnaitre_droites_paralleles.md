---
title: 'Reconnaitre des droites parallèles'
weight: 2
cascade:
  type: docs
---

## Réciproque du théorème de Thalès

> [!TIP] **Théorème (réciproque du théorème de Thalès)**
>
> Si les points \(A\), \(B\), \(M\) d’une part et \(A\), \(C\), \(N\) d’autre part sont alignés **dans le même ordre**, et si \({\dfrac{AM}{AB} = \dfrac{AN}{AC}}\), alors les droites \((BC)\) et \((MN)\) sont parallèles.

> [!NOTE] **Méthode**
>
> Les points \(A\), \(B\), \(M\) d’une part et \(A\), \(C\), \(N\) d’autre part étant alignés dans le même ordre, on calcule séparément \(\dfrac{AM}{AB}\) et \(\dfrac{AN}{AC}\).
> - Si \({\dfrac{AM}{AB} = \dfrac{AN}{AC}}\), alors \((BC)\) et \((MN)\) sont parallèles (réciproque du théorème de Thalès).
> - Si \({\dfrac{AM}{AB} \neq \dfrac{AN}{AC}}\), alors \((BC)\) et \((MN)\) ne sont pas parallèles (théorème de Thalès).

{{% details title="Exemple 1" closed="true" %}}
Les points \(D\), \(E\), \(F\) sont alignés dans cet ordre, ainsi que \(D\), \(G\), \(H\). On a \({DE = 3{,}5}\), \({DF = 5}\), \({DG = 4{,}2}\) et \({DH = 6}\) (en cm).
\[
\dfrac{DE}{DF} = \dfrac{3{,}5}{5} = 0{,}7 \qquad \text{et} \qquad \dfrac{DG}{DH} = \dfrac{4{,}2}{6} = 0{,}7.
\]
Les rapports sont égaux et les points sont alignés dans le même ordre : d’après la réciproque du théorème de Thalès, \({(EG) \parallel (FH)}\).
{{% /details %}}

{{% details title="Exemple 2 - en configuration papillon" closed="true" %}}
Les points \(U\), \(O\), \(V\) sont alignés dans cet ordre, ainsi que \(W\), \(O\), \(X\). On a \({OU = 2}\), \({OV = 5}\), \({OW = 3}\) et \({OX = 7{,}2}\) (en cm).

Produits en croix : \({OU \times OX = 2 \times 7{,}2 = 14{,}4}\) et \({OV \times OW = 5 \times 3 = 15}\). Ils sont différents, donc \({\dfrac{OU}{OV} \neq \dfrac{OW}{OX}}\) : les droites \((UW)\) et \((VX)\) ne sont pas parallèles.
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - Dans l’exemple 1, on utilise la **réciproque** du théorème de Thalès ; dans l’exemple 2, le **théorème** de Thalès lui-même : si les droites étaient parallèles, les rapports seraient égaux.
> - La condition « dans le même ordre » est indispensable : avec les mêmes longueurs, mais un point de chaque côté de \(A\) dans un cas et non dans l’autre, les droites ne sont pas parallèles.
> - Dans un triangle, la droite qui passe par les milieux de deux côtés est parallèle au troisième côté : c’est le cas particulier de la réciproque où les rapports valent \(\dfrac{1}{2}\).

> [!NOTE] **Exercice résolu**
>
> Sur un plan, deux routes rectilignes partent d’un carrefour \(C\). Sur la première, on place \(A\) à \(450\) m de \(C\) puis \(B\) à \(1\,200\) m de \(C\) ; sur la seconde, \(D\) à \(600\) m de \(C\) puis \(E\) à \(1\,600\) m de \(C\). Les chemins \([AD]\) et \([BE]\) sont-ils parallèles ?

{{% details title="Solution commentée" closed="true" %}}
Les points \(C\), \(A\), \(B\) et \(C\), \(D\), \(E\) sont alignés dans le même ordre.
\[
\dfrac{CA}{CB} = \dfrac{450}{1\,200} = 0{,}375 \qquad \text{et} \qquad \dfrac{CD}{CE} = \dfrac{600}{1\,600} = 0{,}375.
\]
Les rapports sont égaux : d’après la réciproque du théorème de Thalès, \({(AD) \parallel (BE)}\). Les deux chemins sont parallèles.
{{% /details %}}
