---
title: "Notion intuitive de la limite d'une suite"
weight: 1
cascade:
  type: docs
---

Étudier la **limite** d’une suite \((u_n)\), c’est décrire le comportement de ses termes \(u_n\) lorsque \(n\) prend des valeurs entières de plus en plus grandes, ce que l’on exprime par « quand \(n\) tend vers \({+\infty}\) ».

## Limite finie

> [!TIP] **Définition (intuitive)**
>
> On dit qu’une suite \((u_n)\) a pour **limite** le réel \(\ell\), ou **converge** vers \(\ell\), si les termes \(u_n\) deviennent aussi proches que l’on veut de \(\ell\) dès que \(n\) est assez grand. On note \({\displaystyle\lim_{n \to +\infty} u_n = \ell}\).

> [!TIP] **Propriété (admise)**
>
> Les suites de terme général \(\dfrac{1}{n}\), \(\dfrac{1}{n^2}\), …, \(\dfrac{1}{n^k}\) (\(k\) entier naturel non nul) et \(\dfrac{1}{\sqrt{n}}\) tendent vers 0 lorsque \(n\) tend vers \({+\infty}\).

## Limite infinie

> [!TIP] **Définition (intuitive)**
>
> On dit qu’une suite \((u_n)\) a pour limite \({+\infty}\) si les termes \(u_n\) deviennent aussi grands que l’on veut dès que \(n\) est assez grand. On note \({\displaystyle\lim_{n \to +\infty} u_n = +\infty}\).
>
> De même, \({\displaystyle\lim_{n \to +\infty} u_n = -\infty}\) si les termes \(u_n\) deviennent négatifs et aussi grands que l’on veut en valeur absolue.

> [!TIP] **Propriété (admise)**
>
> Les suites de terme général \(n\), \(n^2\), …, \(n^k\) (\(k\) entier naturel non nul) et \(\sqrt{n}\) tendent vers \({+\infty}\) lorsque \(n\) tend vers \({+\infty}\).

> [!IMPORTANT] **Remarque**
>
> Une suite peut n’avoir **aucune limite** : c’est le cas de la suite définie par \({w_n = 2 + (-1)^n}\), dont les termes valent alternativement 3 et 1. Une suite qui ne converge pas est dite **divergente** (elle peut tendre vers \({\pm\infty}\) ou n’avoir pas de limite).

Les trois comportements possibles sont illustrés ci-dessous.

![](/images/image336.png)

## Conjecturer une limite

> [!NOTE] **Méthode 1 - Conjecturer une limite à l’aide d’un graphique**
>
> Sur chacun des trois graphiques ci-dessus, conjecturer le comportement de la suite quand \(n\) tend vers \({+\infty}\).

{{% details title="Solution commentée" closed="true" %}}
- Les termes de \((u_n)\) se rapprochent de la droite d’équation \({y = 3}\) sans la dépasser : on conjecture \({\lim u_n = 3}\).
- Les termes de \((v_n)\) dépassent n’importe quelle valeur dès que \(n\) est assez grand : on conjecture \({\lim v_n = +\infty}\).
- Les termes de \((w_n)\) oscillent entre 1 et 3 : la suite ne semble pas avoir de limite.
{{% /details %}}

> [!NOTE] **Méthode 2 - Conjecturer une limite à l’aide d’un tableau de valeurs**
>
> On considère la suite \((u_n)\) définie par \({u_0 = 1}\) et, pour tout entier naturel \(n\), \({u_{n+1} = 0{,}7u_n + 3}\). À l’aide d’un tableur, conjecturer la limite de la suite.

{{% details title="Solution commentée" closed="true" %}}
Dans un tableur, on saisit 1 en B2, puis la formule `=0,7*B2+3` en B3, que l’on recopie vers le bas. On obtient (valeurs arrondies) :

| \(n\) | 0 | 1 | 2 | 5 | 10 | 20 | 40 |
|---|---|---|---|---|---|---|---|
| \(u_n\) | 1 | 3,7 | 5,59 | 8,49 | 9,75 | 9,99 | 10,000 |

On conjecture que \({\displaystyle\lim_{n \to +\infty} u_n = 10}\). (On le démontrera avec les suites arithmético-géométriques : \(10\) est la solution de \({\ell = 0{,}7\ell + 3}\).)
{{% /details %}}
