---
title: 'Loi exponentielle'
weight: 4
cascade:
  type: docs
---

## Définition d’une loi exponentielle

> [!TIP] **Définition**
>
> Soit \(\lambda\) un réel strictement positif. Une variable aléatoire \(X\) suit la **loi exponentielle de paramètre \(\lambda\)** si sa fonction de densité \(f\) est définie par
> \[
f(x) = \lambda e^{-\lambda x} \ \text{ si } x \geq 0, \qquad f(x) = 0 \ \text{ sinon.}
\]

> [!IMPORTANT] **Remarques**
>
> - On note \(X \sim \mathcal{E}(\lambda)\).
> - Cette loi permet de modéliser la durée de vie de phénomènes « sans mémoire », « sans vieillissement » ou « sans usure » : durée de vie d’un composant électronique, temps d’attente entre deux appels, désintégration d’un atome radioactif…

{{% details title="Exemple" closed="true" %}}
Pour \(\lambda = 0{,}5\), la densité est \(f(x) = 0{,}5e^{-0{,}5x}\) sur \([0\,;\,+\infty[\). L’aire sous la courbe entre 0 et 2 représente \(P(X \leq 2)\).

![](/images/image357.png)
{{% /details %}}

> [!TIP] **Propriété**
>
> Soit \(X\) une variable aléatoire qui suit la loi exponentielle de paramètre \(\lambda > 0\). Sa fonction de répartition \(F\) est définie par
> \[
F(t) = 1 - e^{-\lambda t} \ \text{ si } t \geq 0, \qquad F(t) = 0 \ \text{ sinon.}
\]
> En particulier, pour \(t \geq 0\), \(P(X > t) = e^{-\lambda t}\).

{{% details title="Démonstration" closed="true" %}}
Pour \(t \geq 0\), une primitive de \(x \mapsto \lambda e^{-\lambda x}\) est \(x \mapsto -e^{-\lambda x}\), donc
\[
F(t) = P(X \leq t) = \int_0^t \lambda e^{-\lambda x}\,\mathrm{d}x = \left[-e^{-\lambda x}\right]_0^t = 1 - e^{-\lambda t}.
\]
Comme \(\lim\limits_{t \to +\infty} e^{-\lambda t} = 0\), l’aire totale sous la courbe vaut bien 1.
{{% /details %}}

> [!TIP] **Propriété (loi sans mémoire)**
>
> Soit \(X\) une variable aléatoire qui suit la loi exponentielle de paramètre \(\lambda > 0\). Pour tous réels \(t\) et \(s\) positifs :
> \[
P_{(X > t)}(X > t + s) = P(X > s).
\]

{{% details title="Démonstration" closed="true" %}}
\(\{X > t + s\} \subset \{X > t\}\), donc
\[
P_{(X > t)}(X > t + s) = \frac{P(X > t + s)}{P(X > t)} = \frac{e^{-\lambda(t + s)}}{e^{-\lambda t}} = e^{-\lambda s} = P(X > s).
\]
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Cette propriété caractérise les phénomènes « sans mémoire ». Par exemple, la probabilité qu’un atome radioactif ne soit pas désintégré à l’instant \(t + s\), sachant qu’il ne l’était pas à l’instant \(t\), est la même que la probabilité qu’il ne soit pas désintégré à l’instant \(s\).

## Espérance et variance d’une loi exponentielle

> [!TIP] **Propriétés (admises)**
>
> Soit \(X\) une variable aléatoire qui suit la loi exponentielle de paramètre \(\lambda > 0\) :
> \[
E(X) = \frac{1}{\lambda}, \qquad V(X) = \frac{1}{\lambda^2}, \qquad \sigma(X) = \frac{1}{\lambda}.
\]

## Utiliser une loi exponentielle

> [!NOTE] **Méthode 1 — Calculer des probabilités avec une loi exponentielle**
>
> La durée de vie, en heures, d’un composant suit une loi exponentielle d’espérance 2 000 heures.
> 1. Déterminer le paramètre \(\lambda\).
> 2. Calculer la probabilité que le composant dure plus de 1 000 heures, puis entre 1 000 et 3 000 heures.
> 3. Le composant a déjà fonctionné 1 500 heures. Quelle est la probabilité qu’il fonctionne encore au moins 1 000 heures ?

{{% details title="Solution commentée" closed="true" %}}
1. \(E(X) = \dfrac{1}{\lambda} = 2\,000\), donc \(\lambda = 0{,}0005\).
2. \(P(X > 1\,000) = e^{-0{,}5} \approx 0{,}607\). \(P(1\,000 \leq X \leq 3\,000) = F(3\,000) - F(1\,000) = e^{-0{,}5} - e^{-1{,}5} \approx 0{,}383\).
3. Par absence de mémoire : \(P_{(X > 1\,500)}(X > 2\,500) = P(X > 1\,000) = e^{-0{,}5} \approx 0{,}607\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Déterminer le paramètre à partir d’une probabilité**
>
> Le temps d’attente \(T\), en minutes, avant d’être servi dans un guichet suit une loi exponentielle. On sait que \(P(T \leq 10) = 0{,}3\). Déterminer le paramètre \(\lambda\), puis le temps d’attente moyen.

{{% details title="Solution commentée" closed="true" %}}
\(P(T \leq 10) = 1 - e^{-10\lambda} = 0{,}3 \iff e^{-10\lambda} = 0{,}7 \iff -10\lambda = \ln(0{,}7) \iff \lambda = -\dfrac{\ln(0{,}7)}{10} \approx 0{,}0357\).

Le temps d’attente moyen est \(E(T) = \dfrac{1}{\lambda} = -\dfrac{10}{\ln(0{,}7)} \approx 28\) minutes.
{{% /details %}}
