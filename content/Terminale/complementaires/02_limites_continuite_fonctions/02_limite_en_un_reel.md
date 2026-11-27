---
title: 'Notion de limite en un réel'
weight: 2
cascade:
  type: docs
---

Dans cette page, \(f\) est une fonction définie sur un intervalle \(I\) et \(a\) est un réel, appartenant à \(I\) ou situé à une borne de \(I\).

## Limite infinie en un réel

> [!TIP] **Définitions (intuitives)**
>
> - On dit que \(f\) **admet pour limite \({+\infty}\) lorsque \(x\) tend vers \(a\)** si \(f(x)\) prend des valeurs aussi grandes que l’on veut pour \(x\) suffisamment proche de \(a\). On note \({\displaystyle\lim_{x \to a} f(x) = +\infty}\).
> - On dit que \(f\) admet pour limite \({-\infty}\) lorsque \(x\) tend vers \(a\) si \(f(x)\) prend des valeurs négatives aussi grandes que l’on veut en valeur absolue pour \(x\) suffisamment proche de \(a\).

> [!IMPORTANT] **Remarque**
>
> Une fonction peut avoir une **limite à droite** (\({x \to a}\) avec \({x > a}\), noté \({x \to a^+}\)) et une **limite à gauche** (\({x \to a^-}\)) différentes. Par exemple, pour la fonction inverse :
> \[
\lim_{\substack{x \to 0 \\ x > 0}} \dfrac{1}{x} = +\infty \qquad \text{et} \qquad \lim_{\substack{x \to 0 \\ x < 0}} \dfrac{1}{x} = -\infty.
\]

## Asymptote verticale

> [!TIP] **Définition**
>
> Si \({\displaystyle\lim_{x \to a} f(x) = +\infty}\) ou \({-\infty}\) (éventuellement seulement à gauche ou à droite), on dit que la droite d’équation \({x = a}\) est une **asymptote verticale** à la courbe représentative de \(f\).

{{% details title="Exemple" closed="true" %}}
La fonction \(g\) définie sur \(\mathbb{R} \setminus \{1\}\) par \({g(x) = 1 + \dfrac{1}{x - 1}}\) vérifie \({\lim\limits_{x \to 1^+} g(x) = +\infty}\) et \({\lim\limits_{x \to 1^-} g(x) = -\infty}\) : la droite d’équation \({x = 1}\) est asymptote verticale. De plus, \({\lim\limits_{x \to \pm\infty} g(x) = 1}\) : la droite d’équation \({y = 1}\) est asymptote horizontale.

![](/images/image340.png)
{{% /details %}}

## Limite finie en un réel

> [!TIP] **Définition (intuitive)**
>
> On dit que \(f\) **admet pour limite le réel \(\ell\) lorsque \(x\) tend vers \(a\)** si les nombres \(f(x)\) sont aussi proches que l’on veut de \(\ell\) pour \(x\) suffisamment proche de \(a\). On note \({\displaystyle\lim_{x \to a} f(x) = \ell}\).

{{% details title="Exemple" closed="true" %}}
Soit \({f(x) = 2x^2 + 1}\). Quand \(x\) est très proche de 3, \(x^2\) est très proche de 9, donc \(f(x)\) est très proche de \({2 \times 9 + 1 = 19}\) : \({\lim\limits_{x \to 3} f(x) = 19 = f(3)}\).
{{% /details %}}

## Conjecturer des limites en un réel

> [!NOTE] **Méthode 1 - Conjecturer graphiquement les limites aux bornes**
>
> En observant la courbe de \(g\) ci-dessus, conjecturer les limites de \(g\) aux bornes de son ensemble de définition \({]-\infty\,;\,1[\, \cup \,]1\,;\,+\infty[}\) et donner les équations des asymptotes.

{{% details title="Solution commentée" closed="true" %}}
- En \({-\infty}\) et en \({+\infty}\), la courbe se rapproche de la droite \({y = 1}\) : \({\lim\limits_{x \to \pm\infty} g(x) = 1}\).
- Quand \(x\) se rapproche de 1 par valeurs inférieures, \(g(x)\) devient négatif et très grand en valeur absolue : \({\lim\limits_{x \to 1^-} g(x) = -\infty}\). Par valeurs supérieures : \({\lim\limits_{x \to 1^+} g(x) = +\infty}\).

Asymptotes : la droite horizontale \({y = 1}\) (en \({\pm\infty}\)) et la droite verticale \({x = 1}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Conjecturer une limite avec la calculatrice**
>
> Soit \(h\) la fonction définie sur \({]2\,;\,+\infty[}\) par \({h(x) = \dfrac{3}{x - 2}}\). Conjecturer la limite de \(h\) lorsque \(x\) tend vers 2.

{{% details title="Solution commentée" closed="true" %}}
| \(x\) | 2,1 | 2,01 | 2,001 | 2,0001 |
|---|---|---|---|---|
| \(h(x)\) | 30 | 300 | 3 000 | 30 000 |

Les valeurs deviennent aussi grandes que l’on veut : on conjecture \({\lim\limits_{x \to 2^+} h(x) = +\infty}\). La droite d’équation \({x = 2}\) est asymptote verticale.
{{% /details %}}

> [!NOTE] **Méthode 3 - Déterminer une limite finie**
>
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = x^3 - 4x}\). Déterminer \({\lim\limits_{x \to -1} f(x)}\).

{{% details title="Solution commentée" closed="true" %}}
Lorsque \(x\) est très proche de \({-1}\), \(x^3\) est très proche de \({-1}\) et \(4x\) est très proche de \({-4}\). Donc \(f(x)\) est très proche de \({-1 - (-4) = 3}\) : \({\lim\limits_{x \to -1} f(x) = 3}\).
{{% /details %}}
