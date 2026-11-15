---
title: 'Étude de la fonction exponentielle'
weight: 2
cascade:
  type: docs
---

## Signe et variation

> [!TIP] **Propriété**  
> Pour tout réel \( x \), \( e^x > 0 \) : la fonction exponentielle est strictement positive.  
> Sa courbe est donc entièrement située au-dessus de l’axe des abscisses.

> [!TIP] **Propriété**  
> La fonction exponentielle est dérivable sur \( \mathbb{R} \), avec \(\exp'(x) = \exp(x)\).  
> Elle est strictement croissante sur \( \mathbb{R} \).

En effet, sa dérivée \(\exp'(x) = e^x\) est strictement positive.

![](/images/image184.png)

> [!TIP] **Propriété**  
> Pour tous réels \( a \) et \( b \) :  
> \[
e^a = e^b \iff a = b \quad \text{et} \quad e^a \le e^b \iff a \le b.
\]
> (On a de même \( e^a < e^b \iff a < b \).)

## Propriétés algébriques

> [!TIP] **Propriétés**  
> - \( e^0 = 1 \) et \( e^1 = e \).  
> - Pour tous réels \( x \) et \( y \) :  
>   \[
e^x \times e^{-x} = 1,\quad e^{x+y} = e^x \times e^y,\quad e^{x-y} = \frac{e^x}{e^y}.
\]  
> - Pour tout réel \(x\) et tout entier naturel \( n \), \( e^{nx} = (e^x)^n. \)

## Fonctions définies par \( f(t) = e^{kt} \) et \( g(t) = e^{-kt} \)

> [!NOTE] **Vocabulaire**  
> Plus généralement, pour un réel \( k > 0 \), les fonctions définies sur \( \mathbb{R} \) par \( f(t) = e^{kt} \) ou \( g(t) = e^{-kt} \) sont elles aussi appelées **fonctions exponentielles**. Elles servent à modéliser des phénomènes de croissance ou de décroissance (populations, désintégration radioactive, décharge d’un condensateur…).

> [!TIP] **Propriété**  
> Soit \( k \) un réel, et \( f, g \) les fonctions définies sur \( \mathbb{R} \) par \( f(t) = e^{kt} \) et \( g(t) = e^{-kt} \).  
> Elles sont dérivables sur \(\mathbb{R}\), et :  
> \[
f'(t) = k e^{kt} \quad \text{et} \quad g'(t) = -k e^{-kt}.
\]

Ce résultat découle de la dérivée de \(t \mapsto g(mt + p)\), avec \(m = k\) (ou \(m = -k\)) et \(p = 0\).

> [!TIP] **Propriété**  
> Si \( k > 0 \) :  
> - \( f : t \mapsto e^{kt} \) est **strictement croissante** sur \( \mathbb{R} \) ;  
> - \( g : t \mapsto e^{-kt} \) est **strictement décroissante** sur \( \mathbb{R} \).

![](/images/image185.png)

![](/images/image186.png)

## Exercice résolu : Étudier une fonction avec une exponentielle

> [!NOTE] **Exercice résolu**  
> On considère la fonction \( f \) définie sur \( \mathbb{R} \) par \( f(x) = x e^{x} \).  
> Étudier les variations de \(f\) et dresser son tableau de variation.

{{% details title="Solution commentée" closed="true" %}}
\(f = uv\) avec \(u(x) = x\) et \(v(x) = e^x\), donc \(u'(x) = 1\) et \(v'(x) = e^x\) :  
\[
f'(x) = 1 \times e^x + x \times e^x = (1 + x)e^x.
\]
Comme \(e^x > 0\) pour tout réel \(x\), \(f'(x)\) a le même signe que \(1 + x\) :
\[
f'(x) > 0 \iff 1 + x > 0 \iff x > -1.
\]
Ainsi, \( f \) est décroissante sur \( ]-\infty\,; -1] \) et croissante sur \( [-1\,; +\infty[ \). Elle admet un minimum en \(-1\), égal à \( f(-1) = -e^{-1} = -\dfrac{1}{e} \).

![](/images/image187.png)
{{% /details %}}

## Exercice résolu : Résoudre une équation ou une inéquation

> [!NOTE] **Exercice résolu**  
> Résoudre dans \(\mathbb{R}\) :  
> 1. \( e^{3x-6} = 1 \)  
> 2. \( e^{x^2} = e^{x+2} \)  
> 3. \( e^{1-4x} < 1 \)

{{% details title="Solution commentée" closed="true" %}}
On écrit \(1 = e^0\), puis on utilise \(e^a = e^b \iff a = b\) et \(e^a < e^b \iff a < b\).

1. \( e^{3x-6} = e^0 \iff 3x - 6 = 0 \iff x = 2 \).  
   \( S = \{2\} \)

2. \( e^{x^2} = e^{x+2} \iff x^2 = x + 2 \iff x^2 - x - 2 = 0 \).  
   \(\Delta = 1 + 8 = 9\), d’où \( x = \dfrac{1 + 3}{2} = 2 \) ou \( x = \dfrac{1 - 3}{2} = -1 \).  
   \( S = \{-1 \,;\, 2\} \)

3. \( e^{1-4x} < e^0 \iff 1 - 4x < 0 \iff x > \tfrac{1}{4} \).  
   \( S = \left]\tfrac{1}{4} ; +\infty\right[ \)
{{% /details %}}

## Exercice résolu : Étudier une fonction de la forme \( f(t) = e^{-kt} \)

> [!NOTE] **Exercice résolu**  
> L’activité d’un échantillon radioactif, en becquerels (Bq), est modélisée en fonction du temps \( t \) (en jours) par  
> \[
A(t) = 500 \, e^{-0{,}2t}, \quad t \geq 0.
\]  
> 1. Démontrer que l’activité \( A \) est une fonction décroissante du temps.  
> 2. À l’aide du graphique ci-dessous, déterminer au bout de combien de temps l’activité devient inférieure à la moitié de sa valeur initiale.
> ![](/images/image188.png)

{{% details title="Solution commentée" closed="true" %}}
1. \( A \) est dérivable sur \([0 ; +\infty[\) et \( A'(t) = 500 \times (-0{,}2)\, e^{-0{,}2t} = -100\, e^{-0{,}2t} \).  
   Comme \( e^{-0{,}2t} > 0 \), on a \( A'(t) < 0 \) : l’activité est **strictement décroissante**.

2. L’activité initiale est \( A(0) = 500 \) Bq ; sa moitié vaut 250 Bq. On trace la droite d’équation \( A = 250 \) et on lit l’abscisse de son point d’intersection avec la courbe : environ \( t \approx 3{,}5 \).  
   Comme \(A\) est décroissante, l’activité devient inférieure à la moitié de sa valeur initiale au bout d’environ **3,5 jours** (cette durée s’appelle la demi-vie de l’échantillon).
{{% /details %}}
