---
title: 'Systèmes d’équations'
weight: 3
cascade:
  type: docs
---

## Système linéaire de deux équations à deux inconnues

> [!TIP] **Définitions**
>
> - Un **système linéaire de deux équations à deux inconnues** \(x\) et \(y\) est la donnée de deux équations de la forme \(ax + by = c\), où \(a\), \(b\), \(c\) sont des réels, qui doivent être vérifiées **simultanément** :
> \[
\begin{cases} ax + by = c \\ a'x + b'y = c' \end{cases}
\]
> - Un **couple solution** du système est un couple de réels \((x\,;\,y)\) qui vérifie les deux équations à la fois.

{{% details title="Exemple" closed="true" %}}
Le couple \((2\,;\,1)\) est solution du système \(\begin{cases} 2x + 3y = 7 \\ x - y = 1 \end{cases}\) car \(4 + 3 = 7\) et \(2 - 1 = 1\). Le couple \((5\,;\,-1)\) vérifie la première équation mais pas la seconde (\(5 + 1 = 6 \neq 1\)) : il n’est pas solution.
{{% /details %}}

## Interprétation graphique

Chaque équation \(ax + by = c\) (avec \((a\,;\,b) \neq (0\,;\,0)\)) est une équation cartésienne de droite. Un couple solution correspond donc à un point commun aux deux droites.

> [!TIP] **Propriété**
>
> Un système linéaire de deux équations à deux inconnues admet :
> - **un unique couple solution** si les deux droites sont **sécantes** : ce sont les coordonnées de leur point d’intersection ;
> - **aucune solution** si les droites sont **parallèles et distinctes** ;
> - **une infinité de solutions** si les droites sont **confondues**.
>
> D’après le chapitre précédent, les droites sont sécantes si et seulement si \(ab' - a'b \neq 0\).

![](/images/image394.png)

{{% details title="Exemple" closed="true" %}}
- \(\begin{cases} 2x + 3y = 7 \\ x - y = 1 \end{cases}\) : \(2 \times (-1) - 1 \times 3 = -5 \neq 0\), les droites sont sécantes, il y a un unique couple solution (\((2\,;\,1)\), voir la figure).
- \(\begin{cases} x - 2y = 1 \\ -3x + 6y = 4 \end{cases}\) : \(1 \times 6 - (-3)(-2) = 0\) et \((-3\,;\,6\,;\,4)\) n’est pas proportionnel à \((1\,;\,-2\,;\,1)\) : droites parallèles distinctes, aucune solution.
{{% /details %}}

## Résoudre un système

> [!NOTE] **Méthode 1 — Résoudre par substitution**
>
> Résoudre le système \(\begin{cases} 2x + 3y = 7 \\ x - y = 1 \end{cases}\).

{{% details title="Solution commentée" closed="true" %}}
On exprime une inconnue en fonction de l’autre dans l’équation la plus simple : \(x - y = 1 \iff x = 1 + y\). On **substitue** dans l’autre équation :
\[
\begin{cases} 2(1 + y) + 3y = 7 \\ x = 1 + y \end{cases} \iff \begin{cases} 5y = 5 \\ x = 1 + y \end{cases} \iff \begin{cases} y = 1 \\ x = 2 \end{cases}
\]
Le système admet un unique couple solution : \(\mathcal{S} = \{(2\,;\,1)\}\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Résoudre par combinaison**
>
> Résoudre le système \(\begin{cases} 3x + 2y = 4 \\ 5x - 3y = 13 \end{cases}\).

{{% details title="Solution commentée" closed="true" %}}
On multiplie les équations par des nombres choisis pour que les coefficients de \(y\) soient opposés : la première par \(3\), la seconde par \(2\).
\[
\begin{cases} 9x + 6y = 12 \\ 10x - 6y = 26 \end{cases}
\]
En additionnant membre à membre, \(y\) disparaît : \(19x = 38\), donc \(x = 2\). On remplace dans la première équation : \(6 + 2y = 4\), donc \(y = -1\).

Vérification dans la seconde : \(10 + 3 = 13\). \(\mathcal{S} = \{(2\,;\,-1)\}\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Mettre un problème en équations**
>
> Pour une sortie au cinéma, un groupe de \(3\) adultes et \(2\) enfants paie \(38\) €, et un autre groupe de \(2\) adultes et \(5\) enfants paie \(51\) €. Quels sont les prix d’une place adulte et d’une place enfant ?

{{% details title="Solution commentée" closed="true" %}}
On note \(a\) le prix d’une place adulte et \(e\) celui d’une place enfant (en euros). Les données se traduisent par
\[
\begin{cases} 3a + 2e = 38 \\ 2a + 5e = 51 \end{cases}
\]
Par combinaison, on multiplie la première équation par \(2\) et la seconde par \(3\) : \(6a + 4e = 76\) et \(6a + 15e = 153\). En soustrayant : \(11e = 77\), donc \(e = 7\). Puis \(3a = 38 - 14 = 24\), soit \(a = 8\).

Vérification : \(2 \times 8 + 5 \times 7 = 51\). Une place adulte coûte \(8\) € et une place enfant \(7\) €.
{{% /details %}}
