---
title: 'Exercices'
weight: 6
cascade:
  type: docs
---

### Exercice 1

La suite \((t_n)\) est définie par \({t_0 = 2}\), et chaque terme s’obtient en **retranchant 4 au carré** du terme précédent.

1. Calculer \(t_1, t_2, t_3\).  
2. Écrire la relation liant \({t_{n+1}}\) et \(t_n\).

{{% details title="Solution" closed="true" %}}
1. \({t_1 = 2^2 - 4 = 0}\), \({t_2 = 0^2 - 4 = -4}\), \({t_3 = (-4)^2 - 4 = 12}\).  
2. Pour tout entier naturel \(n\), \({\boxed{\,t_{n+1} = t_n^2 - 4\,}}\).
{{% /details %}}

### Exercice 2

Suites arithmétiques : on donne un terme et la raison \(r\).  
Exprimer \(u_n\) en fonction de \(n\), puis calculer \(u_{10}\).

- \({u_0 = 7}\), \({r = -2}\)
- \({u_0 = -4}\), \({r = \dfrac13}\)
- \({u_0 = 1}\), \({r = -\dfrac32}\)
- \({u_2 = 5}\), \({r = 4}\)

{{% details title="Solution" closed="true" %}}
On utilise \({u_n = u_0 + nr}\) ou, si un autre terme \(u_p\) est donné, \({u_n = u_p + (n-p)r}\).

- \({u_n = 7 - 2n}\) ⇒ \({u_{10} = 7 - 20 = -13}\).  
- \({u_n = -4 + \dfrac{n}{3}}\) ⇒ \({u_{10} = -4 + \dfrac{10}{3} = -\dfrac{2}{3}}\).  
- \({u_n = 1 - \dfrac{3}{2}n}\) ⇒ \({u_{10} = 1 - 15 = -14}\).  
- \({u_n = 5 + 4(n-2) = 4n - 3}\) ⇒ \({u_{10} = 37}\).
{{% /details %}}

### Exercice 3

Suites géométriques : on donne un terme et la raison \(q\).  
Exprimer \(u_n\) en fonction de \(n\), puis calculer \(u_4\).

- \({u_0 = 5}\), \({q = 3}\)
- \({u_0 = 48}\), \({q = \dfrac12}\)
- \({u_0 = 3}\), \({q = -2}\)
- \({u_1 = 4}\), \({q = 5}\)

{{% details title="Solution" closed="true" %}}
On utilise \({u_n = u_0\,q^n}\) ou, si \(u_1\) est donné, \({u_n = u_1\,q^{\,n-1}}\).

- \({u_n = 5 \times 3^n}\) ⇒ \({u_4 = 5 \times 81 = 405}\).  
- \({u_n = 48 \left(\dfrac12\right)^n}\) ⇒ \({u_4 = \dfrac{48}{16} = 3}\).  
- \({u_n = 3 \times (-2)^n}\) ⇒ \({u_4 = 3 \times 16 = 48}\).  
- \({u_n = 4 \times 5^{\,n-1}}\) ⇒ \({u_4 = 4 \times 125 = 500}\).
{{% /details %}}

### Exercice 4

Calculer les sommes suivantes, dont les termes sont ceux d’une suite arithmétique :  
- \({5 + 9 + 13 + \cdots + 85}\)
- \({30 + 33 + 36 + \cdots + 300}\)

{{% details title="Solution" closed="true" %}}
La somme de \(k\) termes consécutifs d’une suite arithmétique vaut \(S = \dfrac{k \times (\text{premier terme} + \text{dernier terme})}{2}\). Il faut d’abord compter les termes.

- Premier terme 5, raison 4, dernier terme 85.  
\(5 + 4(k-1) = 85 \Rightarrow k - 1 = 20 \Rightarrow k = 21\) termes.  
\({S = \dfrac{21 \times (5 + 85)}{2} = \dfrac{21 \times 90}{2} = 945}\).

- Premier terme 30, raison 3, dernier terme 300.  
\(30 + 3(k-1) = 300 \Rightarrow k - 1 = 90 \Rightarrow k = 91\) termes.  
\(S = \dfrac{91 \times (30 + 300)}{2} = \dfrac{91 \times 330}{2} = 15\,015\).
{{% /details %}}

### Exercice 5

Étudier le sens de variation de la suite définie pour tout \({n \in \mathbb{N}}\) par \({u_n = n^2 - 10n + 1}\).

{{% details title="Solution" closed="true" %}}
On étudie le signe de la différence de deux termes consécutifs :  
\[
\begin{aligned}
u_{n+1} - u_n &= (n+1)^2 - 10(n+1) + 1 - (n^2 - 10n + 1) \\[0.3em]
&= 2n + 1 - 10 = 2n - 9.
\end{aligned}
\]
- Pour \({n \in \{0, 1, 2, 3, 4\}}\), \({2n - 9 < 0}\) : \({u_0 > u_1 > u_2 > u_3 > u_4 > u_5}\).  
- Pour \({n \geq 5}\), \({2n - 9 > 0}\) : \({u_{n+1} > u_n}\).  

La suite \((u_n)\) décroît jusqu’au rang 5, puis elle est **croissante à partir du rang 5**. Son plus petit terme est \({u_5 = 25 - 50 + 1 = -24}\).
{{% /details %}}

### Exercice 6

On définit \({u_0 = 1}\) et, pour tout \({n \in \mathbb{N}}\), \({\displaystyle u_{n+1} = \dfrac{u_n}{2u_n + 1}}\) (on admet que \({u_n > 0}\) pour tout \(n\)).  
On pose, pour tout \({n \in \mathbb{N}}\), \({v_n = \dfrac{1}{u_n}}\).

1. Calculer \(u_1, u_2, u_3\), puis \(v_1, v_2, v_3\).  
2. Démontrer que \((v_n)\) est arithmétique, et préciser son premier terme et sa raison.  
3. En déduire l’expression de \(v_n\), puis celle de \(u_n\), en fonction de \(n\).

{{% details title="Solution" closed="true" %}}
1. \({u_1 = \dfrac{1}{2 + 1} = \dfrac13}\), \({u_2 = \dfrac{1/3}{2/3 + 1} = \dfrac{1/3}{5/3} = \dfrac15}\), \({u_3 = \dfrac{1/5}{2/5 + 1} = \dfrac{1/5}{7/5} = \dfrac17}\).  
D’où \({v_1 = 3}\), \({v_2 = 5}\), \({v_3 = 7}\).

2. Pour tout \({n \in \mathbb{N}}\) :
\[
v_{n+1} = \dfrac{1}{u_{n+1}} = \dfrac{2u_n + 1}{u_n} = 2 + \dfrac{1}{u_n} = v_n + 2.
\]
La suite \((v_n)\) est donc **arithmétique** de raison \({r = 2}\) et de premier terme \({v_0 = \dfrac{1}{u_0} = 1}\).

3. \({v_n = v_0 + nr = 1 + 2n}\).  
Comme \({u_n = \dfrac{1}{v_n}}\) : \({\displaystyle \boxed{u_n = \dfrac{1}{2n + 1}}.}\)
{{% /details %}}
