---
title: "Interprétation géométrique du module et de l'argument"
weight: 1
cascade:
  type: docs
---

Dans toute la page, le plan complexe est muni d’un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\), et \(A\), \(B\), \(C\), \(D\) sont des points d’affixes respectives \(a\), \(b\), \(c\), \(d\), avec \({A \neq B}\) et \({C \neq D}\).

## Module d’un quotient \({\dfrac{d - c}{b - a}}\)

> [!TIP] **Propriété**
>
> \[
|b - a| = AB, \qquad |d - c| = CD \qquad \text{et} \qquad \left|\dfrac{d - c}{b - a}\right| = \dfrac{CD}{AB}.
\]
> En particulier, si \(A\), \(B\), \(C\) sont distincts : \({\left|\dfrac{c - a}{b - a}\right| = \dfrac{AC}{AB}}\).

{{% details title="Démonstration" closed="true" %}}
Les deux premières égalités ont été vues au chapitre 2 (\(\overrightarrow{AB}\) a pour affixe \({b - a}\)). La troisième découle de la propriété du module d’un quotient : \({\left|\dfrac{d - c}{b - a}\right| = \dfrac{|d - c|}{|b - a|} = \dfrac{CD}{AB}}\).
{{% /details %}}

## Argument d’un quotient \({\dfrac{d - c}{b - a}}\)

> [!TIP] **Propriété**
>
> \[
\arg\left(\dfrac{d - c}{b - a}\right) = \left(\overrightarrow{AB}, \overrightarrow{CD}\right) \ (2\pi).
\]
> En particulier, si \(A\), \(B\), \(C\) sont distincts : \({\arg\left(\dfrac{c - a}{b - a}\right) = \left(\overrightarrow{AB}, \overrightarrow{AC}\right) \ (2\pi)}\).

{{% details title="Démonstration" closed="true" %}}
D’après la propriété de l’argument d’un quotient, puis l’interprétation géométrique de l’argument et la relation de Chasles pour les angles orientés :
\[
\begin{aligned}
\arg\left(\dfrac{d - c}{b - a}\right) &= \arg(d - c) - \arg(b - a) = \left(\vec{u}, \overrightarrow{CD}\right) - \left(\vec{u}, \overrightarrow{AB}\right) \\[0.3em]
&= \left(\overrightarrow{AB}, \vec{u}\right) + \left(\vec{u}, \overrightarrow{CD}\right) = \left(\overrightarrow{AB}, \overrightarrow{CD}\right) \ (2\pi).
\end{aligned}
\]
{{% /details %}}

> [!IMPORTANT] **Conséquences**
>
> Pour trois points \(A\), \(B\), \(C\) distincts, on pose \({Z = \dfrac{c - a}{b - a}}\).
> - \({AB = AC}\) (c’est-à-dire \(A\) appartient à la médiatrice de \([BC]\)) si et seulement si \({|Z| = 1}\).
> - \(A\), \(B\), \(C\) sont alignés si et seulement si \({\arg(Z) = 0 \ (\pi)}\), c’est-à-dire si \(Z\) est réel.
> - Les droites \((AB)\) et \((AC)\) sont perpendiculaires si et seulement si \({\arg(Z) = \dfrac{\pi}{2} \ (\pi)}\), c’est-à-dire si \(Z\) est imaginaire pur.
> - Le triangle \(ABC\) est équilatéral si et seulement si \({Z = e^{i\frac{\pi}{3}}}\) ou \({Z = e^{-i\frac{\pi}{3}}}\).
>
> Plus généralement, \({(AB) \parallel (CD)}\) si et seulement si \({\dfrac{d - c}{b - a}}\) est réel, et \({(AB) \perp (CD)}\) si et seulement si \({\dfrac{d - c}{b - a}}\) est imaginaire pur.

## Étudier une configuration

> [!NOTE] **Exercice résolu 1 - Déterminer la nature d’un triangle**
>
> On considère les points \(A(1)\), \({B(3 + i)}\) et \(C(2i)\).
> 1. Calculer \({Z = \dfrac{c - a}{b - a}}\) sous forme algébrique.
> 2. En déduire la nature du triangle \(ABC\).

{{% details title="Solution commentée" closed="true" %}}
1. \(Z = \dfrac{2i - 1}{3 + i - 1} = \dfrac{-1 + 2i}{2 + i} = \dfrac{(-1 + 2i)(2 - i)}{(2 + i)(2 - i)} = \dfrac{-2 + i + 4i - 2i^2}{5} = \dfrac{5i}{5} = i\).
2. \({|Z| = 1}\), donc \({\dfrac{AC}{AB} = 1}\), soit \({AB = AC}\). De plus \({\arg(Z) = \dfrac{\pi}{2} \ (2\pi)}\), donc \({\left(\overrightarrow{AB}, \overrightarrow{AC}\right) = \dfrac{\pi}{2} \ (2\pi)}\). Le triangle \(ABC\) est **rectangle isocèle en \(A\)** (et il est direct : on passe de \(\overrightarrow{AB}\) à \(\overrightarrow{AC}\) par un quart de tour dans le sens trigonométrique).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Déterminer des ensembles de points**
>
> On considère les points \(A(2)\) et \({B(-i)}\). Pour tout point \(M\) d’affixe \({z \neq -i}\), on pose \({Z = \dfrac{z - 2}{z + i}}\). Déterminer l’ensemble des points \(M\) tels que :
> 1. \({|Z| = 1}\) ;
> 2. \(Z\) est un réel ;
> 3. \(Z\) est un imaginaire pur non nul.

{{% details title="Solution commentée" closed="true" %}}
On a \({z - 2 = z - z_A}\), affixe de \(\overrightarrow{AM}\), et \({z + i = z - z_B}\), affixe de \(\overrightarrow{BM}\). Donc \({|Z| = \dfrac{AM}{BM}}\) et, pour \({M \neq A}\), \({\arg(Z) = \left(\overrightarrow{BM}, \overrightarrow{AM}\right) \ (2\pi)}\).

1. \({|Z| = 1 \iff AM = BM}\) : l’ensemble est la **médiatrice** du segment \([AB]\).
2. Si \({M = A}\), \({Z = 0}\) est réel. Si \({M \neq A}\), \(Z\) est réel si et seulement si \({\left(\overrightarrow{BM}, \overrightarrow{AM}\right) = 0 \ (\pi)}\), c’est-à-dire si \(A\), \(B\), \(M\) sont alignés. L’ensemble est la **droite \((AB)\) privée du point \(B\)**.
3. \(Z\) est imaginaire pur non nul si et seulement si \({M \neq A}\) et \({\left(\overrightarrow{BM}, \overrightarrow{AM}\right) = \dfrac{\pi}{2} \ (\pi)}\), c’est-à-dire si le triangle \(AMB\) est rectangle en \(M\). L’ensemble est le **cercle de diamètre \([AB]\) privé des points \(A\) et \(B\)**.
{{% /details %}}
