---
title: 'Droites parallèles, perpendiculaires et médiatrice'
weight: 3
cascade:
  type: docs
---

## Raisonner avec des droites

> [!TIP] **Propriété**
>
> Si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.
>
> Si \((d_1) \parallel (d_3)\) et \((d_2) \parallel (d_3)\), alors \((d_1) \parallel (d_2)\).

> [!TIP] **Propriété**
>
> Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.
>
> Si \((d_1) \perp (d_3)\) et \((d_2) \perp (d_3)\), alors \((d_1) \parallel (d_2)\).

> [!TIP] **Propriété**
>
> Si deux droites sont parallèles et si une troisième droite est perpendiculaire à l’une, alors elle est perpendiculaire à l’autre.
>
> Si \((d_1) \parallel (d_2)\) et \((d_3) \perp (d_1)\), alors \((d_3) \perp (d_2)\).

{{% details title="Exemple" closed="true" %}}
Un menuisier pose des montants verticaux sur une poutre horizontale : chaque montant est perpendiculaire à la poutre. D’après la deuxième propriété, les montants sont parallèles entre eux.
{{% /details %}}

## Médiatrice d’un segment

> [!TIP] **Définition**
>
> La **médiatrice** d’un segment est la droite qui est perpendiculaire à ce segment et qui passe par son milieu.

> [!TIP] **Propriété**
>
> La médiatrice d’un segment est l’ensemble des points **équidistants** des extrémités de ce segment (c’est-à-dire situés à la même distance de ces deux extrémités) :
> - si un point est sur la médiatrice de \([AB]\), alors il est à la même distance de \(A\) et de \(B\) ;
> - si un point est à la même distance de \(A\) et de \(B\), alors il est sur la médiatrice de \([AB]\).

![](/images/image406.png)

> [!NOTE] **Méthode — Construire une médiatrice au compas**
>
> Pour construire la médiatrice de \([AB]\), on trace deux arcs de cercle de même rayon (plus grand que la moitié de \(AB\)), l’un de centre \(A\), l’autre de centre \(B\). Ils se coupent en deux points, qui sont équidistants de \(A\) et de \(B\) : la droite qui les joint est la médiatrice.

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> On sait que \(PA = PB = 5\) cm et \(QA = QB = 3\) cm. Que peut-on dire de la droite \((PQ)\) ? Justifier.

{{% details title="Solution commentée" closed="true" %}}
\(P\) est à la même distance de \(A\) et de \(B\) : il est sur la médiatrice de \([AB]\). De même pour \(Q\). Deux points distincts définissent une seule droite : \((PQ)\) est la médiatrice du segment \([AB]\). Elle est donc perpendiculaire à \([AB]\) et passe par son milieu.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Les droites \((d_1)\) et \((d_2)\) sont perpendiculaires à \((d)\), et \((d_3)\) est parallèle à \((d_1)\). Que peut-on dire de \((d_2)\) et \((d_3)\) ?

{{% details title="Solution commentée" closed="true" %}}
\((d_1) \perp (d)\) et \((d_2) \perp (d)\), donc \((d_1) \parallel (d_2)\). Ensuite, \((d_2) \parallel (d_1)\) et \((d_3) \parallel (d_1)\) : deux droites parallèles à une même droite sont parallèles entre elles, donc \((d_2) \parallel (d_3)\).
{{% /details %}}
