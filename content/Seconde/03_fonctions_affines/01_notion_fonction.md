---
title: 'Fonctions et courbes représentatives'
weight: 1
cascade:
  type: docs
---

## Fonction, image, antécédent

> [!TIP] **Définitions**
>
> Soit \(D\) un ensemble de nombres réels (souvent un intervalle ou une réunion d’intervalles).
> - Définir une **fonction** \(f\) sur \(D\), c’est associer à chaque réel \(x\) de \(D\) un **unique** réel, noté \(f(x)\). On note \(f : x \longmapsto f(x)\). \(D\) est l’**ensemble de définition** de \(f\).
> - Le nombre \(f(x)\) est l’**image** de \(x\) par \(f\).
> - Si \({f(x) = y}\), on dit que \(x\) est **un antécédent** de \(y\) par \(f\).

{{% details title="Exemple" closed="true" %}}
Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = x^2 - 4x}\).
- L’image de \(3\) est \({f(3) = 9 - 12 = -3}\) ; l’image de \({-1}\) est \({f(-1) = 1 + 4 = 5}\).
- Les antécédents de \(0\) sont les solutions de \({x^2 - 4x = 0 \iff x(x - 4) = 0}\) : ce sont \(0\) et \(4\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Un réel de \(D\) a **une seule** image, mais un réel peut avoir zéro, un ou plusieurs antécédents. Dans l’exemple, \({-5}\) n’a pas d’antécédent : \({x^2 - 4x = (x - 2)^2 - 4 \geq -4}\) pour tout \(x\).

## Courbe représentative

> [!TIP] **Définition**
>
> Dans un repère du plan, la **courbe représentative** \(\mathcal{C}_f\) d’une fonction \(f\) définie sur \(D\) est l’ensemble des points \(M(x\,;\,y)\) tels que \({x \in D}\) et \({y = f(x)}\). On dit que \(\mathcal{C}_f\) a pour **équation** \({y = f(x)}\).

> [!TIP] **Propriété**
>
> Un point \(M(x\,;\,y)\) appartient à \(\mathcal{C}_f\) si et seulement si \({x \in D}\) et \({y = f(x)}\).

{{% details title="Exemple" closed="true" %}}
Avec \({f(x) = x^2 - 4x}\) : \({A(1\,;\,-3)}\) appartient à \(\mathcal{C}_f\) car \({f(1) = 1 - 4 = -3}\). \(B(2\,;\,0)\) n’appartient pas à \(\mathcal{C}_f\) car \({f(2) = -4 \neq 0}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Pour tracer l’allure d’une courbe, on calcule un **tableau de valeurs** (à la main, à la calculatrice ou au tableur), on place les points obtenus, puis on les relie par une courbe régulière. Le tracé obtenu n’est qu’une approximation.

## Résolutions graphiques

Dans cette partie, on utilise la fonction \(f\) définie sur \({[-2{,}5\,;\,4{,}5]}\) dont la courbe \(\mathcal{C}_f\) est tracée ci-dessous.

![](/images/image364.png)

> [!TIP] **Définitions**
>
> Soit \(k\) un réel.
> - Résoudre graphiquement l’équation \({f(x) = k}\), c’est déterminer les abscisses des points de \(\mathcal{C}_f\) d’ordonnée \(k\) (intersection de \(\mathcal{C}_f\) avec la droite horizontale d’équation \({y = k}\)).
> - Résoudre graphiquement l’inéquation \({f(x) > k}\) (ou \({f(x) \geq k}\)), c’est déterminer les abscisses des points de \(\mathcal{C}_f\) situés strictement au-dessus (ou au-dessus ou sur) de cette droite. De même pour \({f(x) < k}\) et \({f(x) \leq k}\).

{{% details title="Exemple" closed="true" %}}
Sur la figure, la droite d’équation \({y = 2}\) coupe \(\mathcal{C}_f\) en trois points, d’abscisses environ \({-1{,}4}\) ; \(0\) et \(4{,}4\). L’équation \({f(x) = 2}\) a donc trois solutions : \({\mathcal{S} \approx \{-1{,}4\,;\,0\,;\,4{,}4\}}\).

La courbe est au-dessus de cette droite entre \({-1{,}4}\) et \(0\), et à droite de \(4{,}4\) : l’ensemble des solutions de \({f(x) \geq 2}\) est environ \({[-1{,}4\,;\,0] \cup [4{,}4\,;\,4{,}5]}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Une lecture graphique ne donne en général que des **valeurs approchées**. Ici, le calcul montrerait que les solutions exactes de \({f(x) = 2}\) sont \(0\) et \({\dfrac{3 \pm \sqrt{33}}{2}}\).

> [!TIP] **Définition**
>
> Soit \(f\) et \(g\) deux fonctions définies sur \(D\), de courbes \(\mathcal{C}_f\) et \(\mathcal{C}_g\).
> - Les solutions de l’équation \({f(x) = g(x)}\) sont les abscisses des points d’intersection de \(\mathcal{C}_f\) et \(\mathcal{C}_g\).
> - Les solutions de l’inéquation \({f(x) > g(x)}\) sont les abscisses des points de \(\mathcal{C}_f\) situés strictement au-dessus de \(\mathcal{C}_g\).

![](/images/image365.png)

{{% details title="Exemple" closed="true" %}}
Sur la figure, \(g\) est la fonction affine \({g(x) = 0{,}5x - 0{,}5}\). Les deux courbes se coupent en trois points, d’abscisses environ \({-2{,}3}\) ; \(1\) et \(4{,}3\) : ce sont les solutions de \({f(x) = g(x)}\).

\(\mathcal{C}_f\) est strictement au-dessus de \(\mathcal{C}_g\) entre \({-2{,}3}\) et \(1\), et après \(4{,}3\) : \({f(x) > g(x)}\) pour \({x \in ]-2{,}3\,;\,1[ \cup ]4{,}3\,;\,4{,}5]}\) (valeurs approchées).
{{% /details %}}

> [!TIP] **Définition**
>
> Dresser le **tableau de signes** d’une fonction \(f\), c’est indiquer sur quels intervalles \(f(x)\) est positif, négatif ou nul. Graphiquement :
> - \({f(x) = 0}\) aux abscisses des points où \(\mathcal{C}_f\) coupe l’axe des abscisses ;
> - \({f(x) > 0}\) là où \(\mathcal{C}_f\) est strictement au-dessus de l’axe des abscisses ;
> - \({f(x) < 0}\) là où \(\mathcal{C}_f\) est strictement en dessous.

{{% details title="Exemple" closed="true" %}}
La courbe \(\mathcal{C}_f\) de la première figure coupe l’axe des abscisses en \({-2}\), \(1\) et \(4\). On lit le tableau de signes de \(f\) sur \({[-2{,}5\,;\,4{,}5]}\) :

| \(x\) | \({-2{,}5}\) | | \({-2}\) | | \(1\) | | \(4\) | | \(4{,}5\) |
|---|---|---|---|---|---|---|---|---|---|
| \(f(x)\) | | \({-}\) | \(0\) | \({+}\) | \(0\) | \({-}\) | \(0\) | \({+}\) | |
{{% /details %}}

## Encadrer une solution par dichotomie

> [!TIP] **Définition**
>
> Soit \(\alpha\) une solution de l’équation \({f(x) = k}\). **Encadrer** \(\alpha\), c’est trouver deux réels \(a\) et \(b\) tels que \({a \leq \alpha \leq b}\). La précision de l’encadrement est son amplitude \({b - a}\).

> [!NOTE] **Méthode - Encadrer une solution par dichotomie**
>
> Soit \(h\) la fonction définie sur \([1\,;\,2]\) par \({h(x) = x^3 + x - 3}\). On admet que l’équation \({h(x) = 0}\) a une unique solution \(\alpha\) dans \([1\,;\,2]\), que \(h\) est négative avant \(\alpha\) et positive après.
> 1. Donner un encadrement de \(\alpha\) d’amplitude \(0{,}0625\) en coupant plusieurs fois l’intervalle en deux.
> 2. Écrire une fonction Python qui automatise cette méthode.

{{% details title="Solution commentée" closed="true" %}}
1. À chaque étape, on calcule l’image du milieu \(m\) de l’intervalle : si \({h(m) > 0}\), \(\alpha\) est à gauche de \(m\) ; sinon, il est à droite. L’amplitude est divisée par \(2\) à chaque étape.

| Intervalle | Milieu \(m\) | \(h(m)\) (arrondi) | Nouvel intervalle |
|---|---|---|---|
| \([1\,;\,2]\) | \(1{,}5\) | \({1{,}875 > 0}\) | \([1\,;\,1{,}5]\) |
| \([1\,;\,1{,}5]\) | \(1{,}25\) | \({0{,}203 > 0}\) | \([1\,;\,1{,}25]\) |
| \([1\,;\,1{,}25]\) | \(1{,}125\) | \({-0{,}451 < 0}\) | \([1{,}125\,;\,1{,}25]\) |
| \([1{,}125\,;\,1{,}25]\) | \(1{,}187\,5\) | \({-0{,}138 < 0}\) | \([1{,}187\,5\,;\,1{,}25]\) |

On obtient \({1{,}187\,5 \leq \alpha \leq 1{,}25}\), d’amplitude \(0{,}062\,5\).

2. On répète le procédé tant que l’amplitude dépasse la précision voulue `e` :

```python
def dichotomie(a, b, e):
    while b - a > e:
        m = (a + b) / 2
        if m**3 + m - 3 > 0:
            b = m
        else:
            a = m
    return a, b
```

`dichotomie(1, 2, 0.001)` renvoie un encadrement d’amplitude inférieure à \(0{,}001\) : \({1{,}212\,9 \leq \alpha \leq 1{,}213\,9}\) environ (\({\alpha \approx 1{,}213\,4}\)).
{{% /details %}}
