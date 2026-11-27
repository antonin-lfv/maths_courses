---
title: 'Ensembles'
weight: 1
cascade:
  type: docs
---

Un ensemble est une collection d’objets, ses **éléments**. On écrit \({x \in E}\) si \(x\) est un élément de \(E\), et \({x \notin E}\) sinon. L’ensemble sans élément est l’**ensemble vide**, noté \(\varnothing\).

## Inclusion, parties

> [!TIP] **Définition**
>
> Soient \(E\) et \(F\) deux ensembles.
> - \(F\) est **inclus** dans \(E\), noté \({F \subset E}\), si tout élément de \(F\) est un élément de \(E\) : \({\forall x,\ (x \in F \Rightarrow x \in E)}\). On dit aussi que \(F\) est une **partie** (ou un sous-ensemble) de \(E\).
> - \({E = F}\) si et seulement si \({E \subset F}\) et \({F \subset E}\).
> - L’ensemble de toutes les parties de \(E\) est noté \(\mathcal{P}(E)\).

{{% details title="Exemple" closed="true" %}}
Si \({E = \{a, b, c\}}\), alors

\[
\mathcal{P}(E) = \big\{\varnothing,\ \{a\},\ \{b\},\ \{c\},\ \{a,b\},\ \{a,c\},\ \{b,c\},\ E\big\}.
\]

Attention aux notations : \({a \in E}\), \({\{a\} \subset E}\) et \({\{a\} \in \mathcal{P}(E)}\).
{{% /details %}}

## Opérations sur les parties

> [!TIP] **Définition**
>
> Soient \(A\) et \(B\) deux parties d’un ensemble \(E\).
> - **Réunion** : \({A \cup B = \{x \in E,\ x \in A \text{ ou } x \in B\}}\).
> - **Intersection** : \({A \cap B = \{x \in E,\ x \in A \text{ et } x \in B\}}\).
> - **Différence** : \({A \setminus B = \{x \in E,\ x \in A \text{ et } x \notin B\}}\).
> - **Complémentaire** de \(A\) dans \(E\) : \({\overline{A} = E \setminus A = \{x \in E,\ x \notin A\}}\).
>
> \(A\) et \(B\) sont **disjointes** si \({A \cap B = \varnothing}\).

> [!TIP] **Propriétés**
>
> Pour toutes parties \(A\), \(B\), \(C\) de \(E\) :
> - \({A \cap (B \cup C) = (A \cap B) \cup (A \cap C)}\) et \({A \cup (B \cap C) = (A \cup B) \cap (A \cup C)}\) ;
> - \({\overline{\overline{A}} = A}\) ;
> - lois de De Morgan : \({\overline{A \cup B} = \overline{A} \cap \overline{B}}\) et \({\overline{A \cap B} = \overline{A} \cup \overline{B}}\) ;
> - \({A \subset B \iff \overline{B} \subset \overline{A}}\).

{{% details title="Démonstration" closed="true" %}}
Ces égalités traduisent les règles de calcul sur « et », « ou », « non ». Par exemple, pour \(x\) dans \(E\) :

\[
x \in \overline{A \cup B} \iff \text{non}(x \in A \text{ ou } x \in B) \iff (x \notin A \text{ et } x \notin B) \iff x \in \overline{A} \cap \overline{B}.
\]

La dernière propriété est la contraposée : \({(x \in A \Rightarrow x \in B)}\) équivaut à \({(x \notin B \Rightarrow x \notin A)}\).
{{% /details %}}

> [!NOTE] **Méthode - Montrer une égalité d’ensembles**
>
> Pour montrer \({A = B}\), on procède par **double inclusion** : on prend un élément quelconque de \(A\) et on montre qu’il est dans \(B\), puis l’inverse. Quand c’est possible, on peut aussi raisonner directement par équivalences.

## Produit cartésien

> [!TIP] **Définition**
>
> Le **produit cartésien** de deux ensembles \(E\) et \(F\) est l’ensemble des couples
>
> \[ E \times F = \{(x, y),\ x \in E,\ y \in F\}. \]
>
> Deux couples \((x, y)\) et \((x', y')\) sont égaux si et seulement si \({x = x'}\) et \({y = y'}\). On note \({E^2 = E \times E}\) et, plus généralement, \(E^n\) l’ensemble des \(n\)-uplets d’éléments de \(E\).

## Familles et partitions

> [!TIP] **Définition**
>
> Soit \((A_i)_{i \in I}\) une famille de parties de \(E\).
>
> \[ \bigcup_{i \in I} A_i = \{x \in E,\ \exists i \in I,\ x \in A_i\} \qquad \bigcap_{i \in I} A_i = \{x \in E,\ \forall i \in I,\ x \in A_i\} \]
>
> La famille \((A_i)_{i \in I}\) est une **partition** de \(E\) si les \(A_i\) sont non vides, deux à deux disjointes, et de réunion égale à \(E\).

{{% details title="Exemple" closed="true" %}}
Les trois ensembles \({A_0 = \{3k,\ k \in \mathbb{Z}\}}\), \({A_1 = \{3k+1,\ k \in \mathbb{Z}\}}\) et \({A_2 = \{3k+2,\ k \in \mathbb{Z}\}}\) forment une partition de \(\mathbb{Z}\) : tout entier a un reste et un seul dans la division euclidienne par \(3\).
{{% /details %}}

## Ensembles finis et dénombrement

> [!TIP] **Définition**
>
> Un ensemble \(E\) est **fini** s’il est vide ou s’il existe un entier \({n \geq 1}\) et une bijection de \({\{1, \dots, n\}}\) sur \(E\). L’entier \(n\) est alors unique : c’est le **cardinal** de \(E\), noté \(\operatorname{card}(E)\). On pose \({\operatorname{card}(\varnothing) = 0}\).

> [!TIP] **Propriétés**
>
> Soient \(E\) et \(F\) deux ensembles finis, \(A\) et \(B\) deux parties de \(E\).
> - \({\operatorname{card}(A \cup B) = \operatorname{card}(A) + \operatorname{card}(B) - \operatorname{card}(A \cap B)}\).
> - \({\operatorname{card}(E \times F) = \operatorname{card}(E) \times \operatorname{card}(F)}\).
> - Si \({\operatorname{card}(E) = n}\), alors \({\operatorname{card}\mathcal{P}(E) = 2^n}\).
> - Si \({\operatorname{card}(E) = n}\) et \({\operatorname{card}(F) = p}\), il y a \(p^n\) applications de \(E\) dans \(F\).
> - Si \({\operatorname{card}(E) = n}\), il y a \(n!\) bijections de \(E\) sur lui-même (permutations).

> [!TIP] **Définition et propriétés - Coefficients binomiaux**
>
> Pour \({0 \leq k \leq n}\), le nombre de parties à \(k\) éléments d’un ensemble à \(n\) éléments est
>
> \[ \binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}. \]
>
> - Symétrie : \({\dbinom{n}{k} = \dbinom{n}{n-k}}\).
> - Formule de Pascal : pour \({1 \leq k \leq n-1}\), \({\dbinom{n}{k} = \dbinom{n-1}{k-1} + \dbinom{n-1}{k}}\).
> - Pour \({1 \leq k \leq n}\) : \({k\dbinom{n}{k} = n\dbinom{n-1}{k-1}}\).

> [!TIP] **Théorème - Formule du binôme de Newton**
>
> Pour tous nombres complexes \(a\) et \(b\) et tout entier naturel \(n\) :
>
> \[ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}. \]

{{% details title="Démonstration" closed="true" %}}
Par récurrence sur \(n\).

- **Initialisation.** Pour \({n = 0}\), les deux membres valent \(1\).
- **Hérédité.** Supposons la formule vraie au rang \(n\). Alors

  \[
  \begin{aligned}
  (a+b)^{n+1} &= (a + b)\sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k} \\[0.3em]
  &= \sum_{k=0}^{n} \binom{n}{k} a^{k+1} b^{n-k} + \sum_{k=0}^{n} \binom{n}{k} a^k b^{n+1-k} \\[0.3em]
  &= \sum_{k=1}^{n+1} \binom{n}{k-1} a^{k} b^{n+1-k} + \sum_{k=0}^{n} \binom{n}{k} a^k b^{n+1-k}.
  \end{aligned}
  \]

  On isole le terme \({k = n+1}\) de la première somme (il vaut \(a^{n+1}\)) et le terme \({k = 0}\) de la seconde (il vaut \(b^{n+1}\)), puis on regroupe les autres avec la formule de Pascal :

  \[
  (a+b)^{n+1} = b^{n+1} + \sum_{k=1}^{n} \binom{n+1}{k} a^k b^{n+1-k} + a^{n+1} = \sum_{k=0}^{n+1} \binom{n+1}{k} a^k b^{n+1-k}.
  \]

- **Conclusion.** La formule est vraie pour tout entier naturel \(n\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Avec \({a = b = 1}\) : \({\displaystyle\sum_{k=0}^{n} \dbinom{n}{k} = 2^n}\). On retrouve le nombre de parties d’un ensemble à \(n\) éléments, comptées selon leur cardinal.

Avec \({a = -1}\), \({b = 1}\) et \({n \geq 1}\) : \({\displaystyle\sum_{k=0}^{n} (-1)^k\dbinom{n}{k} = 0}\).
{{% /details %}}

> [!NOTE] **Exercice résolu - Une égalité d’ensembles**
>
> Soient \(A\), \(B\), \(C\) trois parties d’un ensemble \(E\). Montrer que \({A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)}\).

{{% details title="Solution commentée" closed="true" %}}
On raisonne par équivalences. Soit \({x \in E}\).

\[
\begin{aligned}
x \in A \setminus (B \cup C) &\iff x \in A \text{ et } x \notin B \cup C \\[0.3em]
&\iff x \in A \text{ et } (x \notin B \text{ et } x \notin C) \\[0.3em]
&\iff (x \in A \text{ et } x \notin B) \text{ et } (x \in A \text{ et } x \notin C) \\[0.3em]
&\iff x \in (A \setminus B) \cap (A \setminus C).
\end{aligned}
\]

La deuxième ligne utilise la loi de De Morgan, la troisième le fait que « \(x \in A\) et \(x \in A\) » équivaut à « \(x \in A\) ». Les deux ensembles ont les mêmes éléments : ils sont égaux.
{{% /details %}}
