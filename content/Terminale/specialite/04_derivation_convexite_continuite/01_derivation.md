---
title: 'Dérivation'
weight: 1
cascade:
  type: docs
---

## Fonctions composées

> [!TIP] **Définition**  
> Soient \(u\) et \(v\) deux fonctions, d’ensembles de définition respectifs \(\mathcal{D}_u\) et \(\mathcal{D}_v\).  
> La **composée** de \(u\) suivie de \(v\), notée \(v \circ u\) (lire « \(v\) rond \(u\) »), est la fonction définie par :  
> \[
(v \circ u)(x) = v(u(x)).
\]  
> Elle est définie pour les réels \(x\) de \(\mathcal{D}_u\) dont l’image \(u(x)\) appartient à \(\mathcal{D}_v\).

{{% details title="Exemple" closed="true" %}}  
On considère \(u : x \mapsto 4 - x\), définie sur \(\mathbb{R}\), et \(v : x \mapsto \sqrt{x}\), définie sur \([0 ; +\infty[\).  

\(v(u(x))\) existe si et seulement si \(u(x) \geq 0\), c’est-à-dire \(4 - x \geq 0 \iff x \leq 4\). La fonction \(v \circ u\) est donc définie sur \(]-\infty ; 4]\) par :  
\[
(v \circ u)(x) = v(u(x)) = \sqrt{4 - x}.
\]  

La fonction \(u \circ v\) est définie sur \([0 ; +\infty[\) (il faut que \(\sqrt{x}\) existe) par :  
\[
(u \circ v)(x) = u(v(x)) = 4 - \sqrt{x}.
\]  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> L’ordre compte : en général, \(v \circ u \neq u \circ v\). Dans \(v \circ u\), on applique **d’abord** \(u\), **puis** \(v\).

## Dérivée d’une fonction composée

> [!TIP] **Propriété**  
> Soit \(u\) une fonction dérivable sur un intervalle \(I\), et \(v\) une fonction dérivable sur un intervalle \(J\), telles que \(u(x) \in J\) pour tout \(x \in I\).  
> Alors \(v \circ u\) est dérivable sur \(I\), et :  
> \[
(v \circ u)' = (v' \circ u) \times u',
\]
> c’est-à-dire, pour tout \(x \in I\), \((v \circ u)'(x) = v'(u(x)) \times u'(x)\).

**Cas particuliers à connaître** (\(u\) dérivable sur l’intervalle \(I\)) :  
- La fonction \(f : x \mapsto e^{u(x)}\) est dérivable sur \(I\), et  
  \[
  f'(x) = u'(x)\, e^{u(x)}.
  \]  

- Si \(u(x) > 0\) pour tout \(x \in I\), la fonction \(f : x \mapsto \sqrt{u(x)}\) est dérivable sur \(I\), et  
  \[
  f'(x) = \frac{u'(x)}{2\sqrt{u(x)}}.
  \]  

- Soit \(n\) un entier relatif non nul et \(f : x \mapsto (u(x))^n\).  
  - Si \(n \geq 1\), \(f\) est dérivable sur \(I\) et  
    \[
    f'(x) = n\, u'(x)\, (u(x))^{n-1}.
    \]  
  - Si \(n \leq -1\) et si \(u\) ne s’annule pas sur \(I\), \(f\) est dérivable sur \(I\) et on a la même formule :  
    \[
    f'(x) = n\, u'(x)\, (u(x))^{n-1}.
    \]  

## Dérivée seconde

> [!TIP] **Définitions**  
> Soit \(f\) une fonction dérivable sur un intervalle \(I\), de dérivée \(f'\).  
> On dit que \(f\) est **deux fois dérivable** sur \(I\) si \(f'\) est elle-même dérivable sur \(I\).  
> La dérivée de \(f'\) est alors notée \(f''\) : c’est la **dérivée seconde** de \(f\).

{{% details title="Exemple" closed="true" %}}  
On considère la fonction \(f\) définie sur \(\mathbb{R}\) par  
\[
f(x) = x^4 - 2x^2 + e^{-x}.
\]  

- \(f\) est dérivable sur \(\mathbb{R}\) (somme de fonctions dérivables), et, avec \((e^{-x})' = -e^{-x}\) :  
\[
f'(x) = 4x^3 - 4x - e^{-x}.
\]  

- \(f'\) est à son tour dérivable sur \(\mathbb{R}\), et :  
\[
f''(x) = 12x^2 - 4 + e^{-x}.
\]  

\(f\) est donc deux fois dérivable sur \(\mathbb{R}\).  
{{% /details %}}

## Composer des fonctions

> [!NOTE] **Méthode 1 — Composer des fonctions**  
> On considère les fonctions \(u : x \mapsto 2x + 3\) et \(v : x \mapsto x^3\), définies sur \(\mathbb{R}\), et \(w : x \mapsto \dfrac{1}{x}\), définie sur \(\mathbb{R}^*\).  
> 1. Donner l’ensemble de définition de \(u \circ v\), puis l’expression de \((u \circ v)(x)\).  
> 2. Même question pour \(v \circ u\).  
> 3. Même question pour \(u \circ w\).  
> 4. Même question pour \(w \circ u\).  

{{% details title="Solution commentée" closed="true" %}}

**1.** \(u\) et \(v\) sont définies sur \(\mathbb{R}\), donc \(u \circ v\) aussi.  
\[
(u \circ v)(x) = u(v(x)) = u(x^3) = 2x^3 + 3.
\]

---

**2.** De même, \(v \circ u\) est définie sur \(\mathbb{R}\).  
\[
(v \circ u)(x) = v(u(x)) = v(2x + 3) = (2x + 3)^3.
\]  
On constate que \(v \circ u \neq u \circ v\).

---

**3.** \(w(x)\) existe pour \(x \neq 0\), et \(u\) est définie sur \(\mathbb{R}\) : \(u \circ w\) est définie sur \(\mathbb{R}^*\).  
\[
(u \circ w)(x) = u\left(\frac{1}{x}\right) = \frac{2}{x} + 3.
\]

---

**4.** \(w(u(x))\) existe si et seulement si \(u(x) \neq 0\), c’est-à-dire \(2x + 3 \neq 0 \iff x \neq -\tfrac{3}{2}\).  
\(w \circ u\) est donc définie sur \(\mathbb{R} \setminus \left\{-\tfrac{3}{2}\right\}\), et  
\[
(w \circ u)(x) = w(2x + 3) = \frac{1}{2x + 3}.
\]

{{% /details %}}

## Dériver une fonction composée

> [!NOTE] **Méthode 2 — Dériver une fonction composée**  
> Dans chaque cas, calculer la dérivée de la fonction \(g\) sur l’intervalle \(I\) indiqué.  
> 1. \(g(x) = \sqrt{5 - x}\), définie sur \(]-\infty ; 5]\) ; \(I = \,]-\infty ; 5[\).  
> 2. \(g(x) = (1 - x^3)^3\) ; \(I = \mathbb{R}\).  
> 3. \(g(x) = e^{-2x + 1}\) ; \(I = \mathbb{R}\).  
> 4. \(g(x) = \dfrac{1}{(x^2 + 1)^2}\) ; \(I = \mathbb{R}\).  

{{% details title="Solution commentée" closed="true" %}}

**1.** \(g = \sqrt{u}\) avec \(u(x) = 5 - x\), strictement positif sur \(I\), et \(u'(x) = -1\) :  
\[
g'(x) = \frac{u'(x)}{2\sqrt{u(x)}} = \frac{-1}{2\sqrt{5 - x}}.
\]

---

**2.** \(g = u^3\) avec \(u(x) = 1 - x^3\) et \(u'(x) = -3x^2\) :  
\[
g'(x) = 3\, u'(x)\, (u(x))^2 = 3 \times (-3x^2) \times (1 - x^3)^2 = -9x^2(1 - x^3)^2.
\]

---

**3.** \(g = e^{u}\) avec \(u(x) = -2x + 1\) et \(u'(x) = -2\) :  
\[
g'(x) = u'(x)\, e^{u(x)} = -2e^{-2x + 1}.
\]

---

**4.** \(g = u^{-2}\) avec \(u(x) = x^2 + 1\), qui ne s’annule pas sur \(\mathbb{R}\), et \(u'(x) = 2x\) :  
\[
g'(x) = -2\, u'(x)\, (u(x))^{-3} = -2 \times 2x \times (x^2 + 1)^{-3} = -\frac{4x}{(x^2 + 1)^3}.
\]

{{% /details %}}

## Calculer une dérivée seconde

> [!NOTE] **Méthode 3 — Calculer une dérivée seconde**  
> On admet que la fonction \(f : x \mapsto 2x^3 - 5x^2 + x\) est deux fois dérivable sur \(\mathbb{R}\).  
> Calculer sa dérivée seconde \(f''\).  

{{% details title="Solution commentée" closed="true" %}}

On dérive une première fois :  
\[
f'(x) = 6x^2 - 10x + 1.
\]  
Puis on dérive \(f'\) :  
\[
f''(x) = 12x - 10.
\]

{{% /details %}}
