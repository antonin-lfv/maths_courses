---
title: "D'autres formules de trigonométrie"
weight: 1
cascade:
  type: docs
---

## Formules d’addition

> [!TIP] **Propriété**
>
> Pour tous réels \(a\) et \(b\) :
> \[
\begin{aligned}
\cos(a + b) &= \cos(a)\cos(b) - \sin(a)\sin(b), \\[0.3em]
\cos(a - b) &= \cos(a)\cos(b) + \sin(a)\sin(b), \\[0.3em]
\sin(a + b) &= \sin(a)\cos(b) + \cos(a)\sin(b), \\[0.3em]
\sin(a - b) &= \sin(a)\cos(b) - \cos(a)\sin(b).
\end{aligned}
\]

{{% details title="Démonstration" closed="true" %}}
Dans un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\), on considère les points \(A\) et \(B\) du cercle trigonométrique tels que \({\left(\vec{u}, \overrightarrow{OA}\right) = b}\) et \({\left(\vec{u}, \overrightarrow{OB}\right) = a}\). Ainsi \(A(\cos b\,;\,\sin b)\), \(B(\cos a\,;\,\sin a)\) et \({\left(\overrightarrow{OA}, \overrightarrow{OB}\right) = a - b \ (2\pi)}\).

On calcule le produit scalaire \({\overrightarrow{OA} \cdot \overrightarrow{OB}}\) de deux façons :
- avec les normes et l’angle : \({\overrightarrow{OA} \cdot \overrightarrow{OB} = 1 \times 1 \times \cos(a - b)}\) ;
- avec les coordonnées dans la base orthonormée : \({\overrightarrow{OA} \cdot \overrightarrow{OB} = \cos(b)\cos(a) + \sin(b)\sin(a)}\).

D’où \(\cos(a - b) = \cos(a)\cos(b) + \sin(a)\sin(b)\).

En remplaçant \(b\) par \({-b}\) (avec \({\cos(-b) = \cos b}\) et \({\sin(-b) = -\sin b}\)) : \(\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)\).

Pour le sinus, on utilise \({\sin(x) = \cos\left(\dfrac{\pi}{2} - x\right)}\) :
\[
\begin{aligned}
\sin(a + b) &= \cos\left(\left(\dfrac{\pi}{2} - a\right) - b\right) \\[0.3em]
&= \cos\left(\dfrac{\pi}{2} - a\right)\cos(b) + \sin\left(\dfrac{\pi}{2} - a\right)\sin(b) \\[0.3em]
&= \sin(a)\cos(b) + \cos(a)\sin(b),
\end{aligned}
\]
puis on remplace \(b\) par \({-b}\) pour obtenir \({\sin(a - b)}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Comme \({\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}}\) :
\[
\begin{aligned}
\cos\left(\dfrac{\pi}{12}\right) &= \cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4} + \sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4} = \dfrac{1}{2} \times \dfrac{\sqrt{2}}{2} + \dfrac{\sqrt{3}}{2} \times \dfrac{\sqrt{2}}{2} \\[0.3em]
&= \dfrac{\sqrt{2} + \sqrt{6}}{4}.
\end{aligned}
\]
{{% /details %}}

## Formules de duplication

En prenant \({b = a}\) dans les formules d’addition, on obtient les formules suivantes.

> [!TIP] **Propriétés**
>
> Pour tout réel \(a\) :
> - \({\sin(2a) = 2\sin(a)\cos(a)}\) ;
> - \(\cos(2a) = \cos^2(a) - \sin^2(a) = 2\cos^2(a) - 1 = 1 - 2\sin^2(a)\) ;
> - \({\cos^2(a) = \dfrac{1 + \cos(2a)}{2}}\) et \({\sin^2(a) = \dfrac{1 - \cos(2a)}{2}}\).

{{% details title="Démonstration" closed="true" %}}
- \(\sin(2a) = \sin(a + a) = \sin(a)\cos(a) + \cos(a)\sin(a) = 2\sin(a)\cos(a)\).
- \(\cos(2a) = \cos(a)\cos(a) - \sin(a)\sin(a) = \cos^2(a) - \sin^2(a)\). Avec \({\sin^2(a) = 1 - \cos^2(a)}\), on obtient \({2\cos^2(a) - 1}\) ; avec \({\cos^2(a) = 1 - \sin^2(a)}\), on obtient \({1 - 2\sin^2(a)}\).
- De \({\cos(2a) = 2\cos^2(a) - 1}\), on tire \({\cos^2(a) = \dfrac{1 + \cos(2a)}{2}}\) ; de \({\cos(2a) = 1 - 2\sin^2(a)}\), on tire \({\sin^2(a) = \dfrac{1 - \cos(2a)}{2}}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les deux dernières formules relient le cosinus (ou le sinus) d’un angle à celui de l’angle **double**. Lues à l’envers, elles donnent le cosinus et le sinus de \(\dfrac{x}{2}\) à partir de \(\cos(x)\), au signe près.

{{% details title="Exemple" closed="true" %}}
\(\cos^2\left(\dfrac{\pi}{12}\right) = \dfrac{1 + \cos\dfrac{\pi}{6}}{2} = \dfrac{1 + \dfrac{\sqrt{3}}{2}}{2} = \dfrac{2 + \sqrt{3}}{4}\). Comme \({0 < \dfrac{\pi}{12} < \dfrac{\pi}{2}}\), \({\cos\dfrac{\pi}{12} > 0}\), donc \({\cos\left(\dfrac{\pi}{12}\right) = \dfrac{\sqrt{2 + \sqrt{3}}}{2}}\).

(On retrouve la valeur précédente : \({\left(\dfrac{\sqrt{2} + \sqrt{6}}{4}\right)^2 = \dfrac{8 + 2\sqrt{12}}{16} = \dfrac{2 + \sqrt{3}}{4}}\).)
{{% /details %}}

## Utiliser les formules

> [!NOTE] **Exercice résolu 1 - Déterminer des valeurs exactes**
>
> 1. Déterminer la valeur exacte de \(\sin\left(\dfrac{5\pi}{12}\right)\) en écrivant \({\dfrac{5\pi}{12} = \dfrac{\pi}{4} + \dfrac{\pi}{6}}\).
> 2. Déterminer la valeur exacte de \(\sin\left(\dfrac{\pi}{8}\right)\).

{{% details title="Solution commentée" closed="true" %}}
1. \(\sin\left(\dfrac{\pi}{4} + \dfrac{\pi}{6}\right) = \sin\dfrac{\pi}{4}\cos\dfrac{\pi}{6} + \cos\dfrac{\pi}{4}\sin\dfrac{\pi}{6} = \dfrac{\sqrt{2}}{2} \times \dfrac{\sqrt{3}}{2} + \dfrac{\sqrt{2}}{2} \times \dfrac{1}{2} = \dfrac{\sqrt{6} + \sqrt{2}}{4}\).
2. \(\dfrac{\pi}{8}\) est la moitié de \(\dfrac{\pi}{4}\) : \(\sin^2\left(\dfrac{\pi}{8}\right) = \dfrac{1 - \cos\dfrac{\pi}{4}}{2} = \dfrac{1 - \dfrac{\sqrt{2}}{2}}{2} = \dfrac{2 - \sqrt{2}}{4}\). Comme \({0 < \dfrac{\pi}{8} < \dfrac{\pi}{2}}\), \({\sin\dfrac{\pi}{8} > 0}\), donc \({\sin\left(\dfrac{\pi}{8}\right) = \dfrac{\sqrt{2 - \sqrt{2}}}{2}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Transformer une expression pour résoudre une équation**
>
> 1. Montrer que, pour tout réel \(x\), \({\cos(x) - \sqrt{3}\sin(x) = 2\cos\left(x + \dfrac{\pi}{3}\right)}\).
> 2. En déduire les solutions dans \({]-\pi\,;\,\pi]}\) de l’équation \({\cos(x) - \sqrt{3}\sin(x) = 1}\).

{{% details title="Solution commentée" closed="true" %}}
1. Avec la formule d’addition :
\[
2\cos\left(x + \dfrac{\pi}{3}\right) = 2\left(\cos(x)\cos\dfrac{\pi}{3} - \sin(x)\sin\dfrac{\pi}{3}\right) = 2\left(\dfrac{1}{2}\cos(x) - \dfrac{\sqrt{3}}{2}\sin(x)\right) = \cos(x) - \sqrt{3}\sin(x).
\]
2. L’équation équivaut à \({\cos\left(x + \dfrac{\pi}{3}\right) = \dfrac{1}{2} = \cos\dfrac{\pi}{3}}\), c’est-à-dire
\[
x + \dfrac{\pi}{3} = \dfrac{\pi}{3} + 2k\pi \quad \text{ou} \quad x + \dfrac{\pi}{3} = -\dfrac{\pi}{3} + 2k\pi, \quad k \in \mathbb{Z},
\]
soit \({x = 2k\pi}\) ou \({x = -\dfrac{2\pi}{3} + 2k\pi}\). Dans \({]-\pi\,;\,\pi]}\) : \({\mathcal{S} = \left\{-\dfrac{2\pi}{3}\,;\,0\right\}}\).

Vérification pour \({x = -\dfrac{2\pi}{3}}\) : \({\cos x = -\dfrac{1}{2}}\) et \({\sin x = -\dfrac{\sqrt{3}}{2}}\), donc \({\cos x - \sqrt{3}\sin x = -\dfrac{1}{2} + \dfrac{3}{2} = 1}\).
{{% /details %}}
