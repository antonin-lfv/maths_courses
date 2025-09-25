---
title: 'Raisonnement par récurrence'
weight: 1
cascade:
  type: docs
---

## Propriété mathématique

> [!TIP] **Définition**
> Une propriété mathématique est une phrase (avec ou sans symboles) contenant un verbe, qui est soit vraie, soit fausse.  
> Lorsqu’elle dépend d’un entier naturel \(n\), on la note \(P(n)\).

{{% details title="Exemples" closed="true" %}}
- Égalité : \(P(n)\) : \(1 + 2 + \dots + n = \dfrac{n(n+1)}{2}\).  
- Inégalité : \(P(n)\) : \((1+n)^n \geq 1 + n^2\).  
- Phrase : \(P(n)\) : \(n^3 - n\) est multiple de 3.
{{% /details %}}

## Principe de récurrence

> [!TIP] **Principe de récurrence (axiome)**  
> \(P(n)\) désigne une propriété concernant un entier naturel \(n\) et \(n_0\) désigne un entier naturel.  
> Si l’on démontre les deux étapes suivantes :  
> - étape 1 (**initialisation**) : \(P(n)\) est vraie pour un entier \(n_0\) ;  
> - étape 2 (**hérédité**) : pour tout entier \(k \geq n_0\), « \(P(k)\) est vraie » implique « \(P(k+1)\) est vraie » ;  
> 
> Alors on peut conclure que \(P(n)\) est vraie pour tout entier \(n \geq n_0\).

Le schéma suivant illustre le principe de récurrence :  

![](/images/image1.png)

Conclusion : \(P(n_0)\) vraie Donc \(P(n_0+1)\) vraie Donc \(P(n_0+2)\) vraie Donc \(P(n_0+3)\) vraie ... Donc \(P(n)\) vraie pour tout \(n \geq n_0\)

## Raisonnement par récurrence

\(P(n)\) désigne une propriété concernant un entier naturel \(n\) et \(n_0\) désigne un entier naturel.  

Pour démontrer que \(P(n)\) est vraie pour tout entier \(n \geq n_0\) on procède ainsi.  
- **Initialisation** : on vérifie que \(P(n_0)\) est vraie (c’est-à-dire que la propriété est vraie au rang \(n_0\)).  
- **Hérédité** : on démontre, pour tout entier \(k\) supérieur ou égal à \(n_0\), l’implication :  
  \(P(k)\) vraie ⇒ \(P(k+1)\) vraie.  

  Pour cela, on considère un entier quelconque \(k\), avec \(k \geq n_0\), et on suppose que \(P(k)\) est vraie (c’est-à-dire que l’on suppose que la propriété est vraie au rang \(k\)). C’est **l’hypothèse de récurrence**.  
  On démontre alors que \(P(k+1)\) est vraie (c’est-à-dire que la propriété est vraie au rang \(k+1\)) en utilisant l’hypothèse de récurrence.  

- **Conclusion** : on conclut, d’après le principe de récurrence, que \(P(n)\) est vraie pour tout entier \(n \geq n_0\).  

> [!IMPORTANT] **Remarque**  
> L’initialisation se fait souvent pour \(n_0 = 0\) ou \(n_0 = 1\). On vérifie donc que \(P(0)\) ou \(P(1)\) est vraie.


## Vérifier qu’une propriété est vraie à un rang donné

> [!NOTE] **Méthode 1 — Vérifier qu’une propriété est vraie à un rang donné**  
> Soit \(n\) un entier naturel. Vérifier que chaque propriété \(P(n)\) suivante est vraie pour le rang \(n_0\) donné.  
> 1. \(P(n)\) : \(5^n - 2^n\) est un multiple de 3 ; \(\quad n_0 = 1\).  
> 2. \(P(n)\) : \(1^2 + 2^2 + \dots + n^2 \leq n^3\) ; \(\quad n_0 = 2\).  
> 3. \(P(n)\) : \(1^3 + 2^3 + \dots + n^3 = (1+2+\dots+n)^2\) ; \(\quad n_0 = 3\).

{{% details title="Solution commentée" closed="true" %}}
1. On remplace \(n\) par \(n_0\) et on obtient \(5^1 - 2^1 = 3\), qui est bien un multiple de 3.  
Donc \(P(n)\) est vraie pour \(n_0 = 1\). Ainsi, \(P(1)\) est vraie.  

2. On remplace \(n\) par \(n_0\) et on obtient \(1^2 + 2^2 = 5\).  
Par ailleurs, \(2^3 = 8\) et \(5 \leq 8\). Donc \(P(2)\) est vraie.  

3. On remplace \(n\) par \(n_0\) et on obtient \(1^3 + 2^3 + 3^3 = 1+8+27=36\).  
Par ailleurs, \((1+2+3)^2 = 6^2 = 36\). Donc \(P(3)\) est vraie.
{{% /details %}}

## Étudier l’initialisation d’une propriété

> [!NOTE] **Méthode 2 — Étudier l’initialisation d’une propriété**  
> Soit \(n\) un entier naturel. On considère la propriété \(P(n) : 3^n \geq (n+2)^2\).  
> - Déterminer le plus petit entier naturel \(n_0\) pour lequel \(P(n)\) est vraie.

{{% details title="Solution commentée" closed="true" %}}
On teste \(P(n)\) pour les premières valeurs entières de \(n\) :  

- \(3^0 = 1\) et \((0+2)^2 = 2^2 = 4\), donc \(P(0)\) n’est pas vraie ;  
- \(3^1 = 3\) et \((1+2)^2 = 3^2 = 9\), donc \(P(1)\) n’est pas vraie ;  
- \(3^2 = 9\) et \((2+2)^2 = 4^2 = 16\), donc \(P(2)\) n’est pas vraie ;  
- \(3^3 = 27\) et \((3+2)^2 = 5^2 = 25\), donc \(P(3)\) est vraie.  

Le plus petit entier naturel \(n_0\) pour lequel \(P(n)\) est vraie est \(n_0 = 3\).
{{% /details %}}

## Mettre en œuvre un raisonnement par récurrence

> [!NOTE] **Méthode 3 — Mettre en œuvre un raisonnement par récurrence**  
> On considère la suite définie par \(u_0 = 2\) et, pour tout entier naturel \(n\), \(u_{n+1} = 0,3u_n + 7\).  
> - Démontrer par récurrence que \(u_n \leq 10\) pour tout entier naturel \(n\).

{{% details title="Solution commentée" closed="true" %}}
On considère la propriété \(P(n) : u_n \leq 10\).  

- **Initialisation**. Pour \(n_0 = 0\), \(u_0 = 2\). Or \(2 \leq 10\), donc \(P(0)\) est vraie.  

- **Hérédité**. On considère un entier quelconque \(k \geq 0\). On suppose que \(P(k)\) est vraie (hypothèse de récurrence), c’est-à-dire : \(u_k \leq 10\).  
On veut démontrer que \(P(k+1)\) est alors vraie, c’est-à-dire que \(u_{k+1} \leq 10\).  

  Par hypothèse de récurrence, on a \(u_k \leq 10\), donc \(0,3u_k \leq 3\) en multipliant chaque membre par le réel positif 0,3.  
  En ajoutant 7 à chaque membre, on trouve alors : \(0,3u_k + 7 \leq 10\), soit \(u_{k+1} \leq 10\).  
  Donc \(P(k+1)\) est vraie. La propriété est héréditaire.  

- **Conclusion**. La propriété \(P(n)\) est vraie au rang \(n_0 = 0\) et elle est héréditaire, donc \(P(n)\) est vraie pour tout entier \(n \geq 0\), c’est-à-dire \(u_n \leq 10\) pour tout entier naturel \(n\).
{{% /details %}}