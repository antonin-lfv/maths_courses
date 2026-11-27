---
title: 'Limites et comparaison'
weight: 3
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Théorème**  
> Soit \(N\) un entier naturel, et \((u_n)\), \((v_n)\) deux suites telles que \({u_n \leq v_n}\) pour tout \({n \geq N}\).  
> - Si \({\lim\limits_{n \to +\infty} u_n = +\infty}\), alors \({\lim\limits_{n \to +\infty} v_n = +\infty}\).  
> - Si \({\lim\limits_{n \to +\infty} v_n = -\infty}\), alors \({\lim\limits_{n \to +\infty} u_n = -\infty}\).  

{{% details title="Exemple" closed="true" %}}
On considère la suite \((u_n)\) définie pour tout \({n \in \mathbb{N}}\) par \({u_n = n^2 + \sin(n)}\).  

Pour tout entier naturel \(n\), \({\sin(n) \geq -1}\), donc :  
\[
u_n = n^2 + \sin(n) \geq n^2 - 1.
\]  

Or \({\lim\limits_{n \to +\infty} (n^2 - 1) = +\infty}\).  
D’après le théorème de comparaison, \({\lim\limits_{n \to +\infty} u_n = +\infty}\).
{{% /details %}}

## Limite finie

> [!TIP] **Théorème des gendarmes (admis)**  
> Soit \(N\) un entier naturel et \(\ell\) un réel.  
> Soient \((u_n)\), \((v_n)\) et \((w_n)\) trois suites telles que \({u_n \leq v_n \leq w_n}\) pour tout \({n \geq N}\).  
> Si \((u_n)\) et \((w_n)\) convergent toutes deux vers \(\ell\), alors \((v_n)\) converge elle aussi vers \(\ell\).  

Le schéma suivant illustre le théorème des gendarmes : la suite \((v_n)\), coincée entre \((u_n)\) et \((w_n)\), est entraînée vers la même limite.  

![](/images/image223.png)

> [!IMPORTANT] **Remarque**  
> Ce théorème donne à la fois l’**existence** de la limite de \((v_n)\) et sa **valeur**.  
> On l’appelle aussi théorème d’encadrement, ou théorème « sandwich ».  

> [!TIP] **Propriété**  
> Soit \(N\) un entier naturel, \(\ell\) et \(\ell'\) deux réels, et \((u_n)\), \((v_n)\) deux suites telles que \({u_n \leq v_n}\) pour tout \({n \geq N}\).  
> Si \((u_n)\) converge vers \(\ell\) et \((v_n)\) converge vers \(\ell'\), alors \({\ell \leq \ell'}\) (on dit que le passage à la limite conserve les inégalités larges).  

> [!TIP] **Propriétés**  
> Soit \(\ell\) un réel et \((u_n)\) une suite définie sur \(\mathbb{N}\).  
> - Si \((u_n)\) est croissante et converge vers \(\ell\), alors \({u_n \leq \ell}\) pour tout \({n \in \mathbb{N}}\).  
> - Si \((u_n)\) est décroissante et converge vers \(\ell\), alors \({u_n \geq \ell}\) pour tout \({n \in \mathbb{N}}\).  

## Déterminer une limite par comparaison

> [!NOTE] **Méthode 1 - Déterminer une limite par comparaison**  
> Déterminer la limite de chacune des suites suivantes, définies pour tout \({n \in \mathbb{N}}\).  
> 1. \({u_n = 2n + \dfrac{1}{n^2 + 1}}\).  
> 2. \({u_n = -3n + \cos(n)}\).  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout \({n \in \mathbb{N}}\), \({\dfrac{1}{n^2+1} > 0}\).  
En ajoutant \(2n\) à chaque membre, on obtient, pour tout \({n \in \mathbb{N}}\) :  
\[
u_n = 2n + \dfrac{1}{n^2+1} \geq 2n.
\]  

Or \({\lim\limits_{n \to +\infty} 2n = +\infty}\).  
Par comparaison, \({\lim\limits_{n \to +\infty} u_n = +\infty}\).  

---

**2.** Pour tout \({n \in \mathbb{N}}\), \({\cos(n) \leq 1}\).  
En ajoutant \({-3n}\) à chaque membre :  
\[
u_n = -3n + \cos(n) \leq -3n + 1.
\]  

Or, par produit puis par somme, \({\lim\limits_{n \to +\infty} (-3n + 1) = -\infty}\).  

Par comparaison, \({\lim\limits_{n \to +\infty} u_n = -\infty}\).
{{% /details %}}

## Déterminer la limite d’une suite avec le théorème des gendarmes

> [!NOTE] **Méthode 2 - Déterminer la limite d’une suite avec le théorème des gendarmes**  
> 1. Déterminer la limite de la suite \((w_n)\) définie pour tout entier \({n \geq 1}\) par :  
> \[
w_n = \dfrac{\cos(n)}{n^2}.
\]  
> 2. Étudier la convergence de la suite \((z_n)\) définie pour tout entier naturel \(n\) par :  
> \[
z_n = 2 - \dfrac{3 + \sin(n)}{n + 1}.
\]  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout entier \({n \geq 1}\), \({-1 \leq \cos(n) \leq 1}\).  
En divisant par \({n^2 > 0}\) (le sens des inégalités est conservé) :  
\[
-\dfrac{1}{n^2} \leq w_n \leq \dfrac{1}{n^2}.
\]  

Or \({\lim\limits_{n \to +\infty} \dfrac{1}{n^2} = 0}\), et donc aussi \({\lim\limits_{n \to +\infty} \left(-\dfrac{1}{n^2}\right) = 0}\).  

D’après le théorème des gendarmes, \({\lim\limits_{n \to +\infty} w_n = 0}\).  

---

**2.** Pour tout entier naturel \(n\), \({-1 \leq \sin(n) \leq 1}\), donc, en ajoutant 3 :  
\[
2 \leq 3 + \sin(n) \leq 4.
\]  

On divise par \({n + 1 > 0}\) :  
\[
\dfrac{2}{n+1} \leq \dfrac{3 + \sin(n)}{n+1} \leq \dfrac{4}{n+1}.
\]  
On multiplie par \({-1}\) (ce qui inverse le sens des inégalités) et on ajoute 2 :  
\[
2 - \dfrac{4}{n+1} \leq z_n \leq 2 - \dfrac{2}{n+1}.
\]  

Comme \({\lim\limits_{n \to +\infty} (n+1) = +\infty}\), par quotient \({\lim\limits_{n \to +\infty} \dfrac{4}{n+1} = 0}\) et \({\lim\limits_{n \to +\infty} \dfrac{2}{n+1} = 0}\) ; par somme, les deux suites qui encadrent \(z_n\) tendent vers 2.  

D’après le théorème des gendarmes, la suite \((z_n)\) converge et \({\lim\limits_{n \to +\infty} z_n = 2}\).
{{% /details %}}
