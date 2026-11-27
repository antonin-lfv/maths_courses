---
title: 'Schéma de Bernoulli et loi binomiale'
weight: 2
cascade:
  type: docs
---

## Épreuve de Bernoulli

> [!TIP] **Définitions**
>
> - Une **épreuve de Bernoulli** est une expérience aléatoire qui n’a que **deux issues**, appelées **succès** (notée \(S\)) et **échec** (notée \(E\) ou \(\overline{S}\)). On note \(p\) la probabilité du succès.
> - La variable aléatoire \(X\) qui vaut 1 en cas de succès et 0 en cas d’échec suit la **loi de Bernoulli de paramètre \(p\)** :
>
> | \(k\) | \(0\) | \(1\) |
> |---|---|---|
> | \({P(X = k)}\) | \({1 - p}\) | \(p\) |

> [!TIP] **Propriétés**
>
> Si \(X\) suit la loi de Bernoulli de paramètre \(p\), alors son **espérance** est \({E(X) = p}\) et sa **variance** est \({V(X) = p(1 - p)}\).

En effet, \({E(X) = 0 \times (1 - p) + 1 \times p = p}\) et \(V(X) = (1 - p)(0 - p)^2 + p(1 - p)^2 = p(1 - p)(p + 1 - p) = p(1 - p)\).

{{% details title="Exemple" closed="true" %}}
On lance un dé équilibré à six faces ; on appelle succès l’événement « obtenir 6 ». C’est une épreuve de Bernoulli de paramètre \({p = \dfrac{1}{6}}\). La variable \(X\) associée vérifie \({E(X) = \dfrac{1}{6}}\) et \({V(X) = \dfrac{1}{6} \times \dfrac{5}{6} = \dfrac{5}{36}}\).
{{% /details %}}

## Schéma de Bernoulli

> [!TIP] **Définitions**
>
> - On appelle **schéma de Bernoulli de paramètres \(n\) et \(p\)** la répétition de \(n\) épreuves de Bernoulli **identiques et indépendantes**, dont la probabilité de succès est \(p\).
> - Une issue de ce schéma est une liste de \(n\) lettres égales à \(S\) ou à \(E\), par exemple \((S, E, E, S, \dots, S)\). L’univers est \({\Omega = \{S\,;\,E\}^n}\).

![](/images/image316.png)

> [!TIP] **Propriété**
>
> On considère un schéma de Bernoulli de paramètres \(n\) et \(p\), et \(k\) un entier compris entre 0 et \(n\). La probabilité d’obtenir **exactement \(k\) succès** au cours des \(n\) épreuves est
> \[
\binom{n}{k}\, p^k\, (1 - p)^{n - k}.
\]

> [!IMPORTANT] **Remarque**
>
> Chaque issue comportant \(k\) succès a la probabilité \({p^k(1 - p)^{n - k}}\), et il y a \(\binom{n}{k}\) telles issues : autant que de façons de choisir les positions des \(k\) succès parmi les \(n\) épreuves (soit, dans l’arbre, autant que de chemins réalisant \(k\) succès).

## Loi binomiale

> [!TIP] **Définitions**
>
> On considère un schéma de Bernoulli de paramètres \(n\) et \(p\).
> - La variable aléatoire \(X\) qui associe à chaque issue le **nombre de succès** obtenus au cours des \(n\) épreuves suit la **loi binomiale de paramètres \(n\) et \(p\)**, notée \(\mathcal{B}(n\,;\,p)\).
> - Cette loi est aussi appelée **loi du nombre de succès**.

> [!TIP] **Propriété**
>
> Si \(X\) suit la loi binomiale \(\mathcal{B}(n\,;\,p)\), alors pour tout entier \(k\) compris entre 0 et \(n\) :
> \[
P(X = k) = \binom{n}{k}\, p^k\, (1 - p)^{n - k}.
\]

{{% details title="Exemple" closed="true" %}}
On lance 4 fois un dé équilibré et l’on appelle succès « obtenir 1 ou 2 », de probabilité \(\dfrac{1}{3}\). Le nombre \(X\) de succès suit la loi \(\mathcal{B}\left(4\,;\,\dfrac{1}{3}\right)\) :

| \(k\) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| \({P(X = k)}\) | \(\dfrac{16}{81}\) | \(\dfrac{32}{81}\) | \(\dfrac{24}{81}\) | \(\dfrac{8}{81}\) | \(\dfrac{1}{81}\) |

Par exemple, \(P(X = 2) = \binom{4}{2}\left(\dfrac{1}{3}\right)^2\left(\dfrac{2}{3}\right)^2 = 6 \times \dfrac{1}{9} \times \dfrac{4}{9} = \dfrac{24}{81}\). La somme des probabilités vaut bien 1.

![](/images/image317.png)
{{% /details %}}

> [!TIP] **Propriétés**
>
> Si \(X\) suit la loi binomiale \(\mathcal{B}(n\,;\,p)\), alors :
> - son espérance est \({E(X) = np}\) ;
> - sa variance est \({V(X) = np(1 - p)}\) ;
> - son écart type est \({\sigma(X) = \sqrt{np(1 - p)}}\).

{{% details title="Exemple" closed="true" %}}
Pour \({X \sim \mathcal{B}\left(4\,;\,\dfrac{1}{3}\right)}\) : \({E(X) = 4 \times \dfrac{1}{3} = \dfrac{4}{3}}\), \({V(X) = 4 \times \dfrac{1}{3} \times \dfrac{2}{3} = \dfrac{8}{9}}\) et \({\sigma(X) = \dfrac{2\sqrt{2}}{3} \approx 0{,}94}\). Sur un grand nombre de séries de 4 lancers, on obtient en moyenne environ 1,33 succès par série.
{{% /details %}}

## Utiliser un schéma de Bernoulli

> [!NOTE] **Méthode 2 - Reconnaître et utiliser un schéma de Bernoulli**
>
> Une joueuse de handball réussit un penalty avec une probabilité de 0,8, indépendamment des autres tirs. Elle tire 5 penaltys.
> 1. Justifier que cette situation est un schéma de Bernoulli dont on précisera les paramètres.
> 2. Calculer la probabilité qu’elle réussisse exactement 4 penaltys.
> 3. Calculer la probabilité qu’elle en manque au moins un.

{{% details title="Solution commentée" closed="true" %}}
**1.** Chaque tir est une épreuve de Bernoulli de succès « le penalty est réussi », de probabilité \({p = 0{,}8}\). Les 5 tirs sont identiques et indépendants : c’est un schéma de Bernoulli de paramètres \({n = 5}\) et \({p = 0{,}8}\). Le nombre \(X\) de réussites suit la loi \(\mathcal{B}(5\,;\,0{,}8)\).

**2.** \(P(X = 4) = \dbinom{5}{4} \times 0{,}8^4 \times 0{,}2 = 5 \times 0{,}4096 \times 0{,}2 = 0{,}4096\).

**3.** « Manquer au moins un penalty » est le contraire de « tout réussir » :
\[
P(X \leq 4) = 1 - P(X = 5) = 1 - 0{,}8^5 = 1 - 0{,}32768 \approx 0{,}672.
\]
{{% /details %}}

## Modéliser par une loi binomiale

> [!NOTE] **Méthode 3 - Calculer avec une loi binomiale**
>
> Un QCM comporte 10 questions ; chacune propose 3 réponses dont une seule est correcte. Un candidat répond au hasard à chaque question. On note \(X\) le nombre de bonnes réponses.
> 1. Justifier que \(X\) suit une loi binomiale et préciser ses paramètres.
> 2. Calculer l’espérance de \(X\) et l’interpréter.
> 3. À l’aide de la calculatrice, déterminer (à \({10^{-3}}\) près) : a. \({P(X = 5)}\) ; b. \({P(X \leq 2)}\) ; c. \({P(X \geq 6)}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** Répondre au hasard à une question est une épreuve de Bernoulli de succès « la réponse est juste », de probabilité \(\dfrac{1}{3}\). Les 10 questions sont des épreuves identiques et indépendantes, et \(X\) compte les succès : \({X \sim \mathcal{B}\left(10\,;\,\dfrac{1}{3}\right)}\).

**2.** \({E(X) = 10 \times \dfrac{1}{3} \approx 3{,}33}\) : en répondant au hasard, on obtient en moyenne environ 3,3 bonnes réponses sur 10.

**3.** a. \(P(X = 5) = \dbinom{10}{5}\left(\dfrac{1}{3}\right)^5\left(\dfrac{2}{3}\right)^5 \approx 0{,}137\).  
b. La calculatrice (probabilités cumulées) donne \({P(X \leq 2) \approx 0{,}299}\).  
c. \({P(X \geq 6) = 1 - P(X \leq 5) \approx 0{,}077}\).
{{% /details %}}
