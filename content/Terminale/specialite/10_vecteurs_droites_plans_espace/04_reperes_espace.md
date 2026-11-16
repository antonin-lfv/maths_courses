---
title: "Repères de l'espace"
weight: 4
cascade:
  type: docs
---

## Bases de l’espace et coordonnées

> [!TIP] **Définitions**
>
> - Une **base de l’espace** est un triplet \((\vec{\imath}, \vec{\jmath}, \vec{k})\) de vecteurs **non coplanaires**.
> - Un **repère de l’espace** est formé d’un point \(O\), l’origine, et d’une base \((\vec{\imath}, \vec{\jmath}, \vec{k})\) ; on le note \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\).

> [!TIP] **Propriété et définition**
>
> Soit \((\vec{\imath}, \vec{\jmath}, \vec{k})\) une base de l’espace. Pour tout vecteur \(\vec{u}\), il existe un **unique** triplet de réels \((x\,;\,y\,;\,z)\) tel que
> \[
\vec{u} = x\vec{\imath} + y\vec{\jmath} + z\vec{k}.
\]
> Ce triplet est appelé **coordonnées** du vecteur \(\vec{u}\) dans la base \((\vec{\imath}, \vec{\jmath}, \vec{k})\), et l’on note \(\vec{u}\begin{pmatrix} x \\ y \\ z \end{pmatrix}\).

> [!TIP] **Propriété**
>
> Soient \(\vec{u}\begin{pmatrix} x \\ y \\ z \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix}\) deux vecteurs, et \(\alpha\) un réel. Alors
> \[
\vec{u} + \vec{v}\begin{pmatrix} x + x' \\ y + y' \\ z + z' \end{pmatrix} \quad \text{et} \quad \alpha\vec{u}\begin{pmatrix} \alpha x \\ \alpha y \\ \alpha z \end{pmatrix}.
\]

> [!TIP] **Définitions**
>
> Soit \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\) un repère de l’espace et \(M\) un point. Les **coordonnées du point \(M\)** sont les coordonnées \((x\,;\,y\,;\,z)\) du vecteur \(\overrightarrow{OM}\), c’est-à-dire telles que \(\overrightarrow{OM} = x\vec{\imath} + y\vec{\jmath} + z\vec{k}\). On note \(M(x\,;\,y\,;\,z)\).
> Le réel \(x\) est l’**abscisse**, \(y\) l’**ordonnée** et \(z\) la **cote** du point \(M\).

![](/images/image311.png)

{{% details title="Exemple" closed="true" %}}
On munit le cube \(ABCDEFGH\) du repère \((A\,;\,\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})\). Comme \(\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}\), on a \(G(1\,;\,1\,;\,1)\). De même \(C(1\,;\,1\,;\,0)\), \(F(1\,;\,0\,;\,1)\) et le centre de la face \(EFGH\) a pour coordonnées \(\left(\frac{1}{2}\,;\,\frac{1}{2}\,;\,1\right)\).
{{% /details %}}

## Calcul de coordonnées

> [!TIP] **Propriétés**
>
> Soit \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\) un repère de l’espace, et \(A(x_A\,;\,y_A\,;\,z_A)\), \(B(x_B\,;\,y_B\,;\,z_B)\) deux points.
> - Les coordonnées du vecteur \(\overrightarrow{AB}\) sont \(\begin{pmatrix} x_B - x_A \\ y_B - y_A \\ z_B - z_A \end{pmatrix}\).
> - Les coordonnées du milieu \(I\) de \([AB]\) sont \(\left(\dfrac{x_A + x_B}{2}\,;\,\dfrac{y_A + y_B}{2}\,;\,\dfrac{z_A + z_B}{2}\right)\).
> - Deux vecteurs sont colinéaires si et seulement si leurs coordonnées sont **proportionnelles**.

{{% details title="Exemple" closed="true" %}}
Les vecteurs \(\vec{u}\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}\) et \(\vec{v}\begin{pmatrix} -6 \\ 3 \\ -9 \end{pmatrix}\) sont colinéaires, car \(\vec{v} = -3\vec{u}\). En revanche, \(\vec{w}\begin{pmatrix} 4 \\ -2 \\ 5 \end{pmatrix}\) n’est pas colinéaire à \(\vec{u}\) : il faudrait \(k = 2\) d’après les deux premières coordonnées, mais \(2 \times 3 \neq 5\).
{{% /details %}}

## Démontrer des propriétés dans l’espace repéré

> [!NOTE] **Méthode 4 — Utiliser les coordonnées**
>
> Dans un repère de l’espace, on considère les points \(A(1\,;\,2\,;\,-1)\), \(B(3\,;\,-1\,;\,2)\), \(C(0\,;\,4\,;\,1)\), \(D(2\,;\,1\,;\,4)\) et \(E(2\,;\,0\,;\,1)\).
> 1. Les points \(A\), \(B\), \(C\) sont-ils alignés ?
> 2. Calculer les coordonnées du milieu \(I\) de \([AB]\).
> 3. Les points \(A\), \(B\), \(C\), \(D\) sont-ils coplanaires ? Et les points \(A\), \(B\), \(C\), \(E\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\overrightarrow{AB}\begin{pmatrix} 2 \\ -3 \\ 3 \end{pmatrix}\) et \(\overrightarrow{AC}\begin{pmatrix} -1 \\ 2 \\ 2 \end{pmatrix}\). S’il existait \(k\) tel que \(\overrightarrow{AC} = k\overrightarrow{AB}\), la première coordonnée donnerait \(k = -\frac12\), et la deuxième \(k = -\frac23\) : impossible. Les vecteurs ne sont pas colinéaires, les points ne sont pas alignés.

**2.** \(I\left(\dfrac{1 + 3}{2}\,;\,\dfrac{2 - 1}{2}\,;\,\dfrac{-1 + 2}{2}\right) = \left(2\,;\,\dfrac12\,;\,\dfrac12\right)\).

**3.** \(\overrightarrow{AD}\begin{pmatrix} 1 \\ -1 \\ 5 \end{pmatrix}\). On cherche \(a\), \(b\) tels que \(\overrightarrow{AD} = a\overrightarrow{AB} + b\overrightarrow{AC}\) :
\[
\begin{cases} 2a - b = 1 \\ -3a + 2b = -1 \\ 3a + 2b = 5 \end{cases}
\]
En soustrayant la deuxième équation à la troisième : \(6a = 6\), soit \(a = 1\), puis \(b = 2a - 1 = 1\). On vérifie la deuxième : \(-3 + 2 = -1\). Donc \(\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}\) : \(A\), \(B\), \(C\), \(D\) sont **coplanaires**.

\(\overrightarrow{AE}\begin{pmatrix} 1 \\ -2 \\ 2 \end{pmatrix}\) : le système \(2a - b = 1\), \(-3a + 2b = -2\), \(3a + 2b = 2\) donne, avec les deux dernières, \(4b = 0\), \(b = 0\) et \(a = \frac{2}{3}\) ; mais alors \(2a - b = \frac43 \neq 1\). Le système n’a pas de solution : \(A\), \(B\), \(C\), \(E\) ne sont **pas coplanaires**.
{{% /details %}}
