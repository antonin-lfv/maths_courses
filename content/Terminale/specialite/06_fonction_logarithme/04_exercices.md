---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Simplifier les nombres suivants.
1. \({A = \ln\left(e^3\right) - e^{\ln(2)}}\)
2. \({B = \ln(50) - \ln(2)}\), à exprimer en fonction de \(\ln(5)\)
3. \({C = \ln\left(\sqrt{e}\right) + \ln\left(\dfrac{1}{e^2}\right)}\)

{{% details title="Solution" closed="true" %}}
1. \({A = 3 - 2 = 1}\).
2. \(B = \ln\left(\dfrac{50}{2}\right) = \ln(25) = \ln(5^2) = 2\ln(5)\).
3. \({C = \dfrac{1}{2} + (-2) = -\dfrac{3}{2}}\).
{{% /details %}}

### Exercice 2

Résoudre les équations suivantes, après avoir précisé l’ensemble sur lequel elles sont définies.
1. \({\ln(x) = -3}\)
2. \({e^{x + 1} = 4}\)
3. \({\ln(x - 1) + \ln(x + 1) = \ln(3)}\)
4. \({\big(\ln(x)\big)^2 - \ln(x) - 2 = 0}\)

{{% details title="Solution" closed="true" %}}
1. Définie sur \({]0\,;\,+\infty[}\). \({\ln(x) = -3 \iff x = e^{-3}}\) : \({\mathcal{S} = \{e^{-3}\}}\).
2. Définie sur \(\mathbb{R}\). \(e^{x + 1} = 4 \iff x + 1 = \ln(4) \iff x = \ln(4) - 1\) : \({\mathcal{S} = \{\ln(4) - 1\}}\).
3. Il faut \({x - 1 > 0}\) et \({x + 1 > 0}\), soit \({x > 1}\). Pour \({x > 1}\) :  
   \(\ln(x - 1) + \ln(x + 1) = \ln\big((x - 1)(x + 1)\big) = \ln(x^2 - 1)\), donc l’équation équivaut à \({x^2 - 1 = 3}\), soit \({x^2 = 4}\), \({x = 2}\) ou \({x = -2}\).  
   Seul \(2\) vérifie \({x > 1}\) : \({\mathcal{S} = \{2\}}\).
4. Définie sur \({]0\,;\,+\infty[}\). On pose \({X = \ln(x)}\) : \({X^2 - X - 2 = 0}\), de discriminant \(9\), d’où \({X = 2}\) ou \({X = -1}\).  
   \({\ln(x) = 2 \iff x = e^2}\) ; \({\ln(x) = -1 \iff x = e^{-1}}\). \({\mathcal{S} = \left\{e^{-1}\,;\,e^2\right\}}\).
{{% /details %}}

### Exercice 3

Résoudre les inéquations suivantes.
1. \({\ln(x + 3) < \ln(2x)}\)
2. \({e^{2x} \geq 5}\)

{{% details title="Solution" closed="true" %}}
1. Il faut \({x + 3 > 0}\) et \({2x > 0}\), soit \({x > 0}\). Pour \({x > 0}\), par stricte croissance de \(\ln\) : \({x + 3 < 2x \iff x > 3}\). \({\mathcal{S} = \,]3\,;\,+\infty[}\).
2. Par stricte croissance de \(\ln\) (les deux membres sont strictement positifs) : \(e^{2x} \geq 5 \iff 2x \geq \ln(5) \iff x \geq \dfrac{\ln(5)}{2}\). \({\mathcal{S} = \left[\dfrac{\ln(5)}{2}\,;\,+\infty\right[}\).
{{% /details %}}

### Exercice 4

Déterminer le plus petit entier naturel \(n\) tel que \({0{,}9^n < 0{,}01}\).

{{% details title="Solution" closed="true" %}}
Les deux membres sont strictement positifs et \(\ln\) est strictement croissante :
\[
0{,}9^n < 0{,}01 \iff n\ln(0{,}9) < \ln(0{,}01).
\]
Comme \({\ln(0{,}9) < 0}\) (car \({0{,}9 < 1}\)), on divise en changeant le sens de l’inégalité :
\[
n > \dfrac{\ln(0{,}01)}{\ln(0{,}9)} \approx 43{,}7.
\]
Le plus petit entier qui convient est \({n = 44}\) (vérification : \({0{,}9^{43} \approx 0{,}0108}\) et \({0{,}9^{44} \approx 0{,}0097}\)).
{{% /details %}}

### Exercice 5

Calculer la dérivée de chacune des fonctions suivantes.
1. \({f(x) = x\ln(x) - x}\) sur \({]0\,;\,+\infty[}\)
2. \({g(x) = \ln(3x + 1)}\) sur \({\left]-\dfrac{1}{3}\,;\,+\infty\right[}\)
3. \({h(x) = \dfrac{\ln(x)}{x}}\) sur \({]0\,;\,+\infty[}\)

{{% details title="Solution" closed="true" %}}
1. Dérivée d’un produit : \({f'(x) = 1 \times \ln(x) + x \times \dfrac{1}{x} - 1 = \ln(x)}\).
2. \({g = \ln(u)}\) avec \({u(x) = 3x + 1 > 0}\) sur l’intervalle : \({g'(x) = \dfrac{3}{3x + 1}}\).
3. Dérivée d’un quotient : \({h'(x) = \dfrac{\dfrac{1}{x} \times x - \ln(x) \times 1}{x^2} = \dfrac{1 - \ln(x)}{x^2}}\).
{{% /details %}}
