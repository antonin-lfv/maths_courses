---
title: "Exercices"
weight: 3
cascade:
  type: docs
---

### Exercice 1

Soit \((v_n)\) la suite définie par \(v_0 = 3\) et, pour tout entier naturel \(n\),  
\[
v_{n+1} = v_n^2 + v_n.
\]

1. Calculer les quatre premiers termes de la suite \((v_n)\).  
2. Exprimer \(v_{n+2}\) en fonction de \(v_{n+1}\).  
3. Exprimer \(v_n\) en fonction de \(v_{n-1}\).  
4. À l’aide de la calculatrice, donner la valeur de \(v_4\).  
5. Déterminer une fonction \(f\) définie sur \(\mathbb{R}\) telle que, pour tout entier naturel \(n\), \(v_{n+1} = f(v_n)\).

{{% details title="Solution" closed="true" %}}
1. \(v_0=3\).  
\(\displaystyle v_1=3^2+3=12\).  
\(\displaystyle v_2=12^2+12=156\).  
\(\displaystyle v_3=156^2+156=24\,492\).  

2. Par la récurrence : \(\displaystyle v_{n+2}=v_{n+1}^2+v_{n+1}\).

3. Idem : \(\displaystyle v_n=v_{n-1}^2+v_{n-1}\).

4. \(\displaystyle v_4=v_3^2+v_3=24\,492^2+24\,492=599\,882\,556\).

5. On pose \(\displaystyle f:\mathbb{R}\to\mathbb{R},\; f(x)=x^2+x\). Alors, pour tout \(n\), \(\displaystyle v_{n+1}=f(v_n)\).
{{% /details %}}

### Exercice 2

La suite \((u_n)\) est définie par son premier terme \(u_0\) et, pour tout entier naturel \(n\) :
\[
u_{n+1}=\sqrt{u_n+\tfrac{2}{5}}.
\]

1. Démontrer que la propriété \(P(n):\; 0<u_n<\tfrac{7}{5}\) est **héréditaire**.  
2. Quelle condition doit vérifier \(u_0\) pour que la propriété \(P(n)\) soit vraie pour tout entier naturel \(n\) ?

{{% details title="Solution" closed="true" %}}
**1) Hérédité.** Supposons \(P(k)\) vraie : \(0<u_k<\tfrac{7}{5}\).  
Alors \(u_k+\tfrac{2}{5}>\tfrac{2}{5}>0\) donc \(u_{k+1}=\sqrt{u_k+\tfrac{2}{5}}>0\).  
De plus, \(u_k+\tfrac{2}{5}<\tfrac{7}{5}+\tfrac{2}{5}=\tfrac{9}{5}\) donc
\[
u_{k+1}=\sqrt{u_k+\tfrac{2}{5}}<\sqrt{\tfrac{9}{5}}=\frac{3}{\sqrt{5}}<\frac{7}{5}
\quad(\text{car } \tfrac{9}{5}<\tfrac{49}{25}).
\]
Ainsi \(0<u_{k+1}<\tfrac{7}{5}\) : \(P(k)\Rightarrow P(k+1)\), la propriété est héréditaire.

**2) Initialisation et condition sur \(u_0\).**  
Pour que \(P(n)\) soit vraie pour **tout** \(n\), il suffit que \(P(0)\) soit vraie (puis hérédité).  
Donc on doit avoir **\(0<u_0<\tfrac{7}{5}\)**.
{{% /details %}}


### Exercice 3

Soit \((u_n)\) la suite définie par \(u_0=-1\) et, pour tout entier naturel \(n\),  
\[
u_{n+1}=0,2u_n+0,6.
\]

Montrer par récurrence que, pour tout entier naturel \(n\), \(u_n \leq 1\).

{{% details title="Solution" closed="true" %}}
**Initialisation.** Pour \(n=0\), \(u_0=-1 \leq 1\) : la propriété est vraie.  

**Hérédité.** Supposons \(u_k \leq 1\). Alors  
\[
u_k \leq 1 \implies 0,2u_k \leq 0,2 \implies 0,2u_k + 0,6 \leq 0,8 \leq 1.
\]  
Donc \(u_{k+1}\leq 1\).  

**Conclusion.** Par récurrence, pour tout \(n\in\mathbb{N}\), \(u_n\leq 1\).
{{% /details %}}

### Exercice 4

On considère la suite \((u_n)\) définie par \(u_0=\tfrac{1}{4}\) et, pour tout entier naturel \(n\),  
\[
u_{n+1}=\frac{3u_n+2}{u_n+2}.
\]

1. Déterminer la fonction \(f\) définie sur \([0;+\infty[\) telle que \(u_{n+1}=f(u_n)\).  
2. Démontrer que la fonction \(f\) est croissante sur \([0;+\infty[\).  
3. Démontrer que, pour tout entier naturel \(n\) :  
   \[
   0 \leq u_n \leq u_{n+1} \leq 2.
   \]
4. Quel est le sens de variation de la suite \((u_n)\) et quel est un majorant de cette suite ?

{{% details title="Solution" closed="true" %}}
1. On pose \(f(x)=\dfrac{3x+2}{x+2}\). Alors \(u_{n+1}=f(u_n)\).  

2. Pour \(x\geq 0\),  
\[
f'(x)=\frac{3(x+2)-(3x+2)}{(x+2)^2}=\frac{4}{(x+2)^2}>0.
\]  
Donc \(f\) est croissante sur \([0;+\infty[\).  

1. On raisonne par récurrence.  
- Initialisation. Pour \(n=0\), \(u_0=\tfrac{1}{4}\) et \(u_1=f(u_0)=\dfrac{3\cdot \tfrac{1}{4}+2}{\tfrac{1}{4}+2}=\dfrac{\tfrac{3}{4}+2}{\tfrac{1}{4}+2}=\dfrac{\tfrac{11}{4}}{\tfrac{9}{4}}=\dfrac{11}{9}\).  
Et \(f(0)=\dfrac{2}{2}=1\) et \(f(2)=\dfrac{6+2}{4}=2\).
Donc \(0 \leq u_0 \leq u_1 \leq 2\). La propriété est vraie au rang 0.
- Hérédité. Supposons que, pour un certain \(k\), \(0 \leq u_k \leq u_{k+1} \leq 2\).  
Alors, comme \(f\) est croissante sur \([0;+\infty[\), on a \(f(u_k) \leq f(u_{k+1})\), c’est-à-dire \(u_{k+1} \leq u_{k+2}\).  
De plus, \(u_{k+1} \leq 2\) donc
\[u_{k+2} = f(u_{k+1}) = \frac{3u_{k+1}+2}{u_{k+1}+2} \leq \frac{3\cdot 2 + 2}{2 + 2} = \frac{8}{4} = 2.\]  
Ainsi, \(0 \leq u_{k+1} \leq u_{k+2} \leq 2\). La propriété est héréditaire.
- Conclusion. Par récurrence, pour tout entier naturel \(n\), \(0 \leq u_n \leq u_{n+1} \leq 2\).

4. La suite \((u_n)\) est croissante (car \(u_n \leq u_{n+1}\)) et majorée par 2.

{{% /details %}}


### Exercice 5

On considère la suite \((u_n)\) définie par \(u_0=1\) et, pour tout entier naturel \(n\),
\[
u_{n+1}=u_n+3^n-7.
\]
On souhaite démontrer qu’une formule explicite pour cette suite est
\[
u_n=\frac{3^n}{2}-7n+\frac12,\quad \forall n\in\mathbb{N}.
\]

1. **Un raisonnement par récurrence.** Démontrer la formule précédente par récurrence.  
2. **Un raisonnement direct.** On considère la suite auxiliaire \((v_n)\) définie par \(v_n=u_{n+1}-u_n\) et la somme \(S_n=v_0+v_1+\cdots+v_{n-1}\).  
   a. Calculer \(S_n\) de deux manières différentes.  
   b. En déduire l’expression de \(u_n\) en fonction de \(n\).

{{% details title="Solution" closed="true" %}}
**1) Récurrence.**  
*Initialisation.* Pour \(n=0\), la formule donne \(\frac{3^0}{2}-7\cdot0+\frac12=1=u_0\).  
*Hérédité.* Supposons \(u_k=\frac{3^k}{2}-7k+\frac12\). Alors
\[
u_{k+1}=u_k+3^k-7=\Big(\frac{3^k}{2}-7k+\frac12\Big)+3^k-7
=\frac{3^{k+1}}{2}-7(k+1)+\frac12.
\]
Donc la formule est vraie pour \(k+1\). Par récurrence, elle est vraie pour tout \(n\).

---

**2) Raisonnement direct.**  
On a \(v_n=u_{n+1}-u_n=3^n-7\).  

a) **Première façon de calculer \(S_n\).**  
Par définition :
\[
S_n=v_0+v_1+\cdots+v_{n-1}=(u_1-u_0)+(u_2-u_1)+\cdots+(u_n-u_{n-1}).
\]
C’est une somme télescopique : tous les termes intermédiaires s’annulent et il reste
\[
S_n=u_n-u_0=u_n-1.
\]

**Deuxième façon.**  
Toujours par définition :
\[
S_n=\sum_{k=0}^{n-1}(3^k-7).
\]
On sépare la somme :
\[
S_n=\sum_{k=0}^{n-1}3^k-\sum_{k=0}^{n-1}7.
\]

- La première somme est une **somme géométrique** de raison 3 :  
\[
\sum_{k=0}^{n-1}3^k=\frac{3^n-1}{3-1}=\frac{3^n-1}{2}.
\]

- La deuxième somme est une somme de termes constants :  
\[
\sum_{k=0}^{n-1}7=7+7+\cdots+7 \quad (n\ \text{fois})=7n.
\]

Ainsi,
\[
S_n=\frac{3^n-1}{2}-7n.
\]

b) On a donc deux expressions de \(S_n\) :  
\[
u_n-1=S_n=\frac{3^n-1}{2}-7n.
\]
En ajoutant 1 des deux côtés :
\[
u_n=\frac{3^n-1}{2}-7n+1=\frac{3^n}{2}-7n+\frac12.
\]

**Conclusion.** L’expression explicite est bien
\[
u_n=\frac{3^n}{2}-7n+\frac12.
\]
{{% /details %}}