---
title: 'Assertions et quantificateurs'
weight: 1
cascade:
  type: docs
---

Un texte mathématique enchaîne des phrases qui sont vraies ou fausses. Pour les écrire sans ambiguïté et savoir les nier, on fixe quelques règles.

## Assertions

> [!TIP] **Définition**
>
> Une **assertion** (ou proposition) est une phrase mathématique qui est soit vraie, soit fausse, sans autre possibilité.

{{% details title="Exemple" closed="true" %}}
- « \({7 \times 8 = 56}\) » est une assertion vraie.
- « \(12\) est un nombre premier » est une assertion fausse.
- « \({x + 3 \geq 5}\) » n’est ni vraie ni fausse tant qu’on ne sait rien de \(x\) : sa valeur de vérité dépend de \(x\). On parle de **prédicat**, noté \(P(x)\).
{{% /details %}}

## Connecteurs logiques

> [!TIP] **Définition**
>
> Soient \(P\) et \(Q\) deux assertions.
> - **Négation** : \({\text{non } P}\) est vraie quand \(P\) est fausse, et fausse quand \(P\) est vraie.
> - **Conjonction** : \({P \text{ et } Q}\) est vraie quand \(P\) et \(Q\) sont toutes les deux vraies, fausse sinon.
> - **Disjonction** : \({P \text{ ou } Q}\) est vraie quand au moins l’une des deux est vraie, fausse quand les deux sont fausses.
> - **Implication** : \({P \Rightarrow Q}\) désigne l’assertion \({(\text{non } P) \text{ ou } Q}\).
> - **Équivalence** : \({P \iff Q}\) désigne l’assertion \({(P \Rightarrow Q) \text{ et } (Q \Rightarrow P)}\).

Ces définitions se résument dans une table de vérité (V pour vrai, F pour faux) :

| \(P\) | \(Q\) | \(P \text{ et } Q\) | \(P \text{ ou } Q\) | \(P \Rightarrow Q\) | \(P \iff Q\) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | V | V |
| V | F | F | V | F | F |
| F | V | F | V | V | F |
| F | F | F | F | V | V |

> [!IMPORTANT] **Remarques**
>
> - Le « ou » mathématique est **inclusif** : \({P \text{ ou } Q}\) est vraie aussi quand les deux sont vraies.
> - L’implication \({P \Rightarrow Q}\) n’est fausse que dans un seul cas : \(P\) vraie et \(Q\) fausse. En particulier, si \(P\) est fausse, \({P \Rightarrow Q}\) est vraie quelle que soit \(Q\). Ainsi « \({1 = 2 \Rightarrow 3 = 5}\) » est une assertion vraie.
> - Écrire \({P \Rightarrow Q}\) n’affirme pas que \(P\) est vraie. Dans une rédaction, « donc » et « \(\Rightarrow\) » ne sont pas synonymes : « \(P\) donc \(Q\) » affirme que \(P\) est vraie, puis que \(Q\) l’est.

> [!TIP] **Vocabulaire**
>
> Quand \({P \Rightarrow Q}\) est vraie, on dit que \(P\) est une **condition suffisante** pour \(Q\) (il suffit que \(P\) soit vraie pour que \(Q\) le soit) et que \(Q\) est une **condition nécessaire** pour \(P\) (il faut que \(Q\) soit vraie pour que \(P\) le soit).
>
> L’implication \({Q \Rightarrow P}\) est la **réciproque** de \({P \Rightarrow Q}\). L’implication \({(\text{non } Q) \Rightarrow (\text{non } P)}\) est sa **contraposée**.

{{% details title="Exemple" closed="true" %}}
Pour un réel \(x\), l’implication \({x > 3 \Rightarrow x^2 > 9}\) est vraie. Sa réciproque \({x^2 > 9 \Rightarrow x > 3}\) est fausse pour \({x = -4}\). La condition \({x > 3}\) est donc suffisante pour avoir \({x^2 > 9}\), mais elle n’est pas nécessaire.
{{% /details %}}

## Règles de calcul

> [!TIP] **Propriétés**
>
> Soient \(P\), \(Q\), \(R\) trois assertions. Les assertions suivantes sont équivalentes deux à deux :
> - \({\text{non}(\text{non } P)}\) et \(P\) ;
> - \({\text{non}(P \text{ et } Q)}\) et \({(\text{non } P) \text{ ou } (\text{non } Q)}\) (loi de De Morgan) ;
> - \({\text{non}(P \text{ ou } Q)}\) et \({(\text{non } P) \text{ et } (\text{non } Q)}\) (loi de De Morgan) ;
> - \({P \text{ et } (Q \text{ ou } R)}\) et \({(P \text{ et } Q) \text{ ou } (P \text{ et } R)}\) ;
> - \({P \text{ ou } (Q \text{ et } R)}\) et \({(P \text{ ou } Q) \text{ et } (P \text{ ou } R)}\) ;
> - \({\text{non}(P \Rightarrow Q)}\) et \({P \text{ et } (\text{non } Q)}\) ;
> - \({P \Rightarrow Q}\) et sa contraposée \({(\text{non } Q) \Rightarrow (\text{non } P)}\).

{{% details title="Démonstration" closed="true" %}}
Chaque équivalence se vérifie avec une table de vérité. Par exemple, pour la première loi de De Morgan :

| \(P\) | \(Q\) | \(P \text{ et } Q\) | \(\text{non}(P \text{ et } Q)\) | \(\text{non } P\) | \(\text{non } Q\) | \((\text{non } P) \text{ ou } (\text{non } Q)\) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | V | F | F | F | F |
| V | F | F | V | F | V | V |
| F | V | F | V | V | F | V |
| F | F | F | V | V | V | V |

Les colonnes 4 et 7 sont identiques.

Pour la négation de l’implication : \({P \Rightarrow Q}\) est par définition \({(\text{non } P) \text{ ou } Q}\). D’après la seconde loi de De Morgan, sa négation est \({\text{non}(\text{non } P) \text{ et } (\text{non } Q)}\), c’est-à-dire \({P \text{ et } (\text{non } Q)}\).

Pour la contraposée : \({(\text{non } Q) \Rightarrow (\text{non } P)}\) est par définition \({\text{non}(\text{non } Q) \text{ ou } (\text{non } P)}\), soit \({Q \text{ ou } (\text{non } P)}\), qui est bien \({P \Rightarrow Q}\).
{{% /details %}}

## Quantificateurs

> [!TIP] **Définition**
>
> Soit \(P(x)\) un prédicat qui dépend d’un élément \(x\) d’un ensemble \(E\).
> - L’assertion \({\forall x \in E,\ P(x)}\) (« pour tout \(x\) de \(E\), \(P(x)\) ») est vraie lorsque \(P(x)\) est vraie pour chaque élément \(x\) de \(E\).
> - L’assertion \({\exists x \in E,\ P(x)}\) (« il existe \(x\) dans \(E\) tel que \(P(x)\) ») est vraie lorsque \(P(x)\) est vraie pour au moins un élément \(x\) de \(E\).
> - L’assertion \({\exists!\, x \in E,\ P(x)}\) est vraie lorsque \(P(x)\) est vraie pour un élément \(x\) de \(E\) et un seul.

> [!TIP] **Propriété - Négation d’une assertion quantifiée**
>
> - La négation de \({\forall x \in E,\ P(x)}\) est \({\exists x \in E,\ \text{non } P(x)}\).
> - La négation de \({\exists x \in E,\ P(x)}\) est \({\forall x \in E,\ \text{non } P(x)}\).

> [!IMPORTANT] **Remarque - L’ordre des quantificateurs**
>
> On peut échanger deux \(\forall\) qui se suivent, ou deux \(\exists\) qui se suivent. En revanche, on ne peut pas échanger un \(\forall\) et un \(\exists\) :
> - \({\forall x \in \mathbb{R},\ \exists y \in \mathbb{R},\ y > x}\) est vraie (prendre \({y = x + 1}\) : ici \(y\) dépend de \(x\)) ;
> - \({\exists y \in \mathbb{R},\ \forall x \in \mathbb{R},\ y > x}\) est fausse (il n’existe pas de réel plus grand que tous les autres).

> [!NOTE] **Méthode - Nier une assertion quantifiée**
>
> On lit l’assertion de gauche à droite : chaque \(\forall\) devient \(\exists\), chaque \(\exists\) devient \(\forall\), les ensembles ne changent pas, et l’on nie le prédicat final. Si ce prédicat est une implication \({A \Rightarrow B}\), sa négation est \({A \text{ et } (\text{non } B)}\).

{{% details title="Exemple" closed="true" %}}
Dire qu’une fonction \({f : \mathbb{R} \to \mathbb{R}}\) est majorée s’écrit

\[
\exists M \in \mathbb{R},\ \forall x \in \mathbb{R},\ f(x) \leq M.
\]

Dire que \(f\) n’est pas majorée s’écrit donc

\[
\forall M \in \mathbb{R},\ \exists x \in \mathbb{R},\ f(x) > M.
\]
{{% /details %}}

> [!NOTE] **Exercice résolu - Écrire et nier une assertion**
>
> Soit \((u_n)\) une suite réelle. On considère l’assertion
>
> \[ P : \quad \forall A \in \mathbb{R},\ \exists N \in \mathbb{N},\ \forall n \in \mathbb{N},\ (n \geq N \Rightarrow u_n \geq A). \]
>
> 1. Écrire la négation de \(P\).
> 2. L’assertion \(P\) est-elle vraie pour la suite définie par \({u_n = (-1)^n n}\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** On échange les quantificateurs et on nie l’implication finale :

\[
\text{non } P : \quad \exists A \in \mathbb{R},\ \forall N \in \mathbb{N},\ \exists n \in \mathbb{N},\ (n \geq N \text{ et } u_n < A).
\]

**2.** Montrons que \({\text{non } P}\) est vraie avec \({A = 0}\). Soit \(N\) un entier naturel quelconque. On choisit \({n = 2N + 1}\) : c’est un entier impair, et \({n \geq N}\). Alors \({u_n = -(2N+1) < 0}\).

On a trouvé, pour chaque \(N\), un entier \({n \geq N}\) tel que \({u_n < 0}\). Donc \({\text{non } P}\) est vraie, et \(P\) est fausse pour cette suite.
{{% /details %}}
