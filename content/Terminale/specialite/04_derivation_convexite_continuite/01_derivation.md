---
title: 'Dérivation'
weight: 1
cascade:
  type: docs
---

## Fonctions composées

> [!TIP] **Définition**  
> Soient \(u\) et \(v\) deux fonctions dont les ensembles de définition respectifs sont notés \(\mathcal{D}_u\) et \(\mathcal{D}_v\).  
> La **fonction composée** de \(u\) par \(v\), notée \(v \circ u\), est la fonction définie par :  
> \[
(v \circ u)(x) = v(u(x)).
\]  
> L’ensemble de définition de \(v \circ u\) est l’ensemble des réels \(x\) appartenant à \(\mathcal{D}_u\) dont l’image par \(u\) appartient à \(\mathcal{D}_v\).

{{% details title="Exemple" closed="true" %}}  
Soit \(u : x \mapsto 2x + 6\), définie sur \(\mathbb{R}\), et \(v : x \mapsto \sqrt{x}\), définie sur \([0 ; +\infty[\).  

\(v(u(x))\) existe si et seulement si \(u(x)\) existe et est positif.  
Or \(2x + 6 \geq 0 \iff x \geq -3\), donc la fonction composée \(v \circ u\) est définie sur \([-3 ; +\infty[\) par :  
\[
(v \circ u)(x) = v(u(x)) = \sqrt{2x + 6}.
\]  

La fonction composée \(u \circ v\) est définie sur \([0 ; +\infty[\) par :  
\[
(u \circ v)(x) = u(v(x)) = 2\sqrt{x} + 6.
\]  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> En général, \(v \circ u \neq u \circ v\).  


## Dérivée d’une fonction composée

> [!TIP] **Propriété**  
> Soient \(u\) une fonction dérivable sur un intervalle \(I\) et \(v\) une fonction dérivable sur un intervalle \(J\) telles que, pour tout \(x \in I\), \(u(x) \in J\).  
> La fonction \(v \circ u\) est dérivable sur \(I\) et on a :  
> \[
(v \circ u)' = (v' \circ u) \times u'.
\]

**Cas particuliers :**  
- La fonction \(f\), définie sur \(I\) par \(f(x) = e^{u(x)}\), est dérivable sur \(I\) et  
  \[
  f'(x) = u'(x) e^{u(x)}.
  \]  

- Si, pour tout \(x \in I\), \(u(x) > 0\), alors la fonction \(f\) définie sur \(I\) par \(f(x) = \sqrt{u(x)}\) est dérivable sur \(I\) et  
  \[
  f'(x) = \frac{u'(x)}{2\sqrt{u(x)}}.
  \]  

- Soit \(n\) un entier relatif non nul et \(f\) la fonction définie sur \(I\) par \(f(x) = (u(x))^n\).  
  - Si \(n \geq 1\), alors \(f\) est dérivable sur \(I\) et  
    \[
    f'(x) = nu'(x)(u(x))^{n-1}.
    \]  
  - Si \(n \leq -1\) et si \(u\) ne s’annule pas sur \(I\), alors \(f\) est dérivable sur \(I\) et  
    \[
    f'(x) = nu'(x)(u(x))^{n-1}.
    \]  


## Dérivée seconde

> [!TIP] **Définitions**  
> Soient \(f\) une fonction dérivable sur un intervalle \(I\) et \(f'\) sa fonction dérivée.  
> La fonction \(f\) est **deux fois dérivable** sur \(I\) si \(f'\) est elle-même dérivable sur \(I\).  
> On note \(f''\) la dérivée de \(f'\). Elle est appelée **dérivée seconde** de \(f\).

{{% details title="Exemple" closed="true" %}}  
Soit \(f\) la fonction définie sur \(\mathbb{R}\) par  
\[
f(x) = x^3 + 5x + e^x.
\]  

- \(f\) est dérivable sur \(\mathbb{R}\) comme somme de fonctions dérivables sur \(\mathbb{R}\).  
On a :  
\[
f'(x) = 3x^2 + 5 + e^x.
\]  

- \(f'\) est dérivable sur \(\mathbb{R}\) comme somme de fonctions dérivables sur \(\mathbb{R}\).  
On a :  
\[
(f')'(x) = 6x + e^x.
\]  

Ainsi, \(f\) est deux fois dérivable sur \(\mathbb{R}\) et sa dérivée seconde est définie par :  
\[
f''(x) = 6x + e^x.
\]  
{{% /details %}}


## Composer des fonctions

> [!NOTE] **Méthode 1 — Composer des fonctions**  
> Soient \(u\) la fonction définie sur \(\mathbb{R}\) par \(u(x) = x^2\), \(v\) la fonction définie sur \(\mathbb{R}\) par \(v(x) = 3x - 1\) et \(w\) la fonction définie sur \([0 ; +\infty[\) par \(w(x) = \sqrt{x}\).  
> 1. Préciser l’ensemble de définition de \(u \circ v\), puis déterminer explicitement \((u \circ v)(x)\).  
> 2. Préciser l’ensemble de définition de \(v \circ u\), puis déterminer explicitement \((v \circ u)(x)\).  
> 3. Préciser l’ensemble de définition de \(v \circ w\), puis déterminer explicitement \((v \circ w)(x)\).  
> 4. Préciser l’ensemble de définition de \(w \circ v\), puis déterminer explicitement \((w \circ v)(x)\).  

{{% details title="Solution commentée" closed="true" %}}

**1.**  
La fonction \(u \circ v\) est définie sur \(\mathbb{R}\) comme composée de deux fonctions définies sur \(\mathbb{R}\).  
\[
(u \circ v)(x) = u(v(x)) = u(3x - 1) = (3x - 1)^2.
\]

---

**2.**  
La fonction \(v \circ u\) est définie sur \(\mathbb{R}\) comme composée de deux fonctions définies sur \(\mathbb{R}\).  
\[
(v \circ u)(x) = v(u(x)) = v(x^2) = 3x^2 - 1.
\]  
On remarque que \(v \circ u \neq u \circ v\).

---

**3.**  
La fonction \(v\) est définie sur \(\mathbb{R}\) et la fonction \(w\) est définie sur \([0 ; +\infty[\).  
Donc \(v \circ w\) est définie sur \([0 ; +\infty[\).  
\[
(v \circ w)(x) = v(w(x)) = v(\sqrt{x}) = 3\sqrt{x} - 1.
\]

---

**4.**  
La fonction \(v\) est définie sur \(\mathbb{R}\) et la fonction \(w\) est définie sur \([0 ; +\infty[\).  
Donc \(w \circ v\) est définie sur l’ensemble des réels \(x\) tels que \(3x - 1 \in [0 ; +\infty[\), c’est-à-dire sur \(\left[ \tfrac{1}{3} ; +\infty[ \right.\).  
\[
(w \circ v)(x) = w(v(x)) = w(3x - 1) = \sqrt{3x - 1}.
\]

{{% /details %}}


## Dériver une fonction composée

> [!NOTE] **Méthode 2 — Dériver une fonction composée**  
> Dans chaque cas, déterminer l’expression de la dérivée de la fonction \(g\) sur l’intervalle \(I\) donné.  
> 1. \(g\) est la fonction définie sur \([2 ; +\infty[\) par \(g(x) = \sqrt{2x - 4}\) ; \(I = ]2 ; +\infty[\).  
> 2. \(g\) est la fonction définie sur \(\mathbb{R}\) par \(g(x) = (x^2 - 1)^4\) ; \(I = \mathbb{R}\).  
> 3. \(g\) est la fonction définie sur \(\mathbb{R}\) par \(g(x) = e^{x^2 - 3}\) ; \(I = \mathbb{R}\).  

{{% details title="Solution commentée" closed="true" %}}

**1.**  
\[
g(x) = \sqrt{u(x)}, \quad u(x) = 2x - 4.
\]  
\[
g'(x) = \frac{u'(x)}{2\sqrt{u(x)}} = \frac{2}{2\sqrt{2x-4}} = \frac{1}{\sqrt{2x - 4}}.
\]

---

**2.**  
\[
g(x) = (u(x))^4, \quad u(x) = x^2 - 1.
\]  
\[
g'(x) = 4 \times u'(x) \times (u(x))^3 = 4 \times 2x \times (x^2 - 1)^3 = 8x(x^2 - 1)^3.
\]

---

**3.**  
\[
g(x) = e^{u(x)}, \quad u(x) = x^2 - 3.
\]  
\[
g'(x) = u'(x)e^{u(x)} = 2x e^{x^2 - 3}.
\]

{{% /details %}}



## Calculer une dérivée seconde

> [!NOTE] **Méthode 3 — Calculer une dérivée seconde**  
> On admet que \(f : x \mapsto x^2 + x - 2\) est deux fois dérivable sur son ensemble de définition \(\mathbb{R}\).  
>- Calculer sa dérivée seconde \(f''\).  

{{% details title="Solution commentée" closed="true" %}}

On calcule d’abord la dérivée de \(f\) :  
\[
f'(x) = 2x + 1.
\]  
Puis la dérivée de \(f'\) :  
\[
f''(x) = 2.
\]

{{% /details %}}