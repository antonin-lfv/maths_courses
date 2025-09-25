---
title: 'Sens de variation d’une suite'
weight: 4
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> On dit qu’une suite \((u_n)\) définie sur \(\mathbb{N}\) est :  
> - **croissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \geq u_n\) ;  
> - **décroissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \leq u_n\) ;  
> - **constante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} = u_n\).  

> [!IMPORTANT] **Remarques**  
> - Pour certaines suites, l’inégalité \(u_{n+1} \geq u_n\) n’est vraie que pour \(n \geq p\) ; on dit que \((u_n)\) est croissante à partir du rang \(p\).  
> - Lorsqu’une suite est croissante ou décroissante, on dit qu’elle est monotone.  
> - Pour étudier le sens de variation d’une suite, on pourra étudier le signe de la différence de deux termes consécutifs \(u_{n+1} - u_n\).  

{{% details title="Exemples" closed="true" %}}  
**a.** \(0, 2, 4, 6, \dots\) la suite des entiers naturels pairs est une suite croissante, chaque terme est supérieur au précédent.  

**b.** La suite \((v_n)\) définie par \(v_n = (-1)^n\) n’est ni croissante ni décroissante. En effet, ses termes d’indices pairs sont égaux à 1 et ses termes d’indices impairs sont égaux à \(-1\).  
{{% /details %}}


## Cas d’une suite arithmétique de raison \(r\)

> [!TIP] **Propriété**  
> - Si \(r > 0\) alors la suite est strictement croissante.  
> - Si \(r < 0\) alors la suite est strictement décroissante.  
> - Si \(r = 0\) alors la suite est constante.  


## Cas particulier de la suite \((q^n)\)

> [!TIP] **Propriétés**  
> - Si \(q > 1\) alors la suite \((q^n)\) est croissante.  
> ![](/images/image9.png)
> - Si \(0 < q < 1\) alors la suite \((q^n)\) est décroissante.  
> ![](/images/image10.png)
> - Si \(q < 0\) alors la suite \((q^n)\) n’est pas monotone.  
> ![](/images/image11.png)
> - Si \(q = 0\), alors la suite \((q^n)\) est constante, \(q^n = 0\) à partir du rang 1.  
> - Si \(q = 1\), alors la suite \((q^n)\) est constante, \(q^n = 1\).  
> ![](/images/image12.png)

> [!IMPORTANT] **Remarque**  
> Pour une suite géométrique \((u_n)\) de premier terme \(u_0\) et de raison \(q\) :  
> - si \(u_0\) est positif, la suite \((u_n)\) a le même sens de variation que la suite \((q^n)\) ;  
> - si \(u_0\) est négatif, la suite \((u_n)\) a le sens de variation contraire de celui de la suite \((q^n)\).  


## Déterminer un sens de variation

> [!NOTE] **Exercice résolu**  
> 1. La suite \((u_n)\) est définie, pour tout entier naturel \(n\), par \(u_n = n^2 + 3n\).  
>    Montrer que \((u_n)\) est croissante.  
> 2. La suite \((v_n)\) est définie, par  
> \[
\begin{cases}
v_0 = 3 \\
v_{n+1} = v_n - n^2
\end{cases}
\]
> pour tout entier naturel \(n\).  
>    Montrer que \((v_n)\) est décroissante.

{{% details title="Solution commentée" closed="true" %}}

**1.** Pour tout \(n \in \mathbb{N}\),
\[
u_{n+1} - u_n = (n+1)^2 + 3(n+1) - n^2 - 3n = 2n + 4 \ge 0.
\]
On en déduit que pour tout \(n \in \mathbb{N}\), \(u_{n+1} - u_n \ge 0\), donc la suite \((u_n)\) est croissante.

---

**2.** Pour tout \(n \in \mathbb{N}\),
\[
v_{n+1} - v_n = -n^2 \le 0.
\]
On en déduit que pour tout \(n \in \mathbb{N}\), \(v_{n+1} - v_n \le 0\), donc la suite \((v_n)\) est décroissante.

{{% /details %}}


## Déterminer le sens de variation d’une suite arithmétique et d’une suite géométrique

> [!NOTE] **Exercice résolu**  
> Les suites \((u_n)\) et \((v_n)\) sont définies par :
> \[
\begin{cases}
u_0 = -1 \\
u_{n+1} = u_n - 5
\end{cases}
\qquad \text{et} \qquad
\begin{cases}
v_0 = -2 \\
v_{n+1} = \tfrac{1}{3} v_n
\end{cases}
\]
> pour tout entier naturel \(n\).  
> Déterminer la nature de chaque suite, puis déterminer son sens de variation.

{{% details title="Solution commentée" closed="true" %}}

La suite \((u_n)\) est arithmétique de raison \(-5\). Or \(-5\) est négatif, donc \((u_n)\) est décroissante.

La suite \((v_n)\) est géométrique de raison \(\tfrac{1}{3}\). Pour tout entier naturel \(n\),
\[
v_n = -2 \times \left(\tfrac{1}{3}\right)^n.
\]
Or \(0 < \tfrac{1}{3} < 1\) donc \(\left(\tfrac{1}{3}\right)^n\) est décroissante. Comme \(v_0\) est négatif, la suite \((v_n)\) est croissante.

{{% /details %}}