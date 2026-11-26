---
title: 'Fonction logarithme népérien'
weight: 2
cascade:
  type: docs
---

## Définition

> [!TIP] **Théorème et définitions**
>
> La fonction exponentielle est définie et continue sur \(\mathbb{R}\). Elle est de plus strictement croissante sur \(\mathbb{R}\), à valeurs dans \(]0\,;\,+\infty[\).
> - Pour tout réel \(y > 0\), l’équation \(e^x = y\) admet donc une **unique** solution \(x\) dans \(\mathbb{R}\). Cette solution est appelée le **logarithme népérien** de \(y\) et se note \(x = \ln(y)\).
> - La fonction exponentielle admet donc une fonction réciproque, définie sur \(]0\,;\,+\infty[\). Cette fonction s’appelle la **fonction logarithme népérien** et se note \(\ln\) :
> \[
\ln : \ ]0\,;\,+\infty[ \ \to \mathbb{R}, \quad x \mapsto \ln(x).
\]

> [!TIP] **Propriété**
>
> \(\ln(1) = 0\) et \(\ln(e) = 1\).

{{% details title="Démonstration" closed="true" %}}
\(e^0 = 1\), donc la solution de \(e^x = 1\) est \(x = 0\) : \(\ln(1) = 0\). De même \(e^1 = e\), donc \(\ln(e) = 1\).
{{% /details %}}

## Courbe représentative

Dans un repère orthonormé, les courbes des fonctions exponentielle et logarithme népérien sont symétriques par rapport à la droite d’équation \(y = x\).

![](/images/image345.png)

## Propriétés

> [!TIP] **Propriétés algébriques (admises)**
>
> - Pour tout réel \(y > 0\) et tout réel \(x\) : \(e^x = y \iff x = \ln(y)\).
> - Pour tout réel \(x > 0\) : \(e^{\ln(x)} = x\).
> - Pour tout réel \(x\) : \(\ln\left(e^x\right) = x\).

> [!TIP] **Propriétés fonctionnelles (admises)**
>
> Pour tous réels \(a\) et \(b\) strictement positifs :
> - \(\ln(ab) = \ln(a) + \ln(b)\) ;
> - \(\ln\left(\dfrac{1}{a}\right) = -\ln(a)\) et \(\ln\left(\dfrac{a}{b}\right) = \ln(a) - \ln(b)\) ;
> - pour tout entier naturel \(n\), \(\ln(a^n) = n\ln(a)\) ;
> - \(\ln\left(\sqrt{a}\right) = \dfrac{1}{2}\ln(a)\).

> [!IMPORTANT] **Remarque**
>
> Le logarithme transforme les produits en sommes : c’est ce qui en fait un outil de calcul pour les grandeurs qui évoluent de façon exponentielle (populations, placements, radioactivité…).

## Calculer avec le logarithme

> [!NOTE] **Méthode 1 — Résoudre une équation du type \(e^x = a\)**
>
> Résoudre dans \(\mathbb{R}\) : 1. \(e^x = 7\) ; 2. \(e^{2x - 1} = 3\) ; 3. \(e^x = -2\).

{{% details title="Solution commentée" closed="true" %}}
1. \(7 > 0\), donc \(e^x = 7 \iff x = \ln(7)\). \(\mathcal{S} = \{\ln 7\}\).
2. \(e^{2x - 1} = 3 \iff 2x - 1 = \ln(3) \iff x = \dfrac{1 + \ln(3)}{2}\).
3. Une exponentielle est toujours strictement positive : \(\mathcal{S} = \varnothing\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Résoudre une équation du type \(\ln(x) = a\)**
>
> Résoudre dans \(]0\,;\,+\infty[\) : 1. \(\ln(x) = 2\) ; 2. \(\ln(x) = -1\) ; 3. \(2\ln(x) + 5 = 0\).

{{% details title="Solution commentée" closed="true" %}}
On utilise \(\ln(x) = a \iff x = e^a\) (pour \(x > 0\)).
1. \(x = e^2\). 2. \(x = e^{-1} = \dfrac{1}{e}\). 3. \(\ln(x) = -\dfrac{5}{2} \iff x = e^{-2{,}5}\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Déterminer l’ensemble de définition d’une équation**
>
> Résoudre l’équation \(\ln(3x - 6) = \ln(x + 2)\).

{{% details title="Solution commentée" closed="true" %}}
L’équation a un sens si et seulement si \(3x - 6 > 0\) et \(x + 2 > 0\), c’est-à-dire \(x > 2\). Sur \(]2\,;\,+\infty[\), comme \(\ln(a) = \ln(b) \iff a = b\) :
\[
3x - 6 = x + 2 \iff x = 4.
\]
\(4 > 2\), donc \(\mathcal{S} = \{4\}\).
{{% /details %}}

> [!NOTE] **Méthode 4 — Transformer une expression**
>
> Exprimer en fonction de \(\ln 2\) et \(\ln 3\) : \(A = \ln(18)\), \(B = \ln\left(\dfrac{8}{9}\right)\) et \(C = \ln\left(\sqrt{12}\right)\).

{{% details title="Solution commentée" closed="true" %}}
- \(A = \ln(2 \times 3^2) = \ln 2 + 2\ln 3\).
- \(B = \ln(2^3) - \ln(3^2) = 3\ln 2 - 2\ln 3\).
- \(C = \dfrac{1}{2}\ln(12) = \dfrac{1}{2}\ln(2^2 \times 3) = \dfrac{1}{2}(2\ln 2 + \ln 3) = \ln 2 + \dfrac{1}{2}\ln 3\).
{{% /details %}}

> [!NOTE] **Méthode 5 — Utiliser les relations fonctionnelles**
>
> Montrer que, pour tout réel \(x\), \(\ln\left(e^{2x} + 1\right) - 2x = \ln\left(1 + e^{-2x}\right)\).

{{% details title="Solution commentée" closed="true" %}}
On factorise \(e^{2x}\) dans le logarithme : \(e^{2x} + 1 = e^{2x}\left(1 + e^{-2x}\right)\). Donc
\[
\ln\left(e^{2x} + 1\right) = \ln\left(e^{2x}\right) + \ln\left(1 + e^{-2x}\right) = 2x + \ln\left(1 + e^{-2x}\right),
\]
d’où le résultat.
{{% /details %}}
