---
title: 'Espaces mesurables et mesures'
weight: 1
cascade:
  type: docs
---

L’intégrale de Riemann ne se comporte pas bien vis-à-vis des limites. La théorie de Lebesgue repose sur une idée différente : mesurer d’abord les ensembles, puis intégrer en découpant l’axe des ordonnées plutôt que celui des abscisses.

## Tribus

> [!TIP] **Définition**
>
> Une **tribu** (ou \(\sigma\)-algèbre) sur un ensemble \(X\) est une famille \(\mathcal{A}\) de parties de \(X\) telle que :
> - \({X \in \mathcal{A}}\) ;
> - si \({A \in \mathcal{A}}\), alors \({X \setminus A \in \mathcal{A}}\) ;
> - si \({A_n \in \mathcal{A}}\) pour tout \({n \in \mathbb{N}}\), alors \({\displaystyle\bigcup_{n \in \mathbb{N}} A_n \in \mathcal{A}}\).
>
> Le couple \((X, \mathcal{A})\) est un **espace mesurable** ; les éléments de \(\mathcal{A}\) sont les **parties mesurables**.

> [!TIP] **Propriétés**
>
> Une tribu contient \(\varnothing\), et elle est stable par réunion finie, par intersection finie ou dénombrable, et par différence. Une intersection quelconque de tribus est une tribu.

> [!TIP] **Définition - Tribu engendrée**
>
> Pour une famille \(\mathcal{C}\) de parties de \(X\), la **tribu engendrée** \(\sigma(\mathcal{C})\) est la plus petite tribu contenant \(\mathcal{C}\) : l’intersection de toutes les tribus qui contiennent \(\mathcal{C}\).

> [!NOTE] **Méthode - Montrer qu’une propriété vaut pour tous les éléments d’une tribu engendrée**
>
> On ne peut pas décrire explicitement les éléments de \(\sigma(\mathcal{C})\). Pour montrer qu’une propriété est vraie pour tout \({A \in \sigma(\mathcal{C})}\), on montre que l’ensemble des parties qui la vérifient est une **tribu** contenant \(\mathcal{C}\).

> [!TIP] **Définition - Tribu borélienne**
>
> La **tribu borélienne** \(\mathcal{B}(E)\) d’un espace métrique \(E\) est la tribu engendrée par les ouverts de \(E\). Ses éléments sont les **boréliens**.
>
> \(\mathcal{B}(\mathbb{R})\) est engendrée par chacune des familles suivantes : les intervalles ouverts \({]a, b[}\) ; les segments \([a, b]\) ; les demi-droites \({]-\infty, a]}\) ; les demi-droites \({]a, +\infty[}\).

Les ouverts, les fermés, les intervalles, les ensembles dénombrables, \(\mathbb{Q}\) et \({\mathbb{R} \setminus \mathbb{Q}}\) sont des boréliens de \(\mathbb{R}\). Il existe des parties de \(\mathbb{R}\) non boréliennes, mais on n’en rencontre pas en pratique.

{{% details title="Démonstration" closed="true" %}}
Tout ouvert de \(\mathbb{R}\) est réunion **dénombrable** d’intervalles ouverts à extrémités rationnelles, donc appartient à la tribu engendrée par les intervalles ouverts. Ensuite \({]a, b[ = \displaystyle\bigcup_{n} \left]-\infty, b - \dfrac{1}{n}\right] \setminus\, ]-\infty, a]}\) s’exprime avec les demi-droites.
{{% /details %}}

## Mesures

> [!TIP] **Définition**
>
> Une **mesure** (positive) sur \((X, \mathcal{A})\) est une application \({\mu : \mathcal{A} \to [0, +\infty]}\) telle que :
> - \({\mu(\varnothing) = 0}\) ;
> - **\(\sigma\)-additivité** : pour toute suite \((A_n)\) d’éléments de \(\mathcal{A}\) **deux à deux disjoints**,
>
> \[ \mu\left(\bigcup_{n \in \mathbb{N}} A_n\right) = \sum_{n=0}^{+\infty} \mu(A_n). \]
>
> Le triplet \((X, \mathcal{A}, \mu)\) est un **espace mesuré**. La mesure est **finie** si \({\mu(X) < +\infty}\), c’est une **probabilité** si \({\mu(X) = 1}\), et elle est **\(\sigma\)-finie** si \(X\) est réunion dénombrable de parties de mesure finie.

> [!TIP] **Exemples**
>
> - **Mesure de comptage** sur \((X, \mathcal{P}(X))\) : \({\mu(A) = \operatorname{card}(A)}\) si \(A\) est fini, \(+\infty\) sinon.
> - **Mesure de Dirac** en \(a\) : \({\delta_a(A) = 1}\) si \({a \in A}\), \(0\) sinon.
> - **Mesures discrètes** : \({\mu = \displaystyle\sum_n p_n\delta_{a_n}}\) avec \({p_n \geq 0}\).
> - **Mesure à densité** : une fois l’intégrale construite, \({\nu(A) = \displaystyle\int_A f\,\mathrm{d}\mu}\) pour \(f\) mesurable positive.

> [!TIP] **Propriétés**
>
> Pour des parties mesurables :
> - **croissance** : \({A \subset B \Rightarrow \mu(A) \leq \mu(B)}\) ; si de plus \({\mu(A) < +\infty}\), \({\mu(B \setminus A) = \mu(B) - \mu(A)}\) ;
> - \({\mu(A \cup B) + \mu(A \cap B) = \mu(A) + \mu(B)}\) ;
> - **sous-additivité dénombrable** : \({\mu\left(\displaystyle\bigcup_n A_n\right) \leq \sum_n \mu(A_n)}\) ;
> - **continuité croissante** : si \({A_n \subset A_{n+1}}\), alors \({\mu\left(\displaystyle\bigcup_n A_n\right) = \lim_n \mu(A_n)}\) ;
> - **continuité décroissante** : si \({A_{n+1} \subset A_n}\) **et** \({\mu(A_0) < +\infty}\), alors \({\mu\left(\displaystyle\bigcap_n A_n\right) = \lim_n \mu(A_n)}\).

> [!IMPORTANT] **Remarque**
>
> L’hypothèse de finitude est nécessaire dans le cas décroissant : pour la mesure de Lebesgue, \({A_n = [n, +\infty[}\) est de mesure infinie pour tout \(n\), alors que \({\displaystyle\bigcap_n A_n = \varnothing}\).

## Mesure de Lebesgue

> [!TIP] **Théorème (admis)**
>
> Il existe une unique mesure \(\lambda\) sur \((\mathbb{R}, \mathcal{B}(\mathbb{R}))\) telle que, pour tous \({a \leq b}\) :
>
> \[ \lambda([a, b]) = b - a. \]
>
> C’est la **mesure de Lebesgue**. Elle est \(\sigma\)-finie, **invariante par translation** (\({\lambda(A + x) = \lambda(A)}\)), et \({\lambda(cA) = |c|\lambda(A)}\). Sur \(\mathbb{R}^d\), la mesure de Lebesgue \(\lambda_d\) est l’unique mesure borélienne donnant aux pavés leur volume : \({\lambda_d\left(\prod [a_i, b_i]\right) = \prod (b_i - a_i)}\).

> [!TIP] **Propriétés**
>
> - \({\lambda(\{x\}) = 0}\) pour tout réel \(x\) ; donc \({\lambda(]a, b[) = \lambda([a, b]) = b - a}\).
> - Tout ensemble **dénombrable** est de mesure de Lebesgue nulle. En particulier \({\lambda(\mathbb{Q}) = 0}\).
> - Il existe des ensembles non dénombrables de mesure nulle (l’ensemble triadique de Cantor).

{{% details title="Démonstration" closed="true" %}}
\({\lambda(\{x\}) = \lambda([x, x]) = 0}\). Si \({D = \{x_n,\ n \in \mathbb{N}\}}\) est dénombrable, la \(\sigma\)-additivité donne \({\lambda(D) = \displaystyle\sum_n \lambda(\{x_n\}) = 0}\).
{{% /details %}}

> [!TIP] **Théorème - Unicité des mesures**
>
> Soient \(\mu\) et \(\nu\) deux mesures **finies** sur \((X, \mathcal{A})\), de même masse totale. Si elles coïncident sur une famille \(\mathcal{C}\) **stable par intersection finie** qui engendre \(\mathcal{A}\), alors \({\mu = \nu}\).
>
> En particulier, une probabilité sur \((\mathbb{R}, \mathcal{B}(\mathbb{R}))\) est caractérisée par sa **fonction de répartition** \({F(t) = \mu(]-\infty, t])}\).

## Ensembles négligeables

> [!TIP] **Définition**
>
> Une partie \(N\) de \(X\) est **négligeable** si elle est contenue dans une partie mesurable de mesure nulle. Une propriété \(P(x)\) est vraie **presque partout** (en abrégé p.p., ou \(\mu\)-p.p.) si l’ensemble des \(x\) où elle est fausse est négligeable.
>
> Une réunion **dénombrable** d’ensembles négligeables est négligeable.

{{% details title="Exemple" closed="true" %}}
Pour la mesure de Lebesgue, la fonction indicatrice \(\mathbb{1}_\mathbb{Q}\) est nulle presque partout, bien qu’elle soit discontinue en tout point. Deux fonctions égales presque partout seront indiscernables pour l’intégrale.
{{% /details %}}

> [!NOTE] **Exercice résolu - Limites supérieure et inférieure d’ensembles**
>
> Soit \((A_n)\) une suite de parties mesurables d’un espace mesuré \((X, \mathcal{A}, \mu)\). On pose
>
> \[ \limsup A_n = \bigcap_{n \geq 0}\bigcup_{k \geq n} A_k \qquad \text{(les } x \text{ qui appartiennent à une infinité de } A_n\text{)}. \]
>
> 1. Justifier que \(\limsup A_n\) est mesurable et que la description entre parenthèses est correcte.
> 2. **Lemme de Borel-Cantelli** : montrer que si \({\displaystyle\sum_n \mu(A_n) < +\infty}\), alors \({\mu(\limsup A_n) = 0}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour chaque \(n\), \({B_n = \displaystyle\bigcup_{k \geq n} A_k}\) est une réunion dénombrable de parties mesurables, donc mesurable ; puis \({\limsup A_n = \displaystyle\bigcap_n B_n}\) est une intersection dénombrable de parties mesurables, donc mesurable.

\({x \in \limsup A_n}\) signifie : pour tout \(n\), il existe \({k \geq n}\) tel que \({x \in A_k}\). Autrement dit, \(x\) appartient à des \(A_k\) d’indices arbitrairement grands, c’est-à-dire à une infinité de \(A_k\).

**2.** La suite \((B_n)\) est décroissante et, pour tout \(n\), \({\limsup A_n \subset B_n}\). Par croissance et sous-additivité :

\[
\mu(\limsup A_n) \leq \mu(B_n) \leq \sum_{k=n}^{+\infty} \mu(A_k).
\]

Le membre de droite est le reste d’une série convergente : il tend vers \(0\) quand \({n \to +\infty}\). Donc \({\mu(\limsup A_n) = 0}\).

Interprétation : si la série des mesures converge, presque tout point n’appartient qu’à un nombre fini de \(A_n\).
{{% /details %}}
