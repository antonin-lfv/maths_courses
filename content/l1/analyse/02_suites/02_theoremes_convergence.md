---
title: 'Théorèmes de convergence et comparaison'
weight: 2
cascade:
  type: docs
---

## Suites monotones

> [!TIP] **Théorème de la limite monotone**
>
> - Toute suite **croissante et majorée** converge, vers \({\ell = \sup\{u_n,\ n \in \mathbb{N}\}}\). Toute suite croissante non majorée tend vers \(+\infty\).
> - Toute suite **décroissante et minorée** converge, vers \({\inf\{u_n,\ n \in \mathbb{N}\}}\). Toute suite décroissante non minorée tend vers \(-\infty\).

{{% details title="Démonstration" closed="true" %}}
Soit \((u_n)\) croissante et majorée. L’ensemble de ses termes est non vide et majoré : il a une borne supérieure \(\ell\). Soit \({\varepsilon > 0}\). Par caractérisation de la borne supérieure, il existe \(N\) tel que \({u_N > \ell - \varepsilon}\). Pour \({n \geq N}\), par croissance, \({\ell - \varepsilon < u_N \leq u_n \leq \ell}\). Donc \({|u_n - \ell| \leq \varepsilon}\).

Si \((u_n)\) est croissante non majorée : pour tout réel \(A\), il existe \(N\) tel que \({u_N > A}\), et alors \({u_n \geq u_N > A}\) pour tout \({n \geq N}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le théorème donne l’existence de la limite, pas sa valeur. Un majorant de la suite n’est pas forcément sa limite : on sait seulement que \({\ell \leq M}\).

## Suites adjacentes

> [!TIP] **Définition et théorème**
>
> Deux suites \((u_n)\) et \((v_n)\) sont **adjacentes** si \((u_n)\) est croissante, \((v_n)\) décroissante et \({v_n - u_n \to 0}\).
>
> Deux suites adjacentes convergent vers la même limite \(\ell\), et pour tout \(n\) : \({u_n \leq \ell \leq v_n}\).

{{% details title="Démonstration" closed="true" %}}
La suite \({(v_n - u_n)}\) est décroissante et tend vers \(0\), donc elle est positive : \({u_n \leq v_n}\) pour tout \(n\). Alors \({u_n \leq v_n \leq v_0}\) : \((u_n)\) est croissante et majorée, donc converge vers un réel \(\ell\). De même, \((v_n)\) est décroissante et minorée par \(u_0\), donc converge vers \(\ell'\). Enfin \({\ell' - \ell = \lim(v_n - u_n) = 0}\). L’encadrement vient de la monotonie.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Pour \({n \geq 1}\), posons \({u_n = \displaystyle\sum_{k=0}^{n} \dfrac{1}{k!}}\) et \({v_n = u_n + \dfrac{1}{n \times n!}}\).

- \({u_{n+1} - u_n = \dfrac{1}{(n+1)!} > 0}\) : \((u_n)\) est croissante.
- \({v_{n+1} - v_n = \dfrac{1}{(n+1)!} + \dfrac{1}{(n+1)(n+1)!} - \dfrac{1}{n \times n!} = \dfrac{n(n+1) + n - (n+1)^2}{n(n+1)(n+1)!} = \dfrac{-1}{n(n+1)(n+1)!} < 0}\) : \((v_n)\) est décroissante.
- \({v_n - u_n = \dfrac{1}{n \times n!} \to 0}\).

Les deux suites sont adjacentes. Leur limite commune est le nombre \(e\), et \({u_n < e < v_n}\) fournit un encadrement d’amplitude \(\dfrac{1}{n \times n!}\).
{{% /details %}}

## Suites extraites

> [!TIP] **Définition**
>
> Une **suite extraite** (ou sous-suite) de \((u_n)\) est une suite de la forme \({(u_{\varphi(n)})}\), où \({\varphi : \mathbb{N} \to \mathbb{N}}\) est strictement croissante. On a alors \({\varphi(n) \geq n}\) pour tout \(n\).

> [!TIP] **Théorème**
>
> - Si \((u_n)\) tend vers \(\ell\) (fini ou infini), toute suite extraite de \((u_n)\) tend vers \(\ell\).
> - Si \({(u_{2n})}\) et \({(u_{2n+1})}\) tendent vers la même limite \(\ell\), alors \((u_n)\) tend vers \(\ell\).

> [!NOTE] **Méthode - Montrer qu’une suite diverge**
>
> Il suffit de trouver deux suites extraites qui ont des limites différentes, ou une suite extraite qui diverge.

{{% details title="Exemple" closed="true" %}}
Pour \({u_n = \cos\left(\dfrac{n\pi}{2}\right)}\) : \({u_{4n} = 1}\) et \({u_{4n+2} = -1}\). Deux suites extraites ont des limites différentes : \((u_n)\) diverge.
{{% /details %}}

> [!TIP] **Théorème de Bolzano-Weierstrass**
>
> De toute suite réelle **bornée**, on peut extraire une suite convergente.

{{% details title="Démonstration" closed="true" %}}
Par dichotomie. Soit \((u_n)\) à valeurs dans \({[a_0, b_0]}\). On coupe l’intervalle en deux moitiés : l’une au moins contient \(u_n\) pour une infinité d’indices \(n\) ; on la note \({[a_1, b_1]}\). On recommence, et l’on construit des segments emboîtés \({[a_k, b_k]}\) de longueur \(\dfrac{b_0 - a_0}{2^k}\), chacun contenant une infinité de termes de la suite.

Les suites \((a_k)\) et \((b_k)\) sont adjacentes : elles convergent vers un même réel \(\ell\). On choisit alors par récurrence des indices \({\varphi(0) < \varphi(1) < \dots}\) tels que \({u_{\varphi(k)} \in [a_k, b_k]}\), ce qui est possible puisque chaque segment contient une infinité de termes. Par encadrement, \({u_{\varphi(k)} \to \ell}\).
{{% /details %}}

## Suites récurrentes \({u_{n+1} = f(u_n)}\)

> [!NOTE] **Méthode**
>
> 1. **Bonne définition** : trouver un intervalle \(I\) **stable** par \(f\) (\({f(I) \subset I}\)) contenant \(u_0\). Alors \({u_n \in I}\) pour tout \(n\).
> 2. **Limites possibles** : si \(f\) est continue sur \(I\) et si \((u_n)\) converge vers \({\ell \in I}\), alors \({f(\ell) = \ell}\). On résout cette équation.
> 3. **Monotonie** :
>    - si \(f\) est croissante sur \(I\), \((u_n)\) est monotone, et son sens est donné par le signe de \({u_1 - u_0}\) ;
>    - si \(f\) est décroissante sur \(I\), \({f \circ f}\) est croissante : les suites \({(u_{2n})}\) et \({(u_{2n+1})}\) sont monotones, de sens contraires ;
>    - on peut aussi étudier le signe de \({f(x) - x}\) sur \(I\).
> 4. **Conclusion** avec le théorème de la limite monotone, en vérifiant que la limite trouvée est compatible avec les inégalités obtenues.

## Comparaison des suites

> [!TIP] **Définition**
>
> Soient \((u_n)\) et \((v_n)\) deux suites, avec \({v_n \neq 0}\) à partir d’un certain rang.
> - \((u_n)\) est **dominée** par \((v_n)\), noté \({u_n = O(v_n)}\), si \(\left(\dfrac{u_n}{v_n}\right)\) est bornée.
> - \((u_n)\) est **négligeable** devant \((v_n)\), noté \({u_n = o(v_n)}\), si \({\dfrac{u_n}{v_n} \to 0}\).
> - \((u_n)\) est **équivalente** à \((v_n)\), noté \({u_n \sim v_n}\), si \({\dfrac{u_n}{v_n} \to 1}\), ce qui équivaut à \({u_n = v_n + o(v_n)}\).

> [!TIP] **Propriétés des équivalents**
>
> - Si \({u_n \sim v_n}\) et si \((v_n)\) a une limite (finie ou infinie), alors \((u_n)\) a la même limite. De plus, \(u_n\) et \(v_n\) ont le même signe à partir d’un certain rang.
> - Les équivalents sont compatibles avec le **produit**, le **quotient** et les **puissances** fixes : si \({u_n \sim v_n}\) et \({a_n \sim b_n}\), alors \({u_n a_n \sim v_n b_n}\), \({\dfrac{u_n}{a_n} \sim \dfrac{v_n}{b_n}}\) et \({u_n^\alpha \sim v_n^\alpha}\).
> - Si \({u_n \to \ell}\) avec \({\ell \neq 0}\), alors \({u_n \sim \ell}\).

> [!IMPORTANT] **Remarque**
>
> On n’**ajoute pas** des équivalents et on ne les **compose pas** par une fonction : \({n + 1 \sim n}\) et \({-n \sim -n}\), mais \(1\) n’est pas équivalent à \(0\) ; \({n + 1 \sim n}\), mais \(e^{n+1}\) n’est pas équivalent à \(e^n\). Et l’on n’écrit jamais \({u_n \sim 0}\).

> [!TIP] **Théorème - Croissances comparées**
>
> Pour \({\alpha > 0}\), \({\beta > 0}\) et \({a > 1}\) :
>
> \[ (\ln n)^\beta = o(n^\alpha), \qquad n^\alpha = o(a^n), \qquad a^n = o(n!), \qquad n! = o(n^n). \]

> [!TIP] **Équivalents usuels**
>
> Si \({u_n \to 0}\) avec \({u_n \neq 0}\) : \({\sin u_n \sim u_n}\), \({\tan u_n \sim u_n}\), \({\ln(1 + u_n) \sim u_n}\), \({e^{u_n} - 1 \sim u_n}\), \({1 - \cos u_n \sim \dfrac{u_n^2}{2}}\), \({(1 + u_n)^\alpha - 1 \sim \alpha u_n}\).
>
> Un polynôme en \(n\) est équivalent à son terme de plus haut degré.

> [!NOTE] **Exercice résolu - Une suite récurrente**
>
> Soit \((u_n)\) définie par \({u_0 = 1}\) et \({u_{n+1} = \sqrt{2 + u_n}}\). Étudier la convergence de \((u_n)\).

{{% details title="Solution commentée" closed="true" %}}
On pose \({f(x) = \sqrt{2 + x}}\), définie, continue et croissante sur \({[0, +\infty[}\).

**Intervalle stable.** Si \({x \in [0, 2]}\), alors \({\sqrt{2} \leq f(x) \leq \sqrt{4} = 2}\), donc \({f(x) \in [0, 2]}\). Comme \({u_0 = 1 \in [0, 2]}\), on a par récurrence \({u_n \in [0, 2]}\) pour tout \(n\) : la suite est bien définie et bornée.

**Monotonie.** \({u_1 = \sqrt{3} > 1 = u_0}\). Montrons par récurrence que \({u_{n+1} \geq u_n}\).
- **Initialisation.** \({u_1 \geq u_0}\).
- **Hérédité.** Si \({u_{n+1} \geq u_n}\), alors comme \(f\) est croissante sur \([0, 2]\), \({f(u_{n+1}) \geq f(u_n)}\), soit \({u_{n+2} \geq u_{n+1}}\).
- **Conclusion.** La suite \((u_n)\) est croissante.

**Convergence.** Croissante et majorée par \(2\), la suite converge vers un réel \({\ell \in [1, 2]}\).

**Valeur de la limite.** \(f\) est continue, donc \({\ell = \sqrt{2 + \ell}}\), soit \({\ell^2 - \ell - 2 = 0}\), c’est-à-dire \({(\ell - 2)(\ell + 1) = 0}\). Comme \({\ell \geq 1}\), on obtient \({\ell = 2}\).

La suite \((u_n)\) converge vers \(2\).
{{% /details %}}
