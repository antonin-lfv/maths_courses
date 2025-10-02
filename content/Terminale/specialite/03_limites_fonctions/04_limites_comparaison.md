---
title: 'Limites et comparaison'
weight: 4
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Théorème**  
> Soient deux fonctions \(f\) et \(g\) telles que \(f(x) \le g(x)\) sur un intervalle du type \([A ; +\infty[\), où \(A\) est un réel.  
> - Si \(\displaystyle \lim_{x\to +\infty} g(x)=+\infty\), alors \(\displaystyle \lim_{x\to +\infty} f(x)=+\infty\).  
> - Si \(\displaystyle \lim_{x\to +\infty} g(x)=-\infty\), alors \(\displaystyle \lim_{x\to +\infty} f(x)=-\infty\).  
> Par analogie, on peut écrire le même théorème lorsque \(x\) tend vers \(-\infty\) ou vers un réel \(a\).
> ![](/images/image33.png)

{{% details title="Exemple" closed="true" %}}
Soit \(f\) la fonction définie sur \([-1 ; +\infty[\) par
\[
f(x)=x^2+\frac{2\sqrt{x}+1}{2x^2+1}.
\]
Pour tout \(x\in[-1;+ \infty[\), \(\dfrac{2\sqrt{x}+1}{2x^2+1}\ge 0\), donc \(f(x)\ge x^2\).  
De plus, \(\displaystyle \lim_{x\to +\infty} x^2=+\infty\).  
On peut donc en conclure que \(\displaystyle \lim_{x\to +\infty} f(x)=+\infty\).
{{% /details %}}


## Limite finie

> [!TIP] **Théorème des gendarmes (admise)**  
> Soient \(\ell\) un réel et trois fonctions \(f,g,h\) telles que \(f(x)\le g(x)\le h(x)\) sur un intervalle du type \([A ; +\infty[\), où \(A\) est un réel.  
> Si \(\displaystyle \lim_{x\to +\infty} f(x)=\ell\) et \(\displaystyle \lim_{x\to +\infty} h(x)=\ell\), alors \(\displaystyle \lim_{x\to +\infty} g(x)=\ell\).  
> Par analogie, on peut écrire le même théorème lorsque \(x\) tend vers \(-\infty\) ou vers un réel \(a\).
> ![](/images/image34.png)

{{% details title="Exemple" closed="true" %}}
Soit \(f\) la fonction définie sur \(]0 ; +\infty[\) dont la courbe représentative est donnée ci-contre et telle que, pour tout \(x\in]0 ; +\infty[\),
\[
1-\frac{1}{x}\le f(x)\le 1+\frac{1}{x}.
\]
\(\displaystyle \lim_{x\to +\infty}\left(1-\frac{1}{x}\right)=1\) et \(\displaystyle \lim_{x\to +\infty}\left(1+\frac{1}{x}\right)=1\).  
D’après le théorème des gendarmes, on conclut que \(\displaystyle \lim_{x\to +\infty} f(x)=1\).

![](/images/image35.png)

{{% /details %}}


## Croissances comparées

> [!TIP] **Théorème des croissances comparées**  
> Pour tout entier naturel \(n\), on a :  
> - \(\displaystyle \lim_{x\to +\infty}\frac{e^{x}}{x^{n}}=+\infty\) ;  
> - \(\displaystyle \lim_{x\to -\infty} x^{n} e^{x}=0\).

> [!IMPORTANT] **Remarque**  
> Ce théorème illustre le fait que la fonction exponentielle croît en \(+\infty\) bien plus vite que toute fonction puissance.


## Déterminer une limite infinie par comparaison

> [!NOTE] **Méthode 1 — Déterminer une limite infinie par comparaison**  
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=x+\cos(x)\).  
> 1. Tracer la courbe représentative de la fonction \(f\) et conjecturer les limites de \(f\) en \(-\infty\) et en \(+\infty\).  
> 2. À l’aide d’un encadrement de \(\cos(x)\), déterminer les limites de \(f\) en \(-\infty\) et en \(+\infty\).

{{% details title="Solution commentée" closed="true" %}}
**1.** La courbe est tracée ci-dessous. Graphiquement, on peut conjecturer que :  
\[
\lim_{x\to -\infty} f(x)=-\infty \quad \text{et} \quad \lim_{x\to +\infty} f(x)=+\infty.
\]

![](/images/image36.png)

**2.** Pour tout réel \(x\), on sait que \(-1\le \cos(x)\le 1\).  
Donc \(-1+x\le x+\cos(x)\le 1+x\).

- **Limite en \(-\infty\)** : on sait que \(\displaystyle \lim_{x\to -\infty}(-1+x)=-\infty\) et \(f(x)\le 1+x\).  
  Donc \(\displaystyle \lim_{x\to -\infty} f(x)=-\infty\).

- **Limite en \(+\infty\)** : on sait que \(\displaystyle \lim_{x\to +\infty}(1+x)=+\infty\) et \(f(x)\ge -1+x\).  
  Donc \(\displaystyle \lim_{x\to +\infty} f(x)=+\infty\).
{{% /details %}}


## Utiliser le théorème des gendarmes

> [!NOTE] **Méthode 2 — Utiliser le théorème des gendarmes**  
> Soit \(f\) la fonction définie sur \(]-\infty;0[ \cup ]0;+\infty[\) par \(f(x)=\dfrac{\cos(x)}{x}+1\).  
> 1. Tracer la courbe représentative de la fonction \(f\) et conjecturer ses limites en \(+\infty\) et en \(-\infty\).  
> 2. En utilisant un encadrement de \(\cos(x)\), donner un encadrement de \(f(x)\) et en déduire les limites conjecturées.

{{% details title="Solution commentée" closed="true" %}}
**1.** On conjecture que \(\displaystyle \lim_{x\to +\infty} f(x)=1\) et que \(\displaystyle \lim_{x\to -\infty} f(x)=1\).

![](/images/image37.png)

**2.** On sait que, pour tout \(x\) réel, \(-1\le \cos(x)\le 1\).

- **1er cas : \(x>0\)** (pour la limite en \(+\infty\)).  
  On peut alors multiplier chaque membre de cette double inégalité par \(\dfrac{1}{x}\) :
  \[
  -\frac{1}{x}\le \frac{\cos(x)}{x}\le \frac{1}{x}.
  \]
  Donc \(-\dfrac{1}{x}+1\le \dfrac{\cos(x)}{x}+1\le \dfrac{1}{x}+1\),  
  donc \(-\dfrac{1}{x}+1\le f(x)\le \dfrac{1}{x}+1\).  
  Or \(\displaystyle \lim_{x\to +\infty}\left(-\frac{1}{x}\right)=\lim_{x\to +\infty}\left(\frac{1}{x}\right)=0\),  
  donc \(\displaystyle \lim_{x\to +\infty}\left(\frac{1}{x}+1\right)=\lim_{x\to +\infty}\left(-\frac{1}{x}+1\right)=1\).  
  Donc, en appliquant le théorème des gendarmes, \(\displaystyle \lim_{x\to +\infty} f(x)=1\).

- **2e cas : \(x<0\)** (pour la limite en \(-\infty\)).  
  On peut alors multiplier chaque membre de cette double inégalité par \(\dfrac{1}{x}\), mais les inégalités changent de sens :
  \[
  -\frac{1}{x}\ge \frac{\cos(x)}{x}\ge \frac{1}{x}.
  \]
  Donc \(-\dfrac{1}{x}+1\ge \dfrac{\cos(x)}{x}+1\ge \dfrac{1}{x}+1\),  
  donc \(-\dfrac{1}{x}+1\ge f(x)\ge \dfrac{1}{x}+1\).  
  Or \(\displaystyle \lim_{x\to -\infty}\left(\frac{1}{x}\right)=\lim_{x\to +\infty}\left(-\frac{1}{x}\right)=0\),  
  donc \(\displaystyle \lim_{x\to -\infty}\left(\frac{1}{x}+1\right)=\lim_{x\to +\infty}\left(-\frac{1}{x}+1\right)=1\).  
  Donc, en appliquant le théorème des gendarmes, \(\displaystyle \lim_{x\to -\infty} f(x)=1\).
{{% /details %}}