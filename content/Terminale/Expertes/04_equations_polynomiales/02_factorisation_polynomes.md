---
title: 'Factorisation des polynômes'
weight: 2
cascade:
  type: docs
---

## Fonction polynôme

> [!TIP] **Définitions**
>
> - Soient \(n\) un entier naturel et \(a_0, a_1, \dots, a_n\) des nombres (réels ou complexes) avec \(a_n \neq 0\). Une **fonction polynôme**, ou **polynôme**, \(P\) est une fonction définie sur \(\mathbb{C}\) qui admet une écriture de la forme
> \[
P(z) = a_nz^n + a_{n-1}z^{n-1} + \dots + a_1z + a_0.
\]
> - Le **polynôme nul** est le polynôme \(P\) tel que \(P(z) = 0\) pour tout \(z \in \mathbb{C}\).
> - Si \(P\) n’est pas le polynôme nul, l’entier \(n\) est le **degré** de \(P\).
> - On appelle **racine** d’un polynôme \(P\) tout nombre complexe \(z_0\) tel que \(P(z_0) = 0\).

{{% details title="Exemples" closed="true" %}}
- \(P(z) = 7\) est un polynôme constant, de degré 0.
- \(Q(z) = 2iz^4 - z + 3\) est un polynôme de degré 4 ; \(0\) n’est pas racine car \(Q(0) = 3\).
{{% /details %}}

> [!TIP] **Propriété (admise)**
>
> Un polynôme est le polynôme nul si et seulement si tous ses coefficients sont nuls. Par conséquent, deux polynômes sont égaux (pour tout \(z\)) si et seulement si ils ont les mêmes coefficients : c’est ce qui permet d’**identifier** les coefficients.

## Factorisation par \(z - a\)

> [!TIP] **Définition**
>
> On dit qu’un polynôme \(P\) est **factorisable** (ou divisible) par \(z - a\) s’il existe un polynôme \(Q\) tel que, pour tout \(z \in \mathbb{C}\), \(P(z) = (z - a)Q(z)\).

{{% details title="Exemple" closed="true" %}}
\(P(z) = z^2 + 9\) est factorisable par \(z - 3i\) : \(P(z) = (z - 3i)(z + 3i)\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Soit \(a\) un nombre complexe. Pour tout entier naturel \(n \geq 1\) et tout complexe \(z\) :
> \[
z^n - a^n = (z - a)\left(z^{n-1} + az^{n-2} + a^2z^{n-3} + \dots + a^{n-2}z + a^{n-1}\right) = (z - a)\sum_{k=0}^{n-1} a^kz^{n-1-k}.
\]

{{% details title="Démonstration" closed="true" %}}
On développe :
\[
(z - a)\sum_{k=0}^{n-1} a^kz^{n-1-k} = \sum_{k=0}^{n-1} a^kz^{n-k} - \sum_{k=0}^{n-1} a^{k+1}z^{n-1-k}.
\]
Dans la seconde somme, on pose \(j = k + 1\) : elle vaut \(\sum\limits_{j=1}^{n} a^{j}z^{n-j}\). Tous les termes d’indice \(1\) à \(n - 1\) se compensent (somme télescopique) ; il reste le terme \(k = 0\) de la première somme, \(z^n\), et le terme \(j = n\) de la seconde, \(a^n\). Le produit vaut donc \(z^n - a^n\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(z^3 - 8 = z^3 - 2^3 = (z - 2)(z^2 + 2z + 4)\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Un polynôme \(P\) est factorisable par \(z - a\) si et seulement si \(a\) est une racine de \(P\). Dans ce cas, si \(P\) est de degré \(n \geq 1\), alors \(P(z) = (z - a)Q(z)\) avec \(Q\) de degré \(n - 1\).

{{% details title="Démonstration" closed="true" %}}
- Si \(P(z) = (z - a)Q(z)\), alors \(P(a) = 0 \times Q(a) = 0\).
- Réciproquement, supposons \(P(a) = 0\) avec \(P(z) = \sum\limits_{k=0}^{n} a_kz^k\). Alors
\[
P(z) = P(z) - P(a) = \sum_{k=1}^{n} a_k\left(z^k - a^k\right).
\]
D’après la propriété précédente, chaque \(z^k - a^k\) s’écrit \((z - a)Q_k(z)\), où \(Q_k\) est un polynôme de degré \(k - 1\). Donc \(P(z) = (z - a)Q(z)\) avec \(Q = \sum\limits_{k=1}^{n} a_kQ_k\), qui est de degré \(n - 1\) (son terme de plus haut degré est \(a_nz^{n-1}\)).
{{% /details %}}

## Degré et racines

> [!TIP] **Propriété**
>
> Un polynôme non nul de degré \(n\) admet **au plus \(n\) racines** distinctes.

{{% details title="Démonstration" closed="true" %}}
Par récurrence sur \(n\) : on note \(P_n\) : « tout polynôme de degré \(n\) admet au plus \(n\) racines ».

- **Initialisation.** Un polynôme de degré 0 est une constante non nulle : il n’a aucune racine. \(P_0\) est vraie.
- **Hérédité.** Supposons \(P_n\) vraie pour un entier \(n \geq 0\), et soit \(P\) un polynôme de degré \(n + 1\). Si \(P\) n’a pas de racine, il en a bien au plus \(n + 1\). Sinon, soit \(a\) une racine : \(P(z) = (z - a)Q(z)\) avec \(Q\) de degré \(n\). Si \(P(z) = 0\), alors \(z = a\) ou \(Q(z) = 0\) ; or \(Q\) a au plus \(n\) racines d’après l’hypothèse de récurrence. Donc \(P\) a au plus \(n + 1\) racines : \(P_{n+1}\) est vraie.
- **Conclusion.** Pour tout entier naturel \(n\), \(P_n\) est vraie.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Par contraposée : si un polynôme de degré au plus \(n\) s’annule en au moins \(n + 1\) nombres distincts, alors c’est le polynôme nul.

## Factoriser et résoudre

> [!NOTE] **Exercice résolu 1 — Factoriser un polynôme dont on connaît une racine**
>
> On considère le polynôme \(P(z) = z^3 - 3z^2 + 4z - 12\).
> 1. Vérifier que \(3\) est racine de \(P\).
> 2. Déterminer trois réels \(a\), \(b\), \(c\) tels que \(P(z) = (z - 3)(az^2 + bz + c)\) pour tout \(z\).
> 3. Résoudre dans \(\mathbb{C}\) l’équation \(P(z) = 0\).

{{% details title="Solution commentée" closed="true" %}}
1. \(P(3) = 27 - 27 + 12 - 12 = 0\).
2. **Par identification.** \((z - 3)(az^2 + bz + c) = az^3 + (b - 3a)z^2 + (c - 3b)z - 3c\). On identifie avec les coefficients de \(P\) :
\[
\begin{cases} a = 1 \\ b - 3a = -3 \\ c - 3b = 4 \\ -3c = -12 \end{cases} \iff \begin{cases} a = 1 \\ b = 0 \\ c = 4 \end{cases}
\]
(la troisième équation, \(4 - 0 = 4\), est bien vérifiée). Donc \(P(z) = (z - 3)(z^2 + 4)\).

   **Autre méthode.** On écrit \(P(z) - P(3) = (z^3 - 27) - 3(z^2 - 9) + 4(z - 3)\) et l’on factorise chaque terme par \(z - 3\) : \(P(z) = (z - 3)\left[(z^2 + 3z + 9) - 3(z + 3) + 4\right] = (z - 3)(z^2 + 4)\).
3. \(P(z) = 0 \iff z = 3\) ou \(z^2 = -4\), soit \(z = 2i\) ou \(z = -2i\). \(\mathcal{S} = \{3\,;\,-2i\,;\,2i\}\).
{{% /details %}}

> [!NOTE] **Exercice résolu 2 — Résoudre une équation de degré 3**
>
> On considère \(P(z) = z^3 + z^2 - 4z + 6\).
> 1. Déterminer une racine entière de \(P\) parmi \(-3, -2, -1, 1, 2, 3\).
> 2. En déduire les solutions dans \(\mathbb{C}\) de l’équation \(P(z) = 0\).

{{% details title="Solution commentée" closed="true" %}}
1. \(P(-3) = -27 + 9 + 12 + 6 = 0\) : \(-3\) est racine de \(P\).
2. \(P\) est donc factorisable par \(z + 3\) : \(P(z) = (z + 3)(az^2 + bz + c)\). En développant, \(az^3 + (b + 3a)z^2 + (c + 3b)z + 3c\), et par identification \(a = 1\), \(b + 3 = 1\) soit \(b = -2\), \(3c = 6\) soit \(c = 2\) (vérification : \(c + 3b = 2 - 6 = -4\)). Ainsi \(P(z) = (z + 3)(z^2 - 2z + 2)\).

   Le trinôme \(z^2 - 2z + 2\) a pour discriminant \(4 - 8 = -4 < 0\) et pour racines \(\dfrac{2 \pm 2i}{2} = 1 \pm i\).

   \(\mathcal{S} = \{-3\,;\,1 - i\,;\,1 + i\}\).
{{% /details %}}
