---
title: 'Représenter des solides et calculer des volumes'
weight: 2
cascade:
  type: docs
---

## Les solides usuels

> [!TIP] **Définitions et formules de volume**
>
> | Solide | Description | Volume |
> |---|---|---|
> | **Prisme droit** | deux faces parallèles et superposables en forme de polygone (les bases) ; faces latérales rectangulaires. Cas particuliers : pavé droit, cube | \({\mathcal{V} = \text{aire de la base} \times \text{hauteur}}\) |
> | **Cylindre de révolution** | deux faces parallèles et superposables en forme de disque (les bases) ; une surface latérale non plane | \({\mathcal{V} = \pi r^2 h}\) |
> | **Pyramide** | un sommet ; une base polygonale ne contenant pas le sommet ; faces latérales triangulaires de sommet commun | \({\mathcal{V} = \dfrac{1}{3} \times \text{aire de la base} \times \text{hauteur}}\) |
> | **Cône de révolution** | une base en forme de disque ; un sommet situé sur la perpendiculaire à la base passant par son centre ; une surface latérale non plane | \({\mathcal{V} = \dfrac{1}{3}\pi r^2 h}\) |
> | **Boule** | ensemble des points \(M\) tels que \({OM \leq r}\) | \({\mathcal{V} = \dfrac{4}{3}\pi r^3}\) |

{{% details title="Exemple" closed="true" %}}
Une bougie est formée d’un cylindre de rayon \(3\) cm et de hauteur \(8\) cm, surmonté d’un cône de même rayon et de hauteur \(4\) cm.
\[
\mathcal{V}_{\text{cylindre}} = \pi \times 3^2 \times 8 = 72\pi, \qquad \mathcal{V}_{\text{cône}} = \dfrac{1}{3}\pi \times 3^2 \times 4 = 12\pi.
\]
Volume total : \({72\pi + 12\pi = 84\pi \approx 264}\) cm³.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Pour calculer un volume, toutes les longueurs doivent être exprimées dans la même unité. On rappelle que \(1\) dm³ \({= 1}\) L et \(1\) cm³ \({= 1}\) mL.

## Agrandissement et réduction

> [!TIP] **Propriété**
>
> Soit \(k\) un nombre positif. Lors d’un agrandissement ou d’une réduction de rapport \(k\) :
> - les longueurs sont multipliées par \(k\) ;
> - les aires sont multipliées par \(k^2\) ;
> - les volumes sont multipliés par \(k^3\).
>
> Si \({k > 1}\), il s’agit d’un agrandissement ; si \({0 < k < 1}\), d’une réduction.

{{% details title="Exemple" closed="true" %}}
Un pavé droit de dimensions \(2\) cm, \(3\) cm et \(5\) cm a un volume de \(30\) cm³. Agrandi avec le rapport \(3\), il mesure \(6\) cm, \(9\) cm et \(15\) cm, et son volume est \({6 \times 9 \times 15 = 810}\) cm³ \({= 30 \times 3^3}\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Un cône de révolution a une hauteur de \(12\) cm et une base de rayon \(5\) cm. On le coupe par un plan parallèle à la base, à \(4\) cm du sommet ; on obtient un petit cône, réduction du grand.
> 1. Calculer le volume du grand cône (valeur exacte).
> 2. Quel est le rapport de réduction ? En déduire le volume du petit cône.

{{% details title="Solution commentée" closed="true" %}}
1. \({\mathcal{V} = \dfrac{1}{3}\pi \times 5^2 \times 12 = 100\pi}\) cm³ \({\approx 314}\) cm³.
2. Le petit cône a une hauteur de \(4\) cm au lieu de \(12\) cm : le rapport est \({k = \dfrac{4}{12} = \dfrac{1}{3}}\). Son volume est \({100\pi \times \left(\dfrac{1}{3}\right)^3 = \dfrac{100\pi}{27} \approx 11{,}6}\) cm³.
{{% /details %}}
