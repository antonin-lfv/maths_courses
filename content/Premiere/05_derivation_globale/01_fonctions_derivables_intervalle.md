---
title: 'Fonctions dérivables sur un intervalle'
weight: 1
cascade:
  type: docs
---

## Définition de la dérivée d’une fonction

> [!TIP] **Définitions**  
> Soit \( f \) une fonction définie sur un intervalle \( I \).  
>- \( f \) est **dérivable sur \( I \)** si elle est dérivable en tout réel \( x \) de \( I \), c’est-à-dire si le nombre dérivé \( f'(x) \) existe pour tout \( x \in I \).  
>- La **fonction dérivée** de \( f \) sur \( I \), notée \( f' \), est alors la fonction définie sur \( I \) par \( f' : x \mapsto f'(x) \).

## Fonction dérivée des fonctions de référence

| Fonction | Domaine de définition | Domaine de dérivabilité | Fonction dérivée |
|---|:---:|:---:|:---:|
| \(f(x)=k\) (constante) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=0\) |
| \(f(x)=mx+p\) (affine) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=m\) |
| \(f(x)=x^{2}\) (carré) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=2x\) |
| \(f(x)=x^{n}\), \(n\) entier, \(n \geq 1\) (puissance) | \(\mathbb{R}\) | \(\mathbb{R}\) | \(f'(x)=n x^{\,n-1}\) |
| \(f(x)=x^{n}\), \(n\) entier, \(n \leq -1\) | \(\mathbb{R}^*\) | \(\mathbb{R}^*\) | \(f'(x)=n x^{\,n-1}\) |
| \(f(x)=\dfrac{1}{x}\) (inverse) | \(\mathbb{R}^*\) | \(\mathbb{R}^*\) | \(f'(x)=-\dfrac{1}{x^{2}}\) |
| \(f(x)=\sqrt{x}\) (racine carrée) | \([0;+\infty[\) | \(]0;+\infty[\) | \(f'(x)=\dfrac{1}{2\sqrt{x}}\) |
| \(f(x)=\lvert x \rvert\) (valeur absolue) | \(\mathbb{R}\) | \(\mathbb{R}\setminus\{0\}\) | \(f'(x)=\begin{cases}-1 & \text{si }x<0 \\ 1 & \text{si }x>0\end{cases}\) |

> [!IMPORTANT] **Remarque**  
> La fonction inverse est le cas \(n = -1\) de la fonction puissance : \(\frac{1}{x} = x^{-1}\) et \(f'(x) = -1 \times x^{-2} = -\frac{1}{x^2}\).

## Opérations sur les fonctions dérivables

> [!TIP] **Théorème**  
> Soient \(u\) et \(v\) deux fonctions dérivables sur un intervalle \(I\).  
> 1. La fonction \(u+v\) est dérivable sur \(I\) et \((u+v)'=u'+v'\).  
> 2. Pour tout réel \(k\), la fonction \(ku\) est dérivable sur \(I\) et \((ku)'=ku'\).  
> 3. La fonction \(uv\) est dérivable sur \(I\) et \((uv)'=u'v+uv'\).  
> 4. Si \(u\) ne s’annule pas sur \(I\), la fonction \(\dfrac{1}{u}\) est dérivable sur \(I\) et  
> \(\left(\dfrac{1}{u}\right)'=-\dfrac{u'}{u^{2}}\).  
> 5. Si \(v\) ne s’annule pas sur \(I\), la fonction \(\dfrac{u}{v}\) est dérivable sur \(I\) et  
> \(\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^{2}}\).

> [!TIP] **Théorème (admis) : Dérivée de \(f:x\mapsto g(mx+p)\)**  
> Soit \(g\) une fonction dérivable sur un intervalle \(J\), et \(m\), \(p\) deux réels.  
> La fonction \(f : x \mapsto g(mx+p)\) est dérivable en tout réel \(x\) tel que \(mx+p\in J\), et  
> \(f'(x)=m\, g'(mx+p)\).

{{% details title="Exemple" closed="true" %}}
On considère \(f(x)=(3-2x)^5\).  
On a \(f(x)=g(mx+p)\) avec \(g(x)=x^5\), \(m=-2\) et \(p=3\).  
Comme \(g'(x)=5x^4\) :
\[
f'(x)=m\,g'(mx+p)=-2 \times 5(3-2x)^4=-10(3-2x)^4.
\]
{{% /details %}}

## Exercice résolu — Étudier la dérivabilité d’une fonction

> [!NOTE] **Exercice résolu**  
> Soit \(a\) un réel non nul. À l’aide du taux de variation, démontrer que la fonction inverse \(f:x\mapsto \dfrac{1}{x}\) est dérivable en \(a\), et retrouver l’expression de sa fonction dérivée.

{{% details title="Solution commentée" closed="true" %}}
Pour \(h \neq 0\) tel que \(a + h \neq 0\) :
\[
\frac{f(a+h)-f(a)}{h}=\frac{\frac{1}{a+h}-\frac{1}{a}}{h}=\frac{\frac{a-(a+h)}{a(a+h)}}{h}=\frac{-h}{a(a+h)} \times \frac{1}{h}=\frac{-1}{a(a+h)}.
\]  
Quand \(h\) tend vers 0, \(a(a+h)\) tend vers \(a^2\), donc le taux tend vers \(-\dfrac{1}{a^2}\).  
La limite existe : \(f\) est dérivable en tout réel \(a \neq 0\), avec \(f'(a)=-\dfrac{1}{a^2}\). Autrement dit, sur \(\mathbb{R}^*\), \(f'(x)=-\dfrac{1}{x^2}\).
{{% /details %}}

## Exercice résolu — Déterminer la fonction dérivée

> [!NOTE] **Exercice résolu**  
> Déterminer la fonction dérivée de chacune des fonctions suivantes (on ne se préoccupe pas ici du domaine de dérivabilité).  
> 1) \(f(x)=-4x+1\) 
> 2) \(f(x)=\dfrac{1}{x}\) 
> 3) \(f(x)=x^5\) 
> 4) \(f(x)=\pi\) 
> 5) \(f(x)=x^{-2}\)

{{% details title="Solution commentée" closed="true" %}}
1) Fonction affine de coefficient \(-4\) : \(f'(x)=-4\).  
2) Fonction inverse : \(f'(x)=-\dfrac{1}{x^2}\).  
3) Fonction puissance avec \(n = 5\) : \(f'(x)=5x^4\).  
4) \(\pi\) est une constante : \(f'(x)=0\).  
5) Fonction puissance avec \(n = -2\) : \(f'(x)=-2x^{-3}=-\dfrac{2}{x^3}\).
{{% /details %}}

## Exercice résolu — Déterminer la dérivabilité et la dérivée d’une fonction

> [!NOTE] **Exercice résolu**  
> Pour chacune des fonctions suivantes, préciser sur quel(s) intervalle(s) elle est dérivable, puis calculer sa dérivée.  
> 1) \(f(x)=4x^{3}-3x^{2}+x\)  
> 2) \(g(x)=-\dfrac{5}{x}\)  
> 3) \(h(x)=\dfrac{2x-1}{x^{2}+1}\)  
> 4) \(m(x)=\sqrt{x}\,(2x^{2}+1)\)

{{% details title="Solution commentée" closed="true" %}}
1) \(f\) est une fonction polynôme (somme de fonctions puissances multipliées par des constantes) : elle est dérivable sur \(\mathbb{R}\).  
\(f'(x)=4 \times 3x^2 - 3 \times 2x + 1 = 12x^{2}-6x+1\).

2) \(g = -5 \times \dfrac{1}{x}\) est dérivable sur \(]-\infty ; 0[\) et sur \(]0 ; +\infty[\).  
\(g'(x)=-5 \times \left(-\dfrac{1}{x^{2}}\right)=\dfrac{5}{x^{2}}\).

3) \(h=\dfrac{u}{v}\) avec \(u(x)=2x-1\) et \(v(x)=x^{2}+1\). On a \(v(x) \geq 1 > 0\) pour tout \(x\) : \(v\) ne s’annule pas, donc \(h\) est dérivable sur \(\mathbb{R}\). Avec \(u'(x)=2\) et \(v'(x)=2x\) :  
\[
h'(x)=\frac{u'v-uv'}{v^{2}}
=\frac{2(x^{2}+1)-(2x-1)\times 2x}{(x^{2}+1)^{2}}
=\frac{2x^2+2-4x^2+2x}{(x^{2}+1)^{2}}
=\frac{-2x^{2}+2x+2}{(x^{2}+1)^{2}}.
\]  

4) \(m=uv\) avec \(u(x)=\sqrt{x}\), dérivable sur \(]0;+\infty[\), et \(v(x)=2x^{2}+1\), dérivable sur \(\mathbb{R}\). Donc \(m\) est dérivable sur \(]0;+\infty[\).  
Avec \(u'(x)=\dfrac{1}{2\sqrt{x}}\) et \(v'(x)=4x\) :  
\[
m'(x)=u'v+uv'=\frac{2x^{2}+1}{2\sqrt{x}}+4x\sqrt{x}.
\]  
En écrivant \(4x\sqrt{x} = \dfrac{4x \times 2x}{2\sqrt{x}} = \dfrac{8x^2}{2\sqrt{x}}\) (car \(\sqrt{x} \times \sqrt{x} = x\)) :
\[
m'(x)=\frac{2x^{2}+1+8x^{2}}{2\sqrt{x}}=\frac{10x^{2}+1}{2\sqrt{x}}.
\]  
{{% /details %}}
