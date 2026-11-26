---
title: 'Fonction inverse'
weight: 2
cascade:
  type: docs
---

## Définition et courbe

> [!TIP] **Définition**
>
> La **fonction inverse** est la fonction \(g\) définie sur \(\mathbb{R}^* = ]-\infty\,;\,0[ \cup ]0\,;\,+\infty[\) par \(g(x) = \dfrac{1}{x}\).

> [!IMPORTANT] **Remarque**
>
> \(0\) n’a pas d’image par la fonction inverse : c’est une **valeur interdite**. De plus, \(\frac{1}{x}\) n’est jamais nul, donc \(0\) n’a pas d’antécédent.

{{% details title="Exemple" closed="true" %}}
\(g(4) = 0{,}25\), \(g(-0{,}5) = -2\), \(g\left(\frac{3}{7}\right) = \frac{7}{3}\). Pour tout réel \(x \neq 0\), \(g(-x) = -\frac{1}{x} = -g(x)\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> Dans un repère orthogonal d’origine \(O\), la courbe représentative de la fonction inverse, d’équation \(y = \dfrac{1}{x}\), est une **hyperbole**, formée de deux branches.
> - Elle est **symétrique par rapport à l’origine** \(O\), car \(\frac{1}{-x} = -\frac{1}{x}\).
> - L’inverse d’un nombre a le même signe que ce nombre : une branche est dans la zone \(x < 0\), \(y < 0\), l’autre dans la zone \(x > 0\), \(y > 0\).

![](/images/image377.png)

## Variations

> [!TIP] **Propriété**
>
> La fonction inverse est **strictement décroissante** sur \(]-\infty\,;\,0[\) et **strictement décroissante** sur \(]0\,;\,+\infty[\).
>
> Ainsi, pour tous réels \(a\) et \(b\) non nuls **de même signe** : \(a < b \iff \dfrac{1}{a} > \dfrac{1}{b}\).

![](/images/image378.png)

{{% details title="Démonstration" closed="true" %}}
Soit \(a\) et \(b\) deux réels non nuls de même signe, avec \(a < b\). Alors
\[
\frac{1}{b} - \frac{1}{a} = \frac{a - b}{ab}.
\]
Le numérateur \(a - b\) est strictement négatif ; le dénominateur \(ab\) est strictement positif (produit de deux nombres de même signe). Donc \(\frac{1}{b} - \frac{1}{a} < 0\), c’est-à-dire \(\frac{1}{a} > \frac{1}{b}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> La fonction inverse n’est **pas** décroissante sur \(\mathbb{R}^*\) tout entier : \(-1 < 1\) et \(\frac{1}{-1} = -1 < \frac{1}{1} = 1\). La double barre du tableau rappelle que l’on ne peut pas « passer » par \(0\).

## Utiliser la fonction inverse

> [!NOTE] **Méthode — Comparer et encadrer des inverses**
>
> 1. Sans calculatrice, comparer \(\dfrac{1}{\sqrt{2}}\) et \(\dfrac{1}{1{,}4}\), puis \(\dfrac{1}{-3{,}5}\) et \(\dfrac{1}{-3{,}05}\).
> 2. Encadrer \(\dfrac{1}{x}\) sachant que \(2 \leq x \leq 5\), puis sachant que \(-4 \leq x \leq -0{,}5\).

{{% details title="Solution commentée" closed="true" %}}
1. \(1{,}4 < \sqrt{2}\) (car \(1{,}4^2 = 1{,}96 < 2\)), deux nombres strictement positifs ; la fonction inverse est décroissante sur \(]0\,;\,+\infty[\) : \(\dfrac{1}{\sqrt{2}} < \dfrac{1}{1{,}4}\).

   \(-3{,}5 < -3{,}05 < 0\) ; la fonction inverse est décroissante sur \(]-\infty\,;\,0[\) : \(\dfrac{1}{-3{,}5} > \dfrac{1}{-3{,}05}\).
2. Sur \([2\,;\,5] \subset ]0\,;\,+\infty[\), l’ordre est inversé : \(\dfrac{1}{5} \leq \dfrac{1}{x} \leq \dfrac{1}{2}\), soit \(0{,}2 \leq \dfrac{1}{x} \leq 0{,}5\).

   Sur \([-4\,;\,-0{,}5] \subset ]-\infty\,;\,0[\), l’ordre est aussi inversé : \(\dfrac{1}{-0{,}5} \leq \dfrac{1}{x} \leq \dfrac{1}{-4}\), soit \(-2 \leq \dfrac{1}{x} \leq -0{,}25\).
{{% /details %}}
