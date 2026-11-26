---
title: 'Exercices'
weight: 6
cascade:
  type: docs
---

### Exercice 1

Déterminer la limite des suites définies pour tout entier \(n \geq 1\) par :
1. \(a_n = 3 - \dfrac{5}{\sqrt{n}}\)
2. \(b_n = (n^2 + 1)\left(2 - \dfrac{1}{n}\right)\)
3. \(c_n = \dfrac{-6}{n^3 + 2}\)
4. \(d_n = n - 4n^3\)

{{% details title="Solution" closed="true" %}}
1. \(\lim \dfrac{5}{\sqrt{n}} = 0\), donc \(\lim a_n = 3\).
2. \(\lim (n^2 + 1) = +\infty\) et \(\lim \left(2 - \frac{1}{n}\right) = 2 > 0\) : par produit, \(\lim b_n = +\infty\).
3. \(\lim (n^3 + 2) = +\infty\) : par quotient, \(\lim c_n = 0\).
4. Forme « \(\infty - \infty\) » : \(d_n = n^3\left(\dfrac{1}{n^2} - 4\right)\), la parenthèse tend vers \(-4\), donc \(\lim d_n = -\infty\).
{{% /details %}}

### Exercice 2

Déterminer la limite de la suite définie pour tout \(n \geq 1\) par \(u_n = \dfrac{4n^2 - 3n}{2n^2 + 7}\).

{{% details title="Solution" closed="true" %}}
Forme « \(\dfrac{\infty}{\infty}\) ». On factorise par \(n^2\) : \(u_n = \dfrac{4 - \frac{3}{n}}{2 + \frac{7}{n^2}}\). Le numérateur tend vers 4 et le dénominateur vers 2 : \(\lim u_n = 2\).
{{% /details %}}

### Exercice 3

1. Montrer que, pour tout \(n \geq 1\), \(\dfrac{2n - 1}{n^2} \leq u_n \leq \dfrac{2n + 1}{n^2}\), où \(u_n = \dfrac{2n + \cos(n)}{n^2}\).
2. En déduire la limite de \((u_n)\).

{{% details title="Solution" closed="true" %}}
1. \(-1 \leq \cos(n) \leq 1\), donc \(2n - 1 \leq 2n + \cos(n) \leq 2n + 1\) ; on divise par \(n^2 > 0\).
2. \(\dfrac{2n - 1}{n^2} = \dfrac{2}{n} - \dfrac{1}{n^2}\) et \(\dfrac{2n + 1}{n^2} = \dfrac{2}{n} + \dfrac{1}{n^2}\) tendent toutes deux vers 0. D’après le théorème des gendarmes, \(\lim u_n = 0\).
{{% /details %}}

### Exercice 4

Une ville compte 50 000 habitants en 2025. Chaque année, sa population diminue de 2 %.
1. On note \(p_n\) la population en \(2025 + n\). Justifier que \((p_n)\) est géométrique et donner son expression.
2. Déterminer la limite de \((p_n)\). Ce modèle est-il réaliste à très long terme ?

{{% details title="Solution" closed="true" %}}
1. Diminuer de 2 % revient à multiplier par \(0{,}98\) : \(p_{n+1} = 0{,}98\,p_n\). La suite est géométrique de raison \(0{,}98\) et de premier terme \(50\,000\) : \(p_n = 50\,000 \times 0{,}98^n\).
2. \(0 < 0{,}98 < 1\), donc \(\lim 0{,}98^n = 0\) et \(\lim p_n = 0\). Le modèle prévoit la disparition de la population : il n’a de sens que sur une période limitée.
{{% /details %}}

### Exercice 5

On considère la suite \((u_n)\) définie par \(u_0 = 100\) et \(u_{n+1} = 0{,}8u_n + 10\).
1. Calculer \(u_1\) et \(u_2\).
2. On pose \(v_n = u_n - 50\). Montrer que \((v_n)\) est géométrique.
3. En déduire \(u_n\) en fonction de \(n\) et la limite de \((u_n)\).

{{% details title="Solution" closed="true" %}}
1. \(u_1 = 80 + 10 = 90\) et \(u_2 = 72 + 10 = 82\).
2. \(v_{n+1} = 0{,}8u_n + 10 - 50 = 0{,}8u_n - 40 = 0{,}8(u_n - 50) = 0{,}8v_n\) : \((v_n)\) est géométrique de raison \(0{,}8\), de premier terme \(v_0 = 50\).
3. \(v_n = 50 \times 0{,}8^n\), donc \(u_n = 50 + 50 \times 0{,}8^n\). Comme \(0 < 0{,}8 < 1\), \(\lim u_n = 50\). (Vérification : \(u_1 = 50 + 40 = 90\).)
{{% /details %}}

### Exercice 6

Un abonnement à une plateforme compte 2 000 abonnés au départ. Chaque mois, 10 % des abonnés se désabonnent et 300 nouveaux abonnés s’inscrivent. On note \(a_n\) le nombre d’abonnés au bout de \(n\) mois.
1. Justifier que \(a_{n+1} = 0{,}9a_n + 300\).
2. Déterminer le nombre d’abonnés vers lequel on tend à long terme.

{{% details title="Solution" closed="true" %}}
1. Il reste 90 % des abonnés, soit \(0{,}9a_n\), auxquels s’ajoutent 300 nouveaux.
2. On cherche \(\ell\) tel que \(\ell = 0{,}9\ell + 300\), soit \(\ell = 3\,000\). La suite \(b_n = a_n - 3\,000\) vérifie \(b_{n+1} = 0{,}9a_n + 300 - 3\,000 = 0{,}9(a_n - 3\,000) = 0{,}9b_n\) : elle est géométrique de raison \(0{,}9\), avec \(b_0 = -1\,000\). Donc \(a_n = 3\,000 - 1\,000 \times 0{,}9^n\), qui tend vers \(3\,000\). À long terme, le nombre d’abonnés se stabilise autour de 3 000.
{{% /details %}}
