---
title: 'Égalité et équations'
weight: 2
cascade:
  type: docs
---

## Égalités et équations

> [!TIP] **Définition**
>
> Deux expressions algébriques sont **égales** si elles prennent la même valeur pour toutes les valeurs données aux lettres.

{{% details title="Exemple" closed="true" %}}
Pour tout réel \(x\), \((x - 1)(x + 4) = x^2 + 3x - 4\) : les deux expressions sont égales. En revanche, \((x + 1)^2\) et \(x^2 + 1\) ne sont pas égales : pour \(x = 1\), la première vaut \(4\) et la seconde \(2\). Un seul contre-exemple suffit à le prouver.
{{% /details %}}

> [!TIP] **Définition**
>
> Soit \(A(x)\) et \(B(x)\) deux expressions algébriques dépendant d’une variable \(x\), qui prend ses valeurs dans un ensemble de nombres \(D\). **Résoudre dans \(D\) l’équation** \(A(x) = B(x)\) d’inconnue \(x\), c’est déterminer l’ensemble des nombres \(x\) de \(D\) pour lesquels l’égalité \(A(x) = B(x)\) est vraie. Chacun de ces nombres est une **solution** ; leur ensemble est l’**ensemble des solutions**, souvent noté \(\mathcal{S}\).

{{% details title="Exemple" closed="true" %}}
On résout dans \(\mathbb{R}\) l’équation \(5x - 3 = 2x + 9\) :
\[
5x - 3 = 2x + 9 \iff 3x = 12 \iff x = 4.
\]
L’ensemble des solutions est \(\mathcal{S} = \{4\}\). Vérification : \(5 \times 4 - 3 = 17\) et \(2 \times 4 + 9 = 17\).
{{% /details %}}

> [!TIP] **Définition**
>
> Deux équations sont **équivalentes** si elles ont le même ensemble de solutions. On écrit alors le symbole \(\iff\) (« équivaut à ») entre elles.

> [!TIP] **Propriétés**
>
> On obtient une équation équivalente :
> - en ajoutant (ou en soustrayant) un même nombre ou une même expression aux deux membres ;
> - en multipliant (ou en divisant) les deux membres par un même nombre **non nul**.

> [!IMPORTANT] **Remarque**
>
> Une équation peut n’avoir aucune solution (\(\mathcal{S} = \varnothing\)), en avoir une, plusieurs, ou une infinité. Par exemple \(2(x + 1) = 2x + 5\) se ramène à \(2 = 5\) : aucune solution ; \(2(x + 1) = 2x + 2\) est vraie pour tout réel : \(\mathcal{S} = \mathbb{R}\).

## Équations produit et équations quotient

> [!TIP] **Propriété — Produit nul**
>
> Un produit de facteurs est nul si et seulement si **au moins un** de ses facteurs est nul :
> \[
A_1(x) \times A_2(x) \times \dots \times A_n(x) = 0 \iff A_1(x) = 0 \ \text{ ou } \ A_2(x) = 0 \ \text{ ou } \dots \text{ ou } \ A_n(x) = 0.
\]

{{% details title="Démonstration (pour deux facteurs)" closed="true" %}}
- Si \(a = 0\) ou \(b = 0\), alors \(ab = 0\).
- Réciproquement, supposons \(ab = 0\). Si \(a \neq 0\), on peut diviser par \(a\) : \(b = \dfrac{ab}{a} = \dfrac{0}{a} = 0\). Donc \(a = 0\) ou \(b = 0\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
On résout dans \(\mathbb{R}\) l’équation \((2x - 7)(x + 3) = 0\) :
\[
(2x - 7)(x + 3) = 0 \iff 2x - 7 = 0 \ \text{ ou } \ x + 3 = 0 \iff x = \frac{7}{2} \ \text{ ou } \ x = -3.
\]
Donc \(\mathcal{S} = \left\{-3\,;\,\dfrac{7}{2}\right\}\).
{{% /details %}}

> [!TIP] **Propriétés — Quotients**
>
> Soit \(A(x)\), \(B(x)\), \(C(x)\), \(D(x)\) des expressions algébriques.
> - \(\dfrac{A(x)}{B(x)} = 0 \iff A(x) = 0\) et \(B(x) \neq 0\).
> - Si \(B(x) \neq 0\) et \(D(x) \neq 0\) : \(\dfrac{A(x)}{B(x)} = \dfrac{C(x)}{D(x)} \iff A(x) \times D(x) = B(x) \times C(x)\).

> [!IMPORTANT] **Remarque**
>
> Avant de résoudre une équation contenant un quotient, on cherche les **valeurs interdites** (celles qui annulent un dénominateur) : elles ne peuvent jamais être solutions.

## Résoudre des équations

> [!NOTE] **Méthode 1 — Isoler une variable dans une formule**
>
> L’énergie cinétique d’un objet de masse \(m\) (en kg) et de vitesse \(v\) (en m/s) est \(E = \dfrac{1}{2}mv^2\) (en joules).
> 1. Exprimer \(m\) en fonction de \(E\) et \(v\).
> 2. Exprimer \(v\) en fonction de \(E\) et \(m\) (on rappelle que \(v \geq 0\)).

{{% details title="Solution commentée" closed="true" %}}
On considère \(E\), \(m\), \(v\) strictement positifs.
1. On multiplie les deux membres par \(2\), puis on divise par \(v^2 \neq 0\) :
\[
E = \frac{1}{2}mv^2 \iff 2E = mv^2 \iff m = \frac{2E}{v^2}.
\]
2. De même \(v^2 = \dfrac{2E}{m}\). Comme \(v \geq 0\), \(v\) est la racine carrée de ce nombre positif : \(v = \sqrt{\dfrac{2E}{m}}\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Résoudre une équation en se ramenant à un produit nul**
>
> Résoudre dans \(\mathbb{R}\) : a) \(x^2 = 5x\) ; b) \((x - 2)^2 = 9\).

{{% details title="Solution commentée" closed="true" %}}
On fait tout passer dans un membre, puis on factorise.

a) \(x^2 = 5x \iff x^2 - 5x = 0 \iff x(x - 5) = 0 \iff x = 0\) ou \(x = 5\). Donc \(\mathcal{S} = \{0\,;\,5\}\). *(Diviser par \(x\) aurait fait perdre la solution \(0\).)*

b) \((x - 2)^2 = 9 \iff (x - 2)^2 - 3^2 = 0 \iff (x - 2 - 3)(x - 2 + 3) = 0 \iff (x - 5)(x + 1) = 0\). Donc \(\mathcal{S} = \{-1\,;\,5\}\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Résoudre une équation quotient**
>
> Résoudre dans \(\mathbb{R}\) : a) \(\dfrac{3x - 6}{x + 1} = 0\) ; b) \(\dfrac{2}{x - 3} = \dfrac{5}{x}\).

{{% details title="Solution commentée" closed="true" %}}
a) Valeur interdite : \(-1\). Pour \(x \neq -1\) : \(\dfrac{3x - 6}{x + 1} = 0 \iff 3x - 6 = 0 \iff x = 2\). Comme \(2 \neq -1\), \(\mathcal{S} = \{2\}\).

b) Valeurs interdites : \(3\) et \(0\). Pour \(x \notin \{0\,;\,3\}\), par produit en croix :
\[
\frac{2}{x - 3} = \frac{5}{x} \iff 2x = 5(x - 3) \iff 2x = 5x - 15 \iff -3x = -15 \iff x = 5.
\]
\(5\) n’est pas une valeur interdite, donc \(\mathcal{S} = \{5\}\). Vérification : \(\dfrac{2}{2} = 1 = \dfrac{5}{5}\).
{{% /details %}}
