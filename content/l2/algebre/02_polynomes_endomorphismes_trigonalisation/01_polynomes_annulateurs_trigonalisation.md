---
title: 'Polynômes annulateurs et trigonalisation'
weight: 1
cascade:
  type: docs
---

\(E\) est un \(\mathbb{K}\)-espace vectoriel de dimension finie \(n\) et \(f\) un endomorphisme de \(E\).

## Polynômes d’endomorphismes

> [!TIP] **Définition**
>
> Pour \({P = a_0 + a_1X + \dots + a_dX^d \in \mathbb{K}[X]}\), on pose
>
> \[ P(f) = a_0\,\mathrm{id}_E + a_1 f + \dots + a_d f^d, \]
>
> où \({f^k = f \circ \dots \circ f}\) (\(k\) fois). De même, \({P(A) = a_0I_n + a_1A + \dots + a_dA^d}\) pour une matrice carrée \(A\).

> [!TIP] **Propriétés**
>
> - \({(P + Q)(f) = P(f) + Q(f)}\) et \({(PQ)(f) = P(f) \circ Q(f)}\). En particulier, deux polynômes en \(f\) **commutent**.
> - \(\ker P(f)\) et \(\operatorname{Im} P(f)\) sont stables par \(f\).
> - Si \({f(x) = \lambda x}\), alors \({P(f)(x) = P(\lambda)x}\).

## Polynômes annulateurs

> [!TIP] **Définition**
>
> Un polynôme \(P\) est **annulateur** de \(f\) si \({P(f) = 0}\).

> [!TIP] **Propriété**
>
> Si \(P\) est un polynôme annulateur de \(f\), toute valeur propre de \(f\) est racine de \(P\) :
>
> \[ \operatorname{Sp}(f) \subset \{\text{racines de } P\}. \]

{{% details title="Démonstration" closed="true" %}}
Si \({f(x) = \lambda x}\) avec \({x \neq 0}\), alors \({0 = P(f)(x) = P(\lambda)x}\), donc \({P(\lambda) = 0}\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’inclusion peut être stricte : \({X^2 - X}\) annule \(\mathrm{id}_E\), dont la seule valeur propre est \(1\). Un polynôme annulateur donne des **candidats** valeurs propres.

> [!TIP] **Définition et théorème - Polynôme minimal**
>
> Il existe un unique polynôme unitaire \(\pi_f\), le **polynôme minimal** de \(f\), tel que les polynômes annulateurs de \(f\) soient exactement les multiples de \(\pi_f\). Les racines de \(\pi_f\) sont exactement les valeurs propres de \(f\).

{{% details title="Démonstration" closed="true" %}}
\(\mathcal{L}(E)\) est de dimension \(n^2\), donc la famille \({(\mathrm{id}, f, \dots, f^{n^2})}\) est liée : il existe un polynôme annulateur non nul. Soit \(\pi_f\) un polynôme annulateur unitaire de degré minimal. Si \(P\) annule \(f\), la division euclidienne \({P = \pi_f Q + R}\) donne \({R(f) = 0}\) avec \({\deg R < \deg \pi_f}\), donc \({R = 0}\). L’unicité vient de ce que deux polynômes unitaires qui se divisent l’un l’autre sont égaux.

Toute valeur propre est racine de \(\pi_f\). Réciproquement, si \({\pi_f(\lambda) = 0}\), on écrit \({\pi_f = (X - \lambda)Q}\). Par minimalité, \({Q(f) \neq 0}\) : il existe \(y\) tel que \({x = Q(f)(y) \neq 0}\), et \({(f - \lambda\,\mathrm{id})(x) = \pi_f(f)(y) = 0}\). Donc \(\lambda\) est valeur propre.
{{% /details %}}

> [!TIP] **Théorème de Cayley-Hamilton**
>
> Le polynôme caractéristique est un polynôme annulateur : \({\chi_f(f) = 0}\). Par conséquent, \(\pi_f\) divise \(\chi_f\), et \({\deg \pi_f \leq n}\).

{{% details title="Exemple" closed="true" %}}
Pour \({A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}}\) : \({\chi_A = X^2 - 5X - 2}\), donc \({A^2 = 5A + 2I_2}\). Vérification : \({A^2 = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix}}\) et \({5A + 2I_2 = \begin{pmatrix} 5 + 2 & 10 \\ 15 & 20 + 2 \end{pmatrix}}\).

On en déduit l’inverse : \({A(A - 5I_2) = 2I_2}\), donc \({A^{-1} = \dfrac{1}{2}(A - 5I_2)}\).
{{% /details %}}

## Lemme des noyaux

> [!TIP] **Théorème - Lemme des noyaux**
>
> Soient \({P_1, \dots, P_r}\) des polynômes **deux à deux premiers entre eux** et \({P = P_1 P_2 \cdots P_r}\). Alors
>
> \[ \ker P(f) = \ker P_1(f) \oplus \ker P_2(f) \oplus \dots \oplus \ker P_r(f). \]

{{% details title="Démonstration" closed="true" %}}
Pour \({r = 2}\) (le cas général s’en déduit par récurrence). D’après le théorème de Bézout, il existe \(U\), \(V\) tels que \({UP_1 + VP_2 = 1}\), donc \({U(f) \circ P_1(f) + V(f) \circ P_2(f) = \mathrm{id}_E}\).

- **Somme directe.** Si \({x \in \ker P_1(f) \cap \ker P_2(f)}\), alors \({x = U(f)(P_1(f)(x)) + V(f)(P_2(f)(x)) = 0}\).
- **Inclusion \(\supset\).** Si \({P_1(f)(x) = 0}\), alors \({P(f)(x) = P_2(f)(P_1(f)(x)) = 0}\) ; de même pour \(P_2\).
- **Inclusion \(\subset\).** Soit \({x \in \ker P(f)}\). On écrit \({x = x_2 + x_1}\) avec \({x_2 = U(f)(P_1(f)(x))}\) et \({x_1 = V(f)(P_2(f)(x))}\). Alors \({P_2(f)(x_2) = U(f)(P(f)(x)) = 0}\) et \({P_1(f)(x_1) = V(f)(P(f)(x)) = 0}\).
{{% /details %}}

> [!TIP] **Théorème - Critère de diagonalisabilité**
>
> Les propriétés suivantes sont équivalentes :
> - \(f\) est diagonalisable ;
> - \(f\) admet un polynôme annulateur **scindé à racines simples** ;
> - le polynôme minimal \(\pi_f\) est scindé à racines simples.

{{% details title="Démonstration" closed="true" %}}
Si \(f\) est diagonalisable de valeurs propres distinctes \({\lambda_1, \dots, \lambda_r}\), le polynôme \({P = (X - \lambda_1) \cdots (X - \lambda_r)}\) annule \(f\) sur chaque vecteur d’une base de vecteurs propres, donc \({P(f) = 0}\).

Réciproquement, si \({P = (X - \lambda_1) \cdots (X - \lambda_r)}\) avec les \(\lambda_i\) distincts annule \(f\), les facteurs sont deux à deux premiers entre eux et le lemme des noyaux donne \({E = \ker P(f) = \bigoplus \ker(f - \lambda_i\,\mathrm{id})}\) : \(E\) est somme directe de sous-espaces propres (certains éventuellement nuls), donc \(f\) est diagonalisable.
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
- Un **projecteur** vérifie \({p^2 = p}\) : \({X(X - 1)}\) est annulateur, scindé à racines simples. Tout projecteur est diagonalisable, avec \({\operatorname{Sp}(p) \subset \{0, 1\}}\).
- Une **symétrie** vérifie \({s^2 = \mathrm{id}}\) : \({(X - 1)(X + 1)}\) est annulateur. Toute symétrie est diagonalisable.
- Une matrice réelle telle que \({A^2 = -I_n}\) est annulée par \({X^2 + 1 = (X - i)(X + i)}\) : elle est diagonalisable sur \(\mathbb{C}\), mais pas sur \(\mathbb{R}\) puisqu’elle n’a aucune valeur propre réelle.
{{% /details %}}

## Endomorphismes nilpotents

> [!TIP] **Définition et propriétés**
>
> \(f\) est **nilpotent** s’il existe un entier \({k \geq 1}\) tel que \({f^k = 0}\). Le plus petit tel entier est l’**indice de nilpotence**.
> - \(f\) est nilpotent si et seulement si \({\chi_f = X^n}\) ; son indice est donc au plus \(n\), et \({f^n = 0}\).
> - La seule valeur propre d’un endomorphisme nilpotent est \(0\) ; il est diagonalisable si et seulement s’il est nul.
> - Une matrice triangulaire supérieure à diagonale nulle est nilpotente.

## Trigonalisation

> [!TIP] **Définition**
>
> \(f\) est **trigonalisable** s’il existe une base de \(E\) dans laquelle sa matrice est triangulaire supérieure. Une matrice \(A\) est trigonalisable si elle est semblable à une matrice triangulaire supérieure : \({A = PTP^{-1}}\).

> [!TIP] **Théorème**
>
> \(f\) est trigonalisable si et seulement si son polynôme caractéristique est **scindé** sur \(\mathbb{K}\). En particulier, toute matrice de \(\mathcal{M}_n(\mathbb{C})\) est trigonalisable.

{{% details title="Démonstration" closed="true" %}}
Si \({A = PTP^{-1}}\) avec \(T\) triangulaire, alors \({\chi_A = \chi_T = \prod (X - t_{ii})}\) est scindé.

Réciproque par récurrence sur \(n\).
- **Initialisation.** Pour \({n = 1}\), toute matrice est triangulaire.
- **Hérédité.** Supposons le résultat vrai en dimension \({n - 1}\). Si \(\chi_f\) est scindé, il a une racine \(\lambda\), valeur propre de \(f\), de vecteur propre \(e_1\). On complète en une base : la matrice de \(f\) est \({\begin{pmatrix} \lambda & L \\ 0 & B \end{pmatrix}}\) et \({\chi_f = (X - \lambda)\chi_B}\), donc \(\chi_B\) est scindé. Par hypothèse de récurrence, \({B = QT'Q^{-1}}\) avec \(T'\) triangulaire. Avec \({R = \begin{pmatrix} 1 & 0 \\ 0 & Q \end{pmatrix}}\), on obtient \({R^{-1}\begin{pmatrix} \lambda & L \\ 0 & B \end{pmatrix}R = \begin{pmatrix} \lambda & LQ \\ 0 & T' \end{pmatrix}}\), triangulaire.
- **Conclusion.** Le résultat est vrai en toute dimension.
{{% /details %}}

> [!TIP] **Conséquences**
>
> Si \(\chi_A\) est scindé, de racines \({\lambda_1, \dots, \lambda_n}\) comptées avec multiplicité :
> - \({\operatorname{tr}(A) = \displaystyle\sum \lambda_i}\) et \({\det(A) = \displaystyle\prod \lambda_i}\) ;
> - les valeurs propres de \(A^k\) sont les \(\lambda_i^k\), et plus généralement celles de \(P(A)\) sont les \(P(\lambda_i)\).

> [!TIP] **Définition et théorème - Sous-espaces caractéristiques**
>
> Si \({\chi_f = \displaystyle\prod_{i=1}^{r} (X - \lambda_i)^{m_i}}\) est scindé, le **sous-espace caractéristique** associé à \(\lambda_i\) est \({F_{\lambda_i} = \ker(f - \lambda_i\,\mathrm{id}_E)^{m_i}}\). Alors
>
> \[ E = F_{\lambda_1} \oplus \dots \oplus F_{\lambda_r}, \qquad \dim F_{\lambda_i} = m_i, \]
>
> chaque \(F_{\lambda_i}\) est stable par \(f\), et \(f\) y induit la somme de \({\lambda_i\,\mathrm{id}}\) et d’un endomorphisme nilpotent.

> [!NOTE] **Méthode - Trigonaliser une matrice \(3 \times 3\) non diagonalisable**
>
> On cherche une base \({(e_1, e_2, e_3)}\) telle que la matrice soit triangulaire. On prend d’abord une base des sous-espaces propres, puis on complète par des vecteurs \(e\) vérifiant \({(A - \lambda I)e = }\) un vecteur déjà choisi, ou par un vecteur quelconque en dernier recours. La diagonale de \(T\) est imposée : ce sont les valeurs propres avec multiplicité.

> [!NOTE] **Exercice résolu - Trigonalisation et puissances**
>
> Soit \({A = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix}}\).
>
> 1. Montrer que \(A\) n’est pas diagonalisable, et la trigonaliser.
> 2. Calculer \(A^n\) pour tout entier naturel \(n\).

{{% details title="Solution commentée" closed="true" %}}
**1.** \({\chi_A = X^2 - 4X + 4 = (X - 2)^2}\). La seule valeur propre est \(2\). Si \(A\) était diagonalisable, elle serait semblable à \(2I_2\), donc égale à \(2I_2\) : ce n’est pas le cas.

\({A - 2I_2 = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}}\) : \(E_2\) est la droite \({x + y = 0}\), dirigée par \({e_1 = (1, -1)}\).

On cherche \(e_2\) tel que \({(A - 2I_2)e_2 = e_1}\) : \({x + y = 1}\), par exemple \({e_2 = (1, 0)}\). Alors \({Ae_1 = 2e_1}\) et \({Ae_2 = e_1 + 2e_2}\). Avec

\[
P = \begin{pmatrix} 1 & 1 \\ -1 & 0 \end{pmatrix}, \qquad T = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}, \qquad A = PTP^{-1}.
\]

Vérification : \({Ae_2 = (3, -1) = (1, -1) + 2(1, 0)}\).

**2.** Plutôt que de passer par \(P\), on écrit \({A = 2I_2 + N}\) avec \({N = A - 2I_2}\). D’après le théorème de Cayley-Hamilton, \({N^2 = (A - 2I_2)^2 = 0}\). Comme \(2I_2\) et \(N\) commutent, la formule du binôme donne, pour \({n \geq 1}\) :

\[
A^n = 2^nI_2 + n2^{n-1}N = 2^{n-1}\begin{pmatrix} 2 + n & n \\ -n & 2 - n \end{pmatrix}.
\]

Vérification pour \({n = 1}\) : \({\begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix}}\). La formule vaut aussi pour \({n = 0}\).
{{% /details %}}
