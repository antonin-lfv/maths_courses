---
title: 'Forme exponentielle'
weight: 2
cascade:
  type: docs
---

## Notation \(e^{i\theta}\)

> [!TIP] **Définition**
>
> Pour tout réel \(\theta\), on note
> \[
e^{i\theta} = \cos(\theta) + i\sin(\theta).
\]

> [!IMPORTANT] **Remarques**
>
> - \(e^{i\theta}\) est le nombre complexe de module 1 et d’argument \(\theta\) : son image est le point du cercle trigonométrique associé à \(\theta\). Ainsi \({\mathbb{U} = \{e^{i\theta},\ \theta \in \mathbb{R}\}}\).
> - Valeurs particulières : \({e^{i0} = 1}\), \({e^{i\frac{\pi}{2}} = i}\), \({e^{i\pi} = -1}\), \({e^{-i\frac{\pi}{2}} = -i}\).
> - \({e^{i\theta} = e^{i\theta'}}\) si et seulement si \({\theta = \theta' \ (2\pi)}\).

## Relation fonctionnelle

> [!TIP] **Propriétés**
>
> Pour tous réels \(\theta\) et \(\theta'\) et tout entier relatif \(n\) :
> \[
\begin{gathered}
e^{i\theta} \times e^{i\theta'} = e^{i(\theta + \theta')}, \qquad \left(e^{i\theta}\right)^n = e^{in\theta}, \qquad \dfrac{1}{e^{i\theta}} = e^{-i\theta}, \\[0.3em]
\dfrac{e^{i\theta}}{e^{i\theta'}} = e^{i(\theta - \theta')}, \qquad \overline{e^{i\theta}} = e^{-i\theta}.
\end{gathered}
\]

{{% details title="Démonstration" closed="true" %}}
- **Produit**, avec les formules d’addition :
\[
e^{i\theta}e^{i\theta'} = (\cos\theta + i\sin\theta)(\cos\theta' + i\sin\theta') = (\cos\theta\cos\theta' - \sin\theta\sin\theta') + i(\sin\theta\cos\theta' + \cos\theta\sin\theta') = \cos(\theta + \theta') + i\sin(\theta + \theta').
\]
- **Conjugué** : \(\overline{e^{i\theta}} = \cos\theta - i\sin\theta = \cos(-\theta) + i\sin(-\theta) = e^{-i\theta}\).
- **Inverse** : \({e^{i\theta} \times e^{-i\theta} = e^{i0} = 1}\), donc \({\dfrac{1}{e^{i\theta}} = e^{-i\theta}}\) ; le quotient s’en déduit.
- **Puissances** : récurrence sur \({n \in \mathbb{N}}\) à partir de la propriété du produit (\({\left(e^{i\theta}\right)^{n+1} = e^{in\theta}e^{i\theta} = e^{i(n+1)\theta}}\)), puis passage à l’inverse pour \({n < 0}\).

**Conséquence.** Si \({z = re^{i\theta}}\) et \({z' = r'e^{i\theta'}}\) (\({r, r' > 0}\)), alors \({zz' = rr'e^{i(\theta + \theta')}}\) : on obtient \({\arg(zz') = \arg(z) + \arg(z') \ (2\pi)}\), propriété admise au chapitre précédent.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Ces règles sont les mêmes que pour la fonction exponentielle réelle (\({e^ae^b = e^{a+b}}\)…), ce qui justifie la notation.

{{% details title="Exemples" closed="true" %}}
- \({e^{i\frac{\pi}{4}} \times e^{i\frac{\pi}{12}} = e^{i\left(\frac{3\pi}{12} + \frac{\pi}{12}\right)} = e^{i\frac{\pi}{3}}}\).
- \({\left(e^{i\frac{\pi}{6}}\right)^{9} = e^{i\frac{9\pi}{6}} = e^{i\frac{3\pi}{2}} = -i}\).
- \({\dfrac{e^{i\frac{\pi}{2}}}{e^{i\frac{2\pi}{3}}} = e^{i\left(\frac{\pi}{2} - \frac{2\pi}{3}\right)} = e^{-i\frac{\pi}{6}}}\).
{{% /details %}}

## Forme exponentielle d’un nombre complexe

> [!TIP] **Propriété et définition**
>
> Soient \(z\) un nombre complexe non nul, \({r > 0}\) et \(\theta\) deux réels. Alors
> \[
|z| = r \ \text{ et } \ \arg(z) = \theta \ (2\pi) \iff z = re^{i\theta}.
\]
> L’écriture \({z = re^{i\theta}}\) (avec \({r > 0}\)) s’appelle une **forme exponentielle** de \(z\).

{{% details title="Démonstration" closed="true" %}}
D’après la forme trigonométrique, \({|z| = r}\) et \({\arg(z) = \theta \ (2\pi)}\) équivaut à \({z = r(\cos\theta + i\sin\theta)}\), c’est-à-dire \({z = re^{i\theta}}\) par définition de \(e^{i\theta}\).
{{% /details %}}

{{% details title="Exemples" closed="true" %}}
- \({z = -3 + 3i}\) : \({|z| = 3\sqrt{2}}\) et \({\arg(z) = \dfrac{3\pi}{4} \ (2\pi)}\), donc \({z = 3\sqrt{2}\,e^{i\frac{3\pi}{4}}}\).
- Attention : \({-5e^{i\frac{\pi}{3}}}\) n’est pas une forme exponentielle, car \({-5 < 0}\). Comme \({-1 = e^{i\pi}}\), on écrit \({-5e^{i\frac{\pi}{3}} = 5e^{i\pi}e^{i\frac{\pi}{3}} = 5e^{i\frac{4\pi}{3}}}\), qui est une forme exponentielle (on peut aussi prendre l’argument \({-\dfrac{2\pi}{3}}\)).
{{% /details %}}

## Calculer avec la forme exponentielle

> [!NOTE] **Exercice résolu 1 - Écrire un nombre complexe sous forme exponentielle**
>
> Écrire sous forme exponentielle \({z_1 = 2\sqrt{3} - 2i}\) et \({z_2 = -4i}\).

{{% details title="Solution commentée" closed="true" %}}
1. \({|z_1| = \sqrt{12 + 4} = 4}\) ; \({\cos\theta = \dfrac{2\sqrt{3}}{4} = \dfrac{\sqrt{3}}{2}}\) et \({\sin\theta = \dfrac{-2}{4} = -\dfrac{1}{2}}\), donc \({\theta = -\dfrac{\pi}{6} \ (2\pi)}\) et \({z_1 = 4e^{-i\frac{\pi}{6}}}\).
2. \({|z_2| = 4}\) et \({z_2 = 4 \times (-i)}\) avec \({-i = e^{-i\frac{\pi}{2}}}\) : \({z_2 = 4e^{-i\frac{\pi}{2}}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 - Simplifier des écritures exponentielles**
>
> Écrire sous la forme \(re^{i\theta}\) avec \({r > 0}\) et \({\theta \in\, ]-\pi\,;\,\pi]}\) :
> \[
A = 3e^{i\frac{\pi}{5}} \times 2e^{i\frac{3\pi}{10}}, \qquad B = \dfrac{6e^{-i\frac{\pi}{4}}}{3e^{i\frac{2\pi}{3}}}, \qquad C = \left(\sqrt{2}\,e^{i\frac{3\pi}{8}}\right)^4.
\]

{{% details title="Solution commentée" closed="true" %}}
- \({A = 6e^{i\left(\frac{2\pi}{10} + \frac{3\pi}{10}\right)} = 6e^{i\frac{\pi}{2}}}\) (soit \({A = 6i}\)).
- \({B = 2e^{i\left(-\frac{\pi}{4} - \frac{2\pi}{3}\right)} = 2e^{-i\frac{11\pi}{12}}}\) ; \({-\dfrac{11\pi}{12} \in\, ]-\pi\,;\,\pi]}\).
- \({C = \left(\sqrt{2}\right)^4 e^{i\frac{12\pi}{8}} = 4e^{i\frac{3\pi}{2}} = 4e^{-i\frac{\pi}{2}}}\) (soit \({C = -4i}\)).
{{% /details %}}

> [!NOTE] **Exercice résolu 3 - Calculer une puissance**
>
> On pose \({z = 1 - i\sqrt{3}}\). Écrire \(z\) sous forme exponentielle, puis en déduire la forme algébrique de \(z^7\).

{{% details title="Solution commentée" closed="true" %}}
\({|z| = \sqrt{1 + 3} = 2}\), \({\cos\theta = \dfrac{1}{2}}\) et \({\sin\theta = -\dfrac{\sqrt{3}}{2}}\), donc \({z = 2e^{-i\frac{\pi}{3}}}\).

Alors \({z^7 = 2^7 e^{-i\frac{7\pi}{3}} = 128\,e^{-i\frac{\pi}{3}}}\), car \({-\dfrac{7\pi}{3} = -\dfrac{\pi}{3} - 2\pi}\). Donc
\[
z^7 = 128\left(\cos\left(-\dfrac{\pi}{3}\right) + i\sin\left(-\dfrac{\pi}{3}\right)\right) = 128\left(\dfrac{1}{2} - i\dfrac{\sqrt{3}}{2}\right) = 64 - 64\sqrt{3}\,i.
\]
{{% /details %}}
