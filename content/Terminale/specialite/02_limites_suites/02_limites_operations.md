---
title: 'Limites et opérations'
weight: 2
cascade:
  type: docs
---

Soient \((u_n)\) et \((v_n)\) deux suites et soient \(l\) et \(l'\) deux réels. Le symbole \(\infty\) désigne soit \(+\infty\), soit \(-\infty\).

## Somme

> [!TIP] **Propriété (admise)**  
> 
> | Si \(\lim\limits_{n \to +\infty} u_n = \dots\) | \(\ell\) | \(\ell\) | \(\ell\) | \(+\infty\) | \(-\infty\) | \(+\infty\) |  
> |:------------------------------------------------:|:----------:|:----------:|:-------------:|:-------------:|:-------------:|  
> | et \(\lim\limits_{n \to +\infty} v_n = \dots\) | \(\ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) | \(-\infty\) |   
> | alors \(\lim\limits_{n \to +\infty} (u_n + v_n) = \dots\) | \(\ell + \ell'\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(+\infty\) | **Forme indéterminée** |  

> [!IMPORTANT] **Remarques**  
> - Dans le cas où le calcul mène à une forme indéterminée, il peut être utile de transformer l’écriture de \(u_n + v_n\).  
> - La limite de \((u_n + \alpha)\), où \(\alpha\) est un réel, est la limite de \((u_n + v_n)\) dans le cas où \((v_n)\) est la suite constante de terme général égal à \(\alpha\).


## Produit

> [!TIP] **Propriété (admise)**  
> 
> | Si \(\lim\limits_{n \to +\infty} u_n = \dots\) | \(\ell\) | \(\ell \neq 0\) | \(\infty\) | 0 |  
> |:------------------------------------------------:|:----------:|:----------:|:-------------:|:-------------:|  
> | et \(\lim\limits_{n \to +\infty} v_n = \dots\) | \(\ell'\) | \(\infty\)       | \(\infty\) | \(\infty\) |  
> | alors \(\lim\limits_{n \to +\infty} (u_n \times v_n) = \dots\) | \(\ell \times \ell'\) | \(\infty\) | \(\infty\) | **Forme indéterminée** |  

> [!IMPORTANT] **Remarques**  
> - Quand le tableau indique \(\lim\limits_{n \to +\infty} (u_n \times v_n) = \infty\), il faut utiliser la règle des signes pour conclure.  
> - La limite de \((k u_n)\), où \(k\) est un réel non nul, est la limite de \((u_n \times v_n)\) dans le cas où \((v_n)\) est la suite constante de terme général égal à \(k\).


## Quotient

> [!TIP] **Propriété (admise)**  
> 
> | Si \(\lim\limits_{n \to +\infty} u_n = \dots\) | \(\ell\) | \(\ell \neq 0\) | \(\infty\) | \(\ell\) ou \(\infty\) | 0 | \(\infty\) |  
> |:------------------------------------------------:|:----------:|:----------:|:-------------:|:-------------:|:-------------:|:-------------:|
> | et \(\lim\limits_{n \to +\infty} v_n = \dots\) | \(\ell' \neq 0\) | \(\infty\) | \(\ell' \neq 0\) | 0 avec \(v_n\) de signe constant | 0 | \(\infty\) |  
> | alors \(\lim\limits_{n \to +\infty} \dfrac{u_n}{v_n} = \dots\) | \(\dfrac{\ell}{\ell'}\) | 0 | \(\infty\) | \(\infty\) | **Forme indéterminée** | **Forme indéterminée** |  

> [!IMPORTANT] **Remarque**  
> Si \(\lim\limits_{n \to +\infty} v_n = 0\) et si \((u_n)\) a une limite, il faut qu’à partir d’un certain rang le signe de \(v_n\) soit constamment positif ou constamment négatif pour pouvoir appliquer la règle des signes et conclure sur la limite de \(\dfrac{u_n}{v_n}\).


## Déterminer une limite en utilisant les opérations

> [!NOTE] **Méthode 1 — Déterminer une limite en utilisant les opérations**  
> Déterminer les limites des suites définies pour tout entier naturel \(n\) par :  
> 1. \(u_n = n^2 + n - 6\)  
> 2. \(v_n = (2 - 5n)\sqrt{n}\)  

{{% details title="Solution commentée" closed="true" %}}
**1.**  
\[
\lim_{n \to +\infty} n = +\infty, \quad \text{donc, par somme, } \lim_{n \to +\infty} (n - 6) = +\infty.
\]  

\[
\lim_{n \to +\infty} n^2 = +\infty \quad \text{et} \quad \lim_{n \to +\infty} (n - 6) = +\infty,
\]  
donc, par somme, \(\lim_{n \to +\infty} u_n = +\infty\).  

---

**2.**  
\[
\lim_{n \to +\infty} n = +\infty, \quad \text{donc, par produit et en appliquant la règle des signes, } \lim_{n \to +\infty} (-5n) = -\infty,
\]  
puis, par somme, \(\lim_{n \to +\infty} (2 - 5n) = -\infty\).  

\[
\lim_{n \to +\infty} (2 - 5n) = -\infty \quad \text{et} \quad \lim_{n \to +\infty} \sqrt{n} = +\infty,
\]  
donc, par produit et en appliquant la règle des signes, \(\lim_{n \to +\infty} v_n = -\infty\).
{{% /details %}}


## Lever une indétermination

> [!NOTE] **Méthode 2 — Lever une indétermination**  
> On considère les suites \((u_n)\) et \((v_n)\) définies pour tout entier naturel \(n\) par :  
> \[
u_n = n^2 - 10n + 5 \quad \text{et} \quad v_n = \dfrac{2n - 4}{3 + n}.
\]  
> 1. Montrer que, pour chacune de ces suites, les opérations sur les limites ne permettent pas de conclure sans transformer les expressions.  
> 2. En transformant l’écriture des termes généraux de chacune d’entre elles, calculer leurs limites.  

{{% details title="Solution commentée" closed="true" %}}
**1.**  

\[
\lim_{n \to +\infty} n = +\infty \quad \text{donc, par produit, } \lim_{n \to +\infty} (-10n) = -\infty
\]  
puis, par somme :  
\[
\lim_{n \to +\infty} (-10n + 5) = -\infty.
\]  

\[
\lim_{n \to +\infty} n^2 = +\infty \quad \text{et} \quad \lim_{n \to +\infty} (-10n + 5) = -\infty :
\]  
on ne peut donc pas conclure.  

\[
\lim_{n \to +\infty} n = +\infty \quad \text{donc, par produit, } \lim_{n \to +\infty} (2n) = +\infty
\]  
puis, par somme :  
\[
\lim_{n \to +\infty} (2n - 4) = +\infty.
\]  

\[
\lim_{n \to +\infty} (2n - 4) = +\infty \quad \text{et} \quad \lim_{n \to +\infty} (3 + n) = +\infty :
\]  
on ne peut donc pas conclure.  

---

**2.** Pour tout entier \(n \geq 1\), en factorisant par \(n^2\), on obtient :  
\[
u_n = n^2 \left(1 - \dfrac{10}{n} + \dfrac{5}{n^2}\right).
\]  

\[
\lim_{n \to +\infty} n = +\infty \quad \text{donc} \quad \lim_{n \to +\infty} n^2 = +\infty,
\]  
par quotient :  
\[
\lim_{n \to +\infty} \left(\dfrac{-10}{n}\right) = 0, \quad \lim_{n \to +\infty} \dfrac{5}{n^2} = 0,
\]  
et, par somme :  
\[
\lim_{n \to +\infty} \left(1 - \dfrac{10}{n} + \dfrac{5}{n^2}\right) = 1.
\]  

Ainsi,  
\[
\lim_{n \to +\infty} u_n = +\infty.
\]  

---

Pour tout entier \(n \geq 1\), en factorisant par \(n\) au numérateur et au dénominateur, on obtient :  
\[
v_n = \dfrac{n(2 - \tfrac{4}{n})}{n(\tfrac{3}{n} + 1)} = \dfrac{2 - \tfrac{4}{n}}{\tfrac{3}{n} + 1}.
\]  

\[
\lim_{n \to +\infty} n = +\infty \quad \text{donc, par quotient, } \lim_{n \to +\infty} \dfrac{4}{n} = 0 \quad \text{et} \quad \lim_{n \to +\infty} \dfrac{3}{n} = 0.
\]  

Par somme :  
\[
\lim_{n \to +\infty} \left(2 - \dfrac{4}{n}\right) = 2 \quad \text{et} \quad \lim_{n \to +\infty} \left(\dfrac{3}{n} + 1\right) = 1,
\]  
ce qui donne, par quotient :  
\[
\lim_{n \to +\infty} v_n = 2.
\]  
{{% /details %}}