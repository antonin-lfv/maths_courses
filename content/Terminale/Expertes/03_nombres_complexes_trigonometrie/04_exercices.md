---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

1. Calculer la valeur exacte de \(\cos\left(\dfrac{5\pi}{12}\right)\).
2. Montrer que, pour tout réel \(x\), \(\cos\left(x + \dfrac{\pi}{4}\right) + \cos\left(x - \dfrac{\pi}{4}\right) = \sqrt{2}\cos(x)\).

{{% details title="Solution" closed="true" %}}
1. \(\dfrac{5\pi}{12} = \dfrac{\pi}{4} + \dfrac{\pi}{6}\), donc
\[
\cos\left(\frac{5\pi}{12}\right) = \cos\frac{\pi}{4}\cos\frac{\pi}{6} - \sin\frac{\pi}{4}\sin\frac{\pi}{6} = \frac{\sqrt{2}}{2} \times \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \times \frac{1}{2} = \frac{\sqrt{6} - \sqrt{2}}{4}.
\]
2. En additionnant les formules de \(\cos(x + b)\) et \(\cos(x - b)\), les termes en \(\sin(x)\sin(b)\) s’éliminent : la somme vaut \(2\cos(x)\cos\frac{\pi}{4} = 2 \times \frac{\sqrt{2}}{2}\cos(x) = \sqrt{2}\cos(x)\).
{{% /details %}}

### Exercice 2

Soit \(a\) un réel de \(\left[0\,;\,\dfrac{\pi}{2}\right]\) tel que \(\cos(a) = \dfrac{3}{5}\). Calculer \(\sin(a)\), \(\sin(2a)\) et \(\cos(2a)\).

{{% details title="Solution" closed="true" %}}
\(\sin^2(a) = 1 - \dfrac{9}{25} = \dfrac{16}{25}\) et \(\sin(a) \geq 0\) sur \(\left[0\,;\,\frac{\pi}{2}\right]\), donc \(\sin(a) = \dfrac{4}{5}\).

Alors \(\sin(2a) = 2 \times \dfrac{4}{5} \times \dfrac{3}{5} = \dfrac{24}{25}\) et \(\cos(2a) = 2\cos^2(a) - 1 = \dfrac{18}{25} - 1 = -\dfrac{7}{25}\).
{{% /details %}}

### Exercice 3

On pose \(z = \dfrac{1 + i}{\sqrt{3} - i}\).
1. Écrire \(1 + i\) et \(\sqrt{3} - i\) sous forme exponentielle, puis en déduire une forme exponentielle de \(z\).
2. Donner la forme algébrique de \(z\).
3. En déduire la valeur exacte de \(\cos\left(\dfrac{5\pi}{12}\right)\) et de \(\sin\left(\dfrac{5\pi}{12}\right)\).

{{% details title="Solution" closed="true" %}}
1. \(1 + i = \sqrt{2}\,e^{i\frac{\pi}{4}}\) et \(\sqrt{3} - i = 2e^{-i\frac{\pi}{6}}\) (module \(2\), \(\cos\theta = \frac{\sqrt{3}}{2}\), \(\sin\theta = -\frac{1}{2}\)). Donc
\[
z = \frac{\sqrt{2}}{2}\,e^{i\left(\frac{\pi}{4} + \frac{\pi}{6}\right)} = \frac{\sqrt{2}}{2}\,e^{i\frac{5\pi}{12}}.
\]
2. \(z = \dfrac{(1 + i)(\sqrt{3} + i)}{(\sqrt{3} - i)(\sqrt{3} + i)} = \dfrac{\sqrt{3} + i + i\sqrt{3} - 1}{4} = \dfrac{\sqrt{3} - 1}{4} + i\,\dfrac{\sqrt{3} + 1}{4}\).
3. En identifiant \(\dfrac{\sqrt{2}}{2}\left(\cos\frac{5\pi}{12} + i\sin\frac{5\pi}{12}\right)\) avec la forme algébrique :
\[
\cos\left(\frac{5\pi}{12}\right) = \frac{2}{\sqrt{2}} \times \frac{\sqrt{3} - 1}{4} = \frac{\sqrt{6} - \sqrt{2}}{4}, \qquad \sin\left(\frac{5\pi}{12}\right) = \frac{\sqrt{6} + \sqrt{2}}{4}.
\]
On retrouve le résultat de l’exercice 1.
{{% /details %}}

### Exercice 4

Donner la forme algébrique de \((1 + i)^{10}\) et de \(\left(\dfrac{1 + i\sqrt{3}}{2}\right)^{2026}\).

{{% details title="Solution" closed="true" %}}
- \(1 + i = \sqrt{2}\,e^{i\frac{\pi}{4}}\), donc \((1 + i)^{10} = \left(\sqrt{2}\right)^{10}e^{i\frac{10\pi}{4}} = 32\,e^{i\frac{5\pi}{2}} = 32\,e^{i\frac{\pi}{2}} = 32i\).
- \(\dfrac{1 + i\sqrt{3}}{2} = e^{i\frac{\pi}{3}}\), donc la puissance vaut \(e^{i\frac{2026\pi}{3}}\). Or \(2026 = 6 \times 337 + 4\), donc \(\dfrac{2026\pi}{3} = 337 \times 2\pi + \dfrac{4\pi}{3}\), et le nombre vaut \(e^{i\frac{4\pi}{3}} = -\dfrac{1}{2} - i\dfrac{\sqrt{3}}{2}\).
{{% /details %}}

### Exercice 5

1. Linéariser \(\cos^4(x)\), c’est-à-dire l’écrire comme combinaison de \(\cos(4x)\), \(\cos(2x)\) et d’une constante.
2. En déduire une primitive de \(x \mapsto \cos^4(x)\) sur \(\mathbb{R}\).

{{% details title="Solution" closed="true" %}}
1. Avec la formule d’Euler et les coefficients binomiaux \(1\,;\,4\,;\,6\,;\,4\,;\,1\) :
\[
\cos^4(x) = \frac{\left(e^{ix} + e^{-ix}\right)^4}{16} = \frac{e^{4ix} + 4e^{2ix} + 6 + 4e^{-2ix} + e^{-4ix}}{16} = \frac{2\cos(4x) + 8\cos(2x) + 6}{16},
\]
soit \(\cos^4(x) = \dfrac{1}{8}\cos(4x) + \dfrac{1}{2}\cos(2x) + \dfrac{3}{8}\).
2. Une primitive est \(x \mapsto \dfrac{1}{32}\sin(4x) + \dfrac{1}{4}\sin(2x) + \dfrac{3}{8}x\).
{{% /details %}}

### Exercice 6

À l’aide de la formule de Moivre, exprimer \(\cos(4\theta)\) en fonction de \(\cos(\theta)\) uniquement.

{{% details title="Solution" closed="true" %}}
On note \(c = \cos\theta\) et \(s = \sin\theta\). D’après la formule de Moivre, \(\cos(4\theta)\) est la partie réelle de \((c + is)^4\). Avec le binôme et \(i^2 = -1\), \(i^4 = 1\), les termes réels sont ceux d’indices pairs :
\[
\cos(4\theta) = c^4 - 6c^2s^2 + s^4.
\]
Avec \(s^2 = 1 - c^2\) :
\[
\cos(4\theta) = c^4 - 6c^2(1 - c^2) + (1 - c^2)^2 = c^4 - 6c^2 + 6c^4 + 1 - 2c^2 + c^4 = 8\cos^4\theta - 8\cos^2\theta + 1.
\]
Vérification pour \(\theta = 0\) : \(8 - 8 + 1 = 1 = \cos 0\).
{{% /details %}}
