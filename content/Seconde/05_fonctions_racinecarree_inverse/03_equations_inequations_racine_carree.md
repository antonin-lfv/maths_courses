---
title: 'Équations et inéquations (racine carrée)'
weight: 3
cascade:
  type: docs
---

## Équation √x = c

> [!TIP] **Propriété**
>
> Soit \(c\) un nombre réel. Dans \({[0\,;\,+\infty[}\), l’équation \({\sqrt{x} = c}\) :
> - n’a **aucune solution** si \({c < 0}\) (une racine carrée est toujours positive) ;
> - a **une unique solution**, \({x = c^2}\), si \({c \geq 0}\).

{{% details title="Démonstration (cas c ≥ 0)" closed="true" %}}
Si \({x = c^2}\), alors \({\sqrt{x} = \sqrt{c^2} = |c| = c}\). Réciproquement, si \({\sqrt{x} = c}\), alors en élevant au carré \({x = \left(\sqrt{x}\right)^2 = c^2}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\({\sqrt{x} = 7 \iff x = 49}\) ; \({\sqrt{x} = 0{,}3 \iff x = 0{,}09}\) ; \({\sqrt{x} = -2}\) n’a pas de solution.
{{% /details %}}

## Inéquations √x < c et √x > c

> [!TIP] **Propriété**
>
> Soit \(c\) un nombre réel.
> - Si \({c > 0}\), l’ensemble des solutions de \({\sqrt{x} < c}\) est \([0\,;\,c^2[\), et celui de \({\sqrt{x} > c}\) est \({]c^2\,;\,+\infty[}\).
> - Si \({c \leq 0}\), l’inéquation \({\sqrt{x} < c}\) n’a aucune solution.
> - Si \({c < 0}\), tout réel \({x \geq 0}\) vérifie \({\sqrt{x} > c}\).
>
> Avec des inégalités larges, on ferme les crochets en \(c^2\).

{{% details title="Démonstration (cas c > 0)" closed="true" %}}
La fonction racine carrée est strictement croissante sur \({[0\,;\,+\infty[}\) et \({c = \sqrt{c^2}}\). Pour \({x \geq 0}\) : \({\sqrt{x} < \sqrt{c^2} \iff x < c^2}\). Comme \(x\) doit être positif, \({\mathcal{S} = [0\,;\,c^2[}\). De même pour \({\sqrt{x} > c}\).
{{% /details %}}

Graphiquement, on lit les abscisses des points de la courbe \({y = \sqrt{x}}\) situés sous (ou au-dessus de) la droite d’équation \({y = c}\). Avec \({c = 2}\), la courbe est sous la droite pour \({0 \leq x < 4}\) :

![](/images/image380.png)

{{% details title="Exemple" closed="true" %}}
- \({\sqrt{x} \leq 1{,}5 \iff 0 \leq x \leq 2{,}25}\) : \({\mathcal{S} = [0\,;\,2{,}25]}\).
- \({\sqrt{x} > 10 \iff x > 100}\) : \({\mathcal{S} = ]100\,;\,+\infty[}\).
- \({\sqrt{x} > -1}\) : \({\mathcal{S} = [0\,;\,+\infty[}\) ; \({\sqrt{x} < 0}\) : \({\mathcal{S} = \varnothing}\).
{{% /details %}}

## Résoudre

> [!NOTE] **Méthode 1 - Résoudre une équation avec une racine carrée**
>
> Résoudre l’équation \({\sqrt{2x - 1} = 3}\).

{{% details title="Solution commentée" closed="true" %}}
L’expression \({\sqrt{2x - 1}}\) n’existe que si \({2x - 1 \geq 0}\), c’est-à-dire \({x \geq \dfrac{1}{2}}\). Pour ces valeurs, comme \({3 \geq 0}\) :
\[
\sqrt{2x - 1} = 3 \iff 2x - 1 = 9 \iff x = 5.
\]
\({5 \geq \dfrac{1}{2}}\), donc \({\mathcal{S} = \{5\}}\). Vérification : \({\sqrt{10 - 1} = \sqrt{9} = 3}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Résoudre un problème avec une inéquation**
>
> On admet que la période \(T\) (en secondes) des oscillations d’un pendule de longueur \(L\) (en mètres) est donnée, en première approximation, par \({T = 2\sqrt{L}}\). Quelles longueurs donnent une période inférieure à \(3\) secondes ?

{{% details title="Solution commentée" closed="true" %}}
\[
2\sqrt{L} < 3 \iff \sqrt{L} < 1{,}5 \iff 0 \leq L < 1{,}5^2 = 2{,}25.
\]
La période est inférieure à \(3\) s pour un pendule de longueur strictement inférieure à \(2{,}25\) m.
{{% /details %}}
