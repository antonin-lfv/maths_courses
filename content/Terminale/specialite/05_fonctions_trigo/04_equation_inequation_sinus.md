---
title: 'Équations et inéquations avec le sinus'
weight: 4
cascade:
  type: docs
---

## Équation \({\sin(x) = a}\)

> [!TIP] **Propriété**
>
> Soit \(a\) un réel.
> - Si \({a < -1}\) ou \({a > 1}\), l’équation \({\sin(x) = a}\) n’a aucune solution réelle.
> - Si \({-1 \leq a \leq 1}\), il existe un unique réel \({\alpha \in \left[-\dfrac{\pi}{2}\,;\,\dfrac{\pi}{2}\right]}\) tel que \({\sin(\alpha) = a}\), et les solutions de \({\sin(x) = a}\) sur \(\mathbb{R}\) sont les réels
> \[
x = \alpha + 2k\pi \quad \text{et} \quad x = \pi - \alpha + 2k\pi, \qquad k \in \mathbb{Z}.
\]
>   Sur \({]-\pi\,;\,\pi]}\), on obtient deux solutions, ou une seule lorsque \({a = 1}\) \({\left(x = \dfrac{\pi}{2}\right)}\) ou \({a = -1}\) \({\left(x = -\dfrac{\pi}{2}\right)}\).

> [!IMPORTANT] **Remarques**
>
> - Graphiquement, les solutions sont les points-images du cercle trigonométrique d’**ordonnée** \(a\) : ils sont symétriques par rapport à l’axe des ordonnées, car \({\sin(\pi - \alpha) = \sin(\alpha)}\).
> - Attention : contrairement au cosinus, les deux solutions ne sont pas opposées. Pour les ramener dans \({]-\pi\,;\,\pi]}\), on ajoute ou on retranche \(2\pi\) si nécessaire (par exemple \({\pi - \left(-\dfrac{\pi}{6}\right) = \dfrac{7\pi}{6}}\) correspond à \({\dfrac{7\pi}{6} - 2\pi = -\dfrac{5\pi}{6}}\)).
> - De manière équivalente : pour tous réels \(x\) et \(\alpha\), \({\sin(x) = \sin(\alpha) \iff x = \alpha + 2k\pi}\) ou \({x = \pi - \alpha + 2k\pi}\), \({k \in \mathbb{Z}}\).

{{% details title="Exemple" closed="true" %}}
On résout \({\sin(x) = -\dfrac{1}{2}}\).

On a \({\sin\left(-\dfrac{\pi}{6}\right) = -\dfrac12}\), donc \({\alpha = -\dfrac{\pi}{6}}\). La seconde famille est \({\pi - \alpha = \dfrac{7\pi}{6}}\), qui correspond dans \({]-\pi\,;\,\pi]}\) à \({-\dfrac{5\pi}{6}}\).

- Sur \({]-\pi\,;\,\pi]}\) : \({\mathcal{S} = \left\{-\dfrac{5\pi}{6}\,;\,-\dfrac{\pi}{6}\right\}}\).
- Sur \(\mathbb{R}\) : \({\mathcal{S} = \left\{-\dfrac{\pi}{6} + 2k\pi\,;\,-\dfrac{5\pi}{6} + 2k\pi \mid k \in \mathbb{Z}\right\}}\).

![](/images/image281.png)
{{% /details %}}

## Inéquations \({\sin(x) \geq a}\) et \({\sin(x) < a}\)

On procède comme pour le cosinus, sur un intervalle de longueur \(2\pi\) :

1. on résout l’équation associée \({\sin(x) = a}\) ;
2. on conclut par une lecture :
   - **sur le cercle trigonométrique** : \({\sin(x) \geq a}\) correspond aux points-images situés au-dessus de la droite horizontale d’équation \({y = a}\) (ou sur elle) ;
   - **ou avec les variations du sinus** sur \({[-\pi\,;\,\pi]}\) : strictement décroissant sur \({\left[-\pi\,;\,-\dfrac{\pi}{2}\right]}\), strictement croissant sur \({\left[-\dfrac{\pi}{2}\,;\,\dfrac{\pi}{2}\right]}\), strictement décroissant sur \(\left[\dfrac{\pi}{2}\,;\,\pi\right]\).

{{% details title="Exemple" closed="true" %}}
On résout \({\sin(x) \geq \dfrac{1}{2}}\) sur \({]-\pi\,;\,\pi]}\).

L’équation \({\sin(x) = \dfrac12}\) a pour solutions \(\dfrac{\pi}{6}\) et \({\pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}}\). Les points-images d’ordonnée supérieure ou égale à \(\dfrac12\) forment l’arc vert, de \(\dfrac{\pi}{6}\) à \(\dfrac{5\pi}{6}\) en passant par \(J\) :

\[
\mathcal{S} = \left[\dfrac{\pi}{6}\,;\,\dfrac{5\pi}{6}\right].
\]

![](/images/image282.png)
{{% /details %}}

## Résoudre une équation, une inéquation avec le sinus

> [!NOTE] **Exercice résolu**
>
> 1. Résoudre l’équation \({2\sin(x) + 1 = 0}\) sur \({]-\pi\,;\,\pi]}\), puis sur \(\mathbb{R}\).
> 2. Résoudre sur \({]-\pi\,;\,\pi]}\) l’inéquation \({2\sin(x) - 1 \geq 0}\).
> 3. Résoudre sur \({[-\pi\,;\,\pi]}\) l’inéquation \({2\sin(x) < \sqrt{3}}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({2\sin(x) + 1 = 0 \iff \sin(x) = -\dfrac12}\).

Sur \({]-\pi\,;\,\pi]}\), d’après le cercle trigonométrique, les points d’ordonnée \({-\dfrac12}\) sont les images de \({-\dfrac{\pi}{6}}\) et de \({-\dfrac{5\pi}{6}}\) :
\[
\mathcal{S} = \left\{-\dfrac{5\pi}{6}\,;\,-\dfrac{\pi}{6}\right\}.
\]
Par \(2\pi\)-périodicité du sinus, sur \(\mathbb{R}\) :
\[
\mathcal{S} = \left\{-\dfrac{5\pi}{6} + 2k\pi\,;\,-\dfrac{\pi}{6} + 2k\pi \mid k \in \mathbb{Z}\right\}.
\]

---

**2.** \({2\sin(x) - 1 \geq 0 \iff \sin(x) \geq \dfrac12}\).

L’équation associée a pour solutions \(\dfrac{\pi}{6}\) et \(\dfrac{5\pi}{6}\). Avec les variations du sinus :
- sur \({\left[-\dfrac{\pi}{2}\,;\,\dfrac{\pi}{2}\right]}\), par stricte croissance, \({\sin(x) \geq \sin\left(\dfrac{\pi}{6}\right) \iff x \geq \dfrac{\pi}{6}}\) ;
- sur \(\left[\dfrac{\pi}{2}\,;\,\pi\right]\), par stricte décroissance, \({\sin(x) \geq \sin\left(\dfrac{5\pi}{6}\right) \iff x \leq \dfrac{5\pi}{6}}\) ;
- sur \({\left]-\pi\,;\,-\dfrac{\pi}{2}\right]}\), le sinus est négatif, donc il n’y a pas de solution.
\[
\mathcal{S} = \left[\dfrac{\pi}{6}\,;\,\dfrac{5\pi}{6}\right].
\]

---

**3.** \({2\sin(x) < \sqrt3 \iff \sin(x) < \dfrac{\sqrt3}{2}}\).

L’équation \({\sin(x) = \dfrac{\sqrt3}{2}}\) a pour solutions \(\dfrac{\pi}{3}\) et \(\dfrac{2\pi}{3}\) sur \({[-\pi\,;\,\pi]}\). Comme à la question 2, \({\sin(x) \geq \dfrac{\sqrt3}{2} \iff x \in \left[\dfrac{\pi}{3}\,;\,\dfrac{2\pi}{3}\right]}\). On prend le complémentaire dans \({[-\pi\,;\,\pi]}\) :
\[
\mathcal{S} = \left[-\pi\,;\,\dfrac{\pi}{3}\right[ \cup \left]\dfrac{2\pi}{3}\,;\,\pi\right].
\]
Graphiquement, ce sont les abscisses des points de la courbe du sinus situés strictement sous la droite d’équation \({y = \dfrac{\sqrt3}{2}}\) (zones vertes) :

![](/images/image283.png)
{{% /details %}}

## Exercices

> [!NOTE] **Exercice 1**
>
> Résoudre sur \({]-\pi\,;\,\pi]}\), puis sur \(\mathbb{R}\), les équations suivantes.
> 1. \({\sqrt{2}\sin(x) = 1}\)
> 2. \({\sin(x) + 1 = 0}\)
> 3. \({4\sin^2(x) = 3}\)
> 4. \({3\sin(x) + 4 = 0}\)

{{% details title="Solution" closed="true" %}}
1. \({\sin(x) = \dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}}\) : sur \({]-\pi\,;\,\pi]}\), \({\mathcal{S} = \left\{\dfrac{\pi}{4}\,;\,\dfrac{3\pi}{4}\right\}}\) ; sur \(\mathbb{R}\), \({\mathcal{S} = \left\{\dfrac{\pi}{4} + 2k\pi\,;\,\dfrac{3\pi}{4} + 2k\pi \mid k \in \mathbb{Z}\right\}}\).
2. \({\sin(x) = -1}\) : une seule solution sur \({]-\pi\,;\,\pi]}\), \({\mathcal{S} = \left\{-\dfrac{\pi}{2}\right\}}\) ; sur \(\mathbb{R}\), \({\mathcal{S} = \left\{-\dfrac{\pi}{2} + 2k\pi \mid k \in \mathbb{Z}\right\}}\).
3. \({\sin^2(x) = \dfrac34 \iff \sin(x) = \dfrac{\sqrt3}{2}}\) ou \({\sin(x) = -\dfrac{\sqrt3}{2}}\).  
   Sur \({]-\pi\,;\,\pi]}\) : \({\mathcal{S} = \left\{-\dfrac{2\pi}{3}\,;\,-\dfrac{\pi}{3}\,;\,\dfrac{\pi}{3}\,;\,\dfrac{2\pi}{3}\right\}}\).  
   Sur \(\mathbb{R}\) : \({\mathcal{S} = \left\{\pm\dfrac{\pi}{3} + 2k\pi\,;\,\pm\dfrac{2\pi}{3} + 2k\pi \mid k \in \mathbb{Z}\right\}}\) (soit \({\left\{\pm\dfrac{\pi}{3} + k\pi \mid k \in \mathbb{Z}\right\}}\)).
4. \({\sin(x) = -\dfrac43}\), or \({-\dfrac43 < -1}\) : aucune solution, \({\mathcal{S} = \varnothing}\).
{{% /details %}}

> [!NOTE] **Exercice 2**
>
> Résoudre sur \({[-\pi\,;\,\pi]}\) les inéquations suivantes.
> 1. \({2\sin(x) + \sqrt{3} > 0}\)
> 2. \({\sin(x) \leq 0}\)
> 3. \({2\sin^2(x) - 1 < 0}\)

{{% details title="Solution" closed="true" %}}
1. \({\sin(x) > -\dfrac{\sqrt3}{2}}\). L’équation associée a pour solutions \({-\dfrac{\pi}{3}}\) et \({-\dfrac{2\pi}{3}}\) ; on a \({\sin(x) \leq -\dfrac{\sqrt3}{2} \iff x \in \left[-\dfrac{2\pi}{3}\,;\,-\dfrac{\pi}{3}\right]}\) (points-images sous la droite \({y = -\dfrac{\sqrt3}{2}}\)). Par complémentaire :  
   \({\mathcal{S} = \left[-\pi\,;\,-\dfrac{2\pi}{3}\right[ \cup \left]-\dfrac{\pi}{3}\,;\,\pi\right]}\).
2. Le sinus est négatif ou nul pour les points-images du demi-cercle inférieur, extrémités comprises : \({\mathcal{S} = [-\pi\,;\,0] \cup \{\pi\}}\) (car \({\sin(\pi) = 0}\)).
3. \(2\sin^2(x) - 1 < 0 \iff \sin^2(x) < \dfrac12 \iff -\dfrac{\sqrt2}{2} < \sin(x) < \dfrac{\sqrt2}{2}\).  
   \({\sin(x) \geq \dfrac{\sqrt2}{2}}\) sur \(\left[\dfrac{\pi}{4}\,;\,\dfrac{3\pi}{4}\right]\) et \({\sin(x) \leq -\dfrac{\sqrt2}{2}}\) sur \({\left[-\dfrac{3\pi}{4}\,;\,-\dfrac{\pi}{4}\right]}\) ; on retire ces deux intervalles de \({[-\pi\,;\,\pi]}\) :  
   \(\mathcal{S} = \left[-\pi\,;\,-\dfrac{3\pi}{4}\right[ \cup \left]-\dfrac{\pi}{4}\,;\,\dfrac{\pi}{4}\right[ \cup \left]\dfrac{3\pi}{4}\,;\,\pi\right]\).
{{% /details %}}
