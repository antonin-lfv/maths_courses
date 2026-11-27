---
title: 'Déterminer la forme irréductible d’une fraction'
weight: 3
cascade:
  type: docs
---

## Nombres rationnels

> [!TIP] **Définition**
>
> Un **nombre rationnel** est un nombre qui peut s’écrire comme une fraction, c’est-à-dire sous la forme \(\dfrac{p}{q}\), où \(p\) et \(q\) sont des entiers relatifs avec \({q \neq 0}\).

> [!IMPORTANT] **Remarques**
>
> - Les nombres entiers, les nombres décimaux et les fractions sont des nombres rationnels. Par exemple : \({-4 = \dfrac{-4}{1}}\), \({0{,}35 = \dfrac{35}{100}}\), \(\dfrac{2}{3}\).
> - Il existe des nombres qui ne sont pas rationnels, par exemple \(\pi\) ou \(\sqrt{2}\) : ils ne peuvent pas s’écrire sous forme de fraction.

## Fractions égales

> [!TIP] **Propriétés**
>
> - Un quotient ne change pas si l’on multiplie (ou si l’on divise) son numérateur et son dénominateur par un même nombre non nul : pour \({b \neq 0}\) et \({k \neq 0}\),
> \[
\dfrac{a}{b} = \dfrac{a \times k}{b \times k} \qquad \text{et} \qquad \dfrac{a}{b} = \dfrac{a \div k}{b \div k}.
\]
> - Soit \(a\), \(b\), \(c\), \(d\) des nombres relatifs avec \({b \neq 0}\) et \({d \neq 0}\) : si \({\dfrac{a}{b} = \dfrac{c}{d}}\), alors \({ad = bc}\) ; et si \({ad = bc}\), alors \({\dfrac{a}{b} = \dfrac{c}{d}}\) (égalité des produits en croix).

{{% details title="Exemples" closed="true" %}}
- \({\dfrac{4}{9} = \dfrac{4 \times 5}{9 \times 5} = \dfrac{20}{45}}\) et \({\dfrac{42}{56} = \dfrac{42 \div 14}{56 \div 14} = \dfrac{3}{4}}\).
- Les fractions \(\dfrac{27}{48}\) et \(\dfrac{45}{80}\) sont-elles égales ? \({27 \times 80 = 2\,160}\) et \({48 \times 45 = 2\,160}\) : les produits en croix sont égaux, donc oui.
{{% /details %}}

## Fraction irréductible

> [!TIP] **Définition**
>
> Soit \(a\) et \(b\) deux entiers relatifs (\({b \neq 0}\)). On dit que la fraction \(\dfrac{a}{b}\) est **irréductible** si le seul diviseur positif commun à \(a\) et \(b\) est \(1\).

{{% details title="Exemple" closed="true" %}}
\(\dfrac{8}{15}\) est irréductible : les diviseurs de \(8\) sont \(1, 2, 4, 8\), ceux de \(15\) sont \(1, 3, 5, 15\), et seul \(1\) est commun.
{{% /details %}}

> [!NOTE] **Méthode - Rendre une fraction irréductible**
>
> Pour rendre la fraction \(\dfrac{a}{b}\) irréductible, on peut, au choix :
> - simplifier la fraction en plusieurs étapes, à l’aide des critères de divisibilité, jusqu’à ce qu’on ne puisse plus la simplifier ;
> - décomposer le numérateur et le dénominateur en produits de facteurs premiers, puis supprimer les facteurs communs.

{{% details title="Exemple" closed="true" %}}
Forme irréductible de \(\dfrac{90}{126}\) :
- par étapes : \({\dfrac{90}{126} = \dfrac{45}{63} = \dfrac{5}{7}}\) (division par \(2\), puis par \(9\)) ;
- par décomposition : \({\dfrac{90}{126} = \dfrac{2 \times 3^2 \times 5}{2 \times 3^2 \times 7} = \dfrac{5}{7}}\).
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Écrire sous forme irréductible \(\dfrac{231}{165}\) et \({\dfrac{-56}{98}}\).

{{% details title="Solution commentée" closed="true" %}}
- \({231 = 3 \times 7 \times 11}\) et \({165 = 3 \times 5 \times 11}\). Donc \({\dfrac{231}{165} = \dfrac{3 \times 7 \times 11}{3 \times 5 \times 11} = \dfrac{7}{5}}\).
- \({56 = 2^3 \times 7}\) et \({98 = 2 \times 7^2}\) ; le facteur commun est \({2 \times 7 = 14}\). Donc \({\dfrac{-56}{98} = -\dfrac{14 \times 4}{14 \times 7} = -\dfrac{4}{7}}\).
{{% /details %}}
