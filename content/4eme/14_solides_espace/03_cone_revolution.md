---
title: 'Connaitre et représenter un cône de révolution'
weight: 3
cascade:
  type: docs
---

## Définitions

> [!TIP] **Définition**
>
> Un **cône de révolution** de sommet \(S\) est un solide obtenu en faisant tourner un triangle \(SOM\), rectangle en \(O\), autour de la droite \((SO)\).

> [!TIP] **Définitions**
>
> Pour le cône engendré par le triangle \(SOM\) rectangle en \(O\) :
> - le disque de centre \(O\) et de rayon \(OM\) est la **base** du cône ;
> - le segment \([SM]\) est une **génératrice** du cône ;
> - le point \(S\) est le **sommet** du cône ;
> - le segment \([SO]\) est la **hauteur** du cône (on appelle aussi hauteur la longueur \(SO\)).

En perspective, la base circulaire est dessinée comme une ellipse. Le patron d’un cône est formé d’un secteur de disque (la surface latérale, de rayon la génératrice) et d’un disque (la base).

![](/images/image441.png)

> [!IMPORTANT] **Remarque**
>
> Le triangle \(SOM\) étant rectangle en \(O\), le théorème de Pythagore relie la hauteur, le rayon et la génératrice : \({SM^2 = SO^2 + OM^2}\).

## Volume d’un cône de révolution

> [!TIP] **Propriété**
>
> Le volume \(\mathcal{V}\) d’un cône de révolution est donné par la formule
> \[
\mathcal{V} = \dfrac{\text{aire de la base} \times \text{hauteur}}{3} = \dfrac{\pi \times r^2 \times h}{3},
\]
> où \(r\) est le rayon de la base et \(h\) la hauteur.

{{% details title="Exemple" closed="true" %}}
Un cône de révolution a une base de rayon \(3\) cm et une hauteur de \(4\) cm.
\[
\mathcal{V} = \dfrac{\pi \times 3^2 \times 4}{3} = \dfrac{36\pi}{3} = 12\pi \text{ cm}^3 \approx 37{,}7 \text{ cm}^3.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Un cornet de glace a la forme d’un cône de révolution de génératrice \(13\) cm et de rayon \(2{,}5\) cm.
> 1. Calculer sa hauteur.
> 2. Calculer son volume, arrondi au cm³. Peut-il contenir \(10\) cL ?

{{% details title="Solution commentée" closed="true" %}}
1. Le triangle \(SOM\) est rectangle en \(O\), d’hypoténuse la génératrice \([SM]\). D’après le théorème de Pythagore : \({SM^2 = SO^2 + OM^2}\), soit \({169 = SO^2 + 6{,}25}\), donc \({SO^2 = 162{,}75}\) et \({SO = \sqrt{162{,}75} \approx 12{,}76}\) cm.
2. \(\mathcal{V} = \dfrac{\pi \times 2{,}5^2 \times \sqrt{162{,}75}}{3} \approx \dfrac{\pi \times 6{,}25 \times 12{,}76}{3} \approx 83\) cm³. Comme \(10\) cL \({= 100}\) cm³, le cornet ne peut pas contenir \(10\) cL.
{{% /details %}}
