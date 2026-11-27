---
title: 'Extensions de corps, éléments algébriques, corps finis'
weight: 1
cascade:
  type: docs
---

## Extensions et degré

> [!TIP] **Définition**
>
> Une **extension** d’un corps \(K\) est un corps \(L\) dont \(K\) est un sous-corps ; on note \(L/K\). \(L\) est alors un \(K\)-espace vectoriel, et sa dimension est le **degré** de l’extension, noté \({[L : K]}\). L’extension est **finie** si ce degré est fini.

{{% details title="Exemple" closed="true" %}}
\({[\mathbb{C} : \mathbb{R}] = 2}\), de base \((1, i)\). \({[\mathbb{R} : \mathbb{Q}]}\) est infini.
{{% /details %}}

> [!TIP] **Théorème - Multiplicativité des degrés**
>
> Si \({K \subset L \subset M}\) sont des corps, alors
>
> \[ [M : K] = [M : L] \times [L : K]. \]
>
> Plus précisément, si \((e_i)\) est une base de \(L\) sur \(K\) et \((f_j)\) une base de \(M\) sur \(L\), alors \((e_if_j)\) est une base de \(M\) sur \(K\).

{{% details title="Démonstration" closed="true" %}}
**Génératrice.** Tout \({x \in M}\) s’écrit \({x = \sum_j \lambda_jf_j}\) avec \({\lambda_j \in L}\), et chaque \({\lambda_j = \sum_i a_{ij}e_i}\) avec \({a_{ij} \in K}\).

**Libre.** Si \({\sum_{i,j} a_{ij}e_if_j = 0}\), alors \({\sum_j \left(\sum_i a_{ij}e_i\right)f_j = 0}\) ; par liberté de \((f_j)\) sur \(L\), chaque \({\sum_i a_{ij}e_i = 0}\), puis par liberté de \((e_i)\) sur \(K\), tous les \(a_{ij}\) sont nuls.
{{% /details %}}

## Éléments algébriques

> [!TIP] **Définition**
>
> Soit \(L/K\) une extension et \({\alpha \in L}\).
> - \(K[\alpha]\) est le plus petit sous-anneau de \(L\) contenant \(K\) et \(\alpha\) : c’est \({\{P(\alpha),\ P \in K[X]\}}\).
> - \(K(\alpha)\) est le plus petit sous-corps de \(L\) contenant \(K\) et \(\alpha\).
> - \(\alpha\) est **algébrique** sur \(K\) s’il existe un polynôme non nul \({P \in K[X]}\) tel que \({P(\alpha) = 0}\) ; sinon il est **transcendant**.

> [!TIP] **Théorème - Polynôme minimal**
>
> Soit \(\alpha\) algébrique sur \(K\). L’ensemble des polynômes de \(K[X]\) qui annulent \(\alpha\) est un idéal non nul, engendré par un unique polynôme unitaire \(\mu_\alpha\), le **polynôme minimal** de \(\alpha\) sur \(K\).
> - \(\mu_\alpha\) est **irréductible** dans \(K[X]\). Réciproquement, un polynôme unitaire irréductible qui annule \(\alpha\) est son polynôme minimal.
> - \({K(\alpha) = K[\alpha] \simeq K[X]/(\mu_\alpha)}\).
> - Si \({n = \deg\mu_\alpha}\), alors \({(1, \alpha, \dots, \alpha^{n-1})}\) est une base de \(K(\alpha)\) sur \(K\), et \({[K(\alpha) : K] = n}\) : c’est le **degré** de \(\alpha\) sur \(K\).

{{% details title="Démonstration" closed="true" %}}
Le morphisme d’évaluation \({\varphi : K[X] \to L}\), \({P \mapsto P(\alpha)}\), a pour image \(K[\alpha]\) et pour noyau un idéal non nul de l’anneau principal \(K[X]\), donc de la forme \((\mu_\alpha)\). L’image \({K[\alpha] \simeq K[X]/(\mu_\alpha)}\) est un sous-anneau du corps \(L\), donc intègre : l’idéal \((\mu_\alpha)\) est premier non nul, donc maximal, et \(\mu_\alpha\) est irréductible. Le quotient est alors un corps : \(K[\alpha]\) est un corps, donc égal à \(K(\alpha)\). Enfin, par division euclidienne, tout élément de \({K[X]/(\mu_\alpha)}\) a un unique représentant de degré strictement inférieur à \(n\).
{{% /details %}}

> [!TIP] **Théorème**
>
> - Toute extension finie est **algébrique** (tous ses éléments sont algébriques).
> - \(\alpha\) est algébrique sur \(K\) si et seulement si \({[K(\alpha) : K]}\) est fini.
> - La somme, le produit et l’inverse d’éléments algébriques sont algébriques : les éléments de \(L\) algébriques sur \(K\) forment un sous-corps de \(L\).

{{% details title="Démonstration" closed="true" %}}
Si \({[L : K] = n}\), la famille \({(1, \alpha, \dots, \alpha^n)}\) a \({n + 1}\) éléments, donc est liée sur \(K\) : cela fournit un polynôme annulateur non nul. Si \(\alpha\) et \(\beta\) sont algébriques, \({K(\alpha, \beta) = K(\alpha)(\beta)}\) est de degré fini sur \(K\) par multiplicativité, donc tous ses éléments, dont \({\alpha + \beta}\) et \(\alpha\beta\), sont algébriques.
{{% /details %}}

> [!NOTE] **Méthode - Calculer dans \(K(\alpha)\)**
>
> - **Réduire** : remplacer \(\alpha^n\) à l’aide de la relation \({\mu_\alpha(\alpha) = 0}\), pour se ramener à une combinaison de \({1, \alpha, \dots, \alpha^{n-1}}\).
> - **Inverser** \(P(\alpha)\) : comme \(\mu_\alpha\) est irréductible et ne divise pas \(P\), une relation de Bézout \({UP + V\mu_\alpha = 1}\) donne \({P(\alpha)^{-1} = U(\alpha)}\).
> - **Trouver un degré** : exhiber un polynôme annulateur et prouver qu’il est irréductible, ou utiliser la multiplicativité des degrés.

{{% details title="Exemple" closed="true" %}}
\({\alpha = \sqrt[3]{2}}\) est racine de \({X^3 - 2}\), irréductible sur \(\mathbb{Q}\) (Eisenstein) : c’est son polynôme minimal, et \({[\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 3}\), de base \({(1, \alpha, \alpha^2)}\).

Inverse de \({1 + \alpha}\) : \({(1 + \alpha)(1 - \alpha + \alpha^2) = 1 + \alpha^3 = 3}\), donc \({(1 + \alpha)^{-1} = \dfrac{1 - \alpha + \alpha^2}{3}}\).

Conséquence : \({\sqrt{2} \notin \mathbb{Q}(\sqrt[3]{2})}\), car sinon \({[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2}\) diviserait \(3\).
{{% /details %}}

## Corps de rupture et de décomposition

> [!TIP] **Théorème**
>
> Soit \({P \in K[X]}\) irréductible. Le corps \({L = K[X]/(P)}\) est une extension de \(K\) de degré \(\deg P\) dans laquelle \(P\) a une racine (la classe de \(X\)) : c’est un **corps de rupture** de \(P\).
>
> Pour tout polynôme non constant \({P \in K[X]}\), il existe une extension \(L\) de \(K\) dans laquelle \(P\) est scindé et qui est engendrée par ses racines : c’est un **corps de décomposition** de \(P\), unique à isomorphisme près.

> [!TIP] **Définition**
>
> Un corps \(K\) est **algébriquement clos** si tout polynôme non constant de \(K[X]\) a une racine dans \(K\). Le corps \(\mathbb{C}\) est algébriquement clos (théorème de d’Alembert-Gauss).

## Corps finis

> [!TIP] **Théorème**
>
> - Un corps fini \(K\) est de caractéristique un nombre premier \(p\), et son cardinal est une puissance de \(p\) : \({|K| = p^n}\).
> - Pour tout nombre premier \(p\) et tout entier \({n \geq 1}\), il existe un corps à \({q = p^n}\) éléments, unique à isomorphisme près, noté \(\mathbb{F}_q\). C’est le corps de décomposition de \({X^q - X}\) sur \({\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}}\) : tout \({x \in \mathbb{F}_q}\) vérifie \({x^q = x}\).
> - Le groupe multiplicatif \(\mathbb{F}_q^\times\) est **cyclique**, d’ordre \({q - 1}\).
> - \(\mathbb{F}_{p^m}\) est (isomorphe à) un sous-corps de \(\mathbb{F}_{p^n}\) si et seulement si \(m\) divise \(n\).

{{% details title="Démonstration" closed="true" %}}
**Cardinal.** \(K\) contient \(\mathbb{F}_p\) (image de \(\mathbb{Z}\)), et c’est un \(\mathbb{F}_p\)-espace vectoriel de dimension finie \(n\), donc de cardinal \(p^n\).

**Cyclicité** (idée). \(K^\times\) est un groupe abélien fini d’ordre \({q - 1}\). Soit \(e\) le PPCM des ordres de ses éléments (son exposant) ; il existe un élément d’ordre \(e\). Tout \({x \in K^\times}\) vérifie \({x^e = 1}\), donc le polynôme \({X^e - 1}\) a \({q - 1}\) racines dans le corps \(K\), d’où \({q - 1 \leq e}\). Comme \(e\) divise \({q - 1}\), \({e = q - 1}\) : il y a un élément d’ordre \({q - 1}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> \(\mathbb{F}_4\) n’est **pas** \(\mathbb{Z}/4\mathbb{Z}\), qui n’est pas intègre (\({2 \times 2 = 0}\)). On construit \(\mathbb{F}_{p^n}\) comme quotient \({\mathbb{F}_p[X]/(P)}\), avec \(P\) irréductible de degré \(n\) sur \(\mathbb{F}_p\).

> [!NOTE] **Exercice résolu - Le corps \(\mathbb{F}_4\) et un degré d’extension**
>
> 1. Construire le corps \(\mathbb{F}_4\) et dresser sa table de multiplication.
> 2. Déterminer le degré de \({\mathbb{Q}(\sqrt{2}, \sqrt{3})}\) sur \(\mathbb{Q}\) et en donner une base.

{{% details title="Solution commentée" closed="true" %}}
**1.** Le polynôme \({P = X^2 + X + 1}\) n’a pas de racine dans \({\mathbb{F}_2}\) (\({P(0) = P(1) = 1}\)) ; étant de degré \(2\), il est irréductible. Donc \({\mathbb{F}_4 = \mathbb{F}_2[X]/(P)}\) est un corps à \({2^2 = 4}\) éléments. En notant \(\omega\) la classe de \(X\) :

\[
\mathbb{F}_4 = \{0,\ 1,\ \omega,\ \omega + 1\}, \qquad \omega^2 = \omega + 1 \quad (\text{car } -1 = 1).
\]

On calcule : \({\omega(\omega + 1) = \omega^2 + \omega = 2\omega + 1 = 1}\) et \({(\omega + 1)^2 = \omega^2 + 1 = \omega}\).

| \(\times\) | \(1\) | \(\omega\) | \(\omega + 1\) |
|:---:|:---:|:---:|:---:|
| \(1\) | \(1\) | \(\omega\) | \(\omega + 1\) |
| \(\omega\) | \(\omega\) | \(\omega + 1\) | \(1\) |
| \(\omega + 1\) | \(\omega + 1\) | \(1\) | \(\omega\) |

Le groupe \(\mathbb{F}_4^\times\) est cyclique d’ordre \(3\), engendré par \(\omega\) : \({\omega^2 = \omega + 1}\), \({\omega^3 = 1}\).

**2.** \({[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2}\), car \({X^2 - 2}\) est irréductible sur \(\mathbb{Q}\). Montrons que \({\sqrt{3} \notin \mathbb{Q}(\sqrt{2})}\). Sinon, \({\sqrt{3} = a + b\sqrt{2}}\) avec \(a\), \(b\) rationnels, et en élevant au carré : \({3 = a^2 + 2b^2 + 2ab\sqrt{2}}\). Comme \({(1, \sqrt{2})}\) est libre sur \(\mathbb{Q}\), \({ab = 0}\).
- Si \({b = 0}\) : \({\sqrt{3} = a \in \mathbb{Q}}\), faux.
- Si \({a = 0}\) : \({3 = 2b^2}\), soit \({b^2 = \dfrac{3}{2}}\), donc \({\sqrt{6} = 2|b| \in \mathbb{Q}}\), faux.

Donc \({X^2 - 3}\) n’a pas de racine dans \(\mathbb{Q}(\sqrt{2})\) : il y est irréductible, et \({[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2}\). Par multiplicativité :

\[
[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 2 \times 2 = 4,
\]

et une base est \({(1, \sqrt{2}, \sqrt{3}, \sqrt{6})}\), obtenue en multipliant les bases \((1, \sqrt{2})\) et \((1, \sqrt{3})\).
{{% /details %}}
