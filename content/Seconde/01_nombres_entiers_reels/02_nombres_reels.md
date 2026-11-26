---
title: 'Nombres réels'
weight: 2
cascade:
  type: docs
---

## Les ensembles de nombres

> [!TIP] **Définitions**
>
> - L’ensemble des **entiers naturels** \(\{0\,;\,1\,;\,2\,;\,3\,;\,\dots\}\) est noté \(\mathbb{N}\).
> - L’ensemble des **entiers relatifs** \(\{\dots\,;\,-2\,;\,-1\,;\,0\,;\,1\,;\,2\,;\,\dots\}\) est noté \(\mathbb{Z}\).
> - Un **nombre décimal** est un nombre qui peut s’écrire sous la forme \(\dfrac{a}{10^n}\), avec \(a \in \mathbb{Z}\) et \(n \in \mathbb{N}\). L’ensemble des nombres décimaux est noté \(\mathbb{D}\).
> - Un **nombre rationnel** est un nombre qui peut s’écrire sous la forme \(\dfrac{p}{q}\), avec \(p \in \mathbb{Z}\) et \(q \in \mathbb{N}^*\). L’ensemble des nombres rationnels est noté \(\mathbb{Q}\).
> - L’ensemble des abscisses de tous les points d’une droite graduée est l’ensemble des **nombres réels**, noté \(\mathbb{R}\). Cette droite graduée est appelée **droite numérique**.
> - Un nombre réel qui n’est pas rationnel est dit **irrationnel**.

> [!IMPORTANT] **Notations**
>
> - \(x \in E\) se lit « \(x\) appartient à \(E\) » ; \(x \notin E\) se lit « \(x\) n’appartient pas à \(E\) ».
> - Une étoile signifie qu’on enlève \(0\) : \(\mathbb{N}^*\) est l’ensemble des entiers naturels non nuls, \(\mathbb{R}^*\) celui des réels non nuls.
> - Les accolades \(\{\ \}\) servent à écrire un ensemble en énumérant ses éléments.

{{% details title="Exemple" closed="true" %}}
- \(-12 \in \mathbb{Z}\) mais \(-12 \notin \mathbb{N}\).
- \(-3{,}07 = \dfrac{-307}{10^2}\), donc \(-3{,}07 \in \mathbb{D}\). De même \(\dfrac{7}{25} = \dfrac{28}{100} = 0{,}28 \in \mathbb{D}\).
- \(\dfrac{5}{6} \in \mathbb{Q}\) ; \(0{,}4 = \dfrac{2}{5} \in \mathbb{Q}\) ; \(-9 = \dfrac{-9}{1} \in \mathbb{Q}\).
- \(\sqrt{3}\), \(\sqrt{2}\) et \(\pi\) sont des réels irrationnels.
{{% /details %}}

> [!TIP] **Propriété**
>
> Chacun de ces ensembles est contenu dans le suivant :
> \[
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}.
\]
> Le symbole \(\subset\) se lit « est inclus dans ».

Le schéma suivant représente ces inclusions, avec quelques nombres placés dans le plus petit ensemble qui les contient :

![](/images/image360.png)

> [!IMPORTANT] **Remarque**
>
> Les inclusions sont strictes : il existe des entiers relatifs qui ne sont pas naturels (\(-1\)), des décimaux non entiers (\(0{,}5\)), des rationnels non décimaux (\(\frac{1}{3}\), démontré ci-dessous) et des réels non rationnels (\(\sqrt{2}\), démontré ci-dessous).

## Deux démonstrations

> [!TIP] **Propriété**
>
> Le nombre rationnel \(\dfrac{1}{3}\) n’est pas un nombre décimal.

{{% details title="Démonstration (par l’absurde)" closed="true" %}}
Supposons que \(\dfrac{1}{3}\) soit décimal : il existerait \(a \in \mathbb{Z}\) et \(n \in \mathbb{N}\) tels que \(\dfrac{1}{3} = \dfrac{a}{10^n}\), c’est-à-dire
\[
10^n = 3a.
\]
Alors \(10^n\) serait un multiple de \(3\). Or l’écriture de \(10^n\) est un \(1\) suivi de \(n\) zéros : la somme de ses chiffres vaut \(1\), qui n’est pas un multiple de \(3\). Donc \(10^n\) n’est pas divisible par \(3\) : c’est une contradiction.

Ainsi \(\dfrac{1}{3}\) n’est pas décimal.
{{% /details %}}

> [!TIP] **Propriété**
>
> Le nombre \(\sqrt{2}\) est irrationnel.

{{% details title="Démonstration (par l’absurde)" closed="true" %}}
Supposons que \(\sqrt{2}\) soit rationnel : on pourrait l’écrire sous forme d’une fraction **irréductible** \(\sqrt{2} = \dfrac{p}{q}\), avec \(p \in \mathbb{N}\) et \(q \in \mathbb{N}^*\).

En élevant au carré : \(2 = \dfrac{p^2}{q^2}\), donc \(p^2 = 2q^2\). Ainsi \(p^2\) est pair, donc \(p\) est pair (le carré d’un nombre impair est impair). Il existe donc \(k \in \mathbb{N}\) tel que \(p = 2k\).

Alors \(4k^2 = 2q^2\), soit \(q^2 = 2k^2\) : \(q^2\) est pair, donc \(q\) est pair.

\(p\) et \(q\) sont tous deux pairs : la fraction \(\dfrac{p}{q}\) peut être simplifiée par \(2\), ce qui contredit le fait qu’elle soit irréductible. Donc \(\sqrt{2}\) est irrationnel.
{{% /details %}}

## Encadrement et arrondi

> [!TIP] **Définitions**
>
> - **Encadrer** un nombre réel \(x\), c’est trouver deux nombres \(a\) et \(b\) tels que \(a < x < b\) (ou avec des inégalités larges). La différence \(b - a\) est l’**amplitude** de l’encadrement.
> - **Arrondir** un nombre réel \(x\) à \(10^{-n}\) près, c’est donner le nombre ayant au plus \(n\) chiffres après la virgule qui est le plus proche de \(x\).

{{% details title="Exemple" closed="true" %}}
- \(4{,}7 < \dfrac{33}{7} < 4{,}8\) est un encadrement de \(\dfrac{33}{7} \approx 4{,}714\) d’amplitude \(10^{-1}\).
- L’arrondi de \(\dfrac{33}{7}\) à \(10^{-2}\) près est \(4{,}71\) ; son arrondi à l’unité est \(5\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Une calculatrice n’affiche qu’un nombre limité de chiffres : pour un nombre irrationnel (ou un rationnel non décimal), la valeur affichée est une valeur **approchée**, jamais la valeur exacte. On écrit alors \(\approx\) et non \(=\).

> [!NOTE] **Méthode — Encadrer et arrondir un nombre réel**
>
> Un rectangle a pour côtés \(2\) cm et \(3\) cm.
> 1. Donner la valeur exacte de la longueur \(d\) de sa diagonale.
> 2. Donner un encadrement de \(d\) d’amplitude \(10^{-3}\), puis d’amplitude \(10^{-4}\).
> 3. Donner l’arrondi de \(d\) au millième, puis à \(10^{-4}\) près.

{{% details title="Solution commentée" closed="true" %}}
1. La diagonale est l’hypoténuse d’un triangle rectangle de côtés \(2\) et \(3\). D’après le théorème de Pythagore, \(d^2 = 2^2 + 3^2 = 13\), donc \(d = \sqrt{13}\) cm (valeur exacte).
2. La calculatrice affiche \(\sqrt{13} \approx 3{,}605\,551\,275\). On en déduit
\[
3{,}605 < \sqrt{13} < 3{,}606 \quad (\text{amplitude } 10^{-3}), \qquad 3{,}605\,5 < \sqrt{13} < 3{,}605\,6 \quad (\text{amplitude } 10^{-4}).
\]
3. Au millième : le chiffre des dix-millièmes est \(5\), donc on arrondit « au-dessus » : \(d \approx 3{,}606\) cm. À \(10^{-4}\) près : \(3{,}605\,551\dots\) est plus proche de \(3{,}605\,6\) que de \(3{,}605\,5\), donc \(d \approx 3{,}605\,6\) cm.
{{% /details %}}
