---
title: 'Fonctions dérivables sur un intervalle'
weight: 1
cascade:
  type: docs
---

## Définition de la dérivée d’une fonction

> [!TIP] **Définitions**  
> Soit \( f \) une fonction définie sur un intervalle \( I \).  
>- On dit que \( f \) est **dérivable sur \( I \)** lorsque \( f \) admet un **nombre dérivé** pour tout réel \( x \in I \), noté \( f'(x) \).  
>- On appelle **fonction dérivée** de \( f \) sur \( I \), notée \( f' \), la fonction définie sur \( I \) par \( f' : x \mapsto f'(x) \).

## Fonction dérivée des fonctions de référence

| Fonction | Domaine de définition | Domaine de dérivabilité | Fonction dérivée |
|---|:---:|:---:|:---:|
| \(f(x)=k\) (constante) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=0\) |
| \(f(x)=mx+p\) (affine) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=m\) |
| \(f(x)=x^{2}\) (carré) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=2x\) |
| \(f(x)=x^{n}\), \(n\in\mathbb{Z}\setminus\{0\}\) (puissance) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=n x^{\,n-1}\) |
| \(f(x)=\dfrac{1}{x}\) (inverse) | \(\mathbb{R}^*\) | \(\mathbb{R}^*\) | \(f'(x)=-\dfrac{1}{x^{2}}\) |
| \(f(x)=\sqrt{x}\) (racine carrée) | \([0;+\infty[\) | \(]0;+\infty[\) | \(f'(x)=\dfrac{1}{2\sqrt{x}}\) |
| \(f(x)=\lvert x \rvert\) (valeur absolue) | \(\mathbb{R}\) | \(\mathbb{R}\setminus\{0\}\) | \(f'(x)=\begin{cases}-1 & \text{si }x<0 \\ 1 & \text{si }x>0\end{cases}\) |

## Opérations sur les fonctions dérivables

> [!TIP] **Théorème**  
> Soient \(u\) et \(v\) deux fonctions dérivables sur un intervalle \(I\).  
> 1. La fonction \(u+v\) est dérivable sur \(I\) et \((u+v)'=u'+v'\).  
> 2. Soit \(k\in\mathbb{R}\). La fonction \(ku\) est dérivable sur \(I\) et \((ku)'=ku'\).  
> 3. La fonction \(uv\) est dérivable sur \(I\) et \((uv)'=u'v+uv'\).  
> 4. Si la fonction \(u\) ne s’annule pas sur \(I\) alors la fonction \(\dfrac{1}{u}\) est dérivable sur \(I\) et  
> \(\left(\dfrac{1}{u}\right)'=-\dfrac{u'}{u^{2}}\).  
> 5. Si la fonction \(v\) ne s’annule pas sur \(I\), alors la fonction \(\dfrac{u}{v}\) est dérivable sur \(I\) et  
> \(\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^{2}}\).

> [!TIP] **Théorème (admis) : Dérivée de \(f:x\mapsto g(mx+p)\)**  
> Soit \(g\) une fonction dérivable sur un intervalle \(J\).  
> Pour tout réel \(x\) tel que \(mx+p\in J\), la fonction \(f(x)=g(mx+p)\) est dérivable et  
> \(f'(x)=m\cdot g'(mx+p)\).

{{% details title="Exemple" closed="true" %}}
On considère \(f(x)=(5x+8)^4\).  
On écrit \(f(x)=g(mx+p)\) avec \(g(x)=x^4\), \(m=5\), \(p=8\).  
Comme \(g'(x)=4x^3\), on obtient :
\[
f'(x)=m\,g'(mx+p)=5\cdot 4(5x+8)^3=20(5x+8)^3.
\]
{{% /details %}}

## Exercice résolu — Étudier la dérivabilité d’une fonction

> [!NOTE] **Exercice résolu**  
> Soit \(a\) un nombre réel quelconque. À l’aide du taux de variation, montrer que la fonction \(f:x\mapsto x^2\) est dérivable en \(a\) puis retrouver l’expression de la dérivée de la fonction carré.

{{% details title="Solution commentée" closed="true" %}}
\[
\frac{f(a+h)-f(a)}{h}=\frac{(a+h)^2-a^2}{h}=2a+h \xrightarrow[h\to 0]{} 2a.
\]  
La limite existe et vaut \(2a\). Donc \(f\) est dérivable en \(a\) et \(f'(a)=2a\), soit \(f'(x)=2x\).
{{% /details %}}

## Exercice résolu — Déterminer la fonction dérivée

> [!NOTE] **Exercice résolu**  
> Déterminer la fonction dérivée des fonctions suivantes (sans se soucier du domaine de dérivabilité).  
> 1) \(f(x)=3x+5\) 
> 2) \(f(x)=\sqrt{x}\) 
> 3) \(f(x)=x^7\) 
> 4) \(f(x)=\sqrt{2}\) 
> 5) \(f(x)=-3+2x\)

{{% details title="Solution commentée" closed="true" %}}
1) \(f'(x)=3\).  
2) \(f'(x)=\dfrac{1}{2\sqrt{x}}\).  
3) \(f'(x)=7x^6\).  
4) \(f'(x)=0\).  
5) \(f'(x)=2\).
{{% /details %}}

## Exercice résolu — Déterminer la dérivabilité et la dérivée d’une fonction

> [!NOTE] **Exercice résolu**  
> Pour chacune des fonctions suivantes, déterminer le ou les intervalles où elle est dérivable et donner sa dérivée.  
> 1) \(f(x)=7x^{2}-5x\)  
> 2) \(g(x)=\dfrac{3}{x}\)  
> 3) \(h(x)=\dfrac{3x+1}{2x^{2}+5}\)  
> 4) \(m(x)=\sqrt{x}\,(6x^{3}-2)\)

{{% details title="Solution commentée" closed="true" %}}
1) Somme de polynômes \(\Rightarrow\) dérivable sur \(\mathbb{R}\).  
\(f'(x)=14x-5\).

2) \(x\mapsto \dfrac{3}{x}\) est dérivable sur \(\mathbb{R}^*\).  
\(g'(x)=-\dfrac{3}{x^{2}}\).

3) Quotient de \(u=3x+1\) et \(v=2x^{2}+5\), avec \(v(x)>0\) pour tout \(x\).  
\[
h'(x)=\frac{u'v-uv'}{v^{2}}
=\frac{3(2x^{2}+5)-(3x+1)\,4x}{(2x^{2}+5)^{2}}
=\frac{-6x^{2}-4x+15}{(2x^{2}+5)^{2}}.
\]  
Donc \(h\) est dérivable sur \(\mathbb{R}\).

4) Produit de \(u=\sqrt{x}\) (dérivable sur \(]0,+\infty[\)) et \(v=6x^{3}-2\) (dérivable sur \(\mathbb{R}\)).  
\[
m'(x)=u'v+uv'=\frac{6x^{3}-2}{2\sqrt{x}}+18x^{2}\sqrt{x}
=\frac{3x^{3}-1}{\sqrt{x}}+18x^{2}\sqrt{x}
=\frac{21x^{3}-1}{\sqrt{x}}
\]  
Donc \(m\) est dérivable sur \(]0,+\infty[\).
{{% /details %}}