---
title: 'Module, argument, forme exponentielle'
weight: 1
cascade:
  type: docs
---

On note \(\mathbb{C}\) l’ensemble des nombres complexes \({z = x + iy}\), avec \(x\) et \(y\) réels et \({i^2 = -1}\). On rappelle que \({\mathrm{Re}(z) = x}\), \({\mathrm{Im}(z) = y}\), et que le conjugué de \(z\) est \({\overline{z} = x - iy}\). Dans le plan muni d’un repère orthonormé direct, le point \(M(x, y)\) est le point d’**affixe** \(z\).

## Conjugué et module

> [!TIP] **Propriétés**
>
> Pour tous complexes \(z\) et \(z'\) :
> - \({\overline{z + z'} = \overline{z} + \overline{z'}}\), \({\overline{zz'} = \overline{z}\,\overline{z'}}\), \({\overline{\overline{z}} = z}\) ;
> - \({\mathrm{Re}(z) = \dfrac{z + \overline{z}}{2}}\) et \({\mathrm{Im}(z) = \dfrac{z - \overline{z}}{2i}}\) ;
> - \(z\) est réel si et seulement si \({\overline{z} = z}\) ; \(z\) est imaginaire pur si et seulement si \({\overline{z} = -z}\).

> [!TIP] **Définition**
>
> Le **module** de \({z = x + iy}\) est le réel positif \({|z| = \sqrt{x^2 + y^2} = \sqrt{z\overline{z}}}\). C’est la distance de l’origine au point d’affixe \(z\) ; \({|z - z'|}\) est la distance entre les points d’affixes \(z\) et \(z'\).

> [!TIP] **Propriétés**
>
> Pour tous complexes \(z\) et \(z'\) :
> - \({|z| = 0 \iff z = 0}\) ;
> - \({|zz'| = |z|\,|z'|}\), \({|\overline{z}| = |z|}\) et, si \({z' \neq 0}\), \({\left|\dfrac{z}{z'}\right| = \dfrac{|z|}{|z'|}}\) ;
> - si \({z \neq 0}\), \({\dfrac{1}{z} = \dfrac{\overline{z}}{|z|^2}}\) ;
> - \({|\mathrm{Re}(z)| \leq |z|}\) et \({|\mathrm{Im}(z)| \leq |z|}\) ;
> - **inégalité triangulaire** : \({|z + z'| \leq |z| + |z'|}\), avec égalité si et seulement si \({z' = 0}\) ou \({z = \lambda z'}\) avec \(\lambda\) réel positif ;
> - \({\big||z| - |z'|\big| \leq |z - z'|}\).

{{% details title="Démonstration" closed="true" %}}
Pour l’inégalité triangulaire, on compare les carrés :

\[
|z + z'|^2 = (z + z')(\overline{z} + \overline{z'}) = |z|^2 + |z'|^2 + z\overline{z'} + \overline{z}z' = |z|^2 + |z'|^2 + 2\,\mathrm{Re}(z\overline{z'}).
\]

Or \({\mathrm{Re}(z\overline{z'}) \leq |z\overline{z'}| = |z||z'|}\), donc \({|z + z'|^2 \leq (|z| + |z'|)^2}\), et l’on conclut car les deux membres sont positifs.

Il y a égalité si et seulement si \({\mathrm{Re}(z\overline{z'}) = |z\overline{z'}|}\), c’est-à-dire si \(z\overline{z'}\) est un réel positif. Si \({z' \neq 0}\), cela équivaut à \({z = \lambda z'}\) avec \({\lambda = \dfrac{z\overline{z'}}{|z'|^2} \geq 0}\).

Pour la dernière inégalité : \({|z| = |(z - z') + z'| \leq |z - z'| + |z'|}\), donc \({|z| - |z'| \leq |z - z'|}\). En échangeant les rôles, \({|z'| - |z| \leq |z - z'|}\).
{{% /details %}}

## Nombres complexes de module 1

> [!TIP] **Définition**
>
> On note \(\mathbb{U}\) l’ensemble des nombres complexes de module \(1\) : c’est le cercle trigonométrique. Pour tout réel \(\theta\), on pose
>
> \[ e^{i\theta} = \cos\theta + i\sin\theta. \]
>
> Tout élément de \(\mathbb{U}\) s’écrit \(e^{i\theta}\) pour un réel \(\theta\), unique à \(2\pi\) près.

> [!TIP] **Propriétés**
>
> Pour tous réels \(\theta\), \(\theta'\) et tout entier relatif \(n\) :
> - \({e^{i\theta}e^{i\theta'} = e^{i(\theta + \theta')}}\) ;
> - \({\overline{e^{i\theta}} = \dfrac{1}{e^{i\theta}} = e^{-i\theta}}\) ;
> - \({e^{i\theta} = e^{i\theta'} \iff \theta \equiv \theta' \ [2\pi]}\) ;
> - **formule de Moivre** : \({\left(e^{i\theta}\right)^n = e^{in\theta}}\), soit \({(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)}\) ;
> - **formules d’Euler** : \({\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}}\) et \({\sin\theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i}}\).

{{% details title="Démonstration" closed="true" %}}
La première propriété est une réécriture des formules d’addition :

\[
\begin{aligned}
e^{i\theta}e^{i\theta'} &= (\cos\theta\cos\theta' - \sin\theta\sin\theta') + i(\sin\theta\cos\theta' + \cos\theta\sin\theta') \\[0.3em]
&= \cos(\theta + \theta') + i\sin(\theta + \theta').
\end{aligned}
\]

Les autres s’en déduisent : \({e^{i\theta}e^{-i\theta} = e^{0} = 1}\) ; la formule de Moivre s’obtient par récurrence pour \({n \geq 0}\), puis en passant à l’inverse pour \({n < 0}\) ; les formules d’Euler en ajoutant et en soustrayant \({e^{i\theta} = \cos\theta + i\sin\theta}\) et \({e^{-i\theta} = \cos\theta - i\sin\theta}\).
{{% /details %}}

## Argument et forme exponentielle

> [!TIP] **Définition**
>
> Soit \(z\) un complexe **non nul**. Le complexe \(\dfrac{z}{|z|}\) est de module \(1\) : il existe un réel \(\theta\) tel que
>
> \[ z = |z|\,e^{i\theta} = |z|(\cos\theta + i\sin\theta). \]
>
> Un tel réel \(\theta\) est un **argument** de \(z\), noté \(\arg z\). Il est défini à \(2\pi\) près. L’écriture \({z = re^{i\theta}}\) avec \({r > 0}\) est la **forme exponentielle** (ou trigonométrique) de \(z\).

> [!TIP] **Propriétés**
>
> Pour tous complexes non nuls \(z\) et \(z'\) et tout entier relatif \(n\) :
> - \({re^{i\theta} = r'e^{i\theta'}}\) (avec \({r, r' > 0}\)) si et seulement si \({r = r'}\) et \({\theta \equiv \theta' \ [2\pi]}\) ;
> - \({\arg(zz') \equiv \arg z + \arg z' \ [2\pi]}\) ;
> - \({\arg\left(\dfrac{z}{z'}\right) \equiv \arg z - \arg z' \ [2\pi]}\) et \({\arg(\overline{z}) \equiv -\arg z \ [2\pi]}\) ;
> - \({\arg(z^n) \equiv n\arg z \ [2\pi]}\).

> [!IMPORTANT] **Remarque**
>
> Dans une écriture \({z = re^{i\theta}}\), on ne peut lire le module et un argument que si \({r > 0}\). Par exemple, \({-3e^{i\pi/5} = 3e^{i\pi}e^{i\pi/5} = 3e^{6i\pi/5}}\) a pour module \(3\) et pour argument \(\dfrac{6\pi}{5}\).

{{% details title="Exemple" closed="true" %}}
Soit \({z = -\sqrt{3} + i}\). On a \({|z| = \sqrt{3 + 1} = 2}\), donc \({z = 2\left(-\dfrac{\sqrt{3}}{2} + \dfrac{1}{2}i\right)}\). On cherche \(\theta\) tel que \({\cos\theta = -\dfrac{\sqrt{3}}{2}}\) et \({\sin\theta = \dfrac{1}{2}}\) : \({\theta = \dfrac{5\pi}{6}}\) convient. Ainsi \({z = 2e^{5i\pi/6}}\).

On en déduit \({z^6 = 2^6 e^{5i\pi} = 64e^{i\pi} = -64}\).
{{% /details %}}

## Applications à la trigonométrie

> [!NOTE] **Méthode - Factoriser par l’angle moitié**
>
> Pour simplifier \({e^{ip} + e^{iq}}\) ou \({e^{ip} - e^{iq}}\), on met en facteur \(e^{i(p+q)/2}\), puis on utilise les formules d’Euler :
>
> \[ e^{ip} + e^{iq} = e^{i\frac{p+q}{2}}\left(e^{i\frac{p-q}{2}} + e^{-i\frac{p-q}{2}}\right) = 2\cos\left(\dfrac{p-q}{2}\right)e^{i\frac{p+q}{2}}. \]
>
> De même, \({e^{ip} - e^{iq} = 2i\sin\left(\dfrac{p-q}{2}\right)e^{i\frac{p+q}{2}}}\). En particulier, \({1 + e^{i\theta} = 2\cos\dfrac{\theta}{2}\,e^{i\theta/2}}\) et \({1 - e^{i\theta} = -2i\sin\dfrac{\theta}{2}\,e^{i\theta/2}}\).

> [!NOTE] **Méthode - Linéariser**
>
> Pour transformer \(\cos^p\theta\,\sin^q\theta\) en somme de termes \(\cos(k\theta)\) et \(\sin(k\theta)\), on remplace \(\cos\theta\) et \(\sin\theta\) par les formules d’Euler, on développe avec le binôme, puis on regroupe les termes conjugués.

{{% details title="Exemple" closed="true" %}}
Linéarisons \(\sin^3\theta\).

\[
\begin{aligned}
\sin^3\theta &= \left(\dfrac{e^{i\theta} - e^{-i\theta}}{2i}\right)^3 = \dfrac{e^{3i\theta} - 3e^{i\theta} + 3e^{-i\theta} - e^{-3i\theta}}{-8i} \\[0.3em]
&= -\dfrac{1}{4} \times \dfrac{e^{3i\theta} - e^{-3i\theta}}{2i} + \dfrac{3}{4} \times \dfrac{e^{i\theta} - e^{-i\theta}}{2i} \\[0.3em]
&= \dfrac{3\sin\theta - \sin(3\theta)}{4}.
\end{aligned}
\]

On a utilisé \({(2i)^3 = -8i}\).
{{% /details %}}

> [!NOTE] **Méthode - Exprimer \(\cos(n\theta)\) et \(\sin(n\theta)\) en fonction de \(\cos\theta\) et \(\sin\theta\)**
>
> On développe \({(\cos\theta + i\sin\theta)^n}\) avec le binôme, puis on identifie parties réelle et imaginaire avec \({\cos(n\theta) + i\sin(n\theta)}\) (formule de Moivre).

{{% details title="Exemple" closed="true" %}}
\[
(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta.
\]

Donc \({\cos(3\theta) = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta}\) et \({\sin(3\theta) = 3\cos^2\theta\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Une somme de cosinus**
>
> Soit \(n\) un entier naturel et \(\theta\) un réel tel que \({\theta \not\equiv 0 \ [2\pi]}\). Calculer \({C_n = \displaystyle\sum_{k=0}^{n} \cos(k\theta)}\).

{{% details title="Solution commentée" closed="true" %}}
\(C_n\) est la partie réelle de \({S_n = \displaystyle\sum_{k=0}^{n} e^{ik\theta} = \sum_{k=0}^{n} \left(e^{i\theta}\right)^k}\), somme des termes d’une suite géométrique de raison \({e^{i\theta} \neq 1}\) :

\[
S_n = \dfrac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}}.
\]

On factorise par l’angle moitié au numérateur et au dénominateur :

\[
S_n = \dfrac{-2i\sin\left(\dfrac{(n+1)\theta}{2}\right)e^{i(n+1)\theta/2}}{-2i\sin\left(\dfrac{\theta}{2}\right)e^{i\theta/2}} = \dfrac{\sin\left(\dfrac{(n+1)\theta}{2}\right)}{\sin\left(\dfrac{\theta}{2}\right)}\,e^{in\theta/2}.
\]

Le quotient des sinus est réel. En prenant la partie réelle :

\[
C_n = \dfrac{\sin\left(\dfrac{(n+1)\theta}{2}\right)\cos\left(\dfrac{n\theta}{2}\right)}{\sin\left(\dfrac{\theta}{2}\right)}.
\]

Vérification pour \({n = 1}\) et \({\theta = \pi}\) : \({C_1 = 1 + \cos\pi = 0}\), et la formule donne \({\dfrac{\sin(\pi)\cos(\pi/2)}{\sin(\pi/2)} = 0}\).
{{% /details %}}
