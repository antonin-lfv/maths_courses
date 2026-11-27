---
title: 'Reconnaitre des triangles égaux'
weight: 1
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Deux triangles sont **égaux** lorsque leurs côtés sont deux à deux de même longueur.

Sur la figure, les codages indiquent que \({AB = DE}\), \({BC = EF}\) et \({CA = FD}\) : les triangles \(ABC\) et \(DEF\) sont égaux, bien qu’ils ne soient pas placés de la même façon.

![](/images/image433.png)

> [!IMPORTANT] **Remarque**
>
> Deux triangles égaux sont **superposables** : on peut faire coïncider l’un avec l’autre en le déplaçant (glissement, demi-tour, retournement…). Les sommets qui se superposent sont dits **homologues** ; ici \(A\) et \(D\), \(B\) et \(E\), \(C\) et \(F\).

## Angles de triangles égaux

> [!TIP] **Propriété**
>
> Si deux triangles sont égaux, alors leurs angles sont deux à deux de même mesure.

{{% details title="Exemple" closed="true" %}}
Les triangles \(ABC\) et \(DEF\) de la figure étant égaux, avec \(A \leftrightarrow D\), \(B \leftrightarrow E\), \(C \leftrightarrow F\), on a :
\[
\widehat{A} = \widehat{D}, \qquad \widehat{B} = \widehat{E}, \qquad \widehat{C} = \widehat{F}.
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La réciproque est **fausse** : deux triangles dont les angles sont deux à deux de même mesure ne sont pas forcément égaux. Par exemple, deux triangles équilatéraux de côtés 2 cm et 5 cm ont tous leurs angles égaux à \(60^\circ\), mais ils ne sont pas superposables : l’un est un agrandissement de l’autre.

## Reconnaitre des triangles égaux

Il n’est pas nécessaire de connaitre les six mesures (trois côtés, trois angles) : trois informations bien choisies suffisent.

> [!TIP] **Propriété (un angle entre deux côtés)**
>
> Si deux triangles ont un angle de même mesure compris entre deux côtés respectivement de même longueur, alors ils sont égaux.

> [!TIP] **Propriété (un côté entre deux angles)**
>
> Si deux triangles ont un côté de même longueur compris entre deux angles respectivement de même mesure, alors ils sont égaux.

{{% details title="Exemple" closed="true" %}}
- \(RST\) a \({RS = 6}\) cm, \({RT = 4}\) cm et \({\widehat{SRT} = 50^\circ}\) ; \(UVW\) a \({UV = 6}\) cm, \({UW = 4}\) cm et \({\widehat{VUW} = 50^\circ}\). L’angle de \(50^\circ\) est compris entre les deux côtés de 6 cm et 4 cm dans chaque triangle : \(RST\) et \(UVW\) sont égaux.
- \(KLM\) a \({KL = 5}\) cm, \({\widehat{K} = 35^\circ}\), \({\widehat{L} = 80^\circ}\) ; \(PQN\) a \({PQ = 5}\) cm, \({\widehat{P} = 35^\circ}\), \({\widehat{Q} = 80^\circ}\). Le côté de 5 cm est compris entre les deux angles dans chaque triangle : les triangles sont égaux.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> \(ABCD\) est un rectangle avec \({AB = 7}\) cm et \({BC = 3}\) cm.
> 1. Démontrer que les triangles \(ABC\) et \(CDA\) sont égaux.
> 2. En déduire que \({\widehat{BAC} = \widehat{DCA}}\).

{{% details title="Solution commentée" closed="true" %}}
1. Dans un rectangle, les côtés opposés ont la même longueur : \({AB = CD = 7}\) cm et \({BC = DA = 3}\) cm. De plus, le côté \([AC]\) est commun aux deux triangles. Les triangles \(ABC\) et \(CDA\) ont donc leurs trois côtés deux à deux de même longueur : ils sont égaux.
2. Les sommets homologues sont \(A \leftrightarrow C\), \(B \leftrightarrow D\), \(C \leftrightarrow A\) (le côté \(AB\) correspond à \(CD\), \(BC\) à \(DA\)). Les triangles étant égaux, leurs angles homologues ont la même mesure : \({\widehat{BAC} = \widehat{DCA}}\).
{{% /details %}}
