---
title: 'Exercices'
weight: 7
cascade:
  type: docs
---

### Exercice 1

Une entreprise achète 70 % de ses pièces au fournisseur \(A\) et le reste au fournisseur \(B\). 2 % des pièces de \(A\) et 5 % des pièces de \(B\) sont défectueuses. On choisit une pièce au hasard ; \(D\) désigne l’évènement « la pièce est défectueuse ».
1. Calculer \(P(D)\).
2. La pièce est défectueuse. Quelle est la probabilité qu’elle provienne de \(B\) ?

{{% details title="Solution" closed="true" %}}
1. Formule des probabilités totales avec la partition \(\{A, B\}\) : \(P(D) = 0{,}7 \times 0{,}02 + 0{,}3 \times 0{,}05 = 0{,}014 + 0{,}015 = 0{,}029\).
2. \(P_D(B) = \dfrac{P(B \cap D)}{P(D)} = \dfrac{0{,}015}{0{,}029} \approx 0{,}517\).
{{% /details %}}

### Exercice 2

On lance un dé équilibré à 12 faces numérotées de 1 à 12, et on note \(X\) le résultat.
1. Quelle est la loi de \(X\) ? Calculer \(P(X > 9)\).
2. Calculer \(E(X)\).

{{% details title="Solution" closed="true" %}}
1. \(X\) suit la loi uniforme sur \(\{1\,;\,\dots\,;\,12\}\). \(P(X > 9) = P(X \in \{10, 11, 12\}) = \dfrac{3}{12} = \dfrac{1}{4}\).
2. \(E(X) = \dfrac{12 + 1}{2} = 6{,}5\).
{{% /details %}}

### Exercice 3

Un QCM comporte 10 questions ; chacune a 4 réponses proposées dont une seule est juste. Un candidat répond au hasard à toutes les questions, de manière indépendante. On note \(X\) le nombre de bonnes réponses.
1. Justifier que \(X\) suit une loi binomiale et préciser ses paramètres.
2. Calculer \(P(X = 3)\) et \(P(X \geq 5)\), arrondies au millième.
3. Calculer \(E(X)\) et interpréter.

{{% details title="Solution" closed="true" %}}
1. Chaque question est une épreuve de Bernoulli (succès : « bonne réponse », \(p = 0{,}25\)), répétée 10 fois de façon indépendante. \(X\) compte les succès : \(X \sim \mathcal{B}(10\,;\,0{,}25)\).
2. \(P(X = 3) = \dbinom{10}{3} \times 0{,}25^3 \times 0{,}75^7 \approx 0{,}250\) ; à la calculatrice, \(P(X \geq 5) = 1 - P(X \leq 4) \approx 0{,}078\).
3. \(E(X) = 10 \times 0{,}25 = 2{,}5\) : en répondant au hasard, on obtient en moyenne 2,5 bonnes réponses sur 10.
{{% /details %}}

### Exercice 4

1. Calculer \(\dbinom{6}{2}\) à l’aide du triangle de Pascal, puis interpréter ce nombre dans un schéma de Bernoulli.
2. Justifier que, pour tout entier \(n \geq 1\), \(\dbinom{n}{1} = n\).

{{% details title="Solution" closed="true" %}}
1. Ligne \(n = 6\) : \(1\,;\,6\,;\,15\,;\,20\,;\,15\,;\,6\,;\,1\), donc \(\dbinom{6}{2} = 15\). Dans un schéma de Bernoulli à 6 répétitions, il y a 15 chemins comportant exactement 2 succès.
2. Un chemin comportant exactement un succès est déterminé par le rang de ce succès, qui peut être \(1, 2, \dots, n\) : il y a \(n\) tels chemins.
{{% /details %}}

### Exercice 5

On lance un dé équilibré jusqu’à obtenir un 6. On note \(Y\) le nombre de lancers effectués.
1. Quelle est la loi de \(Y\) ?
2. Calculer \(P(Y = 4)\) et \(P(Y > 6)\).
3. Combien de lancers faut-il en moyenne pour obtenir un 6 ?

{{% details title="Solution" closed="true" %}}
1. Les lancers sont indépendants et le succès « obtenir 6 » a pour probabilité \(\frac{1}{6}\) : \(Y \sim \mathcal{G}\left(\frac{1}{6}\right)\).
2. \(P(Y = 4) = \dfrac{1}{6}\left(\dfrac{5}{6}\right)^3 \approx 0{,}096\) et \(P(Y > 6) = \left(\dfrac{5}{6}\right)^6 \approx 0{,}335\).
3. \(E(Y) = \dfrac{1}{1/6} = 6\) lancers.
{{% /details %}}

### Exercice 6

Un tireur atteint sa cible avec la probabilité \(0{,}1\) à chaque tir, les tirs étant indépendants. Combien de tirs doit-il effectuer au minimum pour que la probabilité d’atteindre au moins une fois la cible soit supérieure ou égale à \(0{,}95\) ?

{{% details title="Solution" closed="true" %}}
Sur \(n\) tirs, le nombre de succès suit la loi \(\mathcal{B}(n\,;\,0{,}1)\) et la probabilité d’au moins un succès vaut \(1 - 0{,}9^n\). On résout \(1 - 0{,}9^n \geq 0{,}95 \iff 0{,}9^n \leq 0{,}05\). La fonction \(\ln\) étant croissante : \(n\ln(0{,}9) \leq \ln(0{,}05)\), soit, comme \(\ln(0{,}9) < 0\), \(n \geq \dfrac{\ln(0{,}05)}{\ln(0{,}9)} \approx 28{,}4\). Il faut au moins 29 tirs.
{{% /details %}}
