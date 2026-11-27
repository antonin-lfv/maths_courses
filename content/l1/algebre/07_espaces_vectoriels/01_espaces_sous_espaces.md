---
title: 'Espaces et sous-espaces vectoriels'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\). Ses éléments sont appelés **scalaires**.

## Structure d’espace vectoriel

> [!TIP] **Définition**
>
> Un **\(\mathbb{K}\)-espace vectoriel** est un ensemble \(E\) muni d’une addition \({(u, v) \mapsto u + v}\) et d’une multiplication par les scalaires \({(\lambda, u) \mapsto \lambda u}\) telles que, pour tous \(u, v, w\) dans \(E\) et \(\lambda, \mu\) dans \(\mathbb{K}\) :
> - \({u + v = v + u}\) et \({(u + v) + w = u + (v + w)}\) ;
> - il existe un élément \(0_E\), le **vecteur nul**, tel que \({u + 0_E = u}\) ;
> - tout \(u\) a un **opposé** \(-u\) tel que \({u + (-u) = 0_E}\) ;
> - \({1u = u}\) et \({\lambda(\mu u) = (\lambda\mu)u}\) ;
> - \({(\lambda + \mu)u = \lambda u + \mu u}\) et \({\lambda(u + v) = \lambda u + \lambda v}\).
>
> Les éléments de \(E\) sont appelés **vecteurs**.

> [!TIP] **Propriétés**
>
> Pour tout \({u \in E}\) et tout \({\lambda \in \mathbb{K}}\) : \({0u = 0_E}\), \({\lambda 0_E = 0_E}\), \({(-1)u = -u}\), et
>
> \[ \lambda u = 0_E \iff \lambda = 0 \text{ ou } u = 0_E. \]

> [!TIP] **Espaces de référence**
>
> - \(\mathbb{K}^n\), avec \({(x_1, \dots, x_n) + (y_1, \dots, y_n) = (x_1 + y_1, \dots, x_n + y_n)}\) et \({\lambda(x_1, \dots, x_n) = (\lambda x_1, \dots, \lambda x_n)}\).
> - \(\mathbb{K}[X]\), l’espace des polynômes, et \(\mathbb{K}_n[X]\).
> - \(\mathcal{M}_{n,p}(\mathbb{K})\), l’espace des matrices.
> - \(\mathcal{F}(X, \mathbb{K})\), l’espace des fonctions d’un ensemble \(X\) dans \(\mathbb{K}\), avec \({(f + g)(x) = f(x) + g(x)}\) et \({(\lambda f)(x) = \lambda f(x)}\).
> - \(\mathbb{K}^{\mathbb{N}}\), l’espace des suites à valeurs dans \(\mathbb{K}\).

## Sous-espaces vectoriels

> [!TIP] **Définition et caractérisation**
>
> Une partie \(F\) d’un espace vectoriel \(E\) est un **sous-espace vectoriel** de \(E\) si :
> - \({0_E \in F}\) ;
> - pour tous \({u, v \in F}\) et tout \({\lambda \in \mathbb{K}}\), \({\lambda u + v \in F}\).
>
> \(F\), muni des mêmes opérations, est alors lui-même un espace vectoriel.

> [!NOTE] **Méthode - Montrer qu’un ensemble est un espace vectoriel**
>
> On ne vérifie presque jamais les huit axiomes : on montre que l’ensemble est un **sous-espace** d’un espace de référence. Pour montrer qu’une partie n’est pas un sous-espace, il suffit de constater qu’elle ne contient pas \(0_E\), ou de donner un contre-exemple à la stabilité.

{{% details title="Exemple" closed="true" %}}
- \({F = \{(x, y, z) \in \mathbb{R}^3,\ x - 2y + 3z = 0\}}\) est un sous-espace de \(\mathbb{R}^3\). En effet, \({(0,0,0) \in F}\). Si \({u = (x, y, z)}\) et \({v = (x', y', z')}\) sont dans \(F\) et \({\lambda \in \mathbb{R}}\), alors \({\lambda u + v = (\lambda x + x', \lambda y + y', \lambda z + z')}\) vérifie
  \({(\lambda x + x') - 2(\lambda y + y') + 3(\lambda z + z') = \lambda(x - 2y + 3z) + (x' - 2y' + 3z') = 0}\).
- \({G = \{(x, y) \in \mathbb{R}^2,\ x + y = 1\}}\) n’est pas un sous-espace : \({(0, 0) \notin G}\).
- \({H = \{(x, y) \in \mathbb{R}^2,\ xy = 0\}}\) n’est pas un sous-espace : \({(1, 0)}\) et \({(0, 1)}\) sont dans \(H\), mais pas leur somme \({(1, 1)}\).
{{% /details %}}

> [!TIP] **Propriétés**
>
> - L’ensemble des solutions d’un système linéaire **homogène** à \(p\) inconnues est un sous-espace vectoriel de \(\mathbb{K}^p\).
> - L’intersection de sous-espaces vectoriels de \(E\) est un sous-espace vectoriel de \(E\).

> [!IMPORTANT] **Remarque**
>
> La réunion de deux sous-espaces \(F\) et \(G\) n’est un sous-espace que si l’un est inclus dans l’autre (voir l’ensemble \(H\) ci-dessus, réunion de deux droites).

## Combinaisons linéaires et sous-espace engendré

> [!TIP] **Définition**
>
> Une **combinaison linéaire** des vecteurs \({u_1, \dots, u_n}\) est un vecteur de la forme \({\lambda_1 u_1 + \dots + \lambda_n u_n}\), avec \({\lambda_1, \dots, \lambda_n \in \mathbb{K}}\). L’ensemble de ces combinaisons linéaires est noté
>
> \[ \operatorname{Vect}(u_1, \dots, u_n) = \{\lambda_1 u_1 + \dots + \lambda_n u_n,\ (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n\}. \]

> [!TIP] **Propriété**
>
> \({\operatorname{Vect}(u_1, \dots, u_n)}\) est un sous-espace vectoriel de \(E\) : c’est le plus petit sous-espace (au sens de l’inclusion) qui contient \({u_1, \dots, u_n}\). On l’appelle **sous-espace engendré** par \({u_1, \dots, u_n}\).

> [!TIP] **Propriétés - Opérations sur une famille**
>
> On ne change pas \({\operatorname{Vect}(u_1, \dots, u_n)}\) si l’on :
> - change l’ordre des vecteurs ;
> - multiplie un vecteur par un scalaire non nul ;
> - ajoute à un vecteur une combinaison linéaire des autres ;
> - retire un vecteur qui est combinaison linéaire des autres (en particulier un vecteur nul).

> [!NOTE] **Méthode - Passer d’équations à une famille génératrice**
>
> Pour écrire sous la forme \(\operatorname{Vect}\) un sous-espace défini par des équations, on résout le système : les inconnues secondaires servent de paramètres, et l’on met chacune en facteur.

{{% details title="Exemple" closed="true" %}}
Reprenons \({F = \{(x, y, z) \in \mathbb{R}^3,\ x - 2y + 3z = 0\}}\). L’équation donne \({x = 2y - 3z}\), donc

\[
(x, y, z) \in F \iff (x, y, z) = (2y - 3z,\ y,\ z) = y(2, 1, 0) + z(-3, 0, 1).
\]

Ainsi \({F = \operatorname{Vect}\big((2, 1, 0),\ (-3, 0, 1)\big)}\). Cela redémontre au passage que \(F\) est un sous-espace vectoriel.
{{% /details %}}

> [!NOTE] **Exercice résolu - Sous-espaces de fonctions et de suites**
>
> 1. Montrer que l’ensemble \(\mathcal{P}\) des fonctions paires de \(\mathbb{R}\) dans \(\mathbb{R}\) est un sous-espace vectoriel de \(\mathcal{F}(\mathbb{R}, \mathbb{R})\).
> 2. L’ensemble des suites réelles croissantes est-il un sous-espace vectoriel de \(\mathbb{R}^{\mathbb{N}}\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** La fonction nulle est paire. Soient \(f\), \(g\) deux fonctions paires et \(\lambda\) un réel. Pour tout réel \(x\) :

\[
(\lambda f + g)(-x) = \lambda f(-x) + g(-x) = \lambda f(x) + g(x) = (\lambda f + g)(x).
\]

Donc \({\lambda f + g}\) est paire : \(\mathcal{P}\) est un sous-espace vectoriel.

**2.** Non. La suite \({(u_n) = (n)}\) est croissante, mais \({(-1)(u_n) = (-n)}\) est strictement décroissante, donc n’est pas croissante. L’ensemble n’est pas stable par multiplication par un scalaire.
{{% /details %}}
