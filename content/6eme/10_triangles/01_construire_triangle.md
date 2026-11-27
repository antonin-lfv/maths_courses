---
title: 'Construire un triangle'
weight: 1
cascade:
  type: docs
---

## Inégalité triangulaire

> [!TIP] **Propriété**
>
> \(A\) et \(B\) désignent deux points distincts.
> - Le plus court chemin pour aller du point \(A\) au point \(B\) est le segment \([AB]\) : pour tout point \(C\), on a \(AC + CB \geq AB\).
> - L’égalité \(AC + CB = AB\) est vraie pour tous les points \(C\) du segment \([AB]\), et uniquement pour ces points.

> [!TIP] **Propriété**
>
> On peut construire un triangle dont on connaît les longueurs des trois côtés lorsque la longueur de son plus grand côté est **inférieure** à la somme des longueurs des deux autres côtés.

{{% details title="Exemple" closed="true" %}}
- Triangle \(EFG\) avec \(EF = 7\) cm, \(FG = 3\) cm, \(EG = 3{,}5\) cm : le plus grand côté est \([EF]\), et \(3 + 3{,}5 = 6{,}5 < 7\). Ce triangle **n’est pas constructible** : les deux arcs de cercle ne se coupent pas.
- Triangle \(KLM\) avec \(KL = 6\) cm, \(LM = 4\) cm, \(KM = 3\) cm : \(4 + 3 = 7 > 6\). Ce triangle **est constructible**.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Si la plus grande longueur est **égale** à la somme des deux autres (par exemple \(5\), \(2\), \(3\)), les trois points sont alignés : on obtient un triangle « aplati ».

## Construire un triangle

> [!NOTE] **Méthode 1 — Trois longueurs connues**
>
> On trace le plus grand côté à la règle, puis, au compas, deux arcs de cercle centrés en ses extrémités, de rayons égaux aux deux autres longueurs. Le troisième sommet est un point d’intersection des deux arcs.

> [!TIP] **Propriété**
>
> On peut construire un triangle si on connaît les longueurs de deux côtés et la mesure de l’angle formé par ces deux côtés.

> [!TIP] **Propriété**
>
> On peut construire un triangle si on connaît les mesures de deux angles (dont la somme est inférieure à \(180^\circ\)) et la longueur du côté commun à ces deux angles.

{{% details title="Exemple" closed="true" %}}
- Pour construire \(RST\) avec \(RS = 5\) cm, \(RT = 3\) cm et \(\widehat{SRT} = 70^\circ\) : on trace \([RS]\), on construit au rapporteur l’angle de \(70^\circ\) en \(R\), et on place \(T\) sur ce côté à \(3\) cm de \(R\).
- Pour construire \(UVW\) avec \(UV = 6\) cm, \(\widehat{VUW} = 40^\circ\) et \(\widehat{UVW} = 55^\circ\) : on trace \([UV]\), puis les deux angles en \(U\) et en \(V\) ; \(W\) est le point d’intersection de leurs côtés.
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Peut-on construire un triangle dont les côtés mesurent : a) \(4\) cm, \(5\) cm et \(10\) cm ? b) \(6\) cm, \(6\) cm et \(11\) cm ?

{{% details title="Solution commentée" closed="true" %}}
a) Plus grand côté : \(10\) cm, et \(4 + 5 = 9 < 10\) : non, ce triangle n’est pas constructible.

b) Plus grand côté : \(11\) cm, et \(6 + 6 = 12 > 11\) : oui, il est constructible (c’est un triangle isocèle).
{{% /details %}}
