---
title: 'Propriétés algébriques et fonctions sinusoïdales'
weight: 5
cascade:
  type: docs
---

## Propriétés algébriques du cosinus et du sinus

> [!TIP] **Propriétés**
>
> Pour tout réel \(t\) :
>
> | Angle associé | Cosinus | Sinus |
> |---|---|---|
> | \({-t}\) | \({\cos(-t) = \cos(t)}\) | \({\sin(-t) = -\sin(t)}\) |
> | \({\pi + t}\) | \({\cos(\pi + t) = -\cos(t)}\) | \({\sin(\pi + t) = -\sin(t)}\) |
> | \({\pi - t}\) | \({\cos(\pi - t) = -\cos(t)}\) | \({\sin(\pi - t) = \sin(t)}\) |
> | \({\dfrac{\pi}{2} - t}\) | \({\cos\left(\dfrac{\pi}{2} - t\right) = \sin(t)}\) | \({\sin\left(\dfrac{\pi}{2} - t\right) = \cos(t)}\) |

> [!IMPORTANT] **Remarque**
>
> Ces formules se lisent sur le cercle trigonométrique, à partir du point-image \(M(t)\) :
> - \({M(-t)}\) est son symétrique par rapport à l’axe des abscisses ;
> - \({M(\pi - t)}\) est son symétrique par rapport à l’axe des ordonnées ;
> - \({M(\pi + t)}\) est son symétrique par rapport à l’origine \(O\) ;
> - \({M\left(\dfrac{\pi}{2} - t\right)}\) est son symétrique par rapport à la droite d’équation \({y = x}\) : abscisse et ordonnée sont échangées.
>
> Les deux premières lignes du tableau traduisent la parité et la périodicité déjà vues : \(\cos\) est paire, \(\sin\) est impaire.

![](/images/image284.png)

{{% details title="Exemple" closed="true" %}}
On ramène chaque angle à un angle remarquable du premier quart de cercle.

- \(\cos\left(\dfrac{5\pi}{6}\right) = \cos\left(\pi - \dfrac{\pi}{6}\right) = -\cos\left(\dfrac{\pi}{6}\right) = -\dfrac{\sqrt{3}}{2}\).
- \(\sin\left(\dfrac{7\pi}{6}\right) = \sin\left(\pi + \dfrac{\pi}{6}\right) = -\sin\left(\dfrac{\pi}{6}\right) = -\dfrac{1}{2}\).
- \(\sin\left(\dfrac{\pi}{3}\right) = \sin\left(\dfrac{\pi}{2} - \dfrac{\pi}{6}\right) = \cos\left(\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2}\) : on retrouve que le sinus d’un angle est le cosinus de son complémentaire.
{{% /details %}}

## Fonctions sinusoïdales

> [!TIP] **Définition**
>
> On appelle **fonction sinusoïdale** toute fonction définie sur \(\mathbb{R}\) par une expression de la forme
> \[
t \mapsto A\cos(\omega t + \varphi) \quad \text{ou} \quad t \mapsto A\sin(\omega t + \varphi),
\]
> où \(A\) et \(\omega\) sont des réels strictement positifs et \(\varphi\) un réel.
> - \(A\) est l’**amplitude** : la fonction oscille entre \({-A}\) et \(A\) ;
> - \(\omega\) est la **pulsation** ;
> - \(\varphi\) est la **phase à l’origine**.

> [!IMPORTANT] **Remarque**
>
> Ces fonctions modélisent les phénomènes périodiques : oscillations mécaniques, courant alternatif, ondes sonores, marées… On rencontre aussi la forme \({t \mapsto A\cos(\omega t + \varphi) + h}\), dont la courbe est décalée verticalement de \(h\) et oscille entre \({h - A}\) et \({h + A}\).

> [!TIP] **Propriété**
>
> Une fonction sinusoïdale de pulsation \(\omega\) est périodique de période
> \[
T = \dfrac{2\pi}{\omega}.
\]

> [!IMPORTANT] **Remarque**
>
> En effet, \({\omega(t + T) + \varphi = \omega t + \varphi + 2\pi}\), et le cosinus et le sinus sont \(2\pi\)-périodiques. Le nombre de périodes par unité de temps est la **fréquence** \({f = \dfrac{1}{T} = \dfrac{\omega}{2\pi}}\).

![](/images/image285.png)

> [!TIP] **Propriétés (admises)**
>
> Soient \(A\), \(\omega\) et \(\varphi\) des réels.
> - La fonction \({t \mapsto A\cos(\omega t + \varphi)}\) est dérivable sur \(\mathbb{R}\), de dérivée \({t \mapsto -A\omega\sin(\omega t + \varphi)}\).
> - La fonction \({t \mapsto A\sin(\omega t + \varphi)}\) est dérivable sur \(\mathbb{R}\), de dérivée \({t \mapsto A\omega\cos(\omega t + \varphi)}\).

Ce sont des cas particuliers des formules de dérivation de \({x \mapsto \cos(ax + b)}\) et \({x \mapsto \sin(ax + b)}\).

{{% details title="Exemple" closed="true" %}}
On considère \({g(t) = 3\sin\left(2t + \dfrac{\pi}{3}\right)}\), représentée ci-dessus.

- Amplitude \({A = 3}\), pulsation \({\omega = 2}\), phase à l’origine \({\varphi = \dfrac{\pi}{3}}\).
- Période \({T = \dfrac{2\pi}{2} = \pi}\) : la courbe se répète tous les \({\pi \approx 3{,}14}\).
- Dérivée : \(g'(t) = 3 \times 2\cos\left(2t + \dfrac{\pi}{3}\right) = 6\cos\left(2t + \dfrac{\pi}{3}\right)\).
{{% /details %}}

## Modéliser un phénomène à l’aide d’une fonction sinusoïdale

> [!NOTE] **Exercice résolu**
>
> La roue d’une grande roue de fête foraine a un diamètre de 40 m ; son centre est à 22 m du sol. Elle tourne à vitesse constante et fait un tour complet en 8 minutes. À l’instant \({t = 0}\), une nacelle est au point le plus bas de la roue.
>
> On modélise la hauteur de la nacelle (en m) en fonction du temps \(t\) (en min) par \({h(t) = A\cos(\omega t + \varphi) + c}\), avec \({A > 0}\), \({\omega > 0}\) et \({\varphi \in \,]-\pi\,;\,\pi]}\).
>
> 1. Déterminer \(A\), \(c\), \(\omega\) puis \(\varphi\).
> 2. À quelle hauteur se trouve la nacelle au bout de 2 minutes ?

{{% details title="Solution commentée" closed="true" %}}
**1.** La nacelle tourne sur un cercle de rayon 20 m centré à 22 m du sol.

- Sa hauteur varie entre \({22 - 20 = 2}\) m et \({22 + 20 = 42}\) m. L’amplitude est la moitié de l’écart entre les hauteurs maximale et minimale : \({A = \dfrac{42 - 2}{2} = 20}\).
- La hauteur oscille autour de la hauteur du centre : \({c = \dfrac{42 + 2}{2} = 22}\).
- Un tour dure 8 min, donc la période est \({T = 8}\), et \({\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{8} = \dfrac{\pi}{4}}\).
- À \({t = 0}\), la nacelle est au point le plus bas : \({h(0) = 2}\), soit \({20\cos(\varphi) + 22 = 2}\), d’où \({\cos(\varphi) = -1}\). Avec \({\varphi \in \,]-\pi\,;\,\pi]}\), on obtient \({\varphi = \pi}\).

\[
h(t) = 20\cos\left(\dfrac{\pi}{4}t + \pi\right) + 22.
\]

(Comme \({\cos(\theta + \pi) = -\cos(\theta)}\), on peut aussi écrire \({h(t) = 22 - 20\cos\left(\dfrac{\pi}{4}t\right)}\).)

**2.** \(h(2) = 20\cos\left(\dfrac{\pi}{2} + \pi\right) + 22 = 20\cos\left(\dfrac{3\pi}{2}\right) + 22 = 0 + 22 = 22\).  
Au bout de 2 minutes, soit un quart de tour, la nacelle est à la hauteur du centre : 22 m.

![](/images/image286.png)
{{% /details %}}

## Exercices

> [!NOTE] **Exercice 1**
>
> Simplifier, pour tout réel \(x\) :
> 1. \(A(x) = \cos(\pi - x) + \sin\left(\dfrac{\pi}{2} - x\right) + \cos(-x)\)
> 2. \(B(x) = \sin(\pi + x) - \sin(-x) + \sin(\pi - x)\)
> 3. \({C = \cos\left(\dfrac{3\pi}{4}\right) + \sin\left(\dfrac{5\pi}{4}\right)}\)

{{% details title="Solution" closed="true" %}}
1. \(A(x) = -\cos(x) + \cos(x) + \cos(x) = \cos(x)\).
2. \(B(x) = -\sin(x) - (-\sin(x)) + \sin(x) = -\sin(x) + \sin(x) + \sin(x) = \sin(x)\).
3. \({\cos\left(\dfrac{3\pi}{4}\right) = \cos\left(\pi - \dfrac{\pi}{4}\right) = -\dfrac{\sqrt2}{2}}\) et \({\sin\left(\dfrac{5\pi}{4}\right) = \sin\left(\pi + \dfrac{\pi}{4}\right) = -\dfrac{\sqrt2}{2}}\), donc \({C = -\sqrt{2}}\).
{{% /details %}}

> [!NOTE] **Exercice 2**
>
> On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \({f(t) = 4\cos\left(3t - \dfrac{\pi}{6}\right)}\).
> 1. Donner l’amplitude, la pulsation et la phase à l’origine de \(f\).
> 2. Calculer sa période et sa fréquence.
> 3. Calculer \(f'(t)\).

{{% details title="Solution" closed="true" %}}
1. \({A = 4}\), \({\omega = 3}\), \({\varphi = -\dfrac{\pi}{6}}\).
2. \({T = \dfrac{2\pi}{3}}\) et \({f = \dfrac{1}{T} = \dfrac{3}{2\pi} \approx 0{,}48}\).
3. \(f'(t) = -4 \times 3\sin\left(3t - \dfrac{\pi}{6}\right) = -12\sin\left(3t - \dfrac{\pi}{6}\right)\).
{{% /details %}}

> [!NOTE] **Exercice 3**
>
> Aux États-Unis, la tension du secteur (en volts) est modélisée par \({u(t) = 170\sin(120\pi t)}\), où \(t\) est en secondes.
> 1. Quelle est la tension maximale ?
> 2. Déterminer la période et la fréquence de cette tension.

{{% details title="Solution" closed="true" %}}
1. L’amplitude est \({A = 170}\) : la tension varie entre \({-170}\) V et \(170\) V ; la tension maximale est 170 V.
2. \({\omega = 120\pi}\), donc \({T = \dfrac{2\pi}{120\pi} = \dfrac{1}{60}}\) s \({\approx 0{,}0167}\) s, et \({f = \dfrac{1}{T} = 60}\) Hz.
{{% /details %}}
