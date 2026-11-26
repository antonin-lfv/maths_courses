---
title: 'Équation réduite d’une droite'
weight: 2
cascade:
  type: docs
---

## Équation réduite

> [!TIP] **Propriétés**
>
> - Une droite \(d\) **non parallèle à l’axe des ordonnées** admet une unique équation de la forme
> \[
y = mx + p,
\]
> appelée **équation réduite** de \(d\). Elle représente alors la fonction affine \(x \longmapsto mx + p\). Le réel \(m\) est le **coefficient directeur** (ou **pente**) de \(d\), et \(p\) son **ordonnée à l’origine** : \(d\) passe par le point \((0\,;\,p)\).
> - Une droite **parallèle à l’axe des ordonnées** admet une équation de la forme \(x = c\), avec \(c\) réel : tous ses points ont la même abscisse \(c\).

{{% details title="Justification" closed="true" %}}
Soit \(ax + by + c = 0\) une équation cartésienne de \(d\). Si \(b \neq 0\), on peut isoler \(y\) : \(y = -\frac{a}{b}x - \frac{c}{b}\), de la forme \(y = mx + p\). Si \(b = 0\), alors \(a \neq 0\) et l’équation devient \(x = -\frac{c}{a}\) : la droite a pour vecteur directeur \(\begin{pmatrix} 0 \\ a \end{pmatrix}\), colinéaire à \(\vec{j}\), elle est parallèle à l’axe des ordonnées.
{{% /details %}}

> [!TIP] **Propriété**
>
> Si \(A(x_A\,;\,y_A)\) et \(B(x_B\,;\,y_B)\) sont deux points de \(d\) tels que \(x_A \neq x_B\), alors le coefficient directeur de \(d\) est
> \[
m = \frac{y_B - y_A}{x_B - x_A}.
\]

{{% details title="Démonstration" closed="true" %}}
\(y_A = mx_A + p\) et \(y_B = mx_B + p\). En soustrayant : \(y_B - y_A = m(x_B - x_A)\), et comme \(x_B - x_A \neq 0\), \(m = \frac{y_B - y_A}{x_B - x_A}\).
{{% /details %}}

## Pente et vecteur directeur

> [!TIP] **Propriétés**
>
> Soit \(d\) la droite d’équation \(y = mx + p\).
> - Le vecteur \(\vec{u}\begin{pmatrix} 1 \\ m \end{pmatrix}\) est un vecteur directeur de \(d\) : quand on avance de \(1\) en abscisse, on « monte » de \(m\).
> - Réciproquement, si \(\vec{v}\begin{pmatrix} \Delta x \\ \Delta y \end{pmatrix}\) est un vecteur directeur de \(d\) avec \(\Delta x \neq 0\), alors \(m = \dfrac{\Delta y}{\Delta x}\).
> - Si \(m > 0\), la fonction affine associée est strictement croissante ; si \(m < 0\), strictement décroissante ; si \(m = 0\), constante (la droite est parallèle à l’axe des abscisses).

{{% details title="Exemple" closed="true" %}}
- La droite \(y = -2x + 5\) a pour vecteur directeur \(\begin{pmatrix} 1 \\ -2 \end{pmatrix}\) ; elle « descend » quand on la parcourt de gauche à droite.
- Une droite de vecteur directeur \(\begin{pmatrix} 4 \\ 6 \end{pmatrix}\) a pour coefficient directeur \(\frac{6}{4} = 1{,}5\).
{{% /details %}}

## Positions relatives de deux droites

> [!TIP] **Propriétés**
>
> Soit \(d_1 : y = m_1x + p_1\) et \(d_2 : y = m_2x + p_2\).
> - \(d_1\) et \(d_2\) sont **parallèles** si et seulement si \(m_1 = m_2\) ; elles sont **confondues** si de plus \(p_1 = p_2\).
> - \(d_1\) et \(d_2\) sont **sécantes** si et seulement si \(m_1 \neq m_2\).
> - Deux droites d’équations \(x = c_1\) et \(x = c_2\) sont parallèles (confondues si \(c_1 = c_2\)). Une droite d’équation \(x = c\) et une droite d’équation \(y = mx + p\) sont toujours sécantes.

{{% details title="Exemple" closed="true" %}}
\(d_1 : y = 2x - 1\) et \(d_2 : y = 2x + 3\) sont parallèles et distinctes. La droite \(d_3 : 4x - 2y + 2 = 0\) a pour équation réduite \(y = 2x + 1\) : elle est aussi parallèle à \(d_1\). En revanche, \(d_4 : y = -x + 3\) est sécante à \(d_1\).
{{% /details %}}

> [!TIP] **Propriété — Alignement**
>
> Trois points \(A\), \(B\), \(C\) sont alignés si et seulement si \(C\) vérifie une équation de la droite \((AB)\). Lorsque \(x_A \neq x_B\) et \(x_A \neq x_C\), cela revient à dire que les droites \((AB)\) et \((AC)\) ont le même coefficient directeur.

## Déterminer une équation réduite

> [!NOTE] **Méthode 1 — Déterminer l’équation réduite d’une droite passant par deux points**
>
> Déterminer l’équation réduite de la droite \((AB)\) dans chacun des cas : a) \(A(-1\,;\,4)\) et \(B(3\,;\,-2)\) ; b) \(A(2\,;\,5)\) et \(B(2\,;\,-1)\).

{{% details title="Solution commentée" closed="true" %}}
a) \(x_A \neq x_B\) : la droite n’est pas parallèle à l’axe des ordonnées, son équation est de la forme \(y = mx + p\), avec
\[
m = \frac{y_B - y_A}{x_B - x_A} = \frac{-2 - 4}{3 - (-1)} = -\frac{6}{4} = -1{,}5.
\]
\(A \in (AB)\) : \(4 = -1{,}5 \times (-1) + p\), donc \(p = 2{,}5\). L’équation réduite est \(y = -1{,}5x + 2{,}5\). *(Contrôle avec \(B\) : \(-4{,}5 + 2{,}5 = -2\).)*

b) \(x_A = x_B = 2\) : la droite est parallèle à l’axe des ordonnées, d’équation \(x = 2\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Déterminer une parallèle et tester un alignement**
>
> 1. Déterminer l’équation réduite de la droite \(\Delta\) parallèle à \(d : y = \frac{1}{2}x - 3\) passant par \(C(4\,;\,1)\).
> 2. Les points \(E(-2\,;\,-2)\), \(F(2\,;\,0)\) et \(G(7\,;\,2{,}5)\) sont-ils alignés ?

{{% details title="Solution commentée" closed="true" %}}
1. \(\Delta\) est parallèle à \(d\), donc elle a le même coefficient directeur : \(y = \frac{1}{2}x + p\). \(C \in \Delta\) : \(1 = 2 + p\), donc \(p = -1\). \(\Delta : y = \frac{1}{2}x - 1\).
2. Coefficient directeur de \((EF)\) : \(\frac{0 - (-2)}{2 - (-2)} = \frac{1}{2}\). Coefficient directeur de \((EG)\) : \(\frac{2{,}5 - (-2)}{7 - (-2)} = \frac{4{,}5}{9} = \frac{1}{2}\). Les droites \((EF)\) et \((EG)\) sont parallèles et ont le point \(E\) en commun : elles sont confondues, et \(E\), \(F\), \(G\) sont alignés. (On remarque que ces trois points sont sur la droite \(\Delta\).)
{{% /details %}}
