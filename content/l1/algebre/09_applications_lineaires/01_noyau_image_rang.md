---
title: 'Noyau, image, théorème du rang'
weight: 1
cascade:
  type: docs
---

Dans ce chapitre, \(E\), \(F\), \(G\) sont des \(\mathbb{K}\)-espaces vectoriels.

## Applications linéaires

> [!TIP] **Définition**
>
> Une application \({f : E \to F}\) est **linéaire** si, pour tous \({u, v \in E}\) et tout \({\lambda \in \mathbb{K}}\) :
>
> \[ f(u + v) = f(u) + f(v) \qquad \text{et} \qquad f(\lambda u) = \lambda f(u), \]
>
> ce qui équivaut à \({f(\lambda u + v) = \lambda f(u) + f(v)}\). L’ensemble des applications linéaires de \(E\) dans \(F\) est noté \(\mathcal{L}(E, F)\).
>
> - Un **endomorphisme** de \(E\) est une application linéaire de \(E\) dans \(E\) ; leur ensemble est noté \(\mathcal{L}(E)\).
> - Un **isomorphisme** est une application linéaire bijective.
> - Un **automorphisme** est un endomorphisme bijectif ; leur ensemble est noté \(\mathrm{GL}(E)\).
> - Une **forme linéaire** est une application linéaire de \(E\) dans \(\mathbb{K}\).

> [!TIP] **Propriétés**
>
> - Si \(f\) est linéaire, \({f(0_E) = 0_F}\) et \({f\left(\displaystyle\sum_{i} \lambda_i u_i\right) = \displaystyle\sum_{i} \lambda_i f(u_i)}\).
> - \(\mathcal{L}(E, F)\) est un espace vectoriel : une combinaison linéaire d’applications linéaires est linéaire.
> - La composée de deux applications linéaires est linéaire.
> - La réciproque d’un isomorphisme est un isomorphisme.

{{% details title="Exemple" closed="true" %}}
- \({f : \mathbb{R}^3 \to \mathbb{R}^2}\), \({(x, y, z) \mapsto (x + 2y,\ y - z)}\) est linéaire.
- La dérivation \({D : \mathbb{K}[X] \to \mathbb{K}[X]}\), \({P \mapsto P'}\) est un endomorphisme.
- \({\varphi : f \mapsto \displaystyle\int_0^1 f(t)\,\mathrm{d}t}\) est une forme linéaire sur l’espace des fonctions continues sur \([0, 1]\).
- \({g : \mathbb{R}^2 \to \mathbb{R}^2}\), \({(x, y) \mapsto (x + 1,\ y)}\) n’est pas linéaire : \({g(0, 0) \neq (0, 0)}\).
- \({h : \mathbb{R} \to \mathbb{R}}\), \({x \mapsto x^2}\) n’est pas linéaire : \({h(2) = 4 \neq 2h(1)}\).
{{% /details %}}

## Noyau et image

> [!TIP] **Définition**
>
> Soit \({f \in \mathcal{L}(E, F)}\).
> - Le **noyau** de \(f\) est \({\ker f = \{u \in E,\ f(u) = 0_F\} = f^{-1}(\{0_F\})}\).
> - L’**image** de \(f\) est \({\operatorname{Im} f = \{f(u),\ u \in E\} = f(E)}\).

> [!TIP] **Théorème**
>
> - \(\ker f\) est un sous-espace vectoriel de \(E\) et \(\operatorname{Im} f\) est un sous-espace vectoriel de \(F\). Plus généralement, l’image directe et l’image réciproque d’un sous-espace par une application linéaire sont des sous-espaces.
> - \(f\) est **injective** si et seulement si \({\ker f = \{0_E\}}\).
> - \(f\) est **surjective** si et seulement si \({\operatorname{Im} f = F}\).

{{% details title="Démonstration" closed="true" %}}
Pour l’injectivité. Si \(f\) est injective et \({u \in \ker f}\), alors \({f(u) = 0_F = f(0_E)}\), donc \({u = 0_E}\). Réciproquement, si \({\ker f = \{0_E\}}\) et \({f(u) = f(v)}\), alors par linéarité \({f(u - v) = 0_F}\), donc \({u - v \in \ker f}\) et \({u = v}\).
{{% /details %}}

> [!TIP] **Propriétés - Image d’une famille**
>
> Soit \({f \in \mathcal{L}(E, F)}\) et \({(e_1, \dots, e_n)}\) une famille de vecteurs de \(E\).
> - Si \({(e_1, \dots, e_n)}\) engendre \(E\), alors \({(f(e_1), \dots, f(e_n))}\) engendre \(\operatorname{Im} f\).
> - Si \(f\) est injective et \({(e_1, \dots, e_n)}\) libre, alors \({(f(e_1), \dots, f(e_n))}\) est libre.
> - Si \({(e_1, \dots, e_n)}\) est une base de \(E\) : \(f\) est un isomorphisme si et seulement si \({(f(e_1), \dots, f(e_n))}\) est une base de \(F\).

> [!TIP] **Théorème - Détermination par l’image d’une base**
>
> Soit \({(e_1, \dots, e_n)}\) une base de \(E\) et \({(v_1, \dots, v_n)}\) une famille quelconque de vecteurs de \(F\). Il existe une unique application linéaire \({f : E \to F}\) telle que \({f(e_i) = v_i}\) pour tout \(i\).

> [!TIP] **Conséquence**
>
> Deux espaces de dimension finie sont isomorphes si et seulement s’ils ont la même dimension. En particulier, tout \(\mathbb{K}\)-espace vectoriel de dimension \(n\) est isomorphe à \(\mathbb{K}^n\).

## Théorème du rang

> [!TIP] **Définition**
>
> Si \(\operatorname{Im} f\) est de dimension finie, le **rang** de \(f\) est \({\operatorname{rg} f = \dim \operatorname{Im} f}\).

> [!TIP] **Théorème du rang**
>
> Soit \({f \in \mathcal{L}(E, F)}\) avec \(E\) de dimension finie. Alors
>
> \[ \dim E = \dim \ker f + \operatorname{rg} f. \]

{{% details title="Démonstration" closed="true" %}}
Soit \(S\) un supplémentaire de \(\ker f\) dans \(E\), et \({g : S \to \operatorname{Im} f}\) la restriction de \(f\) à \(S\).

- \(g\) est injective : \({\ker g = S \cap \ker f = \{0_E\}}\).
- \(g\) est surjective : si \({w = f(u) \in \operatorname{Im} f}\), on écrit \({u = k + s}\) avec \({k \in \ker f}\) et \({s \in S}\), et \({w = f(k) + f(s) = g(s)}\).

Donc \(g\) est un isomorphisme et \({\dim S = \dim \operatorname{Im} f}\). Or \({\dim S = \dim E - \dim \ker f}\).
{{% /details %}}

> [!TIP] **Théorème**
>
> Soit \({f \in \mathcal{L}(E, F)}\) avec \({\dim E = \dim F}\) finie (c’est le cas pour un endomorphisme en dimension finie). Alors
>
> \[ f \text{ injective} \iff f \text{ surjective} \iff f \text{ bijective}. \]

{{% details title="Démonstration" closed="true" %}}
D’après le théorème du rang, \({\dim \ker f = 0}\) équivaut à \({\operatorname{rg} f = \dim E = \dim F}\), c’est-à-dire à \({\operatorname{Im} f = F}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Ce résultat est faux en dimension infinie : sur \(\mathbb{K}[X]\), la dérivation est surjective mais non injective (son noyau est l’ensemble des polynômes constants), et \({P \mapsto XP}\) est injective mais non surjective.

> [!NOTE] **Méthode - Déterminer noyau et image**
>
> - **Noyau** : on résout l’équation \({f(u) = 0_F}\), qui est un système linéaire homogène.
> - **Image** : on calcule les images des vecteurs d’une base, qui engendrent \(\operatorname{Im} f\), puis on en extrait une base. Le théorème du rang donne à l’avance la dimension à trouver.

> [!NOTE] **Exercice résolu - Un endomorphisme de \(\mathbb{R}^3\)**
>
> Soit \(f\) l’endomorphisme de \(\mathbb{R}^3\) défini par \({f(x, y, z) = (x + y - z,\ 2x + y + z,\ x + 2z)}\). Déterminer une base de \(\ker f\) et une base de \(\operatorname{Im} f\). Ces deux sous-espaces sont-ils supplémentaires ?

{{% details title="Solution commentée" closed="true" %}}
**Noyau.**

\[
\begin{cases} x + y - z = 0 \\ 2x + y + z = 0 \\ x + 2z = 0 \end{cases}
\iff
\begin{cases} x + y - z = 0 \\ -y + 3z = 0 \\ -y + 3z = 0 \end{cases}
\iff
\begin{cases} x = -2z \\ y = 3z \end{cases}
\]

(on a fait \({L_2 \leftarrow L_2 - 2L_1}\) et \({L_3 \leftarrow L_3 - L_1}\)). Donc \({\ker f = \operatorname{Vect}\big((-2, 3, 1)\big)}\), de dimension \(1\). Vérification : \({f(-2, 3, 1) = (-2 + 3 - 1,\ -4 + 3 + 1,\ -2 + 2) = (0, 0, 0)}\).

**Image.** D’après le théorème du rang, \({\operatorname{rg} f = 3 - 1 = 2}\). L’image est engendrée par \({f(e_1) = (1, 2, 1)}\), \({f(e_2) = (1, 1, 0)}\) et \({f(e_3) = (-1, 1, 2)}\). Les deux premiers ne sont pas colinéaires : ils forment une famille libre de deux vecteurs dans un espace de dimension \(2\). Donc \({\big((1, 2, 1),\ (1, 1, 0)\big)}\) est une base de \(\operatorname{Im} f\).

**Supplémentaires ?** Comme \({\dim \ker f + \dim \operatorname{Im} f = 3}\), il suffit de vérifier si \({\ker f \cap \operatorname{Im} f = \{0\}}\), c’est-à-dire si \({(-2, 3, 1)}\) n’appartient pas à \(\operatorname{Im} f\). Cherchons \(a\), \(b\) tels que \({a(1, 2, 1) + b(1, 1, 0) = (-2, 3, 1)}\) : la troisième coordonnée donne \({a = 1}\), la première \({b = -3}\), et la deuxième donne alors \({2 - 3 = -1 \neq 3}\). C’est impossible.

Donc \({\ker f \cap \operatorname{Im} f = \{0\}}\) et \({\mathbb{R}^3 = \ker f \oplus \operatorname{Im} f}\).
{{% /details %}}
