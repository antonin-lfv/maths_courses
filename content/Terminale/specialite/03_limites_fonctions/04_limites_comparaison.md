---
title: 'Limites et comparaison'
weight: 4
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Théorème**  
> Soient \(f\) et \(g\) deux fonctions telles que \({f(x) \le g(x)}\) pour tout \(x\) d’un intervalle de la forme \({[A ; +\infty[}\), où \(A\) est un réel.  
> - Si \({\displaystyle \lim_{x\to +\infty} f(x) = +\infty}\), alors \({\displaystyle \lim_{x\to +\infty} g(x) = +\infty}\).  
> - Si \({\displaystyle \lim_{x\to +\infty} g(x) = -\infty}\), alors \({\displaystyle \lim_{x\to +\infty} f(x) = -\infty}\).  
>
> On a des théorèmes analogues lorsque \(x\) tend vers \({-\infty}\) ou vers un réel \(a\).
> ![](/images/image241.png)

> [!IMPORTANT] **Remarque**  
> Autrement dit : une fonction **au-dessus** d’une fonction qui tend vers \({+\infty}\) tend elle aussi vers \({+\infty}\) ; une fonction **en dessous** d’une fonction qui tend vers \({-\infty}\) tend vers \({-\infty}\).

{{% details title="Exemple" closed="true" %}}
On considère la fonction \(f\) définie sur \(\mathbb{R}\) par
\[
f(x) = x^3 + \dfrac{1}{x^2 + 1}.
\]
Pour tout réel \(x\), \({\dfrac{1}{x^2 + 1} > 0}\), donc \({f(x) \ge x^3}\).  
Or \({\displaystyle \lim_{x\to +\infty} x^3 = +\infty}\).  
Par comparaison, \({\displaystyle \lim_{x\to +\infty} f(x) = +\infty}\).
{{% /details %}}

## Limite finie

> [!TIP] **Théorème des gendarmes (admis)**  
> Soit \(\ell\) un réel, et \(f, g, h\) trois fonctions telles que \({f(x) \le g(x) \le h(x)}\) pour tout \(x\) d’un intervalle de la forme \({[A ; +\infty[}\), où \(A\) est un réel.  
> Si \({\displaystyle \lim_{x\to +\infty} f(x) = \ell}\) et \({\displaystyle \lim_{x\to +\infty} h(x) = \ell}\), alors \({\displaystyle \lim_{x\to +\infty} g(x) = \ell}\).  
>
> On a des théorèmes analogues lorsque \(x\) tend vers \({-\infty}\) ou vers un réel \(a\).

{{% details title="Exemple" closed="true" %}}
Soit \(f\) une fonction définie sur \({]0 ; +\infty[}\), représentée ci-dessous, telle que, pour tout \({x \in \,]0 ; +\infty[}\),
\[
2 - \dfrac{1}{x^2} \le f(x) \le 2 + \dfrac{1}{x^2}.
\]
On a \({\displaystyle \lim_{x\to +\infty}\left(2 - \dfrac{1}{x^2}\right) = 2}\) et \({\displaystyle \lim_{x\to +\infty}\left(2 + \dfrac{1}{x^2}\right) = 2}\).  
D’après le théorème des gendarmes, \({\displaystyle \lim_{x\to +\infty} f(x) = 2}\) : la droite d’équation \({y = 2}\) est asymptote horizontale à la courbe de \(f\) en \({+\infty}\).

![](/images/image242.png)

{{% /details %}}

## Croissances comparées

> [!TIP] **Théorème des croissances comparées**  
> Pour tout entier naturel \(n\) :  
> - \({\displaystyle \lim_{x\to +\infty}\dfrac{e^{x}}{x^{n}} = +\infty}\) ;  
> - \({\displaystyle \lim_{x\to -\infty} x^{n} e^{x} = 0}\).

> [!IMPORTANT] **Remarque**  
> En \({+\infty}\), l’exponentielle « l’emporte » sur toute puissance de \(x\) : elle croît beaucoup plus vite que n’importe quelle fonction puissance. Ce théorème permet de lever des formes indéterminées comme « \(\dfrac{\infty}{\infty}\) » ou « \({0 \times \infty}\) » faisant intervenir \(e^x\) et \(x^n\).

{{% details title="Exemple" closed="true" %}}
En \({+\infty}\), \(\dfrac{e^x}{x^3}\) est une forme « \(\dfrac{\infty}{\infty}\) », mais d’après le théorème, \({\displaystyle \lim_{x\to +\infty}\dfrac{e^{x}}{x^{3}} = +\infty}\).  
En \({-\infty}\), \(x^2 e^x\) est une forme « \({\infty \times 0}\) », mais \({\displaystyle \lim_{x\to -\infty} x^2 e^x = 0}\).
{{% /details %}}

## Déterminer une limite infinie par comparaison

> [!NOTE] **Méthode 1 - Déterminer une limite infinie par comparaison**  
> On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \({f(x) = 2x - \sin(x)}\).  
> 1. Tracer la courbe de \(f\) à la calculatrice et conjecturer ses limites en \({-\infty}\) et en \({+\infty}\).  
> 2. À l’aide d’un encadrement de \(\sin(x)\), démontrer ces conjectures.

{{% details title="Solution commentée" closed="true" %}}
**1.** D’après la courbe ci-dessous, on conjecture que :  
\[
\lim_{x\to -\infty} f(x) = -\infty \quad \text{et} \quad \lim_{x\to +\infty} f(x) = +\infty.
\]

![](/images/image243.png)

**2.** Pour tout réel \(x\), \({-1 \le \sin(x) \le 1}\), donc \({-1 \le -\sin(x) \le 1}\) et, en ajoutant \(2x\) :  
\[
2x - 1 \le f(x) \le 2x + 1.
\]
La courbe de \(f\) est donc comprise entre les deux droites d’équations \({y = 2x - 1}\) et \({y = 2x + 1}\).

- **Limite en \({-\infty}\)** : \({f(x) \le 2x + 1}\) et \({\displaystyle \lim_{x\to -\infty}(2x + 1) = -\infty}\).  
  Par comparaison, \({\displaystyle \lim_{x\to -\infty} f(x) = -\infty}\).

- **Limite en \({+\infty}\)** : \({f(x) \ge 2x - 1}\) et \({\displaystyle \lim_{x\to +\infty}(2x - 1) = +\infty}\).  
  Par comparaison, \({\displaystyle \lim_{x\to +\infty} f(x) = +\infty}\).
{{% /details %}}

## Utiliser le théorème des gendarmes

> [!NOTE] **Méthode 2 - Utiliser le théorème des gendarmes**  
> On considère la fonction \(f\) définie sur \({]-\infty;0[ \cup ]0;+\infty[}\) par \({f(x) = 3 - \dfrac{\sin(x)}{x}}\).  
> 1. Tracer la courbe de \(f\) et conjecturer ses limites en \({+\infty}\) et en \({-\infty}\).  
> 2. À l’aide d’un encadrement de \(\sin(x)\), encadrer \(f(x)\) et démontrer les limites conjecturées.

{{% details title="Solution commentée" closed="true" %}}
**1.** On conjecture que \({\displaystyle \lim_{x\to +\infty} f(x) = 3}\) et \({\displaystyle \lim_{x\to -\infty} f(x) = 3}\).

![](/images/image244.png)

**2.** Pour tout réel \(x\), \({-1 \le \sin(x) \le 1}\). Il faut distinguer selon le signe de \(x\), car diviser par un nombre négatif change le sens des inégalités.

- **Cas \({x > 0}\)** (limite en \({+\infty}\)). En divisant par \({x > 0}\) :
  \[
  -\dfrac{1}{x} \le \dfrac{\sin(x)}{x} \le \dfrac{1}{x}.
  \]
  En multipliant par \({-1}\) (le sens change) puis en ajoutant 3 :  
  \[
  3 - \dfrac{1}{x} \le f(x) \le 3 + \dfrac{1}{x}.
  \]
  Comme \({\displaystyle \lim_{x\to +\infty} \dfrac{1}{x} = 0}\), les deux membres extrêmes tendent vers 3.  
  D’après le théorème des gendarmes, \({\displaystyle \lim_{x\to +\infty} f(x) = 3}\).

- **Cas \({x < 0}\)** (limite en \({-\infty}\)). En divisant par \({x < 0}\), le sens des inégalités change :
  \[
  -\dfrac{1}{x} \ge \dfrac{\sin(x)}{x} \ge \dfrac{1}{x}.
  \]
  En multipliant par \({-1}\) puis en ajoutant 3 :  
  \[
  3 + \dfrac{1}{x} \le f(x) \le 3 - \dfrac{1}{x}.
  \]
  Comme \({\displaystyle \lim_{x\to -\infty} \dfrac{1}{x} = 0}\), les deux membres extrêmes tendent vers 3.  
  D’après le théorème des gendarmes, \({\displaystyle \lim_{x\to -\infty} f(x) = 3}\).

La droite d’équation \({y = 3}\) est asymptote horizontale à la courbe de \(f\) en \({-\infty}\) et en \({+\infty}\).
{{% /details %}}
