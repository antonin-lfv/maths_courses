---
title: "Intégrale d'une fonction continue et positive"
weight: 1
cascade:
  type: docs
---

Le plan est muni d’un repère orthogonal \((O\,;\,\vec{\imath},\vec{\jmath})\). On note \(I\) et \(J\) les points tels que \({\overrightarrow{OI} = \vec{\imath}}\) et \({\overrightarrow{OJ} = \vec{\jmath}}\), et \(K\) le point tel que \(OIKJ\) soit un rectangle.  
L’**unité d’aire** (notée u.a.) est l’aire du rectangle \(OIKJ\).

Dans toute la page, \(f\) est une fonction **continue et positive** sur un intervalle \([a\,;\,b]\), et \(\mathcal{C}_f\) sa courbe représentative.

## Intégrale d’une fonction continue et positive

> [!TIP] **Définition**
>
> L’**intégrale de \(a\) à \(b\)** de la fonction \(f\), notée \(\displaystyle\int_a^b f(x)\,\mathrm{d}x\), est l’aire, en unités d’aire, du domaine compris entre la courbe \(\mathcal{C}_f\), l’axe des abscisses et les droites d’équations \({x = a}\) et \({x = b}\).
>
> Les réels \(a\) et \(b\) sont les **bornes** de l’intégrale.

![](/images/image298.png)

> [!IMPORTANT] **Remarques**
>
> - \(\displaystyle\int_a^b f(x)\,\mathrm{d}x\) se lit « intégrale de \(a\) à \(b\) de \(f(x)\,\mathrm{d}x\) ». Le symbole \(\int\) est un S allongé : l’intégrale généralise une **somme** d’aires de petits rectangles de largeur \(\mathrm{d}x\) et de hauteur \(f(x)\).
> - La variable d’intégration est **muette** : \({\displaystyle\int_a^b f(x)\,\mathrm{d}x = \int_a^b f(t)\,\mathrm{d}t = \int_a^b f(u)\,\mathrm{d}u}\).

{{% details title="Exemple" closed="true" %}}
On considère la fonction \({f : x \mapsto 0{,}5x + 1}\), continue et positive sur \([0\,;\,4]\).  
\(\displaystyle\int_0^4 f(x)\,\mathrm{d}x\) est l’aire du trapèze de bases \({f(0) = 1}\) et \({f(4) = 3}\), et de hauteur 4 :
\[
\int_0^4 (0{,}5x + 1)\,\mathrm{d}x = \dfrac{(1 + 3) \times 4}{2} = 8 \text{ u.a.}
\]

![](/images/image299.png)
{{% /details %}}

## Premières propriétés

> [!TIP] **Propriétés**
>
> - \({\displaystyle\int_a^a f(x)\,\mathrm{d}x = 0}\).
> - Si \(f\) est constante, égale à \({k \geq 0}\) sur \([a\,;\,b]\), alors \({\displaystyle\int_a^b k\,\mathrm{d}x = k \times (b - a)}\) (aire d’un rectangle).

> [!TIP] **Propriété (relation de Chasles)**
>
> Pour tout réel \(c\) tel que \({a \leq c \leq b}\) :
> \[
\int_a^b f(x)\,\mathrm{d}x = \int_a^c f(x)\,\mathrm{d}x + \int_c^b f(x)\,\mathrm{d}x.
\]

Graphiquement : le domaine se découpe en deux par la droite d’équation \({x = c}\), et les aires s’ajoutent.

{{% details title="Exemple" closed="true" %}}
\({\displaystyle\int_1^4 3\,\mathrm{d}x = 3 \times (4 - 1) = 9}\), et l’on vérifie Chasles : \({\displaystyle\int_1^2 3\,\mathrm{d}x + \int_2^4 3\,\mathrm{d}x = 3 + 6 = 9}\).
{{% /details %}}

## Valeur moyenne d’une fonction

> [!TIP] **Définition**
>
> Lorsque \({a < b}\), la **valeur moyenne** de \(f\) sur \([a\,;\,b]\) est le nombre réel
> \[
m = \dfrac{1}{b - a}\int_a^b f(x)\,\mathrm{d}x.
\]

> [!IMPORTANT] **Interprétation graphique**
>
> \({m \times (b - a) = \displaystyle\int_a^b f(x)\,\mathrm{d}x}\) : la valeur moyenne \(m\) est la hauteur du rectangle de base \([a\,;\,b]\) qui a la même aire que le domaine situé sous la courbe de \(f\).

{{% details title="Exemple" closed="true" %}}
On admet que \({\displaystyle\int_0^3 x^2\,\mathrm{d}x = 9}\) (on saura le calculer à la page suivante). La valeur moyenne de \({x \mapsto x^2}\) sur \([0\,;\,3]\) est
\[
m = \dfrac{1}{3 - 0} \times 9 = 3.
\]
Le rectangle de base \([0\,;\,3]\) et de hauteur 3 a la même aire, 9 u.a., que le domaine sous la parabole.

![](/images/image300.png)
{{% /details %}}

## Estimer graphiquement une intégrale

> [!NOTE] **Méthode 1 - Encadrer une intégrale par la méthode des rectangles**
>
> On considère la fonction \(f\) définie sur \([0\,;\,2]\) par \({f(x) = 4 - x^2}\), continue, positive et décroissante sur cet intervalle. On note \({\mathcal{A} = \displaystyle\int_0^2 f(x)\,\mathrm{d}x}\).
>
> On partage \([0\,;\,2]\) en 4 intervalles de largeur \(0{,}5\).
> 1. Calculer la somme \(s\) des aires des 4 rectangles situés sous la courbe, et la somme \(S\) des aires des 4 rectangles situés au-dessus.
> 2. En déduire un encadrement de \(\mathcal{A}\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \(f\) est décroissante sur \([0\,;\,2]\) : sur chaque intervalle \({[x_i\,;\,x_i + 0{,}5]}\), le minimum de \(f\) est atteint à droite et le maximum à gauche.

- Rectangles sous la courbe (en bleu) : hauteurs \({f(0{,}5) = 3{,}75}\), \({f(1) = 3}\), \({f(1{,}5) = 1{,}75}\), \({f(2) = 0}\).
\[
s = 0{,}5 \times (3{,}75 + 3 + 1{,}75 + 0) = 0{,}5 \times 8{,}5 = 4{,}25.
\]
- Rectangles au-dessus (en rouge) : hauteurs \({f(0) = 4}\), \({f(0{,}5) = 3{,}75}\), \({f(1) = 3}\), \({f(1{,}5) = 1{,}75}\).
\[
S = 0{,}5 \times (4 + 3{,}75 + 3 + 1{,}75) = 0{,}5 \times 12{,}5 = 6{,}25.
\]

**2.** Le domaine sous la courbe contient les rectangles bleus et est contenu dans les rectangles rouges, donc :
\[
4{,}25 \leq \mathcal{A} \leq 6{,}25.
\]
En augmentant le nombre de rectangles, l’encadrement se resserre (la valeur exacte est \({\dfrac{16}{3} \approx 5{,}33}\)).

![](/images/image301.png)
{{% /details %}}
