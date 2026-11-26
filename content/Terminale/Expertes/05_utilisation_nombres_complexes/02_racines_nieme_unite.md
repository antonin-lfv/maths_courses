---
title: "Racine n-ième de l'unité"
weight: 2
cascade:
  type: docs
---

Le plan complexe est muni d’un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\).

## Définition

> [!TIP] **Définition**
>
> Soit \(n\) un entier naturel non nul. On appelle **racine \(n\)-ième de l’unité** tout nombre complexe \(z\) tel que \(z^n = 1\).

> [!IMPORTANT] **Remarques**
>
> - Pour tout entier \(n \geq 1\), \(1\) est une racine \(n\)-ième de l’unité.
> - Les racines \(n\)-ièmes de l’unité sont les racines du polynôme \(z^n - 1\) ; il y en a donc au plus \(n\).

## Les \(n\) racines \(n\)-ièmes de l’unité

> [!TIP] **Propriété**
>
> Pour tout entier naturel \(n \geq 1\), \(z^n = 1\) admet exactement \(n\) racines \(n\)-ièmes de l’unité, distinctes : ce sont les nombres complexes
> \[
e^{\frac{2ik\pi}{n}}, \quad k \text{ entier tel que } 0 \leq k \leq n - 1.
\]

{{% details title="Démonstration" closed="true" %}}
- **Ces nombres conviennent.** \(\left(e^{\frac{2ik\pi}{n}}\right)^n = e^{2ik\pi} = 1\).
- **Ils sont distincts.** Si \(0 \leq k < k' \leq n - 1\) et \(e^{\frac{2ik\pi}{n}} = e^{\frac{2ik'\pi}{n}}\), alors \(\dfrac{2k'\pi}{n} - \dfrac{2k\pi}{n}\) est un multiple de \(2\pi\), donc \(k' - k\) est un multiple de \(n\). C’est impossible car \(0 < k' - k < n\).
- **Il n’y en a pas d’autres.** Si \(z^n = 1\), alors \(|z|^n = 1\), donc \(|z| = 1\) (car \(|z| \geq 0\)) et \(z = e^{i\theta}\). Alors \(e^{in\theta} = 1 = e^{i0}\), donc \(n\theta = 2m\pi\) avec \(m \in \mathbb{Z}\), et \(z = e^{\frac{2im\pi}{n}}\). On écrit la division euclidienne \(m = qn + k\) avec \(0 \leq k \leq n - 1\) : \(z = e^{2iq\pi}e^{\frac{2ik\pi}{n}} = e^{\frac{2ik\pi}{n}}\).

(On retrouve aussi le fait qu’il n’y en a pas plus de \(n\) : un polynôme de degré \(n\) a au plus \(n\) racines.)
{{% /details %}}

> [!TIP] **Définition**
>
> On note \(\mathbb{U}_n\) l’ensemble des racines \(n\)-ièmes de l’unité :
> \[
\mathbb{U}_n = \left\{e^{\frac{2ik\pi}{n}},\ k \in \{0, 1, \dots, n - 1\}\right\}.
\]

> [!TIP] **Propriété**
>
> - Les points images des éléments de \(\mathbb{U}_n\) appartiennent au cercle trigonométrique.
> - Pour \(n \geq 3\), ce sont les sommets d’un **polygone régulier à \(n\) côtés** inscrit dans ce cercle.

{{% details title="Démonstration" closed="true" %}}
Chaque élément de \(\mathbb{U}_n\) a pour module 1. Les points \(A_k\) d’affixes \(e^{\frac{2ik\pi}{n}}\) se suivent sur le cercle avec \(\left(\overrightarrow{OA_k}, \overrightarrow{OA_{k+1}}\right) = \dfrac{2\pi}{n}\) : ils partagent le cercle en \(n\) arcs égaux. Les triangles \(OA_kA_{k+1}\) sont donc tous superposables, et les côtés \(A_kA_{k+1}\) ont tous la même longueur \(\left|e^{\frac{2i\pi}{n}} - 1\right|\) : le polygone est régulier.
{{% /details %}}

![](/images/image327.png)

> [!IMPORTANT] **Cas particuliers**
>
> - \(n = 2\) : \(\mathbb{U}_2 = \{1\,;\,-1\}\).
> - \(n = 3\) : on note \(j = e^{i\frac{2\pi}{3}} = -\dfrac{1}{2} + i\dfrac{\sqrt{3}}{2}\). Alors \(\mathbb{U}_3 = \{1\,;\,j\,;\,j^2\}\), avec \(j^2 = e^{i\frac{4\pi}{3}} = \overline{j}\). Les images forment un triangle équilatéral.
> - \(n = 4\) : \(\mathbb{U}_4 = \{1\,;\,i\,;\,-1\,;\,-i\}\) ; les images forment un carré.

> [!TIP] **Propriété (somme des racines)**
>
> Pour tout entier \(n \geq 2\), en notant \(\omega = e^{\frac{2i\pi}{n}}\) :
> \[
1 + \omega + \omega^2 + \dots + \omega^{n-1} = 0.
\]
> Par exemple, \(1 + j + j^2 = 0\).

{{% details title="Démonstration" closed="true" %}}
Les éléments de \(\mathbb{U}_n\) sont les \(\omega^k\) (\(0 \leq k \leq n - 1\)), car \(e^{\frac{2ik\pi}{n}} = \omega^k\). Comme \(n \geq 2\), \(\omega \neq 1\), et la somme des termes d’une suite géométrique de raison \(\omega\) donne
\[
1 + \omega + \dots + \omega^{n-1} = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0.
\]
{{% /details %}}

## Utiliser les racines de l’unité

> [!NOTE] **Exercice résolu 1 — Résoudre \(z^n = a\)**
>
> Résoudre dans \(\mathbb{C}\) :
> 1. \(z^3 = -8\)
> 2. \(z^4 = 16\)

{{% details title="Solution commentée" closed="true" %}}
**Idée :** si \(z_0\) est une solution particulière non nulle de \(z^n = a\), alors \(z^n = a \iff z^n = z_0^n \iff \left(\dfrac{z}{z_0}\right)^n = 1\) : les solutions sont les \(z_0\,\omega\) avec \(\omega \in \mathbb{U}_n\).

1. \(z_0 = -2\) convient. Les solutions sont \(-2\), \(-2j\) et \(-2j^2\), soit
\[
-2, \qquad -2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = 1 - i\sqrt{3}, \qquad -2\left(-\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = 1 + i\sqrt{3}.
\]
Vérification : \(1 + i\sqrt{3} = 2e^{i\frac{\pi}{3}}\), donc \((1 + i\sqrt{3})^3 = 8e^{i\pi} = -8\).
2. \(z_0 = 2\) convient. Les solutions sont \(2\omega\) avec \(\omega \in \mathbb{U}_4 = \{1, i, -1, -i\}\) : \(\mathcal{S} = \{2\,;\,2i\,;\,-2\,;\,-2i\}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Utiliser la somme des racines**
>
> On pose \(\omega = e^{\frac{2i\pi}{5}}\).
> 1. Justifier que \(1 + \omega + \omega^2 + \omega^3 + \omega^4 = 0\).
> 2. En déduire la valeur de \(\cos\left(\dfrac{2\pi}{5}\right) + \cos\left(\dfrac{4\pi}{5}\right)\).

{{% details title="Solution commentée" closed="true" %}}
1. C’est la propriété de la somme des racines 5-ièmes de l’unité (\(\omega \neq 1\) et \(\omega^5 = 1\)).
2. On prend la partie réelle : \(\mathrm{Re}(\omega^k) = \cos\left(\dfrac{2k\pi}{5}\right)\). Donc
\[
1 + \cos\frac{2\pi}{5} + \cos\frac{4\pi}{5} + \cos\frac{6\pi}{5} + \cos\frac{8\pi}{5} = 0.
\]
Or \(\dfrac{6\pi}{5} = 2\pi - \dfrac{4\pi}{5}\) et \(\dfrac{8\pi}{5} = 2\pi - \dfrac{2\pi}{5}\), donc \(\cos\dfrac{6\pi}{5} = \cos\dfrac{4\pi}{5}\) et \(\cos\dfrac{8\pi}{5} = \cos\dfrac{2\pi}{5}\). Ainsi \(1 + 2\cos\dfrac{2\pi}{5} + 2\cos\dfrac{4\pi}{5} = 0\), soit
\[
\cos\left(\frac{2\pi}{5}\right) + \cos\left(\frac{4\pi}{5}\right) = -\frac{1}{2}.
\]
{{% /details %}}
