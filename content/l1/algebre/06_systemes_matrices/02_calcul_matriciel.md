---
title: 'Calcul matriciel'
weight: 2
cascade:
  type: docs
---

## Matrices

> [!TIP] **Définition**
>
> Une **matrice** à \(n\) lignes et \(p\) colonnes à coefficients dans \(\mathbb{K}\) est un tableau \({A = (a_{ij})_{1 \leq i \leq n,\ 1 \leq j \leq p}}\), où \(a_{ij}\) est le coefficient de la ligne \(i\) et de la colonne \(j\). Leur ensemble est noté \(\mathcal{M}_{n,p}(\mathbb{K})\), et \(\mathcal{M}_n(\mathbb{K})\) quand \({n = p}\) (matrices **carrées**).
>
> - Une matrice **colonne** a une seule colonne (\({p = 1}\)), une matrice **ligne** une seule ligne.
> - Une matrice carrée est **diagonale** si \({a_{ij} = 0}\) pour \({i \neq j}\), **triangulaire supérieure** si \({a_{ij} = 0}\) pour \({i > j}\), triangulaire inférieure si \({a_{ij} = 0}\) pour \({i < j}\).
> - La **matrice identité** \(I_n\) est la matrice diagonale dont les coefficients diagonaux valent \(1\).

## Opérations

> [!TIP] **Définition**
>
> - **Somme** : si \(A\) et \(B\) sont de même taille, \({(A + B)_{ij} = a_{ij} + b_{ij}}\).
> - **Produit par un scalaire** : \({(\lambda A)_{ij} = \lambda a_{ij}}\).
> - **Produit** : si \({A \in \mathcal{M}_{n,p}(\mathbb{K})}\) et \({B \in \mathcal{M}_{p,q}(\mathbb{K})}\), le produit \({AB \in \mathcal{M}_{n,q}(\mathbb{K})}\) est défini par
>
> \[ (AB)_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}. \]
>
> Le produit \(AB\) n’existe que si le nombre de colonnes de \(A\) est égal au nombre de lignes de \(B\).

{{% details title="Exemple" closed="true" %}}
\[
\begin{pmatrix} 1 & 2 & 0 \\ -1 & 3 & 4 \end{pmatrix}
\begin{pmatrix} 2 & 1 \\ 0 & -1 \\ 5 & 3 \end{pmatrix}
= \begin{pmatrix} 2 + 0 + 0 & 1 - 2 + 0 \\ -2 + 0 + 20 & -1 - 3 + 12 \end{pmatrix}
= \begin{pmatrix} 2 & -1 \\ 18 & 8 \end{pmatrix}.
\]
{{% /details %}}

> [!TIP] **Propriétés**
>
> Lorsque les produits ont un sens :
> - \({(AB)C = A(BC)}\) (associativité) ;
> - \({A(B + C) = AB + AC}\) et \({(A + B)C = AC + BC}\) ;
> - \({(\lambda A)B = A(\lambda B) = \lambda(AB)}\) ;
> - \({I_n A = A = A I_p}\) pour \({A \in \mathcal{M}_{n,p}(\mathbb{K})}\).

> [!IMPORTANT] **Remarques - Ce qui change par rapport aux nombres**
>
> - Le produit n’est **pas commutatif** : en général \({AB \neq BA}\).
> - Un produit peut être nul sans qu’aucun facteur le soit : \({\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}^2 = 0}\).
> - On ne peut donc pas simplifier : \({AB = AC}\) n’entraîne pas \({B = C}\) (sauf si \(A\) est inversible).
> - Les identités remarquables demandent que les matrices **commutent** : en général, \({(A + B)^2 = A^2 + AB + BA + B^2}\).

> [!TIP] **Propriété - Formule du binôme**
>
> Si \(A\) et \(B\) sont deux matrices carrées qui **commutent** (\({AB = BA}\)), alors pour tout entier naturel \(n\) :
>
> \[ (A + B)^n = \sum_{k=0}^{n} \binom{n}{k} A^k B^{n-k}. \]

> [!TIP] **Écriture matricielle d’un système**
>
> Le système linéaire de coefficients \(a_{ij}\) et de seconds membres \(b_i\) s’écrit \({AX = B}\), avec \({A = (a_{ij})}\), \(X\) la colonne des inconnues et \(B\) la colonne des seconds membres.

## Transposée

> [!TIP] **Définition et propriétés**
>
> La **transposée** de \({A \in \mathcal{M}_{n,p}(\mathbb{K})}\) est la matrice \({A^T \in \mathcal{M}_{p,n}(\mathbb{K})}\) définie par \({(A^T)_{ij} = a_{ji}}\) : ses lignes sont les colonnes de \(A\).
> - \({(A + B)^T = A^T + B^T}\), \({(\lambda A)^T = \lambda A^T}\), \({(A^T)^T = A}\).
> - \({(AB)^T = B^T A^T}\).
>
> Une matrice carrée est **symétrique** si \({A^T = A}\), **antisymétrique** si \({A^T = -A}\).

## Matrices inversibles

> [!TIP] **Définition**
>
> Une matrice carrée \({A \in \mathcal{M}_n(\mathbb{K})}\) est **inversible** s’il existe \({B \in \mathcal{M}_n(\mathbb{K})}\) telle que \({AB = BA = I_n}\). La matrice \(B\) est alors unique : c’est l’**inverse** de \(A\), notée \(A^{-1}\). L’ensemble des matrices inversibles de taille \(n\) est noté \(\mathrm{GL}_n(\mathbb{K})\).

> [!TIP] **Propriétés**
>
> Si \(A\) et \(B\) sont inversibles de même taille :
> - \(A^{-1}\) est inversible et \({(A^{-1})^{-1} = A}\) ;
> - \(AB\) est inversible et \({(AB)^{-1} = B^{-1}A^{-1}}\) ;
> - \(A^T\) est inversible et \({(A^T)^{-1} = (A^{-1})^T}\).

> [!TIP] **Théorème**
>
> Pour \({A \in \mathcal{M}_n(\mathbb{K})}\), les propriétés suivantes sont équivalentes :
> - \(A\) est inversible ;
> - pour toute colonne \(Y\), le système \({AX = Y}\) a une unique solution (qui est alors \({X = A^{-1}Y}\)) ;
> - le système homogène \({AX = 0}\) n’a que la solution nulle ;
> - le système \({AX = Y}\) est de rang \(n\).
>
> De plus, il suffit que \({AB = I_n}\) (ou que \({BA = I_n}\)) pour que \(A\) soit inversible d’inverse \(B\).

> [!TIP] **Propriété - Cas des matrices \(2 \times 2\)**
>
> La matrice \({A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}}\) est inversible si et seulement si \({ad - bc \neq 0}\), et alors
>
> \[ A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}. \]

> [!TIP] **Propriété - Matrices triangulaires**
>
> Une matrice triangulaire (en particulier diagonale) est inversible si et seulement si tous ses coefficients diagonaux sont non nuls.

> [!NOTE] **Méthode - Calculer un inverse**
>
> - **Par un système** : on résout \({AX = Y}\) avec \(Y\) quelconque. Si la solution est unique, on l’écrit \({X = BY}\) et \({A^{-1} = B}\).
> - **Par le pivot de Gauss** : on écrit côte à côte \(A\) et \(I_n\), et on applique aux deux matrices les mêmes opérations élémentaires sur les lignes jusqu’à transformer \(A\) en \(I_n\). La matrice de droite est alors \(A^{-1}\). Si une ligne nulle apparaît à gauche, \(A\) n’est pas inversible.
> - **Par un polynôme annulateur** : si \({A^2 + aA + bI_n = 0}\) avec \({b \neq 0}\), alors \({A\left(-\dfrac{1}{b}(A + aI_n)\right) = I_n}\).

{{% details title="Exemple" closed="true" %}}
Inversons \({A = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}}\) par le pivot.

\[
\left(\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 3 & 7 & 0 & 1 \end{array}\right)
\xrightarrow{L_2 \leftarrow L_2 - 3L_1}
\left(\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & -3 & 1 \end{array}\right)
\xrightarrow{L_1 \leftarrow L_1 - 2L_2}
\left(\begin{array}{cc|cc} 1 & 0 & 7 & -2 \\ 0 & 1 & -3 & 1 \end{array}\right)
\]

Donc \({A^{-1} = \begin{pmatrix} 7 & -2 \\ -3 & 1 \end{pmatrix}}\), ce que confirme la formule : \({ad - bc = 7 - 6 = 1}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Puissances et inverse**
>
> Soit \({A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}}\).
>
> 1. Calculer \(A^n\) pour tout entier naturel \(n\).
> 2. Montrer que \(A\) est inversible et calculer \(A^{-1}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** On écrit \({A = 2I_3 + N}\) avec \({N = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}}\). On calcule

\[
N^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \qquad \text{et} \qquad N^3 = 0.
\]

Les matrices \(2I_3\) et \(N\) commutent, donc la formule du binôme s’applique, et seuls les termes \({k = 0, 1, 2}\) sont non nuls. Pour \({n \geq 2}\) :

\[
A^n = 2^n I_3 + n2^{n-1}N + \dfrac{n(n-1)}{2}2^{n-2}N^2
= \begin{pmatrix} 2^n & n2^{n-1} & n2^{n-1} + n(n-1)2^{n-3} \\ 0 & 2^n & n2^{n-1} \\ 0 & 0 & 2^n \end{pmatrix}.
\]

La formule reste vraie pour \({n = 0}\) et \({n = 1}\). Vérification pour \({n = 2}\) : le coefficient en haut à droite vaut \({4 + 1 = 5}\), et le calcul direct de \(A^2\) donne \({2 \times 1 + 1 \times 1 + 1 \times 2 = 5}\).

**2.** \(A\) est triangulaire à coefficients diagonaux non nuls, donc inversible. On cherche l’inverse sous la forme \({\dfrac{1}{2}I_3 + aN + bN^2}\) :

\[
(2I_3 + N)\left(\dfrac{1}{2}I_3 + aN + bN^2\right) = I_3 + \left(2a + \dfrac{1}{2}\right)N + (2b + a)N^2.
\]

On choisit \({a = -\dfrac{1}{4}}\) et \({b = \dfrac{1}{8}}\). Donc

\[
A^{-1} = \dfrac{1}{2}I_3 - \dfrac{1}{4}N + \dfrac{1}{8}N^2 = \begin{pmatrix} \dfrac{1}{2} & -\dfrac{1}{4} & -\dfrac{1}{8} \\[0.6em] 0 & \dfrac{1}{2} & -\dfrac{1}{4} \\[0.6em] 0 & 0 & \dfrac{1}{2} \end{pmatrix}.
\]
{{% /details %}}
