---
title: 'Limites et comparaison'
weight: 3
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Théorème**  
> Soit \(N\) un entier naturel.  
> Soient \((u_n)\) et \((v_n)\) deux suites telles que, pour tout \(n \geq N\), \(u_n \leq v_n\).  
> - Si \(\lim\limits_{n \to +\infty} u_n = +\infty\), alors \(\lim\limits_{n \to +\infty} v_n = +\infty\).  
> - Si \(\lim\limits_{n \to +\infty} v_n = -\infty\), alors \(\lim\limits_{n \to +\infty} u_n = -\infty\).  

{{% details title="Exemple" closed="true" %}}
Soit \((u_n)\) la suite définie par \(u_n = n + \cos(n)\), pour tout \(n \in \mathbb{N}\).  

Pour tout entier naturel \(n\), on a :  
\[
-1 \leq \cos(n) \quad \Leftrightarrow \quad n-1 \leq n + \cos(n) \quad \Leftrightarrow \quad n-1 \leq u_n.
\]  

Or, \(\lim\limits_{n \to +\infty} (n-1) = +\infty\).  
Donc, d’après le théorème précédent, \(\lim\limits_{n \to +\infty} u_n = +\infty\).
{{% /details %}}



## Limite finie

> [!TIP] **Théorème des gendarmes (admise)**  
> Soit \(N\) un entier naturel et soit \(\ell\) un réel.  
> Soient \((u_n)\), \((v_n)\) et \((w_n)\) trois suites telles que, pour tout \(n \geq N\), \(u_n \leq v_n \leq w_n\).  
> Si \((u_n)\) et \((w_n)\) convergent vers la même limite \(\ell\), alors \((v_n)\) converge aussi vers \(\ell\).  

Le schéma suivant illustre le théorème des gendarmes :  

![](/images/image5.png)

> [!IMPORTANT] **Remarque**  
> Ce théorème permet simultanément de prouver que la suite \((v_n)\) converge et de déterminer la valeur de sa limite.  
> Il est aussi connu sous les noms de théorème d’encadrement ou théorème « sandwich ».  

> [!TIP] **Propriété**  
> Soit \(N\) un entier naturel, soient \(\ell\) et \(\ell'\) deux réels.  
> Soient \((u_n)\) et \((v_n)\) deux suites telles que, pour tout \(n \geq N\), \(u_n \leq v_n\).  
> Si \((u_n)\) converge vers \(\ell\) et si \((v_n)\) converge vers \(\ell'\), alors \(\ell \leq \ell'\).  

> [!TIP] **Propriétés**  
> Soient \(\ell\) un réel et \((u_n)\) une suite définie pour tout entier naturel \(n\).  
> - Si \((u_n)\) est croissante et converge vers \(\ell\), alors, pour tout \(n \in \mathbb{N}\), \(u_n \leq \ell\).  
> - Si \((u_n)\) est décroissante et converge vers \(\ell\), alors, pour tout \(n \in \mathbb{N}\), \(u_n \geq \ell\).  


## Déterminer une limite par comparaison

> [!NOTE] **Méthode 1 — Déterminer une limite par comparaison**  
> Déterminer la limite de chacune des suites définies ci-dessous.  
> 1. Pour tout \(n \in \mathbb{N}\), \(u_n = n + \sqrt{\dfrac{1}{n+1}}\).  
> 2. Pour tout \(n \in \mathbb{N}\), \(u_n = -n^2 + (-1)^n\).  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout \(n \in \mathbb{N}\), \(\sqrt{\dfrac{1}{n+1}} \geq 0\).  
En ajoutant \(n\) à chaque membre de l’inégalité, on obtient que, pour tout \(n \in \mathbb{N}\),  
\[
n + \sqrt{\dfrac{1}{n+1}} \geq n,
\]  
ce qui équivaut à \(u_n \geq n\).  

Or \(\lim\limits_{n \to +\infty} n = +\infty\).  
Donc, par comparaison, \(\lim\limits_{n \to +\infty} u_n = +\infty\).  

---

**2.** Pour tout \(n \in \mathbb{N}\), \((-1)^n \leq 1\).  
En ajoutant \(-n^2\) à chaque membre de l’inégalité, on obtient :  
\[
-n^2 + (-1)^n \leq -n^2 + 1.
\]  
Donc \(u_n \leq -n^2 + 1\), pour tout entier naturel \(n\).  

Or \(\lim\limits_{n \to +\infty} n^2 = +\infty\), donc \(\lim\limits_{n \to +\infty} (-n^2) = -\infty\) et, par somme, \(\lim\limits_{n \to +\infty} (-n^2 + 1) = -\infty\).  

Donc, par comparaison, \(\lim\limits_{n \to +\infty} u_n = -\infty\).
{{% /details %}}


## Déterminer la limite d’une suite avec le théorème des gendarmes

> [!NOTE] **Méthode 2 — Déterminer la limite d’une suite avec le théorème des gendarmes**  
> 1. Déterminer la limite de la suite \((w_n)\), définie pour tout entier naturel \(n\) tel que \(n > 1\) par :  
> \[
w_n = \dfrac{1}{n + \cos(n)}.
\]  
> 2. Étudier la convergence de la suite \((z_n)\), définie pour tout entier naturel \(n\) par :  
> \[
z_n = 1 + \dfrac{2 + (-1)^n}{n^2 + 1}.
\]  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout entier naturel \(n\) tel que \(n > 1\), on a \(1 \geq \cos(n) \geq -1\), d’où \(n+1 \geq n+\cos(n) \geq n-1\).  

Or, la fonction inverse est strictement décroissante sur \(]0 ; +\infty[\), donc pour tout entier naturel \(n\) non nul :  
\[
\dfrac{1}{n+1} \leq \dfrac{1}{n+\cos(n)} \leq \dfrac{1}{n-1},
\]  
soit  
\[
\dfrac{1}{n+1} \leq w_n \leq \dfrac{1}{n-1}.
\]  

Or, \(\lim\limits_{n \to +\infty} (n+1) = +\infty\) et \(\lim\limits_{n \to +\infty} (n-1) = +\infty\).  
D’où, par passage à l’inverse :  
\[
\lim_{n \to +\infty} \dfrac{1}{n+1} = 0 = \lim_{n \to +\infty} \dfrac{1}{n-1}.
\]  

D’après le théorème des gendarmes, on a donc \(\lim\limits_{n \to +\infty} w_n = 0\).  

---

**2.** Pour tout entier naturel \(n\), on a \(-1 \leq (-1)^n \leq 1\).  
En ajoutant 2 à chaque membre de l’inégalité, on obtient :  
\[
1 \leq 2 + (-1)^n \leq 3.
\]  

Puis en divisant par \(n^2+1\), quantité positive, on a :  
\[
\dfrac{1}{n^2+1} \leq \dfrac{2+(-1)^n}{n^2+1} \leq \dfrac{3}{n^2+1},
\]  
d’où :  
\[
1 + \dfrac{1}{n^2+1} \leq z_n \leq 1 + \dfrac{3}{n^2+1}, \quad \text{pour tout entier naturel } n.
\]  

Or, \(\lim\limits_{n \to +\infty} (n^2+1) = +\infty\), donc, par passage à l’inverse :  
\[
\lim_{n \to +\infty} \dfrac{1}{n^2+1} = 0 \quad \text{et} \quad \lim_{n \to +\infty} \dfrac{3}{n^2+1} = 0.
\]  

Enfin, par somme :  
\[
\lim_{n \to +\infty} \left(1 + \dfrac{1}{n^2+1}\right) = 1 \quad \text{et} \quad \lim_{n \to +\infty} \left(1 + \dfrac{3}{n^2+1}\right) = 1.
\]  

D’après le théorème des gendarmes, on a donc : la suite \((z_n)\) converge et \(\lim\limits_{n \to +\infty} z_n = 1\).
{{% /details %}}