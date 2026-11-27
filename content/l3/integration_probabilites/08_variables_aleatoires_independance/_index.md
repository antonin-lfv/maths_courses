---
title: 'Variables aléatoires et indépendance'
weight: 8
---

Les probabilités dans le langage de la théorie de la mesure : lois, espérance, indépendance, fonction caractéristique.

{{< sommaire >}}

{{% fiche %}}
**Dictionnaire** - probabilité = mesure de masse \(1\) ; variable aléatoire = fonction mesurable ; espérance = intégrale ; presque sûr = presque partout.

**Loi** - \({P_X(B) = P(X \in B)}\), mesure image. **Transfert** - \({E(g(X)) = \displaystyle\int g\,\mathrm{d}P_X}\).

**Densité** - \({P_X(B) = \displaystyle\int_B f}\) ; \({E(g(X)) = \displaystyle\int g(x)f(x)\,\mathrm{d}x}\).

**Indépendance** - \({P(X \in A, Y \in B) = P(X \in A)P(Y \in B)}\) \(\iff\) \({P_{(X, Y)} = P_X \otimes P_Y}\) \(\iff\) \({E(f(X)g(Y)) = E(f(X))E(g(Y))}\).

**Conséquences** - \({E(XY) = E(X)E(Y)}\) ; \({V(X + Y) = V(X) + V(Y)}\) ; densité de \({X + Y}\) : \({f_X * f_Y}\).

**Fonction caractéristique** - \({\varphi_X(t) = E(e^{itX})}\) ; caractérise la loi ; \({\varphi_{X+Y} = \varphi_X\varphi_Y}\) si indépendantes ; \({\varphi_X^{(k)}(0) = i^kE(X^k)}\).

**Références** - \(\mathcal{N}(m, \sigma^2)\) : \({e^{itm - \sigma^2t^2/2}}\) ; \(\mathcal{P}(\lambda)\) : \({e^{\lambda(e^{it} - 1)}}\) ; \(\mathcal{E}(\lambda)\) : \(\dfrac{\lambda}{\lambda - it}\).

**Borel-Cantelli** - \({\sum P(A_n) < \infty \Rightarrow P(\limsup A_n) = 0}\) ; indépendants et \({\sum P(A_n) = \infty \Rightarrow P(\limsup A_n) = 1}\).
{{% /fiche %}}
