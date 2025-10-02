---
title: 'Limites et opérations'
weight: 3
cascade:
  type: docs
---

Ici, \(f\) et \(g\) sont des fonctions, \(l\) et \(l'\) des réels. Le symbole \(\infty\) représente \(+\infty\) ou \(-\infty\). Les propriétés ci-dessous portent sur les limites en \(+\infty, -\infty\) ou en un réel \(a\).

## Somme, produit et quotient

> [!TIP] **Propriété (admise) : limite de la somme de deux fonctions**  
> | Si \(\lim f = \ldots\) | \(\ell\) | \(\ell\) | \(\ell\) | \(+\infty\) | \(-\infty\) | \(+\infty\) |
> |:-------------------------|:--------------:|:-------------:|:-------------:|:------------:|:------------:|:------------:|
> | et \(\lim g = \ldots\)  | \(\ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | \(-\infty\) |
> | alors \(\lim (f+g) = \ldots\) | \(\ell + \ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | Forme indéterminée |

---

> [!TIP] **Propriété (admise) : limite du produit de deux fonctions**  
> | Si \(\lim f = \ldots\) | \(\ell\) | \(\ell\)  | \(\infty\) | 0 |
> |:-------------------------|:--------------:|:------------:|:---:|:---:|
> | et \(\lim g = \ldots\)  | \(\ell'\)    | \(\infty\) | \(\infty\)| \(\infty\) |
> | alors \(\lim (f \times g) = \ldots\) | \(\ell \ell'\) | \(\infty\) | \(\infty\) | Forme indéterminée |

---

> [!TIP] **Propriété (admise) : limite du quotient de deux fonctions**  
> | Si \(\lim f = \ldots\) | \(\ell\)  | \(\ell\) | \(\ell\)    | \(\infty\) | \(\infty\) | 0 |
> |:-------------------------|:--------------:|:------------:|:---:|:---:|:---:|:---:|
> | et \(\lim g = \ldots\)  | \(\ell' \neq 0\) | 0 | \(\infty\) | \(\ell\) | \(\infty\) | 0 |
> | alors \(\lim \dfrac{f}{g} = \ldots\) | \(\dfrac{\ell}{\ell'}\)| \(\infty\) | 0 | \(\infty\) | Forme indéterminée | Forme indéterminée |

> [!IMPORTANT] **Remarques**  
> - Quand le tableau indique « forme indéterminée », on ne peut pas conclure grâce aux propriétés.  
> - Il peut être nécessaire de transformer l’écriture de la fonction pour trouver sa limite éventuelle.  
> - Quand le tableau indique \(\infty\), il faut utiliser la règle des signes pour conclure.  

## Composition

\(a\), \(b\) et \(c\) désignent soit des réels, soit \(+\infty\), soit \(-\infty\).

> [!TIP] **Propriété (admise)**  
> Si \( \quad \lim_{x \to a} f(x) = b \quad \text{et} \quad \lim_{x \to b} g(x) = c \)
> 
> alors \( \quad \lim_{x \to a} g(f(x)) = c\) 

> [!IMPORTANT] **Remarque**  
> Le nombre \(g(f(x))\) est l’image par \(g\) du nombre \(X = f(x)\), lui-même image de \(x\) par \(f\).  

> [!TIP] **Propriétés (admises)**  
> - Soient \(f\) une fonction et \((u_n)\) la suite définie pour tout entier naturel \(n\) par \(u_n = f(n)\).  
>   Si \(\lim_{x \to +\infty} f(x) = a\), alors \(\lim_{n \to +\infty} u_n = a\).  
> - Soient \(f\) une fonction définie sur un intervalle \(I\) et \((u_n)\) une suite définie sur \(\mathbb{N}\) dont tous les termes appartiennent à \(I\).  
>   Si \(\lim_{n \to +\infty} u_n = a\) et \(\lim_{x \to a} f(x) = b\), alors \(\lim_{n \to +\infty} f(u_n) = b\).  


## Déterminer une limite en \(+\infty\) et en \(-\infty\)

> [!NOTE] **Méthode 1 — Déterminer une limite en \(+\infty\) et en \(-\infty\)**  
> Étudier les limites des fonctions définies par les expressions suivantes quand \(x\) tend vers \(a\).  
> **1** \(f(x)=x^2+2x-2\) ; \(a=+\infty\).  
> **2** \(g(x)=(\sqrt{x}+1)(7-2x)\) ; \(a=+\infty\).  
> **3** \(h(x)=\dfrac{1}{x^2-1}\) ; \(a=-\infty\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\displaystyle \lim_{x\to+\infty} x^2=+\infty\) et \(\displaystyle \lim_{x\to+\infty}(2x-2)=+\infty\).  
Donc, par somme, \(\displaystyle \lim_{x\to+\infty} f(x)=+\infty\).

**2.** \(\displaystyle \lim_{x\to+\infty}(\sqrt{x}+1)=+\infty\) et \(\displaystyle \lim_{x\to+\infty}(7-2x)=-\infty\).  
Donc, par produit, \(\displaystyle \lim_{x\to+\infty} g(x)=-\infty\) (on utilise la règle des signes).

**3.** \(\displaystyle \lim_{x\to-\infty}(x^2-1)=+\infty\). Donc, par passage à l’inverse,  
\(\displaystyle \lim_{x\to-\infty}\frac{1}{x^2-1}=0\).
{{% /details %}}


## Déterminer une limite en un réel \(a\)

> [!NOTE] **Méthode 2 — Déterminer une limite en un réel \(a\)**  
> Soit \(f\) la fonction définie sur \(]-\infty;1[ \cup ]1;+\infty[\) par \(f(x)=\dfrac{1}{x-1}\).  
> **Déterminer la limite de \(f\) quand \(x\) tend vers \(1\).**

{{% details title="Solution commentée" closed="true" %}}
\(\displaystyle \lim_{x\to1}(x-1)=0\) donc, par passage à l’inverse, quand \(x\) tend vers \(1\), \(f(x)\) tend vers une limite infinie (\(+\infty\) ou \(-\infty\)).  
Pour conclure, il faut utiliser la règle des signes et donc connaître le signe de \(f(x)\).

- **1er cas** : quand \(x\) tend vers \(1\) et \(x>1\) (**limite à droite**).  
  \(x>1\) donc \(x-1>0\), soit \(f(x)>0\) ; donc \(\displaystyle \lim_{x\to1^+} f(x)=+\infty\).

- **2e cas** : quand \(x\) tend vers \(1\) et \(x<1\) (**limite à gauche**).  
  \(x<1\) donc \(x-1<0\), soit \(f(x)<0\) ; donc \(\displaystyle \lim_{x\to1^-} f(x)=-\infty\).

![](/images/image32.png)
 
{{% /details %}}


## Lever une forme indéterminée

> [!NOTE] **Méthode 3 — Lever une forme indéterminée**  
> Déterminer les limites des fonctions définies par les expressions suivantes quand \(x\) tend vers \(+\infty\).  
> **1** \(f(x)=x^2-x\).  
> **2** \(g(x)=\dfrac{2x-7}{1-x^2}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\displaystyle \lim_{x\to+\infty}x^2=+\infty\) et \(\displaystyle \lim_{x\to+\infty}(-x)=-\infty\) donc, par somme, on rencontre une **forme indéterminée**.  
Pour une fonction polynôme, on factorise par la puissance de \(x\) de plus haut degré :  
\[
f(x)=x^2\!\left(1-\frac{1}{x}\right).
\]
Quand \(x\to+\infty\), \(x^2\to+\infty\) et \(1-\dfrac{1}{x}\to1\).  
Par produit, on a donc : \(\displaystyle \lim_{x\to+\infty} f(x)=+\infty\).

**2.** \(\displaystyle \lim_{x\to+\infty}(2x-7)=+\infty\) et \(\displaystyle \lim_{x\to+\infty}(1-x^2)=-\infty\) donc, par quotient, on rencontre une **forme indéterminée**.  
Pour une fonction rationnelle, on factorise par la puissance de \(x\) la plus haute :  
\[
\frac{2x-7}{1-x^2}
=\frac{x\left(2-\dfrac{7}{x}\right)}{x^2\left(\dfrac{1}{x^2}-1\right)}
=\frac{2-\dfrac{7}{x}}{\,x\left(\dfrac{1}{x^2}-1\right)}.
\]
Quand \(x\to+\infty\), le numérateur a pour limite \(2\) et le dénominateur tend vers \(-\infty\) ; par produit,  
\[
\lim_{x\to+\infty} g(x)=0.
\]
{{% /details %}}