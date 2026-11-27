---
title: "Arguments d'un nombre complexe"
weight: 3
cascade:
  type: docs
---

## Définition

> [!TIP] **Propriété (admise) et définition**
>
> Soit \({z = x + iy}\) un nombre complexe **non nul** sous forme algébrique.
> - Il existe des réels \(\theta\) tels que
> \[
\cos\theta = \dfrac{x}{|z|} \quad \text{et} \quad \sin\theta = \dfrac{y}{|z|}.
\]
> - Ces réels \(\theta\) sont appelés les **arguments** de \(z\). Si \(\theta\) est l’un d’eux, les arguments de \(z\) sont exactement les réels \({\theta + 2k\pi}\), \({k \in \mathbb{Z}}\). On note \({\arg(z) = \theta \ (2\pi)}\), ce qui se lit « un argument de \(z\) est \(\theta\), modulo \(2\pi\) ».

> [!IMPORTANT] **Remarque**
>
> Le nombre complexe \(0\) est le seul qui n’a pas d’argument.

> [!TIP] **Propriétés (admises, interprétation géométrique)**
>
> Le plan complexe est muni d’un repère orthonormé direct \((O\,;\,\vec{u}, \vec{v})\).
> - Si \({z \neq 0}\) a pour image le point \(M\), alors \({\arg(z) = \left(\vec{u}, \overrightarrow{OM}\right) \ (2\pi)}\).
> - Si \({\vec{w} \neq \vec{0}}\) a pour affixe \(z\), alors \({\left(\vec{u}, \vec{w}\right) = \arg(z) \ (2\pi)}\).
> - Si \(A\) et \(B\) sont deux points distincts d’affixes \(z_A\) et \(z_B\), alors \({\left(\vec{u}, \overrightarrow{AB}\right) = \arg(z_B - z_A) \ (2\pi)}\).

![](/images/image326.png)

## Propriétés

> [!TIP] **Propriétés**
>
> Soit \(z\) un nombre complexe non nul.
> - \({\arg(\overline{z}) = -\arg(z) \ (2\pi)}\) et \({\arg(-z) = \arg(z) + \pi \ (2\pi)}\).
> - \(z\) est un réel (non nul) si et seulement si \({\arg(z) = 0 \ (\pi)}\).
> - \(z\) est un imaginaire pur (non nul) si et seulement si \({\arg(z) = \dfrac{\pi}{2} \ (\pi)}\).

> [!IMPORTANT] **Remarque**
>
> « \({\arg(z) = 0 \ (\pi)}\) » signifie que les arguments de \(z\) sont de la forme \(k\pi\), \({k \in \mathbb{Z}}\) : \(z\) est un réel strictement positif (argument \(0\) modulo \(2\pi\)) ou strictement négatif (argument \(\pi\) modulo \(2\pi\)).

> [!TIP] **Propriétés (opérations)**
>
> Soient \(z\) et \(z'\) deux nombres complexes non nuls.
> - \({\arg(zz') = \arg(z) + \arg(z') \ (2\pi)}\) ;
> - \({\arg\left(\dfrac{1}{z}\right) = -\arg(z) \ (2\pi)}\) ;
> - \({\arg\left(\dfrac{z}{z'}\right) = \arg(z) - \arg(z') \ (2\pi)}\) ;
> - pour tout entier relatif \(n\), \({\arg(z^n) = n\arg(z) \ (2\pi)}\).

{{% details title="Démonstration" closed="true" %}}
La propriété du produit est démontrée au chapitre suivant, à l’aide des formules d’addition du cosinus et du sinus. On en déduit les autres.

- **Inverse.** \({z \times \dfrac{1}{z} = 1}\) et \({\arg(1) = 0}\), donc \({\arg(z) + \arg\left(\dfrac{1}{z}\right) = 0 \ (2\pi)}\).
- **Quotient.** \(\arg\left(\dfrac{z}{z'}\right) = \arg\left(z \times \dfrac{1}{z'}\right) = \arg(z) - \arg(z') \ (2\pi)\).
- **Puissances**, pour \({n \in \mathbb{N}}\), par récurrence :
  - **Initialisation.** \({\arg(z^0) = \arg(1) = 0 = 0 \times \arg(z) \ (2\pi)}\).
  - **Hérédité.** Si \({\arg(z^n) = n\arg(z) \ (2\pi)}\), alors \(\arg(z^{n+1}) = \arg(z^n) + \arg(z) = (n + 1)\arg(z) \ (2\pi)\).
  - **Conclusion.** La propriété est vraie pour tout \({n \in \mathbb{N}}\).

  Pour \({n = -p}\) avec \({p \in \mathbb{N}}\) : \(\arg(z^{n}) = \arg\left(\dfrac{1}{z^p}\right) = -p\arg(z) = n\arg(z) \ (2\pi)\).
- **Conjugué et opposé.** Les points d’affixes \(z\) et \(\overline{z}\) sont symétriques par rapport à l’axe des réels, d’où \({\arg(\overline{z}) = -\arg(z)}\). Enfin \({-z = (-1) \times z}\) et \({\arg(-1) = \pi}\), d’où \({\arg(-z) = \arg(z) + \pi \ (2\pi)}\).
{{% /details %}}

## Forme trigonométrique d’un nombre complexe

> [!TIP] **Propriété et définition**
>
> Soit \(z\) un nombre complexe non nul, de module \({r = |z|}\) et d’argument \(\theta\). Alors
> \[
z = r\left(\cos\theta + i\sin\theta\right).
\]
> Cette écriture s’appelle une **forme trigonométrique** de \(z\).
>
> Deux nombres complexes non nuls sont égaux si et seulement si ils ont le même module et le même argument modulo \(2\pi\) :
> \[
z = z' \iff \begin{cases} |z| = |z'| \\ \arg(z) = \arg(z') \ (2\pi) \end{cases}
\]

> [!IMPORTANT] **Remarque**
>
> Réciproquement, si \({z = r(\cos\theta + i\sin\theta)}\) avec \({r > 0}\), alors \({|z| = r}\) et \({\arg(z) = \theta \ (2\pi)}\). Attention : \({-2(\cos\theta + i\sin\theta)}\) n’est **pas** une forme trigonométrique, car \({-2 < 0}\).

## Déterminer un argument

> [!NOTE] **Exercice résolu 1 - Déterminer un argument**
>
> Déterminer un argument de \({z_1 = 5}\), \({z_2 = -3i}\), \({z_3 = -1 + i}\) et \({z_4 = -\sqrt{3} - i}\).

{{% details title="Solution commentée" closed="true" %}}
- \(z_1\) est un réel strictement positif : \({\arg(z_1) = 0 \ (2\pi)}\).
- \(z_2\) est un imaginaire pur de partie imaginaire strictement négative : son image est sur la demi-droite des ordonnées négatives, donc \({\arg(z_2) = -\dfrac{\pi}{2} \ (2\pi)}\).
- \({|z_3| = \sqrt{2}}\), donc \({\cos\theta = -\dfrac{1}{\sqrt{2}} = -\dfrac{\sqrt{2}}{2}}\) et \({\sin\theta = \dfrac{\sqrt{2}}{2}}\) : \({\arg(z_3) = \dfrac{3\pi}{4} \ (2\pi)}\).
- \({|z_4| = \sqrt{3 + 1} = 2}\), donc \({\cos\theta = -\dfrac{\sqrt{3}}{2}}\) et \({\sin\theta = -\dfrac{1}{2}}\) : \({\arg(z_4) = -\dfrac{5\pi}{6} \ (2\pi)}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Passer d’une forme à l’autre**
>
> 1. Donner la forme algébrique de \({z = 4\left(\cos\dfrac{2\pi}{3} + i\sin\dfrac{2\pi}{3}\right)}\).
> 2. Donner une forme trigonométrique de \({w = 1 - i}\), de \(w^5\) et de \({\dfrac{1 + i\sqrt{3}}{1 - i}}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}}\) et \({\sin\dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}}\), donc \({z = 4\left(-\dfrac{1}{2} + i\dfrac{\sqrt{3}}{2}\right) = -2 + 2\sqrt{3}\,i}\).
2. - \({|w| = \sqrt{2}}\), \({\cos\theta = \dfrac{\sqrt{2}}{2}}\), \({\sin\theta = -\dfrac{\sqrt{2}}{2}}\), donc \({\arg(w) = -\dfrac{\pi}{4} \ (2\pi)}\) et \({w = \sqrt{2}\left(\cos\left(-\dfrac{\pi}{4}\right) + i\sin\left(-\dfrac{\pi}{4}\right)\right)}\).
   - \({|w^5| = \left(\sqrt{2}\right)^5 = 4\sqrt{2}}\) et \({\arg(w^5) = -\dfrac{5\pi}{4} = \dfrac{3\pi}{4} \ (2\pi)}\), donc \({w^5 = 4\sqrt{2}\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)}\).
   - \({\left|1 + i\sqrt{3}\right| = 2}\) et \({\arg\left(1 + i\sqrt{3}\right) = \dfrac{\pi}{3}}\). Le quotient a pour module \({\dfrac{2}{\sqrt{2}} = \sqrt{2}}\) et pour argument \({\dfrac{\pi}{3} - \left(-\dfrac{\pi}{4}\right) = \dfrac{7\pi}{12} \ (2\pi)}\). Donc \({\dfrac{1 + i\sqrt{3}}{1 - i} = \sqrt{2}\left(\cos\dfrac{7\pi}{12} + i\sin\dfrac{7\pi}{12}\right)}\).
{{% /details %}}
