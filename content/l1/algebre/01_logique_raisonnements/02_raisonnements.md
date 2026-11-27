---
title: 'Modes de raisonnement'
weight: 2
cascade:
  type: docs
---

Pour démontrer une assertion, on dispose de quelques schémas types. Savoir lequel choisir, et l’annoncer clairement, fait la moitié d’une bonne rédaction.

## Raisonnement direct

> [!NOTE] **Méthode**
>
> Pour montrer \({P \Rightarrow Q}\), on suppose que \(P\) est vraie et on en déduit, par une chaîne d’implications, que \(Q\) est vraie. La rédaction commence par « Supposons \(P\) ».

{{% details title="Exemple" closed="true" %}}
Montrons que le carré d’un entier impair est impair.

Soit \(n\) un entier impair. Il existe un entier \(k\) tel que \({n = 2k + 1}\). Alors

\[
n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1,
\]

et \({2k^2 + 2k}\) est un entier. Donc \(n^2\) est impair.
{{% /details %}}

## Disjonction de cas

> [!NOTE] **Méthode**
>
> Pour montrer une assertion pour tout \(x\) d’un ensemble \(E\), on peut découper \(E\) en plusieurs parties qui le recouvrent et traiter chaque partie séparément.

{{% details title="Exemple" closed="true" %}}
Montrons que, pour tout entier \(n\), le nombre \({n^2 + n}\) est pair.

- Si \(n\) est pair, \({n = 2k}\) avec \(k\) entier, et \({n^2 + n = 4k^2 + 2k = 2(2k^2 + k)}\) est pair.
- Si \(n\) est impair, \({n = 2k + 1}\) avec \(k\) entier, et \({n^2 + n = n(n+1) = (2k+1)(2k+2) = 2(2k+1)(k+1)}\) est pair.

Dans les deux cas, \({n^2 + n}\) est pair.
{{% /details %}}

## Contraposée

> [!NOTE] **Méthode**
>
> L’implication \({P \Rightarrow Q}\) est équivalente à sa contraposée \({(\text{non } Q) \Rightarrow (\text{non } P)}\). Pour montrer \({P \Rightarrow Q}\), on peut donc supposer \({\text{non } Q}\) et en déduire \({\text{non } P}\).

{{% details title="Exemple" closed="true" %}}
Soit \(n\) un entier. Montrons que si \(n^2\) est pair, alors \(n\) est pair.

Par contraposée, il suffit de montrer que si \(n\) est impair, alors \(n^2\) est impair. C’est le résultat démontré plus haut.
{{% /details %}}

## Raisonnement par l’absurde

> [!NOTE] **Méthode**
>
> Pour montrer \(P\), on suppose que \(P\) est fausse et on en déduit une contradiction (une assertion à la fois vraie et fausse). On conclut que \(P\) est vraie.

> [!TIP] **Propriété**
>
> Le réel \(\sqrt{2}\) est irrationnel.

{{% details title="Démonstration" closed="true" %}}
Supposons par l’absurde que \(\sqrt{2}\) est rationnel. Il existe alors deux entiers \(p\) et \(q\), avec \({q \neq 0}\), tels que \({\sqrt{2} = \dfrac{p}{q}}\), et l’on peut choisir cette fraction irréductible : \(p\) et \(q\) n’ont pas de diviseur commun autre que \(1\) et \(-1\).

En élevant au carré : \({p^2 = 2q^2}\). Donc \(p^2\) est pair, et \(p\) est pair (exemple précédent) : \({p = 2p'}\) avec \(p'\) entier. Alors \({4p'^2 = 2q^2}\), soit \({q^2 = 2p'^2}\). Donc \(q^2\) est pair, et \(q\) est pair.

Ainsi \(2\) divise à la fois \(p\) et \(q\), ce qui contredit l’irréductibilité de la fraction. Donc \(\sqrt{2}\) est irrationnel.
{{% /details %}}

## Contre-exemple

> [!NOTE] **Méthode**
>
> Pour montrer qu’une assertion \({\forall x \in E,\ P(x)}\) est fausse, il suffit de trouver **un** élément \(x\) de \(E\) pour lequel \(P(x)\) est fausse.

{{% details title="Exemple" closed="true" %}}
L’assertion « pour tout entier naturel \(n\), \({n^2 + n + 11}\) est premier » est fausse : pour \({n = 10}\), on obtient \({100 + 10 + 11 = 121 = 11^2}\).
{{% /details %}}

## Raisonnement par récurrence

> [!TIP] **Théorème - Principe de récurrence**
>
> Soit \(n_0\) un entier naturel et \(P(n)\) un prédicat défini pour tout entier \({n \geq n_0}\). Si
> - \(P(n_0)\) est vraie,
> - pour tout entier \({n \geq n_0}\), \({P(n) \Rightarrow P(n+1)}\),
>
> alors \(P(n)\) est vraie pour tout entier \({n \geq n_0}\).

{{% details title="Exemple" closed="true" %}}
Montrons que, pour tout entier \({n \geq 1}\), \({1^3 + 2^3 + \dots + n^3 = \dfrac{n^2(n+1)^2}{4}}\).

- **Initialisation.** Pour \({n = 1}\) : \({1^3 = 1}\) et \({\dfrac{1^2 \times 2^2}{4} = 1}\).
- **Hérédité.** Soit \({n \geq 1}\) tel que l’égalité soit vraie au rang \(n\). Alors
\[
\begin{aligned}
1^3 + \dots + n^3 + (n+1)^3 &= \dfrac{n^2(n+1)^2}{4} + (n+1)^3 \\[0.3em]
&= \dfrac{(n+1)^2\left(n^2 + 4n + 4\right)}{4} \\[0.3em]
&= \dfrac{(n+1)^2(n+2)^2}{4}.
\end{aligned}
\]
  L’égalité est vraie au rang \({n+1}\).
- **Conclusion.** L’égalité est vraie pour tout entier \({n \geq 1}\).
{{% /details %}}

> [!TIP] **Variantes**
>
> - **Récurrence double** : si \(P(n_0)\) et \({P(n_0 + 1)}\) sont vraies et si, pour tout \({n \geq n_0}\), \({\big(P(n) \text{ et } P(n+1)\big) \Rightarrow P(n+2)}\), alors \(P(n)\) est vraie pour tout \({n \geq n_0}\).
> - **Récurrence forte** : si \(P(n_0)\) est vraie et si, pour tout \({n \geq n_0}\), \({\big(P(n_0) \text{ et } P(n_0+1) \text{ et } \dots \text{ et } P(n)\big) \Rightarrow P(n+1)}\), alors \(P(n)\) est vraie pour tout \({n \geq n_0}\).

{{% details title="Exemple" closed="true" %}}
Soit \((u_n)\) la suite définie par \({u_0 = 2}\), \({u_1 = 5}\) et, pour tout \({n \geq 0}\), \({u_{n+2} = 5u_{n+1} - 6u_n}\). Montrons par récurrence double que \({u_n = 2^n + 3^n}\) pour tout \(n\).

- **Initialisation.** \({2^0 + 3^0 = 2 = u_0}\) et \({2^1 + 3^1 = 5 = u_1}\).
- **Hérédité.** Soit \({n \geq 0}\) tel que \({u_n = 2^n + 3^n}\) et \({u_{n+1} = 2^{n+1} + 3^{n+1}}\). Alors
\[
\begin{aligned}
u_{n+2} &= 5\left(2^{n+1} + 3^{n+1}\right) - 6\left(2^n + 3^n\right) \\[0.3em]
&= 2^n(10 - 6) + 3^n(15 - 6) = 4 \times 2^n + 9 \times 3^n = 2^{n+2} + 3^{n+2}.
\end{aligned}
\]
- **Conclusion.** Pour tout entier naturel \(n\), \({u_n = 2^n + 3^n}\).
{{% /details %}}

## Analyse-synthèse

> [!NOTE] **Méthode**
>
> Pour déterminer tous les objets qui vérifient une propriété (ou montrer qu’il en existe un et un seul) :
> - **Analyse** : on suppose qu’un objet convient et on en tire des conditions nécessaires, qui restreignent la liste des candidats ;
> - **Synthèse** : on vérifie, parmi les candidats trouvés, lesquels conviennent réellement.

> [!NOTE] **Exercice résolu - Fonctions paires et impaires**
>
> Montrer que toute fonction \({f : \mathbb{R} \to \mathbb{R}}\) s’écrit de manière unique comme somme d’une fonction paire et d’une fonction impaire.

{{% details title="Solution commentée" closed="true" %}}
**Analyse.** Supposons que \({f = p + i}\) avec \(p\) paire et \(i\) impaire. Pour tout réel \(x\) :

\[
f(x) = p(x) + i(x) \qquad \text{et} \qquad f(-x) = p(-x) + i(-x) = p(x) - i(x).
\]

En ajoutant puis en soustrayant ces deux égalités :

\[
p(x) = \dfrac{f(x) + f(-x)}{2} \qquad \text{et} \qquad i(x) = \dfrac{f(x) - f(-x)}{2}.
\]

Si une décomposition existe, elle est donc unique, et donnée par ces formules.

**Synthèse.** Posons, pour tout réel \(x\), \({p(x) = \dfrac{f(x) + f(-x)}{2}}\) et \({i(x) = \dfrac{f(x) - f(-x)}{2}}\).
- \({p(-x) = \dfrac{f(-x) + f(x)}{2} = p(x)}\) : \(p\) est paire.
- \({i(-x) = \dfrac{f(-x) - f(x)}{2} = -i(x)}\) : \(i\) est impaire.
- \({p(x) + i(x) = \dfrac{2f(x)}{2} = f(x)}\).

La décomposition existe et elle est unique. Par exemple, pour \({f = \exp}\), on obtient \({p = \operatorname{ch}}\) et \({i = \operatorname{sh}}\).
{{% /details %}}
