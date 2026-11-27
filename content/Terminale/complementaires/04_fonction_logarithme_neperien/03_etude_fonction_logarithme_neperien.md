---
title: 'Étude de la fonction logarithme népérien'
weight: 3
cascade:
  type: docs
---

## Sens de variation

> [!TIP] **Propriété (admise)**
>
> La fonction logarithme népérien est continue et dérivable sur \({]0\,;\,+\infty[}\) et, pour tout réel \({x > 0}\) :
> \[
\ln'(x) = \dfrac{1}{x}.
\]

> [!TIP] **Propriété**
>
> La fonction logarithme népérien est strictement croissante sur \({]0\,;\,+\infty[}\).

{{% details title="Démonstration" closed="true" %}}
Pour tout \({x > 0}\), \({\ln'(x) = \dfrac{1}{x} > 0}\).
{{% /details %}}

![](/images/image346.png)

> [!IMPORTANT] **Remarque**
>
> La tangente à la courbe de \(\ln\) au point d’abscisse 1 a pour équation \({y = \ln'(1)(x - 1) + \ln(1)}\), soit \({y = x - 1}\).

> [!TIP] **Propriété (admise)**
>
> Pour tous réels \(a\) et \(b\) strictement positifs :
> - \({\ln(a) < 0 \iff 0 < a < 1}\) et \({\ln(a) > 0 \iff a > 1}\) ;
> - \({\ln(a) = \ln(b) \iff a = b}\) ;
> - \({\ln(a) < \ln(b) \iff a < b}\).

## Limites

> [!TIP] **Propriétés (admises)**
>
> \[
\lim_{x \to +\infty} \ln(x) = +\infty, \qquad \lim_{x \to 0} \ln(x) = -\infty, \qquad \lim_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1,
\]
> \[
\lim_{x \to 0} x\ln(x) = 0, \qquad \lim_{x \to +\infty} \dfrac{\ln(x)}{x} = 0.
\]

> [!IMPORTANT] **Remarque**
>
> La droite d’équation \({x = 0}\) (l’axe des ordonnées) est asymptote verticale à la courbe de \(\ln\). Les deux dernières limites traduisent le fait que \(x\) « l’emporte » sur \(\ln(x)\).

## Formule de dérivation

> [!TIP] **Propriété (admise)**
>
> Soit \(u\) une fonction dérivable sur un intervalle \(I\) telle que, pour tout \({x \in I}\), \({u(x) > 0}\). La fonction \({x \mapsto \ln\left(u(x)\right)}\) est dérivable sur \(I\) et
> \[
\left(\ln(u)\right)' = \dfrac{u'}{u}.
\]

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = \ln(x^2 + 3)}\) sur \(\mathbb{R}\). On a \({u(x) = x^2 + 3 > 0}\) et \({u'(x) = 2x}\), donc \({f'(x) = \dfrac{2x}{x^2 + 3}}\).
{{% /details %}}

## Étudier et utiliser le logarithme

> [!NOTE] **Méthode 1 - Résoudre une inéquation**
>
> Résoudre : 1. \({\ln(x - 1) \leq 2}\) sur \({]1\,;\,+\infty[}\) ; 2. \({e^{3x} > 5}\) dans \(\mathbb{R}\).

{{% details title="Solution commentée" closed="true" %}}
1. Comme \(\ln\) est strictement croissante et \({2 = \ln(e^2)}\) : \(\ln(x - 1) \leq \ln(e^2) \iff x - 1 \leq e^2 \iff x \leq 1 + e^2\). \({\mathcal{S} = \,]1\,;\,1 + e^2]}\).
2. \(\ln\) est strictement croissante : \({e^{3x} > 5 \iff 3x > \ln 5 \iff x > \dfrac{\ln 5}{3}}\). \({\mathcal{S} = \left]\dfrac{\ln 5}{3}\,;\,+\infty\right[}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Déterminer une limite**
>
> Déterminer : 1. \({\lim\limits_{x \to +\infty} \left(3\ln(x) - 2\right)}\) ; 2. \({\lim\limits_{x \to 0} \left(x - \ln(x)\right)}\) ; 3. \({\lim\limits_{x \to +\infty} \left(x - \ln(x)\right)}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({\lim\limits_{+\infty} \ln = +\infty}\), donc la limite vaut \({+\infty}\).
2. \({\lim\limits_{0} x = 0}\) et \({\lim\limits_{0} (-\ln x) = +\infty}\) : limite \({+\infty}\).
3. Forme « \({\infty - \infty}\) ». On factorise : \({x - \ln(x) = x\left(1 - \dfrac{\ln(x)}{x}\right)}\). Or \({\lim\limits_{+\infty} \dfrac{\ln x}{x} = 0}\), donc la parenthèse tend vers 1 et la limite vaut \({+\infty}\).
{{% /details %}}

> [!NOTE] **Méthode 3 - Déterminer une dérivée et étudier des variations**
>
> Soit \(f\) la fonction définie sur \({]0\,;\,+\infty[}\) par \({f(x) = x - 2\ln(x)}\). Étudier les variations de \(f\).

{{% details title="Solution commentée" closed="true" %}}
\({f'(x) = 1 - \dfrac{2}{x} = \dfrac{x - 2}{x}}\). Sur \({]0\,;\,+\infty[}\), \({x > 0}\), donc \(f'(x)\) est du signe de \({x - 2}\) : \(f\) est strictement décroissante sur \(]0\,;\,2]\) et strictement croissante sur \({[2\,;\,+\infty[}\). Elle admet un minimum en 2 : \({f(2) = 2 - 2\ln 2 \approx 0{,}61}\).
{{% /details %}}
