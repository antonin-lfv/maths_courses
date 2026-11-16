---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

Un archer atteint la cible avec une probabilité de 0,25 à chaque tir, les tirs étant indépendants. Il tire 12 flèches ; on note \(X\) le nombre de flèches dans la cible.
1. Quelle est la loi de \(X\) ?
2. Calculer \(P(X = 3)\) et \(P(X \geq 1)\) (à \(10^{-3}\) près).
3. Calculer \(E(X)\) et \(V(X)\).

{{% details title="Solution" closed="true" %}}
1. 12 épreuves de Bernoulli identiques et indépendantes, de succès « atteindre la cible » (\(p = 0{,}25\)) ; \(X\) compte les succès : \(X \sim \mathcal{B}(12\,;\,0{,}25)\).
2. \(P(X = 3) = \dbinom{12}{3} \times 0{,}25^3 \times 0{,}75^9 \approx 0{,}258\) ; \(P(X \geq 1) = 1 - P(X = 0) = 1 - 0{,}75^{12} \approx 0{,}968\).
3. \(E(X) = 12 \times 0{,}25 = 3\) et \(V(X) = 12 \times 0{,}25 \times 0{,}75 = 2{,}25\).
{{% /details %}}

### Exercice 2

Dans une production, 4 % des pièces sont défectueuses. On prélève au hasard 50 pièces ; la production est assez importante pour assimiler ce prélèvement à 50 tirages avec remise. On note \(D\) le nombre de pièces défectueuses.
1. Justifier que \(D\) suit une loi binomiale.
2. Calculer la probabilité qu’aucune pièce ne soit défectueuse, puis celle qu’il y en ait au plus 2.
3. Combien de pièces défectueuses peut-on s’attendre à trouver en moyenne ?

{{% details title="Solution" closed="true" %}}
1. Chaque prélèvement est une épreuve de Bernoulli (succès : « la pièce est défectueuse », \(p = 0{,}04\)) ; les 50 prélèvements sont assimilés à des épreuves identiques et indépendantes : \(D \sim \mathcal{B}(50\,;\,0{,}04)\).
2. \(P(D = 0) = 0{,}96^{50} \approx 0{,}130\) ; à la calculatrice, \(P(D \leq 2) \approx 0{,}677\).
3. \(E(D) = 50 \times 0{,}04 = 2\) : en moyenne, 2 pièces défectueuses par lot de 50.
{{% /details %}}

### Exercice 3

On lance \(n\) fois un dé équilibré à dix faces numérotées de 1 à 10. Combien de lancers faut-il au minimum pour que la probabilité d’obtenir au moins une fois le 10 dépasse 0,99 ?

{{% details title="Solution" closed="true" %}}
Le nombre de 10 obtenus suit la loi \(\mathcal{B}(n\,;\,0{,}1)\). La probabilité d’obtenir au moins un 10 vaut \(1 - 0{,}9^n\).
\[
1 - 0{,}9^n \geq 0{,}99 \iff 0{,}9^n \leq 0{,}01 \iff n\ln(0{,}9) \leq \ln(0{,}01) \iff n \geq \frac{\ln(0{,}01)}{\ln(0{,}9)} \approx 43{,}7,
\]
le sens de l’inégalité changeant car \(\ln(0{,}9) < 0\). Il faut au minimum **44 lancers**.
{{% /details %}}

### Exercice 4

On considère \(X \sim \mathcal{B}(20\,;\,0{,}3)\). À l’aide des probabilités cumulées données dans le cours, déterminer :
1. \(P(X > 9)\) ;
2. \(P(3 \leq X \leq 8)\) ;
3. le plus petit entier \(k\) tel que \(P(X \leq k) \geq 0{,}98\).

{{% details title="Solution" closed="true" %}}
1. \(P(X > 9) = 1 - P(X \leq 9) \approx 1 - 0{,}952 = 0{,}048\).
2. \(P(3 \leq X \leq 8) = P(X \leq 8) - P(X \leq 2) \approx 0{,}887 - 0{,}036 = 0{,}851\).
3. \(P(X \leq 9) \approx 0{,}952 < 0{,}98\) et \(P(X \leq 10) \approx 0{,}983 \geq 0{,}98\) : \(k = 10\).
{{% /details %}}
