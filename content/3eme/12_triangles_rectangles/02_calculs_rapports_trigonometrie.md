---
title: 'Calculer des rapports trigonométriques'
weight: 2
cascade:
  type: docs
---

## Cosinus, sinus et tangente

Dans un triangle rectangle, on repère, pour un angle aigu donné, l’**hypoténuse**, le **côté adjacent** à cet angle et le **côté opposé** à cet angle.

![](/images/image456.png)

> [!TIP] **Propriété et définitions**
>
> Dans un triangle \(ABC\) rectangle en \(B\), les rapports \(\dfrac{AB}{AC}\), \(\dfrac{BC}{AC}\) et \(\dfrac{BC}{AB}\) ne dépendent que de la mesure de l’angle \(\widehat{A}\). On les appelle respectivement **cosinus**, **sinus** et **tangente** de l’angle \(\widehat{A}\), notés \(\cos \widehat{A}\), \(\sin \widehat{A}\) et \(\tan \widehat{A}\) :
> \[
\cos \widehat{A} = \frac{\text{côté adjacent à } \widehat{A}}{\text{hypoténuse}} = \frac{AB}{AC}, \qquad \sin \widehat{A} = \frac{\text{côté opposé à } \widehat{A}}{\text{hypoténuse}} = \frac{BC}{AC},
\]
> \[
\tan \widehat{A} = \frac{\text{côté opposé à } \widehat{A}}{\text{côté adjacent à } \widehat{A}} = \frac{BC}{AB}.
\]

> [!IMPORTANT] **Remarque**
>
> Pour retenir ces formules, on peut utiliser le moyen mnémotechnique **SOH CAH TOA** : **S**inus = **O**pposé / **H**ypoténuse, **C**osinus = **A**djacent / **H**ypoténuse, **T**angente = **O**pposé / **A**djacent.

{{% details title="Exemple" closed="true" %}}
Le triangle \(DEF\) est rectangle en \(E\), avec \(\widehat{D} = 50^\circ\). Pour l’angle \(\widehat{D}\), l’hypoténuse est \([DF]\), le côté adjacent est \([DE]\) et le côté opposé est \([EF]\) :
\[
\cos 50^\circ = \frac{DE}{DF}, \qquad \sin 50^\circ = \frac{EF}{DF}, \qquad \tan 50^\circ = \frac{EF}{DE}.
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Le cosinus, le sinus et la tangente d’un angle sont des quotients de longueurs : ils n’ont **pas d’unité**.

## Propriétés

> [!TIP] **Propriétés**
>
> Pour tout angle aigu \(\widehat{A}\) :
> - le cosinus et le sinus de \(\widehat{A}\) sont des nombres strictement compris entre \(0\) et \(1\) ;
> - la tangente de \(\widehat{A}\) est un nombre strictement positif ;
> - \((\cos \widehat{A})^2 + (\sin \widehat{A})^2 = 1\) (on note aussi \(\cos^2 \widehat{A} + \sin^2 \widehat{A} = 1\)) ;
> - \(\tan \widehat{A} = \dfrac{\sin \widehat{A}}{\cos \widehat{A}}\).

> [!IMPORTANT] **Remarque**
>
> Ces deux dernières égalités se démontrent avec les définitions : \(\cos^2 \widehat{A} + \sin^2 \widehat{A} = \dfrac{AB^2 + BC^2}{AC^2} = \dfrac{AC^2}{AC^2} = 1\) d’après le théorème de Pythagore, et \(\dfrac{\sin \widehat{A}}{\cos \widehat{A}} = \dfrac{BC}{AC} \times \dfrac{AC}{AB} = \dfrac{BC}{AB} = \tan \widehat{A}\).

> [!NOTE] **Exercice résolu**
>
> Le triangle \(RST\) est rectangle en \(S\), avec \(RS = 8\) cm, \(ST = 6\) cm et \(RT = 10\) cm.
> 1. Calculer \(\cos \widehat{R}\), \(\sin \widehat{R}\) et \(\tan \widehat{R}\).
> 2. Vérifier que \(\cos^2 \widehat{R} + \sin^2 \widehat{R} = 1\).

{{% details title="Solution commentée" closed="true" %}}
1. Pour l’angle \(\widehat{R}\) : hypoténuse \([RT]\), côté adjacent \([RS]\), côté opposé \([ST]\).
\[
\cos \widehat{R} = \frac{8}{10} = 0{,}8, \qquad \sin \widehat{R} = \frac{6}{10} = 0{,}6, \qquad \tan \widehat{R} = \frac{6}{8} = 0{,}75.
\]
2. \(0{,}8^2 + 0{,}6^2 = 0{,}64 + 0{,}36 = 1\). On vérifie aussi que \(\dfrac{0{,}6}{0{,}8} = 0{,}75 = \tan \widehat{R}\).
{{% /details %}}
