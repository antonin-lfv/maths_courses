---
title: 'Construire des sections planes de solides'
weight: 3
cascade:
  type: docs
---

La **section** d’un solide par un plan est la figure plane obtenue en coupant ce solide par ce plan.

## Pavé droit et cylindre

> [!TIP] **Propriétés**
>
> - La section d’un pavé droit par un plan parallèle à l’une de ses faces est un rectangle de mêmes dimensions que cette face.
> - La section d’un pavé droit par un plan parallèle à l’une de ses arêtes est un rectangle dont l’une des dimensions est la longueur de cette arête.

{{% details title="Exemple" closed="true" %}}
Un pavé droit mesure \(8\) cm de long, \(5\) cm de large et \(3\) cm de haut. Coupé par un plan parallèle à la face du dessus, il donne une section rectangulaire de \(8\) cm sur \(5\) cm. Coupé par un plan vertical parallèle à l’arête de \(3\) cm (et passant, par exemple, par deux arêtes opposées), il donne un rectangle dont un côté mesure \(3\) cm.
{{% /details %}}

> [!TIP] **Propriétés**
>
> - La section d’un cylindre de révolution par un plan parallèle à ses bases est un **cercle** (ou un disque) de même rayon que la base.
> - La section d’un cylindre de révolution par un plan parallèle à son axe (perpendiculaire aux bases) est un **rectangle** dont l’une des dimensions est la hauteur du cylindre.

## Pyramide et cône

> [!TIP] **Propriété**
>
> La section d’une pyramide ou d’un cône de révolution par un plan parallèle à la base est une **réduction** de la base.

{{% details title="Exemple" closed="true" %}}
Une pyramide de hauteur \(10\) cm a pour base un carré de côté \(6\) cm. La section par un plan parallèle à la base, à \(4\) cm du sommet, est un carré, réduction de la base de rapport \({\dfrac{4}{10} = 0{,}4}\) : son côté mesure \({6 \times 0{,}4 = 2{,}4}\) cm.
{{% /details %}}

## Sphère

> [!TIP] **Propriété**
>
> La section d’une sphère par un plan est un **cercle** :
> - si le plan passe par le centre \(O\), c’est un grand cercle (de même centre et de même rayon que la sphère) ;
> - sinon, son centre \(H\) est le point d’intersection du plan et de la perpendiculaire au plan passant par \(O\) ;
> - si le plan est tangent à la sphère, la section est réduite à un point.

![](/images/image458.png)

> [!NOTE] **Méthode - Calculer le rayon de la section d’une sphère**
>
> Si la sphère a pour rayon \(R\) et si le plan est à la distance \(OH\) du centre, le triangle \(OHM\) est rectangle en \(H\) (où \(M\) est un point de la section). D’après le théorème de Pythagore, le rayon \({r = HM}\) de la section vérifie
> \[
r^2 = R^2 - OH^2.
\]

> [!NOTE] **Exercice résolu**
>
> Une sphère de centre \(O\) a pour rayon \(5\) cm. On la coupe par un plan situé à \(3\) cm de \(O\).
> 1. Quelle est la nature de la section ?
> 2. Calculer son rayon, puis son aire.

{{% details title="Solution commentée" closed="true" %}}
1. La section d’une sphère par un plan est un cercle, de centre \(H\) tel que \({OH = 3}\) cm.
2. Le triangle \(OHM\) est rectangle en \(H\), avec \({OM = 5}\) cm (rayon de la sphère). D’après le théorème de Pythagore : \({HM^2 = OM^2 - OH^2 = 25 - 9 = 16}\), donc \({HM = 4}\) cm. Le disque de section a pour aire \({\pi \times 4^2 = 16\pi \approx 50{,}3}\) cm².
{{% /details %}}
