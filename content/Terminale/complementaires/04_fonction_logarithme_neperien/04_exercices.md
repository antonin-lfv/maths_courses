---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Simplifier : \(A = \ln(e^4) - \ln(1)\), \(B = e^{\ln 6} + \ln\left(\dfrac{1}{e}\right)\), \(C = \ln(50) - 2\ln(5)\), \(D = \ln(4) + \ln(25)\).

{{% details title="Solution" closed="true" %}}
- \(A = 4 - 0 = 4\).
- \(B = 6 - 1 = 5\).
- \(C = \ln(50) - \ln(25) = \ln\left(\dfrac{50}{25}\right) = \ln 2\).
- \(D = \ln(4 \times 25) = \ln(100) = 2\ln(10)\).
{{% /details %}}

### Exercice 2

Résoudre :
1. \(e^{x + 2} = 10\) dans \(\mathbb{R}\)
2. \(\ln(2x + 1) = 3\) sur \(\left]-\frac{1}{2}\,;\,+\infty\right[\)
3. \(\ln(x) + \ln(x - 3) = \ln(4)\)

{{% details title="Solution" closed="true" %}}
1. \(x + 2 = \ln(10)\), donc \(x = \ln(10) - 2\).
2. \(2x + 1 = e^3\), donc \(x = \dfrac{e^3 - 1}{2}\) (qui appartient bien à l’intervalle).
3. L’équation a un sens pour \(x > 0\) et \(x > 3\), soit \(x > 3\). Alors \(\ln(x(x - 3)) = \ln 4 \iff x^2 - 3x - 4 = 0 \iff (x - 4)(x + 1) = 0\). Seule \(x = 4\) vérifie \(x > 3\) : \(\mathcal{S} = \{4\}\).
{{% /details %}}

### Exercice 3

Un capital de 5 000 € est placé à intérêts composés au taux annuel de 3 %. Au bout de \(n\) années, il vaut \(C_n = 5\,000 \times 1{,}03^n\). Au bout de combien d’années le capital aura-t-il dépassé 8 000 € ?

{{% details title="Solution" closed="true" %}}
On résout \(5\,000 \times 1{,}03^n > 8\,000 \iff 1{,}03^n > 1{,}6\). La fonction \(\ln\) étant strictement croissante :
\[
n\ln(1{,}03) > \ln(1{,}6) \iff n > \frac{\ln(1{,}6)}{\ln(1{,}03)} \approx 15{,}9,
\]
car \(\ln(1{,}03) > 0\). Le capital dépasse 8 000 € au bout de 16 ans.
{{% /details %}}

### Exercice 4

Déterminer les limites suivantes.
1. \(\lim\limits_{x \to +\infty} \left(x^2 + \ln(x)\right)\)
2. \(\lim\limits_{x \to 0} \dfrac{1 + \ln(x)}{x}\) (avec \(x > 0\))
3. \(\lim\limits_{x \to +\infty} \dfrac{\ln(x) + 3}{x}\)

{{% details title="Solution" closed="true" %}}
1. Somme de deux quantités qui tendent vers \(+\infty\) : \(+\infty\).
2. Le numérateur tend vers \(-\infty\), le dénominateur vers 0 par valeurs positives : \(-\infty\).
3. \(\dfrac{\ln(x) + 3}{x} = \dfrac{\ln x}{x} + \dfrac{3}{x}\), et les deux termes tendent vers 0 : limite 0.
{{% /details %}}

### Exercice 5

Soit \(f\) la fonction définie sur \(]0\,;\,+\infty[\) par \(f(x) = \dfrac{\ln(x)}{x}\).
1. Montrer que \(f'(x) = \dfrac{1 - \ln(x)}{x^2}\).
2. Étudier les variations de \(f\) et donner son maximum.

{{% details title="Solution" closed="true" %}}
1. Quotient : \(f'(x) = \dfrac{\frac{1}{x} \times x - \ln(x) \times 1}{x^2} = \dfrac{1 - \ln(x)}{x^2}\).
2. \(x^2 > 0\) : \(f'(x)\) est du signe de \(1 - \ln(x)\), positif si et seulement si \(\ln x < 1\), c’est-à-dire \(x < e\). \(f\) est croissante sur \(]0\,;\,e]\) et décroissante sur \([e\,;\,+\infty[\). Son maximum est \(f(e) = \dfrac{1}{e} \approx 0{,}37\).
{{% /details %}}

### Exercice 6

Déterminer la dérivée de \(g(x) = \ln\left(x^2 - 4x + 5\right)\) sur \(\mathbb{R}\), puis étudier ses variations.

{{% details title="Solution" closed="true" %}}
\(u(x) = x^2 - 4x + 5 = (x - 2)^2 + 1 > 0\) pour tout \(x\) : \(g\) est définie et dérivable sur \(\mathbb{R}\), et \(g'(x) = \dfrac{2x - 4}{x^2 - 4x + 5}\). Le dénominateur est positif : \(g'(x)\) est du signe de \(2x - 4\). \(g\) est décroissante sur \(]-\infty\,;\,2]\) et croissante sur \([2\,;\,+\infty[\), de minimum \(g(2) = \ln(1) = 0\).
{{% /details %}}
