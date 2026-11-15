---
title: "Exercices"
weight: 3
cascade:
  type: docs
---

### Exercice 1

On considère la suite \((w_n)\) définie par \(w_0 = 2\) et, pour tout entier naturel \(n\),  
\[
w_{n+1} = w_n^2 - w_n + 1.
\]

1. Calculer \(w_1\), \(w_2\) et \(w_3\).  
2. Exprimer \(w_{n+2}\) en fonction de \(w_{n+1}\).  
3. Exprimer \(w_n\) en fonction de \(w_{n-1}\), pour \(n \geq 1\).  
4. À l’aide de la calculatrice, déterminer \(w_4\).  
5. Donner une fonction \(f\) définie sur \(\mathbb{R}\) telle que, pour tout entier naturel \(n\), \(w_{n+1} = f(w_n)\).

{{% details title="Solution" closed="true" %}}
1. \(w_1 = 2^2 - 2 + 1 = 3\).  
\(w_2 = 3^2 - 3 + 1 = 7\).  
\(w_3 = 7^2 - 7 + 1 = 43\).  

2. On applique la relation de récurrence en remplaçant \(n\) par \(n+1\) : \(w_{n+2} = w_{n+1}^2 - w_{n+1} + 1\).

3. On remplace \(n\) par \(n-1\) : \(w_n = w_{n-1}^2 - w_{n-1} + 1\).

4. \(w_4 = 43^2 - 43 + 1 = 1\,849 - 43 + 1 = 1\,807\).

5. On pose \(f(x) = x^2 - x + 1\) pour tout réel \(x\). Alors, pour tout \(n\), \(w_{n+1} = f(w_n)\).
{{% /details %}}

### Exercice 2

La suite \((u_n)\) est définie par son premier terme \(u_0 \geq 0\) et, pour tout entier naturel \(n\) :
\[
u_{n+1} = \sqrt{2u_n + 3}.
\]

1. Démontrer que la propriété \(P(n)\) : « \(0 < u_n < 3\) » est **héréditaire**.  
2. À quelle condition sur \(u_0\) la propriété \(P(n)\) est-elle vraie pour tout entier naturel \(n\) ?

{{% details title="Solution" closed="true" %}}
**1) Hérédité.** Soit \(k\) un entier naturel ; on suppose \(P(k)\) vraie : \(0 < u_k < 3\).  
En multipliant par 2 puis en ajoutant 3 : \(3 < 2u_k + 3 < 9\).  
La fonction racine carrée est strictement croissante sur \([0 ; +\infty[\), donc :
\[
\sqrt{3} < \sqrt{2u_k + 3} < \sqrt{9}, \quad \text{soit} \quad \sqrt{3} < u_{k+1} < 3.
\]
Comme \(\sqrt{3} > 0\), on a bien \(0 < u_{k+1} < 3\) : \(P(k+1)\) est vraie. La propriété est héréditaire.

**2) Condition sur \(u_0\).**  
La propriété étant héréditaire, elle est vraie pour tout \(n\) dès qu’elle est initialisée, c’est-à-dire dès que \(P(0)\) est vraie.  
Il suffit donc que **\(0 < u_0 < 3\)**. (Réciproquement, si \(P(n)\) est vraie pour tout \(n\), elle l’est en particulier pour \(n = 0\) : la condition est nécessaire.)
{{% /details %}}

### Exercice 3

On considère la suite \((u_n)\) définie par \(u_0 = 4\) et, pour tout entier naturel \(n\),  
\[
u_{n+1} = 0{,}5u_n + 1.
\]

Démontrer par récurrence que, pour tout entier naturel \(n\), \(u_n \geq 2\).

{{% details title="Solution" closed="true" %}}
On note \(P(n)\) la propriété : « \(u_n \geq 2\) ».

- **Initialisation.** \(u_0 = 4 \geq 2\) : \(P(0)\) est vraie.  

- **Hérédité.** Soit \(k\) un entier naturel ; on suppose \(u_k \geq 2\). Alors  
\[
u_k \geq 2 \implies 0{,}5u_k \geq 1 \implies 0{,}5u_k + 1 \geq 2,
\]  
c’est-à-dire \(u_{k+1} \geq 2\) : \(P(k+1)\) est vraie.  

- **Conclusion.** D’après le principe de récurrence, \(u_n \geq 2\) pour tout \(n \in \mathbb{N}\).
{{% /details %}}

### Exercice 4

On considère la suite \((u_n)\) définie par \(u_0 = \tfrac{1}{2}\) et, pour tout entier naturel \(n\),  
\[
u_{n+1} = \frac{4u_n + 3}{u_n + 2}.
\]

1. Donner la fonction \(f\) définie sur \([0;+\infty[\) telle que \(u_{n+1} = f(u_n)\).  
2. Démontrer que \(f\) est croissante sur \([0;+\infty[\).  
3. Démontrer par récurrence que, pour tout entier naturel \(n\) :  
   \[
   0 \leq u_n \leq u_{n+1} \leq 3.
   \]
4. En déduire le sens de variation de \((u_n)\), ainsi qu’un majorant de cette suite.

{{% details title="Solution" closed="true" %}}
1. On pose \(f(x) = \dfrac{4x + 3}{x + 2}\) pour \(x \geq 0\) ; on a bien \(u_{n+1} = f(u_n)\).  

2. \(f\) est un quotient de fonctions dérivables, le dénominateur ne s’annulant pas sur \([0;+\infty[\). Pour \(x \geq 0\) :  
\[
f'(x) = \frac{4(x+2) - (4x+3) \times 1}{(x+2)^2} = \frac{5}{(x+2)^2} > 0.
\]  
Donc \(f\) est croissante sur \([0;+\infty[\).  

3. On note \(P(n)\) la propriété : « \(0 \leq u_n \leq u_{n+1} \leq 3\) ».
- **Initialisation.** \(u_0 = \tfrac{1}{2}\) et \(u_1 = f\left(\tfrac12\right) = \dfrac{2 + 3}{\tfrac12 + 2} = \dfrac{5}{\tfrac52} = 2\).  
On a bien \(0 \leq \tfrac12 \leq 2 \leq 3\) : \(P(0)\) est vraie.
- **Hérédité.** Soit \(k\) un entier naturel ; on suppose \(0 \leq u_k \leq u_{k+1} \leq 3\).  
Comme \(f\) est croissante sur \([0;+\infty[\), elle conserve l’ordre :  
\[
f(0) \leq f(u_k) \leq f(u_{k+1}) \leq f(3).
\]
Or \(f(0) = \dfrac{3}{2} \geq 0\), \(f(u_k) = u_{k+1}\), \(f(u_{k+1}) = u_{k+2}\) et \(f(3) = \dfrac{15}{5} = 3\). D’où :
\[
0 \leq u_{k+1} \leq u_{k+2} \leq 3.
\]
\(P(k+1)\) est vraie : la propriété est héréditaire.
- **Conclusion.** D’après le principe de récurrence, \(0 \leq u_n \leq u_{n+1} \leq 3\) pour tout entier naturel \(n\).

4. Pour tout \(n\), \(u_n \leq u_{n+1}\) : la suite \((u_n)\) est **croissante**. Elle est **majorée par 3**.
{{% /details %}}

### Exercice 5

On considère la suite \((u_n)\) définie par \(u_0 = 2\) et, pour tout entier naturel \(n\),
\[
u_{n+1} = u_n + 2^n + 3.
\]
On veut démontrer que, pour tout entier naturel \(n\),
\[
u_n = 2^n + 3n + 1.
\]

1. **Par récurrence.** Démontrer cette formule par récurrence.  
2. **Par un calcul direct.** On pose, pour tout \(n\), \(v_n = u_{n+1} - u_n\), et pour \(n \geq 1\), \(S_n = v_0 + v_1 + \cdots + v_{n-1}\).  
   a. Calculer \(S_n\) de deux façons différentes.  
   b. En déduire l’expression de \(u_n\) en fonction de \(n\).

{{% details title="Solution" closed="true" %}}
**1) Récurrence.** On note \(P(n)\) : « \(u_n = 2^n + 3n + 1\) ».  
*Initialisation.* Pour \(n = 0\) : \(2^0 + 0 + 1 = 2 = u_0\). \(P(0)\) est vraie.  
*Hérédité.* Soit \(k\) un entier naturel ; on suppose \(u_k = 2^k + 3k + 1\). Alors
\[
u_{k+1} = u_k + 2^k + 3 = (2^k + 3k + 1) + 2^k + 3 = 2 \times 2^k + 3k + 3 + 1 = 2^{k+1} + 3(k+1) + 1.
\]
\(P(k+1)\) est vraie.  
*Conclusion.* D’après le principe de récurrence, la formule est vraie pour tout entier naturel \(n\).

---

**2) Calcul direct.**  
D’après la relation de récurrence, \(v_n = u_{n+1} - u_n = 2^n + 3\).  

a) **Première façon.** Par définition :
\[
S_n = (u_1 - u_0) + (u_2 - u_1) + \cdots + (u_n - u_{n-1}).
\]
Les termes intermédiaires se simplifient deux à deux (somme « télescopique ») ; il reste :
\[
S_n = u_n - u_0 = u_n - 2.
\]

**Deuxième façon.** On remplace \(v_k\) par son expression :
\[
S_n = \sum_{k=0}^{n-1}(2^k + 3) = \sum_{k=0}^{n-1}2^k + \sum_{k=0}^{n-1}3.
\]

- La première somme est la somme des \(n\) premières puissances de 2 (somme géométrique de raison 2) :  
\[
\sum_{k=0}^{n-1}2^k = \frac{1 - 2^n}{1 - 2} = 2^n - 1.
\]

- La seconde est une somme de \(n\) termes égaux à 3 :  
\[
\sum_{k=0}^{n-1}3 = 3n.
\]

Ainsi,
\[
S_n = 2^n - 1 + 3n.
\]

b) En égalant les deux expressions de \(S_n\) :  
\[
u_n - 2 = 2^n - 1 + 3n, \quad \text{d’où} \quad u_n = 2^n + 3n + 1.
\]
On retrouve la formule annoncée (elle est aussi vraie pour \(n = 0\)).
{{% /details %}}
