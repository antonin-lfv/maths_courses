---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

Le plan complexe est muni d’un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\).

### Exercice 1

On considère les points \(A(2 + i)\), \(B(-1 + 3i)\) et \(C(-3 - 2i)\).
1. Déterminer l’affixe du vecteur \(\overrightarrow{AB}\) et celle du milieu \(K\) de \([BC]\).
2. Déterminer l’affixe du point \(D\) tel que \(ABCD\) soit un parallélogramme.

{{% details title="Solution" closed="true" %}}
1. \(z_{\overrightarrow{AB}} = z_B - z_A = -3 + 2i\) et \(z_K = \dfrac{z_B + z_C}{2} = \dfrac{-4 + i}{2} = -2 + \dfrac{1}{2}i\).
2. \(ABCD\) est un parallélogramme si et seulement si \(\overrightarrow{AB} = \overrightarrow{DC}\), soit \(z_B - z_A = z_C - z_D\), c’est-à-dire
\[
z_D = z_A + z_C - z_B = (2 + i) + (-3 - 2i) - (-1 + 3i) = -4i.
\]
Vérification : \(z_C - z_D = -3 - 2i + 4i = -3 + 2i = z_B - z_A\).
{{% /details %}}

### Exercice 2

On pose \(z = -2 + 2i\).
1. Déterminer le module et un argument de \(z\).
2. En déduire le module et un argument de \(z^3\), puis la forme algébrique de \(z^3\). Vérifier par le calcul.

{{% details title="Solution" closed="true" %}}
1. \(|z| = \sqrt{4 + 4} = 2\sqrt{2}\) ; \(\cos\theta = \dfrac{-2}{2\sqrt{2}} = -\dfrac{\sqrt{2}}{2}\) et \(\sin\theta = \dfrac{\sqrt{2}}{2}\), donc \(\arg(z) = \dfrac{3\pi}{4} \ (2\pi)\).
2. \(|z^3| = \left(2\sqrt{2}\right)^3 = 16\sqrt{2}\) et \(\arg(z^3) = \dfrac{9\pi}{4} = \dfrac{\pi}{4} \ (2\pi)\). Donc
\[
z^3 = 16\sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = 16\sqrt{2}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = 16 + 16i.
\]
Vérification : \(z^2 = 4 - 8i - 4 = -8i\), puis \(z^3 = -8i(-2 + 2i) = 16i - 16i^2 = 16 + 16i\).
{{% /details %}}

### Exercice 3

Déterminer et représenter l’ensemble des points \(M\) d’affixe \(z\) tels que :
1. \(|z - 2 + i| = 3\) ;
2. \(|z - 1| = |z + i|\).

{{% details title="Solution" closed="true" %}}
1. \(|z - 2 + i| = |z - (2 - i)|\) est la distance \(\Omega M\), où \(\Omega\) est le point d’affixe \(2 - i\). L’ensemble cherché est le cercle de centre \(\Omega(2 - i)\) et de rayon 3.
2. On note \(A\) et \(B\) les points d’affixes \(1\) et \(-i\). La condition s’écrit \(AM = BM\) : l’ensemble est la **médiatrice** du segment \([AB]\). Avec \(z = x + iy\) : \((x - 1)^2 + y^2 = x^2 + (y + 1)^2 \iff -2x + 1 = 2y + 1 \iff y = -x\). C’est la droite d’équation \(y = -x\).
{{% /details %}}

### Exercice 4

Soit \(z\) un élément de \(\mathbb{U}\). Montrer que \(z + \dfrac{1}{z}\) est un réel, et que \(z - \dfrac{1}{z}\) est un imaginaire pur.

{{% details title="Solution" closed="true" %}}
Comme \(|z| = 1\), on a \(z\overline{z} = 1\), donc \(\dfrac{1}{z} = \overline{z}\). Ainsi \(z + \dfrac{1}{z} = z + \overline{z} = 2\,\mathrm{Re}(z)\), qui est réel, et \(z - \dfrac{1}{z} = z - \overline{z} = 2i\,\mathrm{Im}(z)\), qui est imaginaire pur.
{{% /details %}}

### Exercice 5

On considère les points \(A(2)\), \(B\left(-1 + i\sqrt{3}\right)\) et \(C\left(-1 - i\sqrt{3}\right)\).
1. Montrer que \(A\), \(B\) et \(C\) sont sur un même cercle de centre \(O\).
2. Déterminer la nature du triangle \(ABC\).

{{% details title="Solution" closed="true" %}}
1. \(|z_A| = 2\), \(|z_B| = \sqrt{1 + 3} = 2\) et \(|z_C| = 2\) : \(OA = OB = OC = 2\), les trois points sont sur le cercle de centre \(O\) et de rayon 2.
2. \(AB = \left|-3 + i\sqrt{3}\right| = \sqrt{9 + 3} = 2\sqrt{3}\), \(AC = \left|-3 - i\sqrt{3}\right| = 2\sqrt{3}\) et \(BC = \left|-2i\sqrt{3}\right| = 2\sqrt{3}\). Les trois côtés ont la même longueur : \(ABC\) est **équilatéral**.
{{% /details %}}

### Exercice 6

Déterminer les entiers naturels \(n\) tels que \((1 + i)^n\) soit un réel, puis ceux tels que \((1 + i)^n\) soit un imaginaire pur.

{{% details title="Solution" closed="true" %}}
\(1 + i \neq 0\), \(|1 + i| = \sqrt{2}\) et \(\arg(1 + i) = \dfrac{\pi}{4} \ (2\pi)\), donc \((1 + i)^n \neq 0\) et \(\arg\left((1 + i)^n\right) = \dfrac{n\pi}{4} \ (2\pi)\).
- \((1 + i)^n\) est réel si et seulement si \(\dfrac{n\pi}{4} = 0 \ (\pi)\), c’est-à-dire \(\dfrac{n}{4}\) entier : \(n\) est un multiple de 4.
- \((1 + i)^n\) est imaginaire pur si et seulement si \(\dfrac{n\pi}{4} = \dfrac{\pi}{2} \ (\pi)\), c’est-à-dire \(\dfrac{n}{4} = \dfrac{1}{2} + k\) avec \(k\) entier, soit \(n = 4k + 2\) : \(n\) est pair mais pas multiple de 4.

Exemple : \((1 + i)^2 = 2i\) est imaginaire pur et \((1 + i)^4 = (2i)^2 = -4\) est réel.
{{% /details %}}
