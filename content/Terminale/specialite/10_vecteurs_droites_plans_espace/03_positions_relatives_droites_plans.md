---
title: 'Positions relatives de droites et de plans'
weight: 3
cascade:
  type: docs
---

## Position relative de deux droites de l’espace

> [!TIP] **Définition**
>
> Deux droites de l’espace sont **coplanaires** si elles sont contenues dans un même plan.

> [!TIP] **Propriétés (admises)**
>
> Soient \(d(A, \vec{u})\) et \(d'(B, \vec{v})\) deux droites de l’espace.
> - Si \(\vec{u}\) et \(\vec{v}\) sont colinéaires, les droites \(d\) et \(d'\) sont **parallèles** (confondues ou strictement parallèles).
> - Si \(\vec{u}\) et \(\vec{v}\) ne sont pas colinéaires, les droites \(d\) et \(d'\) sont soit **sécantes** (elles ont un unique point commun), soit **non coplanaires**.

| Droites coplanaires | | Droites non coplanaires |
|---|---|---|
| **parallèles** (strictement ou confondues) : \(\vec{u}\) et \(\vec{v}\) colinéaires | **sécantes** en un point : \(\vec{u}\) et \(\vec{v}\) non colinéaires | aucun point commun, \(\vec{u}\) et \(\vec{v}\) non colinéaires |

![](/images/image310.png)

> [!IMPORTANT] **Remarques**
>
> - Dans l’espace, deux droites qui n’ont aucun point commun ne sont pas forcément parallèles : elles peuvent être non coplanaires.
> - Deux droites sont sécantes si et seulement si elles sont coplanaires et non parallèles.

## Position relative d’une droite et d’un plan

> [!TIP] **Définition**
>
> Soient \(d(A, \vec{u})\) une droite et \(\mathscr{P}(C, \vec{v}, \vec{w})\) un plan de l’espace. La droite \(d\) est **parallèle** au plan \(\mathscr{P}\) si les vecteurs \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) sont coplanaires.

> [!TIP] **Propriété (admise)**
>
> Si \(\vec{u}\), \(\vec{v}\), \(\vec{w}\) ne sont pas coplanaires, la droite \(d\) et le plan \(\mathscr{P}\) sont **sécants** en un point.

| Droite parallèle au plan | | Droite et plan sécants |
|---|---|---|
| \(d\) contenue dans \(\mathscr{P}\) | \(d\) strictement parallèle à \(\mathscr{P}\) (aucun point commun) | un unique point commun |
| \(\vec{u}, \vec{v}, \vec{w}\) coplanaires | \(\vec{u}, \vec{v}, \vec{w}\) coplanaires | \(\vec{u}, \vec{v}, \vec{w}\) non coplanaires |

> [!IMPORTANT] **Remarque**
>
> Une droite parallèle à un plan et ayant un point dans ce plan y est entièrement contenue.

## Position relative de deux plans de l’espace

> [!TIP] **Propriétés (admises)**
>
> - Deux plans sont **parallèles** si et seulement si deux vecteurs directeurs de l’un sont aussi vecteurs directeurs de l’autre (c’est-à-dire sont combinaisons linéaires des vecteurs directeurs de l’autre). Ils sont alors confondus ou strictement parallèles (aucun point commun).
> - Deux plans sont **sécants** lorsqu’ils ne sont pas parallèles : leur intersection est alors une **droite**.

| Plans parallèles | | Plans sécants |
|---|---|---|
| confondus | strictement parallèles | intersection : une droite |

{{% details title="Exemples" closed="true" %}}
Dans le cube \(ABCDEFGH\) :
- les droites \((AB)\) et \((HG)\) sont parallèles ; \((AB)\) et \((BF)\) sont sécantes en \(B\) ; \((AB)\) et \((CG)\) sont non coplanaires ;
- la droite \((EG)\) est parallèle au plan \((ABC)\), car \(\overrightarrow{EG} = \overrightarrow{AC}\) ;
- les plans \((ABC)\) et \((EFG)\) sont strictement parallèles ; les plans \((ABF)\) et \((BCG)\) sont sécants selon la droite \((BF)\).
{{% /details %}}

## Démontrer un parallélisme dans l’espace

> [!NOTE] **Méthode 3 — Étudier des positions relatives**
>
> On considère le cube \(ABCDEFGH\), le milieu \(I\) de \([AE]\) et le milieu \(J\) de \([CG]\).
> 1. Démontrer que les droites \((IJ)\) et \((AC)\) sont parallèles.
> 2. Démontrer que la droite \((EG)\) est parallèle au plan \((BIJ)\).
> 3. Quelle est la position relative de la droite \((IJ)\) et du plan \((EFG)\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** Par Chasles : \(\overrightarrow{IJ} = \overrightarrow{IA} + \overrightarrow{AC} + \overrightarrow{CJ}\). Or \(\overrightarrow{IA} = -\dfrac{1}{2}\overrightarrow{AE}\) et \(\overrightarrow{CJ} = \dfrac{1}{2}\overrightarrow{CG} = \dfrac{1}{2}\overrightarrow{AE}\). Donc \(\overrightarrow{IJ} = \overrightarrow{AC}\) : les vecteurs sont colinéaires (et même égaux), les droites \((IJ)\) et \((AC)\) sont parallèles.

**2.** \(\overrightarrow{EG} = \overrightarrow{AC}\) (face \(ACGE\) rectangle) \(= \overrightarrow{IJ}\). Le vecteur \(\overrightarrow{IJ}\) est un vecteur directeur du plan \((BIJ)\) ; donc \(\overrightarrow{EG}\), \(\overrightarrow{BI}\), \(\overrightarrow{BJ}\) sont coplanaires (\(\overrightarrow{EG} = \overrightarrow{BJ} - \overrightarrow{BI}\)), et la droite \((EG)\) est parallèle au plan \((BIJ)\).

**3.** \(\overrightarrow{IJ} = \overrightarrow{EG}\), et \(\overrightarrow{EG}\) est un vecteur directeur du plan \((EFG)\) : \((IJ)\) est parallèle au plan \((EFG)\). Comme \(I\), milieu de \([AE]\), n’appartient pas à ce plan, \((IJ)\) est **strictement parallèle** au plan \((EFG)\).
{{% /details %}}
