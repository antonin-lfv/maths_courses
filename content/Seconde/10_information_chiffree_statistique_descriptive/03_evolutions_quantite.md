---
title: 'Évolutions successives et réciproques'
weight: 3
cascade:
  type: docs
---

## Évolutions successives

> [!TIP] **Propriété et définition**
>
> Si une grandeur subit deux évolutions successives de coefficients multiplicateurs \(CM_1\) puis \(CM_2\), alors l’évolution globale a pour coefficient multiplicateur
> \[
CM_G = CM_1 \times CM_2.
\]
> Le **taux d’évolution global** est \({t_G = CM_G - 1}\). Ce résultat se généralise à un nombre quelconque d’évolutions successives.

{{% details title="Démonstration" closed="true" %}}
Si \(V_0\) devient \({V_1 = CM_1 \times V_0}\), puis \(V_1\) devient \({V_2 = CM_2 \times V_1}\), alors \({V_2 = CM_2 \times CM_1 \times V_0}\). Le coefficient multiplicateur global est donc \({CM_1 \times CM_2}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les taux **ne s’additionnent pas** : une hausse de \(10\,\%\) suivie d’une baisse de \(10\,\%\) donne \({CM_G = 1{,}1 \times 0{,}9 = 0{,}99}\), soit une **baisse** globale de \(1\,\%\), et non une évolution nulle.

{{% details title="Exemple" closed="true" %}}
Un prix augmente de \(5\,\%\) trois années de suite. \({CM_G = 1{,}05^3 = 1{,}157\,625}\) : le prix a augmenté d’environ \(15{,}8\,\%\) en trois ans (et non de \(15\,\%\)).
{{% /details %}}

## Évolution réciproque

> [!TIP] **Propriété et définition**
>
> Si une évolution fait passer \(V_0\) à \(V_1\) avec un coefficient multiplicateur \(CM\), l’**évolution réciproque**, qui fait revenir de \(V_1\) à \(V_0\), a pour coefficient multiplicateur
> \[
CM' = \dfrac{1}{CM}.
\]
> Son taux est \({t' = \dfrac{1}{CM} - 1}\).

{{% details title="Démonstration" closed="true" %}}
\({V_1 = CM \times V_0 \iff V_0 = \dfrac{1}{CM} \times V_1}\) (on a \({CM > 0}\)).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Après une hausse de \(25\,\%\) (\({CM = 1{,}25}\)), il faut une baisse de taux \({t' = \dfrac{1}{1{,}25} - 1 = 0{,}8 - 1 = -0{,}2}\), soit \(20\,\%\), pour revenir à la valeur initiale.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le taux réciproque d’une hausse de \(a\,\%\) n’est pas une baisse de \(a\,\%\) : une baisse de \(50\,\%\) se compense par une hausse de \(100\,\%\).

## Enchaîner des évolutions

> [!NOTE] **Méthode 1 - Calculer un taux global**
>
> Le prix d’un article augmente de \(12\,\%\), puis baisse de \(20\,\%\) lors des soldes, puis augmente de \(5\,\%\). Déterminer le taux d’évolution global.

{{% details title="Solution commentée" closed="true" %}}
\({CM_G = 1{,}12 \times 0{,}80 \times 1{,}05 = 0{,}940\,8}\). Donc \({t_G = 0{,}940\,8 - 1 = -0{,}059\,2}\) : globalement, le prix a baissé d’environ \(5{,}9\,\%\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Compenser une évolution**
>
> La fréquentation d’un musée a chuté de \(36\,\%\) pendant une année de travaux. De quel pourcentage doit-elle augmenter l’année suivante pour retrouver son niveau initial ?

{{% details title="Solution commentée" closed="true" %}}
\({CM = 1 - 0{,}36 = 0{,}64}\). L’évolution réciproque a pour coefficient \({CM' = \dfrac{1}{0{,}64} = 1{,}562\,5}\), soit un taux \({t' = 0{,}562\,5}\). La fréquentation doit augmenter de \(56{,}25\,\%\).
{{% /details %}}
