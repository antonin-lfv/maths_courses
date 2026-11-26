---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

Le plan complexe est muni d’un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\).

### Exercice 1

On considère les points \(A(1 + 2i)\), \(B(3 + 3i)\) et \(C(2 + 4i)\).
1. Calculer \(Z = \dfrac{c - a}{b - a}\).
2. Montrer que le triangle \(ABC\) est isocèle en \(A\). Est-il rectangle en \(A\) ?

{{% details title="Solution" closed="true" %}}
1. \(Z = \dfrac{1 + 2i}{2 + i} = \dfrac{(1 + 2i)(2 - i)}{5} = \dfrac{2 - i + 4i + 2}{5} = \dfrac{4}{5} + \dfrac{3}{5}i\).
2. \(|Z| = \sqrt{\dfrac{16}{25} + \dfrac{9}{25}} = 1\), donc \(AC = AB\) : \(ABC\) est isocèle en \(A\). \(Z\) n’est pas imaginaire pur (\(\mathrm{Re}(Z) \neq 0\)), donc \((AB)\) et \((AC)\) ne sont pas perpendiculaires : le triangle n’est pas rectangle en \(A\).
{{% /details %}}

### Exercice 2

1. Montrer que les points \(A(1 - i)\), \(B(2 + i)\) et \(C(4 + 5i)\) sont alignés.
2. Montrer que le triangle de sommets \(O\), \(E(2)\) et \(F(1 + i\sqrt{3})\) est équilatéral.

{{% details title="Solution" closed="true" %}}
1. \(\dfrac{c - a}{b - a} = \dfrac{3 + 6i}{1 + 2i} = \dfrac{3(1 + 2i)}{1 + 2i} = 3\), qui est réel : les points sont alignés (et même \(\overrightarrow{AC} = 3\overrightarrow{AB}\)).
2. \(\dfrac{z_F - z_O}{z_E - z_O} = \dfrac{1 + i\sqrt{3}}{2} = e^{i\frac{\pi}{3}}\). Donc \(OF = OE\) et \(\left(\overrightarrow{OE}, \overrightarrow{OF}\right) = \dfrac{\pi}{3}\) : le triangle isocèle \(OEF\) a un angle de \(60^\circ\) au sommet principal, il est équilatéral.
{{% /details %}}

### Exercice 3

On considère les points \(A(i)\) et \(B(1)\). Pour tout point \(M\) d’affixe \(z \neq 1\), on pose \(Z = \dfrac{z - i}{z - 1}\).
1. Déterminer l’ensemble \(\mathcal{E}_1\) des points \(M\) tels que \(Z\) soit réel.
2. Déterminer l’ensemble \(\mathcal{E}_2\) des points \(M\) tels que \(Z\) soit imaginaire pur.

{{% details title="Solution" closed="true" %}}
\(z - i\) est l’affixe de \(\overrightarrow{AM}\) et \(z - 1\) celle de \(\overrightarrow{BM}\). Pour \(M \neq A\) : \(\arg(Z) = \left(\overrightarrow{BM}, \overrightarrow{AM}\right) \ (2\pi)\). Pour \(M = A\), \(Z = 0\), qui est à la fois réel et imaginaire pur.

1. \(Z\) est réel si et seulement si \(M = A\) ou \(\left(\overrightarrow{BM}, \overrightarrow{AM}\right) = 0 \ (\pi)\), c’est-à-dire si \(M\) appartient à la droite \((AB)\). Comme \(M \neq B\) : \(\mathcal{E}_1\) est la droite \((AB)\) privée de \(B\).
2. \(Z\) est imaginaire pur si et seulement si \(M = A\) ou \((MA) \perp (MB)\), c’est-à-dire si \(M\) est sur le cercle de diamètre \([AB]\). Comme \(M \neq B\) : \(\mathcal{E}_2\) est le cercle de diamètre \([AB]\) privé de \(B\) (centre \(\frac{1}{2} + \frac{1}{2}i\), rayon \(\frac{\sqrt{2}}{2}\)).
{{% /details %}}

### Exercice 4

1. Écrire les éléments de \(\mathbb{U}_6\) sous forme algébrique.
2. Résoudre dans \(\mathbb{C}\) l’équation \(z^3 = 8i\). On donnera les solutions sous forme exponentielle puis algébrique.

{{% details title="Solution" closed="true" %}}
1. \(\mathbb{U}_6 = \left\{e^{\frac{ik\pi}{3}},\ 0 \leq k \leq 5\right\} = \left\{1\,;\,\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\,;\,-\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\,;\,-1\,;\,-\dfrac{1}{2} - \dfrac{\sqrt{3}}{2}i\,;\,\dfrac{1}{2} - \dfrac{\sqrt{3}}{2}i\right\}\).
2. \(8i = 8e^{i\frac{\pi}{2}}\), donc \(z_0 = 2e^{i\frac{\pi}{6}}\) est une solution (\(z_0^3 = 8e^{i\frac{\pi}{2}}\)). Les solutions sont les \(z_0\,\omega\) avec \(\omega \in \mathbb{U}_3 = \left\{1, e^{i\frac{2\pi}{3}}, e^{i\frac{4\pi}{3}}\right\}\) :
\[
2e^{i\frac{\pi}{6}} = \sqrt{3} + i, \qquad 2e^{i\frac{5\pi}{6}} = -\sqrt{3} + i, \qquad 2e^{i\frac{3\pi}{2}} = -2i.
\]
Vérification : \((-2i)^3 = -8i^3 = 8i\).
{{% /details %}}

### Exercice 5

On note \(j = e^{i\frac{2\pi}{3}}\).
1. Montrer que \(j^3 = 1\), \(j^2 = \overline{j}\) et \(1 + j + j^2 = 0\).
2. Calculer \((1 + j)^6\) et \(j^{2026}\).

{{% details title="Solution" closed="true" %}}
1. \(j^3 = e^{2i\pi} = 1\). \(j^2 = e^{i\frac{4\pi}{3}} = e^{-i\frac{2\pi}{3}} = \overline{j}\). Enfin \(1 + j + j^2 = 1 + 2\,\mathrm{Re}(j) = 1 + 2 \times \left(-\dfrac{1}{2}\right) = 0\).
2. \(1 + j = -j^2 = \dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i = e^{i\frac{\pi}{3}}\), donc \((1 + j)^6 = e^{2i\pi} = 1\). Comme \(2026 = 3 \times 675 + 1\), \(j^{2026} = \left(j^3\right)^{675} \times j = j\).
{{% /details %}}

### Exercice 6

Soit \(n \geq 2\) un entier. On note \(A_0, A_1, \dots, A_{n-1}\) les points d’affixes \(\omega^k\), où \(\omega = e^{\frac{2i\pi}{n}}\).
1. Montrer que la longueur du côté \(A_0A_1\) vaut \(2\sin\left(\dfrac{\pi}{n}\right)\).
2. En déduire le périmètre \(p_n\) du polygone régulier \(A_0A_1\dots A_{n-1}\), et calculer \(p_6\).

{{% details title="Solution" closed="true" %}}
1. \(A_0A_1 = |\omega - 1|\). En factorisant par l’angle moitié :
\[
\omega - 1 = e^{i\frac{\pi}{n}}\left(e^{i\frac{\pi}{n}} - e^{-i\frac{\pi}{n}}\right) = e^{i\frac{\pi}{n}} \times 2i\sin\left(\frac{\pi}{n}\right).
\]
Comme \(\left|e^{i\frac{\pi}{n}}\right| = |i| = 1\) et \(\sin\frac{\pi}{n} > 0\) (car \(0 < \frac{\pi}{n} < \pi\)), \(A_0A_1 = 2\sin\left(\dfrac{\pi}{n}\right)\).
2. Le polygone est régulier : ses \(n\) côtés ont la même longueur, donc \(p_n = 2n\sin\left(\dfrac{\pi}{n}\right)\). Pour \(n = 6\) : \(p_6 = 12\sin\dfrac{\pi}{6} = 6\) (l’hexagone régulier inscrit dans un cercle de rayon 1 a des côtés de longueur 1). Remarque : quand \(n\) devient grand, \(p_n\) se rapproche du périmètre du cercle, \(2\pi\).
{{% /details %}}
