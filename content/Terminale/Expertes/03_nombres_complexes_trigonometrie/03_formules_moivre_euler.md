---
title: "Formules de Moivre et d'Euler"
weight: 3
cascade:
  type: docs
---

## Formules d’Euler

> [!TIP] **Propriété (formules d’Euler)**
>
> Pour tout réel \(\theta\) :
> \[
\cos(\theta) = \dfrac{e^{i\theta} + e^{-i\theta}}{2} \qquad \text{et} \qquad \sin(\theta) = \dfrac{e^{i\theta} - e^{-i\theta}}{2i}.
\]

{{% details title="Démonstration" closed="true" %}}
\({e^{i\theta} = \cos\theta + i\sin\theta}\) et \(e^{-i\theta} = \cos(-\theta) + i\sin(-\theta) = \cos\theta - i\sin\theta\). En additionnant : \({e^{i\theta} + e^{-i\theta} = 2\cos\theta}\). En soustrayant : \({e^{i\theta} - e^{-i\theta} = 2i\sin\theta}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> On utilise souvent ces formules sous la forme \({e^{i\theta} + e^{-i\theta} = 2\cos(\theta)}\) et \({e^{i\theta} - e^{-i\theta} = 2i\sin(\theta)}\).

{{% details title="Exemples" closed="true" %}}
- **Linéariser** \(\sin^2(\theta)\) (l’écrire sans puissance, avec des \(\cos(k\theta)\)) :
\[
\sin^2(\theta) = \left(\dfrac{e^{i\theta} - e^{-i\theta}}{2i}\right)^2 = \dfrac{e^{2i\theta} - 2 + e^{-2i\theta}}{-4} = \dfrac{2\cos(2\theta) - 2}{-4} = \dfrac{1 - \cos(2\theta)}{2}.
\]
On retrouve une formule de duplication.
- **Factoriser par l’angle moitié** : pour \({\theta \in\, ]-\pi\,;\,\pi[}\),
\[
1 + e^{i\theta} = e^{i\frac{\theta}{2}}\left(e^{-i\frac{\theta}{2}} + e^{i\frac{\theta}{2}}\right) = 2\cos\left(\dfrac{\theta}{2}\right)e^{i\frac{\theta}{2}}.
\]
Comme \({-\dfrac{\pi}{2} < \dfrac{\theta}{2} < \dfrac{\pi}{2}}\), \({\cos\dfrac{\theta}{2} > 0}\) : c’est une forme exponentielle de \({1 + e^{i\theta}}\), de module \(2\cos\dfrac{\theta}{2}\) et d’argument \(\dfrac{\theta}{2}\).
{{% /details %}}

## Formule de Moivre

> [!TIP] **Propriété (formule de Moivre)**
>
> Pour tout réel \(\theta\) et tout entier relatif \(n\) :
> \[
\left(\cos(\theta) + i\sin(\theta)\right)^n = \cos(n\theta) + i\sin(n\theta).
\]

> [!IMPORTANT] **Remarques**
>
> - C’est l’égalité \({\left(e^{i\theta}\right)^n = e^{in\theta}}\) écrite avec la forme trigonométrique.
> - En développant le membre de gauche avec la formule du binôme de Newton, puis en identifiant parties réelles et imaginaires, on exprime \(\cos(n\theta)\) et \(\sin(n\theta)\) en fonction de \(\cos(\theta)\) et \(\sin(\theta)\).

{{% details title="Exemple" closed="true" %}}
Pour \({n = 3}\) : d’une part \({(\cos\theta + i\sin\theta)^3 = \cos(3\theta) + i\sin(3\theta)}\) ; d’autre part, avec le binôme (coefficients \(1\,;\,3\,;\,3\,;\,1\)) et \({i^2 = -1}\), \({i^3 = -i}\) :
\[
(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta.
\]
En identifiant, puis en utilisant \({\sin^2\theta = 1 - \cos^2\theta}\) et \({\cos^2\theta = 1 - \sin^2\theta}\) :
\[
\begin{gathered}
\cos(3\theta) = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta, \\[0.3em]
\sin(3\theta) = 3\cos^2\theta\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta.
\end{gathered}
\]
{{% /details %}}

## Linéariser

> [!NOTE] **Exercice résolu 1 - Transformer un produit en somme**
>
> Montrer que, pour tous réels \(a\) et \(b\), \(\sin(a)\sin(b) = \dfrac{1}{2}\left(\cos(a - b) - \cos(a + b)\right)\).

{{% details title="Solution commentée" closed="true" %}}
D’après les formules d’Euler :
\[
\begin{aligned}
\sin(a)\sin(b) &= \dfrac{e^{ia} - e^{-ia}}{2i} \times \dfrac{e^{ib} - e^{-ib}}{2i} \\[0.3em]
&= \dfrac{e^{i(a+b)} - e^{i(a-b)} - e^{-i(a-b)} + e^{-i(a+b)}}{-4}.
\end{aligned}
\]
On regroupe les termes conjugués : \({e^{i(a+b)} + e^{-i(a+b)} = 2\cos(a + b)}\) et \({e^{i(a-b)} + e^{-i(a-b)} = 2\cos(a - b)}\). Donc
\[
\begin{aligned}
\sin(a)\sin(b) &= \dfrac{2\cos(a + b) - 2\cos(a - b)}{-4} \\[0.3em]
&= \dfrac{1}{2}\left(\cos(a - b) - \cos(a + b)\right).
\end{aligned}
\]
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Linéariser pour calculer une intégrale**
>
> 1. Montrer que, pour tout réel \(x\), \({\cos^3(x) = \dfrac{1}{4}\cos(3x) + \dfrac{3}{4}\cos(x)}\).
> 2. En déduire \({I = \displaystyle\int_0^{\frac{\pi}{2}} \cos^3(x)\,\mathrm{d}x}\).

{{% details title="Solution commentée" closed="true" %}}
1. Avec la formule d’Euler et le binôme de Newton :
\[
\cos^3(x) = \left(\dfrac{e^{ix} + e^{-ix}}{2}\right)^3 = \dfrac{e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix}}{8} = \dfrac{2\cos(3x) + 6\cos(x)}{8} = \dfrac{1}{4}\cos(3x) + \dfrac{3}{4}\cos(x).
\]
2. Une primitive de \({x \mapsto \dfrac{1}{4}\cos(3x) + \dfrac{3}{4}\cos(x)}\) est \({x \mapsto \dfrac{1}{12}\sin(3x) + \dfrac{3}{4}\sin(x)}\). Donc
\[
I = \left[\dfrac{1}{12}\sin(3x) + \dfrac{3}{4}\sin(x)\right]_0^{\frac{\pi}{2}} = \dfrac{1}{12}\sin\dfrac{3\pi}{2} + \dfrac{3}{4}\sin\dfrac{\pi}{2} - 0 = -\dfrac{1}{12} + \dfrac{3}{4} = \dfrac{2}{3}.
\]
{{% /details %}}
