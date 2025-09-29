---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Déterminer la limite, quand \(n\to+\infty\), des suites suivantes (pour \(n\ge 1\)) :
1. \(\displaystyle u_n=\frac{2n+4}{\frac1n-5}\)
2. \(\displaystyle v_n=\frac{-3}{2n^2+n+1}\)
3. \(\displaystyle w_n=\frac{2-\frac1{n^2}}{7+\frac1{n\sqrt{n}}}\)
4. \(\displaystyle x_n=\frac{-4}{\frac{2}{n^2}+\frac{3}{n}}\)

{{% details title="Solution" closed="true" %}}
**1.** Écrire \(\displaystyle u_n=-\frac{2n+4}{\,5-\frac1n\,}\).  
Alors \(5-\tfrac1n\to 5\) (non nul) et \(2n+4\to +\infty\). Donc \(\displaystyle u_n\to -\infty\).  
\(\boxed{\lim u_n=-\infty}\).

**2.** Le dénominateur \(2n^2+n+1\to +\infty\). Numérateur constant \(-3\).  
Donc \(\displaystyle v_n\to 0\) (par valeurs négatives).  
\(\boxed{\lim v_n=0}\).

**3.** \(\displaystyle 2-\frac1{n^2}\to 2\) et \(\displaystyle 7+\frac1{n\sqrt n}\to 7\).  
Par quotients de limites non nulles : \(\displaystyle w_n\to \frac{2}{7}\).  
\(\boxed{\lim w_n=\tfrac{2}{7}}\).

**4.** Factoriser \(\frac1n\) au dénominateur :  
\[
x_n=\frac{-4}{\frac{1}{n}\Big(\frac{2}{n}+3\Big)}=-\,\frac{4n}{\frac{2}{n}+3}.
\]
Or \(\frac{2}{n}+3\to 3\) (non nul) et \(4n\to +\infty\). Donc \(x_n\to -\infty\).  
\(\boxed{\lim x_n=-\infty}\).
{{% /details %}}


### Exercice 2

On considère la suite \((u_n)\) définie pour tout entier naturel \(n\) par \(u_n=3n^2-8n+2\).

1.  
   a. Sans transformer \(u_n\), expliquer pourquoi le calcul de la limite de \((u_n)\) donne une **forme indéterminée**.  
   b. Factoriser \(3n^2-8n+2\) par son terme de plus haut degré \(3n^2\). En déduire la limite de \((u_n)\).

2. En utilisant la même méthode, calculer les limites des suites \((v_n)\), \((w_n)\) et \((x_n)\) définies pour tout entier naturel \(n\) par :  
   a. \(v_n=-2n^2+4n-5\)  
   b. \(w_n=5n^3-3n^2-7n+9\)  
   c. \(x_n=10n^2-5n^4+7\)

{{% details title="Solution" closed="true" %}}
**1.a** Quand \(n\to+\infty\) : \(3n^2\to+\infty\), \(-8n\to-\infty\), \(+2\to 2\).  
On a donc \(\,+\infty+(-\infty)+2\), soit une **forme indéterminée** du type \(\infty-\infty\).

**1.b**  
\[
u_n=3n^2\!\left(1-\frac{8}{3}\frac1n+\frac{2}{3}\frac1{n^2}\right).
\]
Le facteur entre parenthèses \(\to 1\) (positif pour \(n\) grand), et \(3n^2\to+\infty\).  
Donc \(\boxed{\lim_{n\to\infty} u_n=+\infty}\).

**2.a**  
\[
v_n=n^2\!\left(-2+\frac{4}{n}-\frac{5}{n^2}\right)\xrightarrow[n\to\infty]{}-\infty
\quad(\text{le terme entre parenthèses }\to -2<0).
\]
Donc \(\boxed{\lim v_n=-\infty}\).

**2.b**  
\[
w_n=n^3\!\left(5-\frac{3}{n}-\frac{7}{n^2}+\frac{9}{n^3}\right)\xrightarrow[n\to\infty]{}+\infty
\quad(\text{le terme entre parenthèses }\to 5>0).
\]
Donc \(\boxed{\lim w_n=+\infty}\).

**2.c**  
\[
x_n=n^4\!\left(\frac{10}{n^2}-5+\frac{7}{n^4}\right)\xrightarrow[n\to\infty]{}-\infty
\quad(\text{le terme entre parenthèses }\to -5<0).
\]
Donc \(\boxed{\lim x_n=-\infty}\).
{{% /details %}}


### Exercice 3

Calculer les limites des suites suivantes (pour tout entier naturel \(n\)) :
1. \(\displaystyle u_n=(0{,}5)^n\)
2. \(\displaystyle v_n=(\sqrt{2})^n\)
3. \(\displaystyle w_n=\frac{1}{3^n}\)
4. \(\displaystyle z_n=\frac{9^n}{4^n}\)

{{% details title="Solution" closed="true" %}}
Rappel : pour une suite géométrique \(a^n\):  
- si \(|a|<1\), alors \(\lim a^n=0\) ;  
- si \(a>1\), alors \(\lim a^n=+\infty\) ;  
- si \(a\leq -1\), alors la suite ne converge pas.

1. \(u_n=(\tfrac12)^n\) avec \(0<\tfrac12<1\) \(\Longrightarrow\) \(\boxed{\lim u_n=0}\).  
2. \(v_n=(\sqrt2)^n\) avec \(\sqrt2>1\) \(\Longrightarrow\) \(\boxed{\lim v_n=+\infty}\).  
3. \(w_n=1/3^n=(\tfrac13)^n\) avec \(0<\tfrac13<1\) \(\Longrightarrow\) \(\boxed{\lim w_n=0}\).  
4. \(z_n=\dfrac{9^n}{4^n}=\left(\dfrac94\right)^n\) avec \(\dfrac94>1\) \(\Longrightarrow\) \(\boxed{\lim z_n=+\infty}\).
{{% /details %}}


### Exercice 4

On considère la suite \((v_n)\) définie pour tout entier naturel \(n\ge 1\) par
\[
v_n=5-\frac{\sin(n^2)}{\sqrt{n}}.
\]

1. Justifier que, pour tout \(n\ge 1\) :
\[
5-\frac{1}{\sqrt{n}}\ \le\ v_n\ \le\ 5+\frac{1}{\sqrt{n}}.
\]
2. En déduire que la suite \((v_n)\) converge et préciser sa limite.

{{% details title="Solution" closed="true" %}}
**1. Encadrement.** Pour tout réel \(x\), \(-1\le \sin x \le 1\).  
En particulier, \(-1\le \sin(n^2)\le 1\). En divisant par \(\sqrt{n}>0\),
\[
-\frac{1}{\sqrt{n}}\le \frac{\sin(n^2)}{\sqrt{n}}\le \frac{1}{\sqrt{n}}.
\]
En multipliant par \(-1\) (on inverse les inégalités) puis en ajoutant \(5\),
\[
5-\frac{1}{\sqrt{n}}\ \le\ 5-\frac{\sin(n^2)}{\sqrt{n}}\ \le\ 5+\frac{1}{\sqrt{n}},
\]
soit l’encadrement demandé.

**2. Convergence.** Comme \(\dfrac{1}{\sqrt{n}}\to 0\), on a
\[
5-\frac{1}{\sqrt{n}}\ \longrightarrow\ 5
\quad\text{et}\quad
5+\frac{1}{\sqrt{n}}\ \longrightarrow\ 5.
\]
Par le **théorème des gendarmes**, \(v_n\to 5\).  
Donc \(\boxed{\lim_{n\to\infty} v_n=5}\).
{{% /details %}}


### Exercice 5

On considère une suite \((u_n)\) telle que, pour tout entier naturel \(n\),
\[
u_{n+1}=2u_n-4 \quad\text{et}\quad u_0=9.
\]

#### Partie A
1. Prouver que cette suite est minorée par 9.  
2. En déduire son sens de variation.  
3. Peut-on conclure sur le comportement de cette suite en \(+\infty\) avec ces seules informations ?  
4. Conjecturer ce comportement à l’aide de la calculatrice.

#### Partie B
On pose \(v_n=u_n-4\).  
1. Prouver que la suite \((v_n)\) est géométrique. En donner le premier terme et la raison.  
2. Prouver que \(u_n=5\times 2^n+4\) pour tout \(n\in\mathbb{N}\).  
3. En déduire la limite de la suite \((u_n)\).

---

{{% details title="Solution" closed="true" %}}
**Partie A**  
1. Par récurrence :  
   - Initialisation : \(u_0=9\), donc \(u_0\ge 9\).  
   - Hérédité : supposons \(u_k\ge 9\). Alors  
   \[
   u_{k+1}=2u_k-4\ge 2\cdot 9 - 4 = 14 \ge 9.
   \]
   Donc, pour tout \(n\), \(u_n\ge 9\).  

2. Comme \(u_{n+1}-u_n=(2u_n-4)-u_n=u_n-4\), et que \(u_n\ge 9\), on a \(u_{n+1}-u_n\ge 5>0\).  
   La suite est donc **croissante**.

3. On sait seulement que \((u_n)\) est croissante et minorée par 9, mais rien n’assure qu’elle est majorée.  
   On ne peut donc pas conclure encore sur sa limite.  

4. Avec la calculatrice, on constate que la suite croît très vite, ce qui suggère qu’elle diverge vers \(+\infty\).

---

**Partie B**  
1. \(v_n=u_n-4\). Alors  
   \[
   v_{n+1}=u_{n+1}-4=(2u_n-4)-4=2(u_n-4)=2v_n.
   \]  
   Donc \((v_n)\) est géométrique de raison 2 et de premier terme \(v_0=u_0-4=5\).  

2. Donc \(v_n=5\cdot 2^n\). Puisque \(u_n=v_n+4\), on a  
   \[
   u_n=5\cdot 2^n+4.
   \]

3. Comme \(2^n\to+\infty\), on a \(u_n\to+\infty\).  
   Donc \(\boxed{\lim u_n=+\infty}\).
{{% /details %}}