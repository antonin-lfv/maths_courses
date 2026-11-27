---
title: 'Théorème et formule de Cauchy'
weight: 1
cascade:
  type: docs
---

## Intégrale le long d’un chemin

> [!TIP] **Définition**
>
> Un **chemin** est une application \({\gamma : [a, b] \to \mathbb{C}}\) continue et de classe \(\mathcal{C}^1\) par morceaux. C’est un **lacet** si \({\gamma(a) = \gamma(b)}\). Pour \(f\) continue sur l’image de \(\gamma\) :
>
> \[ \int_\gamma f(z)\,\mathrm{d}z = \int_a^b f(\gamma(t))\,\gamma'(t)\,\mathrm{d}t. \]
>
> La **longueur** de \(\gamma\) est \({L(\gamma) = \displaystyle\int_a^b |\gamma'(t)|\,\mathrm{d}t}\).

> [!TIP] **Propriétés**
>
> - L’intégrale est linéaire en \(f\), ne dépend pas du paramétrage (à orientation fixée), change de signe quand on parcourt le chemin en sens inverse, et s’additionne quand on met des chemins bout à bout.
> - **Majoration standard** : \({\left|\displaystyle\int_\gamma f(z)\,\mathrm{d}z\right| \leq \sup_{z \in \gamma} |f(z)| \times L(\gamma)}\).
> - **Primitive** : si \(f\) admet une primitive holomorphe \(F\) sur \(U\) (\({F' = f}\)), alors pour tout chemin \(\gamma\) dans \(U\),
>
> \[ \int_\gamma f(z)\,\mathrm{d}z = F(\gamma(b)) - F(\gamma(a)). \]
>
>   En particulier, l’intégrale de \(f\) sur tout **lacet** est nulle.

{{% details title="Exemple" closed="true" %}}
**Le calcul fondamental.** Soit \(C(a, r)\) le cercle de centre \(a\) et de rayon \(r\), parcouru une fois dans le sens direct : \({\gamma(t) = a + re^{it}}\), \({t \in [0, 2\pi]}\), \({\gamma'(t) = ire^{it}}\). Pour \({n \in \mathbb{Z}}\) :

\[
\int_{C(a, r)} (z - a)^n\,\mathrm{d}z = \int_0^{2\pi} r^ne^{int}\,ire^{it}\,\mathrm{d}t = ir^{n+1}\int_0^{2\pi} e^{i(n+1)t}\,\mathrm{d}t = \begin{cases} 2i\pi & \text{si } n = -1, \\ 0 & \text{sinon.} \end{cases}
\]

Pour \({n \neq -1}\), c’est cohérent : \({(z - a)^n}\) a pour primitive \({\dfrac{(z - a)^{n+1}}{n + 1}}\). Pour \({n = -1}\), l’intégrale non nulle montre que \({\dfrac{1}{z - a}}\) **n’a pas de primitive** sur \({\mathbb{C} \setminus \{a\}}\) : il n’y a pas de logarithme holomorphe sur \(\mathbb{C}^*\).
{{% /details %}}

## Théorème de Cauchy

> [!TIP] **Définition**
>
> Un ouvert connexe \(U\) est **simplement connexe** s’il est « sans trou » : tout lacet de \(U\) peut être déformé continûment en un point à l’intérieur de \(U\). Les ouverts convexes et les ouverts étoilés sont simplement connexes ; \(\mathbb{C}^*\) et une couronne ne le sont pas.

> [!TIP] **Théorème de Cauchy**
>
> Soit \(f\) holomorphe sur un ouvert **simplement connexe** \(U\). Alors :
> - pour tout lacet \(\gamma\) dans \(U\), \({\displaystyle\int_\gamma f(z)\,\mathrm{d}z = 0}\) ;
> - \(f\) admet une primitive holomorphe sur \(U\) ;
> - l’intégrale de \(f\) entre deux points ne dépend pas du chemin choisi dans \(U\).

{{% details title="Démonstration" closed="true" %}}
Idée, pour \(U\) convexe. On montre d’abord (**lemme de Goursat**) que l’intégrale de \(f\) sur le bord de tout triangle plein inclus dans \(U\) est nulle : on découpe le triangle en quatre par les milieux des côtés, on garde celui où l’intégrale est la plus grande en module, et l’on itère ; les triangles se concentrent en un point \(z_0\), où le développement \({f(z) = f(z_0) + f'(z_0)(z - z_0) + o(|z - z_0|)}\) montre que les intégrales sont trop petites pour que l’intégrale initiale soit non nulle.

On fixe alors \({a \in U}\) et l’on pose \({F(z) = \displaystyle\int_{[a, z]} f}\). Le lemme de Goursat appliqué au triangle de sommets \(a\), \(z\), \({z + h}\) donne \({F(z + h) - F(z) = \displaystyle\int_{[z, z + h]} f}\), d’où \({F'(z) = f(z)}\) par continuité de \(f\).
{{% /details %}}

> [!TIP] **Corollaire - Déformation des contours**
>
> Si \(f\) est holomorphe sur un ouvert contenant la couronne fermée comprise entre deux cercles (ou deux lacets simples emboîtés), alors les intégrales de \(f\) sur ces deux contours, parcourus dans le même sens, sont égales. On peut déformer un contour tant que l’on ne franchit pas de singularité.

## Formule de Cauchy

> [!TIP] **Formule de Cauchy**
>
> Soit \(f\) holomorphe sur un ouvert contenant le disque fermé \(\overline{D}(a, r)\). Pour tout \(z\) dans le disque ouvert \(D(a, r)\) :
>
> \[ f(z) = \dfrac{1}{2i\pi}\int_{C(a, r)} \dfrac{f(w)}{w - z}\,\mathrm{d}w. \]

Les valeurs de \(f\) à l’intérieur du disque sont entièrement déterminées par ses valeurs sur le cercle.

{{% details title="Démonstration" closed="true" %}}
La fonction \({w \mapsto \dfrac{f(w) - f(z)}{w - z}}\) est holomorphe sur le disque privé de \(z\) et bornée près de \(z\) (elle tend vers \(f'(z)\)). Par déformation, son intégrale sur \(C(a, r)\) est égale à son intégrale sur un petit cercle \(C(z, \varepsilon)\), de module au plus \({M \times 2\pi\varepsilon}\), qui tend vers \(0\). Donc cette intégrale est nulle, et

\[
\int_{C(a, r)} \dfrac{f(w)}{w - z}\,\mathrm{d}w = f(z)\int_{C(a, r)} \dfrac{\mathrm{d}w}{w - z} = 2i\pi f(z),
\]

la dernière intégrale se calculant en déformant \(C(a, r)\) en un cercle centré en \(z\).
{{% /details %}}

> [!TIP] **Théorème - Analyticité et dérivées**
>
> Toute fonction \(f\) holomorphe sur \(U\) est **analytique** sur \(U\), donc indéfiniment dérivable. Si \({\overline{D}(a, r) \subset U}\), alors pour \({|z - a| < r}\) :
>
> \[ f(z) = \sum_{n=0}^{+\infty} a_n(z - a)^n, \qquad a_n = \dfrac{f^{(n)}(a)}{n!} = \dfrac{1}{2i\pi}\int_{C(a, r)} \dfrac{f(w)}{(w - a)^{n+1}}\,\mathrm{d}w. \]

{{% details title="Démonstration" closed="true" %}}
Pour \({|z - a| < r = |w - a|}\), on développe en série géométrique :

\[
\dfrac{1}{w - z} = \dfrac{1}{(w - a)\left(1 - \dfrac{z - a}{w - a}\right)} = \sum_{n=0}^{+\infty} \dfrac{(z - a)^n}{(w - a)^{n+1}},
\]

avec convergence normale en \(w\) sur le cercle (raison de module \({\dfrac{|z - a|}{r} < 1}\)). On reporte dans la formule de Cauchy et on intègre terme à terme.
{{% /details %}}

## Conséquences

> [!TIP] **Inégalités de Cauchy**
>
> Si \(f\) est holomorphe au voisinage de \(\overline{D}(a, r)\) et \({M(r) = \sup_{|z - a| = r} |f(z)|}\), alors pour tout \(n\) :
>
> \[ |f^{(n)}(a)| \leq \dfrac{n!\,M(r)}{r^n}. \]

> [!TIP] **Théorème de Liouville**
>
> Toute fonction **entière et bornée** est constante.

{{% details title="Démonstration" closed="true" %}}
Si \({|f| \leq M}\) sur \(\mathbb{C}\), les inégalités de Cauchy avec \({n = 1}\) donnent \({|f'(a)| \leq \dfrac{M}{r}}\) pour tout \({r > 0}\). En faisant tendre \(r\) vers \(+\infty\) : \({f'(a) = 0}\) pour tout \(a\), donc \(f\) est constante.
{{% /details %}}

> [!TIP] **Théorème de d’Alembert-Gauss**
>
> Tout polynôme non constant à coefficients complexes admet une racine dans \(\mathbb{C}\).

{{% details title="Démonstration" closed="true" %}}
Si \(P\) non constant ne s’annulait pas, \(\dfrac{1}{P}\) serait entière. Comme \({|P(z)| \to +\infty}\) quand \({|z| \to +\infty}\), \(\dfrac{1}{P}\) serait bornée, donc constante par le théorème de Liouville : contradiction.
{{% /details %}}

> [!TIP] **Propriété de la moyenne et principe du maximum**
>
> - **Moyenne** : \({f(a) = \dfrac{1}{2\pi}\displaystyle\int_0^{2\pi} f(a + re^{i\theta})\,\mathrm{d}\theta}\) : la valeur au centre est la moyenne des valeurs sur le cercle.
> - **Principe du maximum** : si \(f\) est holomorphe sur un ouvert **connexe** \(U\) et si \(|f|\) admet un maximum local en un point de \(U\), alors \(f\) est constante.
> - Par conséquent, si \(U\) est borné et \(f\) continue sur \(\overline{U}\), holomorphe sur \(U\), le maximum de \(|f|\) sur \(\overline{U}\) est atteint **sur le bord**.

> [!TIP] **Théorèmes de régularité**
>
> - **Morera** : une fonction continue sur \(U\) dont l’intégrale est nulle sur le bord de tout triangle plein inclus dans \(U\) est holomorphe.
> - **Weierstrass** : une limite uniforme sur tout compact de fonctions holomorphes est holomorphe, et les dérivées convergent aussi.
> - **Holomorphie sous l’intégrale** : si \({z \mapsto f(z, t)}\) est holomorphe pour tout \(t\) et si \({|f(z, t)| \leq g(t)}\) intégrable (localement en \(z\)), alors \({z \mapsto \displaystyle\int f(z, t)\,\mathrm{d}t}\) est holomorphe.

> [!NOTE] **Méthode - Calculer une intégrale sur un cercle avec la formule de Cauchy**
>
> Pour \({\displaystyle\int_{C} \dfrac{g(z)}{(z - a)^{n+1}}\,\mathrm{d}z}\) avec \(g\) holomorphe sur le disque fermé et \(a\) à l’intérieur du cercle : l’intégrale vaut \({\dfrac{2i\pi}{n!}g^{(n)}(a)}\). Si \(a\) est à l’extérieur, la fonction est holomorphe sur le disque et l’intégrale est nulle.

> [!NOTE] **Exercice résolu - Intégrales sur un cercle et fonction entière**
>
> 1. Calculer \({I = \displaystyle\int_{C(0, 2)} \dfrac{e^z}{z - 1}\,\mathrm{d}z}\), \({J = \displaystyle\int_{C(0, 2)} \dfrac{\cos z}{z^3}\,\mathrm{d}z}\) et \({K = \displaystyle\int_{C(0, 2)} \dfrac{e^z}{z - 3}\,\mathrm{d}z}\).
> 2. Soit \(f\) une fonction entière telle que \({|f(z)| \leq 5 + |z|^2}\) pour tout \(z\). Montrer que \(f\) est un polynôme de degré au plus \(2\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Les cercles sont parcourus une fois dans le sens direct.

- \(I\) : \({g(z) = e^z}\) est entière et \(1\) est à l’intérieur du cercle. Par la formule de Cauchy, \({I = 2i\pi g(1) = 2i\pi e}\).
- \(J\) : \({g(z) = \cos z}\), \({a = 0}\), \({n = 2}\) : \({J = \dfrac{2i\pi}{2!}g''(0) = i\pi \times (-\cos 0) = -i\pi}\).
- \(K\) : le point \(3\) est à l’extérieur du cercle, donc \({z \mapsto \dfrac{e^z}{z - 3}}\) est holomorphe sur le disque \(D(0, 3)\), convexe, qui contient le cercle. Par le théorème de Cauchy, \({K = 0}\).

**2.** \(f\) est entière : \({f(z) = \displaystyle\sum_{n \geq 0} a_nz^n}\) sur \(\mathbb{C}\), avec \({a_n = \dfrac{f^{(n)}(0)}{n!}}\). Les inégalités de Cauchy sur le cercle \(C(0, r)\) donnent, pour tout \({r > 0}\) :

\[
|a_n| \leq \dfrac{M(r)}{r^n} \leq \dfrac{5 + r^2}{r^n}.
\]

Pour \({n \geq 3}\), le majorant tend vers \(0\) quand \({r \to +\infty}\), donc \({a_n = 0}\). Ainsi \({f(z) = a_0 + a_1z + a_2z^2}\) : \(f\) est un polynôme de degré au plus \(2\).

C’est une généralisation du théorème de Liouville : une fonction entière à croissance polynomiale est un polynôme.
{{% /details %}}
