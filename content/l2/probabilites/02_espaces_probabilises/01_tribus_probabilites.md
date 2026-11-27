---
title: 'Événements, tribus, probabilités'
weight: 1
cascade:
  type: docs
---

## Univers et événements

> [!TIP] **Vocabulaire**
>
> On modélise une **expérience aléatoire** par un ensemble \(\Omega\), l’**univers**, dont les éléments \(\omega\) sont les **issues** possibles. Un **événement** est une partie de \(\Omega\).
>
> | Langage probabiliste | Langage ensembliste |
> |---|---|
> | événement certain | \(\Omega\) |
> | événement impossible | \(\varnothing\) |
> | événement contraire de \(A\) | \(\overline{A}\) |
> | \(A\) ou \(B\) | \({A \cup B}\) |
> | \(A\) et \(B\) | \({A \cap B}\) |
> | \(A\) et \(B\) incompatibles | \({A \cap B = \varnothing}\) |
> | \(A\) implique \(B\) | \({A \subset B}\) |
> | au moins un des \(A_n\) se réalise | \({\bigcup_n A_n}\) |
> | tous les \(A_n\) se réalisent | \({\bigcap_n A_n}\) |

Quand \(\Omega\) est fini ou dénombrable, toutes les parties sont des événements. Quand \(\Omega\) est plus gros (par exemple \(\mathbb{R}\), ou l’ensemble des suites infinies de pile ou face), on ne peut pas attribuer une probabilité à toutes les parties : on se restreint à une famille de parties, une tribu.

> [!TIP] **Définition - Tribu**
>
> Une **tribu** (ou \(\sigma\)-algèbre) sur \(\Omega\) est un ensemble \(\mathcal{A}\) de parties de \(\Omega\) tel que :
> - \({\Omega \in \mathcal{A}}\) ;
> - si \({A \in \mathcal{A}}\), alors \({\overline{A} \in \mathcal{A}}\) ;
> - si \((A_n)_{n \in \mathbb{N}}\) est une suite d’éléments de \(\mathcal{A}\), alors \({\displaystyle\bigcup_{n \in \mathbb{N}} A_n \in \mathcal{A}}\).
>
> Le couple \((\Omega, \mathcal{A})\) est un **espace probabilisable**. Une tribu contient alors \(\varnothing\) et est stable par réunion finie, par intersection finie ou dénombrable et par différence.

> [!TIP] **Définition - Système complet d’événements**
>
> Une famille finie ou dénombrable \((A_i)_{i \in I}\) d’événements est un **système complet** si les \(A_i\) sont deux à deux incompatibles et de réunion \(\Omega\).

## Probabilité

> [!TIP] **Définition**
>
> Une **probabilité** sur \((\Omega, \mathcal{A})\) est une application \({P : \mathcal{A} \to [0, 1]}\) telle que :
> - \({P(\Omega) = 1}\) ;
> - **\(\sigma\)-additivité** : pour toute suite \((A_n)\) d’événements **deux à deux incompatibles**,
>
> \[ P\left(\bigcup_{n=0}^{+\infty} A_n\right) = \sum_{n=0}^{+\infty} P(A_n). \]
>
> Le triplet \((\Omega, \mathcal{A}, P)\) est un **espace probabilisé**.

> [!TIP] **Propriétés**
>
> Pour tous événements \(A\), \(B\) :
> - \({P(\varnothing) = 0}\) et \({P(\overline{A}) = 1 - P(A)}\) ;
> - si \(A\) et \(B\) sont incompatibles, \({P(A \cup B) = P(A) + P(B)}\) ;
> - **croissance** : si \({A \subset B}\), alors \({P(A) \leq P(B)}\) et \({P(B \setminus A) = P(B) - P(A)}\) ;
> - \({P(A \cup B) = P(A) + P(B) - P(A \cap B)}\) ;
> - si \((A_i)\) est un système complet, \({\displaystyle\sum_i P(A_i) = 1}\) et \({P(B) = \displaystyle\sum_i P(B \cap A_i)}\) ;
> - **sous-additivité** (inégalité de Boole) : \({P\left(\displaystyle\bigcup_n A_n\right) \leq \sum_n P(A_n)}\).

{{% details title="Démonstration" closed="true" %}}
\(A\) et \(\overline{A}\) sont incompatibles de réunion \(\Omega\), d’où \({P(A) + P(\overline{A}) = 1}\). Si \({A \subset B}\), \(B\) est réunion disjointe de \(A\) et \({B \setminus A}\). Enfin \({A \cup B}\) est réunion disjointe de \(A\) et de \({B \setminus (A \cap B)}\), d’où \({P(A \cup B) = P(A) + P(B) - P(A \cap B)}\).
{{% /details %}}

> [!TIP] **Théorème - Continuité monotone**
>
> - Si \((A_n)\) est **croissante** (\({A_n \subset A_{n+1}}\)), alors \({P\left(\displaystyle\bigcup_{n} A_n\right) = \lim_{n \to +\infty} P(A_n)}\).
> - Si \((A_n)\) est **décroissante** (\({A_{n+1} \subset A_n}\)), alors \({P\left(\displaystyle\bigcap_{n} A_n\right) = \lim_{n \to +\infty} P(A_n)}\).
>
> Pour une suite quelconque : \({P\left(\displaystyle\bigcup_{n} A_n\right) = \lim_{N \to +\infty} P\left(\bigcup_{n=0}^{N} A_n\right)}\), et de même pour les intersections.

{{% details title="Démonstration" closed="true" %}}
Cas croissant. On pose \({B_0 = A_0}\) et \({B_n = A_n \setminus A_{n-1}}\) pour \({n \geq 1}\). Les \(B_n\) sont deux à deux incompatibles, \({\bigcup_{k \leq n} B_k = A_n}\) et \({\bigcup_n B_n = \bigcup_n A_n}\). Par \(\sigma\)-additivité,

\[
P\left(\bigcup_n A_n\right) = \sum_{n=0}^{+\infty} P(B_n) = \lim_{N \to +\infty} \sum_{n=0}^{N} P(B_n) = \lim_{N \to +\infty} P(A_N).
\]

Le cas décroissant s’en déduit en passant aux complémentaires.
{{% /details %}}

> [!TIP] **Définition**
>
> Un événement de probabilité \(1\) est dit **presque sûr** ; un événement de probabilité \(0\) est dit **négligeable**. Une propriété vraie sur un événement presque sûr est vraie « presque sûrement ».

> [!IMPORTANT] **Remarque**
>
> Négligeable ne veut pas dire impossible. Si l’on lance indéfiniment une pièce équilibrée, l’événement « n’obtenir que des pile » n’est pas vide, mais sa probabilité est \({\lim \left(\dfrac{1}{2}\right)^n = 0}\).

## Cas des univers finis ou dénombrables

> [!TIP] **Théorème**
>
> Soit \(\Omega\) fini ou dénombrable, muni de la tribu \(\mathcal{P}(\Omega)\). Une probabilité \(P\) est entièrement déterminée par les nombres \({p_\omega = P(\{\omega\})}\), qui vérifient \({p_\omega \geq 0}\) et \({\displaystyle\sum_{\omega \in \Omega} p_\omega = 1}\). Réciproquement, toute famille de tels nombres définit une probabilité par
>
> \[ P(A) = \sum_{\omega \in A} p_\omega. \]

> [!TIP] **Définition - Probabilité uniforme**
>
> Sur un univers **fini**, la probabilité **uniforme** (situation d’**équiprobabilité**) donne le même poids \(\dfrac{1}{|\Omega|}\) à chaque issue. Alors
>
> \[ P(A) = \dfrac{|A|}{|\Omega|} = \dfrac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}. \]

> [!IMPORTANT] **Remarque**
>
> Il n’existe pas de probabilité uniforme sur un ensemble dénombrable infini comme \(\mathbb{N}\) : si tous les \(p_n\) valaient \(c\), la somme vaudrait \(0\) ou \(+\infty\), jamais \(1\). Le choix de l’univers conditionne l’équiprobabilité : pour la somme de deux dés, les issues \({2, 3, \dots, 12}\) ne sont pas équiprobables ; on prend \({\Omega = \{1, \dots, 6\}^2}\).

> [!NOTE] **Exercice résolu - Anniversaires**
>
> Dans un groupe de \(n\) personnes (\({n \leq 365}\)), on suppose les dates d’anniversaire indépendantes et uniformes sur \(365\) jours. Quelle est la probabilité \(p_n\) qu’au moins deux personnes aient le même anniversaire ? Calculer une valeur approchée de \(p_{23}\).

{{% details title="Solution commentée" closed="true" %}}
**Modèle.** \({\Omega = \{1, \dots, 365\}^n}\), muni de la probabilité uniforme ; \({|\Omega| = 365^n}\).

**Événement contraire.** « Toutes les dates sont distinctes » correspond aux arrangements de \(n\) jours parmi \(365\) : il y en a \({365 \times 364 \times \dots \times (365 - n + 1)}\). Donc

\[
p_n = 1 - \dfrac{365 \times 364 \times \dots \times (365 - n + 1)}{365^n} = 1 - \prod_{k=0}^{n-1}\left(1 - \dfrac{k}{365}\right).
\]

**Valeur approchée pour \({n = 23}\).** On utilise \({\ln(1 - x) \approx -x}\) pour \(x\) petit :

\[
\ln\prod_{k=0}^{22}\left(1 - \dfrac{k}{365}\right) \approx -\dfrac{1}{365}\sum_{k=0}^{22} k = -\dfrac{253}{365} \approx -0{,}693,
\]

donc le produit vaut environ \({e^{-0{,}693} \approx 0{,}50}\), et \({p_{23} \approx 0{,}5}\). Le calcul exact donne \({p_{23} \approx 0{,}507}\) : dès \(23\) personnes, il y a plus d’une chance sur deux que deux d’entre elles partagent le même anniversaire.
{{% /details %}}
