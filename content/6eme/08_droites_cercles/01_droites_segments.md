---
title: 'Droites et segments'
weight: 1
cascade:
  type: docs
---

## Points alignés, droites, segments

> [!TIP] **Définitions**
>
> \(A\), \(B\) et \(C\) désignent trois points distincts.
> - \(A\), \(B\) et \(C\) sont **alignés** lorsqu’on peut tracer une ligne droite passant par ces trois points.
> - La **droite** \((AB)\) est l’ensemble de tous les points alignés avec \(A\) et \(B\). Elle est illimitée.
> - Le **segment** \([AB]\) est la partie de la droite \((AB)\) comprise entre \(A\) et \(B\) ; \(A\) et \(B\) sont ses **extrémités**.
> - La **distance** entre les points \(A\) et \(B\) est la longueur du segment \([AB]\). On la note \(AB\).

> [!IMPORTANT] **Notations**
>
> - Le symbole \(\in\) se lit « appartient à » : \(C \in (AB)\) signifie que le point \(C\) est sur la droite \((AB)\). Le symbole \(\notin\) se lit « n’appartient pas à ».
> - On distingue bien les notations : \((AB)\) est une droite, \([AB]\) un segment et \(AB\) un nombre (une longueur). On note aussi \([AB)\) la **demi-droite** d’origine \(A\) passant par \(B\).

{{% details title="Exemple" closed="true" %}}
Sur une droite, on place dans cet ordre les points \(R\), \(S\) et \(T\), avec \(RS = 4\) cm et \(ST = 2{,}5\) cm. Alors \(S \in [RT]\), \(T \notin [RS]\), mais \(T \in (RS)\), et \(RT = 4 + 2{,}5 = 6{,}5\) cm.
{{% /details %}}

## Milieu d’un segment

> [!TIP] **Définition**
>
> Le **milieu** d’un segment est le point de ce segment qui est à la même distance de ses deux extrémités.

{{% details title="Exemple" closed="true" %}}
\(M\) est le milieu du segment \([EF]\), avec \(EF = 9\) cm. Alors \(M \in [EF]\) et \(EM = MF = 9 \div 2 = 4{,}5\) cm. Sur une figure, on code les deux segments de même longueur par un même symbole.
{{% /details %}}

## Positions relatives de deux droites

> [!TIP] **Définitions**
>
> - Deux droites sont **sécantes** si elles se coupent en un seul point, appelé **point d’intersection** de ces droites.
> - Deux droites sont **perpendiculaires** si elles sont sécantes en formant un angle droit. On note \((d_1) \perp (d_2)\).
> - Deux droites sont **parallèles** si elles ne sont pas sécantes. On note \((d_1) \parallel (d_2)\).

![](/images/image404.png)

> [!IMPORTANT] **Remarque**
>
> Deux droites parallèles peuvent être confondues (c’est alors la même droite). Pour vérifier que deux droites sont perpendiculaires, on utilise l’équerre ; pour tracer une parallèle, on peut utiliser la règle et l’équerre (deux perpendiculaires à une même droite).

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> On place quatre points \(A\), \(B\), \(C\), \(D\) tels que \(C\) est le milieu de \([AB]\), \(AB = 10\) cm, et \(D \in [CB]\) avec \(CD = 2\) cm.
> 1. Calculer \(AC\), puis \(DB\).
> 2. Le point \(D\) appartient-il au segment \([AC]\) ? à la droite \((AC)\) ?

{{% details title="Solution commentée" closed="true" %}}
1. \(C\) est le milieu de \([AB]\), donc \(AC = CB = 10 \div 2 = 5\) cm. \(D\) est sur \([CB]\), donc \(DB = CB - CD = 5 - 2 = 3\) cm.
2. \(D\) est entre \(C\) et \(B\), donc pas entre \(A\) et \(C\) : \(D \notin [AC]\). Mais \(A\), \(C\), \(D\) sont alignés : \(D \in (AC)\).
{{% /details %}}
