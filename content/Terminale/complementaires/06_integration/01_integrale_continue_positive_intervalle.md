---
title: "Intégrale d'une fonction continue et positive sur un intervalle"
weight: 1
cascade:
  type: docs
---

## Aire sous la courbe

> [!TIP] **Définition**
>
> Soient \((O\,;\,\vec{\imath}, \vec{\jmath})\) un repère orthogonal, \(I\) et \(J\) les points tels que \({\overrightarrow{OI} = \vec{\imath}}\) et \({\overrightarrow{OJ} = \vec{\jmath}}\), et \(K\) le point de coordonnées \((1\,;\,1)\). L’aire du rectangle \(OIKJ\) est appelée **unité d’aire** et notée u.a.

> [!TIP] **Définition**
>
> Soit \(f\) une fonction **continue et positive** sur un intervalle \([a\,;\,b]\) et \(\mathcal{C}_f\) sa courbe représentative dans un repère orthogonal.
> On appelle **intégrale de \(a\) à \(b\) de la fonction \(f\)** l’aire, exprimée en unités d’aire, du domaine délimité par la courbe \(\mathcal{C}_f\), l’axe des abscisses et les droites d’équations \({x = a}\) et \({x = b}\). On la note
> \[
\int_a^b f(x)\,\mathrm{d}x.
\]

![](/images/image347.png)

> [!IMPORTANT] **Remarque**
>
> La variable \(x\) est « muette » : elle peut être remplacée par n’importe quelle autre lettre, \({\displaystyle\int_a^b f(x)\,\mathrm{d}x = \int_a^b f(t)\,\mathrm{d}t = \int_a^b f(u)\,\mathrm{d}u}\).

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = 3}\) sur \([1\,;\,5]\) : le domaine est un rectangle de largeur 4 et de hauteur 3, donc \({\displaystyle\int_1^5 3\,\mathrm{d}x = 12}\).

Soit \({g(x) = x}\) sur \([0\,;\,4]\) : le domaine est un triangle rectangle de côtés 4 et 4, donc \({\displaystyle\int_0^4 x\,\mathrm{d}x = \dfrac{4 \times 4}{2} = 8}\).
{{% /details %}}

> [!TIP] **Propriété (relation de Chasles)**
>
> Soit \(f\) une fonction continue et positive sur un intervalle \([a\,;\,b]\) et \(c\) un réel de \([a\,;\,b]\). Alors
> \[
\int_a^b f(x)\,\mathrm{d}x = \int_a^c f(x)\,\mathrm{d}x + \int_c^b f(x)\,\mathrm{d}x.
\]

> [!IMPORTANT] **Remarque**
>
> Géométriquement, l’aire du domaine total est la somme des aires des deux domaines situés de part et d’autre de la droite \({x = c}\).

## Méthode des rectangles

La méthode des rectangles permet de calculer une valeur approchée d’une intégrale.

> [!TIP] **Principe**
>
> Soit \(f\) une fonction continue et positive sur \([a\,;\,b]\) et \(n\) un entier naturel non nul. On partage \([a\,;\,b]\) en \(n\) intervalles de même largeur \({\dfrac{b - a}{n}}\), de bornes \({x_i = a + i\,\dfrac{b - a}{n}}\) (\({0 \leq i \leq n}\)). Sur chaque intervalle \({[x_i\,;\,x_{i+1}]}\), on construit le rectangle de hauteur \(f(x_i)\). L’aire totale des rectangles est
> \[
\mathcal{A} = \left(f(x_0) + f(x_1) + \dots + f(x_{n-1})\right) \times \dfrac{b - a}{n},
\]
> et, pour \(n\) assez grand, \({\displaystyle\int_a^b f(x)\,\mathrm{d}x \approx \mathcal{A}}\).

> [!IMPORTANT] **Remarque**
>
> Le symbole \(\int\) est un S allongé, initiale de « somme » : l’intégrale est la valeur limite de la somme des aires des rectangles lorsque leur nombre tend vers \({+\infty}\). Pour une fonction croissante, les rectangles de hauteur \(f(x_i)\) sont sous la courbe et ceux de hauteur \({f(x_{i+1})}\) au-dessus : on obtient un encadrement.

![](/images/image348.png)

## Calculer et approcher des intégrales

> [!NOTE] **Méthode 1 - Calculer des intégrales simples**
>
> Calculer, à l’aide d’aires connues : 1. \({\displaystyle\int_0^3 (2x + 1)\,\mathrm{d}x}\) ; 2. \({\displaystyle\int_{-2}^{2} \sqrt{4 - x^2}\,\mathrm{d}x}\).

{{% details title="Solution commentée" closed="true" %}}
1. La fonction \({x \mapsto 2x + 1}\) est positive sur \([0\,;\,3]\). Le domaine est un trapèze de « bases » \({f(0) = 1}\) et \({f(3) = 7}\), et de hauteur 3 : son aire vaut \({\dfrac{(1 + 7) \times 3}{2} = 12}\). Donc l’intégrale vaut 12.
2. \({y = \sqrt{4 - x^2} \iff x^2 + y^2 = 4}\) avec \({y \geq 0}\) : la courbe est le demi-cercle supérieur de centre \(O\) et de rayon 2. Dans un repère orthonormé, l’aire du demi-disque vaut \({\dfrac{\pi \times 2^2}{2} = 2\pi}\), donc l’intégrale vaut \(2\pi\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Encadrer une intégrale par la méthode des rectangles**
>
> Soit \({g(x) = 0{,}5x^2 + 1}\) sur \([0\,;\,2]\) et \({I = \displaystyle\int_0^2 g(x)\,\mathrm{d}x}\).
> 1. Avec \({n = 4}\) rectangles, encadrer \(I\).
> 2. Écrire une fonction Python qui calcule la somme des aires des \(n\) rectangles « inférieurs ».

{{% details title="Solution commentée" closed="true" %}}
1. La largeur est \(0{,}5\) ; \(g\) est croissante sur \([0\,;\,2]\). Rectangles inférieurs : \((g(0) + g(0{,}5) + g(1) + g(1{,}5)) \times 0{,}5 = (1 + 1{,}125 + 1{,}5 + 2{,}125) \times 0{,}5 = 2{,}875\). Rectangles supérieurs : \((g(0{,}5) + g(1) + g(1{,}5) + g(2)) \times 0{,}5 = (1{,}125 + 1{,}5 + 2{,}125 + 3) \times 0{,}5 = 3{,}875\). Donc \({2{,}875 \leq I \leq 3{,}875}\).
2.
```python
def g(x):
    return 0.5 * x**2 + 1

def rectangles(a, b, n):
    h = (b - a) / n
    s = 0
    for i in range(n):
        s = s + g(a + i * h)
    return s * h

print(rectangles(0, 2, 1000))   # environ 3,3313
```
Avec \({n = 1\,000}\), on obtient environ \(3{,}331\) ; on verra que \({I = \dfrac{10}{3} \approx 3{,}333}\).
{{% /details %}}
