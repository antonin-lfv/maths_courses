---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Calculer les intégrales suivantes.
1. \(\displaystyle\int_0^2 (3x^2 - 2x + 1)\,\mathrm{d}x\)
2. \(\displaystyle\int_1^4 \frac{1}{\sqrt{x}}\,\mathrm{d}x\)
3. \(\displaystyle\int_0^{\ln 2} e^{2x}\,\mathrm{d}x\)
4. \(\displaystyle\int_0^1 \frac{2x}{x^2 + 1}\,\mathrm{d}x\)
5. \(\displaystyle\int_0^{\pi/2} \cos(x)\sin^2(x)\,\mathrm{d}x\)

{{% details title="Solution" closed="true" %}}
1. \(\big[x^3 - x^2 + x\big]_0^2 = 8 - 4 + 2 = 6\).
2. \(\big[2\sqrt{x}\big]_1^4 = 4 - 2 = 2\).
3. \(\left[\dfrac{e^{2x}}{2}\right]_0^{\ln 2} = \dfrac{e^{2\ln 2} - 1}{2} = \dfrac{4 - 1}{2} = \dfrac{3}{2}\).
4. Forme \(\dfrac{u'}{u}\) avec \(u(x) = x^2 + 1 > 0\) : \(\big[\ln(x^2 + 1)\big]_0^1 = \ln(2)\).
5. Forme \(u'u^2\) avec \(u = \sin\) : \(\left[\dfrac{\sin^3(x)}{3}\right]_0^{\pi/2} = \dfrac{1}{3}\).
{{% /details %}}

### Exercice 2

Calculer la valeur moyenne de la fonction \(x \mapsto \dfrac{1}{x}\) sur l’intervalle \([1\,;\,e^2]\).

{{% details title="Solution" closed="true" %}}
\[
m = \frac{1}{e^2 - 1}\int_1^{e^2} \frac{1}{x}\,\mathrm{d}x = \frac{1}{e^2 - 1}\big[\ln(x)\big]_1^{e^2} = \frac{2}{e^2 - 1} \approx 0{,}31.
\]
{{% /details %}}

### Exercice 3

Calculer l’aire du domaine compris entre les courbes des fonctions \(f : x \mapsto \sqrt{x}\) et \(g : x \mapsto x^2\) sur l’intervalle \([0\,;\,1]\).

{{% details title="Solution" closed="true" %}}
Pour \(x \in [0\,;\,1]\), \(x^2 \leq \sqrt{x}\) (en effet \(x^2 \leq x \leq \sqrt{x}\)). L’aire vaut
\[
\int_0^1 \big(\sqrt{x} - x^2\big)\,\mathrm{d}x = \left[\frac{2}{3}x^{3/2} - \frac{x^3}{3}\right]_0^1 = \frac{2}{3} - \frac{1}{3} = \frac{1}{3} \text{ u.a.}
\]
(On utilise que \(x \mapsto \frac{2}{3}x\sqrt{x}\) a pour dérivée \(\sqrt{x}\).)
{{% /details %}}

### Exercice 4

À l’aide d’une intégration par parties, calculer \(\displaystyle\int_0^1 (2x + 1)e^{-x}\,\mathrm{d}x\).

{{% details title="Solution" closed="true" %}}
On pose \(u(x) = 2x + 1\) et \(v'(x) = e^{-x}\), d’où \(u'(x) = 2\) et \(v(x) = -e^{-x}\) :
\[
\int_0^1 (2x + 1)e^{-x}\,\mathrm{d}x = \big[-(2x + 1)e^{-x}\big]_0^1 + \int_0^1 2e^{-x}\,\mathrm{d}x = \left(-\frac{3}{e} + 1\right) + \big[-2e^{-x}\big]_0^1 = 1 - \frac{3}{e} - \frac{2}{e} + 2 = 3 - \frac{5}{e}.
\]
{{% /details %}}

### Exercice 5

Pour tout entier naturel \(n\), on pose \(I_n = \displaystyle\int_0^1 \frac{x^n}{1 + x}\,\mathrm{d}x\).
1. Justifier que \(I_n \geq 0\) pour tout \(n\).
2. Montrer que la suite \((I_n)\) est décroissante.
3. Montrer que \(I_n \leq \dfrac{1}{n + 1}\), puis en déduire la limite de \((I_n)\).

{{% details title="Solution" closed="true" %}}
1. Pour \(x \in [0\,;\,1]\), \(\dfrac{x^n}{1 + x} \geq 0\), et les bornes sont dans l’ordre croissant : \(I_n \geq 0\).
2. Par linéarité, \(I_{n+1} - I_n = \displaystyle\int_0^1 \frac{x^n(x - 1)}{1 + x}\,\mathrm{d}x\). Sur \([0\,;\,1]\), \(x - 1 \leq 0\), donc l’intégrande est négative et \(I_{n+1} - I_n \leq 0\) : la suite est décroissante.
3. Pour \(x \in [0\,;\,1]\), \(1 + x \geq 1\), donc \(\dfrac{x^n}{1 + x} \leq x^n\). En intégrant : \(I_n \leq \displaystyle\int_0^1 x^n\,\mathrm{d}x = \frac{1}{n + 1}\).  
   Ainsi \(0 \leq I_n \leq \dfrac{1}{n + 1}\) et, d’après le théorème des gendarmes, \(\lim\limits_{n \to +\infty} I_n = 0\).
{{% /details %}}
