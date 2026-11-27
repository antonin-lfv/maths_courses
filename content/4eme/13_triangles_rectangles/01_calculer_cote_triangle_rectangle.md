---
title: 'Calculer la longueur d’un côté d’un triangle rectangle'
weight: 1
cascade:
  type: docs
---

## Hypoténuse

> [!TIP] **Définition et propriété**
>
> Dans un triangle rectangle, le côté opposé à l’angle droit est le plus long des trois côtés. On l’appelle l’**hypoténuse** du triangle.

{{% details title="Exemple" closed="true" %}}
Le triangle \(KLM\) est rectangle en \(L\). L’angle droit est en \(L\) ; le côté qui lui fait face est \([KM]\) : c’est l’hypoténuse, et c’est le plus long côté de \(KLM\).
{{% /details %}}

## Théorème de Pythagore

> [!TIP] **Théorème de Pythagore**
>
> Si un triangle est rectangle, alors le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.
>
> Autrement dit, si \(ABC\) est rectangle en \(A\), alors
> \[
BC^2 = AB^2 + AC^2.
\]
> Cette égalité est appelée **égalité de Pythagore**.

On peut l’interpréter avec des aires : l’aire du carré construit sur l’hypoténuse est égale à la somme des aires des carrés construits sur les deux autres côtés. Pour le triangle de côtés 3, 4 et 5 ci-dessous : \(25 = 9 + 16\).

![](/images/image437.png)

> [!IMPORTANT] **Remarque**
>
> Dans un triangle rectangle, dès que l’on connait les longueurs de deux côtés, l’égalité de Pythagore permet de calculer la longueur du troisième.

## Calculer une longueur

> [!NOTE] **Méthode — Calculer l’hypoténuse ou un autre côté**
>
> 1. On repère l’angle droit et donc l’hypoténuse.
> 2. On écrit l’égalité de Pythagore : (hypoténuse)² = somme des carrés des deux autres côtés.
> 3. On remplace les longueurs connues et on calcule le carré de la longueur cherchée.
> 4. On en déduit la longueur (nombre positif dont le carré est connu).

{{% details title="Exemple 1 — calcul de l’hypoténuse" closed="true" %}}
\(RST\) est rectangle en \(S\), avec \(RS = 6\) cm et \(ST = 8\) cm. L’hypoténuse est \([RT]\). D’après le théorème de Pythagore :
\[
RT^2 = RS^2 + ST^2 = 6^2 + 8^2 = 36 + 64 = 100.
\]
Comme \(10^2 = 100\), on obtient \(RT = 10\) cm.
{{% /details %}}

{{% details title="Exemple 2 — calcul d’un autre côté" closed="true" %}}
\(DEF\) est rectangle en \(E\), avec \(DF = 13\) cm et \(DE = 5\) cm. L’hypoténuse est \([DF]\). D’après le théorème de Pythagore :
\[
DF^2 = DE^2 + EF^2, \qquad 13^2 = 5^2 + EF^2, \qquad 169 = 25 + EF^2.
\]
Donc \(EF^2 = 169 - 25 = 144\). Comme \(12^2 = 144\), \(EF = 12\) cm.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Une échelle de \(2{,}5\) m est posée contre un mur vertical. Son pied est à \(0{,}7\) m du mur, sur un sol horizontal. À quelle hauteur le haut de l’échelle touche-t-il le mur ?

{{% details title="Solution commentée" closed="true" %}}
Le mur, le sol et l’échelle forment un triangle rectangle (le mur est perpendiculaire au sol) dont l’hypoténuse est l’échelle, de longueur \(2{,}5\) m. Notons \(h\) la hauteur cherchée. D’après le théorème de Pythagore :
\[
2{,}5^2 = 0{,}7^2 + h^2, \qquad 6{,}25 = 0{,}49 + h^2, \qquad h^2 = 5{,}76.
\]
Comme \(2{,}4^2 = 5{,}76\), on obtient \(h = 2{,}4\) m.
{{% /details %}}
