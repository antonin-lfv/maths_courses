---
title: 'Croissances comparées et fonctions composées'
weight: 3
cascade:
  type: docs
---

## Limites par croissances comparées

> [!TIP] **Propriété**
>
> \[
\lim_{x \to +\infty} \frac{\ln(x)}{x} = 0.
\]

> [!IMPORTANT] **Remarque**
>
> La fonction \(\ln\) tend vers \(+\infty\) en \(+\infty\), mais beaucoup plus lentement que \(x\) : on dit que « \(x\) l’emporte sur \(\ln(x)\) » en \(+\infty\).

{{% details title="Exemple" closed="true" %}}
On cherche \(\lim\limits_{x \to +\infty} \big(x - \ln(x)\big)\), forme indéterminée « \(+\infty - \infty\) ».

Pour \(x > 0\), on factorise par \(x\) : \(x - \ln(x) = x\left(1 - \dfrac{\ln(x)}{x}\right)\).  
Or \(\lim\limits_{x \to +\infty} \dfrac{\ln(x)}{x} = 0\), donc la parenthèse tend vers 1, et, par produit :
\[
\lim_{x \to +\infty} \big(x - \ln(x)\big) = +\infty.
\]
{{% /details %}}

> [!TIP] **Conséquences**
>
> Pour tout entier naturel \(n \geq 1\) :
> \[
\lim_{x \to +\infty} \frac{\ln(x)}{x^n} = 0 \qquad \text{et} \qquad \lim_{x \to 0^+} x^n \ln(x) = 0.
\]

> [!IMPORTANT] **Remarque**
>
> En \(+\infty\) comme en \(0^+\), toute puissance de \(x\) l’emporte sur le logarithme.

## Limite particulière

> [!TIP] **Propriété**
>
> \[
\lim_{h \to 0} \frac{\ln(1 + h)}{h} = 1.
\]

> [!IMPORTANT] **Remarque**
>
> \(\dfrac{\ln(1 + h)}{h} = \dfrac{\ln(1 + h) - \ln(1)}{h}\) est le taux de variation de \(\ln\) entre 1 et \(1 + h\). Cette limite exprime simplement que \(\ln\) est dérivable en 1, avec \(\ln'(1) = \dfrac{1}{1} = 1\).

## Fonctions composées avec la fonction logarithme népérien

> [!TIP] **Propriété**
>
> Soit \(u\) une fonction **strictement positive** et dérivable sur un intervalle \(I\). Alors la fonction \(\ln(u) : x \mapsto \ln(u(x))\) est dérivable sur \(I\), et :
> \[
\big(\ln(u)\big)' = \frac{u'}{u}.
\]

C’est la dérivée d’une fonction composée \((v \circ u)' = (v' \circ u) \times u'\), avec \(v = \ln\) et \(v'(X) = \dfrac{1}{X}\).

> [!IMPORTANT] **Remarque**
>
> Comme \(u > 0\), \(\big(\ln(u)\big)'\) a le même signe que \(u'\) : les fonctions \(\ln(u)\) et \(u\) ont le même sens de variation sur \(I\).

{{% details title="Exemple" closed="true" %}}
On considère \(g(x) = \ln(x^2 - 2x + 5)\).

Pour tout réel \(x\), \(x^2 - 2x + 5 = (x - 1)^2 + 4 \geq 4 > 0\) : \(g\) est définie et dérivable sur \(\mathbb{R}\), et
\[
g'(x) = \frac{2x - 2}{x^2 - 2x + 5}.
\]
Le dénominateur étant strictement positif, \(g'(x)\) a le signe de \(2x - 2\) : \(g\) est décroissante sur \(]-\infty\,;\,1]\), croissante sur \([1\,;\,+\infty[\), de minimum \(g(1) = \ln(4)\).  
Par composition, \(\lim\limits_{x \to \pm\infty} g(x) = +\infty\) (car \(x^2 - 2x + 5 \to +\infty\) et \(\ln(X) \to +\infty\) quand \(X \to +\infty\)).

![](/images/image292.png)
{{% /details %}}

## Étudier des limites avec la fonction logarithme népérien

> [!NOTE] **Méthode 5 — Étudier des limites avec ln**
>
> Déterminer les limites suivantes.
> 1. \(\lim\limits_{x \to +\infty} \big(x^2 - 3\ln(x)\big)\)
> 2. \(\lim\limits_{x \to 0^+} \big(x\ln(x) - x\big)\)
> 3. \(\lim\limits_{x \to +\infty} \dfrac{\ln(2x + 1)}{x}\)
> 4. \(\lim\limits_{x \to 0} \dfrac{\ln(1 + 3x)}{x}\)
> 5. \(\lim\limits_{x \to +\infty} \ln\left(1 + \dfrac{1}{x^2}\right)\)

{{% details title="Solution commentée" closed="true" %}}
**1.** Forme « \(+\infty - \infty\) ». Pour \(x > 0\) : \(x^2 - 3\ln(x) = x^2\left(1 - 3\dfrac{\ln(x)}{x^2}\right)\).  
Par croissances comparées, \(\dfrac{\ln(x)}{x^2} \to 0\) ; la parenthèse tend vers 1 et, par produit, la limite vaut \(+\infty\).

**2.** Par croissances comparées, \(\lim\limits_{x \to 0^+} x\ln(x) = 0\) ; et \(\lim\limits_{x \to 0^+} x = 0\). Par différence, la limite vaut \(0\).

**3.** Pour \(x > 0\) : \(2x + 1 = x\left(2 + \dfrac{1}{x}\right)\), donc \(\ln(2x + 1) = \ln(x) + \ln\left(2 + \dfrac{1}{x}\right)\) et
\[
\frac{\ln(2x + 1)}{x} = \frac{\ln(x)}{x} + \frac{1}{x}\ln\left(2 + \frac{1}{x}\right).
\]
Le premier terme tend vers 0 (croissances comparées) ; dans le second, \(\ln\left(2 + \frac{1}{x}\right) \to \ln(2)\) et \(\frac1x \to 0\). La limite vaut \(0\).

**4.** On pose \(h = 3x\) : \(\dfrac{\ln(1 + 3x)}{x} = 3 \times \dfrac{\ln(1 + h)}{h}\). Quand \(x \to 0\), \(h \to 0\) et \(\dfrac{\ln(1 + h)}{h} \to 1\). La limite vaut \(3\).

**5.** \(1 + \dfrac{1}{x^2} \to 1\) et \(\ln\) est continue en 1, avec \(\ln(1) = 0\). Par composition, la limite vaut \(0\).
{{% /details %}}

## Étudier une fonction à l’aide des croissances comparées

> [!NOTE] **Méthode 6 — Étudier une fonction**
>
> On considère la fonction \(f\) définie sur \(]0\,;\,+\infty[\) par \(f(x) = 2\ln(x) - x\).
> 1. Déterminer les limites de \(f\) en \(0^+\) et en \(+\infty\).
> 2. Étudier les variations de \(f\) et dresser son tableau de variation.

{{% details title="Solution commentée" closed="true" %}}
**1.** En \(0^+\) : \(2\ln(x) \to -\infty\) et \(-x \to 0\), donc \(\lim\limits_{x \to 0^+} f(x) = -\infty\).  
En \(+\infty\) : forme « \(+\infty - \infty\) ». On écrit \(f(x) = x\left(2\dfrac{\ln(x)}{x} - 1\right)\) ; par croissances comparées, la parenthèse tend vers \(-1\), donc \(\lim\limits_{x \to +\infty} f(x) = -\infty\).

**2.** \(f'(x) = \dfrac{2}{x} - 1 = \dfrac{2 - x}{x}\). Pour \(x > 0\), \(f'(x)\) a le signe de \(2 - x\) : positif sur \(]0\,;\,2[\), négatif sur \(]2\,;\,+\infty[\).  
\(f\) admet un maximum en 2, égal à \(f(2) = 2\ln(2) - 2 \approx -0{,}61\).

![](/images/image293.png)

On remarque que ce maximum est négatif : pour tout \(x > 0\), \(f(x) < 0\), c’est-à-dire \(2\ln(x) < x\).
{{% /details %}}
