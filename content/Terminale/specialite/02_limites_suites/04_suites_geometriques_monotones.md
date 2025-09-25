---
title: 'Suites géométriques, suites monotones'
weight: 4
cascade:
  type: docs
---

## Suites du type \((q^n)\)

> [!TIP] **Propriétés**  
> Soit \(q\) un réel.  
> - Si \(q \leq -1\) alors la suite \((q^n)\) diverge et n’admet pas de limite.  
> - Si \(-1 < q < 1\) alors la suite \((q^n)\) converge vers 0.  
> - Si \(q = 1\) alors la suite \((q^n)\) converge vers 1.  
> - Si \(q > 1\) alors la suite \((q^n)\) diverge vers \(+\infty\).  

{{% details title="Exemples" closed="true" %}}
- Soit \(u_n = 2^n\) pour tout \(n \in \mathbb{N}\).  
\(2 > 1\) donc, d’après la propriété, \(\lim\limits_{n \to +\infty} 2^n = +\infty\).  
D’où \(\lim\limits_{n \to +\infty} u_n = +\infty\).  

- Soit \(v_n = \left(\dfrac{1}{3}\right)^n\) pour tout \(n \in \mathbb{N}\).  
\(-1 < \dfrac{1}{3} < 1\) donc, d’après la propriété, \(\lim\limits_{n \to +\infty} \left(\dfrac{1}{3}\right)^n = 0\).  
D’où \(\lim\limits_{n \to +\infty} v_n = 0\).  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Ce théorème permet en particulier de conclure sur la convergence ou la divergence d’une suite géométrique et d’en calculer la limite éventuelle.

## Suites monotones

Soit \((u_n)\) une suite de nombres réels. Soient \(M\) et \(m\) deux réels.  

> [!TIP] **Théorème (admise)**  
> - Si \((u_n)\) est croissante et majorée, alors \((u_n)\) converge.  
> - Si \((u_n)\) est décroissante et minorée, alors \((u_n)\) converge.  

> [!TIP] **Corollaire**  
> - Si \((u_n)\) est croissante et majorée par \(M\), alors \((u_n)\) converge vers une limite \(\ell\) telle que \(\ell \leq M\).  
> - Si \((u_n)\) est décroissante et minorée par \(m\), alors \((u_n)\) converge vers une limite \(\ell\) telle que \(\ell \geq m\).  

> [!IMPORTANT] **Remarque**  
> Le théorème assure de l’existence de la limite \(\ell\) de la suite mais il ne donne pas la valeur de cette limite.  
> Le corollaire précise que si la suite est majorée par \(M\), alors \(\ell \leq M\).  
> Par exemple, pour la suite représentée ci-dessous, \(3.5\) (en pointillé) est un majorant mais n’est pas la limite.  
>
> ![](/images/image6.png)

> [!TIP] **Théorème**  
> - Si \((u_n)\) est croissante et non majorée, alors \((u_n)\) diverge vers \(+\infty\).  
> - Si \((u_n)\) est décroissante et non minorée, alors \((u_n)\) diverge vers \(-\infty\).


## Déterminer la limite d’une suite du type \((q^n)\)

> [!NOTE] **Méthode 1 — Déterminer la limite d’une suite du type \((q^n)\)**  
> Déterminer la limite des suites ci-dessous, définies pour tout entier naturel \(n\).  
> 1. \(u_n = \dfrac{1}{2^n}\)  
> 2. \(v_n = \dfrac{5^n}{3^n}\)  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout entier naturel \(n\),  
\[
u_n = \dfrac{1}{2^n} = \left(\dfrac{1}{2}\right)^n.
\]  

Or \(-1 < \dfrac{1}{2} < 1\), donc  
\[
\lim_{n \to +\infty} \left(\dfrac{1}{2}\right)^n = 0.
\]  

D’où \(\lim\limits_{n \to +\infty} u_n = 0\).  

---

**2.** Pour tout entier naturel \(n\),  
\[
v_n = \dfrac{5^n}{3^n} = \left(\dfrac{5}{3}\right)^n.
\]  

Or \(\dfrac{5}{3} > 1\), donc  
\[
\lim_{n \to +\infty} \left(\dfrac{5}{3}\right)^n = +\infty.
\]  

D’où \(\lim\limits_{n \to +\infty} v_n = +\infty\).
{{% /details %}}


## Étudier la convergence d’une suite géométrique

> [!NOTE] **Méthode 2 — Étudier la convergence d’une suite géométrique**  
> Étudier la convergence de chacune des suites suivantes définies sur \(\mathbb{N}\).  
> 1. \((w_n)\), suite géométrique de raison \(-\dfrac{5}{3}\) et de premier terme égal à 5.  
> 2. \((z_n)\), suite géométrique de raison \(e\) et de premier terme égal à \(-2\).  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout \(n \in \mathbb{N}\),  
\[
w_n = 5 \times \left(-\dfrac{5}{3}\right)^n.
\]  

Or \(-\dfrac{5}{3} < -1\), donc, d’après le théorème du cours, \(\left(-\dfrac{5}{3}\right)^n\) n’admet pas de limite.  
Donc la suite \((w_n)\) diverge et n’admet pas de limite.  

---

**2.** Pour tout \(n \in \mathbb{N}\),  
\[
z_n = -2 \times e^n.
\]  

Or \(e > 1\), donc, d’après le théorème du cours,  
\[
\lim_{n \to +\infty} e^n = +\infty.
\]  

Et, par produit,  
\[
\lim_{n \to +\infty} z_n = -\infty.
\]  

La suite \((z_n)\) diverge donc vers \(-\infty\).
{{% /details %}}


## Prouver la convergence d’une suite monotone

> [!NOTE] **Méthode 3 — Prouver la convergence d’une suite monotone**  
> Soit la suite \((u_n)\) définie par \(u_0 = 4\) et, pour tout entier naturel \(n\),  
> \[
u_{n+1} = \tfrac{1}{2} u_n + 1.
\]  
> 1. Montrer par récurrence que la suite \((u_n)\) est minorée par 2.  
> 2. En déduire que la suite \((u_n)\) est décroissante.  
> 3. Que peut-on en déduire pour la convergence de la suite \((u_n)\) ?  

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour tout entier naturel \(n\), on considère la propriété \(P(n) : u_n \geq 2\). On raisonne par récurrence.  

- **Initialisation.** Pour \(n=0\), \(u_0 = 4\) donc \(P(0)\) est vraie.  
- **Hérédité.** On considère un entier quelconque \(k \geq 0\). On suppose que \(P(k)\) est vraie, c’est-à-dire \(u_k \geq 2\).  

  Alors \(\tfrac{1}{2}u_k \geq 1\), donc \(\tfrac{1}{2}u_k + 1 \geq 2\), soit \(u_{k+1} \geq 2\). Donc \(P(k+1)\) est vraie. La propriété est héréditaire.  

- **Conclusion.** La propriété \(P(n)\) est vraie au rang 0 et héréditaire, donc elle est vraie pour tout entier \(n \geq 0\).  
Donc, pour tout entier naturel \(n\), \(u_n \geq 2\). La suite \((u_n)\) est minorée par 2.  

---

**2.** Pour tout entier naturel \(n\),  
\[
u_{n+1} - u_n = \tfrac{1}{2}u_n + 1 - u_n = -\tfrac{1}{2}u_n + 1.
\]  

Or \(u_n \geq 2\), donc \(-\tfrac{1}{2}u_n \leq -1\), donc \(-\tfrac{1}{2}u_n + 1 \leq 0\), soit \(u_{n+1} - u_n \leq 0\).  
Donc la suite \((u_n)\) est décroissante.  

---

**3.** La suite \((u_n)\) est minorée et décroissante, donc elle est convergente, c’est-à-dire qu’elle admet une limite réelle que l’on note \(\ell\).  
Comme, pour tout entier naturel \(n\), \(u_n \geq 2\), on peut conclure que \(\ell \geq 2\).  
{{% /details %}}