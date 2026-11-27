---
title: 'Variations et limites de la fonction ln'
weight: 2
cascade:
  type: docs
---

## Dérivée et variations

> [!TIP] **Propriété**
>
> La fonction logarithme népérien est dérivable sur \({]0\,;\,+\infty[}\), et sa dérivée est la fonction inverse :
> \[
\ln'(x) = \dfrac{1}{x}.
\]

> [!TIP] **Propriété**
>
> La fonction logarithme népérien est **strictement croissante** sur \({]0\,;\,+\infty[}\).

En effet, \({\ln'(x) = \dfrac{1}{x} > 0}\) pour tout \({x > 0}\).

![](/images/image289.png)

## Équations, inéquations

> [!TIP] **Propriétés**
>
> Pour tous réels \({a > 0}\) et \({b > 0}\) :
> - \({\ln(a) = \ln(b) \iff a = b}\) ;
> - \({\ln(a) < \ln(b) \iff a < b}\).
>
> En particulier, pour tout réel \({x > 0}\) :
> - \({\ln(x) = 0 \iff x = 1}\) ;
> - \({\ln(x) < 0 \iff 0 < x < 1}\) ;
> - \({\ln(x) > 0 \iff x > 1}\).

| \(x\)        | \(0\) |       | \(1\) |       | \({+\infty}\) |
|--------------|-------|-------|-------|-------|-------------|
| \(\ln(x)\)   | \(\Vert\) | \({-}\) | \(0\) | \({+}\) |             |

> [!IMPORTANT] **Remarque**
>
> Avant de résoudre une équation ou une inéquation contenant \(\ln(u(x))\), on détermine l’ensemble des réels \(x\) pour lesquels \({u(x) > 0}\) : c’est là seulement que l’expression a un sens.

{{% details title="Exemple" closed="true" %}}
On résout \({\ln(2x - 1) \leq 0}\).

L’expression est définie si \({2x - 1 > 0}\), soit \({x > \dfrac12}\). Pour ces valeurs :
\[
\ln(2x - 1) \leq 0 \iff \ln(2x - 1) \leq \ln(1) \iff 2x - 1 \leq 1 \iff x \leq 1.
\]
\({\mathcal{S} = \left]\dfrac{1}{2}\,;\,1\right]}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Pour tout réel \({x > 0}\), \({\ln(x) \leq x - 1}\).

La droite d’équation \({y = x - 1}\) est la tangente à la courbe de \(\ln\) au point d’abscisse 1, et la courbe est toujours en dessous (voir la convexité ci-dessous).

![](/images/image288.png)

## Limites aux bornes de l’ensemble de définition

> [!TIP] **Propriétés**
>
> \[
\lim_{x \to 0^+} \ln(x) = -\infty \qquad \text{et} \qquad \lim_{x \to +\infty} \ln(x) = +\infty.
\]

> [!IMPORTANT] **Conséquence**
>
> D’après la limite en 0, l’axe des ordonnées (droite d’équation \({x = 0}\)) est **asymptote verticale** à la courbe représentative de la fonction \(\ln\).

## Convexité

> [!TIP] **Propriété**
>
> La fonction logarithme népérien est **concave** sur \({]0\,;\,+\infty[}\).

En effet, \({\ln''(x) = -\dfrac{1}{x^2} < 0}\). Sa courbe est donc située en dessous de chacune de ses tangentes.

{{% details title="Exemple" closed="true" %}}
La tangente à la courbe de \(\ln\) au point d’abscisse \(e^2\) a pour équation
\[
y = \ln'(e^2)(x - e^2) + \ln(e^2) = \dfrac{1}{e^2}(x - e^2) + 2 = \dfrac{x}{e^2} + 1.
\]
Par concavité, pour tout \({x > 0}\) : \({\ln(x) \leq \dfrac{x}{e^2} + 1}\).

![](/images/image290.png)
{{% /details %}}

## Résoudre des équations avec la fonction logarithme népérien

> [!NOTE] **Méthode 3 - Résoudre des équations et inéquations avec ln**
>
> 1. a. Déterminer l’ensemble \(\mathcal{D}\) des réels \(x\) pour lesquels l’équation \({\ln(2x - 4) = \ln(x + 1)}\) est définie.  
>    b. Résoudre cette équation.
> 2. Résoudre \({\ln(x + 2) = 1}\).
> 3. Résoudre \({\ln(3 - x) > 0}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** a. Il faut \({2x - 4 > 0}\) et \({x + 1 > 0}\), c’est-à-dire \({x > 2}\) et \({x > -1}\). Donc \({\mathcal{D} = \,]2\,;\,+\infty[}\).  
b. Pour \({x \in \mathcal{D}}\) : \(\ln(2x - 4) = \ln(x + 1) \iff 2x - 4 = x + 1 \iff x = 5\).  
Comme \({5 \in \mathcal{D}}\), \({\mathcal{S} = \{5\}}\).

**2.** L’équation est définie pour \({x > -2}\). Pour ces valeurs : \(\ln(x + 2) = 1 \iff x + 2 = e \iff x = e - 2\).  
Comme \({e - 2 \approx 0{,}72 > -2}\), \({\mathcal{S} = \{e - 2\}}\).

**3.** L’inéquation est définie pour \({3 - x > 0}\), soit \({x < 3}\). Pour ces valeurs :
\[
\ln(3 - x) > 0 \iff 3 - x > 1 \iff x < 2.
\]
\({\mathcal{S} = \,]-\infty\,;\,2[}\).
{{% /details %}}

## Étudier une fonction comportant une fonction logarithme népérien

> [!NOTE] **Méthode 4 - Étudier une fonction comportant ln**
>
> On considère la fonction \(f\) définie sur \({]0\,;\,+\infty[}\) par \({f(x) = 3\ln(x) + x^2 - 1}\). On admet que \(f\) est dérivable sur \({]0\,;\,+\infty[}\).
> 1. Dresser le tableau de variation complet de \(f\).
> 2. Calculer \(f(1)\) et en déduire le signe de \(f(x)\) selon \(x\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout \({x > 0}\) :
\[
f'(x) = \dfrac{3}{x} + 2x > 0.
\]
\(f\) est donc strictement croissante sur \({]0\,;\,+\infty[}\).

Limites :
- en \({0^+}\) : \({\lim\limits_{x \to 0^+} 3\ln(x) = -\infty}\) et \({\lim\limits_{x \to 0^+} (x^2 - 1) = -1}\), donc, par somme, \({\lim\limits_{x \to 0^+} f(x) = -\infty}\) ;
- en \({+\infty}\) : \({\lim\limits_{x \to +\infty} 3\ln(x) = +\infty}\) et \({\lim\limits_{x \to +\infty} (x^2 - 1) = +\infty}\), donc \({\lim\limits_{x \to +\infty} f(x) = +\infty}\).

![](/images/image291.png)

**2.** \({f(1) = 3\ln(1) + 1 - 1 = 0}\). Comme \(f\) est strictement croissante : \({f(x) < 0}\) sur \(]0\,;\,1[\), \({f(1) = 0}\) et \({f(x) > 0}\) sur \({]1\,;\,+\infty[}\).
{{% /details %}}
