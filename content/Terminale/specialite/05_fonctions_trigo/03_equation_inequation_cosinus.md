---
title: 'Équations et inéquations avec le cosinus'
weight: 3
cascade:
  type: docs
---

## Équation \({\cos(x) = a}\)

> [!TIP] **Propriété**
>
> Soit \(a\) un réel.
> - Si \({a < -1}\) ou \({a > 1}\), l’équation \({\cos(x) = a}\) n’a aucune solution réelle.
> - Si \({-1 \leq a \leq 1}\), il existe un unique réel \({\alpha \in [0\,;\,\pi]}\) tel que \({\cos(\alpha) = a}\), et :
>   - sur \({]-\pi\,;\,\pi]}\), les solutions de \({\cos(x) = a}\) sont \(\alpha\) et \({-\alpha}\) (une seule solution si \({a = 1}\), à savoir 0, ou si \({a = -1}\), à savoir \(\pi\)) ;
>   - sur \(\mathbb{R}\), les solutions sont les réels \({x = \alpha + 2k\pi}\) et \({x = -\alpha + 2k\pi}\), avec \({k \in \mathbb{Z}}\).

> [!IMPORTANT] **Remarques**
>
> - Graphiquement, les solutions sur \({]-\pi\,;\,\pi]}\) sont les points-images du cercle trigonométrique d’**abscisse** \(a\) : ils sont symétriques par rapport à l’axe des abscisses, ce qui traduit la parité du cosinus.
> - Le passage de \({]-\pi\,;\,\pi]}\) à \(\mathbb{R}\) vient de la \(2\pi\)-périodicité : chaque solution en engendre une infinité, en ajoutant des multiples de \(2\pi\).
> - De manière équivalente : pour tous réels \(x\) et \(\alpha\), \({\cos(x) = \cos(\alpha) \iff x = \alpha + 2k\pi}\) ou \({x = -\alpha + 2k\pi}\), \({k \in \mathbb{Z}}\).

{{% details title="Exemple" closed="true" %}}
On résout \({\cos(x) = -\dfrac{1}{2}}\).

On connaît \({\cos\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}}\) ; le point d’abscisse \({-\dfrac12}\) dans le demi-cercle supérieur est le symétrique par rapport à l’axe des ordonnées, image de \({\pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}}\). Ainsi \({\alpha = \dfrac{2\pi}{3}}\).

- Sur \({]-\pi\,;\,\pi]}\) : \({\mathcal{S} = \left\{-\dfrac{2\pi}{3}\,;\,\dfrac{2\pi}{3}\right\}}\).
- Sur \(\mathbb{R}\) : \({\mathcal{S} = \left\{-\dfrac{2\pi}{3} + 2k\pi\,;\,\dfrac{2\pi}{3} + 2k\pi \mid k \in \mathbb{Z}\right\}}\).

![](/images/image278.png)
{{% /details %}}

## Inéquations \({\cos(x) \geq a}\) et \({\cos(x) < a}\)

Sur un intervalle de longueur \(2\pi\) comme \({]-\pi\,;\,\pi]}\), on résout une inéquation du type \({\cos(x) \geq a}\) (ou \({\leq}\), \({<}\), \({>}\)) en deux temps :

1. on résout l’équation associée \({\cos(x) = a}\) sur cet intervalle ;
2. on conclut par une lecture :
   - **sur le cercle trigonométrique** : \({\cos(x) \geq a}\) correspond aux points-images situés à droite de la droite verticale d’équation \({x = a}\) (ou sur elle) ;
   - **ou avec les variations du cosinus** : \(\cos\) est strictement croissante sur \({[-\pi\,;\,0]}\) et strictement décroissante sur \([0\,;\,\pi]\), donc l’ordre entre \(\cos(x)\) et \(\cos(\alpha)\) se traduit par un ordre entre \(x\) et \({\pm\alpha}\) sur chacun de ces intervalles.

{{% details title="Exemple" closed="true" %}}
On résout \({\cos(x) \geq \dfrac{\sqrt{2}}{2}}\) sur \({]-\pi\,;\,\pi]}\).

L’équation \({\cos(x) = \dfrac{\sqrt{2}}{2}}\) a pour solutions \({-\dfrac{\pi}{4}}\) et \(\dfrac{\pi}{4}\). Les points-images d’abscisse supérieure ou égale à \(\dfrac{\sqrt2}{2}\) forment l’arc vert ci-dessous, qui va de \({-\dfrac{\pi}{4}}\) à \(\dfrac{\pi}{4}\) en passant par \(I\).

\[
\mathcal{S} = \left[-\dfrac{\pi}{4}\,;\,\dfrac{\pi}{4}\right].
\]

![](/images/image279.png)
{{% /details %}}

## Résoudre une équation, une inéquation avec le cosinus

> [!NOTE] **Exercice résolu**
>
> 1. Résoudre l’équation \({2\cos(x) + 1 = 0}\) sur \({]-\pi\,;\,\pi]}\), puis sur \(\mathbb{R}\).
> 2. Résoudre sur \({]-\pi\,;\,\pi]}\) l’inéquation \({2\cos(x) - \sqrt{2} \geq 0}\).
> 3. Résoudre sur \({[-\pi\,;\,\pi]}\) l’inéquation \({2\cos(x) < 1}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({2\cos(x) + 1 = 0 \iff \cos(x) = -\dfrac{1}{2}}\).

Sur \({]-\pi\,;\,\pi]}\), d’après le cercle trigonométrique, les solutions sont \(\dfrac{2\pi}{3}\) et \({-\dfrac{2\pi}{3}}\) (en effet, \({\cos\left(\dfrac{2\pi}{3}\right) = \cos\left(-\dfrac{2\pi}{3}\right) = -\dfrac12}\)) :
\[
\mathcal{S} = \left\{-\dfrac{2\pi}{3}\,;\,\dfrac{2\pi}{3}\right\}.
\]
Par \(2\pi\)-périodicité du cosinus, sur \(\mathbb{R}\) :
\[
\mathcal{S} = \left\{-\dfrac{2\pi}{3} + 2k\pi\,;\,\dfrac{2\pi}{3} + 2k\pi \mid k \in \mathbb{Z}\right\}.
\]

---

**2.** \({2\cos(x) - \sqrt{2} \geq 0 \iff \cos(x) \geq \dfrac{\sqrt{2}}{2}}\).

L’équation associée a pour solutions \({\pm\dfrac{\pi}{4}}\) sur \({]-\pi\,;\,\pi]}\). Avec les variations :
- sur \([0\,;\,\pi]\), \(\cos\) est strictement décroissante, donc \({\cos(x) \geq \cos\left(\dfrac{\pi}{4}\right) \iff x \leq \dfrac{\pi}{4}}\), soit \({x \in \left[0\,;\,\dfrac{\pi}{4}\right]}\) ;
- sur \({]-\pi\,;\,0]}\), \(\cos\) est strictement croissante, donc \({\cos(x) \geq \cos\left(-\dfrac{\pi}{4}\right) \iff x \geq -\dfrac{\pi}{4}}\), soit \({x \in \left[-\dfrac{\pi}{4}\,;\,0\right]}\).
\[
\mathcal{S} = \left[-\dfrac{\pi}{4}\,;\,\dfrac{\pi}{4}\right].
\]

---

**3.** \({2\cos(x) < 1 \iff \cos(x) < \dfrac{1}{2}}\).

L’équation \({\cos(x) = \dfrac12}\) a pour solutions \({\pm\dfrac{\pi}{3}}\) sur \({[-\pi\,;\,\pi]}\).
- Sur \([0\,;\,\pi]\), par stricte décroissance : \({\cos(x) < \cos\left(\dfrac{\pi}{3}\right) \iff \dfrac{\pi}{3} < x \leq \pi}\).
- Sur \({[-\pi\,;\,0]}\), par stricte croissance : \(\cos(x) < \cos\left(-\dfrac{\pi}{3}\right) \iff -\pi \leq x < -\dfrac{\pi}{3}\).
\[
\mathcal{S} = \left[-\pi\,;\,-\dfrac{\pi}{3}\right[ \cup \left]\dfrac{\pi}{3}\,;\,\pi\right].
\]
Graphiquement, ce sont les abscisses des points de la courbe du cosinus situés strictement sous la droite d’équation \({y = \dfrac12}\) (zones vertes) :

![](/images/image280.png)
{{% /details %}}

## Exercices

> [!NOTE] **Exercice 1**
>
> Résoudre sur \({]-\pi\,;\,\pi]}\), puis sur \(\mathbb{R}\), les équations suivantes.
> 1. \({2\cos(x) = \sqrt{3}}\)
> 2. \({\sqrt{2}\cos(x) + 1 = 0}\)
> 3. \({\cos^2(x) = \dfrac{1}{4}}\)
> 4. \({\cos(x) = 2}\)

{{% details title="Solution" closed="true" %}}
1. \({\cos(x) = \dfrac{\sqrt3}{2}}\) : sur \({]-\pi\,;\,\pi]}\), \({\mathcal{S} = \left\{-\dfrac{\pi}{6}\,;\,\dfrac{\pi}{6}\right\}}\) ; sur \(\mathbb{R}\), \({\mathcal{S} = \left\{\pm\dfrac{\pi}{6} + 2k\pi \mid k \in \mathbb{Z}\right\}}\).
2. \({\cos(x) = -\dfrac{1}{\sqrt2} = -\dfrac{\sqrt2}{2}}\) : sur \({]-\pi\,;\,\pi]}\), \({\mathcal{S} = \left\{-\dfrac{3\pi}{4}\,;\,\dfrac{3\pi}{4}\right\}}\) ; sur \(\mathbb{R}\), \({\mathcal{S} = \left\{\pm\dfrac{3\pi}{4} + 2k\pi \mid k \in \mathbb{Z}\right\}}\).
3. \({\cos^2(x) = \dfrac14 \iff \cos(x) = \dfrac12}\) ou \({\cos(x) = -\dfrac12}\).  
   Sur \({]-\pi\,;\,\pi]}\) : \({\mathcal{S} = \left\{-\dfrac{2\pi}{3}\,;\,-\dfrac{\pi}{3}\,;\,\dfrac{\pi}{3}\,;\,\dfrac{2\pi}{3}\right\}}\).  
   Sur \(\mathbb{R}\) : \({\mathcal{S} = \left\{\pm\dfrac{\pi}{3} + 2k\pi\,;\,\pm\dfrac{2\pi}{3} + 2k\pi \mid k \in \mathbb{Z}\right\}}\) (que l’on peut aussi écrire \({\left\{\pm\dfrac{\pi}{3} + k\pi \mid k \in \mathbb{Z}\right\}}\)).
4. \({2 > 1}\) et \({\cos(x) \leq 1}\) pour tout réel \(x\) : aucune solution, \({\mathcal{S} = \varnothing}\).
{{% /details %}}

> [!NOTE] **Exercice 2**
>
> Résoudre sur \({[-\pi\,;\,\pi]}\) les inéquations suivantes.
> 1. \({2\cos(x) + 1 > 0}\)
> 2. \({\cos(x) \leq 0}\)
> 3. \({4\cos^2(x) - 3 \leq 0}\)

{{% details title="Solution" closed="true" %}}
1. \({\cos(x) > -\dfrac12}\). L’équation associée a pour solutions \({\pm\dfrac{2\pi}{3}}\) ; les points-images d’abscisse strictement supérieure à \({-\dfrac12}\) sont sur l’arc ouvert allant de \({-\dfrac{2\pi}{3}}\) à \(\dfrac{2\pi}{3}\) en passant par \(I\) :  
   \({\mathcal{S} = \left]-\dfrac{2\pi}{3}\,;\,\dfrac{2\pi}{3}\right[}\).
2. \({\cos(x) = 0}\) pour \({x = \pm\dfrac{\pi}{2}}\), et le cosinus est négatif sur le demi-cercle de gauche :  
   \({\mathcal{S} = \left[-\pi\,;\,-\dfrac{\pi}{2}\right] \cup \left[\dfrac{\pi}{2}\,;\,\pi\right]}\).
3. \(4\cos^2(x) - 3 \leq 0 \iff \cos^2(x) \leq \dfrac34 \iff -\dfrac{\sqrt3}{2} \leq \cos(x) \leq \dfrac{\sqrt3}{2}\).  
   \({\cos(x) \leq \dfrac{\sqrt3}{2}}\) sur \({\left[-\pi\,;\,-\dfrac{\pi}{6}\right] \cup \left[\dfrac{\pi}{6}\,;\,\pi\right]}\), et \({\cos(x) \geq -\dfrac{\sqrt3}{2}}\) sur \({\left[-\dfrac{5\pi}{6}\,;\,\dfrac{5\pi}{6}\right]}\). En prenant l’intersection :  
   \({\mathcal{S} = \left[-\dfrac{5\pi}{6}\,;\,-\dfrac{\pi}{6}\right] \cup \left[\dfrac{\pi}{6}\,;\,\dfrac{5\pi}{6}\right]}\).
{{% /details %}}
