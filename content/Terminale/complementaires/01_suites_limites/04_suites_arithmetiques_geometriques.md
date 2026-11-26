---
title: 'Suites arithmétiques et géométriques'
weight: 4
cascade:
  type: docs
---

## Limite des suites arithmétiques

> [!TIP] **Propriété**
>
> Soit \((u_n)\) une suite arithmétique de premier terme \(u_0\) et de raison \(r\).
> - Si \(r > 0\), alors \(\displaystyle\lim_{n \to +\infty} u_n = +\infty\).
> - Si \(r < 0\), alors \(\displaystyle\lim_{n \to +\infty} u_n = -\infty\).
> - Si \(r = 0\), la suite est constante et \(\displaystyle\lim_{n \to +\infty} u_n = u_0\).

{{% details title="Démonstration" closed="true" %}}
Pour tout \(n\), \(u_n = u_0 + nr\).
- Si \(r > 0\) : \(\lim nr = +\infty\), donc, par somme avec la constante \(u_0\), \(\lim u_n = +\infty\).
- Si \(r < 0\) : \(\lim nr = -\infty\), donc \(\lim u_n = -\infty\).
- Si \(r = 0\) : \(u_n = u_0\) pour tout \(n\).
{{% /details %}}

## Limite des suites géométriques

> [!TIP] **Propriété (admise) — limite de \(q^n\)**
>
> Soit \(q\) un réel positif.
> - Si \(0 \leq q < 1\), alors \(\displaystyle\lim_{n \to +\infty} q^n = 0\).
> - Si \(q = 1\), alors \(q^n = 1\) pour tout \(n\) et \(\displaystyle\lim_{n \to +\infty} q^n = 1\).
> - Si \(q > 1\), alors \(\displaystyle\lim_{n \to +\infty} q^n = +\infty\).

> [!TIP] **Propriété — suite géométrique de raison \(q \geq 0\)**
>
> Soit \((u_n)\) une suite géométrique de premier terme \(u_0 \neq 0\) et de raison \(q \geq 0\), de sorte que \(u_n = u_0q^n\).
> - Si \(0 \leq q < 1\), alors \(\displaystyle\lim_{n \to +\infty} u_n = 0\).
> - Si \(q = 1\), alors \(\displaystyle\lim_{n \to +\infty} u_n = u_0\).
> - Si \(q > 1\), alors \(\displaystyle\lim_{n \to +\infty} u_n = +\infty\) si \(u_0 > 0\), et \(-\infty\) si \(u_0 < 0\).

> [!IMPORTANT] **Remarque**
>
> Pour \(-1 < q < 0\), on admet aussi que \(\lim q^n = 0\) ; pour \(q \leq -1\), la suite \((q^n)\) n’a pas de limite (ses termes changent de signe à chaque rang).

## Somme des termes d’une suite géométrique

> [!TIP] **Propriété**
>
> Soit \((u_n)\) une suite géométrique de premier terme \(u_0\) et de raison \(q\) telle que \(0 < q < 1\). La somme des \(n + 1\) premiers termes
> \[
S_n = u_0 + u_1 + \dots + u_n = u_0 \times \frac{1 - q^{n+1}}{1 - q}
\]
> vérifie
> \[
\lim_{n \to +\infty} S_n = \frac{u_0}{1 - q}.
\]

{{% details title="Démonstration" closed="true" %}}
Comme \(0 < q < 1\), \(\lim q^{n+1} = 0\), donc \(\lim (1 - q^{n+1}) = 1\). Par produit par la constante \(\dfrac{u_0}{1 - q}\), on obtient \(\lim S_n = \dfrac{u_0}{1 - q}\).
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
\(1 + \dfrac{1}{3} + \dfrac{1}{9} + \dots + \dfrac{1}{3^n}\) est la somme des \(n + 1\) premiers termes de la suite géométrique de premier terme 1 et de raison \(\frac{1}{3}\). Elle tend vers \(\dfrac{1}{1 - \frac{1}{3}} = \dfrac{3}{2}\).
{{% /details %}}

## Étudier des suites de référence

> [!NOTE] **Méthode 1 — Limite d’une suite arithmétique**
>
> 1. Déterminer la limite de la suite arithmétique de premier terme \(u_0 = -20\) et de raison \(0{,}5\).
> 2. Déterminer la limite de la suite \((v_n)\) définie par \(v_0 = 12\) et \(v_{n+1} = v_n - 3\) pour tout \(n\).

{{% details title="Solution commentée" closed="true" %}}
1. La raison \(0{,}5\) est strictement positive : \(\lim u_n = +\infty\) (le premier terme négatif ne change rien).
2. \(v_{n+1} - v_n = -3\) : \((v_n)\) est arithmétique de raison \(-3 < 0\), donc \(\lim v_n = -\infty\).
{{% /details %}}

> [!NOTE] **Méthode 2 — Limite d’une suite géométrique**
>
> Déterminer la limite des suites définies pour tout entier \(n\) par :
> 1. \(u_n = -2 \times 1{,}05^n\)
> 2. \(v_n = \dfrac{7}{4^n}\)

{{% details title="Solution commentée" closed="true" %}}
1. \((u_n)\) est géométrique de premier terme \(-2 < 0\) et de raison \(1{,}05 > 1\) : \(\lim 1{,}05^n = +\infty\), donc \(\lim u_n = -\infty\).
2. \(v_n = 7 \times \left(\dfrac{1}{4}\right)^n\) avec \(0 < \dfrac{1}{4} < 1\) : \(\lim \left(\dfrac{1}{4}\right)^n = 0\), donc \(\lim v_n = 0\).
{{% /details %}}

> [!NOTE] **Méthode 3 — Limite d’une somme de termes**
>
> Un ballon est lâché d’une hauteur de 2 m. À chaque rebond, il remonte aux \(\frac{3}{5}\) de la hauteur précédente. On note \(h_n\) la hauteur atteinte après le \(n\)-ième rebond (\(h_0 = 2\)). Déterminer la limite de la somme \(S_n = h_0 + h_1 + \dots + h_n\).

{{% details title="Solution commentée" closed="true" %}}
\((h_n)\) est géométrique de premier terme 2 et de raison \(\frac{3}{5}\), avec \(0 < \frac{3}{5} < 1\). Donc
\[
S_n = 2 \times \frac{1 - \left(\frac{3}{5}\right)^{n+1}}{1 - \frac{3}{5}} = 5\left(1 - \left(\frac{3}{5}\right)^{n+1}\right) \quad \text{et} \quad \lim_{n \to +\infty} S_n = \frac{2}{1 - \frac{3}{5}} = 5.
\]
La somme des hauteurs atteintes se rapproche de 5 m.
{{% /details %}}
