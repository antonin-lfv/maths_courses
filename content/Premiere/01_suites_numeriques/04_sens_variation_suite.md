---
title: 'Sens de variation d’une suite'
weight: 4
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**  
> Une suite \((u_n)\) définie sur \(\mathbb{N}\) est :  
> - **croissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \geq u_n\) ;  
> - **décroissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \leq u_n\) ;  
> - **constante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} = u_n\).  

> [!IMPORTANT] **Remarques**  
> - Il arrive que l’inégalité \(u_{n+1} \geq u_n\) ne soit vraie qu’à partir d’un certain entier \(p\) (pour \(n \geq p\)) : on dit alors que \((u_n)\) est croissante à partir du rang \(p\).  
> - Une suite croissante ou décroissante est dite **monotone**.  
> - Pour trouver le sens de variation d’une suite, une méthode courante consiste à étudier le signe de la différence \(u_{n+1} - u_n\) de deux termes consécutifs.  

{{% details title="Exemples" closed="true" %}}  
**a.** La suite des multiples de 5 : \(0, 5, 10, 15, \dots\) est croissante, puisque chaque terme dépasse le précédent.  

**b.** La suite \((v_n)\) définie par \(v_n = (-1)^n\) n’est ni croissante ni décroissante : ses termes valent alternativement 1 (pour \(n\) pair) et \(-1\) (pour \(n\) impair).  
{{% /details %}}

## Cas d’une suite arithmétique de raison \(r\)

> [!TIP] **Propriété**  
> - Si \(r > 0\), la suite est strictement croissante.  
> - Si \(r < 0\), la suite est strictement décroissante.  
> - Si \(r = 0\), la suite est constante.  

## Cas particulier de la suite \((q^n)\)

> [!TIP] **Propriétés**  
> - Si \(q > 1\), la suite \((q^n)\) est croissante.  
> ![](/images/image274.png)
> - Si \(0 < q < 1\), la suite \((q^n)\) est décroissante.  
> ![](/images/image275.png)
> - Si \(q < 0\), la suite \((q^n)\) n’est pas monotone (ses termes changent de signe à chaque rang).  
> ![](/images/image276.png)
> - Si \(q = 0\), la suite \((q^n)\) est constante à partir du rang 1 : \(q^n = 0\) pour \(n \geq 1\).  
> - Si \(q = 1\), la suite \((q^n)\) est constante : \(q^n = 1\).  
> ![](/images/image277.png)

> [!IMPORTANT] **Remarque**  
> Soit \((u_n)\) une suite géométrique de premier terme \(u_0\) et de raison \(q\), donc \(u_n = u_0 q^n\) :  
> - si \(u_0 > 0\), \((u_n)\) a le même sens de variation que \((q^n)\) ;  
> - si \(u_0 < 0\), \((u_n)\) a le sens de variation contraire de celui de \((q^n)\).  

## Déterminer un sens de variation

> [!NOTE] **Exercice résolu**  
> 1. La suite \((u_n)\) est définie, pour tout entier naturel \(n\), par \(u_n = 2n^2 + n\).  
>    Montrer que \((u_n)\) est croissante.  
> 2. La suite \((v_n)\) est définie par  
> \[
\begin{cases}
v_0 = 1 \\
v_{n+1} = v_n - (n+1)^2
\end{cases}
\]
> pour tout entier naturel \(n\).  
>    Montrer que \((v_n)\) est décroissante.

{{% details title="Solution commentée" closed="true" %}}

**1.** Pour tout \(n \in \mathbb{N}\),
\[
u_{n+1} - u_n = 2(n+1)^2 + (n+1) - 2n^2 - n = 2n^2 + 4n + 2 + n + 1 - 2n^2 - n = 4n + 3.
\]
Comme \(n \geq 0\), on a \(4n + 3 > 0\). Ainsi, pour tout \(n \in \mathbb{N}\), \(u_{n+1} - u_n \geq 0\) : la suite \((u_n)\) est croissante.

---

**2.** Pour tout \(n \in \mathbb{N}\), d’après la relation de récurrence,
\[
v_{n+1} - v_n = -(n+1)^2.
\]
Un carré est positif, donc \(-(n+1)^2 \leq 0\). Ainsi, pour tout \(n \in \mathbb{N}\), \(v_{n+1} - v_n \leq 0\) : la suite \((v_n)\) est décroissante.

{{% /details %}}

## Déterminer le sens de variation d’une suite arithmétique et d’une suite géométrique

> [!NOTE] **Exercice résolu**  
> Les suites \((u_n)\) et \((v_n)\) sont définies par :
> \[
\begin{cases}
u_0 = 4 \\
u_{n+1} = u_n + 2
\end{cases}
\qquad \text{et} \qquad
\begin{cases}
v_0 = -3 \\
v_{n+1} = 2 v_n
\end{cases}
\]
> pour tout entier naturel \(n\).  
> Préciser la nature de chaque suite, puis son sens de variation.

{{% details title="Solution commentée" closed="true" %}}

La suite \((u_n)\) est arithmétique de raison 2. Comme \(2 > 0\), la suite \((u_n)\) est croissante.

La suite \((v_n)\) est géométrique de raison 2. Pour tout entier naturel \(n\),
\[
v_n = -3 \times 2^n.
\]
Comme \(2 > 1\), la suite \((2^n)\) est croissante. Le premier terme \(v_0 = -3\) est négatif, donc \((v_n)\) a le sens de variation contraire : la suite \((v_n)\) est décroissante.

{{% /details %}}
