---
title: 'Fonction logarithme népérien'
weight: 1
cascade:
  type: docs
---

## Fonction réciproque de la fonction exponentielle

> [!TIP] **Propriété et définition**
>
> Pour tout réel \(a > 0\), l’équation \(e^x = a\) admet une **unique** solution réelle. On l’appelle **logarithme népérien** de \(a\) et on la note \(\ln(a)\).
>
> La fonction qui, à tout réel \(x > 0\), associe \(\ln(x)\) est appelée **fonction logarithme népérien** :
> \[
\ln : \, ]0\,;\,+\infty[ \to \mathbb{R}, \quad x \mapsto \ln(x).
\]

> [!IMPORTANT] **Remarque**
>
> L’existence et l’unicité viennent du théorème des valeurs intermédiaires : la fonction exponentielle est continue et strictement croissante sur \(\mathbb{R}\), avec \(\lim\limits_{x \to -\infty} e^x = 0\) et \(\lim\limits_{x \to +\infty} e^x = +\infty\). Tout réel \(a > 0\) est donc atteint exactement une fois. En revanche, si \(a \leq 0\), l’équation \(e^x = a\) n’a pas de solution : \(\ln(a)\) n’est pas défini.

> [!TIP] **Propriété**
>
> Pour tout réel \(x > 0\) et tout réel \(y\) :
> \[
y = \ln(x) \iff e^y = x.
\]

{{% details title="Exemples" closed="true" %}}
- \(e^0 = 1\), donc \(\ln(1) = 0\).
- \(e^1 = e\), donc \(\ln(e) = 1\).
- \(e^{-2} = \dfrac{1}{e^2}\), donc \(\ln\left(\dfrac{1}{e^2}\right) = -2\).
- \(\ln(10)\) est l’unique réel \(y\) tel que \(e^y = 10\) ; la calculatrice donne \(\ln(10) \approx 2{,}303\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> - Pour tout réel \(x\), \(\ln(e^x) = x\).
> - Pour tout réel \(x > 0\), \(e^{\ln(x)} = x\).

> [!TIP] **Propriété (conséquence)**
>
> Dans un repère orthonormé, les courbes représentatives des fonctions \(\ln\) et \(\exp\) sont **symétriques** par rapport à la droite d’équation \(y = x\).

En effet, le point \((a\,;\,b)\) est sur la courbe de \(\exp\) si et seulement si \(b = e^a\), c’est-à-dire \(a = \ln(b)\) : le point \((b\,;\,a)\), son symétrique par rapport à la droite \(y = x\), est sur la courbe de \(\ln\).

![](/images/image287.png)

## Relations fonctionnelles

> [!TIP] **Théorème (relation fonctionnelle)**
>
> Pour tous réels \(x > 0\) et \(y > 0\) :
> \[
\ln(xy) = \ln(x) + \ln(y).
\]

> [!IMPORTANT] **Remarque**
>
> Le logarithme transforme les **produits** en **sommes** (c’est la relation inverse de \(e^{a+b} = e^a e^b\)). C’est pour faciliter les multiplications qu’ont été inventées, au XVIIᵉ siècle, les tables de logarithmes.

{{% details title="Exemple" closed="true" %}}
\(\ln(6) = \ln(2 \times 3) = \ln(2) + \ln(3)\), et \(\ln(10\,000) = \ln(10^4) = \ln(10) + \ln(10) + \ln(10) + \ln(10) = 4\ln(10)\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Pour tous réels \(x > 0\) et \(y > 0\), et pour tout entier relatif \(n\) :
> - \(\ln\left(\dfrac{x}{y}\right) = \ln(x) - \ln(y)\) ;
> - \(\ln\left(\dfrac{1}{y}\right) = -\ln(y)\) ;
> - \(\ln\left(\sqrt{x}\right) = \dfrac{1}{2}\ln(x)\) ;
> - \(\ln\left(x^n\right) = n\ln(x)\).

> [!IMPORTANT] **Remarque**
>
> Attention aux erreurs fréquentes : en général, \(\ln(x + y) \neq \ln(x) + \ln(y)\) et \(\ln(x)\ln(y) \neq \ln(xy)\).

## Exploiter la définition du logarithme népérien

> [!NOTE] **Méthode 1 — Exploiter la définition du logarithme népérien**
>
> 1. Calculer : a. \(e^{\ln(3)}\) ; b. \(\ln\left(e^{-4}\right)\) ; c. \(\ln\left(\sqrt{e}\right)\).
> 2. Résoudre dans l’ensemble indiqué :
>    a. \(\ln(x) = 2\) sur \(]0\,;\,+\infty[\) ; b. \(e^x = 5\) sur \(\mathbb{R}\) ; c. \(e^{2x} = 3\) sur \(\mathbb{R}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** a. Pour tout \(x > 0\), \(e^{\ln(x)} = x\), donc \(e^{\ln(3)} = 3\).  
b. Pour tout réel \(x\), \(\ln(e^x) = x\), donc \(\ln\left(e^{-4}\right) = -4\).  
c. \(\sqrt{e} = e^{1/2}\), donc \(\ln\left(\sqrt{e}\right) = \dfrac{1}{2}\).

**2.** a. Pour \(x > 0\) : \(\ln(x) = 2 \iff x = e^2\). Comme \(e^2 > 0\), \(\mathcal{S} = \{e^2\}\).  
b. \(5 > 0\), donc \(e^x = 5 \iff x = \ln(5)\) : \(\mathcal{S} = \{\ln(5)\}\).  
c. \(e^{2x} = 3 \iff 2x = \ln(3) \iff x = \dfrac{\ln(3)}{2}\) : \(\mathcal{S} = \left\{\dfrac{\ln(3)}{2}\right\}\).
{{% /details %}}

## Transformer une écriture à l’aide des relations fonctionnelles

> [!NOTE] **Méthode 2 — Transformer une écriture à l’aide des relations fonctionnelles**
>
> Exprimer en fonction de \(\ln(2)\) et de \(\ln(3)\) :
> a. \(\ln(12)\) ; b. \(\ln\left(\dfrac{9}{8}\right)\) ; c. \(\ln\left(\sqrt{18}\right)\) ; d. \(\ln\left(\dfrac{1}{16}\right)\).

{{% details title="Solution commentée" closed="true" %}}
On décompose chaque nombre en produit de puissances de 2 et de 3.

a. \(12 = 2^2 \times 3\), donc \(\ln(12) = \ln(2^2) + \ln(3) = 2\ln(2) + \ln(3)\).  
b. \(\ln\left(\dfrac{9}{8}\right) = \ln(3^2) - \ln(2^3) = 2\ln(3) - 3\ln(2)\).  
c. \(18 = 2 \times 3^2\), donc \(\ln\left(\sqrt{18}\right) = \dfrac{1}{2}\ln(18) = \dfrac{1}{2}\big(\ln(2) + 2\ln(3)\big) = \dfrac{1}{2}\ln(2) + \ln(3)\).  
d. \(\ln\left(\dfrac{1}{16}\right) = -\ln(16) = -\ln(2^4) = -4\ln(2)\).
{{% /details %}}
