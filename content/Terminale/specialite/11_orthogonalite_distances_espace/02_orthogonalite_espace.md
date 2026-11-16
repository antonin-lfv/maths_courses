---
title: "Orthogonalité dans l'espace"
weight: 2
cascade:
  type: docs
---

## Orthogonalité de deux droites

> [!TIP] **Définition**
>
> Deux droites \((d)\) et \((d')\) de l’espace sont **orthogonales** s’il existe une droite parallèle à \((d)\) qui est perpendiculaire à \((d')\).

> [!TIP] **Propriété**
>
> Deux droites \((d)\) et \((d')\), de vecteurs directeurs respectifs \(\vec{u}\) et \(\vec{v}\), sont orthogonales si et seulement si \(\vec{u} \cdot \vec{v} = 0\).

> [!IMPORTANT] **Remarques**
>
> - Deux droites orthogonales ne sont pas forcément coplanaires, donc pas forcément sécantes.
> - Deux droites **perpendiculaires** sont deux droites orthogonales **et sécantes**.

{{% details title="Exemple" closed="true" %}}
Dans le cube \(ABCDEFGH\), \(\overrightarrow{EF} = \overrightarrow{AB}\) et \(\overrightarrow{CG} = \overrightarrow{AE}\), avec \(\overrightarrow{AB} \cdot \overrightarrow{AE} = 0\). Les droites \((EF)\) et \((CG)\) sont donc orthogonales, alors qu’elles ne sont pas coplanaires.
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Si deux droites sont parallèles, toute droite orthogonale à l’une est orthogonale à l’autre.
> - Si deux droites sont orthogonales, toute droite parallèle à l’une est orthogonale à l’autre.

## Orthogonalité d’une droite et d’un plan

> [!TIP] **Définition**
>
> Une droite est **orthogonale à un plan** si elle est orthogonale à deux droites **sécantes** de ce plan.

> [!TIP] **Propriétés**
>
> - Soit \((d)\) une droite de vecteur directeur \(\vec{u}\), et \(\mathscr{P}\) un plan dirigé par deux vecteurs non colinéaires \(\vec{v}\) et \(\vec{w}\). La droite \((d)\) est orthogonale au plan \(\mathscr{P}\) si et seulement si \(\vec{u} \cdot \vec{v} = 0\) et \(\vec{u} \cdot \vec{w} = 0\).
> - Une droite orthogonale à un plan est orthogonale à **toutes** les droites de ce plan.

{{% details title="Exemple" closed="true" %}}
Dans le cube \(ABCDEFGH\), la droite \((AE)\) est orthogonale aux droites \((AB)\) et \((AD)\), sécantes en \(A\) et contenues dans le plan \((ABC)\) : \((AE)\) est orthogonale au plan \((ABC)\). Elle est donc orthogonale à toute droite de ce plan, par exemple à \((BD)\) ou à \((AC)\).
{{% /details %}}

## Étudier une configuration de l’espace

> [!NOTE] **Méthode 2 — Démontrer une orthogonalité**
>
> \(ABCDEFGH\) est un cube. Démontrer que la droite \((AG)\) est orthogonale au plan \((BDE)\) :
> 1. à l’aide de la relation de Chasles et de la bilinéarité ;
> 2. à l’aide d’un repère orthonormé.

{{% details title="Solution commentée" closed="true" %}}
Il suffit de montrer que \((AG)\) est orthogonale à deux droites sécantes du plan \((BDE)\), par exemple \((BD)\) et \((BE)\).

**1.** On a \(\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}\) et \(\overrightarrow{BD} = \overrightarrow{AD} - \overrightarrow{AB}\). Les vecteurs \(\overrightarrow{AB}\), \(\overrightarrow{AD}\), \(\overrightarrow{AE}\) sont deux à deux orthogonaux et de même norme \(a\) (arête du cube), d’où :
\[
\overrightarrow{AG} \cdot \overrightarrow{BD} = \overrightarrow{AD} \cdot \overrightarrow{AD} - \overrightarrow{AB} \cdot \overrightarrow{AB} = a^2 - a^2 = 0.
\]
De même, \(\overrightarrow{BE} = \overrightarrow{AE} - \overrightarrow{AB}\), donc \(\overrightarrow{AG} \cdot \overrightarrow{BE} = a^2 - a^2 = 0\).

**2.** Dans le repère orthonormé \((A\,;\,\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})\) (cube d’arête 1) : \(\overrightarrow{AG}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}\), \(\overrightarrow{BD}\begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}\), \(\overrightarrow{BE}\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}\).  
\(\overrightarrow{AG} \cdot \overrightarrow{BD} = -1 + 1 + 0 = 0\) et \(\overrightarrow{AG} \cdot \overrightarrow{BE} = -1 + 0 + 1 = 0\).

Dans les deux cas, \((AG)\) est orthogonale aux droites sécantes \((BD)\) et \((BE)\) du plan \((BDE)\) : elle est orthogonale à ce plan.
{{% /details %}}
