---
title: 'Représentations paramétriques de droites'
weight: 1
cascade:
  type: docs
---

Dans tout le chapitre, l’espace est muni d’un repère orthonormé \((O\,;\,\vec{\imath}, \vec{\jmath}, \vec{k})\).

## Représentation paramétrique d’une droite

> [!TIP] **Propriété et définition**
>
> Soit \((d)\) la droite passant par le point \(A(x_A\,;\,y_A\,;\,z_A)\) et de vecteur directeur \(\vec{u}\begin{pmatrix} a \\ b \\ c \end{pmatrix}\) non nul. Un point \(M(x\,;\,y\,;\,z)\) appartient à \((d)\) si et seulement s’il existe un réel \(t\) tel que
> \[
\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases}
\]
> Ce système est appelé **représentation paramétrique** de la droite \((d)\) ; le réel \(t\) est le **paramètre**.

> [!IMPORTANT] **Remarques**
>
> - Le système traduit simplement \(\overrightarrow{AM} = t\vec{u}\) avec les coordonnées : à chaque valeur de \(t\) correspond un point de la droite, et réciproquement.
> - Une droite admet une infinité de représentations paramétriques : on peut choisir un autre point et un autre vecteur directeur.

![](/images/image315.png)

{{% details title="Exemple" closed="true" %}}
La droite passant par \(A(2\,;\,-1\,;\,3)\) et de vecteur directeur \(\vec{u}\begin{pmatrix} 1 \\ 4 \\ -2 \end{pmatrix}\) admet pour représentation paramétrique
\[
\begin{cases} x = 2 + t \\ y = -1 + 4t \\ z = 3 - 2t \end{cases}, \quad t \in \mathbb{R}.
\]
{{% /details %}}

> [!TIP] **Propriété**
>
> Soient \(a\), \(b\), \(c\) trois réels non tous nuls, et \(x_A\), \(y_A\), \(z_A\) trois réels. L’ensemble des points \(M(x\,;\,y\,;\,z)\) vérifiant
> \[
\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases}, \quad t \in \mathbb{R},
\]
> est la droite passant par \(A(x_A\,;\,y_A\,;\,z_A)\) et de vecteur directeur \(\vec{u}\begin{pmatrix} a \\ b \\ c \end{pmatrix}\).

{{% details title="Exemple" closed="true" %}}
Le système \(\begin{cases} x = 1 - 3t \\ y = 2t \\ z = 5 \end{cases}\), \(t \in \mathbb{R}\), représente la droite passant par \(A(1\,;\,0\,;\,5)\) (obtenu pour \(t = 0\)) et de vecteur directeur \(\vec{u}\begin{pmatrix} -3 \\ 2 \\ 0 \end{pmatrix}\). Elle est contenue dans le plan d’équation \(z = 5\).
{{% /details %}}

## Appartenance d’un point à une droite

> [!TIP] **Conséquence**
>
> Soit \((d)\) la droite de représentation paramétrique \(\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases}\), \(t \in \mathbb{R}\). Un point \(C(x_C\,;\,y_C\,;\,z_C)\) appartient à \((d)\) si et seulement s’il existe **un même** réel \(t\) tel que \(x_C = x_A + at\), \(y_C = y_A + bt\) et \(z_C = z_A + ct\).

{{% details title="Exemple" closed="true" %}}
Avec la droite \(\begin{cases} x = 2 + t \\ y = -1 + 4t \\ z = 3 - 2t \end{cases}\) :
- pour \(C(0\,;\,-9\,;\,7)\), la première équation donne \(t = -2\) ; alors \(y = -1 - 8 = -9\) et \(z = 3 + 4 = 7\) : \(C\) appartient à la droite ;
- pour \(D(4\,;\,7\,;\,0)\), la première équation donne \(t = 2\) ; alors \(y = 7\) mais \(z = -1 \neq 0\) : \(D\) n’appartient pas à la droite.
{{% /details %}}

## Déterminer une représentation paramétrique d’une droite

> [!NOTE] **Méthode 1 — Représentation paramétrique d’une droite \((AB)\)**
>
> On considère les points \(A(1\,;\,-2\,;\,0)\) et \(B(3\,;\,1\,;\,4)\).
> 1. Déterminer une représentation paramétrique de la droite \((AB)\).
> 2. Le point \(C(-3\,;\,-8\,;\,-8)\) appartient-il à \((AB)\) ?

{{% details title="Solution commentée" closed="true" %}}
**1.** \(\overrightarrow{AB}\begin{pmatrix} 2 \\ 3 \\ 4 \end{pmatrix}\) est un vecteur directeur de \((AB)\), qui passe par \(A\) :
\[
(AB) : \begin{cases} x = 1 + 2t \\ y = -2 + 3t \\ z = 4t \end{cases}, \quad t \in \mathbb{R}.
\]

**2.** On résout \(\begin{cases} -3 = 1 + 2t \\ -8 = -2 + 3t \\ -8 = 4t \end{cases}\) : la première équation donne \(t = -2\), la deuxième aussi \((3t = -6)\), et la troisième aussi \((4t = -8)\). La même valeur convient : \(C\) appartient à \((AB)\).
{{% /details %}}

## Étudier la position relative de deux droites

> [!NOTE] **Méthode 2 — Position relative de deux droites données par des représentations paramétriques**
>
> On considère les droites
> \(d_1 : \begin{cases} x = 1 + t \\ y = 2t \\ z = -1 + t \end{cases}, t \in \mathbb{R}\) et \(d_2 : \begin{cases} x = 2 - s \\ y = 1 + s \\ z = 3s \end{cases}, s \in \mathbb{R}\).
> Étudier leur position relative.

{{% details title="Solution commentée" closed="true" %}}
On utilise deux paramètres différents (\(t\) et \(s\)), car un point commun n’est pas forcément obtenu pour la même valeur du paramètre.

- Vecteurs directeurs : \(\vec{u_1}\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}\) et \(\vec{u_2}\begin{pmatrix} -1 \\ 1 \\ 3 \end{pmatrix}\), dont les coordonnées ne sont pas proportionnelles : les droites ne sont pas parallèles.
- On cherche un point commun en résolvant \(\begin{cases} 1 + t = 2 - s \\ 2t = 1 + s \\ -1 + t = 3s \end{cases}\). La première équation donne \(s = 1 - t\) ; la deuxième devient \(2t = 2 - t\), soit \(t = \frac{2}{3}\) et \(s = \frac{1}{3}\). Dans la troisième : \(-1 + \frac{2}{3} = -\frac{1}{3}\), alors que \(3s = 1\). Le système n’a pas de solution.

Les droites ne sont ni parallèles, ni sécantes : elles sont **non coplanaires**.
{{% /details %}}
