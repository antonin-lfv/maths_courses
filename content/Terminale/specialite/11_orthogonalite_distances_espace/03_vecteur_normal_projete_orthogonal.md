---
title: 'Vecteur normal et projeté orthogonal'
weight: 3
cascade:
  type: docs
---

## Vecteur normal à un plan

> [!TIP] **Définition**
>
> On appelle **vecteur normal** à un plan \(\mathscr{P}\) tout vecteur non nul \(\vec{n}\) qui dirige une droite orthogonale à \(\mathscr{P}\).

> [!IMPORTANT] **Remarque**
>
> Si \(\mathscr{P}\) est dirigé par deux vecteurs non colinéaires \(\vec{u}\) et \(\vec{v}\), un vecteur non nul \(\vec{n}\) est normal à \(\mathscr{P}\) si et seulement si \(\vec{n} \cdot \vec{u} = 0\) et \(\vec{n} \cdot \vec{v} = 0\).

> [!TIP] **Propriété**
>
> Soit \(A\) un point et \(\vec{n}\) un vecteur non nul. L’ensemble des points \(M\) de l’espace tels que \(\overrightarrow{AM} \cdot \vec{n} = 0\) est le plan passant par \(A\) et de vecteur normal \(\vec{n}\).

> [!TIP] **Conséquence**
>
> Un plan est entièrement défini par la donnée d’un point \(A\) et d’un vecteur normal \(\vec{n}\). On le note \(\mathscr{P}(A\,;\,\vec{n})\).

![](/images/image312.png)

{{% details title="Exemple" closed="true" %}}
Dans un repère orthonormé, le plan passant par \(A(1\,;\,0\,;\,2)\) et de vecteur normal \(\vec{n}\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}\) est l’ensemble des points \(M(x\,;\,y\,;\,z)\) tels que
\[
\overrightarrow{AM} \cdot \vec{n} = 2(x - 1) - y + 3(z - 2) = 0, \quad \text{soit} \quad 2x - y + 3z - 8 = 0.
\]
(On retrouvera ce type d’équation au chapitre suivant.)
{{% /details %}}

## Projeté orthogonal d’un point sur un plan

> [!TIP] **Propriété (admise) et définition**
>
> Soient \(\mathscr{P}\) un plan et \(A\) un point de l’espace. Il existe une **unique** droite \((d)\) orthogonale à \(\mathscr{P}\) passant par \(A\). Elle coupe \(\mathscr{P}\) en un point \(H\), appelé **projeté orthogonal** du point \(A\) sur le plan \(\mathscr{P}\).

> [!TIP] **Propriété**
>
> Le projeté orthogonal \(H\) de \(A\) sur \(\mathscr{P}\) est le point de \(\mathscr{P}\) le plus proche de \(A\). La distance \(AH\) est appelée **distance du point \(A\) au plan \(\mathscr{P}\)**.

![](/images/image313.png)

> [!IMPORTANT] **Remarque**
>
> Pour tout point \(N\) de \(\mathscr{P}\), le triangle \(AHN\) est rectangle en \(H\), donc \(AN^2 = AH^2 + HN^2 \geq AH^2\) (théorème de Pythagore) : c’est ce qui justifie la propriété.

## Projeté orthogonal d’un point sur une droite

> [!TIP] **Propriété (admise) et définition**
>
> Soient \((d)\) une droite et \(A\) un point de l’espace. Il existe une unique droite \((d')\), perpendiculaire à \((d)\), passant par \(A\) (si \(A \notin (d)\)). Elle coupe \((d)\) en un point \(H\), appelé **projeté orthogonal** du point \(A\) sur la droite \((d)\) (si \(A \in (d)\), on pose \(H = A\)).

> [!TIP] **Propriété**
>
> Le projeté orthogonal \(H\) de \(A\) sur \((d)\) est le point de \((d)\) le plus proche de \(A\). La distance \(AH\) est appelée **distance du point \(A\) à la droite \((d)\)**.

![](/images/image314.png)

{{% details title="Exemples" closed="true" %}}
Dans le cube \(ABCDEFGH\) d’arête 1 :
- la droite \((EA)\) est orthogonale au plan \((ABC)\), donc le projeté orthogonal de \(E\) sur ce plan est \(A\), et la distance de \(E\) au plan \((ABC)\) vaut \(EA = 1\) ;
- la droite \((AB)\) est orthogonale au plan \((BCG)\), donc à la droite \((BG)\) : le projeté orthogonal de \(G\) sur \((AB)\) est \(B\), et la distance de \(G\) à la droite \((AB)\) vaut \(BG = \sqrt{2}\).
{{% /details %}}

## Déterminer un projeté orthogonal

> [!NOTE] **Méthode 3 — Déterminer un projeté orthogonal et une distance**
>
> \(ABCDEFGH\) est un cube d’arête 1, muni du repère orthonormé \((A\,;\,\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})\). On admet (voir la page précédente) que la droite \((AG)\) est orthogonale au plan \((BDE)\).
> On note \(H\) le projeté orthogonal de \(A\) sur le plan \((BDE)\).
> 1. Justifier qu’il existe un réel \(t\) tel que \(\overrightarrow{AH} = t\overrightarrow{AG}\).
> 2. En utilisant \(\overrightarrow{BH} \cdot \overrightarrow{AG} = 0\), déterminer \(t\) puis les coordonnées de \(H\).
> 3. En déduire la distance du point \(A\) au plan \((BDE)\).

{{% details title="Solution commentée" closed="true" %}}
**1.** La droite orthogonale au plan \((BDE)\) passant par \(A\) est \((AG)\) ; \(H\) appartient à cette droite, donc \(\overrightarrow{AH}\) et \(\overrightarrow{AG}\) sont colinéaires : il existe \(t\) tel que \(\overrightarrow{AH} = t\overrightarrow{AG}\), soit \(H(t\,;\,t\,;\,t)\).

**2.** \(H\) et \(B\) sont dans le plan \((BDE)\), qui est orthogonal à \((AG)\) : \(\overrightarrow{BH} \cdot \overrightarrow{AG} = 0\). Avec \(\overrightarrow{BH}\begin{pmatrix} t - 1 \\ t \\ t \end{pmatrix}\) et \(\overrightarrow{AG}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}\) :
\[
(t - 1) + t + t = 0 \iff t = \frac{1}{3}.
\]
Donc \(H\left(\frac{1}{3}\,;\,\frac{1}{3}\,;\,\frac{1}{3}\right)\).

**3.** \(AH = \sqrt{3 \times \left(\frac{1}{3}\right)^2} = \dfrac{\sqrt{3}}{3}\). La distance de \(A\) au plan \((BDE)\) vaut \(\dfrac{\sqrt{3}}{3} \approx 0{,}58\).
{{% /details %}}
