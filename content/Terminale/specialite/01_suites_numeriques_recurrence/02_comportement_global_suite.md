---
title: "Comportement global d'une suite"
weight: 2
cascade:
  type: docs
---

## Suites monotones

> [!TIP] **Définitions**  
> On dit qu’une suite \((u_n)\) définie sur \(\mathbb{N}\) est :  
> - **croissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \geq u_n\) ;  
> - **décroissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \leq u_n\).  
> Une suite \((u_n)\) est dite **monotone** lorsqu’elle est croissante ou décroissante.  

Trois méthodes permettent l’étude de la monotonie d’une suite :  
- **Méthode algébrique** : elle consiste à comparer directement \(u_n\) et \(u_{n+1}\) :  
  - soit en étudiant le signe de la différence \(u_{n+1} - u_n\),  
  - soit en comparant le quotient \(\dfrac{u_{n+1}}{u_n}\) à 1 si, pour tout entier naturel \(n\), \(u_n > 0\).  

- **Méthode fonctionnelle** : elle s’applique aux suites définies par une formule explicite de la forme \(u_n = f(n)\) (\(f\) étant une fonction) et consiste à étudier le sens de variation de \(f\) sur \([0 ; +\infty[\). Le sens de variation de \((u_n)\) s’en déduit.  

- **Méthode du raisonnement par récurrence** : elle s’applique aux suites définies par une relation de récurrence de la forme \(u_{n+1} = f(u_n)\) et consiste à démontrer qu’une des propriétés \(P(n) : u_{n+1} \leq u_n\) ou \(P(n) : u_{n+1} \geq u_n\) est vraie pour tout entier naturel \(n\).  


## Suites majorées, minorées et bornées

> [!TIP] **Définitions**  
> On dit qu’une suite \((u_n)\) définie sur \(\mathbb{N}\) est :  
> - **majorée** s’il existe un réel \(M\) tel que, pour tout entier naturel \(n\), \(u_n \leq M\).  
>   \(M\) est appelé un **majorant** de \((u_n)\).  
> - **minorée** s’il existe un réel \(m\) tel que, pour tout entier naturel \(n\), \(u_n \geq m\).  
>   \(m\) est appelé un **minorant** de \((u_n)\).  
> - **bornée** si elle est à la fois majorée et minorée.  

> [!IMPORTANT] **Remarques**  
> - Une suite majorée admet une infinité de majorants. En effet, si \(M\) est un majorant de \((u_n)\), tous les réels supérieurs à \(M\) sont également des majorants de \((u_n)\). De même, une suite minorée admet une infinité de minorants.  
> - Toute suite croissante est minorée par son premier terme et toute suite décroissante est majorée par son premier terme.  
> - Pour démontrer qu’une suite est majorée ou minorée, on peut utiliser une des méthodes vues plus haut.  

{{% details title="Exemple" closed="true" %}}
Soit \((u_n)\) la suite définie pour tout \(n \in \mathbb{N}\) par \(u_n = 2 - \dfrac{1}{n^2+1}\).  

On peut montrer qu’elle est bornée en utilisant la méthode algébrique.  

Pour tout entier naturel \(n\), \(\dfrac{1}{n^2+1} \geq 0\), donc \(u_n \leq 2\). Donc la suite \((u_n)\) est majorée par 2.  

Pour tout entier naturel \(n\), \(\dfrac{1}{n^2+1} \leq 1\), donc \(-\dfrac{1}{n^2+1} \geq -1\), donc \(u_n \geq 1\). Donc la suite \((u_n)\) est minorée par 1.  

On en déduit que, pour tout entier naturel \(n\), \(1 \leq u_n \leq 2\). Donc la suite \((u_n)\) est bornée.
{{% /details %}}


## Déterminer le sens de variation d’une suite

> [!NOTE] **Méthode 1 — Déterminer le sens de variation d’une suite**  
> 1. Montrer que la suite \((u_n)\), définie pour tout entier naturel \(n\) par \(u_n = n^2 + 3n\), est croissante.  
> 2. Montrer que la suite \((v_n)\), définie pour tout entier naturel \(n\) non nul par \(v_n = \left(\dfrac{1}{4}\right)^n n^2\), est décroissante.  
> 3. La suite \((w_n)\) est définie par \(w_0 = 1\) et, pour tout entier naturel \(n\), \(w_{n+1} = 2w_n - 3\).  
>    Montrer par récurrence que la suite \((w_n)\) est décroissante.

{{% details title="Solution commentée" closed="true" %}}

**1.** On peut utiliser la méthode algébrique : on étudie le signe de la différence \(u_{n+1} - u_n\), pour tout \(n \in \mathbb{N}\).  

\[
u_{n+1} - u_n = (n+1)^2 + 3(n+1) - (n^2+3n) = n^2+2n+1+3n+3-n^2-3n = 2n+4.
\]

Or, pour tout \(n \in \mathbb{N}\), \(2n+4 \geq 0\), c’est-à-dire \(u_{n+1} - u_n \geq 0\), donc la suite \((u_n)\) est croissante.  

On peut également utiliser la méthode fonctionnelle en étudiant les variations de la fonction \(f : x \mapsto x^2 + 3x\) sur \([0;+\infty[\).  
\(f'(x) = 2x+3\). Or \(2x+3 \geq 0\) sur \([0;+\infty[\), donc la fonction \(f\) est croissante sur \([0;+\infty[\). Donc la suite \((u_n)\) est croissante.  

---

**2.** On peut utiliser la méthode algébrique : ici, on a, pour tout entier \(n \geq 1\), \(v_n > 0\).  

Donc on compare le quotient \(\dfrac{v_{n+1}}{v_n}\) à 1 pour tout entier \(n \geq 1\).  

\[
\dfrac{v_{n+1}}{v_n} = \dfrac{\left(\dfrac{1}{4}\right)^{n+1}(n+1)^2}{\left(\dfrac{1}{4}\right)^n n^2}
= \dfrac{1}{4}\dfrac{(n+1)^2}{n^2}.
\]

Or \(\dfrac{(n+1)^2}{n^2} \leq 2n \cdot \dfrac{1}{2n} = 2n \cdot \dfrac{1}{2n} = \dfrac{n+1}{n}\).  
Donc, pour tout \(n \geq 1\), \(\dfrac{v_{n+1}}{v_n} \leq 1\), donc la suite \((v_n)\) est décroissante.  

---

**3.** On considère la propriété \(P(n) : w_{n+1} \leq w_n\).  

- **Initialisation.** Pour \(n_0 = 0\), \(w_1 = 2w_0 - 3 = 2 \cdot 1 - 3 = -1\) et \(w_0 = 1\), donc \(w_1 \leq w_0\). Donc \(P(0)\) est vraie.  

- **Hérédité.** On considère un entier quelconque \(k \geq 0\). On suppose que \(P(k)\) est vraie (hypothèse de récurrence), c’est-à-dire \(w_{k+1} \leq w_k\).  
On veut démontrer que \(P(k+1)\) est alors vraie, c’est-à-dire que \(w_{k+2} \leq w_{k+1}\).  

  Par hypothèse de récurrence, on a \(w_{k+1} \leq w_k\), donc \(2w_{k+1} \leq 2w_k\).  
  En multipliant chaque membre par le réel positif 2 et en ajoutant -3 à chaque membre, on a alors \(2w_{k+1} - 3 \leq 2w_k - 3\), soit \(w_{k+2} \leq w_{k+1}\).  

  Donc \(P(k+1)\) est vraie. La propriété est héréditaire.  

- **Conclusion.** La propriété \(P(n)\) est vraie au rang \(n_0 = 0\) et elle est héréditaire, donc \(P(n)\) est vraie pour tout entier \(n \geq 0\). Ainsi, la suite \((w_n)\) est décroissante.
{{% /details %}}

## Montrer qu’une suite est majorée ou minorée

> [!NOTE] **Méthode 2 — Montrer qu’une suite est majorée ou minorée**  
> 1. Montrer que la suite \((u_n)\), définie pour tout entier naturel \(n\) par \(u_n = n^2 - 6n + 5\), est minorée par \(-4\).  
> 2. La suite \((v_n)\) est définie par \(v_0 = 1\) et, pour tout entier naturel \(n\), \(v_{n+1} = 2v_n - 3\).  
>    Montrer par récurrence que la suite \((v_n)\) est majorée par 3.

{{% details title="Solution commentée" closed="true" %}}
**1.** Pour montrer que, pour tout entier naturel \(n\), \(u_n \geq -4\), on étudie le signe de la différence \(u_n - (-4)\).  

\[
u_n - (-4) = n^2 - 6n + 9 = (n-3)^2.
\]

Or \((n-3)^2 \geq 0\) pour tout entier naturel \(n\), donc \(u_n - (-4) \geq 0\), donc \(u_n \geq -4\).  
Donc la suite \((u_n)\) est minorée par \(-4\).  

---

**2.** On considère la propriété \(P(n) : v_n \leq 3\).  

- **Initialisation.** Pour \(n_0 = 0\), \(v_0 = 1\). Or \(1 \leq 3\), donc \(P(0)\) est vraie.  

- **Hérédité.** On considère un entier quelconque \(k \geq 0\). On suppose que \(P(k)\) est vraie, c’est-à-dire \(v_k \leq 3\).  
  Alors \(2v_k \leq 6\), donc \(2v_k - 3 \leq 3\), donc \(v_{k+1} \leq 3\).  
  Donc \(P(k+1)\) est vraie. La propriété est héréditaire.  

- **Conclusion.** La propriété \(P(n)\) est vraie au rang \(n_0 = 0\) et elle est héréditaire, donc \(P(n)\) est vraie pour tout entier \(n \geq 0\), c’est-à-dire que, pour tout entier \(n \geq 0\), \(v_n \leq 3\).  
Donc la suite \((v_n)\) est majorée par 3.
{{% /details %}}