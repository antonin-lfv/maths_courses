---
title: 'TVI'
weight: 5
cascade:
  type: docs
---

## Cas d’un intervalle fermé

> [!TIP] **Théorème des valeurs intermédiaires (admis)**
>
> On considère une fonction \(f\) définie et **continue** sur un intervalle \([a\,;\,b]\). Pour tout réel \(k\) compris entre \(f(a)\) et \(f(b)\), il existe **au moins** un réel \(c\) compris entre \(a\) et \(b\) tel que \({f(c) = k}\).

{{% details title="Exemple" closed="true" %}}
Sur la figure, \(k\) est compris entre \(f(a)\) et \(f(b)\) : l’équation \({f(x) = k}\) a ici trois solutions \(c_1\), \(c_2\), \(c_3\) dans \([a\,;\,b]\).

![](/images/image342.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le théorème signifie que, lorsque \(x\) varie de \(a\) à \(b\), une fonction continue \(f(x)\) prend **toutes** les valeurs comprises entre \(f(a)\) et \(f(b)\). Il garantit l’existence d’une solution, mais pas son unicité. Sans continuité, la conclusion peut être fausse (pensez à une fonction qui « saute » par-dessus la valeur \(k\)).

## Cas d’une fonction strictement monotone

> [!TIP] **Théorème (cas particulier du théorème des valeurs intermédiaires, admis)**
>
> On considère une fonction \(f\) **continue** et **strictement monotone** (strictement croissante ou strictement décroissante) sur un intervalle \([a\,;\,b]\). Pour tout réel \(k\) compris entre \(f(a)\) et \(f(b)\), l’équation \({f(x) = k}\) admet une **unique** solution dans l’intervalle \([a\,;\,b]\).

> [!IMPORTANT] **Remarque**
>
> Dans un tableau de variation, une flèche (oblique) traduit la continuité et la stricte monotonie de la fonction sur l’intervalle correspondant : toute valeur comprise entre les deux extrémités de la flèche est atteinte exactement une fois.

## Extension à d’autres intervalles

> [!TIP] **Théorème (admis)**
>
> Soient \(a\) un réel ou \({-\infty}\), \(b\) un réel ou \({+\infty}\), et \(f\) une fonction continue sur \(]a\,;\,b[\). Soit \(k\) un réel compris entre \({\lim\limits_{x \to a} f(x)}\) et \({\lim\limits_{x \to b} f(x)}\).
> - L’équation \({f(x) = k}\) admet au moins une solution dans l’intervalle \(]a\,;\,b[\).
> - Si, de plus, \(f\) est strictement monotone sur \(]a\,;\,b[\), alors cette solution est unique.

> [!IMPORTANT] **Remarque**
>
> Les limites (finies ou infinies) d’une fonction en un point peuvent être placées dans un tableau de variation comme des valeurs.

## Utiliser le théorème des valeurs intermédiaires

> [!NOTE] **Méthode 1 - Montrer l’existence d’une solution**
>
> Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \({f(x) = x^3 - 2x^2 + 3}\). Montrer que l’équation \({f(x) = 0}\) admet au moins une solution dans \({[-2\,;\,0]}\).

{{% details title="Solution commentée" closed="true" %}}
\(f\) est une fonction polynôme, donc continue sur \({[-2\,;\,0]}\). De plus \({f(-2) = -8 - 8 + 3 = -13}\) et \({f(0) = 3}\). Comme 0 est compris entre \({-13}\) et \(3\), d’après le théorème des valeurs intermédiaires, l’équation \({f(x) = 0}\) admet au moins une solution dans \({[-2\,;\,0]}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Montrer l’unicité et donner un encadrement**
>
> Soit \(g\) la fonction définie sur \([0\,;\,3]\) par \({g(x) = x^3 + x - 5}\).
> 1. Montrer que l’équation \({g(x) = 0}\) admet une unique solution \(\alpha\) dans \([0\,;\,3]\).
> 2. À l’aide de la calculatrice, donner un encadrement de \(\alpha\) d’amplitude \({10^{-2}}\).

{{% details title="Solution commentée" closed="true" %}}
1. \(g\) est dérivable (donc continue) sur \([0\,;\,3]\) et \({g'(x) = 3x^2 + 1 > 0}\) : \(g\) est strictement croissante. \({g(0) = -5 < 0}\) et \({g(3) = 25 > 0}\). D’après le corollaire du théorème des valeurs intermédiaires, l’équation \({g(x) = 0}\) admet une unique solution \({\alpha \in [0\,;\,3]}\).
2. Par balayage : \({g(1{,}5) = -0{,}125 < 0}\) et \({g(1{,}6) \approx 0{,}696 > 0}\), donc \({1{,}5 < \alpha < 1{,}6}\). Puis \({g(1{,}51) \approx -0{,}047}\) et \({g(1{,}52) \approx 0{,}032}\), donc \({1{,}51 < \alpha < 1{,}52}\).
{{% /details %}}

> [!NOTE] **Méthode 3 - Utiliser un tableau de variation**
>
> Une fonction \(h\), continue sur \(\mathbb{R}\), est strictement croissante sur \({]-\infty\,;\,1]}\), puis strictement décroissante sur \({[1\,;\,+\infty[}\), avec \({\lim\limits_{x \to -\infty} h(x) = -\infty}\), \({h(1) = 4}\) et \({\lim\limits_{x \to +\infty} h(x) = 2}\). Déterminer le nombre de solutions de l’équation \({h(x) = 3}\).

{{% details title="Solution commentée" closed="true" %}}
- Sur \({]-\infty\,;\,1]}\) : \(h\) est continue et strictement croissante, et 3 est compris entre \({\lim\limits_{-\infty} h = -\infty}\) et \({h(1) = 4}\). L’équation a une unique solution dans cet intervalle.
- Sur \({[1\,;\,+\infty[}\) : \(h\) est continue et strictement décroissante de 4 vers 2, et \(3\) est compris entre 2 et 4. L’équation a une unique solution dans cet intervalle (différente de 1, car \({h(1) = 4 \neq 3}\)).

L’équation \({h(x) = 3}\) a donc exactement deux solutions sur \(\mathbb{R}\). (L’équation \({h(x) = 1}\), elle, n’en aurait qu’une : sur \({[1\,;\,+\infty[}\), \({h(x) > 2}\).)
{{% /details %}}
