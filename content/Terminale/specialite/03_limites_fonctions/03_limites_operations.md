---
title: 'Limites et opérations'
weight: 3
cascade:
  type: docs
---

Dans ce paragraphe, \(f\) et \(g\) sont des fonctions, \(\ell\) et \(\ell'\) des réels, et le symbole \(\infty\) désigne \(+\infty\) ou \(-\infty\). Les propriétés valent pour des limites en \(+\infty\), en \(-\infty\) ou en un réel \(a\).

## Somme, produit et quotient

> [!TIP] **Propriété (admise) : limite de la somme de deux fonctions**  
> | Si \(\lim f = \ldots\) | \(\ell\) | \(\ell\) | \(\ell\) | \(+\infty\) | \(-\infty\) | \(+\infty\) |
> |:-------------------------|:--------------:|:-------------:|:-------------:|:------------:|:------------:|:------------:|
> | et \(\lim g = \ldots\)  | \(\ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | \(-\infty\) |
> | alors \(\lim (f+g) = \ldots\) | \(\ell + \ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | Forme indéterminée |

---

> [!TIP] **Propriété (admise) : limite du produit de deux fonctions**  
> | Si \(\lim f = \ldots\) | \(\ell\) | \(\ell \neq 0\)  | \(\infty\) | 0 |
> |:-------------------------|:--------------:|:------------:|:---:|:---:|
> | et \(\lim g = \ldots\)  | \(\ell'\)    | \(\infty\) | \(\infty\)| \(\infty\) |
> | alors \(\lim (f \times g) = \ldots\) | \(\ell \ell'\) | \(\infty\) | \(\infty\) | Forme indéterminée |

---

> [!TIP] **Propriété (admise) : limite du quotient de deux fonctions**  
> | Si \(\lim f = \ldots\) | \(\ell\)  | \(\ell \neq 0\) ou \(\infty\) | \(\ell\)    | \(\infty\) | \(\infty\) | 0 |
> |:-------------------------|:--------------:|:------------:|:---:|:---:|:---:|:---:|
> | et \(\lim g = \ldots\)  | \(\ell' \neq 0\) | 0, avec \(g\) de signe constant | \(\infty\) | \(\ell' \neq 0\) | \(\infty\) | 0 |
> | alors \(\lim \dfrac{f}{g} = \ldots\) | \(\dfrac{\ell}{\ell'}\)| \(\infty\) | 0 | \(\infty\) | Forme indéterminée | Forme indéterminée |

> [!IMPORTANT] **Remarques**  
> - En présence d’une forme indéterminée, ces règles ne permettent pas de conclure.  
> - On transforme alors l’écriture de la fonction (factorisation, simplification…) pour trouver sa limite éventuelle.  
> - Lorsque le tableau donne \(\infty\), on détermine le signe (\(+\infty\) ou \(-\infty\)) grâce à la règle des signes.  

## Composition

Ici, \(a\), \(b\) et \(c\) désignent des réels, \(+\infty\) ou \(-\infty\).

> [!TIP] **Propriété (admise)**  
> Si \( \quad \lim\limits_{x \to a} f(x) = b \quad \text{et} \quad \lim\limits_{X \to b} g(X) = c, \)
> 
> alors \( \quad \lim\limits_{x \to a} g(f(x)) = c.\) 

> [!IMPORTANT] **Remarque**  
> \(g(f(x))\) est l’image par \(g\) du nombre \(X = f(x)\), lui-même image de \(x\) par \(f\). On calcule donc d’abord la limite de \(X = f(x)\), puis celle de \(g(X)\) quand \(X\) tend vers cette limite.  

{{% details title="Exemple" closed="true" %}}
Limite en \(+\infty\) de \(x \mapsto \sqrt{4 + \dfrac{1}{x}}\) : on pose \(X = 4 + \dfrac{1}{x}\). Quand \(x \to +\infty\), \(X \to 4\), et \(\lim\limits_{X \to 4} \sqrt{X} = 2\). Par composition, la limite cherchée vaut 2.
{{% /details %}}

> [!TIP] **Propriétés (admises)**  
> - Soit \(f\) une fonction et \((u_n)\) la suite définie pour tout entier naturel \(n\) par \(u_n = f(n)\).  
>   Si \(\lim\limits_{x \to +\infty} f(x) = a\), alors \(\lim\limits_{n \to +\infty} u_n = a\).  
> - Soit \(f\) une fonction définie sur un intervalle \(I\), et \((u_n)\) une suite dont tous les termes appartiennent à \(I\).  
>   Si \(\lim\limits_{n \to +\infty} u_n = a\) et \(\lim\limits_{x \to a} f(x) = b\), alors \(\lim\limits_{n \to +\infty} f(u_n) = b\).  

## Déterminer une limite en \(+\infty\) et en \(-\infty\)

> [!NOTE] **Méthode 1 — Déterminer une limite en \(+\infty\) et en \(-\infty\)**  
> Étudier la limite de chacune des fonctions suivantes quand \(x\) tend vers \(a\).  
> **1** \(f(x) = 3x^3 + x - 5\) ; \(a = +\infty\).  
> **2** \(g(x) = (x^2 + 2)(1 - \sqrt{x})\) ; \(a = +\infty\).  
> **3** \(h(x) = \dfrac{2}{1 - x^3}\) ; \(a = -\infty\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\lim\limits_{x \to +\infty} 3x^3 = +\infty\) et \(\lim\limits_{x \to +\infty} (x - 5) = +\infty\).  
Par somme, \(\lim\limits_{x \to +\infty} f(x) = +\infty\).

**2.** \(\lim\limits_{x \to +\infty} (x^2 + 2) = +\infty\) et \(\lim\limits_{x \to +\infty} (1 - \sqrt{x}) = -\infty\).  
Par produit (règle des signes), \(\lim\limits_{x \to +\infty} g(x) = -\infty\).

**3.** \(\lim\limits_{x \to -\infty} x^3 = -\infty\), donc \(\lim\limits_{x \to -\infty} (1 - x^3) = +\infty\).  
Par quotient (numérateur constant égal à 2), \(\lim\limits_{x \to -\infty} h(x) = 0\).
{{% /details %}}

## Déterminer une limite en un réel \(a\)

> [!NOTE] **Méthode 2 — Déterminer une limite en un réel \(a\)**  
> On considère la fonction \(f\) définie sur \(]-\infty;3[ \cup ]3;+\infty[\) par \(f(x) = \dfrac{2}{3 - x}\).  
> Déterminer la limite de \(f\) quand \(x\) tend vers 3.

{{% details title="Solution commentée" closed="true" %}}
\(\lim\limits_{x \to 3} (3 - x) = 0\) et le numérateur vaut 2 : par quotient, \(f(x)\) tend vers une limite infinie. Pour savoir laquelle, on étudie le signe de \(3 - x\) de chaque côté de 3.

- **Limite à gauche** (\(x \to 3\) avec \(x < 3\)) : \(3 - x > 0\), donc \(f(x) > 0\) ; d’où \(\lim\limits_{x \to 3^-} f(x) = +\infty\).

- **Limite à droite** (\(x \to 3\) avec \(x > 3\)) : \(3 - x < 0\), donc \(f(x) < 0\) ; d’où \(\lim\limits_{x \to 3^+} f(x) = -\infty\).

La droite d’équation \(x = 3\) est asymptote verticale à la courbe de \(f\).

![](/images/image240.png)
{{% /details %}}

## Lever une forme indéterminée

> [!NOTE] **Méthode 3 — Lever une forme indéterminée**  
> Déterminer la limite en \(+\infty\) de chacune des fonctions suivantes.  
> **1** \(f(x) = 4x - x^3\).  
> **2** \(g(x) = \dfrac{3x^2 + 1}{2x^2 - x}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\lim\limits_{x \to +\infty} 4x = +\infty\) et \(\lim\limits_{x \to +\infty} (-x^3) = -\infty\) : par somme, on obtient une **forme indéterminée**.  
Pour une fonction polynôme, on factorise par la puissance de \(x\) de plus haut degré (pour \(x \neq 0\)) :  
\[
f(x) = x^3\left(\frac{4}{x^2} - 1\right).
\]
Quand \(x \to +\infty\), \(x^3 \to +\infty\) et \(\dfrac{4}{x^2} - 1 \to -1\).  
Par produit : \(\lim\limits_{x \to +\infty} f(x) = -\infty\).

**2.** Le numérateur et le dénominateur tendent vers \(+\infty\) : on obtient une **forme indéterminée** « \(\dfrac{\infty}{\infty}\) ».  
Pour une fonction rationnelle, on factorise numérateur et dénominateur par leur terme de plus haut degré (ici \(x^2\), pour \(x \neq 0\)) :  
\[
g(x) = \frac{x^2\left(3 + \dfrac{1}{x^2}\right)}{x^2\left(2 - \dfrac{1}{x}\right)} = \frac{3 + \dfrac{1}{x^2}}{2 - \dfrac{1}{x}}.
\]
Quand \(x \to +\infty\), le numérateur tend vers 3 et le dénominateur vers 2 ; par quotient,  
\[
\lim_{x \to +\infty} g(x) = \frac{3}{2}.
\]
La courbe de \(g\) admet donc la droite d’équation \(y = \frac{3}{2}\) comme asymptote horizontale en \(+\infty\).
{{% /details %}}
