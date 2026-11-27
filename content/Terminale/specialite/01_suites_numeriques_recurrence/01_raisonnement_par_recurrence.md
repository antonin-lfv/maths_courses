---
title: 'Raisonnement par récurrence'
weight: 1
cascade:
  type: docs
---

## Propriété mathématique

> [!TIP] **Définition**
> Une **propriété mathématique** est un énoncé (écrit en mots, en symboles ou les deux, et comportant un verbe) qui est soit vrai, soit faux.  
> Lorsqu’elle dépend d’un entier naturel \(n\), on la note \(P(n)\).

{{% details title="Exemples" closed="true" %}}
- Une égalité : \(P(n)\) : « \({1 + 3 + 5 + \dots + (2n - 1) = n^2}\) ».  
- Une inégalité : \(P(n)\) : « \({2^n \geq n + 1}\) ».  
- Une phrase : \(P(n)\) : « \({n^2 + n}\) est un nombre pair ».
{{% /details %}}

## Principe de récurrence

> [!TIP] **Principe de récurrence (axiome)**  
> Soit \(P(n)\) une propriété dépendant d’un entier naturel \(n\), et \(n_0\) un entier naturel.  
> Si :  
> - (**initialisation**) \(P(n_0)\) est vraie ;  
> - (**hérédité**) pour tout entier \({k \geq n_0}\), si \(P(k)\) est vraie, alors \({P(k+1)}\) est vraie ;  
> 
> alors \(P(n)\) est vraie pour tout entier \({n \geq n_0}\).

Le schéma suivant illustre le principe de récurrence : l’initialisation fait « tomber le premier domino », l’hérédité garantit que chaque domino fait tomber le suivant.

![](/images/image220.png)

En effet : \(P(n_0)\) est vraie, donc \({P(n_0+1)}\) est vraie, donc \({P(n_0+2)}\) est vraie, donc \({P(n_0+3)}\) est vraie… et ainsi \(P(n)\) est vraie pour tout \({n \geq n_0}\).

## Raisonnement par récurrence

Soit \(P(n)\) une propriété dépendant d’un entier naturel \(n\), et \(n_0\) un entier naturel.  

Pour démontrer que \(P(n)\) est vraie pour tout entier \({n \geq n_0}\), on rédige en trois temps :  
- **Initialisation.** On vérifie que \(P(n_0)\) est vraie, c’est-à-dire que la propriété est vraie au rang \(n_0\).  
- **Hérédité.** On démontre que, pour tout entier \({k \geq n_0}\) : si \(P(k)\) est vraie, alors \({P(k+1)}\) est vraie.  
  Pour cela, on fixe un entier \({k \geq n_0}\) quelconque et on **suppose** que \(P(k)\) est vraie : c’est l’**hypothèse de récurrence**. On démontre alors, en s’appuyant sur cette hypothèse, que \({P(k+1)}\) est vraie.  
- **Conclusion.** D’après le principe de récurrence, \(P(n)\) est vraie pour tout entier \({n \geq n_0}\).  

> [!IMPORTANT] **Remarque**  
> Le plus souvent, l’initialisation se fait au rang \({n_0 = 0}\) ou \({n_0 = 1}\) : on vérifie alors que \(P(0)\) ou \(P(1)\) est vraie. Les deux étapes sont indispensables : une propriété héréditaire mais jamais initialisée peut être fausse pour tout \(n\).

## Vérifier qu’une propriété est vraie à un rang donné

> [!NOTE] **Méthode 1 - Vérifier qu’une propriété est vraie à un rang donné**  
> Soit \(n\) un entier naturel. Vérifier que chacune des propriétés \(P(n)\) suivantes est vraie au rang \(n_0\) indiqué.  
> 1. \(P(n)\) : « \({7^n - 1}\) est un multiple de 6 » ; \({\quad n_0 = 1}\).  
> 2. \(P(n)\) : « \({1 + 2 + \dots + n \leq n^2}\) » ; \({\quad n_0 = 3}\).  
> 3. \(P(n)\) : « \(1 \times 2 + 2 \times 3 + \dots + n(n+1) = \dfrac{n(n+1)(n+2)}{3}\) » ; \({\quad n_0 = 2}\).

{{% details title="Solution commentée" closed="true" %}}
1. Pour \({n = 1}\) : \({7^1 - 1 = 6}\), qui est bien un multiple de 6.  
Donc \(P(1)\) est vraie.  

2. Pour \({n = 3}\) : d’une part \({1 + 2 + 3 = 6}\), d’autre part \({3^2 = 9}\).  
Comme \({6 \leq 9}\), \(P(3)\) est vraie.  

3. Pour \({n = 2}\) : le membre de gauche vaut \({1 \times 2 + 2 \times 3 = 2 + 6 = 8}\).  
Le membre de droite vaut \({\dfrac{2 \times 3 \times 4}{3} = 8}\). Les deux membres sont égaux : \(P(2)\) est vraie.
{{% /details %}}

## Étudier l’initialisation d’une propriété

> [!NOTE] **Méthode 2 - Étudier l’initialisation d’une propriété**  
> Soit \(n\) un entier naturel. On considère la propriété \(P(n)\) : « \({2^n \geq n^2 + 3}\) ».  
> Déterminer le plus petit entier naturel \(n_0\) pour lequel \(P(n)\) est vraie.

{{% details title="Solution commentée" closed="true" %}}
On teste la propriété pour les premières valeurs de \(n\) :  

- \({n = 0}\) : \({2^0 = 1}\) et \({0 + 3 = 3}\) ; \({1 < 3}\), donc \(P(0)\) est fausse ;  
- \({n = 1}\) : \({2^1 = 2}\) et \({1 + 3 = 4}\) ; \(P(1)\) est fausse ;  
- \({n = 2}\) : \({2^2 = 4}\) et \({4 + 3 = 7}\) ; \(P(2)\) est fausse ;  
- \({n = 3}\) : \({2^3 = 8}\) et \({9 + 3 = 12}\) ; \(P(3)\) est fausse ;  
- \({n = 4}\) : \({2^4 = 16}\) et \({16 + 3 = 19}\) ; \(P(4)\) est fausse ;  
- \({n = 5}\) : \({2^5 = 32}\) et \({25 + 3 = 28}\) ; \({32 \geq 28}\), donc \(P(5)\) est vraie.  

Le plus petit entier naturel pour lequel \(P(n)\) est vraie est \({n_0 = 5}\).
{{% /details %}}

## Mettre en œuvre un raisonnement par récurrence

> [!NOTE] **Méthode 3 - Mettre en œuvre un raisonnement par récurrence**  
> On considère la suite \((u_n)\) définie par \({u_0 = 1}\) et, pour tout entier naturel \(n\), \({u_{n+1} = 0{,}5u_n + 3}\).  
> Démontrer par récurrence que, pour tout entier naturel \(n\), \({u_n \leq 6}\).

{{% details title="Solution commentée" closed="true" %}}
Pour tout entier naturel \(n\), on note \(P(n)\) la propriété : « \({u_n \leq 6}\) ».  

- **Initialisation.** Pour \({n = 0}\) : \({u_0 = 1}\) et \({1 \leq 6}\). Donc \(P(0)\) est vraie.  

- **Hérédité.** Soit \(k\) un entier naturel quelconque. On suppose que \(P(k)\) est vraie, c’est-à-dire que \({u_k \leq 6}\) (hypothèse de récurrence).  
On veut démontrer que \({P(k+1)}\) est vraie, c’est-à-dire que \({u_{k+1} \leq 6}\).  

  D’après l’hypothèse de récurrence, \({u_k \leq 6}\). En multipliant par le réel positif \(0{,}5\), l’ordre est conservé : \({0{,}5u_k \leq 3}\).  
  En ajoutant 3 à chaque membre : \({0{,}5u_k + 3 \leq 6}\), c’est-à-dire \({u_{k+1} \leq 6}\).  
  Donc \({P(k+1)}\) est vraie : la propriété est héréditaire.  

- **Conclusion.** La propriété est vraie au rang 0 et elle est héréditaire. D’après le principe de récurrence, \(P(n)\) est vraie pour tout entier naturel \(n\) : \({u_n \leq 6}\) pour tout \({n \in \mathbb{N}}\).
{{% /details %}}
