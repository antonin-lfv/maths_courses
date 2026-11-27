---
title: "Intégrales d'une fonction continue"
weight: 2
cascade:
  type: docs
---

## Lien entre primitives et intégrale

> [!TIP] **Théorème**
>
> Si \(f\) est une fonction **continue et positive** sur \([a\,;\,b]\), alors la fonction \(F_a\) définie sur \([a\,;\,b]\) par
> \[
F_a(x) = \int_a^x f(t)\,\mathrm{d}t
\]
> est la **primitive** de \(f\) sur \([a\,;\,b]\) qui s’annule en \(a\).

> [!IMPORTANT] **Remarque**
>
> \(F_a(x)\) est l’aire sous la courbe de \(f\) entre \(a\) et \(x\) : ce théorème affirme que cette aire, vue comme une fonction de \(x\), est dérivable et a pour dérivée \(f\).

{{% details title="Exemple" closed="true" %}}
On considère \({f : t \mapsto 2t}\), continue et positive sur \({[0\,;\,+\infty[}\). Pour \({x \geq 0}\), \(\displaystyle\int_0^x 2t\,\mathrm{d}t\) est l’aire d’un triangle rectangle de côtés \(x\) et \(2x\), soit \({\dfrac{x \times 2x}{2} = x^2}\).  
On retrouve que \({F_0(x) = x^2}\) est la primitive de \({t \mapsto 2t}\) qui s’annule en 0.
{{% /details %}}

> [!TIP] **Théorème**
>
> Si \(f\) est continue et positive sur \([a\,;\,b]\) et si \(F\) est **une** primitive quelconque de \(f\) sur \([a\,;\,b]\), alors
> \[
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a).
\]
> On note \({\big[F(x)\big]_a^b = F(b) - F(a)}\).

> [!IMPORTANT] **Remarque**
>
> Le résultat ne dépend pas de la primitive choisie : deux primitives diffèrent d’une constante, qui disparaît dans la différence \({F(b) - F(a)}\).

{{% details title="Exemple" closed="true" %}}
La fonction \({x \mapsto \dfrac{1}{x}}\) est continue et positive sur \([1\,;\,e]\), et \(\ln\) en est une primitive. L’aire du domaine compris entre sa courbe, l’axe des abscisses et les droites \({x = 1}\) et \({x = e}\) vaut
\[
\int_1^e \dfrac{1}{x}\,\mathrm{d}x = \big[\ln(x)\big]_1^e = \ln(e) - \ln(1) = 1 \text{ u.a.}
\]

![](/images/image302.png)
{{% /details %}}

> [!TIP] **Théorème**
>
> Toute fonction **continue** sur un intervalle admet des primitives sur cet intervalle.

(Ce résultat, admis au chapitre précédent, se démontre à l’aide du théorème ci-dessus.)

## Intégrale d’une fonction continue de signe quelconque

> [!TIP] **Définition**
>
> Soit \(f\) une fonction continue sur un intervalle \(I\), \(a\) et \(b\) deux réels quelconques de \(I\), et \(F\) une primitive de \(f\) sur \(I\). On appelle **intégrale de \(a\) à \(b\)** de \(f\) le nombre réel
> \[
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a) = \big[F(x)\big]_a^b.
\]

> [!IMPORTANT] **Remarques**
>
> - Cette définition prolonge celle de la page précédente : pour \(f\) positive et \({a \leq b}\), on retrouve une aire.
> - Ici \(f\) peut changer de signe, et l’on peut avoir \({a > b}\). L’intégrale est alors un nombre réel qui peut être **négatif**.

{{% details title="Exemple" closed="true" %}}
La fonction \({f : x \mapsto x^2 - 3x}\) est continue sur \(\mathbb{R}\), de primitive \({F : x \mapsto \dfrac{x^3}{3} - \dfrac{3x^2}{2}}\).
\[
\int_0^2 (x^2 - 3x)\,\mathrm{d}x = \left[\dfrac{x^3}{3} - \dfrac{3x^2}{2}\right]_0^2 = \dfrac{8}{3} - 6 = -\dfrac{10}{3}.
\]
Le résultat est négatif car \(f\) est négative sur \([0\,;\,2]\).
{{% /details %}}

## Propriétés de l’intégrale

Dans ce paragraphe, \(f\) et \(g\) sont continues sur un intervalle \(I\), et \(a\), \(b\), \(c\) sont des réels de \(I\).

> [!TIP] **Propriété (relation de Chasles généralisée)**
>
> \[
\int_a^b f(x)\,\mathrm{d}x = \int_a^c f(x)\,\mathrm{d}x + \int_c^b f(x)\,\mathrm{d}x.
\]

> [!TIP] **Conséquence**
>
> \[
\int_b^a f(x)\,\mathrm{d}x = -\int_a^b f(x)\,\mathrm{d}x.
\]

(Il suffit d’appliquer Chasles avec \({c = a}\) : \({\int_a^b f + \int_b^a f = \int_a^a f = 0}\).)

> [!TIP] **Propriétés (linéarité)**
>
> Pour tout réel \(k\) :
> - \(\displaystyle\int_a^b \big(f(x) + g(x)\big)\,\mathrm{d}x = \int_a^b f(x)\,\mathrm{d}x + \int_a^b g(x)\,\mathrm{d}x\) ;
> - \({\displaystyle\int_a^b k f(x)\,\mathrm{d}x = k\int_a^b f(x)\,\mathrm{d}x}\).

{{% details title="Exemple" closed="true" %}}
On pose \({A = \displaystyle\int_0^1 \dfrac{e^x}{e^x + 1}\,\mathrm{d}x}\) et \({B = \displaystyle\int_0^1 \dfrac{1}{e^x + 1}\,\mathrm{d}x}\).  
Par linéarité, \({A + B = \displaystyle\int_0^1 \dfrac{e^x + 1}{e^x + 1}\,\mathrm{d}x = \int_0^1 1\,\mathrm{d}x = 1}\).  
Or \({A = \big[\ln(e^x + 1)\big]_0^1 = \ln(e + 1) - \ln(2)}\) (forme \(\dfrac{u'}{u}\)), donc \({B = 1 - \ln\left(\dfrac{e + 1}{2}\right)}\), alors qu’on ne connaissait pas directement de primitive de \({x \mapsto \dfrac{1}{e^x + 1}}\).
{{% /details %}}

> [!TIP] **Propriétés (signe de l’intégrale)**
>
> On suppose \({a \leq b}\).
> - Si \({f(x) \geq 0}\) pour tout \({x \in [a\,;\,b]}\), alors \({\displaystyle\int_a^b f(x)\,\mathrm{d}x \geq 0}\).
> - Si \({f(x) \leq 0}\) pour tout \({x \in [a\,;\,b]}\), alors \({\displaystyle\int_a^b f(x)\,\mathrm{d}x \leq 0}\).

> [!IMPORTANT] **Remarque**
>
> L’hypothèse \({a \leq b}\) est essentielle. Les réciproques sont fausses : par exemple \({\displaystyle\int_{-1}^{1} x\,\mathrm{d}x = 0}\), alors que \({x \mapsto x}\) n’est pas positive sur \({[-1\,;\,1]}\).

{{% details title="Exemples" closed="true" %}}
- Pour tout réel \(x\), \({x^2 + 1 > 0}\), donc \({\displaystyle\int_{-1}^{2} (x^2 + 1)\,\mathrm{d}x \geq 0}\).
- Pour tout \({x \in \left[\dfrac12\,;\,1\right]}\), \({\ln(x) \leq 0}\), donc \({\displaystyle\int_{1/2}^{1} \ln(x)\,\mathrm{d}x \leq 0}\).
{{% /details %}}

> [!TIP] **Propriété (intégration d’une inégalité)**
>
> On suppose \({a \leq b}\). Si \({f(x) \leq g(x)}\) pour tout \({x \in [a\,;\,b]}\), alors
> \[
\int_a^b f(x)\,\mathrm{d}x \leq \int_a^b g(x)\,\mathrm{d}x.
\]

{{% details title="Exemple" closed="true" %}}
On souhaite encadrer \({I = \displaystyle\int_0^1 e^{x^2}\,\mathrm{d}x}\), dont on ne connaît pas de primitive.  
Pour tout \({x \in [0\,;\,1]}\), \({0 \leq x^2 \leq x}\), donc, par croissance de \(\exp\), \({1 \leq e^{x^2} \leq e^x}\). En intégrant sur \([0\,;\,1]\) :
\[
\int_0^1 1\,\mathrm{d}x \leq I \leq \int_0^1 e^x\,\mathrm{d}x, \quad \text{soit} \quad 1 \leq I \leq e - 1.
\]
{{% /details %}}

## Calculer une intégrale à l’aide d’une primitive

> [!NOTE] **Méthode 2 - Calculer une intégrale à l’aide d’une primitive**
>
> Calculer : a. \({\displaystyle\int_1^2 \left(4x^3 - \dfrac{2}{x^2}\right)\mathrm{d}x}\) ; b. \({\displaystyle\int_0^1 \dfrac{x}{x^2 + 1}\,\mathrm{d}x}\) ; c. \(\displaystyle\int_0^{\pi} \sin(2x)\,\mathrm{d}x\) ; d. \(\displaystyle\int_1^{e} \dfrac{\ln(x)}{x}\,\mathrm{d}x\).

{{% details title="Solution commentée" closed="true" %}}
a. Une primitive de \({x \mapsto 4x^3 - 2x^{-2}}\) sur \([1\,;\,2]\) est \({x \mapsto x^4 + \dfrac{2}{x}}\) :
\[
\left[x^4 + \dfrac{2}{x}\right]_1^2 = (16 + 1) - (1 + 2) = 14.
\]
b. Avec \({u(x) = x^2 + 1 > 0}\), \({\dfrac{x}{x^2 + 1} = \dfrac{1}{2} \times \dfrac{u'(x)}{u(x)}}\) :
\[
\left[\dfrac{1}{2}\ln(x^2 + 1)\right]_0^1 = \dfrac{1}{2}\ln(2).
\]
c. Une primitive de \({x \mapsto \sin(2x)}\) est \({x \mapsto -\dfrac{1}{2}\cos(2x)}\) :
\[
\left[-\dfrac{1}{2}\cos(2x)\right]_0^{\pi} = -\dfrac{1}{2}\cos(2\pi) + \dfrac{1}{2}\cos(0) = 0.
\]
d. Avec \({u(x) = \ln(x)}\), \({\dfrac{\ln(x)}{x} = u'(x)u(x)}\), de primitive \(\dfrac{u^2}{2}\) :
\[
\left[\dfrac{(\ln(x))^2}{2}\right]_1^e = \dfrac{1}{2} - 0 = \dfrac{1}{2}.
\]
{{% /details %}}

## Encadrer une intégrale

> [!NOTE] **Méthode 3 - Encadrer une intégrale**
>
> 1. Montrer que, pour tout \({t \geq 0}\), \({1 - t \leq e^{-t} \leq 1}\).
> 2. En déduire que, pour tout \({x \geq 0}\), \({x - \dfrac{x^2}{2} \leq 1 - e^{-x} \leq x}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour \({t \geq 0}\), \({-t \leq 0}\), donc \({e^{-t} \leq e^0 = 1}\).  
Par ailleurs, l’exponentielle est convexe, donc sa courbe est au-dessus de sa tangente en 0 : \({e^X \geq 1 + X}\) pour tout réel \(X\). Avec \({X = -t}\) : \({e^{-t} \geq 1 - t}\).

**2.** Soit \({x \geq 0}\). On intègre l’encadrement de la question 1 sur \([0\,;\,x]\) (les bornes sont dans l’ordre croissant) :
\[
\int_0^x (1 - t)\,\mathrm{d}t \leq \int_0^x e^{-t}\,\mathrm{d}t \leq \int_0^x 1\,\mathrm{d}t.
\]
On calcule : \({\displaystyle\int_0^x (1 - t)\,\mathrm{d}t = \left[t - \dfrac{t^2}{2}\right]_0^x = x - \dfrac{x^2}{2}}\), \({\displaystyle\int_0^x e^{-t}\,\mathrm{d}t = \big[-e^{-t}\big]_0^x = 1 - e^{-x}}\) et \({\displaystyle\int_0^x 1\,\mathrm{d}t = x}\). D’où :
\[
x - \dfrac{x^2}{2} \leq 1 - e^{-x} \leq x.
\]
{{% /details %}}
