---
title: 'Analyticité et principe des zéros isolés'
weight: 1
cascade:
  type: docs
---

## Séries entières complexes

> [!TIP] **Théorème**
>
> Soit \({\sum a_n(z - z_0)^n}\) une série entière de rayon de convergence \({R > 0}\). Sa somme \(f\) est **holomorphe** sur le disque ouvert \({D(z_0, R) = \{|z - z_0| < R\}}\), et
>
> \[ f'(z) = \sum_{n=1}^{+\infty} na_n(z - z_0)^{n-1}. \]
>
> Par conséquent, \(f\) est indéfiniment \(\mathbb{C}\)-dérivable sur ce disque, et \({a_n = \dfrac{f^{(n)}(z_0)}{n!}}\).

{{% details title="Démonstration" closed="true" %}}
On prend \({z_0 = 0}\). La série dérivée a le même rayon \(R\) ; notons \(g\) sa somme. Pour \({|z| < r < R}\) et \({|h| \leq r - |z|}\), la formule \({(z + h)^n - z^n - nhz^{n-1} = h^2\displaystyle\sum_{k=2}^{n} \dbinom{n}{k}h^{k-2}z^{n-k}}\) donne

\[
\left|\dfrac{f(z + h) - f(z)}{h} - g(z)\right| \leq |h|\sum_{n \geq 2} |a_n|\,n(n-1)\,r^{n-2},
\]

et la série de droite converge (série dérivée seconde, de rayon \(R\)). Le membre de gauche tend donc vers \(0\) avec \(h\).
{{% /details %}}

## Fonctions analytiques

> [!TIP] **Définition**
>
> Une fonction \({f : U \to \mathbb{C}}\) est **analytique** sur l’ouvert \(U\) si, pour tout \({z_0 \in U}\), il existe \({r > 0}\) et une série entière telle que \({f(z) = \displaystyle\sum_{n=0}^{+\infty} a_n(z - z_0)^n}\) pour \({|z - z_0| < r}\).

> [!TIP] **Théorème**
>
> - Toute fonction analytique est holomorphe (et indéfiniment \(\mathbb{C}\)-dérivable).
> - La somme d’une série entière est analytique sur son disque ouvert de convergence.
> - **Réciproque fondamentale** (démontrée avec la formule de Cauchy) : toute fonction holomorphe sur \(U\) est analytique sur \(U\). De plus, son développement en série entière en \(z_0\) converge sur **le plus grand disque** centré en \(z_0\) et inclus dans \(U\).

C’est une différence majeure avec l’analyse réelle : une fonction dérivable une fois au sens complexe est automatiquement \(\mathcal{C}^\infty\) et développable en série entière. La fonction réelle \({x \mapsto e^{-1/x^2}}\), \(\mathcal{C}^\infty\) mais non analytique en \(0\), n’a pas d’équivalent holomorphe.

> [!NOTE] **Méthode - Trouver un rayon de convergence sans calcul**
>
> Le rayon de convergence du développement en \(z_0\) d’une fonction \(f\) est la distance de \(z_0\) à la **singularité la plus proche** de \(f\) dans \(\mathbb{C}\).

{{% details title="Exemple" closed="true" %}}
La fonction réelle \({x \mapsto \dfrac{1}{1 + x^2}}\) est \(\mathcal{C}^\infty\) sur \(\mathbb{R}\), mais son développement en \(0\), \({\sum (-1)^nx^{2n}}\), n’a que \(1\) pour rayon. L’explication est complexe : \({z \mapsto \dfrac{1}{1 + z^2}}\) a deux pôles en \(i\) et \(-i\), à distance \(1\) de l’origine.

De même, le développement de \({\dfrac{1}{1 + z^2}}\) au point \({z_0 = 1}\) a pour rayon \({|1 - i| = \sqrt{2}}\).
{{% /details %}}

## Zéros d’une fonction holomorphe

> [!TIP] **Définition et propriété - Ordre d’un zéro**
>
> Soit \(f\) holomorphe au voisinage de \(a\), non identiquement nulle près de \(a\), avec \({f(a) = 0}\). L’**ordre** (ou multiplicité) du zéro \(a\) est le plus petit entier \({m \geq 1}\) tel que \({f^{(m)}(a) \neq 0}\). Il existe alors une fonction \(g\) holomorphe au voisinage de \(a\) telle que
>
> \[ f(z) = (z - a)^mg(z), \qquad g(a) = \dfrac{f^{(m)}(a)}{m!} \neq 0. \]

> [!TIP] **Théorème - Principe des zéros isolés**
>
> Soit \(f\) holomorphe sur un ouvert **connexe** \(U\), non identiquement nulle. Alors les zéros de \(f\) sont **isolés** : tout zéro \(a\) possède un voisinage dans lequel il est le seul zéro. L’ensemble des zéros n’a donc pas de point d’accumulation dans \(U\), et il est au plus dénombrable.

{{% details title="Démonstration" closed="true" %}}
Soit \(A\) l’ensemble des points de \(U\) au voisinage desquels \(f\) est identiquement nulle. \(A\) est ouvert par définition. Il est fermé dans \(U\) : si \({z_0 \in U \setminus A}\), le développement de \(f\) en \(z_0\) n’est pas nul, donc l’une des dérivées \(f^{(n)}(z_0)\) est non nulle, et par continuité elle reste non nulle près de \(z_0\), de sorte qu’aucun point voisin n’est dans \(A\). Par connexité, \({A = \varnothing}\) ou \({A = U}\) ; comme \({f \neq 0}\), \({A = \varnothing}\).

Tout zéro \(a\) est donc d’ordre fini \(m\) : \({f(z) = (z - a)^mg(z)}\) avec \({g(a) \neq 0}\). Par continuité, \(g\) ne s’annule pas près de \(a\), donc \(f\) ne s’annule qu’en \(a\) dans ce voisinage.
{{% /details %}}

> [!TIP] **Théorème - Principe du prolongement analytique**
>
> Soient \(f\) et \(g\) holomorphes sur un ouvert **connexe** \(U\). Si \(f\) et \(g\) coïncident sur une partie de \(U\) qui possède un **point d’accumulation dans \(U\)** (par exemple un segment, un petit disque, ou une suite convergeant vers un point de \(U\)), alors \({f = g}\) sur \(U\).

{{% details title="Démonstration" closed="true" %}}
On applique le principe des zéros isolés à \({f - g}\) : ses zéros ne sont pas isolés, donc elle est identiquement nulle.
{{% /details %}}

Une fonction holomorphe est donc entièrement déterminée par ses valeurs sur un ensemble aussi petit qu’un segment : c’est une forme de **rigidité**, sans équivalent pour les fonctions \(\mathcal{C}^\infty\) réelles.

> [!TIP] **Applications**
>
> - **Prolongement des identités** : les formules \({\cos^2 z + \sin^2 z = 1}\), \({\sin(2z) = 2\sin z\cos z}\), vraies pour \(z\) réel, sont vraies pour tout \(z\) complexe, car les deux membres sont des fonctions entières qui coïncident sur \(\mathbb{R}\).
> - **Unicité du prolongement** : une fonction définie sur un intervalle de \(\mathbb{R}\) admet au plus un prolongement holomorphe à un ouvert connexe donné contenant cet intervalle. L’exponentielle complexe est ainsi le seul prolongement entier de l’exponentielle réelle.
> - L’anneau \(\mathcal{H}(U)\) est **intègre** si \(U\) est connexe : si \({fg = 0}\), alors \({f = 0}\) ou \({g = 0}\).

> [!IMPORTANT] **Remarque**
>
> Le point d’accumulation doit être **dans \(U\)**. La fonction \({f(z) = \sin\left(\dfrac{\pi}{z}\right)}\) est holomorphe sur \(\mathbb{C}^*\), non nulle, et s’annule en tous les \(\dfrac{1}{n}\), qui s’accumulent en \(0\) ; mais \({0 \notin \mathbb{C}^*}\), il n’y a pas de contradiction.

> [!NOTE] **Exercice résolu - Zéros isolés et prolongement**
>
> 1. Existe-t-il une fonction \(f\) holomorphe sur le disque unité \({D = D(0, 1)}\) telle que \({f\left(\dfrac{1}{n}\right) = \dfrac{1}{n^2}}\) pour tout entier \({n \geq 2}\) ? telle que \({f\left(\dfrac{1}{n}\right) = \dfrac{(-1)^n}{n}}\) pour tout \({n \geq 2}\) ?
> 2. Déterminer l’ordre du zéro en \(0\) de \({g(z) = \sin z - z}\) et de \({h(z) = 1 - \cos z}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** *Premier cas.* La fonction \({z \mapsto z^2}\) convient. C’est la seule : si \(f\) convient, \(f\) et \(z^2\) sont holomorphes sur \(D\) connexe et coïncident sur l’ensemble \({\left\{\dfrac{1}{n}\right\}}\), qui a pour point d’accumulation \({0 \in D}\). Par le principe du prolongement analytique, \({f(z) = z^2}\).

*Second cas.* Supposons qu’une telle \(f\) existe. Sur les indices pairs, \({f\left(\dfrac{1}{2k}\right) = \dfrac{1}{2k}}\) : \(f\) coïncide avec \({z \mapsto z}\) sur un ensemble ayant \(0\) pour point d’accumulation, donc \({f(z) = z}\) sur \(D\). Sur les indices impairs, le même argument donne \({f(z) = -z}\) sur \(D\). Contradiction : il n’existe pas de telle fonction.

**2.** Avec les développements en série entière :

\[
\sin z - z = -\dfrac{z^3}{6} + \dfrac{z^5}{120} - \dots = z^3\left(-\dfrac{1}{6} + \dfrac{z^2}{120} - \dots\right),
\]

et le facteur entre parenthèses vaut \({-\dfrac{1}{6} \neq 0}\) en \(0\) : \(0\) est un zéro d’ordre \(3\) de \(g\).

\[
1 - \cos z = \dfrac{z^2}{2} - \dfrac{z^4}{24} + \dots = z^2\left(\dfrac{1}{2} - \dfrac{z^2}{24} + \dots\right),
\]

donc \(0\) est un zéro d’ordre \(2\) de \(h\). On le vérifie avec les dérivées : \({h(0) = h'(0) = 0}\) et \({h''(0) = \cos 0 = 1 \neq 0}\).
{{% /details %}}
