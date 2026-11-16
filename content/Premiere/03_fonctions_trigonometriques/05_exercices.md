---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

1. Convertir en radians : \(150^\circ\), \(20^\circ\), \(270^\circ\).
2. Convertir en degrés : \(\dfrac{2\pi}{5}\), \(\dfrac{3\pi}{4}\), \(\dfrac{7\pi}{6}\).

{{% details title="Solution" closed="true" %}}
On utilise la proportionnalité : \(180^\circ\) correspond à \(\pi\) radians.

1. \(150^\circ = \dfrac{150\pi}{180} = \dfrac{5\pi}{6}\) ; \(20^\circ = \dfrac{20\pi}{180} = \dfrac{\pi}{9}\) ; \(270^\circ = \dfrac{270\pi}{180} = \dfrac{3\pi}{2}\).
2. \(\dfrac{2\pi}{5} = \dfrac{2 \times 180}{5} = 72^\circ\) ; \(\dfrac{3\pi}{4} = \dfrac{3 \times 180}{4} = 135^\circ\) ; \(\dfrac{7\pi}{6} = \dfrac{7 \times 180}{6} = 210^\circ\).
{{% /details %}}

### Exercice 2

1. Sur un cercle de rayon 4 cm, calculer la longueur d’un arc intercepté par un angle au centre de \(\dfrac{\pi}{3}\) radian.
2. Sur un cercle de rayon 5 cm, un arc mesure 10 cm. Quelle est, en radians, la mesure de l’angle au centre qui l’intercepte ?

{{% details title="Solution" closed="true" %}}
La longueur d’un arc intercepté par un angle au centre de \(\alpha\) radians sur un cercle de rayon \(r\) est \(\ell = r\alpha\).

1. \(\ell = 4 \times \dfrac{\pi}{3} = \dfrac{4\pi}{3} \approx 4{,}19\) cm.
2. \(\alpha = \dfrac{\ell}{r} = \dfrac{10}{5} = 2\) radians.
{{% /details %}}

### Exercice 3

1. Parmi les réels \(\dfrac{7\pi}{3}\), \(-\dfrac{5\pi}{3}\), \(-\dfrac{\pi}{3}\) et \(\dfrac{13\pi}{3}\), lesquels ont le même point-image que \(\dfrac{\pi}{3}\) sur le cercle trigonométrique ?
2. Pour chacun des réels \(\dfrac{17\pi}{4}\), \(-\dfrac{11\pi}{6}\) et \(\dfrac{25\pi}{3}\), déterminer le réel de l’intervalle \(]-\pi\,;\,\pi]\) qui a le même point-image.

{{% details title="Solution" closed="true" %}}
Deux réels ont le même point-image si et seulement si leur différence est un multiple entier de \(2\pi\).

1. - \(\dfrac{7\pi}{3} - \dfrac{\pi}{3} = 2\pi\) : même point-image.
   - \(-\dfrac{5\pi}{3} - \dfrac{\pi}{3} = -2\pi\) : même point-image.
   - \(-\dfrac{\pi}{3} - \dfrac{\pi}{3} = -\dfrac{2\pi}{3}\), qui n’est pas un multiple de \(2\pi\) : point-image différent (c’est le symétrique par rapport à l’axe des abscisses).
   - \(\dfrac{13\pi}{3} - \dfrac{\pi}{3} = 4\pi = 2 \times 2\pi\) : même point-image.
2. - \(\dfrac{17\pi}{4} = \dfrac{\pi}{4} + 4\pi\) : le réel cherché est \(\dfrac{\pi}{4}\).
   - \(-\dfrac{11\pi}{6} = \dfrac{\pi}{6} - 2\pi\) : le réel cherché est \(\dfrac{\pi}{6}\).
   - \(\dfrac{25\pi}{3} = \dfrac{\pi}{3} + 8\pi\) : le réel cherché est \(\dfrac{\pi}{3}\).
{{% /details %}}

### Exercice 4

Donner la valeur exacte de :
\[
\cos\left(\frac{2\pi}{3}\right), \quad \sin\left(\frac{5\pi}{6}\right), \quad \cos\left(-\frac{\pi}{4}\right), \quad \sin\left(\frac{7\pi}{6}\right), \quad \cos\left(\frac{11\pi}{3}\right).
\]

{{% details title="Solution" closed="true" %}}
On place les points-images sur le cercle trigonométrique et on utilise les symétries par rapport aux axes.

- \(\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}\) : symétrique de \(\dfrac{\pi}{3}\) par rapport à l’axe des ordonnées, donc \(\cos\left(\dfrac{2\pi}{3}\right) = -\cos\left(\dfrac{\pi}{3}\right) = -\dfrac{1}{2}\).
- \(\dfrac{5\pi}{6} = \pi - \dfrac{\pi}{6}\) : même ordonnée que \(\dfrac{\pi}{6}\), donc \(\sin\left(\dfrac{5\pi}{6}\right) = \dfrac{1}{2}\).
- \(-\dfrac{\pi}{4}\) est symétrique de \(\dfrac{\pi}{4}\) par rapport à l’axe des abscisses : même abscisse, donc \(\cos\left(-\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2}\).
- \(\dfrac{7\pi}{6} = \pi + \dfrac{\pi}{6}\) : symétrique de \(\dfrac{\pi}{6}\) par rapport à l’origine, donc \(\sin\left(\dfrac{7\pi}{6}\right) = -\dfrac{1}{2}\).
- \(\dfrac{11\pi}{3} = -\dfrac{\pi}{3} + 4\pi\), donc \(\cos\left(\dfrac{11\pi}{3}\right) = \cos\left(-\dfrac{\pi}{3}\right) = \dfrac{1}{2}\).
{{% /details %}}

### Exercice 5

On sait que \(x \in \left[\dfrac{\pi}{2}\,;\,\pi\right]\) et que \(\sin(x) = \dfrac{3}{5}\). Calculer \(\cos(x)\).

{{% details title="Solution" closed="true" %}}
Pour tout réel \(x\), \(\cos^2(x) + \sin^2(x) = 1\), donc
\[
\cos^2(x) = 1 - \frac{9}{25} = \frac{16}{25}, \quad \text{d’où} \quad \cos(x) = \frac{4}{5} \ \text{ou} \ \cos(x) = -\frac{4}{5}.
\]
Comme \(x \in \left[\dfrac{\pi}{2}\,;\,\pi\right]\), son point-image est dans le quart de cercle situé à gauche de l’axe des ordonnées : \(\cos(x) \leq 0\). Donc \(\cos(x) = -\dfrac{4}{5}\).
{{% /details %}}

### Exercice 6

1. Déterminer les réels \(x\) de l’intervalle \(]-\pi\,;\,\pi]\) tels que \(\cos(x) = \dfrac{1}{2}\).
2. Déterminer les réels \(x\) de l’intervalle \([0\,;\,2\pi[\) tels que \(\sin(x) = -\dfrac{\sqrt{2}}{2}\).

{{% details title="Solution" closed="true" %}}
1. Sur le cercle trigonométrique, les points d’abscisse \(\dfrac{1}{2}\) sont les points-images de \(\dfrac{\pi}{3}\) et de \(-\dfrac{\pi}{3}\), qui appartiennent tous deux à \(]-\pi\,;\,\pi]\). Les solutions sont \(-\dfrac{\pi}{3}\) et \(\dfrac{\pi}{3}\).
2. On sait que \(\sin\left(\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2}\). Les points d’ordonnée \(-\dfrac{\sqrt{2}}{2}\) sont les symétriques, par rapport à l’origine et par rapport à l’axe des abscisses, du point-image de \(\dfrac{\pi}{4}\) : ce sont les points-images de \(\pi + \dfrac{\pi}{4} = \dfrac{5\pi}{4}\) et de \(2\pi - \dfrac{\pi}{4} = \dfrac{7\pi}{4}\). Les solutions dans \([0\,;\,2\pi[\) sont \(\dfrac{5\pi}{4}\) et \(\dfrac{7\pi}{4}\).
{{% /details %}}
