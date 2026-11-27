---
title: 'Utiliser l’égalité de Pythagore'
weight: 1
cascade:
  type: docs
---

## Racine carrée

> [!TIP] **Définition**
>
> La **racine carrée** d’un nombre positif \(a\) est le nombre positif dont le carré est égal à \(a\). Elle est notée \(\sqrt{a}\) et se lit « racine carrée de \(a\) ».

{{% details title="Exemples" closed="true" %}}
\(\sqrt{64} = 8\) car \(8^2 = 64\) et \(8 \geq 0\) ; \(\sqrt{30} \approx 5{,}477\) (valeur approchée au millième, à la calculatrice).
{{% /details %}}

## Théorème de Pythagore

> [!TIP] **Théorème de Pythagore**
>
> Si un triangle est rectangle, alors le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.
>
> Autrement dit, si le triangle \(ABC\) est rectangle en \(A\), alors \(BC^2 = AB^2 + AC^2\). Cette égalité est appelée **égalité de Pythagore**.

![](/images/image437.png)

{{% details title="Exemple 1 — calculer l’hypoténuse" closed="true" %}}
Le triangle \(TUV\) est rectangle en \(U\), avec \(TU = 2{,}8\) cm et \(UV = 4{,}5\) cm. D’après le théorème de Pythagore :
\[
TV^2 = TU^2 + UV^2 = 2{,}8^2 + 4{,}5^2 = 7{,}84 + 20{,}25 = 28{,}09.
\]
Donc \(TV = \sqrt{28{,}09} = 5{,}3\) cm.
{{% /details %}}

{{% details title="Exemple 2 — calculer un côté de l’angle droit" closed="true" %}}
Le triangle \(KLM\) est rectangle en \(L\), avec \(KM = 6{,}1\) cm et \(KL = 1{,}1\) cm. D’après le théorème de Pythagore :
\[
KM^2 = KL^2 + LM^2, \qquad 37{,}21 = 1{,}21 + LM^2, \qquad LM^2 = 36.
\]
Donc \(LM = \sqrt{36} = 6\) cm.
{{% /details %}}

## Réciproque du théorème de Pythagore

> [!TIP] **Théorème (réciproque du théorème de Pythagore)**
>
> Dans un triangle, si le carré de la longueur d’un côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est rectangle (l’angle droit est opposé à ce côté).

> [!NOTE] **Méthode — Savoir si un triangle est rectangle**
>
> Soit \(ABC\) un triangle dont le plus grand côté est \([BC]\). On calcule séparément \(BC^2\) et \(AB^2 + AC^2\).
> - Si \(BC^2 = AB^2 + AC^2\), alors le triangle \(ABC\) est rectangle en \(A\) (réciproque du théorème de Pythagore).
> - Si \(BC^2 \neq AB^2 + AC^2\), alors le triangle \(ABC\) n’est pas rectangle (théorème de Pythagore).

{{% details title="Exemple" closed="true" %}}
Le triangle \(PQR\) a pour côtés \(PQ = 3{,}3\) cm, \(QR = 5{,}6\) cm et \(PR = 6{,}5\) cm. Le plus grand côté est \([PR]\).
\[
PR^2 = 6{,}5^2 = 42{,}25 \qquad \text{et} \qquad PQ^2 + QR^2 = 10{,}89 + 31{,}36 = 42{,}25.
\]
L’égalité de Pythagore est vérifiée : d’après la réciproque du théorème de Pythagore, le triangle \(PQR\) est rectangle en \(Q\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Un écran de télévision rectangulaire a une largeur de \(88\) cm et une hauteur de \(50\) cm. Calculer la longueur de sa diagonale, arrondie au centimètre, puis en pouces (\(1\) pouce \(= 2{,}54\) cm).

{{% details title="Solution commentée" closed="true" %}}
La diagonale \(d\) est l’hypoténuse d’un triangle rectangle de côtés \(88\) et \(50\) cm. D’après le théorème de Pythagore :
\[
d^2 = 88^2 + 50^2 = 7\,744 + 2\,500 = 10\,244, \qquad d = \sqrt{10\,244} \approx 101 \text{ cm}.
\]
En pouces : \(101{,}2 \div 2{,}54 \approx 40\) pouces.
{{% /details %}}
