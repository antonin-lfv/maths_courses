---
title: 'Suites géométriques, suites monotones'
weight: 4
cascade:
  type: docs
---

## Suites du type \((q^n)\)

> [!TIP] **Propriétés**  
> Soit \(q\) un réel.  
> - Si \({q \leq -1}\), la suite \((q^n)\) diverge et n’a pas de limite.  
> - Si \({-1 < q < 1}\), la suite \((q^n)\) converge vers 0.  
> - Si \({q = 1}\), la suite \((q^n)\) est constante et converge vers 1.  
> - Si \({q > 1}\), la suite \((q^n)\) diverge vers \({+\infty}\).  

{{% details title="Exemples" closed="true" %}}
- On considère \({u_n = 3^n}\) pour tout \({n \in \mathbb{N}}\).  
Comme \({3 > 1}\), \({\lim\limits_{n \to +\infty} 3^n = +\infty}\), c’est-à-dire \({\lim\limits_{n \to +\infty} u_n = +\infty}\).  

- On considère \({v_n = (-0{,}5)^n}\) pour tout \({n \in \mathbb{N}}\).  
Comme \({-1 < -0{,}5 < 1}\), \({\lim\limits_{n \to +\infty} (-0{,}5)^n = 0}\) : la suite converge vers 0, bien que ses termes changent de signe à chaque rang.  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Une suite géométrique de premier terme \(u_0\) et de raison \(q\) s’écrit \({u_n = u_0 \times q^n}\) : ces propriétés, combinées à la règle du produit par une constante, permettent d’étudier sa convergence et de trouver sa limite éventuelle.

## Suites monotones

Dans ce paragraphe, \((u_n)\) est une suite de réels, et \(M\), \(m\) sont deux réels.  

> [!TIP] **Théorème (admis)**  
> - Toute suite croissante et majorée est convergente.  
> - Toute suite décroissante et minorée est convergente.  

> [!TIP] **Corollaire**  
> - Si \((u_n)\) est croissante et majorée par \(M\), alors elle converge vers une limite \(\ell\) vérifiant \({\ell \leq M}\).  
> - Si \((u_n)\) est décroissante et minorée par \(m\), alors elle converge vers une limite \(\ell\) vérifiant \({\ell \geq m}\).  

> [!IMPORTANT] **Remarque**  
> Ce théorème garantit l’**existence** de la limite, mais ne donne pas sa **valeur**.  
> Le corollaire indique seulement que la limite est inférieure ou égale à tout majorant : un majorant n’est pas forcément la limite.  
> Sur la figure ci-dessous, la suite croissante est majorée par \(3{,}5\), mais sa limite vaut 3.  
>
> ![](/images/image224.png)

> [!TIP] **Théorème**  
> - Si \((u_n)\) est croissante et non majorée, alors elle diverge vers \({+\infty}\).  
> - Si \((u_n)\) est décroissante et non minorée, alors elle diverge vers \({-\infty}\).

## Théorème du point fixe

> [!NOTE] **Théorème du point fixe**  
> Soit \(f\) une fonction et \((u_n)\) une suite. Si \((u_n)\) converge vers \(\ell\) et si \(f\) est continue en \(\ell\), alors :  
> \[
\lim_{n \to +\infty} f(u_n) = f(\ell).
\]  
> On l’applique aux suites définies par une relation de récurrence \({u_{n+1} = f(u_n)}\) : si l’on a prouvé que \((u_n)\) converge vers \(\ell\) (par exemple parce qu’elle est croissante et majorée, ou décroissante et minorée) et si \(f\) est continue en \(\ell\), alors, en passant à la limite dans l’égalité \({u_{n+1} = f(u_n)}\), on obtient :  
> \[
\ell = f(\ell).
\]  
> **En pratique** : on résout l’équation \({f(x) = x}\) ; graphiquement, ses solutions sont les abscisses des points d’intersection de la courbe de \(f\) avec la droite d’équation \({y = x}\). Ce sont les seules limites possibles.  
> S’il y a plusieurs solutions, on élimine celles qui sont incompatibles avec les informations connues sur la suite (majorant, minorant, sens de variation…).

## Déterminer la limite d’une suite du type \((q^n)\)

> [!NOTE] **Méthode 1 - Déterminer la limite d’une suite du type \((q^n)\)**  
> Déterminer la limite des suites suivantes, définies pour tout entier naturel \(n\).  
> 1. \({u_n = \dfrac{9^n}{5^n}}\)  
> 2. \({v_n = \dfrac{2^n}{3^{n+1}}}\)  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout entier naturel \(n\),  
\[
u_n = \dfrac{9^n}{5^n} = \left(\dfrac{9}{5}\right)^n.
\]  

Comme \({\dfrac{9}{5} > 1}\),  
\[
\lim_{n \to +\infty} \left(\dfrac{9}{5}\right)^n = +\infty, \quad \text{donc} \quad \lim_{n \to +\infty} u_n = +\infty.
\]  

---

**2.** Pour tout entier naturel \(n\), comme \({3^{n+1} = 3 \times 3^n}\) :  
\[
v_n = \dfrac{2^n}{3 \times 3^n} = \dfrac{1}{3}\left(\dfrac{2}{3}\right)^n.
\]  

Comme \({-1 < \dfrac{2}{3} < 1}\), \({\lim\limits_{n \to +\infty} \left(\dfrac{2}{3}\right)^n = 0}\). Par produit par la constante \(\dfrac{1}{3}\) :  
\[
\lim_{n \to +\infty} v_n = 0.
\]
{{% /details %}}

## Étudier la convergence d’une suite géométrique

> [!NOTE] **Méthode 2 - Étudier la convergence d’une suite géométrique**  
> Étudier la convergence de chacune des suites suivantes, définies sur \(\mathbb{N}\).  
> 1. \((w_n)\), suite géométrique de premier terme 3 et de raison \({-2}\).  
> 2. \((z_n)\), suite géométrique de premier terme 4 et de raison \(\dfrac{1}{e}\).  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout \({n \in \mathbb{N}}\),  
\[
w_n = 3 \times (-2)^n.
\]  

Comme \({-2 \leq -1}\), la suite \({\left((-2)^n\right)}\) n’a pas de limite (ses termes sont alternativement de plus en plus grands positifs et négatifs).  
Il en est de même de \((w_n)\) : elle diverge et n’admet pas de limite.  

---

**2.** Pour tout \({n \in \mathbb{N}}\),  
\[
z_n = 4 \times \left(\dfrac{1}{e}\right)^n.
\]  

Comme \({e \approx 2{,}718 > 1}\), on a \({0 < \dfrac{1}{e} < 1}\), donc  
\[
\lim_{n \to +\infty} \left(\dfrac{1}{e}\right)^n = 0,
\]  
puis, par produit, \({\lim\limits_{n \to +\infty} z_n = 0}\).  

La suite \((z_n)\) converge vers 0.
{{% /details %}}

## Prouver la convergence d’une suite monotone

> [!NOTE] **Méthode 3 - Prouver la convergence d’une suite monotone**  
> On considère la suite \((u_n)\) définie par \({u_0 = 1}\) et, pour tout entier naturel \(n\),  
> \[
u_{n+1} = \dfrac{1}{3} u_n + 2.
\]  
> 1. Démontrer par récurrence que la suite \((u_n)\) est majorée par 3.  
> 2. En déduire que la suite \((u_n)\) est croissante.  
> 3. Que peut-on en conclure quant à la convergence de \((u_n)\) ?  
> 4. À l’aide du théorème du point fixe, déterminer la limite de \((u_n)\).  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout entier naturel \(n\), on note \(P(n)\) la propriété : « \({u_n \leq 3}\) ».  

- **Initialisation.** \({u_0 = 1 \leq 3}\) : \(P(0)\) est vraie.  
- **Hérédité.** Soit \(k\) un entier naturel ; on suppose \({u_k \leq 3}\).  
  Alors \({\dfrac{1}{3}u_k \leq 1}\), puis \({\dfrac{1}{3}u_k + 2 \leq 3}\), c’est-à-dire \({u_{k+1} \leq 3}\) : \({P(k+1)}\) est vraie.  
- **Conclusion.** D’après le principe de récurrence, \({u_n \leq 3}\) pour tout entier naturel \(n\) : la suite \((u_n)\) est majorée par 3.  

---

**2.** Pour tout entier naturel \(n\),  
\[
u_{n+1} - u_n = \dfrac{1}{3}u_n + 2 - u_n = 2 - \dfrac{2}{3}u_n.
\]  

Comme \({u_n \leq 3}\), on a \({\dfrac{2}{3}u_n \leq 2}\), donc \({2 - \dfrac{2}{3}u_n \geq 0}\), soit \({u_{n+1} - u_n \geq 0}\).  
La suite \((u_n)\) est croissante.  

---

**3.** La suite \((u_n)\) est croissante et majorée : elle est donc convergente. Sa limite \(\ell\) vérifie \({\ell \leq 3}\), puisque 3 est un majorant.  

---

**4.** On a \({u_{n+1} = f(u_n)}\) avec \({f(x) = \dfrac{1}{3}x + 2}\), fonction affine donc continue sur \(\mathbb{R}\). D’après le théorème du point fixe, \({\ell = f(\ell)}\) :
\[
\ell = \dfrac{1}{3}\ell + 2 \iff \dfrac{2}{3}\ell = 2 \iff \ell = 3.
\]
La suite \((u_n)\) converge vers 3.
{{% /details %}}
