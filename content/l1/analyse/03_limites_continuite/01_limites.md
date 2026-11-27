---
title: 'Limite d’une fonction'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(f\) est une fonction définie sur un intervalle \(I\) de \(\mathbb{R}\), à valeurs réelles, et \(a\) est un point de \(I\) ou une extrémité de \(I\) (éventuellement \(\pm\infty\)).

## Définitions

> [!TIP] **Définition - Limite finie en un point**
>
> Soit \(a\) un réel. On dit que \(f\) admet pour **limite** le réel \(\ell\) en \(a\) si
>
> \[ \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in I,\quad |x - a| \leq \eta \Rightarrow |f(x) - \ell| \leq \varepsilon. \]
>
> On note \({\lim_{x \to a} f(x) = \ell}\) ou \({f(x) \xrightarrow[x \to a]{} \ell}\).

> [!TIP] **Définition - Autres cas**
>
> - \({\lim_{x \to a} f(x) = +\infty}\) : \({\forall A \in \mathbb{R},\ \exists \eta > 0,\ \forall x \in I,\ |x - a| \leq \eta \Rightarrow f(x) \geq A}\).
> - \({\lim_{x \to +\infty} f(x) = \ell}\) : \({\forall \varepsilon > 0,\ \exists B \in \mathbb{R},\ \forall x \in I,\ x \geq B \Rightarrow |f(x) - \ell| \leq \varepsilon}\).
> - \({\lim_{x \to +\infty} f(x) = +\infty}\) : \({\forall A \in \mathbb{R},\ \exists B \in \mathbb{R},\ \forall x \in I,\ x \geq B \Rightarrow f(x) \geq A}\).
>
> Les cas avec \(-\infty\) s’écrivent de la même façon.

> [!TIP] **Définition - Limite à droite, à gauche**
>
> La **limite à droite** de \(f\) en \(a\), notée \({\lim_{x \to a^+} f(x)}\), est la limite en \(a\) de la restriction de \(f\) à \({I \cap\, ]a, +\infty[}\). On définit de même la limite à gauche \({\lim_{x \to a^-} f(x)}\).

> [!TIP] **Propriétés**
>
> - Si \(f\) a une limite en \(a\), elle est unique.
> - Si \(f\) a une limite **finie** en \(a\), alors \(f\) est bornée au voisinage de \(a\).
> - Si \({a \in I}\) et si \(f\) a une limite en \(a\), cette limite vaut \(f(a)\).

## Caractérisation séquentielle

> [!TIP] **Théorème**
>
> \(f\) admet pour limite \(\ell\) en \(a\) (\(\ell\) et \(a\) finis ou infinis) si et seulement si, pour toute suite \((x_n)\) d’éléments de \(I\) qui tend vers \(a\), la suite \((f(x_n))\) tend vers \(\ell\).

> [!NOTE] **Méthode - Montrer qu’une fonction n’a pas de limite**
>
> On exhibe deux suites \((x_n)\) et \((y_n)\) qui tendent vers \(a\) et telles que \((f(x_n))\) et \((f(y_n))\) aient des limites différentes.

{{% details title="Exemple" closed="true" %}}
La fonction \({x \mapsto \cos\left(\dfrac{1}{x}\right)}\) n’a pas de limite en \(0\). En effet, \({x_n = \dfrac{1}{2n\pi}}\) et \({y_n = \dfrac{1}{(2n+1)\pi}}\) tendent vers \(0\), mais \({\cos\left(\dfrac{1}{x_n}\right) = 1}\) et \({\cos\left(\dfrac{1}{y_n}\right) = -1}\).
{{% /details %}}

## Opérations et inégalités

> [!TIP] **Théorème**
>
> Les règles sur les sommes, produits et quotients de limites sont les mêmes que pour les suites, avec les mêmes formes indéterminées.
>
> **Composition** : si \({\lim_{x \to a} f(x) = b}\) et \({\lim_{y \to b} g(y) = \ell}\), alors \({\lim_{x \to a} g(f(x)) = \ell}\).

> [!TIP] **Théorèmes de comparaison**
>
> - **Passage à la limite** : si \({f \leq g}\) au voisinage de \(a\) et si \(f\) et \(g\) ont des limites \(\ell\) et \(\ell'\) en \(a\), alors \({\ell \leq \ell'}\).
> - **Encadrement** : si \({g \leq f \leq h}\) au voisinage de \(a\) et si \(g\) et \(h\) ont la même limite finie \(\ell\) en \(a\), alors \({\lim_{x \to a} f(x) = \ell}\).
> - **Comparaison** : si \({f \geq g}\) au voisinage de \(a\) et \({\lim_{x \to a} g(x) = +\infty}\), alors \({\lim_{x \to a} f(x) = +\infty}\).

> [!TIP] **Théorème de la limite monotone**
>
> Soit \(f\) une fonction **monotone** sur \({]a, b[}\). Alors \(f\) admet en tout point \(x_0\) de \({]a, b[}\) une limite à gauche et une limite à droite finies, et des limites (finies ou infinies) en \(a\) et en \(b\). Si \(f\) est croissante :
>
> \[ \lim_{x \to x_0^-} f(x) \leq f(x_0) \leq \lim_{x \to x_0^+} f(x). \]

## Limites usuelles

> [!TIP] **Propriétés**
>
> - \({\lim_{x \to 0} \dfrac{\sin x}{x} = 1}\), \({\lim_{x \to 0} \dfrac{1 - \cos x}{x^2} = \dfrac{1}{2}}\), \({\lim_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1}\), \({\lim_{x \to 0} \dfrac{e^x - 1}{x} = 1}\).
> - **Croissances comparées** : pour \({\alpha > 0}\) et \({\beta > 0}\),
>
> \[ \lim_{x \to +\infty} \dfrac{(\ln x)^\beta}{x^\alpha} = 0, \qquad \lim_{x \to +\infty} \dfrac{x^\alpha}{e^{\beta x}} = 0, \qquad \lim_{x \to 0^+} x^\alpha |\ln x|^\beta = 0. \]

> [!NOTE] **Exercice résolu - Calculs de limites**
>
> Déterminer \({\lim_{x \to 0} \dfrac{\sin(3x)}{\ln(1 + 2x)}}\) et \({\lim_{x \to +\infty} \left(1 + \dfrac{2}{x}\right)^x}\).

{{% details title="Solution commentée" closed="true" %}}
**Première limite.** Pour \(x\) non nul proche de \(0\) :

\[
\dfrac{\sin(3x)}{\ln(1 + 2x)} = \dfrac{\sin(3x)}{3x} \times \dfrac{2x}{\ln(1 + 2x)} \times \dfrac{3}{2}.
\]

Quand \({x \to 0}\), \({3x \to 0}\) et \({2x \to 0}\) : par composition, les deux premiers facteurs tendent vers \(1\). La limite vaut \(\dfrac{3}{2}\).

**Seconde limite.** C’est une forme \(1^\infty\). On passe à l’exponentielle : pour \({x > 0}\),

\[
\left(1 + \dfrac{2}{x}\right)^x = \exp\left(x\ln\left(1 + \dfrac{2}{x}\right)\right) \qquad \text{et} \qquad x\ln\left(1 + \dfrac{2}{x}\right) = 2 \times \dfrac{\ln\left(1 + \dfrac{2}{x}\right)}{\dfrac{2}{x}}.
\]

Quand \({x \to +\infty}\), \({\dfrac{2}{x} \to 0}\), donc le quotient tend vers \(1\) et l’exposant vers \(2\). Par continuité de l’exponentielle, la limite vaut \(e^2\).
{{% /details %}}
