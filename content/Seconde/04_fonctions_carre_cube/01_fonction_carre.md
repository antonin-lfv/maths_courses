---
title: 'Fonction carré'
weight: 1
cascade:
  type: docs
---

## Définition et courbe

> [!TIP] **Définition**
>
> La **fonction carré** est la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x) = x^2\).

{{% details title="Exemple" closed="true" %}}
\(f(-3) = 9\), \(f(0{,}5) = 0{,}25\), \(f\left(\sqrt{3}\right) = 3\). Pour tout réel \(x\), \(f(-x) = (-x)^2 = x^2 = f(x)\) : deux nombres opposés ont le même carré.
{{% /details %}}

> [!TIP] **Propriétés**
>
> Dans un repère orthogonal d’origine \(O\), la courbe représentative de la fonction carré, d’équation \(y = x^2\), est une **parabole** de sommet \(O\).
> - Elle est située au-dessus de l’axe des abscisses (un carré est toujours positif ou nul).
> - Elle est **symétrique par rapport à l’axe des ordonnées**, car \((-x)^2 = x^2\).

![](/images/image369.png)

## Variations

> [!TIP] **Propriété**
>
> La fonction carré est **strictement décroissante** sur \(]-\infty\,;\,0]\) et **strictement croissante** sur \([0\,;\,+\infty[\). Elle admet un **minimum** égal à \(0\), atteint en \(x = 0\).

![](/images/image370.png)

{{% details title="Démonstration" closed="true" %}}
Soit \(a\) et \(b\) deux réels tels que \(a < b\). On a
\[
b^2 - a^2 = (b - a)(b + a), \qquad \text{avec } b - a > 0.
\]
- Si \(0 \leq a < b\), alors \(b + a > 0\), donc \(b^2 - a^2 > 0\) : \(a^2 < b^2\). La fonction est strictement croissante sur \([0\,;\,+\infty[\).
- Si \(a < b \leq 0\), alors \(b + a < 0\), donc \(b^2 - a^2 < 0\) : \(a^2 > b^2\). La fonction est strictement décroissante sur \(]-\infty\,;\,0]\).
{{% /details %}}

> [!TIP] **Conséquences**
>
> - Si \(0 \leq a < b\), alors \(a^2 < b^2\) : deux nombres **positifs** sont rangés dans le même ordre que leurs carrés.
> - Si \(a < b \leq 0\), alors \(a^2 > b^2\) : deux nombres **négatifs** sont rangés dans l’ordre contraire de leurs carrés.

> [!IMPORTANT] **Remarque**
>
> Si \(a\) et \(b\) sont de signes contraires, on ne peut pas conclure directement : \(-3 < 2\) et \((-3)^2 > 2^2\), mais \(-1 < 2\) et \((-1)^2 < 2^2\). On compare alors les distances à \(0\) : \(a^2 < b^2 \iff |a| < |b|\).

## Utiliser la fonction carré

> [!NOTE] **Méthode 1 — Comparer des carrés sans les calculer**
>
> Comparer : a) \(1{,}03^2\) et \(1{,}3^2\) ; b) \((-2{,}7)^2\) et \((-2{,}07)^2\) ; c) \((-4)^2\) et \(3{,}9^2\).

{{% details title="Solution commentée" closed="true" %}}
a) \(0 \leq 1{,}03 < 1{,}3\), et la fonction carré est croissante sur \([0\,;\,+\infty[\) : \(1{,}03^2 < 1{,}3^2\).

b) \(-2{,}7 < -2{,}07 \leq 0\), et la fonction carré est décroissante sur \(]-\infty\,;\,0]\) : l’ordre est inversé, \((-2{,}7)^2 > (-2{,}07)^2\).

c) Les nombres sont de signes contraires : on utilise \((-4)^2 = 4^2\). Comme \(0 \leq 3{,}9 < 4\), \(3{,}9^2 < 4^2 = (-4)^2\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Encadrer un carré**
>
> Donner le meilleur encadrement possible de \(x^2\) lorsque : a) \(1 \leq x \leq 3\) ; b) \(-5 \leq x \leq -2\) ; c) \(-2 \leq x \leq 3\).

{{% details title="Solution commentée" closed="true" %}}
On s’appuie sur les variations (ou sur la parabole).

a) Sur \([1\,;\,3] \subset [0\,;\,+\infty[\), la fonction carré est croissante : \(1 \leq x^2 \leq 9\).

b) Sur \([-5\,;\,-2] \subset ]-\infty\,;\,0]\), elle est décroissante, l’ordre est inversé : \(4 \leq x^2 \leq 25\).

c) L’intervalle \([-2\,;\,3]\) contient \(0\), où la fonction atteint son minimum \(0\). Sur \([-2\,;\,0]\), \(0 \leq x^2 \leq 4\) ; sur \([0\,;\,3]\), \(0 \leq x^2 \leq 9\). Donc \(0 \leq x^2 \leq 9\). *(Élever au carré les bornes, \(4\) et \(9\), aurait donné un encadrement faux.)*
{{% /details %}}
