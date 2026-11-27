---
title: 'Exercices'
weight: 4
cascade:
  type: docs
---

### Exercice 1

La parabole ci-dessous représente une fonction polynôme du second degré \(f\). Les points marqués ont des coordonnées entières.  
À l’aide du graphique, **déterminer la forme factorisée** de \(f(x)\).

![](/images/image154.png)

{{% details title="Solution" closed="true" %}}
La parabole coupe l’axe des abscisses en \({x = -2}\) et \({x = 3}\) : ce sont les racines de \(f\). Il existe donc un réel \({a \neq 0}\) tel que  
\[
f(x) = a\,(x+2)(x-3).
\]
Pour trouver \(a\), on utilise un autre point de la courbe : \({f(0) = 3}\).  
Or \({f(0) = a \times 2 \times (-3) = -6a}\), donc \({-6a = 3}\), soit \({a = -\dfrac12}\).  
\[
\boxed{f(x) = -\dfrac12\,(x+2)(x-3)}
\]
Cohérence : \({a < 0}\) et la parabole est bien tournée vers le bas.
{{% /details %}}

### Exercice 2

La parabole ci-dessous représente une fonction polynôme du second degré \(f\). Les points marqués ont des coordonnées entières.  
À l’aide du graphique, **déterminer la forme canonique** de \(f(x)\).

![](/images/image155.png)

{{% details title="Solution" closed="true" %}}
Le sommet de la parabole est \({S(1 ; -2)}\), donc \({\alpha = 1}\) et \({\beta = -2}\) :  
\[
f(x) = a\,(x-1)^2 - 2.
\]
Le point \((3 ; 6)\) appartient à la courbe : \({f(3) = 6}\).  
Or \({f(3) = a \times 2^2 - 2 = 4a - 2}\), donc \({4a - 2 = 6}\), soit \({a = 2}\).  
\[
\boxed{f(x) = 2(x-1)^2 - 2}
\]
Vérification : \({f(0) = 2 - 2 = 0}\), ce qui correspond bien au passage de la courbe par l’origine.
{{% /details %}}
