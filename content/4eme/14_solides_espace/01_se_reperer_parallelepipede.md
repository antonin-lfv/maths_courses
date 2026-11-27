---
title: 'Se repérer dans un parallélépipède rectangle'
weight: 1
cascade:
  type: docs
---

## Parallélépipède rectangle

> [!TIP] **Définition**
>
> Un **parallélépipède rectangle**, aussi appelé **pavé droit**, est un solide dont les 6 faces sont des rectangles. Il possède 8 sommets et 12 arêtes.

> [!IMPORTANT] **Remarques**
>
> - Un pavé droit est un prisme droit particulier : sa base est un rectangle.
> - Un **cube** est un pavé droit particulier : ses 6 faces sont des carrés superposables.

## Volume d’un prisme droit

> [!TIP] **Propriété**
>
> Le volume \(\mathcal{V}\) d’un prisme droit est donné par la formule
> \[
\mathcal{V} = \text{aire de la base} \times \text{hauteur}.
\]
> Pour un pavé droit, elle s’écrit aussi \(\mathcal{V} = \text{longueur} \times \text{largeur} \times \text{hauteur}\).

{{% details title="Exemple" closed="true" %}}
- Un pavé droit de dimensions \(6\) cm, \(2{,}5\) cm et \(4\) cm a pour volume \(6 \times 2{,}5 \times 4 = 60\) cm³.
- Un prisme droit dont la base est un triangle rectangle de côtés de l’angle droit \(3\) cm et \(5\) cm, et de hauteur \(10\) cm, a pour volume \(\dfrac{3 \times 5}{2} \times 10 = 7{,}5 \times 10 = 75\) cm³.
{{% /details %}}

## Repérage dans un pavé droit

> [!TIP] **Définition**
>
> On choisit un sommet du pavé comme **origine** et les trois arêtes issues de ce sommet comme axes : l’**axe des abscisses**, l’**axe des ordonnées** et l’**axe des altitudes**. Tout point \(M\) du pavé est alors repéré par trois nombres, ses **coordonnées** :
> - \(x_M\), son **abscisse** ;
> - \(y_M\), son **ordonnée** ;
> - \(z_M\), son **altitude**.
>
> On note \(M(x_M\,;\,y_M\,;\,z_M)\).

Le pavé \(ABCDEFGH\) ci-dessous a pour dimensions \(AB = 4\), \(AD = 2\) et \(AE = 3\) (en unités de longueur). On prend \(A\) comme origine, \((AB)\) comme axe des abscisses, \((AD)\) comme axe des ordonnées et \((AE)\) comme axe des altitudes.

![](/images/image439.png)

{{% details title="Exemple" closed="true" %}}
Dans ce repère :
- \(A(0\,;\,0\,;\,0)\), \(B(4\,;\,0\,;\,0)\), \(C(4\,;\,2\,;\,0)\), \(D(0\,;\,2\,;\,0)\) : les points de la face du bas ont une altitude nulle ;
- \(E(0\,;\,0\,;\,3)\), \(F(4\,;\,0\,;\,3)\), \(G(4\,;\,2\,;\,3)\), \(H(0\,;\,2\,;\,3)\) : les points de la face du haut ont pour altitude \(3\).
{{% /details %}}

> [!NOTE] **Méthode — Lire les coordonnées d’un point**
>
> Pour aller de l’origine au point, on se déplace successivement parallèlement à l’axe des abscisses (première coordonnée), à l’axe des ordonnées (deuxième), puis à l’axe des altitudes (troisième).

> [!NOTE] **Exercice résolu**
>
> On reprend le pavé \(ABCDEFGH\) ci-dessus.
> 1. \(I\) est le milieu de l’arête \([BF]\). Donner ses coordonnées.
> 2. \(J\) est le centre de la face \(EFGH\). Donner ses coordonnées.
> 3. Quel est le volume du pavé ?

{{% details title="Solution commentée" closed="true" %}}
1. \(B(4\,;\,0\,;\,0)\) et \(F(4\,;\,0\,;\,3)\) : le milieu \(I\) a la même abscisse et la même ordonnée, et une altitude de \(3 \div 2 = 1{,}5\). Donc \(I(4\,;\,0\,;\,1{,}5)\).
2. Le centre de la face du haut est à mi-longueur (\(4 \div 2 = 2\)), à mi-largeur (\(2 \div 2 = 1\)) et à l’altitude \(3\) : \(J(2\,;\,1\,;\,3)\).
3. \(\mathcal{V} = 4 \times 2 \times 3 = 24\) unités de volume.
{{% /details %}}
