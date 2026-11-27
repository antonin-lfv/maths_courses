---
title: 'Limites et opérations'
weight: 2
cascade:
  type: docs
---

Dans ce paragraphe, \((u_n)\) et \((v_n)\) sont deux suites, \(\ell\) et \(\ell'\) deux réels. Le symbole \(\infty\) désigne \({+\infty}\) ou \({-\infty}\).

## Somme

> [!TIP] **Propriété (admise)**  
> 
> | Si \({\lim\limits_{n \to +\infty} u_n = \dots}\) | \(\ell\) | \(\ell\) | \(\ell\) | \({+\infty}\) | \({-\infty}\) | \({+\infty}\) |  
> |:------------------------------------------------:|:----------:|:----------:|:-------------:|:-------------:|:-------------:|:-------------:|
> | et \({\lim\limits_{n \to +\infty} v_n = \dots}\) | \(\ell'\) | \({+\infty}\) | \({-\infty}\) | \({+\infty}\) | \({-\infty}\) | \({-\infty}\) |   
> | alors \({\lim\limits_{n \to +\infty} (u_n + v_n) = \dots}\) | \({\ell + \ell'}\) | \({+\infty}\) | \({-\infty}\) | \({+\infty}\) | \({-\infty}\) | **Forme indéterminée** |  

> [!IMPORTANT] **Remarques**  
> - Face à une forme indéterminée (« \({+\infty - \infty}\) »), on cherche une autre écriture de \({u_n + v_n}\) (factorisation, par exemple).  
> - Pour un réel \(\alpha\), la limite de \({(u_n + \alpha)}\) s’obtient avec ce tableau en prenant pour \((v_n)\) la suite constante égale à \(\alpha\).

## Produit

> [!TIP] **Propriété (admise)**  
> 
> | Si \({\lim\limits_{n \to +\infty} u_n = \dots}\) | \(\ell\) | \({\ell \neq 0}\) | \(\infty\) | 0 |  
> |:------------------------------------------------:|:----------:|:----------:|:-------------:|:-------------:|  
> | et \({\lim\limits_{n \to +\infty} v_n = \dots}\) | \(\ell'\) | \(\infty\)       | \(\infty\) | \(\infty\) |  
> | alors \({\lim\limits_{n \to +\infty} (u_n \times v_n) = \dots}\) | \({\ell \times \ell'}\) | \(\infty\) | \(\infty\) | **Forme indéterminée** |  

> [!IMPORTANT] **Remarques**  
> - Lorsque le tableau donne \(\infty\), on détermine le signe (\({+\infty}\) ou \({-\infty}\)) avec la règle des signes d’un produit.  
> - Pour un réel \({k \neq 0}\), la limite de \((k u_n)\) s’obtient en prenant pour \((v_n)\) la suite constante égale à \(k\).

## Quotient

> [!TIP] **Propriété (admise)**  
> 
> | Si \({\lim\limits_{n \to +\infty} u_n = \dots}\) | \(\ell\) | \(\ell\) | \(\infty\) | \({\ell \neq 0}\) ou \(\infty\) | 0 | \(\infty\) |  
> |:------------------------------------------------:|:----------:|:----------:|:-------------:|:-------------:|:-------------:|:-------------:|
> | et \({\lim\limits_{n \to +\infty} v_n = \dots}\) | \({\ell' \neq 0}\) | \(\infty\) | \({\ell' \neq 0}\) | 0, avec \(v_n\) de signe constant | 0 | \(\infty\) |  
> | alors \({\lim\limits_{n \to +\infty} \dfrac{u_n}{v_n} = \dots}\) | \(\dfrac{\ell}{\ell'}\) | 0 | \(\infty\) | \(\infty\) | **Forme indéterminée** | **Forme indéterminée** |  

> [!IMPORTANT] **Remarque**  
> Lorsque \({\lim\limits_{n \to +\infty} v_n = 0}\) (et que \((u_n)\) tend vers un réel non nul ou vers \(\infty\)), on ne peut conclure que si \(v_n\) garde un signe constant à partir d’un certain rang : la règle des signes donne alors \({+\infty}\) ou \({-\infty}\). Sinon, le quotient peut n’avoir aucune limite.

En résumé, les quatre **formes indéterminées** sont : « \({+\infty - \infty}\) », « \({0 \times \infty}\) », « \(\dfrac{\infty}{\infty}\) » et « \(\dfrac{0}{0}\) ».

## Déterminer une limite en utilisant les opérations

> [!NOTE] **Méthode 1 - Déterminer une limite en utilisant les opérations**  
> Déterminer la limite des suites définies pour tout entier naturel \(n\) par :  
> 1. \({u_n = n^3 + 2n + 7}\)  
> 2. \({v_n = (1 - 4n)\,n^2}\)  

{{% details title="Solution commentée" closed="true" %}}
**1.**  
\[
\begin{gathered}
\lim_{n \to +\infty} n = +\infty \qquad \text{donc, par produit, } \lim_{n \to +\infty} 2n = +\infty, \\[0.3em]
\text{puis, par somme, } \lim_{n \to +\infty} (2n + 7) = +\infty.
\end{gathered}
\]  

\[
\lim_{n \to +\infty} n^3 = +\infty \quad \text{et} \quad \lim_{n \to +\infty} (2n + 7) = +\infty,
\]  
donc, par somme, \({\lim\limits_{n \to +\infty} u_n = +\infty}\).  

---

**2.**  
\[
\begin{gathered}
\lim_{n \to +\infty} n = +\infty, \\[0.3em]
\text{donc, par produit (règle des signes), } \lim_{n \to +\infty} (-4n) = -\infty,
\end{gathered}
\]  
puis, par somme, \({\lim\limits_{n \to +\infty} (1 - 4n) = -\infty}\).  

\[
\lim_{n \to +\infty} (1 - 4n) = -\infty \quad \text{et} \quad \lim_{n \to +\infty} n^2 = +\infty,
\]  
donc, par produit et règle des signes, \({\lim\limits_{n \to +\infty} v_n = -\infty}\).
{{% /details %}}

## Lever une indétermination

> [!NOTE] **Méthode 2 - Lever une indétermination**  
> On considère les suites \((u_n)\) et \((v_n)\) définies pour tout entier naturel \(n\) par :  
> \[
u_n = 2n^2 - 7n + 1 \quad \text{et} \quad v_n = \dfrac{5 - 3n}{n + 2}.
\]  
> 1. Montrer que, pour chacune de ces suites, les règles opératoires ne permettent pas de conclure directement.  
> 2. En transformant l’écriture de leur terme général, déterminer leurs limites.  

{{% details title="Solution commentée" closed="true" %}}
**1.**  

Pour \((u_n)\) : par produit, \({\lim\limits_{n \to +\infty} 2n^2 = +\infty}\) et \({\lim\limits_{n \to +\infty} (-7n) = -\infty}\), donc, par somme, \({\lim\limits_{n \to +\infty} (-7n + 1) = -\infty}\).  
On obtient une forme « \({+\infty - \infty}\) » : on ne peut pas conclure.  

Pour \((v_n)\) : \({\lim\limits_{n \to +\infty} (5 - 3n) = -\infty}\) et \({\lim\limits_{n \to +\infty} (n + 2) = +\infty}\).  
On obtient une forme « \(\dfrac{\infty}{\infty}\) » : on ne peut pas conclure.  

---

**2.** Pour \((u_n)\), on factorise par le terme de plus haut degré, \(n^2\) (pour \({n \geq 1}\)) :  
\[
u_n = n^2 \left(2 - \dfrac{7}{n} + \dfrac{1}{n^2}\right).
\]  
Par quotient, \({\lim\limits_{n \to +\infty} \dfrac{7}{n} = 0}\) et \({\lim\limits_{n \to +\infty} \dfrac{1}{n^2} = 0}\) ; par somme, \({\lim\limits_{n \to +\infty} \left(2 - \dfrac{7}{n} + \dfrac{1}{n^2}\right) = 2}\).  
Comme \({\lim\limits_{n \to +\infty} n^2 = +\infty}\), par produit :  
\[
\lim_{n \to +\infty} u_n = +\infty.
\]  

---

Pour \((v_n)\), on factorise par \(n\) au numérateur et au dénominateur (pour \({n \geq 1}\)) :  
\[
v_n = \dfrac{n\left(\dfrac{5}{n} - 3\right)}{n\left(1 + \dfrac{2}{n}\right)} = \dfrac{\dfrac{5}{n} - 3}{1 + \dfrac{2}{n}}.
\]  
Par quotient, \({\lim\limits_{n \to +\infty} \dfrac{5}{n} = 0}\) et \({\lim\limits_{n \to +\infty} \dfrac{2}{n} = 0}\).  
Par somme, le numérateur tend vers \({-3}\) et le dénominateur vers 1 ; par quotient :  
\[
\lim_{n \to +\infty} v_n = -3.
\]  
{{% /details %}}
