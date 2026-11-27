---
title: 'Fonction racine carrée'
weight: 1
cascade:
  type: docs
---

## Définition et courbe

> [!TIP] **Définition**
>
> La **fonction racine carrée** est la fonction \(k\) définie sur \({[0\,;\,+\infty[}\) par \({k(x) = \sqrt{x}}\).

{{% details title="Exemple" closed="true" %}}
\({k(0) = 0}\), \({k(1) = 1}\), \({k(16) = 4}\), \({k(0{,}49) = 0{,}7}\), \({k(2) = \sqrt{2} \approx 1{,}414}\). La racine carrée d’un nombre strictement négatif n’existe pas : \(k\) n’est définie que sur \({[0\,;\,+\infty[}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Dans un repère orthonormé, la courbe représentative de la fonction racine carrée, d’équation \({y = \sqrt{x}}\), est une demi-parabole d’« axe horizontal ». Elle est la symétrique de la partie de la parabole \({y = x^2}\) située dans \({[0\,;\,+\infty[}\) par rapport à la droite d’équation \({y = x}\).

![](/images/image375.png)

> [!IMPORTANT] **Remarque**
>
> Cette symétrie traduit le fait que, pour \({x \geq 0}\) et \({y \geq 0}\), \({y = \sqrt{x} \iff x = y^2}\) : les deux courbes échangent les rôles de \(x\) et \(y\).

## Variations

> [!TIP] **Propriété**
>
> La fonction racine carrée est **strictement croissante** sur \({[0\,;\,+\infty[}\). Ainsi, pour tous réels \(a\) et \(b\) positifs :
> \[
a < b \iff \sqrt{a} < \sqrt{b}.
\]

![](/images/image376.png)

{{% details title="Démonstration" closed="true" %}}
Soit \({0 \leq a < b}\). Alors \({\sqrt{b} + \sqrt{a} > 0}\) (car \({b > 0}\)), et
\[
\sqrt{b} - \sqrt{a} = \dfrac{\left(\sqrt{b} - \sqrt{a}\right)\left(\sqrt{b} + \sqrt{a}\right)}{\sqrt{b} + \sqrt{a}} = \dfrac{b - a}{\sqrt{b} + \sqrt{a}}.
\]
Le numérateur et le dénominateur sont strictement positifs, donc \({\sqrt{b} - \sqrt{a} > 0}\) : \({\sqrt{a} < \sqrt{b}}\).
{{% /details %}}

## Comparer x², x et √x

> [!TIP] **Propriété**
>
> - Si \({0 < x < 1}\), alors \({x^2 < x < \sqrt{x}}\).
> - Si \({x > 1}\), alors \({\sqrt{x} < x < x^2}\).

{{% details title="Démonstration" closed="true" %}}
Soit \({x > 0}\). On sait déjà que \({x^2 - x = x(x - 1)}\) est du signe de \({x - 1}\). De plus \({x - \sqrt{x} = \sqrt{x}\left(\sqrt{x} - 1\right)}\) est du signe de \({\sqrt{x} - 1}\), lui-même du signe de \({x - 1}\) (car la racine carrée est croissante et \({\sqrt{1} = 1}\)).
- Si \({0 < x < 1}\) : \({x^2 - x < 0}\) et \({x - \sqrt{x} < 0}\), d’où \({x^2 < x < \sqrt{x}}\).
- Si \({x > 1}\) : les deux différences sont positives, d’où \({\sqrt{x} < x < x^2}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({0{,}64^2 = 0{,}409\,6 < 0{,}64 < \sqrt{0{,}64} = 0{,}8}\), alors que \({\sqrt{6{,}25} = 2{,}5 < 6{,}25 < 6{,}25^2 = 39{,}062\,5}\).
{{% /details %}}

## Utiliser la fonction racine carrée

> [!NOTE] **Méthode - Comparer et encadrer des racines carrées**
>
> 1. Sans calculatrice, ranger dans l’ordre croissant : \(\sqrt{3{,}1}\), \(\sqrt{\pi}\), \(\sqrt{\dfrac{22}{7}}\) et \(\sqrt{3}\).
> 2. Encadrer \(\sqrt{x}\) sachant que \({2{,}25 \leq x \leq 6{,}25}\).

{{% details title="Solution commentée" closed="true" %}}
1. Les nombres sous les racines sont positifs, et la fonction racine carrée est croissante : il suffit de les ranger. \({3 < 3{,}1 < \pi \approx 3{,}141\,6 < \dfrac{22}{7} \approx 3{,}142\,9}\), donc
\[
\sqrt{3} < \sqrt{3{,}1} < \sqrt{\pi} < \sqrt{\dfrac{22}{7}}.
\]
2. La fonction racine carrée conserve l’ordre sur \({[0\,;\,+\infty[}\) : \({\sqrt{2{,}25} \leq \sqrt{x} \leq \sqrt{6{,}25}}\), soit \({1{,}5 \leq \sqrt{x} \leq 2{,}5}\).
{{% /details %}}
