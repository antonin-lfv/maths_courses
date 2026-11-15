---
title: "Comportement global d'une suite"
weight: 2
cascade:
  type: docs
---

## Suites monotones

> [!TIP] **Définitions**  
> Une suite \((u_n)\) définie sur \(\mathbb{N}\) est :  
> - **croissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \geq u_n\) ;  
> - **décroissante** si et seulement si, pour tout entier naturel \(n\), \(u_{n+1} \leq u_n\).  
>
> Une suite croissante ou décroissante est dite **monotone**.  

Pour étudier la monotonie d’une suite, on dispose de trois méthodes :  
- **Méthode algébrique** : on compare directement \(u_n\) et \(u_{n+1}\),  
  - soit en étudiant le signe de la différence \(u_{n+1} - u_n\),  
  - soit, lorsque tous les termes sont strictement positifs, en comparant le quotient \(\dfrac{u_{n+1}}{u_n}\) à 1.  

- **Méthode fonctionnelle** : pour une suite définie explicitement par \(u_n = f(n)\), où \(f\) est une fonction, on étudie le sens de variation de \(f\) sur \([0 ; +\infty[\) ; la suite \((u_n)\) a alors le même sens de variation que \(f\).  

- **Raisonnement par récurrence** : pour une suite définie par une relation \(u_{n+1} = f(u_n)\), on démontre par récurrence que la propriété \(P(n)\) : « \(u_{n+1} \leq u_n\) » (ou \(P(n)\) : « \(u_{n+1} \geq u_n\) ») est vraie pour tout entier naturel \(n\).  

## Suites majorées, minorées et bornées

> [!TIP] **Définitions**  
> Une suite \((u_n)\) définie sur \(\mathbb{N}\) est :  
> - **majorée** s’il existe un réel \(M\) tel que, pour tout entier naturel \(n\), \(u_n \leq M\) ;  
>   le réel \(M\) est alors un **majorant** de \((u_n)\) ;  
> - **minorée** s’il existe un réel \(m\) tel que, pour tout entier naturel \(n\), \(u_n \geq m\) ;  
>   le réel \(m\) est alors un **minorant** de \((u_n)\) ;  
> - **bornée** si elle est à la fois majorée et minorée.  

> [!IMPORTANT] **Remarques**  
> - Un majorant n’est jamais unique : si \(M\) majore \((u_n)\), tout réel supérieur à \(M\) la majore aussi. Une suite majorée a donc une infinité de majorants ; de même pour les minorants.  
> - Une suite croissante est minorée par son premier terme ; une suite décroissante est majorée par son premier terme.  
> - Pour prouver qu’une suite est majorée ou minorée, on peut réutiliser les méthodes ci-dessus (signe d’une différence, étude de fonction, récurrence).  

{{% details title="Exemple" closed="true" %}}
On considère la suite \((u_n)\) définie pour tout \(n \in \mathbb{N}\) par \(u_n = 1 + \dfrac{2}{n^2+2}\).  

Montrons qu’elle est bornée, par la méthode algébrique.  

Pour tout entier naturel \(n\), \(\dfrac{2}{n^2+2} > 0\), donc \(u_n > 1\) : la suite est minorée par 1.  

Pour tout entier naturel \(n\), \(n^2 + 2 \geq 2\), donc \(\dfrac{2}{n^2+2} \leq 1\), d’où \(u_n \leq 2\) : la suite est majorée par 2.  

Ainsi, pour tout entier naturel \(n\), \(1 \leq u_n \leq 2\) : la suite \((u_n)\) est bornée.
{{% /details %}}

## Déterminer le sens de variation d’une suite

> [!NOTE] **Méthode 1 — Déterminer le sens de variation d’une suite**  
> 1. Démontrer que la suite \((u_n)\) définie pour tout entier naturel \(n\) par \(u_n = n^2 + 2n\) est croissante.  
> 2. Démontrer que la suite \((v_n)\) définie pour tout entier \(n \geq 1\) par \(v_n = \dfrac{n}{3^n}\) est décroissante.  
> 3. La suite \((w_n)\) est définie par \(w_0 = 2\) et, pour tout entier naturel \(n\), \(w_{n+1} = 3w_n - 5\).  
>    Démontrer par récurrence que la suite \((w_n)\) est décroissante.

{{% details title="Solution commentée" closed="true" %}}

**1.** *Méthode algébrique* : on étudie le signe de \(u_{n+1} - u_n\) pour tout \(n \in \mathbb{N}\).  

\[
u_{n+1} - u_n = (n+1)^2 + 2(n+1) - (n^2+2n) = n^2+2n+1+2n+2-n^2-2n = 2n+3.
\]

Pour tout \(n \in \mathbb{N}\), \(2n+3 > 0\), donc \(u_{n+1} - u_n \geq 0\) : la suite \((u_n)\) est croissante.  

*Méthode fonctionnelle* : on a \(u_n = f(n)\) avec \(f : x \mapsto x^2 + 2x\). Sa dérivée \(f'(x) = 2x+2\) est positive sur \([0;+\infty[\), donc \(f\) est croissante sur \([0;+\infty[\), et la suite \((u_n)\) aussi.  

---

**2.** Pour tout entier \(n \geq 1\), \(v_n > 0\) : on peut comparer le quotient \(\dfrac{v_{n+1}}{v_n}\) à 1.  

\[
\dfrac{v_{n+1}}{v_n} = \dfrac{n+1}{3^{n+1}} \times \dfrac{3^n}{n} = \dfrac{n+1}{3n}.
\]

Or, pour \(n \geq 1\), \(n + 1 \leq 2n \leq 3n\), donc \(\dfrac{n+1}{3n} \leq 1\).  
Ainsi \(\dfrac{v_{n+1}}{v_n} \leq 1\), et comme \(v_n > 0\), \(v_{n+1} \leq v_n\) : la suite \((v_n)\) est décroissante.  

---

**3.** Pour tout entier naturel \(n\), on note \(P(n)\) la propriété : « \(w_{n+1} \leq w_n\) ».  

- **Initialisation.** \(w_1 = 3 \times 2 - 5 = 1\) et \(w_0 = 2\) ; on a bien \(w_1 \leq w_0\). Donc \(P(0)\) est vraie.  

- **Hérédité.** Soit \(k\) un entier naturel. On suppose que \(P(k)\) est vraie : \(w_{k+1} \leq w_k\) (hypothèse de récurrence).  
Montrons que \(w_{k+2} \leq w_{k+1}\).  

  En multipliant l’hypothèse par le réel positif 3, on obtient \(3w_{k+1} \leq 3w_k\), puis, en retranchant 5 : \(3w_{k+1} - 5 \leq 3w_k - 5\), c’est-à-dire \(w_{k+2} \leq w_{k+1}\).  

  Donc \(P(k+1)\) est vraie : la propriété est héréditaire.  

- **Conclusion.** \(P(0)\) est vraie et la propriété est héréditaire : d’après le principe de récurrence, \(w_{n+1} \leq w_n\) pour tout entier naturel \(n\). La suite \((w_n)\) est décroissante.
{{% /details %}}

## Montrer qu’une suite est majorée ou minorée

> [!NOTE] **Méthode 2 — Montrer qu’une suite est majorée ou minorée**  
> 1. Démontrer que la suite \((u_n)\) définie pour tout entier naturel \(n\) par \(u_n = n^2 - 8n + 10\) est minorée par \(-6\).  
> 2. La suite \((v_n)\) est définie par \(v_0 = 2\) et, pour tout entier naturel \(n\), \(v_{n+1} = 3v_n - 5\).  
>    Démontrer par récurrence que la suite \((v_n)\) est majorée par \(\dfrac{5}{2}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** On étudie le signe de la différence \(u_n - (-6)\) :  

\[
u_n + 6 = n^2 - 8n + 16 = (n-4)^2.
\]

Un carré est positif : pour tout entier naturel \(n\), \(u_n + 6 \geq 0\), soit \(u_n \geq -6\).  
La suite \((u_n)\) est donc minorée par \(-6\) (et \(-6 = u_4\) est même son plus petit terme).  

---

**2.** Pour tout entier naturel \(n\), on note \(P(n)\) la propriété : « \(v_n \leq \frac{5}{2}\) ».  

- **Initialisation.** \(v_0 = 2\) et \(2 \leq \frac{5}{2}\) : \(P(0)\) est vraie.  

- **Hérédité.** Soit \(k\) un entier naturel. On suppose \(v_k \leq \frac{5}{2}\) (hypothèse de récurrence).  
  En multipliant par 3 (positif) : \(3v_k \leq \frac{15}{2}\) ; en retranchant 5 : \(3v_k - 5 \leq \frac{15}{2} - 5 = \frac{5}{2}\), c’est-à-dire \(v_{k+1} \leq \frac{5}{2}\).  
  Donc \(P(k+1)\) est vraie : la propriété est héréditaire.  

- **Conclusion.** D’après le principe de récurrence, \(v_n \leq \frac{5}{2}\) pour tout entier naturel \(n\) : la suite \((v_n)\) est majorée par \(\frac{5}{2}\).
{{% /details %}}
