---
title: 'Reconnaitre si un triangle est rectangle'
weight: 3
cascade:
  type: docs
---

## Réciproque du théorème de Pythagore

> [!TIP] **Théorème (réciproque du théorème de Pythagore)**
>
> Dans un triangle \(ABC\), si \(BC^2 = AB^2 + AC^2\), alors le triangle \(ABC\) est rectangle en \(A\).

> [!IMPORTANT] **Remarque**
>
> On obtient la **réciproque** d’un théorème en échangeant son hypothèse et sa conclusion : le théorème « si \(P\), alors \(Q\) » a pour réciproque « si \(Q\), alors \(P\) ». La réciproque d’une propriété vraie peut être vraie (c’est le cas ici) ou fausse (par exemple : « si un nombre se termine par 0, il est pair » est vrai, mais sa réciproque « si un nombre est pair, il se termine par 0 » est fausse).

## Démontrer qu’un triangle est ou n’est pas rectangle

> [!NOTE] **Méthode**
>
> On connait les trois longueurs du triangle \(ABC\), et \([BC]\) est le plus grand côté. On calcule **séparément** \(BC^2\) d’une part, \(AB^2 + AC^2\) d’autre part.
> - Si \(BC^2 = AB^2 + AC^2\), alors \(ABC\) est rectangle en \(A\) (réciproque du théorème de Pythagore).
> - Si \(BC^2 \neq AB^2 + AC^2\), alors \(ABC\) n’est pas rectangle.

{{% details title="Exemple 1" closed="true" %}}
\(EFG\) est un triangle tel que \(EF = 8\) cm, \(FG = 15\) cm et \(EG = 17\) cm. Le plus grand côté est \([EG]\).
\[
EG^2 = 17^2 = 289 \qquad \text{et} \qquad EF^2 + FG^2 = 64 + 225 = 289.
\]
On a \(EG^2 = EF^2 + FG^2\). D’après la réciproque du théorème de Pythagore, \(EFG\) est rectangle en \(F\) (le sommet opposé au plus grand côté).
{{% /details %}}

{{% details title="Exemple 2" closed="true" %}}
\(PQR\) est un triangle tel que \(PQ = 6\) cm, \(QR = 7\) cm et \(PR = 9\) cm. Le plus grand côté est \([PR]\).
\[
PR^2 = 81 \qquad \text{et} \qquad PQ^2 + QR^2 = 36 + 49 = 85.
\]
On a \(PR^2 \neq PQ^2 + QR^2\) : le triangle \(PQR\) n’est pas rectangle.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Dans l’exemple 1, on utilise la **réciproque** du théorème de Pythagore. Dans l’exemple 2, on utilise le **théorème de Pythagore** lui-même : si \(PQR\) était rectangle, son plus grand côté serait l’hypoténuse et l’égalité de Pythagore serait vraie ; comme elle est fausse, le triangle ne peut pas être rectangle. Ce type de raisonnement s’appelle un **raisonnement par l’absurde**.

> [!NOTE] **Exercice résolu**
>
> Un menuisier veut vérifier que l’angle d’un cadre est droit. Il marque un point à \(60\) cm du coin sur un montant, un point à \(80\) cm du coin sur l’autre montant, et mesure \(99\) cm entre ces deux points. L’angle est-il droit ?

{{% details title="Solution commentée" closed="true" %}}
Le plus grand côté du triangle formé mesure \(99\) cm.
\[
99^2 = 9\,801 \qquad \text{et} \qquad 60^2 + 80^2 = 3\,600 + 6\,400 = 10\,000.
\]
Les deux résultats sont différents : le triangle n’est pas rectangle, donc l’angle du cadre n’est pas droit. (Pour un angle droit, il aurait fallu mesurer exactement \(\sqrt{10\,000} = 100\) cm.)
{{% /details %}}
